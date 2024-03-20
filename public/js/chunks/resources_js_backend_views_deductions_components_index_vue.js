"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_deductions_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_deductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/deductionsModal.vue */ "./resources/js/backend/views/deductions/modals/deductionsModal.vue");
/* harmony import */ var _modals_deductionsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/deductionsDeleteModal.vue */ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    DeductionsModal: _modals_deductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DeductionsDeleteModal: _modals_deductionsDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        key: "employee_name",
        label: "Name of Employee"
        // thStyle: { width: "20%" },
      }, {
        key: "type_of_deduction",
        label: "Type of Deduction"
        // thStyle: { width: "20%" },
      }, {
        key: "amount",
        label: "Amount"
        // thStyle: { width: "20%" },
      }, {
        key: "period",
        label: "Period"
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
      deductionForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        emp: "",
        tod_id: "",
        amount: "",
        period_id: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("deduction", ["loadItems"])), {}, {
    createDeduction: function createDeduction() {
      this.deductionForm.reset();
      this.deductionForm.id = "";
      this.deductionForm.emp = "";
      this.deductionForm.tod_id = "";
      this.deductionForm.amount = "";
      this.deductionForm.period_id = "";
      this.modalId = "deduction-modal";
      this.$bvModal.show(this.modalId);
    },
    editDeduction: function editDeduction(data) {
      this.deductionForm.reset();
      this.deductionForm.id = data.id;
      this.deductionForm.emp = data.employee;
      this.deductionForm.tod_id = data.type_of_deduction.id;
      this.deductionForm.amount = data.amount;
      this.deductionForm.period_id = data.payroll_period ? data.payroll_period.id : "";
      this.modalId = "deduction-modal";
      this.$bvModal.show(this.modalId);
    },
    deleteDeduction: function deleteDeduction(data) {
      this.deductionForm.reset();
      this.deductionForm.id = data.id;
      this.deductionForm.emp = data.employee;
      this.deductionForm.tod_id = data.type_of_deduction.id;
      this.deductionForm.amount = data.amount;
      this.deductionForm.period_id = data.payroll_period ? data.payroll_period.id : "";
      this.modalId = "deduction-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadDeductions: function loadDeductions() {
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
    this.loadDeductions();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("deduction", {
    items: "getDeductions"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadDeductions();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadDeductions();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadDeductions();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  props: ["deductionForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.deductionForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("deduction", ["deleteDeduction"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("deduction-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deleteDeduction(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.emp.full_name, " has been removed from Deduction records."));
        _this.$emit("loadDeductions");
        _this.$bvModal.hide("deduction-delete-modal");
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
/* harmony import */ var _deductionsTypes_modals_typeOfDeductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../deductionsTypes/modals/typeOfDeductionsModal.vue */ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue");
/* harmony import */ var _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payrollPeriod/modals/payrollPeriodsModal.vue */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["deductionForm"],
  components: {
    TypeOfDeductionsModal: _deductionsTypes_modals_typeOfDeductionsModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PayrollPeriodsModal: _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      form: this.deductionForm,
      errors: {},
      isEmployeesDropdownLoading: false,
      isEmployeesNextButtonLoading: false,
      isEmployeesPrevButtonLoading: false,
      employeesCurrentPage: 1,
      employeesPerPage: 10,
      employeesLastPage: 0,
      employeesSearched: "",
      employees: [],
      isTypeOfDeductionsDropdownLoading: false,
      isTypeOfDeductionsNextButtonLoading: false,
      isTypeOfDeductionsPrevButtonLoading: false,
      typeOfDeductionsCurrentPage: 1,
      typeOfDeductionsPerPage: 10,
      typeOfDeductionsLastPage: 0,
      typeOfDeductionsSearched: "",
      typeOfDeductions: [],
      isPayrollPeriodsDropdownLoading: false,
      isPayrollPeriodsNextButtonLoading: false,
      isPayrollPeriodsPrevButtonLoading: false,
      payrollPeriodsCurrentPage: 1,
      payrollPeriodsPerPage: 10,
      payrollPeriodsLastPage: 0,
      payrollPeriodsSearched: "",
      payrollPeriods: [],
      statuses: [{
        text: 'Deducted',
        value: 'Deducted'
      }, {
        text: 'Not Yet Deducted',
        value: 'Not Yet Deducted'
      }],
      typeOfDeductionForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        name: ""
      }),
      payrollPeriodForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        date_from: "",
        date_to: ""
      })
    };
  },
  mounted: function mounted() {
    this.loadEmployees();
    this.loadTypeOfDeductions();
    this.loadPayrollPeriods();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("deduction", ["createDeduction", "updateDeduction"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("deduction-modal");
      this.errors = {};
    },
    loadEmployees: function loadEmployees() {
      var _this = this;
      var params = {
        per_page: 10,
        page: this.employeesCurrentPage,
        search: this.employeesSearched
      };
      axios.get("/api/employees", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this.employees = data.data;
        _this.employeesLastPage = data.last_page;
      })["finally"](function () {
        _this.isEmployeesDropdownLoading = false;
        _this.isEmployeesNextButtonLoading = false;
        _this.isEmployeesPrevButtonLoading = false;
      });
    },
    onEmployeeNextPage: function onEmployeeNextPage() {
      this.isEmployeesNextButtonLoading = true;
      this.employeesCurrentPage += 1;
      this.loadEmployees();
    },
    onEmployeePrevPage: function onEmployeePrevPage() {
      this.isEmployeesPrevButtonLoading = true;
      this.employeesCurrentPage -= 1;
      this.loadEmployees();
    },
    onSearchEmployee: function onSearchEmployee(search, loading) {
      this.isEmployeesDropdownLoading = true;
      this.performSearchEmployee(search);
    },
    performSearchEmployee: _.debounce(function (search) {
      this.employeesSearched = search;
      this.loadEmployees();
    }, 1000),
    loadTypeOfDeductions: function loadTypeOfDeductions() {
      var _this2 = this;
      var params = {
        per_page: 10,
        page: this.typeOfDeductionsCurrentPage,
        search: this.typeOfDeductionsSearched
      };
      axios.get("/api/type-of-deductions", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this2.typeOfDeductions = data.data;
        _this2.typeOfDeductionsLastPage = data.last_page;
      })["finally"](function () {
        _this2.isTypeOfDeductionsDropdownLoading = false;
        _this2.isTypeOfDeductionsNextButtonLoading = false;
        _this2.isTypeOfDeductionsPrevButtonLoading = false;
      });
    },
    onTypeOfDeductionNextPage: function onTypeOfDeductionNextPage() {
      this.isTypeOfDeductionsNextButtonLoading = true;
      this.typeOfDeductionsCurrentPage += 1;
      this.loadTypeOfDeductions();
    },
    onTypeOfDeductionPrevPage: function onTypeOfDeductionPrevPage() {
      this.isTypeOfDeductionsPrevButtonLoading = true;
      this.typeOfDeductionsCurrentPage -= 1;
      this.loadTypeOfDeductions();
    },
    onSearchTypeOfDeduction: function onSearchTypeOfDeduction(search, loading) {
      this.isTypeOfDeductionsDropdownLoading = true;
      this.performSearchTypeOfDeduction(search);
    },
    performSearchTypeOfDeduction: _.debounce(function (search) {
      this.typeOfDeductionsSearched = search;
      this.loadTypeOfDeductions();
    }, 1000),
    loadPayrollPeriods: function loadPayrollPeriods() {
      var _this3 = this;
      var params = {
        per_page: 10,
        page: this.payrollPeriodsCurrentPage,
        search: this.payrollPeriodsSearched
      };
      axios.get("/api/payroll-periods", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this3.payrollPeriods = data.data;
        _this3.payrollPeriodsLastPage = data.last_page;
      })["finally"](function () {
        _this3.isPayrollPeriodsDropdownLoading = false;
        _this3.isPayrollPeriodsNextButtonLoading = false;
        _this3.isPayrollPeriodsPrevButtonLoading = false;
      });
    },
    onPayrollPeriodNextPage: function onPayrollPeriodNextPage() {
      this.isPayrollPeriodsNextButtonLoading = true;
      this.payrollPeriodsCurrentPage += 1;
      this.loadPayrollPeriods();
    },
    onPayrollPeriodPrevPage: function onPayrollPeriodPrevPage() {
      this.isPayrollPeriodsPrevButtonLoading = true;
      this.payrollPeriodsCurrentPage -= 1;
      this.loadPayrollPeriods();
    },
    onSearchPayrollPeriod: function onSearchPayrollPeriod(search, loading) {
      this.isPayrollPeriodsDropdownLoading = true;
      this.performSearchPayrollPeriod(search);
    },
    performSearchPayrollPeriod: _.debounce(function (search) {
      this.payrollPeriodsSearched = search;
      this.loadPayrollPeriods();
    }, 1000),
    handleCreateDeduction: function handleCreateDeduction() {
      var _this4 = this;
      this.isLoading = true;
      var params = {
        emp_id: this.form.emp.id,
        tod_id: this.form.tod_id,
        amount: this.form.amount,
        period_id: this.form.period_id
      };
      this.createDeduction(params).then(function (_) {
        _this4.makeToast("success", "NEW RECORD CREATED", "".concat(_this4.form.emp.full_name, " has been created as new Deduction"));
        _this4.$emit("loadDeductions");
        _this4.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this4.errors = errors;
      })["finally"](function () {
        _this4.isLoading = false;
      });
    },
    handleUpdateDeduction: function handleUpdateDeduction() {
      var _this5 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        emp_id: this.form.emp.id,
        tod_id: this.form.tod_id,
        amount: this.form.amount,
        period_id: this.form.period_id
      };
      this.updateDeduction(params).then(function (_) {
        _this5.makeToast("warning", "RECORD UPDATED", "This information for Deduction ID: ".concat(_this5.form.id, " has been updated."));
        _this5.$emit("loadDeductions");
        _this5.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this5.errors = errors;
      })["finally"](function () {
        _this5.isLoading = false;
      });
    },
    createTypeOfDeduction: function createTypeOfDeduction() {
      this.typeOfDeductionForm.reset();
      this.typeOfDeductionForm.id = '';
      this.typeOfDeductionForm.name = '';
      this.$bvModal.show('type-of-deduction-modal');
    },
    createPayrollPeriod: function createPayrollPeriod() {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = '';
      this.payrollPeriodForm.date_from = '';
      this.payrollPeriodForm.date_to = '';
      this.$bvModal.show('payroll-period-modal');
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    },
    onSubmit: function onSubmit() {
      if (this.form.id) {
        this.handleUpdateDeduction();
      } else {
        this.handleCreateDeduction();
      }
    }
  }),
  computed: {
    hasEmployeesNextPage: function hasEmployeesNextPage() {
      return this.employeesCurrentPage !== this.employeesLastPage;
    },
    hasEmployeesPrevPage: function hasEmployeesPrevPage() {
      return this.employeesCurrentPage > 1;
    },
    hasTypeOfDeductionsNextPage: function hasTypeOfDeductionsNextPage() {
      return this.typeOfDeductionsCurrentPage !== this.typeOfDeductionsLastPage;
    },
    hasTypeOfDeductionsPrevPage: function hasTypeOfDeductionsPrevPage() {
      return this.typeOfDeductionsCurrentPage > 1;
    },
    hasPayrollPeriodsNextPage: function hasPayrollPeriodsNextPage() {
      return this.payrollPeriodsCurrentPage !== this.payrollPeriodsLastPage;
    },
    hasPayrollPeriodsPrevPage: function hasPayrollPeriodsPrevPage() {
      return this.payrollPeriodsCurrentPage > 1;
    }
  }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Deductions")]), _vm._v(" "), _c("div", {
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
      click: _vm.createDeduction
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
      key: "cell(employee_name)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.employee.full_name) + "\n                ")])];
      }
    }, {
      key: "cell(type_of_deduction)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.type_of_deduction.name) + "\n                ")])];
      }
    }, {
      key: "cell(amount)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.amount.toFixed(2)) + "\n                ")])];
      }
    }, {
      key: "cell(period)",
      fn: function fn(data) {
        return [data.item.payroll_period ? _c("span", [_vm._v("\n                  " + _vm._s("".concat(_vm.formatDate(data.item.payroll_period.date_from), " - ").concat(_vm.formatDate(data.item.payroll_period.date_to))) + "\n                ")]) : _vm._e()];
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
              return _vm.editDeduction(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteDeduction(data.item);
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
  })], 1)])])]), _vm._v(" "), _c("DeductionsModal", {
    attrs: {
      deductionForm: _vm.deductionForm
    },
    on: {
      loadDeductions: function loadDeductions($event) {
        return _vm.loadDeductions();
      }
    }
  }), _vm._v(" "), _c("DeductionsDeleteModal", {
    attrs: {
      deductionForm: _vm.deductionForm
    },
    on: {
      loadDeductions: function loadDeductions($event) {
        return _vm.loadDeductions();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "deduction-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.emp.full_name, " from Deduction records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "deduction-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Deduction" : "Add Deduction"))]), _vm._v(" "), _c("b-button", {
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
            label: "Employee Name",
            "label-for": "input-1"
          }
        }, [_c("v-select", {
          attrs: {
            name: "employees",
            label: "full_name",
            options: _vm.employees,
            filterable: false,
            loading: _vm.isEmployeesDropdownLoading,
            id: "employees"
          },
          on: {
            search: _vm.onSearchEmployee
          },
          scopedSlots: _vm._u([{
            key: "list-footer",
            fn: function fn() {
              return [_c("li", {
                staticClass: "mt-2 mb-1"
              }, [_c("div", {
                staticClass: "d-flex"
              }, [_c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  size: "sm",
                  variant: "light",
                  block: "",
                  squared: "",
                  disabled: !_vm.hasEmployeesPrevPage || _vm.isEmployeesPrevButtonLoading
                },
                on: {
                  click: _vm.onEmployeePrevPage
                }
              }, [_vm.isEmployeesPrevButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Prev")])], 1)], 1), _vm._v(" "), _c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  squared: "",
                  size: "sm",
                  disabled: !_vm.hasEmployeesNextPage || _vm.isEmployeesNextButtonLoading,
                  variant: "light",
                  block: ""
                },
                on: {
                  click: _vm.onEmployeeNextPage
                }
              }, [_vm.isEmployeesNextButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Next")])], 1)], 1)])])];
            },
            proxy: true
          }]),
          model: {
            value: _vm.form.emp,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "emp", $$v);
            },
            expression: "form.emp"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.emp_id ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.emp_id[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "input-group-2",
            label: "Type of Deduction",
            "label-for": "input-2"
          }
        }, [_c("v-select", {
          attrs: {
            name: "type-of-deductions",
            label: "name",
            options: _vm.typeOfDeductions,
            filterable: false,
            loading: _vm.isTypeOfDeductionsDropdownLoading,
            reduce: function reduce(tod) {
              return tod.id;
            },
            id: "type-of-deductions"
          },
          on: {
            search: _vm.onSearchTypeOfDeduction
          },
          scopedSlots: _vm._u([{
            key: "list-header",
            fn: function fn() {
              return [_c("li", {
                staticClass: "mb-2 v-select-option-padding"
              }, [_c("b-link", {
                attrs: {
                  href: "#"
                },
                on: {
                  click: _vm.createTypeOfDeduction
                }
              }, [_c("i", {
                staticClass: "fa fa-plus",
                attrs: {
                  "aria-hidden": "true"
                }
              }), _vm._v("\n                New Type of Deduction\n              ")])], 1)];
            },
            proxy: true
          }, {
            key: "list-footer",
            fn: function fn() {
              return [_c("li", {
                staticClass: "mt-2 mb-1"
              }, [_c("div", {
                staticClass: "d-flex"
              }, [_c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  size: "sm",
                  variant: "light",
                  block: "",
                  squared: "",
                  disabled: !_vm.hasTypeOfDeductionsPrevPage || _vm.isTypeOfDeductionsPrevButtonLoading
                },
                on: {
                  click: _vm.onTypeOfDeductionPrevPage
                }
              }, [_vm.isTypeOfDeductionsPrevButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Prev")])], 1)], 1), _vm._v(" "), _c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  squared: "",
                  size: "sm",
                  disabled: !_vm.hasTypeOfDeductionsNextPage || _vm.isTypeOfDeductionsNextButtonLoading,
                  variant: "light",
                  block: ""
                },
                on: {
                  click: _vm.onTypeOfDeductionNextPage
                }
              }, [_vm.isTypeOfDeductionsNextButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Next")])], 1)], 1)])])];
            },
            proxy: true
          }]),
          model: {
            value: _vm.form.tod_id,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "tod_id", $$v);
            },
            expression: "form.tod_id"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.tod_id ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.tod_id[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "input-group-3",
            label: "Amount",
            "label-for": "input-3"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-3",
            type: "number",
            step: "0.01",
            min: "0.00",
            required: ""
          },
          model: {
            value: _vm.form.amount,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "amount", $$v);
            },
            expression: "form.amount"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.amount ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.amount[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "input-group-4",
            label: "Period",
            "label-for": "input-4"
          }
        }, [_c("v-select", {
          attrs: {
            name: "period",
            label: "date_to",
            options: _vm.payrollPeriods,
            filterable: false,
            loading: _vm.isPayrollPeriodsDropdownLoading,
            reduce: function reduce(p) {
              return p.id;
            },
            id: "period"
          },
          on: {
            search: _vm.onSearchPayrollPeriod
          },
          scopedSlots: _vm._u([{
            key: "list-header",
            fn: function fn() {
              return [_c("li", {
                staticClass: "mb-2 v-select-option-padding"
              }, [_c("b-link", {
                attrs: {
                  href: "#"
                },
                on: {
                  click: _vm.createPayrollPeriod
                }
              }, [_c("i", {
                staticClass: "fa fa-plus",
                attrs: {
                  "aria-hidden": "true"
                }
              }), _vm._v("\n                New Payroll Period\n              ")])], 1)];
            },
            proxy: true
          }, {
            key: "selected-option",
            fn: function fn(_ref) {
              var date_to = _ref.date_to,
                date_from = _ref.date_from;
              return [_c("span", [_vm._v("\n              " + _vm._s("".concat(_vm.formatDate(date_from), " - ").concat(_vm.formatDate(date_to))) + "\n            ")])];
            }
          }, {
            key: "option",
            fn: function fn(_ref2) {
              var date_to = _ref2.date_to,
                date_from = _ref2.date_from;
              return [_c("span", [_vm._v("\n              " + _vm._s("".concat(_vm.formatDate(date_from), " - ").concat(_vm.formatDate(date_to))) + "\n            ")])];
            }
          }, {
            key: "list-footer",
            fn: function fn() {
              return [_c("li", {
                staticClass: "mt-2 mb-1"
              }, [_c("div", {
                staticClass: "d-flex"
              }, [_c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  size: "sm",
                  variant: "light",
                  block: "",
                  squared: "",
                  disabled: !_vm.hasPayrollPeriodsPrevPage || _vm.isPayrollPeriodsPrevButtonLoading
                },
                on: {
                  click: _vm.onPayrollPeriodPrevPage
                }
              }, [_vm.isPayrollPeriodsPrevButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Prev")])], 1)], 1), _vm._v(" "), _c("div", {
                staticClass: "col-sm-6"
              }, [_c("b-button", {
                attrs: {
                  squared: "",
                  size: "sm",
                  disabled: !_vm.hasPayrollPeriodsNextPage || _vm.isPayrollPeriodsNextButtonLoading,
                  variant: "light",
                  block: ""
                },
                on: {
                  click: _vm.onPayrollPeriodNextPage
                }
              }, [_vm.isPayrollPeriodsNextButtonLoading ? _c("b-spinner", {
                attrs: {
                  small: "",
                  label: "Small Spinner"
                }
              }) : _c("span", [_vm._v("Next")])], 1)], 1)])])];
            },
            proxy: true
          }]),
          model: {
            value: _vm.form.period_id,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "period_id", $$v);
            },
            expression: "form.period_id"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.period_id ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.period_id[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
          staticClass: "mt-3"
        }, [_c("b-col", {
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
        }, [_vm._v("\n          " + _vm._s(_vm.form.id ? "SAVE CHANGES" : "SAVE") + "\n        ")])], 1)], 1), _vm._v(" "), _c("TypeOfDeductionsModal", {
          attrs: {
            typeOfDeductionForm: _vm.typeOfDeductionForm,
            isSelf: false
          },
          on: {
            loadTypeOfDeductions: function loadTypeOfDeductions($event) {
              return _vm.loadTypeOfDeductions();
            }
          }
        }), _vm._v(" "), _c("PayrollPeriodsModal", {
          attrs: {
            payrollPeriodForm: _vm.payrollPeriodForm,
            isSelf: false
          },
          on: {
            loadPayrollPeriods: function loadPayrollPeriods($event) {
              return _vm.loadPayrollPeriods();
            }
          }
        })];
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/deductions/modals/deductionsModal.vue"],"names":[],"mappings":";AA2kBA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"deduction-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Deduction' : 'Add Deduction'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"input-group-1\" label=\"Employee Name\" label-for=\"input-1\">\n          <v-select\n            name=\"employees\"\n            label=\"full_name\"\n            v-model=\"form.emp\"\n            :options=\"employees\"\n            :filterable=\"false\"\n            :loading=\"isEmployeesDropdownLoading\"\n            @search=\"onSearchEmployee\"\n            id=\"employees\"\n          >\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasEmployeesPrevPage || isEmployeesPrevButtonLoading\"\n                      @click=\"onEmployeePrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isEmployeesPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasEmployeesNextPage || isEmployeesNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onEmployeeNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isEmployeesNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.emp_id\" class=\"text-danger\">{{ errors.emp_id[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-2\" label=\"Type of Deduction\" label-for=\"input-2\">\n          <v-select\n            name=\"type-of-deductions\"\n            label=\"name\"\n            v-model=\"form.tod_id\"\n            :options=\"typeOfDeductions\"\n            :filterable=\"false\"\n            :loading=\"isTypeOfDeductionsDropdownLoading\"\n            :reduce=\"(tod) => tod.id\"\n            @search=\"onSearchTypeOfDeduction\"\n            id=\"type-of-deductions\"\n          >\n            <template #list-header>\n              <li class=\"mb-2 v-select-option-padding\">\n                <b-link href=\"#\" @click=\"createTypeOfDeduction\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                  New Type of Deduction\n                </b-link>\n              </li>\n            </template>\n\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasTypeOfDeductionsPrevPage || isTypeOfDeductionsPrevButtonLoading\"\n                      @click=\"onTypeOfDeductionPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isTypeOfDeductionsPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasTypeOfDeductionsNextPage || isTypeOfDeductionsNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onTypeOfDeductionNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isTypeOfDeductionsNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.tod_id\" class=\"text-danger\">{{ errors.tod_id[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-3\" label=\"Amount\" label-for=\"input-3\">\n          <b-form-input\n            id=\"input-3\"\n            v-model=\"form.amount\"\n            type=\"number\"\n            step=\"0.01\" \n            min=\"0.00\"\n            required\n          ></b-form-input>\n          <div v-if=\"errors && errors.amount\" class=\"text-danger\">{{ errors.amount[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-4\" label=\"Period\" label-for=\"input-4\">\n          <v-select\n            name=\"period\"\n            label=\"date_to\"\n            v-model=\"form.period_id\"\n            :options=\"payrollPeriods\"\n            :filterable=\"false\"\n            :loading=\"isPayrollPeriodsDropdownLoading\"\n            :reduce=\"(p) => p.id\"\n            @search=\"onSearchPayrollPeriod\"\n            id=\"period\"\n          >\n\n            <template #list-header>\n              <li class=\"mb-2 v-select-option-padding\">\n                <b-link href=\"#\" @click=\"createPayrollPeriod\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                  New Payroll Period\n                </b-link>\n              </li>\n            </template>\n            <template #selected-option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasPayrollPeriodsPrevPage || isPayrollPeriodsPrevButtonLoading\"\n                      @click=\"onPayrollPeriodPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPayrollPeriodsPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasPayrollPeriodsNextPage || isPayrollPeriodsNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onPayrollPeriodNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isPayrollPeriodsNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.period_id\" class=\"text-danger\">{{ errors.period_id[0] }}</div>\n        </b-form-group>\n        \n        \n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n      <TypeOfDeductionsModal :typeOfDeductionForm=\"typeOfDeductionForm\" @loadTypeOfDeductions=\"loadTypeOfDeductions()\" :isSelf=\"false\"></TypeOfDeductionsModal>\n      <PayrollPeriodsModal :payrollPeriodForm=\"payrollPeriodForm\" @loadPayrollPeriods=\"loadPayrollPeriods()\" :isSelf=\"false\"></PayrollPeriodsModal>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\n\nimport toast from \"../../../../helpers/toast.js\";\nimport TypeOfDeductionsModal from \"../../deductionsTypes/modals/typeOfDeductionsModal.vue\";\nimport PayrollPeriodsModal from \"../../payrollPeriod/modals/payrollPeriodsModal.vue\";\nimport Form from \"../../../../helpers/form.js\";\nexport default {\n  mixins: [toast],\n\n  props: [\"deductionForm\"],\n\n  components: {\n    TypeOfDeductionsModal,\n    PayrollPeriodsModal\n  },\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.deductionForm,\n      errors: {},\n      isEmployeesDropdownLoading: false,\n      isEmployeesNextButtonLoading: false,\n      isEmployeesPrevButtonLoading: false,\n      employeesCurrentPage: 1,\n      employeesPerPage: 10,\n      employeesLastPage: 0,\n      employeesSearched: \"\",\n      employees: [],\n\n      isTypeOfDeductionsDropdownLoading: false,\n      isTypeOfDeductionsNextButtonLoading: false,\n      isTypeOfDeductionsPrevButtonLoading: false,\n      typeOfDeductionsCurrentPage: 1,\n      typeOfDeductionsPerPage: 10,\n      typeOfDeductionsLastPage: 0,\n      typeOfDeductionsSearched: \"\",\n      typeOfDeductions: [],\n\n      isPayrollPeriodsDropdownLoading: false,\n      isPayrollPeriodsNextButtonLoading: false,\n      isPayrollPeriodsPrevButtonLoading: false,\n      payrollPeriodsCurrentPage: 1,\n      payrollPeriodsPerPage: 10,\n      payrollPeriodsLastPage: 0,\n      payrollPeriodsSearched: \"\",\n      payrollPeriods: [],\n\n      statuses: [\n        { text: 'Deducted', value: 'Deducted' },\n        { text: 'Not Yet Deducted', value: 'Not Yet Deducted' }\n      ],\n\n      typeOfDeductionForm: new Form({\n        id: \"\",\n        name: \"\",\n      }),\n\n      payrollPeriodForm: new Form({\n        id: \"\",\n        date_from: \"\",\n        date_to: \"\",\n      }),\n    };\n  },\n\n  mounted() {\n    this.loadEmployees();\n    this.loadTypeOfDeductions();\n    this.loadPayrollPeriods();\n  },\n\n  methods: {\n    ...mapActions(\"deduction\", [\"createDeduction\", \"updateDeduction\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"deduction-modal\");\n      this.errors = {};\n\n    },\n\n    loadEmployees() {\n      let params = {\n        per_page: 10,\n        page: this.employeesCurrentPage,\n        search: this.employeesSearched,\n      }\n      axios\n        .get(\"/api/employees\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.employees = data.data;\n          this.employeesLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isEmployeesDropdownLoading = false;\n          this.isEmployeesNextButtonLoading = false;\n          this.isEmployeesPrevButtonLoading = false;\n        });\n    },\n\n    onEmployeeNextPage() {\n      this.isEmployeesNextButtonLoading = true;\n      this.employeesCurrentPage += 1;\n      this.loadEmployees();\n    },\n\n    onEmployeePrevPage() {\n      this.isEmployeesPrevButtonLoading = true;\n      this.employeesCurrentPage -= 1;\n      this.loadEmployees();\n    },\n\n    onSearchEmployee(search, loading) {\n      this.isEmployeesDropdownLoading = true;\n      this.performSearchEmployee(search);\n    },\n\n    performSearchEmployee: _.debounce(function (search) {\n      this.employeesSearched = search;\n\n      this.loadEmployees();\n    }, 1000),\n\n    loadTypeOfDeductions() {\n      let params = {\n        per_page: 10,\n        page: this.typeOfDeductionsCurrentPage,\n        search: this.typeOfDeductionsSearched,\n      }\n      axios\n        .get(\"/api/type-of-deductions\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.typeOfDeductions = data.data;\n          this.typeOfDeductionsLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isTypeOfDeductionsDropdownLoading = false;\n          this.isTypeOfDeductionsNextButtonLoading = false;\n          this.isTypeOfDeductionsPrevButtonLoading = false;\n        });\n    },\n\n    onTypeOfDeductionNextPage() {\n      this.isTypeOfDeductionsNextButtonLoading = true;\n      this.typeOfDeductionsCurrentPage += 1;\n      this.loadTypeOfDeductions();\n    },\n\n    onTypeOfDeductionPrevPage() {\n      this.isTypeOfDeductionsPrevButtonLoading = true;\n      this.typeOfDeductionsCurrentPage -= 1;\n      this.loadTypeOfDeductions();\n    },\n\n    onSearchTypeOfDeduction(search, loading) {\n      this.isTypeOfDeductionsDropdownLoading = true;\n      this.performSearchTypeOfDeduction(search);\n    },\n\n    performSearchTypeOfDeduction: _.debounce(function (search) {\n      this.typeOfDeductionsSearched = search;\n\n      this.loadTypeOfDeductions();\n    }, 1000),\n\n    loadPayrollPeriods() {\n      let params = {\n        per_page: 10,\n        page: this.payrollPeriodsCurrentPage,\n        search: this.payrollPeriodsSearched,\n      }\n      axios\n        .get(\"/api/payroll-periods\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.payrollPeriods = data.data;\n          this.payrollPeriodsLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isPayrollPeriodsDropdownLoading = false;\n          this.isPayrollPeriodsNextButtonLoading = false;\n          this.isPayrollPeriodsPrevButtonLoading = false;\n        });\n    },\n\n    onPayrollPeriodNextPage() {\n      this.isPayrollPeriodsNextButtonLoading = true;\n      this.payrollPeriodsCurrentPage += 1;\n      this.loadPayrollPeriods();\n    },\n\n    onPayrollPeriodPrevPage() {\n      this.isPayrollPeriodsPrevButtonLoading = true;\n      this.payrollPeriodsCurrentPage -= 1;\n      this.loadPayrollPeriods();\n    },\n\n    onSearchPayrollPeriod(search, loading) {\n      this.isPayrollPeriodsDropdownLoading = true;\n      this.performSearchPayrollPeriod(search);\n    },\n\n    performSearchPayrollPeriod: _.debounce(function (search) {\n      this.payrollPeriodsSearched = search;\n\n      this.loadPayrollPeriods();\n    }, 1000),\n\n    handleCreateDeduction() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\temp_id: this.form.emp.id,\n\t\t\t\ttod_id: this.form.tod_id,\n\t\t\t\tamount: this.form.amount,\n\t\t\t\tperiod_id: this.form.period_id\n\t\t\t}\n\n      this.createDeduction(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.emp.full_name} has been created as new Deduction`\n          );\n          this.$emit(\"loadDeductions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdateDeduction() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\temp_id: this.form.emp.id,\n\t\t\t\ttod_id: this.form.tod_id,\n\t\t\t\tamount: this.form.amount,\n\t\t\t\tperiod_id: this.form.period_id\n\t\t\t}\n\n      this.updateDeduction(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Deduction ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadDeductions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    createTypeOfDeduction() {\n      this.typeOfDeductionForm.reset();\n      this.typeOfDeductionForm.id = '';\n      this.typeOfDeductionForm.name = '';\n      this.$bvModal.show('type-of-deduction-modal');\n    },\n\n    createPayrollPeriod() {\n      this.payrollPeriodForm.reset();\n      this.payrollPeriodForm.id = '';\n      this.payrollPeriodForm.date_from = '';\n      this.payrollPeriodForm.date_to = '';\n      this.$bvModal.show('payroll-period-modal');\n    },\n\n    formatDate(date) {\n      return this.moment(date).format('DD MMMM YYYY');\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdateDeduction();\n      } else {\n        this.handleCreateDeduction();\n      }\n    },\n  \n  },\n\n  computed: {\n    hasEmployeesNextPage() {\n      return (\n        this.employeesCurrentPage !== this.employeesLastPage\n      );\n    },\n\n    hasEmployeesPrevPage() {\n      return this.employeesCurrentPage > 1;\n    },\n\n    hasTypeOfDeductionsNextPage() {\n      return (\n        this.typeOfDeductionsCurrentPage !== this.typeOfDeductionsLastPage\n      );\n    },\n\n    hasTypeOfDeductionsPrevPage() {\n      return this.typeOfDeductionsCurrentPage > 1;\n    },\n\n    hasPayrollPeriodsNextPage() {\n      return (\n        this.payrollPeriodsCurrentPage !== this.payrollPeriodsLastPage\n      );\n    },\n\n    hasPayrollPeriodsPrevPage() {\n      return this.payrollPeriodsCurrentPage > 1;\n    },\n  }\n\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_style_index_0_id_33d0c30d_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_style_index_0_id_33d0c30d_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_style_index_0_id_33d0c30d_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/backend/views/deductions/components/index.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backend/views/deductions/components/index.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3b003120 */ "./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductions/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deductionsDeleteModal.vue?vue&type=template&id=297a37a2 */ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2");
/* harmony import */ var _deductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deductionsDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _deductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__.render,
  _deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsModal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsModal.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deductionsModal.vue?vue&type=template&id=33d0c30d */ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d");
/* harmony import */ var _deductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deductionsModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js");
/* harmony import */ var _deductionsModal_vue_vue_type_style_index_0_id_33d0c30d_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css */ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__.render,
  _deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/deductions/modals/deductionsModal.vue"
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

/***/ "./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3b003120__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3b003120 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/components/index.vue?vue&type=template&id=3b003120");


/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsDeleteModal_vue_vue_type_template_id_297a37a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsDeleteModal.vue?vue&type=template&id=297a37a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsDeleteModal.vue?vue&type=template&id=297a37a2");


/***/ }),

