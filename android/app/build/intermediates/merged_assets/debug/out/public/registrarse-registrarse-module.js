(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrarse-registrarse-module"],{

/***/ "5PF0":
/*!***************************************************!*\
  !*** ./src/app/registrarse/registrarse.module.ts ***!
  \***************************************************/
/*! exports provided: RegistrarsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageModule", function() { return RegistrarsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registrarse_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrarse-routing.module */ "LmNQ");
/* harmony import */ var _registrarse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrarse.page */ "Flcd");







let RegistrarsePageModule = class RegistrarsePageModule {
};
RegistrarsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrarse_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarsePageRoutingModule"]
        ],
        declarations: [_registrarse_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarsePage"]]
    })
], RegistrarsePageModule);



/***/ }),

/***/ "Flcd":
/*!*************************************************!*\
  !*** ./src/app/registrarse/registrarse.page.ts ***!
  \*************************************************/
/*! exports provided: RegistrarsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePage", function() { return RegistrarsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registrarse_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registrarse.page.html */ "nWda");
/* harmony import */ var _registrarse_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registrarse.page.scss */ "V6bd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");







let RegistrarsePage = class RegistrarsePage {
    constructor(authSvc, router, alertController) {
        this.authSvc = authSvc;
        this.router = router;
        this.alertController = alertController;
        this.var = "male";
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.inputname.value = '';
        this.inputapellido.value = '';
        this.inputemail.value = '';
        this.inputpassword.value = '';
        this.inputverify_password.value = '';
        this.var = "male";
    }
    male_boton() {
        this.var = "masculino";
    }
    ;
    female_boton() {
        this.var = "femenino";
    }
    onRegister(email, password, nombre, apellido, dia, mes, anio, verify_password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if ((nombre.value != "") && (email.value != "") && (password.value != "") && (apellido.value != "") && (dia.value != "") && (mes.value != "") && (anio.value != "") && (verify_password.value != "") && (this.var != "male")) {
                    if (this.verificar_contra(password.value)) {
                        if (verify_password.value == password.value) {
                            const user = yield this.authSvc.register(email.value, password.value, nombre.value, apellido.value, dia.value, mes.value, anio.value, this.var);
                            if (user) {
                                this.router.navigate(['/verificacion']);
                            }
                            else {
                                this.Imprimir_error("El correo ya esta siendo usado por otra cuenta");
                            }
                        }
                        else {
                            this.Imprimir_error("Las contraseñas no coinciden");
                        }
                    }
                }
                else {
                    this.Imprimir_error("Revise que todos los campos se llenaran correctamente ");
                }
            }
            catch (error) {
                console.log('Error', error);
            }
        });
    }
    verificar_contra(password) {
        const len = password.length;
        var asci = 0;
        var requisitos = [0, 0, 0];
        for (var i = 0; i < len; i++) {
            asci = password.charCodeAt(i);
            if ((asci >= 65) && (asci <= 90)) {
                requisitos[0] = 1; //mayus
            }
            else {
                if ((asci >= 97) && (asci <= 122)) {
                    requisitos[1] = 1; //minus
                }
                else {
                    if ((asci >= 48) && (asci <= 57)) {
                        requisitos[2] = 1; //num
                    }
                }
            }
        }
        if (password.length < 6) {
            this.Imprimir_error("La contraseña debe tener al menos 6 caracteres");
            return (0);
        }
        else {
            if (requisitos[0] == 0) {
                this.Imprimir_error("La contraseña debe tener al menos una mayuscula");
                return (0);
            }
            else {
                if (requisitos[1] == 0) {
                    this.Imprimir_error("La contraseña debe tener al menos una minuscula");
                    return (0);
                }
                else {
                    if (requisitos[2] == 0) {
                        this.Imprimir_error("La contraseña debe tener al menos un numero");
                        return (0);
                    }
                    else {
                        return (1);
                    }
                }
            }
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
                subHeader: "La contraseña debe tener al menos 6 caracteres,1 número, una mayuscula y una miniscula",
                //message: texto,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
RegistrarsePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
RegistrarsePage.propDecorators = {
    inputname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['nombre',] }],
    inputapellido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['apellido',] }],
    inputemail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['email',] }],
    inputpassword: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['password',] }],
    inputverify_password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['verify_password',] }]
};
RegistrarsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registrarse',
        template: _raw_loader_registrarse_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registrarse_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrarsePage);



