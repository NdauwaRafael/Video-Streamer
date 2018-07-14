webpackJsonp([3],{

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(609)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(611)
/* template */
var __vue_template__ = __webpack_require__(612)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e6c37d9"
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
Component.options.__file = "resources/assets/js/components/dashboard/users-and-members-tab/UsersMembersTab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e6c37d9", Component.options)
  } else {
    hotAPI.reload("data-v-0e6c37d9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(610);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0e994ea2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e6c37d9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UsersMembersTab.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e6c37d9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UsersMembersTab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.vuestic-profile-card[data-v-0e6c37d9] {\n  margin-left: 1rem;\n}\n@media (min-width: 768px) {\n.vuestic-profile-card[data-v-0e6c37d9] {\n      margin-top: -3.125rem;\n}\n}\n@media (max-width: 991px) {\n.vuestic-profile-card[data-v-0e6c37d9] {\n      margin-bottom: 3.125rem;\n      margin-left: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_chat_VuesticChat__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_chat_VuesticChat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_chat_VuesticChat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue__);





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'users-members-tab',
  components: {
    VuesticChat: __WEBPACK_IMPORTED_MODULE_0__components_vuestic_components_vuestic_chat_VuesticChat___default.a,
    VuesticProfileCard: __WEBPACK_IMPORTED_MODULE_1__components_vuestic_components_vuestic_profile_card_VuesticProfileCard_vue___default.a
  },
  data: function data() {
    return {
      chatMessages: [{
        text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
        yours: false
      }, {
        text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
        yours: true
      }, {
        text: 'Sounds great! See you later!',
        yours: false
      }, {
        text: 'Should I bring a lightbox with me?',
        yours: true
      }, {
        text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
        yours: false
      }, {
        text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
        yours: true
      }]
    };
  }
});

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "users-members-tab dashboard-tab" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-md-3 d-flex justify-content-center align-items-center"
        },
        [
          _c("vuestic-profile-card", {
            attrs: {
              name: "Veronique Lee",
              location: "Malaga, Spain",
              photoSource: "http://i.imgur.com/NLrdqsk.png",
              social: {
                twitter: "twitter.com",
                facebook: "facebook.com",
                instagram: "instagram.com"
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-9 d-flex" },
        [
          _c("vuestic-chat", {
            model: {
              value: _vm.chatMessages,
              callback: function($$v) {
                _vm.chatMessages = $$v
              },
              expression: "chatMessages"
            }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-0e6c37d9", module.exports)
  }
}

/***/ })

});