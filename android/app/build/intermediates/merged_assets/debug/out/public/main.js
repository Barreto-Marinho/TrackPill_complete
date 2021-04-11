(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\xboxk\OneDrive\Documentos\7tmo_semestre\IOT\Aplicacion\Trackpill\src\main.ts */"zUnb");


/***/ }),

/***/ "14dr":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menulateral/menulateral.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig: {
        apiKey: "AIzaSyDmKNQ8HI3lfYsvN4AQATGRA5rPk_SrNjI",
        authDomain: "trackpill-e723c.firebaseapp.com",
        projectId: "trackpill-e723c",
        storageBucket: "trackpill-e723c.appspot.com",
        messagingSenderId: "346403675542",
        appId: "1:346403675542:web:11fadcc10177b2cf94d1b7",
        measurementId: "G-KZ220PRXHZ"
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");





let AuthGuard = class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authSvc.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            console.log('User->', user);
            if (user) {
                return true;
            }
            else {
                //redirigir a cuenta
                this.router.navigate(['/cuenta']);
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "Fc5s":
/*!********************************************************!*\
  !*** ./src/app/menulateral/menulateral.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51bGF0ZXJhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");







let AppComponent = class AppComponent {
    constructor(authSvc, router, afAuth) {
        this.authSvc = authSvc;
        this.router = router;
        this.afAuth = afAuth;
        this.cuenta = "";
    }
    pag_princ() {
        this.router.navigate(['/folder/  ']);
    }
    Conf_alarm() {
        this.router.navigate(['/alarma']);
    }
    Cuenta() {
        if (this.authSvc.usuario$ != undefined) {
            this.router.navigate(['/perfil']);
        }
        else {
            this.router.navigate(['/cuenta']);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n\n  \n          <ion-col> \n            <ion-menu-toggle auto-hide=\"false\">\n              <ion-row>\n              <ion-button  (click)=\"pag_princ()\" >\n                <ion-icon  [ios]=\"'analytics' + '-outline'\" [md]=\"'analytics' + '-sharp'\"></ion-icon>\n                <ion-label>  Pagina Principal           </ion-label>\n              </ion-button>\n              </ion-row>\n              <ion-row>\n                <ion-button  (click)=\"Conf_alarm()\" >\n                  <ion-icon  [ios]=\"'construct' + '-outline'\" [md]=\"'construct' + '-sharp'\"></ion-icon>\n                  <ion-label>  Alarma estado  </ion-label>\n                </ion-button>\n                </ion-row>\n                <ion-row>\n                  <ion-button  (click)=\"Cuenta()\" >\n                    <ion-icon  [ios]=\"'person' + '-outline'\" [md]=\"'person' + '-sharp'\"></ion-icon>\n                    <ion-label>Cuenta</ion-label>\n                  </ion-button>\n                </ion-row>\n            </ion-menu-toggle>\n        </ion-col>\n\n        \n      </ion-content>\n    </ion-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n</ion-split-pane>\n</ion-app>\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");











//import { environment } from 'src/environments/environment.prod';
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menulateral_menulateral_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menulateral/menulateral.component */ "xkD7");




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_menulateral_menulateral_component__WEBPACK_IMPORTED_MODULE_3__["MenulateralComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [_menulateral_menulateral_component__WEBPACK_IMPORTED_MODULE_3__["MenulateralComponent"]]
    })
], ComponentsModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let AuthService = class AuthService {
    constructor(afAuth, afs, db, alertController, router, toastController) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.db = db;
        this.alertController = alertController;
        this.router = router;
        this.toastController = toastController;
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((user) => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    }
    /*****************************************************************************************************
    
    La funcion isEmailVerify recibe una variable user y retorna un booleano dependiendo si el resultado es
    verdadero o no, dependiendo si el usuario esta verificado o no
    
    ******************************************************************************************************/
    isEmailVerify(user) {
        return (user.emailVerified === true ? true : false);
    }
    /*****************************************************************************************************
    
    La funcion resetPassword recibe la variable email de tipo string, esta funcion se encarga de utilizar
    una funcion que envia el corro para poder resetear la contraseña, en caso de que el correo no exista,
    se lanza una alerta en la pantalla indicando esto.
    
    ******************************************************************************************************/
    resetPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.sendPasswordResetEmail(email);
                this.router.navigate(['/cuenta']);
                this.presentToast("El correo se ha enviado correctamente ");
            }
            catch (error) {
                console.log('Error->', error);
                console.log(error.message);
                if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    this.Imprimir_error("Este usuario no corresponde a nunguna cuenta");
                    this.presentToast("El correo no se ha enviado correctamente ");
                }
                else {
                    this.Imprimir_error("El correo no esta escrito correctamente");
                    this.presentToast("El correo no se ha enviado correctamente ");
                }
            }
        });
    }
    /*async loginGoogle(): Promise<User>{
      try{
          const {user}= await this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
          this.updateUserData(user);
          return user;
      }
      catch(error){console.log('Error->',error)}
    } */
    /*****************************************************************************************************
    
    La funcion register recibe en string el email, password, nombre, apellido, dia, mes, anio, y genero
    para poder registrar el email con estos datos, se usa la funcion createUserWithEmailAndPassword, el cual
    crea el usuario en firebase, y este le otorga el ID al usuario, adicionalmente a esto, se crea una nueva
    carpeta en la coleccion Datos_Usuario con el nombre del ID del usuario creado, y por ultimo se envia el
    correo de verificacion, se retorna usuario para poder saber si este se creo correctamente.
    
    ******************************************************************************************************/
    register(email, password, nombre, apellido, dia, mes, anio, genero) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.createUserWithEmailAndPassword(email, password);
                const DatosRef = this.db.collection('Datos_Usuario');
                yield DatosRef.doc(user.uid).set({
                    nombre: nombre,
                    apellido: apellido,
                    dia: dia,
                    mes: mes,
                    anio: anio,
                    genero: genero,
                });
                yield this.sendVerificationEmail();
                return user;
            }
            catch (error) {
                console.log('Error->', error.message);
                //this.Imprimir_error(error.message)
            }
        });
    }
    /*****************************************************************************************************
   La funcion presentToast es una funcion que recibe una variable texto, y la muestra en la pantalla
   durante unos pocos segundos.
   ******************************************************************************************************/
    presentToast(texto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: texto,
                duration: 2000
            });
            toast.present();
        });
    }
    /*****************************************************************************************************
   La funcion Imprimir_error es una funcion que recibe una variable texto, y la muestra un objeto de tipo
   alert en la pantalla.
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
   
   La funcion login se encarga de iniciar la cuenta con firebase, al mismo tiempo extrae los datos de
   la cuenta en las variables de usuario$ y datos_usuario$
   
   ******************************************************************************************************/
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.afAuth.signInWithEmailAndPassword(email, password);
                this.usuario$ = user;
                this.updateUserData(user);
                this.actualizar_datos();
                return user;
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*****************************************************************************************************
   
    Esta funcion envia el email de verificacion al correo
   
   ******************************************************************************************************/
    sendVerificationEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return (yield this.afAuth.currentUser).sendEmailVerification();
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*****************************************************************************************************
   
    La funcion de logout realiza la accion de cerrado de sesion con firebase, y borra las variables de
    los usuarios anteriores
   
   ******************************************************************************************************/
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.signOut();
                this.usuario$ = undefined;
                this.datos$ = undefined;
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*****************************************************************************************************
   
    La funcion de modificar_datos() actualiza los datos en firebase, la primera variable que recibe es de
    tipo usuario, y las otras son de tipo string como nombre, anio, mes, dia y  gener, que son las variables
    que se actualizaran
   
   ******************************************************************************************************/
    modificar_datos(user, nombre, apellido, anio, mes, dia, gener) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const datos = {
                    nombre: nombre,
                    apellido: apellido,
                    anio: anio,
                    mes: mes,
                    genero: gener,
                    dia: dia,
                };
                this.datos$ = datos;
                const dataRef = this.db.collection('Datos_Usuario').doc(user.uid);
                yield dataRef.set({
                    nombre: nombre,
                    apellido: apellido,
                    dia: dia,
                    mes: mes,
                    anio: anio,
                    genero: gener,
                }, { merge: true });
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*actualizar_datos(){
       const dataRef = this.db.collection('Datos_Usuario').doc(this.usuario$.uid);
       dataRef.snapshotChanges().subscribe( (Snapshot) => {
         const  datos:datos_usuario={
          nombre: Snapshot.data()["nombre"],
          apellido: Snapshot.data()["apellido"],
          anio: Snapshot.data()["anio"],
          mes: Snapshot.data()["mes"],
          genero: Snapshot.data()["genero"],
          dia: Snapshot.data()["dia"],
        }
          console.log("Actualizando...")
          this.datos$= datos;
          });
          console.log("Acabe actualizar")
     }*/
    /*****************************************************************************************************
   
    La funcion de actualizar_datos() actualiza los datos en la variable datos$ segun el usuario que se
    haya iniciado.
   
   ******************************************************************************************************/
    actualizar_datos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const dataRef = yield this.db.collection('Datos_Usuario').doc(this.usuario$.uid);
                dataRef.get().subscribe((Snapshot) => {
                    const datos = {
                        nombre: Snapshot.data()["nombre"],
                        apellido: Snapshot.data()["apellido"],
                        anio: Snapshot.data()["anio"],
                        mes: Snapshot.data()["mes"],
                        genero: Snapshot.data()["genero"],
                        dia: Snapshot.data()["dia"],
                    };
                    console.log("Actualizando...");
                    this.datos$ = datos;
                });
                console.log("Acabe actualizar");
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
    /*****************************************************************************************************
   
    La funcion de updateUserData() actualiza datos de user
   
   ******************************************************************************************************/
    updateUserData(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const userRef = this.afs.doc(`users/${user.uid}`);
                const data_2 = {
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: user.displayName,
                };
                const dataRef = this.db.collection('Datos_Usuario').doc(user.uid);
                yield dataRef.get().subscribe((Snapshot) => {
                    const datos = {
                        nombre: Snapshot.data()["nombre"],
                        apellido: Snapshot.data()["apellido"],
                        anio: Snapshot.data()["anio"],
                        mes: Snapshot.data()["mes"],
                        genero: Snapshot.data()["genero"],
                        dia: Snapshot.data()["dia"],
                    };
                    this.datos$ = datos;
                });
                return userRef.set(data_2, { merge: true });
            }
            catch (error) {
                console.log('Error->', error);
            }
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");




