webpackJsonp([1,5,6],{

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(711)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(713)
/* template */
var __vue_template__ = __webpack_require__(714)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-153ca07c"
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
Component.options.__file = "resources/assets/js/components/pages/users/utils/BadgeColumn.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-153ca07c", Component.options)
  } else {
    hotAPI.reload("data-v-153ca07c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(737)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(739)
/* template */
var __vue_template__ = __webpack_require__(740)
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
Component.options.__file = "resources/assets/js/components/pages/users/utils/add_role.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d15ee9b", Component.options)
  } else {
    hotAPI.reload("data-v-3d15ee9b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(755)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(757)
/* template */
var __vue_template__ = __webpack_require__(759)
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
Component.options.__file = "resources/assets/js/components/pages/users/roles.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a493a4", Component.options)
  } else {
    hotAPI.reload("data-v-42a493a4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(712);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("7bbe9f22", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-153ca07c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BadgeColumn.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-153ca07c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./BadgeColumn.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.circle[data-v-153ca07c] {\n  width: .75rem;\n  height: .75rem;\n  border-radius: 50%;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'badgeColumn',
    props: {
        rowData: {
            type: Object,
            required: true
        },
        rowIndex: {
            type: Number
        }
    },
    data: function data() {
        return {
            classObject: {
                'badge-warning': this.rowIndex % 6 === 0,
                'badge-primary': this.rowIndex % 6 === 1,
                'badge-danger': this.rowIndex % 6 === 2,
                'badge-info': this.rowIndex % 6 === 3,
                'badge-violet': this.rowIndex % 6 === 4,
                'badge-dark-blue': this.rowIndex % 6 === 5
            }
        };
    }
});

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "circle", class: _vm.classObject })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-153ca07c", module.exports)
  }
}

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  itemsPerPage: [{
    value: 5
  }, {
    value: 6
  }, {
    value: 10
  }]
});

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(738);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("82e77cda", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d15ee9b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./add_role.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3d15ee9b\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./add_role.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.abc-checkbox, .abc-radio {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\ninput[type=checkbox]:disabled + label, input[type=radio]:disabled + label,\ninput[type=checkbox]:disabled, input[type=radio]:disabled {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'form-elements',
    data: function data() {
        return {
            role: ''
        };
    },

    methods: {
        addRole: function addRole() {
            if (this.role !== '') {
                this.$store.commit('ADD_ROLE', this.role);
            }
        }
    }

});

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "form-elements" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("vuestic-widget", { attrs: { headerText: "Add New Role" } }, [
            _c("form", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("fieldset", [
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.role,
                              expression: "role"
                            }
                          ],
                          attrs: { id: "simple-input", required: "" },
                          domProps: { value: _vm.role },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.role = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "control-label",
                            attrs: { for: "simple-input" }
                          },
                          [_vm._v("Role Name")]
                        ),
                        _c("i", { staticClass: "bar" })
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("fieldset", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-micro hover",
                        on: { click: _vm.addRole }
                      },
                      [
                        _vm._v(
                          "\n                                    Add Role\n                                "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-3d15ee9b", module.exports)
  }
}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(756);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fffffaf8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42a493a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./roles.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42a493a4\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./roles.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.add_role_row {\n  padding-bottom: 15px;\n}\n.color-icon-label-table td:first-child {\n  width: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuestic_components_vuestic_modal_VuesticModal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vuestic_components_vuestic_modal_VuesticModal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vuestic_components_vuestic_modal_VuesticModal__);








__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('badge-column', __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue___default.a);
__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('add-role', __webpack_require__(701));

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        DataTable: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default.a,
        Widget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default.a,
        Modal: __WEBPACK_IMPORTED_MODULE_6__vuestic_components_vuestic_modal_VuesticModal___default.a
    },
    name: 'Table',
    data: function data() {
        return {
            apiUrl: 'api/roles',
            apiMode: true,
            itemsPerPage: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__["a" /* default */].itemsPerPage,
            paginationPath: '',
            showCreateRoleModal: false,
            tableFields: [{
                name: '__component:badge-column',
                title: '',
                dataClass: 'text-center'
            }, {
                name: 'name',
                sortField: 'name'
            }],
            sortFunctions: {
                'name': function name(item1, item2) {
                    return item1 >= item2 ? 1 : -1;
                },
                'email': function email(item1, item2) {
                    return item1 >= item2 ? 1 : -1;
                }
            }

        };
    }
});

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  tableFields: [{
    name: '__component:badge-column',
    title: '',
    dataClass: 'text-center'
  }, {
    name: 'name',
    sortField: 'name'
  }, {
    name: 'email',
    sortField: 'email'
  }, {
    name: 'address.line2',
    title: 'city'
  }, {
    name: 'salary',
    title: 'score'
  }],
  sortFunctions: {
    'name': function name(item1, item2) {
      return item1 >= item2 ? 1 : -1;
    },
    'email': function email(item1, item2) {
      return item1 >= item2 ? 1 : -1;
    }
  }
});

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("div", { staticClass: "row add_role_row" }, [
            _c("div", { staticClass: "col-md-8" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md-col-4 " },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info  btn-micro",
                    on: {
                      click: function($event) {
                        _vm.showCreateRoleModal = true
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Add New Role\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "el-dialog",
                  {
                    attrs: { title: "", visible: _vm.showCreateRoleModal },
                    on: {
                      "update:visible": function($event) {
                        _vm.showCreateRoleModal = $event
                      }
                    }
                  },
                  [_c("add-role")],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "widget",
            { attrs: { headerText: "User Roles" } },
            [
              _c("data-table", {
                attrs: {
                  apiUrl: _vm.apiUrl,
                  tableFields: _vm.tableFields,
                  itemsPerPage: _vm.itemsPerPage,
                  sortFunctions: _vm.sortFunctions,
                  apiMode: _vm.apiMode,
                  paginationPath: _vm.paginationPath
                }
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
    require("vue-hot-reload-api")      .rerender("data-v-42a493a4", module.exports)
  }
}

/***/ })

});