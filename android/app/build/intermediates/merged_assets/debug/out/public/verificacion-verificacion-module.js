(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verificacion-verificacion-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion/verificacion.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion/verificacion.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-no-border\">\r\n    <ion-title>Verificacion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"user$ | async as user\">\r\n  <ion-row> \r\n    <ion-col>\r\n      <h2>!Gracias por registrarte¡ </h2>\r\n      <p> Hemos enviado un correo de verificacion a <strong>{{user.email}}</strong></p>\r\n      <p> Por favor revisa tu correo y haga click en el enlace de verificación</p>\r\n    </ion-col>\r\n  </ion-row>\r\n      <ion-button type=\"submit\" class=\"boton1\" (click)=\"Reenvio()\">Reenviar correo</ion-button>\r\n      <!--<ion-button [routerLink]=\"['/Cuenta]\" class=\"Boton_volver\">Si ya confirmo el correo presione aqui</ion-button>-->\r\n      <ion-button type=\"submit\" class=\"boton1\" (click)=\"Devolver()\">Iniciar sesión</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/verificacion/verificacion-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/verificacion/verificacion-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPageRoutingModule", function() { return VerificacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verificacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificacion.page */ "./src/app/verificacion/verificacion.page.ts");




const routes = [
    {
        path: '',
        component: _verificacion_page__WEBPACK_IMPORTED_MODULE_3__["VerificacionPage"]
    }
];
let VerificacionPageRoutingModule = class VerificacionPageRoutingModule {
};
VerificacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerificacionPageRoutingModule);



/***/ }),

/***/ "./src/app/verificacion/verificacion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/verificacion/verificacion.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPageModule", function() { return VerificacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verificacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificacion-routing.module */ "./src/app/verificacion/verificacion-routing.module.ts");
/* harmony import */ var _verificacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificacion.page */ "./src/app/verificacion/verificacion.page.ts");







let VerificacionPageModule = class VerificacionPageModule {
};
VerificacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verificacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerificacionPageRoutingModule"]
        ],
        declarations: [_verificacion_page__WEBPACK_IMPORTED_MODULE_6__["VerificacionPage"]]
    })
], VerificacionPageModule);



/***/ }),

/***/ "./src/app/verificacion/verificacion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/verificacion/verificacion.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#3d8af7;\n  background-color: #3d8af7;\n  position: relative;\n  top: 0%;\n  left: 0%;\n}\n\nion-title {\n  --ion-background-color:#3d8af7;\n  background-color: #3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 5%;\n}\n\n.boton1 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 0%;\n  left: 10%;\n}\n\n.boton2 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 0%;\n  left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZpY2FjaW9uL0M6XFxVc2Vyc1xceGJveGtcXE9uZURyaXZlXFxEb2N1bWVudG9zXFw3dG1vX3NlbWVzdHJlXFxJT1RcXEFwbGljYWNpb25cXFRyYWNrcGlsbC9zcmNcXGFwcFxcdmVyaWZpY2FjaW9uXFx2ZXJpZmljYWNpb24ucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJpZmljYWNpb24vdmVyaWZpY2FjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQ0VKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC92ZXJpZmljYWNpb24vdmVyaWZpY2FjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4YWY3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6MCU7XHJcbn1cclxuaW9uLXRpdGxlIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGFmNztcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5ib3RvbjEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gIH1cclxuICAuYm90b24yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDojNzVhOWY5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojOWZjMmY3O1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcbiAgXHJcblxyXG4iLCJpb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4YWY3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDAlO1xufVxuXG5pb24tdGl0bGUge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhhZjc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG59XG5cbi5ib3RvbjEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDojNzVhOWY5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDEwJTtcbn1cblxuLmJvdG9uMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlmYzJmNztcbiAgdG9wOiAwJTtcbiAgbGVmdDogMTAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/verificacion/verificacion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/verificacion/verificacion.page.ts ***!
  \***************************************************/
/*! exports provided: VerificacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPage", function() { return VerificacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let VerificacionPage = class VerificacionPage {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.user$ = this.authSvc.afAuth.user;
    }
    Reenvio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.sendVerificationEmail();
                //await this.router.navigate(['/cuenta']);
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    Devolver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.router.navigate(['/cuenta/']);
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    ngOnDestroy() {
        this.authSvc.logout();
    }
};
VerificacionPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VerificacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verificacion',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verificacion.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion/verificacion.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verificacion.page.scss */ "./src/app/verificacion/verificacion.page.scss")).default]
    })
], VerificacionPage);



/***/ })

}]);
//# sourceMappingURL=verificacion-verificacion-module.js.map