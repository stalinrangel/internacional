webpackJsonp(["productos.module"],{

/***/ "../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Registro de Nuevo Servicio</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormAgregar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputNombre\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormAgregar.get('nombre').errors && myFormAgregar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormAgregar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n          <!--div class=\"form-group\">\r\n            <label for=\"exampleInputPrecio\">Precio</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputPrecio\" placeholder=\"Precio\" formControlName=\"precio\">\r\n          </div-->\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputDescripcion\">Descripción</label>\r\n            <textarea class=\"form-control\" id=\"exampleInputDescripcion\" placeholder=\"Descripción\" formControlName=\"descripcion\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputSubcat\">Subcategoría</label>\r\n            <select class=\"form-control\" id=\"exampleInputSubcat\" formControlName=\"subcategoria_id\">\r\n              <!-- <option disabled selected>Selecciona una categoría</option> -->\r\n              <option *ngFor=\"let subcategoria of subcategorias\" [value]=\"subcategoria.id\">{{subcategoria.nombre}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEstb\">Establecimiento</label>\r\n            <select class=\"form-control\" id=\"exampleInputEstb\" formControlName=\"establecimiento_id\">\r\n              <!-- <option disabled selected>Selecciona una categoría</option> -->\r\n              <option *ngFor=\"let establecimiento of establecimientos\" [value]=\"establecimiento.id\">{{establecimiento.nombre}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <br>\r\n            <label for=\"exampleInputImagen\">Imagen</label>\r\n            <input [hidden]=\"clear\" type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n              <div *ngIf=\"clear\">\r\n                <br>\r\n                <output id=\"list\"></output>\r\n                <br>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n              </div>\r\n          </div> \r\n          \r\n          <br>\r\n          <button type=\"submit\" class=\"btn btn-info\" (click)=\"crear()\" [disabled]=\"myFormAgregar.invalid\">Agregar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-default) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-default) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-default) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-default) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-default) .star {\n  font-size: 1.5rem;\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .filled {\n  color: #a4abb3; }\n\n:host-context(.nb-theme-default) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #2a2a2a; }\n\n:host-context(.nb-theme-default) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-default) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-default) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-default) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-default) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-default) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-default) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-default) ngb-rating i {\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n\n:host-context(.nb-theme-cosmic) nb-card-body {\n  overflow: visible; }\n\n:host-context(.nb-theme-cosmic) .input-group {\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .validation-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  :host-context(.nb-theme-cosmic) .validation-checkboxes .custom-control {\n    margin-left: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-disabled-checkbox-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 1rem; }\n\n:host-context(.nb-theme-cosmic) .demo-checkboxes-radio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n:host-context(.nb-theme-cosmic) .demo-rating {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n:host-context(.nb-theme-cosmic) .star {\n  font-size: 1.5rem;\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .filled {\n  color: #76f8f6; }\n\n:host-context(.nb-theme-cosmic) .rating-header {\n  line-height: 2rem;\n  font-size: 1.25rem;\n  font-family: Exo;\n  font-weight: 500;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .current-rate {\n  font-size: 1.5rem;\n  padding-left: 1rem;\n  color: #ffffff; }\n\n:host-context(.nb-theme-cosmic) .full-name-inputs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host-context(.nb-theme-cosmic) .input-group.has-person-icon {\n  position: relative; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon .form-control {\n    padding-left: 3rem; }\n  :host-context(.nb-theme-cosmic) .input-group.has-person-icon::before {\n    content: '\\F47D';\n    font-family: 'Ionicons';\n    font-size: 2rem;\n    position: absolute;\n    z-index: 100;\n    left: 1rem;\n    top: 0.25rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown {\n  min-width: 7rem; }\n\n:host-context(.nb-theme-cosmic) .dropdown-menu {\n  width: auto; }\n\n:host-context(.nb-theme-cosmic) .form-group label {\n  padding: 0 0 0.75rem; }\n\n:host-context(.nb-theme-cosmic) ngb-rating {\n  outline: none; }\n\n:host-context(.nb-theme-cosmic) ngb-rating i {\n  color: #0b417a;\n  color: #0b417a; }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) button:not(.btn-icon) {\n    padding: 0.75rem 1rem;\n    font-size: 0.75rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosAgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Mis imports







var ProductosAgregarComponent = /** @class */ (function () {
    function ProductosAgregarComponent(toasterService, http, router, rutaService, fb) {
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default'; // 'default', 'info', 'success', 'warning', 'error'
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.loading = false;
        this.mostrar = true;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.myFormAgregar = this.fb.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            precio: [0],
            imagen: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            descripcion: [null],
            subcategoria_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            establecimiento_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]]
        });
    }
    ProductosAgregarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'subcategorias/habilitadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.subcategorias = _this.data.subcategorias;
            _this.getEstablecimientos();
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    ProductosAgregarComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    ProductosAgregarComponent.prototype.getEstablecimientos = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'establecimientos/habilitados?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.establecimientos = _this.data.establecimientos;
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    ProductosAgregarComponent.prototype.crear = function () {
        var _this = this;
        console.log(this.myFormAgregar.value);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormAgregar.value.nombre,
            precio: this.myFormAgregar.value.precio,
            imagen: this.myFormAgregar.value.imagen,
            descripcion: this.myFormAgregar.value.descripcion,
            estado: 'ON',
            subcategoria_id: this.myFormAgregar.value.subcategoria_id,
            establecimiento_id: this.myFormAgregar.value.establecimiento_id
        };
        console.log(datos);
        this.http.post(this.rutaService.getRutaApi() + 'productos', datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
            _this.myFormAgregar.reset();
            //this.clearFile();
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                //this.mostrar = false;
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    //Carga de img---<
    ProductosAgregarComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            _this.myFormAgregar.patchValue({ imagen: _this.imgUpload });
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    ProductosAgregarComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'productos');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    ProductosAgregarComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    ProductosAgregarComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
        this.myFormAgregar.patchValue({ imagen: null });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductosAgregarComponent.prototype, "fileInput", void 0);
    ProductosAgregarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-productos-agregar',
            styles: [__webpack_require__("../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.scss")],
            template: __webpack_require__("../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], ProductosAgregarComponent);
    return ProductosAgregarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_component__ = __webpack_require__("../../../../../src/app/pages/productos/productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productos_ver_productos_ver_component__ = __webpack_require__("../../../../../src/app/pages/productos/productos-ver/productos-ver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_agregar_productos_agregar_component__ = __webpack_require__("../../../../../src/app/pages/productos/productos-agregar/productos-agregar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__productos_component__["a" /* ProductosComponent */],
        children: [{
                path: 'ver',
                component: __WEBPACK_IMPORTED_MODULE_3__productos_ver_productos_ver_component__["a" /* ProductosVerComponent */],
            }, {
                path: 'agregar',
                component: __WEBPACK_IMPORTED_MODULE_4__productos_agregar_productos_agregar_component__["a" /* ProductosAgregarComponent */],
            }],
    }];
var ProductosRoutingModule = /** @class */ (function () {
    function ProductosRoutingModule() {
    }
    ProductosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */],
            ],
        })
    ], ProductosRoutingModule);
    return ProductosRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__productos_component__["a" /* ProductosComponent */],
    __WEBPACK_IMPORTED_MODULE_3__productos_ver_productos_ver_component__["a" /* ProductosVerComponent */],
    __WEBPACK_IMPORTED_MODULE_4__productos_agregar_productos_agregar_component__["a" /* ProductosAgregarComponent */],
];


