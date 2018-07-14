webpackJsonp([7],{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(680)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(682)
/* template */
var __vue_template__ = __webpack_require__(688)
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
Component.options.__file = "resources/assets/js/components/statistics/charts/Charts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ed9f05cc", Component.options)
  } else {
    hotAPI.reload("data-v-ed9f05cc", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  hex2rgb: function hex2rgb(hex, opacity) {
    hex = (hex + '').trim();

    var rgb = null;
    var match = hex.match(/^#?(([0-9a-zA-Z]{3}){1,3})$/);

    if (!match) {
      return null;
    }

    rgb = {};

    hex = match[1];

    if (hex.length === 6) {
      rgb.r = parseInt(hex.substring(0, 2), 16);
      rgb.g = parseInt(hex.substring(2, 4), 16);
      rgb.b = parseInt(hex.substring(4, 6), 16);
    } else if (hex.length === 3) {
      rgb.r = parseInt(hex.substring(0, 1) + hex.substring(0, 1), 16);
      rgb.g = parseInt(hex.substring(1, 2) + hex.substring(1, 2), 16);
      rgb.b = parseInt(hex.substring(2, 3) + hex.substring(2, 3), 16);
    }

    rgb.css = 'rgb' + (opacity ? 'a' : '') + '(';
    rgb.css += rgb.r + ',' + rgb.g + ',' + rgb.b;
    rgb.css += (opacity ? ',' + opacity : '') + ')';

    return rgb;
  }
});

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_utils__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store___ = __webpack_require__(35);




var palette = __WEBPACK_IMPORTED_MODULE_1__store___["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Debit',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].hex2rgb(palette.primary, 0.6).css,
    borderColor: palette.transparent,
    data: [40, 39, 10, 40, 39, 80, 40]
  }, {
    label: 'Credit',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_0__services_utils__["a" /* default */].hex2rgb(palette.info, 0.6).css,
    borderColor: palette.transparent,
    data: [50, 20, 70, 30, 10, 5, 70]
  }]
});

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(681);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1a994d51", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed9f05cc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Charts.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ed9f05cc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Charts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (64)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.3\n    at module.exports (/Users/cytonn/code/Video-Streamer/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/cytonn/code/Video-Streamer/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\n    at Module.load (internal/modules/cjs/loader.js:612:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\n    at Module.require (internal/modules/cjs/loader.js:650:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/Users/cytonn/code/Video-Streamer/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\n    at Module.load (internal/modules/cjs/loader.js:612:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\n    at Module.require (internal/modules/cjs/loader.js:650:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/cytonn/code/Video-Streamer/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/cytonn/code/Video-Streamer/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LineChartData__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BubbleChartData__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PieChartData__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DonutChartData__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VerticalBarChartData__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HorizontalBarChartData__ = __webpack_require__(687);










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'charts',
  components: {
    VuesticChart: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_chart_VuesticChart_vue___default.a
  },
  data: function data() {
    return {
      bubbleChartData: __WEBPACK_IMPORTED_MODULE_2__BubbleChartData__["a" /* default */],
      lineChartData: __WEBPACK_IMPORTED_MODULE_1__LineChartData__["a" /* default */],
      pieChartData: __WEBPACK_IMPORTED_MODULE_3__PieChartData__["a" /* default */],
      donutChartData: __WEBPACK_IMPORTED_MODULE_4__DonutChartData__["a" /* default */],
      verticalBarChartData: __WEBPACK_IMPORTED_MODULE_5__VerticalBarChartData__["a" /* default */],
      horizontalBarChartData: __WEBPACK_IMPORTED_MODULE_6__HorizontalBarChartData__["a" /* default */]
    };
  }
});

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils__ = __webpack_require__(589);



