webpackJsonp([1,4],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_response_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonResponseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonResponseComponent = (function () {
    function CommonResponseComponent(route, router, commonResponseService) {
        this.route = route;
        this.router = router;
        this.commonResponseService = commonResponseService;
        // @HostBinding('@routeAnimation') routeAnimation = true;
        // @HostBinding('style.display')   display = 'block';
        // @HostBinding('style.position')  position = 'absolute';
        this.msg = "";
    }
    CommonResponseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.code = params['code'];
        });
        this.msg = this.commonResponseService.getMessage(this.code);
        console.log(this.msg);
    };
    return CommonResponseComponent;
}());
CommonResponseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(490),
        styles: [__webpack_require__(459)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_response_service__["a" /* CommonResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_response_service__["a" /* CommonResponseService */]) === "function" && _c || Object])
], CommonResponseComponent);

var _a, _b, _c;
//# sourceMappingURL=common-response.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisorDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganisorDashboardComponent = (function () {
    function OrganisorDashboardComponent(route, router, sharedService) {
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
    }
    OrganisorDashboardComponent.prototype.ngOnInit = function () {
    };
    OrganisorDashboardComponent.prototype.sendToCreateQuestionnairePage = function () {
        this.router.navigate(['qnr/new']);
    };
    return OrganisorDashboardComponent;
}());
OrganisorDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(491),
        styles: [__webpack_require__(460)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_shared_service__["a" /* sharedService */]) === "function" && _c || Object])
], OrganisorDashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=organisor.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.route.params;
        // (+) converts string 'id' to a number
        //.switchMap((params: Params) => this.service.getHero(+params['id']))
        // .subscribe((hero: Hero) => this.hero = hero);
    };
    HomePageComponent.prototype.signup = function () {
        this.service.signUp(this.signupData);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(492)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__signup_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__signup_service__["a" /* SignupService */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_cookie_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_common_response_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = (function () {
    function LoginComponent(route, router, service, sharedService, cookieService, errorMessageService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.errorMessageService = errorMessageService;
        //  @HostBinding('@routeAnimation') routeAnimation = true;
        //@HostBinding('style.display')   display = 'block';
        //@HostBinding('style.position')  position = 'absolute';
        this.loginButtonText = 'Login';
        this.isPassReset = false;
        this.loginData = new __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginDetail */]();
        this.errorMsgs = [];
        this.formErrors = {
            'clientCode': '',
            'userName': '',
            'password': '',
            'forgtPass': '',
        };
        this.validationMessages = {
            'clientCode': {
                'required': 'Client Code is required.',
                'pattern': 'User Name is InValid.'
            },
            'userName': {
                'required': 'User name is required.'
            },
            'password': {
                'required': 'Password is required.'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.route.params;
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    LoginComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.loginForm) {
            return;
        }
        this.loginForm = this.currentForm;
        if (this.loginForm) {
            this.loginForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        if (!this.loginForm) {
            return;
        }
        var form = this.loginForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                if (messages) {
                    for (var key in control.errors) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginButtonText = 'logging in...';
        this.service.login(this.loginData).then(function (response) {
            if (response.status === 'success') {
                _this.sharedService.setCurrentUser(response.data.user);
                _this.sharedService.setSecurityToken(response.data.token);
                _this.cookieService.createCookie('loginData', response.data, 2);
                _this.loginButtonText = 'Login';
                _this.router.navigate(['/organisor/home']);
            }
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    LoginComponent.prototype.showForgetPassModel = function () {
        this.forgetPasswordEmailId = '';
        this.forgetPasswordForm.show();
    };
    LoginComponent.prototype.resetPassword = function () {
        var _this = this;
        this.service.resetPassword(this.forgetPasswordEmailId).then(function (response) {
            if (response && response.status === 'success') {
                _this.forgetPasswordForm.hide();
                _this.router.navigate(['/success', "RESETPASSSUCC"]);
            }
            else {
                _this.forgetPasswordForm.hide();
            }
        })
            .catch(function (error) {
            _this.handleError(error);
        });
        ;
    };
    LoginComponent.prototype.handleError = function (error) {
        this.loginButtonText = 'Login';
        var _this = this;
        if (error && error.status === 'failed') {
            if (error.errType === 'LOGIN_VALIDATION_ERROR') {
                if (error.errorCodes && error.errorCodes.length > 0) {
                    _this.errorMsgs = [];
                    error.errorCodes.forEach(function (errCode) {
                        var errorMsg = _this.errorMessageService.getMessage(errCode);
                        if (errCode === 'NO_USER_FOUND' && errorMsg) {
                            _this.formErrors.clientCode = '';
                            _this.formErrors.userName = '';
                            _this.formErrors.clientCode += errorMsg + ' ';
                            _this.formErrors.userName += errorMsg + ' ';
                        }
                        if (errCode === 'INVALID_CREDENTIAL' && errorMsg) {
                            _this.formErrors.password = '';
                            _this.formErrors.password += errorMsg + ' ';
                        }
                        if (errCode === 'NO_USER_EMAIL_ID_FOUND' && errorMsg) {
                            _this.formErrors.forgtPass = '';
                            _this.formErrors.forgtPass += errorMsg + ' ';
                        }
                    });
                }
                if (error.errMsg) {
                    _this.errorMsgs = [];
                    _this.errorMsgs.push(error.errMsg);
                }
            }
        }
    };
    return LoginComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('loginForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "currentForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('forgetPassword'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], LoginComponent.prototype, "forgetPasswordForm", void 0);
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(493),
        styles: [__webpack_require__(461)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__login_service__["b" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__login_service__["b" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_shared_service__["a" /* sharedService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__common_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__common_cookie_service__["a" /* CookieService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__common_common_response_service__["a" /* CommonResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__common_common_response_service__["a" /* CommonResponseService */]) === "function" && _h || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_cookie_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginDetail = (function () {
    function LoginDetail() {
    }
    return LoginDetail;
}());

var LoginService = (function () {
    function LoginService(httpService, cookieService) {
        this.httpService = httpService;
        this.cookieService = cookieService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.loginURL = 'api/public/login';
        this.resetPwdURL = 'api/public/resetpassword';
        var loginData = this.cookieService.readCookie('loginData');
        if (loginData) {
            this.headers.append('x-access-token', loginData.token);
        }
    }
    LoginService.prototype.login = function (loginData) {
        var url = "" + this.loginURL;
        return this.httpService
            .post(url, loginData, this.headers)
            .then(function (res) { return res; })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    LoginService.prototype.resetPassword = function (emailId) {
        var url = "" + this.resetPwdURL;
        var requestData = {
            "emailId": emailId
        };
        return this.httpService
            .post(url, requestData, this.headers)
            .then(function (res) { return res; })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__common_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_cookie_service__["a" /* CookieService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_response_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = (function () {
    function SignupComponent(route, router, service, errorMessageService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.errorMessageService = errorMessageService;
        //  @HostBinding('@routeAnimation') routeAnimation = true;
        //@HostBinding('style.display')   display = 'block';
        //@HostBinding('style.position')  position = 'absolute';
        this.signupData = new __WEBPACK_IMPORTED_MODULE_6__signup_service__["b" /* SignupDetail */]();
        this.confirmpassword = '';
        this.registerButtonText = 'Register';
        this.errorMsgs = [];
        this.formErrors = {
            'cnctName': '',
            'orgName': '',
            'emailId': '',
            //'cnctNo': '',
            'userName': '',
            'password': '',
            'confirmpassword': ''
        };
        this.validationMessages = {
            'cnctName': {
                'required': 'Contact Name is required.',
                'pattern': 'Contact Name is InValid.'
            },
            'orgName': {
                'required': 'Organisation Name is required.'
            },
            'emailId': {
                'required': 'Email Id is required.',
                'pattern': 'Email Id is InValid.'
            },
            /*'cnctNo': {
              'required': 'Contact No is required.',
              'pattern': 'Contact No is InValid.'
            },*/
            'userName': {
                'required': 'User name is required.',
                'pattern': 'User name is InValid.'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password should contain 1 special character, 1 upper case, 1 lower case, 1 numeric and minimum 8 characters.'
            },
            'confirmpassword': {
                'required': 'Confirm Password is required.',
                'validateEqual': 'password and confirm password are not same'
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.route.params;
    };
    SignupComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    SignupComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.signupForm) {
            return;
        }
        this.signupForm = this.currentForm;
        if (this.signupForm) {
            this.signupForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    SignupComponent.prototype.onValueChanged = function (data) {
        if (!this.signupForm) {
            return;
        }
        var form = this.signupForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                if (messages) {
                    for (var key in control.errors) {
                        this.formErrors[field] += messages[key] + ' ';
                    }
                }
            }
        }
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.registerButtonText = 'please wait while registering...';
        this.service.signUp(this.signupData).then(function (response) {
            if (response.status === 'success') {
                _this.registerButtonText = 'Register';
                _this.router.navigate(['/success', "SIGNSUCC"]);
            }
        })
            .catch(function (error) {
            _this.handleError(error);
        });
    };
    SignupComponent.prototype.handleError = function (error) {
        this.registerButtonText = 'Register';
        var _this = this;
        if (error && error.status === 'failed') {
            if (error.errType === 'SIGN_UP_VALIDATION_ERROR') {
                if (error.errorCodes && error.errorCodes.length > 0) {
                    _this.errorMsgs = [];
                    error.errorCodes.forEach(function (errCode) {
                        var errorMsg = _this.errorMessageService.getMessage(errCode);
                        if (errCode === 'DUPLICATE_CLIENT_EMAIL' && errorMsg) {
                            _this.formErrors.emailId = '';
                            _this.formErrors.emailId += errorMsg + ' ';
                        }
                    });
                }
                if (error.errMsg) {
                    _this.errorMsgs = [];
                    _this.errorMsgs.push(error.errMsg);
                }
            }
        }
    };
    return SignupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('signupForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], SignupComponent.prototype, "currentForm", void 0);
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('myAnimation', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)', 'opacity': 1 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* animate */])('500ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                ])
            ])
        ],
        template: __webpack_require__(494),
        styles: [__webpack_require__(462)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__signup_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__signup_service__["a" /* SignupService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_common_response_service__["a" /* CommonResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_common_response_service__["a" /* CommonResponseService */]) === "function" && _e || Object])
], SignupComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionManageComponent = (function () {
    function QuestionManageComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.questionnaire = {};
        this.questionModal = {};
        this.questionsForQnr = [];
        this.isCollapsed = false;
        this.sections = [];
        this.categories = [];
        this.itemsPerPage = 8;
        this.difficulties = [
            {
                value: "Easy",
                isSelected: false
            },
            {
                value: "Medium",
                isSelected: false
            },
            {
                value: "Hard",
                isSelected: false
            }
        ];
        this.questionTypes = [
            {
                key: "TRUE_FALSE",
                value: "True & False",
                isSelected: false
            },
            {
                key: "MULTIPLE_CHOICE_SINGLE",
                value: "Multiple Choice(Single)",
                isSelected: false
            },
            {
                key: "MULTIPLE_CHOICE_MULTI",
                value: "Multiple Choice(Multi)",
                isSelected: false
            },
            {
                key: "FILL_IN_THE_BLANK",
                value: "Fill in the Blank",
                isSelected: false
            }
        ];
        this.filters = {
            sections: [],
            categories: [],
            difficulties: [],
            questionTypes: [],
            title: "",
            pageSize: this.itemsPerPage,
            pageNo: 1
        };
        this.isDifficultyCollapsed = true;
        this.isQuestionCollapsed = true;
        this.isSectionCollapsed = true;
        this.isCategoryCollapsed = true;
        this.maxSize = 5;
        this.bigCurrentPage = 1;
        this.numPages = 0;
    }
    QuestionManageComponent.prototype.pageChanged = function (event) {
        this.filters.pageNo = event.page;
        this.filters.pageSize = this.itemsPerPage;
        this.getFiltteredQuestions();
    };
    QuestionManageComponent.prototype.ngOnInit = function () {
        this.getFiltteredQuestions();
    };
    QuestionManageComponent.prototype.markSectionSelected = function (selectedSection) {
        this.sections.forEach(function (section, i) {
            if (section.value === selectedSection) {
                section.isSelected = true;
            }
        });
    };
    QuestionManageComponent.prototype.markCategorySelected = function (selectedCategory) {
        this.categories.forEach(function (category, i) {
            if (category.value === selectedCategory) {
                category.isSelected = true;
            }
        });
    };
    QuestionManageComponent.prototype.redirectQuestionnaireScreen = function (questionnaireId) {
        var url = 'qnr/qnrId/update';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, questionnaireId.toString());
        this.router.navigate([newUrl]);
    };
    QuestionManageComponent.prototype.addFilter = function () {
        var filterSection = [];
        var filterCategory = [];
        var filterQuestionType = [];
        var filterDifficulty = [];
        this.sections.forEach(function (section, i) {
            if (section.isSelected) {
                filterSection.push(section.key);
            }
        });
        this.filters.sections = filterSection;
        this.categories.forEach(function (category, i) {
            if (category.isSelected) {
                filterCategory.push(category.key);
            }
        });
        this.filters.categories = filterCategory;
        this.difficulties.forEach(function (difficulty, i) {
            if (difficulty.isSelected) {
                filterDifficulty.push(difficulty.value);
            }
        });
        this.filters.difficulties = filterDifficulty;
        this.questionTypes.forEach(function (quesType, i) {
            if (quesType.isSelected) {
                filterQuestionType.push(quesType.key);
            }
        });
        this.filters.questionTypes = filterQuestionType;
        if (this.titleSelected) {
            this.filters.title = this.titleSelected;
        }
    };
    QuestionManageComponent.prototype.addQuestionsForQnr = function () {
        var _this = this;
        _this.questionsForQnr = [];
        _this.questions.forEach(function (question, i) {
            if (question.selectForQnr) {
                _this.questionsForQnr.push(question._id);
            }
        });
    };
    QuestionManageComponent.prototype.createQnrFromQuestions = function () {
        var context = this;
        context.addQuestionsForQnr();
        context.service.createQnrFromQuestions(context.questionsForQnr).then(function (response) {
            if (response.status === 'success') {
                context.redirectQuestionnaireScreen(response.data.questionnaireId);
            }
        });
    };
    QuestionManageComponent.prototype.getFiltteredQuestions = function () {
        var _this = this;
        this.addFilter();
        this.service.getFiltteredQuestions(this.filters).then(function (response) {
            if (response.status === 'success') {
                _this.bigTotalItems = response.data.count;
                _this.questions = response.data.foundQuestions;
            }
        });
    };
    QuestionManageComponent.prototype.getIconBasedOnQuesType = function (questionType) {
        if (questionType === "TRUE_FALSE") {
            return "../../assets/images/imp-t-f.png";
        }
        if (questionType === "MULTIPLE_CHOICE_SINGLE") {
            return "../../assets/images/imp-m-c-s.png";
        }
        if (questionType === "FILL_IN_THE_BLANK") {
            return "../../assets/images/imp-f-i-t-b.png";
        }
        if (questionType === "MULTIPLE_CHOICE_MULTI") {
            return "../../assets/images/imp-m-c-m.png";
        }
    };
    QuestionManageComponent.prototype.showQuesPreviewModel = function (question) {
        this.questionModal = question;
        this.questionPreviewForm.show();
    };
    return QuestionManageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('questionPreview'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], QuestionManageComponent.prototype, "questionPreviewForm", void 0);
QuestionManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(495),
        styles: [__webpack_require__(463)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _e || Object])
], QuestionManageComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=questionManage.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireCopyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnaireCopyComponent = (function () {
    function QuestionnaireCopyComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.questionnaireData = new __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["b" /* QuestionnaireDetail */]();
        this.subjects = [];
    }
    QuestionnaireCopyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionnaireId = params['qnrId'];
        });
        this.service.getQuestionnaireById(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
                _this.copyQuestionnaireData(_this.questionnaire);
            }
        });
        this.service.getMasterData('subject').then(function (response) {
            if (response.status === 'success') {
                _this.subjects = response.data;
            }
        });
    };
    QuestionnaireCopyComponent.prototype.saveQuestionnaire = function () {
        var _this = this;
        this.questionnaireData.clientId = this.sharedService.getCurrentUser().clientId;
        this.service.copyQuestions(this.questionnaireData, this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                var url = 'qnr/qnrId/question';
                var newUrl = url;
                var qnrId = response.data.questionnaireId;
                newUrl = newUrl.replace(/qnrId/i, qnrId.toString());
                _this.router.navigate([newUrl]);
            }
        });
    };
    QuestionnaireCopyComponent.prototype.copyQuestionnaireData = function (data) {
        this.questionnaireData.desc = data.desc;
        this.questionnaireData.noOfQuestion = data.noOfQuestion;
        this.questionnaireData.marks = data.marks;
        this.questionnaireData.duration = data.duration;
        this.questionnaireData.subject = data.subject;
    };
    return QuestionnaireCopyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('questionnaireSummaryForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], QuestionnaireCopyComponent.prototype, "currentForm", void 0);
QuestionnaireCopyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(340),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _e || Object])
], QuestionnaireCopyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=questionnaireCopy.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireImportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnaireImportComponent = (function () {
    function QuestionnaireImportComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.questionnaire = {};
        this.questionModal = {};
        this.questionsToImport = [];
        this.isCollapsed = false;
        this.sections = [];
        this.categories = [];
        this.itemsPerPage = 8;
        this.difficulties = [
            {
                value: "Easy",
                isSelected: false
            },
            {
                value: "Medium",
                isSelected: false
            },
            {
                value: "Hard",
                isSelected: false
            }
        ];
        this.questionTypes = [
            {
                key: "TRUE_FALSE",
                value: "True & False",
                isSelected: false
            },
            {
                key: "MULTIPLE_CHOICE_SINGLE",
                value: "Multiple Choice(Single)",
                isSelected: false
            },
            {
                key: "MULTIPLE_CHOICE_MULTI",
                value: "Multiple Choice(Multi)",
                isSelected: false
            },
            {
                key: "FILL_IN_THE_BLANK",
                value: "Fill in the Blank",
                isSelected: false
            }
        ];
        this.filters = {
            sections: [],
            categories: [],
            difficulties: [],
            questionTypes: [],
            title: "",
            pageSize: this.itemsPerPage,
            pageNo: 1
        };
        this.isDifficultyCollapsed = true;
        this.isQuestionCollapsed = true;
        this.isSectionCollapsed = true;
        this.isCategoryCollapsed = true;
        this.maxSize = 5;
        this.bigCurrentPage = 1;
        this.numPages = 0;
    }
    QuestionnaireImportComponent.prototype.pageChanged = function (event) {
        this.filters.pageNo = event.page;
        this.filters.pageSize = this.itemsPerPage;
        this.getFiltteredQuestions();
    };
    QuestionnaireImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionnaireId = params['qnrId'];
        });
        this.service.getMasterData('section').then(function (response) {
            if (response.status === 'success') {
                _this.sections = response.data;
            }
        });
        this.service.getMasterData('category').then(function (response) {
            if (response.status === 'success') {
                _this.categories = response.data;
            }
        });
        this.getQuestionnaireById();
        this.getFiltteredQuestions();
        this.route.params.subscribe(function (params) {
            // this.questionnaireId = params['qnrId'];
        });
    };
    QuestionnaireImportComponent.prototype.markSectionSelected = function (selectedSection) {
        this.sections.forEach(function (section, i) {
            if (section.value === selectedSection) {
                section.isSelected = true;
            }
        });
    };
    QuestionnaireImportComponent.prototype.markCategorySelected = function (selectedCategory) {
        this.categories.forEach(function (category, i) {
            if (category.value === selectedCategory) {
                category.isSelected = true;
            }
        });
    };
    QuestionnaireImportComponent.prototype.redirectQuestionScreen = function () {
        var url = 'qnr/qnrId/question';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, this.questionnaireId.toString());
        this.router.navigate([newUrl]);
    };
    QuestionnaireImportComponent.prototype.addFilter = function () {
        var filterSection = [];
        var filterCategory = [];
        var filterQuestionType = [];
        var filterDifficulty = [];
        this.sections.forEach(function (section, i) {
            if (section.isSelected) {
                filterSection.push(section.key);
            }
        });
        this.filters.sections = filterSection;
        this.categories.forEach(function (category, i) {
            if (category.isSelected) {
                filterCategory.push(category.key);
            }
        });
        this.filters.categories = filterCategory;
        this.difficulties.forEach(function (difficulty, i) {
            if (difficulty.isSelected) {
                filterDifficulty.push(difficulty.value);
            }
        });
        this.filters.difficulties = filterDifficulty;
        this.questionTypes.forEach(function (quesType, i) {
            if (quesType.isSelected) {
                filterQuestionType.push(quesType.key);
            }
        });
        this.filters.questionTypes = filterQuestionType;
        if (this.titleSelected) {
            this.filters.title = this.titleSelected;
        }
    };
    QuestionnaireImportComponent.prototype.addQuestionsToImport = function () {
        var _this = this;
        _this.questionsToImport = [];
        _this.questions.forEach(function (question, i) {
            if (question.selectForImport) {
                _this.questionsToImport.push(question);
            }
        });
    };
    QuestionnaireImportComponent.prototype.importQuestions = function () {
        var _this = this;
        _this.addQuestionsToImport();
        _this.service.importQuestions(_this.questionsToImport, _this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.redirectQuestionScreen();
            }
        });
    };
    QuestionnaireImportComponent.prototype.getFiltteredQuestions = function () {
        var _this = this;
        this.addFilter();
        this.service.getFiltteredQuestions(this.filters).then(function (response) {
            if (response.status === 'success') {
                _this.bigTotalItems = response.data.count;
                _this.questions = response.data.foundQuestions;
                _this.checkExistingQuestionsInQuestionnaire(_this.questionnaire, _this.questions);
            }
        });
    };
    QuestionnaireImportComponent.prototype.getIconBasedOnQuesType = function (questionType) {
        if (questionType === "TRUE_FALSE") {
            return "../../assets/images/imp-t-f.png";
        }
        if (questionType === "MULTIPLE_CHOICE_SINGLE") {
            return "../../assets/images/imp-m-c-s.png";
        }
        if (questionType === "FILL_IN_THE_BLANK") {
            return "../../assets/images/imp-f-i-t-b.png";
        }
        if (questionType === "MULTIPLE_CHOICE_MULTI") {
            return "../../assets/images/imp-m-c-m.png";
        }
    };
    QuestionnaireImportComponent.prototype.showQuesPreviewModel = function (question) {
        this.questionModal = question;
        this.questionPreviewForm.show();
    };
    QuestionnaireImportComponent.prototype.getQuestionnaireById = function () {
        var _this = this;
        this.service.getQuestionnaireById(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
                _this.checkExistingQuestionsInQuestionnaire(_this.questionnaire, _this.questions);
                console.log(_this.questionnaire);
            }
        });
    };
    QuestionnaireImportComponent.prototype.checkExistingQuestionsInQuestionnaire = function (questionnaire, questions) {
        questions.forEach(function (question, i) {
            questionnaire.questions.forEach(function (questionId, index) {
                if (question._id === questionId) {
                    question.isImported = true;
                }
            });
        });
    };
    return QuestionnaireImportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('questionPreview'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], QuestionnaireImportComponent.prototype, "questionPreviewForm", void 0);
QuestionnaireImportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(496),
        styles: [__webpack_require__(464)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _e || Object])
], QuestionnaireImportComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=questionnaireImport.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environment__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnairePreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnairePreviewComponent = (function () {
    function QuestionnairePreviewComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        //  @HostBinding('@routeAnimation') routeAnimation = true;
        //@HostBinding('style.display')   display = 'block';
        //@HostBinding('style.position')  position = 'absolute';
        this.questionnaire = new __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["b" /* QuestionnaireDetail */]();
        this.questions = [];
        this.currentQuestion = new __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["c" /* QuestionDetail */]();
        this.mainArray = [];
        this.currentIndex = 0;
        this.currentQuesNo = 1;
        this.isSelected = false;
        this.innerOptionArray = [];
        this.MainOptionArray = [];
    }
    QuestionnairePreviewComponent.prototype.setCurrentQuestion = function (currentQuestion) {
        var context = this;
        var clientId = this.sharedService.getCurrentUser().clientId;
        var serverURL = __WEBPACK_IMPORTED_MODULE_5__environment__["a" /* environment */].serverURL;
        var imgPath = 'api/admin/client/' + clientId.toString() + '/util/img/';
        currentQuestion.answer.forEach(function (answer) {
            if (answer.imageURL) {
                currentQuestion.imageAnsView = true;
                context.MainOptionArray = [];
                for (var i = 1; i <= currentQuestion.answer.length; i++) {
                    answer.imagePath = serverURL + imgPath + answer.imageURL;
                    context.innerOptionArray.push(currentQuestion.answer[i - 1]);
                    if (context.innerOptionArray.length == 2) {
                        context.MainOptionArray.push(context.innerOptionArray);
                        context.innerOptionArray = new Array;
                    }
                }
            }
        });
        if (currentQuestion.imageURL) {
            currentQuestion.imagePath = serverURL + imgPath + currentQuestion.imageURL;
        }
        context.currentQuestion = currentQuestion;
    };
    QuestionnairePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionnaireId = params['qnrId'];
        });
        this.service.getQuestionnaireById(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
            }
        });
        this.service.getQuestionsByQuestionnaireId(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questions = response.data;
                _this.setCurrentQuestion(_this.questions[0]);
                var innerArray = new Array;
                for (var i = 1; i <= _this.questions.length; i++) {
                    innerArray.push(i);
                    if (innerArray.length == 5) {
                        _this.mainArray.push(innerArray);
                        innerArray = new Array;
                    }
                    if (i == _this.questions.length && !(innerArray.length <= 0)) {
                        _this.mainArray.push(innerArray);
                    }
                }
            }
        });
    };
    QuestionnairePreviewComponent.prototype.moveToNextQuestion = function () {
        this.currentIndex = this.currentIndex + 1;
        this.setCurrentQuestion(this.questions[this.currentIndex]);
        this.currentQuesNo = this.currentQuesNo + 1;
    };
    QuestionnairePreviewComponent.prototype.moveToPreviousQuestion = function () {
        this.currentIndex = this.currentIndex - 1;
        this.setCurrentQuestion(this.questions[this.currentIndex]);
        this.currentQuesNo = this.currentQuesNo - 1;
    };
    QuestionnairePreviewComponent.prototype.selectQuestion = function (index) {
        this.currentIndex = index - 1;
        this.setCurrentQuestion(this.questions[this.currentIndex]);
        this.currentQuesNo = index;
    };
    QuestionnairePreviewComponent.prototype.unmarkForReview = function () {
        this.currentQuestion.questionStatus = 'U';
    };
    QuestionnairePreviewComponent.prototype.markForReview = function () {
        this.currentQuestion.questionStatus = 'M';
    };
    QuestionnairePreviewComponent.prototype.attmptedQuestion = function (index) {
        this.currentQuestion.questionStatus = 'A';
        this.selectAnswer(index);
    };
    QuestionnairePreviewComponent.prototype.selectAnswer = function (index) {
        this.currentQuestion.answer.forEach(function (answer) {
            answer.isSelected = false;
        });
        this.currentQuestion.answer[index].isSelected = true;
    };
    QuestionnairePreviewComponent.prototype.startTimer = function (duration, display) {
        var start = Date.now(), diff, minutes, seconds;
        function timer() {
            // get the number of seconds that have elapsed since 
            // startTimer() was called
            diff = duration - (((Date.now() - start) / 1000) | 0);
            // does the same job as parseInt truncates the float
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + 'M' + " : " + seconds + 'S';
            if (diff <= 0) {
                // add one second so that the count down starts at the full duration
                // example 05:00 not 04:59
                start = Date.now() + 1000;
            }
        }
        ;
        // we don't want to wait a full second before the timer starts
        timer();
        setInterval(timer, 1000);
    };
    QuestionnairePreviewComponent.prototype.startExam = function () {
        var fiveMinutes = 60 * this.questionnaire.duration, display = document.querySelector('#time');
        this.startTimer(fiveMinutes, display);
    };
    return QuestionnairePreviewComponent;
}());
QuestionnairePreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(497),
        styles: [__webpack_require__(465)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_shared_service__["a" /* sharedService */]) === "function" && _d || Object])
], QuestionnairePreviewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=questionnairePreview.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionnaireSummaryComponent = (function () {
    function QuestionnaireSummaryComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        //  @HostBinding('@routeAnimation') routeAnimation = true;
        //@HostBinding('style.display')   display = 'block';
        //@HostBinding('style.position')  position = 'absolute';
        this.questionnaireData = new __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["b" /* QuestionnaireDetail */]();
        this.subjects = [];
    }
    QuestionnaireSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionnaireId = params['qnrId'];
        });
        if (this.questionnaireId) {
            this.service.getQuestionnaireById(this.questionnaireId).then(function (response) {
                if (response.status === 'success') {
                    _this.questionnaireData = response.data;
                }
            });
        }
        this.service.getMasterData('subject').then(function (response) {
            if (response.status === 'success') {
                _this.subjects = response.data;
            }
        });
    };
    QuestionnaireSummaryComponent.prototype.saveQuestionnaire = function () {
        var _this = this;
        if (this.questionnaireData.questionnaireId) {
            this.service.updateQuestionnaire(this.questionnaireData).then(function (response) {
                if (response.status === 'success') {
                    var url = 'qnr/qnrId/question';
                    var newUrl = url;
                    var questionnaireId = response.data.questionnaireId;
                    newUrl = newUrl.replace(/qnrId/i, questionnaireId.toString());
                    _this.router.navigate([newUrl]);
                }
            });
        }
        else {
            this.questionnaireData.clientId = this.sharedService.getCurrentUser().clientId;
            this.service.saveQuestionnaire(this.questionnaireData).then(function (response) {
                if (response.status === 'success') {
                    var url = 'qnr/qnrId/question';
                    var newUrl = url;
                    var questionnaireId = response.data.questionnaireId;
                    newUrl = newUrl.replace(/qnrId/i, questionnaireId.toString());
                    _this.router.navigate([newUrl]);
                }
            });
        }
    };
    return QuestionnaireSummaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('questionnaireSummaryForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], QuestionnaireSummaryComponent.prototype, "currentForm", void 0);
QuestionnaireSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(340),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _e || Object])
], QuestionnaireSummaryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=questionnaireSummary.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuestionnaireDetailComponent = (function () {
    function QuestionnaireDetailComponent(route, router, service, sharedService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.remainQuesToFinalize = 0;
        this.questionnaire = new __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["b" /* QuestionnaireDetail */]();
        this.currentQuestion = new __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["c" /* QuestionDetail */]();
        this.masterData = {
            data: {}
        };
        this.saveButtonText = 'Save';
        this.questionCategories = [];
        this.sections = [];
        this.categories = [];
        this.subjects = [];
        this.imageQuesPath = '';
        this.customSectionSelected = '';
        this.questions = [];
        this.isvalidOption = false;
        this.difficulties = ["Easy", "Medium", "Hard"];
        this.imageCollection = [];
        this.modifyingObject = {};
        this.selectedImg = "";
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploader"](this.service.getFileUploadOption());
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.showAll = false;
        this.isImageLoading = false;
        this.createQuestion('MULTIPLE_CHOICE_SINGLE');
        this.uploader.onCompleteAll = function () {
            _this.getClientImages();
        };
    }
    QuestionnaireDetailComponent.prototype.setCurrentQuestion = function (currentQuestion) {
        var context = this;
        var clientId = this.sharedService.getCurrentUser().clientId;
        var serverURL = __WEBPACK_IMPORTED_MODULE_8__environment__["a" /* environment */].serverURL;
        var imgPath = 'api/admin/client/' + clientId.toString() + '/util/img/';
        currentQuestion.answer.forEach(function (answer) {
            if (answer.imageURL) {
                for (var i = 1; i <= currentQuestion.answer.length; i++) {
                    answer.imagePath = serverURL + imgPath + answer.imageURL;
                }
            }
        });
        if (currentQuestion.imageURL) {
            currentQuestion.imagePath = serverURL + imgPath + currentQuestion.imageURL;
            context.imageQuesPath = currentQuestion.imagePath;
        }
        context.currentQuestion = currentQuestion;
    };
    QuestionnaireDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionnaireId = params['qnrId'];
        });
        this.service.getMasterData('subject').then(function (response) {
            if (response.status === 'success') {
                _this.subjects = response.data;
            }
        });
        this.service.getMasterData('section').then(function (response) {
            if (response.status === 'success') {
                _this.sections = response.data;
                console.log(_this.sections);
            }
        });
        this.service.getMasterData('category').then(function (response) {
            if (response.status === 'success') {
                _this.categories = response.data;
            }
        });
        this.service.getQuestionsByQuestionnaireId(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questions = response.data;
                console.log(_this.questions);
            }
        });
        this.service.getQuestionnaireById(this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
                console.log(_this.questionnaire);
            }
        });
    };
    QuestionnaireDetailComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    QuestionnaireDetailComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.questionnaireForm) {
            return;
        }
        this.questionnaireForm = this.currentForm;
        if (this.questionnaireForm) {
            this.questionnaireForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    QuestionnaireDetailComponent.prototype.onValueChanged = function (data) {
        this.isFormValid(data);
    };
    QuestionnaireDetailComponent.prototype.createAnswerOption = function (num, questionType) {
        for (var i = 1; i <= num; i++) {
            var answer = new __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["d" /* Answer */]();
            this.currentQuestion.answer.push(answer);
        }
        if (questionType === "TRUE_FALSE") {
            this.currentQuestion.answer[0].description = 'True';
            this.currentQuestion.answer[1].description = 'False';
        }
    };
    QuestionnaireDetailComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    QuestionnaireDetailComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    QuestionnaireDetailComponent.prototype.createQuestion = function (questionType) {
        this.currentQuestion = new __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["c" /* QuestionDetail */]();
        this.currentQuestion.questionType = questionType;
        var num;
        switch (questionType) {
            case 'MULTIPLE_CHOICE_SINGLE':
                num = 4;
                break;
            case 'MULTIPLE_CHOICE_MULTI':
                num = 4;
                break;
            case 'TRUE_FALSE':
                num = 2;
                break;
            case 'FILL_IN_THE_BLANK':
                num = 1;
                break;
        }
        this.createAnswerOption(num, questionType);
    };
    QuestionnaireDetailComponent.prototype.replaceQuestion = function (newQuestion) {
        this.questions.forEach(function (existingQuestion, i) {
            if (existingQuestion.questionId === newQuestion.questionId) {
                existingQuestion = newQuestion;
            }
        });
    };
    QuestionnaireDetailComponent.prototype.updateQuestionnaire = function () {
        var _this = this;
        this.service.updateQuestionnaire(this.questionnaire).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
                _this.qnrModal.hide();
            }
        });
    };
    QuestionnaireDetailComponent.prototype.saveQuestion = function () {
        var _this = this;
        this.saveButtonText = 'saving...';
        this.currentQuestion.clientId = this.sharedService.getCurrentUser().clientId;
        if (this.currentQuestion.questionId) {
            this.service.updateQuestion(this.currentQuestion, this.questionnaireId).then(function (response) {
                if (response.status === 'success') {
                    _this.saveButtonText = 'Save';
                    _this.replaceQuestion(response.data);
                    _this.setCurrentQuestion(response.data);
                }
            });
        }
        else {
            this.service.saveQuestion(this.currentQuestion, this.questionnaireId).then(function (response) {
                if (response.status === 'success') {
                    _this.saveButtonText = 'Save';
                    _this.setCurrentQuestion(response.data);
                    _this.questions.push(_this.currentQuestion);
                    location.reload();
                }
            });
        }
    };
    QuestionnaireDetailComponent.prototype.deleteQuestion = function () {
        this.service.deleteQuestionFromQuestionnaire(this.currentQuestion.questionId, this.questionnaireId).then(function (response) {
            if (response.status === 'success') {
                location.reload();
            }
        });
    };
    QuestionnaireDetailComponent.prototype.showImageUploader = function () {
        this.uploadImageModal.show();
        this.isImageLoading = true;
        this.getClientImages();
    };
    QuestionnaireDetailComponent.prototype.getClientImages = function () {
        var _this = this;
        this.service.getClientImages(this.showAll).then(function (response) {
            if (response.status === 'success') {
                console.log(response);
                _this.imageCollection = [];
                var clientId = _this.sharedService.getCurrentUser().clientId;
                var serverURL = __WEBPACK_IMPORTED_MODULE_8__environment__["a" /* environment */].serverURL;
                var imgPath = 'api/admin/client/' + clientId.toString() + '/util/img/';
                var clientmages = response.data;
                var innerArray = new Array;
                var imgObject;
                for (var i = 1; i <= clientmages.length; i++) {
                    imgObject = new Object();
                    imgObject.imageFullPath = serverURL + imgPath + clientmages[i - 1].imageName;
                    imgObject.imageName = clientmages[i - 1].imageName;
                    innerArray.push(imgObject);
                    if (innerArray.length == 7) {
                        _this.imageCollection.push(innerArray);
                        innerArray = new Array;
                    }
                    if (i == clientmages.length && !(innerArray.length <= 0)) {
                        _this.imageCollection.push(innerArray);
                    }
                }
                console.log(_this.imageCollection);
            }
        });
    };
    QuestionnaireDetailComponent.prototype.redirectToQuestinnairePreview = function () {
        var url = 'qnr/qnrId/preview';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, this.questionnaireId.toString());
        this.router.navigate([newUrl]);
    };
    QuestionnaireDetailComponent.prototype.redirectImportScreen = function () {
        var url = 'qnr/qnrId/import';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, this.questionnaireId.toString());
        this.router.navigate([newUrl]);
    };
    QuestionnaireDetailComponent.prototype.selectCurrentQuestion = function (selectedQuestion) {
        var context = this;
        context.setCurrentQuestion(selectedQuestion);
        context.getValueByKeyForQuesCategory(selectedQuestion);
        context.getValueByKeyForQuesSection(selectedQuestion);
    };
    QuestionnaireDetailComponent.prototype.getValueByKeyForQuesCategory = function (question) {
        var context = this;
        var quesCategory = [];
        question.category.forEach(function (category) {
            context.categories.forEach(function (masCategory) {
                if (masCategory.key === category) {
                    quesCategory.push(masCategory.value);
                }
            });
        });
        context.questionCategories = quesCategory;
    };
    QuestionnaireDetailComponent.prototype.getValueByKeyForQuesSection = function (question) {
        var context = this;
        for (var i = 0; i < context.sections.length; i++) {
            if (context.sections[i].key === question.section) {
                context.customSectionSelected = context.sections[i].value;
                console.log('section ' + context.customSectionSelected);
                break;
            }
        }
    };
    QuestionnaireDetailComponent.prototype.isFormValid = function (data) {
        if (this.currentQuestion.questionType === "MULTIPLE_CHOICE_MULTI") {
            if (data.option1 || data.option2 || data.option3 || data.option4) {
                this.isvalidOption = true;
                return;
            }
            else {
                this.isvalidOption = false;
                return;
            }
        }
        if (this.currentQuestion.questionType === "MULTIPLE_CHOICE_SINGLE") {
            if (data.option1 || data.option2 || data.option3 || data.option4) {
                this.isvalidOption = true;
                return;
            }
            else {
                this.isvalidOption = false;
                return;
            }
        }
        if (this.currentQuestion.questionType === "TRUE_FALSE") {
            if (data.option1 || data.option2) {
                this.isvalidOption = true;
                return;
            }
            else {
                this.isvalidOption = false;
                return;
            }
        }
        if (this.currentQuestion.questionType === "FILL_IN_THE_BLANK") {
            this.isvalidOption = true;
        }
    };
    QuestionnaireDetailComponent.prototype.selectOnlyOneOption = function (index) {
        if (this.currentQuestion.questionType === "MULTIPLE_CHOICE_SINGLE") {
            this.currentQuestion.answer.forEach(function (answer) {
                answer.isCorrect = false;
            });
            this.currentQuestion.answer[index].isCorrect = true;
        }
        if (this.currentQuestion.questionType === "TRUE_FALSE") {
            this.currentQuestion.answer.forEach(function (answer) {
                answer.isCorrect = false;
            });
            this.currentQuestion.answer[index].isCorrect = true;
        }
    };
    QuestionnaireDetailComponent.prototype.getIconBasedOnQuesType = function (questionType) {
        if (questionType === "TRUE_FALSE") {
            return "../../assets/images/t-f.png";
        }
        if (questionType === "MULTIPLE_CHOICE_SINGLE") {
            return "../../assets/images/m-c-s.png";
        }
        if (questionType === "FILL_IN_THE_BLANK") {
            return "../../assets/images/f-i-t-b.png";
        }
        if (questionType === "MULTIPLE_CHOICE_MULTI") {
            return "../../assets/images/m-c-m.png";
        }
    };
    QuestionnaireDetailComponent.prototype.showManualFileUploader = function () {
        var el = document.getElementById('fileuploadInput');
        el.click();
    };
    QuestionnaireDetailComponent.prototype.addTagToCurrentQuestion = function () {
        var context = this;
        context.categories.forEach(function (category, i) {
            if (category.value === context.customCategorySelected) {
                if (context.currentQuestion.category && context.currentQuestion.category.length > 0) {
                    context.currentQuestion.category.forEach(function (tag, index) {
                        if (tag === category.key) {
                            context.currentQuestion.category.splice(index, 1);
                        }
                    });
                }
                context.currentQuestion.category.push(category.key);
                context.getValueByKeyForQuesCategory(context.currentQuestion);
            }
        });
    };
    QuestionnaireDetailComponent.prototype.addSectionToCurrentQuestion = function () {
        var context = this;
        context.sections.forEach(function (section, i) {
            if (section.value === context.customSectionSelected) {
                context.currentQuestion.section = section.key;
            }
        });
        context.getValueByKeyForQuesSection(context.currentQuestion);
    };
    QuestionnaireDetailComponent.prototype.removeCategory = function (questionCategory) {
        var context = this;
        context.questionCategories.forEach(function (category, index) {
            if (questionCategory === category) {
                context.questionCategories.splice(index, 1);
            }
        });
        context.categories.forEach(function (category) {
            context.currentQuestion.category.forEach(function (quesCategory, index) {
                if (category.value === questionCategory && category.key === quesCategory) {
                    context.currentQuestion.category.splice(index, 1);
                }
            });
        });
    };
    QuestionnaireDetailComponent.prototype.setModifyingObj = function (obj) {
        this.modifyingObject = obj;
    };
    QuestionnaireDetailComponent.prototype.setCurrentImg = function () {
        this.modifyingObject.imageURL = this.selectedImg;
        this.modifyingObject.imagePath = this.imageQuesPath;
        this.uploadImageModal.hide();
    };
    QuestionnaireDetailComponent.prototype.hideUploadModal = function () {
        this.modifyingObject = {};
        this.selectedImg = '';
    };
    QuestionnaireDetailComponent.prototype.setCurrentImgPath = function (image) {
        this.imageQuesPath = image;
    };
    QuestionnaireDetailComponent.prototype.removeImage = function (object) {
        object.imageURL = '';
    };
    QuestionnaireDetailComponent.prototype.createCategoryMasterData = function (categoryName) {
        var _this = this;
        var context = this;
        var dataName = "category";
        context.masterData.data.value = categoryName;
        context.masterData.data.key = categoryName.toUpperCase();
        context.currentQuestion.category.push(context.masterData.data.key);
        context.service.updateMasterData(context.masterData, dataName).then(function (response) {
            if (response.status === 'success') {
                _this.categories = response.data.data;
                context.getValueByKeyForQuesCategory(context.currentQuestion);
            }
        });
    };
    QuestionnaireDetailComponent.prototype.createSectionMasterData = function (section) {
        var _this = this;
        var context = this;
        var dataName = "section";
        context.masterData.data.value = section;
        context.masterData.data.key = section.toUpperCase();
        context.currentQuestion.section = context.masterData.data.key;
        context.service.updateMasterData(context.masterData, dataName).then(function (response) {
            if (response.status === 'success') {
                _this.sections = response.data.data;
                _this.getValueByKeyForQuesSection(context.currentQuestion);
                _this.section.hide();
            }
        });
    };
    QuestionnaireDetailComponent.prototype.showInsertQuestionModal = function () {
        if (this.questions.length == this.questionnaire.noOfQuestion) {
            this.quesLimitModal.show();
        }
        else {
            this.insertQuestion.show();
        }
    };
    QuestionnaireDetailComponent.prototype.showFinalizeModal = function () {
        this.remainQuesToFinalize = 0;
        if (this.questionnaire.questions.length < this.questionnaire.noOfQuestion) {
            this.remainQuesToFinalize = this.questionnaire.noOfQuestion - this.questions.length;
            this.finalizeErrorModal.show();
        }
        else {
            this.finalize.show();
        }
    };
    QuestionnaireDetailComponent.prototype.finalizeQuestionnaire = function () {
        var _this = this;
        this.questionnaire.status = 'Finalised';
        this.service.finalizeQuestionnaire(this.questionnaire).then(function (response) {
            if (response.status === 'success') {
                _this.questionnaire = response.data;
                _this.finalize.hide();
            }
        });
    };
    return QuestionnaireDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('questionnaireForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], QuestionnaireDetailComponent.prototype, "currentForm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('uploadImage'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _b || Object)
], QuestionnaireDetailComponent.prototype, "uploadImageModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('qnrModal'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _c || Object)
], QuestionnaireDetailComponent.prototype, "qnrModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('quesLimitModal'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _d || Object)
], QuestionnaireDetailComponent.prototype, "quesLimitModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('imageModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _e || Object)
], QuestionnaireDetailComponent.prototype, "imageModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('insertQuestion'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _f || Object)
], QuestionnaireDetailComponent.prototype, "insertQuestion", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('finalize'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _g || Object)
], QuestionnaireDetailComponent.prototype, "finalize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('finalizeErrorModal'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _h || Object)
], QuestionnaireDetailComponent.prototype, "finalizeErrorModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('section'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _j || Object)
], QuestionnaireDetailComponent.prototype, "section", void 0);
QuestionnaireDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(498),
        styles: [__webpack_require__(466)]
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _o || Object])
], QuestionnaireDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=questionnarieDetail.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireManageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionnaireManageComponent = (function () {
    function QuestionnaireManageComponent(route, router, service, sharedService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.sharedService = sharedService;
        this.subjects = [];
        this.questionnaires = [];
        this.maxSize = 5;
        this.bigCurrentPage = 1;
        this.numPages = 0;
        this.itemsPerPage = 8;
        this.isStatusCollapsed = true;
        this.isMarksCollapsed = true;
        this.isSubjectCollapsed = true;
        this.status = [
            {
                value: "Draft",
                isSelected: false
            },
            {
                value: "Finalised",
                isSelected: false
            }
        ];
        this.filters = {
            subjects: [],
            status: [],
            title: "",
            pageSize: this.itemsPerPage,
            pageNo: 1,
            pageTo: this.pageTo,
            pageFrom: this.pageFrom
        };
    }
    QuestionnaireManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMasterData('subject').then(function (response) {
            if (response.status === 'success') {
                _this.subjects = response.data;
                console.log(_this.subjects);
            }
        });
        this.getFiltteredQuestionnaires();
    };
    QuestionnaireManageComponent.prototype.markSubjectSelected = function (selectedSubject) {
        this.subjects.forEach(function (subject, i) {
            if (subject.value === selectedSubject) {
                subject.isSelected = true;
            }
        });
    };
    QuestionnaireManageComponent.prototype.addFilter = function () {
        var filterSubject = [];
        var filterStatus = [];
        this.subjects.forEach(function (subject, i) {
            if (subject.isSelected) {
                filterSubject.push(subject.value);
            }
        });
        this.filters.subjects = filterSubject;
        this.status.forEach(function (status, i) {
            if (status.isSelected) {
                filterStatus.push(status.value);
            }
        });
        this.filters.status = filterStatus;
        if (this.titleSelected) {
            this.filters.title = this.titleSelected;
        }
        this.filters.pageTo = this.pageTo;
        this.filters.pageFrom = this.pageFrom;
    };
    QuestionnaireManageComponent.prototype.getFiltteredQuestionnaires = function () {
        var _this = this;
        this.addFilter();
        this.service.getFiltteredQuestionnaires(this.filters).then(function (response) {
            if (response.status === 'success') {
                _this.bigTotalItems = response.data.count;
                _this.questionnaires = response.data.foundQuestionnaires;
                console.log(response.data);
            }
        });
    };
    QuestionnaireManageComponent.prototype.pageChanged = function (event) {
        this.filters.pageNo = event.page;
        this.filters.pageSize = this.itemsPerPage;
        this.getFiltteredQuestionnaires();
    };
    QuestionnaireManageComponent.prototype.redirectToNewQuestionnaireScreen = function () {
        this.router.navigate(['qnr/new']);
    };
    QuestionnaireManageComponent.prototype.redirectQuestionScreen = function (qnrId) {
        var url = 'qnr/qnrId/question';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, qnrId.toString());
        this.router.navigate([newUrl]);
    };
    QuestionnaireManageComponent.prototype.redirectQuestionCopyScreen = function (qnrId) {
        var url = 'qnr/qnrId/copy/questions';
        var newUrl = url;
        var newUrl = newUrl.replace(/qnrId/i, qnrId.toString());
        this.router.navigate([newUrl]);
    };
    return QuestionnaireManageComponent;
}());
QuestionnaireManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__(499),
        styles: [__webpack_require__(467)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["a" /* QuestionnaireService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__questionnaire_service__["a" /* QuestionnaireService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_shared_service__["a" /* sharedService */]) === "function" && _d || Object])
], QuestionnaireManageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=questionnarieManage.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "body{\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n\tfont-family: \"Verdana\", Geneva, sans-serif;\r\n\tfont-size:medium;\r\n}\r\nul{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\nfigure{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\np{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\nh1{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\n#main{\r\n\twidth: 100%;\r\n}\r\nheader{\r\n\twidth: 100%;\r\n\tbackground-color: #0b152d;\r\n\tpadding: 8px 0px;\r\n}\r\nheader figure{\r\n\tpadding: 0px 0px 0px 35px;\r\n}\r\n#logo{\r\n\twidth: 70%;\r\n}\r\n#logo img{\r\n\twidth: 85px;\r\n}\r\nheader nav{\r\n\twidth: 29%;\r\n}\r\nheader figure,header nav{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#user-icon{\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 2px solid white;\r\n    border-radius: 30px;\r\n    text-align: center;\r\n    margin-right: 1%;\r\n    cursor: pointer;\r\n}\r\n#user-icon figure img{\r\n\tposition: relative;\r\n    left: -26px;\r\n    top: 3px;\r\n    width: 18px;\r\n}\r\nnav #user-icon,nav #user-p{\r\n\tdisplay: inline-block;\r\n}\r\n#user-p{\r\n\tvertical-align: top;\r\n    width: 20%;\r\n    color: white;\r\n    font-size: 16px;\r\n    padding-top: 7px;\r\n    cursor: pointer;\r\n}\r\n.btn{\r\n\tvertical-align: top !important;\r\n\tmargin-top: 3px;\r\n\tmargin-left: 8%;\r\n\tpadding: 6px 20px !important;\r\n}\r\n#image-section{\r\n\twidth: 100%;\r\n    padding-bottom: 45px;\r\n    background: url(" + __webpack_require__(763) + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    /*background-position: 85% 0%;*/\r\n    height: 560px;\r\n}\r\n.form-container{\r\n\tposition: relative;\r\n  background: #0f1d3d;\r\n  max-width: 425px;\r\n  width: 100%;\r\n  border-left: 20px solid #c7d2e1;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n  /*margin: 0 auto;*/\r\n  float: right;\r\n  margin-right: 8%;\r\n  margin-top: 18px;\r\n}\r\n.form-container .form{\r\n  padding: 20px 35px;\r\n  display: block;\r\n}\r\n.form h2{\r\n  margin: 0 0 20px;\r\n  color: #ffffff;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n}\r\n.form input {\r\n  outline: none;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: transparent;\r\n    color: #2aade3;\r\n        border: none;\r\n    border-radius: 0;\r\n    border-bottom: 1px solid #48a5ea;\r\n  margin: 0 0 15px;\r\n  padding: 10px 0px;\r\n  box-sizing: border-box;\r\n  font-wieght: 400;\r\n  transition: 0.3s ease;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #48a5ea;\r\n}\r\n.range-control input{\r\n\tmargin: 0 0 15px;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  font-wieght: 400;\r\n  transition: 0.3s ease;\r\n  outline: none;\r\n  display: block;\r\n  width: 84%;\r\n  background-color: transparent;\r\n    color: #2aade3;\r\n        border: none;\r\n    border-radius: 0;\r\n}\r\ninput:focus{\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.form button {\r\n  cursor: pointer;\r\n  background: #38a2e8;\r\n  width: 100%;\r\n  border: 0;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n  padding: 10px 15px;\r\n  color: #ffffff;\r\n  transition: 0.3s ease;\r\n\r\n}\r\n.form button:hover {\r\n  background: #178ab4;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.range-p{\r\n\tcolor:#48a5ea; \r\n\tmargin: 0 0 20px;\r\n}\r\n.range-control {\r\n  position: relative;\r\n}\r\n\r\ninput[type=range] {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 0;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  margin: 0 0 15px;\r\n  border: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  position: relative;\r\n  height: 12px;\r\n /* border: 1px solid #b2b2b2;*/\r\n  border-radius: 5px;\r\n  background-color: #ffffff;\r\n  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  position: relative;\r\n  top: -5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid #999;\r\n  -webkit-appearance: none;\r\n  background-color: #fff;\r\n  box-shadow: inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25);\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\noutput {\r\n  position: absolute;\r\n  top: 22px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 24px;\r\n  border: 1px solid #c7d2e1;\r\n  background-color: #367ab4;\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  font-size: .8em;\r\n  line-height: 24px;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=range]:active + output {\r\n  display: block;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n .form button:disabled{\r\n    cursor: not-allowed;\r\n}\r\n\r\n.range-control #inputRange , .range-control #out-range{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n#out-range {\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #48a5ea;\r\n    width: 14%;\r\n    border-radius: 4px;  \r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    margin-bottom: 15px;\r\n    \r\n    color: #48a5ea;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_cookie_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sharedService = (function () {
    function sharedService(cookieService) {
        this.cookieService = cookieService;
        var loginData = this.cookieService.readCookie('loginData');
        if (loginData) {
            this.setCurrentUser(loginData.user);
            this.setSecurityToken(loginData.token);
        }
    }
    sharedService.prototype.setCurrentUser = function (user) {
        this.user = user;
    };
    sharedService.prototype.getCurrentUser = function () {
        return this.user;
    };
    sharedService.prototype.setSecurityToken = function (token) {
        this.SEC_TOKEN = token;
    };
    sharedService.prototype.getSecurityToken = function () {
        return this.SEC_TOKEN;
    };
    return sharedService;
}());
sharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_cookie_service__["a" /* CookieService */]) === "function" && _a || Object])
], sharedService);

var _a;
//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_cookie_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionnaireDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Answer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionnaireDetail = (function () {
    function QuestionnaireDetail() {
    }
    return QuestionnaireDetail;
}());

var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());

var QuestionDetail = (function () {
    function QuestionDetail() {
        this.questionType = "MULTIPLE_CHOICE_SINGLE";
        this.answer = [];
        this.category = [];
        this.imageAnsView = false;
    }
    return QuestionDetail;
}());

