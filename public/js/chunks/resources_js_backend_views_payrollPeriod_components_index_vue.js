"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_payrollPeriod_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/payrollPeriodsModal.vue */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue");
/* harmony import */ var _modals_payrollPeriodsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/payrollPeriodsDeleteModal.vue */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PayrollPeriodsModal: _modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PayrollPeriodsDeleteModal: _modals_payrollPeriodsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        key: "date_from",
        label: "Date From"
        // thStyle: { width: "20%" },
      }, {
        key: "date_to",
        label: "Date To"
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
      payrollPeriodForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        date_from: "",
        date_to: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("payrollPeriod", ["loadItems"])), {}, {
    createPayrollPeriod: function createPayrollPeriod() {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = "";
      this.payrollPeriodForm.date_from = "";
      this.payrollPeriodForm.date_to = "";
      this.modalId = "payroll-period-modal";
      this.$bvModal.show(this.modalId);
    },
    editPayrollPeriod: function editPayrollPeriod(data) {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = data.id;
      this.payrollPeriodForm.date_from = data.date_from;
      this.payrollPeriodForm.date_to = data.date_to;
      this.modalId = "payroll-period-modal";
      this.$bvModal.show(this.modalId);
    },
    deletePayrollPeriod: function deletePayrollPeriod(data) {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = data.id;
      this.payrollPeriodForm.date_from = data.date_from;
      this.payrollPeriodForm.date_to = data.date_to;
      this.modalId = "payroll-period-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadPayrollPeriods: function loadPayrollPeriods() {
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
    this.loadPayrollPeriods();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("payrollPeriod", {
    items: "getPayrollPeriods"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadPayrollPeriods();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadPayrollPeriods();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadPayrollPeriods();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  props: ["payrollPeriodForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.payrollPeriodForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("payrollPeriod", ["deletePayrollPeriod"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("payroll-period-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deletePayrollPeriod(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.formatDate(_this.form.date_from), " - ").concat(_this.formatDate(_this.form.date_to), " has been removed from Payroll Period records."));
        _this.$emit("loadPayrollPeriods");
        _this.$bvModal.hide("payroll-period-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    payrollPeriodForm: Object,
    isSelf: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      isLoading: false,
      form: this.payrollPeriodForm,
      errors: {},
      dateFrom: "",
      dateTo: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("payrollPeriod", ["createPayrollPeriod", "updatePayrollPeriod"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("payroll-period-modal");
      this.errors = {};
    },
    handleCreatePayrollPeriod: function handleCreatePayrollPeriod() {
      var _this = this;
      this.isLoading = true;
      var params = {
        date_from: this.form.date_from,
        date_to: this.form.date_to
      };
      this.createPayrollPeriod(params).then(function (_) {
        _this.makeToast("success", "NEW RECORD CREATED", "".concat(_this.formatDate(_this.form.date_from), " - ").concat(_this.formatDate(_this.form.date_to), " has been created as new Payroll period"));
        _this.$emit("loadPayrollPeriods");
        _this.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.errors = errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    handleUpdatePayrollPeriod: function handleUpdatePayrollPeriod() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        date_from: this.form.date_from,
        date_to: this.form.date_to
      };
      this.updatePayrollPeriod(params).then(function (_) {
        _this2.makeToast("warning", "RECORD UPDATED", "This information for Payroll Period ID: ".concat(_this2.form.id, " has been updated."));
        _this2.$emit("loadPayrollPeriods");
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
        this.handleUpdatePayrollPeriod();
      } else {
        this.handleCreatePayrollPeriod();
      }
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    },
    onContextDateFrom: function onContextDateFrom(ctx) {
      if (ctx.selectedYMD) {
        this.dateFrom = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');
        return;
      }
      this.dateFrom = "";
    },
    onContextDateTo: function onContextDateTo(ctx) {
      if (ctx.selectedYMD) {
        this.dateTo = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');
        return;
      }
      this.dateTo = "";
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Payroll Period")]), _vm._v(" "), _c("div", {
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
      click: _vm.createPayrollPeriod
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
      key: "cell(date_from)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.date_from)) + "\n                ")])];
      }
    }, {
      key: "cell(date_to)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.date_to)) + "\n                ")])];
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
              return _vm.editPayrollPeriod(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deletePayrollPeriod(data.item);
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
  })], 1)])])]), _vm._v(" "), _c("PayrollPeriodsModal", {
    attrs: {
      payrollPeriodForm: _vm.payrollPeriodForm
    },
    on: {
      loadPayrollPeriods: function loadPayrollPeriods($event) {
        return _vm.loadPayrollPeriods();
      }
    }
  }), _vm._v(" "), _c("PayrollPeriodsDeleteModal", {
    attrs: {
      payrollPeriodForm: _vm.payrollPeriodForm
    },
    on: {
      loadPayrollPeriods: function loadPayrollPeriods($event) {
        return _vm.loadPayrollPeriods();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "payroll-period-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.formatDate(_vm.form.date_from), " - ").concat(_vm.formatDate(_vm.form.date_to), " from Payroll Period records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "payroll-period-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Payroll Period" : "Add Payroll Period"))]), _vm._v(" "), _c("b-button", {
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
            label: "Date From",
            "label-for": "input-1"
          }
        }, [_c("b-input-group", [_c("b-form-input", {
          attrs: {
            id: "date-from",
            type: "text",
            placeholder: "No date selected",
            readonly: ""
          },
          model: {
            value: _vm.dateFrom,
            callback: function callback($$v) {
              _vm.dateFrom = $$v;
            },
            expression: "dateFrom"
          }
        }), _vm._v(" "), _c("b-input-group-append", [_c("b-form-datepicker", {
          attrs: {
            "button-only": "",
            right: "",
            locale: "en-US",
            "aria-controls": "date-from"
          },
          on: {
            context: _vm.onContextDateFrom
          },
          model: {
            value: _vm.form.date_from,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "date_from", $$v);
            },
            expression: "form.date_from"
          }
        })], 1)], 1), _vm._v(" "), _vm.errors && _vm.errors.date_from ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.date_from[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "input-group-2",
            label: "Date To",
            "label-for": "input-2"
          }
        }, [_c("b-input-group", [_c("b-form-input", {
          attrs: {
            id: "date-to",
            type: "text",
            placeholder: "No date selected",
            readonly: ""
          },
          model: {
            value: _vm.dateTo,
            callback: function callback($$v) {
              _vm.dateTo = $$v;
            },
            expression: "dateTo"
          }
        }), _vm._v(" "), _c("b-input-group-append", [_c("b-form-datepicker", {
          attrs: {
            "button-only": "",
            right: "",
            locale: "en-US",
            "aria-controls": "date-to"
          },
          on: {
            context: _vm.onContextDateTo
          },
          model: {
            value: _vm.form.date_to,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "date_to", $$v);
            },
            expression: "form.date_to"
          }
        })], 1)], 1), _vm._v(" "), _vm.errors && _vm.errors.date_to ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.date_to[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
          staticClass: "mt-3"
        }, [_c("b-col", [!_vm.isSelf ? _c("a", {
          staticClass: "float-left font-weight-bold text-uppercase mt-2",
          attrs: {
            href: "/admin/payroll-periods"
          }
        }, [_vm._v("\n          MANAGE PAYROLL PERIOD\n        ")]) : _vm._e()]), _vm._v(" "), _c("b-col", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue"],"names":[],"mappings":";AA6NA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"payroll-period-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Payroll Period' : 'Add Payroll Period'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"input-group-1\" label=\"Date From\" label-for=\"input-1\">\n          <b-input-group>\n            <b-form-input\n              id=\"date-from\"\n              v-model=\"dateFrom\"\n              type=\"text\"\n              placeholder=\"No date selected\"\n              readonly\n            ></b-form-input>\n            <b-input-group-append>\n              <b-form-datepicker\n                v-model=\"form.date_from\"\n                button-only\n                right\n                locale=\"en-US\"\n                aria-controls=\"date-from\"\n                @context=\"onContextDateFrom\"\n              ></b-form-datepicker>\n            </b-input-group-append>\n          </b-input-group>\n          <div v-if=\"errors && errors.date_from\" class=\"text-danger\">{{ errors.date_from[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-2\" label=\"Date To\" label-for=\"input-2\">\n          <b-input-group>\n            <b-form-input\n              id=\"date-to\"\n              v-model=\"dateTo\"\n              type=\"text\"\n              placeholder=\"No date selected\"\n              readonly\n            ></b-form-input>\n            <b-input-group-append>\n              <b-form-datepicker\n                v-model=\"form.date_to\"\n                button-only\n                right\n                locale=\"en-US\"\n                aria-controls=\"date-to\"\n                @context=\"onContextDateTo\"\n              ></b-form-datepicker>\n            </b-input-group-append>\n          </b-input-group>\n          <div v-if=\"errors && errors.date_to\" class=\"text-danger\">{{ errors.date_to[0] }}</div>\n        </b-form-group>\n\n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col>\n          <a\n            v-if=\"!isSelf\"\n            href=\"/admin/payroll-periods\"\n            class=\"float-left font-weight-bold text-uppercase mt-2\"\n          >\n            MANAGE PAYROLL PERIOD\n          </a>\n        </b-col>\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\n\nimport toast from \"../../../../helpers/toast.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: {\n    payrollPeriodForm: Object,\n    isSelf: {\n      type: Boolean,\n      default: true,\n    },\n  },\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.payrollPeriodForm,\n      errors: {},\n      dateFrom: \"\",\n      dateTo: \"\"\n    };\n  },\n\n  methods: {\n    ...mapActions(\"payrollPeriod\", [\"createPayrollPeriod\", \"updatePayrollPeriod\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"payroll-period-modal\");\n      this.errors = {};\n\n    },\n\n    handleCreatePayrollPeriod() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\tdate_from: this.form.date_from,\n\t\t\t\tdate_to: this.form.date_to\n\t\t\t}\n\n      this.createPayrollPeriod(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.formatDate(this.form.date_from)} - ${this.formatDate(this.form.date_to)} has been created as new Payroll period`\n          );\n          this.$emit(\"loadPayrollPeriods\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdatePayrollPeriod() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\tdate_from: this.form.date_from,\n\t\t\t\tdate_to: this.form.date_to\n\t\t\t}\n\n      this.updatePayrollPeriod(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Payroll Period ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadPayrollPeriods\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdatePayrollPeriod();\n      } else {\n        this.handleCreatePayrollPeriod();\n      }\n    },\n\n    formatDate(date) {\n      return this.moment(date).format('DD MMMM YYYY');\n    },\n\n    onContextDateFrom(ctx) {\n      if (ctx.selectedYMD) {\n        this.dateFrom = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');\n        return;\n      }\n\n      this.dateFrom = \"\";\n    },\n\n    onContextDateTo(ctx) {\n      if (ctx.selectedYMD) {\n        this.dateTo = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');\n        return;\n      }\n\n      this.dateTo = \"\";\n    }\n  \n  },\n\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_style_index_0_id_d83feb4c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_style_index_0_id_d83feb4c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_style_index_0_id_d83feb4c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/components/index.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/components/index.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b85ab1c8 */ "./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payrollPeriod/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2 */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2");
/* harmony import */ var _payrollPeriodsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payrollPeriodsDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payrollPeriodsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__.render,
  _payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payrollPeriodsModal.vue?vue&type=template&id=d83feb4c */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c");
/* harmony import */ var _payrollPeriodsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payrollPeriodsModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js");
/* harmony import */ var _payrollPeriodsModal_vue_vue_type_style_index_0_id_d83feb4c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payrollPeriodsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__.render,
  _payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b85ab1c8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=b85ab1c8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/components/index.vue?vue&type=template&id=b85ab1c8");


/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsDeleteModal_vue_vue_type_template_id_740fdda2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsDeleteModal.vue?vue&type=template&id=740fdda2");


/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_template_id_d83feb4c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsModal.vue?vue&type=template&id=d83feb4c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=template&id=d83feb4c");


/***/ }),

