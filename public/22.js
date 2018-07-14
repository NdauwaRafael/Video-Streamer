webpackJsonp([22],{

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(699)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(701)
/* template */
var __vue_template__ = __webpack_require__(702)
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
Component.options.__file = "resources/assets/js/components/ui/buttons/Buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-216168a2", Component.options)
  } else {
    hotAPI.reload("data-v-216168a2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(700);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("2208f391", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-216168a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Buttons.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-216168a2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./Buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime (64)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.3\n    at module.exports (/Users/cytonn/code/Video-Streamer/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/cytonn/code/Video-Streamer/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\n    at Module.load (internal/modules/cjs/loader.js:612:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\n    at Module.require (internal/modules/cjs/loader.js:650:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at Object.<anonymous> (/Users/cytonn/code/Video-Streamer/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:702:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)\n    at Module.load (internal/modules/cjs/loader.js:612:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:551:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:543:3)\n    at Module.require (internal/modules/cjs/loader.js:650:17)\n    at require (internal/modules/cjs/helpers.js:20:18)\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/cytonn/code/Video-Streamer/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/cytonn/code/Video-Streamer/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/cytonn/code/Video-Streamer/node_modules/webpack/lib/NormalModule.js:275:15)");

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_Dropdown__ = __webpack_require__(28);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'buttons',
  directives: {
    Dropdown: __WEBPACK_IMPORTED_MODULE_2__directives_Dropdown__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['sidebarOpened']))
});

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "buttons-page" }, [
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vuestic-widget",
          {
            staticClass: "col-sm-12 primary-secondary-buttons larger-padding",
            attrs: { headerText: "Primary & Secondary Buttons" }
          },
          [
            _c("div", { staticClass: "row btn-margin-row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-primary hover" }, [
                    _vm._v("\n            HOVER\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-primary focus" }, [
                    _vm._v("\n            PRESSED\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "button",
                    { staticClass: "btn btn-primary", attrs: { disabled: "" } },
                    [_vm._v("\n            DISABLED\n          ")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row btn-margin-row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-secondary" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-secondary hover" }, [
                    _vm._v("\n            HOVER\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-secondary focus" }, [
                    _vm._v("\n            PRESSED\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { disabled: "" }
                    },
                    [_vm._v("\n            DISABLED\n          ")]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row btn-margin-row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6 d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                    _vm._v("\n            SMALL\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-sm-6 d-flex justify-content-center align-items-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-primary btn-micro" }, [
                    _vm._v("\n            MICRO\n          ")
                  ])
                ]
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vuestic-widget",
          {
            staticClass: "col-sm-12 color-buttons",
            attrs: { headerText: "Icons, Groups, Dropdowns" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "button",
                    { staticClass: "btn btn-primary btn-with-icon" },
                    [
                      _c("div", { staticClass: "btn-with-icon-content" }, [
                        _c("i", { staticClass: "ion-android-close ion" }),
                        _vm._v("\n              BUTTON\n            ")
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "div",
                    {
                      directives: [{ name: "dropdown", rawName: "v-dropdown" }],
                      staticClass: "dropdown d-inline-flex"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-primary dropdown-toggle theme-toggle ",
                          attrs: {
                            type: "button",
                            id: "dropdownMenuButton",
                            "data-toggle": "dropdown"
                          }
                        },
                        [
                          _vm._v("\n              DROPDOWN\n              "),
                          _c("i", {
                            staticClass: "ion-chevron-down arrow-down"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu",
                          attrs: { "aria-labelledby": "dropdownMenuButton" }
                        },
                        [
                          _c("div", { staticClass: "dropdown-menu-content" }, [
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" }
                              },
                              [_vm._v("Action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" }
                              },
                              [_vm._v("Another action")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "dropdown-item",
                                attrs: { href: "#" }
                              },
                              [_vm._v("Something else here")]
                            )
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-4": _vm.sidebarOpened,
                    "col-lg-4": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "btn-toolbar  d-inline-flex",
                      attrs: {
                        role: "toolbar",
                        "aria-label": "Toolbar with button groups"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "btn-group",
                          attrs: { role: "group", "aria-label": "First group" }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" }
                            },
                            [_vm._v("1")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary focus",
                              attrs: { type: "button" }
                            },
                            [_vm._v("2")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" }
                            },
                            [_vm._v("3")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" }
                            },
                            [_vm._v("4")]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-2": _vm.sidebarOpened,
                    "col-lg-2": !_vm.sidebarOpened
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary btn-with-icon rounded-icon"
                    },
                    [
                      _c("div", { staticClass: "btn-with-icon-content" }, [
                        _c("i", { staticClass: "ion-android-close ion" })
                      ])
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c(
          "vuestic-widget",
          {
            staticClass: "col-sm-12 color-buttons",
            attrs: { headerText: "Colors" }
          },
          [
            _c("div", { staticClass: "row btn-margin-row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-danger" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-info" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-dark" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-warning" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row btn-margin-row" }, [
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-sm-6  d-flex justify-content-center",
                  class: {
                    "col-lg-6 col-xl-3": _vm.sidebarOpened,
                    "col-lg-3": !_vm.sidebarOpened
                  }
                },
                [
                  _c("button", { staticClass: "btn btn-pale" }, [
                    _vm._v("\n            BUTTON\n          ")
                  ])
                ]
              )
            ])
          ]
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-216168a2", module.exports)
  }
}

/***/ })

});