/***/ }),

/***/ "LmNQ":
/*!***********************************************************!*\
  !*** ./src/app/registrarse/registrarse-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageRoutingModule", function() { return RegistrarsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registrarse_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrarse.page */ "Flcd");




const routes = [
    {
        path: '',
        component: _registrarse_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarsePage"]
    }
];
let RegistrarsePageRoutingModule = class RegistrarsePageRoutingModule {
};
RegistrarsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarsePageRoutingModule);



/***/ }),

/***/ "V6bd":
/*!***************************************************!*\
  !*** ./src/app/registrarse/registrarse.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 3%;\n  left: 0%;\n}\n\nion-col {\n  position: absolute;\n  top: 10%;\n  left: 12.5%;\n}\n\nion-row {\n  padding-top: 2%;\n}\n\n.item_nombre {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_apellido {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_correo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_contra {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_contra_Ver {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_sexo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.Volver {\n  --background:#3d8af7;\n  --background-activated:#75a9f9;\n  --color:#140b0a;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 18%;\n  height: 7%;\n  --box-shadow:none;\n}\n\n.control_group {\n  padding-left: 3%;\n  padding-bottom: 3%;\n  padding-top: 3%;\n  background-color: #75a9f9;\n  width: 75%;\n  border-radius: 10px;\n}\n\nselect {\n  border-radius: 5px;\n  background-color: #b8d5fd;\n}\n\n.Radio_sexo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n}\n\n.labels {\n  font-weight: 700;\n}\n\n.controls {\n  padding-top: 3%;\n}\n\n.Boton_Reg {\n  --background:#75a9f9;\n  --background-activated:rgb(143, 189, 253);\n  --color:#140b0a;\n  padding-left: 10%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.Boton_ayuda {\n  padding-left: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdHJhcnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFJQTtFQUNJLHlCQUFBO0VBRUEscUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FBTEo7O0FBT0E7RUFDSSx5QkFBQTtFQUVBLHFCQUFBO0VBR0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtBQVJKOztBQVVBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7QUFYSjs7QUFhQTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FBZEo7O0FBZ0JBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7QUFqQko7O0FBb0JBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7QUFyQko7O0FBeUJBO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQXRCSjs7QUF3QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBSUEsVUFBQTtFQUNBLG1CQUFBO0FBeEJKOztBQTBCQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUF2Qko7O0FBMkJBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBM0JKOztBQThCQTtFQUNJLGdCQUFBO0FBM0JKOztBQTZCQTtFQUNJLGVBQUE7QUExQko7O0FBNEJBO0VBR0ksb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtBQTdCSjs7QUFnQ0E7RUFFSSxnQkFBQTtBQTlCSiIsImZpbGUiOiJyZWdpc3RyYXJzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMyU7XHJcbiAgICBsZWZ0OjAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuaW9uLWNvbHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wIDoxMCU7XHJcbiAgICBsZWZ0OiAxMi41JTtcclxufVxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG5cclxuLml0ZW1fbm9tYnJle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzVhOWY5O1xyXG4gICAgLy90b3A6MTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3JpZ2h0OjEyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIC8vaGVpZ2h0OiA3JTtcclxuICAgIHBhZGRpbmctYm90dG9tOjAlO1xyXG59XHJcbi5pdGVtX2FwZWxsaWRve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzVhOWY5O1xyXG4gICAgLy90b3A6MjAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3JpZ2h0OjEyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIC8vaGVpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOjAlO1xyXG59XHJcbi5pdGVtX2NvcnJlb3tcclxuICAgIC8vdG9wOiAzMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vcmlnaHQ6MTIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgLy9oZWlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MCU7XHJcbn1cclxuLml0ZW1fY29udHJhe1xyXG4gICAgLy90b3A6IDQwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9yaWdodDoxMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICAvL2hlaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowJTtcclxufVxyXG4uaXRlbV9jb250cmFfVmVye1xyXG4gICAgLy90b3A6IDUwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9yaWdodDoxMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICAvL2hlaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowJTtcclxufVxyXG5cclxuLml0ZW1fc2V4b3tcclxuICAgIC8vdG9wOiA3MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vQGF0LXJvb3Q6MTIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgLy9oZWlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MCU7XHJcbn1cclxuXHJcblxyXG4uVm9sdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDojM2Q4YWY3O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojNzVhOWY5O1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIGhlaWdodDogNyU7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICB9XHJcbi5jb250cm9sX2dyb3Vwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIHBhZGRpbmctYm90dG9tOjMlO1xyXG4gICAgcGFkZGluZy10b3A6MyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vdG9wOiA2MC4yJTtcclxuICAgIC8vcmlnaHQ6MTIuNSU7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxufVxyXG5zZWxlY3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZDVmZDtcclxufVxyXG5cclxuXHJcbi5SYWRpb19zZXhve1xyXG4gICAgLy90b3A6IDY5LjclO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzVhOWY5O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3JpZ2h0OjEyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIC8vaGVpZ2h0OiA1JTtcclxufVxyXG4ubGFiZWxze1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uY29udHJvbHN7XHJcbiAgICBwYWRkaW5nLXRvcDozJVxyXG59XHJcbi5Cb3Rvbl9SZWd7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vdG9wOiA4MCU7XHJcbiAgICAtLWJhY2tncm91bmQ6Izc1YTlmOTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiKDE0MywgMTg5LCAyNTMpO1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgLy9yaWdodDoyNSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIC8vd2lkdGg6NTAlO1xyXG4gICAgZm9udC1zaXplOjEwMCUgO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLkJvdG9uX2F5dWRhe1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "nWda":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrarse/registrarse.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-title>Registrarse</ion-title>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-button [routerLink]=\"['/cuenta']\" class=\"Volver\">\r\n    <ion-icon name=\"arrow-back\"></ion-icon>\r\n  </ion-button>\r\n  <ion-col> \r\n    <ion-row>\r\n    <div class=\"item_nombre\">\r\n      <label class=\"labels\" >Nombre:</label>\r\n      <ion-input  placeholder=\"Nombre\" #nombre></ion-input></div>  </ion-row>\r\n      <ion-row><div class=\"item_apellido\">\r\n      <label class=\"labels\"  >Apellido:</label>\r\n      <ion-input  placeholder=\"Apellido\" #apellido></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"item_correo\">\r\n      <label class=\"labels\">Correo:</label>\r\n      <ion-input  placeholder=\"Correo\" type=\"Correo\" #email></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"item_contra\">\r\n      <label class=\"labels\">Contraseña:</label>\r\n      <ion-input placeholder=\"Contraseña\" type=\"password\" #password ></ion-input></div></ion-row> \r\n      <ion-row><div class=\"item_contra_Ver\">\r\n      <label class=\"labels\">Repita Contraseña :</label>\r\n      <ion-input placeholder=\"Repita Contraseña\" type=\"password\" #verify_password></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"control_group\">\r\n      <label  class=\"labels\">Fecha de nacimiento:</label>\r\n      <div class=\"controls\">\r\n        <select name=\"dob-day\" id=\"dob-day\" #dia>\r\n          <option value=\"\">Dia</option>\r\n          <option value=\"\">---</option>\r\n          <option value=\"01\">01</option>\r\n          <option value=\"02\">02</option>\r\n          <option value=\"03\">03</option>\r\n          <option value=\"04\">04</option>\r\n          <option value=\"05\">05</option>\r\n          <option value=\"06\">06</option>\r\n          <option value=\"07\">07</option>\r\n          <option value=\"08\">08</option>\r\n          <option value=\"09\">09</option>\r\n          <option value=\"10\">10</option>\r\n          <option value=\"11\">11</option>\r\n          <option value=\"12\">12</option>\r\n          <option value=\"13\">13</option>\r\n          <option value=\"14\">14</option>\r\n          <option value=\"15\">15</option>\r\n          <option value=\"16\">16</option>\r\n          <option value=\"17\">17</option>\r\n          <option value=\"18\">18</option>\r\n          <option value=\"19\">19</option>\r\n          <option value=\"20\">20</option>\r\n          <option value=\"21\">21</option>\r\n          <option value=\"22\">22</option>\r\n          <option value=\"23\">23</option>\r\n          <option value=\"24\">24</option>\r\n          <option value=\"25\">25</option>\r\n          <option value=\"26\">26</option>\r\n          <option value=\"27\">27</option>\r\n          <option value=\"28\">28</option>\r\n          <option value=\"29\">29</option>\r\n          <option value=\"30\">30</option>\r\n          <option value=\"31\">31</option>\r\n        </select>\r\n        <select name=\"dob-month\" id=\"dob-month\" #mes>\r\n          <option value=\"\">Mes</option>\r\n          <option value=\"\">-----</option>\r\n          <option value=\"01\">Enero</option>\r\n          <option value=\"02\">Febrero</option>\r\n          <option value=\"03\">Marzo</option>\r\n          <option value=\"04\">Abril</option>\r\n          <option value=\"05\">Mayo</option>\r\n          <option value=\"06\">Junio</option>\r\n          <option value=\"07\">Julio</option>\r\n          <option value=\"08\">Agosto</option>\r\n          <option value=\"09\">Septiembre</option>\r\n          <option value=\"10\">Octubre</option>\r\n          <option value=\"11\">Noviembre</option>\r\n          <option value=\"12\">Diciembre</option>\r\n        </select>\r\n        <select name=\"dob-year\" id=\"dob-year\" #anio>\r\n          <option value=\"\">Año</option>\r\n          <option value=\"\">----</option>\r\n          <option value=\"2020\">2020</option>\r\n          <option value=\"2019\">2019</option>\r\n          <option value=\"2018\">2018</option>\r\n          <option value=\"2017\">2017</option>\r\n          <option value=\"2016\">2016</option>\r\n          <option value=\"2015\">2015</option>\r\n          <option value=\"2014\">2014</option>\r\n          <option value=\"2013\">2013</option>\r\n          <option value=\"2012\">2012</option>\r\n          <option value=\"2011\">2011</option>\r\n          <option value=\"2010\">2010</option>\r\n          <option value=\"2009\">2009</option>\r\n          <option value=\"2008\">2008</option>\r\n          <option value=\"2007\">2007</option>\r\n          <option value=\"2006\">2006</option>\r\n          <option value=\"2005\">2005</option>\r\n          <option value=\"2004\">2004</option>\r\n          <option value=\"2003\">2003</option>\r\n          <option value=\"2002\">2002</option>\r\n          <option value=\"2001\">2001</option>\r\n          <option value=\"2000\">2000</option>\r\n          <option value=\"1999\">1999</option>\r\n          <option value=\"1998\">1998</option>\r\n          <option value=\"1997\">1997</option>\r\n          <option value=\"1996\">1996</option>\r\n          <option value=\"1995\">1995</option>\r\n          <option value=\"1994\">1994</option>\r\n          <option value=\"1993\">1993</option>\r\n          <option value=\"1992\">1992</option>\r\n          <option value=\"1991\">1991</option>\r\n          <option value=\"1990\">1990</option>\r\n          <option value=\"1989\">1989</option>\r\n          <option value=\"1988\">1988</option>\r\n          <option value=\"1987\">1987</option>\r\n          <option value=\"1986\">1986</option>\r\n          <option value=\"1985\">1985</option>\r\n          <option value=\"1984\">1984</option>\r\n          <option value=\"1983\">1983</option>\r\n          <option value=\"1982\">1982</option>\r\n          <option value=\"1981\">1981</option>\r\n          <option value=\"1980\">1980</option>\r\n          <option value=\"1979\">1979</option>\r\n          <option value=\"1978\">1978</option>\r\n          <option value=\"1977\">1977</option>\r\n          <option value=\"1976\">1976</option>\r\n          <option value=\"1975\">1975</option>\r\n          <option value=\"1974\">1974</option>\r\n          <option value=\"1973\">1973</option>\r\n          <option value=\"1972\">1972</option>\r\n          <option value=\"1971\">1971</option>\r\n          <option value=\"1970\">1970</option>\r\n          <option value=\"1969\">1969</option>\r\n          <option value=\"1968\">1968</option>\r\n          <option value=\"1967\">1967</option>\r\n          <option value=\"1966\">1966</option>\r\n          <option value=\"1965\">1965</option>\r\n          <option value=\"1964\">1964</option>\r\n          <option value=\"1963\">1963</option>\r\n          <option value=\"1962\">1962</option>\r\n          <option value=\"1961\">1961</option>\r\n          <option value=\"1960\">1960</option>\r\n          <option value=\"1959\">1959</option>\r\n          <option value=\"1958\">1958</option>\r\n          <option value=\"1957\">1957</option>\r\n          <option value=\"1956\">1956</option>\r\n          <option value=\"1955\">1955</option>\r\n          <option value=\"1954\">1954</option>\r\n          <option value=\"1953\">1953</option>\r\n          <option value=\"1952\">1952</option>\r\n          <option value=\"1951\">1951</option>\r\n          <option value=\"1950\">1950</option>\r\n          <option value=\"1949\">1949</option>\r\n          <option value=\"1948\">1948</option>\r\n          <option value=\"1947\">1947</option>\r\n          <option value=\"1946\">1946</option>\r\n          <option value=\"1945\">1945</option>\r\n          <option value=\"1944\">1944</option>\r\n          <option value=\"1943\">1943</option>\r\n          <option value=\"1942\">1942</option>\r\n          <option value=\"1941\">1941</option>\r\n          <option value=\"1940\">1940</option>\r\n          <option value=\"1939\">1939</option>\r\n          <option value=\"1938\">1938</option>\r\n          <option value=\"1937\">1937</option>\r\n          <option value=\"1936\">1936</option>\r\n          <option value=\"1935\">1935</option>\r\n          <option value=\"1934\">1934</option>\r\n          <option value=\"1933\">1933</option>\r\n          <option value=\"1932\">1932</option>\r\n          <option value=\"1931\">1931</option>\r\n          <option value=\"1930\">1930</option>\r\n          <option value=\"1929\">1929</option>\r\n          <option value=\"1928\">1928</option>\r\n          <option value=\"1927\">1927</option>\r\n          <option value=\"1926\">1926</option>\r\n          <option value=\"1925\">1925</option>\r\n          <option value=\"1924\">1924</option>\r\n          <option value=\"1923\">1923</option>\r\n          <option value=\"1922\">1922</option>\r\n          <option value=\"1921\">1921</option>\r\n          <option value=\"1920\">1920</option>\r\n          <option value=\"1919\">1919</option>\r\n          <option value=\"1918\">1918</option>\r\n          <option value=\"1917\">1917</option>\r\n          <option value=\"1916\">1916</option>\r\n          <option value=\"1915\">1915</option>\r\n          <option value=\"1914\">1914</option>\r\n          <option value=\"1913\">1913</option>\r\n          <option value=\"1912\">1912</option>\r\n          <option value=\"1911\">1911</option>\r\n          <option value=\"1910\">1910</option>\r\n          <option value=\"1909\">1909</option>\r\n          <option value=\"1908\">1908</option>\r\n          <option value=\"1907\">1907</option>\r\n          <option value=\"1906\">1906</option>\r\n          <option value=\"1905\">1905</option>\r\n          <option value=\"1904\">1904</option>\r\n          <option value=\"1903\">1903</option>\r\n          <option value=\"1901\">1901</option>\r\n          <option value=\"1900\">1900</option>\r\n        </select>\r\n      </div>\r\n    </div></ion-row>\r\n    <ion-row><div class=\"Radio_sexo\">\r\n      <label class=\"labels\">Genero:</label>\r\n      <form action=\"\" #genero>\r\n        <input type=\"radio\" name=\"gender\" value=\"masculino\" (click)=\"male_boton()\"> Masculino<br>\r\n        <input type=\"radio\" name=\"gender\" value=\"femenino\" (click)=\"female_boton()\"> Femenino<br>\r\n      </form>\r\n    </div></ion-row>\r\n    <ion-row><ion-button \r\n      class=\"Boton_Reg\"\r\n      type=\"submit\" (click)=\"onRegister(email, password,nombre,apellido, dia,mes, anio,verify_password)\"\r\n      \r\n    >Registrarse</ion-button>\r\n    <ion-button class=\"Boton_ayuda\" type=\"submit\" (click)=\"Imprimir_ayuda()\">\r\n      <ion-icon name=\"alert-outline\"></ion-icon>\r\n    </ion-button></ion-row>\r\n  </ion-col>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=registrarse-registrarse-module.js.map