(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compart1-compart1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/compart1/compart1.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compart1/compart1.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-no-border\">\r\n    <ion-button [routerLink]=\"['/folder/ ']\" class=\"Volver\">\r\n      <ion-icon name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <ion-title>Compartimento 1</ion-title>\r\n    <ion-button  (click)=\"func_borrar()\" class=\"borrar\"><ion-icon style=\"zoom:0.5;\" name=\"trash-outline\"></ion-icon></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [fullscreen]=\"true\">\r\n    <ion-col *ngIf=\"enable==1\" > \r\n      <ion-row>\r\n      <div class=\"item\">\r\n        <label class=\"labels\" >Marca:</label>\r\n        <ion-input disabled=\"{{isDisabled}}\" placeholder={{place_marca}} #marca></ion-input></div>  </ion-row>\r\n        <ion-row><div class=\"item\">\r\n        <label class=\"labels\"  >Medicamento:</label>\r\n        <ion-input disabled=\"{{isDisabled}}\"  placeholder={{place_medicamento}}  #medicamento></ion-input></div> </ion-row>\r\n        <ion-row><div class=\"item\">\r\n        <label class=\"labels\">N° Pastillas:</label>\r\n        <ion-input disabled=\"{{isDisabled}}\" placeholder={{place_N_pastillas}}  #Npastilla></ion-input></div> </ion-row>\r\n        <ion-row><div class=\"item\">\r\n        <label class=\"labels\">Patillas tratamiento:</label>\r\n        <ion-input disabled=\"{{isDisabled}}\" placeholder={{place_pastillas_tra}}  #Ntratamiento></ion-input></div></ion-row> \r\n        <ion-row><div class=\"item\">\r\n        <label class=\"labels\">Temperatura maxima (°C):</label>\r\n        <ion-input disabled=\"{{isDisabled}}\" placeholder={{place_temperatura_max}}  #temp_max></ion-input></div> </ion-row>\r\n        <ion-row><div class=\"item\">\r\n        <label class=\"labels\">Humedad maxima (%):</label>\r\n        <ion-input disabled=\"{{isDisabled}}\" placeholder={{place_humedad_max}}  #hum_max></ion-input></div> </ion-row>\r\n        <ion-row> <h4>Alarma   </h4>\r\n          <ion-button *ngIf=\"habilitar==true\" (click)=\"agregar_alarma()\" class=\"Volver\">\r\n            <ion-icon name=\"add-outline\"  ></ion-icon>\r\n          </ion-button>\r\n        </ion-row>\r\n        <!--  <ion-row><ion-button  (click)=\"mqtt_envio()\">MQTT</ion-button></ion-row>-->\r\n        <ion-row *ngFor=\"let p of miVariableHora\">\r\n          <div class=\"item\">\r\n            <ion-datetime displayFormat=\"h:mm a\" [(ngModel)]=\"p.fecha_ini\"  [disabled]=\"isDisabled\"></ion-datetime>\r\n          </div>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-button (click)=\"Boton_guardar(marca,medicamento,Npastilla,Ntratamiento,temp_max,hum_max)\">{{nombre_boton}}  </ion-button>\r\n          <ion-button (click)=\"leerqr()\">Leer QR code</ion-button>\r\n          <ion-button *ngIf=\"habilitar==true\" (click)=\"cancelar()\">Cancelar </ion-button>\r\n        </ion-row>\r\n\r\n\r\n    </ion-col>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/compart1/compart1-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/compart1/compart1-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Compart1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1PageRoutingModule", function() { return Compart1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _compart1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compart1.page */ "./src/app/compart1/compart1.page.ts");




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

/***/ "./src/app/compart1/compart1.module.ts":
/*!*********************************************!*\
  !*** ./src/app/compart1/compart1.module.ts ***!
  \*********************************************/
/*! exports provided: Compart1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1PageModule", function() { return Compart1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _compart1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compart1-routing.module */ "./src/app/compart1/compart1-routing.module.ts");
/* harmony import */ var _compart1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compart1.page */ "./src/app/compart1/compart1.page.ts");







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

