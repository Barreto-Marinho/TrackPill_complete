(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuenta-cuenta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cuenta/cuenta.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cuenta/cuenta.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\"><!--Se inicia el encabezado de la pagina--> \n  <ion-toolbar class=\"ion-no-border\"><!--Se configura el toolbar sin borde--> \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\"><!--Se inicia el contenido de la pagina, todos los elementos se ponen dentro de este contenido--> \n  <ion-col>                       <!--Se inicia una columna para organizacion de las inputs--> \n    <!-- Declaraciones en filas de entradas, labels y botones--> \n    <ion-row><ion-label class=\"text_user\" id=prueba >Usuario/email:</ion-label></ion-row>\n    <ion-row><ion-input class=\"user\" placeholder=\"Usuario/email\" #email></ion-input></ion-row><!-- Con # se declara variable de entrada en funcion login--> \n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row><ion-label class=\"text_contra\">Contraseña:</ion-label></ion-row>\n    <ion-row><ion-input class=\"contra\" type= \"password\" placeholder=\"Contraseña\" #password></ion-input></ion-row><!-- Con # se declara variable de entrada en funcion login-->\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row><ion-button class=\"Boton_Entrar\" type=\"submit\" (click)=\"onLogin(email, password)\">Entrar</ion-button></ion-row>\n    <ion-row class=\"espacio\"></ion-row>\n    <ion-row><ion-button [routerLink]=\"['/registrarse']\" class=\"Boton_registrarse\">Registrarse</ion-button></ion-row>\n    <ion-row><ion-button [routerLink]=\"['/olvido-contra']\" class=\"Boton_olvidar\">¿Olvido la contraseña?</ion-button></ion-row>\n  </ion-col>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/cuenta/cuenta-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/cuenta/cuenta-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CuentaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageRoutingModule", function() { return CuentaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuenta.page */ "./src/app/cuenta/cuenta.page.ts");




const routes = [
    {
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_3__["CuentaPage"]
    }
];
let CuentaPageRoutingModule = class CuentaPageRoutingModule {
};
CuentaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CuentaPageRoutingModule);



/***/ }),

/***/ "./src/app/cuenta/cuenta.module.ts":
/*!*****************************************!*\
  !*** ./src/app/cuenta/cuenta.module.ts ***!
  \*****************************************/
/*! exports provided: CuentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageModule", function() { return CuentaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cuenta-routing.module */ "./src/app/cuenta/cuenta-routing.module.ts");
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuenta.page */ "./src/app/cuenta/cuenta.page.ts");







let CuentaPageModule = class CuentaPageModule {
};
CuentaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_5__["CuentaPageRoutingModule"]
        ],
        declarations: [_cuenta_page__WEBPACK_IMPORTED_MODULE_6__["CuentaPage"]]
    })
], CuentaPageModule);



/***/ }),

