(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registrarse-registrarse-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrarse/registrarse.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registrarse/registrarse.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\"> <!--Se inicia el encabezado de la pagina-->\r\n  <ion-title>Registrarse</ion-title>\r\n</ion-header>\r\n\r\n<ion-content><!--Se inicia el contenido de la pagina, todos los elementos se ponen dentro de este contenido-->\r\n  <ion-button [routerLink]=\"['/cuenta']\" class=\"Volver\">\r\n    <ion-icon name=\"arrow-back\"></ion-icon>\r\n  </ion-button>\r\n  <ion-col> <!--Se inicia una columna para organizacion de las inputs--> \r\n    <ion-row>\r\n    <div class=\"item_nombre\">\r\n      <label class=\"labels\" >Nombre:</label>\r\n      <ion-input  placeholder=\"Nombre\" #nombre></ion-input></div>  </ion-row> <!--Se habilita una iput para colocar el nombre-->\r\n      <ion-row><div class=\"item_apellido\">\r\n      <label class=\"labels\"  >Apellido:</label>\r\n      <ion-input  placeholder=\"Apellido\" #apellido></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"item_correo\">\r\n      <label class=\"labels\">Correo:</label>\r\n      <ion-input  placeholder=\"Correo\" type=\"Correo\" #email></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"item_contra\">\r\n      <label class=\"labels\">Contraseña:</label>\r\n      <ion-input placeholder=\"Contraseña\" type=\"password\" #password ></ion-input></div></ion-row> \r\n      <ion-row><div class=\"item_contra_Ver\">\r\n      <label class=\"labels\">Repita Contraseña :</label>\r\n      <ion-input placeholder=\"Repita Contraseña\" type=\"password\" #verify_password></ion-input></div> </ion-row>\r\n      <ion-row><div class=\"control_group\">\r\n      <label  class=\"labels\">Fecha de nacimiento:</label>\r\n      <div class=\"controls\">\r\n        <select name=\"dob-day\" id=\"dob-day\" #dia> <!--Se genera un select para la fecha de nacimeinto--> \r\n          <option value=\"\">Dia</option> <!--se definen las diferentes opciones --> \r\n          <option value=\"\">---</option>\r\n          <option value=\"01\">01</option>\r\n          <option value=\"02\">02</option>\r\n          <option value=\"03\">03</option>\r\n          <option value=\"04\">04</option>\r\n          <option value=\"05\">05</option>\r\n          <option value=\"06\">06</option>\r\n          <option value=\"07\">07</option>\r\n          <option value=\"08\">08</option>\r\n          <option value=\"09\">09</option>\r\n          <option value=\"10\">10</option>\r\n          <option value=\"11\">11</option>\r\n          <option value=\"12\">12</option>\r\n          <option value=\"13\">13</option>\r\n          <option value=\"14\">14</option>\r\n          <option value=\"15\">15</option>\r\n          <option value=\"16\">16</option>\r\n          <option value=\"17\">17</option>\r\n          <option value=\"18\">18</option>\r\n          <option value=\"19\">19</option>\r\n          <option value=\"20\">20</option>\r\n          <option value=\"21\">21</option>\r\n          <option value=\"22\">22</option>\r\n          <option value=\"23\">23</option>\r\n          <option value=\"24\">24</option>\r\n          <option value=\"25\">25</option>\r\n          <option value=\"26\">26</option>\r\n          <option value=\"27\">27</option>\r\n          <option value=\"28\">28</option>\r\n          <option value=\"29\">29</option>\r\n          <option value=\"30\">30</option>\r\n          <option value=\"31\">31</option><!--Termina la opcion de dias -->\r\n        </select>\r\n        <select name=\"dob-month\" id=\"dob-month\" #mes>\r\n          <option value=\"\">Mes</option> <!--Se definen las opciones de meses--> \r\n          <option value=\"\">-----</option>\r\n          <option value=\"01\">Enero</option>\r\n          <option value=\"02\">Febrero</option>\r\n          <option value=\"03\">Marzo</option>\r\n          <option value=\"04\">Abril</option>\r\n          <option value=\"05\">Mayo</option>\r\n          <option value=\"06\">Junio</option>\r\n          <option value=\"07\">Julio</option>\r\n          <option value=\"08\">Agosto</option>\r\n          <option value=\"09\">Septiembre</option>\r\n          <option value=\"10\">Octubre</option>\r\n          <option value=\"11\">Noviembre</option>\r\n          <option value=\"12\">Diciembre</option>  <!--Terminan las opciones--> \r\n        </select>\r\n        <select name=\"dob-year\" id=\"dob-year\" #anio>\r\n          <option value=\"\">Año</option>\r\n          <option value=\"\">----</option>\r\n          <option value=\"2020\">2020</option> <!--Se inicia las opciones de año -->\r\n          <option value=\"2019\">2019</option>\r\n          <option value=\"2018\">2018</option>\r\n          <option value=\"2017\">2017</option>\r\n          <option value=\"2016\">2016</option>\r\n          <option value=\"2015\">2015</option>\r\n          <option value=\"2014\">2014</option>\r\n          <option value=\"2013\">2013</option>\r\n          <option value=\"2012\">2012</option>\r\n          <option value=\"2011\">2011</option>\r\n          <option value=\"2010\">2010</option>\r\n          <option value=\"2009\">2009</option>\r\n          <option value=\"2008\">2008</option>\r\n          <option value=\"2007\">2007</option>\r\n          <option value=\"2006\">2006</option>\r\n          <option value=\"2005\">2005</option>\r\n          <option value=\"2004\">2004</option>\r\n          <option value=\"2003\">2003</option>\r\n          <option value=\"2002\">2002</option>\r\n          <option value=\"2001\">2001</option>\r\n          <option value=\"2000\">2000</option>\r\n          <option value=\"1999\">1999</option>\r\n          <option value=\"1998\">1998</option>\r\n          <option value=\"1997\">1997</option>\r\n          <option value=\"1996\">1996</option>\r\n          <option value=\"1995\">1995</option>\r\n          <option value=\"1994\">1994</option>\r\n          <option value=\"1993\">1993</option>\r\n          <option value=\"1992\">1992</option>\r\n          <option value=\"1991\">1991</option>\r\n          <option value=\"1990\">1990</option>\r\n          <option value=\"1989\">1989</option>\r\n          <option value=\"1988\">1988</option>\r\n          <option value=\"1987\">1987</option>\r\n          <option value=\"1986\">1986</option>\r\n          <option value=\"1985\">1985</option>\r\n          <option value=\"1984\">1984</option>\r\n          <option value=\"1983\">1983</option>\r\n          <option value=\"1982\">1982</option>\r\n          <option value=\"1981\">1981</option>\r\n          <option value=\"1980\">1980</option>\r\n          <option value=\"1979\">1979</option>\r\n          <option value=\"1978\">1978</option>\r\n          <option value=\"1977\">1977</option>\r\n          <option value=\"1976\">1976</option>\r\n          <option value=\"1975\">1975</option>\r\n          <option value=\"1974\">1974</option>\r\n          <option value=\"1973\">1973</option>\r\n          <option value=\"1972\">1972</option>\r\n          <option value=\"1971\">1971</option>\r\n          <option value=\"1970\">1970</option>\r\n          <option value=\"1969\">1969</option>\r\n          <option value=\"1968\">1968</option>\r\n          <option value=\"1967\">1967</option>\r\n          <option value=\"1966\">1966</option>\r\n          <option value=\"1965\">1965</option>\r\n          <option value=\"1964\">1964</option>\r\n          <option value=\"1963\">1963</option>\r\n          <option value=\"1962\">1962</option>\r\n          <option value=\"1961\">1961</option>\r\n          <option value=\"1960\">1960</option>\r\n          <option value=\"1959\">1959</option>\r\n          <option value=\"1958\">1958</option>\r\n          <option value=\"1957\">1957</option>\r\n          <option value=\"1956\">1956</option>\r\n          <option value=\"1955\">1955</option>\r\n          <option value=\"1954\">1954</option>\r\n          <option value=\"1953\">1953</option>\r\n          <option value=\"1952\">1952</option>\r\n          <option value=\"1951\">1951</option>\r\n          <option value=\"1950\">1950</option>\r\n          <option value=\"1949\">1949</option>\r\n          <option value=\"1948\">1948</option>\r\n          <option value=\"1947\">1947</option>\r\n          <option value=\"1946\">1946</option>\r\n          <option value=\"1945\">1945</option>\r\n          <option value=\"1944\">1944</option>\r\n          <option value=\"1943\">1943</option>\r\n          <option value=\"1942\">1942</option>\r\n          <option value=\"1941\">1941</option>\r\n          <option value=\"1940\">1940</option>\r\n          <option value=\"1939\">1939</option>\r\n          <option value=\"1938\">1938</option>\r\n          <option value=\"1937\">1937</option>\r\n          <option value=\"1936\">1936</option>\r\n          <option value=\"1935\">1935</option>\r\n          <option value=\"1934\">1934</option>\r\n          <option value=\"1933\">1933</option>\r\n          <option value=\"1932\">1932</option>\r\n          <option value=\"1931\">1931</option>\r\n          <option value=\"1930\">1930</option>\r\n          <option value=\"1929\">1929</option>\r\n          <option value=\"1928\">1928</option>\r\n          <option value=\"1927\">1927</option>\r\n          <option value=\"1926\">1926</option>\r\n          <option value=\"1925\">1925</option>\r\n          <option value=\"1924\">1924</option>\r\n          <option value=\"1923\">1923</option>\r\n          <option value=\"1922\">1922</option>\r\n          <option value=\"1921\">1921</option>\r\n          <option value=\"1920\">1920</option>\r\n          <option value=\"1919\">1919</option>\r\n          <option value=\"1918\">1918</option>\r\n          <option value=\"1917\">1917</option>\r\n          <option value=\"1916\">1916</option>\r\n          <option value=\"1915\">1915</option>\r\n          <option value=\"1914\">1914</option>\r\n          <option value=\"1913\">1913</option>\r\n          <option value=\"1912\">1912</option>\r\n          <option value=\"1911\">1911</option>\r\n          <option value=\"1910\">1910</option>\r\n          <option value=\"1909\">1909</option>\r\n          <option value=\"1908\">1908</option>\r\n          <option value=\"1907\">1907</option>\r\n          <option value=\"1906\">1906</option>\r\n          <option value=\"1905\">1905</option>\r\n          <option value=\"1904\">1904</option>\r\n          <option value=\"1903\">1903</option>\r\n          <option value=\"1901\">1901</option>\r\n          <option value=\"1900\">1900</option><!--Se termina la definicion de años--> \r\n        </select> <!--Todas la opciones se guardan gracias a la almuadilla #-->\r\n      </div>\r\n    </div></ion-row>\r\n    <ion-row><div class=\"Radio_sexo\">\r\n      <label class=\"labels\">Genero:</label>\r\n      <form action=\"\" #genero> <!--se guarda la respuesta en genero, gracias a la almuadilla #--> \r\n        <input type=\"radio\" name=\"gender\" value=\"masculino\" (click)=\"male_boton()\"> Masculino<br>\r\n        <input type=\"radio\" name=\"gender\" value=\"femenino\" (click)=\"female_boton()\"> Femenino<br>\r\n      </form>\r\n    </div></ion-row>\r\n    <ion-row><ion-button \r\n      class=\"Boton_Reg\"\r\n      type=\"submit\" (click)=\"onRegister(email, password,nombre,apellido, dia,mes, anio,verify_password)\"\r\n      \r\n    >Registrarse</ion-button>\r\n    <ion-button class=\"Boton_ayuda\" type=\"submit\" (click)=\"Imprimir_ayuda()\">\r\n      <ion-icon name=\"alert-outline\"></ion-icon>\r\n    </ion-button></ion-row>\r\n  </ion-col>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/registrarse/registrarse-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/registrarse/registrarse-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageRoutingModule", function() { return RegistrarsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registrarse_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrarse.page */ "./src/app/registrarse/registrarse.page.ts");




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

/***/ "./src/app/registrarse/registrarse.module.ts":
/*!***************************************************!*\
  !*** ./src/app/registrarse/registrarse.module.ts ***!
  \***************************************************/
/*! exports provided: RegistrarsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageModule", function() { return RegistrarsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registrarse_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrarse-routing.module */ "./src/app/registrarse/registrarse-routing.module.ts");
/* harmony import */ var _registrarse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrarse.page */ "./src/app/registrarse/registrarse.page.ts");







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