var QuestionnaireService = (function () {
    function QuestionnaireService(httpService, sharedService, cookieService) {
        this.httpService = httpService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.saveQuestionnaireURL = 'api/admin/client/:clientId/questionnaire';
        this.updateQuestionnaireURL = 'api/admin/client/:clientid/questionnaire';
        this.getQuestionsByQuestionnaireIdURL = 'api/admin/client/:clientid/qnr/:qnrId/questions';
        this.getQuestionnaireByIdURL = 'api/admin/client/:clientId/qnr/:qnrId';
        this.saveQuestionURL = 'api/admin/client/:clientId/qnr/:qnrId/question';
        this.createQnrFromQuesURL = 'api/admin/client/:clientId/qnr/questions';
        this.updateQuestionURL = 'api/admin/client/:clientId/qnr/:qnrId/question';
        this.deleteQuestionFromQuestionnaireURL = 'api/admin/client/:clientId/qnr/:qnrId/question/:quesId';
        this.getMasterDataURL = 'api/admin/client/:clientId/masterdata/:masterDataType';
        this.updateMasterDataURL = 'api/admin/client/:clientId/masterdata/:dataName';
        this.getFiltteredQuestionsURL = 'api/admin/client/:clientid/filterquestion';
        this.getFiltteredQuestionnairesURL = 'api/admin/client/:clientid/filterquestionnaire';
        this.importQuestionsURL = 'api/admin/client/:clientId/qnr/:qnrId/import';
        this.imageUploadURL = 'api/admin/client/:clientId/util/upload/img';
        this.getClientImageURL = 'api/admin/client/:clientId/util/img';
        this.copyQuestionsURL = 'api/admin/client/:clientId/qnr/:qnrId/copyquestions';
        this.finalizeQuestionnareURL = 'api/admin/client/:clientId/qnr/:qnrId/finalize';
        var loginData = this.cookieService.readCookie('loginData');
        if (loginData) {
            this.headers.append('x-access-token', loginData.token);
        }
    }
    QuestionnaireService.prototype.getFiltteredQuestions = function (filterData) {
        var url = "" + this.getFiltteredQuestionsURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        return this.httpService
            .post(newUrl, filterData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.getFiltteredQuestionnaires = function (filterData) {
        var url = "" + this.getFiltteredQuestionnairesURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        return this.httpService
            .post(newUrl, filterData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.saveQuestionnaire = function (questionnaireData) {
        var url = "" + this.saveQuestionnaireURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        return this.httpService
            .post(newUrl, questionnaireData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.createQnrFromQuestions = function (questions) {
        var url = "" + this.createQnrFromQuesURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        return this.httpService
            .post(newUrl, questions, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.updateQuestionnaire = function (questionnaireData) {
        var url = "" + this.updateQuestionnaireURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        return this.httpService
            .put(newUrl, questionnaireData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.finalizeQuestionnaire = function (questionnaireData) {
        var url = "" + this.finalizeQuestionnareURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var qnrId = questionnaireData.questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, qnrId.toString());
        return this.httpService
            .put(newUrl, questionnaireData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.copyQuestions = function (questionnaireData, questionnaireId) {
        var url = "" + this.copyQuestionsURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .post(newUrl, questionnaireData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.getQuestionsByQuestionnaireId = function (questionnaireId) {
        var url = "" + this.getQuestionsByQuestionnaireIdURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .get(newUrl, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.getQuestionnaireById = function (questionnaireId) {
        var url = "" + this.getQuestionnaireByIdURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .get(newUrl, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.saveQuestion = function (questionData, questionnaireId) {
        var url = "" + this.saveQuestionURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .post(newUrl, questionData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.importQuestions = function (questions, questionnaireId) {
        var url = "" + this.importQuestionsURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .post(newUrl, questions, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.updateQuestion = function (questionData, questionnaireId) {
        var url = "" + this.updateQuestionURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        return this.httpService
            .put(newUrl, questionData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.deleteQuestionFromQuestionnaire = function (questionId, questionnaireId) {
        var url = "" + this.deleteQuestionFromQuestionnaireURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var questionnaireId = questionnaireId;
        newUrl = newUrl.replace(/:qnrId/i, questionnaireId.toString());
        var questionId = questionId;
        newUrl = newUrl.replace(/:quesId/i, questionId.toString());
        return this.httpService
            .delete(newUrl, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.getMasterData = function (masterDataType) {
        var url = "" + this.getMasterDataURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var masterDataType = masterDataType;
        newUrl = newUrl.replace(/:masterDataType/i, masterDataType.toString());
        return this.httpService
            .get(newUrl, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.updateMasterData = function (masterData, dataName) {
        var url = "" + this.updateMasterDataURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        var dataName = dataName;
        newUrl = newUrl.replace(/:dataName/i, dataName.toString());
        return this.httpService
            .put(newUrl, masterData, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.getFileUploadOption = function () {
        var clientId = this.sharedService.getCurrentUser().clientId;
        var imgURL = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].serverURL + this.imageUploadURL;
        imgURL = imgURL.replace(/:clientId/i, clientId.toString());
        var securityToken = this.headers.get('x-access-token');
        return {
            url: imgURL,
            authTokenHeader: "x-access-token",
            authToken: securityToken
        };
    };
    QuestionnaireService.prototype.getClientImages = function (showAll) {
        var url = "" + this.getClientImageURL;
        var newUrl = url;
        var clientId = this.sharedService.getCurrentUser().clientId;
        newUrl = newUrl.replace(/:clientId/i, clientId.toString());
        newUrl += '?showAll=' + (showAll ? "true" : "false");
        return this.httpService
            .get(newUrl, this.headers)
            .then(function (res) { return res; });
    };
    QuestionnaireService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return QuestionnaireService;
}());
QuestionnaireService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__utils_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_cookie_service__["a" /* CookieService */]) === "function" && _c || Object])
], QuestionnaireService);

var _a, _b, _c;
//# sourceMappingURL=questionnaire.service.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<section id=\"main\">\r\n\t<div id=\"image-section\">\r\n\t\t<div class=\"form-container\">\r\n\t\t\t<div class=\"form\">\r\n\t\t\t\t<h2>Create Questionnaire</h2>\r\n\t\t\t\t<form #questionnaireSummaryForm=\"ngForm\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"Quiz Title \" [(ngModel)]=\"questionnaireData.desc\" name=\"quizTitle\" required>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n    \t\t\t\t\t<label for=\"exampleSelect1\">Subject</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"subject\" name=\"subject\" [(ngModel)]=\"questionnaireData.subject\">\r\n\t\t\t\t\t\t<option *ngFor=\"let subject of subjects\">{{subject.value}}</option>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</select>\r\n \t\t\t\t\t </div>\r\n\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t<p class=\"range-p\">No. of Questions</p>\r\n\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" [(ngModel)]=\"questionnaireData.noOfQuestion\" name=\"noOfQuestion\" min=\"1\" max=\"200\" step=\"1\" value=\"1\" data-thumbwidth=\"20\" required>\t\t\r\n\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" [(ngModel)]=\"questionnaireData.noOfQuestion\" name=\"noOfQuestion\" min=\"1\" max=\"200\" step=\"1\" value=\"1\" data-thumbwidth=\"20\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t<p class=\"range-p\">Total Marks</p>\r\n\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" [(ngModel)]=\"questionnaireData.marks\" name=\"marks\" min=\"1\" max=\"100\" step=\"1\" value=\"1\" data-thumbwidth=\"20\" required>\r\n\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" [(ngModel)]=\"questionnaireData.marks\" name=\"marks\" min=\"1\" max=\"100\" step=\"1\" value=\"1\" data-thumbwidth=\"20\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t<p class=\"range-p\">Time Duration (min)</p>\r\n\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" [(ngModel)]=\"questionnaireData.duration\" name=\"duration\" min=\"5\" max=\"200\" step=\"5\" value=\"5\" data-thumbwidth=\"20\" required>\r\n\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" [(ngModel)]=\"questionnaireData.duration\" name=\"duration\" min=\"5\" max=\"200\" step=\"5\" value=\"5\" data-thumbwidth=\"20\" >\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button (click)=\"saveQuestionnaire()\" [disabled]=\"!questionnaireSummaryForm.form.valid\">Next</button>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = (function () {
    function HttpService(http, slimLoadingBarService) {
        this.http = http;
        this.slimLoadingBarService = slimLoadingBarService;
        this.currentRequestCounts = 0;
        this.serverURL = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].serverURL;
        this.httpError = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["ReplaySubject"](0);
    }
    HttpService.prototype.post = function (url, data, headers) {
        var _this = this;
        var httpError = this.httpError;
        var endPoint = this.serverURL + url;
        _this.incrementRequestCountandStartProcess(_this);
        return this.http
            .post(endPoint, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(handleSuccess)
            .catch(handleError);
        function handleSuccess(response) {
            _this.decrementRequestCountandCompleteProcess(_this);
            return response.json();
        }
        function handleError(error) {
            _this.decrementRequestCountandCompleteProcess(_this);
            httpError.next(error.json());
            return Promise.reject(error.json());
        }
    };
    HttpService.prototype.put = function (url, data, headers) {
        var _this = this;
        var httpError = this.httpError;
        var endPoint = this.serverURL + url;
        _this.incrementRequestCountandStartProcess(_this);
        return this.http
            .put(endPoint, JSON.stringify(data), { headers: headers })
            .toPromise()
            .then(handleSuccess)
            .catch(handleError);
        function handleSuccess(response) {
            _this.decrementRequestCountandCompleteProcess(_this);
            return response.json();
        }
        function handleError(error) {
            _this.decrementRequestCountandCompleteProcess(_this);
            httpError.next(error.json());
            return Promise.reject(error.json());
        }
    };
    HttpService.prototype.get = function (url, headers) {
        var _this = this;
        var httpError = this.httpError;
        var endPoint = this.serverURL + url;
        _this.incrementRequestCountandStartProcess(_this);
        return this.http
            .get(endPoint, { headers: headers })
            .toPromise()
            .then(handleSuccess)
            .catch(handleError);
        function handleSuccess(response) {
            _this.decrementRequestCountandCompleteProcess(_this);
            return response.json();
        }
        function handleError(error) {
            _this.decrementRequestCountandCompleteProcess(_this);
            httpError.next(error.json());
            return Promise.reject(error.json());
        }
    };
    HttpService.prototype.delete = function (url, headers) {
        var _this = this;
        var httpError = this.httpError;
        var endPoint = this.serverURL + url;
        _this.incrementRequestCountandStartProcess(_this);
        return this.http
            .delete(endPoint, { headers: headers })
            .toPromise()
            .then(handleSuccess)
            .catch(handleError);
        function handleSuccess(response) {
            _this.decrementRequestCountandCompleteProcess(_this);
            return response.json();
        }
        function handleError(error) {
            _this.decrementRequestCountandCompleteProcess(_this);
            httpError.next(error.json());
            return Promise.reject(error.json());
        }
    };
    HttpService.prototype.incrementRequestCountandStartProcess = function (_this) {
        _this.currentRequestCounts++;
        _this.slimLoadingBarService.start();
    };
    HttpService.prototype.decrementRequestCountandCompleteProcess = function (_this) {
        _this.currentRequestCounts--;
        if (_this.currentRequestCounts === 0) {
            _this.slimLoadingBarService.complete();
        }
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYoAAAQaCAYAAABdID/0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTEyMjYzOUMzRjgwMTFFN0IzMTZCMUMwOEVEQkI5MjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTEyMjYzOUQzRjgwMTFFN0IzMTZCMUMwOEVEQkI5MjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTIyNjM5QTNGODAxMUU3QjMxNkIxQzA4RURCQjkyMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTIyNjM5QjNGODAxMUU3QjMxNkIxQzA4RURCQjkyMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkczH/sAABCASURBVHja7N3Rb5V3GcDx95ycwAQGtSMgZaxzzLoMQzqyjmnDuDHG4tml2ixeLYQLMvwDdFfGBa+MbnMXwrxRm+zaVhPjzeqAMtCyLluAjo6V9nS2cthbOgIp57z+zoquw/d9LcmGK+fzSZ6b5iSU59fkm5eXvm/h27+fjpZoVZiuMD1hdoXZGmZjBMCdoh7mjTAvhvltmPnGFwtLCMUDYX4R5kk7BGgajTh8LcxMMedDX7hRlHMiAdB0NoR5M0yplPGBB8OcCNNiVwBNq3F74btpVxQ7wpwRCQCC/TeH4v4bVxJFuwEgeHRxEFaKBAA3uWtxFH4eZr2dALDYv0OxOcx+6wAgKxQ/sQoAskLRuDfxtFUAkBWK7dYAQF4ovmkNAOSF4glrACAvFNusAYC8UGyyBgDyQjFlDQDkheItawAgLxSvWQMAeaH4izUAkBeKU9YAQF4orkULrzwFgNRQNPzIKgDIC8VEmMPWAUBWKBoOhKlaCQBZobgaZmeYurUAkBaKhnduxAIAUkPRcDLMQ2FmrQeAYsbXz0QLDwt8xYoAhCLLlTC9YTrCDFgVQHMqJEmypA/29M003q19f7Tw/oqvhNkYLbxvm4/ttwKgaUNBvtNT8YrKh0nbaLXecWqm3nk+TtqFAxAKMg1fiFsGxmp7jlZq3WHFggEIBelOjseth0bm943PJltcYQBCQaaDg9XewYnaLrEAhIJMzw9Vy38aq/WIBbCclKzg9vnh4639s9curj0y+dFTUsQCWBaKVnB7Pbv7nr577y5M2gQgFGTau710uBBFL9kEIBSk2tneMv3YpuJxmwCEgkzlraX+yFUFIBRkefS+dVX3KgChINcjG4p/twVAKMjU0Vo8awuAUJCpbXWhErlPAQgFWR5uW3fVFgChAEAoABAKPgNvT8V32QIgFGSqzCVtkYcDAkJBlrPVeoctAEJBpuHp+g5bAISCVI1XpE5cTjbbBCAUpBoYu16O3J8AhII0x9/7YMPxqfpOmwCEglQvj1x/OklcTQBCQYrnBqtPXbicbLEJQCj4Ly8OVfe8NlHrjtybAJaRQpIktnAb/Oyv1e+9eqG2WyQAoeAT/jYet/56ZH7f+OxH/9wkEoBQsGBkMl7Tf65WPjpZ664l0TM2AghFkzvzfrxiai750uilesfwdL3z3Tj5sisIQCg+JT19M0v96Mow94XZFqbxnKT1YVZ/jvYpDMAdp7RMvs+tYX4Z5juODEAoFlsV5jdhvu+oAITiZl8N83qYtY4J4P/n8/oLd11hTosEgFCkadykHnI0AEKRpvEO6WORR4sACEWGF8K0OhYAoUjT+P2IvY4EQCiyPOc4AIQiS+PexA8cB4BQZOl0FABCkedbjgJAKPI84SgAhCLPw44CQCjybHIUAEKRZ8pRAAhFnrcdBYBQ5Bl0FABCkefPjgJAKPKcchQAQpHnapjfOQ4AocjzY8cBIBR5xsMcdiQAQpHnQJiqYwEQiiyNexXfcCwAQpHnTJjHHA2AUOQ5EeahMLOOCEAo8q4sGg8LfMUxAQhFlithesN0hBlwXAC3X2mZfJ+jYcphVoZpjxbeX9GIx/owqz/lP2u/HwuAjxWSJLGFG06/H6+YmkvaRi/VHxyeru84HyftwgEIhVBkemMiXvuHc7XysUrt6/UkesZGAKEg1cnxuPXQyPy+8dlkiysMQCjIdHCw2js4UdslFoBQkOmFoWr5j2O1HrEAmkXJCm7Ngcdb++NrF9cemaxHYgE0g6IV3Lpnd9/Td+/dhUmbAISCTHu3lw4XouglmwCEglQ721umuzYVT9gEIBRkKj9Q6o9cVQBCQZau9nX/3LzGvQpAKMjxyMbiKVsAhIJMHV8snrUFQCjI1LamUIncpwCEgizb2tZdsQVAKAAQCgAQis/AW5V4lS0AQkGmylzSFnk4ICAUZDl7qd5hC4BQkGn4H/VOWwCEglSvvxevn5xLNtsEIBSkGhi7Xo7cnwCEgjRD5z/YcGKq3mUTgFCQ6uU3r+9NXE0AQkGan7568amJy+5NAEJBiuePVctHJuvdkasJoEkUkiSxhSU6OFjtHZyo7RIJQCj4hJPjceuhkfl947PJFpEAhIL/GL4QtwyM1fYcrdS6w5oEAhCKZnd6Kl5R+TBpG63WO07N1DvPx0m7KwhAKJosFD19M7/6Hx8RBoBFSk34dxYCgFvgv8cCIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCYQUACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQmEFAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEJhBQAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAIBQAIBQACAUAQgGAUAAgFAAIBQBCAYBQACAUACAUAAgFAEIBgFAAIBQACAUAQgGAUAAgFAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAYBQAIBQACAUAAgFAEIBgFAAIBQACAUAQgGAUACAUAAgFAAIBQBCAYBQACAUAAgFAEIBgFAAgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQACAUAQgEAQgGAUAAgFAAIBQBCAYBQACAUAAgFAEIBAEIBgFAAIBQACAUAQgGAUAAgFAAIBQBCAQBCAYBQACAUAAgFAEIBgFAAIBQA3Nn+JcAAp+LE7uXNbPMAAAAASUVORK5CYII="

/***/ }),

/***/ 385:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 385;


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(403);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_signup_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__public_homepage_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_login_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaireSummary_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionnaire_questionnaireCopy_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionnaire_questionnarieDetail_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionnaire_questionnairePreview_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionnaire_questionnaireImport_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionManage_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questionnaire_questionnarieManage_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboards_organisor_component__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: "signup", component: __WEBPACK_IMPORTED_MODULE_2__public_signup_component__["a" /* SignupComponent */] },
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_3__public_homepage_component__["a" /* HomePageComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_4__public_login_component__["a" /* LoginComponent */] },
    { path: "organisor/home", component: __WEBPACK_IMPORTED_MODULE_12__dashboards_organisor_component__["a" /* OrganisorDashboardComponent */] },
    { path: "qnr/new", component: __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaireSummary_component__["a" /* QuestionnaireSummaryComponent */] },
    { path: "qnr/:qnrId/update", component: __WEBPACK_IMPORTED_MODULE_5__questionnaire_questionnaireSummary_component__["a" /* QuestionnaireSummaryComponent */] },
    { path: "qnr/manage", component: __WEBPACK_IMPORTED_MODULE_11__questionnaire_questionnarieManage_component__["a" /* QuestionnaireManageComponent */] },
    { path: "ques/manage", component: __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionManage_component__["a" /* QuestionManageComponent */] },
    { path: "qnr/:qnrId", component: __WEBPACK_IMPORTED_MODULE_7__questionnaire_questionnarieDetail_component__["a" /* QuestionnaireDetailComponent */] },
    { path: "qnr/:qnrId/question", component: __WEBPACK_IMPORTED_MODULE_7__questionnaire_questionnarieDetail_component__["a" /* QuestionnaireDetailComponent */] },
    { path: "qnr/:qnrId/preview", component: __WEBPACK_IMPORTED_MODULE_8__questionnaire_questionnairePreview_component__["a" /* QuestionnairePreviewComponent */] },
    { path: "qnr/:qnrId/import", component: __WEBPACK_IMPORTED_MODULE_9__questionnaire_questionnaireImport_component__["a" /* QuestionnaireImportComponent */] },
    { path: "qnr/:qnrId/copy/questions", component: __WEBPACK_IMPORTED_MODULE_6__questionnaire_questionnaireCopy_component__["a" /* QuestionnaireCopyComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_common_response_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(httpService, errorMessageService, slimLoadingBarService) {
        this.httpService = httpService;
        this.errorMessageService = errorMessageService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.errorMsgs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.httpError.subscribe(function (err) {
            return _this.showError(err);
        });
    };
    AppComponent.prototype.showError = function (err) {
        var context = this;
        // this.errorType='INTERNAL_ERROR';
        //  context.errorMsgs.push('Unexpected error occured. Please contact your administrator.');
        if (err && err.errType === 'INTERNAL_ERROR') {
            if (err.errorCodes && err.errorCodes.length > 0) {
                context.errorMsgs = [];
                err.errorCodes.forEach(function (errCode, index, arr) {
                    var errorMsg = context.errorMessageService.getMessage(errCode);
                    context.errorMsgs.push(errorMsg);
                });
            }
            if (err.errMsg) {
                context.errorMsgs = [];
                context.errorMsgs.push(err.errMsg);
            }
            this.errorModal.show();
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["a" /* ModalDirective */]) === "function" && _a || Object)
], AppComponent.prototype, "errorModal", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'root',
        template: __webpack_require__(500)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_common_response_service__["a" /* CommonResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_common_response_service__["a" /* CommonResponseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__public_public_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_common_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboards_dashboard_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionnaire_questionnaire_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__ = __webpack_require__(102);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__public_public_module__["a" /* PublicModule */],
            __WEBPACK_IMPORTED_MODULE_6__common_common_module__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_8__dashboards_dashboard_module__["a" /* DashboardModule */],
            __WEBPACK_IMPORTED_MODULE_9__questionnaire_questionnaire_module__["a" /* QuestionnaireModule */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__utils_http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_12_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_response_component__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var commonRoutes = [
    { path: "success/:code", component: __WEBPACK_IMPORTED_MODULE_2__common_response_component__["a" /* CommonResponseComponent */] },
    { path: "error/:code", component: __WEBPACK_IMPORTED_MODULE_2__common_response_component__["a" /* CommonResponseComponent */] }
];
var CommonRoutingModule = (function () {
    function CommonRoutingModule() {
    }
    return CommonRoutingModule;
}());
CommonRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(commonRoutes, { useHash: true })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], CommonRoutingModule);

//# sourceMappingURL=common-routing.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_routing_module__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_cookie_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_response_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_response_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
CommonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__common_routing_module__["a" /* CommonRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__common_response_component__["a" /* CommonResponseComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__common_response_service__["a" /* CommonResponseService */], __WEBPACK_IMPORTED_MODULE_5__common_shared_service__["a" /* sharedService */], __WEBPACK_IMPORTED_MODULE_6__common_cookie_service__["a" /* CookieService */]]
    })
], CommonModule);

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organisor_component__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__organisor_component__["a" /* OrganisorDashboardComponent */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            if (e.errors) {
                delete e.errors['validateEqual'];
            }
            //if (!Object.keys(e.errors).length) e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: false });
        }
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=equal-validator.directive.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_equal_validator_directive__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__homepage_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signup_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_service__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_http_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_shared_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_cookie_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_alert__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var PublicModule = (function () {
    function PublicModule() {
    }
    return PublicModule;
}());
PublicModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* PopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__homepage_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__directives_equal_validator_directive__["a" /* EqualValidator */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__signup_service__["a" /* SignupService */], __WEBPACK_IMPORTED_MODULE_11__login_service__["b" /* LoginService */], __WEBPACK_IMPORTED_MODULE_13__common_shared_service__["a" /* sharedService */], __WEBPACK_IMPORTED_MODULE_12__utils_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_14__common_cookie_service__["a" /* CookieService */]]
    })
], PublicModule);

//# sourceMappingURL=public.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__questionnaireSummary_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionnaireCopy_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questionnaire_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__questionnarieDetail_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__questionnairePreview_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionnaireImport_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__questionManage_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__questionnarieManage_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utils_http_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var QuestionnaireModule = (function () {
    function QuestionnaireModule() {
    }
    return QuestionnaireModule;
}());
QuestionnaireModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* PopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["c" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["d" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["e" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileUploadModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__questionnaireSummary_component__["a" /* QuestionnaireSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__questionnarieDetail_component__["a" /* QuestionnaireDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__questionnairePreview_component__["a" /* QuestionnairePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_13__questionnaireImport_component__["a" /* QuestionnaireImportComponent */],
            __WEBPACK_IMPORTED_MODULE_15__questionnarieManage_component__["a" /* QuestionnaireManageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__questionManage_component__["a" /* QuestionManageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__questionnaireCopy_component__["a" /* QuestionnaireCopyComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__questionnaire_service__["a" /* QuestionnaireService */], __WEBPACK_IMPORTED_MODULE_16__utils_http_service__["a" /* HttpService */]]
    })
], QuestionnaireModule);

//# sourceMappingURL=questionnaire.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    serverURL: "https://quiz-api-techvisio.herokuapp.com/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.readCookie = function (name) {
        var key, value, result;
        //get all cookie
        var oldCookie = document.cookie.split(';');
        for (var i = 0; i < oldCookie.length; i++) {
            key = oldCookie[i].substr(0, oldCookie[i].indexOf("="));
            value = oldCookie[i].substr(oldCookie[i].indexOf("=") + 1);
            key = key.replace(/^\s+|\s+$/g, "");
            if (key === name) {
                result = value;
            }
        }
        if (result == undefined) {
            return null;
        }
        else {
            result = JSON.parse(result);
            return result;
        }
    };
    CookieService.prototype.createCookie = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toTimeString;
        }
        else {
            expires = " ";
        }
        document.cookie = name + "=" + JSON.stringify(value) + expires + "; path=/";
    };
    return CookieService;
}());
CookieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CookieService);

//# sourceMappingURL=cookie.service.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonResponseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonResponseService = (function () {
    function CommonResponseService() {
        this.messageMap = new Map();
        this.messageMap.set("SIGNSUCC", "You are registered successfully. A verification mail has been send to your registered emailId"),
            this.messageMap.set("LOGINSUCC", "You are logged in successfully");
        this.messageMap.set("RESETPASSSUCC", "Your password has been reset successfully. New password has been sent to your emailId");
        this.messageMap.set("USER_NAME_MISSING", "Please enter user name.");
        this.messageMap.set("PASSWORD_MISSING", "Please enter password.");
        this.messageMap.set("NO_USER_FOUND", "No user found with provided detail. please enter valid user name and client code");
        this.messageMap.set("DUPLICATE_USER", "User already exists.");
        this.messageMap.set("CLIENT_CODE_MISSING", "Please enter client code.");
        this.messageMap.set("INVALID_CREDENTIAL", "You have entered wrong password.");
        this.messageMap.set("USER_INACTIVE", "User is not active, Contact your admin.");
        this.messageMap.set("INVALID_PASSWORD_FORMAT", "Password must contain 1 upper case, 1 numeric and 1 special character.");
        this.messageMap.set("TITLE_MISSING", "Please provide questionnaire title.");
        this.messageMap.set("NUM_OF_QUES_MISSING", "Please provide number of questions you want to add in questionnaire.");
        this.messageMap.set("DURATION_MISSING", "Please provide questionnaire time duration.");
        this.messageMap.set("MARKS_MISSING", "Please provide questionnaire total marks.");
        this.messageMap.set("QUESTION_TITLE_MISSING", "Please provide question title.");
        this.messageMap.set("QUESTION_TYPE_MISSING", "Please provide question type.");
        this.messageMap.set("INVALID_QUESTION_TYPE", "Please provide valid question type.");
        this.messageMap.set("NO_QUESTIONNAIRE_FOUND", "No questionnaire found for this id.");
        this.messageMap.set("NO_USER_EMAIL_ID_FOUND", "No user found with provided emailId");
        this.messageMap.set("NO_CLIENT_EMAIL_ID_FOUND", "No client found with provided emailId");
        this.messageMap.set("NO_CLIENT_FOUND", "No client found with provided detail");
        this.messageMap.set("DUPLICATE_CLIENT_EMAIL", "A client already been registered with this email id. please enter another email id");
    }
    CommonResponseService.prototype.getMessage = function (code) {
        return this.messageMap.get(code);
    };
    return CommonResponseService;
}());
CommonResponseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CommonResponseService);