/***/ "./src/app/compart1/compart1.page.scss":
/*!*********************************************!*\
  !*** ./src/app/compart1/compart1.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-icon {\n  font-size: 330%;\n}\n\nion-title {\n  position: absolute;\n  top: 30%;\n  right: 20%;\n  color: #140b0a;\n}\n\n.Volver {\n  --background:#3d8af7;\n  --background-activated:#63a3fc;\n  --color:#140b0a;\n  width: 18%;\n  --box-shadow:none;\n  height: 7%;\n}\n\n.borrar {\n  --background:#75a9f9;\n  --background-activated:#63a3fc;\n  --color:#140b0a;\n  --box-shadow:none;\n  height: 7%;\n  padding-left: 60%;\n}\n\nion-col {\n  position: absolute;\n  top: 10%;\n  left: 12.5%;\n}\n\nion-row {\n  padding-top: 2%;\n}\n\n.item {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFydDEvQzpcXFVzZXJzXFx4Ym94a1xcT25lRHJpdmVcXERvY3VtZW50b3NcXDd0bW9fc2VtZXN0cmVcXElPVFxcQXBsaWNhY2lvblxcVHJhY2twaWxsL3NyY1xcYXBwXFxjb21wYXJ0MVxcY29tcGFydDEucGFnZS5zY3NzIiwic3JjL2FwcC9jb21wYXJ0MS9jb21wYXJ0MS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQ0U7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcGFydDEvY29tcGFydDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xyXG4gIH1cclxuICBcclxuICBpb24taGVhZGVyIHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMzMwJTtcclxuICB9XHJcblxyXG4gIGlvbi10aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxuICAgIGNvbG9yOiAjMTQwYjBhO1xyXG59XHJcblxyXG4gIC5Wb2x2ZXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiMzZDhhZjc7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM2M2EzZmM7XHJcbiAgICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gIH1cclxuXHJcbiAgLmJvcnJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6Izc1YTlmOTtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzYzYTNmYztcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgaGVpZ2h0OiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNjAlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuaW9uLWNvbHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wIDoxMCU7XHJcbiAgICBsZWZ0OiAxMi41JTtcclxufVxyXG5pb24tcm93e1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG4uaXRlbXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xyXG4gIHdpZHRoOjc1JTtcclxuICBwYWRkaW5nLWJvdHRvbTowJTtcclxufVxyXG5cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzMwJTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDIwJTtcbiAgY29sb3I6ICMxNDBiMGE7XG59XG5cbi5Wb2x2ZXIge1xuICAtLWJhY2tncm91bmQ6IzNkOGFmNztcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojNjNhM2ZjO1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIHdpZHRoOiAxOCU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBoZWlnaHQ6IDclO1xufVxuXG4uYm9ycmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IzYzYTNmYztcbiAgLS1jb2xvcjojMTQwYjBhO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA3JTtcbiAgcGFkZGluZy1sZWZ0OiA2MCU7XG59XG5cbmlvbi1jb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICBsZWZ0OiAxMi41JTtcbn1cblxuaW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhOWY5O1xuICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/compart1/compart1.page.ts":
/*!*******************************************!*\
  !*** ./src/app/compart1/compart1.page.ts ***!
  \*******************************************/
