webpackJsonp([17],{

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(636)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(638)
/* template */
var __vue_template__ = __webpack_require__(639)
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
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("1442898f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f66b17e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f66b17e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.widget.simple-vertical-wizard-widget .widget-body {\n  padding: 0 1.5625rem;\n}\n@media (max-width: 767px) {\n.widget.simple-vertical-wizard-widget .widget-body {\n      padding: 1.5625rem 0;\n}\n}\n.form-wizard-page .form-group {\n  min-width: 200px;\n  max-width: 360px;\n  width: 80%;\n}\n", ""]);

// exports


/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect__);
throw new Error("Cannot find module \"element-ui\"");




/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VuesticWizard: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_wizard_VuesticWizard___default.a,
        VuesticSimpleSelect: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_simple_select_VuesticSimpleSelect___default.a,
        'el-upload': __WEBPACK_IMPORTED_MODULE_2_element_ui__["Upload"]
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
                label: 'Step 2. Upload Video',
                slot: 'page2',
                onNext: function onNext() {
                    _this.$refs.hsCountrySelect.validate();
                },
                isValid: function isValid() {
                    return _this.$refs.hsCountrySelect.isValid();
                }
            }, {
                label: 'Step 3. Add Description',
                slot: 'page3'
            }, {
                label: 'Step 4. Confirm',
                slot: 'page4'
            }],

            form: {},
            hsName: '',
            hsCountry: '',
            hrName: '',
            hrCountry: '',
            vrName: '',
            vrCountry: '',
            vsName: '',
            vsCountry: '',
            email: '',
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

/***/ 639:
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
                        'In order to identify your specified tutorial Video it is advisable to provide your videos with unique names that are easy to remember and identify with.\n                            Kindly provide a relevant name for the tutorial you are about to add in the specified field below!"'
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
                                value: _vm.form.filename,
                                expression: "form.filename"
                              },
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            attrs: { name: "hsName", required: "", title: "" },
                            domProps: { value: _vm.form.filename },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "filename",
                                  $event.target.value
                                )
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
                            _vm._v("Video Name")
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
                    class: {
                      "has-error": _vm.errors.has("video"),
                      valid: _vm.isFormFieldValid("video")
                    },
                    attrs: { slot: "page2" },
                    slot: "page2"
                  },
                  [
                    _c("p", [_vm._v('Attach the file!"')]),
                    _vm._v(" "),
                    _c(
                      "el-upload",
                      {
                        staticClass: "upload-demo",
                        attrs: {
                          name: "video",
                          drag: "",
                          action: "https://jsonplaceholder.typicode.com/posts/"
                        }
                      },
                      [
                        _c("i", { staticClass: "el-icon-upload" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "el-upload__text" }, [
                          _vm._v("Drop your Video here or "),
                          _c("em", [_vm._v("click to upload")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "el-upload__tip",
                            attrs: { slot: "tip" },
                            slot: "tip"
                          },
                          [
                            _vm._v(
                              "mp4/mpeg4 files with a size less than 500mb"
                            )
                          ]
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-wizard-tab-content",
                    class: {
                      "has-error": _vm.errors.has("description"),
                      valid: _vm.isFormFieldValid("description")
                    },
                    attrs: { slot: "page3" },
                    slot: "page3"
                  },
                  [
                    _c("p", [
                      _vm._v(
                        'To capture your audience attention, It is advisable you provide a short naration to introduce the viewer to the video. In this section, you can also provide any explanation or apologize for any shortcomings that might occur in the video!"'
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.description,
                              expression: "form.description"
                            }
                          ],
                          attrs: {
                            type: "text",
                            name: "description",
                            id: "simple-textarea",
                            required: ""
                          },
                          domProps: { value: _vm.form.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "description",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "simple-textarea" }
                          },
                          [_vm._v("Textarea")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
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
                        '\n                            By submitting this form, you give consent to tutorial master to publish and make available\n                            this video to public domain. Any conflicts arised from this action is not held accountable to the company\n                            but to the individual who published it. If you agree, proceed!"\n                        '
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
                  [_c("h4", [_vm._v("Wizard completed!")])]
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