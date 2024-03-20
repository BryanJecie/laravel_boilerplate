"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_deductionsTypes_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_typeOfDeductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/typeOfDeductionsModal.vue */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue");
/* harmony import */ var _modals_typeOfDeductionsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/typeOfDeductionsDeleteModal.vue */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    TypeOfDeductionsModal: _modals_typeOfDeductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TypeOfDeductionsDeleteModal: _modals_typeOfDeductionsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      per_page: 10,
      current_page: 1,
      isLoading: true,
      filter: "",
      searched: "",
      showEntriesOpt: _js_data__WEBPACK_IMPORTED_MODULE_0__.showEntriesOpt,
      isOverlay: false,
      totalRow: 0,
      showing: {
        to: 0,
        from: 0,
        total: 0
      },
      tableTotalRows: "",
      fields: [{
        key: "name",
        label: "Name"
        // thStyle: { width: "20%" },
      }, {
        key: "date_created",
        label: "Date Created"
        // thStyle: { width: "20%" },
      }, {
        key: "actions",
        label: "Actions",
        thClass: "text-center",
        tdClass: "text-center",
        thStyle: {
          width: "10%"
        }
      }],
      typeOfDeductionForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        name: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("typeOfDeduction", ["loadItems"])), {}, {
    createTypeOfDeduction: function createTypeOfDeduction() {
      this.typeOfDeductionForm.reset();
      this.typeOfDeductionForm.id = "";
      this.typeOfDeductionForm.name = "";
      this.modalId = "type-of-deduction-modal";
      this.$bvModal.show(this.modalId);
    },
    editTypeOfDeduction: function editTypeOfDeduction(data) {
      this.typeOfDeductionForm.reset();
      this.typeOfDeductionForm.id = data.id;
      this.typeOfDeductionForm.name = data.name;
      this.modalId = "type-of-deduction-modal";
      this.$bvModal.show(this.modalId);
    },
    deleteTypeOfDeduction: function deleteTypeOfDeduction(data) {
      this.typeOfDeductionForm.reset();
      this.typeOfDeductionForm.id = data.id;
      this.typeOfDeductionForm.name = data.name;
      this.modalId = "type-of-deduction-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadTypeOfDeductions: function loadTypeOfDeductions() {
      var _this = this;
      var params = {
        per_page: this.per_page,
        page: this.current_page,
        search: this.searched
      };
      this.loadItems(params).then(function (_) {
        _this.tableTotalRows = _this.items.total;
        _this.showing.to = _this.items.to;
        _this.showing.from = _this.items.from;
        _this.showing.total = _this.items.total;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    },
    performSearch: _.debounce(function (query) {
      this.searched = query;
    }, 1000)
  }),
  mounted: function mounted() {
    this.loadTypeOfDeductions();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("typeOfDeduction", {
    items: "getTypeOfDeductions"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadTypeOfDeductions();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadTypeOfDeductions();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadTypeOfDeductions();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["typeOfDeductionForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.typeOfDeductionForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("typeOfDeduction", ["deleteTypeOfDeduction"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("type-of-deduction-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deleteTypeOfDeduction(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.name, " has been removed from Type Of Deductions records."));
        _this.$emit("loadTypeOfDeductions");
        _this.$bvModal.hide("type-of-deduction-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    typeOfDeductionForm: Object,
    isSelf: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      isLoading: false,
      form: this.typeOfDeductionForm,
      errors: {}
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("typeOfDeduction", ["createTypeOfDeduction", "updateTypeOfDeduction"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("type-of-deduction-modal");
      this.errors = {};
    },
    handleCreateTypeOfDeduction: function handleCreateTypeOfDeduction() {
      var _this = this;
      this.isLoading = true;
      var params = {
        name: this.form.name
      };
      this.createTypeOfDeduction(params).then(function (_) {
        _this.makeToast("success", "NEW RECORD CREATED", "".concat(_this.form.name, " has been created as a new Type of Deduction"));
        _this.$emit("loadTypeOfDeductions");
        _this.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.errors = errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    handleUpdateTypeOfDeduction: function handleUpdateTypeOfDeduction() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        name: this.form.name
      };
      this.updateTypeOfDeduction(params).then(function (_) {
        _this2.makeToast("warning", "RECORD UPDATED", "This information for Type of Deduction ID: ".concat(_this2.form.id, " has been updated."));
        _this2.$emit("loadTypeOfDeductions");
        _this2.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this2.errors = errors;
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    onSubmit: function onSubmit() {
      if (this.form.id) {
        this.handleUpdateTypeOfDeduction();
      } else {
        this.handleCreateTypeOfDeduction();
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h1", {
    staticClass: "m-0 mb-2 font-weight-bold text-info"
  }, [_vm._v("Type of Deductions")]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header py-3"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.createTypeOfDeduction
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "plus",
      "aria-hidden": "true"
    }
  }), _vm._v("New\n          ")], 1)], 1)])]), _vm._v(" "), _c("div", {
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
      items: _vm.items.data,
      fields: _vm.fields,
      "per-page": 0,
      busy: _vm.isLoading,
      "current-page": _vm.current_page
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
    }, {
      key: "cell(date_created)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.created_at)) + "\n                ")])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-row", [_c("b-col", {
          staticClass: "d-flex justify-content-center"
        }, [_c("b-button", {
          staticClass: "mr-2",
          attrs: {
            size: "sm",
            variant: "success"
          },
          on: {
            click: function click($event) {
              return _vm.editTypeOfDeduction(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteTypeOfDeduction(data.item);
            }
          }
        }, [_vm._v("\n                      DELETE\n                    ")])], 1)], 1)];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("p", [_vm._v(_vm._s("Showing ".concat(_vm.showing.from, " to ").concat(_vm.showing.to, " of ").concat(_vm.showing.total, " entries")))])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("b-pagination", {
    staticClass: "mb-0",
    attrs: {
      "total-rows": _vm.tableTotalRows,
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
  })], 1)])])]), _vm._v(" "), _c("TypeOfDeductionsModal", {
    attrs: {
      typeOfDeductionForm: _vm.typeOfDeductionForm
    },
    on: {
      loadTypeOfDeductions: function loadTypeOfDeductions($event) {
        return _vm.loadTypeOfDeductions();
      }
    }
  }), _vm._v(" "), _c("TypeOfDeductionsDeleteModal", {
    attrs: {
      typeOfDeductionForm: _vm.typeOfDeductionForm
    },
    on: {
      loadTypeOfDeductions: function loadTypeOfDeductions($event) {
        return _vm.loadTypeOfDeductions();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      id: "type-of-deduction-delete-modal",
      "hide-header": "",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      centered: "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("b-row", [_c("b-col", {
          staticClass: "d-flex justify-content-center"
        }, [_c("h4", [_vm._v("CONFIRMATION BEFORE DELETING RECORD")])])], 1), _vm._v(" "), _c("b-row", {
          staticClass: "mt-3"
        }, [_c("b-col", {
          staticClass: "d-flex justify-content-center text-center"
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.name, " from Type of Deductions records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
          staticClass: "mt-4"
        }, [_c("b-col", {
          staticClass: "d-flex justify-content-center"
        }, [_c("b-button", {
          staticClass: "mr-2 btn-outline-brown",
          style: {
            "min-width": "80px"
          },
          attrs: {
            pill: "",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.modalClose();
            }
          }
        }, [_vm._v("\n          NO\n        ")]), _vm._v(" "), _c("b-button", {
          staticClass: "bg-brown shadow btn-ce-submit",
          style: {
            "min-width": "80px"
          },
          attrs: {
            pill: "",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.onSubmit();
            }
          }
        }, [_vm._v("\n          YES\n        ")])], 1)], 1)];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("b-modal", {
    attrs: {
      id: "type-of-deduction-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Type of Deduction" : "Add Type of Deduction"))]), _vm._v(" "), _c("b-button", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover",
            modifiers: {
              hover: true
            }
          }],
          staticClass: "bg-brown shadow btn-ce-submit",
          attrs: {
            pill: "",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.modalClose();
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times"
        })])];
      },
      proxy: true
    }, {
      key: "default",
      fn: function fn() {
        return [_c("b-form", [_c("b-form-group", {
          attrs: {
            id: "input-group-1",
            label: "Name",
            "label-for": "input-1"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-1",
            required: ""
          },
          model: {
            value: _vm.form.name,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "name", $$v);
            },
            expression: "form.name"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
          staticClass: "mt-3"
        }, [_c("b-col", [!_vm.isSelf ? _c("a", {
          staticClass: "float-left font-weight-bold text-uppercase mt-2",
          attrs: {
            href: "/admin/type-of-deductions"
          }
        }, [_vm._v("\n          MANAGE TYPE OF DEDUCTION\n        ")]) : _vm._e()]), _vm._v(" "), _c("b-col", {
          staticClass: "d-flex justify-content-end"
        }, [_c("b-button", {
          staticClass: "mr-2 btn-outline-brown",
          style: {
            "min-width": "80px"
          },
          attrs: {
            pill: "",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.modalClose();
            }
          }
        }, [_vm._v("\n          CANCEL\n        ")]), _vm._v(" "), _c("b-button", {
          staticClass: "bg-brown shadow btn-ce-submit",
          style: {
            "min-width": "80px"
          },
          attrs: {
            pill: "",
            size: "sm"
          },
          on: {
            click: function click($event) {
              return _vm.onSubmit();
            }
          }
        }, [_vm._v("\n          " + _vm._s(_vm.form.id ? "SAVE CHANGES" : "SAVE") + "\n        ")])], 1)], 1)];
      },
      proxy: true
    }])
  });
};
var staticRenderFns = [];
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

