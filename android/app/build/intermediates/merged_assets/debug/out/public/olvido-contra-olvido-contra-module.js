(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["olvido-contra-olvido-contra-module"],{

/***/ "/lbh":
/*!***************************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OlvidoContraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPageRoutingModule", function() { return OlvidoContraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _olvido_contra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olvido-contra.page */ "eRZd");




const routes = [
    {
        path: '',
        component: _olvido_contra_page__WEBPACK_IMPORTED_MODULE_3__["OlvidoContraPage"]
    }
];
let OlvidoContraPageRoutingModule = class OlvidoContraPageRoutingModule {
};
OlvidoContraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OlvidoContraPageRoutingModule);



/***/ }),

/***/ "SriB":
/*!*******************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 3%;\n  left: 0%;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-item {\n  --ion-background-color:#3d8af7;\n  top: 15%;\n  padding-left: 3%;\n  padding-right: 3%;\n}\n\n.boton1 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 16%;\n  left: 30%;\n}\n\n.boton2 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 16%;\n  left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9sdmlkby1jb250cmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBREo7O0FBSUU7RUFDRSw4QkFBQTtBQURKOztBQUtFO0VBQ0UsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFISjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRkoiLCJmaWxlIjoib2x2aWRvLWNvbnRyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgLy8gZW4gZXN0ZSBjb2RpZ28gc2UgY29uZmlndXJhbiB0b2RvcyBsb3MgZWxlbWVudG9zIFxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3OyAvLyBzZSBjYW1iaWEgZWwgY29sb3IgZGVsIGZvbmRvXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8vIHBvc2ljaW9uIGRlbCBoZWFkZXJcclxuICAgIHRvcDogMyU7XHJcbiAgICBsZWZ0OjAlO1xyXG4gIH1cclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7IC8vIGNvbG9yIGNvbnRlbmlkbyBcclxuICB9XHJcblxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7IC8vIGNvbG9yIGRlIGZvbmRvIGRlbCBpdGVtXHJcbiAgICB0b3A6IDE1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuXHJcbiAgICAvL2xlZnQ6IDMlO1xyXG4gIH0gXHJcbiAgLmJvdG9uMSB7IC8vIGNhcmFjdGVyaXNpdGljYXMgZGVsIGJvdG9uIDFcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbiAgICAtLWJhY2tncm91bmQ6Izc1YTlmOTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzlmYzJmNztcclxuICAgIHRvcDogMTYlOyAvL3Bvc2ljaW9uIFxyXG4gICAgbGVmdDogMzAlO1xyXG4gIH1cclxuICAuYm90b24yIHsgLy8gY2FyYWN0ZXJpc2l0aWNhcyBkZWwgYm90b24gMlxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7IC8vcG9zaWNpb24gXHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XHJcbiAgICB0b3A6IDE2JTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICB9XHJcblxyXG4vL2hvbGEiXX0= */");

/***/ }),

/***/ "d90U":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/olvido-contra/olvido-contra.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">  <!--Se inicia el encabezado de la pagina--> \r\n    <ion-title>Olvido contraseña</ion-title>\r\n</ion-header>\r\n\r\n<ion-content>  <!--Se inicia el contenido de la pagina--> \r\n    <ion-item lines=\"full\" > \r\n      <ion-label class=\"label\" position=\"floating\">Email</ion-label>  <!--Se crean nuevos labels--> \r\n      <ion-input class=\"input\" type=\"text\" #email required></ion-input><!--se pide el correo y se guarada en #email--> \r\n    </ion-item>\r\n     <ion-button  (click)=\"Recuperar(email)\" class=\"boton1\">Enviar </ion-button> <!--Al presionar el boton se corra la funcion--> \r\n     <ion-button [routerLink]=\"['/cuenta']\" class=\"boton2\" >Volver</ion-button><!-- Al presioanar boton nos dirigimos a cuenta--> \r\n</ion-content>\r\n");

/***/ }),

/***/ "eRZd":
/*!*****************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.page.ts ***!
  \*****************************************************/
/*! exports provided: OlvidoContraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPage", function() { return OlvidoContraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_olvido_contra_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./olvido-contra.page.html */ "d90U");
/* harmony import */ var _olvido_contra_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./olvido-contra.page.scss */ "SriB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



 // se importan las librerias 



let OlvidoContraPage = class OlvidoContraPage {
    constructor(authSvc, router, alertController) {
        this.authSvc = authSvc;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    /*****************************************************************************************************
    La funcion Recuperar hace uso de la funcion resetpassword presente en el auth services, para que
    al correo ingraso en email, se reenvie un correo para recuperar la contraseña en caso de olvidarla
    ******************************************************************************************************/
    Recuperar(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authSvc.resetPassword(email.value);
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
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
};
OlvidoContraPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
OlvidoContraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-olvido-contra',
        template: _raw_loader_olvido_contra_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_olvido_contra_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OlvidoContraPage);



/***/ }),

/***/ "xw8m":
/*!*******************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.module.ts ***!
  \*******************************************************/
/*! exports provided: OlvidoContraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPageModule", function() { return OlvidoContraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _olvido_contra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./olvido-contra-routing.module */ "/lbh");
/* harmony import */ var _olvido_contra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./olvido-contra.page */ "eRZd");







let OlvidoContraPageModule = class OlvidoContraPageModule {
};
OlvidoContraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _olvido_contra_routing_module__WEBPACK_IMPORTED_MODULE_5__["OlvidoContraPageRoutingModule"]
        ],
        declarations: [_olvido_contra_page__WEBPACK_IMPORTED_MODULE_6__["OlvidoContraPage"]]
    })
], OlvidoContraPageModule);



/***/ })

}]);
//# sourceMappingURL=olvido-contra-olvido-contra-module.js.map