const routes = [
    {
        path: '',
        redirectTo: 'folder/ ',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'alarma',
        loadChildren: () => __webpack_require__.e(/*! import() | alarma-alarma-module */ "alarma-alarma-module").then(__webpack_require__.bind(null, /*! ./alarma/alarma.module */ "Yd9z")).then(m => m.AlarmaPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'cuenta',
        loadChildren: () => __webpack_require__.e(/*! import() | cuenta-cuenta-module */ "cuenta-cuenta-module").then(__webpack_require__.bind(null, /*! ./cuenta/cuenta.module */ "3uYb")).then(m => m.CuentaPageModule)
    },
    {
        path: 'compart1',
        loadChildren: () => __webpack_require__.e(/*! import() | compart1-compart1-module */ "compart1-compart1-module").then(__webpack_require__.bind(null, /*! ./compart1/compart1.module */ "Sa0J")).then(m => m.Compart1PageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'registrarse',
        loadChildren: () => __webpack_require__.e(/*! import() | registrarse-registrarse-module */ "registrarse-registrarse-module").then(__webpack_require__.bind(null, /*! ./registrarse/registrarse.module */ "5PF0")).then(m => m.RegistrarsePageModule)
    },
    {
        path: 'olvido-contra',
        loadChildren: () => __webpack_require__.e(/*! import() | olvido-contra-olvido-contra-module */ "olvido-contra-olvido-contra-module").then(__webpack_require__.bind(null, /*! ./olvido-contra/olvido-contra.module */ "xw8m")).then(m => m.OlvidoContraPageModule)
    },
    {
        path: 'verificacion',
        loadChildren: () => __webpack_require__.e(/*! import() | verificacion-verificacion-module */ "verificacion-verificacion-module").then(__webpack_require__.bind(null, /*! ./verificacion/verificacion.module */ "bXqo")).then(m => m.VerificacionPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => __webpack_require__.e(/*! import() | perfil-perfil-module */ "perfil-perfil-module").then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "ZEuG")).then(m => m.PerfilPageModule)
    },
    {
        path: 'seguimiento',
        loadChildren: () => __webpack_require__.e(/*! import() | seguimiento-seguimiento-module */ "seguimiento-seguimiento-module").then(__webpack_require__.bind(null, /*! ./seguimiento/seguimiento.module */ "e8ug")).then(m => m.SeguimientoPageModule),
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xkD7":
/*!******************************************************!*\
  !*** ./src/app/menulateral/menulateral.component.ts ***!
  \******************************************************/
/*! exports provided: MenulateralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenulateralComponent", function() { return MenulateralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menulateral_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menulateral.component.html */ "14dr");
/* harmony import */ var _menulateral_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menulateral.component.scss */ "Fc5s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");






let MenulateralComponent = class MenulateralComponent {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
        this.cuenta = "";
    }
    ngOnInit() { }
};
MenulateralComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenulateralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menulateral',
        template: _raw_loader_menulateral_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menulateral_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenulateralComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#75a9f9;\n}\n\nion-button {\n  --border-radius: 0px;\n  width: 100%;\n  --background:#75a9f9;\n  --background-activated:#4b8ff5;\n  --box-shadow:none;\n}\n\nion-col {\n  position: absolute;\n  top: 15%;\n  left: 0%;\n}\n\nion-label {\n  left: 15%;\n  position: absolute;\n}\n\nion-icon {\n  left: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUFBSjs7QUFLRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBQUZKOztBQUtFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUU7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XG4gIH1cblxuXG4gIFxuICBpb24tYnV0dG9ue1xuICAgIC0tYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIHdpZHRoIDoxMDAlO1xuICAgIC0tYmFja2dyb3VuZDojNzVhOWY5O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzRiOGZmNTtcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgfVxuICBcbiAgaW9uLWNvbHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wIDoxNSU7XG4gICAgbGVmdDogMCU7XG4gIH1cbiAgXG4gIGlvbi1sYWJlbHtcbiAgICBsZWZ0OiAxNSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIGlvbi1pY29ue1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map