/***/ "./resources/js/helpers/errors.js":
/*!****************************************!*\
  !*** ./resources/js/helpers/errors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Errors = /*#__PURE__*/function () {
  /**
   * Create a new Errors instance.
   */
  function Errors() {
    _classCallCheck(this, Errors);
    this.errors = {};
  }

  /**
   * Determine if an errors exists for the given field.
   *
   * @param {string} field
   */
  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }

    /**
     * Determine if we have any errors.
     */
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }

    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }

    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }

    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }
      this.errors = {};
    }

    /**
     * List of all errors.
     */
  }, {
    key: "list",
    value: function list() {
      var _Object$values;
      var items = [];
      var errorArray = (_Object$values = Object.values(this.errors)) !== null && _Object$values !== void 0 ? _Object$values : [];
      errorArray.forEach(function (error) {
        items.push(error[0]);
      });
      return items;
    }
  }]);
  return Errors;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Errors);

/***/ }),

/***/ "./resources/js/helpers/form.js":
/*!**************************************!*\
  !*** ./resources/js/helpers/form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors.js */ "./resources/js/helpers/errors.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Form = /*#__PURE__*/function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  function Form(data) {
    _classCallCheck(this, Form);
    this.originalData = data;
    for (var field in data) {
      this[field] = data[field];
    }
    this.errors = new _errors_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /**
   * Fetch all relevant data for the form.
   */
  _createClass(Form, [{
    key: "data",
    value: function data() {
      var data = {};
      for (var property in this.originalData) {
        data[property] = this[property];
      }
      return data;
    }

    /**
     * Reset the form fields.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = "";
      }
      this.errors.clear();
    }

    /**
     * Send a POST request to the given URL.
     * .
     * @param {string} url
     */
  }, {
    key: "post",
    value: function post(url) {
      return this.submit("post", url);
    }

    /**
     * Send a PUT request to the given URL.
     * .
     * @param {string} url
     */
  }, {
    key: "put",
    value: function put(url) {
      return this.submit("put", url);
    }

    /**
     * Send a PATCH request to the given URL.
     * .
     * @param {string} url
     */
  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit("patch", url);
    }

    /**
     * Send a DELETE request to the given URL.
     * .
     * @param {string} url
     */
  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit("delete", url);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     */
  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data);
          resolve(response.data);
        })["catch"](function (error) {
          _this.onFail(error.response.data.errors);
          reject(error.response.data.errors);
        });
      });
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
  }, {
    key: "onSuccess",
    value: function onSuccess(data) {
      // temporary
      // this.reset();

      this.errors.clear();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
  }, {
    key: "onFail",
    value: function onFail(errors) {
      this.errors.record(errors);
    }
  }, {
    key: "isDataEmpty",
    value: function isDataEmpty() {
      var key = false;
      Object.values(this.data()).forEach(function (val, ind) {
        if (val) {
          key = true;
        }
      });
      return key;
    }
  }, {
    key: "isDefaultDataEmpty",
    value: function isDefaultDataEmpty() {
      var key = false;
      Object.values(this.data()).forEach(function (val, ind) {
        if (val && val !== 'Add') {
          key = true;
        }
      });
      return key;
    }
  }]);
  return Form;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./resources/js/helpers/text.js":
