webpackJsonp([12],{

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(743)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(745)
/* template */
var __vue_template__ = __webpack_require__(746)
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

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(744);
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

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.color-icon-label-table td:first-child {\n  width: 1rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../vuestic-components/vuestic-widget/VuesticWidget\"");
throw new Error("Cannot find module \"../vuestic-components/vuestic-datatable/VuesticDataTable\"");
throw new Error("Cannot find module \"./BadgeColumn.vue\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
throw new Error("Cannot find module \"../vuestic-components/vuestic-datatable/data/fields-definition\"");
throw new Error("Cannot find module \"../vuestic-components/vuestic-datatable/data/items-per-page-definition\"");









__WEBPACK_IMPORTED_MODULE_3_vue___default.a.component('badge-column', __WEBPACK_IMPORTED_MODULE_2__BadgeColumn_vue___default.a);

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
            tableFields: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition___default.a.tableFields,
            itemsPerPage: __WEBPACK_IMPORTED_MODULE_5__vuestic_components_vuestic_datatable_data_items_per_page_definition___default.a.itemsPerPage,
            sortFunctions: __WEBPACK_IMPORTED_MODULE_4__vuestic_components_vuestic_datatable_data_fields_definition___default.a.sortFunctions,
            paginationPath: ''
        };
    }
});

/***/ }),

/***/ 746:
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
            { attrs: { headerText: "Search & Pagination" } },
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