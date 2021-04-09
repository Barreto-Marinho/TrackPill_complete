(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seguimiento-seguimiento-module"],{

/***/ "HN5U":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seguimiento/seguimiento.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-button [routerLink]=\"['/folder/ ']\" class=\"Volver\">\n      <ion-icon class=\"volverse\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title class=\"ion-no-border\">Seguimiento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\">\n  <ion-row  style=\"background-color: #3d8af7;\"> \n    <ion-button (click)=\"atras()\" class=\"atra\">\n      <ion-icon  class=\"flechas\" name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-label class=\"dia\">{{dias}} </ion-label>\n    <ion-button (click)=\"Adelante()\" class=\"adel\">\n      <ion-icon class=\"flechas\" name=\"arrow-forward\"></ion-icon>\n    </ion-button>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "JuFD":
/*!*************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.page.ts ***!
  \*************************************************/
/*! exports provided: SeguimientoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPage", function() { return SeguimientoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_seguimiento_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./seguimiento.page.html */ "HN5U");
/* harmony import */ var _seguimiento_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seguimiento.page.scss */ "W7wo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SeguimientoPage = class SeguimientoPage {
    constructor() {
        this.dias = "Lunes";
        this.cont_dia = 1;
    }
    ngOnInit() {
    }
    Adelante() {
        this.cont_dia = this.cont_dia + 1;
        if (this.cont_dia > 6) {
            this.cont_dia = 1;
        }
        this.impri_dia();
    }
    atras() {
        this.cont_dia = this.cont_dia - 1;
        if (this.cont_dia < 1) {
            this.cont_dia = 7;
        }
        this.impri_dia();
    }
    impri_dia() {
        switch (this.cont_dia) {
            case 1: {
                this.dias = "Lunes";
                break;
            }
            case 2: {
                this.dias = "Martes";
                break;
            }
            case 3: {
                this.dias = "Miercoles";
                break;
            }
            case 4: {
                this.dias = "Jueves";
                break;
            }
            case 5: {
                this.dias = "Viernes";
                break;
            }
            case 6: {
                this.dias = "Sabado";
                break;
            }
            case 7: {
                this.dias = "Domingo";
                break;
            }
        }
    }
};
SeguimientoPage.ctorParameters = () => [];
SeguimientoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-seguimiento',
        template: _raw_loader_seguimiento_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_seguimiento_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SeguimientoPage);



/***/ }),

/***/ "Np1a":
/*!***********************************************************!*\
  !*** ./src/app/seguimiento/seguimiento-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SeguimientoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPageRoutingModule", function() { return SeguimientoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _seguimiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seguimiento.page */ "JuFD");




const routes = [
    {
        path: '',
        component: _seguimiento_page__WEBPACK_IMPORTED_MODULE_3__["SeguimientoPage"]
    }
];
let SeguimientoPageRoutingModule = class SeguimientoPageRoutingModule {
};
SeguimientoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeguimientoPageRoutingModule);



/***/ }),

/***/ "W7wo":
/*!***************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\n.volverse {\n  font-size: 330%;\n}\n\nion-title {\n  position: absolute;\n  top: 30%;\n  right: 30%;\n  color: #140b0a;\n}\n\n.dia {\n  width: 30%;\n  text-align: center;\n}\n\n.Volver {\n  --color:#140b0a;\n  width: 18%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n}\n\n.flechas {\n  font-size: 200%;\n}\n\n.atra {\n  --color:#140b0a;\n  width: 30%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n  padding-left: 5%;\n}\n\n.adel {\n  --color:#140b0a;\n  width: 30%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n}\n\nion-row {\n  position: relative;\n  left: 5%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlZ3VpbWllbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFBRTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBR047O0FBQUU7RUFDRyxVQUFBO0VBQ0Msa0JBQUE7QUFHTjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQztFQUNHLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUFKIiwiZmlsZSI6InNlZ3VpbWllbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzNkOGFmNztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICB9XHJcbiAgLnZvbHZlcnNle1xyXG4gICAgZm9udC1zaXplOiAzMzAlO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICAgIHJpZ2h0OiAzMCU7XHJcbiAgICAgIGNvbG9yOiAjMTQwYjBhO1xyXG4gIH1cclxuXHJcbiAgLmRpYXtcclxuICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuVm9sdmVyIHtcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICAgIGhlaWdodDogNyU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG5cclxuICAuZmxlY2hhc3tcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICB9XHJcblxyXG4gIC5hdHJhe1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgaGVpZ2h0OiA3JTtcclxuICAgIC0tYmFja2dyb3VuZDogIzNkOGFmNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gLmFkZWx7XHJcbiAgICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3JpZ2h0OiAxJTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgaW9uLXJvd3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6NSU7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "e8ug":
/*!***************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.module.ts ***!
  \***************************************************/
/*! exports provided: SeguimientoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPageModule", function() { return SeguimientoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _seguimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seguimiento-routing.module */ "Np1a");
/* harmony import */ var _seguimiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seguimiento.page */ "JuFD");







let SeguimientoPageModule = class SeguimientoPageModule {
};
SeguimientoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seguimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeguimientoPageRoutingModule"]
        ],
        declarations: [_seguimiento_page__WEBPACK_IMPORTED_MODULE_6__["SeguimientoPage"]]
    })
], SeguimientoPageModule);



/***/ })

}]);
//# sourceMappingURL=seguimiento-seguimiento-module.js.map