/***/ "./src/app/registrarse/registrarse.page.scss":
/*!***************************************************!*\
  !*** ./src/app/registrarse/registrarse.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#3d8af7;\n}\n\nion-header {\n  --ion-background-color:#3d8af7;\n  position: absolute;\n  top: 3%;\n  left: 30%;\n}\n\nion-col {\n  position: absolute;\n  top: 10%;\n  left: 12.5%;\n}\n\nion-row {\n  padding-top: 2%;\n}\n\n.item_nombre {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_apellido {\n  background-color: #75a9f9;\n  --background: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_correo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_contra {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_contra_Ver {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.item_sexo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n  padding-bottom: 0%;\n}\n\n.Volver {\n  --background:#3d8af7;\n  --background-activated:#75a9f9;\n  --color:#140b0a;\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 18%;\n  height: 7%;\n  --box-shadow:none;\n}\n\n.control_group {\n  padding-left: 3%;\n  padding-bottom: 3%;\n  padding-top: 3%;\n  background-color: #75a9f9;\n  width: 75%;\n  border-radius: 10px;\n}\n\nselect {\n  border-radius: 5px;\n  background-color: #b8d5fd;\n}\n\n.Radio_sexo {\n  --background: #75a9f9;\n  background-color: #75a9f9;\n  border-radius: 10px;\n  border: 10px solid #75a9f9;\n  width: 75%;\n}\n\n.labels {\n  font-weight: 700;\n}\n\n.controls {\n  padding-top: 3%;\n}\n\n.Boton_Reg {\n  --background:#75a9f9;\n  --background-activated:rgb(143, 189, 253);\n  --color:#140b0a;\n  padding-left: 10%;\n  font-size: 100%;\n  font-weight: 700;\n}\n\n.Boton_ayuda {\n  padding-left: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmFyc2UvQzpcXFVzZXJzXFx4Ym94a1xcT25lRHJpdmVcXERvY3VtZW50b3NcXDd0bW9fc2VtZXN0cmVcXElPVFxcQXBsaWNhY2lvblxcVHJhY2twaWxsL3NyY1xcYXBwXFxyZWdpc3RyYXJzZVxccmVnaXN0cmFyc2UucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSw4QkFBQTtBQ0RKOztBRElBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDREo7O0FES0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FES0E7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBR0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtBQ0xKOztBRE9BO0VBQ0kseUJBQUE7RUFFQSxxQkFBQTtFQUdBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7QUNSSjs7QURVQTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FDWEo7O0FEYUE7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBR0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtBQ2RKOztBRGdCQTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FDakJKOztBRG9CQTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FDckJKOztBRHlCQTtFQUNJLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUN0Qko7O0FEd0JBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUlBLFVBQUE7RUFDQSxtQkFBQTtBQ3hCSjs7QUQwQkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDdkJKOztBRDJCQTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFHQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxnQkFBQTtBQzNCSjs7QUQ2QkE7RUFDSSxlQUFBO0FDMUJKOztBRDRCQTtFQUdJLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUM3Qko7O0FEZ0NBO0VBRUksZ0JBQUE7QUM5QkoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzZSBjb25maWd1cmFuIHRvZG9zIGxvcyBlbGVtZW50b3MgcHJlc2VudGVzIGVuIHJlZ2lzdHJhci5wYWdlLmh0bWxcclxuXHJcbmlvbi1jb250ZW50IHsvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGVsIGNvbnRlbmlkbyBwcmljaXBhbCBkZSBsYSBwYWdpbmFcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzNkOGFmNztcclxufVxyXG5cclxuaW9uLWhlYWRlciB7Ly8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBoZWFkZXIgcHJpbmNpcGFsXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzZDhhZjc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMlO1xyXG4gICAgbGVmdDozMCU7XHJcbiAgICBcclxuICB9XHJcblxyXG5pb24tY29sey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBsYSBjb2x1bW5hXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcCA6MTAlO1xyXG4gICAgbGVmdDogMTIuNSU7XHJcbn1cclxuaW9uLXJvd3svLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgbGEgZmlsYVxyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG59XHJcblxyXG5cclxuLml0ZW1fbm9tYnJley8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgbGFiZWwgbm9tYnJlXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vcmlnaHQ6MTIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgLy9oZWlnaHQ6IDclO1xyXG4gICAgcGFkZGluZy1ib3R0b206MCU7XHJcbn1cclxuLml0ZW1fYXBlbGxpZG97Ly8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBsYWJlbCBhcGVsbGlkb1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzVhOWY5O1xyXG4gICAgLy90b3A6MjAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3JpZ2h0OjEyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIC8vaGVpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOjAlO1xyXG59XHJcbi5pdGVtX2NvcnJlb3svLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGVsIGxhYmVsIGRlbCBjb3JyZW9cclxuICAgIC8vdG9wOiAzMCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3NWE5Zjk7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vcmlnaHQ6MTIuNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcclxuICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xyXG4gICAgd2lkdGg6NzUlO1xyXG4gICAgLy9oZWlnaHQ6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MCU7XHJcbn1cclxuLml0ZW1fY29udHJhey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBsYSBjb250cmFzZcOxYVxyXG4gICAgLy90b3A6IDQwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9yaWdodDoxMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICAvL2hlaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowJTtcclxufVxyXG4uaXRlbV9jb250cmFfVmVyey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZSBsYSBjb250cmFzZcOxYSBjb24gdmVyZWZpY2FjaW9uXHJcbiAgICAvL3RvcDogNTAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNzVhOWY5O1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3JpZ2h0OjEyLjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIC8vaGVpZ2h0OiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOjAlO1xyXG59XHJcblxyXG4uaXRlbV9zZXhvey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgY29udGVuaWRvIGRlIGxvcyBib3RvbmVzIGRlIGdlbmVyb1xyXG4gICAgLy90b3A6IDcwJTtcclxuICAgIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9AYXQtcm9vdDoxMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICAvL2hlaWdodDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowJTtcclxufVxyXG5cclxuXHJcbi5Wb2x2ZXIgey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBkZWwgYm90b24gZGUgdm9sdmVyXHJcbiAgICAtLWJhY2tncm91bmQ6IzNkOGFmNztcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6Izc1YTlmOTtcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBoZWlnaHQ6IDclO1xyXG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgfVxyXG4uY29udHJvbF9ncm91cHsvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgcGFyYSBlbCBkaXYgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1ib3R0b206MyU7XHJcbiAgICBwYWRkaW5nLXRvcDozJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy90b3A6IDYwLjIlO1xyXG4gICAgLy9yaWdodDoxMi41JTtcclxuICAgIHdpZHRoOjc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG59XHJcbnNlbGVjdHsvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgbGEgY2FyYWN0ZXJpc3RpY2Egc2VsZWN0XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZDVmZDtcclxufVxyXG5cclxuXHJcbi5SYWRpb19zZXhvey8vIHNlIGRlZmluZW4gbGFzIGNhcmFjdGVyaXN0aWNhcyBsb3MgYm90b25lcyBkZSBnZW5lcm9cclxuICAgIC8vdG9wOiA2OS43JTtcclxuICAgIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6Izc1YTlmOTtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9yaWdodDoxMi41JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICAvL2hlaWdodDogNSU7XHJcbn1cclxuLmxhYmVsc3svLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGUgbG9zIGxhYmVsc1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uY29udHJvbHN7XHJcbiAgICBwYWRkaW5nLXRvcDozJVxyXG59XHJcbi5Cb3Rvbl9SZWd7Ly8gc2UgZGVmaW5lbiBsYXMgY2FyYWN0ZXJpc3RpY2FzIGRlbCBib3RvbiBkZSByZWdpc3Ryb1xyXG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL3RvcDogODAlO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOnJnYigxNDMsIDE4OSwgMjUzKTtcclxuICAgIC0tY29sb3I6IzE0MGIwYTtcclxuICAgIC8vcmlnaHQ6MjUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICAvL3dpZHRoOjUwJTtcclxuICAgIGZvbnQtc2l6ZToxMDAlIDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5Cb3Rvbl9heXVkYXsvLyBzZSBkZWZpbmVuIGxhcyBjYXJhY3RlcmlzdGljYXMgZGVsIGJvdG9uIGRlIGF5dWRhXHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbn1cclxuXHJcbiIsImlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojM2Q4YWY3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMyU7XG4gIGxlZnQ6IDMwJTtcbn1cblxuaW9uLWNvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEyLjUlO1xufVxuXG5pb24tcm93IHtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuXG4uaXRlbV9ub21icmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzVhOWY5O1xuICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5pdGVtX2FwZWxsaWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTlmOTtcbiAgLS1iYWNrZ3JvdW5kOiAjNzVhOWY5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgIzc1YTlmOTtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4uaXRlbV9jb3JyZW8ge1xuICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NWE5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xuICB3aWR0aDogNzUlO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5pdGVtX2NvbnRyYSB7XG4gIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTlmOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLml0ZW1fY29udHJhX1ZlciB7XG4gIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTlmOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLml0ZW1fc2V4byB7XG4gIC0tYmFja2dyb3VuZDogIzc1YTlmOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1YTlmOTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICM3NWE5Zjk7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctYm90dG9tOiAwJTtcbn1cblxuLlZvbHZlciB7XG4gIC0tYmFja2dyb3VuZDojM2Q4YWY3O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiM3NWE5Zjk7XG4gIC0tY29sb3I6IzE0MGIwYTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDE4JTtcbiAgaGVpZ2h0OiA3JTtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbi5jb250cm9sX2dyb3VwIHtcbiAgcGFkZGluZy1sZWZ0OiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDMlO1xuICBwYWRkaW5nLXRvcDogMyU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NWE5Zjk7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4ZDVmZDtcbn1cblxuLlJhZGlvX3NleG8ge1xuICAtLWJhY2tncm91bmQ6ICM3NWE5Zjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NWE5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjNzVhOWY5O1xuICB3aWR0aDogNzUlO1xufVxuXG4ubGFiZWxzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4uQm90b25fUmVnIHtcbiAgLS1iYWNrZ3JvdW5kOiM3NWE5Zjk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6cmdiKDE0MywgMTg5LCAyNTMpO1xuICAtLWNvbG9yOiMxNDBiMGE7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5Cb3Rvbl9heXVkYSB7XG4gIHBhZGRpbmctbGVmdDogMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/registrarse/registrarse.page.ts":
/*!*************************************************!*\
  !*** ./src/app/registrarse/registrarse.page.ts ***!
  \*************************************************/
