'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    //rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    babelify = require("babelify"),
    watchify = require("watchify"),
    browserify = require("browserify"),
    rename = require("gulp-rename"),
    inject = require('gulp-inject-string'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    cssnano = require('gulp-cssnano'),
    merge = require('event-stream').merge,
    typescript = require('gulp-typescript'),
    reload = browserSync.reload;

var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');

function guidGenerator() {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}
var path = {
    build: {
        js: 'build/',
        img: 'build/assets/images/'
    },
    src: {
        js: 'src/app/main.js',
        style: ['src/app/**/*.scss','src/libs/**/*.scss','src/app/**/*.sass'],
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    out:{
        js:{origin:'main.js',hash:guidGenerator()+ '.js'},
        style:{origin:'style.css',hash:guidGenerator()+ '.css'},
    },
    watch: {
        js: ['src/app/**/*.js','src/app/libs/**/*.js'],
        style: ['src/app/**/*.scss','src/libs/**/*.scss','src/app/**/*.sass'],
        img: 'src/images/**/*.*',
    },
    clean: './build'
};



gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


gulp.task('style:build', function () {
    var csslibs =  gulp.src([
        'src/libs/styles.css'
    ])
        .pipe(concat('vendors.css'));

    var sassS = gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['src/'],
            outputStyle: 'compressed',
            sourceMap: true,
            errLogToConsole: true
        }).on('error', sass.logError))
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(cssnano())
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }));


    return merge(sassS,csslibs)
        .pipe(concat("styles.css"))
        //.pipe(concat(path.out.style.hash))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(notify({ message: 'Styles task complete' }))
        .pipe(reload({stream: true}));
});
gulp.task('js:build', function () {
    // del.sync(path.build.js);

    var paths = "./assets/libs/",
        jslibs =  gulp.src([
            paths+"tween.min.js",
            paths+"alertify.js",
            paths+"dat.gui.min.js",
            paths+"threejs/three.js",
            paths+"threejs/DDSLoader.js",
            paths+"threejs/MTLLoader.js",
            paths+"threejs/OBJLoader.js",
            paths+"threejs/ColladaLoader.js",
            paths+"threejs/TransformControls.js",
            paths+"threejs/OrbitControls.js",
            paths+"threejs/stats.min.js",

    ])
            .on('error', function(err) { console.error(err); })
        .pipe(concat('vendors.js'));

    var jse6 = browserify(path.src.js, { debug: false }).transform(babelify, {
        presets: ["es2015"],
        plugins: ["transform-class-properties"]
    }).bundle()
        .on('error', function(err) { console.error(err); this.emit('end'); })
        .pipe(source('build.js'))
        //.pipe(uglify())
        // .pipe(rigger())
        .pipe(buffer());

    return merge(jslibs,jse6)
        //.pipe(concat(path.out.js.hash))
        .pipe(concat('build.js'))
        //.pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(notify({ message: 'JS task complete' }))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    // del.sync(path.build.img);
    gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        //.pipe(notify({ message: 'Images task complete' }))
        .pipe(reload({stream: true}));
});


gulp.task('clean', function() {
    return  del.sync([ path.build.js ])
});

gulp.task('build', [
    'clean',
    'js:build',
    'style:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch(path.watch.js, function(event, cb) {
        gulp.start('js:build');
    });
    watch(path.watch.style, function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
});


gulp.task('default', ['build', 'watch']);