var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  datasets: [{
    label: 'USA',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__services_utils__["a" /* default */].hex2rgb(palette.danger, 0.9).css,
    borderColor: palette.transparent,
    data: [{
      x: 23,
      y: 25,
      r: 15
    }, {
      x: 40,
      y: 10,
      r: 10
    }, {
      x: 30,
      y: 22,
      r: 30
    }, {
      x: 7,
      y: 43,
      r: 40
    }, {
      x: 23,
      y: 27,
      r: 120
    }, {
      x: 20,
      y: 15,
      r: 11
    }, {
      x: 7,
      y: 10,
      r: 35
    }, {
      x: 10,
      y: 20,
      r: 40
    }]
  }, {
    label: 'Russia',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__services_utils__["a" /* default */].hex2rgb(palette.primary, 0.9).css,
    borderColor: palette.transparent,
    data: [{
      x: 0,
      y: 30,
      r: 15
    }, {
      x: 20,
      y: 20,
      r: 20
    }, {
      x: 15,
      y: 15,
      r: 50
    }, {
      x: 31,
      y: 46,
      r: 30
    }, {
      x: 20,
      y: 14,
      r: 25
    }, {
      x: 34,
      y: 17,
      r: 30
    }, {
      x: 44,
      y: 44,
      r: 10
    }, {
      x: 39,
      y: 25,
      r: 35
    }]
  }, {
    label: 'Canada',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__services_utils__["a" /* default */].hex2rgb(palette.warning, 0.9).css,
    borderColor: palette.transparent,
    data: [{
      x: 10,
      y: 30,
      r: 45
    }, {
      x: 10,
      y: 50,
      r: 20
    }, {
      x: 5,
      y: 5,
      r: 30
    }, {
      x: 40,
      y: 30,
      r: 20
    }, {
      x: 33,
      y: 15,
      r: 18
    }, {
      x: 40,
      y: 20,
      r: 40
    }, {
      x: 33,
      y: 33,
      r: 40
    }]
  }, {
    label: 'Belarus',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__services_utils__["a" /* default */].hex2rgb(palette.info, 0.9).css,
    borderColor: palette.transparent,
    data: [{
      x: 35,
      y: 30,
      r: 45
    }, {
      x: 25,
      y: 40,
      r: 35
    }, {
      x: 5,
      y: 5,
      r: 30
    }, {
      x: 5,
      y: 20,
      r: 40
    }, {
      x: 10,
      y: 40,
      r: 15
    }, {
      x: 3,
      y: 10,
      r: 10
    }, {
      x: 15,
      y: 40,
      r: 40
    }, {
      x: 7,
      y: 15,
      r: 10
    }]
  }, {
    label: 'Ukraine',
    backgroundColor: __WEBPACK_IMPORTED_MODULE_1__services_utils__["a" /* default */].hex2rgb(palette.success, 0.9).css,
    borderColor: palette.transparent,
    data: [{
      x: 25,
      y: 10,
      r: 40
    }, {
      x: 17,
      y: 40,
      r: 40
    }, {
      x: 35,
      y: 10,
      r: 20
    }, {
      x: 3,
      y: 40,
      r: 10
    }, {
      x: 40,
      y: 40,
      r: 40
    }, {
      x: 20,
      y: 10,
      r: 10
    }, {
      x: 10,
      y: 27,
      r: 35
    }, {
      x: 7,
      y: 26,
      r: 40
    }]
  }]
});

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(35);


var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['Africa', 'Asia', 'Europe'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.primary, palette.warning, palette.danger],
    data: [2478, 5267, 734]
  }]
});

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(35);


var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['North America', 'South America', 'Australia'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [palette.danger, palette.info, palette.success],
    data: [2478, 5267, 734]
  }]
});

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(35);


var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'USA',
    backgroundColor: palette.primary,
    borderColor: palette.transparent,
    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
  }, {
    label: 'USSR',
    backgroundColor: palette.info,
    borderColor: palette.transparent,
    data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30]
  }]
});

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(35);


var palette = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.palette;

/* harmony default export */ __webpack_exports__["a"] = ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [{
    label: 'Vuestic Satisfaction Score',
    backgroundColor: palette.warning,
    borderColor: palette.transparent,
    data: [80, 90, 50, 70, 60, 90, 50, 90, 80, 40, 72, 93]
  }, {
    label: 'Bulma Satisfaction Score',
    backgroundColor: palette.danger,
    borderColor: palette.transparent,
    data: [20, 30, 20, 40, 50, 40, 15, 60, 30, 20, 42, 53]
  }]
});

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "charts-page" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "chart-widget",
              attrs: { headerText: "Vertical Bar Chart" }
            },
            [
              _c("vuestic-chart", {
                attrs: { data: _vm.verticalBarChartData, type: "vertical-bar" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "chart-widget",
              attrs: { headerText: "Horizontal Bar Chart" }
            },
            [
              _c("vuestic-chart", {
                attrs: {
                  data: _vm.horizontalBarChartData,
                  type: "horizontal-bar"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "chart-widget",
              attrs: { headerText: "Line Chart" }
            },
            [
              _c("vuestic-chart", {
                attrs: { data: _vm.lineChartData, type: "line" }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "vuestic-widget",
            { staticClass: "chart-widget", attrs: { headerText: "Pie Chart" } },
            [
              _c("vuestic-chart", {
                attrs: { data: _vm.pieChartData, type: "pie" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "chart-widget",
              attrs: { headerText: "Donut Chart" }
            },
            [
              _c("vuestic-chart", {
                attrs: { data: _vm.donutChartData, type: "donut" }
              })
            ],
            1
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "chart-widget",
              attrs: { headerText: "Bubble Chart" }
            },
            [
              _c("vuestic-chart", {
                attrs: { data: _vm.bubbleChartData, type: "bubble" }
              })
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ed9f05cc", module.exports)
  }
}

/***/ })

});