webpackJsonp([22],{

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(624)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(626)
/* template */
var __vue_template__ = __webpack_require__(627)
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
Component.options.__file = "resources/assets/js/components/pages/videos/create.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f66b17e", Component.options)
  } else {
    hotAPI.reload("data-v-0f66b17e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(625);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("980812a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f66b17e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./create.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f66b17e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.widget.simple-vertical-wizard-widget .widget-body {\n  padding: 0 1.5625rem;\n}\n@media (max-width: 767px) {\n.widget.simple-vertical-wizard-widget .widget-body {\n      padding: 1.5625rem 0;\n}\n}\n.form-wizard-page .form-group {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n", ""]);

// exports


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__);




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VuesticWizard: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default.a,
        VuesticSimpleSelect: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default.a
    },
    data: function data() {
        var _this = this;

        return {
            hsSteps: [{
                label: 'Step 1. File Name',
                slot: 'page1',
                onNext: function onNext() {
                    _this.validateFormField('hsName');
                },
                isValid: function isValid() {
                    return _this.isFormFieldValid('hsName');
                }
            }, {
                label: 'Step 2. File',
                slot: 'page2',
                onNext: function onNext() {
                    _this.$refs.hsCountrySelect.validate();
                },
                isValid: function isValid() {
                    return _this.$refs.hsCountrySelect.isValid();
                }
            }, {
                label: 'Step 3. Description',
                slot: 'page3'
            }, {
                label: 'Step 4. Confirm',
                slot: 'page3'
            }],
            hsName: '',
            hsCountry: '',
            hrName: '',
            hrCountry: '',
            vrName: '',
            vrCountry: '',
            vsName: '',
            vsCountry: '',
            email: '',
            countriesList: CountriesList,
            chosenCountry: ''
        };
    },

    methods: {
        isFormFieldValid: function isFormFieldValid(field) {
            var isValid = false;
            if (this.formFields[field]) {
                isValid = this.formFields[field].validated && this.formFields[field].valid;
            }
            return isValid;
        },
        validateFormField: function validateFormField(fieldName) {
            this.$validator.validate(fieldName, this[fieldName]);
        }
    }
});

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-wizard-page" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c(
            "vuestic-widget",
            {
              staticClass: "no-h-padding",
              attrs: { headerText: "Simple Wizard" }
            },
            [
              _c("vuestic-wizard", { attrs: { steps: _vm.hsSteps } }, [
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "page1" },
                    slot: "page1"
                  },
                  [
                    _c("p", [
                      _vm._v(
                        'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n                            soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n                            their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group with-icon-right",
                        class: {
                          "has-error": _vm.errors.has("hsName"),
                          valid: _vm.isFormFieldValid("hsName")
                        }
                      },
                      [
                        _c("div", { staticClass: "input-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.hsName,
                                expression: "hsName"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { name: "hsName", required: "", title: "" },
                            domProps: { value: _vm.hsName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.hsName = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fa fa-exclamation-triangle error-icon icon-right input-icon"
                          }),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "fa fa-check valid-icon icon-right input-icon"
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "control-label" }, [
                            _vm._v("Name")
                          ]),
                          _c("i", { staticClass: "bar" }),
                          _vm._v(" "),
                          _c(
                            "small",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("hsName"),
                                  expression: "errors.has('hsName')"
                                }
                              ],
                              staticClass: "help text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("hsName")))]
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "page2" },
                    slot: "page2"
                  },
                  [
                    _c("p", [
                      _vm._v(
                        'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n                            soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n                            their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "page3" },
                    slot: "page3"
                  },
                  [
                    _c("p", [
                      _vm._v(
                        'Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n                            soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n                            their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"'
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "page4" },
                    slot: "page4"
                  },
                  [
                    _c("h4", [_vm._v("Confirm selection")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        '\n                            Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n                            soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n                            their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n                        '
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    attrs: { slot: "wizardCompleted" },
                    slot: "wizardCompleted"
                  },
                  [
                    _c("h4", [_vm._v("Wizard completed!")]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        '\n                            Zebras communicate with facial expressions and sounds. They make loud braying or barking sounds and\n                            soft snorting sounds. The position of their ears, how wide open their eyes are, and whether they show\n                            their teeth all send a signal. For example, ears flat back means trouble, or "you better follow orders!"\n                        '
                      )
                    ])
                  ]
                )
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-0f66b17e", module.exports)
  }
}

/***/ })

});