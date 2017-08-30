export class Config {


    static  randomInteger(min = 0, max = Date.now()) {
        return Math.round(min + Math.random() * (max - min))
    }

    static randomstr() {
        return Math.random().toString(36).replace(/[^a-z]+/g, '');
    }

    static onEventPrevent(event) {
        event.preventDefault();
        return false;
    }

    static removeChildNodes(parent) {
        [].forEach.call(parent.children, function (child) {
            Config.removeChildNodes(child);

            // remove if it matches selector
            if (child.matches(':empty')) {
                parent.removeChild(child);
            }
        });
    }


}
Config.DELIMETER = "/";
Config.EVENTS_NAME = {
    FULLSCREEN: {
        WEB_KIT: "webkitfullscreenchange",
        MOZ: "mozfullscreenchange",
        DEF: "fullscreenchange",
    },
    DRAG: {
        DROP: 'drop',
        OVER: 'dragover',
    },
    KEY: {
        DOWN: 'keydown',
        UP: 'keyup',
    },
    CNTXMENU: 'contextmenu',

    CHANGE: 'change',
    RESIZE: 'resize',
    DB_CLICK: 'dblclick',
    SELECT_START: 'selectstart',
    CLICK: 'click',
    TOUCH_START: 'touchstart',
    TOUCH_MOVE: 'touchmove',
    TOUCH_END: 'touchend',
    MOUSE_OUT: 'mouseout',
    MOUSE_DOWN: 'mousedown',
    MOUSE_MOVE: 'mousemove',
    MOUSE_UP: 'mouseup'
};
Config.ACCES_ORIGIN = {
    EMPTY: '',
    ANONYM: 'anonymos',
    WITH_CRED: 'use-credentials'
};
Config.MAT_MAPS = ['map', "normalMap", "bumpMap", "metalnessMap", "roughnessMap", "displacementMap"];
Config.CUR_PROJ = 'assets/js/uniApp/build/';
Config.ASSETS = 'assets/';
Config.OBJ_STORAGE = Config.ASSETS + 'models/my_models/';
Config.IMG_STORAGE = Config.ASSETS + 'images/';
Config.TEXTURE_STORAGE = Config.IMG_STORAGE + 'Materials/';
Config.UI_STORAGE = Config.IMG_STORAGE/*'./assets/images/'*/ + 'ui/';
Config.DOMAIN = 'http://54.164.221.209';
Config.MODELS = {

    URL: {
        MAIN: Config.DOMAIN + ':8080/poly9/',
        DEV_APP: Config.DOMAIN /*location.protocol+"//"+location.hostname*/ + ':3009/public/uploadImg',
        ROOMS: Config.OBJ_STORAGE + 'rooms/',
        CUPS: Config.OBJ_STORAGE + 'cups/',
        CUPS_DECOR: Config.OBJ_STORAGE + 'cups_decor/',
    },
    TYPES: {MESH: 'Mesh', MATERIAL: 'material'},
    CATEGORY: {
        INNER: 'inner-from',
        EDITABLE_MAT: '--bla-bla-1'
    }
};
Config.FACTOR = {
    MATERIALS: 'https://s3.ap-south-1.amazonaws.com/p9-platform/images/',
    MODELS: 'https://s3.ap-south-1.amazonaws.com/p9-platform/Models/',
};
Config.FILE = {
    DIR: {
        CURRENT: '.',
        PREVIOUS: '',
        DELIMETER: "/",
        PROJECT_ROOM_PREVIEW: 'assets/images/rooms/',
        PROJECT_ROOM_MODELS: 'assets/models/rooms/',
        PROJECT_TEMPLATE: {
            NAME: 'assets/templates/',
            CSS: 'style.css',
            HTML: 'index.html',
            JS: 'index.js',
            TYPES: ['controls/', 'tooltip/', 'preloader/'],
            _TYPE: {
                PRELOADER: 2,
                TOOLTIP: 1,
                CONTROLS: 0,
            }

        },
        PREVIEW: {
            LOW: 'low/',
            WEBP: 'webp/',
        }
    }

};