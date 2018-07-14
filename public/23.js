webpackJsonp([23],{

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(626)
/* template */
var __vue_template__ = __webpack_require__(627)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/auth/login/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c37f753", Component.options)
  } else {
    hotAPI.reload("data-v-5c37f753", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login'
});

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c("h2", [_vm._v("Welcome!")]),
    _vm._v(" "),
    _c(
      "form",
      { attrs: { method: "post", action: "/auth/login", name: "login" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-column flex-lg-row align-items-center justify-content-between down-container"
          },
          [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [_vm._v("\n        Log In\n      ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "link", attrs: { to: { name: "Signup" } } },
              [_vm._v("Create account")]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          attrs: { type: "text", id: "email", required: "required" }
        }),
        _vm._v(" "),
        _c("label", { staticClass: "control-label", attrs: { for: "email" } }, [
          _vm._v("Email")
        ]),
        _c("i", { staticClass: "bar" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "input-group" }, [
        _c("input", {
          attrs: { type: "password", id: "password", required: "required" }
        }),
        _vm._v(" "),
        _c(
          "label",
          { staticClass: "control-label", attrs: { for: "password" } },
          [_vm._v("Password")]
        ),
        _c("i", { staticClass: "bar" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c37f753", module.exports)
  }
}

/***/ })

});