/***/ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollPeriodsModal_vue_vue_type_style_index_0_id_d83feb4c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue?vue&type=style&index=0&id=d83feb4c&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX3BheXJvbGxQZXJpb2RfY29tcG9uZW50c19pbmRleF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtFQUNmTSxVQUFBO0lBQ0FILG1CQUFBLEVBQUFBLHVFQUFBO0lBQ0FDLHlCQUFBLEVBQUFBLDZFQUFBQTtFQUNBO0VBQ0FHLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFFBQUE7TUFDQUMsWUFBQTtNQUNBQyxTQUFBO01BQ0FDLE1BQUE7TUFDQUMsUUFBQTtNQUNBVixjQUFBLEVBQUFBLG9EQUFBO01BQ0FXLFNBQUE7TUFDQUMsUUFBQTtNQUNBQyxPQUFBO1FBQ0FDLEVBQUE7UUFDQUMsSUFBQTtRQUNBQyxLQUFBO01BQ0E7TUFDQUMsY0FBQTtNQUNBQyxNQUFBLEdBQ0E7UUFDQUMsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7VUFBQUMsS0FBQTtRQUFBO01BQ0EsRUFDQTtNQUVBQyxpQkFBQSxNQUFBdEIsd0RBQUE7UUFDQXVCLEVBQUE7UUFDQUMsU0FBQTtRQUNBQyxPQUFBO01BQ0E7TUFFQUMsT0FBQTtJQUNBO0VBQ0E7RUFFQUMsT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQWpDLGdEQUFBO0lBQ0FrQyxtQkFBQSxXQUFBQSxvQkFBQTtNQUNBLEtBQUFQLGlCQUFBLENBQUFRLEtBQUE7TUFDQSxLQUFBUixpQkFBQSxDQUFBQyxFQUFBO01BQ0EsS0FBQUQsaUJBQUEsQ0FBQUUsU0FBQTtNQUNBLEtBQUFGLGlCQUFBLENBQUFHLE9BQUE7TUFFQSxLQUFBQyxPQUFBO01BQ0EsS0FBQUssUUFBQSxDQUFBQyxJQUFBLE1BQUFOLE9BQUE7SUFDQTtJQUVBTyxpQkFBQSxXQUFBQSxrQkFBQS9CLElBQUE7TUFDQSxLQUFBb0IsaUJBQUEsQ0FBQVEsS0FBQTtNQUNBLEtBQUFSLGlCQUFBLENBQUFDLEVBQUEsR0FBQXJCLElBQUEsQ0FBQXFCLEVBQUE7TUFDQSxLQUFBRCxpQkFBQSxDQUFBRSxTQUFBLEdBQUF0QixJQUFBLENBQUFzQixTQUFBO01BQ0EsS0FBQUYsaUJBQUEsQ0FBQUcsT0FBQSxHQUFBdkIsSUFBQSxDQUFBdUIsT0FBQTtNQUVBLEtBQUFDLE9BQUE7TUFDQSxLQUFBSyxRQUFBLENBQUFDLElBQUEsTUFBQU4sT0FBQTtJQUNBO0lBRUFRLG1CQUFBLFdBQUFBLG9CQUFBaEMsSUFBQTtNQUNBLEtBQUFvQixpQkFBQSxDQUFBUSxLQUFBO01BQ0EsS0FBQVIsaUJBQUEsQ0FBQUMsRUFBQSxHQUFBckIsSUFBQSxDQUFBcUIsRUFBQTtNQUNBLEtBQUFELGlCQUFBLENBQUFFLFNBQUEsR0FBQXRCLElBQUEsQ0FBQXNCLFNBQUE7TUFDQSxLQUFBRixpQkFBQSxDQUFBRyxPQUFBLEdBQUF2QixJQUFBLENBQUF1QixPQUFBO01BRUEsS0FBQUMsT0FBQTtNQUNBLEtBQUFLLFFBQUEsQ0FBQUMsSUFBQSxNQUFBTixPQUFBO0lBQ0E7SUFFQVMsa0JBQUEsV0FBQUEsbUJBQUE7TUFBQSxJQUFBQyxLQUFBO01BQ0EsSUFBQUMsTUFBQTtRQUNBbEMsUUFBQSxPQUFBQSxRQUFBO1FBQ0FtQyxJQUFBLE9BQUFsQyxZQUFBO1FBQ0FtQyxNQUFBLE9BQUFoQztNQUNBO01BQ0EsS0FBQWlDLFNBQUEsQ0FBQUgsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQU4sS0FBQSxDQUFBdEIsY0FBQSxHQUFBc0IsS0FBQSxDQUFBTyxLQUFBLENBQUE5QixLQUFBO1FBQ0F1QixLQUFBLENBQUExQixPQUFBLENBQUFDLEVBQUEsR0FBQXlCLEtBQUEsQ0FBQU8sS0FBQSxDQUFBaEMsRUFBQTtRQUNBeUIsS0FBQSxDQUFBMUIsT0FBQSxDQUFBRSxJQUFBLEdBQUF3QixLQUFBLENBQUFPLEtBQUEsQ0FBQS9CLElBQUE7UUFDQXdCLEtBQUEsQ0FBQTFCLE9BQUEsQ0FBQUcsS0FBQSxHQUFBdUIsS0FBQSxDQUFBTyxLQUFBLENBQUE5QixLQUFBO01BQ0EsYUFDQTtRQUNBdUIsS0FBQSxDQUFBL0IsU0FBQTtNQUNBO0lBQ0E7SUFFQXVDLFVBQUEsV0FBQUEsV0FBQUMsSUFBQTtNQUNBLFlBQUFDLE1BQUEsQ0FBQUQsSUFBQSxFQUFBRSxNQUFBO0lBQ0E7SUFFQUMsYUFBQSxFQUFBTixDQUFBLENBQUFPLFFBQUEsV0FBQUMsS0FBQTtNQUNBLEtBQUEzQyxRQUFBLEdBQUEyQyxLQUFBO0lBQ0E7RUFBQSxFQUNBO0VBQ0FDLE9BQUEsV0FBQUEsUUFBQTtJQUNBLEtBQUFoQixrQkFBQTtFQUNBO0VBRUFpQixRQUFBLEVBQUF4QixhQUFBLEtBQ0FoQyxnREFBQTtJQUNBK0MsS0FBQTtFQUNBLEdBQ0E7RUFFQVUsS0FBQTtJQUNBakQsWUFBQTtNQUNBa0QsT0FBQSxXQUFBQSxRQUFBQyxLQUFBO1FBQ0EsS0FBQXBCLGtCQUFBO01BQ0E7SUFDQTtJQUVBaEMsUUFBQTtNQUNBbUQsT0FBQSxXQUFBQSxRQUFBQyxLQUFBO1FBQ0EsS0FBQXBCLGtCQUFBO01BQ0E7SUFDQTtJQUVBN0IsTUFBQSxXQUFBQSxPQUFBNEMsS0FBQTtNQUNBLEtBQUFGLGFBQUEsQ0FBQUUsS0FBQTtJQUNBO0lBRUEzQyxRQUFBO01BQ0ErQyxPQUFBLFdBQUFBLFFBQUFDLEtBQUE7UUFDQSxLQUFBcEIsa0JBQUE7TUFDQTtJQUNBO0VBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlBEO0FBRUE7QUFFQSxpRUFBZTtFQUNmc0IsTUFBQSxHQUFBRCx5REFBQTtFQUVBRSxLQUFBO0VBRUF4RCxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBRyxTQUFBO01BQ0FzRCxJQUFBLE9BQUFyQztJQUNBO0VBQ0E7RUFFQUssT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQWpDLGdEQUFBO0lBRUFpRSxVQUFBLFdBQUFBLFdBQUFDLElBQUE7TUFFQSxLQUFBOUIsUUFBQSxDQUFBK0IsSUFBQTtJQUVBO0lBRUFDLFFBQUEsV0FBQUEsU0FBQTtNQUFBLElBQUEzQixLQUFBO01BQ0EsS0FBQS9CLFNBQUE7TUFFQSxJQUFBZ0MsTUFBQTtRQUNBZCxFQUFBLE9BQUFvQyxJQUFBLENBQUFwQztNQUNBO01BRUEsS0FBQVcsbUJBQUEsQ0FBQUcsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQU4sS0FBQSxDQUFBNEIsU0FBQSxDQUNBLFVBQ0EscUJBQUFDLE1BQUEsQ0FDQTdCLEtBQUEsQ0FBQVEsVUFBQSxDQUFBUixLQUFBLENBQUF1QixJQUFBLENBQUFuQyxTQUFBLFVBQUF5QyxNQUFBLENBQUE3QixLQUFBLENBQUFRLFVBQUEsQ0FBQVIsS0FBQSxDQUFBdUIsSUFBQSxDQUFBbEMsT0FBQSxvREFDQTtRQUNBVyxLQUFBLENBQUE4QixLQUFBO1FBQ0E5QixLQUFBLENBQUFMLFFBQUEsQ0FBQStCLElBQUE7TUFDQSxXQUNBLFdBQUFLLEtBQUE7UUFDQSxJQUFBQyxNQUFBLEdBQUFELEtBQUEsQ0FBQUUsUUFBQSxDQUFBbkUsSUFBQSxDQUFBa0UsTUFBQTtNQUNBLGFBQ0E7UUFDQWhDLEtBQUEsQ0FBQS9CLFNBQUE7TUFDQTtJQUNBO0lBRUF1QyxVQUFBLFdBQUFBLFdBQUFDLElBQUE7TUFDQSxZQUFBQyxNQUFBLENBQUFELElBQUEsRUFBQUUsTUFBQTtJQUNBO0VBQUE7QUFHQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDS0Q7QUFFQTtBQUVBLGlFQUFlO0VBQ2ZVLE1BQUEsR0FBQUQseURBQUE7RUFFQUUsS0FBQTtJQUNBcEMsaUJBQUEsRUFBQWdELE1BQUE7SUFDQUMsTUFBQTtNQUNBQyxJQUFBLEVBQUFDLE9BQUE7TUFDQTtJQUNBO0VBQ0E7RUFFQXZFLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FHLFNBQUE7TUFDQXNELElBQUEsT0FBQXJDLGlCQUFBO01BQ0E4QyxNQUFBO01BQ0FNLFFBQUE7TUFDQUMsTUFBQTtJQUNBO0VBQ0E7RUFFQWhELE9BQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0FqQyxnREFBQTtJQUVBaUUsVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BRUEsS0FBQTlCLFFBQUEsQ0FBQStCLElBQUE7TUFDQSxLQUFBTSxNQUFBO0lBRUE7SUFFQVEseUJBQUEsV0FBQUEsMEJBQUE7TUFBQSxJQUFBeEMsS0FBQTtNQUNBLEtBQUEvQixTQUFBO01BRUEsSUFBQWdDLE1BQUE7UUFDQWIsU0FBQSxPQUFBbUMsSUFBQSxDQUFBbkMsU0FBQTtRQUNBQyxPQUFBLE9BQUFrQyxJQUFBLENBQUFsQztNQUNBO01BRUEsS0FBQUksbUJBQUEsQ0FBQVEsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQU4sS0FBQSxDQUFBNEIsU0FBQSxDQUNBLFdBQ0EseUJBQUFDLE1BQUEsQ0FDQTdCLEtBQUEsQ0FBQVEsVUFBQSxDQUFBUixLQUFBLENBQUF1QixJQUFBLENBQUFuQyxTQUFBLFVBQUF5QyxNQUFBLENBQUE3QixLQUFBLENBQUFRLFVBQUEsQ0FBQVIsS0FBQSxDQUFBdUIsSUFBQSxDQUFBbEMsT0FBQSw2Q0FDQTtRQUNBVyxLQUFBLENBQUE4QixLQUFBO1FBQ0E5QixLQUFBLENBQUF3QixVQUFBO01BQ0EsV0FDQSxXQUFBTyxLQUFBO1FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxLQUFBLENBQUFFLFFBQUEsQ0FBQW5FLElBQUEsQ0FBQWtFLE1BQUE7UUFDQWhDLEtBQUEsQ0FBQWdDLE1BQUEsR0FBQUEsTUFBQTtNQUNBLGFBQ0E7UUFDQWhDLEtBQUEsQ0FBQS9CLFNBQUE7TUFDQTtJQUNBO0lBRUF3RSx5QkFBQSxXQUFBQSwwQkFBQTtNQUFBLElBQUFDLE1BQUE7TUFDQSxLQUFBekUsU0FBQTtNQUVBLElBQUFnQyxNQUFBO1FBQ0FkLEVBQUEsT0FBQW9DLElBQUEsQ0FBQXBDLEVBQUE7UUFDQUMsU0FBQSxPQUFBbUMsSUFBQSxDQUFBbkMsU0FBQTtRQUNBQyxPQUFBLE9BQUFrQyxJQUFBLENBQUFsQztNQUNBO01BRUEsS0FBQXNELG1CQUFBLENBQUExQyxNQUFBLEVBQ0FJLElBQUEsV0FBQUMsQ0FBQTtRQUNBb0MsTUFBQSxDQUFBZCxTQUFBLENBQ0EsV0FDQSw2REFBQUMsTUFBQSxDQUNBYSxNQUFBLENBQUFuQixJQUFBLENBQUFwQyxFQUFBLHVCQUNBO1FBQ0F1RCxNQUFBLENBQUFaLEtBQUE7UUFDQVksTUFBQSxDQUFBbEIsVUFBQTtNQUNBLFdBQ0EsV0FBQU8sS0FBQTtRQUNBLElBQUFDLE1BQUEsR0FBQUQsS0FBQSxDQUFBRSxRQUFBLENBQUFuRSxJQUFBLENBQUFrRSxNQUFBO1FBQ0FVLE1BQUEsQ0FBQVYsTUFBQSxHQUFBQSxNQUFBO01BQ0EsYUFDQTtRQUNBVSxNQUFBLENBQUF6RSxTQUFBO01BQ0E7SUFDQTtJQUVBMEQsUUFBQSxXQUFBQSxTQUFBO01BQ0EsU0FBQUosSUFBQSxDQUFBcEMsRUFBQTtRQUNBLEtBQUFzRCx5QkFBQTtNQUNBO1FBQ0EsS0FBQUQseUJBQUE7TUFDQTtJQUNBO0lBRUFoQyxVQUFBLFdBQUFBLFdBQUFDLElBQUE7TUFDQSxZQUFBQyxNQUFBLENBQUFELElBQUEsRUFBQUUsTUFBQTtJQUNBO0lBRUFpQyxpQkFBQSxXQUFBQSxrQkFBQUMsR0FBQTtNQUNBLElBQUFBLEdBQUEsQ0FBQUMsV0FBQTtRQUNBLEtBQUFSLFFBQUEsUUFBQTVCLE1BQUEsQ0FBQW1DLEdBQUEsQ0FBQUMsV0FBQSxFQUFBbkMsTUFBQTtRQUNBO01BQ0E7TUFFQSxLQUFBMkIsUUFBQTtJQUNBO0lBRUFTLGVBQUEsV0FBQUEsZ0JBQUFGLEdBQUE7TUFDQSxJQUFBQSxHQUFBLENBQUFDLFdBQUE7UUFDQSxLQUFBUCxNQUFBLFFBQUE3QixNQUFBLENBQUFtQyxHQUFBLENBQUFDLFdBQUEsRUFBQW5DLE1BQUE7UUFDQTtNQUNBO01BRUEsS0FBQTRCLE1BQUE7SUFDQTtFQUFBO0FBSUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDek5ELElBQUlTLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQ1AsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFrQixDQUFDLEVBQ2xDLENBQ0VGLEVBQUUsQ0FBQyxJQUFJLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQXNDLENBQUMsRUFBRSxDQUMvREgsR0FBRyxDQUFDSSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FDekIsQ0FBQyxFQUNGSixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBTyxDQUFDLEVBQUUsQ0FDakNGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQW1CLENBQUMsRUFBRSxDQUM3Q0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBeUIsQ0FBQyxFQUFFLENBQ25ERixFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFNLENBQUMsRUFDdEIsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtJQUNFSSxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQVUsQ0FBQztJQUM3QkMsRUFBRSxFQUFFO01BQUVDLEtBQUssRUFBRVIsR0FBRyxDQUFDeEQ7SUFBb0I7RUFDdkMsQ0FBQyxFQUNELENBQ0V5RCxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ1hJLEtBQUssRUFBRTtNQUFFSSxJQUFJLEVBQUUsTUFBTTtNQUFFLGFBQWEsRUFBRTtJQUFPO0VBQy9DLENBQUMsQ0FBQyxFQUNGVCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUMxQixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsRUFDRkosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQVksQ0FBQyxFQUFFLENBQ3RDRixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFNLENBQUMsRUFBRSxDQUNoQ0YsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBZ0IsQ0FBQyxFQUNoQyxDQUNFRixFQUFFLENBQ0EsUUFBUSxFQUNSO0lBQUVJLEtBQUssRUFBRTtNQUFFSyxNQUFNLEVBQUU7SUFBRztFQUFFLENBQUMsRUFDekIsQ0FDRVQsRUFBRSxDQUNBLE9BQU8sRUFDUDtJQUNFRSxXQUFXLEVBQUUsU0FBUztJQUN0QkUsS0FBSyxFQUFFO01BQUUsT0FBSztJQUFpQztFQUNqRCxDQUFDLEVBQ0QsQ0FBQ0wsR0FBRyxDQUFDSSxFQUFFLENBQUMsb0NBQW9DLENBQUMsQ0FDL0MsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLGVBQWUsRUFBRTtJQUNsQkUsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQ0UsS0FBSyxFQUFFO01BQ0xuRSxFQUFFLEVBQUUsZ0NBQWdDO01BQ3BDeUUsT0FBTyxFQUFFWCxHQUFHLENBQUN4RjtJQUNmLENBQUM7SUFDRG9HLEtBQUssRUFBRTtNQUNMMUMsS0FBSyxFQUFFOEIsR0FBRyxDQUFDbEYsUUFBUTtNQUNuQitGLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkJkLEdBQUcsQ0FBQ2xGLFFBQVEsR0FBR2dHLEdBQUc7TUFDcEIsQ0FBQztNQUNEQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUMsQ0FBQyxFQUNGZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtJQUNFRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DRSxLQUFLLEVBQUU7TUFBRSxPQUFLO0lBQWlDO0VBQ2pELENBQUMsRUFDRCxDQUFDTCxHQUFHLENBQUNJLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUNsRCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FDQSxlQUFlLEVBQ2Y7SUFDRWUsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0V0RixHQUFHLEVBQUUsUUFBUTtNQUNidUYsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUN2QkEsRUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBZ0IsQ0FBQyxDQUFDLENBQzFDLENBQUMsQ0FDSDtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsQ0FDRjtFQUNILENBQUMsRUFDRCxDQUNFbkIsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJJLEtBQUssRUFBRTtNQUFFbEIsSUFBSSxFQUFFLFFBQVE7TUFBRWlDLFdBQVcsRUFBRTtJQUFpQixDQUFDO0lBQ3hEUixLQUFLLEVBQUU7TUFDTDFDLEtBQUssRUFBRThCLEdBQUcsQ0FBQy9FLE1BQU07TUFDakI0RixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO1FBQ3ZCZCxHQUFHLENBQUMvRSxNQUFNLEdBQUc2RixHQUFHO01BQ2xCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFZLENBQUMsRUFDNUIsQ0FDRUYsRUFBRSxDQUNBLFdBQVcsRUFDWDtJQUFFSSxLQUFLLEVBQUU7TUFBRTFELElBQUksRUFBRXFELEdBQUcsQ0FBQzdFLFNBQVM7TUFBRWtHLE9BQU8sRUFBRTtJQUFLO0VBQUUsQ0FBQyxFQUNqRCxDQUNFcEIsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNaSSxLQUFLLEVBQUU7TUFDTGlCLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxFQUFFO01BQ1gsWUFBWSxFQUFFLEVBQUU7TUFDaEJqRSxLQUFLLEVBQUUwQyxHQUFHLENBQUMxQyxLQUFLLENBQUN6QyxJQUFJO01BQ3JCYSxNQUFNLEVBQUVzRSxHQUFHLENBQUN0RSxNQUFNO01BQ2xCLFVBQVUsRUFBRSxDQUFDO01BQ2I4RixJQUFJLEVBQUV4QixHQUFHLENBQUNoRixTQUFTO01BQ25CLGNBQWMsRUFBRWdGLEdBQUcsQ0FBQ2pGO0lBQ3RCLENBQUM7SUFDRGlHLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFdEYsR0FBRyxFQUFFLFlBQVk7TUFDakJ1RixFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLEtBQUssRUFDTDtVQUFFRSxXQUFXLEVBQUU7UUFBd0IsQ0FBQyxFQUN4QyxDQUNFRixFQUFFLENBQUMsV0FBVyxFQUFFO1VBQ2RFLFdBQVcsRUFBRTtRQUNmLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RnQixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXhGLEdBQUcsRUFBRSxPQUFPO01BQ1p1RixFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLElBQUksRUFDSjtVQUFFRSxXQUFXLEVBQUU7UUFBNkIsQ0FBQyxFQUM3QyxDQUFDRixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDSixHQUFHLENBQUN5QixFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUMsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNETixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXhGLEdBQUcsRUFBRSxpQkFBaUI7TUFDdEJ1RixFQUFFLEVBQUUsU0FBQUEsR0FBVXJHLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xvRixFQUFFLENBQUMsTUFBTSxFQUFFLENBQ1RELEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLHNCQUFzQixHQUNwQkosR0FBRyxDQUFDeUIsRUFBRSxDQUNKekIsR0FBRyxDQUFDekMsVUFBVSxDQUFDMUMsSUFBSSxDQUFDNkcsSUFBSSxDQUFDdkYsU0FBUyxDQUNwQyxDQUFDLEdBQ0Qsb0JBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSDtNQUNIO0lBQ0YsQ0FBQyxFQUNEO01BQ0VSLEdBQUcsRUFBRSxlQUFlO01BQ3BCdUYsRUFBRSxFQUFFLFNBQUFBLEdBQVVyRyxJQUFJLEVBQUU7UUFDbEIsT0FBTyxDQUNMb0YsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUNURCxHQUFHLENBQUNJLEVBQUUsQ0FDSixzQkFBc0IsR0FDcEJKLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQ3pCLEdBQUcsQ0FBQ3pDLFVBQVUsQ0FBQzFDLElBQUksQ0FBQzZHLElBQUksQ0FBQ3RGLE9BQU8sQ0FBQyxDQUFDLEdBQ3pDLG9CQUNKLENBQUMsQ0FDRixDQUFDLENBQ0g7TUFDSDtJQUNGLENBQUMsRUFDRDtNQUNFVCxHQUFHLEVBQUUsZUFBZTtNQUNwQnVGLEVBQUUsRUFBRSxTQUFBQSxHQUFVckcsSUFBSSxFQUFFO1FBQ2xCLE9BQU8sQ0FDTG9GLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUNFRSxXQUFXLEVBQ1Q7UUFDSixDQUFDLEVBQ0QsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsTUFBTTtVQUNuQkUsS0FBSyxFQUFFO1lBQ0xzQixJQUFJLEVBQUUsSUFBSTtZQUNWckIsT0FBTyxFQUFFO1VBQ1gsQ0FBQztVQUNEQyxFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVvQixNQUFNLEVBQUU7Y0FDdkIsT0FBTzVCLEdBQUcsQ0FBQ3BELGlCQUFpQixDQUMxQi9CLElBQUksQ0FBQzZHLElBQ1AsQ0FBQztZQUNIO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FDRTFCLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLG9EQUNGLENBQUMsQ0FFTCxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsVUFBVSxFQUNWO1VBQ0VJLEtBQUssRUFBRTtZQUNMc0IsSUFBSSxFQUFFLElBQUk7WUFDVnJCLE9BQU8sRUFBRTtVQUNYLENBQUM7VUFDREMsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVb0IsTUFBTSxFQUFFO2NBQ3ZCLE9BQU81QixHQUFHLENBQUNuRCxtQkFBbUIsQ0FDNUJoQyxJQUFJLENBQUM2RyxJQUNQLENBQUM7WUFDSDtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQ0UxQixHQUFHLENBQUNJLEVBQUUsQ0FDSixzREFDRixDQUFDLENBRUwsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNIO0lBQ0YsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsRUFDRkosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQU0sQ0FBQyxFQUFFLENBQ2hDRixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFXLENBQUMsRUFBRSxDQUNyQ0YsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUNORCxHQUFHLENBQUNJLEVBQUUsQ0FDSkosR0FBRyxDQUFDeUIsRUFBRSxZQUFBN0MsTUFBQSxDQUNPb0IsR0FBRyxDQUFDM0UsT0FBTyxDQUFDRSxJQUFJLFVBQUFxRCxNQUFBLENBQU9vQixHQUFHLENBQUMzRSxPQUFPLENBQUNDLEVBQUUsVUFBQXNELE1BQUEsQ0FBT29CLEdBQUcsQ0FBQzNFLE9BQU8sQ0FBQ0csS0FBSyxhQUMxRSxDQUNGLENBQUMsQ0FDRixDQUFDLENBQ0gsQ0FBQyxFQUNGd0UsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQVcsQ0FBQyxFQUMzQixDQUNFRixFQUFFLENBQUMsY0FBYyxFQUFFO0lBQ2pCRSxXQUFXLEVBQUUsTUFBTTtJQUNuQkUsS0FBSyxFQUFFO01BQ0wsWUFBWSxFQUFFTCxHQUFHLENBQUN2RSxjQUFjO01BQ2hDLFVBQVUsRUFBRXVFLEdBQUcsQ0FBQ2xGLFFBQVE7TUFDeEIrRyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RqQixLQUFLLEVBQUU7TUFDTDFDLEtBQUssRUFBRThCLEdBQUcsQ0FBQ2pGLFlBQVk7TUFDdkI4RixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO1FBQ3ZCZCxHQUFHLENBQUNqRixZQUFZLEdBQUcrRixHQUFHO01BQ3hCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0gsQ0FBQyxFQUNGZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO0lBQ3hCSSxLQUFLLEVBQUU7TUFBRXBFLGlCQUFpQixFQUFFK0QsR0FBRyxDQUFDL0Q7SUFBa0IsQ0FBQztJQUNuRHNFLEVBQUUsRUFBRTtNQUNGekQsa0JBQWtCLEVBQUUsU0FBQUEsbUJBQVU4RSxNQUFNLEVBQUU7UUFDcEMsT0FBTzVCLEdBQUcsQ0FBQ2xELGtCQUFrQixDQUFDLENBQUM7TUFDakM7SUFDRjtFQUNGLENBQUMsQ0FBQyxFQUNGa0QsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtJQUM5QkksS0FBSyxFQUFFO01BQUVwRSxpQkFBaUIsRUFBRStELEdBQUcsQ0FBQy9EO0lBQWtCLENBQUM7SUFDbkRzRSxFQUFFLEVBQUU7TUFDRnpELGtCQUFrQixFQUFFLFNBQUFBLG1CQUFVOEUsTUFBTSxFQUFFO1FBQ3BDLE9BQU81QixHQUFHLENBQUNsRCxrQkFBa0IsQ0FBQyxDQUFDO01BQ2pDO0lBQ0Y7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQztBQUNILENBQUM7QUFDRCxJQUFJZ0YsZUFBZSxHQUFHLEVBQUU7QUFDeEIvQixNQUFNLENBQUNnQyxhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hWM0IsSUFBSWhDLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQUMsU0FBUyxFQUFFO0lBQ25CSSxLQUFLLEVBQUU7TUFDTG5FLEVBQUUsRUFBRSw2QkFBNkI7TUFDakMsYUFBYSxFQUFFLEVBQUU7TUFDakIsYUFBYSxFQUFFLEVBQUU7TUFDakIsc0JBQXNCLEVBQUUsRUFBRTtNQUMxQjhGLFFBQVEsRUFBRSxFQUFFO01BQ1osZUFBZSxFQUFFO0lBQ25CLENBQUM7SUFDRGhCLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFdEYsR0FBRyxFQUFFLFNBQVM7TUFDZHVGLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsT0FBTyxFQUNQLENBQ0VBLEVBQUUsQ0FBQyxPQUFPLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWdDLENBQUMsRUFBRSxDQUM1REYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDRCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUQsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQUVFLFdBQVcsRUFBRTtRQUFPLENBQUMsRUFDdkIsQ0FDRUYsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBNEMsQ0FBQyxFQUM1RCxDQUNFSCxHQUFHLENBQUNJLEVBQUUsQ0FDSixZQUFZLEdBQ1ZKLEdBQUcsQ0FBQ3lCLEVBQUUsb0NBQUE3QyxNQUFBLENBQytCb0IsR0FBRyxDQUFDekMsVUFBVSxDQUMvQ3lDLEdBQUcsQ0FBQzFCLElBQUksQ0FBQ25DLFNBQ1gsQ0FBQyxTQUFBeUMsTUFBQSxDQUFNb0IsR0FBRyxDQUFDekMsVUFBVSxDQUNuQnlDLEdBQUcsQ0FBQzFCLElBQUksQ0FBQ2xDLE9BQ1gsQ0FBQyxrQ0FDSCxDQUFDLEdBQ0QsVUFDSixDQUFDLENBRUwsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0Q0RCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBTyxDQUFDLEVBQ3ZCLENBQ0VGLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQWdDLENBQUMsRUFDaEQsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsd0JBQXdCO1VBQ3JDOEIsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjVCLEtBQUssRUFBRTtZQUFFNkIsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnBCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVW9CLE1BQU0sRUFBRTtjQUN2QixPQUFPNUIsR0FBRyxDQUFDekIsVUFBVSxDQUFDLENBQUM7WUFDekI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDeUIsR0FBRyxDQUFDSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FDckMsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsK0JBQStCO1VBQzVDOEIsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjVCLEtBQUssRUFBRTtZQUFFNkIsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnBCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVW9CLE1BQU0sRUFBRTtjQUN2QixPQUFPNUIsR0FBRyxDQUFDdEIsUUFBUSxDQUFDLENBQUM7WUFDdkI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDc0IsR0FBRyxDQUFDSSxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FDdEMsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGUsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUlXLGVBQWUsR0FBRyxFQUFFO0FBQ3hCL0IsTUFBTSxDQUFDZ0MsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RzNCLElBQUloQyxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNuQkksS0FBSyxFQUFFO01BQ0xuRSxFQUFFLEVBQUUsc0JBQXNCO01BQzFCLGFBQWEsRUFBRSxFQUFFO01BQ2pCLHNCQUFzQixFQUFFLEVBQUU7TUFDMUIsZUFBZSxFQUFFO0lBQ25CLENBQUM7SUFDRDhFLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFdEYsR0FBRyxFQUFFLGNBQWM7TUFDbkJ1RixFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUFDLElBQUksRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBcUMsQ0FBQyxFQUFFLENBQzlESCxHQUFHLENBQUNJLEVBQUUsQ0FDSkosR0FBRyxDQUFDeUIsRUFBRSxDQUNKekIsR0FBRyxDQUFDMUIsSUFBSSxDQUFDcEMsRUFBRSxHQUFHLHFCQUFxQixHQUFHLG9CQUN4QyxDQUNGLENBQUMsQ0FDRixDQUFDLEVBQ0Y4RCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFa0MsVUFBVSxFQUFFLENBQ1Y7WUFDRUMsSUFBSSxFQUFFLFdBQVc7WUFDakJDLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUJDLFNBQVMsRUFBRTtjQUFFaEIsS0FBSyxFQUFFO1lBQUs7VUFDM0IsQ0FBQyxDQUNGO1VBQ0RuQixXQUFXLEVBQUUsK0JBQStCO1VBQzVDRSxLQUFLLEVBQUU7WUFBRTZCLElBQUksRUFBRSxFQUFFO1lBQUVQLElBQUksRUFBRTtVQUFLLENBQUM7VUFDL0JwQixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVvQixNQUFNLEVBQUU7Y0FDdkIsT0FBTzVCLEdBQUcsQ0FBQ3pCLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FBQzBCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxDQUFDLENBQzFDLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsRUFDRDtNQUNFeEYsR0FBRyxFQUFFLFNBQVM7TUFDZHVGLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsUUFBUSxFQUNSLENBQ0VBLEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0xuRSxFQUFFLEVBQUUsZUFBZTtZQUNuQk4sS0FBSyxFQUFFLFdBQVc7WUFDbEIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRXFFLEVBQUUsQ0FDQSxlQUFlLEVBQ2YsQ0FDRUEsRUFBRSxDQUFDLGNBQWMsRUFBRTtVQUNqQkksS0FBSyxFQUFFO1lBQ0xuRSxFQUFFLEVBQUUsV0FBVztZQUNmaUQsSUFBSSxFQUFFLE1BQU07WUFDWmlDLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0JtQixRQUFRLEVBQUU7VUFDWixDQUFDO1VBQ0QzQixLQUFLLEVBQUU7WUFDTDFDLEtBQUssRUFBRThCLEdBQUcsQ0FBQ1gsUUFBUTtZQUNuQndCLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7Y0FDdkJkLEdBQUcsQ0FBQ1gsUUFBUSxHQUFHeUIsR0FBRztZQUNwQixDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0Esc0JBQXNCLEVBQ3RCLENBQ0VBLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtVQUN0QkksS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLEVBQUU7WUFDakJtQyxLQUFLLEVBQUUsRUFBRTtZQUNUQyxNQUFNLEVBQUUsT0FBTztZQUNmLGVBQWUsRUFBRTtVQUNuQixDQUFDO1VBQ0RsQyxFQUFFLEVBQUU7WUFBRW1DLE9BQU8sRUFBRTFDLEdBQUcsQ0FBQ0w7VUFBa0IsQ0FBQztVQUN0Q2lCLEtBQUssRUFBRTtZQUNMMUMsS0FBSyxFQUFFOEIsR0FBRyxDQUFDMUIsSUFBSSxDQUFDbkMsU0FBUztZQUN6QjBFLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7Y0FDdkJkLEdBQUcsQ0FBQzJDLElBQUksQ0FBQzNDLEdBQUcsQ0FBQzFCLElBQUksRUFBRSxXQUFXLEVBQUV3QyxHQUFHLENBQUM7WUFDdEMsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDRGYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQ2pCLE1BQU0sSUFBSWlCLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQzVDLFNBQVMsR0FDOUI4RCxFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQ3pCLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQzVDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3hDLENBQUMsR0FDRjZELEdBQUcsQ0FBQzRDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsRUFDRDVDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMbkUsRUFBRSxFQUFFLGVBQWU7WUFDbkJOLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VxRSxFQUFFLENBQ0EsZUFBZSxFQUNmLENBQ0VBLEVBQUUsQ0FBQyxjQUFjLEVBQUU7VUFDakJJLEtBQUssRUFBRTtZQUNMbkUsRUFBRSxFQUFFLFNBQVM7WUFDYmlELElBQUksRUFBRSxNQUFNO1lBQ1ppQyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CbUIsUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUNEM0IsS0FBSyxFQUFFO1lBQ0wxQyxLQUFLLEVBQUU4QixHQUFHLENBQUNWLE1BQU07WUFDakJ1QixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCZCxHQUFHLENBQUNWLE1BQU0sR0FBR3dCLEdBQUc7WUFDbEIsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxFQUNGZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLHNCQUFzQixFQUN0QixDQUNFQSxFQUFFLENBQUMsbUJBQW1CLEVBQUU7VUFDdEJJLEtBQUssRUFBRTtZQUNMLGFBQWEsRUFBRSxFQUFFO1lBQ2pCbUMsS0FBSyxFQUFFLEVBQUU7WUFDVEMsTUFBTSxFQUFFLE9BQU87WUFDZixlQUFlLEVBQUU7VUFDbkIsQ0FBQztVQUNEbEMsRUFBRSxFQUFFO1lBQUVtQyxPQUFPLEVBQUUxQyxHQUFHLENBQUNGO1VBQWdCLENBQUM7VUFDcENjLEtBQUssRUFBRTtZQUNMMUMsS0FBSyxFQUFFOEIsR0FBRyxDQUFDMUIsSUFBSSxDQUFDbEMsT0FBTztZQUN2QnlFLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7Y0FDdkJkLEdBQUcsQ0FBQzJDLElBQUksQ0FBQzNDLEdBQUcsQ0FBQzFCLElBQUksRUFBRSxTQUFTLEVBQUV3QyxHQUFHLENBQUM7WUFDcEMsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDRGYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQ2pCLE1BQU0sSUFBSWlCLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQzNDLE9BQU8sR0FDNUI2RCxFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3lCLEVBQUUsQ0FBQ3pCLEdBQUcsQ0FBQ2pCLE1BQU0sQ0FBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUMsR0FDRjRELEdBQUcsQ0FBQzRDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNENUMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQU8sQ0FBQyxFQUN2QixDQUNFRixFQUFFLENBQUMsT0FBTyxFQUFFLENBQ1YsQ0FBQ0QsR0FBRyxDQUFDZCxNQUFNLEdBQ1BlLEVBQUUsQ0FDQSxHQUFHLEVBQ0g7VUFDRUUsV0FBVyxFQUNULGlEQUFpRDtVQUNuREUsS0FBSyxFQUFFO1lBQUV3QyxJQUFJLEVBQUU7VUFBeUI7UUFDMUMsQ0FBQyxFQUNELENBQUM3QyxHQUFHLENBQUNJLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUN4RCxDQUFDLEdBQ0RKLEdBQUcsQ0FBQzRDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsQ0FBQyxFQUNGNUMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQTZCLENBQUMsRUFDN0MsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsd0JBQXdCO1VBQ3JDOEIsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjVCLEtBQUssRUFBRTtZQUFFNkIsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnBCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVW9CLE1BQU0sRUFBRTtjQUN2QixPQUFPNUIsR0FBRyxDQUFDekIsVUFBVSxDQUFDLENBQUM7WUFDekI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDeUIsR0FBRyxDQUFDSSxFQUFFLENBQUMsOEJBQThCLENBQUMsQ0FDekMsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsK0JBQStCO1VBQzVDOEIsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjVCLEtBQUssRUFBRTtZQUFFNkIsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnBCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVW9CLE1BQU0sRUFBRTtjQUN2QixPQUFPNUIsR0FBRyxDQUFDdEIsUUFBUSxDQUFDLENBQUM7WUFDdkI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUNFc0IsR0FBRyxDQUFDSSxFQUFFLENBQ0osY0FBYyxHQUNaSixHQUFHLENBQUN5QixFQUFFLENBQUN6QixHQUFHLENBQUMxQixJQUFJLENBQUNwQyxFQUFFLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUM3QyxZQUNKLENBQUMsQ0FFTCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNEaUYsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUlXLGVBQWUsR0FBRyxFQUFFO0FBQ3hCL0IsTUFBTSxDQUFDZ0MsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2hRM0IsSUFBTXZILGNBQWMsR0FBRyxDQUNuQjtFQUFFMEQsS0FBSyxFQUFFLEVBQUU7RUFBRTRFLElBQUksRUFBRTtBQUFLLENBQUMsRUFDekI7RUFBRTVFLEtBQUssRUFBRSxFQUFFO0VBQUU0RSxJQUFJLEVBQUU7QUFBSyxDQUFDLEVBQ3pCO0VBQUU1RSxLQUFLLEVBQUUsRUFBRTtFQUFFNEUsSUFBSSxFQUFFO0FBQUssQ0FBQyxFQUN6QjtFQUFFNUUsS0FBSyxFQUFFLEdBQUc7RUFBRTRFLElBQUksRUFBRTtBQUFNLENBQUMsQ0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xLQyxNQUFNO0VBQ1Y7QUFDRjtBQUNBO0VBQ0UsU0FBQUEsT0FBQSxFQUFjO0lBQUFDLGVBQUEsT0FBQUQsTUFBQTtJQUNaLElBQUksQ0FBQ2hFLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDbEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFa0UsWUFBQSxDQUFBRixNQUFBO0lBQUFwSCxHQUFBO0lBQUF1QyxLQUFBLEVBS0EsU0FBQWdGLElBQUlDLEtBQUssRUFBRTtNQUNULE9BQU8sSUFBSSxDQUFDcEUsTUFBTSxDQUFDcUUsY0FBYyxDQUFDRCxLQUFLLENBQUM7SUFDMUM7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQXhILEdBQUE7SUFBQXVDLEtBQUEsRUFHQSxTQUFBbUYsSUFBQSxFQUFNO01BQ0osT0FBT3BFLE1BQU0sQ0FBQ3FFLElBQUksQ0FBQyxJQUFJLENBQUN2RSxNQUFNLENBQUMsQ0FBQ3dFLE1BQU0sR0FBRyxDQUFDO0lBQzVDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBNUgsR0FBQTtJQUFBdUMsS0FBQSxFQUtBLFNBQUFzRixJQUFJTCxLQUFLLEVBQUU7TUFDVCxJQUFJLElBQUksQ0FBQ3BFLE1BQU0sQ0FBQ29FLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDcEUsTUFBTSxDQUFDb0UsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlCO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUF4SCxHQUFBO0lBQUF1QyxLQUFBLEVBS0EsU0FBQXVGLE9BQU8xRSxNQUFNLEVBQUU7TUFDYixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN0Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXBELEdBQUE7SUFBQXVDLEtBQUEsRUFLQSxTQUFBd0YsTUFBTVAsS0FBSyxFQUFFO01BQ1gsSUFBSUEsS0FBSyxFQUFFO1FBQ1QsT0FBTyxJQUFJLENBQUNwRSxNQUFNLENBQUNvRSxLQUFLLENBQUM7UUFFekI7TUFDRjtNQUVBLElBQUksQ0FBQ3BFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEI7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQXBELEdBQUE7SUFBQXVDLEtBQUEsRUFHQSxTQUFBeUYsS0FBQSxFQUFPO01BQUEsSUFBQUMsY0FBQTtNQUNMLElBQUl0RyxLQUFLLEdBQUcsRUFBRTtNQUNkLElBQUl1RyxVQUFVLElBQUFELGNBQUEsR0FBRzNFLE1BQU0sQ0FBQzZFLE1BQU0sQ0FBQyxJQUFJLENBQUMvRSxNQUFNLENBQUMsY0FBQTZFLGNBQUEsY0FBQUEsY0FBQSxHQUFJLEVBQUU7TUFDakRDLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFqRixLQUFLLEVBQUk7UUFDMUJ4QixLQUFLLENBQUMwRyxJQUFJLENBQUNsRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BRUYsT0FBT3hCLEtBQUs7SUFDZDtFQUFDO0VBQUEsT0FBQXlGLE1BQUE7QUFBQTtBQUdILGlFQUFlQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RVk7QUFBQSxJQUUzQnBJLElBQUk7RUFDUjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsU0FBQUEsS0FBWUUsSUFBSSxFQUFFO0lBQUFtSSxlQUFBLE9BQUFySSxJQUFBO0lBQ2hCLElBQUksQ0FBQ3NKLFlBQVksR0FBR3BKLElBQUk7SUFFeEIsS0FBSyxJQUFJc0ksS0FBSyxJQUFJdEksSUFBSSxFQUFFO01BQ3RCLElBQUksQ0FBQ3NJLEtBQUssQ0FBQyxHQUFHdEksSUFBSSxDQUFDc0ksS0FBSyxDQUFDO0lBQzNCO0lBRUEsSUFBSSxDQUFDcEUsTUFBTSxHQUFHLElBQUlnRSxrREFBTSxDQUFDLENBQUM7RUFDNUI7O0VBRUE7QUFDRjtBQUNBO0VBRkVFLFlBQUEsQ0FBQXRJLElBQUE7SUFBQWdCLEdBQUE7SUFBQXVDLEtBQUEsRUFHQSxTQUFBckQsS0FBQSxFQUFPO01BQ0wsSUFBSUEsSUFBSSxHQUFHLENBQUMsQ0FBQztNQUViLEtBQUssSUFBSXFKLFFBQVEsSUFBSSxJQUFJLENBQUNELFlBQVksRUFBRTtRQUN0Q3BKLElBQUksQ0FBQ3FKLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO01BQ2pDO01BRUEsT0FBT3JKLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBYyxHQUFBO0lBQUF1QyxLQUFBLEVBR0EsU0FBQXpCLE1BQUEsRUFBUTtNQUNOLEtBQUssSUFBSTBHLEtBQUssSUFBSSxJQUFJLENBQUNjLFlBQVksRUFBRTtRQUNuQyxJQUFJLENBQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7TUFDbEI7TUFFQSxJQUFJLENBQUNwRSxNQUFNLENBQUMyRSxLQUFLLENBQUMsQ0FBQztJQUNyQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQS9ILEdBQUE7SUFBQXVDLEtBQUEsRUFLQSxTQUFBaUcsS0FBS0MsR0FBRyxFQUFFO01BQ1IsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVELEdBQUcsQ0FBQztJQUNqQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXpJLEdBQUE7SUFBQXVDLEtBQUEsRUFLQSxTQUFBb0csSUFBSUYsR0FBRyxFQUFFO01BQ1AsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxLQUFLLEVBQUVELEdBQUcsQ0FBQztJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXpJLEdBQUE7SUFBQXVDLEtBQUEsRUFLQSxTQUFBcUcsTUFBTUgsR0FBRyxFQUFFO01BQ1QsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUVELEdBQUcsQ0FBQztJQUNsQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXpJLEdBQUE7SUFBQXVDLEtBQUEsRUFLQSxTQUFBc0csUUFBT0osR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVELEdBQUcsQ0FBQztJQUNuQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBekksR0FBQTtJQUFBdUMsS0FBQSxFQU1BLFNBQUFtRyxPQUFPSSxXQUFXLEVBQUVMLEdBQUcsRUFBRTtNQUFBLElBQUFySCxLQUFBO01BQ3ZCLE9BQU8sSUFBSTJILE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztRQUN0Q0MsS0FBSyxDQUFDSixXQUFXLENBQUMsQ0FBQ0wsR0FBRyxFQUFFckgsS0FBSSxDQUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNqQ3VDLElBQUksQ0FBQyxVQUFDNEIsUUFBUSxFQUFLO1VBQ2xCakMsS0FBSSxDQUFDK0gsU0FBUyxDQUFDOUYsUUFBUSxDQUFDbkUsSUFBSSxDQUFDO1VBRTdCOEosT0FBTyxDQUFDM0YsUUFBUSxDQUFDbkUsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ2lFLEtBQUssRUFBSztVQUNoQi9CLEtBQUksQ0FBQ2dJLE1BQU0sQ0FBQ2pHLEtBQUssQ0FBQ0UsUUFBUSxDQUFDbkUsSUFBSSxDQUFDa0UsTUFBTSxDQUFDO1VBRXZDNkYsTUFBTSxDQUFDOUYsS0FBSyxDQUFDRSxRQUFRLENBQUNuRSxJQUFJLENBQUNrRSxNQUFNLENBQUM7UUFDcEMsQ0FBQyxDQUFDO01BQ04sQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUFwRCxHQUFBO0lBQUF1QyxLQUFBLEVBS0EsU0FBQTRHLFVBQVVqSyxJQUFJLEVBQUU7TUFDZDtNQUNBOztNQUVBLElBQUksQ0FBQ2tFLE1BQU0sQ0FBQzJFLEtBQUssQ0FBQyxDQUFDO0lBQ3JCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBL0gsR0FBQTtJQUFBdUMsS0FBQSxFQUtBLFNBQUE2RyxPQUFPaEcsTUFBTSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxNQUFNLENBQUMwRSxNQUFNLENBQUMxRSxNQUFNLENBQUM7SUFDNUI7RUFBQztJQUFBcEQsR0FBQTtJQUFBdUMsS0FBQSxFQUdELFNBQUE4RyxZQUFBLEVBQWM7TUFDWixJQUFJckosR0FBRyxHQUFHLEtBQUs7TUFDZnNELE1BQU0sQ0FBQzZFLE1BQU0sQ0FBQyxJQUFJLENBQUNqSixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNrSixPQUFPLENBQUMsVUFBVWtCLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1FBQ3JELElBQUlELEdBQUcsRUFBRTtVQUNQdEosR0FBRyxHQUFHLElBQUk7UUFDWjtNQUNGLENBQUMsQ0FBQztNQUNGLE9BQU9BLEdBQUc7SUFDWjtFQUFDO0lBQUFBLEdBQUE7SUFBQXVDLEtBQUEsRUFFRCxTQUFBaUgsbUJBQUEsRUFBcUI7TUFDbkIsSUFBSXhKLEdBQUcsR0FBRyxLQUFLO01BRWZzRCxNQUFNLENBQUM2RSxNQUFNLENBQUMsSUFBSSxDQUFDakosSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDa0osT0FBTyxDQUFDLFVBQVVrQixHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUNyRCxJQUFJRCxHQUFHLElBQUlBLEdBQUcsS0FBSyxLQUFLLEVBQUU7VUFDeEJ0SixHQUFHLEdBQUcsSUFBSTtRQUNaO01BQ0YsQ0FBQyxDQUFDO01BQ0YsT0FBT0EsR0FBRztJQUNaO0VBQUM7RUFBQSxPQUFBaEIsSUFBQTtBQUFBO0FBS0gsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDbEpuQixpRUFBZTtFQUNiMkIsT0FBTyxFQUFFO0lBQ1A4SSxlQUFlLFdBQUFBLGdCQUFDQyxHQUFHLEVBQUU7TUFDbkIsT0FBT0EsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRURDLHFCQUFxQixXQUFBQSxzQkFBQ0gsR0FBRyxFQUFpQjtNQUFBLElBQWZJLEtBQUssR0FBQUMsU0FBQSxDQUFBbkMsTUFBQSxRQUFBbUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxLQUFLO01BQ3RDLE9BQU8sQ0FBQ0QsS0FBSyxHQUFHSixHQUFHLENBQUNFLFdBQVcsQ0FBQyxDQUFDLEdBQUdGLEdBQUcsRUFBRU8sT0FBTyxDQUFDLHNCQUFzQixFQUFFLFVBQUFDLEtBQUs7UUFBQSxPQUFJQSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUN4RyxDQUFDO0lBRURDLFlBQVksV0FBQUEsYUFBQ0MsTUFBTSxFQUFFO01BQ25CLElBQUlBLE1BQU0sRUFBRTtRQUNWLE9BQU9BLE1BQU0sQ0FBQ1YsUUFBUSxDQUFDLENBQUMsQ0FBQ00sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztNQUNoRTtNQUNBLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFFREssV0FBVyxXQUFBQSxZQUFBLEVBQTJCO01BQUEsSUFBMUJDLE1BQU0sR0FBQVIsU0FBQSxDQUFBbkMsTUFBQSxRQUFBbUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxHQUFHO01BQUEsSUFBRW5DLE1BQU0sR0FBQW1DLFNBQUEsQ0FBQW5DLE1BQUEsUUFBQW1DLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQztNQUNsQyxJQUFJTCxHQUFHLEdBQUcsRUFBRTtNQUNaLEtBQUssSUFBSWMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHN0MsTUFBTSxFQUFFNEMsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsRUFBRUQsQ0FBQyxFQUFFO1FBQ3RDZCxHQUFHLElBQUlhLE1BQU07TUFDZjtNQUNBLE9BQU9iLEdBQUc7SUFDWixDQUFDO0lBRURnQixPQUFPLFdBQUFBLFFBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQUloRCxNQUFNLEdBQUdnRCxRQUFRLENBQUNoRCxNQUFNO01BQzVCLEtBQUssSUFBSTRDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzVDLE1BQU0sRUFBRTRDLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUlJLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDLElBQUlHLE1BQU0sRUFBRSxPQUFPLElBQUk7TUFDeEM7TUFDQSxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBRURFLGlCQUFpQixXQUFBQSxrQkFBQ1IsTUFBTSxFQUFFUyxXQUFXLEVBQUU7TUFDckMsSUFBSUMsU0FBUyxHQUFHLENBQUM7TUFDakIsSUFBS1YsTUFBTSxHQUFHVyxJQUFJLENBQUNDLEtBQUssQ0FBQ1osTUFBTSxDQUFDLEtBQU0sQ0FBQyxFQUFFO1FBQ3ZDVSxTQUFTLEdBQUdDLElBQUksQ0FBQ0UsS0FBSyxDQUFDYixNQUFNLEVBQUVTLFdBQVcsQ0FBQztRQUMzQyxJQUFJQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1VBQ25CLE9BQU9WLE1BQU0sQ0FBQ0osT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDcEM7UUFDQSxPQUFPYyxTQUFTLENBQUNJLGNBQWMsQ0FBQyxDQUFDLENBQUNsQixPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztNQUN4RCxDQUFDLE1BQU07UUFDTGMsU0FBUyxHQUFHQyxJQUFJLENBQUNFLEtBQUssQ0FBQ2IsTUFBTSxFQUFFUyxXQUFXLENBQUM7UUFDM0MsT0FBT0MsU0FBUyxDQUFDSSxjQUFjLENBQUMsQ0FBQyxDQUFDbEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7TUFDeEQ7SUFDRixDQUFDO0lBRURtQixZQUFZLFdBQUFBLGFBQUEsRUFBc0I7TUFBQSxJQUFyQnBMLEdBQUcsR0FBQStKLFNBQUEsQ0FBQW5DLE1BQUEsUUFBQW1DLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsTUFBTTtNQUFBLElBQUVwSSxLQUFLLEdBQUFvSSxTQUFBLENBQUFuQyxNQUFBLE9BQUFtQyxTQUFBLE1BQUFDLFNBQUE7TUFDOUIsSUFBSXFCLEdBQUcsR0FBRyxFQUFFO01BQ1osSUFBSWIsQ0FBQyxHQUFHLENBQUM7TUFDVDdJLEtBQUssQ0FBQ3lHLE9BQU8sQ0FBQyxVQUFBa0QsR0FBRyxFQUFJO1FBQ25CRCxHQUFHLElBQUlDLEdBQUcsQ0FBQ3RMLEdBQUcsQ0FBQztRQUNmLElBQUl3SyxDQUFDLEdBQUc3SSxLQUFLLENBQUNpRyxNQUFNLEVBQUU7VUFDcEJ5RCxHQUFHLElBQUksSUFBSTtRQUNiO1FBQ0FiLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQztNQUVGLE9BQU9hLEdBQUc7SUFDWixDQUFDO0lBRURFLGFBQWEsV0FBQUEsY0FBQzNMLElBQUksRUFBRUQsRUFBRSxFQUFFRSxLQUFLLEVBQUU7TUFDN0IsSUFBSTJMLENBQUMsR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQzdMLElBQUksQ0FBQztNQUM1QixJQUFJOEwsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsU0FBUyxDQUFDOUwsRUFBRSxDQUFDO01BQzFCLElBQUlnTSxHQUFHLEdBQUcsSUFBSSxDQUFDRixTQUFTLENBQUM1TCxLQUFLLENBQUM7TUFDL0Isa0JBQUFvRCxNQUFBLENBQWtCdUksQ0FBQyxVQUFBdkksTUFBQSxDQUFPeUksQ0FBQyxVQUFBekksTUFBQSxDQUFPMEksR0FBRztJQUN2QyxDQUFDO0lBRURGLFNBQVMsV0FBQUEsVUFBQy9CLEdBQUcsRUFBRTtNQUNiLGtCQUFBekcsTUFBQSxDQUFrQnlHLEdBQUc7SUFDdkI7RUFDRjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEI7QUFFN0IsaUVBQWU7RUFDWGpILE1BQU0sRUFBRSxDQUFDMEUsZ0RBQUksQ0FBQztFQUNkeEcsT0FBTyxFQUFFO0lBQ0xxQyxTQUFTLFdBQUFBLFVBQUEsRUFBaUM7TUFBQSxJQUFoQzJCLE9BQU8sR0FBQW9GLFNBQUEsQ0FBQW5DLE1BQUEsUUFBQW1DLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsSUFBSTtNQUFBLElBQUU2QixLQUFLLEdBQUE3QixTQUFBLENBQUFuQyxNQUFBLE9BQUFtQyxTQUFBLE1BQUFDLFNBQUE7TUFBQSxJQUFFNkIsT0FBTyxHQUFBOUIsU0FBQSxDQUFBbkMsTUFBQSxPQUFBbUMsU0FBQSxNQUFBQyxTQUFBO01BQ3BDLElBQUksQ0FBQzhCLFFBQVEsQ0FBQ3RKLEtBQUssQ0FBQ3FKLE9BQU8sRUFBRTtRQUN6QkQsS0FBSyxFQUFFQSxLQUFLO1FBQ1pqSCxPQUFPLEVBQUVBLE9BQU87UUFDaEJvSCxLQUFLLEVBQUU7TUFDWCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRURDLFNBQVMsV0FBQUEsVUFBQSxFQUFHO01BQ1IsT0FBTyxJQUFJakQsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3BDZ0QsQ0FBQyxDQUFDQyxPQUFPLENBQUM7VUFDTk4sS0FBSyxFQUFFLGlCQUFpQjtVQUN4Qk8sT0FBTyxFQUFFLG1DQUFtQztVQUM1QzNJLElBQUksRUFBRSxLQUFLO1VBQ1g0SSxZQUFZLEVBQUUsSUFBSTtVQUNsQkMsT0FBTyxFQUFFO1lBQ0xDLEdBQUcsRUFBRTtjQUNEbkYsSUFBSSxFQUFFLEtBQUs7Y0FDWG9GLFFBQVEsRUFBRSxTQUFTO2NBQ25CQyxNQUFNLEVBQUUsU0FBQUEsT0FBVUMsSUFBSSxFQUFFO2dCQUNwQnpELE9BQU8sQ0FBQztrQkFDSmhKLEdBQUcsRUFBRSxJQUFJO2tCQUNUbUgsSUFBSSxFQUFFO2dCQUNWLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQztZQUNEdUYsTUFBTSxFQUFFLFNBQUFBLE9BQVV2SixLQUFLLEVBQUU7Y0FDckI4RixNQUFNLENBQUM7Z0JBQ0hqSixHQUFHLEVBQUUsS0FBSztnQkFDVm1ILElBQUksRUFBRTtjQUNWLENBQUMsQ0FBQztZQUNOO1VBQ0o7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUR3RixhQUFhLFdBQUFBLGNBQUEsRUFBaUU7TUFBQSxJQUFBdkwsS0FBQTtNQUFBLElBQWhFd0ssS0FBSyxHQUFBN0IsU0FBQSxDQUFBbkMsTUFBQSxRQUFBbUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxxQ0FBcUM7TUFBQSxJQUFFNkMsVUFBVSxHQUFBN0MsU0FBQSxDQUFBbkMsTUFBQSxRQUFBbUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxFQUFFO01BRXhFLElBQUksQ0FBQzhDLE1BQU0sR0FBRyxFQUFFO01BQ2hCLElBQUksQ0FBQzlMLFFBQVEsQ0FBQytMLGFBQWEsQ0FBQyxvREFBb0QsRUFBRTtRQUM5RWxCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJtQixVQUFVLEVBQUUsSUFBSTtRQUNoQkMsU0FBUyxFQUFFLFFBQVE7UUFDbkJDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsZUFBZSxFQUFFLEtBQUs7UUFDdEIvRyxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUMsQ0FDRzVFLElBQUksQ0FBQyxVQUFBYyxLQUFLLEVBQUk7UUFDWG5CLEtBQUksQ0FBQ3lMLE1BQU0sR0FBR3RLLEtBQUs7TUFDdkIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBOEssR0FBRyxFQUFJO1FBQ1Y7TUFBQSxDQUNILENBQUM7O01BRU47TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNKO0VBQ0o7QUFFSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUQ7QUFDcUk7QUFDN0I7QUFDeEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDREQUE0RCw4QkFBOEIsbUNBQW1DLHdCQUF3QixHQUFHLGtCQUFrQiw4QkFBOEIsd0JBQXdCLG1DQUFtQyx5Q0FBeUMsR0FBRyxvQkFBb0IsOEJBQThCLHdCQUF3QixHQUFHLFNBQVMsc0lBQXNJLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVywrVUFBK1Usd0RBQXdELGtsQ0FBa2xDLHNCQUFzQixnMEJBQWcwQixvQkFBb0IsNGRBQTRkLHFCQUFxQixnS0FBZ0sscUJBQXFCLDBDQUEwQyxtQ0FBbUMsNEhBQTRILHlCQUF5QixjQUFjLHVEQUF1RCxvQkFBb0Isa0NBQWtDLCtDQUErQyxtREFBbUQsTUFBTSx5QkFBeUIsY0FBYyxnRkFBZ0Ysb0RBQW9ELEtBQUssaUJBQWlCLHlIQUF5SCx1REFBdUQseUJBQXlCLFNBQVMsc0NBQXNDLDhCQUE4Qiw4QkFBOEIsc0ZBQXNGLGtFQUFrRSwyR0FBMkcsc0NBQXNDLElBQUksb0NBQW9DLHFEQUFxRCwrQ0FBK0Msd0NBQXdDLDhCQUE4QixvREFBb0QsaUNBQWlDLFdBQVcsMkJBQTJCLG1DQUFtQyxXQUFXLEVBQUUsT0FBTyxzQ0FBc0MsOEJBQThCLDhCQUE4QixpSEFBaUgsa0VBQWtFLCtJQUErSSxjQUFjLGdDQUFnQywrQ0FBK0Msd0NBQXdDLDhCQUE4QixvREFBb0QsaUNBQWlDLFdBQVcsMkJBQTJCLG1DQUFtQyxXQUFXLEVBQUUsT0FBTyxxQkFBcUIsMkJBQTJCLDJDQUEyQyxVQUFVLE1BQU0sMkNBQTJDLFNBQVMsT0FBTywyQkFBMkIsd0RBQXdELE9BQU8saUNBQWlDLDhCQUE4Qiw4RUFBOEUsaUJBQWlCLFNBQVMsK0JBQStCLE9BQU8sK0JBQStCLDhCQUE4Qiw0RUFBNEUsaUJBQWlCLFNBQVMsNkJBQTZCLE9BQU8sU0FBUyxPQUFPLHdDQUF3Qyw4QkFBOEIsbUNBQW1DLHdCQUF3QixHQUFHLGtCQUFrQiw4QkFBOEIsd0JBQXdCLG1DQUFtQyx5Q0FBeUMsR0FBRyxvQkFBb0IsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQjtBQUM1L047QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGlFO0FBQ3hHLFlBQWdhOztBQUVoYTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxVkFBTzs7OztBQUl4QixpRUFBZSxxVkFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pnRDtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDQSxDQUFzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3dGO0FBQzNCO0FBQ0w7OztBQUd2RTtBQUNBLENBQXNHO0FBQ3RHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDhGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tGO0FBQzNCO0FBQ0w7QUFDakUsQ0FBMEY7OztBQUcxRjtBQUNzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSx3RkFBTTtBQUNSLEVBQUUsMEZBQU07QUFDUixFQUFFLG1HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLCtMQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLENBQUMsaUVBQWUsbU5BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCLENBQUMsaUVBQWUsNk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUdBdFA7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvZXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy90b2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT9lMzdiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2NkM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9jb21wb25lbnRzL2luZGV4LnZ1ZT80NjIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlP2EwMDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/YjQ0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL2NvbXBvbmVudHMvaW5kZXgudnVlP2ZmNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNEZWxldGVNb2RhbC52dWU/ZmM4MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT8yMTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvY29tcG9uZW50cy9pbmRleC52dWU/YTgwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc0RlbGV0ZU1vZGFsLnZ1ZT8yOTExIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgPGgxIGNsYXNzPVwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIj5QYXlyb2xsIFBlcmlvZDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGItYnV0dG9uIFxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVBheXJvbGxQZXJpb2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWItM1wiPlxuICAgICAgICAgICAgPGItZm9ybSBpbmxpbmU+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLXNtLTJcIiBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIj5cbiAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2hvd0VudHJpZXNPcHRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxiLW92ZXJsYXkgOnNob3c9XCJpc092ZXJsYXlcIiByb3VuZGVkPVwic21cIj5cbiAgICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgICBob3ZlclxuICAgICAgICAgICAgICAgIHN0cmlwZWRcbiAgICAgICAgICAgICAgICBzaG93LWVtcHR5XG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXMuZGF0YVwiXG4gICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMFwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChkYXRlX2Zyb20pPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm1hdERhdGUoZGF0YS5pdGVtLmRhdGVfZnJvbSkgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGRhdGVfdG8pPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm1hdERhdGUoZGF0YS5pdGVtLmRhdGVfdG8pIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChhY3Rpb25zKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0UGF5cm9sbFBlcmlvZChkYXRhLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFRElUXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIEBjbGljaz1cImRlbGV0ZVBheXJvbGxQZXJpb2QoZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgREVMRVRFXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBsYWJlbD1cIlNtYWxsIExvYWRpbmcuLi5cIj48L2Itc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgICAgICAgICAgPC9iLXRhYmxlPlxuICAgICAgICAgICAgPC9iLW92ZXJsYXk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxwPnt7YFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYH19PC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxQYXlyb2xsUGVyaW9kc01vZGFsIDpwYXlyb2xsUGVyaW9kRm9ybT1cInBheXJvbGxQZXJpb2RGb3JtXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cImxvYWRQYXlyb2xsUGVyaW9kcygpXCI+PC9QYXlyb2xsUGVyaW9kc01vZGFsPlxuICAgIDxQYXlyb2xsUGVyaW9kc0RlbGV0ZU1vZGFsIDpwYXlyb2xsUGVyaW9kRm9ybT1cInBheXJvbGxQZXJpb2RGb3JtXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cImxvYWRQYXlyb2xsUGVyaW9kcygpXCI+PC9QYXlyb2xsUGVyaW9kc0RlbGV0ZU1vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHNob3dFbnRyaWVzT3B0IH0gZnJvbSBcIkBqcy9kYXRhXCI7XG5pbXBvcnQgUGF5cm9sbFBlcmlvZHNNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlXCI7XG5pbXBvcnQgUGF5cm9sbFBlcmlvZHNEZWxldGVNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy9mb3JtLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBQYXlyb2xsUGVyaW9kc01vZGFsLFxuICAgIFBheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgY3VycmVudF9wYWdlOiAxLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgc2VhcmNoZWQ6IFwiXCIsXG4gICAgICBzaG93RW50cmllc09wdCxcbiAgICAgIGlzT3ZlcmxheTogZmFsc2UsXG4gICAgICB0b3RhbFJvdzogMCxcbiAgICAgIHNob3dpbmc6IHtcbiAgICAgICAgdG86IDAsXG4gICAgICAgIGZyb206IDAsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHRhYmxlVG90YWxSb3dzOiBcIlwiLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZGF0ZV9mcm9tXCIsXG4gICAgICAgICAgbGFiZWw6IFwiRGF0ZSBGcm9tXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImRhdGVfdG9cIixcbiAgICAgICAgICBsYWJlbDogXCJEYXRlIFRvXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICBsYWJlbDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgdGhDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRkQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICB0aFN0eWxlOiB7IHdpZHRoOiBcIjEwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgICBwYXlyb2xsUGVyaW9kRm9ybTogbmV3IEZvcm0oe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgZGF0ZV9mcm9tOiBcIlwiLFxuICAgICAgICBkYXRlX3RvOiBcIlwiLFxuICAgICAgfSksXG5cbiAgICAgIG1vZGFsSWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInBheXJvbGxQZXJpb2RcIiwgW1wibG9hZEl0ZW1zXCJdKSxcbiAgICBjcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5pZCA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfZnJvbSA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSBcIlwiO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcInBheXJvbGwtcGVyaW9kLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgZWRpdFBheXJvbGxQZXJpb2QoZGF0YSkge1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5pZCA9IGRhdGEuaWQ7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfZnJvbSA9IGRhdGEuZGF0ZV9mcm9tO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5kYXRlX3RvID0gZGF0YS5kYXRlX3RvO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcInBheXJvbGwtcGVyaW9kLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlUGF5cm9sbFBlcmlvZChkYXRhKSB7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmlkID0gZGF0YS5pZDtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uZGF0ZV9mcm9tID0gZGF0YS5kYXRlX2Zyb207XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSBkYXRhLmRhdGVfdG87XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwicGF5cm9sbC1wZXJpb2QtZGVsZXRlLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgbG9hZFBheXJvbGxQZXJpb2RzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRJdGVtcyhwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy50YWJsZVRvdGFsUm93cyA9IHRoaXMuaXRlbXMudG90YWxcbiAgICAgICAgICB0aGlzLnNob3dpbmcudG8gPSB0aGlzLml0ZW1zLnRvO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy5mcm9tID0gdGhpcy5pdGVtcy5mcm9tO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy50b3RhbCA9IHRoaXMuaXRlbXMudG90YWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaDogXy5kZWJvdW5jZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHF1ZXJ5XG4gICAgfSwgMTAwMClcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhcInBheXJvbGxQZXJpb2RcIiwge1xuICAgICAgaXRlbXM6IFwiZ2V0UGF5cm9sbFBlcmlvZHNcIixcbiAgICB9KSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGN1cnJlbnRfcGFnZToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGVyX3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpXG4gICAgfSxcblxuICAgIHNlYXJjaGVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpXG4gICAgICB9XG4gICAgfSxcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG4gIDxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJwYXlyb2xsLXBlcmlvZC1kZWxldGUtbW9kYWxcIlxuICAgIGhpZGUtaGVhZGVyXG4gICAgaGlkZS1mb290ZXJcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxuICAgIGNlbnRlcmVkXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItcm93PlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoND5DT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRDwvaDQ+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt7IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7Zm9ybWF0RGF0ZShmb3JtLmRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGZvcm0uZGF0ZV90byl9IGZyb20gUGF5cm9sbCBQZXJpb2QgcmVjb3Jkcz9gIH19XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtNFwiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBOT1xuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgWUVTXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IFtcInBheXJvbGxQZXJpb2RGb3JtXCJdLFxuXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy5wYXlyb2xsUGVyaW9kRm9ybSxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwicGF5cm9sbFBlcmlvZFwiLCBbXCJkZWxldGVQYXlyb2xsUGVyaW9kXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicGF5cm9sbC1wZXJpb2QtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZVBheXJvbGxQZXJpb2QocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJkYW5nZXJcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIERFTEVURURcIixcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV9mcm9tKX0gLSAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV90byl9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBQYXlyb2xsIFBlcmlvZCByZWNvcmRzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbFBlcmlvZHNcIik7XG4gICAgICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicGF5cm9sbC1wZXJpb2QtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XG4gICAgfSxcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwicGF5cm9sbC1wZXJpb2QtbW9kYWxcIlxuICAgIGhpZGUtZm9vdGVyXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cbiAgICAgIFxuICAgICAgPGg1IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiPnt7IGZvcm0uaWQgPyAnRWRpdCBQYXlyb2xsIFBlcmlvZCcgOiAnQWRkIFBheXJvbGwgUGVyaW9kJ319PC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXG4gICAgICAgIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItZm9ybT5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTFcIiBsYWJlbD1cIkRhdGUgRnJvbVwiIGxhYmVsLWZvcj1cImlucHV0LTFcIj5cbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlLWZyb21cIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZUZyb21cIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm8gZGF0ZSBzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgICAgIDxiLWZvcm0tZGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmRhdGVfZnJvbVwiXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcbiAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cImVuLVVTXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZGF0ZS1mcm9tXCJcbiAgICAgICAgICAgICAgICBAY29udGV4dD1cIm9uQ29udGV4dERhdGVGcm9tXCJcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWRhdGVwaWNrZXI+XG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMgJiYgZXJyb3JzLmRhdGVfZnJvbVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZGF0ZV9mcm9tWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJpbnB1dC1ncm91cC0yXCIgbGFiZWw9XCJEYXRlIFRvXCIgbGFiZWwtZm9yPVwiaW5wdXQtMlwiPlxuICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICBpZD1cImRhdGUtdG9cIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZVRvXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGRhdGUgc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kYXRlX3RvXCJcbiAgICAgICAgICAgICAgICBidXR0b24tb25seVxuICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgICAgbG9jYWxlPVwiZW4tVVNcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkYXRlLXRvXCJcbiAgICAgICAgICAgICAgICBAY29udGV4dD1cIm9uQ29udGV4dERhdGVUb1wiXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5kYXRlX3RvXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5kYXRlX3RvWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuXG4gICAgICA8L2ItZm9ybT5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB2LWlmPVwiIWlzU2VsZlwiXG4gICAgICAgICAgICBocmVmPVwiL2FkbWluL3BheXJvbGwtcGVyaW9kc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZsb2F0LWxlZnQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNQU5BR0UgUEFZUk9MTCBQRVJJT0RcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczoge1xuICAgIHBheXJvbGxQZXJpb2RGb3JtOiBPYmplY3QsXG4gICAgaXNTZWxmOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy5wYXlyb2xsUGVyaW9kRm9ybSxcbiAgICAgIGVycm9yczoge30sXG4gICAgICBkYXRlRnJvbTogXCJcIixcbiAgICAgIGRhdGVUbzogXCJcIlxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJwYXlyb2xsUGVyaW9kXCIsIFtcImNyZWF0ZVBheXJvbGxQZXJpb2RcIiwgXCJ1cGRhdGVQYXlyb2xsUGVyaW9kXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcIik7XG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xuXG4gICAgfSxcblxuICAgIGhhbmRsZUNyZWF0ZVBheXJvbGxQZXJpb2QoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBcblx0XHRcdGxldCBwYXJhbXMgPSB7XG5cdFx0XHRcdGRhdGVfZnJvbTogdGhpcy5mb3JtLmRhdGVfZnJvbSxcblx0XHRcdFx0ZGF0ZV90bzogdGhpcy5mb3JtLmRhdGVfdG9cblx0XHRcdH1cblxuICAgICAgdGhpcy5jcmVhdGVQYXlyb2xsUGVyaW9kKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgXCJORVcgUkVDT1JEIENSRUFURURcIixcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV9mcm9tKX0gLSAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV90byl9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgbmV3IFBheXJvbGwgcGVyaW9kYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQYXlyb2xsUGVyaW9kc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBcblx0XHRcdGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGlkOiB0aGlzLmZvcm0uaWQsXG5cdFx0XHRcdGRhdGVfZnJvbTogdGhpcy5mb3JtLmRhdGVfZnJvbSxcblx0XHRcdFx0ZGF0ZV90bzogdGhpcy5mb3JtLmRhdGVfdG9cblx0XHRcdH1cblxuICAgICAgdGhpcy51cGRhdGVQYXlyb2xsUGVyaW9kKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwid2FybmluZ1wiLFxuICAgICAgICAgICAgXCJSRUNPUkQgVVBEQVRFRFwiLFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIFBheXJvbGwgUGVyaW9kIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZFBheXJvbGxQZXJpb2RzXCIpO1xuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlUGF5cm9sbFBlcmlvZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XG4gICAgfSxcblxuICAgIG9uQ29udGV4dERhdGVGcm9tKGN0eCkge1xuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xuICAgICAgICB0aGlzLmRhdGVGcm9tID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0ZUZyb20gPSBcIlwiO1xuICAgIH0sXG5cbiAgICBvbkNvbnRleHREYXRlVG8oY3R4KSB7XG4gICAgICBpZiAoY3R4LnNlbGVjdGVkWU1EKSB7XG4gICAgICAgIHRoaXMuZGF0ZVRvID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0ZVRvID0gXCJcIjtcbiAgICB9XG4gIFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlBheXJvbGwgUGVyaW9kXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVBheXJvbGxQZXJpb2QgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2hvd0VudHJpZXNPcHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVyX3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2hvdzogX3ZtLmlzT3ZlcmxheSwgcm91bmRlZDogXCJzbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGFibGUtYnVzeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhcIk5vIGRhdGEgZm91bmQhXCIpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoZGF0ZV9mcm9tKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0RGF0ZShkYXRhLml0ZW0uZGF0ZV9mcm9tKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoZGF0ZV90bylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0RGF0ZShkYXRhLml0ZW0uZGF0ZV90bykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdFBheXJvbGxQZXJpb2QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBFRElUXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVBheXJvbGxQZXJpb2QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIGBTaG93aW5nICR7X3ZtLnNob3dpbmcuZnJvbX0gdG8gJHtfdm0uc2hvd2luZy50b30gb2YgJHtfdm0uc2hvd2luZy50b3RhbH0gZW50cmllc2BcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidG90YWwtcm93c1wiOiBfdm0udGFibGVUb3RhbFJvd3MsXG4gICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50X3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJQYXlyb2xsUGVyaW9kc01vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgcGF5cm9sbFBlcmlvZEZvcm06IF92bS5wYXlyb2xsUGVyaW9kRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRQYXlyb2xsUGVyaW9kczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkUGF5cm9sbFBlcmlvZHMoKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlBheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyBwYXlyb2xsUGVyaW9kRm9ybTogX3ZtLnBheXJvbGxQZXJpb2RGb3JtIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbG9hZFBheXJvbGxQZXJpb2RzOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRQYXlyb2xsUGVyaW9kcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInBheXJvbGwtcGVyaW9kLWRlbGV0ZS1tb2RhbFwiLFxuICAgICAgXCJoaWRlLWhlYWRlclwiOiBcIlwiLFxuICAgICAgXCJoaWRlLWZvb3RlclwiOiBcIlwiLFxuICAgICAgXCJuby1jbG9zZS1vbi1iYWNrZHJvcFwiOiBcIlwiLFxuICAgICAgY2VudGVyZWQ6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEXCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke192bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmRhdGVfZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfSAtICR7X3ZtLmZvcm1hdERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uZGF0ZV90b1xuICAgICAgICAgICAgICAgICAgICAgICAgICApfSBmcm9tIFBheXJvbGwgUGVyaW9kIHJlY29yZHM/YFxuICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIE5PXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFlFU1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgIF0pLFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImItbW9kYWxcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBpZDogXCJwYXlyb2xsLXBlcmlvZC1tb2RhbFwiLFxuICAgICAgXCJoaWRlLWZvb3RlclwiOiBcIlwiLFxuICAgICAgXCJuby1jbG9zZS1vbi1iYWNrZHJvcFwiOiBcIlwiLFxuICAgICAgXCJjb250ZW50LWNsYXNzXCI6IFwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiLFxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2RhbC1oZWFkZXJcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybS5pZCA/IFwiRWRpdCBQYXlyb2xsIFBlcmlvZFwiIDogXCJBZGQgUGF5cm9sbCBQZXJpb2RcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1iLXRvb2x0aXAuaG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IGhvdmVyOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC1ncm91cC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBGcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS1mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTm8gZGF0ZSBzZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZUZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlRnJvbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlRnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cC1hcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tb25seVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRhdGUtZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbnRleHQ6IF92bS5vbkNvbnRleHREYXRlRnJvbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGF0ZV9mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZGF0ZV9mcm9tWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgVG9cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImlucHV0LTJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlLXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTm8gZGF0ZSBzZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZVRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZVRvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVUb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cC1hcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tb25seVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRhdGUtdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjb250ZXh0OiBfdm0ub25Db250ZXh0RGF0ZVRvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlX3RvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVfdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5kYXRlX3RvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZGF0ZV90b1swXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uaXNTZWxmXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBzaG93RW50cmllc09wdCA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogXCIxMFwiIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6IFwiMzBcIiB9LFxuICAgIHsgdmFsdWU6IDUwLCB0ZXh0OiBcIjUwXCIgfSxcbiAgICB7IHZhbHVlOiAxMDAsIHRleHQ6IFwiMTAwXCIgfSxcbl1cblxuXG5leHBvcnQge1xuICAgIHNob3dFbnRyaWVzT3B0LFxufSIsImNsYXNzIEVycm9ycyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRXJyb3JzIGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYW4gZXJyb3JzIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGhhcyhmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHdlIGhhdmUgYW55IGVycm9ycy5cbiAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgZ2V0KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkIHRoZSBuZXcgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICByZWNvcmQoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGZpZWxkXG4gICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZXJyb3JzLlxuICAgKi9cbiAgbGlzdCgpIHtcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGxldCBlcnJvckFycmF5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykgPz8gW11cbiAgICBlcnJvckFycmF5LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgaXRlbXMucHVzaChlcnJvclswXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG4iLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG5jbGFzcyBGb3JtIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcblxuICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgKi9cbiAgZGF0YSgpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwb3N0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwdXQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIC8vIHRlbXBvcmFyeVxuICAgIC8vIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgZmFpbGVkIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgb25GYWlsKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xuICB9XG5cblxuICBpc0RhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaXNEZWZhdWx0RGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsICYmIHZhbCAhPT0gJ0FkZCcpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgc3RyaW5nTG93ZXJDYXNlKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0ciwgbG93ZXIgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChsb3dlciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyKS5yZXBsYWNlKC8oPzpefFxcc3xbXCInKFt7XSkrXFxTL2csIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRBbW91bnQoYW1vdW50KSB7XG4gICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBhbW91bnQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIGVtcHR5U3RyaW5nKGNoYXJhYyA9ICctJywgbGVuZ3RoID0gNCkge1xuICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBzdHIgKz0gY2hhcmFjXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBpbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICAgIHZhciBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB3aG9sZU51bWJlckZvcm1hdChhbW91bnQsIGRlY2ltYVBsYWNlKSB7XG4gICAgICB2YXIgYW1vdW50Tm93ID0gMFxuICAgICAgaWYgKChhbW91bnQgLSBNYXRoLmZsb29yKGFtb3VudCkpICE9PSAwKSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIGlmIChhbW91bnROb3cgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYW1vdW50LnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWFfY29uY2F0KGtleSA9ICduYW1lJywgaXRlbXMpIHtcbiAgICAgIGxldCBzZXQgPSAnJztcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIGl0ZW1zLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgc2V0ICs9IGVsZVtrZXldO1xuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSxcblxuICAgIHNob3dpbmdfbGFiZWwoZnJvbSwgdG8sIHRvdGFsKSB7XG4gICAgICBsZXQgZiA9IHRoaXMudG9fc3Ryb25nKGZyb20pXG4gICAgICBsZXQgdCA9IHRoaXMudG9fc3Ryb25nKHRvKVxuICAgICAgbGV0IHRvdCA9IHRoaXMudG9fc3Ryb25nKHRvdGFsKVxuICAgICAgcmV0dXJuIGBTaG93aW5nICR7Zn0gdG8gJHt0fSBvZiAke3RvdH0gcmVzdWx0c2A7XG4gICAgfSxcblxuICAgIHRvX3N0cm9uZyhzdHIpIHtcbiAgICAgIHJldHVybiBgPHN0cm9uZz4ke3N0cn08L3N0cm9uZz5gO1xuICAgIH1cbiAgfSxcbn07XG5cbiIsImltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW3RleHRdLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRvYXN0KHZhcmlhbnQgPSBudWxsLCB0aXRsZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy4kYnZUb2FzdC50b2FzdChtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0NvbmZpcm0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICQuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIENvbmZpcm0hJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBkYXRhPycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNsYXNzOiAnYnRuLXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUNvbmZpcm0odGl0bGUgPSAnQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkQnLCBtb2R1bGVOYW1lID0gXCJcIikge1xuXG4gICAgICAgICAgICB0aGlzLmJveFR3byA9ICcnXG4gICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIGV2ZXJ5dGhpbmcuJywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIENvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBva1RpdGxlOiAnWUVTJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcbiAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHdvID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgU3dhbFxuICAgICAgICAgICAgLy8gICAgICAgICAuZmlyZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBkYXRhIGZvcm0gJHttb2R1bGVOYW1lfSByZWNvcmRzP2AsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZOQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcInBheXJvbGwtcGVyaW9kLW1vZGFsXFxcIlxcbiAgICBoaWRlLWZvb3RlclxcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxcbiAgICBjb250ZW50LWNsYXNzPVxcXCJib3JkZXItdG9wIGJnLWNyZWFtXFxcIlxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cXG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XFxuICAgICAgXFxuICAgICAgPGg1IGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXFxcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCBQZXJpb2QnIDogJ0FkZCBQYXlyb2xsIFBlcmlvZCd9fTwvaDU+XFxuICAgICAgPGItYnV0dG9uXFxuICAgICAgICBwaWxsXFxuICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXFxuICAgICAgICBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICA8L2ItYnV0dG9uPlxcbiAgICA8L3RlbXBsYXRlPlxcblxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGItZm9ybT5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTFcXFwiIGxhYmVsPVxcXCJEYXRlIEZyb21cXFwiIGxhYmVsLWZvcj1cXFwiaW5wdXQtMVxcXCI+XFxuICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcXG4gICAgICAgICAgICAgIGlkPVxcXCJkYXRlLWZyb21cXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJkYXRlRnJvbVxcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTm8gZGF0ZSBzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgICAgIDxiLWZvcm0tZGF0ZXBpY2tlclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmRhdGVfZnJvbVxcXCJcXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcXG4gICAgICAgICAgICAgICAgcmlnaHRcXG4gICAgICAgICAgICAgICAgbG9jYWxlPVxcXCJlbi1VU1xcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGF0ZS1mcm9tXFxcIlxcbiAgICAgICAgICAgICAgICBAY29udGV4dD1cXFwib25Db250ZXh0RGF0ZUZyb21cXFwiXFxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5kYXRlX2Zyb21cXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmRhdGVfZnJvbVswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC0yXFxcIiBsYWJlbD1cXFwiRGF0ZSBUb1xcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0yXFxcIj5cXG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgaWQ9XFxcImRhdGUtdG9cXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJkYXRlVG9cXFwiXFxuICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIk5vIGRhdGUgc2VsZWN0ZWRcXFwiXFxuICAgICAgICAgICAgICByZWFkb25seVxcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC1hcHBlbmQ+XFxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5kYXRlX3RvXFxcIlxcbiAgICAgICAgICAgICAgICBidXR0b24tb25seVxcbiAgICAgICAgICAgICAgICByaWdodFxcbiAgICAgICAgICAgICAgICBsb2NhbGU9XFxcImVuLVVTXFxcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkYXRlLXRvXFxcIlxcbiAgICAgICAgICAgICAgICBAY29udGV4dD1cXFwib25Db250ZXh0RGF0ZVRvXFxcIlxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWRhdGVwaWNrZXI+XFxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMuZGF0ZV90b1xcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZGF0ZV90b1swXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgPC9iLWZvcm0+XFxuICAgICAgPGItcm93IGNsYXNzPVxcXCJtdC0zXFxcIj5cXG4gICAgICAgIDxiLWNvbD5cXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICB2LWlmPVxcXCIhaXNTZWxmXFxcIlxcbiAgICAgICAgICAgIGhyZWY9XFxcIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImZsb2F0LWxlZnQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0yXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXFxuICAgICAgICAgIDwvYT5cXG4gICAgICAgIDwvYi1jb2w+XFxuICAgICAgICA8Yi1jb2wgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXFxcIj5cXG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCI+XFxuICAgICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiIDpzdHlsZT1cXFwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cXFwiIEBjbGljaz1cXFwib25TdWJtaXQoKVxcXCI+XFxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgIDwvYi1jb2w+XFxuICAgICAgPC9iLXJvdz5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvYi1tb2RhbD5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcblxcbmltcG9ydCB0b2FzdCBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaXhpbnM6IFt0b2FzdF0sXFxuXFxuICBwcm9wczoge1xcbiAgICBwYXlyb2xsUGVyaW9kRm9ybTogT2JqZWN0LFxcbiAgICBpc1NlbGY6IHtcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgIH0sXFxuICB9LFxcblxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcXG4gICAgICBmb3JtOiB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLFxcbiAgICAgIGVycm9yczoge30sXFxuICAgICAgZGF0ZUZyb206IFxcXCJcXFwiLFxcbiAgICAgIGRhdGVUbzogXFxcIlxcXCJcXG4gICAgfTtcXG4gIH0sXFxuXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoXFxcInBheXJvbGxQZXJpb2RcXFwiLCBbXFxcImNyZWF0ZVBheXJvbGxQZXJpb2RcXFwiLCBcXFwidXBkYXRlUGF5cm9sbFBlcmlvZFxcXCJdKSxcXG4gICAgXFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xcblxcbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcXFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcXFwiKTtcXG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xcblxcbiAgICB9LFxcblxcbiAgICBoYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcXG4gICAgICBcXG5cXHRcXHRcXHRsZXQgcGFyYW1zID0ge1xcblxcdFxcdFxcdFxcdGRhdGVfZnJvbTogdGhpcy5mb3JtLmRhdGVfZnJvbSxcXG5cXHRcXHRcXHRcXHRkYXRlX3RvOiB0aGlzLmZvcm0uZGF0ZV90b1xcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLmNyZWF0ZVBheXJvbGxQZXJpb2QocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIFxcXCJORVcgUkVDT1JEIENSRUFURURcXFwiLFxcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV9mcm9tKX0gLSAke3RoaXMuZm9ybWF0RGF0ZSh0aGlzLmZvcm0uZGF0ZV90byl9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgbmV3IFBheXJvbGwgcGVyaW9kYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkUGF5cm9sbFBlcmlvZHNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdGRhdGVfZnJvbTogdGhpcy5mb3JtLmRhdGVfZnJvbSxcXG5cXHRcXHRcXHRcXHRkYXRlX3RvOiB0aGlzLmZvcm0uZGF0ZV90b1xcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLnVwZGF0ZVBheXJvbGxQZXJpb2QocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcIndhcm5pbmdcXFwiLFxcbiAgICAgICAgICAgIFxcXCJSRUNPUkQgVVBEQVRFRFxcXCIsXFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIFBheXJvbGwgUGVyaW9kIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWRQYXlyb2xsUGVyaW9kc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25TdWJtaXQoKSB7XFxuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xcbiAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kKCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCgpO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XFxuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XFxuICAgIH0sXFxuXFxuICAgIG9uQ29udGV4dERhdGVGcm9tKGN0eCkge1xcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcXG4gICAgICAgIHRoaXMuZGF0ZUZyb20gPSB0aGlzLm1vbWVudChjdHguc2VsZWN0ZWRZTUQpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcblxcbiAgICAgIHRoaXMuZGF0ZUZyb20gPSBcXFwiXFxcIjtcXG4gICAgfSxcXG5cXG4gICAgb25Db250ZXh0RGF0ZVRvKGN0eCkge1xcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcXG4gICAgICAgIHRoaXMuZGF0ZVRvID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmRhdGVUbyA9IFxcXCJcXFwiO1xcbiAgICB9XFxuICBcXG4gIH0sXFxuXFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ4M2ZlYjRjJmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjg1YWIxYzhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjg1YWIxYzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjg1YWIxYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjg1YWIxYzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iODVhYjFjOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I4NWFiMWM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL2NvbXBvbmVudHMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc0RlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDBmZGRhMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzQwZmRkYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzQwZmRkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzQwZmRkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MGZkZGEyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzQwZmRkYTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODNmZWI0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kODNmZWI0YyZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q4M2ZlYjRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q4M2ZlYjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q4M2ZlYjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODNmZWI0Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q4M2ZlYjRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc0RlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yjg1YWIxYzhcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQwZmRkYTJcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXBBY3Rpb25zIiwibWFwR2V0dGVycyIsInNob3dFbnRyaWVzT3B0IiwiUGF5cm9sbFBlcmlvZHNNb2RhbCIsIlBheXJvbGxQZXJpb2RzRGVsZXRlTW9kYWwiLCJGb3JtIiwiY29tcG9uZW50cyIsImRhdGEiLCJwZXJfcGFnZSIsImN1cnJlbnRfcGFnZSIsImlzTG9hZGluZyIsImZpbHRlciIsInNlYXJjaGVkIiwiaXNPdmVybGF5IiwidG90YWxSb3ciLCJzaG93aW5nIiwidG8iLCJmcm9tIiwidG90YWwiLCJ0YWJsZVRvdGFsUm93cyIsImZpZWxkcyIsImtleSIsImxhYmVsIiwidGhDbGFzcyIsInRkQ2xhc3MiLCJ0aFN0eWxlIiwid2lkdGgiLCJwYXlyb2xsUGVyaW9kRm9ybSIsImlkIiwiZGF0ZV9mcm9tIiwiZGF0ZV90byIsIm1vZGFsSWQiLCJtZXRob2RzIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZVBheXJvbGxQZXJpb2QiLCJyZXNldCIsIiRidk1vZGFsIiwic2hvdyIsImVkaXRQYXlyb2xsUGVyaW9kIiwiZGVsZXRlUGF5cm9sbFBlcmlvZCIsImxvYWRQYXlyb2xsUGVyaW9kcyIsIl90aGlzIiwicGFyYW1zIiwicGFnZSIsInNlYXJjaCIsImxvYWRJdGVtcyIsInRoZW4iLCJfIiwiaXRlbXMiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsInBlcmZvcm1TZWFyY2giLCJkZWJvdW5jZSIsInF1ZXJ5IiwibW91bnRlZCIsImNvbXB1dGVkIiwid2F0Y2giLCJoYW5kbGVyIiwidmFsdWUiLCJ0b2FzdCIsIm1peGlucyIsInByb3BzIiwiZm9ybSIsIm1vZGFsQ2xvc2UiLCJkb25lIiwiaGlkZSIsIm9uU3VibWl0IiwibWFrZVRvYXN0IiwiY29uY2F0IiwiJGVtaXQiLCJlcnJvciIsImVycm9ycyIsInJlc3BvbnNlIiwiT2JqZWN0IiwiaXNTZWxmIiwidHlwZSIsIkJvb2xlYW4iLCJkYXRlRnJvbSIsImRhdGVUbyIsImhhbmRsZUNyZWF0ZVBheXJvbGxQZXJpb2QiLCJoYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kIiwiX3RoaXMyIiwidXBkYXRlUGF5cm9sbFBlcmlvZCIsIm9uQ29udGV4dERhdGVGcm9tIiwiY3R4Iiwic2VsZWN0ZWRZTUQiLCJvbkNvbnRleHREYXRlVG8iLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsImF0dHJzIiwidmFyaWFudCIsIm9uIiwiY2xpY2siLCJpY29uIiwiaW5saW5lIiwib3B0aW9ucyIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwicHJveHkiLCJwbGFjZWhvbGRlciIsInJvdW5kZWQiLCJob3ZlciIsInN0cmlwZWQiLCJidXN5IiwiX3MiLCJpdGVtIiwic2l6ZSIsIiRldmVudCIsImFsaWduIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsImNlbnRlcmVkIiwic3R5bGUiLCJwaWxsIiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwibW9kaWZpZXJzIiwicmVhZG9ubHkiLCJyaWdodCIsImxvY2FsZSIsImNvbnRleHQiLCIkc2V0IiwiX2UiLCJocmVmIiwidGV4dCIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJrZXlzIiwibGVuZ3RoIiwiZ2V0IiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwiZm9yRWFjaCIsInB1c2giLCJvcmlnaW5hbERhdGEiLCJwcm9wZXJ0eSIsInBvc3QiLCJ1cmwiLCJzdWJtaXQiLCJwdXQiLCJwYXRjaCIsIl9kZWxldGUiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJpc0RhdGFFbXB0eSIsInZhbCIsImluZCIsImlzRGVmYXVsdERhdGFFbXB0eSIsInN0cmluZ0xvd2VyQ2FzZSIsInN0ciIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJsb3dlciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0QW1vdW50IiwiYW1vdW50IiwiZW1wdHlTdHJpbmciLCJjaGFyYWMiLCJpIiwibCIsImluQXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsIndob2xlTnVtYmVyRm9ybWF0IiwiZGVjaW1hUGxhY2UiLCJhbW91bnROb3ciLCJNYXRoIiwiZmxvb3IiLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwiY29tbWFfY29uY2F0Iiwic2V0IiwiZWxlIiwic2hvd2luZ19sYWJlbCIsImYiLCJ0b19zdHJvbmciLCJ0IiwidG90IiwidGl0bGUiLCJtZXNzYWdlIiwiJGJ2VG9hc3QiLCJzb2xpZCIsInRvQ29uZmlybSIsIiQiLCJjb25maXJtIiwiY29udGVudCIsInR5cGVBbmltYXRlZCIsImJ1dHRvbnMiLCJ5ZXMiLCJidG5DbGFzcyIsImFjdGlvbiIsInJlc3AiLCJjYW5jZWwiLCJkZWxldGVDb25maXJtIiwibW9kdWxlTmFtZSIsImJveFR3byIsIm1zZ0JveENvbmZpcm0iLCJidXR0b25TaXplIiwib2tWYXJpYW50Iiwib2tUaXRsZSIsImNhbmNlbFRpdGxlIiwiZm9vdGVyQ2xhc3MiLCJoaWRlSGVhZGVyQ2xvc2UiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9