/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-ver/productos-ver.component.html":
/***/ (function(module, exports) {

module.exports = "<nb-card *ngIf=\"!editando && mostrar\">\r\n  <nb-card-header>\r\n    <div class=\"row show-grid\">\r\n          <div class=\"col-6\">\r\n            <div>Lista de Servicios</div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div>\r\n              <div style=\"text-align: right;\">\r\n               <strong>Buscar: </strong>\r\n               <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\" (ngModelChange)=\"FilterByName()\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n\r\n    <table class=\"table\">\r\n      <thead>\r\n         <!-- <th style=\"text-align: center;\">ID</th> -->\r\n        <th style=\"text-align: center;\">Imagen</th>\r\n         <th style=\"text-align: center;\">Nombre</th>\r\n         <th style=\"text-align: center;\">Categoría Prin.</th>\r\n         <th style=\"text-align: center;\">Categoría</th>\r\n         <th style=\"text-align: center;\">Subcategoría</th>\r\n         <th style=\"text-align: center;\">Proveedor</th>\r\n         <th style=\"text-align: center;\">Zona</th>\r\n         <th style=\"text-align: center;\">Estado</th>\r\n         <th style=\"text-align: center;\">Acciones</th>\r\n      </thead>\r\n      <tbody>\r\n         <tr *ngFor=\"let item of items\" >\r\n            <td style=\"text-align: center; vertical-align:middle;\"><img src = \"{{item.imagen}}\" alt=\"\" height=\"auto\" width=\"60px\"></td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.subcategoria.categoria.catprincipales.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.subcategoria.categoria.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.subcategoria.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.establecimiento.nombre}}</td>\r\n            <td style=\"text-align: center; vertical-align:middle;\">{{item.zonas.nombre}}</td>\r\n            <!--td style=\" vertical-align:middle;\">\r\n              <div *ngIf=\"mostrarSwiches\" class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [disabled]=\"item.subcategoria.estado == 'OFF' || item.establecimiento.estado == 'OFF'\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div>\r\n            </td--> \r\n            <td style=\"text-align: center;\">\r\n              <!--div class=\"estado\" style=\"display:block; margin:auto\">\r\n                <label class=\"theme-switch\">\r\n                  <span class=\"light\">OFF</span>\r\n                  <div class=\"switch\">\r\n                    <input type=\"checkbox\" [checked]=\"item.estado === 'ON'\" (change)=\"cambiarEstado(item)\" #theme>\r\n                    <span class=\"slider\"></span>\r\n                  </div>\r\n                  <span class=\"cosmic\">ON</span>\r\n                </label>\r\n              </div-->\r\n              <nb-checkbox [value]=\"item.estado == 'ON'\"  (change)=\"cambiarEstado(item)\"></nb-checkbox>\r\n            </td> \r\n            <td style=\"text-align: center; vertical-align:middle;\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-icon btn-sm btn-table\" title=\"Editar\" (click)=\"aEditar(item)\">\r\n                <i class=\"nb-edit\"></i>\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-danger btn-icon btn-sm btn-table\" title=\"Eliminar\" (click)=\"open(modal1); aEliminar(item)\">\r\n                <i class=\"nb-trash\"></i>\r\n              </button>\r\n            </td>\r\n         </tr>\r\n      </tbody>\r\n    </table>\r\n      \r\n  </nb-card-body>\r\n  <nb-card-footer>\r\n    <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n      <div class=\"btn-group\">\r\n         <label style=\"margin-top:10px\">Página {{currentIndex}}/{{pageNumber}} </label>\r\n      </div>\r\n      <div class=\"btn-group pull-right\">\r\n         <ul class=\"pagination\" >\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a class=\"page-link\"  (click)=\"prevPage()\" >Atrás</a></li>\r\n               <li class=\"page-item\" *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n                  <a class=\"page-link\" (click)=\"setPage(page)\"  >{{page}} </a>\r\n               </li>\r\n            <li class=\"page-item\" [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a class=\"page-link\"   (click)=\"nextPage()\" >Siguiente</a></li>\r\n         </ul>\r\n      </div>\r\n    </div>  \r\n  </nb-card-footer>\r\n</nb-card>\r\n\r\n<div class=\"row\" *ngIf=\"editando\">\r\n  <div class=\"col-lg-12\" style=\"display:block; margin:auto\">\r\n    <nb-card>\r\n      <nb-card-header>Editar Producto</nb-card-header>\r\n      <nb-card-body>\r\n        <form [formGroup]=\"myFormEditar\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputEmail1\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNombre\" placeholder=\"Nombre\" formControlName=\"nombre\">\r\n            <div *ngIf=\"myFormEditar.get('nombre').errors && myFormEditar.get('nombre').dirty\">\r\n              <p *ngIf=\"myFormEditar.get('nombre').hasError('required')\">Nombre es requerido</p>\r\n            </div>\r\n          </div>\r\n          <!--div class=\"form-group\">\r\n            <label for=\"exampleInputPrecio\">Precio</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"exampleInputPrecio\" placeholder=\"Precio\" formControlName=\"precio\">\r\n          </div-->\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleInputDescripcion\">Descripción</label>\r\n            <textarea class=\"form-control\" id=\"exampleInputDescripcion\" placeholder=\"Descripción\" formControlName=\"descripcion\"></textarea>\r\n          </div>\r\n          <div *ngIf=\"subcategorias\" class=\"form-group\">\r\n            <label for=\"exampleInputSubcat\">Subcategoría</label>\r\n            <select class=\"form-control\" id=\"exampleInputSubcat\" formControlName=\"subcategoria_id\">\r\n              <!-- <option disabled selected>Selecciona una categoría</option> -->\r\n              <option *ngFor=\"let subcategoria of subcategorias\" [value]=\"subcategoria.id\">{{subcategoria.nombre}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <br>\r\n            <div [hidden]=\"clear\">\r\n              <label for=\"exampleInputImagen\">Imagen</label>\r\n              <input type=\"file\" name=\"imagen\" id=\"imagen\" (change)=\"onFileChange($event)\" #fileInput accept=\"image/*\">\r\n              <br>\r\n              <br>\r\n              <img src = \"{{objAEditar.imagen}}\" alt=\"\" height=\"160px\">\r\n            </div>\r\n              <div *ngIf=\"clear\">\r\n                <label for=\"exampleInputImagen\">Imagen</label>\r\n                <br>\r\n                <output id=\"list\"></output>\r\n                <br>\r\n                <br>\r\n                <button type=\"button\" class=\"btn btn-danger btn-tn\" (click)=\"clearFile()\">clear file</button>\r\n              </div>\r\n          </div>\r\n          <br><br>\r\n          <label for=\"exampleInputImagen\">Fotos del servicio</label><br><br>\r\n          <br>\r\n          <div style=\"display: flex;\">\r\n            <div *ngFor=\"let fotos of this.objAEditar.fotos; let i = index\" >\r\n              <a href=\"{{fotos.url}}\" target=\"_blank\">\r\n                <img src=\"{{fotos.url}}\" alt=\"\" style=\"width: 68px; height: 68px\">\r\n              </a>\r\n              <button type=\"button\" class=\"btn btn-secundary  btn-table\" (click)=\"borrarfoto(this.objAEditar.id,this.objAEditar.fotos,i)\">x</button>\r\n            </div>\r\n          </div>\r\n          \r\n          <br>\r\n          <button class=\"btn btn-secondary\" (click)=\"atras()\">Cancelar</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editar()\" [disabled]=\"myFormEditar.invalid\">Editar</button>\r\n        </form>\r\n      </nb-card-body>\r\n    </nb-card>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #modal1 let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Eliminar Producto: </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>¿Realmente desea eliminar el producto {{eliminar_nombre}}?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Cancelar</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click'); eliminar()\">Eliminar</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<toaster-container [toasterconfig]=\"config\"></toaster-container>\r\n\r\n<div class=\"my-container\">\r\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '4px' }\"></ngx-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-ver/productos-ver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n:host-context(.nb-theme-default) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-default) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-default) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-default) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-default) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-default) .theme-switch > span.light {\n      color: #4b4b4b;\n      padding-right: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span.cosmic {\n      color: #a4abb3;\n      padding-left: 5px; }\n    :host-context(.nb-theme-default) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-default) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-default) .switch input {\n    display: none; }\n    :host-context(.nb-theme-default) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-default) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #ebeff5; }\n  :host-context(.nb-theme-default) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(164, 171, 179, 0.4); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-default) .light, :host-context(.nb-theme-default) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-default) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n\n:host-context(.nb-theme-cosmic) .estado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 50%; }\n\n:host-context(.nb-theme-cosmic) .btn-table {\n  display: inline-block; }\n\n:host-context(.nb-theme-cosmic) .img-table {\n  border-radius: 4px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n:host-context(.nb-theme-cosmic) .theme-switch {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .theme-switch > span {\n    font-size: 1rem;\n    font-weight: 600;\n    transition: opacity 0.3s ease; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #d1d1ff;\n      padding-right: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #76f8f6;\n      padding-left: 5px; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.light {\n      color: #76f8f6; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span.cosmic {\n      color: #ffffff; }\n    :host-context(.nb-theme-cosmic) .theme-switch > span:active {\n      opacity: 0.78; }\n\n:host-context(.nb-theme-cosmic) .switch {\n  position: relative;\n  display: inline-block;\n  width: 4rem;\n  height: 1.75rem;\n  margin: 0; }\n  :host-context(.nb-theme-cosmic) .switch input {\n    display: none; }\n    :host-context(.nb-theme-cosmic) .switch input:checked + .slider::before {\n      -webkit-transform: translateX(2.25rem);\n              transform: translateX(2.25rem); }\n  :host-context(.nb-theme-cosmic) .switch .slider {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-radius: 1.75rem;\n    background-color: #2f296b; }\n  :host-context(.nb-theme-cosmic) .switch .slider::before {\n    position: absolute;\n    content: '';\n    height: 1.75rem;\n    width: 1.75rem;\n    border-radius: 50%;\n    background-color: #0b417a;\n    transition: 0.2s;\n    box-shadow: 0 0 0.25rem 0 rgba(118, 248, 246, 0.4);\n    background-image: linear-gradient(to right, #0b1c7a, #0b417a); }\n\n@media (max-width: 575px) {\n  :host-context(.nb-theme-cosmic) .light, :host-context(.nb-theme-cosmic) .cosmic {\n    display: none; } }\n\n@media (max-width: 399px) {\n  :host-context(.nb-theme-cosmic) {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/productos/productos-ver/productos-ver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosVerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__ = __webpack_require__("../../../../../src/app/services/ruta-base/ruta-base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__ = __webpack_require__("../../../../style-loader/index.js!../../../../angular2-toaster/toaster.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_style_loader_angular2_toaster_toaster_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Mis imports








var ProductosVerComponent = /** @class */ (function () {
    function ProductosVerComponent(modalService, toasterService, http, router, rutaService, fb) {
        this.modalService = modalService;
        this.toasterService = toasterService;
        this.http = http;
        this.router = router;
        this.rutaService = rutaService;
        this.fb = fb;
        this.position = 'toast-top-right';
        this.animationType = 'fade';
        this.title = 'HI there!';
        this.content = "I'm cool toaster!";
        this.timeout = 5000;
        this.toastsLimit = 5;
        this.type = 'default'; // 'default', 'info', 'success', 'warning', 'error'
        this.isNewestOnTop = true;
        this.isHideOnClick = true;
        this.isDuplicatesPrevented = false;
        this.isCloseButton = true;
        this.loading = false;
        this.editando = false;
        this.agregando = false;
        this.mostrar = true;
        this.subiendoImg = false;
        this.mostrarSwiches = true;
        this.admin = false;
        this.clear = false; //puedo borrar?
        this.fileIMG = null;
        this.imgUpload = null;
        this.loadinImg = false;
        this.mouvers_user_tipo = localStorage.getItem('mouvers_user_tipo');
        this.pages = 4;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.myFormEditar = this.fb.group({
            id: [''],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            precio: [0],
            imagen: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            descripcion: [null],
            subcategoria_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]],
            establecimiento_id: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]]
        });
    }
    ProductosVerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mouvers_user_tipo != '1') {
            localStorage.removeItem('mouvers_token');
            localStorage.removeItem('mouvers_user_id');
            localStorage.removeItem('mouvers_user_nombre');
            localStorage.removeItem('mouvers_user_tipo');
            localStorage.removeItem('mouvers_establecimiento_id');
            this.router.navigateByUrl('/pagessimples/loginf');
        }
        this.loading = true;
        this.http.get(this.rutaService.getRutaApi() + 'productos/subcategoria/establecimiento?token=' + localStorage.getItem('mouvers_token') + '&ciudad_id=' + localStorage.getItem('mouvers_ciudad'))
            .toPromise()
            .then(function (data) {
            //this.getSubcategorias();
            console.log(data);
            _this.data = data;
            _this.productList = _this.data.productos;
            _this.filteredItems = _this.productList;
            //console.log(this.productList);
            _this.init();
            _this.loading = false;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                _this.showToast('warning', 'Warning!', msg.error.error);
                _this.mostrar = false;
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    ProductosVerComponent.prototype.showToast = function (type, title, body) {
        this.config = new __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["b" /* ToasterConfig */]({
            positionClass: this.position,
            timeout: this.timeout,
            newestOnTop: this.isNewestOnTop,
            tapToDismiss: this.isHideOnClick,
            preventDuplicates: this.isDuplicatesPrevented,
            animation: this.animationType,
            limit: this.toastsLimit,
        });
        var toast = {
            type: type,
            title: title,
            body: body,
            timeout: this.timeout,
            showCloseButton: this.isCloseButton,
            bodyOutputType: __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["a" /* BodyOutputType */].TrustedHtml,
        };
        this.toasterService.popAsync(toast);
    };
    //Abrir modal por defecto
    ProductosVerComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    //Abrir modal larga
    ProductosVerComponent.prototype.open2 = function (modal) {
        this.modalService.open(modal, { size: 'lg', backdrop: 'static', container: 'nb-layout', keyboard: false });
    };
    ProductosVerComponent.prototype.getSubcategorias = function () {
        var _this = this;
        this.http.get(this.rutaService.getRutaApi() + 'subcategorias/habilitadas?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.subcategorias = _this.data.subcategorias;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
                setTimeout(function () {
                    _this.router.navigateByUrl('/pagessimples/loginf');
                }, 1000);
            }
            else if (msg.status == 404) {
                //alert(msg.error.error);
                _this.showToast('info', 'Info!', msg.error.error);
            }
        });
    };
    ProductosVerComponent.prototype.atras = function () {
        this.editando = false;
        this.objAEditar = null;
        //console.log(this.objAEditar);
        //this.uploadFile = null;
        this.myFormEditar.reset();
        //this.clearFile()
    };
    ProductosVerComponent.prototype.aEditar = function (obj) {
        this.editando = true;
        this.objAEditar = Object.assign({}, obj);
        this.objAEditar.fotos = JSON.parse(this.objAEditar.fotos);
        console.log(this.objAEditar);
        this.myFormEditar.patchValue({ id: this.objAEditar.id });
        this.myFormEditar.patchValue({ nombre: this.objAEditar.nombre });
        this.myFormEditar.patchValue({ precio: this.objAEditar.precio });
        this.myFormEditar.patchValue({ descripcion: this.objAEditar.descripcion });
        this.myFormEditar.patchValue({ imagen: this.objAEditar.imagen });
        this.myFormEditar.patchValue({ subcategoria_id: this.objAEditar.subcategoria_id });
        this.myFormEditar.patchValue({ establecimiento_id: this.objAEditar.establecimiento_id });
    };
    ProductosVerComponent.prototype.borrarfoto = function (id, fotos, index) {
        var _this = this;
        console.log(id);
        console.log(fotos);
        console.log(index);
        fotos.splice(index, 1);
        console.log(fotos);
        this.loading = true;
        var send = {
            fotos: JSON.stringify(fotos)
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + id, send)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    ProductosVerComponent.prototype.editar = function () {
        var _this = this;
        this.loading = true;
        var imgAux;
        if (this.imgUpload) {
            imgAux = this.imgUpload;
        }
        else {
            imgAux = this.myFormEditar.value.imagen;
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            nombre: this.myFormEditar.value.nombre,
            precio: this.myFormEditar.value.precio,
            descripcion: this.myFormEditar.value.descripcion,
            imagen: imgAux,
            subcategoria_id: this.myFormEditar.value.subcategoria_id,
            establecimiento_id: this.myFormEditar.value.establecimiento_id
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + this.myFormEditar.value.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            for (var i = 0; i < _this.productList.length; ++i) {
                if (_this.productList[i].id == _this.myFormEditar.value.id) {
                    _this.productList[i].nombre = _this.myFormEditar.value.nombre;
                    _this.productList[i].precio = _this.myFormEditar.value.precio;
                    _this.productList[i].descripcion = _this.myFormEditar.value.descripcion;
                    //this.productList[i].imagen = imgAux;
                    _this.productList[i].subcategoria_id = _this.myFormEditar.value.subcategoria_id;
                    _this.productList[i].establecimiento_id = _this.myFormEditar.value.establecimiento_id;
                    if (_this.subcategorias) {
                        for (var j = 0; j < _this.subcategorias.length; ++j) {
                            if (_this.myFormEditar.value.subcategoria_id == _this.subcategorias[j].id) {
                                _this.productList[i].subcategoria.id = _this.subcategorias[j].id;
                                _this.productList[i].subcategoria.nombre = _this.subcategorias[j].nombre;
                                _this.productList[i].subcategoria.estado = _this.subcategorias[j].estado;
                            }
                        }
                    }
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.editando = false;
            //this.clearFile();
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.editando = true;
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.editando = true;
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    //Carga de img---<
    ProductosVerComponent.prototype.subirImagen = function () {
        var _this = this;
        this.loading = true;
        var formModel = this.prepareSave();
        this.http.post(this.rutaService.getRutaApi() + 'imagenes?token=' + localStorage.getItem('mouvers_token'), formModel)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.imgUpload = _this.data.imagen;
            //Solo admitimos imágenes.
            if (!_this.fileIMG.type.match('image.*')) {
                return;
            }
            var reader = new FileReader();
            reader.onload = (function (theFile) {
                return function (e) {
                    // Creamos la imagen.
                    document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result, '" height="160px"/>'].join('');
                };
            })(_this.fileIMG);
            reader.readAsDataURL(_this.fileIMG);
            _this.clear = true;
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    ProductosVerComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('imagen', this.fileIMG);
        input.append('carpeta', 'productos');
        input.append('url_imagen', this.rutaService.getRutaImages());
        return input;
    };
    ProductosVerComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.fileIMG = event.target.files[0];
            this.subirImagen();
        }
    };
    ProductosVerComponent.prototype.clearFile = function () {
        this.imgUpload = null;
        this.fileInput.nativeElement.value = '';
        this.clear = false;
    };
    //Carga de img--->
    ProductosVerComponent.prototype.aEliminar = function (obj) {
        this.objAEliminar = obj;
        //console.log(this.objAEliminar);
        this.eliminar_id = this.objAEliminar.id;
        this.eliminar_nombre = this.objAEliminar.nombre;
    };
    ProductosVerComponent.prototype.eliminar = function () {
        var _this = this;
        console.log(this.objAEliminar);
        this.loading = true;
        var datos = {
            token: localStorage.getItem('mouvers_token')
        };
        this.http.delete(this.rutaService.getRutaApi() + 'productos/' + this.eliminar_id + '?token=' + localStorage.getItem('mouvers_token'))
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            var aux = _this.productList;
            _this.productList = [];
            for (var i = 0; i < aux.length; ++i) {
                if (aux[i].id != _this.eliminar_id) {
                    _this.productList.push(aux[i]);
                }
            }
            _this.filteredItems = _this.productList;
            _this.init();
            //console.log(this.productList);
            //alert(this.data.message);
            _this.loading = false;
            _this.showToast('success', 'Success!', _this.data.message);
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            _this.loading = false;
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else if (msg.status == 404 || msg.status == 409) {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    //Para el producto
    ProductosVerComponent.prototype.cambiarEstado = function (obj) {
        var _this = this;
        var v_estado;
        if (obj.estado == 'ON') {
            //obj.estado = 'OFF';
            v_estado = 'OFF';
        }
        else {
            //obj.estado = 'ON';
            v_estado = 'ON';
        }
        var datos = {
            token: localStorage.getItem('mouvers_token'),
            estado: v_estado
        };
        this.http.put(this.rutaService.getRutaApi() + 'productos/' + obj.id, datos)
            .toPromise()
            .then(function (data) {
            console.log(data);
            _this.data = data;
            _this.showToast('success', 'Success!', _this.data.message);
            obj.estado = v_estado;
        }, function (msg) {
            console.log(msg);
            console.log(msg.error.error);
            //Regresar el switch en caso de error
            if (v_estado == 'ON') {
                //obj.estado = 'OFF';
                obj.estado = 'OFF';
            }
            else {
                //obj.estado = 'ON';
                obj.estado = 'ON';
            }
            //token invalido/ausente o token expiro
            if (msg.status == 400 || msg.status == 401) {
                //alert(msg.error.error);
                //ir a login
                _this.showToast('warning', 'Warning!', msg.error.error);
            }
            else {
                //alert(msg.error.error);
                _this.showToast('error', 'Erro!', msg.error.error);
            }
        });
    };
    ProductosVerComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    ProductosVerComponent.prototype.FilterByName = function () {
        this.filteredItems = [];
        if (this.inputName != "") {
            for (var i = 0; i < this.productList.length; ++i) {
                if (this.productList[i].nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].subcategoria.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
                else if (this.productList[i].establecimiento.nombre.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                    this.filteredItems.push(this.productList[i]);
                }
            }
        }
        else {
            this.filteredItems = this.productList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    ProductosVerComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ProductosVerComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ProductosVerComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ProductosVerComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ProductosVerComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProductosVerComponent.prototype, "fileInput", void 0);
    ProductosVerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-ver-prod',
            template: __webpack_require__("../../../../../src/app/pages/productos/productos-ver/productos-ver.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/productos/productos-ver/productos-ver.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_toaster__["d" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_ruta_base_ruta_base_service__["a" /* RutaBaseService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]])
    ], ProductosVerComponent);
    return ProductosVerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductosComponent = /** @class */ (function () {
    function ProductosComponent() {
    }
    ProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-cat-elements',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/productos/productos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_routing_module__ = __webpack_require__("../../../../../src/app/pages/productos/productos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Mis imports


//import { Ng2UploaderModule } from 'ng2-uploader';
var ProductosModule = /** @class */ (function () {
    function ProductosModule() {
    }
    ProductosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                //Ng2UploaderModule,
                __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["c" /* ToasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
                __WEBPACK_IMPORTED_MODULE_2__productos_routing_module__["a" /* ProductosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_3_ngx_loading__["a" /* ANIMATION_TYPES */].chasingDots,
                    backdropBackgroundColour: 'rgba(0,0,0,0.5)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ffffff',
                    secondaryColour: '#ffffff',
                    tertiaryColour: '#ffffff',
                    fullScreenBackdrop: true
                })
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_2__productos_routing_module__["b" /* routedComponents */].slice(),
            providers: [],
        })
    ], ProductosModule);
    return ProductosModule;
}());



/***/ })

});
//# sourceMappingURL=productos.module.chunk.js.map