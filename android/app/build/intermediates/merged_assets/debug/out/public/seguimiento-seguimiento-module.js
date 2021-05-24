(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seguimiento-seguimiento-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/seguimiento/seguimiento.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/seguimiento/seguimiento.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"ion-no-border\">\r\n    <ion-button [routerLink]=\"['/folder/ ']\" class=\"Volver\">\r\n      <ion-icon class=\"volverse\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <ion-title class=\"ion-no-border\">Seguimiento</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  [fullscreen]=\"true\">\r\n  <ion-row  style=\"background-color: #3d8af7;\"> \r\n    <ion-button (click)=\"atras()\" class=\"atra\">\r\n      <ion-icon  class=\"flechas\" name=\"arrow-back\"></ion-icon>\r\n    </ion-button>\r\n    <ion-label class=\"dia\">{{dias}} {{dia_mes}}{{de}}{{mes}}{{del}}{{anio}} </ion-label>\r\n    <ion-button (click)=\"Adelante()\" class=\"adel\">\r\n      <ion-icon class=\"flechas\" name=\"arrow-forward\"></ion-icon>\r\n    </ion-button>\r\n  </ion-row>\r\n\r\n<ion-card color=\"warning\" *ngIf=\"posicion == 30\">\r\n  <ion-item color=\"dark\">\r\n    <ion-icon name=\"file-tray-stacked-outline\" slot=\"start\"></ion-icon>\r\n    <ion-label>{{textoc}} </ion-label>\r\n  </ion-item>\r\n  <ion-card-content>\r\n    <ion-row> \r\n    {{pasti2}}\r\n  </ion-row>\r\n  <ion-row> \r\n    {{pastillas_trata}}\r\n  </ion-row>\r\n</ion-card-content>\r\n</ion-card>\r\n\r\n<ion-col *ngFor=\"let p of AlarmaHora\" >\r\n  <ion-card *ngIf=\"p.estados == cond\"  color=\"secondary\">\r\n    <ion-item color=\"dark\">\r\n      <ion-icon name=\"hourglass-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{p.medicamento}}{{dos_puntos}}  {{p.estados}} </ion-label>\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <ion-row>   \r\n        <ion-col> {{p.fecha_ini}} </ion-col>\r\n        <ion-col *ngIf=\"p.estados != cond\"  > {{p.desvi}}{{min_str}}  </ion-col>\r\n        <ion-col *ngIf=\"posicion != 30\">{{p.medicaciones}}</ion-col>\r\n        <ion-col *ngIf=\"posicion == 30\">{{p.medica}}</ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"p.estados == cond_2\" color=\"danger\">\r\n    <ion-item color=\"dark\">\r\n      <ion-icon name=\"hourglass-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{p.medicamento}}{{dos_puntos}}  {{p.estados}} </ion-label>\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <ion-row>   \r\n        <ion-col> {{p.fecha_ini}} </ion-col>\r\n        <ion-col *ngIf=\"p.estados != cond\"  > {{p.desvi}}{{min_str}}  </ion-col>\r\n        <ion-col *ngIf=\"posicion != 30\">{{p.medicaciones}}</ion-col>\r\n        <ion-col *ngIf=\"posicion == 30\">{{p.medica}}</ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card *ngIf=\"p.estados == cond_3\" color=\"success\">\r\n    <ion-item color=\"dark\">\r\n      <ion-icon name=\"hourglass-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>{{p.medicamento}}{{dos_puntos}}  {{p.estados}} </ion-label>\r\n    </ion-item>\r\n    <ion-card-content>\r\n      <ion-row>   \r\n        <ion-col> {{p.fecha_ini}} </ion-col>\r\n        <ion-col *ngIf=\"p.estados != cond\"  > {{p.desvi}}{{min_str}}  </ion-col>\r\n        <ion-col *ngIf=\"posicion != 30\">{{p.medicaciones}}</ion-col>\r\n        <ion-col *ngIf=\"posicion == 30\">{{p.medica}}</ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-col>\r\n   \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/seguimiento/seguimiento-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/seguimiento/seguimiento-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SeguimientoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPageRoutingModule", function() { return SeguimientoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _seguimiento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seguimiento.page */ "./src/app/seguimiento/seguimiento.page.ts");




const routes = [
    {
        path: '',
        component: _seguimiento_page__WEBPACK_IMPORTED_MODULE_3__["SeguimientoPage"]
    }
];
let SeguimientoPageRoutingModule = class SeguimientoPageRoutingModule {
};
SeguimientoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeguimientoPageRoutingModule);



/***/ }),

/***/ "./src/app/seguimiento/seguimiento.module.ts":
/*!***************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.module.ts ***!
  \***************************************************/
/*! exports provided: SeguimientoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPageModule", function() { return SeguimientoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _seguimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seguimiento-routing.module */ "./src/app/seguimiento/seguimiento-routing.module.ts");
/* harmony import */ var _seguimiento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seguimiento.page */ "./src/app/seguimiento/seguimiento.page.ts");







let SeguimientoPageModule = class SeguimientoPageModule {
};
SeguimientoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seguimiento_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeguimientoPageRoutingModule"]
        ],
        declarations: [_seguimiento_page__WEBPACK_IMPORTED_MODULE_6__["SeguimientoPage"]]
    })
], SeguimientoPageModule);



/***/ }),

/***/ "./src/app/seguimiento/seguimiento.page.scss":
/*!***************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n}\n\nion-content {\n  --ion-background-color:#3d8af7;\n}\n\n.volverse {\n  font-size: 330%;\n}\n\nion-title {\n  position: absolute;\n  top: 30%;\n  right: 30%;\n  color: #140b0a;\n}\n\n.dia {\n  width: 30%;\n  text-align: center;\n}\n\n.Volver {\n  --color:#140b0a;\n  width: 18%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n}\n\n.flechas {\n  font-size: 200%;\n}\n\n.atra {\n  --color:#140b0a;\n  width: 30%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n  padding-left: 5%;\n}\n\n.adel {\n  --color:#140b0a;\n  width: 30%;\n  --box-shadow:none;\n  height: 7%;\n  --background: #3d8af7;\n  background-color: #3d8af7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VndWltaWVudG8vQzpcXFVzZXJzXFx4Ym94a1xcT25lRHJpdmVcXERvY3VtZW50b3NcXDd0bW9fc2VtZXN0cmVcXElPVFxcQXBsaWNhY2lvblxcVHJhY2twaWxsL3NyY1xcYXBwXFxzZWd1aW1pZW50b1xcc2VndWltaWVudG8ucGFnZS5zY3NzIiwic3JjL2FwcC9zZWd1aW1pZW50by9zZWd1aW1pZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7QUNDSjs7QURFRTtFQUNFLDhCQUFBO0FDQ0o7O0FESUU7RUFDRSxlQUFBO0FDREo7O0FER0U7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0FOOztBREdFO0VBQ0csVUFBQTtFQUNDLGtCQUFBO0FDQU47O0FER0U7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUM7RUFDRyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NlZ3VpbWllbnRvL3NlZ3VpbWllbnRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzNkOGFmNztcclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjA3NTYwO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnZvbHZlcnNle1xyXG4gICAgZm9udC1zaXplOiAzMzAlO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICAgIHJpZ2h0OiAzMCU7XHJcbiAgICAgIGNvbG9yOiAjMTQwYjBhO1xyXG4gIH1cclxuXHJcbiAgLmRpYXtcclxuICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuVm9sdmVyIHtcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuICAgIGhlaWdodDogNyU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgfVxyXG5cclxuICAuZmxlY2hhc3tcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICB9XHJcblxyXG4gIC5hdHJhe1xyXG4gICAgLS1jb2xvcjojMTQwYjBhO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIC0tYm94LXNoYWRvdzpub25lO1xyXG4gICAgaGVpZ2h0OiA3JTtcclxuICAgIC0tYmFja2dyb3VuZDogIzNkOGFmNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gLmFkZWx7XHJcbiAgICAtLWNvbG9yOiMxNDBiMGE7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL3JpZ2h0OiAxJTtcclxuICB9XHJcblxyXG4gXHJcbiAgIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XG59XG5cbmlvbi1oZWFkZXIge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xufVxuXG4udm9sdmVyc2Uge1xuICBmb250LXNpemU6IDMzMCU7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIHJpZ2h0OiAzMCU7XG4gIGNvbG9yOiAjMTQwYjBhO1xufVxuXG4uZGlhIHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uVm9sdmVyIHtcbiAgLS1jb2xvcjojMTQwYjBhO1xuICB3aWR0aDogMTglO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA3JTtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4YWY3O1xufVxuXG4uZmxlY2hhcyB7XG4gIGZvbnQtc2l6ZTogMjAwJTtcbn1cblxuLmF0cmEge1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIHdpZHRoOiAzMCU7XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICBoZWlnaHQ6IDclO1xuICAtLWJhY2tncm91bmQ6ICMzZDhhZjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhhZjc7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5hZGVsIHtcbiAgLS1jb2xvcjojMTQwYjBhO1xuICB3aWR0aDogMzAlO1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbiAgaGVpZ2h0OiA3JTtcbiAgLS1iYWNrZ3JvdW5kOiAjM2Q4YWY3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4YWY3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/seguimiento/seguimiento.page.ts":
/*!*************************************************!*\
  !*** ./src/app/seguimiento/seguimiento.page.ts ***!
  \*************************************************/