/***/ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_template_id_33d0c30d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsModal.vue?vue&type=template&id=33d0c30d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=template&id=33d0c30d");


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

/***/ "./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_deductionsModal_vue_vue_type_style_index_0_id_33d0c30d_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductions/modals/deductionsModal.vue?vue&type=style&index=0&id=33d0c30d&lang=css");


/***/ }),

/***/ "./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_typeOfDeductionsModal_vue_vue_type_style_index_0_id_25e39cc3_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/deductionsTypes/modals/typeOfDeductionsModal.vue?vue&type=style&index=0&id=25e39cc3&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2RlZHVjdGlvbnNfY29tcG9uZW50c19pbmRleF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtFQUNmTSxVQUFBO0lBQ0FILGVBQUEsRUFBQUEsbUVBQUE7SUFDQUMscUJBQUEsRUFBQUEseUVBQUFBO0VBQ0E7RUFDQUcsSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQUMsUUFBQTtNQUNBQyxZQUFBO01BQ0FDLFNBQUE7TUFDQUMsTUFBQTtNQUNBQyxRQUFBO01BQ0FWLGNBQUEsRUFBQUEsb0RBQUE7TUFDQVcsU0FBQTtNQUNBQyxRQUFBO01BQ0FDLE9BQUE7UUFDQUMsRUFBQTtRQUNBQyxJQUFBO1FBQ0FDLEtBQUE7TUFDQTtNQUNBQyxjQUFBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1VBQUFDLEtBQUE7UUFBQTtNQUNBLEVBQ0E7TUFFQUMsYUFBQSxNQUFBdEIsd0RBQUE7UUFDQXVCLEVBQUE7UUFDQUMsR0FBQTtRQUNBQyxNQUFBO1FBQ0FDLE1BQUE7UUFDQUMsU0FBQTtNQUNBO01BRUFDLE9BQUE7SUFDQTtFQUNBO0VBRUFDLE9BQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0FuQyxnREFBQTtJQUNBb0MsZUFBQSxXQUFBQSxnQkFBQTtNQUNBLEtBQUFULGFBQUEsQ0FBQVUsS0FBQTtNQUNBLEtBQUFWLGFBQUEsQ0FBQUMsRUFBQTtNQUNBLEtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvbW9kYWxzL2RlZHVjdGlvbnNEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvbW9kYWxzL2RlZHVjdGlvbnNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zL21vZGFscy9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvbW9kYWxzL2RlZHVjdGlvbnNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9mb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZT82MWZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT9hYzIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2UzN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZT9mMTNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT9lNzQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2NkM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9jb21wb25lbnRzL2luZGV4LnZ1ZT9iMmRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvbW9kYWxzL2RlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/N2I2ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zL21vZGFscy9kZWR1Y3Rpb25zTW9kYWwudnVlPzhlZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlPzMzOTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/YjQ0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zL2NvbXBvbmVudHMvaW5kZXgudnVlP2E4OTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZT81NWUxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvbW9kYWxzL2RlZHVjdGlvbnNNb2RhbC52dWU/OWZmZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/MDAyMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT8yMTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvY29tcG9uZW50cy9pbmRleC52dWU/YTUyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zL21vZGFscy9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlPzg4MjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZT9iYjVhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT83Mjk2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2QyNmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZT81NWEwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT9mNWExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlPzg2MzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8aDEgY2xhc3M9XCJtLTAgbWItMiBmb250LXdlaWdodC1ib2xkIHRleHQtaW5mb1wiPkRlZHVjdGlvbnM8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxiLWJ1dHRvbiBcbiAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJjcmVhdGVEZWR1Y3Rpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWItM1wiPlxuICAgICAgICAgICAgPGItZm9ybSBpbmxpbmU+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLXNtLTJcIiBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIj5cbiAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2hvd0VudHJpZXNPcHRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxiLW92ZXJsYXkgOnNob3c9XCJpc092ZXJsYXlcIiByb3VuZGVkPVwic21cIj5cbiAgICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgICBob3ZlclxuICAgICAgICAgICAgICAgIHN0cmlwZWRcbiAgICAgICAgICAgICAgICBzaG93LWVtcHR5XG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXMuZGF0YVwiXG4gICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMFwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChlbXBsb3llZV9uYW1lKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZW1wbG95ZWUuZnVsbF9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbCh0eXBlX29mX2RlZHVjdGlvbik9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLnR5cGVfb2ZfZGVkdWN0aW9uLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGFtb3VudCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLmFtb3VudC50b0ZpeGVkKDIpIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChwZXJpb2QpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRhdGEuaXRlbS5wYXlyb2xsX3BlcmlvZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGEuaXRlbS5wYXlyb2xsX3BlcmlvZC5kYXRlX2Zyb20pfSAtICR7Zm9ybWF0RGF0ZShkYXRhLml0ZW0ucGF5cm9sbF9wZXJpb2QuZGF0ZV90byl9YCB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoYWN0aW9ucyk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdERlZHVjdGlvbihkYXRhLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFRElUXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIEBjbGljaz1cImRlbGV0ZURlZHVjdGlvbihkYXRhLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcbiAgICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8dGVtcGxhdGUgdi1zbG90OnRhYmxlLWJ1c3k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IC0tPlxuICAgICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8L2Itb3ZlcmxheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+e3tgU2hvd2luZyAke3Nob3dpbmcuZnJvbX0gdG8gJHtzaG93aW5nLnRvfSBvZiAke3Nob3dpbmcudG90YWx9IGVudHJpZXNgfX08L3A+XG4gICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwibXQtMSBtYi0wXCIgdi1odG1sPVwic2hvd2luZ1RpdGxlXCIgLz4gLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8Yi1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItMFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA6dG90YWwtcm93cz1cInRhYmxlVG90YWxSb3dzXCJcbiAgICAgICAgICAgICAgOnBlci1wYWdlPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPERlZHVjdGlvbnNNb2RhbCA6ZGVkdWN0aW9uRm9ybT1cImRlZHVjdGlvbkZvcm1cIiBAbG9hZERlZHVjdGlvbnM9XCJsb2FkRGVkdWN0aW9ucygpXCI+PC9EZWR1Y3Rpb25zTW9kYWw+XG4gICAgPERlZHVjdGlvbnNEZWxldGVNb2RhbCA6ZGVkdWN0aW9uRm9ybT1cImRlZHVjdGlvbkZvcm1cIiBAbG9hZERlZHVjdGlvbnM9XCJsb2FkRGVkdWN0aW9ucygpXCI+PC9EZWR1Y3Rpb25zRGVsZXRlTW9kYWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgc2hvd0VudHJpZXNPcHQgfSBmcm9tIFwiQGpzL2RhdGFcIjtcbmltcG9ydCBEZWR1Y3Rpb25zTW9kYWwgZnJvbSBcIi4uL21vZGFscy9kZWR1Y3Rpb25zTW9kYWwudnVlXCI7XG5pbXBvcnQgRGVkdWN0aW9uc0RlbGV0ZU1vZGFsIGZyb20gXCIuLi9tb2RhbHMvZGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRGVkdWN0aW9uc01vZGFsLFxuICAgIERlZHVjdGlvbnNEZWxldGVNb2RhbFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwZXJfcGFnZTogMTAsXG4gICAgICBjdXJyZW50X3BhZ2U6IDEsXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICBzZWFyY2hlZDogXCJcIixcbiAgICAgIHNob3dFbnRyaWVzT3B0LFxuICAgICAgaXNPdmVybGF5OiBmYWxzZSxcbiAgICAgIHRvdGFsUm93OiAwLFxuICAgICAgc2hvd2luZzoge1xuICAgICAgICB0bzogMCxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAgdGFibGVUb3RhbFJvd3M6IFwiXCIsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJlbXBsb3llZV9uYW1lXCIsXG4gICAgICAgICAgbGFiZWw6IFwiTmFtZSBvZiBFbXBsb3llZVwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMjAlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJ0eXBlX29mX2RlZHVjdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBcIlR5cGUgb2YgRGVkdWN0aW9uXCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFtb3VudFwiLFxuICAgICAgICAgIGxhYmVsOiBcIkFtb3VudFwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMjAlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJwZXJpb2RcIixcbiAgICAgICAgICBsYWJlbDogXCJQZXJpb2RcIixcbiAgICAgICAgICAvLyB0aFN0eWxlOiB7IHdpZHRoOiBcIjIwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICB0aENsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgdGRDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTAlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG5cbiAgICAgIGRlZHVjdGlvbkZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgIGVtcDogXCJcIixcbiAgICAgICAgdG9kX2lkOiBcIlwiLFxuICAgICAgICBhbW91bnQ6IFwiXCIsXG4gICAgICAgIHBlcmlvZF9pZDogXCJcIixcbiAgICAgIH0pLFxuXG4gICAgICBtb2RhbElkOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJkZWR1Y3Rpb25cIiwgW1wibG9hZEl0ZW1zXCJdKSxcbiAgICBjcmVhdGVEZWR1Y3Rpb24oKSB7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS5pZCA9IFwiXCI7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0uZW1wID0gXCJcIjtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS50b2RfaWQgPSBcIlwiO1xuICAgICAgdGhpcy5kZWR1Y3Rpb25Gb3JtLmFtb3VudCA9IFwiXCI7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0ucGVyaW9kX2lkID0gXCJcIjtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJkZWR1Y3Rpb24tbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBlZGl0RGVkdWN0aW9uKGRhdGEpIHtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5kZWR1Y3Rpb25Gb3JtLmlkID0gZGF0YS5pZDtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS5lbXAgPSBkYXRhLmVtcGxveWVlO1xuICAgICAgdGhpcy5kZWR1Y3Rpb25Gb3JtLnRvZF9pZCA9IGRhdGEudHlwZV9vZl9kZWR1Y3Rpb24uaWQ7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0uYW1vdW50ID0gZGF0YS5hbW91bnQ7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0ucGVyaW9kX2lkID0gZGF0YS5wYXlyb2xsX3BlcmlvZCA/IGRhdGEucGF5cm9sbF9wZXJpb2QuaWQgOiBcIlwiO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcImRlZHVjdGlvbi1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGRlbGV0ZURlZHVjdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS5pZCA9IGRhdGEuaWQ7XG4gICAgICB0aGlzLmRlZHVjdGlvbkZvcm0uZW1wID0gZGF0YS5lbXBsb3llZTtcbiAgICAgIHRoaXMuZGVkdWN0aW9uRm9ybS50b2RfaWQgPSBkYXRhLnR5cGVfb2ZfZGVkdWN0aW9uLmlkO1xuICAgICAgdGhpcy5kZWR1Y3Rpb25Gb3JtLmFtb3VudCA9IGRhdGEuYW1vdW50O1xuICAgICAgdGhpcy5kZWR1Y3Rpb25Gb3JtLnBlcmlvZF9pZCA9IGRhdGEucGF5cm9sbF9wZXJpb2QgPyBkYXRhLnBheXJvbGxfcGVyaW9kLmlkIDogXCJcIjtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJkZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgbG9hZERlZHVjdGlvbnMoKSB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBwZXJfcGFnZTogdGhpcy5wZXJfcGFnZSxcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50X3BhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZEl0ZW1zKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxlVG90YWxSb3dzID0gdGhpcy5pdGVtcy50b3RhbFxuICAgICAgICAgIHRoaXMuc2hvd2luZy50byA9IHRoaXMuaXRlbXMudG87XG4gICAgICAgICAgdGhpcy5zaG93aW5nLmZyb20gPSB0aGlzLml0ZW1zLmZyb207XG4gICAgICAgICAgdGhpcy5zaG93aW5nLnRvdGFsID0gdGhpcy5pdGVtcy50b3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBfLmRlYm91bmNlKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnNlYXJjaGVkID0gcXVlcnlcbiAgICB9LCAxMDAwKVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZERlZHVjdGlvbnMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJkZWR1Y3Rpb25cIiwge1xuICAgICAgaXRlbXM6IFwiZ2V0RGVkdWN0aW9uc1wiLFxuICAgIH0pLFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY3VycmVudF9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWREZWR1Y3Rpb25zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBlcl9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWREZWR1Y3Rpb25zKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpXG4gICAgfSxcblxuICAgIHNlYXJjaGVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWREZWR1Y3Rpb25zKClcbiAgICAgIH1cbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbiAgPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cImRlZHVjdGlvbi1kZWxldGUtbW9kYWxcIlxuICAgIGhpZGUtaGVhZGVyXG4gICAgaGlkZS1mb290ZXJcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxuICAgIGNlbnRlcmVkXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItcm93PlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoND5DT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRDwvaDQ+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt7IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7Zm9ybS5lbXAuZnVsbF9uYW1lfSBmcm9tIERlZHVjdGlvbiByZWNvcmRzP2AgfX1cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIE5PXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICBZRVNcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wiZGVkdWN0aW9uRm9ybVwiXSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMuZGVkdWN0aW9uRm9ybSxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwiZGVkdWN0aW9uXCIsIFtcImRlbGV0ZURlZHVjdGlvblwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcImRlZHVjdGlvbi1kZWxldGUtbW9kYWxcIik7XG4gICAgICBcbiAgICB9LFxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBcblx0XHRcdGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGlkOiB0aGlzLmZvcm0uaWQsXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuZGVsZXRlRGVkdWN0aW9uKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBERUxFVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIERlZHVjdGlvbiByZWNvcmRzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkRGVkdWN0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJkZWR1Y3Rpb24tZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XG4gICAgfSxcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwiZGVkdWN0aW9uLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgRGVkdWN0aW9uJyA6ICdBZGQgRGVkdWN0aW9uJ319PC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXG4gICAgICAgIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItZm9ybT5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTFcIiBsYWJlbD1cIkVtcGxveWVlIE5hbWVcIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPHYtc2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiZnVsbF9uYW1lXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmVtcFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cImVtcGxveWVlc1wiXG4gICAgICAgICAgICA6ZmlsdGVyYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwiaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmdcIlxuICAgICAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoRW1wbG95ZWVcIlxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10LTIgbWItMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWhhc0VtcGxveWVlc1ByZXZQYWdlIHx8IGlzRW1wbG95ZWVzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uRW1wbG95ZWVQcmV2UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNFbXBsb3llZXNQcmV2QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbCBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5QcmV2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWhhc0VtcGxveWVlc05leHRQYWdlIHx8IGlzRW1wbG95ZWVzTmV4dEJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkVtcGxveWVlTmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc0VtcGxveWVlc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZW1wX2lkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5lbXBfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTJcIiBsYWJlbD1cIlR5cGUgb2YgRGVkdWN0aW9uXCIgbGFiZWwtZm9yPVwiaW5wdXQtMlwiPlxuICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInR5cGUtb2YtZGVkdWN0aW9uc1wiXG4gICAgICAgICAgICBsYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udG9kX2lkXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwidHlwZU9mRGVkdWN0aW9uc1wiXG4gICAgICAgICAgICA6ZmlsdGVyYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwiaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nXCJcbiAgICAgICAgICAgIDpyZWR1Y2U9XCIodG9kKSA9PiB0b2QuaWRcIlxuICAgICAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoVHlwZU9mRGVkdWN0aW9uXCJcbiAgICAgICAgICAgIGlkPVwidHlwZS1vZi1kZWR1Y3Rpb25zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtaGVhZGVyPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0yIHYtc2VsZWN0LW9wdGlvbi1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGItbGluayBocmVmPVwiI1wiIEBjbGljaz1cImNyZWF0ZVR5cGVPZkRlZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgTmV3IFR5cGUgb2YgRGVkdWN0aW9uXG4gICAgICAgICAgICAgICAgPC9iLWxpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNUeXBlT2ZEZWR1Y3Rpb25zUHJldlBhZ2UgfHwgaXNUeXBlT2ZEZWR1Y3Rpb25zUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uVHlwZU9mRGVkdWN0aW9uUHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlByZXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzVHlwZU9mRGVkdWN0aW9uc05leHRQYWdlIHx8IGlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25UeXBlT2ZEZWR1Y3Rpb25OZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMudG9kX2lkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy50b2RfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTNcIiBsYWJlbD1cIkFtb3VudFwiIGxhYmVsLWZvcj1cImlucHV0LTNcIj5cbiAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICBpZD1cImlucHV0LTNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uYW1vdW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgc3RlcD1cIjAuMDFcIiBcbiAgICAgICAgICAgIG1pbj1cIjAuMDBcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5hbW91bnRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmFtb3VudFswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtNFwiIGxhYmVsPVwiUGVyaW9kXCIgbGFiZWwtZm9yPVwiaW5wdXQtNFwiPlxuICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInBlcmlvZFwiXG4gICAgICAgICAgICBsYWJlbD1cImRhdGVfdG9cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGVyaW9kX2lkXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwicGF5cm9sbFBlcmlvZHNcIlxuICAgICAgICAgICAgOmZpbHRlcmFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmdcIlxuICAgICAgICAgICAgOnJlZHVjZT1cIihwKSA9PiBwLmlkXCJcbiAgICAgICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFBheXJvbGxQZXJpb2RcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RcIlxuICAgICAgICAgID5cblxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWItMiB2LXNlbGVjdC1vcHRpb24tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxiLWxpbmsgaHJlZj1cIiNcIiBAY2xpY2s9XCJjcmVhdGVQYXlyb2xsUGVyaW9kXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICBOZXcgUGF5cm9sbCBQZXJpb2RcbiAgICAgICAgICAgICAgICA8L2ItbGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGVkLW9wdGlvbj1cInsgZGF0ZV90bywgZGF0ZV9mcm9tIH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3sgYCR7Zm9ybWF0RGF0ZShkYXRlX2Zyb20pfSAtICR7Zm9ybWF0RGF0ZShkYXRlX3RvKX1gIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPVwieyBkYXRlX3RvLCBkYXRlX2Zyb20gfVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWZvb3Rlcj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXQtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzUGF5cm9sbFBlcmlvZHNQcmV2UGFnZSB8fCBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGF5cm9sbFBlcmlvZFByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlIHx8IGlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMucGVyaW9kX2lkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5wZXJpb2RfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvYi1mb3JtPlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8VHlwZU9mRGVkdWN0aW9uc01vZGFsIDp0eXBlT2ZEZWR1Y3Rpb25Gb3JtPVwidHlwZU9mRGVkdWN0aW9uRm9ybVwiIEBsb2FkVHlwZU9mRGVkdWN0aW9ucz1cImxvYWRUeXBlT2ZEZWR1Y3Rpb25zKClcIiA6aXNTZWxmPVwiZmFsc2VcIj48L1R5cGVPZkRlZHVjdGlvbnNNb2RhbD5cbiAgICAgIDxQYXlyb2xsUGVyaW9kc01vZGFsIDpwYXlyb2xsUGVyaW9kRm9ybT1cInBheXJvbGxQZXJpb2RGb3JtXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cImxvYWRQYXlyb2xsUGVyaW9kcygpXCIgOmlzU2VsZj1cImZhbHNlXCI+PC9QYXlyb2xsUGVyaW9kc01vZGFsPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcblxuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXCI7XG5pbXBvcnQgVHlwZU9mRGVkdWN0aW9uc01vZGFsIGZyb20gXCIuLi8uLi9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWVcIjtcbmltcG9ydCBQYXlyb2xsUGVyaW9kc01vZGFsIGZyb20gXCIuLi8uLi9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IFtcImRlZHVjdGlvbkZvcm1cIl0sXG5cbiAgY29tcG9uZW50czoge1xuICAgIFR5cGVPZkRlZHVjdGlvbnNNb2RhbCxcbiAgICBQYXlyb2xsUGVyaW9kc01vZGFsXG4gIH0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLmRlZHVjdGlvbkZvcm0sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmc6IGZhbHNlLFxuICAgICAgaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXG4gICAgICBpc0VtcGxveWVlc1ByZXZCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVtcGxveWVlc0N1cnJlbnRQYWdlOiAxLFxuICAgICAgZW1wbG95ZWVzUGVyUGFnZTogMTAsXG4gICAgICBlbXBsb3llZXNMYXN0UGFnZTogMCxcbiAgICAgIGVtcGxveWVlc1NlYXJjaGVkOiBcIlwiLFxuICAgICAgZW1wbG95ZWVzOiBbXSxcblxuICAgICAgaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZTogMSxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNQZXJQYWdlOiAxMCxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNMYXN0UGFnZTogMCxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNTZWFyY2hlZDogXCJcIixcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnM6IFtdLFxuXG4gICAgICBpc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXG4gICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZTogMSxcbiAgICAgIHBheXJvbGxQZXJpb2RzUGVyUGFnZTogMTAsXG4gICAgICBwYXlyb2xsUGVyaW9kc0xhc3RQYWdlOiAwLFxuICAgICAgcGF5cm9sbFBlcmlvZHNTZWFyY2hlZDogXCJcIixcbiAgICAgIHBheXJvbGxQZXJpb2RzOiBbXSxcblxuICAgICAgc3RhdHVzZXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnRGVkdWN0ZWQnLCB2YWx1ZTogJ0RlZHVjdGVkJyB9LFxuICAgICAgICB7IHRleHQ6ICdOb3QgWWV0IERlZHVjdGVkJywgdmFsdWU6ICdOb3QgWWV0IERlZHVjdGVkJyB9XG4gICAgICBdLFxuXG4gICAgICB0eXBlT2ZEZWR1Y3Rpb25Gb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgfSksXG5cbiAgICAgIHBheXJvbGxQZXJpb2RGb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBkYXRlX2Zyb206IFwiXCIsXG4gICAgICAgIGRhdGVfdG86IFwiXCIsXG4gICAgICB9KSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XG4gICAgdGhpcy5sb2FkVHlwZU9mRGVkdWN0aW9ucygpO1xuICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJkZWR1Y3Rpb25cIiwgW1wiY3JlYXRlRGVkdWN0aW9uXCIsIFwidXBkYXRlRGVkdWN0aW9uXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwiZGVkdWN0aW9uLW1vZGFsXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcblxuICAgIH0sXG5cbiAgICBsb2FkRW1wbG95ZWVzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICBwYWdlOiB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuZW1wbG95ZWVzU2VhcmNoZWQsXG4gICAgICB9XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9lbXBsb3llZXNcIiwgeyBwYXJhbXMgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5lbXBsb3llZXNMYXN0UGFnZSA9IGRhdGEubGFzdF9wYWdlO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNFbXBsb3llZXNQcmV2QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25FbXBsb3llZU5leHRQYWdlKCkge1xuICAgICAgdGhpcy5pc0VtcGxveWVlc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgKz0gMTtcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xuICAgIH0sXG5cbiAgICBvbkVtcGxveWVlUHJldlBhZ2UoKSB7XG4gICAgICB0aGlzLmlzRW1wbG95ZWVzUHJldkJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSAtPSAxO1xuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XG4gICAgfSxcblxuICAgIG9uU2VhcmNoRW1wbG95ZWUoc2VhcmNoLCBsb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaEVtcGxveWVlKHNlYXJjaCk7XG4gICAgfSxcblxuICAgIHBlcmZvcm1TZWFyY2hFbXBsb3llZTogXy5kZWJvdW5jZShmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICB0aGlzLmVtcGxveWVlc1NlYXJjaGVkID0gc2VhcmNoO1xuXG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcbiAgICB9LCAxMDAwKSxcblxuICAgIGxvYWRUeXBlT2ZEZWR1Y3Rpb25zKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICBwYWdlOiB0aGlzLnR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZSxcbiAgICAgICAgc2VhcmNoOiB0aGlzLnR5cGVPZkRlZHVjdGlvbnNTZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3R5cGUtb2YtZGVkdWN0aW9uc1wiLCB7IHBhcmFtcyB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbnMgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25zTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1R5cGVPZkRlZHVjdGlvbnNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNUeXBlT2ZEZWR1Y3Rpb25zUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uVHlwZU9mRGVkdWN0aW9uTmV4dFBhZ2UoKSB7XG4gICAgICB0aGlzLmlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uc0N1cnJlbnRQYWdlICs9IDE7XG4gICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKCk7XG4gICAgfSxcblxuICAgIG9uVHlwZU9mRGVkdWN0aW9uUHJldlBhZ2UoKSB7XG4gICAgICB0aGlzLmlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uc0N1cnJlbnRQYWdlIC09IDE7XG4gICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKCk7XG4gICAgfSxcblxuICAgIG9uU2VhcmNoVHlwZU9mRGVkdWN0aW9uKHNlYXJjaCwgbG9hZGluZykge1xuICAgICAgdGhpcy5pc1R5cGVPZkRlZHVjdGlvbnNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoVHlwZU9mRGVkdWN0aW9uKHNlYXJjaCk7XG4gICAgfSxcblxuICAgIHBlcmZvcm1TZWFyY2hUeXBlT2ZEZWR1Y3Rpb246IF8uZGVib3VuY2UoZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25zU2VhcmNoZWQgPSBzZWFyY2g7XG5cbiAgICAgIHRoaXMubG9hZFR5cGVPZkRlZHVjdGlvbnMoKTtcbiAgICB9LCAxMDAwKSxcblxuICAgIGxvYWRQYXlyb2xsUGVyaW9kcygpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgcGFnZTogdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3BheXJvbGwtcGVyaW9kc1wiLCB7IHBhcmFtcyB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzID0gZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNMYXN0UGFnZSA9IGRhdGEubGFzdF9wYWdlO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25QYXlyb2xsUGVyaW9kTmV4dFBhZ2UoKSB7XG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgKz0gMTtcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gICAgfSxcblxuICAgIG9uUGF5cm9sbFBlcmlvZFByZXZQYWdlKCkge1xuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlIC09IDE7XG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xuICAgIH0sXG5cbiAgICBvblNlYXJjaFBheXJvbGxQZXJpb2Qoc2VhcmNoLCBsb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZDogXy5kZWJvdW5jZShmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzU2VhcmNoZWQgPSBzZWFyY2g7XG5cbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gICAgfSwgMTAwMCksXG5cbiAgICBoYW5kbGVDcmVhdGVEZWR1Y3Rpb24oKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBcblx0XHRcdGxldCBwYXJhbXMgPSB7XG5cdFx0XHRcdGVtcF9pZDogdGhpcy5mb3JtLmVtcC5pZCxcblx0XHRcdFx0dG9kX2lkOiB0aGlzLmZvcm0udG9kX2lkLFxuXHRcdFx0XHRhbW91bnQ6IHRoaXMuZm9ybS5hbW91bnQsXG5cdFx0XHRcdHBlcmlvZF9pZDogdGhpcy5mb3JtLnBlcmlvZF9pZFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmNyZWF0ZURlZHVjdGlvbihwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBuZXcgRGVkdWN0aW9uYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWREZWR1Y3Rpb25zXCIpO1xuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlVXBkYXRlRGVkdWN0aW9uKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0XHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXG5cdFx0XHRcdHRvZF9pZDogdGhpcy5mb3JtLnRvZF9pZCxcblx0XHRcdFx0YW1vdW50OiB0aGlzLmZvcm0uYW1vdW50LFxuXHRcdFx0XHRwZXJpb2RfaWQ6IHRoaXMuZm9ybS5wZXJpb2RfaWRcblx0XHRcdH1cblxuICAgICAgdGhpcy51cGRhdGVEZWR1Y3Rpb24ocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBVUERBVEVEXCIsXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgRGVkdWN0aW9uIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZERlZHVjdGlvbnNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVUeXBlT2ZEZWR1Y3Rpb24oKSB7XG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5pZCA9ICcnO1xuICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLm5hbWUgPSAnJztcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdygndHlwZS1vZi1kZWR1Y3Rpb24tbW9kYWwnKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlUGF5cm9sbFBlcmlvZCgpIHtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uaWQgPSAnJztcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uZGF0ZV9mcm9tID0gJyc7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSAnJztcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdygncGF5cm9sbC1wZXJpb2QtbW9kYWwnKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICB9LFxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlRGVkdWN0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZURlZHVjdGlvbigpO1xuICAgICAgfVxuICAgIH0sXG4gIFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRW1wbG95ZWVzTmV4dFBhZ2UoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICE9PSB0aGlzLmVtcGxveWVlc0xhc3RQYWdlXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBoYXNFbXBsb3llZXNQcmV2UGFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlID4gMTtcbiAgICB9LFxuXG4gICAgaGFzVHlwZU9mRGVkdWN0aW9uc05leHRQYWdlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25zQ3VycmVudFBhZ2UgIT09IHRoaXMudHlwZU9mRGVkdWN0aW9uc0xhc3RQYWdlXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBoYXNUeXBlT2ZEZWR1Y3Rpb25zUHJldlBhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy50eXBlT2ZEZWR1Y3Rpb25zQ3VycmVudFBhZ2UgPiAxO1xuICAgIH0sXG5cbiAgICBoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICE9PSB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2VcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlID4gMTtcbiAgICB9LFxuICB9XG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmJ0bi1jZS1zdWJtaXQge1xuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYnRuLWNlLWNhbmNlbCB7XG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1jZS10aXRsZSB7XG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwidHlwZS1vZi1kZWR1Y3Rpb24tbW9kYWxcIlxuICAgIGhpZGUtZm9vdGVyXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cbiAgICAgIFxuICAgICAgPGg1IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiPnt7IGZvcm0uaWQgPyAnRWRpdCBUeXBlIG9mIERlZHVjdGlvbicgOiAnQWRkIFR5cGUgb2YgRGVkdWN0aW9uJ319PC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXG4gICAgICAgIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItZm9ybT5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTFcIiBsYWJlbD1cIk5hbWVcIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dC0xXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5uYW1lXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5uYW1lWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuXG4gICAgICA8L2ItZm9ybT5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB2LWlmPVwiIWlzU2VsZlwiXG4gICAgICAgICAgICBocmVmPVwiL2FkbWluL3R5cGUtb2YtZGVkdWN0aW9uc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZsb2F0LWxlZnQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0yXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBNQU5BR0UgVFlQRSBPRiBERURVQ1RJT05cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczoge1xuICAgIHR5cGVPZkRlZHVjdGlvbkZvcm06IE9iamVjdCxcbiAgICBpc1NlbGY6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLnR5cGVPZkRlZHVjdGlvbkZvcm0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInR5cGVPZkRlZHVjdGlvblwiLCBbXCJjcmVhdGVUeXBlT2ZEZWR1Y3Rpb25cIiwgXCJ1cGRhdGVUeXBlT2ZEZWR1Y3Rpb25cIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xuXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJ0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbFwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XG5cbiAgICB9LFxuXG4gICAgaGFuZGxlQ3JlYXRlVHlwZU9mRGVkdWN0aW9uKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRuYW1lOiB0aGlzLmZvcm0ubmFtZVxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmNyZWF0ZVR5cGVPZkRlZHVjdGlvbihwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0ubmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBUeXBlIG9mIERlZHVjdGlvbmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZVR5cGVPZkRlZHVjdGlvbigpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcblx0XHRcdFx0bmFtZTogdGhpcy5mb3JtLm5hbWVcblx0XHRcdH1cblxuICAgICAgdGhpcy51cGRhdGVUeXBlT2ZEZWR1Y3Rpb24ocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBVUERBVEVEXCIsXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgVHlwZSBvZiBEZWR1Y3Rpb24gSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVR5cGVPZkRlZHVjdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVUeXBlT2ZEZWR1Y3Rpb24oKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInBheXJvbGwtcGVyaW9kLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCBQZXJpb2QnIDogJ0FkZCBQYXlyb2xsIFBlcmlvZCd9fTwvaDU+XG4gICAgICA8Yi1idXR0b25cbiAgICAgICAgcGlsbFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJtb2RhbENsb3NlKClcIlxuICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgIDwvYi1idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLWZvcm0+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJpbnB1dC1ncm91cC0xXCIgbGFiZWw9XCJEYXRlIEZyb21cIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGF0ZS1mcm9tXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVGcm9tXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGRhdGUgc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kYXRlX2Zyb21cIlxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRhdGUtZnJvbVwiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlRnJvbVwiXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5kYXRlX2Zyb21cIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmRhdGVfZnJvbVswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtMlwiIGxhYmVsPVwiRGF0ZSBUb1wiIGxhYmVsLWZvcj1cImlucHV0LTJcIj5cbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlLXRvXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVUb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJObyBkYXRlIHNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcbiAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cImVuLVVTXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZGF0ZS10b1wiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlVG9cIlxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZGF0ZV90b1wiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZGF0ZV90b1swXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgPC9iLWZvcm0+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdi1pZj1cIiFpc1NlbGZcIlxuICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IHtcbiAgICBwYXlyb2xsUGVyaW9kRm9ybTogT2JqZWN0LFxuICAgIGlzU2VsZjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbFBlcmlvZEZvcm0sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgZGF0ZUZyb206IFwiXCIsXG4gICAgICBkYXRlVG86IFwiXCJcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwicGF5cm9sbFBlcmlvZFwiLCBbXCJjcmVhdGVQYXlyb2xsUGVyaW9kXCIsIFwidXBkYXRlUGF5cm9sbFBlcmlvZFwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcInBheXJvbGwtcGVyaW9kLW1vZGFsXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcblxuICAgIH0sXG5cbiAgICBoYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfZnJvbSl9IC0gJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfdG8pfSBoYXMgYmVlbiBjcmVhdGVkIGFzIG5ldyBQYXlyb2xsIHBlcmlvZGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbFBlcmlvZHNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIFVQREFURURcIixcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBQYXlyb2xsIFBlcmlvZCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQYXlyb2xsUGVyaW9kc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG5cbiAgICBvbkNvbnRleHREYXRlRnJvbShjdHgpIHtcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVGcm9tID0gXCJcIjtcbiAgICB9LFxuXG4gICAgb25Db250ZXh0RGF0ZVRvKGN0eCkge1xuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xuICAgICAgICB0aGlzLmRhdGVUbyA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVUbyA9IFwiXCI7XG4gICAgfVxuICBcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYnRuLWNlLXN1Ym1pdCB7XG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5idG4tY2UtY2FuY2VsIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWNlLXRpdGxlIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJEZWR1Y3Rpb25zXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZURlZHVjdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwicGx1c1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXdcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaW5saW5lOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgU2hvd1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIG1yLXNtLTIgbWItc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zaG93RW50cmllc09wdCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBlcl9wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgRW50cmllc1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbnB1dC1ncm91cC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zZWFyY2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBoZXJlLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItb3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzaG93OiBfdm0uaXNPdmVybGF5LCByb3VuZGVkOiBcInNtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctZW1wdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3k6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnQtcGFnZVwiOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTQgbWItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcC01IHRleHQtbXV0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChlbXBsb3llZV9uYW1lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5lbXBsb3llZS5mdWxsX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbCh0eXBlX29mX2RlZHVjdGlvbilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0udHlwZV9vZl9kZWR1Y3Rpb24ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGFtb3VudClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0uYW1vdW50LnRvRml4ZWQoMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChwZXJpb2QpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0ucGF5cm9sbF9wZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfdm0uZm9ybWF0RGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLnBheXJvbGxfcGVyaW9kLmRhdGVfZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLSAke192bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0ucGF5cm9sbF9wZXJpb2QuZGF0ZV90b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdERlZHVjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEVESVRcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlRGVkdWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgREVMRVRFXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBgU2hvd2luZyAke192bS5zaG93aW5nLmZyb219IHRvICR7X3ZtLnNob3dpbmcudG99IG9mICR7X3ZtLnNob3dpbmcudG90YWx9IGVudHJpZXNgXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0wXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcInRvdGFsLXJvd3NcIjogX3ZtLnRhYmxlVG90YWxSb3dzLFxuICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudF9wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudF9wYWdlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRGVkdWN0aW9uc01vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZGVkdWN0aW9uRm9ybTogX3ZtLmRlZHVjdGlvbkZvcm0gfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBsb2FkRGVkdWN0aW9uczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkRGVkdWN0aW9ucygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRGVkdWN0aW9uc0RlbGV0ZU1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZGVkdWN0aW9uRm9ybTogX3ZtLmRlZHVjdGlvbkZvcm0gfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBsb2FkRGVkdWN0aW9uczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkRGVkdWN0aW9ucygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcImRlZHVjdGlvbi1kZWxldGUtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1oZWFkZXJcIjogXCJcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIGNlbnRlcmVkOiBcIlwiLFxuICAgICAgXCJjb250ZW50LWNsYXNzXCI6IFwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiLFxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRFwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtfdm0uZm9ybS5lbXAuZnVsbF9uYW1lfSBmcm9tIERlZHVjdGlvbiByZWNvcmRzP2BcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBOT1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBZRVNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwiZGVkdWN0aW9uLW1vZGFsXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1vZGFsLWhlYWRlclwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiRWRpdCBEZWR1Y3Rpb25cIiA6IFwiQWRkIERlZHVjdGlvblwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImlucHV0LTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiZnVsbF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoRW1wbG95ZWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc0VtcGxveWVlc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRW1wbG95ZWVzUHJldkJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkVtcGxveWVlUHJldlBhZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0VtcGxveWVlc1ByZXZCdXR0b25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNtYWxsIFNwaW5uZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIlByZXZcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc0VtcGxveWVlc05leHRQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRW1wbG95ZWVzTmV4dEJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkVtcGxveWVlTmV4dFBhZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0VtcGxveWVlc05leHRCdXR0b25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNtYWxsIFNwaW5uZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIk5leHRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImVtcFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuZW1wX2lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZW1wX2lkWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGUgb2YgRGVkdWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0eXBlLW9mLWRlZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS50eXBlT2ZEZWR1Y3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiAodG9kKSA9PiB0b2QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0eXBlLW9mLWRlZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoVHlwZU9mRGVkdWN0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsaXN0LWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVR5cGVPZkRlZHVjdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIE5ldyBUeXBlIG9mIERlZHVjdGlvblxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGlzdC1mb290ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTIgbWItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaGFzVHlwZU9mRGVkdWN0aW9uc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vblR5cGVPZkRlZHVjdGlvblByZXZQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1R5cGVPZkRlZHVjdGlvbnNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dFBhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dEJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uVHlwZU9mRGVkdWN0aW9uTmV4dFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNtYWxsIFNwaW5uZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIk5leHRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRvZF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRvZF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRvZF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMudG9kX2lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMudG9kX2lkWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwiaW5wdXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogXCIwLjAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMC4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImFtb3VudFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuYW1vdW50WzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtNFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcmlvZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwiaW5wdXQtNFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJkYXRlX3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ucGF5cm9sbFBlcmlvZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5pc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiAocCkgPT4gcC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInBlcmlvZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgc2VhcmNoOiBfdm0ub25TZWFyY2hQYXlyb2xsUGVyaW9kIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsaXN0LWhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVBheXJvbGxQZXJpb2QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBOZXcgUGF5cm9sbCBQZXJpb2RcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNlbGVjdGVkLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgZGF0ZV90bywgZGF0ZV9mcm9tIH0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke192bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVfZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAtICR7X3ZtLmZvcm1hdERhdGUoZGF0ZV90byl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoeyBkYXRlX3RvLCBkYXRlX2Zyb20gfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7X3ZtLmZvcm1hdERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtfdm0uZm9ybWF0RGF0ZShkYXRlX3RvKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJsaXN0LWZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMiBtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLm9uUGF5cm9sbFBlcmlvZFByZXZQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUHJldlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5vblBheXJvbGxQZXJpb2ROZXh0UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNtYWxsIFNwaW5uZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihcIk5leHRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBlcmlvZF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBlcmlvZF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBlcmlvZF9pZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMucGVyaW9kX2lkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMucGVyaW9kX2lkWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBDQU5DRUxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiU0FWRSBDSEFOR0VTXCIgOiBcIlNBVkVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJUeXBlT2ZEZWR1Y3Rpb25zTW9kYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGVPZkRlZHVjdGlvbkZvcm06IF92bS50eXBlT2ZEZWR1Y3Rpb25Gb3JtLFxuICAgICAgICAgICAgICAgIGlzU2VsZjogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgbG9hZFR5cGVPZkRlZHVjdGlvbnM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFR5cGVPZkRlZHVjdGlvbnMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIlBheXJvbGxQZXJpb2RzTW9kYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHBheXJvbGxQZXJpb2RGb3JtOiBfdm0ucGF5cm9sbFBlcmlvZEZvcm0sXG4gICAgICAgICAgICAgICAgaXNTZWxmOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBsb2FkUGF5cm9sbFBlcmlvZHM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBheXJvbGxQZXJpb2RzKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInR5cGUtb2YtZGVkdWN0aW9uLW1vZGFsXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1vZGFsLWhlYWRlclwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmlkXG4gICAgICAgICAgICAgICAgICAgID8gXCJFZGl0IFR5cGUgb2YgRGVkdWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkFkZCBUeXBlIG9mIERlZHVjdGlvblwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWItdG9vbHRpcC5ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgaG92ZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0LWdyb3VwLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaW5wdXQtMVwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMubmFtZVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uaXNTZWxmXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi90eXBlLW9mLWRlZHVjdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIE1BTkFHRSBUWVBFIE9GIERFRFVDVElPTlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlNBVkUgQ0hBTkdFU1wiIDogXCJTQVZFXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgIF0pLFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImItbW9kYWxcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBpZDogXCJwYXlyb2xsLXBlcmlvZC1tb2RhbFwiLFxuICAgICAgXCJoaWRlLWZvb3RlclwiOiBcIlwiLFxuICAgICAgXCJuby1jbG9zZS1vbi1iYWNrZHJvcFwiOiBcIlwiLFxuICAgICAgXCJjb250ZW50LWNsYXNzXCI6IFwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiLFxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtb2RhbC1oZWFkZXJcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uZm9ybS5pZCA/IFwiRWRpdCBQYXlyb2xsIFBlcmlvZFwiIDogXCJBZGQgUGF5cm9sbCBQZXJpb2RcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1iLXRvb2x0aXAuaG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IGhvdmVyOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC1ncm91cC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBGcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS1mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTm8gZGF0ZSBzZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZUZyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlRnJvbSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlRnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cC1hcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tb25seVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRhdGUtZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbnRleHQ6IF92bS5vbkNvbnRleHREYXRlRnJvbSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRhdGVfZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGF0ZV9mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZGF0ZV9mcm9tWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgVG9cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImlucHV0LTJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlLXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiTm8gZGF0ZSBzZWxlY3RlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZVRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZVRvID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVUb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cC1hcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24tb25seVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBcImVuLVVTXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRhdGUtdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjb250ZXh0OiBfdm0ub25Db250ZXh0RGF0ZVRvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGF0ZV90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkYXRlX3RvXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVfdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5kYXRlX3RvXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZGF0ZV90b1swXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIFtcbiAgICAgICAgICAgICAgICAgICFfdm0uaXNTZWxmXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBzaG93RW50cmllc09wdCA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogXCIxMFwiIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6IFwiMzBcIiB9LFxuICAgIHsgdmFsdWU6IDUwLCB0ZXh0OiBcIjUwXCIgfSxcbiAgICB7IHZhbHVlOiAxMDAsIHRleHQ6IFwiMTAwXCIgfSxcbl1cblxuXG5leHBvcnQge1xuICAgIHNob3dFbnRyaWVzT3B0LFxufSIsImNsYXNzIEVycm9ycyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRXJyb3JzIGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYW4gZXJyb3JzIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGhhcyhmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHdlIGhhdmUgYW55IGVycm9ycy5cbiAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgZ2V0KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkIHRoZSBuZXcgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICByZWNvcmQoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGZpZWxkXG4gICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZXJyb3JzLlxuICAgKi9cbiAgbGlzdCgpIHtcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGxldCBlcnJvckFycmF5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykgPz8gW11cbiAgICBlcnJvckFycmF5LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgaXRlbXMucHVzaChlcnJvclswXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG4iLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG5jbGFzcyBGb3JtIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcblxuICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgKi9cbiAgZGF0YSgpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwb3N0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwdXQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIC8vIHRlbXBvcmFyeVxuICAgIC8vIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgZmFpbGVkIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgb25GYWlsKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xuICB9XG5cblxuICBpc0RhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaXNEZWZhdWx0RGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsICYmIHZhbCAhPT0gJ0FkZCcpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgc3RyaW5nTG93ZXJDYXNlKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0ciwgbG93ZXIgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChsb3dlciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyKS5yZXBsYWNlKC8oPzpefFxcc3xbXCInKFt7XSkrXFxTL2csIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRBbW91bnQoYW1vdW50KSB7XG4gICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBhbW91bnQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIGVtcHR5U3RyaW5nKGNoYXJhYyA9ICctJywgbGVuZ3RoID0gNCkge1xuICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBzdHIgKz0gY2hhcmFjXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBpbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICAgIHZhciBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB3aG9sZU51bWJlckZvcm1hdChhbW91bnQsIGRlY2ltYVBsYWNlKSB7XG4gICAgICB2YXIgYW1vdW50Tm93ID0gMFxuICAgICAgaWYgKChhbW91bnQgLSBNYXRoLmZsb29yKGFtb3VudCkpICE9PSAwKSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIGlmIChhbW91bnROb3cgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYW1vdW50LnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWFfY29uY2F0KGtleSA9ICduYW1lJywgaXRlbXMpIHtcbiAgICAgIGxldCBzZXQgPSAnJztcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIGl0ZW1zLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgc2V0ICs9IGVsZVtrZXldO1xuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSxcblxuICAgIHNob3dpbmdfbGFiZWwoZnJvbSwgdG8sIHRvdGFsKSB7XG4gICAgICBsZXQgZiA9IHRoaXMudG9fc3Ryb25nKGZyb20pXG4gICAgICBsZXQgdCA9IHRoaXMudG9fc3Ryb25nKHRvKVxuICAgICAgbGV0IHRvdCA9IHRoaXMudG9fc3Ryb25nKHRvdGFsKVxuICAgICAgcmV0dXJuIGBTaG93aW5nICR7Zn0gdG8gJHt0fSBvZiAke3RvdH0gcmVzdWx0c2A7XG4gICAgfSxcblxuICAgIHRvX3N0cm9uZyhzdHIpIHtcbiAgICAgIHJldHVybiBgPHN0cm9uZz4ke3N0cn08L3N0cm9uZz5gO1xuICAgIH1cbiAgfSxcbn07XG5cbiIsImltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW3RleHRdLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRvYXN0KHZhcmlhbnQgPSBudWxsLCB0aXRsZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy4kYnZUb2FzdC50b2FzdChtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0NvbmZpcm0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICQuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIENvbmZpcm0hJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBkYXRhPycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNsYXNzOiAnYnRuLXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUNvbmZpcm0odGl0bGUgPSAnQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkQnLCBtb2R1bGVOYW1lID0gXCJcIikge1xuXG4gICAgICAgICAgICB0aGlzLmJveFR3byA9ICcnXG4gICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIGV2ZXJ5dGhpbmcuJywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIENvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBva1RpdGxlOiAnWUVTJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcbiAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHdvID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgU3dhbFxuICAgICAgICAgICAgLy8gICAgICAgICAuZmlyZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBkYXRhIGZvcm0gJHttb2R1bGVOYW1lfSByZWNvcmRzP2AsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMmtCQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcImRlZHVjdGlvbi1tb2RhbFxcXCJcXG4gICAgaGlkZS1mb290ZXJcXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcXG4gICAgY29udGVudC1jbGFzcz1cXFwiYm9yZGVyLXRvcCBiZy1jcmVhbVxcXCJcXG4gID5cXG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XFxuICAgICAgPCEtLSBFbXVsYXRlIGJ1aWx0IGluIG1vZGFsIGhlYWRlciBjbG9zZSBidXR0b24gYWN0aW9uIC0tPlxcbiAgICAgIFxcbiAgICAgIDxoNSBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVxcXCI+e3sgZm9ybS5pZCA/ICdFZGl0IERlZHVjdGlvbicgOiAnQWRkIERlZHVjdGlvbid9fTwvaDU+XFxuICAgICAgPGItYnV0dG9uXFxuICAgICAgICBwaWxsXFxuICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXFxuICAgICAgICBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICA8L2ItYnV0dG9uPlxcbiAgICA8L3RlbXBsYXRlPlxcblxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGItZm9ybT5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTFcXFwiIGxhYmVsPVxcXCJFbXBsb3llZSBOYW1lXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTFcXFwiPlxcbiAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICBuYW1lPVxcXCJlbXBsb3llZXNcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcImZ1bGxfbmFtZVxcXCJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmVtcFxcXCJcXG4gICAgICAgICAgICA6b3B0aW9ucz1cXFwiZW1wbG95ZWVzXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgQHNlYXJjaD1cXFwib25TZWFyY2hFbXBsb3llZVxcXCJcXG4gICAgICAgICAgICBpZD1cXFwiZW1wbG95ZWVzXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWZvb3Rlcj5cXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibXQtMiBtYi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcImxpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc0VtcGxveWVlc1ByZXZQYWdlIHx8IGlzRW1wbG95ZWVzUHJldkJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25FbXBsb3llZVByZXZQYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNFbXBsb3llZXNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc0VtcGxveWVlc05leHRQYWdlIHx8IGlzRW1wbG95ZWVzTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcImxpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uRW1wbG95ZWVOZXh0UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiU21hbGwgU3Bpbm5lclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPk5leHQ8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgPC92LXNlbGVjdD5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmVtcF9pZFxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZW1wX2lkWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTJcXFwiIGxhYmVsPVxcXCJUeXBlIG9mIERlZHVjdGlvblxcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0yXFxcIj5cXG4gICAgICAgICAgPHYtc2VsZWN0XFxuICAgICAgICAgICAgbmFtZT1cXFwidHlwZS1vZi1kZWR1Y3Rpb25zXFxcIlxcbiAgICAgICAgICAgIGxhYmVsPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0udG9kX2lkXFxcIlxcbiAgICAgICAgICAgIDpvcHRpb25zPVxcXCJ0eXBlT2ZEZWR1Y3Rpb25zXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgIDpyZWR1Y2U9XFxcIih0b2QpID0+IHRvZC5pZFxcXCJcXG4gICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaFR5cGVPZkRlZHVjdGlvblxcXCJcXG4gICAgICAgICAgICBpZD1cXFwidHlwZS1vZi1kZWR1Y3Rpb25zXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWhlYWRlcj5cXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibWItMiB2LXNlbGVjdC1vcHRpb24tcGFkZGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgIDxiLWxpbmsgaHJlZj1cXFwiI1xcXCIgQGNsaWNrPVxcXCJjcmVhdGVUeXBlT2ZEZWR1Y3Rpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgIE5ldyBUeXBlIG9mIERlZHVjdGlvblxcbiAgICAgICAgICAgICAgICA8L2ItbGluaz5cXG4gICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJtdC0yIG1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwibGlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhaGFzVHlwZU9mRGVkdWN0aW9uc1ByZXZQYWdlIHx8IGlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uVHlwZU9mRGVkdWN0aW9uUHJldlBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpc1R5cGVPZkRlZHVjdGlvbnNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc1R5cGVPZkRlZHVjdGlvbnNOZXh0UGFnZSB8fCBpc1R5cGVPZkRlZHVjdGlvbnNOZXh0QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwibGlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25UeXBlT2ZEZWR1Y3Rpb25OZXh0UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIlNtYWxsIFNwaW5uZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5OZXh0PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy50b2RfaWRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLnRvZF9pZFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC0zXFxcIiBsYWJlbD1cXFwiQW1vdW50XFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTNcXFwiPlxcbiAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgaWQ9XFxcImlucHV0LTNcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5hbW91bnRcXFwiXFxuICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgIHN0ZXA9XFxcIjAuMDFcXFwiIFxcbiAgICAgICAgICAgIG1pbj1cXFwiMC4wMFxcXCJcXG4gICAgICAgICAgICByZXF1aXJlZFxcbiAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5hbW91bnRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmFtb3VudFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC00XFxcIiBsYWJlbD1cXFwiUGVyaW9kXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTRcXFwiPlxcbiAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICBuYW1lPVxcXCJwZXJpb2RcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcImRhdGVfdG9cXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5wZXJpb2RfaWRcXFwiXFxuICAgICAgICAgICAgOm9wdGlvbnM9XFxcInBheXJvbGxQZXJpb2RzXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICA6cmVkdWNlPVxcXCIocCkgPT4gcC5pZFxcXCJcXG4gICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaFBheXJvbGxQZXJpb2RcXFwiXFxuICAgICAgICAgICAgaWQ9XFxcInBlcmlvZFxcXCJcXG4gICAgICAgICAgPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1oZWFkZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8Yi1saW5rIGhyZWY9XFxcIiNcXFwiIEBjbGljaz1cXFwiY3JlYXRlUGF5cm9sbFBlcmlvZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgTmV3IFBheXJvbGwgUGVyaW9kXFxuICAgICAgICAgICAgICAgIDwvYi1saW5rPlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjc2VsZWN0ZWQtb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm10LTIgbWItMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiFoYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlIHx8IGlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2RQcmV2UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc1BheXJvbGxQZXJpb2RzTmV4dFBhZ2UgfHwgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2ROZXh0UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMucGVyaW9kX2lkXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5wZXJpb2RfaWRbMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcbiAgICAgICAgXFxuICAgICAgICBcXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgICAgPFR5cGVPZkRlZHVjdGlvbnNNb2RhbCA6dHlwZU9mRGVkdWN0aW9uRm9ybT1cXFwidHlwZU9mRGVkdWN0aW9uRm9ybVxcXCIgQGxvYWRUeXBlT2ZEZWR1Y3Rpb25zPVxcXCJsb2FkVHlwZU9mRGVkdWN0aW9ucygpXFxcIiA6aXNTZWxmPVxcXCJmYWxzZVxcXCI+PC9UeXBlT2ZEZWR1Y3Rpb25zTW9kYWw+XFxuICAgICAgPFBheXJvbGxQZXJpb2RzTW9kYWwgOnBheXJvbGxQZXJpb2RGb3JtPVxcXCJwYXlyb2xsUGVyaW9kRm9ybVxcXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cXFwibG9hZFBheXJvbGxQZXJpb2RzKClcXFwiIDppc1NlbGY9XFxcImZhbHNlXFxcIj48L1BheXJvbGxQZXJpb2RzTW9kYWw+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5cXG5pbXBvcnQgdG9hc3QgZnJvbSBcXFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1xcXCI7XFxuaW1wb3J0IFR5cGVPZkRlZHVjdGlvbnNNb2RhbCBmcm9tIFxcXCIuLi8uLi9kZWR1Y3Rpb25zVHlwZXMvbW9kYWxzL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWVcXFwiO1xcbmltcG9ydCBQYXlyb2xsUGVyaW9kc01vZGFsIGZyb20gXFxcIi4uLy4uL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlXFxcIjtcXG5pbXBvcnQgRm9ybSBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm0uanNcXFwiO1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1peGluczogW3RvYXN0XSxcXG5cXG4gIHByb3BzOiBbXFxcImRlZHVjdGlvbkZvcm1cXFwiXSxcXG5cXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgVHlwZU9mRGVkdWN0aW9uc01vZGFsLFxcbiAgICBQYXlyb2xsUGVyaW9kc01vZGFsXFxuICB9LFxcblxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcXG4gICAgICBmb3JtOiB0aGlzLmRlZHVjdGlvbkZvcm0sXFxuICAgICAgZXJyb3JzOiB7fSxcXG4gICAgICBpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNFbXBsb3llZXNQcmV2QnV0dG9uTG9hZGluZzogZmFsc2UsXFxuICAgICAgZW1wbG95ZWVzQ3VycmVudFBhZ2U6IDEsXFxuICAgICAgZW1wbG95ZWVzUGVyUGFnZTogMTAsXFxuICAgICAgZW1wbG95ZWVzTGFzdFBhZ2U6IDAsXFxuICAgICAgZW1wbG95ZWVzU2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGVtcGxveWVlczogW10sXFxuXFxuICAgICAgaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nOiBmYWxzZSxcXG4gICAgICBpc1R5cGVPZkRlZHVjdGlvbnNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNUeXBlT2ZEZWR1Y3Rpb25zUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZTogMSxcXG4gICAgICB0eXBlT2ZEZWR1Y3Rpb25zUGVyUGFnZTogMTAsXFxuICAgICAgdHlwZU9mRGVkdWN0aW9uc0xhc3RQYWdlOiAwLFxcbiAgICAgIHR5cGVPZkRlZHVjdGlvbnNTZWFyY2hlZDogXFxcIlxcXCIsXFxuICAgICAgdHlwZU9mRGVkdWN0aW9uczogW10sXFxuXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcXG4gICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2U6IDEsXFxuICAgICAgcGF5cm9sbFBlcmlvZHNQZXJQYWdlOiAxMCxcXG4gICAgICBwYXlyb2xsUGVyaW9kc0xhc3RQYWdlOiAwLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzU2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzOiBbXSxcXG5cXG4gICAgICBzdGF0dXNlczogW1xcbiAgICAgICAgeyB0ZXh0OiAnRGVkdWN0ZWQnLCB2YWx1ZTogJ0RlZHVjdGVkJyB9LFxcbiAgICAgICAgeyB0ZXh0OiAnTm90IFlldCBEZWR1Y3RlZCcsIHZhbHVlOiAnTm90IFlldCBEZWR1Y3RlZCcgfVxcbiAgICAgIF0sXFxuXFxuICAgICAgdHlwZU9mRGVkdWN0aW9uRm9ybTogbmV3IEZvcm0oe1xcbiAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgbmFtZTogXFxcIlxcXCIsXFxuICAgICAgfSksXFxuXFxuICAgICAgcGF5cm9sbFBlcmlvZEZvcm06IG5ldyBGb3JtKHtcXG4gICAgICAgIGlkOiBcXFwiXFxcIixcXG4gICAgICAgIGRhdGVfZnJvbTogXFxcIlxcXCIsXFxuICAgICAgICBkYXRlX3RvOiBcXFwiXFxcIixcXG4gICAgICB9KSxcXG4gICAgfTtcXG4gIH0sXFxuXFxuICBtb3VudGVkKCkge1xcbiAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcXG4gICAgdGhpcy5sb2FkVHlwZU9mRGVkdWN0aW9ucygpO1xcbiAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwiZGVkdWN0aW9uXFxcIiwgW1xcXCJjcmVhdGVEZWR1Y3Rpb25cXFwiLCBcXFwidXBkYXRlRGVkdWN0aW9uXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJkZWR1Y3Rpb24tbW9kYWxcXFwiKTtcXG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xcblxcbiAgICB9LFxcblxcbiAgICBsb2FkRW1wbG95ZWVzKCkge1xcbiAgICAgIGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBwZXJfcGFnZTogMTAsXFxuICAgICAgICBwYWdlOiB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlLFxcbiAgICAgICAgc2VhcmNoOiB0aGlzLmVtcGxveWVlc1NlYXJjaGVkLFxcbiAgICAgIH1cXG4gICAgICBheGlvc1xcbiAgICAgICAgLmdldChcXFwiL2FwaS9lbXBsb3llZXNcXFwiLCB7IHBhcmFtcyB9KVxcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLmVtcGxveWVlcyA9IGRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXNMYXN0UGFnZSA9IGRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzRW1wbG95ZWVzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc0VtcGxveWVlc1ByZXZCdXR0b25Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25FbXBsb3llZU5leHRQYWdlKCkge1xcbiAgICAgIHRoaXMuaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSArPSAxO1xcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LFxcblxcbiAgICBvbkVtcGxveWVlUHJldlBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc0VtcGxveWVlc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlIC09IDE7XFxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uU2VhcmNoRW1wbG95ZWUoc2VhcmNoLCBsb2FkaW5nKSB7XFxuICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoRW1wbG95ZWUoc2VhcmNoKTtcXG4gICAgfSxcXG5cXG4gICAgcGVyZm9ybVNlYXJjaEVtcGxveWVlOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcXG4gICAgICB0aGlzLmVtcGxveWVlc1NlYXJjaGVkID0gc2VhcmNoO1xcblxcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LCAxMDAwKSxcXG5cXG4gICAgbG9hZFR5cGVPZkRlZHVjdGlvbnMoKSB7XFxuICAgICAgbGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIHBlcl9wYWdlOiAxMCxcXG4gICAgICAgIHBhZ2U6IHRoaXMudHlwZU9mRGVkdWN0aW9uc0N1cnJlbnRQYWdlLFxcbiAgICAgICAgc2VhcmNoOiB0aGlzLnR5cGVPZkRlZHVjdGlvbnNTZWFyY2hlZCxcXG4gICAgICB9XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoXFxcIi9hcGkvdHlwZS1vZi1kZWR1Y3Rpb25zXFxcIiwgeyBwYXJhbXMgfSlcXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy50eXBlT2ZEZWR1Y3Rpb25zID0gZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbnNMYXN0UGFnZSA9IGRhdGEubGFzdF9wYWdlO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc1R5cGVPZkRlZHVjdGlvbnNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc1R5cGVPZkRlZHVjdGlvbnNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25UeXBlT2ZEZWR1Y3Rpb25OZXh0UGFnZSgpIHtcXG4gICAgICB0aGlzLmlzVHlwZU9mRGVkdWN0aW9uc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZSArPSAxO1xcbiAgICAgIHRoaXMubG9hZFR5cGVPZkRlZHVjdGlvbnMoKTtcXG4gICAgfSxcXG5cXG4gICAgb25UeXBlT2ZEZWR1Y3Rpb25QcmV2UGFnZSgpIHtcXG4gICAgICB0aGlzLmlzVHlwZU9mRGVkdWN0aW9uc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZSAtPSAxO1xcbiAgICAgIHRoaXMubG9hZFR5cGVPZkRlZHVjdGlvbnMoKTtcXG4gICAgfSxcXG5cXG4gICAgb25TZWFyY2hUeXBlT2ZEZWR1Y3Rpb24oc2VhcmNoLCBsb2FkaW5nKSB7XFxuICAgICAgdGhpcy5pc1R5cGVPZkRlZHVjdGlvbnNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaFR5cGVPZkRlZHVjdGlvbihzZWFyY2gpO1xcbiAgICB9LFxcblxcbiAgICBwZXJmb3JtU2VhcmNoVHlwZU9mRGVkdWN0aW9uOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcXG4gICAgICB0aGlzLnR5cGVPZkRlZHVjdGlvbnNTZWFyY2hlZCA9IHNlYXJjaDtcXG5cXG4gICAgICB0aGlzLmxvYWRUeXBlT2ZEZWR1Y3Rpb25zKCk7XFxuICAgIH0sIDEwMDApLFxcblxcbiAgICBsb2FkUGF5cm9sbFBlcmlvZHMoKSB7XFxuICAgICAgbGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIHBlcl9wYWdlOiAxMCxcXG4gICAgICAgIHBhZ2U6IHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSxcXG4gICAgICAgIHNlYXJjaDogdGhpcy5wYXlyb2xsUGVyaW9kc1NlYXJjaGVkLFxcbiAgICAgIH1cXG4gICAgICBheGlvc1xcbiAgICAgICAgLmdldChcXFwiL2FwaS9wYXlyb2xsLXBlcmlvZHNcXFwiLCB7IHBhcmFtcyB9KVxcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzID0gZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uUGF5cm9sbFBlcmlvZE5leHRQYWdlKCkge1xcbiAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgKz0gMTtcXG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgICB9LFxcblxcbiAgICBvblBheXJvbGxQZXJpb2RQcmV2UGFnZSgpIHtcXG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlIC09IDE7XFxuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcXG4gICAgfSxcXG5cXG4gICAgb25TZWFyY2hQYXlyb2xsUGVyaW9kKHNlYXJjaCwgbG9hZGluZykge1xcbiAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gpO1xcbiAgICB9LFxcblxcbiAgICBwZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZDogXy5kZWJvdW5jZShmdW5jdGlvbiAoc2VhcmNoKSB7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc1NlYXJjaGVkID0gc2VhcmNoO1xcblxcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XFxuICAgIH0sIDEwMDApLFxcblxcbiAgICBoYW5kbGVDcmVhdGVEZWR1Y3Rpb24oKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0ZW1wX2lkOiB0aGlzLmZvcm0uZW1wLmlkLFxcblxcdFxcdFxcdFxcdHRvZF9pZDogdGhpcy5mb3JtLnRvZF9pZCxcXG5cXHRcXHRcXHRcXHRhbW91bnQ6IHRoaXMuZm9ybS5hbW91bnQsXFxuXFx0XFx0XFx0XFx0cGVyaW9kX2lkOiB0aGlzLmZvcm0ucGVyaW9kX2lkXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMuY3JlYXRlRGVkdWN0aW9uKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICBcXFwiTkVXIFJFQ09SRCBDUkVBVEVEXFxcIixcXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBuZXcgRGVkdWN0aW9uYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkRGVkdWN0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlRGVkdWN0aW9uKCkge1xcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcXG4gICAgICBcXG5cXHRcXHRcXHRsZXQgcGFyYW1zID0ge1xcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcXG5cXHRcXHRcXHRcXHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXFxuXFx0XFx0XFx0XFx0dG9kX2lkOiB0aGlzLmZvcm0udG9kX2lkLFxcblxcdFxcdFxcdFxcdGFtb3VudDogdGhpcy5mb3JtLmFtb3VudCxcXG5cXHRcXHRcXHRcXHRwZXJpb2RfaWQ6IHRoaXMuZm9ybS5wZXJpb2RfaWRcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy51cGRhdGVEZWR1Y3Rpb24ocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcIndhcm5pbmdcXFwiLFxcbiAgICAgICAgICAgIFxcXCJSRUNPUkQgVVBEQVRFRFxcXCIsXFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIERlZHVjdGlvbiBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkRGVkdWN0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgY3JlYXRlVHlwZU9mRGVkdWN0aW9uKCkge1xcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5yZXNldCgpO1xcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5pZCA9ICcnO1xcbiAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uRm9ybS5uYW1lID0gJyc7XFxuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KCd0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbCcpO1xcbiAgICB9LFxcblxcbiAgICBjcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0ucmVzZXQoKTtcXG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmlkID0gJyc7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5kYXRlX2Zyb20gPSAnJztcXG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSAnJztcXG4gICAgICB0aGlzLiRidk1vZGFsLnNob3coJ3BheXJvbGwtcGVyaW9kLW1vZGFsJyk7XFxuICAgIH0sXFxuXFxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xcbiAgICB9LFxcblxcbiAgICBvblN1Ym1pdCgpIHtcXG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZURlZHVjdGlvbigpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZURlZHVjdGlvbigpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gIFxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgIGhhc0VtcGxveWVlc05leHRQYWdlKCkge1xcbiAgICAgIHJldHVybiAoXFxuICAgICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICE9PSB0aGlzLmVtcGxveWVlc0xhc3RQYWdlXFxuICAgICAgKTtcXG4gICAgfSxcXG5cXG4gICAgaGFzRW1wbG95ZWVzUHJldlBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgPiAxO1xcbiAgICB9LFxcblxcbiAgICBoYXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dFBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIChcXG4gICAgICAgIHRoaXMudHlwZU9mRGVkdWN0aW9uc0N1cnJlbnRQYWdlICE9PSB0aGlzLnR5cGVPZkRlZHVjdGlvbnNMYXN0UGFnZVxcbiAgICAgICk7XFxuICAgIH0sXFxuXFxuICAgIGhhc1R5cGVPZkRlZHVjdGlvbnNQcmV2UGFnZSgpIHtcXG4gICAgICByZXR1cm4gdGhpcy50eXBlT2ZEZWR1Y3Rpb25zQ3VycmVudFBhZ2UgPiAxO1xcbiAgICB9LFxcblxcbiAgICBoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlKCkge1xcbiAgICAgIHJldHVybiAoXFxuICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgIT09IHRoaXMucGF5cm9sbFBlcmlvZHNMYXN0UGFnZVxcbiAgICAgICk7XFxuICAgIH0sXFxuXFxuICAgIGhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSA+IDE7XFxuICAgIH0sXFxuICB9XFxuXFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9uc1R5cGVzL21vZGFscy90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2SkE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDQTtBQUNBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUFDQTtBQUNBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxiLW1vZGFsXFxuICAgIGlkPVxcXCJ0eXBlLW9mLWRlZHVjdGlvbi1tb2RhbFxcXCJcXG4gICAgaGlkZS1mb290ZXJcXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcXG4gICAgY29udGVudC1jbGFzcz1cXFwiYm9yZGVyLXRvcCBiZy1jcmVhbVxcXCJcXG4gID5cXG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XFxuICAgICAgPCEtLSBFbXVsYXRlIGJ1aWx0IGluIG1vZGFsIGhlYWRlciBjbG9zZSBidXR0b24gYWN0aW9uIC0tPlxcbiAgICAgIFxcbiAgICAgIDxoNSBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVxcXCI+e3sgZm9ybS5pZCA/ICdFZGl0IFR5cGUgb2YgRGVkdWN0aW9uJyA6ICdBZGQgVHlwZSBvZiBEZWR1Y3Rpb24nfX08L2g1PlxcbiAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgcGlsbFxcbiAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxcbiAgICAgICAgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L2k+XFxuICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxcbiAgICAgIDxiLWZvcm0+XFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC0xXFxcIiBsYWJlbD1cXFwiTmFtZVxcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0xXFxcIj5cXG4gICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgIGlkPVxcXCJpbnB1dC0xXFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0ubmFtZVxcXCJcXG4gICAgICAgICAgICByZXF1aXJlZFxcbiAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5uYW1lXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5uYW1lWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sPlxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIHYtaWY9XFxcIiFpc1NlbGZcXFwiXFxuICAgICAgICAgICAgaHJlZj1cXFwiL2FkbWluL3R5cGUtb2YtZGVkdWN0aW9uc1xcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZmxvYXQtbGVmdCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG10LTJcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICBNQU5BR0UgVFlQRSBPRiBERURVQ1RJT05cXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgIDxiLWNvbCBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcXFwiPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cXFwiIDpzdHlsZT1cXFwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cXFwiIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIj5cXG4gICAgICAgICAgICBDQU5DRUxcXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJvblN1Ym1pdCgpXFxcIj5cXG4gICAgICAgICAgICB7eyBmb3JtLmlkID8gJ1NBVkUgQ0hBTkdFUycgOiAnU0FWRSd9fVxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICA8L2Itcm93PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9iLW1vZGFsPlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcXFwidnVleFxcXCI7XFxuXFxuaW1wb3J0IHRvYXN0IGZyb20gXFxcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1peGluczogW3RvYXN0XSxcXG5cXG4gIHByb3BzOiB7XFxuICAgIHR5cGVPZkRlZHVjdGlvbkZvcm06IE9iamVjdCxcXG4gICAgaXNTZWxmOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiB0cnVlLFxcbiAgICB9LFxcbiAgfSxcXG5cXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXFxuICAgICAgZm9ybTogdGhpcy50eXBlT2ZEZWR1Y3Rpb25Gb3JtLFxcbiAgICAgIGVycm9yczoge31cXG4gICAgfTtcXG4gIH0sXFxuXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoXFxcInR5cGVPZkRlZHVjdGlvblxcXCIsIFtcXFwiY3JlYXRlVHlwZU9mRGVkdWN0aW9uXFxcIiwgXFxcInVwZGF0ZVR5cGVPZkRlZHVjdGlvblxcXCJdKSxcXG4gICAgXFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xcblxcbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcXFwidHlwZS1vZi1kZWR1Y3Rpb24tbW9kYWxcXFwiKTtcXG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xcblxcbiAgICB9LFxcblxcbiAgICBoYW5kbGVDcmVhdGVUeXBlT2ZEZWR1Y3Rpb24oKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0bmFtZTogdGhpcy5mb3JtLm5hbWVcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy5jcmVhdGVUeXBlT2ZEZWR1Y3Rpb24ocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIFxcXCJORVcgUkVDT1JEIENSRUFURURcXFwiLFxcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybS5uYW1lfSBoYXMgYmVlbiBjcmVhdGVkIGFzIGEgbmV3IFR5cGUgb2YgRGVkdWN0aW9uYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkVHlwZU9mRGVkdWN0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlVHlwZU9mRGVkdWN0aW9uKCkge1xcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcXG4gICAgICBcXG5cXHRcXHRcXHRsZXQgcGFyYW1zID0ge1xcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcXG5cXHRcXHRcXHRcXHRuYW1lOiB0aGlzLmZvcm0ubmFtZVxcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLnVwZGF0ZVR5cGVPZkRlZHVjdGlvbihwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgXFxcIlJFQ09SRCBVUERBVEVEXFxcIixcXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgVHlwZSBvZiBEZWR1Y3Rpb24gSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFR5cGVPZkRlZHVjdGlvbnNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uU3VibWl0KCkge1xcbiAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlVHlwZU9mRGVkdWN0aW9uKCk7XFxuICAgICAgfSBlbHNlIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlVHlwZU9mRGVkdWN0aW9uKCk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG5cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNk5BO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcXFwiXFxuICAgIGhpZGUtZm9vdGVyXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIGNvbnRlbnQtY2xhc3M9XFxcImJvcmRlci10b3AgYmctY3JlYW1cXFwiXFxuICA+XFxuICAgIDx0ZW1wbGF0ZSAjbW9kYWwtaGVhZGVyPlxcbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cXG4gICAgICBcXG4gICAgICA8aDUgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcXFwiPnt7IGZvcm0uaWQgPyAnRWRpdCBQYXlyb2xsIFBlcmlvZCcgOiAnQWRkIFBheXJvbGwgUGVyaW9kJ319PC9oNT5cXG4gICAgICA8Yi1idXR0b25cXG4gICAgICAgIHBpbGxcXG4gICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcXG4gICAgICAgIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgIDwvYi1idXR0b24+XFxuICAgIDwvdGVtcGxhdGU+XFxuXFxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cXG4gICAgICA8Yi1mb3JtPlxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiaW5wdXQtZ3JvdXAtMVxcXCIgbGFiZWw9XFxcIkRhdGUgRnJvbVxcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0xXFxcIj5cXG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgaWQ9XFxcImRhdGUtZnJvbVxcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGVGcm9tXFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJObyBkYXRlIHNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZGF0ZV9mcm9tXFxcIlxcbiAgICAgICAgICAgICAgICBidXR0b24tb25seVxcbiAgICAgICAgICAgICAgICByaWdodFxcbiAgICAgICAgICAgICAgICBsb2NhbGU9XFxcImVuLVVTXFxcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkYXRlLWZyb21cXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlRnJvbVxcXCJcXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxcbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XFxuICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmRhdGVfZnJvbVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZGF0ZV9mcm9tWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTJcXFwiIGxhYmVsPVxcXCJEYXRlIFRvXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTJcXFwiPlxcbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICBpZD1cXFwiZGF0ZS10b1xcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGVUb1xcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTm8gZGF0ZSBzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgICAgIDxiLWZvcm0tZGF0ZXBpY2tlclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmRhdGVfdG9cXFwiXFxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XFxuICAgICAgICAgICAgICAgIHJpZ2h0XFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRhdGUtdG9cXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlVG9cXFwiXFxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5kYXRlX3RvXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5kYXRlX3RvWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sPlxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIHYtaWY9XFxcIiFpc1NlbGZcXFwiXFxuICAgICAgICAgICAgaHJlZj1cXFwiL2FkbWluL3BheXJvbGwtcGVyaW9kc1xcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZmxvYXQtbGVmdCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG10LTJcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICBNQU5BR0UgUEFZUk9MTCBQRVJJT0RcXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgIDxiLWNvbCBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcXFwiPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cXFwiIDpzdHlsZT1cXFwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cXFwiIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIj5cXG4gICAgICAgICAgICBDQU5DRUxcXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJvblN1Ym1pdCgpXFxcIj5cXG4gICAgICAgICAgICB7eyBmb3JtLmlkID8gJ1NBVkUgQ0hBTkdFUycgOiAnU0FWRSd9fVxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICA8L2Itcm93PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9iLW1vZGFsPlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcXFwidnVleFxcXCI7XFxuXFxuaW1wb3J0IHRvYXN0IGZyb20gXFxcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1peGluczogW3RvYXN0XSxcXG5cXG4gIHByb3BzOiB7XFxuICAgIHBheXJvbGxQZXJpb2RGb3JtOiBPYmplY3QsXFxuICAgIGlzU2VsZjoge1xcbiAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbFBlcmlvZEZvcm0sXFxuICAgICAgZXJyb3JzOiB7fSxcXG4gICAgICBkYXRlRnJvbTogXFxcIlxcXCIsXFxuICAgICAgZGF0ZVRvOiBcXFwiXFxcIlxcbiAgICB9O1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwicGF5cm9sbFBlcmlvZFxcXCIsIFtcXFwiY3JlYXRlUGF5cm9sbFBlcmlvZFxcXCIsIFxcXCJ1cGRhdGVQYXlyb2xsUGVyaW9kXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJwYXlyb2xsLXBlcmlvZC1tb2RhbFxcXCIpO1xcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XFxuXFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZUNyZWF0ZVBheXJvbGxQZXJpb2QoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0ZGF0ZV9mcm9tOiB0aGlzLmZvcm0uZGF0ZV9mcm9tLFxcblxcdFxcdFxcdFxcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgXFxcIk5FVyBSRUNPUkQgQ1JFQVRFRFxcXCIsXFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXREYXRlKHRoaXMuZm9ybS5kYXRlX2Zyb20pfSAtICR7dGhpcy5mb3JtYXREYXRlKHRoaXMuZm9ybS5kYXRlX3RvKX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBuZXcgUGF5cm9sbCBwZXJpb2RgXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWRQYXlyb2xsUGVyaW9kc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlUGF5cm9sbFBlcmlvZCgpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIGlkOiB0aGlzLmZvcm0uaWQsXFxuXFx0XFx0XFx0XFx0ZGF0ZV9mcm9tOiB0aGlzLmZvcm0uZGF0ZV9mcm9tLFxcblxcdFxcdFxcdFxcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgXFxcIlJFQ09SRCBVUERBVEVEXFxcIixcXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgUGF5cm9sbCBQZXJpb2QgSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFBheXJvbGxQZXJpb2RzXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBvblN1Ym1pdCgpIHtcXG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCk7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcXG4gICAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgfSxcXG5cXG4gICAgb25Db250ZXh0RGF0ZUZyb20oY3R4KSB7XFxuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5kYXRlRnJvbSA9IFxcXCJcXFwiO1xcbiAgICB9LFxcblxcbiAgICBvbkNvbnRleHREYXRlVG8oY3R4KSB7XFxuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xcbiAgICAgICAgdGhpcy5kYXRlVG8gPSB0aGlzLm1vbWVudChjdHguc2VsZWN0ZWRZTUQpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcblxcbiAgICAgIHRoaXMuZGF0ZVRvID0gXFxcIlxcXCI7XFxuICAgIH1cXG4gIFxcbiAgfSxcXG5cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2QwYzMwZCZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUzOWNjMyZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDgzZmViNGMmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjAwMzEyMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYjAwMzEyMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYjAwMzEyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYjAwMzEyMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiMDAzMTIwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2IwMDMxMjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnMvY29tcG9uZW50cy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2RlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk3YTM3YTJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyOTdhMzdhMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyOTdhMzdhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyOTdhMzdhMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGVkdWN0aW9uc0RlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yOTdhMzdhMlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI5N2EzN2EyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kZWR1Y3Rpb25zL21vZGFscy9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzZDBjMzBkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9kZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzZDBjMzBkJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzNkMGMzMGQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzNkMGMzMGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzNkMGMzMGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2RlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNkMGMzMGRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczM2QwYzMwZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGVkdWN0aW9ucy9tb2RhbHMvZGVkdWN0aW9uc01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWUzOWNjM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWUzOWNjMyZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI1ZTM5Y2MzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1ZTM5Y2MzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1ZTM5Y2MzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTM5Y2MzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjVlMzljYzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RlZHVjdGlvbnNUeXBlcy9tb2RhbHMvdHlwZU9mRGVkdWN0aW9uc01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDgzZmViNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDgzZmViNGMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkODNmZWI0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkODNmZWI0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkODNmZWI0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDgzZmViNGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkODNmZWI0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWR1Y3Rpb25zRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3R5cGVPZkRlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiMDAzMTIwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlZHVjdGlvbnNEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjk3YTM3YTJcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVkdWN0aW9uc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2QwYzMwZFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI1ZTM5Y2MzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4M2ZlYjRjXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlZHVjdGlvbnNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2QwYzMwZCZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90eXBlT2ZEZWR1Y3Rpb25zTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjVlMzljYzMmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kODNmZWI0YyZsYW5nPWNzc1wiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1hcEFjdGlvbnMiLCJtYXBHZXR0ZXJzIiwic2hvd0VudHJpZXNPcHQiLCJEZWR1Y3Rpb25zTW9kYWwiLCJEZWR1Y3Rpb25zRGVsZXRlTW9kYWwiLCJGb3JtIiwiY29tcG9uZW50cyIsImRhdGEiLCJwZXJfcGFnZSIsImN1cnJlbnRfcGFnZSIsImlzTG9hZGluZyIsImZpbHRlciIsInNlYXJjaGVkIiwiaXNPdmVybGF5IiwidG90YWxSb3ciLCJzaG93aW5nIiwidG8iLCJmcm9tIiwidG90YWwiLCJ0YWJsZVRvdGFsUm93cyIsImZpZWxkcyIsImtleSIsImxhYmVsIiwidGhDbGFzcyIsInRkQ2xhc3MiLCJ0aFN0eWxlIiwid2lkdGgiLCJkZWR1Y3Rpb25Gb3JtIiwiaWQiLCJlbXAiLCJ0b2RfaWQiLCJhbW91bnQiLCJwZXJpb2RfaWQiLCJtb2RhbElkIiwibWV0aG9kcyIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVEZWR1Y3Rpb24iLCJyZXNldCIsIiRidk1vZGFsIiwic2hvdyIsImVkaXREZWR1Y3Rpb24iLCJlbXBsb3llZSIsInR5cGVfb2ZfZGVkdWN0aW9uIiwicGF5cm9sbF9wZXJpb2QiLCJkZWxldGVEZWR1Y3Rpb24iLCJsb2FkRGVkdWN0aW9ucyIsIl90aGlzIiwicGFyYW1zIiwicGFnZSIsInNlYXJjaCIsImxvYWRJdGVtcyIsInRoZW4iLCJfIiwiaXRlbXMiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsInBlcmZvcm1TZWFyY2giLCJkZWJvdW5jZSIsInF1ZXJ5IiwibW91bnRlZCIsImNvbXB1dGVkIiwid2F0Y2giLCJoYW5kbGVyIiwidmFsdWUiLCJ0b2FzdCIsIm1peGlucyIsInByb3BzIiwiZm9ybSIsIm1vZGFsQ2xvc2UiLCJkb25lIiwiaGlkZSIsIm9uU3VibWl0IiwibWFrZVRvYXN0IiwiY29uY2F0IiwiZnVsbF9uYW1lIiwiJGVtaXQiLCJlcnJvciIsImVycm9ycyIsInJlc3BvbnNlIiwiVHlwZU9mRGVkdWN0aW9uc01vZGFsIiwiUGF5cm9sbFBlcmlvZHNNb2RhbCIsImlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nIiwiaXNFbXBsb3llZXNOZXh0QnV0dG9uTG9hZGluZyIsImlzRW1wbG95ZWVzUHJldkJ1dHRvbkxvYWRpbmciLCJlbXBsb3llZXNDdXJyZW50UGFnZSIsImVtcGxveWVlc1BlclBhZ2UiLCJlbXBsb3llZXNMYXN0UGFnZSIsImVtcGxveWVlc1NlYXJjaGVkIiwiZW1wbG95ZWVzIiwiaXNUeXBlT2ZEZWR1Y3Rpb25zRHJvcGRvd25Mb2FkaW5nIiwiaXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dEJ1dHRvbkxvYWRpbmciLCJpc1R5cGVPZkRlZHVjdGlvbnNQcmV2QnV0dG9uTG9hZGluZyIsInR5cGVPZkRlZHVjdGlvbnNDdXJyZW50UGFnZSIsInR5cGVPZkRlZHVjdGlvbnNQZXJQYWdlIiwidHlwZU9mRGVkdWN0aW9uc0xhc3RQYWdlIiwidHlwZU9mRGVkdWN0aW9uc1NlYXJjaGVkIiwidHlwZU9mRGVkdWN0aW9ucyIsImlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmciLCJpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmciLCJpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmciLCJwYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlIiwicGF5cm9sbFBlcmlvZHNQZXJQYWdlIiwicGF5cm9sbFBlcmlvZHNMYXN0UGFnZSIsInBheXJvbGxQZXJpb2RzU2VhcmNoZWQiLCJwYXlyb2xsUGVyaW9kcyIsInN0YXR1c2VzIiwidGV4dCIsInR5cGVPZkRlZHVjdGlvbkZvcm0iLCJuYW1lIiwicGF5cm9sbFBlcmlvZEZvcm0iLCJkYXRlX2Zyb20iLCJkYXRlX3RvIiwibG9hZEVtcGxveWVlcyIsImxvYWRUeXBlT2ZEZWR1Y3Rpb25zIiwibG9hZFBheXJvbGxQZXJpb2RzIiwiYXhpb3MiLCJnZXQiLCJsYXN0X3BhZ2UiLCJvbkVtcGxveWVlTmV4dFBhZ2UiLCJvbkVtcGxveWVlUHJldlBhZ2UiLCJvblNlYXJjaEVtcGxveWVlIiwibG9hZGluZyIsInBlcmZvcm1TZWFyY2hFbXBsb3llZSIsIl90aGlzMiIsIm9uVHlwZU9mRGVkdWN0aW9uTmV4dFBhZ2UiLCJvblR5cGVPZkRlZHVjdGlvblByZXZQYWdlIiwib25TZWFyY2hUeXBlT2ZEZWR1Y3Rpb24iLCJwZXJmb3JtU2VhcmNoVHlwZU9mRGVkdWN0aW9uIiwiX3RoaXMzIiwib25QYXlyb2xsUGVyaW9kTmV4dFBhZ2UiLCJvblBheXJvbGxQZXJpb2RQcmV2UGFnZSIsIm9uU2VhcmNoUGF5cm9sbFBlcmlvZCIsInBlcmZvcm1TZWFyY2hQYXlyb2xsUGVyaW9kIiwiaGFuZGxlQ3JlYXRlRGVkdWN0aW9uIiwiX3RoaXM0IiwiZW1wX2lkIiwiaGFuZGxlVXBkYXRlRGVkdWN0aW9uIiwiX3RoaXM1IiwidXBkYXRlRGVkdWN0aW9uIiwiY3JlYXRlVHlwZU9mRGVkdWN0aW9uIiwiY3JlYXRlUGF5cm9sbFBlcmlvZCIsImhhc0VtcGxveWVlc05leHRQYWdlIiwiaGFzRW1wbG95ZWVzUHJldlBhZ2UiLCJoYXNUeXBlT2ZEZWR1Y3Rpb25zTmV4dFBhZ2UiLCJoYXNUeXBlT2ZEZWR1Y3Rpb25zUHJldlBhZ2UiLCJoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlIiwiaGFzUGF5cm9sbFBlcmlvZHNQcmV2UGFnZSIsIk9iamVjdCIsImlzU2VsZiIsInR5cGUiLCJCb29sZWFuIiwiaGFuZGxlQ3JlYXRlVHlwZU9mRGVkdWN0aW9uIiwiaGFuZGxlVXBkYXRlVHlwZU9mRGVkdWN0aW9uIiwidXBkYXRlVHlwZU9mRGVkdWN0aW9uIiwiZGF0ZUZyb20iLCJkYXRlVG8iLCJoYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kIiwiaGFuZGxlVXBkYXRlUGF5cm9sbFBlcmlvZCIsInVwZGF0ZVBheXJvbGxQZXJpb2QiLCJvbkNvbnRleHREYXRlRnJvbSIsImN0eCIsInNlbGVjdGVkWU1EIiwib25Db250ZXh0RGF0ZVRvIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJhdHRycyIsInZhcmlhbnQiLCJvbiIsImNsaWNrIiwiaWNvbiIsImlubGluZSIsIm9wdGlvbnMiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsInNjb3BlZFNsb3RzIiwiX3UiLCJmbiIsInByb3h5IiwicGxhY2Vob2xkZXIiLCJyb3VuZGVkIiwiaG92ZXIiLCJzdHJpcGVkIiwiYnVzeSIsIl9zIiwiaXRlbSIsInRvRml4ZWQiLCJfZSIsInNpemUiLCIkZXZlbnQiLCJhbGlnbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJjZW50ZXJlZCIsInN0eWxlIiwicGlsbCIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwibW9kaWZpZXJzIiwiZmlsdGVyYWJsZSIsImJsb2NrIiwic3F1YXJlZCIsImRpc2FibGVkIiwic21hbGwiLCIkc2V0IiwicmVkdWNlIiwidG9kIiwiaHJlZiIsInN0ZXAiLCJtaW4iLCJyZXF1aXJlZCIsInAiLCJfcmVmIiwiX3JlZjIiLCJyZWFkb25seSIsInJpZ2h0IiwibG9jYWxlIiwiY29udGV4dCIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJrZXlzIiwibGVuZ3RoIiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwiZm9yRWFjaCIsInB1c2giLCJvcmlnaW5hbERhdGEiLCJwcm9wZXJ0eSIsInBvc3QiLCJ1cmwiLCJzdWJtaXQiLCJwdXQiLCJwYXRjaCIsIl9kZWxldGUiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25TdWNjZXNzIiwib25GYWlsIiwiaXNEYXRhRW1wdHkiLCJ2YWwiLCJpbmQiLCJpc0RlZmF1bHREYXRhRW1wdHkiLCJzdHJpbmdMb3dlckNhc2UiLCJzdHIiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwibG93ZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdEFtb3VudCIsImVtcHR5U3RyaW5nIiwiY2hhcmFjIiwiaSIsImwiLCJpbkFycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJ3aG9sZU51bWJlckZvcm1hdCIsImRlY2ltYVBsYWNlIiwiYW1vdW50Tm93IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbW1hX2NvbmNhdCIsInNldCIsImVsZSIsInNob3dpbmdfbGFiZWwiLCJmIiwidG9fc3Ryb25nIiwidCIsInRvdCIsInRpdGxlIiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJhY3Rpb24iLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==