"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_attendances_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._m(0), _vm._v(" "), _c("div", {
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
  }, [_vm._m(1), _vm._v(" "), _c("div", {
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
    staticClass: "card-header py-3 d-flex flex-row align-items-center justify-content-between"
  }, [_c("h5", {
    staticClass: "m-0 font-weight-bold"
  }, [_vm._v("Attendances")])]);
}, function () {
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

/***/ "./resources/js/backend/views/attendances/components/index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/backend/views/attendances/components/index.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57f82ab8 */ "./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/attendances/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57f82ab8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=57f82ab8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/attendances/components/index.vue?vue&type=template&id=57f82ab8");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2F0dGVuZGFuY2VzX2NvbXBvbmVudHNfaW5kZXhfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBMEdBO0FBQ0EsaUVBQWU7RUFDZkMsSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQUMsUUFBQTtNQUNBQyxZQUFBO01BQ0FDLFNBQUE7TUFDQUMsTUFBQTtNQUNBTCxjQUFBLEVBQUFBLG9EQUFBO01BQ0FNLFNBQUE7TUFDQUMsS0FBQTtNQUNBQyxRQUFBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBO0lBRUE7RUFDQTtFQUNBQyxPQUFBLFdBQUFBLFFBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQ0EsS0FBQUMsTUFBQSxDQUNBQyxRQUFBO01BQ0FiLFFBQUEsT0FBQUEsUUFBQTtNQUNBYyxJQUFBLE9BQUFiO0lBQ0EsR0FDQWMsSUFBQSxXQUFBaEIsSUFBQTtNQUNBaUIsT0FBQSxDQUFBQyxHQUFBLENBQUFsQixJQUFBO0lBQ0EsYUFDQTtNQUNBWSxLQUFBLENBQUFULFNBQUE7SUFDQTtFQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckpELElBQUlnQixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUFFLENBQ25ERixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUE4QixDQUFDLEVBQUUsQ0FDeERILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FB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QUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q3FNLENBQUMsaUVBQWUsK0xBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXhPOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2F0dGVuZGFuY2VzL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2F0dGVuZGFuY2VzL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2F0dGVuZGFuY2VzL2NvbXBvbmVudHMvaW5kZXgudnVlP2QxMjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvYXR0ZW5kYW5jZXMvY29tcG9uZW50cy9pbmRleC52dWU/OTU0ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9hdHRlbmRhbmNlcy9jb21wb25lbnRzL2luZGV4LnZ1ZT9jZWQwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgc2hhZG93IG1iLTQgYm9yZGVyLXRvcFwiPlxuICAgICAgPCEtLSBDYXJkIEhlYWRlciAtIERyb3Bkb3duIC0tPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICA+XG4gICAgICAgIDxoNSBjbGFzcz1cIm0tMCBmb250LXdlaWdodC1ib2xkXCI+QXR0ZW5kYW5jZXM8L2g1PlxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJkcm9wZG93biBuby1hcnJvd1wiPlxuICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwiaW5mb1wiIHNpemU9XCJzbVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgRW1wbG95ZWVcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwhLS0gQ2FyZCBCb2R5IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG1iLTNcIj5cbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtci1zbS0yXCIgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCI+XG4gICAgICAgICAgICAgICAgU2hvd1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNob3dFbnRyaWVzT3B0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9iLWZvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8Yi1vdmVybGF5IDpzaG93PVwiaXNPdmVybGF5XCIgcm91bmRlZD1cInNtXCI+XG4gICAgICAgICAgICAgIDxiLXRhYmxlXG4gICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICBzdHJpcGVkXG4gICAgICAgICAgICAgICAgc2hvdy1lbXB0eVxuICAgICAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT4gLS0+XG4gICAgICAgICAgICAgIDwvYi10YWJsZT5cbiAgICAgICAgICAgIDwvYi1vdmVybGF5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8cD5TaG93aW5nIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gZW50cmllczwvcD5cbiAgICAgICAgICAgIDwhLS0gPHAgY2xhc3M9XCJtdC0xIG1iLTBcIiB2LWh0bWw9XCJzaG93aW5nVGl0bGVcIiAvPiAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxiLXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgY2xhc3M9XCJtYi0wXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImN1cnJlbnRfcGFnZVwiXG4gICAgICAgICAgICAgIDp0b3RhbC1yb3dzPVwidG90YWxSb3dcIlxuICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIGFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgc2hvd0VudHJpZXNPcHQgfSBmcm9tIFwiQGpzL2RhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgY3VycmVudF9wYWdlOiAxLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgc2hvd0VudHJpZXNPcHQsXG4gICAgICBpc092ZXJsYXk6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgdG90YWxSb3c6IDAsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJ0aXRsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImNyZWF0ZV9hdFwiLFxuICAgICAgICAgIGxhYmVsOiBcIkRhdGUgQ3JlYXRlZFwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMjUlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQWN0aW9uc1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJHN0b3JlXG4gICAgICAuZGlzcGF0Y2goXCJlbXBsb3llZS9sb2FkSXRlbXNcIiwge1xuICAgICAgICBwZXJfcGFnZTogdGhpcy5wZXJfcGFnZSxcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50X3BhZ2UsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbmltYXRlZCBmYWRlSW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIHNoYWRvdyBtYi00IGJvcmRlci10b3BcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBpbmxpbmU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNob3dFbnRyaWVzT3B0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNlYXJjaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNob3c6IF92bS5pc092ZXJsYXksIHJvdW5kZWQ6IFwic21cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGJ1c3k6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtNCBtYi00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsaWduLW1pZGRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBwLTUgdGV4dC1tdXRlZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJ0b3RhbC1yb3dzXCI6IF92bS50b3RhbFJvdyxcbiAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFnZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzLFxuICAgICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcImNhcmQtaGVhZGVyIHB5LTMgZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkF0dGVuZGFuY2VzXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpcyxcbiAgICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlNob3dpbmcge2Zyb219IHRvIHt0b30gb2Yge3RvdGFsfSBlbnRyaWVzXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3Qgc2hvd0VudHJpZXNPcHQgPSBbXG4gICAgeyB2YWx1ZTogMTAsIHRleHQ6IFwiMTBcIiB9LFxuICAgIHsgdmFsdWU6IDMwLCB0ZXh0OiBcIjMwXCIgfSxcbiAgICB7IHZhbHVlOiA1MCwgdGV4dDogXCI1MFwiIH0sXG4gICAgeyB2YWx1ZTogMTAwLCB0ZXh0OiBcIjEwMFwiIH0sXG5dXG5cblxuZXhwb3J0IHtcbiAgICBzaG93RW50cmllc09wdCxcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2Y4MmFiOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1N2Y4MmFiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1N2Y4MmFiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1N2Y4MmFiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3ZjgyYWI4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTdmODJhYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2F0dGVuZGFuY2VzL2NvbXBvbmVudHMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2Y4MmFiOFwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbInNob3dFbnRyaWVzT3B0IiwiZGF0YSIsInBlcl9wYWdlIiwiY3VycmVudF9wYWdlIiwiaXNMb2FkaW5nIiwiZmlsdGVyIiwiaXNPdmVybGF5IiwiaXRlbXMiLCJ0b3RhbFJvdyIsImZpZWxkcyIsImtleSIsImxhYmVsIiwibW91bnRlZCIsIl90aGlzIiwiJHN0b3JlIiwiZGlzcGF0Y2giLCJwYWdlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfbSIsIl92IiwiYXR0cnMiLCJpbmxpbmUiLCJpZCIsIm9wdGlvbnMiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwicHJveHkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzaG93Iiwicm91bmRlZCIsImhvdmVyIiwic3RyaXBlZCIsImJ1c3kiLCJfcyIsImFsaWduIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9