/*! exports provided: SeguimientoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeguimientoPage", function() { return SeguimientoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



let SeguimientoPage = class SeguimientoPage {
    constructor(authSvc) {
        this.authSvc = authSvc;
        this.dias = "";
        this.mes = "";
        this.anio = "";
        this.dia_mes = "";
        this.de = " de ";
        this.del = " del ";
        this.dos_puntos = ": ";
        this.cont_dia = 1;
        this.estado = [];
        this.AlarmaHora = [];
        this.espacio = "               ";
        this.min_str = " minutos";
        this.cond = "No cumplido";
        this.cond_3 = "Cumplido";
        this.cond_2 = "Sobremedicado";
        this.habilitar = false;
    }
    ngOnInit() {
    }
    Adelante() {
        if (this.posicion < 30) {
            this.posicion += 1;
        }
        this.modificar(this.posicion);
        this.fecha_datos = this.func_fecha(this.posicion);
        this.impri_fecha();
    }
    atras() {
        if (this.posicion > 1) {
            this.posicion -= 1;
        }
        this.modificar(this.posicion);
        this.fecha_datos = this.func_fecha(this.posicion);
        this.impri_fecha();
    }
    impri_fecha() {
        const fecha_vec = (String(this.fecha_datos)).split(" ");
        console.log("Fecha_vec: ", fecha_vec);
        this.anio = fecha_vec[3];
        this.dia_mes = fecha_vec[2];
        switch (fecha_vec[0]) {
            case "Mon": {
                this.dias = "Lunes";
                break;
            }
            case "Tue": {
                this.dias = "Martes";
                break;
            }
            case "Wed": {
                this.dias = "Miercoles";
                break;
            }
            case "Thu": {
                this.dias = "Jueves";
                break;
            }
            case "Fri": {
                this.dias = "Viernes";
                break;
            }
            case "Sat": {
                this.dias = "Sabado";
                break;
            }
            case "Sun": {
                this.dias = "Domingo";
                break;
            }
        }
        switch (fecha_vec[1]) {
            case "Jan": {
                this.mes = "Enero";
                break;
            }
            case "Feb": {
                this.mes = "Febrero";
                break;
            }
            case "Mar": {
                this.mes = "Marzo";
                break;
            }
            case "Apr": {
                this.mes = "Abril";
                break;
            }
            case "May": {
                this.mes = "Mayo";
                break;
            }
            case "Jun": {
                this.mes = "Junio";
                break;
            }
            case "Jul": {
                this.mes = "Julio";
                break;
            }
            case "Sep": {
                this.mes = "Septiembre";
                break;
            }
            case "Oct": {
                this.mes = "Octubre";
                break;
            }
            case "Nov": {
                this.mes = "Noviembre";
                break;
            }
            case "Dec": {
                this.mes = "Diciembre";
                break;
            }
        }
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authSvc.leer_dato_thing_speak();
            this.textoc = "Conteo pastillas: " + this.authSvc.compar1$.medicamento;
            this.pasti2 = "En el compartimiento: " + this.authSvc.an_pasti[0];
            this.pastillas_trata = "Para finalizar tratamiento:  " + this.authSvc.an_pasti[1];
            this.posicion = 30;
            this.fecha_datos = this.func_fecha(this.posicion);
            this.modificar(this.posicion);
            this.impri_fecha();
        });
    }
    sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
    func_fecha(pos) {
        var d = new Date();
        return (this.sumarDias(d, -(30 - pos)));
    }
    Imprimir_Hora() {
        this.medicamento_v = this.authSvc.compar1$.medicamento;
        var var_string;
        if (this.authSvc.compar1$.hora.length > 2) {
            var_string = this.authSvc.compar1$.hora.split('/');
        }
        else {
            var_string = "";
        }
        this.AlarmaHora = [];
        var i = 0;
        for (i = 0; i < (var_string.length); i++) {
            if (var_string[i] != "") {
                var new_fecha = { fecha_ini: var_string[i].charAt(11) + var_string[i].charAt(12) + var_string[i].charAt(13) + var_string[i].charAt(14) + var_string[i].charAt(15) };
                this.AlarmaHora.push(new_fecha);
                this.habilitar = true;
            }
        }
        console.log(this.AlarmaHora);
        // if(this.dias=="Martes"){
        //  this.habilitar = true;   // Este habilitar seria para imprimir algo si el vector es mayor que 0
        //  this.AlarmaHora.push("hola")}
    }
    modificar(posi) {
        var hora = [];
        const vec = this.authSvc.datos_seg[posi - 1];
        console.log("aqui dato", vec);
        const var_string = vec['field3'].split('/');
        this.AlarmaHora = [];
        var i = 0;
        for (i = 0; i < (var_string.length); i++) {
            if (var_string[i] != "") {
                var new_fecha = var_string[i].charAt(11) + var_string[i].charAt(12) + var_string[i].charAt(13) + var_string[i].charAt(14) + var_string[i].charAt(15);
                hora.push(new_fecha);
            }
        }
        const estado_num = vec['field1'].split('/');
        this.estado = [];
        const desviacion_str = vec['field4'].split('/');
        const conteo_horario = vec['field2'].split('/');
        const Npastillas = Number(vec['field6']);
        var resta;
        var desviacion = [];
        var medicacion = [];
        var medicacion_2 = [];
        i = 0;
        for (i = 0; i < (estado_num.length); i++) {
            if (estado_num[i] != "") {
                desviacion.push(desviacion_str[i]);
                if (estado_num[i] == "0") {
                    var new_estado = "No cumplido";
                    this.estado.push(new_estado);
                    resta = String(Npastillas - Number(conteo_horario[i]));
                    medicacion.push("Faltaron " + resta);
                    medicacion_2.push("Faltan  " + resta);
                }
                if (estado_num[i] == "1") {
                    var new_estado = "Cumplido";
                    this.estado.push(new_estado);
                    medicacion.push("");
                    medicacion_2.push("");
                }
                if (estado_num[i] == "2") {
                    var new_estado = "Sobremedicado";
                    this.estado.push(new_estado);
                    resta = String(Number(conteo_horario[i]) - Npastillas);
                    medicacion.push("Excedio " + resta);
                    medicacion_2.push("");
                }
            }
        }
        console.log(medicacion);
        for (i = 0; i < (this.estado.length); i++) {
            var new_fecha_2 = { fecha_ini: hora[i], estados: this.estado[i], desvi: desviacion[i], medicamento: vec['field5'], medicaciones: medicacion[i], medica: medicacion_2[i] };
            this.AlarmaHora.push(new_fecha_2);
        }
        console.log(this.AlarmaHora);
        console.log(this.estado);
        console.log(estado_num);
        console.log(medicacion_2);
    }
};
SeguimientoPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SeguimientoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seguimiento',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./seguimiento.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/seguimiento/seguimiento.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./seguimiento.page.scss */ "./src/app/seguimiento/seguimiento.page.scss")).default]
    })
], SeguimientoPage);



/***/ })

}]);
//# sourceMappingURL=seguimiento-seguimiento-module.js.map