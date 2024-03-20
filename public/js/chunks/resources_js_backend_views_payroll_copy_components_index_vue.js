"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_payroll_copy_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      per_page: 10,
      current_page: 1,
      isLoading: true,
      filter: "",
      showEntriesOpt: _js_data__WEBPACK_IMPORTED_MODULE_0__.showEntriesOpt,
      isOverlay: false,
      items: [],
      totalRow: 0,
      fields: [{
        key: "title",
        label: "Title"
        // thStyle: { width: "20%" },
      }, {
        key: "wage_type",
        label: "Wage Type"
        // thStyle: { width: "15%" },
      }, {
        key: "rate",
        label: "Rate"
        // thStyle: { width: "15%" },
      }, {
        key: "create_at",
        label: "Date Created"
        // thStyle: { width: "25%" },
      }, {
        key: "actions",
        label: "Actions"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$store.dispatch("employee/loadItems", {
      per_page: this.per_page,
      page: this.current_page
    }).then(function (data) {
      console.log(data);
    })["finally"](function () {
      _this.isLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card shadow mb-4 border-top"
  }, [_c("div", {
    staticClass: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, [_c("h5", {
    staticClass: "m-0 font-weight-bold"
  }, [_vm._v("Employees")]), _vm._v(" "), _c("div", {
    staticClass: "dropdown no-arrow"
  }, [_c("b-button", {
    attrs: {
      variant: "info",
      size: "sm"
    }
  }, [_c("i", {
    staticClass: "fa fa-plus",
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v("\n          Employee\n        ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-8 mb-3"
  }, [_c("b-form", {
    attrs: {
      inline: ""
    }
  }, [_c("label", {
    staticClass: "mr-sm-2",
    attrs: {
      "for": "inline-form-custom-select-pref"
    }
  }, [_vm._v("\n              Show\n            ")]), _vm._v(" "), _c("b-form-select", {
    staticClass: "mb-2 mr-sm-2 mb-sm-0",
    attrs: {
      id: "inline-form-custom-select-pref",
      options: _vm.showEntriesOpt
    },
    model: {
      value: _vm.per_page,
      callback: function callback($$v) {
        _vm.per_page = $$v;
      },
      expression: "per_page"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "mb-2 mr-sm-2 mb-sm-0",
    attrs: {
      "for": "inline-form-custom-select-pref"
    }
  }, [_vm._v("\n              Entries\n            ")])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("b-input-group", {
    scopedSlots: _vm._u([{
      key: "append",
      fn: function fn() {
        return [_c("b-input-group-text", [_c("i", {
          staticClass: "fas fa-search"
        })])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _c("b-form-input", {
    attrs: {
      type: "search",
      placeholder: "Search here..."
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-12"
  }, [_c("b-overlay", {
    attrs: {
      show: _vm.isOverlay,
      rounded: "sm"
    }
  }, [_c("b-table", {
    attrs: {
      hover: "",
      striped: "",
      "show-empty": "",
      items: _vm.items,
      fields: _vm.fields,
      "per-page": _vm.per_page,
      busy: _vm.isLoading
    },
    scopedSlots: _vm._u([{
      key: "table-busy",
      fn: function fn() {
        return [_c("div", {
          staticClass: "text-center mt-4 mb-4"
        }, [_c("b-spinner", {
          staticClass: "align-middle"
        })], 1)];
      },
      proxy: true
    }, {
      key: "empty",
      fn: function fn() {
        return [_c("h3", {
          staticClass: "text-center p-5 text-muted"
        }, [_c("i", [_vm._v(_vm._s("No data found!"))])])];
      },
      proxy: true
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("b-pagination", {
    staticClass: "mb-0",
    attrs: {
      "total-rows": _vm.totalRow,
      "per-page": _vm.per_page,
      align: "right"
    },
    model: {
      value: _vm.current_page,
      callback: function callback($$v) {
        _vm.current_page = $$v;
      },
      expression: "current_page"
    }
  })], 1)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-md-6"
  }, [_c("p", [_vm._v("Showing {from} to {to} of {total} entries")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/data/index.js":
/*!************************************!*\
  !*** ./resources/js/data/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showEntriesOpt: () => (/* binding */ showEntriesOpt)
/* harmony export */ });
var showEntriesOpt = [{
  value: 10,
  text: "10"
}, {
  value: 30,
  text: "30"
}, {
  value: 50,
  text: "50"
}, {
  value: 100,
  text: "100"
}];


/***/ }),

/***/ "./resources/js/backend/views/payroll copy/components/index.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/backend/views/payroll copy/components/index.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=cecac764 */ "./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payroll copy/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_cecac764__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=cecac764 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll copy/components/index.vue?vue&type=template&id=cecac764");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX3BheXJvbGxfY29weV9jb21wb25lbnRzX2luZGV4X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQTBHQTtBQUNBLGlFQUFlO0VBQ2ZDLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFFBQUE7TUFDQUMsWUFBQTtNQUNBQyxTQUFBO01BQ0FDLE1BQUE7TUFDQUwsY0FBQSxFQUFBQSxvREFBQTtNQUNBTSxTQUFBO01BQ0FDLEtBQUE7TUFDQUMsUUFBQTtNQUNBQyxNQUFBLEdBQ0E7UUFDQUMsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBO0lBRUE7RUFDQTtFQUNBQyxPQUFBLFdBQUFBLFFBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQ0EsS0FBQUMsTUFBQSxDQUNBQyxRQUFBO01BQ0FiLFFBQUEsT0FBQUEsUUFBQTtNQUNBYyxJQUFBLE9BQUFiO0lBQ0EsR0FDQWMsSUFBQSxXQUFBaEIsSUFBQTtNQUNBaUIsT0FBQSxDQUFBQyxHQUFBLENBQUFsQixJQUFBO0lBQ0EsYUFDQTtNQUNBWSxLQUFBLENBQUFULFNBQUE7SUFDQTtFQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0pELElBQUlnQixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUFFLENBQ25ERixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUE4QixDQUFDLEVBQUUsQ0FDeERGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFDRUUsV0FBVyxFQUNUO0VBQ0osQ0FBQyxFQUNELENBQ0VGLEVBQUUsQ0FBQyxJQUFJLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQXVCLENBQUMsRUFBRSxDQUNoREgsR0FBRyxDQUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQ3BCLENBQUMsRUFDRkosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQW9CLENBQUMsRUFDcEMsQ0FDRUYsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUFFSSxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRUMsSUFBSSxFQUFFO0lBQUs7RUFBRSxDQUFDLEVBQUUsQ0FDekROLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDTkUsV0FBVyxFQUFFLFlBQVk7SUFDekJFLEtBQUssRUFBRTtNQUFFLGFBQWEsRUFBRTtJQUFPO0VBQ2pDLENBQUMsQ0FBQyxFQUNGTCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUN6QyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FFTCxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFZLENBQUMsRUFBRSxDQUN0Q0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBTSxDQUFDLEVBQUUsQ0FDaENGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQWdCLENBQUMsRUFDaEMsQ0FDRUYsRUFBRSxDQUNBLFFBQVEsRUFDUjtJQUFFSSxLQUFLLEVBQUU7TUFBRUcsTUFBTSxFQUFFO0lBQUc7RUFBRSxDQUFDLEVBQ3pCLENBQ0VQLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7SUFDRUUsV0FBVyxFQUFFLFNBQVM7SUFDdEJFLEtBQUssRUFBRTtNQUFFLE9BQUs7SUFBaUM7RUFDakQsQ0FBQyxFQUNELENBQUNMLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLG9DQUFvQyxDQUFDLENBQy9DLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxlQUFlLEVBQUU7SUFDbEJFLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNFLEtBQUssRUFBRTtNQUNMSSxFQUFFLEVBQUUsZ0NBQWdDO01BQ3BDQyxPQUFPLEVBQUVWLEdBQUcsQ0FBQ3JCO0lBQ2YsQ0FBQztJQUNEZ0MsS0FBSyxFQUFFO01BQ0xDLEtBQUssRUFBRVosR0FBRyxDQUFDbkIsUUFBUTtNQUNuQmdDLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkJkLEdBQUcsQ0FBQ25CLFFBQVEsR0FBR2lDLEdBQUc7TUFDcEIsQ0FBQztNQUNEQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUMsQ0FBQyxFQUNGZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtJQUNFRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DRSxLQUFLLEVBQUU7TUFBRSxPQUFLO0lBQWlDO0VBQ2pELENBQUMsRUFDRCxDQUFDTCxHQUFHLENBQUNJLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUNsRCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FDQSxlQUFlLEVBQ2Y7SUFDRWUsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0U1QixHQUFHLEVBQUUsUUFBUTtNQUNiNkIsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUN2QkEsRUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBZ0IsQ0FBQyxDQUFDLENBQzFDLENBQUMsQ0FDSDtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsQ0FDRjtFQUNILENBQUMsRUFDRCxDQUNFbkIsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJJLEtBQUssRUFBRTtNQUFFZSxJQUFJLEVBQUUsUUFBUTtNQUFFQyxXQUFXLEVBQUU7SUFBaUIsQ0FBQztJQUN4RFYsS0FBSyxFQUFFO01BQ0xDLEtBQUssRUFBRVosR0FBRyxDQUFDaEIsTUFBTTtNQUNqQjZCLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkJkLEdBQUcsQ0FBQ2hCLE1BQU0sR0FBRzhCLEdBQUc7TUFDbEIsQ0FBQztNQUNEQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDRGYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQVksQ0FBQyxFQUM1QixDQUNFRixFQUFFLENBQ0EsV0FBVyxFQUNYO0lBQUVJLEtBQUssRUFBRTtNQUFFaUIsSUFBSSxFQUFFdEIsR0FBRyxDQUFDZixTQUFTO01BQUVzQyxPQUFPLEVBQUU7SUFBSztFQUFFLENBQUMsRUFDakQsQ0FDRXRCLEVBQUUsQ0FBQyxTQUFTLEVBQUU7SUFDWkksS0FBSyxFQUFFO01BQ0xtQixLQUFLLEVBQUUsRUFBRTtNQUNUQyxPQUFPLEVBQUUsRUFBRTtNQUNYLFlBQVksRUFBRSxFQUFFO01BQ2hCdkMsS0FBSyxFQUFFYyxHQUFHLENBQUNkLEtBQUs7TUFDaEJFLE1BQU0sRUFBRVksR0FBRyxDQUFDWixNQUFNO01BQ2xCLFVBQVUsRUFBRVksR0FBRyxDQUFDbkIsUUFBUTtNQUN4QjZDLElBQUksRUFBRTFCLEdBQUcsQ0FBQ2pCO0lBQ1osQ0FBQztJQUNEaUMsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0U1QixHQUFHLEVBQUUsWUFBWTtNQUNqQjZCLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsS0FBSyxFQUNMO1VBQUVFLFdBQVcsRUFBRTtRQUF3QixDQUFDLEVBQ3hDLENBQ0VGLEVBQUUsQ0FBQyxXQUFXLEVBQUU7VUFDZEUsV0FBVyxFQUFFO1FBQ2YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsRUFDRDtNQUNFOUIsR0FBRyxFQUFFLE9BQU87TUFDWjZCLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsSUFBSSxFQUNKO1VBQUVFLFdBQVcsRUFBRTtRQUE2QixDQUFDLEVBQzdDLENBQUNGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQzJCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM5QyxDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RSLEtBQUssRUFBRTtJQUNULENBQUMsQ0FDRjtFQUNILENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixDQUFDLEVBQ0ZuQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBTSxDQUFDLEVBQUUsQ0FDaENILEdBQUcsQ0FBQzRCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDVDVCLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUFDLGNBQWMsRUFBRTtJQUNqQkUsV0FBVyxFQUFFLE1BQU07SUFDbkJFLEtBQUssRUFBRTtNQUNMLFlBQVksRUFBRUwsR0FBRyxDQUFDYixRQUFRO01BQzFCLFVBQVUsRUFBRWEsR0FBRyxDQUFDbkIsUUFBUTtNQUN4QmdELEtBQUssRUFBRTtJQUNULENBQUM7SUFDRGxCLEtBQUssRUFBRTtNQUNMQyxLQUFLLEVBQUVaLEdBQUcsQ0FBQ2xCLFlBQVk7TUFDdkIrQixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO1FBQ3ZCZCxHQUFHLENBQUNsQixZQUFZLEdBQUdnQyxHQUFHO01BQ3hCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0gsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSWUsZUFBZSxHQUFHLENBQ3BCLFlBQVk7RUFDVixJQUFJOUIsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFXLENBQUMsRUFBRSxDQUM1Q0YsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDRCxHQUFHLENBQUNJLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsQ0FDL0QsQ0FBQztBQUNKLENBQUMsQ0FDRjtBQUNETCxNQUFNLENBQUNnQyxhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDN04zQixJQUFNcEQsY0FBYyxHQUFHLENBQ25CO0VBQUVpQyxLQUFLLEVBQUUsRUFBRTtFQUFFb0IsSUFBSSxFQUFFO0FBQUssQ0FBQyxFQUN6QjtFQUFFcEIsS0FBSyxFQUFFLEVBQUU7RUFBRW9CLElBQUksRUFBRTtBQUFLLENBQUMsRUFDekI7RUFBRXBCLEtBQUssRUFBRSxFQUFFO0VBQUVvQixJQUFJLEVBQUU7QUFBSyxDQUFDLEVBQ3pCO0VBQUVwQixLQUFLLEVBQUUsR0FBRztFQUFFb0IsSUFBSSxFQUFFO0FBQU0sQ0FBQyxDQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGtGO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNBLENBQXNHO0FBQ3RHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSw0RUFBTTtBQUNSLEVBQUUscUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FNLENBQUMsaUVBQWUsK0xBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXhPOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsIGNvcHkvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbCBjb3B5L2NvbXBvbmVudHMvaW5kZXgudnVlPzhlMTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbCBjb3B5L2NvbXBvbmVudHMvaW5kZXgudnVlPzU5ZjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbCBjb3B5L2NvbXBvbmVudHMvaW5kZXgudnVlPzEwNmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBzaGFkb3cgbWItNCBib3JkZXItdG9wXCI+XG4gICAgICA8IS0tIENhcmQgSGVhZGVyIC0gRHJvcGRvd24gLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktMyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPGg1IGNsYXNzPVwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIj5FbXBsb3llZXM8L2g1PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gbm8tYXJyb3dcIj5cbiAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cImluZm9cIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgIEVtcGxveWVlXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gQ2FyZCBCb2R5IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG1iLTNcIj5cbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtci1zbS0yXCIgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCI+XG4gICAgICAgICAgICAgICAgU2hvd1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNob3dFbnRyaWVzT3B0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9iLWZvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8Yi1vdmVybGF5IDpzaG93PVwiaXNPdmVybGF5XCIgcm91bmRlZD1cInNtXCI+XG4gICAgICAgICAgICAgIDxiLXRhYmxlXG4gICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICBzdHJpcGVkXG4gICAgICAgICAgICAgICAgc2hvdy1lbXB0eVxuICAgICAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT4gLS0+XG4gICAgICAgICAgICAgIDwvYi10YWJsZT5cbiAgICAgICAgICAgIDwvYi1vdmVybGF5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8cD5TaG93aW5nIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gZW50cmllczwvcD5cbiAgICAgICAgICAgIDwhLS0gPHAgY2xhc3M9XCJtdC0xIG1iLTBcIiB2LWh0bWw9XCJzaG93aW5nVGl0bGVcIiAvPiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxiLXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgY2xhc3M9XCJtYi0wXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImN1cnJlbnRfcGFnZVwiXG4gICAgICAgICAgICAgIDp0b3RhbC1yb3dzPVwidG90YWxSb3dcIlxuICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc2hvd0VudHJpZXNPcHQgfSBmcm9tIFwiQGpzL2RhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgY3VycmVudF9wYWdlOiAxLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgc2hvd0VudHJpZXNPcHQsXG4gICAgICBpc092ZXJsYXk6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgdG90YWxSb3c6IDAsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJ0aXRsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIndhZ2VfdHlwZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIldhZ2UgVHlwZVwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTUlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJyYXRlXCIsXG4gICAgICAgICAgbGFiZWw6IFwiUmF0ZVwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTUlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJjcmVhdGVfYXRcIixcbiAgICAgICAgICBsYWJlbDogXCJEYXRlIENyZWF0ZWRcIixcbiAgICAgICAgICAvLyB0aFN0eWxlOiB7IHdpZHRoOiBcIjI1JVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFjdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRzdG9yZVxuICAgICAgLmRpc3BhdGNoKFwiZW1wbG95ZWUvbG9hZEl0ZW1zXCIsIHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBzaGFkb3cgbWItNCBib3JkZXItdG9wXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY2FyZC1oZWFkZXIgcHktMyBkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIGZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJFbXBsb3llZXNcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duIG5vLWFycm93XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWJ1dHRvblwiLCB7IGF0dHJzOiB7IHZhcmlhbnQ6IFwiaW5mb1wiLCBzaXplOiBcInNtXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgRW1wbG95ZWVcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBpbmxpbmU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNob3dFbnRyaWVzT3B0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNlYXJjaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNob3c6IF92bS5pc092ZXJsYXksIHJvdW5kZWQ6IFwic21cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1c3k6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtNCBtYi00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBwLTUgdGV4dC1tdXRlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJ0b3RhbC1yb3dzXCI6IF92bS50b3RhbFJvdyxcbiAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFnZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiU2hvd2luZyB7ZnJvbX0gdG8ge3RvfSBvZiB7dG90YWx9IGVudHJpZXNcIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBzaG93RW50cmllc09wdCA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogXCIxMFwiIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6IFwiMzBcIiB9LFxuICAgIHsgdmFsdWU6IDUwLCB0ZXh0OiBcIjUwXCIgfSxcbiAgICB7IHZhbHVlOiAxMDAsIHRleHQ6IFwiMTAwXCIgfSxcbl1cblxuXG5leHBvcnQge1xuICAgIHNob3dFbnRyaWVzT3B0LFxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNlY2FjNzY0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3Btcy1hcHAvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2VjYWM3NjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2VjYWM3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2VjYWM3NjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZWNhYzc2NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2NlY2FjNzY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsIGNvcHkvY29tcG9uZW50cy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNlY2FjNzY0XCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwibmFtZXMiOlsic2hvd0VudHJpZXNPcHQiLCJkYXRhIiwicGVyX3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJpc0xvYWRpbmciLCJmaWx0ZXIiLCJpc092ZXJsYXkiLCJpdGVtcyIsInRvdGFsUm93IiwiZmllbGRzIiwia2V5IiwibGFiZWwiLCJtb3VudGVkIiwiX3RoaXMiLCIkc3RvcmUiLCJkaXNwYXRjaCIsInBhZ2UiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiYXR0cnMiLCJ2YXJpYW50Iiwic2l6ZSIsImlubGluZSIsImlkIiwib3B0aW9ucyIsIm1vZGVsIiwidmFsdWUiLCJjYWxsYmFjayIsIiQkdiIsImV4cHJlc3Npb24iLCJzY29wZWRTbG90cyIsIl91IiwiZm4iLCJwcm94eSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInNob3ciLCJyb3VuZGVkIiwiaG92ZXIiLCJzdHJpcGVkIiwiYnVzeSIsIl9zIiwiX20iLCJhbGlnbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==