/***/ "./src/app/cuenta/cuenta.page.scss":
/*!*****************************************!*\
  !*** ./src/app/cuenta/cuenta.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: #010202;\n}\n\nion-title {\n  color: #140b0a;\n}\n\nion-toolbar {\n  --background: #3d8af7;\n  --ion-background-color:#3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n  --background: #3d8af7;\n}\n\nion-content {\n  --background: #3d8af7;\n  --ion-background-color:#3d8af7;\n}\n\nion-col {\n  position: absolute;\n  top: 25%;\n  left: 12.5%;\n}\n\nion-row {\n  width: 75%;\n  padding-bottom: 1%;\n}\n\n.espacio {\n  padding-top: 40%;\n}\n\n.espacio_2 {\n  padding-top: 2%;\n}\n\n.Boton_olvidar {\n  --background:#3d8af7;\n  --background-activated:#3d8af7;\n  --color:#140b0a;\n  --color-activated:#fdfdfd;\n  margin: 0;\n  padding-left: 0%;\n  width: 100%;\n  --box-shadow:none;\n  font-size: 70%;\n  font-weight: 700;\n}\n\n.Boton_registrarse {\n  --background:#3d8af7;\n  --background-activated:#3d8af7;\n  --color:#140b0a;\n  --color-activated:#fdfdfd;\n  --box-shadow:none;\n  margin: 0;\n  padding-left: 25%;\n  width: 75%;\n  font-size: 70%;\n  font-weight: 700;\n  --box-shadow:none;\n}\n\n.Boton_Entrar {\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  --color:#140b0a;\n  margin: 0;\n  width: 85%;\n  padding-left: 15%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.contra {\n  border-radius: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 8px solid #75a9f9;\n  background: #75a9f9;\n  height: 5%;\n}\n\n.user {\n  border-radius: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  border: 8px solid #75a9f9;\n  background: #75a9f9;\n  height: 5%;\n}\n\n.text_contra {\n  height: 5%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.text_user {\n  height: 5%;\n  font-size: 100%;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VlbnRhL0M6XFxVc2Vyc1xceGJveGtcXE9uZURyaXZlXFxEb2N1bWVudG9zXFw3dG1vX3NlbWVzdHJlXFxJT1RcXEFwbGljYWNpb25cXFRyYWNrcGlsbC9zcmNcXGFwcFxcY3VlbnRhXFxjdWVudGEucGFnZS5zY3NzIiwic3JjL2FwcC9jdWVudGEvY3VlbnRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7QUNERjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHRTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURFRTtFQUNFLHFCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR0o7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ0dGOztBRERBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNJRjs7QUREQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2N1ZW50YS9jdWVudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2UgY29uZmlndXJhbiB0b2RvcyBsb3MgZWxlbWVudG9zIHByZXNlbnRlcyBlbiBjdWVudGEucGFnZS5odG1sXHJcbiAgXHJcbmlvbi1tZW51LWJ1dHRvbiB7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgYm90b24gZGVsIG1lbnUgbGF0ZXJhbFxyXG4gIGNvbG9yOiAjMDEwMjAyO1xyXG59XHJcblxyXG5pb24tdGl0bGV7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgZWxlbWVudG8gdGl0bGVcclxuICBjb2xvcjogIzE0MGIwYTtcclxufVxyXG5pb24tdG9vbGJhciB7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgdG9sbGJhclxyXG4gIC0tYmFja2dyb3VuZDogIzNkOGFmNztcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbn1cclxuXHJcbiAgaW9uLWhlYWRlciB7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgaGVhZGVyIFxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBjb250ZW50XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLWNvbHsgLy8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBvYmpldG8gY29sdW1uYVxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGxlZnQ6IDEyLjUlO1xyXG4gIH1cclxuXHJcbiAgaW9uLXJvd3sgLy8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBvYmpldG8gcm93XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW97IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSB1bmEgZmlsYSB2YWNpYSBwYXJhIHF1ZSBvY3VwZSBlc3BhY2lvXHJcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gIH1cclxuICAuZXNwYWNpb18yeyAvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgdW5hIGZpbGEgdmFjaWEgcGFyYSBxdWUgb2N1cGUgZXNwYWNpb1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gIH1cclxuXHJcbiAgLkJvdG9uX29sdmlkYXIgeyAvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGVsIGJvdG9uIG9sdmlkYXJcclxuICAgIC0tYmFja2dyb3VuZDojM2Q4YWY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojM2Q4YWY3O1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZkZmRmZDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBmb250LXNpemU6IDcwJSA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuQm90b25fcmVnaXN0cmFyc2Ugey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgYm90b24gcmVnaXN0cmFyc2VcclxuICAgIC0tYmFja2dyb3VuZDojM2Q4YWY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojM2Q4YWY3O1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6I2ZkZmRmZDtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICBmb250LXNpemU6NzAlIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICB9XHJcbiAgLkJvdG9uX0VudHJhciB7IC8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgYm90b24gZW50cmFyXHJcbiAgICAtLWJhY2tncm91bmQ6Izc1YTlmOTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlmYzJmNztcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgZm9udC1zaXplOjEwMCUgO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcblxyXG4uY29udHJheyAvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGVsIGlucHV0IGRlIGNvbnRyYXNlw7FhXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4IDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogOHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICBoZWlnaHQ6IDUlO1xyXG59XHJcbi51c2Vyey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgaW5wdXQgZGUgdXN1YXJpb1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCA7XHJcbiAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICBib3JkZXI6IDhweCBzb2xpZCAjNzVhOWY5O1xyXG4gIGJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgaGVpZ2h0OiA1JTtcclxuICAvL3dpZHRoOiA2MCU7XHJcbn1cclxuLnRleHRfY29udHJhey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgdGV4dG8gZGUgY29udHJhc2XDsWFcclxuICBoZWlnaHQ6IDUlO1xyXG4gIGZvbnQtc2l6ZToxMDAlIDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi50ZXh0X3VzZXJ7Ly8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBpbnB1dCB1c3VhcmlvXHJcbiAgaGVpZ2h0OiA1JTtcclxuICBmb250LXNpemU6MTAwJSA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufSIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiAjMDEwMjAyO1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogIzE0MGIwYTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzNkOGFmNztcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xufVxuXG5pb24tY29sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgbGVmdDogMTIuNSU7XG59XG5cbmlvbi1yb3cge1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG5cbi5lc3BhY2lvIHtcbiAgcGFkZGluZy10b3A6IDQwJTtcbn1cblxuLmVzcGFjaW9fMiB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cblxuLkJvdG9uX29sdmlkYXIge1xuICAtLWJhY2tncm91bmQ6IzNkOGFmNztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojM2Q4YWY3O1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiNmZGZkZmQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBmb250LXNpemU6IDcwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLkJvdG9uX3JlZ2lzdHJhcnNlIHtcbiAgLS1iYWNrZ3JvdW5kOiMzZDhhZjc7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzNkOGFmNztcbiAgLS1jb2xvcjojMTQwYjBhO1xuICAtLWNvbG9yLWFjdGl2YXRlZDojZmRmZGZkO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgd2lkdGg6IDc1JTtcbiAgZm9udC1zaXplOiA3MCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG4uQm90b25fRW50cmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlmYzJmNztcbiAgLS1jb2xvcjojMTQwYjBhO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jb250cmEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICM3NWE5Zjk7XG4gIGJhY2tncm91bmQ6ICM3NWE5Zjk7XG4gIGhlaWdodDogNSU7XG59XG5cbi51c2VyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBib3JkZXI6IDhweCBzb2xpZCAjNzVhOWY5O1xuICBiYWNrZ3JvdW5kOiAjNzVhOWY5O1xuICBoZWlnaHQ6IDUlO1xufVxuXG4udGV4dF9jb250cmEge1xuICBoZWlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi50ZXh0X3VzZXIge1xuICBoZWlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/cuenta/cuenta.page.ts":
/*!***************************************!*\
  !*** ./src/app/cuenta/cuenta.page.ts ***!
  \***************************************/
