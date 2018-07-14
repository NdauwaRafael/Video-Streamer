webpackJsonp([2,5],{

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(754)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(756)
/* template */
var __vue_template__ = __webpack_require__(757)
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
Component.options.__file = "resources/assets/js/components/pages/users/list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ae71587", Component.options)
  } else {
    hotAPI.reload("data-v-7ae71587", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(750)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(752)
/* template */
var __vue_template__ = __webpack_require__(753)
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

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ 749:
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

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(751);
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

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.circle[data-v-153ca07c] {\n  width: .75rem;\n  height: .75rem;\n  border-radius: 50%;\n  display: inline-block;\n}\n", ""]);

// exports


/***/ }),

/***/ 752:
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

/***/ 753:
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

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(755);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5c371416", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ae71587\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./list.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ae71587\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./list.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.color-icon-label-table td:first-child {\n  width: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__ = __webpack_require__(749);








__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('badge-column', __WEBPACK_IMPORTED_MODULE_2__utils_BadgeColumn_vue___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        DataTable: __WEBPACK_IMPORTED_MODULE_1__vuestic_components_vuestic_datatable_VuesticDataTable___default.a,
        Widget: __WEBPACK_IMPORTED_MODULE_0__vuestic_components_vuestic_widget_VuesticWidget___default.a
    },
    name: 'Table',
    data: function data() {
        return {
            apiUrl: 'https://vuetable.ratiw.net/api/users',
            apiMode: true,
            tableFields: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__["a" /* default */].tableFields,
            itemsPerPage: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition__["a" /* default */].itemsPerPage,
            sortFunctions: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition__["a" /* default */].sortFunctions,
            paginationPath: ''
        };
    }
});

/***/ }),

/***/ 757:
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
          _c(
            "widget",
            { attrs: { headerText: "All Users" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-7ae71587", module.exports)
  }
}

/***/ })

});