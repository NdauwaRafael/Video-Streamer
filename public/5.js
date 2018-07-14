webpackJsonp([5],{

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(605)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(607)
/* template */
var __vue_template__ = __webpack_require__(608)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c155902"
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
Component.options.__file = "resources/assets/js/components/dashboard/DashboardInfoWidgets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c155902", Component.options)
  } else {
    hotAPI.reload("data-v-6c155902", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(606);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7c75eb59", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c155902\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardInfoWidgets.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6c155902\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardInfoWidgets.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.stats-number[data-v-6c155902], .stats-title[data-v-6c155902] {\n  line-height: 1;\n}\n.info-widget-inner[data-v-6c155902] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  width: 100%;\n}\n.info-widget-inner.has-chart[data-v-6c155902] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n.info-widget-inner .stats[data-v-6c155902] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n}\n.stats-number[data-v-6c155902] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 2.625rem;\n  margin-bottom: 0.5rem;\n}\n.stats-number .stats-icon[data-v-6c155902] {\n    font-size: 1.5625rem;\n    position: absolute;\n    top: 0.625rem;\n    left: -1.25rem;\n}\n.stats-number .stats-icon.icon-wide[data-v-6c155902] {\n      left: -1.875rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_progress_bar_VuesticProgressBar__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_progress_bar_VuesticProgressBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_progress_bar_VuesticProgressBar__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard-info-widgets',
  components: {
    ProgressBar: __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_progress_bar_VuesticProgressBar___default.a
  },

  mounted: function mounted() {
    this.$refs.circleProgress.$data.value = 70;
  }
});

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row dashboard-info-widgets" }, [
    _c(
      "div",
      { staticClass: "col-md-6 col-xl-3" },
      [
        _c("vuestic-widget", { staticClass: "info-widget" }, [
          _c("div", { staticClass: "info-widget-inner" }, [
            _c("div", { staticClass: "stats" }, [
              _c("div", { staticClass: "stats-number" }, [
                _c("i", {
                  staticClass: "ion ion-arrow-up-c text-primary stats-icon"
                }),
                _vm._v("\n            59\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "stats-title" }, [_vm._v("Elements")])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6 col-xl-3" },
      [
        _c("vuestic-widget", { staticClass: "info-widget" }, [
          _c("div", { staticClass: "info-widget-inner" }, [
            _c("div", { staticClass: "stats" }, [
              _c("div", { staticClass: "stats-number" }, [
                _c("i", {
                  staticClass: "ion ion-arrow-down-c text-danger stats-icon"
                }),
                _vm._v("\n            12\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "stats-title" }, [_vm._v("Versions")])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6 col-xl-3" },
      [
        _c("vuestic-widget", { staticClass: "info-widget brand-danger" }, [
          _c("div", { staticClass: "info-widget-inner" }, [
            _c("div", { staticClass: "info-widget-inner has-chart" }, [
              _c("div", { staticClass: "stats" }, [
                _c("div", { staticClass: "stats-number" }, [
                  _vm._v("\n              425\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "stats-title" }, [_vm._v("Commits")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "chart-container" },
                [
                  _c("progress-bar", {
                    ref: "circleProgress",
                    attrs: {
                      type: "circle",
                      colorName: "white",
                      backgroundColorName: "danger",
                      startColorName: "danger"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6 col-xl-3" },
      [
        _c("vuestic-widget", { staticClass: "info-widget brand-info" }, [
          _c("div", { staticClass: "info-widget-inner" }, [
            _c("div", { staticClass: "stats" }, [
              _c("div", { staticClass: "stats-number" }, [
                _c("i", {
                  staticClass: "ion ion-android-people stats-icon icon-wide"
                }),
                _vm._v("\n            5\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "stats-title" }, [
                _vm._v("Team Members")
              ])
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c155902", module.exports)
  }
}

/***/ })

});