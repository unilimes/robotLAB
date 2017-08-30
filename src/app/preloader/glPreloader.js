import {Utils} from "../utils.js"
export class Preloader {

    constructor(main) {
        this.main = main;
        this._data = {};
        this.preloader = document.createElement('div');
        this.preloader.className = "preloader-template active";
        this.preloader.innerHTML = '<div class="cssload-thecube"  >' +
            '<div class="cssload-cube cssload-c1"></div>' +
            '<div class="cssload-cube cssload-c2"></div>' +
            '<div class="cssload-cube cssload-c4"></div>' +
            '<div class="cssload-cube cssload-c3"></div>' +
            '</div>';
        let _canvas = this.preloaderStatus = document.createElement('canvas');
        this.preloaderInfo = document.createElement('p');
        this.preloaderInfo.style.textAlign='center';
        this.preloader.appendChild(this.preloaderInfo);
        this.preloader.appendChild(this.preloaderStatus);
        main.container.appendChild(this.preloader);

        this.cntx = _canvas.getContext('2d');
        _canvas.height = _canvas.width;
        this._data._W = _canvas.width;
        this._data._H = _canvas.height;
        this.cntx.lineWidth = 5;
        this.cntx.strokeStyle = '#6f2727';
        this.cntx.shadowOffsetX = 0;
        this.cntx.shadowOffsetY = 0;
        this.cntx.shadowBlur = 10;
        this.cntx.shadowColor = '#656565';
    }

    onDestroy(){
        Utils.Config.removeChildNodes(this.preloader);
    }
    onUpdatePreloaderStatus(value) {
        let context = this.cntx,
            centerX = this._data._W / 2,
            centerY = this._data._H / 2,
            radius = centerX - context.shadowBlur;

        context.clearRect(0, 0, this._data._W, this._data._H);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI * value, false);
        context.stroke();
    }

    fade(show) {
        this.preloader.className = show ? 'preloader-template active' : 'preloader-template';
        if (!show)this.main.refresh();
        return this;
    }

}