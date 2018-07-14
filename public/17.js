webpackJsonp([17,18,19],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(315)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(317)
/* template */
var __vue_template__ = __webpack_require__(318)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layout/navbar/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac82281", Component.options)
  } else {
    hotAPI.reload("data-v-5ac82281", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(319)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(321)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layout/sidebar/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-06f55b7b", Component.options)
  } else {
    hotAPI.reload("data-v-06f55b7b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5f34b976", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16ee41c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Layout.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16ee41c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.content-wrap {\n  margin-left: calc(24px + 225px + 35px);\n  padding: 24px 44px 24px 0;\n  -webkit-transition: margin-left 0.3s ease;\n  transition: margin-left 0.3s ease;\n}\n.content-wrap .pre-loader {\n    position: absolute;\n    left: calc(50% - 140px/2);\n    top: calc(50% - 104px/2);\n}\n.sidebar-hidden .content-wrap {\n    margin-left: 24px;\n}\n@media (max-width: 991px) {\n.content-wrap {\n      padding: 2rem 1rem 24px 1rem;\n      margin-left: 0;\n}\n.sidebar-hidden .content-wrap {\n        margin-left: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Navbar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__navbar_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_Sidebar__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__sidebar_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_ResizeHandler__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_preloader_VuesticPreLoader_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_preloader_VuesticPreLoader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_preloader_VuesticPreLoader_vue__);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',

  components: {
    VuesticPreLoader: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_preloader_VuesticPreLoader_vue___default.a,
    Navbar: __WEBPACK_IMPORTED_MODULE_2__navbar_Navbar___default.a,
    Sidebar: __WEBPACK_IMPORTED_MODULE_3__sidebar_Sidebar___default.a
  },
  directives: {
    resize: __WEBPACK_IMPORTED_MODULE_4__directives_ResizeHandler__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['sidebarOpened', 'toggleWithoutAnimation', 'isLoading']), {
    classObject: function classObject() {
      return {
        'sidebar-hidden': !this.toggleWithoutAnimation && !this.sidebarOpened,
        'sidebar-hidden sidebar-hidden_without-animation': this.toggleWithoutAnimation && !this.sidebarOpened
      };
    }
  })
});

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(316);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("59d9d25f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ac82281\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Navbar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5ac82281\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Navbar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.navbar.app-navbar {\n  height: 72px;\n  padding-left: 24px;\n  padding-right: 44px;\n  background-color: #333;\n}\n.navbar.app-navbar .navbar-container {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n}\n.navbar.app-navbar .avatar-container {\n    display: inline-block;\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border-radius: 50%;\n    border: 2px solid #ddd;\n    overflow: hidden;\n}\n.navbar.app-navbar .avatar-container img {\n      height: 100%;\n      width: 100%;\n}\n.navbar.app-navbar .menu-icon-container {\n    padding: 0;\n    font-size: 1rem;\n}\n.navbar.app-navbar .navbar-brand-container {\n    position: absolute;\n    z-index: 3;\n    height: 100%;\n    left: 75px;\n    top: 0;\n}\n.navbar.app-navbar .nav-item {\n    padding: 0;\n    height: 100%;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-toggle {\n    padding: 0;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-toggle:after {\n      display: none;\n}\n@media (min-width: 992px) {\n.navbar.app-navbar .dropdown.navbar-dropdown.show .dropdown-menu {\n      left: auto;\n      right: 0;\n}\n}\n.navbar.app-navbar .dropdown.navbar-dropdown.show:after {\n    position: absolute;\n    bottom: -1.125rem;\n    right: calc(50% - 10px);\n    width: 0;\n    height: 0;\n    display: block;\n    content: '';\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    border-bottom: 10px solid #333;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-menu {\n    margin-top: 1.125rem;\n    padding-top: 0;\n    width: 100%;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item {\n    height: 48px;\n    cursor: pointer;\n    font-size: 1rem;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item:hover, .navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item:active, .navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item:focus, .navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.active {\n      outline: none;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.plain-link-item {\n      color: #4ae387;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.plain-link-item:hover, .navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.plain-link-item:active, .navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.plain-link-item:focus {\n        background: #333;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown .dropdown-item.plain-link-item .plain-link {\n        text-decoration: none;\n}\n.navbar.app-navbar .notify {\n    position: relative;\n}\n.navbar.app-navbar .notify::after {\n      content: '';\n      position: absolute;\n      right: -6px;\n      top: -6px;\n      background-color: #4ae387;\n      height: 12px;\n      width: 12px;\n      border-radius: 50%;\n}\n.navbar.app-navbar .i-nav-notification.notify::after {\n    right: -4px;\n    top: 0;\n}\n@media (max-width: 991px) {\n.navbar.app-navbar {\n      height: 5.625rem;\n      padding: 3rem 0.875rem 1.375rem 0.875rem;\n}\n.navbar.app-navbar .navbar-brand-container {\n        width: 4rem;\n        top: 0.875rem;\n        left: calc(50% - 4rem);\n        height: auto;\n}\n.navbar.app-navbar .navbar-brand-container .navbar-brand {\n          height: 85%;\n          padding: 0;\n          font-size: 85%;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown.show {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown.show:after {\n          bottom: -2rem;\n          z-index: 2;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown.show .dropdown-menu {\n          margin-top: 2rem;\n          left: auto;\n}\n.navbar.app-navbar .dropdown.navbar-dropdown.show .dropdown-menu.last {\n            right: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_Dropdown__ = __webpack_require__(44);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navbar',

  directives: {
    dropdown: __WEBPACK_IMPORTED_MODULE_2__directives_Dropdown__["a" /* default */]
  },

  computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['sidebarOpened', 'toggleWithoutAnimation']),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['closeMenu', 'toggleSidebar', 'isToggleWithoutAnimation']))
});

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "navbar app-navbar navbar-toggleable-md" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row navbar-container" }, [
      _c(
        "div",
        {
          staticClass:
            "menu-icon-container d-flex align-items-center justify-content-center justify-content-lg-start col"
        },
        [
          _vm.sidebarOpened
            ? _c("a", {
                staticClass: "menu-icon i-menu-expanded",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.toggleSidebar(false)
                  }
                }
              })
            : _c("a", {
                staticClass: "menu-icon i-menu-collapsed",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.toggleSidebar(true)
                  }
                }
              })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "offset-lg-8" }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [{ name: "dropdown", rawName: "v-dropdown" }],
          staticClass:
            "col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center"
        },
        [
          _c(
            "a",
            {
              staticClass:
                "nav-link dropdown-toggle d-flex align-items-center justify-content",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.closeMenu($event)
                }
              }
            },
            [_c("span", { staticClass: "i-nav-messages notify" })]
          ),
          _vm._v(" "),
          _vm._m(1)
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [{ name: "dropdown", rawName: "v-dropdown" }],
          staticClass:
            "col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center"
        },
        [
          _c(
            "a",
            {
              staticClass:
                "nav-link dropdown-toggle d-flex align-items-center justify-content",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.closeMenu($event)
                }
              }
            },
            [_c("span", { staticClass: "i-nav-notification notify" })]
          ),
          _vm._v(" "),
          _vm._m(2)
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [{ name: "dropdown", rawName: "v-dropdown" }],
          staticClass:
            "col nav-item dropdown navbar-dropdown d-flex align-items-center justify-content-center"
        },
        [
          _c(
            "a",
            {
              staticClass:
                "nav-link dropdown-toggle d-flex align-items-center justify-content",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.closeMenu($event)
                }
              }
            },
            [_vm._m(3)]
          ),
          _vm._v(" "),
          _vm._m(4)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "navbar-brand-container d-flex align-items-center justify-content-start"
      },
      [
        _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
          _c("i", { staticClass: "i-vuestic" })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu" }, [
      _c("div", { staticClass: "dropdown-menu-content" }, [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "ellipsis" }, [
            _vm._v("New messages from Oleg M")
          ])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "ellipsis" }, [
            _vm._v("New messages from Andrei H")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-item plain-link-item" }, [
          _c("a", { staticClass: "plain-link", attrs: { href: "#" } }, [
            _vm._v("See all messages")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu" }, [
      _c("div", { staticClass: "dropdown-menu-content" }, [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "ellipsis" }, [
            _vm._v("Vasily S sent you a message")
          ])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "ellipsis" }, [
            _vm._v("Oleg M uploaded new Zip file with typography component")
          ])
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _c("span", { staticClass: "ellipsis" }, [
            _vm._v("Andrei H started a new topic")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-item plain-link-item" }, [
          _c("a", { staticClass: "plain-link", attrs: { href: "#" } }, [
            _vm._v("See all notifications")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "avatar-container" }, [
      _c("img", { attrs: { src: "http://i.imgur.com/nfa5itq.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown-menu last" }, [
      _c("div", { staticClass: "dropdown-menu-content" }, [
        _c("div", { staticClass: "dropdown-item plain-link-item" }, [
          _c("a", { staticClass: "plain-link", attrs: { href: "#" } }, [
            _vm._v("My Profile")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown-item plain-link-item" }, [
          _c("a", { staticClass: "plain-link", attrs: { href: "#" } }, [
            _vm._v("Logout")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ac82281", module.exports)
  }
}

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6afbe1d6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06f55b7b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Sidebar.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-06f55b7b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.sidebar {\n  height: calc(100vh - 72px - 24px - 24px);\n  position: absolute;\n  width: 225px;\n  top: calc(72px + 24px);\n  left: 24px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  opacity: 1;\n}\n@media (max-width: 991px) {\n.sidebar {\n      top: 5.8125rem;\n      left: 0.1875rem;\n      width: calc(100% - 0.375rem);\n      z-index: 1000;\n}\n}\n.sidebar .vuestic-scrollbar {\n    height: 100%;\n}\n.sidebar .vuestic-scrollbar .scrollbar-wrapper {\n      -webkit-box-shadow: 0px 8px 14.72px 1.28px rgba(101, 169, 119, 0.3);\n              box-shadow: 0px 8px 14.72px 1.28px rgba(101, 169, 119, 0.3);\n}\n.sidebar .vuestic-scrollbar .scrollbar-content {\n      background: #333;\n}\n.sidebar-hidden_without-animation .sidebar {\n    -webkit-transition: none;\n    transition: none;\n}\n.sidebar-hidden .sidebar {\n    top: -150px;\n    opacity: 0;\n    z-index: -1000;\n}\n@media (max-width: 991px) {\n.sidebar-hidden .sidebar {\n        top: 5.8125rem;\n        opacity: 0;\n        z-index: 1000;\n        height: 0;\n}\n}\n.sidebar .sidebar-link {\n    position: relative;\n    height: 64px;\n    padding-left: 25px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    cursor: pointer;\n    text-decoration: none;\n}\n.sidebar .sidebar-link.router-link-active, .sidebar .sidebar-link:hover {\n      color: #fff;\n      background-color: #161616;\n}\n.sidebar .sidebar-link.router-link-active .sidebar-menu-item-icon, .sidebar .sidebar-link.router-link-active .expand-icon, .sidebar .sidebar-link:hover .sidebar-menu-item-icon, .sidebar .sidebar-link:hover .expand-icon {\n        color: #fff;\n}\n.sidebar .sidebar-link .expand-icon {\n      position: absolute;\n      right: 16px;\n      top: calc(50% - 16px/2);\n      font-weight: bold;\n      -webkit-transition: -webkit-transform 0.3s ease;\n      transition: -webkit-transform 0.3s ease;\n      transition: transform 0.3s ease;\n      transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.sidebar .sidebar-link.expanded .expand-icon {\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg);\n}\n.sidebar .sidebar-link .sidebar-menu-item-icon {\n      font-size: 19px;\n      color: #4ae387;\n      margin-right: 14px;\n}\n.sidebar .sidebar-link .sidebar-menu-item-icon.fa-dashboard {\n        /* Temp fix */\n        position: relative;\n        top: -2px;\n}\n.sidebar .sidebar-submenu-link {\n    height: 48px;\n}\n.sidebar .sidebar-menu, .sidebar .sidebar-submenu {\n    list-style: none;\n    padding-left: 0;\n}\n.sidebar .sidebar-menu li, .sidebar .sidebar-submenu li {\n      display: block;\n      padding-left: 0;\n}\n.sidebar .sidebar-submenu .sidebar-link {\n    padding-left: 74px;\n    font-size: 85%;\n}\n.sidebar .sidebar-menu {\n    max-height: 100%;\n    margin-bottom: 0;\n}\n.sidebar .expand-icon {\n    color: #4ae387;\n}\n.sidebar a {\n    color: #fff;\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_bulma_expanding_src_Expanding__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_bulma_expanding_src_Expanding___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_bulma_expanding_src_Expanding__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuestic_components_vuestic_scrollbar_VuesticScrollbar__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vuestic_components_vuestic_scrollbar_VuesticScrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vuestic_components_vuestic_scrollbar_VuesticScrollbar__);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'sidebar',

  components: {
    Expanding: __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_bulma_expanding_src_Expanding___default.a,
    VuesticScrollbar: __WEBPACK_IMPORTED_MODULE_3__vuestic_components_vuestic_scrollbar_VuesticScrollbar___default.a
  },
  computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])({
    menuItems: 'menuItems'
  }),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])({
    expand: 'toggleExpandMenuItem'
  }), {
    toggleMenuItem: function toggleMenuItem(item) {
      if (item.children) {
        this.expand({
          menuItem: item,
          expand: !item.meta.expanded
        });
      }
    }
  }),

  watch: {
    $route: function $route(route) {
      var _this = this;

      var parent = _findMatchingParentMenuItem.call(this, route.name) || {};
      this.menuItems.forEach(function (item) {
        _this.expand({
          menuItem: item,
          expand: parent.name === item.name
        });
      });
    }
  },

  data: function data() {
    return {
      show: false
    };
  }
});

function _findMatchingParentMenuItem(itemName) {
  var parentItem = void 0;

  this.menuItems.forEach(function (item) {
    parentItem = item.children && item.children.find(function (child) {
      return child.name === itemName;
    }) ? item : parentItem;
  });

  return parentItem;
}

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(323)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(325)
/* template */
var __vue_template__ = __webpack_require__(326)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-bulma-expanding/src/Expanding.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4409f938", Component.options)
  } else {
    hotAPI.reload("data-v-4409f938", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(324);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("6c5289e2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4409f938\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Expanding.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4409f938\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Expanding.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.collapse {\n  display: none;\n}\n.collapse.in {\n    display: block;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height .377s ease;\n  transition: height .377s ease;\n}\n", ""]);

// exports


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.classList.remove('collapse');
      el.style.display = 'block';
      el.classList.add('collapsing');
      el.style.height = el.scrollHeight + 'px';
    },
    afterEnter: function afterEnter(el) {
      el.classList.remove('collapsing');
      el.classList.add('collapse', 'in');
    },
    beforeLeave: function beforeLeave(el) {
      el.classList.add('collapsing');
      el.classList.remove('collapse', 'in');
      el.style.height = 0;
    },
    afterLeave: function afterLeave(el) {
      el.classList.remove('collapsing');
      el.classList.add('collapse');
      el.style.display = 'none';
    }
  }

});

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      on: {
        beforeEnter: _vm.beforeEnter,
        afterEnter: _vm.afterEnter,
        beforeLeave: _vm.beforeLeave,
        afterLeave: _vm.afterLeave
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4409f938", module.exports)
  }
}

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    { staticClass: "sidebar" },
    [
      _c("vuestic-scrollbar", [
        _c(
          "ul",
          { staticClass: "sidebar-menu" },
          _vm._l(_vm.menuItems, function(item, index) {
            return _c(
              "li",
              [
                item.path && item.meta.title
                  ? _c(
                      "router-link",
                      {
                        staticClass: "sidebar-link",
                        attrs: { to: item.path },
                        on: {
                          click: function($event) {
                            _vm.toggleMenuItem(item)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "sidebar-menu-item-icon",
                          class: item.meta.iconClass
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(item.meta.title) +
                            "\n        "
                        )
                      ]
                    )
                  : _c(
                      "a",
                      {
                        staticClass: "sidebar-link",
                        class: { expanded: item.meta.expanded },
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.toggleMenuItem(item)
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "sidebar-menu-item-icon",
                          class: item.meta.iconClass
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(item.meta.title) +
                            "\n          "
                        ),
                        _c("i", { staticClass: "expand-icon fa fa-angle-down" })
                      ]
                    ),
                _vm._v(" "),
                _c("expanding", [
                  _c(
                    "ul",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: item.meta.expanded,
                          expression: "item.meta.expanded"
                        }
                      ],
                      staticClass: "sidebar-submenu in"
                    },
                    _vm._l(item.children, function(childItem) {
                      return _c(
                        "li",
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "sidebar-link sidebar-submenu-link",
                              attrs: { to: childItem.path }
                            },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(childItem.meta.title) +
                                  "\n              "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    })
                  )
                ])
              ],
              1
            )
          })
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-06f55b7b", module.exports)
  }
}

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(58);


/* harmony default export */ __webpack_exports__["a"] = ({
  inserted: function inserted(el) {
    var getWindowMatch = function getWindowMatch() {
      return window.matchMedia(__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.config.windowMatchSizeLg).matches;
    };

    var prevMatchlg = getWindowMatch();

    el.addEventListener('transitionend', function () {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch('isToggleWithoutAnimation', false);
    });

    window.addEventListener('resize', function () {
      if (getWindowMatch() && !prevMatchlg) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch('toggleSidebar', true);
      } else if (!getWindowMatch() && prevMatchlg) {
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch('isToggleWithoutAnimation', true);
        __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch('toggleSidebar', false);
      }
      prevMatchlg = getWindowMatch();
    });
  }
});

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [{ name: "resize", rawName: "v-resize" }],
      class: _vm.classObject
    },
    [
      _c("navbar"),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content-wrap", attrs: { id: "content-wrap" } },
        [
          _c(
            "main",
            { staticClass: "content", attrs: { id: "content", role: "main" } },
            [
              _c("vuestic-pre-loader", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isLoading,
                    expression: "isLoading"
                  }
                ],
                ref: "preLoader",
                staticClass: "pre-loader"
              }),
              _vm._v(" "),
              _c("router-view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isLoading,
                    expression: "!isLoading"
                  }
                ]
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16ee41c8", module.exports)
  }
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(308)
/* template */
var __vue_template__ = __webpack_require__(648)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/layout/Layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16ee41c8", Component.options)
  } else {
    hotAPI.reload("data-v-16ee41c8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});