/*!**************************************!*\
  !*** ./resources/js/helpers/text.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    stringLowerCase: function stringLowerCase(str) {
      return str.toString().toLowerCase();
    },
    capitalizeFirstLetter: function capitalizeFirstLetter(str) {
      var lower = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, function (match) {
        return match.toUpperCase();
      });
    },
    formatAmount: function formatAmount(amount) {
      if (amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return '';
    },
    emptyString: function emptyString() {
      var charac = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var str = "";
      for (var i = 0, l = length; i < l; ++i) {
        str += charac;
      }
      return str;
    },
    inArray: function inArray(needle, haystack) {
      var length = haystack.length;
      for (var i = 0; i < length; i++) {
        if (haystack[i] == needle) return true;
      }
      return false;
    },
    wholeNumberFormat: function wholeNumberFormat(amount, decimaPlace) {
      var amountNow = 0;
      if (amount - Math.floor(amount) !== 0) {
        amountNow = Math.round(amount, decimaPlace);
        if (amountNow === 0) {
          return amount.replace(/\.00$/, '');
        }
        return amountNow.toLocaleString().replace(/\.00$/, '');
      } else {
        amountNow = Math.round(amount, decimaPlace);
        return amountNow.toLocaleString().replace(/\.00$/, '');
      }
    },
    comma_concat: function comma_concat() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'name';
      var items = arguments.length > 1 ? arguments[1] : undefined;
      var set = '';
      var i = 1;
      items.forEach(function (ele) {
        set += ele[key];
        if (i < items.length) {
          set += ', ';
        }
        i++;
      });
      return set;
    },
    showing_label: function showing_label(from, to, total) {
      var f = this.to_strong(from);
      var t = this.to_strong(to);
      var tot = this.to_strong(total);
      return "Showing ".concat(f, " to ").concat(t, " of ").concat(tot, " results");
    },
    to_strong: function to_strong(str) {
      return "<strong>".concat(str, "</strong>");
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/toast.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/toast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ "./resources/js/helpers/text.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_text_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    makeToast: function makeToast() {
      var variant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var title = arguments.length > 1 ? arguments[1] : undefined;
      var message = arguments.length > 2 ? arguments[2] : undefined;
      this.$bvToast.toast(message, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    toConfirm: function toConfirm() {
      return new Promise(function (resolve, reject) {
        $.confirm({
          title: 'Delete Confirm!',
          content: 'Are you sure to delete this data?',
          type: 'red',
          typeAnimated: true,
          buttons: {
            yes: {
              text: 'Yes',
              btnClass: 'btn-red',
              action: function action(resp) {
                resolve({
                  key: true,
                  text: 'yes'
                });
              }
            },
            cancel: function cancel(error) {
              reject({
                key: false,
                text: 'cancel'
              });
            }
          }
        });
      });
    },
    deleteConfirm: function deleteConfirm() {
      var _this = this;
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'CONFIRMATION BEFORE DELETING RECORD';
      var moduleName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      this.boxTwo = '';
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
        title: 'Please Confirm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      }).then(function (value) {
        _this.boxTwo = value;
      })["catch"](function (err) {
        // An error occurred
      });

      // return new Promise((resolve, reject) => {
      //     Swal
      //         .fire({
      //             title: title,
      //             text: `Are you sure you want to delete data form ${moduleName} records?`,
      //             // icon: "warning",
      //             showCancelButton: true,
      //             confirmButtonColor: "#3085d6",
      //             cancelButtonColor: "#d33",
      //             confirmButtonText: "Yes, delete it!",
      //         })
      //         .then((result) => resolve(result))
      //         .catch(error => reject(error));
      // })
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue"],"names":[],"mappings":";AA6JA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"type-of-deduction-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Type of Deduction' : 'Add Type of Deduction'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"input-group-1\" label=\"Name\" label-for=\"input-1\">\n          <b-form-input\n            id=\"input-1\"\n            v-model=\"form.name\"\n            required\n          ></b-form-input>\n          <div v-if=\"errors && errors.name\" class=\"text-danger\">{{ errors.name[0] }}</div>\n        </b-form-group>\n\n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col>\n          <a\n            v-if=\"!isSelf\"\n            href=\"/admin/type-of-deductions\"\n            class=\"float-left font-weight-bold text-uppercase mt-2\"\n          >\n            MANAGE TYPE OF DEDUCTION\n          </a>\n        </b-col>\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\n\nimport toast from \"../../../../helpers/toast.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: {\n    typeOfDeductionForm: Object,\n    isSelf: {\n      type: Boolean,\n      default: true,\n    },\n  },\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.typeOfDeductionForm,\n      errors: {}\n    };\n  },\n\n  methods: {\n    ...mapActions(\"typeOfDeduction\", [\"createTypeOfDeduction\", \"updateTypeOfDeduction\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"type-of-deduction-modal\");\n      this.errors = {};\n\n    },\n\n    handleCreateTypeOfDeduction() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\tname: this.form.name\n\t\t\t}\n\n      this.createTypeOfDeduction(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.name} has been created as a new Type of Deduction`\n          );\n          this.$emit(\"loadTypeOfDeductions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdateTypeOfDeduction() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\tname: this.form.name\n\t\t\t}\n\n      this.updateTypeOfDeduction(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Type of Deduction ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadTypeOfDeductions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdateTypeOfDeduction();\n      } else {\n        this.handleCreateTypeOfDeduction();\n      }\n    },\n  },\n\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/components/index.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/components/index.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=014de2d2 */ "./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductionsTypes/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50 */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50");
/* harmony import */ var _typeOfDeductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _typeOfDeductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__.render,
  _typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3 */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3");
/* harmony import */ var _typeOfDeductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeOfDeductionsModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js");
/* harmony import */ var _typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _typeOfDeductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__.render,
  _typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_014de2d2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=014de2d2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/components/index.vue?vue&type=template&id=014de2d2");