/*! exports provided: RegistrarsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePage", function() { return RegistrarsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let RegistrarsePage = class RegistrarsePage {
    constructor(authSvc, router, alertController) {
        this.authSvc = authSvc;
        this.router = router;
        this.alertController = alertController;
        this.var = "male";
    }
    ngOnInit() {
    }
    /*****************************************************************************************************
      La funcion ionViewWillEnter se ejecuta cuando se imprima la pagina actual, con se puede inicializar
      las variables de la pagina
    ******************************************************************************************************/
    ionViewWillEnter() {
        this.inputname.value = '';
        this.inputapellido.value = '';
        this.inputemail.value = '';
        this.inputpassword.value = '';
        this.inputverify_password.value = '';
        this.var = "male";
    }
    /*****************************************************************************************************
     La funcion male_boton() ejecuta cambia el valor de la funcion var a masculino
    ******************************************************************************************************/
    male_boton() {
        this.var = "masculino";
    }
    ;
    /*****************************************************************************************************
     La funcion female_boton() ejecuta cambia el valor de la funcion var a masculino
    ******************************************************************************************************/
    female_boton() {
        this.var = "femenino";
    }
    /*****************************************************************************************************
     La funcion onRegister recibe los valores de email, password, nombre, apellido, dia, ani,
     verify_password, en esta funcion se verifica que todos los campos esten completados, que la
     contraseña tenga los minimos necesarios en su composicion, que el correo no haya sido registrado
     anteriormente. Si se cumplen estas condiciones, se realiza el cambio a la pagina de verificacion.
    ******************************************************************************************************/
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
    /*****************************************************************************************************
    La funcion verificar_contra() recibe la contraseña ingresada y verifica todas las condiciones a cumplir.
    ******************************************************************************************************/
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
    La funcion Imprimir_error() imprime las condiciones de las contraseñas para que el usuario se entere
    ******************************************************************************************************/
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nombre')
], RegistrarsePage.prototype, "inputname", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('apellido')
], RegistrarsePage.prototype, "inputapellido", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email')
], RegistrarsePage.prototype, "inputemail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password')
], RegistrarsePage.prototype, "inputpassword", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('verify_password')
], RegistrarsePage.prototype, "inputverify_password", void 0);
RegistrarsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrarse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrarse.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registrarse/registrarse.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrarse.page.scss */ "./src/app/registrarse/registrarse.page.scss")).default]
    })
], RegistrarsePage);



/***/ })

}]);
//# sourceMappingURL=registrarse-registrarse-module.js.map