(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Se inicia el encabezado de la pagina-->  \r\n<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar > <!--Se configura la toolbar-->  \r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button> \r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content [fullscreen]=\"true\"> <!--Se usa la aplicacion en toda la pantalla-->  \r\n  <ion-img src=\"assets/icon/logo.png\"></ion-img> <!--Se coloca una imagen alojada en la carpeta assets-->  \r\n  <ion-row class=\"row2\"> <!--Se inicia la segunda columna-->  \r\n    <ion-col class=\"col1\" > \r\n      <ion-row class=\"row1\"><ion-button [routerLink]=\"['/compart1']\" class=\"Comp1\">1</ion-button> </ion-row>\r\n      <ion-row class=\"row1\"><ion-button class=\"Comp3\">3</ion-button> </ion-row>\r\n      <ion-row class=\"row1\">  <ion-button class=\"Comp5\">5</ion-button> </ion-row>\r\n    </ion-col>\r\n    <ion-col class=\"col2\">  <!--se inicia la columna 2-->  \r\n      <ion-row class=\"row1\"><ion-button class=\"Comp2\">2</ion-button> </ion-row>\r\n      <ion-row class=\"row1\"><ion-button class=\"Comp4\">4</ion-button> </ion-row>\r\n      <ion-row class=\"row1\"><ion-button class=\"Comp6\">6</ion-button> </ion-row>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-button [routerLink]=\"['/seguimiento']\"  class=\"seg_boton\">Seguimiento</ion-button> <!--Al presionar el boton se redirige a otra pantalla -->  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/folder-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/folder/folder-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FolderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function() { return FolderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");




const routes = [
    {
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
    }
];
let FolderPageRoutingModule = class FolderPageRoutingModule {
};
FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FolderPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/folder.module.ts":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.module.ts ***!
  \*****************************************/
/*! exports provided: FolderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPageModule", function() { return FolderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folder-routing.module */ "./src/app/folder/folder-routing.module.ts");
/* harmony import */ var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folder.page */ "./src/app/folder/folder.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let FolderPageModule = class FolderPageModule {
};
FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
    })
], FolderPageModule);



/***/ }),