/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsDeleteModal_vue_vue_type_template_id_ec171e50__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsDeleteModal.vue?vue&type=template&id=ec171e50");


/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3 ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_template_id_25e39cc3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=template&id=25e39cc3");


/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2RlZHVjdGlvbnNUeXBlc19jb21wb25lbnRzX2luZGV4X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ2ZNLFVBQUE7SUFDQUgscUJBQUEsRUFBQUEseUVBQUE7SUFDQUMsMkJBQUEsRUFBQUEsK0VBQUFBO0VBQ0E7RUFDQUcsSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQUMsUUFBQTtNQUNBQyxZQUFBO01BQ0FDLFNBQUE7TUFDQUMsTUFBQTtNQUNBQyxRQUFBO01BQ0FWLGNBQUEsRUFBQUEsb0RBQUE7TUFDQVcsU0FBQTtNQUNBQyxRQUFBO01BQ0FDLE9BQUE7UUFDQUMsRUFBQTtRQUNBQyxJQUFBO1FBQ0FDLEtBQUE7TUFDQTtNQUNBQyxjQUFBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtVQUFBQyxLQUFBO1FBQUE7TUFDQSxFQUNBO01BRUFDLG1CQUFBLE1BQUF0Qix3REFBQTtRQUNBdUIsRUFBQTtRQUNBQyxJQUFBO01BQ0E7TUFFQUMsT0FBQTtJQUNBO0VBQ0E7RUFFQUMsT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQWhDLGdEQUFBO0lBQ0FpQyxxQkFBQSxXQUFBQSxzQkFBQTtNQUNBLEtBQUFOLG1CQUFBLENBQUFPLEtBQUE7TUFDQSxLQUFBUCxtQkFBQSxDQUFBQyxFQUFBO01BQ0EsS0FBQUQsbUJBQUEsQ0FBQUUsSUFBQTtNQUVBLEtBQUFDLE9BQUE7TUFDQSxLQUFBSyxRQUFBLENBQUFDLElBQUEsTUFBQU4sT0FBQTtJQUNBO0lBRUFPLG1CQUFBLFdBQUFB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9mb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP2FjMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP2U3NDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL2NvbXBvbmVudHMvaW5kZXgudnVlPzc4MmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP2UyMzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlPzMzOTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL2NvbXBvbmVudHMvaW5kZXgudnVlPzk5YzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP2E3YjkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlPzAwMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL2NvbXBvbmVudHMvaW5kZXgudnVlP2Q0ZDIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP2JhNDAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8aDEgY2xhc3M9XCJtLTAgbWItMiBmb250LXdlaWdodC1ib2xkIHRleHQtaW5mb1wiPlR5cGUgb2YgRGVkdWN0aW9uczwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGItYnV0dG9uIFxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVR5cGVPZkRlZHVjdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cInBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2ItaWNvbj5OZXdcbiAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYi0zXCI+XG4gICAgICAgICAgICA8Yi1mb3JtIGlubGluZT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibXItc20tMlwiIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiPlxuICAgICAgICAgICAgICAgIFNob3dcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcbiAgICAgICAgICAgICAgICBpZD1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIG1yLXNtLTIgbWItc20tMFwiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzaG93RW50cmllc09wdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIG1yLXNtLTIgbWItc20tMFwiXG4gICAgICAgICAgICAgICAgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVudHJpZXNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvYi1mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlICNhcHBlbmQ+XG4gICAgICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGItb3ZlcmxheSA6c2hvdz1cImlzT3ZlcmxheVwiIHJvdW5kZWQ9XCJzbVwiPlxuICAgICAgICAgICAgICA8Yi10YWJsZVxuICAgICAgICAgICAgICAgIGhvdmVyXG4gICAgICAgICAgICAgICAgc3RyaXBlZFxuICAgICAgICAgICAgICAgIHNob3ctZW1wdHlcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtcy5kYXRhXCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCIwXCJcbiAgICAgICAgICAgICAgICA6YnVzeT1cImlzTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgOmN1cnJlbnQtcGFnZT1cImN1cnJlbnRfcGFnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI3RhYmxlLWJ1c3k+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtNCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXIgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj48L2Itc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2VtcHR5PlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXIgcC01IHRleHQtbXV0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGk+e3sgXCJObyBkYXRhIGZvdW5kIVwiIH19PC9pPlxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGRhdGVfY3JlYXRlZCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybWF0RGF0ZShkYXRhLml0ZW0uY3JlYXRlZF9hdCkgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGFjdGlvbnMpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PVwic3VjY2Vzc1wiIGNsYXNzPVwibXItMlwiIEBjbGljaz1cImVkaXRUeXBlT2ZEZWR1Y3Rpb24oZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRURJVFxuICAgICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBAY2xpY2s9XCJkZWxldGVUeXBlT2ZEZWR1Y3Rpb24oZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgREVMRVRFXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBsYWJlbD1cIlNtYWxsIExvYWRpbmcuLi5cIj48L2Itc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgICAgICAgICAgPC9iLXRhYmxlPlxuICAgICAgICAgICAgPC9iLW92ZXJsYXk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxwPnt7YFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYH19PC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxUeXBlT2ZEZWR1Y3Rpb25zTW9kYWwgOnR5cGVPZkRlZHVjdGlvbkZvcm09XCJ0eXBlT2ZEZWR1Y3Rpb25Gb3JtXCIgQGxvYWRUeXBlT2ZEZWR1Y3Rpb25zPVwibG9hZFR5cGVPZkRlZHVjdGlvbnMoKVwiPjwvVHlwZU9mRGVkdWN0aW9uc01vZGFsPlxuICAgIDxUeXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwgOnR5cGVPZkRlZHVjdGlvbkZvcm09XCJ0eXBlT2ZEZWR1Y3Rpb25Gb3JtXCIgQGxvYWRUeXBlT2ZEZWR1Y3Rpb25zPVwibG9hZFR5cGVPZkRlZHVjdGlvbnMoKVwiPjwvVHlwZU9mRGVkdWN0aW9uc0RlbGV0ZU1vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHNob3dFbnRyaWVzT3B0IH0gZnJvbSBcIkBqcy9kYXRhXCI7XG5pbXBvcnQgVHlwZU9mRGVkdWN0aW9uc01vZGFsIGZyb20gXCIuLi9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZVwiO1xuaW1wb3J0IFR5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbC52dWVcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm0uanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFR5cGVPZkRlZHVjdGlvbnNNb2RhbCxcbiAgICBUeXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgY3VycmVudF9wYWdlOiAxLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgc2VhcmNoZWQ6IFwiXCIsXG4gICAgICBzaG93RW50cmllc09wdCxcbiAgICAgIGlzT3ZlcmxheTogZmFsc2UsXG4gICAgICB0b3RhbFJvdzogMCxcbiAgICAgIHNob3dpbmc6IHtcbiAgICAgICAgdG86IDAsXG4gICAgICAgIGZyb206IDAsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHRhYmxlVG90YWxSb3dzOiBcIlwiLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwibmFtZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAvLyB0aFN0eWxlOiB7IHdpZHRoOiBcIjIwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZGF0ZV9jcmVhdGVkXCIsXG4gICAgICAgICAgbGFiZWw6IFwiRGF0ZSBDcmVhdGVkXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICBsYWJlbDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgdGhDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRkQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICB0aFN0eWxlOiB7IHdpZHRoOiBcIjEwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgICB0eXBlT2ZEZWR1Y3Rpb25Gb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgfSksXG5cbiAgICAgIG1vZGFsSWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInR5cGVPZkRlZHVjdGlvblwiLCBbXCJsb2FkSXRlbXNcIl0pLFxuICAgIGNyZWF0ZVR5cGVPZkRlZHVjdGlvbigpIHtcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLmlkID0gXCJcIjtcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5uYW1lID0gXCJcIjtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJ0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGVkaXRUeXBlT2ZEZWR1Y3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLm5hbWUgPSBkYXRhLm5hbWU7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwidHlwZS1vZi1kZWR1Y3Rpb24tbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBkZWxldGVUeXBlT2ZEZWR1Y3Rpb24oZGF0YSkge1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLm5hbWUgPSBkYXRhLm5hbWU7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwidHlwZS1vZi1kZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgbG9hZFR5cGVPZkRlZHVjdGlvbnMoKSB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBwZXJfcGFnZTogdGhpcy5wZXJfcGFnZSxcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50X3BhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZEl0ZW1zKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxlVG90YWxSb3dzID0gdGhpcy5pdGVtcy50b3RhbFxuICAgICAgICAgIHRoaXMuc2hvd2luZy50byA9IHRoaXMuaXRlbXMudG87XG4gICAgICAgICAgdGhpcy5zaG93aW5nLmZyb20gPSB0aGlzLml0ZW1zLmZyb207XG4gICAgICAgICAgdGhpcy5zaG93aW5nLnRvdGFsID0gdGhpcy5pdGVtcy50b3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBfLmRlYm91bmNlKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnNlYXJjaGVkID0gcXVlcnlcbiAgICB9LCAxMDAwKVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZFR5cGVPZkRlZHVjdGlvbnMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJ0eXBlT2ZEZWR1Y3Rpb25cIiwge1xuICAgICAgaXRlbXM6IFwiZ2V0VHlwZU9mRGVkdWN0aW9uc1wiLFxuICAgIH0pLFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY3VycmVudF9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBlcl9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpXG4gICAgfSxcblxuICAgIHNlYXJjaGVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKClcbiAgICAgIH1cbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbiAgPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInR5cGUtb2YtZGVkdWN0aW9uLWRlbGV0ZS1tb2RhbFwiXG4gICAgaGlkZS1oZWFkZXJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY2VudGVyZWRcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1yb3c+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg0PkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEPC9oND5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3sgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtmb3JtLm5hbWV9IGZyb20gVHlwZSBvZiBEZWR1Y3Rpb25zIHJlY29yZHM/YCB9fVxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTRcIj5cbiAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiPlxuICAgICAgICAgICAgTk9cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIFlFU1xuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcblxuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbdG9hc3RdLFxuXG4gIHByb3BzOiBbXCJ0eXBlT2ZEZWR1Y3Rpb25Gb3JtXCJdLFxuXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJ0eXBlT2ZEZWR1Y3Rpb25cIiwgW1wiZGVsZXRlVHlwZU9mRGVkdWN0aW9uXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwidHlwZS1vZi1kZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZVR5cGVPZkRlZHVjdGlvbihwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcImRhbmdlclwiLFxuICAgICAgICAgICAgXCJSRUNPUkQgREVMRVRFRFwiLFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLm5hbWV9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBUeXBlIE9mIERlZHVjdGlvbnMgcmVjb3Jkcy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZFR5cGVPZkRlZHVjdGlvbnNcIik7XG4gICAgICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwidHlwZS1vZi1kZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwidHlwZS1vZi1kZWR1Y3Rpb24tbW9kYWxcIlxuICAgIGhpZGUtZm9vdGVyXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cbiAgICAgIFxuICAgICAgPGg1IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiPnt7IGZvcm0uaWQgPyAnRWRpdCBUeXBlIG9mIERlZHVjdGlvbicgOiAnQWRkIFR5cGUgb2YgRGVkdWN0aW9uJ319PC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXG4gICAgICAgIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItZm9ybT5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTFcIiBsYWJlbD1cIk5hbWVcIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dC0xXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5uYW1lXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5uYW1lWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuXG4gICAgICA8L2ItZm9ybT5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB2LWlmPVwiIWlzU2VsZlwiXG4gICAgICAgICAgICBocmVmPVwiL2FkbWluL3R5cGUtb2YtZGVkdWN0aW9uc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZsb2F0LWxlZnQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNQU5BR0UgVFlQRSBPRiBERURVQ1RJT05cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczoge1xuICAgIHR5cGVPZkRlZHVjdGlvbkZvcm06IE9iamVjdCxcbiAgICBpc1NlbGY6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInR5cGVPZkRlZHVjdGlvblwiLCBbXCJjcmVhdGVUeXBlT2ZEZWR1Y3Rpb25cIiwgXCJ1cGRhdGVUeXBlT2ZEZWR1Y3Rpb25cIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xuXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJ0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbFwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XG5cbiAgICB9LFxuXG4gICAgaGFuZGxlQ3JlYXRlVHlwZU9mRGVkdWN0aW9uKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRuYW1lOiB0aGlzLmZvcm0ubmFtZVxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmNyZWF0ZVR5cGVPZkRlZHVjdGlvbihwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0ubmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBUeXBlIG9mIERlZHVjdGlvbmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZVR5cGVPZkRlZHVjdGlvbigpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcblx0XHRcdFx0bmFtZTogdGhpcy5mb3JtLm5hbWVcblx0XHRcdH1cblxuICAgICAgdGhpcy51cGRhdGVUeXBlT2ZEZWR1Y3Rpb24ocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBVUERBVEVEXCIsXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgVHlwZSBvZiBEZWR1Y3Rpb24gSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVR5cGVPZkRlZHVjdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVUeXBlT2ZEZWR1Y3Rpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlR5cGUgb2YgRGVkdWN0aW9uc1wiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlciBweS0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGVUeXBlT2ZEZWR1Y3Rpb24gfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2hvd0VudHJpZXNPcHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVyX3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2hvdzogX3ZtLmlzT3ZlcmxheSwgcm91bmRlZDogXCJzbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGFibGUtYnVzeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhcIk5vIGRhdGEgZm91bmQhXCIpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoZGF0ZV9jcmVhdGVkKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShkYXRhLml0ZW0uY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGFjdGlvbnMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0VHlwZU9mRGVkdWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgRURJVFxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVUeXBlT2ZEZWR1Y3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIGBTaG93aW5nICR7X3ZtLnNob3dpbmcuZnJvbX0gdG8gJHtfdm0uc2hvd2luZy50b30gb2YgJHtfdm0uc2hvd2luZy50b3RhbH0gZW50cmllc2BcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidG90YWwtcm93c1wiOiBfdm0udGFibGVUb3RhbFJvd3MsXG4gICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50X3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJUeXBlT2ZEZWR1Y3Rpb25zTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlT2ZEZWR1Y3Rpb25Gb3JtOiBfdm0udHlwZU9mRGVkdWN0aW9uRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRUeXBlT2ZEZWR1Y3Rpb25zOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJUeXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlT2ZEZWR1Y3Rpb25Gb3JtOiBfdm0udHlwZU9mRGVkdWN0aW9uRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRUeXBlT2ZEZWR1Y3Rpb25zOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwidHlwZS1vZi1kZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCIsXG4gICAgICBcImhpZGUtaGVhZGVyXCI6IFwiXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBjZW50ZXJlZDogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkRcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7X3ZtLmZvcm0ubmFtZX0gZnJvbSBUeXBlIG9mIERlZHVjdGlvbnMgcmVjb3Jkcz9gXG4gICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTk9cXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgWUVTXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInR5cGUtb2YtZGVkdWN0aW9uLW1vZGFsXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1vZGFsLWhlYWRlclwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmlkXG4gICAgICAgICAgICAgICAgICAgID8gXCJFZGl0IFR5cGUgb2YgRGVkdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkFkZCBUeXBlIG9mIERlZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWItdG9vbHRpcC5ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgaG92ZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0LWdyb3VwLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaW5wdXQtMVwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMubmFtZVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uaXNTZWxmXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi90eXBlLW9mLWRlZHVjdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIE1BTkFHRSBUWVBFIE9GIERFRFVDVElPTlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlNBVkUgQ0hBTkdFU1wiIDogXCJTQVZFXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgIF0pLFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImNvbnN0IHNob3dFbnRyaWVzT3B0ID0gW1xuICAgIHsgdmFsdWU6IDEwLCB0ZXh0OiBcIjEwXCIgfSxcbiAgICB7IHZhbHVlOiAzMCwgdGV4dDogXCIzMFwiIH0sXG4gICAgeyB2YWx1ZTogNTAsIHRleHQ6IFwiNTBcIiB9LFxuICAgIHsgdmFsdWU6IDEwMCwgdGV4dDogXCIxMDBcIiB9LFxuXVxuXG5cbmV4cG9ydCB7XG4gICAgc2hvd0VudHJpZXNPcHQsXG59IiwiY2xhc3MgRXJyb3JzIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBFcnJvcnMgaW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBlcnJvcnMgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgaGFzKGZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgd2UgaGF2ZSBhbnkgZXJyb3JzLlxuICAgKi9cbiAgYW55KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgYSBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqL1xuICBnZXQoZmllbGQpIHtcbiAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmQgdGhlIG5ldyBlcnJvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICovXG4gIHJlY29yZChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gZmllbGRcbiAgICovXG4gIGNsZWFyKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBlcnJvcnMuXG4gICAqL1xuICBsaXN0KCkge1xuICAgIGxldCBpdGVtcyA9IFtdXG4gICAgbGV0IGVycm9yQXJyYXkgPSBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKSA/PyBbXVxuICAgIGVycm9yQXJyYXkuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBpdGVtcy5wdXNoKGVycm9yWzBdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcbiIsImltcG9ydCBFcnJvcnMgZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5cbmNsYXNzIEZvcm0ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuXG4gICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBhbGwgcmVsZXZhbnQgZGF0YSBmb3IgdGhlIGZvcm0uXG4gICAqL1xuICBkYXRhKCkge1xuICAgIGxldCBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBcIlwiO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBvc3QodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicG9zdFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQVVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHB1dCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwdXRcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBhdGNoKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBhdGNoXCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcImRlbGV0ZVwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgLy8gdGVtcG9yYXJ5XG4gICAgLy8gdGhpcy5yZXNldCgpO1xuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycyk7XG4gIH1cblxuXG4gIGlzRGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSgpKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZCkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpc0RlZmF1bHREYXRhRW1wdHkoKSB7XG4gICAgbGV0IGtleSA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwgJiYgdmFsICE9PSAnQWRkJykge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBzdHJpbmdMb3dlckNhc2Uoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgIH0sXG5cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyLCBsb3dlciA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKGxvd2VyID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIpLnJlcGxhY2UoLyg/Ol58XFxzfFtcIicoW3tdKStcXFMvZywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSk7XG4gICAgfSxcblxuICAgIGZvcm1hdEFtb3VudChhbW91bnQpIHtcbiAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIGFtb3VudC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgZW1wdHlTdHJpbmcoY2hhcmFjID0gJy0nLCBsZW5ndGggPSA0KSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHN0ciArPSBjaGFyYWNcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcblxuICAgIGluQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgdmFyIGxlbmd0aCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIHdob2xlTnVtYmVyRm9ybWF0KGFtb3VudCwgZGVjaW1hUGxhY2UpIHtcbiAgICAgIHZhciBhbW91bnROb3cgPSAwXG4gICAgICBpZiAoKGFtb3VudCAtIE1hdGguZmxvb3IoYW1vdW50KSkgIT09IDApIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgaWYgKGFtb3VudE5vdyA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBhbW91bnQucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbW91bnROb3cudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbW91bnROb3cgPSBNYXRoLnJvdW5kKGFtb3VudCwgZGVjaW1hUGxhY2UpO1xuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21tYV9jb25jYXQoa2V5ID0gJ25hbWUnLCBpdGVtcykge1xuICAgICAgbGV0IHNldCA9ICcnO1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgaXRlbXMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBzZXQgKz0gZWxlW2tleV07XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LFxuXG4gICAgc2hvd2luZ19sYWJlbChmcm9tLCB0bywgdG90YWwpIHtcbiAgICAgIGxldCBmID0gdGhpcy50b19zdHJvbmcoZnJvbSlcbiAgICAgIGxldCB0ID0gdGhpcy50b19zdHJvbmcodG8pXG4gICAgICBsZXQgdG90ID0gdGhpcy50b19zdHJvbmcodG90YWwpXG4gICAgICByZXR1cm4gYFNob3dpbmcgJHtmfSB0byAke3R9IG9mICR7dG90fSByZXN1bHRzYDtcbiAgICB9LFxuXG4gICAgdG9fc3Ryb25nKHN0cikge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7c3RyfTwvc3Ryb25nPmA7XG4gICAgfVxuICB9LFxufTtcblxuIiwiaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbdGV4dF0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtYWtlVG9hc3QodmFyaWFudCA9IG51bGwsIHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLiRidlRvYXN0LnRvYXN0KG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgICAgICAgICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgJC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgQ29uZmlybSEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIGRhdGE/JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVBbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2xhc3M6ICdidG4tcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnY2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlQ29uZmlybSh0aXRsZSA9ICdDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRCcsIG1vZHVsZU5hbWUgPSBcIlwiKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm94VHdvID0gJydcbiAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgZXZlcnl0aGluZy4nLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgQ29uZmlybScsXG4gICAgICAgICAgICAgICAgYnV0dG9uU2l6ZTogJ3NtJyxcbiAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdZRVMnLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxuICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcbiAgICAgICAgICAgICAgICBoaWRlSGVhZGVyQ2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hUd28gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBTd2FsXG4gICAgICAgICAgICAvLyAgICAgICAgIC5maXJlKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGRhdGEgZm9ybSAke21vZHVsZU5hbWV9IHJlY29yZHM/YCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzb2x2ZShyZXN1bHQpKVxuICAgICAgICAgICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgfSxcblxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZKQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcInR5cGUtb2YtZGVkdWN0aW9uLW1vZGFsXFxcIlxcbiAgICBoaWRlLWZvb3RlclxcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxcbiAgICBjb250ZW50LWNsYXNzPVxcXCJib3JkZXItdG9wIGJnLWNyZWFtXFxcIlxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cXG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XFxuICAgICAgXFxuICAgICAgPGg1IGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXFxcIj57eyBmb3JtLmlkID8gJ0VkaXQgVHlwZSBvZiBEZWR1Y3Rpb24nIDogJ0FkZCBUeXBlIG9mIERlZHVjdGlvbid9fTwvaDU+XFxuICAgICAgPGItYnV0dG9uXFxuICAgICAgICBwaWxsXFxuICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXFxuICAgICAgICBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICA8L2ItYnV0dG9uPlxcbiAgICA8L3RlbXBsYXRlPlxcblxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGItZm9ybT5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTFcXFwiIGxhYmVsPVxcXCJOYW1lXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTFcXFwiPlxcbiAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgaWQ9XFxcImlucHV0LTFcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5uYW1lXFxcIlxcbiAgICAgICAgICAgIHJlcXVpcmVkXFxuICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLm5hbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLm5hbWVbMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgIDwvYi1mb3JtPlxcbiAgICAgIDxiLXJvdyBjbGFzcz1cXFwibXQtM1xcXCI+XFxuICAgICAgICA8Yi1jb2w+XFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgdi1pZj1cXFwiIWlzU2VsZlxcXCJcXG4gICAgICAgICAgICBocmVmPVxcXCIvYWRtaW4vdHlwZS1vZi1kZWR1Y3Rpb25zXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIE1BTkFHRSBUWVBFIE9GIERFRFVDVElPTlxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5cXG5pbXBvcnQgdG9hc3QgZnJvbSBcXFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1xcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbWl4aW5zOiBbdG9hc3RdLFxcblxcbiAgcHJvcHM6IHtcXG4gICAgdHlwZU9mRGVkdWN0aW9uRm9ybTogT2JqZWN0LFxcbiAgICBpc1NlbGY6IHtcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgIH0sXFxuICB9LFxcblxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcXG4gICAgICBmb3JtOiB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0sXFxuICAgICAgZXJyb3JzOiB7fVxcbiAgICB9O1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwidHlwZU9mRGVkdWN0aW9uXFxcIiwgW1xcXCJjcmVhdGVUeXBlT2ZEZWR1Y3Rpb25cXFwiLCBcXFwidXBkYXRlVHlwZU9mRGVkdWN0aW9uXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJ0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbFxcXCIpO1xcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XFxuXFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZUNyZWF0ZVR5cGVPZkRlZHVjdGlvbigpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG5cXHRcXHRcXHRcXHRuYW1lOiB0aGlzLmZvcm0ubmFtZVxcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLmNyZWF0ZVR5cGVPZkRlZHVjdGlvbihwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgXFxcIk5FVyBSRUNPUkQgQ1JFQVRFRFxcXCIsXFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLm5hbWV9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSBuZXcgVHlwZSBvZiBEZWR1Y3Rpb25gXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWRUeXBlT2ZEZWR1Y3Rpb25zXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBoYW5kbGVVcGRhdGVUeXBlT2ZEZWR1Y3Rpb24oKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdG5hbWU6IHRoaXMuZm9ybS5uYW1lXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMudXBkYXRlVHlwZU9mRGVkdWN0aW9uKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJ3YXJuaW5nXFxcIixcXG4gICAgICAgICAgICBcXFwiUkVDT1JEIFVQREFURURcXFwiLFxcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBUeXBlIG9mIERlZHVjdGlvbiBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25TdWJtaXQoKSB7XFxuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xcbiAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVUeXBlT2ZEZWR1Y3Rpb24oKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVUeXBlT2ZEZWR1Y3Rpb24oKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICB9LFxcblxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1ZTM5Y2MzJmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZGUyZDJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDE0ZGUyZDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDE0ZGUyZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDE0ZGUyZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTRkZTJkMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAxNGRlMmQyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvY29tcG9uZW50cy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWMxNzFlNTBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlYzE3MWU1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlYzE3MWU1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlYzE3MWU1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdHlwZU9mRGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzE3MWU1MFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2VjMTcxZTUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNEZWxldGVNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjVlMzljYzNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMzljYzMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNWUzOWNjMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNWUzOWNjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNWUzOWNjMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWUzOWNjM1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1ZTM5Y2MzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90eXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE0ZGUyZDJcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdHlwZU9mRGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYzE3MWU1MFwiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hcEFjdGlvbnMiLCJtYXBHZXR0ZXJzIiwic2hvd0VudHJpZXNPcHQiLCJUeXBlT2ZEZWR1Y3Rpb25zTW9kYWwiLCJUeXBlT2ZEZWR1Y3Rpb25zRGVsZXRlTW9kYWwiLCJGb3JtIiwiY29tcG9uZW50cyIsImRhdGEiLCJwZXJfcGFnZSIsImN1cnJlbnRfcGFnZSIsImlzTG9hZGluZyIsImZpbHRlciIsInNlYXJjaGVkIiwiaXNPdmVybGF5IiwidG90YWxSb3ciLCJzaG93aW5nIiwidG8iLCJmcm9tIiwidG90YWwiLCJ0YWJsZVRvdGFsUm93cyIsImZpZWxkcyIsImtleSIsImxhYmVsIiwidGhDbGFzcyIsInRkQ2xhc3MiLCJ0aFN0eWxlIiwid2lkdGgiLCJ0eXBlT2ZEZWR1Y3Rpb25Gb3JtIiwiaWQiLCJuYW1lIiwibW9kYWxJZCIsIm1ldGhvZHMiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlVHlwZU9mRGVkdWN0aW9uIiwicmVzZXQiLCIkYnZNb2RhbCIsInNob3ciLCJlZGl0VHlwZU9mRGVkdWN0aW9uIiwiZGVsZXRlVHlwZU9mRGVkdWN0aW9uIiwibG9hZFR5cGVPZkRlZHVjdGlvbnMiLCJfdGhpcyIsInBhcmFtcyIsInBhZ2UiLCJzZWFyY2giLCJsb2FkSXRlbXMiLCJ0aGVuIiwiXyIsIml0ZW1zIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJwZXJmb3JtU2VhcmNoIiwiZGVib3VuY2UiLCJxdWVyeSIsIm1vdW50ZWQiLCJjb21wdXRlZCIsIndhdGNoIiwiaGFuZGxlciIsInZhbHVlIiwidG9hc3QiLCJtaXhpbnMiLCJwcm9wcyIsImZvcm0iLCJtb2RhbENsb3NlIiwiZG9uZSIsImhpZGUiLCJvblN1Ym1pdCIsIm1ha2VUb2FzdCIsImNvbmNhdCIsIiRlbWl0IiwiZXJyb3IiLCJlcnJvcnMiLCJyZXNwb25zZSIsIk9iamVjdCIsImlzU2VsZiIsInR5cGUiLCJCb29sZWFuIiwiaGFuZGxlQ3JlYXRlVHlwZU9mRGVkdWN0aW9uIiwiaGFuZGxlVXBkYXRlVHlwZU9mRGVkdWN0aW9uIiwiX3RoaXMyIiwidXBkYXRlVHlwZU9mRGVkdWN0aW9uIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJhdHRycyIsInZhcmlhbnQiLCJvbiIsImNsaWNrIiwiaWNvbiIsImlubGluZSIsIm9wdGlvbnMiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsInNjb3BlZFNsb3RzIiwiX3UiLCJmbiIsInByb3h5IiwicGxhY2Vob2xkZXIiLCJyb3VuZGVkIiwiaG92ZXIiLCJzdHJpcGVkIiwiYnVzeSIsIl9zIiwiaXRlbSIsImNyZWF0ZWRfYXQiLCJzaXplIiwiJGV2ZW50IiwiYWxpZ24iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiY2VudGVyZWQiLCJzdHlsZSIsInBpbGwiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsIm1vZGlmaWVycyIsInJlcXVpcmVkIiwiJHNldCIsIl9lIiwiaHJlZiIsInRleHQiLCJFcnJvcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJoYXMiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiYW55Iiwia2V5cyIsImxlbmd0aCIsImdldCIsInJlY29yZCIsImNsZWFyIiwibGlzdCIsIl9PYmplY3QkdmFsdWVzIiwiZXJyb3JBcnJheSIsInZhbHVlcyIsImZvckVhY2giLCJwdXNoIiwib3JpZ2luYWxEYXRhIiwicHJvcGVydHkiLCJwb3N0IiwidXJsIiwic3VibWl0IiwicHV0IiwicGF0Y2giLCJfZGVsZXRlIiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwib25TdWNjZXNzIiwib25GYWlsIiwiaXNEYXRhRW1wdHkiLCJ2YWwiLCJpbmQiLCJpc0RlZmF1bHREYXRhRW1wdHkiLCJzdHJpbmdMb3dlckNhc2UiLCJzdHIiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwibG93ZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdEFtb3VudCIsImFtb3VudCIsImVtcHR5U3RyaW5nIiwiY2hhcmFjIiwiaSIsImwiLCJpbkFycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJ3aG9sZU51bWJlckZvcm1hdCIsImRlY2ltYVBsYWNlIiwiYW1vdW50Tm93IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbW1hX2NvbmNhdCIsInNldCIsImVsZSIsInNob3dpbmdfbGFiZWwiLCJmIiwidG9fc3Ryb25nIiwidCIsInRvdCIsInRpdGxlIiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJhY3Rpb24iLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==