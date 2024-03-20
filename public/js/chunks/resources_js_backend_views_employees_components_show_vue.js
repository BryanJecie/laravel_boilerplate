"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_employees_components_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    id: {
      type: Number
    }
  },
  data: function data() {
    return {
      employee: {}
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$store.dispatch("employee/onShow", {
      id: this.id
    }).then(function (resp) {
      _this.employee = resp.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "animated fadeIn"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-3"
  }, [_c("div", {
    staticClass: "card shadow mb-4 border-top"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "card-body text-center"
  }, [_c("img", {
    staticClass: "rounded-circle avatar-xl img-thumbnail mt-4",
    attrs: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      alt: "profile-image",
      width: "200"
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "mt-3 mb-1 font-18 text-uppercase"
  }, [_vm._v("\n            " + _vm._s(_vm.employee.full_name) + "\n          ")]), _vm._v(" "), _c("hr", {
    staticStyle: {
      width: "50%"
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-9"
  }, [_c("div", {
    staticClass: "card shadow mb-4 border-top"
  }, [_c("div", {
    staticClass: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, [_c("h5", {
    staticClass: "m-0 font-weight-bold"
  }, [_vm._v("Information")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown no-arrow"
  }, [_c("a", {
    attrs: {
      href: _vm.employee.route_index
    }
  }, [_c("i", {
    staticClass: "fa fa-arrow-left",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" Back\n            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("pre", [_vm._v("          " + _vm._s(_vm.employee) + "\n      ")])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, [_c("h5", {
    staticClass: "m-0 font-weight-bold"
  }, [_vm._v("Show")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/backend/views/employees/components/show.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/show.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=67e25de2 */ "./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2");
/* harmony import */ var _show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js */ "./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/employees/components/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_67e25de2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=67e25de2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/show.vue?vue&type=template&id=67e25de2");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2VtcGxveWVlc19jb21wb25lbnRzX3Nob3dfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFtSkEsaUVBQWU7RUFDZkEsS0FBQTtJQUNBQyxFQUFBO01BQ0FDLElBQUEsRUFBQUM7SUFDQTtFQUNBO0VBQ0FDLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFFBQUE7SUFDQTtFQUNBO0VBQ0FDLE9BQUEsV0FBQUEsUUFBQTtJQUFBLElBQUFDLEtBQUE7SUFDQSxLQUFBQyxNQUFBLENBQ0FDLFFBQUE7TUFDQVIsRUFBQSxPQUFBQTtJQUNBLEdBQ0FTLElBQUEsV0FBQUMsSUFBQTtNQUNBSixLQUFBLENBQUFGLFFBQUEsR0FBQU0sSUFBQSxDQUFBUCxJQUFBO0lBQ0E7RUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLRCxJQUFJUSxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUFFLENBQ25ERixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFNLENBQUMsRUFBRSxDQUNoQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQUUsQ0FDckNGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQThCLENBQUMsRUFBRSxDQUN4REgsR0FBRyxDQUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ1RKLEdBQUcsQ0FBQ0ssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUF3QixDQUFDLEVBQUUs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Q2lCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRnVEO0FBQzNCO0FBQ0w7OztBQUdsRDtBQUNBLENBQXNHO0FBQ3RHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSwyRUFBTTtBQUNSLEVBQUUsb0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q29NLENBQUMsaUVBQWUsOExBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXZPOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL3Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL3Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL3Nob3cudnVlP2M4ZGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZW1wbG95ZWVzL2NvbXBvbmVudHMvc2hvdy52dWU/ZjFmYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9lbXBsb3llZXMvY29tcG9uZW50cy9zaG93LnZ1ZT9iYWQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIHNoYWRvdyBtYi00IGJvcmRlci10b3BcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGg1IGNsYXNzPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj5TaG93PC9oNT5cbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImRyb3Bkb3duIG5vLWFycm93XCIgdi1pZj1cImJvYXJkZXIuaGFzX3VucGFpZF9iaWxsXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpZD1cImRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdiBmYS1zbSBmYS1mdyB0ZXh0LWdyYXktNDAwXCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCBzaGFkb3cgYW5pbWF0ZWQtLWZhZGUtaW5cIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWhlYWRlclwiPk1vcmUgQWN0aW9uOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJvbkFkZEJpbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cImZpbGUtZWFybWFyay1icmVha1wiIGNsYXNzPVwibXItMlwiPjwvYi1pY29uPlxuICAgICAgICAgICAgICAgICAgQWRkIEJpbGxcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICB2LWlmPVwiYm9hcmRlci5oYXNfdW5wYWlkX2JpbGxcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJvbkFkZFBheW1lbnRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cIndhbGxldFwiIGNsYXNzPVwibXItMlwiPjwvYi1pY29uPlxuICAgICAgICAgICAgICAgICAgQWRkIFBheW1lbnRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgPGItaWNvbiBpY29uPVwidHJhc2gyLWZpbGxcIiBjbGFzcz1cIm1yLTIgdHJhc2ggdGV4dC1kYW5nZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgOnNyYz1cIidodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2EvYWMvTm9faW1hZ2VfYXZhaWxhYmxlLnN2ZydcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtY2lyY2xlIGF2YXRhci14bCBpbWctdGh1bWJuYWlsIG10LTRcIlxuICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlLWltYWdlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cIm10LTMgbWItMSBmb250LTE4IHRleHQtdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgIHt7IGVtcGxveWVlLmZ1bGxfbmFtZSB9fVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwhLS0gPHAgY2xhc3M9XCJtYi0wIHRleHQtaW5mb1wiPlxuICAgICAgICAgICAgICB7eyBib2FyZGVyLnVzZXIuZW1haWwgfX1cbiAgICAgICAgICAgIDwvcD4gLS0+XG4gICAgICAgICAgICA8aHIgc3R5bGU9XCJ3aWR0aDogNTAlXCIgLz5cblxuICAgICAgICAgICAgPCEtLSA8ZGl2IHYtaWY9XCJib2FyZGVyLmhhc191bnBhaWRfYmlsbFwiIGNsYXNzPVwibWItNFwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTEgdGV4dC1kYW5nZXIgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrXCI+ICYjODM2OTs8L3NwYW4+XG4gICAgICAgICAgICAgICAge3sgYm9hcmRlci5oYXNfdW5wYWlkX2JpbGwgfCBtb25leSB9fVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LW11dGVkIHRleHQtc21cIj5DdXJyZW50IEJpbGw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICB2LWVsc2UtaWY9XCJcbiAgICAgICAgICAgICAgICAhYm9hcmRlci5oYXNfdW5wYWlkX2JpbGwgJiZcbiAgICAgICAgICAgICAgICBib2FyZGVyLmN1cnJlbnRfc3RhdHVzLnN0YXR1cyA9PT0gJ09uLWJvYXJkaW5nJ1xuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICAgICAgICAgIDpkaXNhYmxlZD1cImlzQmlsbExvYWRpbmdcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJvbkJpbGxlZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxiLXNwaW5uZXIgdi1pZj1cImlzQmlsbExvYWRpbmdcIiBzbWFsbCBsYWJlbD1cIlNtYWxsIExvYWRpbmcuLi5cIiAvPlxuICAgICAgICAgICAgICBCSUxMRURcbiAgICAgICAgICAgIDwvYi1idXR0b24+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLSA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIHYtaWY9XCJib2FyZGVyLm5pY2tuYW1lXCI+XG4gICAgICAgICAgICAgIHt7IGJvYXJkZXIubmlja25hbWUgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiB2LWlmPVwiYm9hcmRlci5waG9uZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1waG9uZSBtci0xIHRleHQtaW5mb1wiPjwvaT5cbiAgICAgICAgICAgICAge3sgYm9hcmRlci5waG9uZSB9fVxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgdi1pZj1cImJvYXJkZXIuZ2VuZGVyXCI+XG4gICAgICAgICAgICAgIDxiLWljb25cbiAgICAgICAgICAgICAgICA6aWNvbj1cIlxuICAgICAgICAgICAgICAgICAgYm9hcmRlci5nZW5kZXIgPT09ICdGZW1hbGUnID8gJ2dlbmRlci1mZW1hbGUnIDogJ2dlbmRlci1tYWxlJ1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtci0xIHRleHQtaW5mbyBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3sgYm9hcmRlci5nZW5kZXIgfX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiB2LWlmPVwiYm9hcmRlci5hZGRyZXNzXCI+XG4gICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cImhvdXNlLWZpbGxcIiBjbGFzcz1cIm1yLTEgdGV4dC1pbmZvXCI+PC9iLWljb24+XG4gICAgICAgICAgICAgIHt7IGJvYXJkZXIuYWRkcmVzcyB9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPiAtLT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiaG9sZGVyLmpzLzEwMHB4MTgwL1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPkVtcGxveWVlIFBob3RvPC9oND5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+Qm9keTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNCBib3JkZXItdG9wXCI+XG4gICAgICAgICAgPCEtLSBDYXJkIEhlYWRlciAtIERyb3Bkb3duIC0tPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktMyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtLTAgZm9udC13ZWlnaHQtYm9sZFwiPkluZm9ybWF0aW9uPC9oNT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93biBuby1hcnJvd1wiPlxuICAgICAgICAgICAgICA8YSA6aHJlZj1cImVtcGxveWVlLnJvdXRlX2luZGV4XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBCYWNrXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHt7IGVtcGxveWVlIH19XG4gICAgICAgIDwvcHJlXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVtcGxveWVlOiB7fSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJHN0b3JlXG4gICAgICAuZGlzcGF0Y2goXCJlbXBsb3llZS9vblNob3dcIiwge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICB0aGlzLmVtcGxveWVlID0gcmVzcC5kYXRhO1xuICAgICAgfSk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbmltYXRlZCBmYWRlSW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgc2hhZG93IG1iLTQgYm9yZGVyLXRvcFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1jaXJjbGUgYXZhdGFyLXhsIGltZy10aHVtYm5haWwgbXQtNFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2EvYWMvTm9faW1hZ2VfYXZhaWxhYmxlLnN2Z1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJwcm9maWxlLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMjAwXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMyBtYi0xIGZvbnQtMTggdGV4dC11cHBlcmNhc2VcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZW1wbG95ZWUuZnVsbF9uYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwJVwiIH0gfSksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIHNoYWRvdyBtYi00IGJvcmRlci10b3BcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkluZm9ybWF0aW9uXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93biBuby1hcnJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0uZW1wbG95ZWUucm91dGVfaW5kZXggfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hcnJvdy1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEJhY2tcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicHJlXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5lbXBsb3llZSkgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLFxuICAgICAgfSxcbiAgICAgIFtfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbX3ZtLl92KFwiU2hvd1wiKV0pXVxuICAgIClcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2UyNWRlMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjdlMjVkZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjdlMjVkZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjdlMjVkZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY3ZTI1ZGUyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjdlMjVkZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL3Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02N2UyNWRlMlwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb3BzIiwiaWQiLCJ0eXBlIiwiTnVtYmVyIiwiZGF0YSIsImVtcGxveWVlIiwibW91bnRlZCIsIl90aGlzIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJ0aGVuIiwicmVzcCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9tIiwiX3YiLCJhdHRycyIsInNyYyIsImFsdCIsIndpZHRoIiwiX3MiLCJmdWxsX25hbWUiLCJzdGF0aWNTdHlsZSIsImhyZWYiLCJyb3V0ZV9pbmRleCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9