/*! exports provided: CuentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPage", function() { return CuentaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let CuentaPage = class CuentaPage {
    constructor(authSvc, router, alertController, toastController) {
        this.authSvc = authSvc;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    /*****************************************************************************************************
      La funcion ionViewWillEnter se ejecuta cuando se imprima la pagina actual, con se puede inicializar
      las variables de la pagina
    ******************************************************************************************************/
    ionViewWillEnter() {
        this.inputemail.value = '';
        this.inputpassword.value = '';
    }
    /*****************************************************************************************************
    La funcion onLogin() logea al usuario en firebase, y redirige al usuario ala pagina principal mientras
    que el usuario ya haya verificado la cuenta, de lo contrario mandara la alerta de que el correo no esta
    verificado, en caso de tener mal la contraseña o el correo este lo indicara, y mostrara un toast si
    la sesion se inicio correctamente.
    ******************************************************************************************************/
    onLogin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const user = yield this.authSvc.login(email.value, password.value);
                console.log("Verificando...");
                if (user) {
                    const estaverificado = this.authSvc.isEmailVerify(user);
                    console.log('verificado->', estaverificado);
                    this.redigirir_usua(estaverificado);
                }
                else {
                    this.Imprimir_error("Revise su datos: Contraseña y Correo no coinciden");
                }
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*****************************************************************************************************
    En la funcion de redirigir_usua(),  se redirigira a la pagina principal, y se mostrara el toast
    indicando que ya se ha iniciado la sesion, si no esta el correo verificado, manda la alerta.
    ******************************************************************************************************/
    redigirir_usua(estaverificado) {
        // si el usuario esta bien, redigir a admin, sino dice que verificar
        if (estaverificado) {
            this.router.navigate(['/folder/ ']);
            this.presentToast();
        }
        else {
            this.authSvc.usuario$ = undefined;
            this.authSvc.logout();
            this.Imprimir_error("El correo aun no esta verificado");
        }
    }
    /*****************************************************************************************************
    La funcion Imprimir_error() recibe un string de texto, y lo imprime en una ventana de alert en el
    celular
    ******************************************************************************************************/
    Imprimir_error(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: texto,
                //message: texto,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*****************************************************************************************************
   La funcion presentToast es una funcion que recibe una variable texto, y la muestra en la pantalla
   durante unos pocos segundos.
   ******************************************************************************************************/
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Sesion iniciada',
                duration: 2000
            });
            toast.present();
        });
    }
};
CuentaPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email')
], CuentaPage.prototype, "inputemail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password')
], CuentaPage.prototype, "inputpassword", void 0);
CuentaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cuenta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cuenta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cuenta/cuenta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cuenta.page.scss */ "./src/app/cuenta/cuenta.page.scss")).default]
    })
], CuentaPage);



/***/ })

}]);
//# sourceMappingURL=cuenta-cuenta-module.js.map