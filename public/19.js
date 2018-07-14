webpackJsonp([19],{

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

/***/ })

});