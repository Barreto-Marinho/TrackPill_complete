(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verificacion-verificacion-module"],{

/***/ "1UuN":
/*!***************************************************!*\
  !*** ./src/app/verificacion/verificacion.page.ts ***!
  \***************************************************/
/*! exports provided: VerificacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPage", function() { return VerificacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verificacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verificacion.page.html */ "Ehqw");
/* harmony import */ var _verificacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verificacion.page.scss */ "eXwE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");






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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
VerificacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verificacion',
        template: _raw_loader_verificacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verificacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerificacionPage);



/***/ }),

/***/ "Ehqw":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verificacion/verificacion.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-no-border\">\r\n    <ion-title>Verificacion</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  *ngIf=\"user$ | async as user\">\r\n  <ion-row> \r\n    <ion-col>\r\n      <h2>!Gracias por registrarte¡ </h2>\r\n      <p> Hemos enviado un correo de verificacion a <strong>{{user.email}}</strong></p>\r\n      <p> Por favor revisa tu correo y haga click en el enlace de verificación</p>\r\n    </ion-col>\r\n  </ion-row>\r\n      <ion-button type=\"submit\" class=\"boton1\" (click)=\"Reenvio()\">Reenviar correo</ion-button>\r\n      <!--<ion-button [routerLink]=\"['/Cuenta]\" class=\"Boton_volver\">Si ya confirmo el correo presione aqui</ion-button>-->\r\n      <ion-button type=\"submit\" class=\"boton1\" (click)=\"Devolver()\">Iniciar sesión</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "bXqo":
/*!*****************************************************!*\
  !*** ./src/app/verificacion/verificacion.module.ts ***!
  \*****************************************************/
/*! exports provided: VerificacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPageModule", function() { return VerificacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verificacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verificacion-routing.module */ "gwG8");
/* harmony import */ var _verificacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verificacion.page */ "1UuN");







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

/***/ "eXwE":
/*!*****************************************************!*\
  !*** ./src/app/verificacion/verificacion.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#3d8af7;\n  background-color: #3d8af7;\n  position: relative;\n  top: 0%;\n  left: 0%;\n}\n\nion-title {\n  --ion-background-color:#3d8af7;\n  background-color: #3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 5%;\n}\n\n.boton1 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 0%;\n  left: 10%;\n}\n\n.boton2 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 0%;\n  left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlcmlmaWNhY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQUdKIiwiZmlsZSI6InZlcmlmaWNhY2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGFmNztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OjAlO1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhhZjc7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgfVxyXG5cclxuICAuYm90b24xIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDojNzVhOWY5O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojOWZjMmY3O1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmJvdG9uMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtLWJhY2tncm91bmQ6Izc1YTlmOTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlmYzJmNztcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIFxyXG5cclxuIl19 */");

/***/ }),

/***/ "gwG8":
/*!*************************************************************!*\
  !*** ./src/app/verificacion/verificacion-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VerificacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacionPageRoutingModule", function() { return VerificacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verificacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verificacion.page */ "1UuN");




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



/***/ })

}]);
//# sourceMappingURL=verificacion-verificacion-module.js.map