//# sourceMappingURL=common-response.service.js.map

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".common-success{\r\nbackground-color: white;  \r\nbackground-size:100%;\r\nmin-height: 800px;\r\nwidth: 100%;\r\nheight: 100%;\r\ntext-align: center;\r\n}\r\n\r\n.common-success img {\r\n  padding-top: 20px;\r\nheight: 25%;\r\nwidth: 25%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "/*@font-face {\r\n\tfont-family: 'cofeeTea';\r\n\tsrc: url('font/coffee-tea.rtf'),\r\n\turl('font/coffee-tea.ttf');\r\n}*/\r\nbody{\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n\tfont-family: \"Verdana\", Geneva, sans-serif;\r\n\tfont-size:medium;\r\n}\r\nul{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\nfigure{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\np{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\nh1{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\n#main{\r\n\twidth: 100%;\r\n}\r\nheader{\r\n\twidth: 100%;\r\n\tbackground-color: #0b152d;\r\n\tpadding: 8px 0px;\r\n}\r\nheader figure{\r\n\tpadding: 0px 0px 0px 35px;\r\n}\r\n#logo{\r\n\twidth: 70%;\r\n}\r\n#logo img{\r\n\twidth: 85px;\r\n}\r\nheader nav{\r\n\twidth: 29%;\r\n}\r\nheader figure,header nav{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#user-icon{\r\n    width: 40px;\r\n    height: 40px;\r\n    border: 2px solid white;\r\n    border-radius: 30px;\r\n    text-align: center;\r\n    margin-right: 1%;\r\n    cursor: pointer;\r\n}\r\n#user-icon figure img{\r\n\tposition: relative;\r\n    left: -26px;\r\n    top: 3px;\r\n    width: 18px;\r\n}\r\nnav #user-icon,nav #user-p{\r\n\tdisplay: inline-block;\r\n}\r\n#user-p{\r\n\tvertical-align: top;\r\n    width: 20%;\r\n    color: white;\r\n    font-size: 16px;\r\n    padding-top: 7px;\r\n    cursor: pointer;\r\n}\r\n.btn{\r\n\tvertical-align: top !important;\r\n\tmargin-top: 3px;\r\n\tmargin-left: 8%;\r\n\tpadding: 6px 20px !important;\r\n}\r\n#questionnarie-section{\r\n\twidth: 100%;\r\n    padding-bottom: 45px;\r\n    background: url(" + __webpack_require__(767) + ");\r\n    background-repeat: no-repeat;\r\n    /*background-position: 85% 0%;*/\r\n\tbackground-position: center;\r\n    background-size: cover;\r\n}\r\n#questionnarie-icons{\r\n\tbackground: url(" + __webpack_require__(766) + ");\r\n\t    background-repeat: no-repeat;\r\n    height: 560px;\r\n   /* background-position: 58px -2px;\r\n    background-size: 1115px 565px;*/\r\n\tbackground-position: 50%;\r\n\tbackground-size: 1115px 565px;\r\n    position: relative;\r\n    top: -9px;\r\n}\r\n.rectangle{\r\n\t    width: 130px;\r\n    height: 189px;\r\n\tbackground: #0a1329;\r\n\tcursor: pointer;\r\n}\r\n.rectangle figure : hover{\r\n\tbackground: black;\r\n}\r\n#rectangle-1{\r\n\tposition: relative;\r\n    top: 356px;\r\n    left: 87px;\r\n}\r\n.rectangle-1{\r\n\twidth: 124px;\r\n    height: 184px;\r\n\tbackground: #0a1329;\r\n\tcursor: pointer;\t\r\n}\r\n#rectangle-2{\r\n\tposition: relative;\r\n    top: 75px;\r\n    left: 336px;\r\n}\r\n.rectangle-2{\r\n\t    width: 118px;\r\n    height: 176px;\r\n    background: #0a1329;\r\n    cursor: pointer;\r\n}\r\n#rectangle-3{\r\n\t    position: relative;\r\n    top: -243px;\r\n    left: 575px;\r\n}\r\n#rectangle-4{\r\n\t    position: relative;\r\n    top: -285px;\r\n    left: 804px;\r\n}\r\n#rectangle-5{\r\n\tposition: relative;\r\n    top: -377px;\r\n    left: 1037px;\r\n}\r\n.rectangle figure,.rectangle-1 figure,.rectangle-2 figure{\r\n\t    text-align: center;\r\n    padding-top: 18px;\r\n}\r\n.rectangle p,.rectangle-1 p,.rectangle-2 p{\r\n\t text-align: center;\r\n    padding-top: 7px;\r\n    color: white;\r\n    font-size: 140%;\r\n    font-family: cofeeTea;\r\n    line-height: 25px;\r\n\r\n}\r\n#questionnarie-desc{\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n    top: -50px;\r\n}\r\n#questionnarie-desc p{\r\n\t    padding-top: 12px;\r\n    color: #1d336a;\r\n    font-size: 182%;\r\n    font-family: cofeeTea;\r\n    line-height: 25px;\r\n    font-weight: bold;\r\n}\r\n#questionnarie-section figure{\r\n\ttext-align: center;\r\n}\r\n@media screen and (max-width:1112px){\r\n\t#main{\r\n\r\n\tmin-width: 1112px;\t\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "  .form-container{\r\n\tposition: relative;\r\n  background: #ffffff;\r\n  max-width: 30%;\r\n  min-width: 276px;\r\n  width: 100%;\r\n  border-top: 5px solid #38a2e8;\r\n  border-left: 15px solid #38a2e8;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n  margin: 0 auto;\r\n  margin-top: 80px;\r\n}\r\n.form-container .form{\r\n  padding: 20px 10px 20px 20px;\r\n  display: block;\r\n}\r\n.form h2{\r\n  margin: 0 0 17px;\r\n  color: #38a2e8;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n}\r\n.form input{\r\n  outline: none;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: #ecf0f1;\r\n  border: 1px solid #ecf0f1;\r\n  border-radius: 3px;\r\n  margin: 0 0 10px;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n  transition: 0.3s ease;\r\n}\r\n.form input:focus {\r\n  border: 1px solid #38a2e8;\r\n  border-left: 5px solid #38a2e8;\r\n  color: #333333;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: #777777;\r\n}\r\n\r\n.radio-button{\r\n  margin: 0 0 10px 8px;\r\n}\r\n.radio-button input[type=\"radio\"] {\r\n  width: 15px;\r\n  display: inline;\r\n  position: relative;\r\n    top: 2px;\r\n    left: 3px;\r\n}\r\n.radio-button label {\r\n  display: inline;\r\n  margin-left: 5px;\r\n  margin-right: 15px;\r\n}\r\n.form button {\r\n  cursor: pointer;\r\n  background: #38a2e8;\r\n  width: 90%;\r\n  border: 0;\r\n  padding: 10px 15px;\r\n  color: #ffffff;\r\n  transition: 0.3s ease;\r\n}\r\n.form button:hover {\r\n  background: #178ab4;\r\n}\r\n\r\n.forgot-link {\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  padding: 15px 40px;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  color: #666666;\r\n  font-size: 12px;\r\n  text-align: center;\r\n}\r\n.forgot-link a {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.ng-dirty.ng-valid:not(form){\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.error-icon img{\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n.error-icon {\r\n float: left;\r\n}\r\n\r\n.ng-dirty.ng-invalid:not(form){\r\n  border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n.row-group{\r\n  width: 100%;\r\n  }\r\n\r\n  .input-control{\r\n    width: 90%;\r\n    float: left;\r\n  }\r\n\r\n  .icon-control{\r\n    width: 5%;\r\n    float: left;\r\n     padding-left: 10px;\r\n     padding-top:10px;\r\n  }\r\n\r\n  .icon-control img{\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .form button:disabled{\r\n    cursor: not-allowed;\r\n  }\r\n\r\n.float-right{\r\n  float: right;\r\n}\r\n .modal-body .form button{\r\n    width: auto;\r\n    margin-right: 30px; \r\n  }\r\n.forget{\r\n        background: #e7e7e7;\r\n    width: 100%;\r\n    padding: 15px 40px;\r\n    box-sizing: border-box;\r\n    border-radius: 6px;\r\n    color: #666666;\r\n    font-size: 12px;\r\n    text-align: center;\r\n}\r\n.forget:hover{\r\n  background:#dcdcdc;\r\n  }\r\n.modal-content {\r\n    top: 24px;\r\n  }\r\n.modal-header{\r\n        padding: 10px 15px;\r\n    background-color: #38a2e8;\r\n  }\r\n.modal-header img{\r\n     width:10%;\r\n   }\r\n#locker-img{\r\n     text-align: center;\r\n   }\r\n#locker-img img{\r\n     width: 24%;\r\n   }\r\n#forget-h{\r\n     text-align: center;\r\n   }\r\n#forget-h h3{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    color: #414343;\r\n    font-weight: bold;\r\n    font-size: 160%;\r\n   }\r\n#forget-h p{\r\n     color: #414343;\r\n     margin-bottom: 15px;\r\n     font-size: 108%;\r\n   }\r\n#forget-input{\r\n        margin: 0 10px 10px;\r\n         \r\n   }\r\n.modal button {\r\n    margin-top: 4px;\r\n}\r\n#forget-button{\r\n      margin-left: 26%;\r\n      margin-right: 0px;\r\n       padding: 10px 85px;\r\n          margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".form-container{\r\n\tposition: relative;\r\n  background: #ffffff;\r\n  max-width: 30%;\r\n  min-width: 276px;\r\n  width: 100%;\r\n  border-top: 5px solid #38a2e8;\r\n  border-left: 15px solid #38a2e8;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n  margin: 0 auto;\r\n  margin-top: 45px;\r\n}\r\n.form-container .form{\r\n  padding: 20px 10px 20px 20px;\r\n  display: block;\r\n}\r\n.form button:disabled{\r\n    cursor: not-allowed;\r\n  }\r\n.form h2{\r\n  margin: 0 0 17px;\r\n  color: #38a2e8;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n}\r\n.form input{\r\n  outline: none;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: #ecf0f1;\r\n  border: 1px solid #ecf0f1;\r\n  border-radius: 3px;\r\n  margin: 0 0 10px;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n  transition: 0.3s ease;\r\n}\r\n.form input:focus {\r\n  border: 1px solid #38a2e8;\r\n  border-left: 5px solid #38a2e8;\r\n  color: #333333;\r\n}\r\n::-webkit-input-placeholder {\r\n  color: #777777;\r\n}\r\n\r\n.radio-button{\r\n  margin: 0 0 10px 8px;\r\n}\r\n.radio-button input[type=\"radio\"] {\r\n  width: 15px;\r\n  display: inline;\r\n  position: relative;\r\n    top: 2px;\r\n    left: 3px;\r\n}\r\n.radio-button label {\r\n  display: inline;\r\n  margin-left: 5px;\r\n  margin-right: 15px;\r\n}\r\n.form button {\r\n  cursor: pointer;\r\n  background: #38a2e8;\r\n  width: 90%;\r\n  border: 0;\r\n  padding: 10px 15px;\r\n  color: #ffffff;\r\n  transition: 0.3s ease;\r\n}\r\n.form button:hover {\r\n  background: #178ab4;\r\n}\r\n\r\n.forgot-link {\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  padding: 15px 40px;\r\n  box-sizing: border-box;\r\n  border-radius: 6px;\r\n  color: #666666;\r\n  font-size: 12px;\r\n  text-align: center;\r\n}\r\n.forgot-link a {\r\n  color: #333333;\r\n  text-decoration: none;\r\n}\r\n\r\n.ng-dirty.ng-valid:not(form){\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n.error-icon img{\r\n  height: 15px;\r\n  width: 15px;\r\n}\r\n.error-icon {\r\n float: left;\r\n}\r\n\r\n.ng-dirty.ng-invalid:not(form){\r\n  border-left: 5px solid #a94442; /* red */\r\n  }\r\n\r\n.row-group{\r\n  width: 100%;\r\n  }\r\n\r\n  .input-control{\r\n    width: 90%;\r\n    float: left;\r\n  }\r\n\r\n  .icon-control{\r\n    width: 10%;\r\n    float: left;\r\n     padding-left: 10px;\r\n     padding-top:10px;\r\n  }\r\n\r\n  .icon-control img{\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#ques-body{\r\n\twidth: 100%;\r\n\tbackground-color: #f1f1f1;\r\n}\r\n#ques-body #ques-filter, #ques-body #ques-area{\r\n\tdisplay: inline-block;\r\n}\r\n#ques-filter{\r\n\twidth: 20%;\r\n    background-color: white;\r\n    margin: 0px 10px;\r\n    height: 560px;\r\n    overflow-y: auto;\r\n}\r\n#filters-p{\r\n    padding: 10px 10%;\r\n    border-bottom: 1px solid #c8c8c8;\r\n    color: #48a5ea;\r\n    font-size: 115%;\r\n}\r\n#filters-p p , #filters-p button{\r\n  display: inline-block;\r\n}\r\n.checkbox-area{\r\n\tpadding: 13px 0px 0px 10%;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n.heading-p{\r\n\tcolor: #48a5ea;\r\n\tfont-size: 110%;\r\n\twidth: 85%;\r\n}\r\n.checkbox-area figure{\r\n\twidth: 10%;\r\n\tvertical-align: top;\r\n    cursor: pointer;\r\n}\r\n.title-input{\r\n    width: 100%;\r\n    margin: 5px 0px 20px 0px;\r\n}\r\n#filter-btn{\r\n      padding: 2px 4px;\r\n      margin-left: 12px;\r\n}\r\n.checkbox-area figure span{\r\n  color: #48a5ea;\r\n  font-family: 'Glyphicons Halflings';\r\n}\r\n\r\n.checkbox-area .heading-p, .checkbox-area figure{\r\n\tdisplay: inline-block;\r\n}\r\n#type-ahead{\r\n    position: relative;\r\n    top: -3px;\r\n    left: -12px;\r\n}\r\n\r\n.boxes {\r\n  margin: auto;\r\n  padding: 10px 0px;\r\n}\r\n\r\n/*Checkboxes styles*/\r\ninput[type=\"checkbox\"] {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 15px;\r\n  font: 14px/20px 'Open Sans', Arial, sans-serif;\r\n  color: #223460;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label:last-child {\r\n\tmargin-bottom: 0; \r\n}\r\n\r\ninput[type=\"checkbox\"] + label:before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1.5px solid #48a5ea;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: .6;\r\n  transition: all .12s, border-color .08s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + label:before {\r\n  width: 10px;\r\n  top: -5px;\r\n  left: 5px;\r\n  border-radius: 0;\r\n  opacity: 1;\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.label-p{\r\n\t    margin-left: 22px;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n    position: relative;\r\n    top: -5px;\r\n    color: #223460;\r\n}\r\n\r\n#ques-area{\r\n\twidth: 77%;\r\n    background-color: white;\r\n    margin-right:  10px;\r\n    vertical-align: top;\r\n    height: 560px;\r\n}\r\n.sub-nav{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #48a5ea;\r\n    padding: 6px 0px;\r\n    border-top: 3px solid #f1f1f1;\r\n}\r\n.sub-nav a{\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: white;\r\n  font-size: 16px;\r\n      padding: 5px 15px;\r\n      border-radius: 0px;\r\n      position: relative;\r\n    top: 7px;\r\n}\r\n.white-line{\r\n      height: 2px;\r\n    background-color: white;\r\n    margin: 0;\r\n    position: relative;\r\n    top: 4px;\r\n}\r\n.chosen{\r\n    font-weight: bold;\r\n    border-bottom: 3px solid #223460;\r\n    z-index: 1;\r\n    color: #223460 !important;\r\n    \r\n}\r\n#all-quizzes{\r\n\twidth: 100%;\r\n\tpadding: 9px 20px;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n#all-quizzes button{\r\n  float: right;\r\n  margin-right: 6%;\r\n}\r\n.glyphicon-pencil{\r\n  font-size: 12px;\r\n}\r\n#all-quizzes figure, #all-quizzes p{\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n#all-quizzes figure img{\r\n\twidth: 85%;\r\n}\r\n#all-quizzes p{\r\n\tfont-size: 120%;\r\n  position: relative;\r\n  top: 5px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\nth {\r\n    text-align: left;\r\n    padding: 15px 21px;\r\n    background-color: #f1f1f1;\r\n    color: #48a5ea;\r\n}\r\ntd {\r\n    text-align: left;\r\n    padding: 14px 21px;\r\n    color: #223460;\r\n    border-bottom: 1px solid #c8c8c8;\r\n}\r\n\r\n.preview{\r\n\tmargin-left: 23px;\r\n\tcursor: pointer;\r\n}\r\n.type{\r\n\tmargin-left: 11px;\r\n}\r\n.modal-content {\r\n    top: 70px;\r\n  }\r\n.modal-body {\r\n    position: relative;\r\n    padding: 5px 0px 32px 0px;\r\n}\r\n.modal-header{\r\n    padding: 12px 15px;\r\n    background-color: #38a2e8;\r\n  }\r\n  .modal button {\r\n     margin-top: 0px;\r\n}\r\n.modal-title{\r\n  color: #fff;\r\n}\r\n\r\n  /* questionnaire details css*/\r\n\r\n#ques-title{\r\n\twidth: 100%;\r\n    background-color: #223460;\r\n    margin-top: 4px;\r\n    text-align: center; \r\n    padding: 5px;\r\n    border-bottom: 3px solid #48a5ea;\r\nfont-size: 20px;\r\ncolor: #f1f1f1;\r\n    \r\n}\r\n\r\n\r\n.group { \r\n\tposition: relative; \r\n\tmargin-bottom: 5px; \r\n}\r\n\r\n.group input {\r\n\tfont-size: 17px;\r\n\tpadding: 10px 10px 10px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 76%;\r\n    margin-left: 30px;\r\n    margin-top: 8px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.group input,.group span,.group .options{\r\n\tdisplay: inline-block;\r\n}\r\n.group-1 input,.group-1 span{\r\n\tdisplay: inline-block;\r\n\t    float: left;\r\n    margin-top: 30px;\r\n}\r\n.group-1{\r\n\tposition: relative; \r\n\tmargin-bottom: 0px;\r\n}\r\n.group-1 input{\r\n\tfont-size: 14px;\r\n\tpadding: 10px 10px 5px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 76%;\r\n    margin-left: 30px;\r\n    margin-top: 20px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.options{\r\n\t    position: relative;\r\n    top: -10px;\r\n}\r\n\r\ndiv.options > label {\r\n\tdisplay: block;\r\n\tmargin: 0 0 0 5px;\r\n\tpadding: 0 0 20px 0;  \r\n\theight: 20px;\r\n\twidth: 33px;\r\n}\r\n\r\n.options checkbox:disabled{\r\n    cursor: not-allowed;\r\n  }\r\n/*styles for radio and check box*/\r\n@-webkit-keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.group-1 .option-input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  -o-appearance: none;\r\n  appearance: none;\r\n  position: relative;\r\n  top: 13.33333px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 33px;\r\n  width: 33px;\r\n  transition: all 0.15s ease-out 0s;\r\n  background: #cbd1d8;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  outline: none;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input:hover {\r\n  background: #9faab7;\r\n}\r\n.group-1 .option-input:checked {\r\n  background: #5cb85c;\r\n}\r\n.group-1 .option-input:checked::before {\r\n  height: 33px;\r\n  width: 33px;\r\n  position: absolute;\r\n  content: '\\2714';\r\n  display: inline-block;\r\n  font-size: 26.66667px;\r\n  text-align: center;\r\n  line-height: 10px;\r\n  padding-right: 14px;\r\n}\r\n.group-1 .option-input:checked::after {\r\n  -webkit-animation: click-wave 0.65s;\r\n  animation: click-wave 0.65s;\r\n  background: #5cb85c;\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input.radio {\r\n  border-radius: 50%;\r\n  border: 2px solid #2aade3;\r\n}\r\n.group-1 .option-input.radio::after {\r\n  border-radius: 50%;\r\n}\r\n\r\n.importedQues{\r\n\twidth: 10px;\r\n    height:10px;\r\n    border-radius: 50%;\r\n    margin-right: 3%;\r\n    background-color: green;\r\n    display: inline-block;\r\n    border: 2px solid #71e2ef;\r\n    cursor: pointer;\r\n    line-height: 0.8;\r\n    font-size: 20px;\r\n    text-align: center;\r\n\t\r\n}\r\n\r\n.boxes .box-margin{\r\n  margin-top: -9px;\r\n}\r\n\r\n.pagination-height{\r\n  margin-top: 13%;\r\n}\r\n\r\n.medium-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: green;\r\n}\r\n.hard-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: red;\r\n}\r\n.easy-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: orange;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#ques-body{\r\n\twidth: 100%;\r\n\tbackground-color: #f1f1f1;\r\n}\r\n#ques-body #ques-filter, #ques-body #ques-area{\r\n\tdisplay: inline-block;\r\n}\r\n#ques-filter{\r\n\twidth: 20%;\r\n    background-color: white;\r\n    margin: 0px 10px;\r\n    height: 560px;\r\n    overflow-y: auto;\r\n}\r\n#filters-p{\r\n    padding: 10px 10%;\r\n    border-bottom: 1px solid #c8c8c8;\r\n    color: #223460;\r\n    font-size: 115%;\r\n}\r\n.checkbox-area{\r\n\tpadding: 15px 0px 0px 10%;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n.heading-p{\r\n\tcolor: #48a5ea;\r\n\tfont-size: 110%;\r\n\twidth: 85%;\r\n}\r\n.checkbox-area figure{\r\n\twidth: 10%;\r\n\tvertical-align: top;\r\n    cursor: pointer;\r\n}\r\n\r\n.checkbox-area figure span{\r\ncolor: #48a5ea;\r\nfont-family: 'Glyphicons Halflings';\r\n}\r\n\r\n.checkbox-area .heading-p, .checkbox-area figure{\r\n\tdisplay: inline-block;\r\n}\r\n#type-ahead{\r\n        position: relative;\r\n    top: -9px;\r\n    left: -12px;\r\n}\r\n\r\n.boxes {\r\n  margin: auto;\r\n  padding: 10px 0px;\r\n}\r\n\r\n/*Checkboxes styles*/\r\ninput[type=\"checkbox\"] {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 15px;\r\n  font: 14px/20px 'Open Sans', Arial, sans-serif;\r\n  color: #223460;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label:last-child {\r\n\tmargin-bottom: 0; \r\n}\r\n\r\ninput[type=\"checkbox\"] + label:before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1.5px solid #48a5ea;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: .6;\r\n  transition: all .12s, border-color .08s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + label:before {\r\n  width: 10px;\r\n  top: -5px;\r\n  left: 5px;\r\n  border-radius: 0;\r\n  opacity: 1;\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.label-p{\r\n\t    margin-left: 22px;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n    position: relative;\r\n    top: -5px;\r\n    color: #223460;\r\n}\r\n\r\n#ques-area{\r\n\twidth: 77%;\r\n    background-color: white;\r\n    margin-right:  10px;\r\n    vertical-align: top;\r\n    height: 560px;\r\n}\r\n#all-quizzes{\r\n\twidth: 100%;\r\n\tpadding: 19px;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n#all-quizzes figure, #all-quizzes p{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#all-quizzes figure img{\r\n\twidth: 85%;\r\n}\r\n#all-quizzes p{\r\n\tfont-size: 120%;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\nth {\r\n    text-align: left;\r\n    padding: 8px 21px;\r\n    background-color: #f1f1f1;\r\n    color: #48a5ea;\r\n}\r\ntd {\r\n    text-align: left;\r\n    padding: 14px 21px;\r\n    color: #223460;\r\n    border-bottom: 1px solid #c8c8c8;\r\n}\r\n\r\n.preview{\r\n\tmargin-left: 23px;\r\n\tcursor: pointer;\r\n}\r\n.type{\r\n\tmargin-left: 11px;\r\n}\r\n#import-button{\r\n\tmargin-top: 20px;\r\n    \r\n    text-align: center;\r\n    float: right\r\n}\r\n\r\n.modal-content {\r\n    top: 70px;\r\n  }\r\n.modal-body {\r\n    position: relative;\r\n    padding: 5px 0px 32px 0px;\r\n}\r\n.modal-header{\r\n    padding: 12px 15px;\r\n    background-color: #38a2e8;\r\n  }\r\n  .modal button {\r\n     margin-top: 0px;\r\n}\r\n.modal-title{\r\n  color: #fff;\r\n}\r\n\r\n  /* questionnaire details css*/\r\n\r\n#ques-title{\r\n\twidth: 100%;\r\n    background-color: #223460;\r\n    margin-top: 4px;\r\n    text-align: center; \r\n    padding: 5px;\r\n    border-bottom: 3px solid #48a5ea;\r\nfont-size: 20px;\r\ncolor: #f1f1f1;\r\n    \r\n}\r\n\r\n\r\n.group { \r\n\tposition: relative; \r\n\tmargin-bottom: 5px; \r\n}\r\n\r\n.group input {\r\n\tfont-size: 17px;\r\n\tpadding: 10px 10px 10px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 76%;\r\n    margin-left: 30px;\r\n    margin-top: 8px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.group input,.group span,.group .options{\r\n\tdisplay: inline-block;\r\n}\r\n.group-1 input,.group-1 span{\r\n\tdisplay: inline-block;\r\n\t    float: left;\r\n    margin-top: 30px;\r\n}\r\n.group-1{\r\n\tposition: relative; \r\n\tmargin-bottom: 0px;\r\n}\r\n.group-1 input{\r\n\tfont-size: 14px;\r\n\tpadding: 10px 10px 5px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 76%;\r\n    margin-left: 30px;\r\n    margin-top: 20px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.options{\r\n\t    position: relative;\r\n    top: -10px;\r\n}\r\n\r\ndiv.options > label {\r\n\tdisplay: block;\r\n\tmargin: 0 0 0 5px;\r\n\tpadding: 0 0 20px 0;  \r\n\theight: 20px;\r\n\twidth: 33px;\r\n}\r\n\r\n.options checkbox:disabled{\r\n    cursor: not-allowed;\r\n  }\r\n/*styles for radio and check box*/\r\n*{font-family: 'Roboto', sans-serif;}\r\n\r\n@-webkit-keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.group-1 .option-input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  -o-appearance: none;\r\n  appearance: none;\r\n  position: relative;\r\n  top: 13.33333px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 33px;\r\n  width: 33px;\r\n  transition: all 0.15s ease-out 0s;\r\n  background: #cbd1d8;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  outline: none;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input:hover {\r\n  background: #9faab7;\r\n}\r\n.group-1 .option-input:checked {\r\n  background: #5cb85c;\r\n}\r\n.group-1 .option-input:checked::before {\r\n  height: 33px;\r\n  width: 33px;\r\n  position: absolute;\r\n  content: '\\2714';\r\n  display: inline-block;\r\n  font-size: 26.66667px;\r\n  text-align: center;\r\n  line-height: 10px;\r\n  padding-right: 14px;\r\n}\r\n.group-1 .option-input:checked::after {\r\n  -webkit-animation: click-wave 0.65s;\r\n  animation: click-wave 0.65s;\r\n  background: #5cb85c;\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input.radio {\r\n  border-radius: 50%;\r\n  border: 2px solid #2aade3;\r\n}\r\n.group-1 .option-input.radio::after {\r\n  border-radius: 50%;\r\n}\r\n\r\n.importedQues{\r\n\twidth: 10px;\r\n    height:10px;\r\n    border-radius: 50%;\r\n    margin-right: 3%;\r\n    background-color: green;\r\n    display: inline-block;\r\n    border: 2px solid #71e2ef;\r\n    cursor: pointer;\r\n    line-height: 0.8;\r\n    font-size: 20px;\r\n    text-align: center;\r\n\t\r\n}\r\n\r\n.boxes .box-margin{\r\n  margin-top: -9px;\r\n}\r\n\r\n.pagination-height{\r\n  margin-top: 13%;\r\n}\r\n\r\n.medium-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: green;\r\n}\r\n.hard-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: red;\r\n}\r\n.easy-difficulty{\r\n  border-radius: 20px;\r\n    width: 80%; height: 8px;\r\n        border-color: white;\r\n    background-color: orange;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "body{\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n\tfont-family: \"Verdana\", Geneva, sans-serif;\r\n\tfont-size:medium;\r\n}\r\nul{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\nfigure{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\np{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\nh1{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\n#main{\r\n\twidth: 100%;\r\n}\r\nheader{\r\n\twidth: 100%;\r\n\tbackground-color: #0b152d;\r\n\tpadding: 8px 0px;\r\n}\r\nheader figure{\r\n\tpadding: 0px 0px 0px 35px;\r\n}\r\n#logo{\r\n\twidth: 70%;\r\n}\r\n#logo img{\r\n\twidth: 85px;\r\n}\r\nheader nav{\r\n\twidth: 29%;\r\n}\r\n#ques-dashboard{\r\n\twidth: 100%;\r\n\tpadding: 5px 5px;\r\n}\r\n#ques-dashboard #dasboard-menu,#ques-dashboard #question-area{\r\n\tdisplay: inline-block;\r\n}\r\n#dasboard-menu{\r\n/*\tbackground-color: #48a5ea;*/\r\n\twidth: 25%;\r\n\tmin-height: 650px;\r\n\tborder-radius: 3px;\r\n\tbackground: url(" + __webpack_require__(384) + ");\r\n  background-repeat: no-repeat;\r\n}\r\n#question-area{\r\n\twidth: 74%;\r\n\tmin-height: 650px;\r\n\tbackground-color: #ffffff;\r\n\tborder-radius: 3px;\r\n\tvertical-align: top;\r\n\tbox-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n}\r\n#dasboard-menu figure{\r\n\twidth: 74%;\r\n    text-align: center;\r\n    margin: 0px 0px 0px 75px;\r\n}\r\n#dasboard-menu figure p{\r\n\t    color: white;\r\n    font-size: 100%;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: 39px;\r\n}\r\n#dasboard-menu figure img{\r\n\twidth: 56%;\r\n}\r\n#questions{\r\n\twidth: 81%;\r\n    background-color: #223460;\r\n    height: 40px;\r\n    margin: 75px 0px 0px 60px;\r\n}\r\n#questions p{\r\n\tcolor: white;\r\n    text-align: center;\r\n    font-size: 142%;\r\n    font-weight: 600;\r\n    padding-top: 2px;\r\n}\r\n#hr-questions{\r\n\twidth: 81%;\r\n    background-color: #223460;\r\n    height: 22px;\r\n    border: none;\r\n    margin-left: 60px;\r\n}\r\n#questions-area{\r\n\ttext-align: center;\r\n    width: 76%;\r\n    margin-left: 24%;\r\n    margin-top: 15px;\r\n}\r\n#questions-row{\r\n\tmargin-top: 15px;\r\n    margin-left: 77px;\r\n    text-align: center;\r\n}\r\n.circle{\r\n\twidth: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    margin-right: 3%;\r\n    background-color: #57606e;\r\n    display: inline-block;\r\n    border: 2px solid #71e2ef;\r\n    cursor: pointer;\r\n    line-height: 0.8;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\n.active{\r\n\twidth: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    margin-right: 3%;\r\n    background-color: #223460;\r\n    display: inline-block;\r\n    border: 2px solid #71e2ef;\r\n    cursor: pointer;\r\n    line-height: 0.8;\r\n    font-size: 20px;\r\n    text-align: center;\r\n\t\r\n}\r\n\r\n.markforReview{\r\n\twidth: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background-color: #FFA500;\r\n    display: inline-block;\r\n        border: 2px solid #71e2ef;\r\n        cursor: pointer;\r\n\t\r\n}\r\n\r\n.quesSelected{\r\n\twidth: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background-color: \t#00b300;\r\n    display: inline-block;\r\n        border: 2px solid #71e2ef;\r\n        cursor: pointer;\r\n\t\r\n}\r\n\r\n.circle p{\r\n\tcolor: white;\r\n\tfont-size: 110%;\r\n\tposition: relative;\r\n    top: 10px;\r\n}\r\n#quiz-title{\r\n\twidth: 100%;\r\n\tmargin-bottom: 8px;\r\n}\r\n#quiz-title p{\r\n\twidth: 93%;\r\n\tcolor: #005692;\r\n    font-size: 150%;\r\n    text-align: center;\r\n    margin: 8px 0px;\r\n}\r\n#quiz-title p,#quiz-title img{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#quiz-title img{\r\n\tfloat: right;\r\n\twidth: 5.5%;\r\n}\r\n#question-bar{\r\n\t    width: 100%;\r\n    background-color: #c2dee0;\r\n    padding: 10px 35px;\r\n    color: #005792;\r\n    font-size: 110%;\r\n}\r\n#current-ques{\r\n\twidth: 100%;\r\n\tbackground-color: #f5f5f5;\r\n\tmin-height: 495px;\r\n}\r\n#current-ques #question-image,#current-ques #question-part #question-part-simple{ \r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#question-image{\r\n\twidth: 54%;\r\n\t    margin-left: 5%;\r\n    margin-top: 15px;\r\n}\r\n#select-following{\r\n\tcolor: #005792;\r\n\tfont-size: 105%;\r\n\tmargin: 10px 45px 0px;\r\n}\r\n#question-image img{\r\n\twidth: 90%;\r\n    height: 250px;\r\n}\r\n\r\n#question-part-simple{\r\n\t    margin: 20px 0px 20px 44px;\r\n    width: 90%;\r\n    word-wrap: break-word;\r\n}\r\n\r\n#question-part-simple p{\r\n\tfont-size: 120%;\r\n\tcolor: #1b3b62;\r\n}\r\n\r\n#question-part{\r\n\tmargin: 75px 0px;\r\n    width: 40%;\r\n    word-wrap: break-word;\r\n    \r\n}\r\n#question-part p{\r\n\tfont-size: 120%;\r\n\tcolor: #1b3b62;\r\n}\r\n.answer-list {\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-color: #F7F7F7;\r\n    list-style-type: none; \r\n    display: block;\r\n    padding: 0px 45px;\r\n    vertical-align: middle;\r\n}\r\n.answer-list li{\r\n\tpadding: 0;\r\n    white-space: normal;\r\n}\r\n.answer-checkbox{\r\n\t    visibility: hidden;\r\n\t    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.answer-content.selected {\r\n\tbackground-color: #48a5ea !important;\r\n\ttransition: background-color .5s;\r\n    color: #fff;\r\n}\r\n.answer-content{\r\n\t    font-size: 16px;\r\n    margin: 0;\r\n    width: 100%;\r\n    white-space: normal;\r\n}\r\n.answer-list li .btn {\r\n    text-align: left;\r\n    color: #071018;\r\n    padding: 10px;\r\n    max-height: 50%;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n}\r\n.btn-info{\r\n\t    margin: 0px 15px;\r\n}\r\n#quiz-action-button{\r\n\t    width: 92%;\r\n    float: right;\r\n    text-align: right;\r\n    margin: 10px 35px;\r\n}\r\n\r\n.ansSelected{\r\n    background-color: #48a5ea;\r\n}\r\n\r\n.timerBackground{\r\n background: url(" + __webpack_require__(762) + ");   \r\n width: 100px;\r\n height: 22px;\r\n background-size: 150px 25px;\r\n}\r\n\r\n\r\n/*image question css*/\r\n\r\n\r\n#current-ques #question-image,#current-ques #question-part{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n#select-following{\r\n\tcolor: #005792;\r\n\tfont-size: 105%;\r\n\tmargin: 10px 45px 0px;\r\n}\r\n.answer-list {\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-color: #F7F7F7;\r\n    list-style-type: none; \r\n    display: block;\r\n    padding: 0px 45px;\r\n    vertical-align: middle;\r\n}\r\n.answer-list li{\r\n\tpadding: 0;\r\n    white-space: normal;\r\n}\r\n.answer-checkbox{\r\n\t    visibility: hidden;\r\n\t    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.image-answer-content.selected {\r\n\tbackground-color: #3a99ad;\r\n\ttransition: background-color .5s;\r\n    transition-property: background-color;\r\n    transition-duration: 0.5s;\r\n    transition-timing-function: initial;\r\n    transition-delay: initial;\r\n    color: #fff;\r\n}\r\n.answer-content{\r\n\t    font-size: 16px;\r\n    margin: 0;\r\n    width: 100%;\r\n    white-space: normal;\r\n}\r\n.answer-list li .btn {\r\n    text-align: left;\r\n    color: #071018;\r\n    padding: 10px;\r\n    max-height: 50%;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    background-color: #fcfcfc;\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n}\r\n.btn-info{\r\n\t    margin: 0px 15px;\r\n}\r\n#quiz-action-button{\r\n\t    width: 92%;\r\n    float: right;\r\n    text-align: right;\r\n    margin: 10px 35px;\r\n}\r\n\r\n\r\n\r\n\r\n.image-answer-list {\r\n    padding: 0px;\r\n    overflow: hidden;\r\n    background-color: #F7F7F7;\r\n    list-style-type: none; \r\n    display: block;\r\n    padding: 0px 45px;\r\n    vertical-align: middle;\r\n    width: 49%;\r\n}\r\n.image-answer-list li{\r\n\tpadding: 0;\r\n    white-space: normal;\r\n}\r\n.image-answer-checkbox{\r\n\t    visibility: hidden;\r\n\t    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n.image-question-performe-answer{\r\n\r\n}\r\n.image-answer-content{\r\n\t    font-size: 16px;\r\n    margin: 0;\r\n    width: 100%;\r\n    white-space: normal;\r\n}\r\n.image-answer-list li .btn {\r\n    text-align: left;\r\n    color: #071018;\r\n    padding: 10px;\r\n    max-height: 50%;\r\n    font-weight: 300;\r\n    width: 100%;\r\n    cursor: pointer;\r\n    border: 1px solid #ccc;\r\n    border-radius: 3px;\r\n}\r\n#current-ques .image-answer-list,#current-ques .two{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n.image-type-question{\r\n\twidth: 45%;\r\n}\r\n.image-type-question img{\r\n\twidth: 100%;\r\n\theight: 105px;\r\n}\r\n.question-options{\r\n\t    width: 44%;\r\n    margin: 0px 15px;\r\n    padding-top: 30px;\r\n}\r\n.image-answer-content .image-type-question , .image-answer-content .question-options{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n.image-answer-content:hover{\r\n\tbackground-color: blue;\r\n}\r\n\r\n\r\n\r\n.innerCircle{\r\n        width: 112px;\r\n    height: 112px;\r\n    background-color: #223460;\r\n    border: 6px solid white;\r\n    border-radius: 75px;\r\n    position: relative;\r\n    left: 57px;\r\n    top: 33px;\r\n    box-shadow: 0 0 0 1px rgb(93, 140, 196),\r\n     0 0 6px 1px rgba(0,0,0,.4), \r\n     inset 0 0 0 3px rgba(72, 165, 234, 0.4);   \r\n}\r\n.hand{\r\n    background-color: #316198;\r\n    transform:rotate(45deg);\r\n    -ms-transform:rotate(45deg);\r\n    -webkit-transform:rotate(45deg);\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n.hand-1{\r\n    background-color: #c0392b;\r\n    transform:rotate(45deg);\r\n    -ms-transform:rotate(45deg);\r\n    -webkit-transform:rotate(45deg);\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n.small{\r\n    width: 7px;\r\n    height: 8px;\r\n    position: absolute;\r\n    bottom: 14px;\r\n    left: 16px;\r\n}\r\n.seconds{\r\n    width: 113px;\r\n    height: 113px;\r\n    border-radius: 200px;\r\n    -webkit-animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n    -webkit-animation-name: orbit;\r\n    -webkit-animation-duration: 10s;\r\n    -moz-animation-iteration-count: infinite;\r\n    -moz-animation-timing-function: linear;\r\n    -moz-animation-name: orbit;\r\n    -moz-animation-duration: 10s;\r\n    position: absolute;\r\n    top: 91px;\r\n    left: 136px;\r\n}\r\n@-webkit-keyframes orbit { \r\nfrom { -webkit-transform:rotate(0deg) } \r\nto { -webkit-transform:rotate(360deg) } \r\n}\r\n.medium{\r\n    width: 12px;\r\n    height: 9px;\r\n    position: absolute;\r\n    bottom: 14px;\r\n    left: 13px;\r\n}\r\n.minutes{\r\n    width: 112px;\r\n    height: 113px;\r\n    border-radius: 200px;\r\n    margin: 15px;\r\n    -webkit-animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n    -webkit-animation-name: orbit;\r\n    -webkit-animation-duration: 60s;\r\n    -moz-animation-iteration-count: infinite;\r\n    -moz-animation-timing-function: linear;\r\n    -moz-animation-name: orbit;\r\n    -moz-animation-duration: 60s;\r\n    position: absolute;\r\n    top: 76px;\r\n    left: 122px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "body{\r\n\tmargin:0px;\r\n\tpadding:0px;\r\n\tfont-family: \"Verdana\", Geneva, sans-serif;\r\n\tfont-size:medium;\r\n}\r\nul{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\nfigure{\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\np{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\nh1{\r\n\tpadding:0px;\r\n\tmargin:0px;\r\n}\r\n.btn{\r\n\tvertical-align: top !important;\r\n\tmargin-top: 3px;\r\n\tmargin-left: 8%;\r\n\tpadding: 6px 20px !important;\r\n}\r\n#ques-body{\r\n\twidth: 100%;\r\n\tbackground-color: #ecf0f1;\r\n\tpadding-bottom: 1%;\r\n}\r\n#ques-nav{\r\n    width: 100%;\r\n    padding: 10px 0px;\r\n    padding-right: 2%;\r\n    text-align: right;\r\n}\r\n#ques-nav ul{\r\n\tlist-style-type: none;\r\n\tfont-size: 16px;\r\n\r\n}\r\n#ques-nav ul li{\r\n\tdisplay: inline;\r\n\tpadding: 0px 12px;\r\n}\r\n#ques-nav a{\r\n\ttext-decoration: none;\r\n\tcolor: #48a5ea;\r\n}\r\n#ques-nav ul li a img{\r\n\twidth: 30px;\r\n}\r\n#finalize{\r\n    margin-left: 0px;\r\n    margin-top: 0px;\r\n        padding: 6px 15px !important;\r\n}\r\n.finalize-p{\r\n    text-align: center;\r\n    color: #48a5ea;\r\n    font-size: 21px;\r\n    font-weight: bold;\r\n}\r\n#finalize-img{\r\n    text-align: center;\r\n}\r\n#finalize-body-clr{\r\n    background-color: #f7fbff;\r\n}\r\n#finalize-img img{\r\n    width: 102px;\r\n}\r\n#y-n-btn{\r\n    margin-left: 5%;\r\n    padding: 5px 12px !important;\r\n}\r\n.finalize-btn{\r\n    text-align: center;\r\n    padding: 10px 0px;\r\n}\r\n.glyphicon-ok , .glyphicon-remove{\r\n    font-size: 12px;\r\n}\r\n#ques-dashboard{\r\n\twidth: 100%;\r\n\tpadding: 0px 1%;\r\n\t/*padding: 0px 15px 0px 66px;*/\r\n}\r\n#ques-dashboard #dasboard-menu,#ques-dashboard #question-area{\r\n\tdisplay: inline-block;\r\n}\r\n#dasboard-menu{\r\n/*\tbackground-color: #48a5ea;\r\n\twidth: 26%;*/\r\n\twidth: 322px;\r\n\theight: 490px;\r\n\tborder-radius: 3px;\r\n\tbackground: url(" + __webpack_require__(384) + ");\r\n  background-repeat: no-repeat;\r\n\r\n}\r\n#ques-lists{\r\n\twidth: 81%;\r\n    margin-left: 60px;\r\n\theight: 60%;\r\n}\r\n#question-area{\r\n\twidth: 72%;\r\n\theight: 490px;\r\n\tbackground-color: #ffffff;\r\n\tborder-radius: 3px;\r\n\tvertical-align: top;\r\n\tbox-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n}\r\n.shape-icon{\r\n    width: 65px;\r\n    height: 24px;\r\n    border-radius: 30px;\r\n}\r\n#insert-ques{\r\n\twidth: 74%;\r\n    text-align: center;\r\n    /* padding-left: 57px; */\r\n    margin-top: 30px;\r\n    margin-left: 25%;\r\n    cursor: pointer;\r\n}\r\n#insert-ques img{\r\n\twidth: 82px;\r\n}\r\n#insert-ques p{\r\n\tcolor: white;\r\n    font-size: 120%;\r\n    font-weight: bold;\r\n    line-height: 30px;\r\n}\r\n.insert-button{\r\n\tmargin-top: 5px;\r\n\tborder: none;\r\n    background-color: none;\r\n    background: none;\r\n    color: white;\r\n    font-size: 110%;\r\n    font-weight: bold;\r\n}\r\n.modal-insert{\r\n\tposition: relative;\r\n\ttop: 77px !important;\r\n\tleft: -2px !important;\r\n}\r\n.modal-body {\r\n    position: relative;\r\n    padding: 15px 0px 15px 0px !important;\r\n}\r\n.modal-title {\r\n    color: #fff;\r\n    margin: 0;\r\n    line-height: 1.42857143;\r\n    font-weight: 600;\r\n}\r\n.modal-header {\r\n    padding: 15px;\r\n    background-color: #48a5ea; \r\n    border-radius: 4px;\r\n    border-bottom: 1px solid #ecf0f1 !important;\r\n}\r\n.modal-footer {\r\n\tborder-top: 1px solid #ecf0f1 !important;\r\n}\r\n.insert-btn img:hover{\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#ques-lists table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n    /*margin-left: 30px;*/\r\n    margin-top: 30px;\r\n}\r\n#ques-lists tr{\r\n\tbackground-color: #223560;\r\n\tcolor: #ffffff;\r\n\tborder-bottom: 2px solid #48a5ea;\r\n\tcursor: pointer;\r\n}\r\n#ques-lists td {\r\n    text-align: center;\r\n    padding: 8px;\r\n\r\n}\r\n#ques-lists tr:hover{\r\nbackground-color: #5cb85c;\r\n}\r\n.activeQues tr{\r\nbackground-color: #ff3300;\r\n}\r\n\r\n#ques-title{\r\n\twidth: 100%;\r\n    background-color: #223460;\r\n    margin-top: 4px;\r\n    padding: 5px;\r\n    border-bottom: 3px solid #48a5ea;\r\n}\r\n#cateory{\r\n    width: 100%;\r\n    background-color: #ecf0f1;\r\n    padding: 8px 27px;\r\n}\r\n#cateory #tagging , #cateory #section , #cateory #subject-diff{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n#subject-diff label , #subject-diff #exampleSelect1{\r\n    display: inline-block;\r\n}\r\n#subject-diff label , #tagging label , #section label{\r\n        color: #48a5ea;\r\n} \r\n#exampleSelect1{\r\n    width: 70%;\r\n}\r\n#section label , #section input{\r\n    display: inline-block;\r\n}\r\n#tagging label , #tagging input{\r\n    display: inline-block;\r\n}\r\n#tagging-input{\r\n    width: 70%;\r\n}\r\n#tagging , #section , #subject-diff{\r\n    width: 33%;\r\n}\r\n.glyphicon-info-sign{\r\n    position: relative;\r\n    left: -28px;\r\n    top: 4px;\r\n    font-size: 17px;\r\n    cursor: pointer;\r\n    color: #48a5ea;\r\n}\r\n.glyphicon-plus-sign{\r\n    position: relative;\r\n    left: -40px;\r\n    top: 4px;\r\n    font-size: 17px;\r\n    cursor: pointer;\r\n    color: #48a5ea;\r\n}\r\n\r\n#ques-title #quest-p,#ques-title p{\r\n\tdisplay: inline-block;\t\r\n}\r\n#quest-p{\r\n\twidth: 83%;\r\n\tcolor: #eef6fc;\r\n    font-size: 130%;\r\n    font-weight: 600;\r\n    padding-left: 20px;\r\n    margin: 0 0 8px !important;\r\n}\r\n#ques-title a{\r\n\tpadding-left: 25px;\r\n}\r\n\r\n.group { \r\n\tposition: relative; \r\n\tmargin-bottom: 5px; \r\n}\r\n\r\n.group input {\r\n\tfont-size: 17px;\r\n\tpadding: 10px 10px 10px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 83%;\r\n    margin-left: 55px;\r\n    margin-top: 13px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n.group input :: focus{\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-color: w\r\n}\r\ninput:focus{\r\n\tborder: none;\r\n\toutline: none;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n.input-img{\r\n\theight:auto;   \r\n\tposition: relative;\r\n    left: -30px;\r\n    cursor: pointer;\r\n}\r\n.view-img{\r\n\tposition: relative;\r\n    left: -50px;\r\n    width: 7%;\r\n    cursor: pointer;\r\n    margin-top: 14px;\r\n}\r\n.view-img-span{\r\n    margin-top: 14px !important;\r\n}\r\n\r\n.view-img img{\r\n\t position: relative;\r\n        width:  100%;\r\n    height: 40px;\r\n    border-radius: 8px;\r\n}\r\n\r\n.modal-view-img img{\r\n\tposition: relative;\r\n    width: 100%;\r\n    height: 150px;\r\nborder-radius: 8px;\r\n}\r\n\r\n.input-img img{\r\n\twidth:25px;\r\n}\r\n.group input: focus{\r\n\tborder: none;\r\n}\r\n.group input,.group span,.group .options{\r\n\tdisplay: inline-block;\r\n}\r\n.group-1 input,.group-1 span{\r\n\tdisplay: inline-block;\r\n\t    float: left;\r\n    margin-top: 26px;\r\n}\r\n.group-1{\r\n\tposition: relative; \r\n\tmargin-bottom: 0px;\r\n}\r\n.group-1 input{\r\n\tfont-size: 14px;\r\n\tpadding: 10px 10px 5px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground-color: transparent;\r\n\tcolor: #141414;\r\n\twidth: 73%;\r\n    margin-left: 55px;\r\n    margin-top: 20px;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #2aade3;\r\n}\r\n\r\n.options{\r\n\tposition: relative;\r\n    top: -10px;\r\n    left: -60px;\r\n    width: 0;\r\n}\r\n\r\ndiv.options > label {\r\n\tdisplay: block;\r\n\tmargin: 0 0 0 5px;\r\n\tpadding: 0 0 20px 0;  \r\n\theight: 20px;\r\n\twidth: 150px;\r\n}\r\n\r\n\r\n\r\n#save-button{\r\n    margin-top: 31px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-left: 475px;\r\n}\r\n.btn-info{\r\n\t background: #38a2e8;\r\n    color: #ffffff;\r\n  transition: 0.3s ease;\r\n}\r\n.btn-info:hover{\r\n\tbackground: #178ab4;\r\n\t\r\n}\r\n.form button:disabled{\r\n    cursor: not-allowed;\r\n  }\r\n/*styles for radio and check box*/\r\n/*{font-family: 'Roboto', sans-serif;}*/\r\n\r\n@-webkit-keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes click-wave {\r\n  0% {\r\n    height: 33px;\r\n    width: 33px;\r\n    opacity: 0.35;\r\n    position: relative;\r\n  }\r\n  100% {\r\n    height: 170px;\r\n    width: 170px;\r\n    margin-left: -70px;\r\n    margin-top: -70px;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.group-1 .option-input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  -ms-appearance: none;\r\n  -o-appearance: none;\r\n  appearance: none;\r\n  position: relative;\r\n  top: 13.33333px;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  height: 33px;\r\n  width: 33px;\r\n  transition: all 0.15s ease-out 0s;\r\n  background: #cbd1d8;\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  outline: none;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input:hover {\r\n  background: #9faab7;\r\n}\r\n.group-1 .option-input:checked {\r\n  background: #5cb85c;\r\n}\r\n.group-1 .option-input:checked::before {\r\n  height: 33px;\r\n  width: 33px;\r\n  position: absolute;\r\n  content: '\\2714';\r\n  display: inline-block;\r\n  font-size: 26.66667px;\r\n  text-align: center;\r\n  line-height: 10px;\r\n  padding-right: 14px;\r\n}\r\n.group-1 .option-input:checked::after {\r\n  -webkit-animation: click-wave 0.65s;\r\n  animation: click-wave 0.65s;\r\n  background: #5cb85c;\r\n  content: '';\r\n  display: block;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n.group-1 .option-input.radio {\r\n  border-radius: 50%;\r\n  border: 2px solid #2aade3;\r\n}\r\n.group-1 .option-input.radio::after {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n.scrollbar\r\n{\r\n\twidth: 100%;\r\n    /* margin-left: 30px; */\r\n    float: right;\r\n    height: 100%;\r\n    background: transparent;\r\n    overflow-y: auto;\r\n    margin-bottom: 25px;\r\n    /* padding-right: 30px; */\r\n}\r\n\r\n\r\n#style-8::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#style-8::-webkit-scrollbar\r\n{\r\n\twidth: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-8::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\tbackground-image: -webkit-gradient(linear,\r\n\t\t\t\t\t\t\t\t\t   left bottom,\r\n\t\t\t\t\t\t\t\t\t   left top,\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.44, rgb(122,153,217)),\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.72, rgb(73,125,189)),\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.86, rgb(28,58,148)));\r\n}\r\n\r\n.radio-button-margin{\r\n    margin-left: 20px;\r\n}\r\n\r\n.icon{\r\n   \r\n    width: 82px;\r\n    height: 82px;\r\n    background: url(" + __webpack_require__(765) + ") no-repeat;\r\n    background-size: 82px 82px;\r\n    margin: auto; \r\n    top: -11px;\r\n    left: -843px;\r\n    bottom: 0; right: 0;\r\n    z-index: 3;\r\n    box-shadow:\r\n     0 0 0 2px rgba(255,255,255,.2), \r\n    0 0 6px 1px rgba(0,0,0,.4), \r\n    inset 0 0 0 3px rgba(72, 165, 234, 0.4);\r\n    border-radius: 999px;   \r\n}\r\n\r\n.pulse1 {\r\n   \r\n    width: 82px;\r\n    height: 82px;\r\n    margin: auto; \r\n    top: -11px;\r\n    left: -843px;\r\n    bottom: 0; right: 0;\r\n    z-index: 1;\r\n    opacity: 0;\r\n    border: 3px solid rgba(255,255,255,.1);\r\n  \r\n    -webkit-animation: pulsejg1 4s linear infinite;\r\n    animation: pulsejg1 4s linear infinite;\r\n    border-radius: 999px;\r\n    box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.pulse2 {\r\n    \r\n    width: 82px;\r\n    height: 82px;\r\n    margin: auto; \r\n    top: -11px;\r\n    left: -843px;\r\n    bottom: 0; right: 0;\r\n    z-index: 2;\r\n    opacity: 0;\r\n    border: 1px solid rgba(255,255,255,0);\r\n  \r\n    -webkit-animation: pulsejg2 4s linear infinite;\r\n    animation: pulsejg2 4s linear infinite;\r\n    border-radius: 999px;\r\n    box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\r\n    box-sizing: border-box;\r\n}\r\n\r\n@-webkit-keyframes pulsejg1 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    60% {\r\n        -webkit-transform: scale(.9);\r\n        opacity: .2;\r\n    }\r\n\r\n    70% {\r\n        -webkit-transform: scale(1.1);\r\n        opacity: .35;\r\n    }\r\n\r\n    80% {\r\n        -webkit-transform: scale(1.25);\r\n        opacity: .2;\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1.4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes pulsejg1 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    60% {\r\n        -webkit-transform: scale(.9);\r\n                transform: scale(.9);\r\n        opacity: .1;\r\n    }\r\n\r\n    70% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        opacity: .25;\r\n    }\r\n\r\n    80% {\r\n        -webkit-transform: scale(1.25);\r\n                transform: scale(1.25);\r\n        opacity: .1;\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1.4);\r\n                transform: scale(1.4);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulsejg2 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(.8);\r\n        opacity: .05;\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: scale(1);\r\n        opacity: .1;\r\n    }\r\n\r\n    60% {\r\n        -webkit-transform: scale(1.1);\r\n        opacity: .3;\r\n    }\r\n\r\n    80% {\r\n        -webkit-transform: scale(1.2);\r\n        opacity: .1;\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1.3);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes pulsejg2 {\r\n    0% {\r\n        -webkit-transform: scale(.6);\r\n                transform: scale(.6);\r\n        opacity: 0;\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(.8);\r\n                transform: scale(.8);\r\n        opacity: .05;\r\n    }\r\n\r\n    50% {\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n        opacity: .1;\r\n    }\r\n\r\n    60% {\r\n        -webkit-transform: scale(1.1);\r\n                transform: scale(1.1);\r\n        opacity: .3;\r\n    }\r\n\r\n    80% {\r\n        -webkit-transform: scale(1.2);\r\n                transform: scale(1.2);\r\n        opacity: .1;\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: scale(1.3);\r\n                transform: scale(1.3);\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width:1203px){\r\n\t#main{\r\n\r\n\tmin-width: 1203px;\t\r\n}\r\n}\r\n\r\n/*styles for upload modal*/\r\n.my-drop-zone { \r\n    border: dotted 3px #48a5ea;\r\n    height: 100px;\r\n    width: 100%;\r\n    display: inline-block;\r\n}\r\n.well {\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-color: #fff;\r\n    margin-bottom: 15px;\r\n    cursor: pointer;\r\n}\r\n.drag-drop{\r\n    border-top: 1px solid #48a5ea;\r\n    border-bottom: 1px solid #48a5ea;\r\n    padding: 6px;\r\n    color: #48a5ea;\r\n    cursor: pointer;\r\n}\r\n.row{\r\n    margin: 5px 0px;\r\n}\r\n.color-p{\r\n    color: #48a5ea;\r\n   \r\n}\r\n.show-all{\r\n    vertical-align: top;\r\n}\r\n.upload-icon{\r\n    position: relative;\r\n    top: -12px;\r\n}\r\n.upload-icon img{\r\n    width: 50px;\r\n}\r\n.nv-file-over { \r\n    border: dotted 3px green; \r\n} \r\n.remove-margin{\r\n    margin-top: 0px;\r\n}\r\n.progress-btn .btn , .image-preview-container .btn {\r\n    vertical-align: top !important;\r\n    margin: 15px 0px;\r\n    margin-right: 15px;\r\n    padding: 2px 5px !important;\r\n}\r\n.progress{\r\n    margin-top: 15px;\r\n    margin-bottom: 0px;\r\n    border: 1px solid #48a5ea;\r\n    background-color: #fff;\r\n}\r\n.table > thead > tr > th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n    color: #48a5ea;\r\n}\r\ntbody > tr > td, .table > tfoot > tr > td {\r\n    padding: 2px;\r\n    line-height: 1.42857143;\r\n    vertical-align: top;\r\n    border-top: 1px solid #ddd;\r\n}\r\n\r\ninput[type=\"file\"]{\r\n    visibility: hidden;\r\n}\r\n\r\n.upload-table{\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.preview-area{\r\n    max-height: 120px;\r\n    overflow-y: auto;\r\n    margin: 0px 15px;\r\n}\r\n.image-preview-container{\r\n    width: 108px;\r\n    height: 108px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin: 5px 8px 5px 5px;\r\n    float: left;\r\n    border-radius: 12px;\r\n    box-shadow: 0 0 6px 0px #48a5ea;\r\n}\r\n.image-preview-container button{\r\n    position: absolute;\r\n    top: -14px;\r\n    right: -13px;\r\n    width: 19px;\r\n    height: 19px;\r\n    border-radius: 15px;\r\n    font-size: 8px;\r\n    line-height: 1.42;\r\n    padding: 2px 0;\r\n    text-align: center;\r\n    z-index: 3;\r\n}\r\n.btn-danger {\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n    border-color: #d43f3a;\r\n}\r\n.image-details{\r\n    position: absolute;\r\n    top: 0;\r\n    padding-top: 20px;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    background: rgba(255,255,255,.5);\r\n    z-index: 2;\r\n    opacity: 0;\r\n}\r\n.preview-area img{\r\n   height: 65px;\r\n    left: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n    width: auto;\r\n}\r\n/*styles for toggle button*/\r\n.tggl-wrap {\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -5px;\r\n    left: 5px;\r\n}\r\n.tggl-input {\r\n  display: none;\r\n}\r\n.tggl-btn {\r\n  transition: all 0.3s ease-in;\r\n  display: block;\r\n  position: relative;\r\n  width: 4em;\r\n  height: 2em;\r\n  border-radius: 1em;\r\n  cursor: pointer;\r\n}\r\n.tggl-btn.switch {\r\n  padding: 2px;\r\n}\r\n.tggl-btn.switch:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  width: calc(50% - 4px);\r\n  height: calc(100% - 4px);\r\n  border-radius: 50%;\r\n  left: 2px;\r\n  transition: left 0.2s ease, background-color 0.3s ease;\r\n}\r\n.tggl-input:checked + .tggl-btn.switch:after {\r\n  left: calc(50% + 2px);\r\n}\r\n.tggl-btn.txt {\r\n  overflow: hidden;\r\n}\r\n.tggl-btn.txt:before,\r\n.tggl-btn.txt:after {\r\n  display: inline-block;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  line-height: 2em;\r\n  font-weight: 700;\r\n  color: #fff;\r\n  transition: left 0.2s ease;\r\n}\r\n.tggl-btn.txt:before {\r\n  content: attr(data-tg-off);\r\n  left: 0;\r\n}\r\n.tggl-btn.txt:after {\r\n  content: attr(data-tg-on);\r\n  left: -100%;\r\n}\r\n.tggl-input:checked + .tggl-btn.txt:before {\r\n  left: 100%;\r\n}\r\n.tggl-input:checked + .tggl-btn.txt:after {\r\n  left: 0;\r\n}\r\n.tggl-btn.txtswitch {\r\n  width: 5em;\r\n  padding: 2px;\r\n}\r\n.tggl-btn.txtswitch span {\r\n  display: block;\r\n  position: absolute;\r\n  width: calc(5em - 8px);\r\n  line-height: calc(2em - 4px);\r\n  font-weight: 700;\r\n  transition: opacity 0.3s ease;\r\n}\r\n.tggl-btn.txtswitch span.on {\r\n  opacity: 0;\r\n  text-align: right;\r\n  padding-right: 2em;\r\n}\r\n.tggl-btn.txtswitch span.off {\r\n  opacity: 1;\r\n  text-align: left;\r\n  padding-left: 2em;\r\n}\r\n.tggl-btn.txtswitch:after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  top: 2px;\r\n  left: 2px;\r\n  transition: left 0.2s ease;\r\n}\r\n.tggl-input:checked + .tggl-btn.txtswitch:after {\r\n  left: calc(3em + 2px);\r\n}\r\n.tggl-input:checked + .tggl-btn.txtswitch span.on {\r\n  opacity: 1;\r\n}\r\n.tggl-input:checked + .tggl-btn.txtswitch span.off {\r\n  opacity: 0;\r\n}\r\n.tggl-btn.ying {\r\n      background-color: rgba(72, 165, 234, 0.6);\r\n}\r\n.tggl-btn.ying.switch:after {\r\n  background-color: #fff;\r\n}\r\n.tggl-input:checked + .tggl-btn.ying {\r\n  background-color: #48a5ea;\r\n}\r\n.tggl-btn.ying.txtswitch span {\r\n  color: #fff;\r\n}\r\n.tggl-btn.ying.txtswitch:after {\r\n  width: calc(2em - 4px);\r\n  height: calc(2em - 4px);\r\n  background-color: #fff;\r\n}\r\n\r\n/*qnr modal css*/\r\n\r\n.form-container{\r\n\tposition: relative;\r\n  background: #0f1d3d;\r\n  max-width: 425px;\r\n  width: 100%;\r\n  border-left: 20px solid #c7d2e1;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);\r\n  margin-left: 4%;\r\n  margin-top: -14px;\r\n}\r\n.form-container .form{\r\n  padding: 8px 25px;\r\n  display: block;\r\n}\r\n.form h2{\r\n  margin: 0 0 20px;\r\n  color: #ffffff;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n}\r\n.form input {\r\n  outline: none;\r\n  display: block;\r\n  width: 100%;\r\n  background-color: transparent;\r\n    color: #2aade3;\r\n        border: none;\r\n    border-radius: 0;\r\n    border-bottom: 1px solid #48a5ea;\r\n  margin: 0 0 15px;\r\n  padding: 10px 0px;\r\n  box-sizing: border-box;\r\n  font-wieght: 400;\r\n  transition: 0.3s ease;\r\n}\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #48a5ea;\r\n}\r\n.range-control input{\r\n\tmargin: 0 0 15px;\r\n  padding: 10px 15px;\r\n  box-sizing: border-box;\r\n  font-wieght: 400;\r\n  transition: 0.3s ease;\r\n  outline: none;\r\n  display: block;\r\n  width: 84%;\r\n  background-color: transparent;\r\n    color: #2aade3;\r\n        border: none;\r\n    border-radius: 0;\r\n}\r\n\r\n.form button {\r\n  cursor: pointer;\r\n  background: #38a2e8;\r\n  width: 100%;\r\n  border: 0;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n  padding: 10px 15px;\r\n  color: #ffffff;\r\n  transition: 0.3s ease;\r\n\r\n}\r\n.form button:hover {\r\n  background: #178ab4;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.range-p{\r\n\tcolor:#48a5ea; \r\n\tmargin: 0 0 20px;\r\n}\r\n.range-control {\r\n  position: relative;\r\n}\r\n\r\ninput[type=range] {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 0;\r\n  -webkit-appearance: none;\r\n  outline: none;\r\n  margin: 0 0 15px;\r\n  border: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  position: relative;\r\n  height: 12px;\r\n /* border: 1px solid #b2b2b2;*/\r\n  border-radius: 5px;\r\n  background-color: #ffffff;\r\n  box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  position: relative;\r\n  top: -5px;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid #999;\r\n  -webkit-appearance: none;\r\n  background-color: #fff;\r\n  box-shadow: inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25);\r\n  border-radius: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\noutput {\r\n  position: absolute;\r\n  top: 22px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 24px;\r\n  border: 1px solid #c7d2e1;\r\n  background-color: #367ab4;\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  font-size: .8em;\r\n  line-height: 24px;\r\n  text-align: center;\r\n}\r\n\r\ninput[type=range]:active + output {\r\n  display: block;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n}\r\n\r\n.range-control #inputRange , .range-control #out-range{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n#out-range {\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #48a5ea;\r\n    width: 14%;\r\n    border-radius: 4px;  \r\n}\r\n.qnr-modal-margin{\r\n    width: 460px;\r\n    margin-top: -50px;\r\n    margin-left:25%; \r\n}\r\n\r\n/*css for question and options remove button*/\r\n\r\n.image-remove-ques{\r\n    font-size: 8px;\r\n    vertical-align: top !important;\r\n    margin-top: 15px;\r\n    margin-left: -68px;\r\n    padding: 0px 2px !important;\r\n}\r\n\r\n.image-remove-ans{  \r\n    font-size: 8px;\r\n    vertical-align: top !important;\r\n    margin-top: 13px;\r\n    margin-left: -64px;\r\n    padding: 0px 2px !important;\r\n}\r\n\r\n.image-remove-ans:hover, .image-remove-ques:hover {\r\n   border-color: blue;\r\n   padding: 3px 3px !important;\r\n}\r\n.tagging-group{\r\n    padding: 5px 50px;\r\n}\r\n.add-btn{\r\n    margin: 0;\r\n}\r\n.tag-remove-btn{\r\n   \r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 15px;\r\n    font-size: 8px;\r\n    line-height: 1.42;\r\n    padding: 2px 0;\r\n    text-align: center;\r\n    z-index: 3;\r\n    padding: 0px !important;\r\n    color: #fff;\r\n    background-color: #38a2e8;\r\n    border-color: #38a2e8;\r\n    margin-left: 0px;\r\n}\r\n.tagName-group{\r\n        margin: 10px 0px;\r\n        padding: 0px 50px;\r\n}\r\n.tag-wrap{\r\n    margin-right: 22px;\r\n}\r\n.tag-wrap button , .tag-wrap p{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.tag-wrap p{\r\n    font-weight: bold;\r\n    padding-top: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#ques-body{\r\n\twidth: 100%;\r\n\tbackground-color: #f1f1f1;\r\n}\r\n#ques-body #ques-filter, #ques-body #ques-area{\r\n\tdisplay: inline-block;\r\n}\r\n#ques-filter{\r\n\twidth: 20%;\r\n    background-color: white;\r\n    margin: 0px 10px;\r\n    height: 560px;\r\n    overflow-y: auto;\r\n}\r\n#filters-p{\r\n    padding: 10px 10%;\r\n    border-bottom: 1px solid #c8c8c8;\r\n    color: #48a5ea;\r\n    font-size: 115%;\r\n}\r\n#filters-p p , #filters-p button{\r\n  display: inline-block;\r\n}\r\n.checkbox-area{\r\n\tpadding: 13px 0px 0px 10%;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n.heading-p{\r\n\tcolor: #48a5ea;\r\n\tfont-size: 110%;\r\n\twidth: 85%;\r\n}\r\n.checkbox-area figure{\r\n\twidth: 10%;\r\n\tvertical-align: top;\r\n}\r\n#type-ahead{\r\n    position: relative;\r\n    top: -3px;\r\n    left: -12px;\r\n}\r\n.title-input{\r\n    width: 100%;\r\n    margin: 5px 0px 20px 0px;\r\n}\r\n#filter-btn{\r\n      padding: 2px 4px;\r\n      margin-left: 12px;\r\n}\r\n#min{\r\n    border: 1px solid #48a5ea;\r\n}\r\n.checkbox-area .heading-p, .checkbox-area figure{\r\n\tdisplay: inline-block;\r\n}\r\n.boxes {\r\n  margin: auto;\r\n  padding: 15px 0px;\r\n}\r\n\r\n.range-section{\r\n    margin: auto;\r\n    padding: 15px 0px;\r\n    \r\n}\r\n /* Multi-range */\r\ninput[type=range] {\r\n  box-sizing: border-box;\r\n  -webkit-appearance: none;\r\n     -moz-appearance: none;\r\n          appearance: none;\r\n  width: 212px;\r\n  margin: 0;\r\n  padding: 0 0px;\r\n  /* Add some L/R padding to ensure box shadow of handle is shown */\r\n  overflow: hidden;\r\n  border: 0;\r\n  border-radius: 1px;\r\n  outline: none;\r\n  background: linear-gradient(#48a5ea, #48a5ea) no-repeat center;\r\n  /* Use a linear gradient to generate only the 2px height background */\r\n  background-size: 100% 2px;\r\n  pointer-events: none;\r\n}\r\ninput[type=range]:active,\r\ninput[type=range]:focus {\r\n  outline: none;\r\n}\r\ninput[type=range]::-webkit-slider-thumb {\r\n  height: 23px;\r\n  width: 23px;\r\n  border-radius: 28px;\r\n  border: 2.5px solid #48a5ea;\r\n  background-color: #fff;\r\n  position: relative;\r\n  margin: 5px 0;\r\n  /* Add some margin to ensure box shadow is shown */\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n          appearance: none;\r\n  pointer-events: all;\r\n}\r\ninput[type=range]::-webkit-slider-thumb::before {\r\n  content: ' ';\r\n  display: block;\r\n  position: absolute;\r\n  top: 13px;\r\n  left: 100%;\r\n  width: 2000px;\r\n  height: 2px;\r\n}\r\n.multi-range {\r\n  position: relative;\r\n  height: 50px;\r\n}\r\n.multi-range input[type=range] {\r\n  position: absolute;\r\n}\r\n.multi-range input[type=range]:nth-child(1)::-webkit-slider-thumb::before {\r\n  background-color: red;\r\n}\r\n.multi-range input[type=range]:nth-child(2) {\r\n  background: none;\r\n}\r\n.multi-range input[type=range]:nth-child(2)::-webkit-slider-thumb::before {\r\n  background-color: grey;\r\n}\r\n\r\n#min{\r\n      width: 70px;\r\n    padding: 3px;\r\n    margin: 14px 3px;\r\n}\r\n#min-max #min , #min-max p{\r\n  display: inline-block;\r\n}\r\n#min-max{\r\n      padding-left: 16px;\r\n}\r\n\r\n/*Checkboxes styles*/\r\ninput[type=\"checkbox\"] {\r\n\tdisplay: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label {\r\n  display: block;\r\n  position: relative;\r\n  padding-left: 35px;\r\n  margin-bottom: 15px;\r\n  font: 14px/20px 'Open Sans', Arial, sans-serif;\r\n  color: #223460;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\ninput[type=\"checkbox\"] + label:last-child {\r\n\tmargin-bottom: 0; \r\n}\r\n\r\ninput[type=\"checkbox\"] + label:before {\r\n  content: '';\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1.5px solid #48a5ea;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  opacity: .6;\r\n  transition: all .12s, border-color .08s;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + label:before {\r\n  width: 10px;\r\n  top: -5px;\r\n  left: 5px;\r\n  border-radius: 0;\r\n  opacity: 1;\r\n  border-top-color: transparent;\r\n  border-left-color: transparent;\r\n  -webkit-transform: rotate(45deg);\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.label-p{\r\n\t    margin-left: 22px;\r\n    font-size: 100%;\r\n    font-weight: normal;\r\n    position: relative;\r\n    top: -5px;\r\n    color: #223460;\r\n}\r\n\r\n#ques-area{\r\n\twidth: 77%;\r\n    background-color: white;\r\n    margin-right : 10px;\r\n    vertical-align: top;\r\n    height: 560px;\r\n}\r\n.sub-nav{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #48a5ea;\r\n    padding: 6px 0px;\r\n    border-top: 3px solid #f1f1f1;\r\n}\r\n.sub-nav a{\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: white;\r\n  font-size: 16px;\r\n      padding: 5px 15px;\r\n      border-radius: 0px;\r\n      position: relative;\r\n    top: 7px;\r\n}\r\n.white-line{\r\n      height: 2px;\r\n    background-color: white;\r\n    margin: 0;\r\n    position: relative;\r\n    top: 4px;\r\n}\r\n.chosen{\r\n    font-weight: bold;\r\n    border-bottom: 3px solid #223460;\r\n    z-index: 1;\r\n    color: #223460 !important;\r\n    \r\n}\r\n#all-quizzes{\r\n\twidth: 100%;\r\n\tpadding: 9px 20px;\r\n\tborder-bottom: 1px solid #c8c8c8;\r\n}\r\n#all-quizzes button{\r\n  float: right;\r\n  margin-right: 7%;\r\n}\r\n#all-quizzes figure, #all-quizzes p{\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n#all-quizzes figure img{\r\n\twidth: 85%;\r\n}\r\n#all-quizzes p{\r\n\tfont-size: 120%;\r\n  position: relative;\r\n  top: 5px;\r\n}\r\n.green{\r\n  color: #5cb85c;\r\n}\r\n.title{\r\n  text-align: left;\r\n  padding-left: 20px;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\nth {\r\n    text-align: center;\r\n    padding: 5px 21px;\r\n    background-color: #f1f1f1;\r\n    color: #48a5ea;\r\n}\r\ntd {\r\n    text-align: center;\r\n    padding: 14px 0px;\r\n    color: #223460;\r\n    border-bottom: 1px solid #c8c8c8;\r\n}\r\ntr:hover{\r\n  background-color: #add7f5;\r\n}\r\n.preview , .type{\r\n\tcursor: pointer;\r\n}\r\n\r\n.checkbox-area figure span {\r\n    color: #48a5ea;\r\n    cursor: pointer;\r\n}\r\ntr:hover .option-h{\r\n  display : block;\r\n}\r\n.option-h{\r\n  display: none;\r\n}\r\n.option-h a{\r\n  text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 171,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 171,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 186,
	"./de-at": 184,
	"./de-at.js": 184,
	"./de-ch": 185,
	"./de-ch.js": 185,
	"./de.js": 186,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-au": 189,
	"./en-au.js": 189,
	"./en-ca": 190,
	"./en-ca.js": 190,
	"./en-gb": 191,
	"./en-gb.js": 191,
	"./en-ie": 192,
	"./en-ie.js": 192,
	"./en-nz": 193,
	"./en-nz.js": 193,
	"./eo": 194,
	"./eo.js": 194,
	"./es": 196,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es.js": 196,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 204,
	"./fr-ca": 202,
	"./fr-ca.js": 202,
	"./fr-ch": 203,
	"./fr-ch.js": 203,
	"./fr.js": 204,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./he": 209,
	"./he.js": 209,
	"./hi": 210,
	"./hi.js": 210,
	"./hr": 211,
	"./hr.js": 211,
	"./hu": 212,
	"./hu.js": 212,
	"./hy-am": 213,
	"./hy-am.js": 213,
	"./id": 214,
	"./id.js": 214,
	"./is": 215,
	"./is.js": 215,
	"./it": 216,
	"./it.js": 216,
	"./ja": 217,
	"./ja.js": 217,
	"./jv": 218,
	"./jv.js": 218,
	"./ka": 219,
	"./ka.js": 219,
	"./kk": 220,
	"./kk.js": 220,
	"./km": 221,
	"./km.js": 221,
	"./kn": 222,
	"./kn.js": 222,
	"./ko": 223,
	"./ko.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mr": 233,
	"./mr.js": 233,
	"./ms": 235,
	"./ms-my": 234,
	"./ms-my.js": 234,
	"./ms.js": 235,
	"./my": 236,
	"./my.js": 236,
	"./nb": 237,
	"./nb.js": 237,
	"./ne": 238,
	"./ne.js": 238,
	"./nl": 240,
	"./nl-be": 239,
	"./nl-be.js": 239,
	"./nl.js": 240,
	"./nn": 241,
	"./nn.js": 241,
	"./pa-in": 242,
	"./pa-in.js": 242,
	"./pl": 243,
	"./pl.js": 243,
	"./pt": 245,
	"./pt-br": 244,
	"./pt-br.js": 244,
	"./pt.js": 245,
	"./ro": 246,
	"./ro.js": 246,
	"./ru": 247,
	"./ru.js": 247,
	"./sd": 248,
	"./sd.js": 248,
	"./se": 249,
	"./se.js": 249,
	"./si": 250,
	"./si.js": 250,
	"./sk": 251,
	"./sk.js": 251,
	"./sl": 252,
	"./sl.js": 252,
	"./sq": 253,
	"./sq.js": 253,
	"./sr": 255,
	"./sr-cyrl": 254,
	"./sr-cyrl.js": 254,
	"./sr.js": 255,
	"./ss": 256,
	"./ss.js": 256,
	"./sv": 257,
	"./sv.js": 257,
	"./sw": 258,
	"./sw.js": 258,
	"./ta": 259,
	"./ta.js": 259,
	"./te": 260,
	"./te.js": 260,
	"./tet": 261,
	"./tet.js": 261,
	"./th": 262,
	"./th.js": 262,
	"./tl-ph": 263,
	"./tl-ph.js": 263,
	"./tlh": 264,
	"./tlh.js": 264,
	"./tr": 265,
	"./tr.js": 265,
	"./tzl": 266,
	"./tzl.js": 266,
	"./tzm": 268,
	"./tzm-latn": 267,
	"./tzm-latn.js": 267,
	"./tzm.js": 268,
	"./uk": 269,
	"./uk.js": 269,
	"./ur": 270,
	"./ur.js": 270,
	"./uz": 272,
	"./uz-latn": 271,
	"./uz-latn.js": 271,
	"./uz.js": 272,
	"./vi": 273,
	"./vi.js": 273,
	"./x-pseudo": 274,
	"./x-pseudo.js": 274,
	"./yo": 275,
	"./yo.js": 275,
	"./zh-cn": 276,
	"./zh-cn.js": 276,
	"./zh-hk": 277,
	"./zh-hk.js": 277,
	"./zh-tw": 278,
	"./zh-tw.js": 278
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 469;


/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<div class=\"common-success\">\r\n    <img src='../../assets/images/success.png'>\r\n    <h3>{{msg}}</h3>\r\n</div>\r\n<div *ngIf=\"isPassReset\" >\r\n        <a (click)=\"forgetPassword()\")>Click here to login</a>\r\n</div>"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<section id=\"main\">\r\n\t\t<div id=\"questionnarie-section\">\r\n\t\t\t<div>\r\n\t\t\t\t<figure>\r\n\t\t\t\t<img src=\"../../assets/images/ques-icons.png\" usemap=\"#html\"/>\r\n\t\t\t\t\t<map name=\"html\">\r\n\t\t\t\t\t<!-- Create Questionnarie -->\r\n\t\t\t\t\t<area shape=\"rect\" \r\n\t\t\t\t\tcoords=\"30,501,155,322\" alt=\"create questionnarie\" href=\"#/qnr/new\" target=\"_self\" />\r\n\t\t\t\t\t<!-- Manage Questionnarie -->\r\n\t\t\t\t\t<area shape=\"rect\" \r\n\t\t\t\t\tcoords=\"265,414,385,234\" alt=\"create questionnarie\" href=\"#/qnr/manage\" target=\"_self\" />\r\n\t\t\t\t\t<!-- Manage Exams -->\r\n\t\t\t\t\t<area shape=\"rect\" \r\n\t\t\t\t\tcoords=\"492,110,608,277\" alt=\"create questionnarie\" href=\"#\" target=\"_self\" />\r\n\t\t\t\t\t<!-- Manage Students -->\r\n\t\t\t\t\t<area shape=\"rect\" \r\n\t\t\t\t\tcoords=\"710,236,829,410\" alt=\"create questionnarie\" href=\"#\" target=\"_self\" />\r\n\t\t\t\t\t<!-- Manage Reports -->\r\n\t\t\t\t\t<area shape=\"rect\" \r\n\t\t\t\t\tcoords=\"931,322,1055,502\" alt=\"create questionnarie\" href=\"#\" target=\"_self\" />\r\n\t\t\t\t\t</map>\r\n\t\t\t\t</figure>\r\n\t\t\t</div>\r\n\t\t\t<!--<div id=\"questionnarie-icons\">\r\n\t\t\t\t<div class=\"rectangle\" id=\"rectangle-1\" (click)=\"sendToCreateQuestionnairePage()\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/create-quest.png\">\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t\t<p>Create <br>Questionnarie</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"rectangle-1\" id=\"rectangle-2\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/manage-quest.png\">\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t\t<p>Manage <br>Questionnarie</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"rectangle-2\" id=\"rectangle-3\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/manage-exams.png\">\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t\t<p>Manage <br>Exams</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"rectangle-1\" id=\"rectangle-4\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/manage-students.png\">\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t\t<p>Manage <br>Students</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"rectangle\" id=\"rectangle-5\">\r\n\t\t\t\t\t<figure>\r\n\t\t\t\t\t\t<img src=\"../../assets/images/manage-report.png\">\r\n\t\t\t\t\t</figure>\r\n\t\t\t\t\t<p>Manage <br>Reports</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>-->\r\n\t\t\t<div id=\"questionnarie-desc\">\r\n\t\t\t\t<figure>\r\n\t\t\t\t\t<img src=\"../../assets/images/arrow.png\" style=\"width: 7%;\">\r\n\t\t\t\t</figure>\r\n\t\t\t\t<p>Get started by selecting a product</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<span>this is home page component</span>"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #forgetPassword=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<img src=\"../../assets/images/logo.png\"/>\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"forgetPassword.hide()\">&times;</button>\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div id=\"locker-img\"><img src=\"../../assets/images/locker.gif\"/></div>\r\n\t\t\t\t<div id=\"forget-h\">\r\n\t\t\t\t\t<h3>Forget your password.</h3>\r\n\t\t\t\t\t<p>No need to worry, Enter registered email Id to Reset password.</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t\t<form #forgetpwdForm=\"ngForm\">\r\n\t\t\t\t\t\t\t<div class=\"input-control\" id=\"forget-input\">\r\n\t\t\t\t\t\t\t\t<input type=\"email\" placeholder=\"Email Address\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"emailId\" id=\"emailId\" (click)=\"formErrors.forgtPass=''\"\r\n\t\t\t\t\t\t\t\t [(ngModel)]=\"forgetPasswordEmailId\" required />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"formErrors.forgtPass\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.forgtPass}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button (click)=\"resetPassword()\" id=\"forget-button\" name=\"resetPwd\" [disabled]=\"!forgetpwdForm.form.valid\">Reset password</button>\r\n\t\t\t\t\t\t\t<!--<button (click)=\"forgetPassword.hide()\" name=\"cancel\" >Cancel</button>-->\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"form-container\">\r\n\t\t<div class=\"form\">\r\n\t\t\t<div *ngFor=\"let alert of errorMsgs\">\r\n  <alert type=\"success\" dismissible=\"true\">{{ alert }}</alert>\r\n</div>\r\n\t\t\t<h2>Sign in to your account </h2>\r\n\t\t\t<form #loginForm=\"ngForm\">\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Client Code\" id=\"clientCode\" name=\"clientCode\" [(ngModel)]=\"loginData.clientCode\" required\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.clientCode\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.clientCode}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"User Name\" id=\"userName\" name=\"userName\" pattern=\"^[A-Za-z0-9_]{1,}$\" [(ngModel)]=\"loginData.userName\" required/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.userName\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.userName}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" id=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" required/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.password\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.password}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button (click)=\"login()\" name=\"login\" [disabled]=\"!loginForm.form.valid || loginButtonText==='logging in...'\">{{loginButtonText}}</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div><button (click)=\"showForgetPassModel()\" class=\"forget\">Forgot your password?</button></div>\r\n\t\t<!-- <div class=\"forgot-link\"><a (click)=\"forgetPassword()\")>Forgot your password?</a></div> -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"form-container\">\r\n\t\t<div class=\"form\">\r\n\t\t\t<div *ngFor=\"let alert of errorMsgs\">\r\n  <alert type=\"success\" dismissible=\"true\">{{ alert }}</alert>\r\n</div>\r\n\t\t\t<h2>Create an account</h2>\r\n\t\t\t<form #signupForm=\"ngForm\">\r\n\t\t\t\t<div class=\"radio-button\">\r\n\t\t\t\t\t<input type=\"radio\" id=\"individual\" name=\"radio1\" [(ngModel)]=\"signupData.isOrg\" [value]=false>\r\n\t\t\t\t\t<label for=\"radio1\">Individual</label>\r\n\r\n\t\t\t\t\t<input type=\"radio\" id=\"company\" name=\"radio1\" [(ngModel)]=\"signupData.isOrg\" [value]=true>\r\n\t\t\t\t\t<label for=\"radio1\">Company</label>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"signupData.isOrg\" [@myAnimation]=\"signupData.isOrg\">\r\n\t\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Organisation Name\" name=\"orgName\" id=\"orgName\" [(ngModel)]=\"signupData.orgName\" required/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"formErrors.orgName\" class=\"icon-control\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.orgName}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Full Name\" name=\"cnctName\" id=\"cnctName\" pattern=\"[a-zA-Z'-.\\s]+\" [(ngModel)]=\"signupData.cnctName\" required />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.cnctName\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.cnctName}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"email\" placeholder=\"Email Address\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" name=\"emailId\" id=\"emailId\"\r\n\t\t\t\t\t\t [(ngModel)]=\"signupData.emailId\" required />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.emailId\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.emailId}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"tel\" placeholder=\"Contact No\" pattern=\"[1-9]{1}[0-9]{9}\" name=\"cnctNo\" id=\"cnctNo\" [(ngModel)]=\"signupData.cnctNo\"\r\n\t\t\t\t\t\t required />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.cnctNo\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.cnctNo}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>-->\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"User Name\" name=\"userName\" id=\"userName\" pattern=\"^[A-Za-z0-9_]{1,}$\" [(ngModel)]=\"signupData.userName\" required />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.userName\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.userName}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[!#\\$%&\\?])^\\D.{7,}\" name=\"password\" id=\"password\" [(ngModel)]=\"signupData.password\"\r\n\t\t\t\t\t\t required validateEqual=\"confirmpassword\" reverse=\"true\" />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.password\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.password}}\" triggers=\"mouseenter:mouseleave\" placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<input type=\"password\" placeholder=\"Confirm Password\" name=\"confirmpassword\" id=\"confirmpassword\" [(ngModel)]=\"confirmpassword\"\r\n\t\t\t\t\t\t  validateEqual=\"password\" required/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"formErrors.confirmpassword\" class=\"icon-control\">\r\n\t\t\t\t\t\t<img src=\"../../assets/images/error-icon.png\" popover=\"{{formErrors.confirmpassword}}\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t placement=\"left\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"row-group\">\r\n\t\t\t\t\t<div class=\"input-control\">\r\n\t\t\t\t\t\t<div class=\"g-recaptcha\" data-sitekey=\"6LcNACQUAAAAAFHVcb31cws_CZyTjhO_u-MFGtog\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\r\n\t\t\t\t<button (click)=\"signup()\" name=\"register\" [disabled]=\"!signupForm.form.valid || registerButtonText==='please wait while registering...'\">{{registerButtonText}}</button>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<section id=\"ques-body\">\r\n    <div id=\"ques-filter\">\r\n        <div id=\"filters-p\">\r\n            <div>\r\n                <p>Filters </p>\r\n                <button type=\"button\" id=\"filter-btn\" class=\"btn btn-info\" (click)=\"getFiltteredQuestions()\">Apply Filter</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Title</p>\r\n            <div id=\"type-ahead\">\r\n                <input type=\"text\" class=\"form-control title-input\" name=\"title\" [(ngModel)]=\"titleSelected\"> \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Difficulty level</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isDifficultyCollapsed}\" (click)=\"isDifficultyCollapsed = !isDifficultyCollapsed\"></span></figure>\r\n            <div [collapse]=\"isDifficultyCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\" *ngFor=\"let difficulty of difficulties; let i = index\">\r\n                    <input type=\"checkbox\" id=\"difficulty{{i+1}}\" name=\"difficulty{{i+1}}\" [(ngModel)]=\"difficulty.isSelected\" />\r\n                    <label for=\"difficulty{{i+1}}\">{{difficulty.value}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Question Type</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isQuestionCollapsed}\" (click)=\"isQuestionCollapsed = !isQuestionCollapsed\"></span></figure>\r\n            <div [collapse]=\"isQuestionCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\" *ngFor=\"let quesType of questionTypes; let i = index\">\r\n                    <input type=\"checkbox\" id=\"quesType{{i+1}}\" name=\"quesType{{i+1}}\" [(ngModel)]=\"quesType.isSelected\" />\r\n                    <label for=\"quesType{{i+1}}\">{{quesType.value}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Section</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isSectionCollapsed}\" (click)=\"isSectionCollapsed = !isSectionCollapsed\"></span></figure>\r\n            <div [collapse]=\"isSectionCollapsed\" class=\"card card-block card-header\">\r\n                <div class=\"boxes\">\r\n                    <div id=\"type-ahead\">\r\n                        <input [(ngModel)]=\"customSectionSelected\" [typeahead]=\"sections\" typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"markSectionSelected(customSectionSelected)\"\r\n                            class=\"form-control\">\r\n                    </div>\r\n\r\n                    <div class=\"boxes\" *ngFor=\"let section of sections; let i = index\">\r\n                        <input type=\"checkbox\" id=\"section{{i+1}}\" name=\"section{{i+1}}\" [(ngModel)]=\"section.isSelected\" />\r\n                        <label for=\"section{{i+1}}\">{{section.value}}</label>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Tagging</p>\r\n\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isCategoryCollapsed}\" (click)=\"isCategoryCollapsed = !isCategoryCollapsed\"></span></figure>\r\n            <div [collapse]=\"isCategoryCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\">\r\n                    <div id=\"type-ahead\">\r\n                        <input [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"markCategorySelected(customCategorySelected)\"\r\n                            class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"boxes\" *ngFor=\"let category of categories; let i = index\">\r\n                        <input type=\"checkbox\" id=\"category{{i+1}}\" name=\"category{{i+1}}\" [(ngModel)]=\"category.isSelected\" />\r\n                        <label for=\"category{{i+1}}\">{{category.value}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div id=\"ques-area\">\r\n        <nav class=\"sub-nav\">\r\n\t\t\t<a href=\"#/qnr/manage\">Manage Questionnarie</a>\r\n\t\t\t<a class=\"chosen\" href=\"#/ques/manage\">Manage Question</a>\r\n\t\t\t<hr class=\"white-line\">\r\n\t\t</nav>\r\n        <div id=\"all-quizzes\">\r\n            <figure>\r\n                <img src=\"../../assets/images/folder.png\" alt=\"Folder image\">\r\n            </figure>\r\n            <p>All Questions</p>\r\n            <button type=\"button\" class=\"btn btn-info\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-pencil\"></span> Create a Question\r\n   \t\t\t</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"createQnrFromQuestions()\">\r\n      \t\t\t<span class=\"glyphicon glyphicon-paste\"></span> Create a Questionnarie\r\n   \t\t\t</button>\r\n        </div>\r\n        <div>\r\n            <table>\r\n                <tr>\r\n                    <th>Title</th>\r\n                    <th>Type</th>\r\n                    <th>Preview</th>\r\n                    <th>Select</th>\r\n                    <th>Difficulty</th>\r\n                </tr>\r\n                <tr *ngFor=\"let question of questions; let i = index\">\r\n                    <td>{{question.questionDesc}}\r\n                        <div *ngIf=\"question.isImported\" class=\"importedQues\" popover=\"This question is already imported.\" triggers=\"mouseenter:mouseleave\"\r\n                            placement=\"top\"></div>\r\n                    </td>\r\n                    <td>\r\n                        <figure class=\"type\"><img [src]=\"getIconBasedOnQuesType(question.questionType)\" style=\"width:30%; height:auto;\"></figure>\r\n                    </td>\r\n                    <td>\r\n                        <figure class=\"preview\"><img src=\"../../assets/images/imp-preview.png\" (click)=\"showQuesPreviewModel(question)\"></figure>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"boxes\">\r\n                            <div class=\"box-margin\">\r\n                                <input type=\"checkbox\" id=\"category{{i+1}}\" name=\"category{{i+1}}\" [(ngModel)]=\"question.selectForQnr\"/>\r\n                                <label for=\"category{{i+1}}\"></label>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </td>\r\n                    <td>\r\n                        <div [ngClass]=\"{ 'medium-difficulty': question.difficulty === 'Medium', 'easy-difficulty': question.difficulty === 'Easy', 'hard-difficulty': question.difficulty === 'Hard'}\"\r\n                            popover=\"{{question.difficulty}}\" triggers=\"mouseenter:mouseleave\" placement=\"top\"></div>\r\n                    </td>\r\n\r\n                    <!-- preview modal part starts-->\r\n                    <div class=\"modal fade\" bsModal #questionPreview=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n                        aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog modal-md\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"close\" (click)=\"questionPreview.hide()\">&times;</button>\r\n                                    <h4 class=\"modal-title\">Question preview</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"group\">\r\n                                        <input type=\"textarea\" placeholder=\"Question\" name=\"trueFalse\" [(ngModel)]=\"questionModal.questionDesc\" disabled>\r\n                                    </div>\r\n                                    <div *ngFor=\"let option of questionModal.answer; let i = index\" class=\"group group-1\">\r\n                                        <input type=\"text\" placeholder=\"True\" name=\"answer{{i+1}}\" disabled [(ngModel)]=\"option.description\" />\r\n                                        <div class=\"options\">\r\n                                            <label title=\"\">\r\n\t\t\t\t\t\t\t\t\t        <input type=\"checkbox\" class=\"option-input radio\" name=\"option{{i+1}}\" (click)=\"selectOnlyOneOption(i)\" [(ngModel)]=\"option.isCorrect\" disabled/>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t            \t\t\t</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"questionPreview.hide()\">Close</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--preview modal part end-->\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"col-md-10\">\r\n            <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\r\n                [rotate]=\"false\" (numPages)=\"numPages = $event\" itemsPerPage=\"{{itemsPerPage}}\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n</section>"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<section id=\"ques-body\">\r\n    <div id=\"ques-filter\">\r\n        <div id=\"filters-p\">\r\n            <div>\r\n                <p>Filters</p>\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"getFiltteredQuestions()\">Apply Filter</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Title</p>\r\n            <div id=\"type-ahead\">\r\n                <input type=\"text\" class=\"form-control title-input\" name=\"title\" [(ngModel)]=\"titleSelected\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Difficulty level</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isDifficultyCollapsed}\" (click)=\"isDifficultyCollapsed = !isDifficultyCollapsed\"></span></figure>\r\n            <div [collapse]=\"isDifficultyCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\" *ngFor=\"let difficulty of difficulties; let i = index\">\r\n                    <input type=\"checkbox\" id=\"difficulty{{i+1}}\" name=\"difficulty{{i+1}}\" [(ngModel)]=\"difficulty.isSelected\" />\r\n                    <label for=\"difficulty{{i+1}}\">{{difficulty.value}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Question Type</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isQuestionCollapsed}\" (click)=\"isQuestionCollapsed = !isQuestionCollapsed\"></span></figure>\r\n            <div [collapse]=\"isQuestionCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\" *ngFor=\"let quesType of questionTypes; let i = index\">\r\n                    <input type=\"checkbox\" id=\"quesType{{i+1}}\" name=\"quesType{{i+1}}\" [(ngModel)]=\"quesType.isSelected\" />\r\n                    <label for=\"quesType{{i+1}}\">{{quesType.value}}</label>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Section</p>\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isSectionCollapsed}\" (click)=\"isSectionCollapsed = !isSectionCollapsed\"></span></figure>\r\n            <div [collapse]=\"isSectionCollapsed\" class=\"card card-block card-header\">\r\n                <div class=\"boxes\">\r\n                    <div id=\"type-ahead\">\r\n                        <input [(ngModel)]=\"customSectionSelected\" [typeahead]=\"sections\" typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"markSectionSelected(customSectionSelected)\"\r\n                            class=\"form-control\">\r\n                    </div>\r\n\r\n                    <div class=\"boxes\" *ngFor=\"let section of sections; let i = index\">\r\n                        <input type=\"checkbox\" id=\"section{{i+1}}\" name=\"section{{i+1}}\" [(ngModel)]=\"section.isSelected\" />\r\n                        <label for=\"section{{i+1}}\">{{section.value}}</label>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"checkbox-area\">\r\n            <p class=\"heading-p\">-Tagging</p>\r\n\r\n            <figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isCategoryCollapsed}\" (click)=\"isCategoryCollapsed = !isCategoryCollapsed\"></span></figure>\r\n            <div [collapse]=\"isCategoryCollapsed\" class=\"card card-block card-header\">\r\n\r\n                <div class=\"boxes\">\r\n                    <div id=\"type-ahead\">\r\n                        <input [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"markCategorySelected(customCategorySelected)\"\r\n                            class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"boxes\" *ngFor=\"let category of categories; let i = index\">\r\n                        <input type=\"checkbox\" id=\"category{{i+1}}\" name=\"category{{i+1}}\" [(ngModel)]=\"category.isSelected\" />\r\n                        <label for=\"category{{i+1}}\">{{category.value}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div id=\"ques-area\">\r\n        <div id=\"all-quizzes\">\r\n            <figure>\r\n                <img src=\"../../assets/images/folder.png\" alt=\"Folder image\">\r\n            </figure>\r\n            <p>All Quizzes</p>\r\n        </div>\r\n        <div>\r\n            <table>\r\n                <tr>\r\n                    <th>Title</th>\r\n                    <th>Type</th>\r\n                    <th>Preview</th>\r\n                    <th>Select</th>\r\n                    <th>Difficulty</th>\r\n                </tr>\r\n                <tr *ngFor=\"let question of questions; let i = index\">\r\n                    <td>{{question.questionDesc}}\r\n                        <div *ngIf=\"question.isImported\" class=\"importedQues\" popover=\"This question is already imported.\" triggers=\"mouseenter:mouseleave\"\r\n                            placement=\"top\"></div>\r\n                    </td>\r\n                    <td>\r\n                        <figure class=\"type\"><img [src]=\"getIconBasedOnQuesType(question.questionType)\" style=\"width:30%; height:auto;\"></figure>\r\n                    </td>\r\n                    <td>\r\n                        <figure class=\"preview\"><img src=\"../../assets/images/imp-preview.png\" (click)=\"showQuesPreviewModel(question)\"></figure>\r\n                    </td>\r\n                    <td>\r\n                        <div class=\"boxes\">\r\n                            <div class=\"box-margin\">\r\n                                <input type=\"checkbox\" id=\"category{{i+1}}\" name=\"category{{i+1}}\" [(ngModel)]=\"question.selectForImport\" [disabled]=\"question.isImported\"\r\n                                />\r\n                                <label for=\"category{{i+1}}\"></label>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </td>\r\n                    <td>\r\n                        <div [ngClass]=\"{ 'medium-difficulty': question.difficulty === 'Medium', 'easy-difficulty': question.difficulty === 'Easy', 'hard-difficulty': question.difficulty === 'Hard'}\"\r\n                            popover=\"{{question.difficulty}}\" triggers=\"mouseenter:mouseleave\" placement=\"top\"></div>\r\n                    </td>\r\n\r\n                    <!-- preview modal part starts-->\r\n                    <div class=\"modal fade\" bsModal #questionPreview=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n                        aria-hidden=\"true\">\r\n                        <div class=\"modal-dialog modal-md\">\r\n                            <div class=\"modal-content\">\r\n                                <div class=\"modal-header\">\r\n                                    <button type=\"button\" class=\"close\" (click)=\"questionPreview.hide()\">&times;</button>\r\n                                    <h4 class=\"modal-title\">Question preview</h4>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"group\">\r\n                                        <input type=\"textarea\" placeholder=\"Question\" name=\"trueFalse\" [(ngModel)]=\"questionModal.questionDesc\" disabled>\r\n                                    </div>\r\n                                    <div *ngFor=\"let option of questionModal.answer; let i = index\" class=\"group group-1\">\r\n                                        <input type=\"text\" placeholder=\"True\" name=\"answer{{i+1}}\" disabled [(ngModel)]=\"option.description\" />\r\n                                        <div class=\"options\">\r\n                                            <label title=\"\">\r\n\t\t\t\t\t\t\t\t\t        <input type=\"checkbox\" class=\"option-input radio\" name=\"option{{i+1}}\" (click)=\"selectOnlyOneOption(i)\" [(ngModel)]=\"option.isCorrect\" disabled/>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t            \t\t\t</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-info\" (click)=\"questionPreview.hide()\">Close</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--preview modal part end-->\r\n                </tr>\r\n\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"col-md-10\">\r\n            <pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\r\n                [rotate]=\"false\" (numPages)=\"numPages = $event\" itemsPerPage=\"{{itemsPerPage}}\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n\r\n        </div>\r\n        <div class=\"col-md-2\" id=\"import-button\"><button type=\"button\" class=\"btn btn-info\" (click)=\"importQuestions()\">Import</button></div>\r\n    </div>\r\n\r\n\r\n\r\n</section>"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<body>\r\n    <section id=\"main\">\r\n\r\n        <div id=\"ques-dashboard\">\r\n            <div id=\"dasboard-menu\">\r\n\r\n                <figure>\r\n                    <!-- <div class=\"timerBackground\"> -->\r\n                    <div class=\"innerCircle\">\r\n                        <p id=\"time\">Time</p>\r\n                    </div>\r\n                    <div class=\"seconds\">\r\n                        <div class=\"hand small\"></div>\r\n                    </div>\r\n                    <div class=\"minutes\">\r\n                        <div class=\"hand-1 medium\"></div>\r\n                    </div>\r\n  \r\n                </figure>\r\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"startExam()\">Start Exam</button>\r\n                <div id=\"questions\">\r\n                    <p>Quick Access</p>\r\n                </div>\r\n\r\n                <div id=\"questions-row\" *ngFor=\"let main of mainArray; let ind = index\">\r\n                    <div class=\"circle\" [ngClass]=\"{ 'active': inner == currentQuesNo, 'markforReview': questions[inner-1].questionStatus ==='M', 'quesSelected': (questions[inner-1].questionStatus ==='A')}\"\r\n                        *ngFor=\"let inner of main; let innrInd = index\" (click)=\"selectQuestion(inner)\">\r\n                        <p>{{inner}}</p>\r\n                    </div>\r\n\r\n                </div>\r\n                <hr id=\"hr-questions\">\r\n            </div>\r\n            <div id=\"question-area\">\r\n                <!--    <div id=\"quiz-title\">\r\n                    <p>Quiz Name</p>\r\n                    <img src=\"../../assets/images/question-layout-pattern.png\">\r\n                </div>-->\r\n                <div id=\"question-bar\">\r\n                    <p>Question {{currentQuesNo}} of {{questions.length}}</p>\r\n                </div>\r\n                <div id=\"current-ques\">\r\n                    <div *ngIf=\"!currentQuestion.imageURL\">\r\n                        <div id=\"question-image\">\r\n\r\n                        </div>\r\n                        <div id=\"question-part-simple\">\r\n                            <p>{{currentQuestion.questionDesc}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"currentQuestion.imageURL\">\r\n                        <div id=\"question-image\">\r\n                            <img src=\"{{currentQuestion.imagePath}}\">\r\n\r\n                        </div>\r\n                        <div id=\"question-part\">\r\n                            <p>{{currentQuestion.questionDesc}}</p>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"select-following\">\r\n                        <p>Select one of the following:</p>\r\n                    </div>\r\n                    <div *ngIf=\"!currentQuestion.imageAnsView\">\r\n                        <ul class=\"answer-list\">\r\n                            <li class=\"quiz-answer\" *ngFor=\"let answer of currentQuestion.answer; let i = index\">\r\n                                <div class=\"question-performe-answer\">\r\n                                    <input type=\"checkbox\" name=\"answer\" class=\"answer-checkbox\" value=\"1\">\r\n                                </div>\r\n                                <div class=\"answer-content btn\" [ngClass]=\"{'ansSelected': answer.isSelected}\" (click)=\"attmptedQuestion(i)\">\r\n                                    <p>{{answer.description}}</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div *ngIf=\"currentQuestion.imageAnsView\">\r\n                        <ul *ngFor=\"let innerAnsList of MainOptionArray\" class=\"image-answer-list\">\r\n                            <li *ngFor=\"let ans of innerAnsList\" class=\"image-quiz-answer\">\r\n                                <div class=\"image-question-performe-answer\">\r\n                                    <input type=\"checkbox\" name=\"answer\" class=\"image-answer-checkbox\" value=\"1\">\r\n                                </div>\r\n                                <div class=\"image-answer-content btn selected\">\r\n                                    <div class=\"image-type-question\">\r\n                                        <img src=\"{{ans.imagePath}}\">\r\n                                    </div>\r\n                                    <div class=\"question-options\">\r\n                                        <p>{{ans.description}}</p>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div id=\"quiz-action-button\">\r\n                    <button type=\"button\" class=\"btn btn-info\" [disabled]=\"currentIndex==0\" (click)=\"moveToPreviousQuestion()\">Previous</button>\r\n                    <button *ngIf=\"currentQuestion.questionStatus!=='M'\" type=\"button\" class=\"btn btn-warning\" (click)=\"markForReview()\">Mark for Review</button>\r\n                    <button *ngIf=\"currentQuestion.questionStatus==='M'\" type=\"button\" class=\"btn btn-primary\" (click)=\"unmarkForReview()\">Unmark for Review</button>\r\n                    <button type=\"button\" class=\"btn btn-info\" (click)=\"moveToNextQuestion()\" [disabled]=\"currentQuesNo == questions.length\">Next</button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </section>\r\n</body>"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #uploadImage=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"uploadImage.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Upload and Choose Image</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n\t\t\t\t\t\t class=\"well my-drop-zone\" (click)=\"showManualFileUploader()\">\r\n\t\t\t\t\t\t\t<input id=\"fileuploadInput\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\r\n\t\t\t\t\t\t\t<div class=\"upload-icon\"><img src=\"../../assets/images/upload-icon.png\" /></div>\r\n\t\t\t\t\t\t\t<span class=\"drag-drop\"> Drag and drop files here or click to upload.</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"progress-btn\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p class=\"color-p\">Queue progress:</p>\r\n\t\t\t\t\t\t\t\t<div class=\"progress\" style=\"\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                    \t\t\t<span class=\"glyphicon glyphicon-upload\"></span> Upload all\r\n                \t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                   \t\t\t\t<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\r\n                \t\t\t</button>\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n                    \t\t\t<span class=\"glyphicon glyphicon-trash\"></span> Remove all\r\n               \t\t \t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-6\" style=\"margin-bottom: 10px\">\r\n\r\n\t\t\t\t\t\t<h3 class=\"remove-margin color-p\">Upload Queue</h3>\r\n\t\t\t\t\t\t<p style=\"color:#5cb85c;\">Queue length: {{ uploader?.queue?.length }}</p>\r\n\t\t\t\t\t\t<div class=\"upload-table\">\r\n\t\t\t\t\t\t\t<table class=\"table\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th width=\"50%\">Name</th>\r\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Status</th>\r\n\t\t\t\t\t\t\t\t\t\t<th width=\"25%\">Actions</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of uploader.queue\">\r\n\t\t\t\t\t\t\t\t\t\t<td><strong>{{ item?.file?.name }}</strong></td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td nowrap>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            <span class=\"glyphicon glyphicon-upload\" ></span>  </button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span>\r\n                        </button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">\r\n                            <span class=\"glyphicon glyphicon-trash\"></span>                         </button>\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<span class=\"color-p\">Click the image to select.</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<span class=\"color-p show-all\">Show All</span>\r\n\t\t\t\t\t\t<div class=\"tggl-wrap\">\r\n\t\t\t\t\t\t\t<input class='tggl-input' id='btn-5' type='checkbox' name=\"showAll\" (click)=\"showAll = !showAll; getClientImages() \">\r\n\t\t\t\t\t\t\t<label class='tggl-btn txtswitch ying' for='btn-5'>\r\n      \t\t\t\t\t\t<span class=\"on\">ON</span><span class=\"off\">OFF</span>\r\n   \t \t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row preview-area\">\r\n\t\t\t\t\t<div *ngFor=\"let imagesList of imageCollection\">\r\n\t\t\t\t\t\t<div *ngFor=\"let image of imagesList\" class=\"image-preview-container\">\r\n\t\t\t\t\t\t\t<div (click)=\"selectedImg = image.imageName; imageQuesPath = image.imageFullPath; setCurrentImg()\" (onHide)=\"hideUploadModal()\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger glyphicon glyphicon-remove\"></button>\r\n\t\t\t\t\t\t\t\t<div class=\"image-details\"></div>\r\n\t\t\t\t\t\t\t\t<img src={{image.imageFullPath}}>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"uploadImage.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #insertQuestion=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"insertQuestion.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Choose Options</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body insert-btn\">\r\n\t\t\t\t<button class=\"insert-button\">\r\n\t\t     \t    <img src=\"../../assets/images/true-false.png\" (click)=\"createQuestion('TRUE_FALSE');insertQuestion.hide()\" width=\"120\" />\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"insert-button\">\r\n     \t\t\t    <img src=\"../../assets/images/multiple-single.png\" (click)=\"createQuestion('MULTIPLE_CHOICE_SINGLE');insertQuestion.hide()\" width=\"120\" />\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"insert-button\">\r\n     \t\t\t\t<img src=\"../../assets/images/multiple-multi.png\" (click)=\"createQuestion('MULTIPLE_CHOICE_MULTI');insertQuestion.hide()\" width=\"120\" />\r\n\t\t\t\t</button>\r\n\t\t\t\t<button class=\"insert-button\">\r\n     \t\t\t\t<img src=\"../../assets/images/fill-in-the-blank.png\" (click)=\"createQuestion('FILL_IN_THE_BLANK');insertQuestion.hide()\" width=\"120\" />\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"insertQuestion.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #quesLimitModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"quesLimitModal.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\" style=\"text-align: center\">Maximum question limit reached</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body insert-btn\">\r\n<p style=\"color: #38a2e8;font-size: 100%; text-align: center\">You can not add anymore question to this questionnaire</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"quesLimitModal.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #finalizeErrorModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"finalizeErrorModal.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\" style=\"text-align: center\">Finalize is not possible</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body insert-btn\">\r\n<p style=\"color: #38a2e8;font-size: 100%; text-align: center\">Add {{remainQuesToFinalize}} more questions to finalize this questionnaire</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"finalizeErrorModal.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" bsModal #tagging=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"tagging.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Tags</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"input-group tagging-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"New tag name...\" [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\"\r\n\t\t\t\t\t typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"addTagToCurrentQuestion()\" name=\"tagging\">\r\n\r\n\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t<button class=\"btn btn-info add-btn\" type=\"button\" (click)=\"createCategoryMasterData(customCategorySelected)\">Add</button>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"tagName-group\">\r\n\t\t\t\t\t<span class=\"tag-wrap\" *ngFor=\"let category of questionCategories\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger glyphicon glyphicon-remove tag-remove-btn\" (click)=\"removeCategory(category)\"></button>\r\n\t\t\t\t\t\t<p>{{category}}</p>\r\n\t\t\t\t\t</span>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"tagging.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #section=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"section.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Add New Section</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"input-group tagging-group\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"New section name...\" [(ngModel)]=\"customSectionSelected\" [typeahead]=\"sections\"\r\n\t\t\t\t\t typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"addSectionToCurrentQuestion()\" name=\"section\">\r\n\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t<button class=\"btn btn-info add-btn\" type=\"button\" (click)=\"createSectionMasterData(customSectionSelected)\">Add</button>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"section.hide()\">Close</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" bsModal #finalize=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"finalize.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">Finalize</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\" id=\"finalize-body-clr\">\r\n\t\t\t\t<div id=\"finalize-img\"><img src=\"../../assets/images/finalize.gif\" /></div>\r\n\t\t\t\t<h4 class=\"finalize-p\">\r\n\t\t\t\t\tWould you like to create exam right now ?\r\n\t\t\t\t</h4>\r\n\t\t\t\t<div class=\"finalize-btn\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" id=\"y-n-btn\">\r\n      \t\t\t\t\t<span class=\"glyphicon glyphicon-ok\" (click)=\"finalizeQuestionnaire()\"></span> Yes\r\n   \t\t\t\t\t</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" id=\"y-n-btn\" (click)=\"finalize.hide()\">\r\n      \t\t\t\t\t\t<span class=\"glyphicon glyphicon-remove\"></span> No\r\n   \t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #imageModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"imageModal.hide()\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\"><button type=\"button\" class=\"close\">Remove</button></h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\" id=\"finalize-body-clr\">\r\n\t\t\t\t<span class=\"modal-view-img\"><img src=\"{{imageModalPath}}\" width=\"100%\"/></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" bsModal #qnrModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"qnr-modal-margin\">\r\n\t\t\t<div class=\"modal-content modal-insert\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"qnrModal.hide()\">&times;</button>\r\n\t\t\t\t\t<h4 class=\"modal-title\">Questionnaire</h4>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\" id=\"finalize-body-clr\">\r\n\r\n\t\t\t\t\t<div class=\"form-container\">\r\n\t\t\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t\t\t<form #questionnaireSummaryForm=\"ngForm\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Quiz Title \" name=\"quizTitle\" [(ngModel)]=\"questionnaire.desc\" required>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\" class=\"range-p\">Subject</label>\r\n\t\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"subject\" name=\"subject\" [(ngModel)]=\"questionnaire.subject\">\r\n\t\t\t\t\t\t<option *ngFor=\"let subject of subjects\">{{subject.value}}</option>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"range-p\">No. of Questions</p>\r\n\t\t\t\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" name=\"noOfQuestion\" [(ngModel)]=\"questionnaire.noOfQuestion\" min=\"1\" max=\"200\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t value=\"1\" data-thumbwidth=\"20\" required>\r\n\t\t\t\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" name=\"noOfQuestion\" [(ngModel)]=\"questionnaire.noOfQuestion\" min=\"1\" max=\"200\" step=\"1\"\r\n\t\t\t\t\t\t\t\t\t value=\"1\" data-thumbwidth=\"20\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"range-p\">Total Marks</p>\r\n\t\t\t\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" name=\"marks\" [(ngModel)]=\"questionnaire.marks\" min=\"1\" max=\"100\" step=\"1\" value=\"1\" data-thumbwidth=\"20\"\r\n\t\t\t\t\t\t\t\t\t required>\r\n\t\t\t\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" name=\"marks\" [(ngModel)]=\"questionnaire.marks\" min=\"1\" max=\"100\" step=\"1\" value=\"1\" data-thumbwidth=\"20\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"range-control\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"range-p\">Time Duration (min)</p>\r\n\t\t\t\t\t\t\t\t\t<input id=\"inputRange\" type=\"range\" name=\"duration\" [(ngModel)]=\"questionnaire.duration\" min=\"5\" max=\"200\" step=\"5\" value=\"5\"\r\n\t\t\t\t\t\t\t\t\t data-thumbwidth=\"20\" required>\r\n\t\t\t\t\t\t\t\t\t<input id=\"out-range\" type=\"number\" name=\"duration\" [(ngModel)]=\"questionnaire.duration\" min=\"5\" max=\"200\" step=\"5\" value=\"5\"\r\n\t\t\t\t\t\t\t\t\t data-thumbwidth=\"20\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button (click)=\"updateQuestionnaire()\">update</button>\r\n\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<section id=\"main\">\r\n\t<section id=\"ques-body\">\r\n\t\t<nav id=\"ques-nav\">\r\n\t\t\t<ul>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a (click)=\"redirectImportScreen()\"><img src=\"../../assets/images/import-q.png\" alt=\"import icon\"> Import</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a (click)=\"redirectToQuestinnairePreview()\"><img src=\"../../assets/images/preview.png\" alt=\"preview icon\" /> Preview</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a (click)=\"qnrModal.show()\"><img src=\"../../assets/images/settings.png\" alt=\"settings icon\"> Settings</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" id=\"finalize\" (click)=\"showFinalizeModal()\">\r\n      \t\t\t\t\t\t<span class=\"glyphicon glyphicon-paste\"></span> Finalize\r\n   \t\t\t\t\t\t</button>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</nav>\r\n\t\t<div id=\"ques-dashboard\">\r\n\r\n\t\t\t<div id=\"dasboard-menu\">\r\n\t\t\t\t<figure id=\"insert-ques\">\r\n\t\t\t\t\t<div class=\"icon\" (click)=\"showInsertQuestionModal()\">\r\n\t\t\t\t\t\t<div class=\"pulse1\">\r\n\t\t\t\t\t\t\t<div class=\"pulse2\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--<img src=\"../../assets/images/insert-q-icon.png\" class=\"\" (click)=\"insertQuestion.show()\" alt=\"insert question icon\">-->\r\n\t\t\t\t\t<button type=\"button\" class=\"insert-button\" (click)=\"showInsertQuestionModal()\">Insert Question</button>\r\n\t\t\t\t</figure>\r\n\r\n\t\t\t\t<div id=\"ques-lists\">\r\n\t\t\t\t\t<div class=\"scrollbar\" id=\"style-8\">\r\n\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t<tr *ngFor=\"let question of questions; let i = index\" (click)=\"selectCurrentQuestion(question)\" [popover]=\"popTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t placement=\"right\">\r\n\t\t\t\t\t\t\t\t<td>{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t<td><img [src]=\"getIconBasedOnQuesType(question.questionType)\" style=\"width:65%;\" /></td>\r\n\t\t\t\t\t\t\t\t<td>Question Title</td>\r\n\t\t\t\t\t\t\t\t<td><img src=\"../../assets/images/star.png\" style=\"width:60%; height:auto;\" /></td>\r\n\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t<template #popTemplate>\r\n\t\t\t\t\t\t\t\t\t<div><label style=\"color:#223460;font-size: 110%;\"><i>Question: {{question.questionDesc}}</i></label></div>\r\n\t\t\t\t\t\t\t\t\t<div *ngFor=\"let answer of question.answer; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color:#4854ea;\"><i>Option {{i+1}}: {{answer.description}}</i></p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"question-area\">\r\n\t\t\t\t<form #questionnaireForm=\"ngForm\">\r\n\t\t\t\t\t<!-- Multiple choice -->\r\n\t\t\t\t\t<div *ngIf=\"currentQuestion.questionType=='MULTIPLE_CHOICE_SINGLE'\">\r\n\t\t\t\t\t\t<div id=\"ques-title\">\r\n\t\t\t\t\t\t\t<p id=\"quest-p\">Multiple Choice (Single Answer)</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/edit.png\" style=\"width:25px; height:auto;\" /></a>\r\n\t\t\t\t\t\t\t<a (click)=\"deleteQuestion()\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/delete.png\" style=\"width:19px; height:auto;\" /></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"cateory\">\r\n\t\t\t\t\t\t\t<div id=\"tagging\">\r\n\t\t\t\t\t\t\t\t<label for=\"tagging\">Tagging </label>\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"tagging-input\" [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\"\r\n\t\t\t\t\t\t\t\t (typeaheadOnSelect)=\"addTagToCurrentQuestion()\" name=\"tagging\" />\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign\" (click)=\"tagging.show()\" [popover]=\"taggingTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\"></span>\r\n\t\t\t\t\t\t\t\t<template #taggingTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Tags</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Section </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"Section\" [(ngModel)]=\"currentQuestion.section\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let section of sections\" [value]=\"section.key\">{{section.value}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\" (click)=\"section.show()\" [popover]=\"sectionTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<template #sectionTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Section</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Difficulty </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"difficulty\" [(ngModel)]=\"currentQuestion.difficulty\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let difficulty of difficulties\">{{difficulty}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t\t\t<input type=\"textarea\" placeholder=\"Question\" name=\"multiQuesSingleAns\" [(ngModel)]=\"currentQuestion.questionDesc\" required>\r\n\t\t\t\t\t\t\t<span class=\"input-img\" *ngIf=\"!currentQuestion.imageURL\"><img src=\"../../assets/images/input-img.png\" (click)=\"showImageUploader(); setModifyingObj(currentQuestion)\"/></span>\r\n\t\t\t\t\t\t\t<span class=\"view-img\" *ngIf=\"currentQuestion.imageURL\" [popover]=\"popImage\" triggers=\"mouseenter:mouseleave\" placement=\"left\"><img src=\"{{currentQuestion.imagePath}}\"/></span>\r\n\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"currentQuestion.imageURL\" class=\"btn btn-danger glyphicon glyphicon-remove image-remove-ques\"\r\n\t\t\t\t\t\t\t (click)=\"removeImage(currentQuestion)\"></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngFor=\"let option of currentQuestion.answer; let i = index\" class=\"group group-1\">\r\n\t\t\t\t\t\t\t<template #ansPopImage>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-view-img\"><img src=\"{{option.imagePath}}\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Option {{i+1}}\" name=\"answer{{i+1}}\" [(ngModel)]=\"option.description\" required>\r\n\t\t\t\t\t\t\t<span class=\"input-img\" *ngIf=\"!option.imageURL\"><img src=\"../../assets/images/input-img.png\" (click)=\"showImageUploader(); setModifyingObj(option)\"/></span>\r\n\t\t\t\t\t\t\t<span class=\"view-img view-img-span\" *ngIf=\"option.imageURL\" [popover]=\"ansPopImage\" triggers=\"mouseenter:mouseleave\" placement=\"left\"><img src=\"{{option.imagePath}}\"/></span>\r\n\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"option.imageURL\" class=\"btn btn-danger glyphicon glyphicon-remove image-remove-ans\" (click)=\"removeImage(option)\"></button>\r\n\t\t\t\t\t\t\t<div class=\"options\">\r\n\t\t\t\t\t\t\t\t<label>\r\n    \t\t\t\t\t\t\t<input class=\"radio-button-margin\" type=\"checkbox\" class=\"option-input radio\" name=\"option{{i+1}}\" (click)=\"selectOnlyOneOption(i)\" [(ngModel)]=\"option.isCorrect\"/>\r\n  \t\t\t\t\t\t\t\t\t  \t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div *ngIf=\"currentQuestion.questionType=='MULTIPLE_CHOICE_MULTI'\">\r\n\t\t\t\t\t\t<div id=\"ques-title\">\r\n\t\t\t\t\t\t\t<p id=\"quest-p\">Multiple Choice (Multiple Answer)</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/edit.png\" style=\"width:25px; height:auto;\" /></a>\r\n\t\t\t\t\t\t\t<a (click)=\"deleteQuestion()\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/delete.png\" style=\"width:19px; height:auto;\" /></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"cateory\">\r\n\t\t\t\t\t\t\t<div id=\"tagging\">\r\n\t\t\t\t\t\t\t\t<label for=\"tagging\">Tagging </label>\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"tagging-input\" [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\"\r\n\t\t\t\t\t\t\t\t (typeaheadOnSelect)=\"addTagToCurrentQuestion()\" name=\"tagging\" />\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign\" (click)=\"tagging.show()\" [popover]=\"taggingTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\"></span>\r\n\t\t\t\t\t\t\t\t<template #taggingTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Tags</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Section </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"Section\" [(ngModel)]=\"currentQuestion.section\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let section of sections\" [value]=\"section.key\">{{section.value}}</option>\r\n\t\t\t\t\t\t\t\t\t <span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\" (click)=\"section.show()\" [popover]=\"sectionTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<template #sectionTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Section</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Difficulty </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"difficulty\" [(ngModel)]=\"currentQuestion.difficulty\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let difficulty of difficulties\">{{difficulty}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t\t\t<input type=\"textarea\" placeholder=\"Question\" name=\"multiQuesMultiAns\" [(ngModel)]=\"currentQuestion.questionDesc\" required>\r\n\t\t\t\t\t\t\t<span class=\"input-img\" *ngIf=\"!currentQuestion.imageURL\"><img src=\"../../assets/images/input-img.png\" (click)=\"showImageUploader(); setModifyingObj(currentQuestion)\"/></span>\r\n\t\t\t\t\t\t\t<span class=\"view-img\" *ngIf=\"currentQuestion.imageURL\" [popover]=\"popImage\" triggers=\"mouseenter:mouseleave\" placement=\"left\"><img src=\"{{currentQuestion.imagePath}}\"/></span>\r\n\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"currentQuestion.imageURL\" class=\"btn btn-danger glyphicon glyphicon-remove image-remove-ques\"\r\n\t\t\t\t\t\t\t (click)=\"removeImage(currentQuestion)\"></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngFor=\"let option of currentQuestion.answer; let i = index\" class=\"group group-1\">\r\n\t\t\t\t\t\t\t<template #ansPopImage>\r\n\t\t\t\t\t\t\t\t<div class=\"modal-view-img\"><img src=\"{{option.imagePath}}\" />\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Option {{i+1}}\" name=\"answer{{i+1}}\" [(ngModel)]=\"option.description\" required>\r\n\t\t\t\t\t\t\t<span class=\"input-img\" *ngIf=\"!option.imageURL\"><img src=\"../../assets/images/input-img.png\" (click)=\"showImageUploader(); setModifyingObj(option)\"/></span>\r\n\t\t\t\t\t\t\t<span class=\"view-img view-img-span\" *ngIf=\"option.imageURL\" [popover]=\"ansPopImage\" triggers=\"mouseenter:mouseleave\" placement=\"left\"><img src=\"{{option.imagePath}}\"/></span>\r\n\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"option.imageURL\" class=\"btn btn-danger glyphicon glyphicon-remove image-remove-ans\" (click)=\"removeImage(option)\"></button>\r\n\t\t\t\t\t\t\t<div class=\"options\">\r\n\t\t\t\t\t\t\t\t<label title=\"\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"option-input radio\" name=\"option{{i+1}}\" [(ngModel)]=\"option.isCorrect\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- True & False-->\r\n\t\t\t\t\t<div *ngIf=\"currentQuestion.questionType=='TRUE_FALSE'\">\r\n\t\t\t\t\t\t<div id=\"ques-title\">\r\n\t\t\t\t\t\t\t<p id=\"quest-p\">True & False</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/edit.png\" style=\"width:25px; height:auto;\" /></a>\r\n\t\t\t\t\t\t\t<a (click)=\"deleteQuestion()\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/delete.png\" style=\"width:19px; height:auto;\" /></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"cateory\">\r\n\t\t\t\t\t\t\t<div id=\"tagging\">\r\n\t\t\t\t\t\t\t\t<label for=\"tagging\">Tagging </label>\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"tagging-input\" [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\"\r\n\t\t\t\t\t\t\t\t (typeaheadOnSelect)=\"addTagToCurrentQuestion()\" name=\"tagging\" />\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign\" (click)=\"tagging.show()\" [popover]=\"taggingTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\"></span>\r\n\t\t\t\t\t\t\t\t<template #taggingTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Tags</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Section </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"Section\" [(ngModel)]=\"currentQuestion.section\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let section of sections\" [value]=\"section.key\">{{section.value}}</option>\r\n\t\t\t\t\t\t\t\t\t <span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\" (click)=\"section.show()\" [popover]=\"sectionTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<template #sectionTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Section</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Difficulty </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"difficulty\" [(ngModel)]=\"currentQuestion.difficulty\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let difficulty of difficulties\">{{difficulty}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t\t\t<input type=\"textarea\" placeholder=\"Question\" name=\"trueFalse\" [(ngModel)]=\"currentQuestion.questionDesc\" required>\r\n\t\t\t\t\t\t\t<span class=\"input-img\" *ngIf=\"!currentQuestion.imageURL\"><img src=\"../../assets/images/input-img.png\" (click)=\"showImageUploader(); setModifyingObj(currentQuestion)\"/></span>\r\n\t\t\t\t\t\t\t<span class=\"view-img\" *ngIf=\"currentQuestion.imageURL\" [popover]=\"popImage\" triggers=\"mouseenter:mouseleave\" placement=\"left\"><img src=\"{{currentQuestion.imagePath}}\"/></span>\r\n\t\t\t\t\t\t\t<button type=\"button\" *ngIf=\"currentQuestion.imageURL\" class=\"btn btn-danger glyphicon glyphicon-remove image-remove-ques\"\r\n\t\t\t\t\t\t\t (click)=\"removeImage(currentQuestion)\"></button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngFor=\"let option of currentQuestion.answer; let i = index\" class=\"group group-1\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"True\" name=\"answer{{i+1}}\" disabled [(ngModel)]=\"option.description\" required/>\r\n\t\t\t\t\t\t\t<div class=\"options\">\r\n\t\t\t\t\t\t\t\t<label title=\"\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"option-input radio\" name=\"option{{i+1}}\" (click)=\"selectOnlyOneOption(i)\" [(ngModel)]=\"option.isCorrect\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Fill in the blanks-->\r\n\t\t\t\t\t<div *ngIf=\"currentQuestion.questionType=='FILL_IN_THE_BLANK'\">\r\n\t\t\t\t\t\t<div id=\"ques-title\">\r\n\t\t\t\t\t\t\t<p id=\"quest-p\">Fill in the blank</p>\r\n\t\t\t\t\t\t\t<a href=\"#\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/edit.png\" style=\"width:25px; height:auto;\" /></a>\r\n\t\t\t\t\t\t\t<a (click)=\"deleteQuestion()\" *ngIf=\"currentQuestion.questionId\"><img src=\"../../assets/images/delete.png\" style=\"width:19px; height:auto;\" /></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"cateory\">\r\n\t\t\t\t\t\t\t<div id=\"tagging\">\r\n\t\t\t\t\t\t\t\t<label for=\"tagging\">Tagging </label>\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"tagging-input\" [(ngModel)]=\"customCategorySelected\" [typeahead]=\"categories\" typeaheadOptionField=\"value\"\r\n\t\t\t\t\t\t\t\t (typeaheadOnSelect)=\"addTagToCurrentQuestion()\" name=\"tagging\" />\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-info-sign\" (click)=\"tagging.show()\" [popover]=\"taggingTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\"></span>\r\n\t\t\t\t\t\t\t\t<template #taggingTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Tags</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Section </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"Section\" [(ngModel)]=\"currentQuestion.section\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let section of sections\" [value]=\"section.key\">{{section.value}}</option>\r\n\t\t\t\t\t\t\t\t\t <span class=\"glyphicon glyphicon-plus-sign\"></span>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus-sign\" (click)=\"section.show()\" [popover]=\"sectionTemplate\" triggers=\"mouseenter:mouseleave\"\r\n\t\t\t\t\t\t\t\t placement=\"top\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\r\n\t\t\t\t\t\t\t\t<template #sectionTemplate>\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<p style=\"color: #38a2e8;font-size: 100%;\">Add New Section</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</template>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id=\"subject-diff\">\r\n\t\t\t\t\t\t\t\t<label for=\"exampleSelect1\">Difficulty </label>\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"exampleSelect1\" name=\"difficulty\" [(ngModel)]=\"currentQuestion.difficulty\">\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let difficulty of difficulties\">{{difficulty}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"group\">\r\n\t\t\t\t\t\t\t<input type=\"textarea\" placeholder=\"Question\" name=\"fillInTheBlanks\" [(ngModel)]=\"currentQuestion.questionDesc\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t<div *ngFor=\"let option of currentQuestion.answer\" class=\"group\">\r\n\t\t\t\t\t\t\t<input type=\"textarea\" placeholder=\"Blank 1 Answer\" name=\"answer\" [(ngModel)]=\"option.description\" required />\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"save-button\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"saveQuestion()\" [disabled]=\"!(questionnaireForm.form.valid) || !(isvalidOption) || saveButtonText==='saving...'\">{{saveButtonText}}</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-outline-info\">Cancel</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n</section>\r\n<template #popImage>\r\n\t<div class=\"modal-view-img\"><img src=\"{{imageQuesPath}}\" />\r\n\t</div>\r\n</template>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<section id=\"ques-body\">\r\n\t<div id=\"ques-filter\">\r\n\t\t<div id=\"filters-p\">\r\n\r\n\t\t\t<p>Filters </p>\r\n\t\t\t<button type=\"button\" id=\"filter-btn\" class=\"btn btn-info\" (click)=\"getFiltteredQuestionnaires()\">Apply Filter</button>\r\n\t\t</div>\r\n\r\n\r\n\r\n\r\n\t\t<div class=\"checkbox-area\">\r\n\t\t\t<p class=\"heading-p\">-Title</p>\r\n\t\t\t<div id=\"type-ahead\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control title-input\" name=\"title\" [(ngModel)]=\"titleSelected\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"checkbox-area\">\r\n\t\t\t<p class=\"heading-p\">-Status</p>\r\n\t\t\t<figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isStatusCollapsed}\" (click)=\"isStatusCollapsed = !isStatusCollapsed\"></span></figure>\r\n\t\t\t<div [collapse]=\"isStatusCollapsed\" class=\"card card-block card-header\">\r\n\r\n\t\t\t\t<div class=\"boxes\" *ngFor=\"let status of status; let i = index\">\r\n\t\t\t\t\t<input type=\"checkbox\" id=\"status{{i+1}}\" name=\"status{{i+1}}\" [(ngModel)]=\"status.isSelected\" />\r\n\t\t\t\t\t<label for=\"status{{i+1}}\">{{status.value}}</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"checkbox-area\">\r\n\t\t\t<p class=\"heading-p\">-Marks</p>\r\n\t\t\t<figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isMarksCollapsed}\" (click)=\"isMarksCollapsed = !isMarksCollapsed\"></span></figure>\r\n\t\t\t<div [collapse]=\"isMarksCollapsed\" class=\"card card-block card-header\">\r\n\t\t\t\t<div class=\"range-section\">\r\n\t\t\t\t\t<span class=\"multi-range\">\r\n                                    <input type=\"range\" [(ngModel)]=\"pageFrom\" name=\"pageFrom\" min=\"1\" max=\"200\" step=\"1\" value=\"1\" id=\"lower\">\r\n                                    <input type=\"range\" [(ngModel)]=\"pageTo\" name=\"pageTo\" min=\"0\" max=\"200\" step=\"1\" value=\"45\" id=\"upper\">\r\n                                </span><br><br>\r\n\t\t\t\t\t<div id=\"min-max\">\r\n\t\t\t\t\t\t<input type=\"number\" name=\"min\" class=\"form-control\" id=\"min\" [(ngModel)]=\"pageFrom\" name=\"pageFrom\">\r\n\t\t\t\t\t\t<p>to</p>\r\n\t\t\t\t\t\t<input type=\"number\" name=\"min\" class=\"form-control\" id=\"min\" [(ngModel)]=\"pageTo\" name=\"pageTo\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"checkbox-area\">\r\n\t\t\t<p class=\"heading-p\">-Subject</p>\r\n\t\t\t<figure><span class=\"glyphicon glyphicon-plus\" [ngClass]=\"{'glyphicon-minus':!isSubjectCollapsed}\" (click)=\"isSubjectCollapsed = !isSubjectCollapsed\"></span></figure>\r\n\t\t\t<div [collapse]=\"isSubjectCollapsed\" class=\"card card-block card-header\">\r\n\t\t\t\t<div class=\"boxes\">\r\n\t\t\t\t\t<div id=\"type-ahead\">\r\n\t\t\t\t\t\t<input [(ngModel)]=\"customSubjectSelected\" [typeahead]=\"subjects\" typeaheadOptionField=\"value\" (typeaheadOnSelect)=\"markSubjectSelected(customSubjectSelected)\"\r\n\t\t\t\t\t\t class=\"form-control\">\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"boxes\" *ngFor=\"let subject of subjects; let i = index\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"subject{{i+1}}\" name=\"subject{{i+1}}\" [(ngModel)]=\"subject.isSelected\" />\r\n\t\t\t\t\t\t<label for=\"subject{{i+1}}\">{{subject.value}}</label>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div id=\"ques-area\">\r\n\t\t<nav class=\"sub-nav\">\r\n\t\t\t<a class=\"chosen\" href=\"#/qnr/manage\">Manage Questionnarie</a>\r\n\t\t\t<a href=\"#/ques/manage\">Manage Question</a>\r\n\t\t\t<hr class=\"white-line\">\r\n\t\t</nav>\r\n\t\t<div id=\"all-quizzes\">\r\n\t\t\t<figure>\r\n\t\t\t\t<img src=\"../../assets/images/folder.png\" alt=\"Folder image\">\r\n\t\t\t</figure>\r\n\t\t\t<p>All Questionnarie</p>\r\n\t\t\t<button type=\"button\" class=\"btn btn-info\" (click)=\"redirectToNewQuestionnaireScreen()\">\r\n      \t\t\t\t\t\t<span class=\"glyphicon glyphicon-paste\"></span> Create a Questionnarie\r\n   \t\t\t\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div>\r\n\t\t\t<table>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th width=\"43%\" class=\"title\">Title</th>\r\n\t\t\t\t\t<th width=\"8%\">Preview</th>\r\n\t\t\t\t\t<th width=\"8%\">Questions</th>\r\n\t\t\t\t\t<th width=\"8%\">Marks</th>\r\n\t\t\t\t\t<th width=\"8%\">Duration</th>\r\n\t\t\t\t\t<th width=\"8%\">Last<br>Update</th>\r\n\t\t\t\t\t<th width=\"8%\" class=\"green\">Create<br>Exam</th>\r\n\t\t\t\t\t<th width=\"8%\" class=\"green\">Exams<br>Done</th>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr *ngFor=\"let questionnaire of questionnaires; let i = index\">\r\n\t\t\t\t\t<td width=\"43%\" class=\"title\">{{questionnaire.desc}}<br><span class=\"option-h\"><a (click)=\"redirectQuestionScreen(questionnaire.questionnaireId)\">Edit </a>|<a (click)=\"redirectQuestionCopyScreen(questionnaire.questionnaireId)\"> Copy</a></span></td>\r\n\t\t\t\t\t<td width=\"8%\">\r\n\t\t\t\t\t\t<figure class=\"preview\"><img src=\"../../assets/images/imp-preview.png\"></figure>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td width=\"8%\">{{questionnaire.noOfQuestion}}</td>\r\n\t\t\t\t\t<td width=\"8%\">{{questionnaire.marks}}</td>\r\n\t\t\t\t\t<td width=\"8%\">{{questionnaire.duration}}</td>\r\n\t\t\t\t\t<td width=\"8%\">4</td>\r\n\t\t\t\t\t<td width=\"8%\">\r\n\t\t\t\t\t\t<figure class=\"type\"><img src=\"../../assets/images/create-exam.png\"></figure>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td width=\"8%\" class=\"green\">4</td>\r\n\t\t\t\t</tr>\r\n\r\n\t\t\t</table>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10\">\r\n\t\t\t<pagination [totalItems]=\"bigTotalItems\" [(ngModel)]=\"bigCurrentPage\" [maxSize]=\"maxSize\" class=\"pagination-sm\" [boundaryLinks]=\"true\"\r\n\t\t\t [rotate]=\"false\" (numPages)=\"numPages = $event\" itemsPerPage=\"{{itemsPerPage}}\" (pageChanged)=\"pageChanged($event)\"></pagination>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</section>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" bsModal #errorModal=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\r\n aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-md\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<div class=\"modal-title pull-left\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<img src=\"../assets/images/criticalerror.jpg\">\r\n\t\t\t\t\t\t<span>CRITICAL ERROR</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<div class=\"form\">\r\n\t\t\t\t\t<form #errorForm=\"ngForm\">\r\n\t\t\t\t\t\t<li *ngFor=\"let err of errorMsgs; let i = index; trackBy: index\">\r\n\t\t\t\t\t\t\t{{err}}\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<button (click)=\"errorModal.hide()\" name=\"cancel\">Cancel</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"welcome\">\r\n\t<header>\r\n\t\t<figure id=\"logo\">\r\n\t\t\t<a href=\"#\"><img src=\"../assets/images/logo.png\" alt=\"Oas logo\"></a>\r\n\t\t</figure>\r\n\t\t<nav>\r\n\r\n\t\t\t<button type=\"button\" class=\"btn btn-success\">UPGRADE</button>\r\n\t\t</nav>\r\n\t\t<ng2-slim-loading-bar [height]=\"'4px'\"></ng2-slim-loading-bar>\r\n\t\t\r\n\t</header>\r\n\t<div>\r\n\t\t<router-outlet></router-outlet>\r\n\t\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    serverURL: "http://localhost:3000/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABcCAYAAADEbZH1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADImlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MkUyOURBQTNFRDUxMUU3OTZFRUZENzg5MEQyMUZERSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MkUyOURBQjNFRDUxMUU3OTZFRUZENzg5MEQyMUZERSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyRTI5REE4M0VENTExRTc5NkVFRkQ3ODkwRDIxRkRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyRTI5REE5M0VENTExRTc5NkVFRkQ3ODkwRDIxRkRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ulM5qAAAEJ9JREFUeF7tnQuUFNWZx//dPf3uGeY9hCUYngJHQR6iuJ64IAHBnZiwmhySE010NySocTe461myyUl2zUMTRXePUeNZY4JgPLpkAUUT0RMVMFmQdxCQASMgj3nP9Pu597tV1dMz005Xz0xXVw/fj3Opqtv1mqrvf7/vu3W72pISQAfxeALd3X6cOv0RdryzC9vf2Y32ji6EIxE47XZ4PB5A364YJm/iiQRiwgZ7k4K9rAxjxzRgyeLrMG/uLJT7vPB6hS0OIzlF4vcH8MabO/HAQ09g59u7AIcDdlHKbDZYLBZ1LdKH2E3PIsMMO/3NyyJkIv4J24tF40iEw6iqq8TaB7+LBdfNx7ixY9T1hsbHiiSZTOLF327FvWt+gjNnm6WT8HpcihgYxoRQo51IJBFq74C7ahTW3LsS377n7+Fxu9U1BkdWkQRDIay49S688tpOOjIc9jL1EwXaJJmkzVgwTLGxSHFYrT1+hpaj0ZgM0ZKJGI4deB2TJ45XP82ffiK50NyCaxfeguMffCQU6FRrlQP7/UGhID9gFaGW2wWbjcSjuDuGMRrFcySQisWBaAQoc8JTWSEEQw25sk5UfBbz+/HHHZtw1bxZSmWe9BIJ5R/lVZfC4hLJjxpa0YkkxTTYfB5VY8Zg+tSJmDplHObNmYGGhgbEYzFxIjFxYjZ1LwxjDGU2Kzq7utHUdBL7Dh3H4SMn8MGRQ7BVNMgGnlIG6VUiUUSDIbx3cBumXjpJ3Vo/vURyy5fvxMYt2+B2KR6EDhAQO0/5O3DziuVYfc/tuPqqefIzhjEbZ86cxhNPPYsHH3ka0c4APHU1MtknO46I8CsWjaL11C5UV1cpG+gkLZJ1z23ErXf8M7w+r/KBiPH8ze1wVrjx8E/uw6qVt8t6gjYhN0cHt9lsUrEMYzTS+CMRuFwuaY9ki8TBQ4ex6u412P6HHfDW/5UwWMU+qcFf+Okrse3l9XJbvUiRhEJheKunwupwweV0yB2EAyGUj3LjmSd+jM82LpMrx0RYZbfb5ZSE4XAo66bESVgsIhBkmCJAtmilRETOp2QS39x8QXY+vf7q20IoDVIo1LgHRUrxzpsv4up5s+X6epB73rL1daQiMbidTmHskK4pHg1hrfAgmkAITakkFKdcV1EjC4QpJppAlKBIyR7q6urx/PqfY+LkTyHQ1i5tlYrd4cQd3/jXvKIfi/AKqYZL5iIYjgsRWMUhLCJJP4PlK/4O/7PhSdnvTMokd1ZWpnQFv7V9B55/YROOHD2Z9ibqeTKMYcRicVRXjcJNjUuw7IaFqKioRDweVz8Vib2w1xc2bsYXvnQ37C532lb97Z04cewtjP/UOHXNgbG0tLalautnwFdTLZUYEnGbz+vCG6/8CnNmz5aKowPTAbq6unDP6n/DM89uEu5GKJGFwRQdEc1YUphx+UQ8/dRDmDNnTtpLkIeJRSOYc20jDu4/Bu+oClkfFw3/D9Z8E/etvlMu58Ky9XdvpBpv+abMRYhAWwfmXD0Du7e/JHMN8mCaq/r6qtV46vEn4a4ZL70Lw5iFQHMLJk6fiO3bnsfoT4zpJZQfPbAW3/nef8Jb4SNjluMQp0+dgD07t8h1cmHd/NJrIsdQwigZ0pXZMP/Ky+WylmuQQP5v1y78csNLsJWPZYEwpsNdW4Omw3/Gj3/6mFwmm1VyFOAz1y8QCTWlEgqUQnR3B3XnJdYjR4/Dmk68xW6E8ubOvkIuUfeadqDNW36PeFe3SHzscplhzIRNNtxl2HeoCamk8nhCo6a6El6PHUIbEpvNgo7OLlCvrh6sqVR/r0C9VwQdSOs5ONZ0Smgopp4Mw5gL2ZZbXej2d6Ors0PWpYUiJjJaUp+XUAV5EeqM0oM1pslLQ+yYerkIStY1HA4KyciFKcsMYzqEbVLkQw/CiXTXsBCEMiC3TwOf4W0GQouzsqKFWoR2QIYxL/Qg0TrstsqWzzA5YJEUmIDw6MNZGONhkRSAQho1i8V4iiaSQhqS0WT+LSPh7xkqpXItdD8nUacGoHQC0Ff3S9mQMg1AK0wPpXE9UqAnH3pP1UCRKKdEAyhLhb5iKKYBeEUbk1mynVuxisUyuLuauQ8jUZprZQCkHgwTCT3YoRLo7FZregg0t/W6YPmWbGRbL99iBkgQhBnPTcMvJOKn8xL3sS99zzuzZBJobs0oLXIQYvph4DBDTzY86qhgPRgiEnq2EwpFxcUUZ1dZrtZmUF+tzgyOXDeglCmpv2Uo97G+JqPUIlJmlfZiKcDzOZvYZzgSxvGmkwgEgmjv6ERrazva2nqKUteGI0ffN0Yk8UQKCTeP+WLyx59KDntDQSNKgsEwrvz0ckybswRTZi7C1FmLcekVPWXKjEW4VNTN/uvPGyOSkG0ENe3MiICeylNId+5cC7q6Aujq7l+6/UERAUWMTNyZgeibmGu5CFM46FW9DoddDn7MWkRibxVeh0ViEjLzKa0wgmC06A3GkEWS7eb2LUwRaO/OXkoNj6PoNjQkkbAAzIu3sjxdUJVRBsnFHAYOWiQsEHOjefGh3CczCaOY9jZokVyMLcpIxExCMCtDCrf4ApcmfN/yY8iJu0bmhecbwAwLLe2msKdhEwlTOvSN74eau/TjwkF1Zoior9UtNiySixRNGAOJY9jFky8FGLc1GFgkTE76Cipn6FOvvNxwyLBImFLEUM9SoKHy+VIwkRTVTTMFx9X3fW0FwCQaYU9SCmT28BSzl0eDGkD5atzmVrWmMNDgQzPAIikBMvMBsxAky6mrURYKhPa63WLDIjGQoXoDM4qlkGS+QbSYsEgMRDPykWToZgj/Cg2LhBk0mkB8hXgDzoUW9iTMyIGM2atHKAF9vweikJJvNTEDRRVJZoyeWZjemPUaZYaPgfTbrAbA61Jn9FC4VwrlC3uSEiDTGC8eSCTqbJExnUguLkPIn4tHLOYY3EgUVSTaDc8sDCOpr1dnig+HW8yQKVS+ZJZGk0XCDIqBRDHcQim2WFgkTE4yBaGVgdBt1P6gOmNuiiYSPRebKQIXmnuJoe890lr2gYpudP6ITrFhT8L0pr4uq+FrZVip8Kkz5qZoIinIRWdGHNm8mZHQU3/2JAwzAPTUn0XCMANAwQ6LhLloiURjCPiD8teuAoFQlhJEIhhkkTDmpZC5CI1cnjxhHL54y41YftNiNN64oF+h+kVLF8ByzcKbU/sOHJWDyWjDYDCE3zzzM7Hx5+QyQXHZrXd8C+ue/g08taN1DTzjpJwZDJZgGF6vG6lk/goJtLRj9vyZePPVZ+Err1RrgaamE5h9TSMiMQvKyqyIxxNwOR14/+A21NUqX0HO9t0VsnuqL5gnydUKWENRdY4pFHSNtWILx4QVRZTrLqZmxJ0EPG7XoASSD2T49JIJn9er1iiC6Fu0+qKFW26XI929l08ZiWT7O4ej0DXWistph9fjVK67mGZb3yiyHZsK/UqzEZDhJxIJxGKi4dBBQUVCf/hwUswQru8NHajoJd/1C03m31DIYhpUb5GLgnuSbBeJSr4YLZChnG/fbT+uMKVByfRuGWFUbMBMNnSLJEvybziZRlyIwjDZsCaTCRGbqUuEUENS7V2gXgBKcIhoLE41esM4hjEeYZupZFLYrzK6OJ2YUw+V1UrvX1GW86S/JxE7tNmUatqx1hXm89CbLsSBzOBSGCYbwjStVls6IS8rK5NTEk0q1X9Yvt72Pmu4ZbcrO++F3CMJRO+uGcZghHmSPsrUX8jSGnSL+EfREU0z0TxOLqzJLK/Q18ItQvMkXV1+8X9CEynDmA9hm5mBjpYqWGVklPGBgJZ613w81qrKit5ri6OcPXtOXejhsmmTAJtLHFif+hjGSGRjnorA7XbC5VaepNtUj0I2G4nGRSimtfDkVUTEpIZjubDOmjkNibTbEZsK9f35vaNySVMi8eUVy+GurEQ0qu8pJcMYSVzacAxzr5gm8xIlD1Fa/5aWNkQjPS+7o0ipvNwHp9OhVOTAunTJwrThy50I1e3ec0QuE1oPwaRJk7Dya8uR9H+IaCyRPgGa0Lwy5cLF6EI9sEmEW85jyuWXY819d8s6slst5/jd798QK/ZEQPTZ+HFj0ol9Lixt7R2p6prL4KutljsPhyOwW5PY/OIv8JlFCxAIBOD1eqW3ScTj+P6/P4C1j69HuEPkKNR9LPciYj46Y4YxGmrZ3Q4sXXgVHl17PyaLxjwu7JQE4nAonmLW/GXY9+5heCm1EIQjUTz8o3/Bt+68XS7nwiJCqtSMuYtx7MRHYqdCWeKggQtncMNNy/DK//5arkQHpZhPi/H27N2Ll7duw7v7DsvuYq/HLUMzLclnGCOIxeKoq6tG47JFWLJ4oaixikY+DJfLJW2WPMWv17+A2277Jzh8FbAL+yYb9be2o/n8ftTWVCk7yoFFeI/U5pdfw02NX4OXft6L3JeI2cKtzXho7ffw7X9cJVckF6U9N6Epw5gNslGKhqg4nU6cPv0R5gkvcr65HZ5R9P0SYdehKGZfMRV/fPO3uht1KRIKsdyjJsPm8sgvo9DG0UhMeIcI/vvn9+O2r6yQK5MLI4FoXkMrChRusSdhjEXLmck2yXOQPZKNnjjRhM9/cSUO7D4M3+gGpITNUsoQ7vbj8P5tmDZ1ktxOD9IluFxObN3yKyREQk6QEh1OOxLRFG5f9V387OHHZL3mQbSwi06I1lV6wVggjPGQTdIPkNKU7JKmO3b+CZ+7+R+EQA7CW18vBUKEQxEsXXpdXgIhpCdR53HPvT/Afz25Hm63S5o8iSAkdpzo7sDiv70ed33jK7jxhkWw2vT1CjCMkby7Zy/WbdiIRx9bB0ST8NaKnEOYN9kxRUsU7bR8uAujRikJvF56iSQajWLm1cvwftMZOB12sXNFKJSjhFrOw1VVjQnjP4kZ0yeIuO4y+Hxe6eYyn6cwjFGQ14jFYzhw6AjeO/oBjp88hdZTH8JWUSu/BqykBxZEwlFEOy/g7Nn3MHp0/j/p0EskREdHJxYu/RIOHj4he7tIJARNg6EwksEQLdAAGWXae3OGMR5qpGkkiEjWPV6P/BowWSWVSCSKhLDZpqNvYcKES+Tq+dJPJAR1n33/h4/gp488LdSYEGJxSj1kkmUzhikOwjgzzVOmCSK8SsQTuGRsA3Zt34Q66rkdJFlForF7zwGsvOs72H/omAy5fPSqFxYHY1JIHPS6oLCIhirqa/Dgf9yLr976BZE66Bt+8nEMKBKChqyQWB77xTpseG4TYLPL17HYRDyohWKKYxsqFtmdR914PQPRmJECjZeKiQjFYberNcRQ7cYi9qA8F4nFEkiInPoTY2rx+KP349pr5qKmWt/DwlzkFIkGrRYSOUlHZxf27j+Et97+E85daBFisQnDtsokakiIs6io8OH5ja+ipbUjQ4BMqUO2U+7zYnnj9dKo4yJ/oCFO9OiBkuvBQtvSPj45dgyu/5trMGXKJNnhRF3Cw4lukRgBnclXv74aG17YKv9YZmRA0cj8q2biD68+V5KNn6nGl9D1O336rO5x/kyJIO5rwB8q2ejAVCJRQrpQ+ok+M3KIqOOqShGThVspeGqmy0FoFhKK1vDQGZZmI8SIe5cSAvFUlKPz3N70989LCVOJhDj5wSn85S+n4PV6lIGUVqVToNAvUWYKA0VY9BCahqVPnzalBEMu4P8BnYAcKzD8vA4AAAAASUVORK5CYII="

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "create-questionnarie-bg.58163eb755971b802aa1.jpg";

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0UwRkYxQUUyQjM0MTFFN0FBQUFBNDc1QTJBMjZFMDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0UwRkYxQUYyQjM0MTFFN0FBQUFBNDc1QTJBMjZFMDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RTBGRjFBQzJCMzQxMUU3QUFBQUE0NzVBMkEyNkUwMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RTBGRjFBRDJCMzQxMUU3QUFBQUE0NzVBMkEyNkUwMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmQuqBUAAA0xSURBVHja7F15dFTVGf8ms4VMdpKwhCUhgoSt2AKHHQRKj6UVQgVbT63awh+tR0852J7a5cixLVKlahc51lLRSj11Q9B6UAQpGJaDbMbKHpIAgRAD2SbLLMn0+97cmMmbOzPvvXnLzGR+53wiJG/mve/37v3We6/J5/NBnMCCkosyAqUYpRSlCGUU+7dUlCHsd6+hdKJcRqlEqUE5hVKFcgnlJoo3Hh7aFMMEZaBMRPk6yr0oJSp/PhH3CspulAqU1iRBkTEY5TsoazQgRAphz6C8hVKXJKgXaShlKE+gDI8RvdDU+CjK2yjt/ZUgshuPo9wX42ZgC8o6Zrv6BUG3oPwDZS7EF/ajrEI5n6gEDWVv42KIb3yIcj/KVT2+LEWH77ChbESpTQBygHmV9CxPs2eL6xE0G+VdlGxITLSgLEEpj7cRRG/WSygfJzA5hEz2jC9pNZq0GEEU2R9CKYD+hXqUGSgXY3kErWABX38jB9gz07OvjEWCTChPobwOSbzGdGGKlSnODP70yNIkN32wA/xpqy4jCaIM8544DDr1DG4XQhSZ82gIsqIcQJma5CEsPkGZheLR0waZWUSdJCcypjJdmfUiyMScgXlJ3UvGPKYzkx4EkYeyPKlz2VjOdKepDfo2yjtJXUeFpXJ0KIcgqnbWgj4J1kRGN0ohSKzaSiWI3OkzoEIZ+tAVF3x8yQUn6jzg6vLFpYaHpJth2lAbLChOheGZimw/ZRzGSnG/pRL0d/AXqxTjZkc3bDjQAp/VexJqOPxgkgO+NyFNyaWbUVarQdB08Cc/FaPF1Q2r/9Mo/JmQ1n/sAFj91XQll1Jy9XA0XpyFpSyiwq/3NicsOYRtZzrg4GWXkkt3MB0rJmgtRJmZPnrNDedveiHR8dxRp5LLCpiOFU1x+eCvcUSFx/e3CI5Bn2GJr8WPp2TAhHwrmEzxRUSn1wc7znbAnqrOoJ89uSgbJhZYlXzsoFC6Dje8tqrxQCfr3EH/9tC0DFg8KjVuR8sjMzKgptkLF0Qzw+dfeJQSRB2u35AzxY0GlRo8PN3BI3TqUBvEO2YNt3NHl0IsZjqXTNBmtR7Eag6ew9o9PkhEWKIL4TdLJYjabzWt73QnAD9e9R9iLnBan3kE/T6ZjTEMv41EkAP8Sz2SMAb3MQ5CenFlRt7ddgz4qpp6PaNMewosu3UADEzjT+71bd1CXq/Dq00QPMBighnD7DA0w6ynGsoCPWgxQRuMImfjoVZubPFBZQe88K1cyE7tS1I1Evnw+01cL1FNbDnZBn+9IweKsi16qWJDIEGBT03LBwuNIKexs5tLDqHV7YPDtcGx1Fs42jw6eBuUcKfv0hGF0LuUsw9BhrVNNXd2y/b6vDqWKrz6l0WW8Qh6JFYtZ4pJWnylFfT8Loa1YoIoV15iFAFp1vAKcHPeYKdbv7daz+9iKGGcfEnQJCNHSIHDDKNyQhvhrwwKzm9NUJbzUoRx+RYj1DIp0IszfGHV727Pgk1HnVAT4GZn2FJg5fg0GJkVrCAqktU5u2BfjUszZ8GKc+u8kXa4qzTNCJUQJwd7nvz7RhOUg270r2ZnyrrmJ1PSYdVtDujSqBZoxvnFZjasHkKcrLOwUVQCcQpBgWZIRBAnQv41N5lhiVnkEkEjk3qIWYyk6a04lu6oI6BWZLOYIJIJcHl9mpUvKP6yWwytyRcTQaWxQMy5G17405FWuObsXe9EyUryoMrQY+PhmcOtcPCKC7QK9OnlmDnMDj+dngEG0VQaEyOIFLxuX7OQkxOPpheOO2HMQAuMz+8b97xxqh12XezU/N7oOyibffd4Q1ztYrJBRUYTRPFMY5h83AVO29bpBv1auQxsGyuKCYI8EeaoVI4dSLfpN+kMsJoMJSjmW2x4mQKPjhlmXrbd3aXLV9vIBg0xmoC8tPCRpsMaXFHVKsNMgS/ZvFHZFhicbsbvNkEhZwWDnfP9JvVdiSGWWBghNF3dMyENXv1f8N55JTkWmDU8eJCTd1d+2dXHLVcKUuucEXaYVmiDrw2xBVVveSDPkoikXOC+mk6gqrvTo37OiVp/r2o5ipa/0RCkRCph89bVHL/mhnNokHtammgdzsLi0B2o5FiUX3JBcxSN+TQS5o60wyCH8nzRF+3dsPmEE4aht3fvJIea6rtOBFVrmU2QQ1C8g9rcVe41r6GxXJ3MqKg0HalvFqstjKDkkvoAj/H4NQ9UXHfDlZYuqMfpq4tNueTM0Mgfm2eFyYOtQolEYwgEVfUHxfsg/CYFZEd2XuiADyo7heWaPFxGwk7UAbxzrkPw9uYX+Yt5Gk7XVUTQ6ViZv1882QYXGgMbF02wAhVwSy7f2dxb7WKNi76Iccx30UucO8LO/fm/P2+Hf33WBnL6H6lPYheSSbJyXBo8MNmhhVpOx8wIolzckavB/W/70Y3957KBkC/qLj18xQ1PHmyR9NlU9Qq1buc3e5uFVYDR4PVT7VBR7xHK9g51sw5V9NQ1RpNzA6cXHjk9+ITzsz3V0hOl5DXy7MWaXU1Rk9ODMw0eeGhnI7Spu7TmEt31TaMJanF3RwwkpUTyPCwuSRXiKTEe/ahZUKqaoFLJWiRdzXeXCKJJv9JQ91RD9/WHHNtApQre0kxVApdmL/ztmFONjyJOvD3Wl5q1HzMu1ZMS0SCL4ZKw3JB2A8my9/1s2g6AnBEpWDM9A0rzem0XLXH8+e6miEsdt5/tgDtvHcAduTLwKv2n5+53GTmC8tABkNu4OH1Y5CT8/KLgNNGbp6U3wo9B75Fc6B4ZjX+XmqN9paItWrW8Lzg47C8VRtsh8oD+fKQValt68/jhGhcpR0fxyn+pcZEzwswpJpgiWqxMbvR756UT1MSp8Er1xCkEeHCKDxzK61YVgQQ52ZxnWH8ceVmPzc2Sdc0KjD9IpOIYemxyFjDzflNOk+SBKy6l2w1UMk76rG74Y6JnE07IdAzEgasvhD0MhU/rFHuJX3IROHdsR9mUyATVNHeFdQgKRMFwSW5f20el9z8szIbugN1ZKFdH3UU8VDcr7mXYziOIDuajDfs0X2VnVIX/Rntogm4vsgvN8uFAP54kclgouRqKIKdbUZ2qlnEB4imO8Au1lcKbsx02YygKNzvVOZUV/cJd19SpKKvQhwMxQW+rrRTeXk1nG4xpYzKFjcWUvTThrlOYl+vDgdh/bWNBq2rLUWihldg4P324BX42MxPG5Vs12wCV1ypFQWttK3+aa0BbkioKcqjtN3DWo3etU+QF0nWhkCW/XrSVcdD7UnG2I6PtSFQ7UI/KAevL+Vlnau3VyiCVYSQv7g+gOGvnBX6SlRwAcUppHbr9gTaHyhqr370J7QGZBFJfqMwCBdMyQwc6ePFyuBEE7BfozAFV9uuhbpnCDDP3ze3watfb9ul1T9CWKRMLbCEJ4inZLerHIzJudEi3VRPyZbUclovJ4dmgHqxWU1nrF2RBis5+Abm44slhmsxt0MQNrSaQ12U6J0SBMAR+xPUcQ/zyOVAxP0eLhJ+7I4ebstEKbW6fsPJB7D2SOy0V4v44IkeqVSHbW+CQbIP2MJ0HvyRhLqIZ4rpaCqOtVJ5fkiPU88kuXcKgUeudQii1I95474HJ6UKeTAqoR88cMPRpGpSaSFh1m6xdgO8J6XlG2JaZfPIntFAepUy6NN4ImGyIuNxAoP13qEytFSiRS9tmSgQdSb1BKUEWFtkm3Jl0D+5shIuN6sdj1M+95U7Jy37rWeYm5I1EmiTpwoQ8+uypRdnRFtS4genGRbJOJV0KEY4HkGLFaGf0FxONINp+5i/ouIzOVcdxGZFlhk3fzAm5tx0HmyHCrvNSprjAqY68jOJEHE3PH3MKe2ErBTWmPDwtA2SsiKFWtzGg4uEawvQKCXw8DdmjHehh7q2SvrUMxVXLS9O4Jfkw0OR4msA5czskMChTcOyqW9iknDp0ml0+YXlLGkatlFujBcXj8qzCWqJCZVtl0l5wks/DUHIKJJ1svxaSUAKqlMral08JQTTTvgnJc+zkYhvKXcBvdVCVIAKN7Y8gecCtVFDyeQEoOJU4edCt9jDkoFtgXzgT/GnyJPgoZzpS3N4TrctMfvx8UOGUrgTEDqabqPJJasQ0NK+WMe8uiV5Pt0yJzVHTBvGwEuW1fk7O3eA/FloVqE0QYRT4T40s6GfEUGaaTnW8qOaHapG2oRukxpOX+xE5L7Nnvqj2B2sxggIxG+U9lMwEJYbalZZo6clqnfikG6fTJJ9NQHKeZc+maZih9QgKxFCULRADm6hHiQ9R7ke5qseX6Vk6oAeioyjHxGlwW87ufbFe5OhNUA/Oo8wB/wZOW+OAmK3sXuewe9cVek5xoeBgQd164JyCaBCow/OX4G9kbzPyRmKBILGdIrLWgP7LMSuZ4d+m5xQWbwQFghrL6IiWReBvoizRgBA6onk3+BfstsaiEmKZIDGocWUgmwYpW0Ebshcz4goZoXnsdxuYwmsZEdSkcYb9P01fNyDKJKZe+L8AAwAYKWawYLkOQgAAAABJRU5ErkJggg=="

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ques-icon-bg.a20057153b7f97297e49.png";

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "questionnarie-bg.d98aff6c2cee879f05b4.jpg";

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(386);


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_http_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupDetail = (function () {
    function SignupDetail() {
        this.isOrg = false;
    }
    return SignupDetail;
}());

var SignupService = (function () {
    function SignupService(httpService) {
        this.httpService = httpService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.signupURL = 'api/public/signup';
    }
    SignupService.prototype.signUp = function (signupData) {
        var url = "" + this.signupURL;
        return this.httpService
            .post(url, signupData, this.headers)
            .then(function (res) { return res; })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return SignupService;
}());
SignupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__utils_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], SignupService);

var _a;
//# sourceMappingURL=signup.service.js.map

/***/ })

},[771]);
//# sourceMappingURL=main.bundle.js.map