/***/ "./src/app/folder/folder.page.scss":
/*!*****************************************!*\
  !*** ./src/app/folder/folder.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: #010202;\n}\n\nion-toolbar {\n  --background: #3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-img {\n  width: 90%;\n  height: 15%;\n  padding-left: 8%;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.row2 {\n  height: 35%;\n  padding-top: 10%;\n}\n\n.row1 {\n  padding-top: 10%;\n  height: 70%;\n}\n\n.col1 {\n  padding-left: 10%;\n  width: 37%;\n  padding-top: 0%;\n}\n\n.col2 {\n  padding-right: 10%;\n  width: 37%;\n  padding-top: 0%;\n}\n\n.Comp1 {\n  --background:#ff5d55;\n  --background-activated:#fd6e67;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.Comp2 {\n  --background:#77dd77;\n  --background-activated:#9cda9c;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.Comp3 {\n  --background:#ffc581;\n  --background-activated:#ffd3a1;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.Comp4 {\n  --background:#fef67f;\n  --background-activated:#fcf6a6;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.Comp5 {\n  --background:#0c59cf;\n  --background-activated:#3874ce;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.Comp6 {\n  --background:#e692f8;\n  --background-activated:#eab9f5;\n  --color:#140b0a;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-weight: 1000;\n  font-size: 300%;\n}\n\n.seg_boton {\n  --background:#ffc581;\n  --background-activated:#fdd6a9;\n  --color:#140b0a;\n  position: absolute;\n  bottom: 2%;\n  right: 4%;\n  width: 30%;\n  height: 6%;\n  font-weight: 1000;\n  font-size: 90%;\n  border-width: 2.5px;\n  border-style: solid;\n  border-color: black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL0M6XFxVc2Vyc1xceGJveGtcXE9uZURyaXZlXFxEb2N1bWVudG9zXFw3dG1vX3NlbWVzdHJlXFxJT1RcXEFwbGljYWNpb25cXFRyYWNrcGlsbC9zcmNcXGFwcFxcZm9sZGVyXFxmb2xkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUNERjs7QURLQTtFQUNFLHFCQUFBO0FDRkY7O0FES0E7RUFDRSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7QUNGRjs7QURJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBREdBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRENBO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvZm9sZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVuIGVzdGUgY29kaWdvIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBsb3MgZWxlbWVudG9zIGRlIGxhIHBhZ2luYSAgIFxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHsgIC8vIHNlIGNvbmZpZ3VyYSBlbCBib3RvbiBkZSBtZW51XHJcbiAgY29sb3I6ICMwMTAyMDI7IC8vIGNvbG9yIGRlbCBib3RvblxyXG59XHJcblxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzNkOGFmNzsgLy8gZm9uZG8gZGVsIHRvb2xiYXJcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3OyAvLyBTZSBkZWZpbmUgZWwgY29sb3IgZGUgZm9uZG8gZGVsIGhlYWRlciBcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgeyAvLyBTZSBkZWZpbmUgZWwgZm9uZG8gZGVsIGNvbnRlbmlkbyBkZSBsYSBwYWdpbmFcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbn1cclxuaW9uLWltZ3sgLy8gc2UgY29uZmlndXJhIGVsIHRhbWHDsW8geSBsYSBwb3NpY2lvbiBkZSBsYSBpbWFnZW4gdXNhZGFcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTUlO1xyXG4gIHBhZGRpbmctbGVmdDogOCU7XHJcbn1cclxuXHJcbiNjb250YWluZXIgeyAvLyBzZSBjb25maWd1cmFuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgcG9zaWNpb24gZGVsIG9iamV0b1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHsgLy8gc2UgY29uZmlndXJhbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlIHBvc2ljaW9uIGRlbCBvYmpldG9cclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiB5IGNvbG9yIGRlbCBvYmpldG9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEgeyAvLyBzZSBjb25maWd1cmFuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgcG9zaWNpb24gZGVsIG9iamV0b1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnJvdzJ7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiBkZWwgb2JqZXRvXHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgcGFkZGluZy10b3A6MTAlO1xyXG59XHJcblxyXG4ucm93MXsgLy8gc2UgY29uZmlndXJhbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlIHBvc2ljaW9uIGRlbCBvYmpldG9cclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4uY29sMXsgLy8gc2UgY29uZmlndXJhbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlIHBvc2ljaW9uIGRlbCBvYmpldG9cclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICB3aWR0aDogMzclO1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxufVxyXG5cclxuLmNvbDJ7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiBkZWwgb2JqZXRvXHJcbiAgcGFkZGluZy1yaWdodDoxMCUgO1xyXG4gIHdpZHRoOiAzNyU7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG59XHJcblxyXG4uQ29tcDEgeyAvLyBzZSBjb25maWd1cmFuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgcG9zaWNpb24sIGNvbG9yIHkgZnVlbnRlIGRlbCBvYmpldG9cclxuICAtLWJhY2tncm91bmQ6I2ZmNWQ1NTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZDZlNjc7XHJcbiAgLS1jb2xvcjojMTQwYjBhO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgZm9udC1zaXplOjMwMCUgO1xyXG59XHJcbi5Db21wMiB7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiwgY29sb3IgeSBmdWVudGUgZGVsIG9iamV0b1xyXG4gIC0tYmFja2dyb3VuZDojNzdkZDc3O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzljZGE5YztcclxuICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXNpemU6MzAwJSA7XHJcbn1cclxuLkNvbXAzIHsgLy8gc2UgY29uZmlndXJhbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlIHBvc2ljaW9uLCBjb2xvciB5IGZ1ZW50ZSBkZWwgb2JqZXRvXHJcbiAgLS1iYWNrZ3JvdW5kOiNmZmM1ODE7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZkM2ExO1xyXG4gIC0tY29sb3I6IzE0MGIwYTtcclxuICBtYXJnaW46IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gIGZvbnQtc2l6ZTozMDAlIDtcclxufVxyXG4uQ29tcDQgeyAvLyBzZSBjb25maWd1cmFuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgcG9zaWNpb24sIGNvbG9yIHkgZnVlbnRlIGRlbCBvYmpldG9cclxuICAtLWJhY2tncm91bmQ6I2ZlZjY3ZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmY2Y2YTY7XHJcbiAgLS1jb2xvcjojMTQwYjBhO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgZm9udC1zaXplOjMwMCUgO1xyXG5cclxufVxyXG4uQ29tcDUgeyAvLyBzZSBjb25maWd1cmFuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgcG9zaWNpb24sIGNvbG9yIHkgZnVlbnRlIGRlbCBvYmpldG9cclxuICAtLWJhY2tncm91bmQ6IzBjNTljZjtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiMzODc0Y2U7XHJcbiAgLS1jb2xvcjojMTQwYjBhO1xyXG4gIG1hcmdpbjogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgZm9udC1zaXplOjMwMCUgO1xyXG59XHJcbi5Db21wNiB7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiwgY29sb3IgeSBmdWVudGUgZGVsIG9iamV0b1xyXG4gIC0tYmFja2dyb3VuZDojZTY5MmY4O1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2VhYjlmNTtcclxuICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXNpemU6MzAwJSA7XHJcbn1cclxuLnNlZ19ib3RvbiB7IC8vIHNlIGNvbmZpZ3VyYW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBwb3NpY2lvbiwgY29sb3IgeSBmdWVudGUgZGVsIG9iamV0b1xyXG4gIC0tYmFja2dyb3VuZDojZmZjNTgxO1xyXG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZkZDZhOTtcclxuICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMiU7XHJcbiAgcmlnaHQ6IDQlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiA2JTtcclxuICBmb250LXdlaWdodDogMTAwMDtcclxuICBmb250LXNpemU6OTAlIDtcclxuICBib3JkZXItd2lkdGg6IDIuNXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6ICMwMTAyMDI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTUlO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJvdzIge1xuICBoZWlnaHQ6IDM1JTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnJvdzEge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBoZWlnaHQ6IDcwJTtcbn1cblxuLmNvbDEge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgd2lkdGg6IDM3JTtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4uY29sMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgd2lkdGg6IDM3JTtcbiAgcGFkZGluZy10b3A6IDAlO1xufVxuXG4uQ29tcDEge1xuICAtLWJhY2tncm91bmQ6I2ZmNWQ1NTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmQ2ZTY3O1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbn1cblxuLkNvbXAyIHtcbiAgLS1iYWNrZ3JvdW5kOiM3N2RkNzc7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzljZGE5YztcbiAgLS1jb2xvcjojMTQwYjBhO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBmb250LXNpemU6IDMwMCU7XG59XG5cbi5Db21wMyB7XG4gIC0tYmFja2dyb3VuZDojZmZjNTgxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmQzYTE7XG4gIC0tY29sb3I6IzE0MGIwYTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogMTAwMDtcbiAgZm9udC1zaXplOiAzMDAlO1xufVxuXG4uQ29tcDQge1xuICAtLWJhY2tncm91bmQ6I2ZlZjY3ZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmNmNmE2O1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gIGZvbnQtc2l6ZTogMzAwJTtcbn1cblxuLkNvbXA1IHtcbiAgLS1iYWNrZ3JvdW5kOiMwYzU5Y2Y7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzM4NzRjZTtcbiAgLS1jb2xvcjojMTQwYjBhO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBmb250LXNpemU6IDMwMCU7XG59XG5cbi5Db21wNiB7XG4gIC0tYmFja2dyb3VuZDojZTY5MmY4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNlYWI5ZjU7XG4gIC0tY29sb3I6IzE0MGIwYTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogMTAwMDtcbiAgZm9udC1zaXplOiAzMDAlO1xufVxuXG4uc2VnX2JvdG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiNmZmM1ODE7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZkZDZhOTtcbiAgLS1jb2xvcjojMTQwYjBhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMiU7XG4gIHJpZ2h0OiA0JTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA2JTtcbiAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBib3JkZXItd2lkdGg6IDIuNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/folder/folder.page.ts":
/*!***************************************!*\
  !*** ./src/app/folder/folder.page.ts ***!
  \***************************************/
/*! exports provided: FolderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderPage", function() { return FolderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let FolderPage = class FolderPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
};
FolderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./folder.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./folder.page.scss */ "./src/app/folder/folder.page.scss")).default]
    })
], FolderPage);



/***/ })

}]);
//# sourceMappingURL=folder-folder-module.js.map