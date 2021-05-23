(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["olvido-contra-olvido-contra-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/olvido-contra/olvido-contra.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/olvido-contra/olvido-contra.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">  <!--Se inicia el encabezado de la pagina--> \r\n    <ion-title>Olvido contraseña</ion-title>\r\n</ion-header>\r\n\r\n<ion-content>  <!--Se inicia el contenido de la pagina--> \r\n    <ion-item lines=\"full\" > \r\n      <ion-label class=\"label\" position=\"floating\">Email</ion-label>  <!--Se crean nuevos labels--> \r\n      <ion-input class=\"input\" type=\"text\" #email required></ion-input><!--se pide el correo y se guarada en #email--> \r\n    </ion-item>\r\n     <ion-button  (click)=\"Recuperar(email)\" class=\"boton1\">Enviar </ion-button> <!--Al presionar el boton se corra la funcion--> \r\n     <ion-button [routerLink]=\"['/cuenta']\" class=\"boton2\" >Volver</ion-button><!-- Al presioanar boton nos dirigimos a cuenta--> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/olvido-contra/olvido-contra-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OlvidoContraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPageRoutingModule", function() { return OlvidoContraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _olvido_contra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olvido-contra.page */ "./src/app/olvido-contra/olvido-contra.page.ts");




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

/***/ "./src/app/olvido-contra/olvido-contra.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.module.ts ***!
  \*******************************************************/
/*! exports provided: OlvidoContraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPageModule", function() { return OlvidoContraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _olvido_contra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./olvido-contra-routing.module */ "./src/app/olvido-contra/olvido-contra-routing.module.ts");
/* harmony import */ var _olvido_contra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./olvido-contra.page */ "./src/app/olvido-contra/olvido-contra.page.ts");







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



/***/ }),

/***/ "./src/app/olvido-contra/olvido-contra.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 3%;\n  left: 0%;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-item {\n  --ion-background-color:#3d8af7;\n  top: 15%;\n  padding-left: 3%;\n  padding-right: 3%;\n}\n\n.boton1 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 16%;\n  left: 30%;\n}\n\n.boton2 {\n  position: relative;\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  top: 16%;\n  left: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2x2aWRvLWNvbnRyYS9DOlxcVXNlcnNcXHhib3hrXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcN3Rtb19zZW1lc3RyZVxcSU9UXFxBcGxpY2FjaW9uXFxUcmFja3BpbGwvc3JjXFxhcHBcXG9sdmlkby1jb250cmFcXG9sdmlkby1jb250cmEucGFnZS5zY3NzIiwic3JjL2FwcC9vbHZpZG8tY29udHJhL29sdmlkby1jb250cmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDREo7O0FESUU7RUFDRSw4QkFBQTtBQ0RKOztBREtFO0VBQ0UsOEJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNISjs7QURLRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9vbHZpZG8tY29udHJhL29sdmlkby1jb250cmEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgIC8vIGVuIGVzdGUgY29kaWdvIHNlIGNvbmZpZ3VyYW4gdG9kb3MgbG9zIGVsZW1lbnRvcyBcclxuICBpb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNzsgLy8gc2UgY2FtYmlhIGVsIGNvbG9yIGRlbCBmb25kb1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAvLyBwb3NpY2lvbiBkZWwgaGVhZGVyXHJcbiAgICB0b3A6IDMlO1xyXG4gICAgbGVmdDowJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3OyAvLyBjb2xvciBjb250ZW5pZG8gXHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3OyAvLyBjb2xvciBkZSBmb25kbyBkZWwgaXRlbVxyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcblxyXG4gICAgLy9sZWZ0OiAzJTtcclxuICB9IFxyXG4gIC5ib3RvbjEgeyAvLyBjYXJhY3RlcmlzaXRpY2FzIGRlbCBib3RvbiAxXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxyXG4gICAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XHJcbiAgICB0b3A6IDE2JTsgLy9wb3NpY2lvbiBcclxuICAgIGxlZnQ6IDMwJTtcclxuICB9XHJcbiAgLmJvdG9uMiB7IC8vIGNhcmFjdGVyaXNpdGljYXMgZGVsIGJvdG9uIDJcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC0tYmFja2dyb3VuZDojNzVhOWY5OyAvL3Bvc2ljaW9uIFxyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojOWZjMmY3O1xyXG4gICAgdG9wOiAxNiU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgfVxyXG5cclxuLy9ob2xhIiwiaW9uLWhlYWRlciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBsZWZ0OiAwJTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xuICB0b3A6IDE1JTtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG59XG5cbi5ib3RvbjEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDojNzVhOWY5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XG4gIHRvcDogMTYlO1xuICBsZWZ0OiAzMCU7XG59XG5cbi5ib3RvbjIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC0tYmFja2dyb3VuZDojNzVhOWY5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XG4gIHRvcDogMTYlO1xuICBsZWZ0OiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/olvido-contra/olvido-contra.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/olvido-contra/olvido-contra.page.ts ***!
  \*****************************************************/
/*! exports provided: OlvidoContraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlvidoContraPage", function() { return OlvidoContraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OlvidoContraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-olvido-contra',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./olvido-contra.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/olvido-contra/olvido-contra.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./olvido-contra.page.scss */ "./src/app/olvido-contra/olvido-contra.page.scss")).default]
    })
], OlvidoContraPage);



/***/ })

}]);
//# sourceMappingURL=olvido-contra-olvido-contra-module.js.map