/*! exports provided: Compart1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compart1Page", function() { return Compart1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/__ivy_ngcc__/ngx/index.js");





let Compart1Page = class Compart1Page {
    constructor(authSvc, alertController, qrScanner, platform) {
        this.authSvc = authSvc;
        this.alertController = alertController;
        this.qrScanner = qrScanner;
        this.platform = platform;
        this.miVariableHora = [];
        this.habilitar = false;
        this.isDisabled = true;
        this.place_marca = "Ingrese marca";
        this.place_medicamento = "Ingresa medicamento";
        this.place_N_pastillas = "Ingresa numero de pastillas";
        this.place_pastillas_tra = "Ingresa pastillas tratamiento";
        this.place_temperatura_max = "Ingresa temperatura max";
        this.place_humedad_max = "Ingresa humedad maxima";
        this.enable = 1;
        this.platform.backButton.subscribeWithPriority(0, () => {
            document.getElementsByTagName("body")[0].style.opacity = "1";
            this.scanSubscription.unsubscribe();
        });
        // this.platform.ready().then(() => {
        //  });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.enable = 1;
        this.nombre_boton = "Modificar";
        this.habilitar = false;
        this.isDisabled = true;
        this.imprimir_labels();
        console.log(this.authSvc.compar1$);
    }
    ionViewWillLeave() {
        this.stopScanning();
    }
    imprimir_labels() {
        if (this.authSvc.compar1$.Npastilla == " ") {
            this.place_marca = "Ingrese marca";
            this.place_medicamento = "Ingresa medicamento";
            this.place_N_pastillas = "Ingresa numero de pastillas";
            this.place_pastillas_tra = "Ingresa pastillas tratamiento";
            this.place_temperatura_max = "Ingresa temperatura max";
            this.place_humedad_max = "Ingresa humedad maxima";
            this.miVariableHora = [];
        }
        else {
            this.place_marca = this.authSvc.compar1$.marca;
            this.place_medicamento = this.authSvc.compar1$.medicamento;
            this.place_N_pastillas = this.authSvc.compar1$.Npastilla;
            this.place_pastillas_tra = this.authSvc.compar1$.Ntratamiento;
            this.place_temperatura_max = this.authSvc.compar1$.temp_max;
            this.place_humedad_max = this.authSvc.compar1$.hum_max;
            const var_string = this.authSvc.compar1$.hora.split('/');
            this.miVariableHora = [];
            var i = 0;
            for (i = 0; i < (var_string.length); i++) {
                if (var_string[i] != "") {
                    var new_fecha = { fecha_ini: var_string[i] };
                    this.miVariableHora.push(new_fecha);
                }
            }
            console.log(var_string);
        }
    }
    func_borrar() {
        this.authSvc.modificar_compartimento(this.authSvc.usuario$, " ", " ", " ", " ", " ", " ", " ");
        this.authSvc.compar1$.marca = " ";
        this.authSvc.compar1$.medicamento = " ";
        this.authSvc.compar1$.Npastilla = " ";
        this.authSvc.compar1$.Ntratamiento = " ";
        this.authSvc.compar1$.temp_max = " ";
        this.authSvc.compar1$.hum_max = " ";
        this.authSvc.compar1$.hora = " ";
        this.imprimir_labels();
        this.miVariableHora = [];
    }
    agregar_alarma() {
        const new_fecha = { fecha_ini: "2012-12-15T06:00:20.789" };
        this.miVariableHora.push(new_fecha);
        console.log(this.miVariableHora);
    }
    Boton_guardar(marca, medicamento, Npastilla, Ntratamiento, temp_max, hum_max) {
        var marca_v = marca.value;
        var medicamento_v = medicamento.value;
        if (this.nombre_boton == "Modificar") {
            this.nombre_boton = "Guardar";
            this.habilitar = true;
            this.isDisabled = false;
        }
        else {
            if (this.authSvc.compar1$.hum_max != " " || ((marca_v != "") && (medicamento_v != "") && (Npastilla.value != "") && (Ntratamiento.value != "") && (temp_max.value != "") && (hum_max.value != "") && (this.miVariableHora.length > 0))) {
                var hora = "/";
                var i;
                for (i = 0; i < (this.miVariableHora.length); i++) {
                    hora = hora + this.miVariableHora[i]["fecha_ini"] + "/";
                }
                if ((marca_v == "")) {
                    marca_v = this.authSvc.compar1$.marca;
                    marca.value = this.authSvc.compar1$.marca;
                    medicamento_v = this.authSvc.compar1$.medicamento;
                    medicamento.value = this.authSvc.compar1$.medicamento;
                    Npastilla.value = this.authSvc.compar1$.Npastilla;
                    Ntratamiento.value = this.authSvc.compar1$.Ntratamiento;
                    temp_max.value = this.authSvc.compar1$.temp_max;
                    hum_max.value = this.authSvc.compar1$.hum_max;
                }
                marca_v = marca_v.replace(" ", "_");
                medicamento_v = medicamento_v.replace(" ", "_");
                this.authSvc.modificar_compartimento(this.authSvc.usuario$, marca.value, medicamento.value, Npastilla.value, Ntratamiento.value, temp_max.value, hum_max.value, hora);
                this.nombre_boton = "Modificar";
                this.habilitar = false;
                this.isDisabled = true;
                this.authSvc.envio_info_usuario_thing_speak(this.authSvc.usuario$.uid, Npastilla.value, hora, hum_max.value, marca_v, medicamento_v, temp_max.value, Ntratamiento.value);
            }
            else {
                this.Imprimir_error("Los campos no estan completos");
            }
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
    cancelar() {
        this.nombre_boton = "Modificar";
        this.habilitar = false;
        this.isDisabled = true;
    }
    // Optionally request the permission early
    leerqr() {
        this.enable = 0;
        this.Openscan();
    }
    finalizarscan(texto) {
        console.log('QR Code Secan', texto, 'Working');
        this.enable = 1;
        console.log('Enable es:', this.enable);
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.scanSubscription.unsubscribe();
        this.qrScanner.hide();
    }
    Openscan() {
        window.document.querySelector('ion-app').classList.add('cameraView');
        window.document.body.style.backgroundColor = 'transparent';
        // Optionally request the permission early
        this.qrScanner.prepare().then((status) => {
            if (status.authorized) {
                //document.getElementsByTagName("body")[0].style.opacity = "0";
                this.scanSubscription = this.qrScanner.scan().subscribe((text) => {
                    this.finalizarscan(text);
                    //document.getElementsByTagName("body")[0].style.opacity = "1";
                    // hide camera preview
                    //this.qrScanner.destroy();
                });
                this.qrScanner.enableLight();
                this.qrScanner.useBackCamera();
                this.qrScanner.show();
            }
            else if (status.denied) {
                this.qrScanner.openSettings();
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch((e) => console.log('Error is', e));
    }
    showAlert(header, sub, msg) {
        this.AlertController.create({
            header: header,
            subHeader: sub,
            message: msg,
            buttons: ['Ok']
        }).then(alert => alert.present());
    }
    stopScanning() {
        (this.scanSubscription) ? this.scanSubscription.unsubscribe() : null;
        this.scanSubscription = null;
        window.document.querySelector('ion-app').classList.remove('cameraView');
        this.qrScanner.hide();
        this.qrScanner.destroy();
    }
};
Compart1Page.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["QRScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
Compart1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compart1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./compart1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/compart1/compart1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./compart1.page.scss */ "./src/app/compart1/compart1.page.scss")).default]
    })
], Compart1Page);



/***/ })

}]);
//# sourceMappingURL=compart1-compart1-module.js.map