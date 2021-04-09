(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cuenta-cuenta-module"],{

/***/ "3uYb":
/*!*****************************************!*\
  !*** ./src/app/cuenta/cuenta.module.ts ***!
  \*****************************************/
/*! exports provided: CuentaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageModule", function() { return CuentaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cuenta-routing.module */ "iu1F");
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cuenta.page */ "zwqC");







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

/***/ "hrMJ":
/*!*****************************************!*\
  !*** ./src/app/cuenta/cuenta.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: #010202;\n}\n\nion-title {\n  color: #140b0a;\n}\n\nion-toolbar {\n  --background: #3d8af7;\n  --ion-background-color:#3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n  --background: #3d8af7;\n}\n\nion-content {\n  --background: #3d8af7;\n  --ion-background-color:#3d8af7;\n}\n\nion-col {\n  position: absolute;\n  top: 25%;\n  left: 12.5%;\n}\n\nion-row {\n  width: 75%;\n  padding-bottom: 1%;\n}\n\n.espacio {\n  padding-top: 40%;\n}\n\n.espacio_2 {\n  padding-top: 2%;\n}\n\n.Boton_olvidar {\n  --background:#3d8af7;\n  --background-activated:#3d8af7;\n  --color:#140b0a;\n  --color-activated:#fdfdfd;\n  margin: 0;\n  padding-left: 0%;\n  width: 100%;\n  --box-shadow:none;\n  font-size: 70%;\n  font-weight: 700;\n}\n\n.Boton_registrarse {\n  --background:#3d8af7;\n  --background-activated:#3d8af7;\n  --color:#140b0a;\n  --color-activated:#fdfdfd;\n  --box-shadow:none;\n  margin: 0;\n  padding-left: 25%;\n  width: 75%;\n  font-size: 70%;\n  font-weight: 700;\n  --box-shadow:none;\n}\n\n.Boton_Entrar {\n  --background:#75a9f9;\n  --background-activated:#9fc2f7;\n  --color:#140b0a;\n  margin: 0;\n  width: 85%;\n  padding-left: 15%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.contra {\n  border-radius: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border: 8px solid #75a9f9;\n  background: #75a9f9;\n  height: 5%;\n}\n\n.user {\n  border-radius: 10px;\n  padding-left: 30px;\n  padding-right: 30px;\n  border: 8px solid #75a9f9;\n  background: #75a9f9;\n  height: 5%;\n}\n\n.text_contra {\n  /*position: absolute;\n  bottom: 53%;\n  right:20%;*/\n  height: 5%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.text_user {\n  /*position: absolute;\n  bottom: 63%;\n  right:20%;*/\n  height: 5%;\n  font-size: 100%;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1ZW50YS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBR0U7RUFDRSw4QkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRTs7YUFBQTtFQUdBLFVBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFOzthQUFBO0VBR0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQUdGIiwiZmlsZSI6ImN1ZW50YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogIzAxMDIwMjtcclxufVxyXG5cclxuaW9uLXRpdGxle1xyXG4gIGNvbG9yOiAjMTQwYjBhO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG59XHJcblxyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xyXG4gIH1cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW9uLWNvbHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICBsZWZ0OiAxMi41JTtcclxuICB9XHJcblxyXG4gIGlvbi1yb3d7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxuXHJcbiAgLmVzcGFjaW97XHJcbiAgICBwYWRkaW5nLXRvcDogNDAlO1xyXG4gIH1cclxuICAuZXNwYWNpb18ye1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gIH1cclxuXHJcbiAgLkJvdG9uX29sdmlkYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMzZDhhZjc7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiMzZDhhZjc7XHJcbiAgICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDojZmRmZGZkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNzAlIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIC5Cb3Rvbl9yZWdpc3RyYXJzZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IzNkOGFmNztcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzNkOGFmNztcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIC0tY29sb3ItYWN0aXZhdGVkOiNmZGZkZmQ7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMjUlO1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgZm9udC1zaXplOjcwJSA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG4gIC5Cb3Rvbl9FbnRyYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM5ZmMyZjc7XHJcbiAgICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDo4NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgIGZvbnQtc2l6ZToxMDAlIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG5cclxuLmNvbnRyYXtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHggO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiA4cHggc29saWQgIzc1YTlmOTtcclxuICBiYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuLnVzZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4IDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogOHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICBoZWlnaHQ6IDUlO1xyXG4gIC8vd2lkdGg6IDYwJTtcclxufVxyXG4udGV4dF9jb250cmF7XHJcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MyU7XHJcbiAgcmlnaHQ6MjAlOyovXHJcbiAgaGVpZ2h0OiA1JTtcclxuICAvL3dpZHRoOiA2MCU7XHJcbiAgZm9udC1zaXplOjEwMCUgO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnRleHRfdXNlcntcclxuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDYzJTtcclxuICByaWdodDoyMCU7Ki9cclxuICBoZWlnaHQ6IDUlO1xyXG4gIC8vd2lkdGg6IDYwJTtcclxuICBmb250LXNpemU6MTAwJSA7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufSJdfQ== */");

/***/ }),

/***/ "iu1F":
/*!*************************************************!*\
  !*** ./src/app/cuenta/cuenta-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CuentaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPageRoutingModule", function() { return CuentaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cuenta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cuenta.page */ "zwqC");




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

/***/ "lE1D":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cuenta/cuenta.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-no-border\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  [fullscreen]=\"true\">\n  <ion-col>\n    <ion-row><ion-label class=\"text_user\" id=prueba >Usuario/email:</ion-label></ion-row>\n    <ion-row><ion-input class=\"user\" placeholder=\"Usuario/email\" #email></ion-input></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row><ion-label class=\"text_contra\">Contraseña:</ion-label></ion-row>\n    <ion-row><ion-input class=\"contra\" type= \"password\" placeholder=\"Contraseña\" #password></ion-input></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row class=\"espacio_2\"></ion-row>\n    <ion-row><ion-button class=\"Boton_Entrar\" type=\"submit\" (click)=\"onLogin(email, password)\">Entrar</ion-button></ion-row>\n    <ion-row class=\"espacio\"></ion-row>\n    <ion-row><ion-button [routerLink]=\"['/registrarse']\" class=\"Boton_registrarse\">Registrarse</ion-button></ion-row>\n    <ion-row><ion-button [routerLink]=\"['/olvido-contra']\" class=\"Boton_olvidar\">¿Olvido la contraseña?</ion-button></ion-row>\n  </ion-col>\n</ion-content>\n");

/***/ }),

/***/ "zwqC":
/*!***************************************!*\
  !*** ./src/app/cuenta/cuenta.page.ts ***!
  \***************************************/
/*! exports provided: CuentaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaPage", function() { return CuentaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cuenta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cuenta.page.html */ "lE1D");
/* harmony import */ var _cuenta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cuenta.page.scss */ "hrMJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");







let CuentaPage = class CuentaPage {
    constructor(authSvc, router, alertController, toastController) {
        this.authSvc = authSvc;
        this.router = router;
        this.alertController = alertController;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.inputemail.value = '';
        this.inputpassword.value = '';
    }
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
    Imprimir_ayuda() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: "La contraseña debe tener al menos 6 caracteres,1 número, una mayuscula o una miniscula",
                //message: texto,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
CuentaPage.propDecorators = {
    inputemail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['email',] }],
    inputpassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['password',] }]
};
CuentaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cuenta',
        template: _raw_loader_cuenta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cuenta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CuentaPage);

//Comentario probar 
//otro comentario
//comentario de prueba 


/***/ })

}]);
//# sourceMappingURL=cuenta-cuenta-module.js.map