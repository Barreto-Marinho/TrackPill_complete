(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compart1-compart1-module"],{

/***/ "ECdh":
/*!*****************************************************!*\
  !*** ./src/app/compart1/compart1-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Compart1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1PageRoutingModule", function() { return Compart1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _compart1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compart1.page */ "Wj/0");




const routes = [
    {
        path: '',
        component: _compart1_page__WEBPACK_IMPORTED_MODULE_3__["Compart1Page"]
    }
];
let Compart1PageRoutingModule = class Compart1PageRoutingModule {
};
Compart1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Compart1PageRoutingModule);



/***/ }),

/***/ "K9Cd":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compart1/compart1.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-button [routerLink]=\"['/folder/ ']\" class=\"Volver\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title>Compartimento 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\">\n    <ion-col> \n      <ion-row>\n      <div class=\"item\">\n        <label class=\"labels\" >Marca:</label>\n        <ion-input  placeholder=\"Ingresa marca\" ></ion-input></div>  </ion-row>\n        <ion-row><div class=\"item\">\n        <label class=\"labels\"  >Medicamento:</label>\n        <ion-input  placeholder=\"Ingresa medicamento\" ></ion-input></div> </ion-row>\n        <ion-row><div class=\"item\">\n        <label class=\"labels\">N° Pastillas:</label>\n        <ion-input  placeholder=\"Ingresa numero de pastillas\"></ion-input></div> </ion-row>\n        <ion-row><div class=\"item\">\n        <label class=\"labels\">Patillas tratamiento:</label>\n        <ion-input placeholder=\"Ingresa pastillas tratamiento\"></ion-input></div></ion-row> \n        <ion-row><div class=\"item\">\n        <label class=\"labels\">Temperatura maxima:</label>\n        <ion-input placeholder=\"Ingresa temperatura max\" ></ion-input></div> </ion-row>\n        <ion-row><div class=\"item\">\n        <label class=\"labels\">Humedad maxima:</label>\n        <ion-input placeholder=\"Ingresa humedad maxima\" ></ion-input></div> </ion-row>\n    </ion-col>\n</ion-content>\n");

/***/ }),

/***/ "Sa0J":
/*!*********************************************!*\
  !*** ./src/app/compart1/compart1.module.ts ***!
  \*********************************************/
/*! exports provided: Compart1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1PageModule", function() { return Compart1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _compart1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compart1-routing.module */ "ECdh");
/* harmony import */ var _compart1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compart1.page */ "Wj/0");







let Compart1PageModule = class Compart1PageModule {
};
Compart1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _compart1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Compart1PageRoutingModule"]
        ],
        declarations: [_compart1_page__WEBPACK_IMPORTED_MODULE_6__["Compart1Page"]]
    })
], Compart1PageModule);



/***/ }),

/***/ "SmpK":
/*!*********************************************!*\
  !*** ./src/app/compart1/compart1.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-icon {\n  font-size: 330%;\n}\n\nion-title {\n  position: absolute;\n  top: 30%;\n  right: 20%;\n  color: #140b0a;\n}\n\n.Volver {\n  --background:#3d8af7;\n  --background-activated:#63a3fc;\n  --color:#140b0a;\n  /*position: absolute;\n  top: 0%;\n  left: 0%;*/\n  width: 18%;\n  --box-shadow:none;\n  height: 7%;\n}\n\nion-col {\n  position: absolute;\n  top: 10%;\n  left: 12.5%;\n}\n\nion-row {\n  padding-top: 2%;\n}\n\n.item {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbXBhcnQxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtBQUNKOztBQUVFO0VBQ0UsOEJBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBOztZQUFBO0VBR0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJjb21wYXJ0MS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAzMzAlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgY29sb3I6ICMxNDBiMGE7XHJcbn1cclxuXHJcbiAgLlZvbHZlciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IzNkOGFmNztcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzYzYTNmYztcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIC8qcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDAlOyovXHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gIH1cclxuXHJcblxyXG5pb24tY29se1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3AgOjEwJTtcclxuICAgIGxlZnQ6IDEyLjUlO1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgd2lkdGg6NzUlO1xyXG4gIHBhZGRpbmctYm90dG9tOjAlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "Wj/0":
/*!*******************************************!*\
  !*** ./src/app/compart1/compart1.page.ts ***!
  \*******************************************/
/*! exports provided: Compart1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1Page", function() { return Compart1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_compart1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./compart1.page.html */ "K9Cd");
/* harmony import */ var _compart1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compart1.page.scss */ "SmpK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Compart1Page = class Compart1Page {
    constructor() { }
    ngOnInit() {
    }
};
Compart1Page.ctorParameters = () => [];
Compart1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-compart1',
        template: _raw_loader_compart1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_compart1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Compart1Page);



/***/ })

}]);
//# sourceMappingURL=compart1-compart1-module.js.map