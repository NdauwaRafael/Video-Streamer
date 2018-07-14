webpackJsonp([19],{

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(618)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(620)
/* template */
var __vue_template__ = __webpack_require__(621)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b1ec3e0"
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
Component.options.__file = "resources/assets/js/components/dashboard/features-tab/FeaturesTab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b1ec3e0", Component.options)
  } else {
    hotAPI.reload("data-v-6b1ec3e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(619);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2e54142a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1ec3e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FeaturesTab.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6b1ec3e0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FeaturesTab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.overview-item[data-v-6b1ec3e0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 55px;\n  margin-bottom: 3rem;\n  padding-right: 1rem;\n  font-size: 1.25rem;\n  font-weight: bold;\n}\n.overview-item .overview-icon-container[data-v-6b1ec3e0] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    min-width: 85px;\n    max-width: 85px;\n    height: 100%;\n}\n@media (max-width: 575px) {\n.overview-row[data-v-6b1ec3e0] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n}\n.overview-col[data-v-6b1ec3e0]:first-child {\n  margin-left: 2rem;\n}\n@media (max-width: 991px) {\n.overview-col[data-v-6b1ec3e0]:first-child {\n      margin-left: 0;\n}\n}\n.explore-btn[data-v-6b1ec3e0] {\n  margin-top: 6rem;\n  margin-bottom: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'features-tab'
});

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overview-tab dashboard-tab" }, [
      _c(
        "div",
        {
          staticClass:
            "d-flex overview-row flex-row w-100 justify-content-sm-around justify-content-xs-start"
        },
        [
          _c("div", { staticClass: "overview-col" }, [
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-vue" })
              ]),
              _vm._v("\n        Built with Vue.js framework\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-free" })
              ]),
              _vm._v("\n        Absolutely free for everyone\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-fresh" })
              ]),
              _vm._v("\n        Fresh and crisp design\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "overview-col" }, [
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-responsive" })
              ]),
              _vm._v("\n        Responsive and optimized for mobile\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-rich" })
              ]),
              _vm._v("\n        Tons of useful components\n      ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "overview-item" }, [
              _c("div", { staticClass: "overview-icon-container" }, [
                _c("i", { staticClass: "i-vuestic-clean-code" })
              ]),
              _vm._v("\n        Completely jQuery free\n      ")
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6b1ec3e0", module.exports)
  }
}

/***/ })

});