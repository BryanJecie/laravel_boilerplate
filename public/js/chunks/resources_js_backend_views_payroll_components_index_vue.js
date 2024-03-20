"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_payroll_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_payrollModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/payrollModal.vue */ "./resources/js/backend/views/payroll/modals/payrollModal.vue");
/* harmony import */ var _modals_payrollDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/payrollDeleteModal.vue */ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue");
/* harmony import */ var _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payrollPeriod/modals/payrollPeriodsModal.vue */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    PayrollModal: _modals_payrollModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PayrollDeleteModal: _modals_payrollDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PayrollPeriodsModal: _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
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
      period: "",
      tableTotalRows: "",
      fields: [{
        key: "employee_no",
        label: "Employee No."
      }, {
        key: "employee_name",
        label: "Employee Name"
      }, {
        key: "gross_salary",
        label: "Gross Salary"
      }, {
        key: "total_deductions",
        label: "Total Deductions"
      }, {
        key: "net_salary",
        label: "Net Pay"
      }, {
        key: "actions",
        label: "Actions",
        thClass: "text-center",
        tdClass: "text-center",
        thStyle: {
          width: "10%"
        }
      }],
      isPayrollPeriodsDropdownLoading: false,
      isPayrollPeriodsNextButtonLoading: false,
      isPayrollPeriodsPrevButtonLoading: false,
      payrollPeriodsCurrentPage: 1,
      payrollPeriodsPerPage: 10,
      payrollPeriodsLastPage: 0,
      payrollPeriodsSearched: "",
      payrollPeriods: [],
      payrollPeriodForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        id: "",
        date_from: "",
        date_to: ""
      }),
      actions: [{
        value: "edit",
        title: "Edit",
        variant: "success"
      }, {
        value: "print_payslip",
        title: "Print Payslip",
        variant: "info"
      }, {
        value: "delete",
        title: "Delete",
        variant: "danger"
      }],
      payrollForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
        id: "",
        emp: "",
        period: "",
        basic_salary: "",
        total_overtime: "",
        total_deductions: "",
        other_pay: "",
        gross_salary: "",
        net_salary: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)("payroll", ["loadItems"])), {}, {
    printPayrollSummaryReport: function printPayrollSummaryReport() {
      if (this.period) {
        var link = "/admin/payrolls/payroll-summary-report/" + this.period;
        window.open(link, "_blank");
        return;
      }
      this.makeToast("danger", "ERROR", "Please select a payroll period before printing");
    },
    createPayroll: function createPayroll() {
      this.payrollForm.reset();
      this.payrollForm.emp = "";
      this.payrollForm.period = "";
      this.payrollForm.basic_salary = "";
      this.payrollForm.total_overtime = "";
      this.payrollForm.total_deductions = "";
      this.payrollForm.other_pay = "";
      this.payrollForm.gross_salary = "";
      this.payrollForm.net_salary = "";
      this.modalId = "payroll-modal";
      this.$bvModal.show(this.modalId);
    },
    editPayroll: function editPayroll(data) {
      this.payrollForm.reset();
      this.payrollForm.id = data.id;
      this.payrollForm.emp = data.employee;
      this.payrollForm.period = data.payroll_period.id;
      this.payrollForm.basic_salary = parseFloat(data.basic_salary).toFixed(2) || 0;
      this.payrollForm.total_overtime = parseFloat(data.total_overtime).toFixed(2) || 0;
      this.payrollForm.total_deductions = parseFloat(data.total_deductions).toFixed(2) || 0;
      this.payrollForm.other_pay = parseFloat(data.other_pay).toFixed(2) || 0;
      this.modalId = "payroll-modal";
      this.$bvModal.show(this.modalId);
    },
    deletePayroll: function deletePayroll(data) {
      this.payrollForm.reset();
      this.payrollForm.id = data.id;
      this.payrollForm.emp = data.employee;
      this.payrollForm.period = data.payroll_period.id;
      this.payrollForm.basic_salary = data.basic_salary;
      this.payrollForm.total_overtime = data.total_overtime;
      this.payrollForm.total_deductions = data.total_deductions;
      this.payrollForm.other_pay = data.other_pay;
      this.payrollForm.gross_salary = data.gross_salary;
      this.payrollForm.net_salary = data.net_salary;
      this.modalId = "payroll-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    printPayslip: function printPayslip(item) {
      var link = "/admin/payrolls/payslip/" + item.id;
      window.open(link, "_blank");
    },
    onAction: function onAction(item, title) {
      switch (title) {
        case "edit":
          this.editPayroll(item);
          break;
        case "print_payslip":
          this.printPayslip(item);
          break;
        case "delete":
          this.deletePayroll(item);
          break;
      }
    },
    loadPayrolls: function loadPayrolls() {
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
    performSearch: _.debounce(function (query) {
      this.searched = query;
    }, 1000),
    loadPayrollPeriods: function loadPayrollPeriods() {
      var _this2 = this;
      var params = {
        per_page: 10,
        page: this.payrollPeriodsCurrentPage,
        search: this.payrollPeriodsSearched
      };
      axios.get("/api/payroll-periods", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this2.payrollPeriods = data.data;
        _this2.payrollPeriodsLastPage = data.last_page;
      })["finally"](function () {
        _this2.isPayrollPeriodsDropdownLoading = false;
        _this2.isPayrollPeriodsNextButtonLoading = false;
        _this2.isPayrollPeriodsPrevButtonLoading = false;
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
    createPayrollPeriod: function createPayrollPeriod() {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = "";
      this.payrollPeriodForm.date_from = "";
      this.payrollPeriodForm.date_to = "";
      this.$bvModal.show("payroll-period-modal");
    },
    formatTime: function formatTime(employeeTime) {
      var _employeeTime$split = employeeTime.split(":"),
        _employeeTime$split2 = _slicedToArray(_employeeTime$split, 2),
        hours = _employeeTime$split2[0],
        minutes = _employeeTime$split2[1];
      var time = new Date();
      time.setHours(hours);
      time.setMinutes(minutes);
      var ampm = time.getHours() >= 12 ? "PM" : "AM";
      var hours12 = time.getHours() % 12;
      hours12 = hours12 ? hours12 : 12; // convert 0 to 12
      return "".concat(hours12, ":").concat(minutes, " ").concat(ampm);
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format("DD MMMM YYYY");
    }
  }),
  mounted: function mounted() {
    this.loadPayrolls();
    this.loadPayrollPeriods();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)("payroll", {
    items: "getPayrolls"
  })), {}, {
    hasPayrollPeriodsNextPage: function hasPayrollPeriodsNextPage() {
      return this.payrollPeriodsCurrentPage !== this.payrollPeriodsLastPage;
    },
    hasPayrollPeriodsPrevPage: function hasPayrollPeriodsPrevPage() {
      return this.payrollPeriodsCurrentPage > 1;
    }
  }),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadPayrolls();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadPayrolls();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadPayrolls();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  props: ["payrollForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.payrollForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("payroll", ["deletePayroll"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("payroll-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deletePayroll(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.emp.full_name, " has been removed from Payroll records."));
        _this.$emit("loadPayrolls");
        _this.$bvModal.hide("payroll-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
/* harmony import */ var _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payrollPeriod/modals/payrollPeriodsModal.vue */ "./resources/js/backend/views/payrollPeriod/modals/payrollPeriodsModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ["payrollForm"],
  components: {
    PayrollPeriodsModal: _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      form: this.payrollForm,
      searched: "",
      date: "",
      errors: {},
      isEmployeesDropdownLoading: false,
      isNextButtonLoading: false,
      isPrevButtonLoading: false,
      employeesCurrentPage: 1,
      employeesPerPage: 10,
      employeesLastPage: 0,
      employees: [],
      isPayrollPeriodsDropdownLoading: false,
      isPayrollPeriodsNextButtonLoading: false,
      isPayrollPeriodsPrevButtonLoading: false,
      payrollPeriodsCurrentPage: 1,
      payrollPeriodsPerPage: 10,
      payrollPeriodsLastPage: 0,
      payrollPeriodsSearched: "",
      payrollPeriods: [],
      payrollPeriodForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        date_from: "",
        date_to: ""
      })
    };
  },
  mounted: function mounted() {
    this.loadEmployees();
    this.loadPayrollPeriods();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("payroll", ["createPayroll", "updatePayroll"])), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("employee", ["onShow"])), {}, {
    modalClose: function modalClose() {
      this.$bvModal.hide("payroll-modal");
      this.errors = {};
      this.form.reset();
    },
    onChangeSelectedEmployee: function onChangeSelectedEmployee(e) {
      this.form.period = "";
      this.form.basic_salary = "";
      this.form.total_overtime = "";
      this.form.total_deductions = "";
      this.form.other_pay = "";
      this.form.gross_salary = "";
      this.form.net_salary = "";
    },
    loadEmployees: function loadEmployees() {
      var _this = this;
      var params = {
        per_page: 10,
        page: this.employeesCurrentPage,
        search: this.searched
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/employees", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this.employees = data.data;
        _this.employeesLastPage = data.last_page;
      })["finally"](function () {
        _this.isEmployeesDropdownLoading = false;
        _this.isNextButtonLoading = false;
        _this.isPrevButtonLoading = false;
      });
    },
    handleCreatePayroll: function handleCreatePayroll() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        emp_id: this.form.emp.id,
        period: this.form.period,
        basic_salary: this.form.basic_salary,
        total_overtime: this.form.total_overtime,
        total_deductions: this.form.total_deductions,
        other_pay: this.form.other_pay,
        gross_salary: this.form.gross_salary,
        net_salary: this.form.net_salary
      };
      this.createPayroll(params).then(function (_) {
        _this2.makeToast("success", "NEW RECORD CREATED", "".concat(_this2.form.emp.full_name, " has been created as a new Payroll"));
        _this2.$emit("loadPayrolls");
        _this2.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this2.errors = errors;
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    handleUpdatePayroll: function handleUpdatePayroll() {
      var _this3 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        emp_id: this.form.emp.id,
        period: this.form.period,
        basic_salary: this.form.basic_salary,
        total_overtime: this.form.total_overtime,
        total_deductions: this.form.total_deductions,
        other_pay: this.form.other_pay,
        gross_salary: this.form.gross_salary,
        net_salary: this.form.net_salary
      };
      this.updatePayroll(params).then(function (_) {
        _this3.makeToast("warning", "RECORD UPDATED", "This information for Payroll ID: ".concat(_this3.form.id, " has been updated."));
        _this3.$emit("loadPayrolls");
        _this3.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this3.errors = errors;
      })["finally"](function () {
        _this3.isLoading = false;
      });
    },
    onNextPage: function onNextPage() {
      this.isNextButtonLoading = true;
      this.employeesCurrentPage += 1;
      this.loadEmployees();
    },
    onPrevPage: function onPrevPage() {
      this.isPrevButtonLoading = true;
      this.employeesCurrentPage -= 1;
      this.loadEmployees();
    },
    onSearchEmployee: function onSearchEmployee(search, loading) {
      this.isEmployeesDropdownLoading = true;
      this.performSearchEmployee(search);
    },
    performSearchEmployee: _.debounce(function (search) {
      this.searched = search;
      this.loadEmployees();
    }, 1000),
    loadPayrollPeriods: function loadPayrollPeriods() {
      var _this4 = this;
      var params = {
        per_page: 10,
        page: this.payrollPeriodsCurrentPage,
        search: this.payrollPeriodsSearched
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/payroll-periods", {
        params: params
      }).then(function (response) {
        var data = response.data.data;
        _this4.payrollPeriods = data.data;
        _this4.payrollPeriodsLastPage = data.last_page;
      })["finally"](function () {
        _this4.isPayrollPeriodsDropdownLoading = false;
        _this4.isPayrollPeriodsNextButtonLoading = false;
        _this4.isPayrollPeriodsPrevButtonLoading = false;
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
    createPayrollPeriod: function createPayrollPeriod() {
      this.payrollPeriodForm.reset();
      this.payrollPeriodForm.id = '';
      this.payrollPeriodForm.date_from = '';
      this.payrollPeriodForm.date_to = '';
      this.$bvModal.show('payroll-period-modal');
    },
    calculateNetPayAndGrossSalary: function calculateNetPayAndGrossSalary() {
      var basicSalary = parseFloat(this.form.basic_salary) || 0;
      var totalOvertime = parseFloat(this.form.total_overtime) || 0;
      var otherPay = parseFloat(this.form.other_pay) || 0;
      var totalDeductions = parseFloat(this.form.total_deductions) || 0;
      var grossSalary = parseFloat(basicSalary + totalOvertime + otherPay) || 0;
      this.form.gross_salary = grossSalary.toFixed(2);
      this.form.net_salary = (grossSalary - totalDeductions).toFixed(2);
    },
    getEmployee: function getEmployee(id) {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var params;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              params = {
                id: id
              };
              _context.next = 3;
              return _this5.onShow(params).then(function (r) {
                return r;
              });
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getBasicSalary: function getBasicSalary() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var vm, employee, payrollPeriods, payrollPeriod, dailyTimeRecords, hourlyRate, periodDateFrom, periodDateTo, schedule, numberOfHours, noOfHrsBrk;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              vm = _this6;
              if (!(vm.form.emp && vm.form.period)) {
                _context2.next = 18;
                break;
              }
              _context2.next = 4;
              return _this6.getEmployee(vm.form.emp.id);
            case 4:
              employee = _context2.sent;
              payrollPeriods = _.cloneDeep(vm.payrollPeriods);
              payrollPeriod = payrollPeriods.find(function (x) {
                return x.id === vm.form.period;
              });
              dailyTimeRecords = _.cloneDeep(employee.data.daily_time_records);
              hourlyRate = parseFloat(employee.data.hourly_rate) || 0;
              periodDateFrom = new Date(payrollPeriod.date_from);
              periodDateTo = new Date(payrollPeriod.date_to);
              schedule = employee.data.schedule;
              dailyTimeRecords = dailyTimeRecords.filter(function (dtr) {
                var date = new Date(dtr.dtr_date);
                return date.getTime() >= periodDateFrom.getTime() && date.getTime() <= periodDateTo.getTime();
              });
              numberOfHours = 0;
              if (schedule) {
                noOfHrsBrk = parseFloat(schedule.no_of_hrs_brk) || 0;
                dailyTimeRecords.forEach(function (dtr) {
                  numberOfHours += vm.calculateNumberOfHoursBySchedule(schedule.required_time_in, schedule.required_time_out, noOfHrsBrk, dtr.time_in, dtr.time_out);
                });
              }
              vm.form.basic_salary = (hourlyRate * numberOfHours).toFixed(2);
              _context2.next = 19;
              break;
            case 18:
              vm.form.basic_salary = "";
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    calculateNumberOfHoursBySchedule: function calculateNumberOfHoursBySchedule(scheduleStart, scheduleEnd, scheduleNoOfHrsBrk, timeIn, timeOut) {
      if (timeOut == null) return 0;
      var timeInDate = new Date("1970-01-01T".concat(timeIn));
      var timeOutDate = new Date("1970-01-01T".concat(timeOut));
      var scheduleStartDate = new Date("1970-01-01T".concat(scheduleStart));
      var scheduleEndDate = new Date("1970-01-01T".concat(scheduleEnd));
      var validTimeIn = timeInDate >= scheduleStartDate && timeInDate < scheduleEndDate;
      if (!validTimeIn) {
        timeInDate = scheduleStartDate;
      }
      if (!(timeOutDate < scheduleEndDate)) {
        timeOutDate = scheduleEndDate;
      }
      var timeDiffMillis = timeOutDate - timeInDate;
      var hours = timeDiffMillis / (1000 * 60 * 60) - scheduleNoOfHrsBrk;
      return !isNaN(hours) && Number(hours) > 0 ? hours : 0;
    },
    calculateNumberOfHours: function calculateNumberOfHours(hoursFrom, hoursTo) {
      var hoursFromDate = new Date("1970-01-01T".concat(hoursFrom));
      var hoursToDate = new Date("1970-01-01T".concat(hoursTo));
      var timeDiffMillis = hoursToDate - hoursFromDate;
      var hours = timeDiffMillis / (1000 * 60 * 60);
      return !isNaN(hours) && Number(hours) > 0 ? hours : 0;
    },
    getTotalOvertime: function getTotalOvertime() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var vm, employee, overtimes, filteredOvertimes, hourlyRate, numberOfHours;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              vm = _this7;
              if (!vm.form.emp) {
                _context3.next = 13;
                break;
              }
              _context3.next = 4;
              return _this7.getEmployee(vm.form.emp.id);
            case 4:
              employee = _context3.sent;
              overtimes = _.cloneDeep(employee.data.overtimes);
              filteredOvertimes = overtimes.filter(function (x) {
                return x.period === vm.form.period;
              });
              hourlyRate = parseFloat(employee.data.hourly_rate) || 0;
              numberOfHours = 0;
              filteredOvertimes.forEach(function (ot) {
                numberOfHours += vm.calculateNumberOfHours(ot.hours_from, ot.hours_to);
              });
              vm.form.total_overtime = (hourlyRate * numberOfHours).toFixed(2);
              _context3.next = 14;
              break;
            case 13:
              vm.form.total_overtime = "";
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    getTotalDeductions: function getTotalDeductions() {
      var _this8 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var vm, employee, totalDeductions, deductions;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              vm = _this8;
              if (!vm.form.emp) {
                _context4.next = 10;
                break;
              }
              _context4.next = 4;
              return vm.getEmployee(vm.form.emp.id);
            case 4:
              employee = _context4.sent;
              totalDeductions = 0;
              if (employee.data.deductions) {
                deductions = _.cloneDeep(employee.data.deductions);
                deductions = deductions.filter(function (deduction) {
                  return deduction.period === vm.form.period;
                });
                deductions.forEach(function (deduction) {
                  totalDeductions += deduction.amount;
                });
              }
              vm.form.total_deductions = totalDeductions.toFixed(2);
              _context4.next = 11;
              break;
            case 10:
              vm.form.total_deductions = "";
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    onSubmit: function onSubmit() {
      if (this.form.id) {
        this.handleUpdatePayroll();
      } else {
        this.handleCreatePayroll();
      }
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    }
  }),
  watch: {
    'form.basic_salary': function formBasic_salary(newVal, oldVal) {
      this.calculateNetPayAndGrossSalary();
    },
    'form.total_overtime': function formTotal_overtime(newVal, oldVal) {
      this.calculateNetPayAndGrossSalary();
    },
    'form.other_pay': function formOther_pay(newVal, oldVal) {
      this.calculateNetPayAndGrossSalary();
    },
    'form.total_deductions': function formTotal_deductions(newVal, oldVal) {
      this.calculateNetPayAndGrossSalary();
    }
  },
  computed: {
    hasEmployeesNextPage: function hasEmployeesNextPage() {
      return this.employeesCurrentPage !== this.employeesLastPage;
    },
    hasEmployeesPrevPage: function hasEmployeesPrevPage() {
      return this.employeesCurrentPage > 1;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Payroll")]), _vm._v(" "), _c("div", {
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
      click: _vm.createPayroll
    }
  }, [_c("b-icon", {
    attrs: {
      icon: "plus",
      "aria-hidden": "true"
    }
  }), _vm._v("New\n          ")], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "col d-flex justify-content-end"
  }, [_c("div", {
    style: {
      width: "250px"
    }
  }, [_c("v-select", {
    attrs: {
      name: "period",
      label: "period",
      placeholder: "Select payroll period",
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
        }), _vm._v("\n                    New Payroll Period\n                  ")])], 1)];
      },
      proxy: true
    }, {
      key: "selected-option",
      fn: function fn(_ref) {
        var date_to = _ref.date_to,
          date_from = _ref.date_from;
        return [_c("span", [_vm._v("\n                  " + _vm._s("".concat(_vm.formatDate(date_from), " - ").concat(_vm.formatDate(date_to))) + "\n                ")])];
      }
    }, {
      key: "option",
      fn: function fn(_ref2) {
        var date_to = _ref2.date_to,
          date_from = _ref2.date_from;
        return [_c("span", [_vm._v("\n                  " + _vm._s("".concat(_vm.formatDate(date_from), " - ").concat(_vm.formatDate(date_to))) + "\n                ")])];
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
      value: _vm.period,
      callback: function callback($$v) {
        _vm.period = $$v;
      },
      expression: "period"
    }
  })], 1), _vm._v(" "), _c("div", [_c("b-button", {
    attrs: {
      variant: "primary"
    },
    on: {
      click: _vm.printPayrollSummaryReport
    }
  }, [_vm._v("\n              PRINT\n            ")])], 1)])])]), _vm._v(" "), _c("div", {
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
      key: "cell(employee_no)",
      fn: function fn(data) {
        return [data.item.employee ? _c("span", [_vm._v("\n                  " + _vm._s(data.item.employee.employee_id) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(employee_name)",
      fn: function fn(data) {
        return [data.item.employee ? _c("span", [_vm._v("\n                  " + _vm._s(data.item.employee.full_name) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(gross_salary)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.gross_salary.toFixed(2)) + "\n                ")])];
      }
    }, {
      key: "cell(total_deductions)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.total_deductions.toFixed(2)) + "\n                ")])];
      }
    }, {
      key: "cell(net_salary)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.net_salary.toFixed(2)) + "\n                ")])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-dropdown", {
          attrs: {
            right: "",
            "no-caret": ""
          },
          scopedSlots: _vm._u([{
            key: "button-content",
            fn: function fn() {
              return [_vm._v("\n                    More Actions\n                    "), _c("i", {
                staticClass: "fa fa-angle-down",
                attrs: {
                  "aria-hidden": "true"
                }
              })];
            },
            proxy: true
          }], null, true)
        }, [_vm._v(" "), _vm._l(_vm.actions, function (action, index) {
          return _c("b-dropdown-item", {
            key: index,
            attrs: {
              link: ""
            },
            on: {
              click: function click($event) {
                return _vm.onAction(data.item, action.value);
              }
            }
          }, [[_c("b-icon", {
            attrs: {
              variant: action.variant
            }
          }), _vm._v(" "), _c("span", {
            "class": {
              "text-primary": action.variant === "primary"
            },
            domProps: {
              innerHTML: _vm._s(action.title)
            }
          })]], 2);
        })], 2)];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("p", [_vm._v("\n            " + _vm._s("Showing ".concat(_vm.showing.from, " to ").concat(_vm.showing.to, " of ").concat(_vm.showing.total, " entries")) + "\n          ")])]), _vm._v(" "), _c("div", {
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
  })], 1)])])]), _vm._v(" "), _c("PayrollModal", {
    attrs: {
      payrollForm: _vm.payrollForm
    },
    on: {
      loadPayrolls: function loadPayrolls($event) {
        return _vm.loadPayrolls();
      }
    }
  }), _vm._v(" "), _c("PayrollDeleteModal", {
    attrs: {
      payrollForm: _vm.payrollForm
    },
    on: {
      loadPayrolls: function loadPayrolls($event) {
        return _vm.loadPayrolls();
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
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c ***!
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
      id: "payroll-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.emp.full_name, " from Payroll records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486 ***!
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
  return _c("b-modal", {
    attrs: {
      id: "payroll-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Payroll" : "Add Payroll"))]), _vm._v(" "), _c("b-button", {
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
            id: "employee-name",
            label: "Employee Name",
            "label-for": "employee-name"
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
            search: _vm.onSearchEmployee,
            "option:selected": _vm.onChangeSelectedEmployee
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
                  disabled: !_vm.hasEmployeesPrevPage || _vm.isPrevButtonLoading
                },
                on: {
                  click: _vm.onPrevPage
                }
              }, [_vm.isPrevButtonLoading ? _c("b-spinner", {
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
                  disabled: !_vm.hasEmployeesNextPage || _vm.isNextButtonLoading,
                  variant: "light",
                  block: ""
                },
                on: {
                  click: _vm.onNextPage
                }
              }, [_vm.isNextButtonLoading ? _c("b-spinner", {
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
            value: _vm.form.period,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "period", $$v);
            },
            expression: "form.period"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.period ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.period[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "basic-salary",
            label: "Basic Salary",
            "label-for": "basic-salary"
          }
        }, [_c("b-row", [_c("b-col", {
          attrs: {
            cols: "7"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "basic-salary",
            type: "number",
            step: "0.01",
            min: "0.00",
            readonly: ""
          },
          model: {
            value: _vm.form.basic_salary,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "basic_salary", $$v);
            },
            expression: "form.basic_salary"
          }
        })], 1), _vm._v(" "), _c("b-col", {
          staticClass: "d-flex align-items-center",
          attrs: {
            cols: "5"
          }
        }, [_c("a", {
          staticClass: "font-weight-bold",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: function click($event) {
              return _vm.getBasicSalary();
            }
          }
        }, [_vm._v("\n              Get Basic Salary\n            ")])]), _vm._v(" "), _c("b-col", {
          attrs: {
            cols: "12"
          }
        }, [_vm.errors && _vm.errors.basic_salary ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.basic_salary[0]))]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "total-overtime",
            label: "Total Overtime",
            "label-for": "total-overtime"
          }
        }, [_c("b-row", [_c("b-col", {
          attrs: {
            cols: "7"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "total-overtime",
            type: "number",
            step: "0.01",
            min: "0.00",
            readonly: ""
          },
          model: {
            value: _vm.form.total_overtime,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "total_overtime", $$v);
            },
            expression: "form.total_overtime"
          }
        })], 1), _vm._v(" "), _c("b-col", {
          staticClass: "d-flex align-items-center",
          attrs: {
            cols: "5"
          }
        }, [_c("a", {
          staticClass: "font-weight-bold",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: function click($event) {
              return _vm.getTotalOvertime();
            }
          }
        }, [_vm._v("\n              Get Total Overtime\n            ")])]), _vm._v(" "), _c("b-col", {
          attrs: {
            cols: "12"
          }
        }, [_vm.errors && _vm.errors.total_overtime ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.total_overtime[0]))]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "other-pay",
            label: "Other Pay",
            "label-for": "other-pay"
          }
        }, [_c("b-row", [_c("b-col", [_c("b-form-input", {
          attrs: {
            id: "input-3",
            type: "number",
            step: "0.01",
            min: "0.00",
            required: ""
          },
          model: {
            value: _vm.form.other_pay,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "other_pay", $$v);
            },
            expression: "form.other_pay"
          }
        })], 1)], 1)], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "gross-salary",
            label: "Gross Salary",
            "label-for": "gross-salary"
          }
        }, [_c("b-row", [_c("b-col", [_c("b-form-input", {
          attrs: {
            id: "input-3",
            type: "number",
            step: "0.01",
            min: "0.00",
            readonly: ""
          },
          model: {
            value: _vm.form.gross_salary,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "gross_salary", $$v);
            },
            expression: "form.gross_salary"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.gross_salary ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.gross_salary[0]))]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "total-deductions",
            label: "Total Deductions",
            "label-for": "total-deductions"
          }
        }, [_c("b-row", [_c("b-col", {
          attrs: {
            cols: "7"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-3",
            type: "number",
            step: "0.01",
            min: "0.00",
            readonly: ""
          },
          model: {
            value: _vm.form.total_deductions,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "total_deductions", $$v);
            },
            expression: "form.total_deductions"
          }
        })], 1), _vm._v(" "), _c("b-col", {
          staticClass: "d-flex align-items-center",
          attrs: {
            cols: "5"
          }
        }, [_c("a", {
          staticClass: "font-weight-bold",
          attrs: {
            href: "javascript:;"
          },
          on: {
            click: function click($event) {
              return _vm.getTotalDeductions();
            }
          }
        }, [_vm._v("\n              Get Total Deductions\n            ")])]), _vm._v(" "), _c("b-col", {
          attrs: {
            cols: "12"
          }
        }, [_vm.errors && _vm.errors.total_deductions ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.total_deductions[0]))]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "net-pay",
            label: "Net Pay",
            "label-for": "net-pay"
          }
        }, [_c("b-row", [_c("b-col", [_c("b-form-input", {
          attrs: {
            id: "input-3",
            type: "number",
            step: "0.01",
            min: "0.00",
            readonly: ""
          },
          model: {
            value: _vm.form.net_salary,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "net_salary", $$v);
            },
            expression: "form.net_salary"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.net_salary ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.net_salary[0]))]) : _vm._e()], 1)], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
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
        }, [_vm._v("\n          " + _vm._s(_vm.form.id ? "SAVE CHANGES" : "SAVE") + "\n        ")])], 1)], 1), _vm._v(" "), _c("PayrollPeriodsModal", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/payroll/modals/payrollModal.vue"],"names":[],"mappings":";AAmtBA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"payroll-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Payroll' : 'Add Payroll'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"employee-name\" label=\"Employee Name\" label-for=\"employee-name\">\n          <v-select\n            name=\"employees\"\n            label=\"full_name\"\n            v-model=\"form.emp\"\n            :options=\"employees\"\n            :filterable=\"false\"\n            :loading=\"isEmployeesDropdownLoading\"\n            @search=\"onSearchEmployee\"\n            @option:selected=\"onChangeSelectedEmployee\"\n            id=\"employees\"\n          >\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasEmployeesPrevPage || isPrevButtonLoading\"\n                      @click=\"onPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasEmployeesNextPage || isNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.emp_id\" class=\"text-danger\">{{ errors.emp_id[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-4\" label=\"Period\" label-for=\"input-4\">\n          <v-select\n            name=\"period\"\n            label=\"date_to\"\n            v-model=\"form.period\"\n            :options=\"payrollPeriods\"\n            :filterable=\"false\"\n            :loading=\"isPayrollPeriodsDropdownLoading\"\n            :reduce=\"(p) => p.id\"\n            @search=\"onSearchPayrollPeriod\"\n            id=\"period\"\n          >\n\n            <template #list-header>\n              <li class=\"mb-2 v-select-option-padding\">\n                <b-link href=\"#\" @click=\"createPayrollPeriod\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                  New Payroll Period\n                </b-link>\n              </li>\n            </template>\n            <template #selected-option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasPayrollPeriodsPrevPage || isPayrollPeriodsPrevButtonLoading\"\n                      @click=\"onPayrollPeriodPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPayrollPeriodsPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasPayrollPeriodsNextPage || isPayrollPeriodsNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onPayrollPeriodNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isPayrollPeriodsNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.period\" class=\"text-danger\">{{ errors.period[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"basic-salary\" label=\"Basic Salary\" label-for=\"basic-salary\">\n          <b-row>\n            <b-col cols=\"7\">\n              <b-form-input\n                id=\"basic-salary\"\n                v-model=\"form.basic_salary\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                readonly\n              ></b-form-input>\n            </b-col>\n            <b-col cols=\"5\" class=\"d-flex align-items-center\">\n              <a\n                href=\"javascript:;\"\n                class=\"font-weight-bold\"\n                @click=\"getBasicSalary()\"\n              >\n                Get Basic Salary\n              </a>\n            </b-col>\n            <b-col cols=\"12\">\n              <div v-if=\"errors && errors.basic_salary\" class=\"text-danger\">{{ errors.basic_salary[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n\n        <b-form-group id=\"total-overtime\" label=\"Total Overtime\" label-for=\"total-overtime\">\n          <b-row>\n            <b-col cols=\"7\">\n              <b-form-input\n                id=\"total-overtime\"\n                v-model=\"form.total_overtime\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                readonly\n              ></b-form-input>\n            </b-col>\n            <b-col cols=\"5\" class=\"d-flex align-items-center\">\n              <a\n                href=\"javascript:;\"\n                class=\"font-weight-bold\"\n                @click=\"getTotalOvertime()\"\n              >\n                Get Total Overtime\n              </a>\n            </b-col>\n            <b-col cols=\"12\">\n              <div v-if=\"errors && errors.total_overtime\" class=\"text-danger\">{{ errors.total_overtime[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        <b-form-group id=\"other-pay\" label=\"Other Pay\" label-for=\"other-pay\">\n          <b-row>\n            <b-col>\n              <b-form-input\n                id=\"input-3\"\n                v-model=\"form.other_pay\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                required\n              ></b-form-input>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        <b-form-group id=\"gross-salary\" label=\"Gross Salary\" label-for=\"gross-salary\">\n          <b-row>\n            <b-col>\n              <b-form-input\n                id=\"input-3\"\n                v-model=\"form.gross_salary\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                readonly\n              ></b-form-input>\n              <div v-if=\"errors && errors.gross_salary\" class=\"text-danger\">{{ errors.gross_salary[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        <b-form-group id=\"total-deductions\" label=\"Total Deductions\" label-for=\"total-deductions\">\n          <b-row>\n            <b-col cols=\"7\">\n              <b-form-input\n                id=\"input-3\"\n                v-model=\"form.total_deductions\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                readonly\n              ></b-form-input>\n            </b-col>\n            <b-col cols=\"5\" class=\"d-flex align-items-center\">\n              <a\n                href=\"javascript:;\"\n                class=\"font-weight-bold\"\n                @click=\"getTotalDeductions()\"\n              >\n                Get Total Deductions\n              </a>\n            </b-col>\n            <b-col cols=\"12\">\n              <div v-if=\"errors && errors.total_deductions\" class=\"text-danger\">{{ errors.total_deductions[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        <b-form-group id=\"net-pay\" label=\"Net Pay\" label-for=\"net-pay\">\n          <b-row>\n            <b-col>\n              <b-form-input\n                id=\"input-3\"\n                v-model=\"form.net_salary\"\n                type=\"number\"\n                step=\"0.01\" \n                min=\"0.00\"\n                readonly\n              ></b-form-input>\n              <div v-if=\"errors && errors.net_salary\" class=\"text-danger\">{{ errors.net_salary[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        \n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n      <PayrollPeriodsModal :payrollPeriodForm=\"payrollPeriodForm\" @loadPayrollPeriods=\"loadPayrollPeriods()\" :isSelf=\"false\"></PayrollPeriodsModal>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\nimport axios from \"axios\";\nimport toast from \"../../../../helpers/toast.js\";\nimport PayrollPeriodsModal from \"../../payrollPeriod/modals/payrollPeriodsModal.vue\";\nimport Form from \"../../../../helpers/form.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: [\"payrollForm\"],\n\n  components: {\n    PayrollPeriodsModal\n  },\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.payrollForm,\n      searched: \"\",\n      date: \"\",\n      errors: {},\n      isEmployeesDropdownLoading: false,\n      isNextButtonLoading: false,\n      isPrevButtonLoading: false,\n      employeesCurrentPage: 1,\n      employeesPerPage: 10,\n      employeesLastPage: 0,\n      employees: [],\n\n      isPayrollPeriodsDropdownLoading: false,\n      isPayrollPeriodsNextButtonLoading: false,\n      isPayrollPeriodsPrevButtonLoading: false,\n      payrollPeriodsCurrentPage: 1,\n      payrollPeriodsPerPage: 10,\n      payrollPeriodsLastPage: 0,\n      payrollPeriodsSearched: \"\",\n      payrollPeriods: [],\n\n      payrollPeriodForm: new Form({\n        id: \"\",\n        date_from: \"\",\n        date_to: \"\",\n      }),\n    };\n  },\n\n  mounted() {\n    this.loadEmployees();\n    this.loadPayrollPeriods();\n  },\n\n  methods: {\n    ...mapActions(\"payroll\", [\"createPayroll\", \"updatePayroll\"]),\n    ...mapActions(\"employee\", [\"onShow\"]),\n    \n    modalClose() {\n      this.$bvModal.hide(\"payroll-modal\");\n      this.errors = {};\n      this.form.reset();\n    },\n\n    onChangeSelectedEmployee(e) {\n      this.form.period = \"\";\n      this.form.basic_salary = \"\";\n      this.form.total_overtime = \"\";\n      this.form.total_deductions = \"\";\n      this.form.other_pay = \"\";\n      this.form.gross_salary = \"\";\n      this.form.net_salary = \"\";\n    },  \n\n    loadEmployees() {\n      let params = {\n        per_page: 10,\n        page: this.employeesCurrentPage,\n        search: this.searched,\n      }\n      axios\n        .get(\"/api/employees\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.employees = data.data;\n          this.employeesLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isEmployeesDropdownLoading = false;\n          this.isNextButtonLoading = false;\n          this.isPrevButtonLoading = false;\n        });\n    },\n\n    handleCreatePayroll() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\temp_id: this.form.emp.id,\n        period: this.form.period,\n        basic_salary: this.form.basic_salary,\n        total_overtime: this.form.total_overtime,\n        total_deductions: this.form.total_deductions,\n        other_pay: this.form.other_pay,\n        gross_salary: this.form.gross_salary,\n        net_salary: this.form.net_salary\n\t\t\t}\n\n      this.createPayroll(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.emp.full_name} has been created as a new Payroll`\n          );\n          this.$emit(\"loadPayrolls\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdatePayroll() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\temp_id: this.form.emp.id,\n        period: this.form.period,\n        basic_salary: this.form.basic_salary,\n        total_overtime: this.form.total_overtime,\n        total_deductions: this.form.total_deductions,\n        other_pay: this.form.other_pay,\n        gross_salary: this.form.gross_salary,\n        net_salary: this.form.net_salary\n\t\t\t}\n\n      this.updatePayroll(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Payroll ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadPayrolls\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onNextPage() {\n      this.isNextButtonLoading = true;\n      this.employeesCurrentPage += 1;\n      this.loadEmployees();\n    },\n\n    onPrevPage() {\n      this.isPrevButtonLoading = true;\n      this.employeesCurrentPage -= 1;\n      this.loadEmployees();\n    },\n\n    onSearchEmployee(search, loading) {\n      this.isEmployeesDropdownLoading = true;\n      this.performSearchEmployee(search);\n    },\n\n    performSearchEmployee: _.debounce(function (search) {\n      this.searched = search;\n\n      this.loadEmployees();\n    }, 1000),\n\n    loadPayrollPeriods() {\n      let params = {\n        per_page: 10,\n        page: this.payrollPeriodsCurrentPage,\n        search: this.payrollPeriodsSearched,\n      }\n      axios\n        .get(\"/api/payroll-periods\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.payrollPeriods = data.data;\n          this.payrollPeriodsLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isPayrollPeriodsDropdownLoading = false;\n          this.isPayrollPeriodsNextButtonLoading = false;\n          this.isPayrollPeriodsPrevButtonLoading = false;\n        });\n    },\n\n    onPayrollPeriodNextPage() {\n      this.isPayrollPeriodsNextButtonLoading = true;\n      this.payrollPeriodsCurrentPage += 1;\n      this.loadPayrollPeriods();\n    },\n\n    onPayrollPeriodPrevPage() {\n      this.isPayrollPeriodsPrevButtonLoading = true;\n      this.payrollPeriodsCurrentPage -= 1;\n      this.loadPayrollPeriods();\n    },\n\n    onSearchPayrollPeriod(search, loading) {\n      this.isPayrollPeriodsDropdownLoading = true;\n      this.performSearchPayrollPeriod(search);\n    },\n\n    performSearchPayrollPeriod: _.debounce(function (search) {\n      this.payrollPeriodsSearched = search;\n\n      this.loadPayrollPeriods();\n    }, 1000),\n\n    createPayrollPeriod() {\n      this.payrollPeriodForm.reset();\n      this.payrollPeriodForm.id = '';\n      this.payrollPeriodForm.date_from = '';\n      this.payrollPeriodForm.date_to = '';\n      this.$bvModal.show('payroll-period-modal');\n    },\n\n    calculateNetPayAndGrossSalary() {\n      let basicSalary = parseFloat(this.form.basic_salary) || 0;\n      let totalOvertime = parseFloat(this.form.total_overtime) || 0;\n      let otherPay = parseFloat(this.form.other_pay) || 0;\n      let totalDeductions = parseFloat(this.form.total_deductions) || 0; \n\n      let grossSalary = parseFloat(basicSalary + totalOvertime + otherPay) || 0\n      \n      this.form.gross_salary = grossSalary.toFixed(2);\n\n      this.form.net_salary = (grossSalary - totalDeductions).toFixed(2);\n    },\n\n    async getEmployee(id) {\n      let params = {\n        id: id,\n      };\n\n      return await this.onShow(params).then((r) => r);\n    },\n\n\n    async getBasicSalary() {\n      let vm = this;\n      if (vm.form.emp && vm.form.period) {\n        let employee = await this.getEmployee(vm.form.emp.id);\n        let payrollPeriods = _.cloneDeep(vm.payrollPeriods);\n        let payrollPeriod = payrollPeriods.find(x => x.id === vm.form.period);\n        let dailyTimeRecords = _.cloneDeep(employee.data.daily_time_records);\n        let hourlyRate = parseFloat(employee.data.hourly_rate) || 0;\n        let periodDateFrom = new Date(payrollPeriod.date_from);\n        let periodDateTo = new Date(payrollPeriod.date_to);\n        const schedule = employee.data.schedule;\n\n        dailyTimeRecords = dailyTimeRecords.filter((dtr) => {\n            let date = new Date(dtr.dtr_date);\n            return date.getTime() >= periodDateFrom.getTime() &&\n                  date.getTime() <= periodDateTo.getTime();\n        });\n\n        let numberOfHours = 0;\n\n        if (schedule) {\n          let noOfHrsBrk = parseFloat(schedule.no_of_hrs_brk) || 0;\n          \n          dailyTimeRecords.forEach(dtr => {\n            numberOfHours+=vm.calculateNumberOfHoursBySchedule(schedule.required_time_in, schedule.required_time_out, noOfHrsBrk, dtr.time_in, dtr.time_out)\n          });\n        }\n\n        vm.form.basic_salary = (hourlyRate * numberOfHours).toFixed(2);\n        \n      } else {\n\n        vm.form.basic_salary = \"\";\n      }\n    },\n\n    calculateNumberOfHoursBySchedule(scheduleStart, scheduleEnd, scheduleNoOfHrsBrk, timeIn, timeOut) {\n      if (timeOut == null) return 0;\n\n      let timeInDate = new Date(`1970-01-01T${timeIn}`);\n      let timeOutDate = new Date(`1970-01-01T${timeOut}`);\n\n      let scheduleStartDate = new Date(`1970-01-01T${scheduleStart}`);\n      let scheduleEndDate = new Date(`1970-01-01T${scheduleEnd}`);\n\n      let validTimeIn = timeInDate >= scheduleStartDate && timeInDate < scheduleEndDate;\n\n      if (!validTimeIn) {\n        timeInDate = scheduleStartDate;\n      }\n\n      if (!(timeOutDate < scheduleEndDate)) {\n        timeOutDate = scheduleEndDate;\n      }\n\n      let timeDiffMillis = timeOutDate - timeInDate;\n\n      let hours = (timeDiffMillis / (1000 * 60 * 60)) - scheduleNoOfHrsBrk;\n\n      return !isNaN(hours) && Number(hours) > 0 ? hours : 0;\n    },\n\n    calculateNumberOfHours(hoursFrom, hoursTo) {\n      let hoursFromDate = new Date(`1970-01-01T${hoursFrom}`);\n      let hoursToDate = new Date(`1970-01-01T${hoursTo}`);\n\n      let timeDiffMillis = hoursToDate - hoursFromDate;\n\n      let hours = timeDiffMillis / (1000 * 60 * 60);\n\n      return !isNaN(hours) && Number(hours) > 0 ? hours : 0;\n    },\n\n    async getTotalOvertime() {\n      let vm = this;\n      if (vm.form.emp) {\n        let employee = await this.getEmployee(vm.form.emp.id);\n        let overtimes = _.cloneDeep(employee.data.overtimes);\n        let filteredOvertimes = overtimes.filter(x => x.period === vm.form.period);\n        let hourlyRate = parseFloat(employee.data.hourly_rate) || 0;\n\n        let numberOfHours = 0;\n\n        filteredOvertimes.forEach(ot => {\n          numberOfHours+=vm.calculateNumberOfHours(ot.hours_from, ot.hours_to);\n        });\n\n        vm.form.total_overtime = (hourlyRate * numberOfHours).toFixed(2);\n\n      } else {\n        vm.form.total_overtime = \"\";\n      }\n    },\n\n    async getTotalDeductions() {\n      let vm = this;\n      if (vm.form.emp) {\n        let employee = await vm.getEmployee(vm.form.emp.id);\n\n        let totalDeductions = 0;\n\n        if (employee.data.deductions) {\n          let deductions = _.cloneDeep(employee.data.deductions);\n          deductions = deductions.filter((deduction) => {\n            return deduction.period === vm.form.period;\n          });\n          \n          deductions.forEach(deduction => {\n            totalDeductions+=deduction.amount;\n          });\n        }\n\n        vm.form.total_deductions = totalDeductions.toFixed(2);\n      } else {\n        vm.form.total_deductions = \"\";\n      }\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdatePayroll();\n      } else {\n        this.handleCreatePayroll();\n      }\n    },\n\n    formatDate(date) {\n      return this.moment(date).format('DD MMMM YYYY');\n    },\n  },\n\n  watch: {\n    'form.basic_salary': function (newVal, oldVal){\n      this.calculateNetPayAndGrossSalary();\n    },\n    'form.total_overtime': function(newVal, oldVal){\n      this.calculateNetPayAndGrossSalary();\n    },\n    'form.other_pay': function(newVal, oldVal){\n      this.calculateNetPayAndGrossSalary();\n    },\n    'form.total_deductions': function(newVal, oldVal){\n      this.calculateNetPayAndGrossSalary();\n    },\n  },\n\n  computed: {\n    hasEmployeesNextPage() {\n      return (\n        this.employeesCurrentPage !== this.employeesLastPage\n      );\n    },\n\n    hasEmployeesPrevPage() {\n      return this.employeesCurrentPage > 1;\n    },\n\n    hasPayrollPeriodsNextPage() {\n      return (\n        this.payrollPeriodsCurrentPage !== this.payrollPeriodsLastPage\n      );\n    },\n\n    hasPayrollPeriodsPrevPage() {\n      return this.payrollPeriodsCurrentPage > 1;\n    },\n  }\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_style_index_0_id_e2327486_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_style_index_0_id_e2327486_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_style_index_0_id_e2327486_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/backend/views/payroll/components/index.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/views/payroll/components/index.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3cd1241d */ "./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payroll/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payrollDeleteModal.vue?vue&type=template&id=f261135c */ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c");
/* harmony import */ var _payrollDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payrollDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _payrollDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__.render,
  _payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payroll/modals/payrollDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollModal.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollModal.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payrollModal.vue?vue&type=template&id=e2327486 */ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486");
/* harmony import */ var _payrollModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payrollModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js");
/* harmony import */ var _payrollModal_vue_vue_type_style_index_0_id_e2327486_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css */ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payrollModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__.render,
  _payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/payroll/modals/payrollModal.vue"
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

/***/ "./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d":
/*!***********************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3cd1241d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=3cd1241d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/components/index.vue?vue&type=template&id=3cd1241d");


/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollDeleteModal_vue_vue_type_template_id_f261135c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollDeleteModal.vue?vue&type=template&id=f261135c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollDeleteModal.vue?vue&type=template&id=f261135c");


/***/ }),

/***/ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486 ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_template_id_e2327486__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollModal.vue?vue&type=template&id=e2327486 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=template&id=e2327486");


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

/***/ "./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payrollModal_vue_vue_type_style_index_0_id_e2327486_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/payroll/modals/payrollModal.vue?vue&type=style&index=0&id=e2327486&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX3BheXJvbGxfY29tcG9uZW50c19pbmRleF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtFQUNmUSxNQUFBLEdBQUFELHlEQUFBO0VBRUFFLFVBQUE7SUFDQU4sWUFBQSxFQUFBQSxnRUFBQTtJQUNBQyxrQkFBQSxFQUFBQSxzRUFBQTtJQUNBQyxtQkFBQSxFQUFBQSxxRkFBQUE7RUFDQTtFQUNBSyxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBQyxRQUFBO01BQ0FDLFlBQUE7TUFDQUMsU0FBQTtNQUNBQyxNQUFBO01BQ0FDLFFBQUE7TUFDQWIsY0FBQSxFQUFBQSxvREFBQTtNQUNBYyxTQUFBO01BQ0FDLFFBQUE7TUFDQUMsT0FBQTtRQUNBQyxFQUFBO1FBQ0FDLElBQUE7UUFDQUMsS0FBQTtNQUNBO01BQ0FDLE1BQUE7TUFDQUMsY0FBQTtNQUNBQyxNQUFBLEdBQ0E7UUFDQUMsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtVQUFBQyxLQUFBO1FBQUE7TUFDQSxFQUNBO01BRUFDLCtCQUFBO01BQ0FDLGlDQUFBO01BQ0FDLGlDQUFBO01BQ0FDLHlCQUFBO01BQ0FDLHFCQUFBO01BQ0FDLHNCQUFBO01BQ0FDLHNCQUFBO01BQ0FDLGNBQUE7TUFFQUMsaUJBQUEsTUFBQWpDLHdEQUFBO1FBQ0FrQyxFQUFBO1FBQ0FDLFNBQUE7UUFDQUMsT0FBQTtNQUNBO01BRUFDLE9BQUEsR0FDQTtRQUFBQyxLQUFBO1FBQUFDLEtBQUE7UUFBQUMsT0FBQTtNQUFBLEdBQ0E7UUFBQUYsS0FBQTtRQUFBQyxLQUFBO1FBQUFDLE9BQUE7TUFBQSxHQUNBO1FBQUFGLEtBQUE7UUFBQUMsS0FBQTtRQUFBQyxPQUFBO01BQUEsRUFDQTtNQUVBQyxXQUFBLE1BQUF6Qyx3REFBQTtRQUNBa0MsRUFBQTtRQUNBUSxHQUFBO1FBQ0ExQixNQUFBO1FBQ0EyQixZQUFBO1FBQ0FDLGNBQUE7UUFDQUMsZ0JBQUE7UUFDQUMsU0FBQTtRQUNBQyxZQUFBO1FBQ0FDLFVBQUE7TUFDQTtNQUVBQyxPQUFBO0lBQ0E7RUFDQTtFQUVBQyxPQUFBLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNBekQsZ0RBQUE7SUFFQTBELHlCQUFBLFdBQUFBLDBCQUFBO01BQ0EsU0FBQXBDLE1BQUE7UUFDQSxJQUFBcUMsSUFBQSxvREFBQXJDLE1BQUE7UUFFQXNDLE1BQUEsQ0FBQUMsSUFBQSxDQUFBRixJQUFBO1FBRUE7TUFDQTtNQUVBLEtBQUFHLFNBQUEsQ0FDQSxVQUNBLHlEQUVBO0lBQ0E7SUFFQUMsYUFBQSxXQUFBQSxjQUFBO01BQ0EsS0FBQWhCLFdBQUEsQ0FBQWlCLEtBQUE7TUFDQSxLQUFBakIsV0FBQSxDQUFBQyxHQUFBO01BQ0EsS0FBQUQsV0FBQSxDQUFBekIsTUFBQTtNQUNBLEtBQUF5QixXQUFBLENBQUFFLFlBQUE7TUFDQSxLQUFBRixXQUFBLENBQUFHLGNBQUE7TUFDQSxLQUFBSCxXQUFBLENBQUFJLGdCQUFBO01BQ0EsS0FBQUosV0FBQSxDQUFBSyxTQUFBO01BQ0EsS0FBQUwsV0FBQSxDQUFBTSxZQUFBO01BQ0EsS0FBQU4sV0FBQSxDQUFBTyxVQUFBO01BRUEsS0FBQUMsT0FBQTtNQUNBLEtBQUFVLFFBQUEsQ0FBQUMsSUFBQSxNQUFBWCxPQUFBO0lBQ0E7SUFFQVksV0FBQSxXQUFBQSxZQUFBekQsSUFBQTtNQUNBLEtBQUFxQyxXQUFBLENBQUFpQixLQUFBO01BQ0EsS0FBQWpCLFdBQUEsQ0FBQVAsRUFBQSxHQUFBOUIsSUFBQSxDQUFBOEIsRUFBQTtNQUNBLEtBQUFPLFdBQUEsQ0FBQUMsR0FBQSxHQUFBdEMsSUFBQSxDQUFBMEQsUUFBQTtNQUNBLEtBQUFyQixXQUFBLENBQUF6QixNQUFBLEdBQUFaLElBQUEsQ0FBQTJELGNBQUEsQ0FBQTdCLEVBQUE7TUFDQSxLQUFBTyxXQUFBLENBQUFFLFlBQUEsR0FDQXFCLFVBQUEsQ0FBQTVELElBQUEsQ0FBQXVDLFlBQUEsRUFBQXNCLE9BQUE7TUFDQSxLQUFBeEIsV0FBQSxDQUFBRyxjQUFBLEdBQ0FvQixVQUFBLENBQUE1RCxJQUFBLENBQUF3QyxjQUFBLEVBQUFxQixPQUFBO01BQ0EsS0FBQXhCLFdBQUEsQ0FBQUksZ0JBQUEsR0FDQW1CLFVBQUEsQ0FBQTVELElBQUEsQ0FBQXlDLGdCQUFBLEVBQUFvQixPQUFBO01BQ0EsS0FBQXhCLFdBQUEsQ0FBQUssU0FBQSxHQUFBa0IsVUFBQSxDQUFBNUQsSUFBQSxDQUFBMEMsU0FBQSxFQUFBbUIsT0FBQTtNQUVBLEtBQUFoQixPQUFBO01BQ0EsS0FBQVUsUUFBQSxDQUFBQyxJQUFBLE1BQUFYLE9BQUE7SUFDQTtJQUVBaUIsYUFBQSxXQUFBQSxjQUFBOUQsSUFBQTtNQUNBLEtBQUFxQyxXQUFBLENBQUFpQixLQUFBO01BQ0EsS0FBQWpCLFdBQUEsQ0FBQVAsRUFBQSxHQUFBOUIsSUFBQSxDQUFBOEIsRUFBQTtNQUNBLEtBQUFPLFdBQUEsQ0FBQUMsR0FBQSxHQUFBdEMsSUFBQSxDQUFBMEQsUUFBQTtNQUNBLEtBQUFyQixXQUFBLENBQUF6QixNQUFBLEdBQUFaLElBQUEsQ0FBQTJELGNBQUEsQ0FBQTdCLEVBQUE7TUFDQSxLQUFBTyxXQUFBLENBQUFFLFlBQUEsR0FBQXZDLElBQUEsQ0FBQXVDLFlBQUE7TUFDQSxLQUFBRixXQUFBLENBQUFHLGNBQUEsR0FBQXhDLElBQUEsQ0FBQXdDLGNBQUE7TUFDQSxLQUFBSCxXQUFBLENBQUFJLGdCQUFBLEdBQUF6QyxJQUFBLENBQUF5QyxnQkFBQTtNQUNBLEtBQUFKLFdBQUEsQ0FBQUssU0FBQSxHQUFBMUMsSUFBQSxDQUFBMEMsU0FBQTtNQUNBLEtBQUFMLFdBQUEsQ0FBQU0sWUFBQSxHQUFBM0MsSUFBQSxDQUFBMkMsWUFBQTtNQUNBLEtBQUFOLFdBQUEsQ0FBQU8sVUFBQSxHQUFBNUMsSUFBQSxDQUFBNEMsVUFBQTtNQUVBLEtBQUFDLE9BQUE7TUFDQSxLQUFBVSxRQUFBLENBQUFDLElBQUEsTUFBQVgsT0FBQTtJQUNBO0lBRUFrQixZQUFBLFdBQUFBLGFBQUFDLElBQUE7TUFDQSxJQUFBZixJQUFBLGdDQUFBZSxJQUFBLENBQUFsQyxFQUFBO01BRUFvQixNQUFBLENBQUFDLElBQUEsQ0FBQUYsSUFBQTtJQUNBO0lBRUFnQixRQUFBLFdBQUFBLFNBQUFELElBQUEsRUFBQTdCLEtBQUE7TUFDQSxRQUFBQSxLQUFBO1FBQ0E7VUFDQSxLQUFBc0IsV0FBQSxDQUFBTyxJQUFBO1VBQ0E7UUFDQTtVQUNBLEtBQUFELFlBQUEsQ0FBQUMsSUFBQTtVQUNBO1FBQ0E7VUFDQSxLQUFBRixhQUFBLENBQUFFLElBQUE7VUFDQTtNQUNBO0lBQ0E7SUFFQUUsWUFBQSxXQUFBQSxhQUFBO01BQUEsSUFBQUMsS0FBQTtNQUNBLElBQUFDLE1BQUE7UUFDQW5FLFFBQUEsT0FBQUEsUUFBQTtRQUNBb0UsSUFBQSxPQUFBbkUsWUFBQTtRQUNBb0UsTUFBQSxPQUFBakU7TUFDQTtNQUNBLEtBQUFrRSxTQUFBLENBQUFILE1BQUEsRUFDQUksSUFBQSxXQUFBQyxDQUFBO1FBQ0FOLEtBQUEsQ0FBQXRELGNBQUEsR0FBQXNELEtBQUEsQ0FBQU8sS0FBQSxDQUFBL0QsS0FBQTtRQUNBd0QsS0FBQSxDQUFBM0QsT0FBQSxDQUFBQyxFQUFBLEdBQUEwRCxLQUFBLENBQUFPLEtBQUEsQ0FBQWpFLEVBQUE7UUFDQTBELEtBQUEsQ0FBQTNELE9BQUEsQ0FBQUUsSUFBQSxHQUFBeUQsS0FBQSxDQUFBTyxLQUFBLENBQUFoRSxJQUFBO1FBQ0F5RCxLQUFBLENBQUEzRCxPQUFBLENBQUFHLEtBQUEsR0FBQXdELEtBQUEsQ0FBQU8sS0FBQSxDQUFBL0QsS0FBQTtNQUNBLGFBQ0E7UUFDQXdELEtBQUEsQ0FBQWhFLFNBQUE7TUFDQTtJQUNBO0lBRUF3RSxhQUFBLEVBQUFGLENBQUEsQ0FBQUcsUUFBQSxXQUFBQyxLQUFBO01BQ0EsS0FBQXhFLFFBQUEsR0FBQXdFLEtBQUE7SUFDQTtJQUVBQyxrQkFBQSxXQUFBQSxtQkFBQTtNQUFBLElBQUFDLE1BQUE7TUFDQSxJQUFBWCxNQUFBO1FBQ0FuRSxRQUFBO1FBQ0FvRSxJQUFBLE9BQUE3Qyx5QkFBQTtRQUNBOEMsTUFBQSxPQUFBM0M7TUFDQTtNQUNBcUQsS0FBQSxDQUNBQyxHQUFBO1FBQUFiLE1BQUEsRUFBQUE7TUFBQSxHQUNBSSxJQUFBLFdBQUFVLFFBQUE7UUFDQSxJQUFBbEYsSUFBQSxHQUFBa0YsUUFBQSxDQUFBbEYsSUFBQSxDQUFBQSxJQUFBO1FBQ0ErRSxNQUFBLENBQUFuRCxjQUFBLEdBQUE1QixJQUFBLENBQUFBLElBQUE7UUFDQStFLE1BQUEsQ0FBQXJELHNCQUFBLEdBQUExQixJQUFBLENBQUFtRixTQUFBO01BQ0EsYUFDQTtRQUNBSixNQUFBLENBQUExRCwrQkFBQTtRQUNBMEQsTUFBQSxDQUFBekQsaUNBQUE7UUFDQXlELE1BQUEsQ0FBQXhELGlDQUFBO01BQ0E7SUFDQTtJQUVBNkQsdUJBQUEsV0FBQUEsd0JBQUE7TUFDQSxLQUFBOUQsaUNBQUE7TUFDQSxLQUFBRSx5QkFBQTtNQUNBLEtBQUFzRCxrQkFBQTtJQUNBO0lBRUFPLHVCQUFBLFdBQUFBLHdCQUFBO01BQ0EsS0FBQTlELGlDQUFBO01BQ0EsS0FBQUMseUJBQUE7TUFDQSxLQUFBc0Qsa0JBQUE7SUFDQTtJQUVBUSxxQkFBQSxXQUFBQSxzQkFBQWhCLE1BQUEsRUFBQWlCLE9BQUE7TUFDQSxLQUFBbEUsK0JBQUE7TUFDQSxLQUFBbUUsMEJBQUEsQ0FBQWxCLE1BQUE7SUFDQTtJQUVBa0IsMEJBQUEsRUFBQWYsQ0FBQSxDQUFBRyxRQUFBLFdBQUFOLE1BQUE7TUFDQSxLQUFBM0Msc0JBQUEsR0FBQTJDLE1BQUE7TUFFQSxLQUFBUSxrQkFBQTtJQUNBO0lBRUFXLG1CQUFBLFdBQUFBLG9CQUFBO01BQ0EsS0FBQTVELGlCQUFBLENBQUF5QixLQUFBO01BQ0EsS0FBQXpCLGlCQUFBLENBQUFDLEVBQUE7TUFDQSxLQUFBRCxpQkFBQSxDQUFBRSxTQUFBO01BQ0EsS0FBQUYsaUJBQUEsQ0FBQUcsT0FBQTtNQUNBLEtBQUF1QixRQUFBLENBQUFDLElBQUE7SUFDQTtJQUVBa0MsVUFBQSxXQUFBQSxXQUFBQyxZQUFBO01BQ0EsSUFBQUMsbUJBQUEsR0FBQUQsWUFBQSxDQUFBRSxLQUFBO1FBQUFDLG9CQUFBLEdBQUFDLGNBQUEsQ0FBQUgsbUJBQUE7UUFBQUksS0FBQSxHQUFBRixvQkFBQTtRQUFBRyxPQUFBLEdBQUFILG9CQUFBO01BQ0EsSUFBQUksSUFBQSxPQUFBQyxJQUFBO01BQ0FELElBQUEsQ0FBQUUsUUFBQSxDQUFBSixLQUFBO01BQ0FFLElBQUEsQ0FBQUcsVUFBQSxDQUFBSixPQUFBO01BQ0EsSUFBQUssSUFBQSxHQUFBSixJQUFBLENBQUFLLFFBQUE7TUFDQSxJQUFBQyxPQUFBLEdBQUFOLElBQUEsQ0FBQUssUUFBQTtNQUNBQyxPQUFBLEdBQUFBLE9BQUEsR0FBQUEsT0FBQTtNQUNBLFVBQUFDLE1BQUEsQ0FBQUQsT0FBQSxPQUFBQyxNQUFBLENBQUFSLE9BQUEsT0FBQVEsTUFBQSxDQUFBSCxJQUFBO0lBQ0E7SUFFQUksVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BQ0EsWUFBQUMsTUFBQSxDQUFBRCxJQUFBLEVBQUFFLE1BQUE7SUFDQTtFQUFBLEVBQ0E7RUFDQUMsT0FBQSxXQUFBQSxRQUFBO0lBQ0EsS0FBQTVDLFlBQUE7SUFDQSxLQUFBWSxrQkFBQTtFQUNBO0VBRUFpQyxRQUFBLEVBQUFoRSxhQUFBLENBQUFBLGFBQUEsS0FDQXhELGdEQUFBO0lBQ0FtRixLQUFBO0VBQ0E7SUFFQXNDLHlCQUFBLFdBQUFBLDBCQUFBO01BQ0EsWUFBQXhGLHlCQUFBLFVBQUFFLHNCQUFBO0lBQ0E7SUFFQXVGLHlCQUFBLFdBQUFBLDBCQUFBO01BQ0EsWUFBQXpGLHlCQUFBO0lBQ0E7RUFBQSxFQUNBO0VBRUEwRixLQUFBO0lBQ0FoSCxZQUFBO01BQ0FpSCxPQUFBLFdBQUFBLFFBQUFqRixLQUFBO1FBQ0EsS0FBQWdDLFlBQUE7TUFDQTtJQUNBO0lBRUFqRSxRQUFBO01BQ0FrSCxPQUFBLFdBQUFBLFFBQUFqRixLQUFBO1FBQ0EsS0FBQWdDLFlBQUE7TUFDQTtJQUNBO0lBRUE5RCxNQUFBLFdBQUFBLE9BQUF5RSxLQUFBO01BQ0EsS0FBQUYsYUFBQSxDQUFBRSxLQUFBO0lBQ0E7SUFFQXhFLFFBQUE7TUFDQThHLE9BQUEsV0FBQUEsUUFBQWpGLEtBQUE7UUFDQSxLQUFBZ0MsWUFBQTtNQUNBO0lBQ0E7RUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3aUJEO0FBRUE7QUFFQSxpRUFBZTtFQUNmcEUsTUFBQSxHQUFBRCx5REFBQTtFQUVBdUgsS0FBQTtFQUVBcEgsSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQUcsU0FBQTtNQUNBa0gsSUFBQSxPQUFBaEY7SUFDQTtFQUNBO0VBRUFTLE9BQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0F6RCxnREFBQTtJQUVBZ0ksVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BRUEsS0FBQWhFLFFBQUEsQ0FBQWlFLElBQUE7SUFFQTtJQUVBQyxRQUFBLFdBQUFBLFNBQUE7TUFBQSxJQUFBdEQsS0FBQTtNQUNBLEtBQUFoRSxTQUFBO01BRUEsSUFBQWlFLE1BQUE7UUFDQXRDLEVBQUEsT0FBQXVGLElBQUEsQ0FBQXZGO01BQ0E7TUFFQSxLQUFBZ0MsYUFBQSxDQUFBTSxNQUFBLEVBQ0FJLElBQUEsV0FBQUMsQ0FBQTtRQUNBTixLQUFBLENBQUFmLFNBQUEsQ0FDQSxVQUNBLHFCQUFBcUQsTUFBQSxDQUNBdEMsS0FBQSxDQUFBa0QsSUFBQSxDQUFBL0UsR0FBQSxDQUFBb0YsU0FBQSw0Q0FDQTtRQUNBdkQsS0FBQSxDQUFBd0QsS0FBQTtRQUNBeEQsS0FBQSxDQUFBWixRQUFBLENBQUFpRSxJQUFBO01BQ0EsV0FDQSxXQUFBSSxLQUFBO1FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxLQUFBLENBQUExQyxRQUFBLENBQUFsRixJQUFBLENBQUE2SCxNQUFBO01BQ0EsYUFDQTtRQUNBMUQsS0FBQSxDQUFBaEUsU0FBQTtNQUNBO0lBQ0E7RUFBQTtBQUdBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbU5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZTtFQUNmTCxNQUFBLEdBQUFELHlEQUFBO0VBRUF1SCxLQUFBO0VBRUFySCxVQUFBO0lBQ0FKLG1CQUFBLEVBQUFBLHFGQUFBQTtFQUNBO0VBRUFLLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FHLFNBQUE7TUFDQWtILElBQUEsT0FBQWhGLFdBQUE7TUFDQWhDLFFBQUE7TUFDQXNHLElBQUE7TUFDQWtCLE1BQUE7TUFDQUMsMEJBQUE7TUFDQUMsbUJBQUE7TUFDQUMsbUJBQUE7TUFDQUMsb0JBQUE7TUFDQUMsZ0JBQUE7TUFDQUMsaUJBQUE7TUFDQUMsU0FBQTtNQUVBL0csK0JBQUE7TUFDQUMsaUNBQUE7TUFDQUMsaUNBQUE7TUFDQUMseUJBQUE7TUFDQUMscUJBQUE7TUFDQUMsc0JBQUE7TUFDQUMsc0JBQUE7TUFDQUMsY0FBQTtNQUVBQyxpQkFBQSxNQUFBakMsd0RBQUE7UUFDQWtDLEVBQUE7UUFDQUMsU0FBQTtRQUNBQyxPQUFBO01BQ0E7SUFDQTtFQUNBO0VBRUE4RSxPQUFBLFdBQUFBLFFBQUE7SUFDQSxLQUFBdUIsYUFBQTtJQUNBLEtBQUF2RCxrQkFBQTtFQUNBO0VBRUFoQyxPQUFBLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLEtBQ0F6RCxnREFBQSxrREFDQUEsZ0RBQUE7SUFFQWdJLFVBQUEsV0FBQUEsV0FBQTtNQUNBLEtBQUEvRCxRQUFBLENBQUFpRSxJQUFBO01BQ0EsS0FBQUssTUFBQTtNQUNBLEtBQUFSLElBQUEsQ0FBQS9ELEtBQUE7SUFDQTtJQUVBZ0Ysd0JBQUEsV0FBQUEseUJBQUFDLENBQUE7TUFDQSxLQUFBbEIsSUFBQSxDQUFBekcsTUFBQTtNQUNBLEtBQUF5RyxJQUFBLENBQUE5RSxZQUFBO01BQ0EsS0FBQThFLElBQUEsQ0FBQTdFLGNBQUE7TUFDQSxLQUFBNkUsSUFBQSxDQUFBNUUsZ0JBQUE7TUFDQSxLQUFBNEUsSUFBQSxDQUFBM0UsU0FBQTtNQUNBLEtBQUEyRSxJQUFBLENBQUExRSxZQUFBO01BQ0EsS0FBQTBFLElBQUEsQ0FBQXpFLFVBQUE7SUFDQTtJQUVBeUYsYUFBQSxXQUFBQSxjQUFBO01BQUEsSUFBQWxFLEtBQUE7TUFDQSxJQUFBQyxNQUFBO1FBQ0FuRSxRQUFBO1FBQ0FvRSxJQUFBLE9BQUE0RCxvQkFBQTtRQUNBM0QsTUFBQSxPQUFBakU7TUFDQTtNQUNBMkUsZ0RBQ0E7UUFBQVosTUFBQSxFQUFBQTtNQUFBLEdBQ0FJLElBQUEsV0FBQVUsUUFBQTtRQUNBLElBQUFsRixJQUFBLEdBQUFrRixRQUFBLENBQUFsRixJQUFBLENBQUFBLElBQUE7UUFDQW1FLEtBQUEsQ0FBQWlFLFNBQUEsR0FBQXBJLElBQUEsQ0FBQUEsSUFBQTtRQUNBbUUsS0FBQSxDQUFBZ0UsaUJBQUEsR0FBQW5JLElBQUEsQ0FBQW1GLFNBQUE7TUFDQSxhQUNBO1FBQ0FoQixLQUFBLENBQUEyRCwwQkFBQTtRQUNBM0QsS0FBQSxDQUFBNEQsbUJBQUE7UUFDQTVELEtBQUEsQ0FBQTZELG1CQUFBO01BQ0E7SUFDQTtJQUVBUSxtQkFBQSxXQUFBQSxvQkFBQTtNQUFBLElBQUF6RCxNQUFBO01BQ0EsS0FBQTVFLFNBQUE7TUFFQSxJQUFBaUUsTUFBQTtRQUNBcUUsTUFBQSxPQUFBcEIsSUFBQSxDQUFBL0UsR0FBQSxDQUFBUixFQUFBO1FBQ0FsQixNQUFBLE9BQUF5RyxJQUFBLENBQUF6RyxNQUFBO1FBQ0EyQixZQUFBLE9BQUE4RSxJQUFBLENBQUE5RSxZQUFBO1FBQ0FDLGNBQUEsT0FBQTZFLElBQUEsQ0FBQTdFLGNBQUE7UUFDQUMsZ0JBQUEsT0FBQTRFLElBQUEsQ0FBQTVFLGdCQUFBO1FBQ0FDLFNBQUEsT0FBQTJFLElBQUEsQ0FBQTNFLFNBQUE7UUFDQUMsWUFBQSxPQUFBMEUsSUFBQSxDQUFBMUUsWUFBQTtRQUNBQyxVQUFBLE9BQUF5RSxJQUFBLENBQUF6RTtNQUNBO01BRUEsS0FBQVMsYUFBQSxDQUFBZSxNQUFBLEVBQ0FJLElBQUEsV0FBQUMsQ0FBQTtRQUNBTSxNQUFBLENBQUEzQixTQUFBLENBQ0EsV0FDQSx5QkFBQXFELE1BQUEsQ0FDQTFCLE1BQUEsQ0FBQXNDLElBQUEsQ0FBQS9FLEdBQUEsQ0FBQW9GLFNBQUEsdUNBQ0E7UUFDQTNDLE1BQUEsQ0FBQTRDLEtBQUE7UUFDQTVDLE1BQUEsQ0FBQXVDLFVBQUE7TUFDQSxXQUNBLFdBQUFNLEtBQUE7UUFDQSxJQUFBQyxNQUFBLEdBQUFELEtBQUEsQ0FBQTFDLFFBQUEsQ0FBQWxGLElBQUEsQ0FBQTZILE1BQUE7UUFDQTlDLE1BQUEsQ0FBQThDLE1BQUEsR0FBQUEsTUFBQTtNQUNBLGFBQ0E7UUFDQTlDLE1BQUEsQ0FBQTVFLFNBQUE7TUFDQTtJQUNBO0lBRUF1SSxtQkFBQSxXQUFBQSxvQkFBQTtNQUFBLElBQUFDLE1BQUE7TUFDQSxLQUFBeEksU0FBQTtNQUVBLElBQUFpRSxNQUFBO1FBQ0F0QyxFQUFBLE9BQUF1RixJQUFBLENBQUF2RixFQUFBO1FBQ0EyRyxNQUFBLE9BQUFwQixJQUFBLENBQUEvRSxHQUFBLENBQUFSLEVBQUE7UUFDQWxCLE1BQUEsT0FBQXlHLElBQUEsQ0FBQXpHLE1BQUE7UUFDQTJCLFlBQUEsT0FBQThFLElBQUEsQ0FBQTlFLFlBQUE7UUFDQUMsY0FBQSxPQUFBNkUsSUFBQSxDQUFBN0UsY0FBQTtRQUNBQyxnQkFBQSxPQUFBNEUsSUFBQSxDQUFBNUUsZ0JBQUE7UUFDQUMsU0FBQSxPQUFBMkUsSUFBQSxDQUFBM0UsU0FBQTtRQUNBQyxZQUFBLE9BQUEwRSxJQUFBLENBQUExRSxZQUFBO1FBQ0FDLFVBQUEsT0FBQXlFLElBQUEsQ0FBQXpFO01BQ0E7TUFFQSxLQUFBZ0csYUFBQSxDQUFBeEUsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQWtFLE1BQUEsQ0FBQXZGLFNBQUEsQ0FDQSxXQUNBLHNEQUFBcUQsTUFBQSxDQUNBa0MsTUFBQSxDQUFBdEIsSUFBQSxDQUFBdkYsRUFBQSx1QkFDQTtRQUNBNkcsTUFBQSxDQUFBaEIsS0FBQTtRQUNBZ0IsTUFBQSxDQUFBckIsVUFBQTtNQUNBLFdBQ0EsV0FBQU0sS0FBQTtRQUNBLElBQUFDLE1BQUEsR0FBQUQsS0FBQSxDQUFBMUMsUUFBQSxDQUFBbEYsSUFBQSxDQUFBNkgsTUFBQTtRQUNBYyxNQUFBLENBQUFkLE1BQUEsR0FBQUEsTUFBQTtNQUNBLGFBQ0E7UUFDQWMsTUFBQSxDQUFBeEksU0FBQTtNQUNBO0lBQ0E7SUFFQTBJLFVBQUEsV0FBQUEsV0FBQTtNQUNBLEtBQUFkLG1CQUFBO01BQ0EsS0FBQUUsb0JBQUE7TUFDQSxLQUFBSSxhQUFBO0lBQ0E7SUFFQVMsVUFBQSxXQUFBQSxXQUFBO01BQ0EsS0FBQWQsbUJBQUE7TUFDQSxLQUFBQyxvQkFBQTtNQUNBLEtBQUFJLGFBQUE7SUFDQTtJQUVBVSxnQkFBQSxXQUFBQSxpQkFBQXpFLE1BQUEsRUFBQWlCLE9BQUE7TUFDQSxLQUFBdUMsMEJBQUE7TUFDQSxLQUFBa0IscUJBQUEsQ0FBQTFFLE1BQUE7SUFDQTtJQUVBMEUscUJBQUEsRUFBQXZFLENBQUEsQ0FBQUcsUUFBQSxXQUFBTixNQUFBO01BQ0EsS0FBQWpFLFFBQUEsR0FBQWlFLE1BQUE7TUFFQSxLQUFBK0QsYUFBQTtJQUNBO0lBRUF2RCxrQkFBQSxXQUFBQSxtQkFBQTtNQUFBLElBQUFtRSxNQUFBO01BQ0EsSUFBQTdFLE1BQUE7UUFDQW5FLFFBQUE7UUFDQW9FLElBQUEsT0FBQTdDLHlCQUFBO1FBQ0E4QyxNQUFBLE9BQUEzQztNQUNBO01BQ0FxRCxnREFDQTtRQUFBWixNQUFBLEVBQUFBO01BQUEsR0FDQUksSUFBQSxXQUFBVSxRQUFBO1FBQ0EsSUFBQWxGLElBQUEsR0FBQWtGLFFBQUEsQ0FBQWxGLElBQUEsQ0FBQUEsSUFBQTtRQUNBaUosTUFBQSxDQUFBckgsY0FBQSxHQUFBNUIsSUFBQSxDQUFBQSxJQUFBO1FBQ0FpSixNQUFBLENBQUF2SCxzQkFBQSxHQUFBMUIsSUFBQSxDQUFBbUYsU0FBQTtNQUNBLGFBQ0E7UUFDQThELE1BQUEsQ0FBQTVILCtCQUFBO1FBQ0E0SCxNQUFBLENBQUEzSCxpQ0FBQTtRQUNBMkgsTUFBQSxDQUFBMUgsaUNBQUE7TUFDQTtJQUNBO0lBRUE2RCx1QkFBQSxXQUFBQSx3QkFBQTtNQUNBLEtBQUE5RCxpQ0FBQTtNQUNBLEtBQUFFLHlCQUFBO01BQ0EsS0FBQXNELGtCQUFBO0lBQ0E7SUFFQU8sdUJBQUEsV0FBQUEsd0JBQUE7TUFDQSxLQUFBOUQsaUNBQUE7TUFDQSxLQUFBQyx5QkFBQTtNQUNBLEtBQUFzRCxrQkFBQTtJQUNBO0lBRUFRLHFCQUFBLFdBQUFBLHNCQUFBaEIsTUFBQSxFQUFBaUIsT0FBQTtNQUNBLEtBQUFsRSwrQkFBQTtNQUNBLEtBQUFtRSwwQkFBQSxDQUFBbEIsTUFBQTtJQUNBO0lBRUFrQiwwQkFBQSxFQUFBZixDQUFBLENBQUFHLFFBQUEsV0FBQU4sTUFBQTtNQUNBLEtBQUEzQyxzQkFBQSxHQUFBMkMsTUFBQTtNQUVBLEtBQUFRLGtCQUFBO0lBQ0E7SUFFQVcsbUJBQUEsV0FBQUEsb0JBQUE7TUFDQSxLQUFBNUQsaUJBQUEsQ0FBQXlCLEtBQUE7TUFDQSxLQUFBekIsaUJBQUEsQ0FBQUMsRUFBQTtNQUNBLEtBQUFELGlCQUFBLENBQUFFLFNBQUE7TUFDQSxLQUFBRixpQkFBQSxDQUFBRyxPQUFBO01BQ0EsS0FBQXVCLFFBQUEsQ0FBQUMsSUFBQTtJQUNBO0lBRUEwRiw2QkFBQSxXQUFBQSw4QkFBQTtNQUNBLElBQUFDLFdBQUEsR0FBQXZGLFVBQUEsTUFBQXlELElBQUEsQ0FBQTlFLFlBQUE7TUFDQSxJQUFBNkcsYUFBQSxHQUFBeEYsVUFBQSxNQUFBeUQsSUFBQSxDQUFBN0UsY0FBQTtNQUNBLElBQUE2RyxRQUFBLEdBQUF6RixVQUFBLE1BQUF5RCxJQUFBLENBQUEzRSxTQUFBO01BQ0EsSUFBQTRHLGVBQUEsR0FBQTFGLFVBQUEsTUFBQXlELElBQUEsQ0FBQTVFLGdCQUFBO01BRUEsSUFBQThHLFdBQUEsR0FBQTNGLFVBQUEsQ0FBQXVGLFdBQUEsR0FBQUMsYUFBQSxHQUFBQyxRQUFBO01BRUEsS0FBQWhDLElBQUEsQ0FBQTFFLFlBQUEsR0FBQTRHLFdBQUEsQ0FBQTFGLE9BQUE7TUFFQSxLQUFBd0QsSUFBQSxDQUFBekUsVUFBQSxJQUFBMkcsV0FBQSxHQUFBRCxlQUFBLEVBQUF6RixPQUFBO0lBQ0E7SUFFQTJGLFdBQUEsV0FBQUEsWUFBQTFILEVBQUE7TUFBQSxJQUFBMkgsTUFBQTtNQUFBLE9BQUFDLGlCQUFBLGVBQUFDLG1CQUFBLEdBQUFDLElBQUEsVUFBQUMsUUFBQTtRQUFBLElBQUF6RixNQUFBO1FBQUEsT0FBQXVGLG1CQUFBLEdBQUFHLElBQUEsVUFBQUMsU0FBQUMsUUFBQTtVQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1lBQUE7Y0FDQTlGLE1BQUE7Z0JBQ0F0QyxFQUFBLEVBQUFBO2NBQ0E7Y0FBQWtJLFFBQUEsQ0FBQUUsSUFBQTtjQUFBLE9BRUFULE1BQUEsQ0FBQVUsTUFBQSxDQUFBL0YsTUFBQSxFQUFBSSxJQUFBLFdBQUE0RixDQUFBO2dCQUFBLE9BQUFBLENBQUE7Y0FBQTtZQUFBO2NBQUEsT0FBQUosUUFBQSxDQUFBSyxNQUFBLFdBQUFMLFFBQUEsQ0FBQU0sSUFBQTtZQUFBO1lBQUE7Y0FBQSxPQUFBTixRQUFBLENBQUFPLElBQUE7VUFBQTtRQUFBLEdBQUFWLE9BQUE7TUFBQTtJQUNBO0lBR0FXLGNBQUEsV0FBQUEsZUFBQTtNQUFBLElBQUFDLE1BQUE7TUFBQSxPQUFBZixpQkFBQSxlQUFBQyxtQkFBQSxHQUFBQyxJQUFBLFVBQUFjLFNBQUE7UUFBQSxJQUFBQyxFQUFBLEVBQUFqSCxRQUFBLEVBQUE5QixjQUFBLEVBQUFnSixhQUFBLEVBQUFDLGdCQUFBLEVBQUFDLFVBQUEsRUFBQUMsY0FBQSxFQUFBQyxZQUFBLEVBQUFDLFFBQUEsRUFBQUMsYUFBQSxFQUFBQyxVQUFBO1FBQUEsT0FBQXhCLG1CQUFBLEdBQUFHLElBQUEsVUFBQXNCLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBcEIsSUFBQSxHQUFBb0IsU0FBQSxDQUFBbkIsSUFBQTtZQUFBO2NBQ0FTLEVBQUEsR0FBQUYsTUFBQTtjQUFBLE1BQ0FFLEVBQUEsQ0FBQXRELElBQUEsQ0FBQS9FLEdBQUEsSUFBQXFJLEVBQUEsQ0FBQXRELElBQUEsQ0FBQXpHLE1BQUE7Z0JBQUF5SyxTQUFBLENBQUFuQixJQUFBO2dCQUFBO2NBQUE7Y0FBQW1CLFNBQUEsQ0FBQW5CLElBQUE7Y0FBQSxPQUNBTyxNQUFBLENBQUFqQixXQUFBLENBQUFtQixFQUFBLENBQUF0RCxJQUFBLENBQUEvRSxHQUFBLENBQUFSLEVBQUE7WUFBQTtjQUFBNEIsUUFBQSxHQUFBMkgsU0FBQSxDQUFBZixJQUFBO2NBQ0ExSSxjQUFBLEdBQUE2QyxDQUFBLENBQUE2RyxTQUFBLENBQUFYLEVBQUEsQ0FBQS9JLGNBQUE7Y0FDQWdKLGFBQUEsR0FBQWhKLGNBQUEsQ0FBQTJKLElBQUEsV0FBQUMsQ0FBQTtnQkFBQSxPQUFBQSxDQUFBLENBQUExSixFQUFBLEtBQUE2SSxFQUFBLENBQUF0RCxJQUFBLENBQUF6RyxNQUFBO2NBQUE7Y0FDQWlLLGdCQUFBLEdBQUFwRyxDQUFBLENBQUE2RyxTQUFBLENBQUE1SCxRQUFBLENBQUExRCxJQUFBLENBQUF5TCxrQkFBQTtjQUNBWCxVQUFBLEdBQUFsSCxVQUFBLENBQUFGLFFBQUEsQ0FBQTFELElBQUEsQ0FBQTBMLFdBQUE7Y0FDQVgsY0FBQSxPQUFBNUUsSUFBQSxDQUFBeUUsYUFBQSxDQUFBN0ksU0FBQTtjQUNBaUosWUFBQSxPQUFBN0UsSUFBQSxDQUFBeUUsYUFBQSxDQUFBNUksT0FBQTtjQUNBaUosUUFBQSxHQUFBdkgsUUFBQSxDQUFBMUQsSUFBQSxDQUFBaUwsUUFBQTtjQUVBSixnQkFBQSxHQUFBQSxnQkFBQSxDQUFBekssTUFBQSxXQUFBdUwsR0FBQTtnQkFDQSxJQUFBaEYsSUFBQSxPQUFBUixJQUFBLENBQUF3RixHQUFBLENBQUFDLFFBQUE7Z0JBQ0EsT0FBQWpGLElBQUEsQ0FBQWtGLE9BQUEsTUFBQWQsY0FBQSxDQUFBYyxPQUFBLE1BQ0FsRixJQUFBLENBQUFrRixPQUFBLE1BQUFiLFlBQUEsQ0FBQWEsT0FBQTtjQUNBO2NBRUFYLGFBQUE7Y0FFQSxJQUFBRCxRQUFBO2dCQUNBRSxVQUFBLEdBQUF2SCxVQUFBLENBQUFxSCxRQUFBLENBQUFhLGFBQUE7Z0JBRUFqQixnQkFBQSxDQUFBa0IsT0FBQSxXQUFBSixHQUFBO2tCQUNBVCxhQUFBLElBQUFQLEVBQUEsQ0FBQXFCLGdDQUFBLENBQUFmLFFBQUEsQ0FBQWdCLGdCQUFBLEVBQUFoQixRQUFBLENBQUFpQixpQkFBQSxFQUFBZixVQUFBLEVBQUFRLEdBQUEsQ0FBQVEsT0FBQSxFQUFBUixHQUFBLENBQUFTLFFBQUE7Z0JBQ0E7Y0FDQTtjQUVBekIsRUFBQSxDQUFBdEQsSUFBQSxDQUFBOUUsWUFBQSxJQUFBdUksVUFBQSxHQUFBSSxhQUFBLEVBQUFySCxPQUFBO2NBQUF3SCxTQUFBLENBQUFuQixJQUFBO2NBQUE7WUFBQTtjQUlBUyxFQUFBLENBQUF0RCxJQUFBLENBQUE5RSxZQUFBO1lBQUE7WUFBQTtjQUFBLE9BQUE4SSxTQUFBLENBQUFkLElBQUE7VUFBQTtRQUFBLEdBQUFHLFFBQUE7TUFBQTtJQUVBO0lBRUFzQixnQ0FBQSxXQUFBQSxpQ0FBQUssYUFBQSxFQUFBQyxXQUFBLEVBQUFDLGtCQUFBLEVBQUFDLE1BQUEsRUFBQUMsT0FBQTtNQUNBLElBQUFBLE9BQUE7TUFFQSxJQUFBQyxVQUFBLE9BQUF2RyxJQUFBLGVBQUFNLE1BQUEsQ0FBQStGLE1BQUE7TUFDQSxJQUFBRyxXQUFBLE9BQUF4RyxJQUFBLGVBQUFNLE1BQUEsQ0FBQWdHLE9BQUE7TUFFQSxJQUFBRyxpQkFBQSxPQUFBekcsSUFBQSxlQUFBTSxNQUFBLENBQUE0RixhQUFBO01BQ0EsSUFBQVEsZUFBQSxPQUFBMUcsSUFBQSxlQUFBTSxNQUFBLENBQUE2RixXQUFBO01BRUEsSUFBQVEsV0FBQSxHQUFBSixVQUFBLElBQUFFLGlCQUFBLElBQUFGLFVBQUEsR0FBQUcsZUFBQTtNQUVBLEtBQUFDLFdBQUE7UUFDQUosVUFBQSxHQUFBRSxpQkFBQTtNQUNBO01BRUEsTUFBQUQsV0FBQSxHQUFBRSxlQUFBO1FBQ0FGLFdBQUEsR0FBQUUsZUFBQTtNQUNBO01BRUEsSUFBQUUsY0FBQSxHQUFBSixXQUFBLEdBQUFELFVBQUE7TUFFQSxJQUFBMUcsS0FBQSxHQUFBK0csY0FBQSxzQkFBQVIsa0JBQUE7TUFFQSxRQUFBUyxLQUFBLENBQUFoSCxLQUFBLEtBQUFpSCxNQUFBLENBQUFqSCxLQUFBLFFBQUFBLEtBQUE7SUFDQTtJQUVBa0gsc0JBQUEsV0FBQUEsdUJBQUFDLFNBQUEsRUFBQUMsT0FBQTtNQUNBLElBQUFDLGFBQUEsT0FBQWxILElBQUEsZUFBQU0sTUFBQSxDQUFBMEcsU0FBQTtNQUNBLElBQUFHLFdBQUEsT0FBQW5ILElBQUEsZUFBQU0sTUFBQSxDQUFBMkcsT0FBQTtNQUVBLElBQUFMLGNBQUEsR0FBQU8sV0FBQSxHQUFBRCxhQUFBO01BRUEsSUFBQXJILEtBQUEsR0FBQStHLGNBQUE7TUFFQSxRQUFBQyxLQUFBLENBQUFoSCxLQUFBLEtBQUFpSCxNQUFBLENBQUFqSCxLQUFBLFFBQUFBLEtBQUE7SUFDQTtJQUVBdUgsZ0JBQUEsV0FBQUEsaUJBQUE7TUFBQSxJQUFBQyxNQUFBO01BQUEsT0FBQTlELGlCQUFBLGVBQUFDLG1CQUFBLEdBQUFDLElBQUEsVUFBQTZELFNBQUE7UUFBQSxJQUFBOUMsRUFBQSxFQUFBakgsUUFBQSxFQUFBZ0ssU0FBQSxFQUFBQyxpQkFBQSxFQUFBN0MsVUFBQSxFQUFBSSxhQUFBO1FBQUEsT0FBQXZCLG1CQUFBLEdBQUFHLElBQUEsVUFBQThELFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBNUQsSUFBQSxHQUFBNEQsU0FBQSxDQUFBM0QsSUFBQTtZQUFBO2NBQ0FTLEVBQUEsR0FBQTZDLE1BQUE7Y0FBQSxLQUNBN0MsRUFBQSxDQUFBdEQsSUFBQSxDQUFBL0UsR0FBQTtnQkFBQXVMLFNBQUEsQ0FBQTNELElBQUE7Z0JBQUE7Y0FBQTtjQUFBMkQsU0FBQSxDQUFBM0QsSUFBQTtjQUFBLE9BQ0FzRCxNQUFBLENBQUFoRSxXQUFBLENBQUFtQixFQUFBLENBQUF0RCxJQUFBLENBQUEvRSxHQUFBLENBQUFSLEVBQUE7WUFBQTtjQUFBNEIsUUFBQSxHQUFBbUssU0FBQSxDQUFBdkQsSUFBQTtjQUNBb0QsU0FBQSxHQUFBakosQ0FBQSxDQUFBNkcsU0FBQSxDQUFBNUgsUUFBQSxDQUFBMUQsSUFBQSxDQUFBME4sU0FBQTtjQUNBQyxpQkFBQSxHQUFBRCxTQUFBLENBQUF0TixNQUFBLFdBQUFvTCxDQUFBO2dCQUFBLE9BQUFBLENBQUEsQ0FBQTVLLE1BQUEsS0FBQStKLEVBQUEsQ0FBQXRELElBQUEsQ0FBQXpHLE1BQUE7Y0FBQTtjQUNBa0ssVUFBQSxHQUFBbEgsVUFBQSxDQUFBRixRQUFBLENBQUExRCxJQUFBLENBQUEwTCxXQUFBO2NBRUFSLGFBQUE7Y0FFQXlDLGlCQUFBLENBQUE1QixPQUFBLFdBQUErQixFQUFBO2dCQUNBNUMsYUFBQSxJQUFBUCxFQUFBLENBQUF1QyxzQkFBQSxDQUFBWSxFQUFBLENBQUFDLFVBQUEsRUFBQUQsRUFBQSxDQUFBRSxRQUFBO2NBQ0E7Y0FFQXJELEVBQUEsQ0FBQXRELElBQUEsQ0FBQTdFLGNBQUEsSUFBQXNJLFVBQUEsR0FBQUksYUFBQSxFQUFBckgsT0FBQTtjQUFBZ0ssU0FBQSxDQUFBM0QsSUFBQTtjQUFBO1lBQUE7Y0FHQVMsRUFBQSxDQUFBdEQsSUFBQSxDQUFBN0UsY0FBQTtZQUFBO1lBQUE7Y0FBQSxPQUFBcUwsU0FBQSxDQUFBdEQsSUFBQTtVQUFBO1FBQUEsR0FBQWtELFFBQUE7TUFBQTtJQUVBO0lBRUFRLGtCQUFBLFdBQUFBLG1CQUFBO01BQUEsSUFBQUMsTUFBQTtNQUFBLE9BQUF4RSxpQkFBQSxlQUFBQyxtQkFBQSxHQUFBQyxJQUFBLFVBQUF1RSxTQUFBO1FBQUEsSUFBQXhELEVBQUEsRUFBQWpILFFBQUEsRUFBQTRGLGVBQUEsRUFBQThFLFVBQUE7UUFBQSxPQUFBekUsbUJBQUEsR0FBQUcsSUFBQSxVQUFBdUUsVUFBQUMsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUFyRSxJQUFBLEdBQUFxRSxTQUFBLENBQUFwRSxJQUFBO1lBQUE7Y0FDQVMsRUFBQSxHQUFBdUQsTUFBQTtjQUFBLEtBQ0F2RCxFQUFBLENBQUF0RCxJQUFBLENBQUEvRSxHQUFBO2dCQUFBZ00sU0FBQSxDQUFBcEUsSUFBQTtnQkFBQTtjQUFBO2NBQUFvRSxTQUFBLENBQUFwRSxJQUFBO2NBQUEsT0FDQVMsRUFBQSxDQUFBbkIsV0FBQSxDQUFBbUIsRUFBQSxDQUFBdEQsSUFBQSxDQUFBL0UsR0FBQSxDQUFBUixFQUFBO1lBQUE7Y0FBQTRCLFFBQUEsR0FBQTRLLFNBQUEsQ0FBQWhFLElBQUE7Y0FFQWhCLGVBQUE7Y0FFQSxJQUFBNUYsUUFBQSxDQUFBMUQsSUFBQSxDQUFBb08sVUFBQTtnQkFDQUEsVUFBQSxHQUFBM0osQ0FBQSxDQUFBNkcsU0FBQSxDQUFBNUgsUUFBQSxDQUFBMUQsSUFBQSxDQUFBb08sVUFBQTtnQkFDQUEsVUFBQSxHQUFBQSxVQUFBLENBQUFoTyxNQUFBLFdBQUFtTyxTQUFBO2tCQUNBLE9BQUFBLFNBQUEsQ0FBQTNOLE1BQUEsS0FBQStKLEVBQUEsQ0FBQXRELElBQUEsQ0FBQXpHLE1BQUE7Z0JBQ0E7Z0JBRUF3TixVQUFBLENBQUFyQyxPQUFBLFdBQUF3QyxTQUFBO2tCQUNBakYsZUFBQSxJQUFBaUYsU0FBQSxDQUFBQyxNQUFBO2dCQUNBO2NBQ0E7Y0FFQTdELEVBQUEsQ0FBQXRELElBQUEsQ0FBQTVFLGdCQUFBLEdBQUE2RyxlQUFBLENBQUF6RixPQUFBO2NBQUF5SyxTQUFBLENBQUFwRSxJQUFBO2NBQUE7WUFBQTtjQUVBUyxFQUFBLENBQUF0RCxJQUFBLENBQUE1RSxnQkFBQTtZQUFBO1lBQUE7Y0FBQSxPQUFBNkwsU0FBQSxDQUFBL0QsSUFBQTtVQUFBO1FBQUEsR0FBQTRELFFBQUE7TUFBQTtJQUVBO0lBRUExRyxRQUFBLFdBQUFBLFNBQUE7TUFDQSxTQUFBSixJQUFBLENBQUF2RixFQUFBO1FBQ0EsS0FBQTRHLG1CQUFBO01BQ0E7UUFDQSxLQUFBRixtQkFBQTtNQUNBO0lBQ0E7SUFFQTlCLFVBQUEsV0FBQUEsV0FBQUMsSUFBQTtNQUNBLFlBQUFDLE1BQUEsQ0FBQUQsSUFBQSxFQUFBRSxNQUFBO0lBQ0E7RUFBQSxFQUNBO0VBRUFLLEtBQUE7SUFDQSw4QkFBQXVILGlCQUFBQyxNQUFBLEVBQUFDLE1BQUE7TUFDQSxLQUFBekYsNkJBQUE7SUFDQTtJQUNBLGdDQUFBMEYsbUJBQUFGLE1BQUEsRUFBQUMsTUFBQTtNQUNBLEtBQUF6Riw2QkFBQTtJQUNBO0lBQ0EsMkJBQUEyRixjQUFBSCxNQUFBLEVBQUFDLE1BQUE7TUFDQSxLQUFBekYsNkJBQUE7SUFDQTtJQUNBLGtDQUFBNEYscUJBQUFKLE1BQUEsRUFBQUMsTUFBQTtNQUNBLEtBQUF6Riw2QkFBQTtJQUNBO0VBQ0E7RUFFQW5DLFFBQUE7SUFDQWdJLG9CQUFBLFdBQUFBLHFCQUFBO01BQ0EsT0FDQSxLQUFBOUcsb0JBQUEsVUFBQUUsaUJBQUE7SUFFQTtJQUVBNkcsb0JBQUEsV0FBQUEscUJBQUE7TUFDQSxZQUFBL0csb0JBQUE7SUFDQTtJQUVBakIseUJBQUEsV0FBQUEsMEJBQUE7TUFDQSxPQUNBLEtBQUF4Rix5QkFBQSxVQUFBRSxzQkFBQTtJQUVBO0lBRUF1Rix5QkFBQSxXQUFBQSwwQkFBQTtNQUNBLFlBQUF6Rix5QkFBQTtJQUNBO0VBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaG5CRDtBQUVBO0FBRUEsaUVBQWU7RUFDZjFCLE1BQUEsR0FBQUQseURBQUE7RUFFQXVILEtBQUE7SUFDQXZGLGlCQUFBLEVBQUFvTixNQUFBO0lBQ0FDLE1BQUE7TUFDQUMsSUFBQSxFQUFBQyxPQUFBO01BQ0E7SUFDQTtFQUNBO0VBRUFwUCxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBRyxTQUFBO01BQ0FrSCxJQUFBLE9BQUF4RixpQkFBQTtNQUNBZ0csTUFBQTtNQUNBd0gsUUFBQTtNQUNBQyxNQUFBO0lBQ0E7RUFDQTtFQUVBeE0sT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQXpELGdEQUFBO0lBRUFnSSxVQUFBLFdBQUFBLFdBQUFDLElBQUE7TUFFQSxLQUFBaEUsUUFBQSxDQUFBaUUsSUFBQTtNQUNBLEtBQUFLLE1BQUE7SUFFQTtJQUVBMEgseUJBQUEsV0FBQUEsMEJBQUE7TUFBQSxJQUFBcEwsS0FBQTtNQUNBLEtBQUFoRSxTQUFBO01BRUEsSUFBQWlFLE1BQUE7UUFDQXJDLFNBQUEsT0FBQXNGLElBQUEsQ0FBQXRGLFNBQUE7UUFDQUMsT0FBQSxPQUFBcUYsSUFBQSxDQUFBckY7TUFDQTtNQUVBLEtBQUF5RCxtQkFBQSxDQUFBckIsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQU4sS0FBQSxDQUFBZixTQUFBLENBQ0EsV0FDQSx5QkFBQXFELE1BQUEsQ0FDQXRDLEtBQUEsQ0FBQXVDLFVBQUEsQ0FBQXZDLEtBQUEsQ0FBQWtELElBQUEsQ0FBQXRGLFNBQUEsVUFBQTBFLE1BQUEsQ0FBQXRDLEtBQUEsQ0FBQXVDLFVBQUEsQ0FBQXZDLEtBQUEsQ0FBQWtELElBQUEsQ0FBQXJGLE9BQUEsNkNBQ0E7UUFDQW1DLEtBQUEsQ0FBQXdELEtBQUE7UUFDQXhELEtBQUEsQ0FBQW1ELFVBQUE7TUFDQSxXQUNBLFdBQUFNLEtBQUE7UUFDQSxJQUFBQyxNQUFBLEdBQUFELEtBQUEsQ0FBQTFDLFFBQUEsQ0FBQWxGLElBQUEsQ0FBQTZILE1BQUE7UUFDQTFELEtBQUEsQ0FBQTBELE1BQUEsR0FBQUEsTUFBQTtNQUNBLGFBQ0E7UUFDQTFELEtBQUEsQ0FBQWhFLFNBQUE7TUFDQTtJQUNBO0lBRUFxUCx5QkFBQSxXQUFBQSwwQkFBQTtNQUFBLElBQUF6SyxNQUFBO01BQ0EsS0FBQTVFLFNBQUE7TUFFQSxJQUFBaUUsTUFBQTtRQUNBdEMsRUFBQSxPQUFBdUYsSUFBQSxDQUFBdkYsRUFBQTtRQUNBQyxTQUFBLE9BQUFzRixJQUFBLENBQUF0RixTQUFBO1FBQ0FDLE9BQUEsT0FBQXFGLElBQUEsQ0FBQXJGO01BQ0E7TUFFQSxLQUFBeU4sbUJBQUEsQ0FBQXJMLE1BQUEsRUFDQUksSUFBQSxXQUFBQyxDQUFBO1FBQ0FNLE1BQUEsQ0FBQTNCLFNBQUEsQ0FDQSxXQUNBLDZEQUFBcUQsTUFBQSxDQUNBMUIsTUFBQSxDQUFBc0MsSUFBQSxDQUFBdkYsRUFBQSx1QkFDQTtRQUNBaUQsTUFBQSxDQUFBNEMsS0FBQTtRQUNBNUMsTUFBQSxDQUFBdUMsVUFBQTtNQUNBLFdBQ0EsV0FBQU0sS0FBQTtRQUNBLElBQUFDLE1BQUEsR0FBQUQsS0FBQSxDQUFBMUMsUUFBQSxDQUFBbEYsSUFBQSxDQUFBNkgsTUFBQTtRQUNBOUMsTUFBQSxDQUFBOEMsTUFBQSxHQUFBQSxNQUFBO01BQ0EsYUFDQTtRQUNBOUMsTUFBQSxDQUFBNUUsU0FBQTtNQUNBO0lBQ0E7SUFFQXNILFFBQUEsV0FBQUEsU0FBQTtNQUNBLFNBQUFKLElBQUEsQ0FBQXZGLEVBQUE7UUFDQSxLQUFBME4seUJBQUE7TUFDQTtRQUNBLEtBQUFELHlCQUFBO01BQ0E7SUFDQTtJQUVBN0ksVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BQ0EsWUFBQUMsTUFBQSxDQUFBRCxJQUFBLEVBQUFFLE1BQUE7SUFDQTtJQUVBNkksaUJBQUEsV0FBQUEsa0JBQUFDLEdBQUE7TUFDQSxJQUFBQSxHQUFBLENBQUFDLFdBQUE7UUFDQSxLQUFBUCxRQUFBLFFBQUF6SSxNQUFBLENBQUErSSxHQUFBLENBQUFDLFdBQUEsRUFBQS9JLE1BQUE7UUFDQTtNQUNBO01BRUEsS0FBQXdJLFFBQUE7SUFDQTtJQUVBUSxlQUFBLFdBQUFBLGdCQUFBRixHQUFBO01BQ0EsSUFBQUEsR0FBQSxDQUFBQyxXQUFBO1FBQ0EsS0FBQU4sTUFBQSxRQUFBMUksTUFBQSxDQUFBK0ksR0FBQSxDQUFBQyxXQUFBLEVBQUEvSSxNQUFBO1FBQ0E7TUFDQTtNQUVBLEtBQUF5SSxNQUFBO0lBQ0E7RUFBQTtBQUlBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pORCxJQUFJUSxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUNQLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBa0IsQ0FBQyxFQUNsQyxDQUNFRixFQUFFLENBQUMsSUFBSSxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFzQyxDQUFDLEVBQUUsQ0FDL0RILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUNsQixDQUFDLEVBQ0ZKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFPLENBQUMsRUFBRSxDQUNqQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBbUIsQ0FBQyxFQUFFLENBQzdDRixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUF5QixDQUFDLEVBQUUsQ0FDbkRGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQU0sQ0FBQyxFQUN0QixDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO0lBQ0VJLEtBQUssRUFBRTtNQUFFaE8sT0FBTyxFQUFFO0lBQVUsQ0FBQztJQUM3QmlPLEVBQUUsRUFBRTtNQUFFQyxLQUFLLEVBQUVQLEdBQUcsQ0FBQzFNO0lBQWM7RUFDakMsQ0FBQyxFQUNELENBQ0UyTSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ1hJLEtBQUssRUFBRTtNQUFFRyxJQUFJLEVBQUUsTUFBTTtNQUFFLGFBQWEsRUFBRTtJQUFPO0VBQy9DLENBQUMsQ0FBQyxFQUNGUixHQUFHLENBQUNJLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUMxQixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFpQyxDQUFDLEVBQUUsQ0FDM0RGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRVEsS0FBSyxFQUFFO01BQUVwUCxLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUMsRUFDN0IsQ0FDRTRPLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDYkksS0FBSyxFQUFFO01BQ0xLLElBQUksRUFBRSxRQUFRO01BQ2R6UCxLQUFLLEVBQUUsUUFBUTtNQUNmMFAsV0FBVyxFQUFFLHVCQUF1QjtNQUNwQ0MsT0FBTyxFQUFFWixHQUFHLENBQUNuTyxjQUFjO01BQzNCZ1AsVUFBVSxFQUFFLEtBQUs7TUFDakJyTCxPQUFPLEVBQUV3SyxHQUFHLENBQUMxTywrQkFBK0I7TUFDNUN3UCxNQUFNLEVBQUUsU0FBQUEsT0FBQ0MsQ0FBQztRQUFBLE9BQUtBLENBQUMsQ0FBQ2hQLEVBQUU7TUFBQTtNQUNuQkEsRUFBRSxFQUFFO0lBQ04sQ0FBQztJQUNEdU8sRUFBRSxFQUFFO01BQUUvTCxNQUFNLEVBQUV5TCxHQUFHLENBQUN6SztJQUFzQixDQUFDO0lBQ3pDeUwsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0VqUSxHQUFHLEVBQUUsYUFBYTtNQUNsQmtRLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsSUFBSSxFQUNKO1VBQUVFLFdBQVcsRUFBRTtRQUErQixDQUFDLEVBQy9DLENBQ0VGLEVBQUUsQ0FDQSxRQUFRLEVBQ1I7VUFDRUksS0FBSyxFQUFFO1lBQUVjLElBQUksRUFBRTtVQUFJLENBQUM7VUFDcEJiLEVBQUUsRUFBRTtZQUFFQyxLQUFLLEVBQUVQLEdBQUcsQ0FBQ3RLO1VBQW9CO1FBQ3ZDLENBQUMsRUFDRCxDQUNFdUssRUFBRSxDQUFDLEdBQUcsRUFBRTtVQUNORSxXQUFXLEVBQUUsWUFBWTtVQUN6QkUsS0FBSyxFQUFFO1lBQUUsYUFBYSxFQUFFO1VBQU87UUFDakMsQ0FBQyxDQUFDLEVBQ0ZMLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLDhEQUNGLENBQUMsQ0FFTCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsRUFDRDtNQUNFcFEsR0FBRyxFQUFFLGlCQUFpQjtNQUN0QmtRLEVBQUUsRUFBRSxTQUFBQSxHQUFBRyxJQUFBLEVBQWtDO1FBQUEsSUFBdEJwUCxPQUFPLEdBQUFvUCxJQUFBLENBQVBwUCxPQUFPO1VBQUVELFNBQVMsR0FBQXFQLElBQUEsQ0FBVHJQLFNBQVM7UUFDaEMsT0FBTyxDQUNMaU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUNURCxHQUFHLENBQUNJLEVBQUUsQ0FDSixzQkFBc0IsR0FDcEJKLEdBQUcsQ0FBQ3NCLEVBQUUsSUFBQTVLLE1BQUEsQ0FDRHNKLEdBQUcsQ0FBQ3JKLFVBQVUsQ0FDZjNFLFNBQ0YsQ0FBQyxTQUFBMEUsTUFBQSxDQUFNc0osR0FBRyxDQUFDckosVUFBVSxDQUFDMUUsT0FBTyxDQUFDLENBQ2hDLENBQUMsR0FDRCxvQkFDSixDQUFDLENBQ0YsQ0FBQyxDQUNIO01BQ0g7SUFDRixDQUFDLEVBQ0Q7TUFDRWpCLEdBQUcsRUFBRSxRQUFRO01BQ2JrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQUssS0FBQSxFQUFrQztRQUFBLElBQXRCdFAsT0FBTyxHQUFBc1AsS0FBQSxDQUFQdFAsT0FBTztVQUFFRCxTQUFTLEdBQUF1UCxLQUFBLENBQVR2UCxTQUFTO1FBQ2hDLE9BQU8sQ0FDTGlPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0JBQXNCLEdBQ3BCSixHQUFHLENBQUNzQixFQUFFLElBQUE1SyxNQUFBLENBQ0RzSixHQUFHLENBQUNySixVQUFVLENBQ2YzRSxTQUNGLENBQUMsU0FBQTBFLE1BQUEsQ0FBTXNKLEdBQUcsQ0FBQ3JKLFVBQVUsQ0FBQzFFLE9BQU8sQ0FBQyxDQUNoQyxDQUFDLEdBQ0Qsb0JBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSDtNQUNIO0lBQ0YsQ0FBQyxFQUNEO01BQ0VqQixHQUFHLEVBQUUsYUFBYTtNQUNsQmtRLEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQUMsSUFBSSxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFZLENBQUMsRUFBRSxDQUNyQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBUyxDQUFDLEVBQUUsQ0FDbkNGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7VUFBRUUsV0FBVyxFQUFFO1FBQVcsQ0FBQyxFQUMzQixDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO1VBQ0VJLEtBQUssRUFBRTtZQUNMbUIsSUFBSSxFQUFFLElBQUk7WUFDVm5QLE9BQU8sRUFBRSxPQUFPO1lBQ2hCb1AsS0FBSyxFQUFFLEVBQUU7WUFDVEMsT0FBTyxFQUFFLEVBQUU7WUFDWEMsUUFBUSxFQUNOLENBQUMzQixHQUFHLENBQUM5SSx5QkFBeUIsSUFDOUI4SSxHQUFHLENBQUN4TztVQUNSLENBQUM7VUFDRDhPLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUVQLEdBQUcsQ0FBQzFLO1VBQ2I7UUFDRixDQUFDLEVBQ0QsQ0FDRTBLLEdBQUcsQ0FBQ3hPLGlDQUFpQyxHQUNqQ3lPLEVBQUUsQ0FBQyxXQUFXLEVBQUU7VUFDZEksS0FBSyxFQUFFO1lBQ0x1QixLQUFLLEVBQUUsRUFBRTtZQUNUM1EsS0FBSyxFQUFFO1VBQ1Q7UUFDRixDQUFDLENBQUMsR0FDRmdQLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNqQyxFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO1VBQUVFLFdBQVcsRUFBRTtRQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFSSxLQUFLLEVBQUU7WUFDTHFCLE9BQU8sRUFBRSxFQUFFO1lBQ1hGLElBQUksRUFBRSxJQUFJO1lBQ1ZHLFFBQVEsRUFDTixDQUFDM0IsR0FBRyxDQUFDL0kseUJBQXlCLElBQzlCK0ksR0FBRyxDQUFDek8saUNBQWlDO1lBQ3ZDYyxPQUFPLEVBQUUsT0FBTztZQUNoQm9QLEtBQUssRUFBRTtVQUNULENBQUM7VUFDRG5CLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUVQLEdBQUcsQ0FBQzNLO1VBQ2I7UUFDRixDQUFDLEVBQ0QsQ0FDRTJLLEdBQUcsQ0FBQ3pPLGlDQUFpQyxHQUNqQzBPLEVBQUUsQ0FBQyxXQUFXLEVBQUU7VUFDZEksS0FBSyxFQUFFO1lBQ0x1QixLQUFLLEVBQUUsRUFBRTtZQUNUM1EsS0FBSyxFQUFFO1VBQ1Q7UUFDRixDQUFDLENBQUMsR0FDRmdQLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNqQyxFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsQ0FDSDtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsQ0FDRixDQUFDO0lBQ0ZTLEtBQUssRUFBRTtNQUNMMVAsS0FBSyxFQUFFNk4sR0FBRyxDQUFDblAsTUFBTTtNQUNqQmlSLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkIvQixHQUFHLENBQUNuUCxNQUFNLEdBQUdrUixHQUFHO01BQ2xCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxFQUNEaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0wsQ0FDRUEsRUFBRSxDQUNBLFVBQVUsRUFDVjtJQUNFSSxLQUFLLEVBQUU7TUFBRWhPLE9BQU8sRUFBRTtJQUFVLENBQUM7SUFDN0JpTyxFQUFFLEVBQUU7TUFBRUMsS0FBSyxFQUFFUCxHQUFHLENBQUMvTTtJQUEwQjtFQUM3QyxDQUFDLEVBQ0QsQ0FBQytNLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLHFDQUFxQyxDQUFDLENBQ2hELENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0gsQ0FBQyxFQUNGSixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBWSxDQUFDLEVBQUUsQ0FDdENGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQU0sQ0FBQyxFQUFFLENBQ2hDRixFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFnQixDQUFDLEVBQ2hDLENBQ0VGLEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFBRUksS0FBSyxFQUFFO01BQUU0QixNQUFNLEVBQUU7SUFBRztFQUFFLENBQUMsRUFDekIsQ0FDRWhDLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7SUFDRUUsV0FBVyxFQUFFLFNBQVM7SUFDdEJFLEtBQUssRUFBRTtNQUFFLE9BQUs7SUFBaUM7RUFDakQsQ0FBQyxFQUNELENBQUNMLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLG9DQUFvQyxDQUFDLENBQy9DLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxlQUFlLEVBQUU7SUFDbEJFLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNFLEtBQUssRUFBRTtNQUNMdE8sRUFBRSxFQUFFLGdDQUFnQztNQUNwQzZPLE9BQU8sRUFBRVosR0FBRyxDQUFDdlE7SUFDZixDQUFDO0lBQ0RvUyxLQUFLLEVBQUU7TUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzlQLFFBQVE7TUFDbkI0UixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO1FBQ3ZCL0IsR0FBRyxDQUFDOVAsUUFBUSxHQUFHNlIsR0FBRztNQUNwQixDQUFDO01BQ0RDLFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQyxDQUFDLEVBQ0ZoQyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtJQUNFRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DRSxLQUFLLEVBQUU7TUFBRSxPQUFLO0lBQWlDO0VBQ2pELENBQUMsRUFDRCxDQUFDTCxHQUFHLENBQUNJLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUNsRCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FDQSxlQUFlLEVBQ2Y7SUFDRWUsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0VqUSxHQUFHLEVBQUUsUUFBUTtNQUNia1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUN2QkEsRUFBRSxDQUFDLEdBQUcsRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBZ0IsQ0FBQyxDQUFDLENBQzFDLENBQUMsQ0FDSDtNQUNILENBQUM7TUFDRGlCLEtBQUssRUFBRTtJQUNULENBQUMsQ0FDRjtFQUNILENBQUMsRUFDRCxDQUNFcEIsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJJLEtBQUssRUFBRTtNQUFFakIsSUFBSSxFQUFFLFFBQVE7TUFBRXVCLFdBQVcsRUFBRTtJQUFpQixDQUFDO0lBQ3hEa0IsS0FBSyxFQUFFO01BQ0wxUCxLQUFLLEVBQUU2TixHQUFHLENBQUMzUCxNQUFNO01BQ2pCeVIsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtRQUN2Qi9CLEdBQUcsQ0FBQzNQLE1BQU0sR0FBRzBSLEdBQUc7TUFDbEIsQ0FBQztNQUNEQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDRGhDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFZLENBQUMsRUFDNUIsQ0FDRUYsRUFBRSxDQUNBLFdBQVcsRUFDWDtJQUFFSSxLQUFLLEVBQUU7TUFBRTVNLElBQUksRUFBRXVNLEdBQUcsQ0FBQ3pQLFNBQVM7TUFBRTJSLE9BQU8sRUFBRTtJQUFLO0VBQUUsQ0FBQyxFQUNqRCxDQUNFakMsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNaSSxLQUFLLEVBQUU7TUFDTDhCLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxFQUFFO01BQ1gsWUFBWSxFQUFFLEVBQUU7TUFDaEJ6TixLQUFLLEVBQUVxTCxHQUFHLENBQUNyTCxLQUFLLENBQUMxRSxJQUFJO01BQ3JCYyxNQUFNLEVBQUVpUCxHQUFHLENBQUNqUCxNQUFNO01BQ2xCLFVBQVUsRUFBRSxDQUFDO01BQ2JzUixJQUFJLEVBQUVyQyxHQUFHLENBQUM1UCxTQUFTO01BQ25CLGNBQWMsRUFBRTRQLEdBQUcsQ0FBQzdQO0lBQ3RCLENBQUM7SUFDRDZRLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFalEsR0FBRyxFQUFFLFlBQVk7TUFDakJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLEtBQUssRUFDTDtVQUFFRSxXQUFXLEVBQUU7UUFBd0IsQ0FBQyxFQUN4QyxDQUNFRixFQUFFLENBQUMsV0FBVyxFQUFFO1VBQ2RFLFdBQVcsRUFBRTtRQUNmLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RpQixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXBRLEdBQUcsRUFBRSxPQUFPO01BQ1prUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLElBQUksRUFDSjtVQUFFRSxXQUFXLEVBQUU7UUFBNkIsQ0FBQyxFQUM3QyxDQUFDRixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDSixHQUFHLENBQUNzQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUMsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNERixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXBRLEdBQUcsRUFBRSxtQkFBbUI7TUFDeEJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBVWpSLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xBLElBQUksQ0FBQ2dFLElBQUksQ0FBQ04sUUFBUSxHQUNkc00sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUNURCxHQUFHLENBQUNJLEVBQUUsQ0FDSixzQkFBc0IsR0FDcEJKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3JSLElBQUksQ0FBQ2dFLElBQUksQ0FBQ04sUUFBUSxDQUFDMk8sV0FBVyxDQUFDLEdBQ3RDLG9CQUNKLENBQUMsQ0FDRixDQUFDLEdBQ0Z0QyxHQUFHLENBQUN1QyxFQUFFLENBQUMsQ0FBQyxDQUNiO01BQ0g7SUFDRixDQUFDLEVBQ0Q7TUFDRXZSLEdBQUcsRUFBRSxxQkFBcUI7TUFDMUJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBVWpSLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xBLElBQUksQ0FBQ2dFLElBQUksQ0FBQ04sUUFBUSxHQUNkc00sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUNURCxHQUFHLENBQUNJLEVBQUUsQ0FDSixzQkFBc0IsR0FDcEJKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3JSLElBQUksQ0FBQ2dFLElBQUksQ0FBQ04sUUFBUSxDQUFDZ0UsU0FBUyxDQUFDLEdBQ3BDLG9CQUNKLENBQUMsQ0FDRixDQUFDLEdBQ0ZxSSxHQUFHLENBQUN1QyxFQUFFLENBQUMsQ0FBQyxDQUNiO01BQ0g7SUFDRixDQUFDLEVBQ0Q7TUFDRXZSLEdBQUcsRUFBRSxvQkFBb0I7TUFDekJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBVWpSLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xnUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQ1RELEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLHNCQUFzQixHQUNwQkosR0FBRyxDQUFDc0IsRUFBRSxDQUFDclIsSUFBSSxDQUFDZ0UsSUFBSSxDQUFDckIsWUFBWSxDQUFDa0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQ3pDLG9CQUNKLENBQUMsQ0FDRixDQUFDLENBQ0g7TUFDSDtJQUNGLENBQUMsRUFDRDtNQUNFOUMsR0FBRyxFQUFFLHdCQUF3QjtNQUM3QmtRLEVBQUUsRUFBRSxTQUFBQSxHQUFValIsSUFBSSxFQUFFO1FBQ2xCLE9BQU8sQ0FDTGdRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0JBQXNCLEdBQ3BCSixHQUFHLENBQUNzQixFQUFFLENBQ0pyUixJQUFJLENBQUNnRSxJQUFJLENBQUN2QixnQkFBZ0IsQ0FBQ29CLE9BQU8sQ0FBQyxDQUFDLENBQ3RDLENBQUMsR0FDRCxvQkFDSixDQUFDLENBQ0YsQ0FBQyxDQUNIO01BQ0g7SUFDRixDQUFDLEVBQ0Q7TUFDRTlDLEdBQUcsRUFBRSxrQkFBa0I7TUFDdkJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBVWpSLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xnUSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQ1RELEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLHNCQUFzQixHQUNwQkosR0FBRyxDQUFDc0IsRUFBRSxDQUFDclIsSUFBSSxDQUFDZ0UsSUFBSSxDQUFDcEIsVUFBVSxDQUFDaUIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQ3ZDLG9CQUNKLENBQUMsQ0FDRixDQUFDLENBQ0g7TUFDSDtJQUNGLENBQUMsRUFDRDtNQUNFOUMsR0FBRyxFQUFFLGVBQWU7TUFDcEJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBVWpSLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xnUSxFQUFFLENBQ0EsWUFBWSxFQUNaO1VBQ0VJLEtBQUssRUFBRTtZQUFFbUMsS0FBSyxFQUFFLEVBQUU7WUFBRSxVQUFVLEVBQUU7VUFBRyxDQUFDO1VBQ3BDeEIsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUNqQixDQUNFO1lBQ0VqUSxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCa1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtjQUNkLE9BQU8sQ0FDTGxCLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLDBEQUNGLENBQUMsRUFDREgsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFDTkUsV0FBVyxFQUFFLGtCQUFrQjtnQkFDL0JFLEtBQUssRUFBRTtrQkFBRSxhQUFhLEVBQUU7Z0JBQU87Y0FDakMsQ0FBQyxDQUFDLENBQ0g7WUFDSCxDQUFDO1lBQ0RlLEtBQUssRUFBRTtVQUNULENBQUMsQ0FDRixFQUNELElBQUksRUFDSixJQUNGO1FBQ0YsQ0FBQyxFQUNELENBQ0VwQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDeUMsRUFBRSxDQUFDekMsR0FBRyxDQUFDOU4sT0FBTyxFQUFFLFVBQVV3USxNQUFNLEVBQUVDLEtBQUssRUFBRTtVQUMzQyxPQUFPMUMsRUFBRSxDQUNQLGlCQUFpQixFQUNqQjtZQUNFalAsR0FBRyxFQUFFMlIsS0FBSztZQUNWdEMsS0FBSyxFQUFFO2NBQUVuTixJQUFJLEVBQUU7WUFBRyxDQUFDO1lBQ25Cb04sRUFBRSxFQUFFO2NBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVcUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPNUMsR0FBRyxDQUFDOUwsUUFBUSxDQUNqQmpFLElBQUksQ0FBQ2dFLElBQUksRUFDVHlPLE1BQU0sQ0FBQ3ZRLEtBQ1QsQ0FBQztjQUNIO1lBQ0Y7VUFDRixDQUFDLEVBQ0QsQ0FDRSxDQUNFOE4sRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNYSSxLQUFLLEVBQUU7Y0FBRWhPLE9BQU8sRUFBRXFRLE1BQU0sQ0FBQ3JRO1lBQVE7VUFDbkMsQ0FBQyxDQUFDLEVBQ0YyTixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNULFNBQU87Y0FDTCxjQUFjLEVBQ1p5QyxNQUFNLENBQUNyUSxPQUFPLEtBQUs7WUFDdkIsQ0FBQztZQUNEd1EsUUFBUSxFQUFFO2NBQ1JDLFNBQVMsRUFBRTlDLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ29CLE1BQU0sQ0FBQ3RRLEtBQUs7WUFDaEM7VUFDRixDQUFDLENBQUMsQ0FDSCxDQUNGLEVBQ0QsQ0FDRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNIO0lBQ0YsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsRUFDRjROLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFNLENBQUMsRUFBRSxDQUNoQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQUUsQ0FDckNGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FDTkQsR0FBRyxDQUFDSSxFQUFFLENBQ0osZ0JBQWdCLEdBQ2RKLEdBQUcsQ0FBQ3NCLEVBQUUsWUFBQTVLLE1BQUEsQ0FDT3NKLEdBQUcsQ0FBQ3ZQLE9BQU8sQ0FBQ0UsSUFBSSxVQUFBK0YsTUFBQSxDQUFPc0osR0FBRyxDQUFDdlAsT0FBTyxDQUFDQyxFQUFFLFVBQUFnRyxNQUFBLENBQU9zSixHQUFHLENBQUN2UCxPQUFPLENBQUNHLEtBQUssYUFDMUUsQ0FBQyxHQUNELGNBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLEVBQ0ZvUCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJFLFdBQVcsRUFBRSxNQUFNO0lBQ25CRSxLQUFLLEVBQUU7TUFDTCxZQUFZLEVBQUVMLEdBQUcsQ0FBQ2xQLGNBQWM7TUFDaEMsVUFBVSxFQUFFa1AsR0FBRyxDQUFDOVAsUUFBUTtNQUN4QjZTLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRGxCLEtBQUssRUFBRTtNQUNMMVAsS0FBSyxFQUFFNk4sR0FBRyxDQUFDN1AsWUFBWTtNQUN2QjJSLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkIvQixHQUFHLENBQUM3UCxZQUFZLEdBQUc0UixHQUFHO01BQ3hCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0gsQ0FBQyxFQUNGaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJJLEtBQUssRUFBRTtNQUFFL04sV0FBVyxFQUFFME4sR0FBRyxDQUFDMU47SUFBWSxDQUFDO0lBQ3ZDZ08sRUFBRSxFQUFFO01BQ0ZuTSxZQUFZLEVBQUUsU0FBQUEsYUFBVXlPLE1BQU0sRUFBRTtRQUM5QixPQUFPNUMsR0FBRyxDQUFDN0wsWUFBWSxDQUFDLENBQUM7TUFDM0I7SUFDRjtFQUNGLENBQUMsQ0FBQyxFQUNGNkwsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtJQUN2QkksS0FBSyxFQUFFO01BQUUvTixXQUFXLEVBQUUwTixHQUFHLENBQUMxTjtJQUFZLENBQUM7SUFDdkNnTyxFQUFFLEVBQUU7TUFDRm5NLFlBQVksRUFBRSxTQUFBQSxhQUFVeU8sTUFBTSxFQUFFO1FBQzlCLE9BQU81QyxHQUFHLENBQUM3TCxZQUFZLENBQUMsQ0FBQztNQUMzQjtJQUNGO0VBQ0YsQ0FBQyxDQUFDLEVBQ0Y2TCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO0lBQ3hCSSxLQUFLLEVBQUU7TUFBRXZPLGlCQUFpQixFQUFFa08sR0FBRyxDQUFDbE8saUJBQWlCO01BQUVxTixNQUFNLEVBQUU7SUFBTSxDQUFDO0lBQ2xFbUIsRUFBRSxFQUFFO01BQ0Z2TCxrQkFBa0IsRUFBRSxTQUFBQSxtQkFBVTZOLE1BQU0sRUFBRTtRQUNwQyxPQUFPNUMsR0FBRyxDQUFDakwsa0JBQWtCLENBQUMsQ0FBQztNQUNqQztJQUNGO0VBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUM7QUFDSCxDQUFDO0FBQ0QsSUFBSWlPLGVBQWUsR0FBRyxFQUFFO0FBQ3hCakQsTUFBTSxDQUFDa0QsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1bEIzQixJQUFJbEQsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBSTtJQUNaQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRCxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FBQyxTQUFTLEVBQUU7SUFDbkJJLEtBQUssRUFBRTtNQUNMdE8sRUFBRSxFQUFFLHNCQUFzQjtNQUMxQixhQUFhLEVBQUUsRUFBRTtNQUNqQixhQUFhLEVBQUUsRUFBRTtNQUNqQixzQkFBc0IsRUFBRSxFQUFFO01BQzFCbVIsUUFBUSxFQUFFLEVBQUU7TUFDWixlQUFlLEVBQUU7SUFDbkIsQ0FBQztJQUNEbEMsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0VqUSxHQUFHLEVBQUUsU0FBUztNQUNka1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUFDLE9BQU8sRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBZ0MsQ0FBQyxFQUFFLENBQzVERixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxDQUMxRCxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQU8sQ0FBQyxFQUN2QixDQUNFRixFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQUVFLFdBQVcsRUFBRTtRQUE0QyxDQUFDLEVBQzVELENBQ0VILEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLFlBQVksR0FDVkosR0FBRyxDQUFDc0IsRUFBRSxvQ0FBQTVLLE1BQUEsQ0FDK0JzSixHQUFHLENBQUMxSSxJQUFJLENBQUMvRSxHQUFHLENBQUNvRixTQUFTLDJCQUMzRCxDQUFDLEdBQ0QsVUFDSixDQUFDLENBRUwsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RxSSxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBTyxDQUFDLEVBQ3ZCLENBQ0VGLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQWdDLENBQUMsRUFDaEQsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsd0JBQXdCO1VBQ3JDTSxLQUFLLEVBQUU7WUFBRSxXQUFXLEVBQUU7VUFBTyxDQUFDO1VBQzlCSixLQUFLLEVBQUU7WUFBRThDLElBQUksRUFBRSxFQUFFO1lBQUUzQixJQUFJLEVBQUU7VUFBSyxDQUFDO1VBQy9CbEIsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVcUMsTUFBTSxFQUFFO2NBQ3ZCLE9BQU81QyxHQUFHLENBQUN6SSxVQUFVLENBQUMsQ0FBQztZQUN6QjtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQUN5SSxHQUFHLENBQUNJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUNyQyxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsVUFBVSxFQUNWO1VBQ0VFLFdBQVcsRUFBRSwrQkFBK0I7VUFDNUNNLEtBQUssRUFBRTtZQUFFLFdBQVcsRUFBRTtVQUFPLENBQUM7VUFDOUJKLEtBQUssRUFBRTtZQUFFOEMsSUFBSSxFQUFFLEVBQUU7WUFBRTNCLElBQUksRUFBRTtVQUFLLENBQUM7VUFDL0JsQixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVxQyxNQUFNLEVBQUU7Y0FDdkIsT0FBTzVDLEdBQUcsQ0FBQ3RJLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZCO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FBQ3NJLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLDJCQUEyQixDQUFDLENBQ3RDLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RnQixLQUFLLEVBQUU7SUFDVCxDQUFDLENBQ0Y7RUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSTRCLGVBQWUsR0FBRyxFQUFFO0FBQ3hCakQsTUFBTSxDQUFDa0QsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRzNCLElBQUlsRCxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNuQkksS0FBSyxFQUFFO01BQ0x0TyxFQUFFLEVBQUUsZUFBZTtNQUNuQixhQUFhLEVBQUUsRUFBRTtNQUNqQixzQkFBc0IsRUFBRSxFQUFFO01BQzFCLGVBQWUsRUFBRTtJQUNuQixDQUFDO0lBQ0RpUCxXQUFXLEVBQUVoQixHQUFHLENBQUNpQixFQUFFLENBQUMsQ0FDbEI7TUFDRWpRLEdBQUcsRUFBRSxjQUFjO01BQ25Ca1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxJQUFJLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQXFDLENBQUMsRUFBRSxDQUM5REgsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3ZGLEVBQUUsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FDN0QsQ0FBQyxFQUNGaU8sR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7VUFDRW1ELFVBQVUsRUFBRSxDQUNWO1lBQ0UxQyxJQUFJLEVBQUUsV0FBVztZQUNqQjJDLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUJDLFNBQVMsRUFBRTtjQUFFbkIsS0FBSyxFQUFFO1lBQUs7VUFDM0IsQ0FBQyxDQUNGO1VBQ0RoQyxXQUFXLEVBQUUsK0JBQStCO1VBQzVDRSxLQUFLLEVBQUU7WUFBRThDLElBQUksRUFBRSxFQUFFO1lBQUUzQixJQUFJLEVBQUU7VUFBSyxDQUFDO1VBQy9CbEIsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVcUMsTUFBTSxFQUFFO2NBQ3ZCLE9BQU81QyxHQUFHLENBQUN6SSxVQUFVLENBQUMsQ0FBQztZQUN6QjtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQUMwSSxFQUFFLENBQUMsR0FBRyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsQ0FBQyxDQUMxQyxDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RpQixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXBRLEdBQUcsRUFBRSxTQUFTO01BQ2RrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLFFBQVEsRUFDUixDQUNFQSxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLGVBQWU7WUFDbkJkLEtBQUssRUFBRSxlQUFlO1lBQ3RCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VnUCxFQUFFLENBQUMsVUFBVSxFQUFFO1VBQ2JJLEtBQUssRUFBRTtZQUNMSyxJQUFJLEVBQUUsV0FBVztZQUNqQnpQLEtBQUssRUFBRSxXQUFXO1lBQ2xCMlAsT0FBTyxFQUFFWixHQUFHLENBQUMzSCxTQUFTO1lBQ3RCd0ksVUFBVSxFQUFFLEtBQUs7WUFDakJyTCxPQUFPLEVBQUV3SyxHQUFHLENBQUNqSSwwQkFBMEI7WUFDdkNoRyxFQUFFLEVBQUU7VUFDTixDQUFDO1VBQ0R1TyxFQUFFLEVBQUU7WUFDRi9MLE1BQU0sRUFBRXlMLEdBQUcsQ0FBQ2hILGdCQUFnQjtZQUM1QixpQkFBaUIsRUFBRWdILEdBQUcsQ0FBQ3pIO1VBQ3pCLENBQUM7VUFDRHlJLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtZQUNFalEsR0FBRyxFQUFFLGFBQWE7WUFDbEJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO2NBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFBRUUsV0FBVyxFQUFFO2NBQVksQ0FBQyxFQUFFLENBQ3JDRixFQUFFLENBQUMsS0FBSyxFQUFFO2dCQUFFRSxXQUFXLEVBQUU7Y0FBUyxDQUFDLEVBQUUsQ0FDbkNGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7Z0JBQUVFLFdBQVcsRUFBRTtjQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtnQkFDRUksS0FBSyxFQUFFO2tCQUNMbUIsSUFBSSxFQUFFLElBQUk7a0JBQ1ZuUCxPQUFPLEVBQUUsT0FBTztrQkFDaEJvUCxLQUFLLEVBQUUsRUFBRTtrQkFDVEMsT0FBTyxFQUFFLEVBQUU7a0JBQ1hDLFFBQVEsRUFDTixDQUFDM0IsR0FBRyxDQUFDZixvQkFBb0IsSUFDekJlLEdBQUcsQ0FBQy9IO2dCQUNSLENBQUM7Z0JBQ0RxSSxFQUFFLEVBQUU7a0JBQUVDLEtBQUssRUFBRVAsR0FBRyxDQUFDakg7Z0JBQVc7Y0FDOUIsQ0FBQyxFQUNELENBQ0VpSCxHQUFHLENBQUMvSCxtQkFBbUIsR0FDbkJnSSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNkSSxLQUFLLEVBQUU7a0JBQ0x1QixLQUFLLEVBQUUsRUFBRTtrQkFDVDNRLEtBQUssRUFBRTtnQkFDVDtjQUNGLENBQUMsQ0FBQyxHQUNGZ1AsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDRCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ2pDLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0w7Z0JBQUVFLFdBQVcsRUFBRTtjQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtnQkFDRUksS0FBSyxFQUFFO2tCQUNMcUIsT0FBTyxFQUFFLEVBQUU7a0JBQ1hGLElBQUksRUFBRSxJQUFJO2tCQUNWRyxRQUFRLEVBQ04sQ0FBQzNCLEdBQUcsQ0FBQ2hCLG9CQUFvQixJQUN6QmdCLEdBQUcsQ0FBQ2hJLG1CQUFtQjtrQkFDekIzRixPQUFPLEVBQUUsT0FBTztrQkFDaEJvUCxLQUFLLEVBQUU7Z0JBQ1QsQ0FBQztnQkFDRG5CLEVBQUUsRUFBRTtrQkFBRUMsS0FBSyxFQUFFUCxHQUFHLENBQUNsSDtnQkFBVztjQUM5QixDQUFDLEVBQ0QsQ0FDRWtILEdBQUcsQ0FBQ2hJLG1CQUFtQixHQUNuQmlJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2RJLEtBQUssRUFBRTtrQkFDTHVCLEtBQUssRUFBRSxFQUFFO2tCQUNUM1EsS0FBSyxFQUFFO2dCQUNUO2NBQ0YsQ0FBQyxDQUFDLEdBQ0ZnUCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDakMsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0g7WUFDSCxDQUFDO1lBQ0RnQixLQUFLLEVBQUU7VUFDVCxDQUFDLENBQ0YsQ0FBQztVQUNGUyxLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQy9FLEdBQUc7WUFDbkJ1UCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLEtBQUssRUFBRXlLLEdBQUcsQ0FBQztZQUNoQyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZoQyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDbEksTUFBTSxJQUFJa0ksR0FBRyxDQUFDbEksTUFBTSxDQUFDWSxNQUFNLEdBQzNCdUgsRUFBRSxDQUFDLEtBQUssRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBYyxDQUFDLEVBQUUsQ0FDeENILEdBQUcsQ0FBQ0ksRUFBRSxDQUFDSixHQUFHLENBQUNzQixFQUFFLENBQUN0QixHQUFHLENBQUNsSSxNQUFNLENBQUNZLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JDLENBQUMsR0FDRnNILEdBQUcsQ0FBQ3VDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsRUFDRHZDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLGVBQWU7WUFDbkJkLEtBQUssRUFBRSxRQUFRO1lBQ2YsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRWdQLEVBQUUsQ0FBQyxVQUFVLEVBQUU7VUFDYkksS0FBSyxFQUFFO1lBQ0xLLElBQUksRUFBRSxRQUFRO1lBQ2R6UCxLQUFLLEVBQUUsU0FBUztZQUNoQjJQLE9BQU8sRUFBRVosR0FBRyxDQUFDbk8sY0FBYztZQUMzQmdQLFVBQVUsRUFBRSxLQUFLO1lBQ2pCckwsT0FBTyxFQUFFd0ssR0FBRyxDQUFDMU8sK0JBQStCO1lBQzVDd1AsTUFBTSxFQUFFLFNBQUFBLE9BQUNDLENBQUM7Y0FBQSxPQUFLQSxDQUFDLENBQUNoUCxFQUFFO1lBQUE7WUFDbkJBLEVBQUUsRUFBRTtVQUNOLENBQUM7VUFDRHVPLEVBQUUsRUFBRTtZQUFFL0wsTUFBTSxFQUFFeUwsR0FBRyxDQUFDeks7VUFBc0IsQ0FBQztVQUN6Q3lMLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtZQUNFalEsR0FBRyxFQUFFLGFBQWE7WUFDbEJrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO2NBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLElBQUksRUFDSjtnQkFBRUUsV0FBVyxFQUFFO2NBQStCLENBQUMsRUFDL0MsQ0FDRUYsRUFBRSxDQUNBLFFBQVEsRUFDUjtnQkFDRUksS0FBSyxFQUFFO2tCQUFFYyxJQUFJLEVBQUU7Z0JBQUksQ0FBQztnQkFDcEJiLEVBQUUsRUFBRTtrQkFBRUMsS0FBSyxFQUFFUCxHQUFHLENBQUN0SztnQkFBb0I7Y0FDdkMsQ0FBQyxFQUNELENBQ0V1SyxFQUFFLENBQUMsR0FBRyxFQUFFO2dCQUNORSxXQUFXLEVBQUUsWUFBWTtnQkFDekJFLEtBQUssRUFBRTtrQkFBRSxhQUFhLEVBQUU7Z0JBQU87Y0FDakMsQ0FBQyxDQUFDLEVBQ0ZMLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLHNEQUNGLENBQUMsQ0FFTCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRjtZQUNILENBQUM7WUFDRGdCLEtBQUssRUFBRTtVQUNULENBQUMsRUFDRDtZQUNFcFEsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QmtRLEVBQUUsRUFBRSxTQUFBQSxHQUFBRyxJQUFBLEVBQWtDO2NBQUEsSUFBdEJwUCxPQUFPLEdBQUFvUCxJQUFBLENBQVBwUCxPQUFPO2dCQUFFRCxTQUFTLEdBQUFxUCxJQUFBLENBQVRyUCxTQUFTO2NBQ2hDLE9BQU8sQ0FDTGlPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osa0JBQWtCLEdBQ2hCSixHQUFHLENBQUNzQixFQUFFLElBQUE1SyxNQUFBLENBQ0RzSixHQUFHLENBQUNySixVQUFVLENBQ2YzRSxTQUNGLENBQUMsU0FBQTBFLE1BQUEsQ0FBTXNKLEdBQUcsQ0FBQ3JKLFVBQVUsQ0FBQzFFLE9BQU8sQ0FBQyxDQUNoQyxDQUFDLEdBQ0QsZ0JBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSDtZQUNIO1VBQ0YsQ0FBQyxFQUNEO1lBQ0VqQixHQUFHLEVBQUUsUUFBUTtZQUNia1EsRUFBRSxFQUFFLFNBQUFBLEdBQUFLLEtBQUEsRUFBa0M7Y0FBQSxJQUF0QnRQLE9BQU8sR0FBQXNQLEtBQUEsQ0FBUHRQLE9BQU87Z0JBQUVELFNBQVMsR0FBQXVQLEtBQUEsQ0FBVHZQLFNBQVM7Y0FDaEMsT0FBTyxDQUNMaU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUNURCxHQUFHLENBQUNJLEVBQUUsQ0FDSixrQkFBa0IsR0FDaEJKLEdBQUcsQ0FBQ3NCLEVBQUUsSUFBQTVLLE1BQUEsQ0FDRHNKLEdBQUcsQ0FBQ3JKLFVBQVUsQ0FDZjNFLFNBQ0YsQ0FBQyxTQUFBMEUsTUFBQSxDQUFNc0osR0FBRyxDQUFDckosVUFBVSxDQUFDMUUsT0FBTyxDQUFDLENBQ2hDLENBQUMsR0FDRCxnQkFDSixDQUFDLENBQ0YsQ0FBQyxDQUNIO1lBQ0g7VUFDRixDQUFDLEVBQ0Q7WUFDRWpCLEdBQUcsRUFBRSxhQUFhO1lBQ2xCa1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtjQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxJQUFJLEVBQUU7Z0JBQUVFLFdBQVcsRUFBRTtjQUFZLENBQUMsRUFBRSxDQUNyQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFBRUUsV0FBVyxFQUFFO2NBQVMsQ0FBQyxFQUFFLENBQ25DRixFQUFFLENBQ0EsS0FBSyxFQUNMO2dCQUFFRSxXQUFXLEVBQUU7Y0FBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7Z0JBQ0VJLEtBQUssRUFBRTtrQkFDTG1CLElBQUksRUFBRSxJQUFJO2tCQUNWblAsT0FBTyxFQUFFLE9BQU87a0JBQ2hCb1AsS0FBSyxFQUFFLEVBQUU7a0JBQ1RDLE9BQU8sRUFBRSxFQUFFO2tCQUNYQyxRQUFRLEVBQ04sQ0FBQzNCLEdBQUcsQ0FBQzlJLHlCQUF5QixJQUM5QjhJLEdBQUcsQ0FBQ3hPO2dCQUNSLENBQUM7Z0JBQ0Q4TyxFQUFFLEVBQUU7a0JBQ0ZDLEtBQUssRUFBRVAsR0FBRyxDQUFDMUs7Z0JBQ2I7Y0FDRixDQUFDLEVBQ0QsQ0FDRTBLLEdBQUcsQ0FBQ3hPLGlDQUFpQyxHQUNqQ3lPLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2RJLEtBQUssRUFBRTtrQkFDTHVCLEtBQUssRUFBRSxFQUFFO2tCQUNUM1EsS0FBSyxFQUFFO2dCQUNUO2NBQ0YsQ0FBQyxDQUFDLEdBQ0ZnUCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDakMsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtnQkFBRUUsV0FBVyxFQUFFO2NBQVcsQ0FBQyxFQUMzQixDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO2dCQUNFSSxLQUFLLEVBQUU7a0JBQ0xxQixPQUFPLEVBQUUsRUFBRTtrQkFDWEYsSUFBSSxFQUFFLElBQUk7a0JBQ1ZHLFFBQVEsRUFDTixDQUFDM0IsR0FBRyxDQUFDL0kseUJBQXlCLElBQzlCK0ksR0FBRyxDQUFDek8saUNBQWlDO2tCQUN2Q2MsT0FBTyxFQUFFLE9BQU87a0JBQ2hCb1AsS0FBSyxFQUFFO2dCQUNULENBQUM7Z0JBQ0RuQixFQUFFLEVBQUU7a0JBQ0ZDLEtBQUssRUFBRVAsR0FBRyxDQUFDM0s7Z0JBQ2I7Y0FDRixDQUFDLEVBQ0QsQ0FDRTJLLEdBQUcsQ0FBQ3pPLGlDQUFpQyxHQUNqQzBPLEVBQUUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2RJLEtBQUssRUFBRTtrQkFDTHVCLEtBQUssRUFBRSxFQUFFO2tCQUNUM1EsS0FBSyxFQUFFO2dCQUNUO2NBQ0YsQ0FBQyxDQUFDLEdBQ0ZnUCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDakMsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLENBQ0g7WUFDSCxDQUFDO1lBQ0RnQixLQUFLLEVBQUU7VUFDVCxDQUFDLENBQ0YsQ0FBQztVQUNGUyxLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3pHLE1BQU07WUFDdEJpUixRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLFFBQVEsRUFBRXlLLEdBQUcsQ0FBQztZQUNuQyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZoQyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDbEksTUFBTSxJQUFJa0ksR0FBRyxDQUFDbEksTUFBTSxDQUFDakgsTUFBTSxHQUMzQm9QLEVBQUUsQ0FBQyxLQUFLLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxFQUFFLENBQ3hDSCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDc0IsRUFBRSxDQUFDdEIsR0FBRyxDQUFDbEksTUFBTSxDQUFDakgsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQyxHQUNGbVAsR0FBRyxDQUFDdUMsRUFBRSxDQUFDLENBQUMsQ0FDYixFQUNELENBQ0YsQ0FBQyxFQUNEdkMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsY0FBYztZQUNsQmQsS0FBSyxFQUFFLGNBQWM7WUFDckIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRWdQLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFSSxLQUFLLEVBQUU7WUFBRW1ELElBQUksRUFBRTtVQUFJO1FBQUUsQ0FBQyxFQUN4QixDQUNFdkQsRUFBRSxDQUFDLGNBQWMsRUFBRTtVQUNqQkksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsY0FBYztZQUNsQnFOLElBQUksRUFBRSxRQUFRO1lBQ2RxRSxJQUFJLEVBQUUsTUFBTTtZQUNaQyxHQUFHLEVBQUUsTUFBTTtZQUNYQyxRQUFRLEVBQUU7VUFDWixDQUFDO1VBQ0Q5QixLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQzlFLFlBQVk7WUFDNUJzUCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLGNBQWMsRUFBRXlLLEdBQUcsQ0FBQztZQUN6QyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsRUFDRGhDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQ0VFLFdBQVcsRUFBRSwyQkFBMkI7VUFDeENFLEtBQUssRUFBRTtZQUFFbUQsSUFBSSxFQUFFO1VBQUk7UUFDckIsQ0FBQyxFQUNELENBQ0V2RCxFQUFFLENBQ0EsR0FBRyxFQUNIO1VBQ0VFLFdBQVcsRUFBRSxrQkFBa0I7VUFDL0JFLEtBQUssRUFBRTtZQUFFYyxJQUFJLEVBQUU7VUFBZSxDQUFDO1VBQy9CYixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVxQyxNQUFNLEVBQUU7Y0FDdkIsT0FBTzVDLEdBQUcsQ0FBQ3ZGLGNBQWMsQ0FBQyxDQUFDO1lBQzdCO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FDRXVGLEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLGdEQUNGLENBQUMsQ0FFTCxDQUFDLENBRUwsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLE9BQU8sRUFBRTtVQUFFSSxLQUFLLEVBQUU7WUFBRW1ELElBQUksRUFBRTtVQUFLO1FBQUUsQ0FBQyxFQUFFLENBQ3JDeEQsR0FBRyxDQUFDbEksTUFBTSxJQUFJa0ksR0FBRyxDQUFDbEksTUFBTSxDQUFDdEYsWUFBWSxHQUNqQ3lOLEVBQUUsQ0FBQyxLQUFLLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxFQUFFLENBQ3hDSCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDc0IsRUFBRSxDQUFDdEIsR0FBRyxDQUFDbEksTUFBTSxDQUFDdEYsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0MsQ0FBQyxHQUNGd04sR0FBRyxDQUFDdUMsRUFBRSxDQUFDLENBQUMsQ0FDYixDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEdkMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCZCxLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VnUCxFQUFFLENBQ0EsT0FBTyxFQUNQLENBQ0VBLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUksS0FBSyxFQUFFO1lBQUVtRCxJQUFJLEVBQUU7VUFBSTtRQUFFLENBQUMsRUFDeEIsQ0FDRXZELEVBQUUsQ0FBQyxjQUFjLEVBQUU7VUFDakJJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLGdCQUFnQjtZQUNwQnFOLElBQUksRUFBRSxRQUFRO1lBQ2RxRSxJQUFJLEVBQUUsTUFBTTtZQUNaQyxHQUFHLEVBQUUsTUFBTTtZQUNYQyxRQUFRLEVBQUU7VUFDWixDQUFDO1VBQ0Q5QixLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQzdFLGNBQWM7WUFDOUJxUCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLGdCQUFnQixFQUFFeUssR0FBRyxDQUFDO1lBQzNDLENBQUM7WUFDREMsVUFBVSxFQUFFO1VBQ2Q7UUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxFQUNEaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFDRUUsV0FBVyxFQUFFLDJCQUEyQjtVQUN4Q0UsS0FBSyxFQUFFO1lBQUVtRCxJQUFJLEVBQUU7VUFBSTtRQUNyQixDQUFDLEVBQ0QsQ0FDRXZELEVBQUUsQ0FDQSxHQUFHLEVBQ0g7VUFDRUUsV0FBVyxFQUFFLGtCQUFrQjtVQUMvQkUsS0FBSyxFQUFFO1lBQUVjLElBQUksRUFBRTtVQUFlLENBQUM7VUFDL0JiLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXFDLE1BQU0sRUFBRTtjQUN2QixPQUFPNUMsR0FBRyxDQUFDeEMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvQjtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQ0V3QyxHQUFHLENBQUNJLEVBQUUsQ0FDSixrREFDRixDQUFDLENBRUwsQ0FBQyxDQUVMLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FBQyxPQUFPLEVBQUU7VUFBRUksS0FBSyxFQUFFO1lBQUVtRCxJQUFJLEVBQUU7VUFBSztRQUFFLENBQUMsRUFBRSxDQUNyQ3hELEdBQUcsQ0FBQ2xJLE1BQU0sSUFBSWtJLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQ3JGLGNBQWMsR0FDbkN3TixFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQ3JGLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzdDLENBQUMsR0FDRnVOLEdBQUcsQ0FBQ3VDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDRHZDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLFdBQVc7WUFDZmQsS0FBSyxFQUFFLFdBQVc7WUFDbEIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRWdQLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUNBLE9BQU8sRUFDUCxDQUNFQSxFQUFFLENBQUMsY0FBYyxFQUFFO1VBQ2pCSSxLQUFLLEVBQUU7WUFDTHRPLEVBQUUsRUFBRSxTQUFTO1lBQ2JxTixJQUFJLEVBQUUsUUFBUTtZQUNkcUUsSUFBSSxFQUFFLE1BQU07WUFDWkMsR0FBRyxFQUFFLE1BQU07WUFDWEUsUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUNEL0IsS0FBSyxFQUFFO1lBQ0wxUCxLQUFLLEVBQUU2TixHQUFHLENBQUMxSSxJQUFJLENBQUMzRSxTQUFTO1lBQ3pCbVAsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2Qi9CLEdBQUcsQ0FBQ3VELElBQUksQ0FBQ3ZELEdBQUcsQ0FBQzFJLElBQUksRUFBRSxXQUFXLEVBQUV5SyxHQUFHLENBQUM7WUFDdEMsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsY0FBYztZQUNsQmQsS0FBSyxFQUFFLGNBQWM7WUFDckIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRWdQLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUNBLE9BQU8sRUFDUCxDQUNFQSxFQUFFLENBQUMsY0FBYyxFQUFFO1VBQ2pCSSxLQUFLLEVBQUU7WUFDTHRPLEVBQUUsRUFBRSxTQUFTO1lBQ2JxTixJQUFJLEVBQUUsUUFBUTtZQUNkcUUsSUFBSSxFQUFFLE1BQU07WUFDWkMsR0FBRyxFQUFFLE1BQU07WUFDWEMsUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUNEOUIsS0FBSyxFQUFFO1lBQ0wxUCxLQUFLLEVBQUU2TixHQUFHLENBQUMxSSxJQUFJLENBQUMxRSxZQUFZO1lBQzVCa1AsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2Qi9CLEdBQUcsQ0FBQ3VELElBQUksQ0FBQ3ZELEdBQUcsQ0FBQzFJLElBQUksRUFBRSxjQUFjLEVBQUV5SyxHQUFHLENBQUM7WUFDekMsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxFQUNGaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQ2xJLE1BQU0sSUFBSWtJLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQ2xGLFlBQVksR0FDakNxTixFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQ2xGLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzNDLENBQUMsR0FDRm9OLEdBQUcsQ0FBQ3VDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0R2QyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLGNBQWMsRUFDZDtVQUNFSSxLQUFLLEVBQUU7WUFDTHRPLEVBQUUsRUFBRSxrQkFBa0I7WUFDdEJkLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRWdQLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFSSxLQUFLLEVBQUU7WUFBRW1ELElBQUksRUFBRTtVQUFJO1FBQUUsQ0FBQyxFQUN4QixDQUNFdkQsRUFBRSxDQUFDLGNBQWMsRUFBRTtVQUNqQkksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsU0FBUztZQUNicU4sSUFBSSxFQUFFLFFBQVE7WUFDZHFFLElBQUksRUFBRSxNQUFNO1lBQ1pDLEdBQUcsRUFBRSxNQUFNO1lBQ1hDLFFBQVEsRUFBRTtVQUNaLENBQUM7VUFDRDlCLEtBQUssRUFBRTtZQUNMMVAsS0FBSyxFQUFFNk4sR0FBRyxDQUFDMUksSUFBSSxDQUFDNUUsZ0JBQWdCO1lBQ2hDb1AsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2Qi9CLEdBQUcsQ0FBQ3VELElBQUksQ0FBQ3ZELEdBQUcsQ0FBQzFJLElBQUksRUFBRSxrQkFBa0IsRUFBRXlLLEdBQUcsQ0FBQztZQUM3QyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsRUFDRGhDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQ0VFLFdBQVcsRUFBRSwyQkFBMkI7VUFDeENFLEtBQUssRUFBRTtZQUFFbUQsSUFBSSxFQUFFO1VBQUk7UUFDckIsQ0FBQyxFQUNELENBQ0V2RCxFQUFFLENBQ0EsR0FBRyxFQUNIO1VBQ0VFLFdBQVcsRUFBRSxrQkFBa0I7VUFDL0JFLEtBQUssRUFBRTtZQUFFYyxJQUFJLEVBQUU7VUFBZSxDQUFDO1VBQy9CYixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVxQyxNQUFNLEVBQUU7Y0FDdkIsT0FBTzVDLEdBQUcsQ0FBQzlCLGtCQUFrQixDQUFDLENBQUM7WUFDakM7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUNFOEIsR0FBRyxDQUFDSSxFQUFFLENBQ0osb0RBQ0YsQ0FBQyxDQUVMLENBQUMsQ0FFTCxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsT0FBTyxFQUFFO1VBQUVJLEtBQUssRUFBRTtZQUFFbUQsSUFBSSxFQUFFO1VBQUs7UUFBRSxDQUFDLEVBQUUsQ0FDckN4RCxHQUFHLENBQUNsSSxNQUFNLElBQUlrSSxHQUFHLENBQUNsSSxNQUFNLENBQUNwRixnQkFBZ0IsR0FDckN1TixFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQ3BGLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDL0MsQ0FBQyxHQUNGc04sR0FBRyxDQUFDdUMsRUFBRSxDQUFDLENBQUMsQ0FDYixDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEdkMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0x0TyxFQUFFLEVBQUUsU0FBUztZQUNiZCxLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUU7VUFDZjtRQUNGLENBQUMsRUFDRCxDQUNFZ1AsRUFBRSxDQUNBLE9BQU8sRUFDUCxDQUNFQSxFQUFFLENBQ0EsT0FBTyxFQUNQLENBQ0VBLEVBQUUsQ0FBQyxjQUFjLEVBQUU7VUFDakJJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLFNBQVM7WUFDYnFOLElBQUksRUFBRSxRQUFRO1lBQ2RxRSxJQUFJLEVBQUUsTUFBTTtZQUNaQyxHQUFHLEVBQUUsTUFBTTtZQUNYQyxRQUFRLEVBQUU7VUFDWixDQUFDO1VBQ0Q5QixLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3pFLFVBQVU7WUFDMUJpUCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLFlBQVksRUFBRXlLLEdBQUcsQ0FBQztZQUN2QyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZoQyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDbEksTUFBTSxJQUFJa0ksR0FBRyxDQUFDbEksTUFBTSxDQUFDakYsVUFBVSxHQUMvQm9OLEVBQUUsQ0FBQyxLQUFLLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxFQUFFLENBQ3hDSCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDc0IsRUFBRSxDQUFDdEIsR0FBRyxDQUFDbEksTUFBTSxDQUFDakYsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekMsQ0FBQyxHQUNGbU4sR0FBRyxDQUFDdUMsRUFBRSxDQUFDLENBQUMsQ0FDYixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEdkMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQU8sQ0FBQyxFQUN2QixDQUNFRixFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQUVFLFdBQVcsRUFBRTtRQUE2QixDQUFDLEVBQzdDLENBQ0VGLEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7VUFDRUUsV0FBVyxFQUFFLHdCQUF3QjtVQUNyQ00sS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QkosS0FBSyxFQUFFO1lBQUU4QyxJQUFJLEVBQUUsRUFBRTtZQUFFM0IsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQmxCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXFDLE1BQU0sRUFBRTtjQUN2QixPQUFPNUMsR0FBRyxDQUFDekksVUFBVSxDQUFDLENBQUM7WUFDekI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDeUksR0FBRyxDQUFDSSxFQUFFLENBQUMsOEJBQThCLENBQUMsQ0FDekMsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsK0JBQStCO1VBQzVDTSxLQUFLLEVBQUU7WUFBRSxXQUFXLEVBQUU7VUFBTyxDQUFDO1VBQzlCSixLQUFLLEVBQUU7WUFBRThDLElBQUksRUFBRSxFQUFFO1lBQUUzQixJQUFJLEVBQUU7VUFBSyxDQUFDO1VBQy9CbEIsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVcUMsTUFBTSxFQUFFO2NBQ3ZCLE9BQU81QyxHQUFHLENBQUN0SSxRQUFRLENBQUMsQ0FBQztZQUN2QjtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQ0VzSSxHQUFHLENBQUNJLEVBQUUsQ0FDSixjQUFjLEdBQ1pKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3ZGLEVBQUUsR0FBRyxjQUFjLEdBQUcsTUFBTSxDQUFDLEdBQzdDLFlBQ0osQ0FBQyxDQUVMLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RpTyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1VBQ3hCSSxLQUFLLEVBQUU7WUFDTHZPLGlCQUFpQixFQUFFa08sR0FBRyxDQUFDbE8saUJBQWlCO1lBQ3hDcU4sTUFBTSxFQUFFO1VBQ1YsQ0FBQztVQUNEbUIsRUFBRSxFQUFFO1lBQ0Z2TCxrQkFBa0IsRUFBRSxTQUFBQSxtQkFBVTZOLE1BQU0sRUFBRTtjQUNwQyxPQUFPNUMsR0FBRyxDQUFDakwsa0JBQWtCLENBQUMsQ0FBQztZQUNqQztVQUNGO1FBQ0YsQ0FBQyxDQUFDLENBQ0g7TUFDSCxDQUFDO01BQ0RxTSxLQUFLLEVBQUU7SUFDVCxDQUFDLENBQ0Y7RUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSTRCLGVBQWUsR0FBRyxFQUFFO0FBQ3hCakQsTUFBTSxDQUFDa0QsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2eUIzQixJQUFJbEQsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBSTtJQUNaQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRCxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FBQyxTQUFTLEVBQUU7SUFDbkJJLEtBQUssRUFBRTtNQUNMdE8sRUFBRSxFQUFFLHNCQUFzQjtNQUMxQixhQUFhLEVBQUUsRUFBRTtNQUNqQixzQkFBc0IsRUFBRSxFQUFFO01BQzFCLGVBQWUsRUFBRTtJQUNuQixDQUFDO0lBQ0RpUCxXQUFXLEVBQUVoQixHQUFHLENBQUNpQixFQUFFLENBQUMsQ0FDbEI7TUFDRWpRLEdBQUcsRUFBRSxjQUFjO01BQ25Ca1EsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FBQyxJQUFJLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQXFDLENBQUMsRUFBRSxDQUM5REgsR0FBRyxDQUFDSSxFQUFFLENBQ0pKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FDSnRCLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3ZGLEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxvQkFDeEMsQ0FDRixDQUFDLENBQ0YsQ0FBQyxFQUNGaU8sR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7VUFDRW1ELFVBQVUsRUFBRSxDQUNWO1lBQ0UxQyxJQUFJLEVBQUUsV0FBVztZQUNqQjJDLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUJDLFNBQVMsRUFBRTtjQUFFbkIsS0FBSyxFQUFFO1lBQUs7VUFDM0IsQ0FBQyxDQUNGO1VBQ0RoQyxXQUFXLEVBQUUsK0JBQStCO1VBQzVDRSxLQUFLLEVBQUU7WUFBRThDLElBQUksRUFBRSxFQUFFO1lBQUUzQixJQUFJLEVBQUU7VUFBSyxDQUFDO1VBQy9CbEIsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVcUMsTUFBTSxFQUFFO2NBQ3ZCLE9BQU81QyxHQUFHLENBQUN6SSxVQUFVLENBQUMsQ0FBQztZQUN6QjtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQUMwSSxFQUFFLENBQUMsR0FBRyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsQ0FBQyxDQUMxQyxDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RpQixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXBRLEdBQUcsRUFBRSxTQUFTO01BQ2RrUSxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLFFBQVEsRUFDUixDQUNFQSxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLGVBQWU7WUFDbkJkLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VnUCxFQUFFLENBQ0EsZUFBZSxFQUNmLENBQ0VBLEVBQUUsQ0FBQyxjQUFjLEVBQUU7VUFDakJJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLFdBQVc7WUFDZnFOLElBQUksRUFBRSxNQUFNO1lBQ1p1QixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CZ0QsUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUNEOUIsS0FBSyxFQUFFO1lBQ0wxUCxLQUFLLEVBQUU2TixHQUFHLENBQUNWLFFBQVE7WUFDbkJ3QyxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDVixRQUFRLEdBQUd5QyxHQUFHO1lBQ3BCLENBQUM7WUFDREMsVUFBVSxFQUFFO1VBQ2Q7UUFDRixDQUFDLENBQUMsRUFDRmhDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0Esc0JBQXNCLEVBQ3RCLENBQ0VBLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtVQUN0QkksS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLEVBQUU7WUFDakJtQyxLQUFLLEVBQUUsRUFBRTtZQUNUcUIsTUFBTSxFQUFFLE9BQU87WUFDZixlQUFlLEVBQUU7VUFDbkIsQ0FBQztVQUNEdkQsRUFBRSxFQUFFO1lBQUV3RCxPQUFPLEVBQUU5RCxHQUFHLENBQUNMO1VBQWtCLENBQUM7VUFDdENrQyxLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3RGLFNBQVM7WUFDekI4UCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLFdBQVcsRUFBRXlLLEdBQUcsQ0FBQztZQUN0QyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQ2xJLE1BQU0sSUFBSWtJLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQzlGLFNBQVMsR0FDOUJpTyxFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQzlGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3hDLENBQUMsR0FDRmdPLEdBQUcsQ0FBQ3VDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsRUFDRHZDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQ0VJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLGVBQWU7WUFDbkJkLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VnUCxFQUFFLENBQ0EsZUFBZSxFQUNmLENBQ0VBLEVBQUUsQ0FBQyxjQUFjLEVBQUU7VUFDakJJLEtBQUssRUFBRTtZQUNMdE8sRUFBRSxFQUFFLFNBQVM7WUFDYnFOLElBQUksRUFBRSxNQUFNO1lBQ1p1QixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CZ0QsUUFBUSxFQUFFO1VBQ1osQ0FBQztVQUNEOUIsS0FBSyxFQUFFO1lBQ0wxUCxLQUFLLEVBQUU2TixHQUFHLENBQUNULE1BQU07WUFDakJ1QyxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDVCxNQUFNLEdBQUd3QyxHQUFHO1lBQ2xCLENBQUM7WUFDREMsVUFBVSxFQUFFO1VBQ2Q7UUFDRixDQUFDLENBQUMsRUFDRmhDLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0Esc0JBQXNCLEVBQ3RCLENBQ0VBLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtVQUN0QkksS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLEVBQUU7WUFDakJtQyxLQUFLLEVBQUUsRUFBRTtZQUNUcUIsTUFBTSxFQUFFLE9BQU87WUFDZixlQUFlLEVBQUU7VUFDbkIsQ0FBQztVQUNEdkQsRUFBRSxFQUFFO1lBQUV3RCxPQUFPLEVBQUU5RCxHQUFHLENBQUNGO1VBQWdCLENBQUM7VUFDcEMrQixLQUFLLEVBQUU7WUFDTDFQLEtBQUssRUFBRTZOLEdBQUcsQ0FBQzFJLElBQUksQ0FBQ3JGLE9BQU87WUFDdkI2UCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCL0IsR0FBRyxDQUFDdUQsSUFBSSxDQUFDdkQsR0FBRyxDQUFDMUksSUFBSSxFQUFFLFNBQVMsRUFBRXlLLEdBQUcsQ0FBQztZQUNwQyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEaEMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQ2xJLE1BQU0sSUFBSWtJLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQzdGLE9BQU8sR0FDNUJnTyxFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQ3NCLEVBQUUsQ0FBQ3RCLEdBQUcsQ0FBQ2xJLE1BQU0sQ0FBQzdGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3RDLENBQUMsR0FDRitOLEdBQUcsQ0FBQ3VDLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEdkMsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQU8sQ0FBQyxFQUN2QixDQUNFRixFQUFFLENBQUMsT0FBTyxFQUFFLENBQ1YsQ0FBQ0QsR0FBRyxDQUFDYixNQUFNLEdBQ1BjLEVBQUUsQ0FDQSxHQUFHLEVBQ0g7VUFDRUUsV0FBVyxFQUNULGlEQUFpRDtVQUNuREUsS0FBSyxFQUFFO1lBQUVjLElBQUksRUFBRTtVQUF5QjtRQUMxQyxDQUFDLEVBQ0QsQ0FBQ25CLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLDZDQUE2QyxDQUFDLENBQ3hELENBQUMsR0FDREosR0FBRyxDQUFDdUMsRUFBRSxDQUFDLENBQUMsQ0FDYixDQUFDLEVBQ0Z2QyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBNkIsQ0FBQyxFQUM3QyxDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO1VBQ0VFLFdBQVcsRUFBRSx3QkFBd0I7VUFDckNNLEtBQUssRUFBRTtZQUFFLFdBQVcsRUFBRTtVQUFPLENBQUM7VUFDOUJKLEtBQUssRUFBRTtZQUFFOEMsSUFBSSxFQUFFLEVBQUU7WUFBRTNCLElBQUksRUFBRTtVQUFLLENBQUM7VUFDL0JsQixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVxQyxNQUFNLEVBQUU7Y0FDdkIsT0FBTzVDLEdBQUcsQ0FBQ3pJLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FBQ3lJLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLDhCQUE4QixDQUFDLENBQ3pDLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7VUFDRUUsV0FBVyxFQUFFLCtCQUErQjtVQUM1Q00sS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QkosS0FBSyxFQUFFO1lBQUU4QyxJQUFJLEVBQUUsRUFBRTtZQUFFM0IsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQmxCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXFDLE1BQU0sRUFBRTtjQUN2QixPQUFPNUMsR0FBRyxDQUFDdEksUUFBUSxDQUFDLENBQUM7WUFDdkI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUNFc0ksR0FBRyxDQUFDSSxFQUFFLENBQ0osY0FBYyxHQUNaSixHQUFHLENBQUNzQixFQUFFLENBQUN0QixHQUFHLENBQUMxSSxJQUFJLENBQUN2RixFQUFFLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUM3QyxZQUNKLENBQUMsQ0FFTCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNEcVAsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUk0QixlQUFlLEdBQUcsRUFBRTtBQUN4QmpELE1BQU0sQ0FBQ2tELGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNoUTNCLElBQU14VCxjQUFjLEdBQUcsQ0FDbkI7RUFBRTBDLEtBQUssRUFBRSxFQUFFO0VBQUU0UixJQUFJLEVBQUU7QUFBSyxDQUFDLEVBQ3pCO0VBQUU1UixLQUFLLEVBQUUsRUFBRTtFQUFFNFIsSUFBSSxFQUFFO0FBQUssQ0FBQyxFQUN6QjtFQUFFNVIsS0FBSyxFQUFFLEVBQUU7RUFBRTRSLElBQUksRUFBRTtBQUFLLENBQUMsRUFDekI7RUFBRTVSLEtBQUssRUFBRSxHQUFHO0VBQUU0UixJQUFJLEVBQUU7QUFBTSxDQUFDLENBQzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNMS0MsTUFBTTtFQUNWO0FBQ0Y7QUFDQTtFQUNFLFNBQUFBLE9BQUEsRUFBYztJQUFBQyxlQUFBLE9BQUFELE1BQUE7SUFDWixJQUFJLENBQUNsTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQ2xCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRW9NLFlBQUEsQ0FBQUYsTUFBQTtJQUFBaFQsR0FBQTtJQUFBbUIsS0FBQSxFQUtBLFNBQUFnUyxJQUFJQyxLQUFLLEVBQUU7TUFDVCxPQUFPLElBQUksQ0FBQ3RNLE1BQU0sQ0FBQ3VNLGNBQWMsQ0FBQ0QsS0FBSyxDQUFDO0lBQzFDOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUFwVCxHQUFBO0lBQUFtQixLQUFBLEVBR0EsU0FBQW1TLElBQUEsRUFBTTtNQUNKLE9BQU9wRixNQUFNLENBQUNxRixJQUFJLENBQUMsSUFBSSxDQUFDek0sTUFBTSxDQUFDLENBQUMwTSxNQUFNLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXhULEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBK0MsSUFBSWtQLEtBQUssRUFBRTtNQUNULElBQUksSUFBSSxDQUFDdE0sTUFBTSxDQUFDc00sS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUN0TSxNQUFNLENBQUNzTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXBULEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBc1MsT0FBTzNNLE1BQU0sRUFBRTtNQUNiLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3RCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBOUcsR0FBQTtJQUFBbUIsS0FBQSxFQUtBLFNBQUF1UyxNQUFNTixLQUFLLEVBQUU7TUFDWCxJQUFJQSxLQUFLLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQ3RNLE1BQU0sQ0FBQ3NNLEtBQUssQ0FBQztRQUV6QjtNQUNGO01BRUEsSUFBSSxDQUFDdE0sTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBOUcsR0FBQTtJQUFBbUIsS0FBQSxFQUdBLFNBQUF3UyxLQUFBLEVBQU87TUFBQSxJQUFBQyxjQUFBO01BQ0wsSUFBSWpRLEtBQUssR0FBRyxFQUFFO01BQ2QsSUFBSWtRLFVBQVUsSUFBQUQsY0FBQSxHQUFHMUYsTUFBTSxDQUFDNEYsTUFBTSxDQUFDLElBQUksQ0FBQ2hOLE1BQU0sQ0FBQyxjQUFBOE0sY0FBQSxjQUFBQSxjQUFBLEdBQUksRUFBRTtNQUNqREMsVUFBVSxDQUFDN0ksT0FBTyxDQUFDLFVBQUFuRSxLQUFLLEVBQUk7UUFDMUJsRCxLQUFLLENBQUNvUSxJQUFJLENBQUNsTixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BRUYsT0FBT2xELEtBQUs7SUFDZDtFQUFDO0VBQUEsT0FBQXFQLE1BQUE7QUFBQTtBQUdILGlFQUFlQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RVk7QUFBQSxJQUUzQm5VLElBQUk7RUFDUjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsU0FBQUEsS0FBWUksSUFBSSxFQUFFO0lBQUFnVSxlQUFBLE9BQUFwVSxJQUFBO0lBQ2hCLElBQUksQ0FBQ21WLFlBQVksR0FBRy9VLElBQUk7SUFFeEIsS0FBSyxJQUFJbVUsS0FBSyxJQUFJblUsSUFBSSxFQUFFO01BQ3RCLElBQUksQ0FBQ21VLEtBQUssQ0FBQyxHQUFHblUsSUFBSSxDQUFDbVUsS0FBSyxDQUFDO0lBQzNCO0lBRUEsSUFBSSxDQUFDdE0sTUFBTSxHQUFHLElBQUlrTSxrREFBTSxDQUFDLENBQUM7RUFDNUI7O0VBRUE7QUFDRjtBQUNBO0VBRkVFLFlBQUEsQ0FBQXJVLElBQUE7SUFBQW1CLEdBQUE7SUFBQW1CLEtBQUEsRUFHQSxTQUFBbEMsS0FBQSxFQUFPO01BQ0wsSUFBSUEsSUFBSSxHQUFHLENBQUMsQ0FBQztNQUViLEtBQUssSUFBSWdWLFFBQVEsSUFBSSxJQUFJLENBQUNELFlBQVksRUFBRTtRQUN0Qy9VLElBQUksQ0FBQ2dWLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO01BQ2pDO01BRUEsT0FBT2hWLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBZSxHQUFBO0lBQUFtQixLQUFBLEVBR0EsU0FBQW9CLE1BQUEsRUFBUTtNQUNOLEtBQUssSUFBSTZRLEtBQUssSUFBSSxJQUFJLENBQUNZLFlBQVksRUFBRTtRQUNuQyxJQUFJLENBQUNaLEtBQUssQ0FBQyxHQUFHLEVBQUU7TUFDbEI7TUFFQSxJQUFJLENBQUN0TSxNQUFNLENBQUM0TSxLQUFLLENBQUMsQ0FBQztJQUNyQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTFULEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBK1MsS0FBS0MsR0FBRyxFQUFFO01BQ1IsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVELEdBQUcsQ0FBQztJQUNqQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQW5VLEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBa1QsSUFBSUYsR0FBRyxFQUFFO01BQ1AsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxLQUFLLEVBQUVELEdBQUcsQ0FBQztJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQW5VLEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBbVQsTUFBTUgsR0FBRyxFQUFFO01BQ1QsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUVELEdBQUcsQ0FBQztJQUNsQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQW5VLEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBb1QsUUFBT0osR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVELEdBQUcsQ0FBQztJQUNuQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBblUsR0FBQTtJQUFBbUIsS0FBQSxFQU1BLFNBQUFpVCxPQUFPSSxXQUFXLEVBQUVMLEdBQUcsRUFBRTtNQUFBLElBQUEvUSxLQUFBO01BQ3ZCLE9BQU8sSUFBSXFSLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztRQUN0QzFRLEtBQUssQ0FBQ3VRLFdBQVcsQ0FBQyxDQUFDTCxHQUFHLEVBQUUvUSxLQUFJLENBQUNuRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDd0UsSUFBSSxDQUFDLFVBQUNVLFFBQVEsRUFBSztVQUNsQmYsS0FBSSxDQUFDd1IsU0FBUyxDQUFDelEsUUFBUSxDQUFDbEYsSUFBSSxDQUFDO1VBRTdCeVYsT0FBTyxDQUFDdlEsUUFBUSxDQUFDbEYsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQzRILEtBQUssRUFBSztVQUNoQnpELEtBQUksQ0FBQ3lSLE1BQU0sQ0FBQ2hPLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQ2xGLElBQUksQ0FBQzZILE1BQU0sQ0FBQztVQUV2QzZOLE1BQU0sQ0FBQzlOLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQ2xGLElBQUksQ0FBQzZILE1BQU0sQ0FBQztRQUNwQyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDSjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTlHLEdBQUE7SUFBQW1CLEtBQUEsRUFLQSxTQUFBeVQsVUFBVTNWLElBQUksRUFBRTtNQUNkO01BQ0E7O01BRUEsSUFBSSxDQUFDNkgsTUFBTSxDQUFDNE0sS0FBSyxDQUFDLENBQUM7SUFDckI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUExVCxHQUFBO0lBQUFtQixLQUFBLEVBS0EsU0FBQTBULE9BQU8vTixNQUFNLEVBQUU7TUFDYixJQUFJLENBQUNBLE1BQU0sQ0FBQzJNLE1BQU0sQ0FBQzNNLE1BQU0sQ0FBQztJQUM1QjtFQUFDO0lBQUE5RyxHQUFBO0lBQUFtQixLQUFBLEVBR0QsU0FBQTJULFlBQUEsRUFBYztNQUNaLElBQUk5VSxHQUFHLEdBQUcsS0FBSztNQUNma08sTUFBTSxDQUFDNEYsTUFBTSxDQUFDLElBQUksQ0FBQzdVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQytMLE9BQU8sQ0FBQyxVQUFVK0osR0FBRyxFQUFFQyxHQUFHLEVBQUU7UUFDckQsSUFBSUQsR0FBRyxFQUFFO1VBQ1AvVSxHQUFHLEdBQUcsSUFBSTtRQUNaO01BQ0YsQ0FBQyxDQUFDO01BQ0YsT0FBT0EsR0FBRztJQUNaO0VBQUM7SUFBQUEsR0FBQTtJQUFBbUIsS0FBQSxFQUVELFNBQUE4VCxtQkFBQSxFQUFxQjtNQUNuQixJQUFJalYsR0FBRyxHQUFHLEtBQUs7TUFFZmtPLE1BQU0sQ0FBQzRGLE1BQU0sQ0FBQyxJQUFJLENBQUM3VSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMrTCxPQUFPLENBQUMsVUFBVStKLEdBQUcsRUFBRUMsR0FBRyxFQUFFO1FBQ3JELElBQUlELEdBQUcsSUFBSUEsR0FBRyxLQUFLLEtBQUssRUFBRTtVQUN4Qi9VLEdBQUcsR0FBRyxJQUFJO1FBQ1o7TUFDRixDQUFDLENBQUM7TUFDRixPQUFPQSxHQUFHO0lBQ1o7RUFBQztFQUFBLE9BQUFuQixJQUFBO0FBQUE7QUFLSCxpRUFBZUEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNsSm5CLGlFQUFlO0VBQ2JrRCxPQUFPLEVBQUU7SUFDUG1ULGVBQWUsV0FBQUEsZ0JBQUNDLEdBQUcsRUFBRTtNQUNuQixPQUFPQSxHQUFHLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFREMscUJBQXFCLFdBQUFBLHNCQUFDSCxHQUFHLEVBQWlCO01BQUEsSUFBZkksS0FBSyxHQUFBQyxTQUFBLENBQUFoQyxNQUFBLFFBQUFnQyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLEtBQUs7TUFDdEMsT0FBTyxDQUFDRCxLQUFLLEdBQUdKLEdBQUcsQ0FBQ0UsV0FBVyxDQUFDLENBQUMsR0FBR0YsR0FBRyxFQUFFTyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsVUFBQUMsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFBQSxFQUFDO0lBQ3hHLENBQUM7SUFFREMsWUFBWSxXQUFBQSxhQUFDcEksTUFBTSxFQUFFO01BQ25CLElBQUlBLE1BQU0sRUFBRTtRQUNWLE9BQU9BLE1BQU0sQ0FBQzJILFFBQVEsQ0FBQyxDQUFDLENBQUNNLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUM7TUFDaEU7TUFDQSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRURJLFdBQVcsV0FBQUEsWUFBQSxFQUEyQjtNQUFBLElBQTFCQyxNQUFNLEdBQUFQLFNBQUEsQ0FBQWhDLE1BQUEsUUFBQWdDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsR0FBRztNQUFBLElBQUVoQyxNQUFNLEdBQUFnQyxTQUFBLENBQUFoQyxNQUFBLFFBQUFnQyxTQUFBLFFBQUFDLFNBQUEsR0FBQUQsU0FBQSxNQUFHLENBQUM7TUFDbEMsSUFBSUwsR0FBRyxHQUFHLEVBQUU7TUFDWixLQUFLLElBQUlhLENBQUMsR0FBRyxDQUFDLEVBQUVDLENBQUMsR0FBR3pDLE1BQU0sRUFBRXdDLENBQUMsR0FBR0MsQ0FBQyxFQUFFLEVBQUVELENBQUMsRUFBRTtRQUN0Q2IsR0FBRyxJQUFJWSxNQUFNO01BQ2Y7TUFDQSxPQUFPWixHQUFHO0lBQ1osQ0FBQztJQUVEZSxPQUFPLFdBQUFBLFFBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQUk1QyxNQUFNLEdBQUc0QyxRQUFRLENBQUM1QyxNQUFNO01BQzVCLEtBQUssSUFBSXdDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3hDLE1BQU0sRUFBRXdDLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUlJLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDLElBQUlHLE1BQU0sRUFBRSxPQUFPLElBQUk7TUFDeEM7TUFDQSxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBRURFLGlCQUFpQixXQUFBQSxrQkFBQzVJLE1BQU0sRUFBRTZJLFdBQVcsRUFBRTtNQUNyQyxJQUFJQyxTQUFTLEdBQUcsQ0FBQztNQUNqQixJQUFLOUksTUFBTSxHQUFHK0ksSUFBSSxDQUFDQyxLQUFLLENBQUNoSixNQUFNLENBQUMsS0FBTSxDQUFDLEVBQUU7UUFDdkM4SSxTQUFTLEdBQUdDLElBQUksQ0FBQ0UsS0FBSyxDQUFDakosTUFBTSxFQUFFNkksV0FBVyxDQUFDO1FBQzNDLElBQUlDLFNBQVMsS0FBSyxDQUFDLEVBQUU7VUFDbkIsT0FBTzlJLE1BQU0sQ0FBQ2lJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1FBQ3BDO1FBQ0EsT0FBT2EsU0FBUyxDQUFDSSxjQUFjLENBQUMsQ0FBQyxDQUFDakIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7TUFDeEQsQ0FBQyxNQUFNO1FBQ0xhLFNBQVMsR0FBR0MsSUFBSSxDQUFDRSxLQUFLLENBQUNqSixNQUFNLEVBQUU2SSxXQUFXLENBQUM7UUFDM0MsT0FBT0MsU0FBUyxDQUFDSSxjQUFjLENBQUMsQ0FBQyxDQUFDakIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7TUFDeEQ7SUFDRixDQUFDO0lBRURrQixZQUFZLFdBQUFBLGFBQUEsRUFBc0I7TUFBQSxJQUFyQjVXLEdBQUcsR0FBQXdWLFNBQUEsQ0FBQWhDLE1BQUEsUUFBQWdDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsTUFBTTtNQUFBLElBQUU3UixLQUFLLEdBQUE2UixTQUFBLENBQUFoQyxNQUFBLE9BQUFnQyxTQUFBLE1BQUFDLFNBQUE7TUFDOUIsSUFBSW9CLEdBQUcsR0FBRyxFQUFFO01BQ1osSUFBSWIsQ0FBQyxHQUFHLENBQUM7TUFDVHJTLEtBQUssQ0FBQ3FILE9BQU8sQ0FBQyxVQUFBOEwsR0FBRyxFQUFJO1FBQ25CRCxHQUFHLElBQUlDLEdBQUcsQ0FBQzlXLEdBQUcsQ0FBQztRQUNmLElBQUlnVyxDQUFDLEdBQUdyUyxLQUFLLENBQUM2UCxNQUFNLEVBQUU7VUFDcEJxRCxHQUFHLElBQUksSUFBSTtRQUNiO1FBQ0FiLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQztNQUVGLE9BQU9hLEdBQUc7SUFDWixDQUFDO0lBRURFLGFBQWEsV0FBQUEsY0FBQ3BYLElBQUksRUFBRUQsRUFBRSxFQUFFRSxLQUFLLEVBQUU7TUFDN0IsSUFBSW9YLENBQUMsR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ3RYLElBQUksQ0FBQztNQUM1QixJQUFJdVgsQ0FBQyxHQUFHLElBQUksQ0FBQ0QsU0FBUyxDQUFDdlgsRUFBRSxDQUFDO01BQzFCLElBQUl5WCxHQUFHLEdBQUcsSUFBSSxDQUFDRixTQUFTLENBQUNyWCxLQUFLLENBQUM7TUFDL0Isa0JBQUE4RixNQUFBLENBQWtCc1IsQ0FBQyxVQUFBdFIsTUFBQSxDQUFPd1IsQ0FBQyxVQUFBeFIsTUFBQSxDQUFPeVIsR0FBRztJQUN2QyxDQUFDO0lBRURGLFNBQVMsV0FBQUEsVUFBQzlCLEdBQUcsRUFBRTtNQUNiLGtCQUFBelAsTUFBQSxDQUFrQnlQLEdBQUc7SUFDdkI7RUFDRjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEI7QUFFN0IsaUVBQWU7RUFDWHBXLE1BQU0sRUFBRSxDQUFDZ1UsZ0RBQUksQ0FBQztFQUNkaFIsT0FBTyxFQUFFO0lBQ0xNLFNBQVMsV0FBQUEsVUFBQSxFQUFpQztNQUFBLElBQWhDaEIsT0FBTyxHQUFBbVUsU0FBQSxDQUFBaEMsTUFBQSxRQUFBZ0MsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxJQUFJO01BQUEsSUFBRXBVLEtBQUssR0FBQW9VLFNBQUEsQ0FBQWhDLE1BQUEsT0FBQWdDLFNBQUEsTUFBQUMsU0FBQTtNQUFBLElBQUUyQixPQUFPLEdBQUE1QixTQUFBLENBQUFoQyxNQUFBLE9BQUFnQyxTQUFBLE1BQUFDLFNBQUE7TUFDcEMsSUFBSSxDQUFDNEIsUUFBUSxDQUFDdlksS0FBSyxDQUFDc1ksT0FBTyxFQUFFO1FBQ3pCaFcsS0FBSyxFQUFFQSxLQUFLO1FBQ1pDLE9BQU8sRUFBRUEsT0FBTztRQUNoQmlXLEtBQUssRUFBRTtNQUNYLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFREMsU0FBUyxXQUFBQSxVQUFBLEVBQUc7TUFDUixPQUFPLElBQUk5QyxPQUFPLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUs7UUFDcEM2QyxDQUFDLENBQUNDLE9BQU8sQ0FBQztVQUNOclcsS0FBSyxFQUFFLGlCQUFpQjtVQUN4QnNXLE9BQU8sRUFBRSxtQ0FBbUM7VUFDNUN0SixJQUFJLEVBQUUsS0FBSztVQUNYdUosWUFBWSxFQUFFLElBQUk7VUFDbEJDLE9BQU8sRUFBRTtZQUNMQyxHQUFHLEVBQUU7Y0FDRDlFLElBQUksRUFBRSxLQUFLO2NBQ1grRSxRQUFRLEVBQUUsU0FBUztjQUNuQnBHLE1BQU0sRUFBRSxTQUFBQSxPQUFVcUcsSUFBSSxFQUFFO2dCQUNwQnJELE9BQU8sQ0FBQztrQkFDSjFVLEdBQUcsRUFBRSxJQUFJO2tCQUNUK1MsSUFBSSxFQUFFO2dCQUNWLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQztZQUNEaUYsTUFBTSxFQUFFLFNBQUFBLE9BQVVuUixLQUFLLEVBQUU7Y0FDckI4TixNQUFNLENBQUM7Z0JBQ0gzVSxHQUFHLEVBQUUsS0FBSztnQkFDVitTLElBQUksRUFBRTtjQUNWLENBQUMsQ0FBQztZQUNOO1VBQ0o7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDO0lBRURrRixhQUFhLFdBQUFBLGNBQUEsRUFBaUU7TUFBQSxJQUFBN1UsS0FBQTtNQUFBLElBQWhFaEMsS0FBSyxHQUFBb1UsU0FBQSxDQUFBaEMsTUFBQSxRQUFBZ0MsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxxQ0FBcUM7TUFBQSxJQUFFMEMsVUFBVSxHQUFBMUMsU0FBQSxDQUFBaEMsTUFBQSxRQUFBZ0MsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxFQUFFO01BRXhFLElBQUksQ0FBQzJDLE1BQU0sR0FBRyxFQUFFO01BQ2hCLElBQUksQ0FBQzNWLFFBQVEsQ0FBQzRWLGFBQWEsQ0FBQyxvREFBb0QsRUFBRTtRQUM5RWhYLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJpWCxVQUFVLEVBQUUsSUFBSTtRQUNoQkMsU0FBUyxFQUFFLFFBQVE7UUFDbkJDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsZUFBZSxFQUFFLEtBQUs7UUFDdEJ4RyxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUMsQ0FDR3pPLElBQUksQ0FBQyxVQUFBdEMsS0FBSyxFQUFJO1FBQ1hpQyxLQUFJLENBQUMrVSxNQUFNLEdBQUdoWCxLQUFLO01BQ3ZCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQXdYLEdBQUcsRUFBSTtRQUNWO01BQUEsQ0FDSCxDQUFDOztNQUVOO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDSjtFQUNKO0FBRUosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VEO0FBQ3FJO0FBQzdCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsOEJBQThCLG1DQUFtQyx3QkFBd0IsR0FBRyxrQkFBa0IsOEJBQThCLHdCQUF3QixtQ0FBbUMseUNBQXlDLEdBQUcsb0JBQW9CLDhCQUE4Qix3QkFBd0IsR0FBRyxTQUFTLHlIQUF5SCxPQUFPLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsc1FBQXNRLDBDQUEwQyxtMUVBQW0xRSxtQkFBbUIsbzNCQUFvM0Isb0JBQW9CLDhDQUE4QyxHQUFHLHVCQUF1QixJQUFJLG9CQUFvQixJQUFJLHNGQUFzRixvQkFBb0IsOENBQThDLEdBQUcsdUJBQXVCLElBQUksb0JBQW9CLElBQUksdXREQUF1dEQsbUJBQW1CLDZrQkFBNmtCLDhTQUE4Uyx5QkFBeUIsaW9CQUFpb0Isb1RBQW9ULDJCQUEyQiwyK0JBQTIrQix5QkFBeUIsZ29CQUFnb0IsMFRBQTBULDZCQUE2QixzaEJBQXNoQix1QkFBdUIsMlFBQTJRLHFCQUFxQixnS0FBZ0sscUJBQXFCLDBDQUEwQyxtQ0FBbUMsdVJBQXVSLHlCQUF5QixjQUFjLDhCQUE4QixxREFBcUQseUZBQXlGLG1EQUFtRCxvQkFBb0Isc0VBQXNFLDhCQUE4Qix5QkFBeUIsY0FBYyxvSEFBb0gsb2tCQUFva0IsOEVBQThFLFVBQVUsS0FBSyxrQkFBa0IsMkJBQTJCLGdDQUFnQyxLQUFLLGlCQUFpQixtSkFBbUosOENBQThDLHlCQUF5QiwwQkFBMEIsT0FBTyxzQ0FBc0MsZ0NBQWdDLHNDQUFzQyx3Q0FBd0MsMENBQTBDLG1DQUFtQyxzQ0FBc0Msb0NBQW9DLE9BQU8sNEJBQTRCLHNCQUFzQiwwR0FBMEcsa0RBQWtELFFBQVEsZ0NBQWdDLDBDQUEwQyx1Q0FBdUMsb0RBQW9ELFdBQVcsMkJBQTJCLG9EQUFvRCw2Q0FBNkMsNkNBQTZDLFdBQVcsRUFBRSxPQUFPLGdDQUFnQyw4QkFBOEIsOEJBQThCLDBXQUEwVyw0REFBNEQsMkdBQTJHLHlCQUF5QixnREFBZ0QseUNBQXlDLHdDQUF3Qyw4QkFBOEIsb0RBQW9ELGlDQUFpQyxXQUFXLDJCQUEyQixtQ0FBbUMsV0FBVyxFQUFFLE9BQU8sZ0NBQWdDLDhCQUE4Qiw4QkFBOEIscVlBQXFZLDREQUE0RCx3SUFBd0ksY0FBYyxnQ0FBZ0MseUNBQXlDLHdDQUF3Qyw4QkFBOEIsb0RBQW9ELGlDQUFpQyxXQUFXLDJCQUEyQixtQ0FBbUMsV0FBVyxFQUFFLE9BQU8sdUJBQXVCLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLE9BQU8sdUJBQXVCLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLE9BQU8sNENBQTRDLCtDQUErQywyQ0FBMkMsT0FBTyw4REFBOEQsK0JBQStCLCtCQUErQixPQUFPLHNDQUFzQyxzQkFBc0IsNkhBQTZILHdEQUF3RCxRQUFRLGdDQUFnQywwQ0FBMEMsNENBQTRDLHlEQUF5RCxXQUFXLDJCQUEyQix5REFBeUQsMkRBQTJELDJEQUEyRCxXQUFXLEVBQUUsT0FBTyxvQ0FBb0Msc0RBQXNELDRDQUE0QyxrQ0FBa0MsT0FBTyxvQ0FBb0Msc0RBQXNELDRDQUE0QyxrQ0FBa0MsT0FBTyxpREFBaUQsb0RBQW9ELGdEQUFnRCxPQUFPLG1FQUFtRSw2Q0FBNkMsb0NBQW9DLE9BQU8sdUNBQXVDLHVDQUF1Qyx1Q0FBdUMsOENBQThDLDRDQUE0QyxtREFBbUQsT0FBTywwQ0FBMEMsa0VBQWtFLHNFQUFzRSw0REFBNEQsMkVBQTJFLG1KQUFtSiw0RUFBNEUsT0FBTyxnQ0FBZ0Msc0JBQXNCLDJCQUEyQiwwREFBMEQsT0FBTyxtQ0FBbUMsc0JBQXNCLDRDQUE0QyxnRUFBZ0UsOERBQThELGdGQUFnRiwrRUFBK0Usc0VBQXNFLGlFQUFpRSw2REFBNkQsa0RBQWtELGlFQUFpRSxnREFBZ0QsK0hBQStILFdBQVcsRUFBRSxrQ0FBa0MsMkJBQTJCLHFFQUFxRSx5REFBeUQsMktBQTJLLEVBQUUsV0FBVywyRUFBMkUsb0JBQW9CLE1BQU0sd0NBQXdDLFNBQVMsT0FBTyw0R0FBNEcsc0NBQXNDLGtEQUFrRCxPQUFPLEdBQUcsaURBQWlELFFBQVEsR0FBRyx5REFBeUQsY0FBYyxHQUFHLHFEQUFxRCxZQUFZLEdBQUcsNEZBQTRGLDZCQUE2Qix5Q0FBeUMsU0FBUyxpREFBaUQsd0NBQXdDLFNBQVMsd0RBQXdELCtFQUErRSxnRUFBZ0UsT0FBTyxxREFBcUQsbURBQW1ELFVBQVUsR0FBRyxpREFBaUQsUUFBUSxHQUFHLDJEQUEyRCx3REFBd0QsZ0VBQWdFLE9BQU8sbUNBQW1DLHNCQUFzQiwwQkFBMEIsZ0VBQWdFLCtEQUErRCxxRkFBcUYsc0VBQXNFLGtDQUFrQyw2Q0FBNkMsaUZBQWlGLFdBQVcsRUFBRSw2RUFBNkUsWUFBWSxNQUFNLHdDQUF3QyxTQUFTLE9BQU8scUNBQXFDLHNCQUFzQiwwQkFBMEIsOERBQThELG9DQUFvQywyQ0FBMkMsbUVBQW1FLDJEQUEyRCx5REFBeUQsYUFBYSxFQUFFLHlEQUF5RCxnREFBZ0QsYUFBYSxFQUFFLFdBQVcsa0VBQWtFLFVBQVUsTUFBTSwwQ0FBMEMsU0FBUyxPQUFPLHFCQUFxQiwyQkFBMkIscUNBQXFDLFVBQVUsTUFBTSxxQ0FBcUMsU0FBUyxPQUFPLDJCQUEyQix3REFBd0QsT0FBTyxNQUFNLGVBQWUscURBQXFELDZDQUE2QyxPQUFPLHVEQUF1RCw2Q0FBNkMsT0FBTyxrREFBa0QsNkNBQTZDLE9BQU8seURBQXlELDZDQUE2QyxPQUFPLE1BQU0sa0JBQWtCLDhCQUE4Qix3RkFBd0YsT0FBTyxpQ0FBaUMsNkNBQTZDLE9BQU8sc0NBQXNDLGtHQUFrRyxPQUFPLHNDQUFzQyxrREFBa0QsT0FBTyxNQUFNLElBQUksd0NBQXdDLDhCQUE4QixtQ0FBbUMsd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4Qix3QkFBd0IsbUNBQW1DLHlDQUF5QyxHQUFHLG9CQUFvQiw4QkFBOEIsd0JBQXdCLEdBQUcsK0JBQStCO0FBQzM1dkI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNxSTtBQUM3QjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsNERBQTRELDhCQUE4QixtQ0FBbUMsd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4Qix3QkFBd0IsbUNBQW1DLHlDQUF5QyxHQUFHLG9CQUFvQiw4QkFBOEIsd0JBQXdCLEdBQUcsU0FBUyxzSUFBc0ksTUFBTSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLCtVQUErVSx3REFBd0Qsa2xDQUFrbEMsc0JBQXNCLGcwQkFBZzBCLG9CQUFvQiw0ZEFBNGQscUJBQXFCLGdLQUFnSyxxQkFBcUIsMENBQTBDLG1DQUFtQyw0SEFBNEgseUJBQXlCLGNBQWMsdURBQXVELG9CQUFvQixrQ0FBa0MsK0NBQStDLG1EQUFtRCxNQUFNLHlCQUF5QixjQUFjLGdGQUFnRixvREFBb0QsS0FBSyxpQkFBaUIseUhBQXlILHVEQUF1RCx5QkFBeUIsU0FBUyxzQ0FBc0MsOEJBQThCLDhCQUE4QixzRkFBc0Ysa0VBQWtFLDJHQUEyRyxzQ0FBc0MsSUFBSSxvQ0FBb0MscURBQXFELCtDQUErQyx3Q0FBd0MsOEJBQThCLG9EQUFvRCxpQ0FBaUMsV0FBVywyQkFBMkIsbUNBQW1DLFdBQVcsRUFBRSxPQUFPLHNDQUFzQyw4QkFBOEIsOEJBQThCLGlIQUFpSCxrRUFBa0UsK0lBQStJLGNBQWMsZ0NBQWdDLCtDQUErQyx3Q0FBd0MsOEJBQThCLG9EQUFvRCxpQ0FBaUMsV0FBVywyQkFBMkIsbUNBQW1DLFdBQVcsRUFBRSxPQUFPLHFCQUFxQiwyQkFBMkIsMkNBQTJDLFVBQVUsTUFBTSwyQ0FBMkMsU0FBUyxPQUFPLDJCQUEyQix3REFBd0QsT0FBTyxpQ0FBaUMsOEJBQThCLDhFQUE4RSxpQkFBaUIsU0FBUywrQkFBK0IsT0FBTywrQkFBK0IsOEJBQThCLDRFQUE0RSxpQkFBaUIsU0FBUyw2QkFBNkIsT0FBTyxTQUFTLE9BQU8sd0NBQXdDLDhCQUE4QixtQ0FBbUMsd0JBQXdCLEdBQUcsa0JBQWtCLDhCQUE4Qix3QkFBd0IsbUNBQW1DLHlDQUF5QyxHQUFHLG9CQUFvQiw4QkFBOEIsd0JBQXdCLEdBQUcsK0JBQStCO0FBQzUvTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaUU7QUFDeEcsWUFBeVo7O0FBRXpaOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDhVQUFPOzs7O0FBSXhCLGlFQUFlLDhVQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnFFO0FBQ3hHLFlBQWdhOztBQUVoYTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxVkFBTzs7OztBQUl4QixpRUFBZSxxVkFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pnRDtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDQSxDQUFzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2lGO0FBQzNCO0FBQ0w7OztBQUdoRTtBQUNBLENBQXNHO0FBQ3RHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzJFO0FBQzNCO0FBQ0w7QUFDMUQsQ0FBbUY7OztBQUduRjtBQUNzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNrRjtBQUMzQjtBQUNMO0FBQ2pFLENBQTBGOzs7QUFHMUY7QUFDc0c7QUFDdEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsd0ZBQU07QUFDUixFQUFFLDBGQUFNO0FBQ1IsRUFBRSxtR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDcU0sQ0FBQyxpRUFBZSwrTEFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBUCxDQUFDLGlFQUFlLDRNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0ExQixDQUFDLGlFQUFlLHNNQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FiLENBQUMsaUVBQWUsNk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FLQXRQOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9tb2RhbHMvcGF5cm9sbERlbGV0ZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL21vZGFscy9wYXlyb2xsTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9mb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9tb2RhbHMvcGF5cm9sbE1vZGFsLnZ1ZT9lMjcyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2UzN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9tb2RhbHMvcGF5cm9sbE1vZGFsLnZ1ZT9lMzZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2NkM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9jb21wb25lbnRzL2luZGV4LnZ1ZT9hMmNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxEZWxldGVNb2RhbC52dWU/MDZjZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL21vZGFscy9wYXlyb2xsTW9kYWwudnVlPzk1N2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/YjQ0OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL2NvbXBvbmVudHMvaW5kZXgudnVlPzA0YzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9tb2RhbHMvcGF5cm9sbERlbGV0ZU1vZGFsLnZ1ZT8xNzU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxNb2RhbC52dWU/NGQ4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT8yMTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvY29tcG9uZW50cy9pbmRleC52dWU/YWI1OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL21vZGFscy9wYXlyb2xsRGVsZXRlTW9kYWwudnVlPzg2MDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9tb2RhbHMvcGF5cm9sbE1vZGFsLnZ1ZT80MmNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxNb2RhbC52dWU/MWQ3MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiPlxuICAgIDxoMSBjbGFzcz1cIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCI+UGF5cm9sbDwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwiY3JlYXRlUGF5cm9sbFwiPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgIDxkaXYgOnN0eWxlPVwieyB3aWR0aDogJzI1MHB4JyB9XCI+XG4gICAgICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJpb2RcIlxuICAgICAgICAgICAgICAgIGxhYmVsPVwicGVyaW9kXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBwYXlyb2xsIHBlcmlvZFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBlcmlvZFwiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJwYXlyb2xsUGVyaW9kc1wiXG4gICAgICAgICAgICAgICAgOmZpbHRlcmFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJpc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKHApID0+IHAuaWRcIlxuICAgICAgICAgICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFBheXJvbGxQZXJpb2RcIlxuICAgICAgICAgICAgICAgIGlkPVwicGVyaW9kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0yIHYtc2VsZWN0LW9wdGlvbi1wYWRkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWxpbmsgaHJlZj1cIiNcIiBAY2xpY2s9XCJjcmVhdGVQYXlyb2xsUGVyaW9kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIE5ldyBQYXlyb2xsIFBlcmlvZFxuICAgICAgICAgICAgICAgICAgICA8L2ItbGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGVkLW9wdGlvbj1cInsgZGF0ZV90bywgZGF0ZV9mcm9tIH1cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNvcHRpb249XCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgYCR7Zm9ybWF0RGF0ZShkYXRlX2Zyb20pfSAtICR7Zm9ybWF0RGF0ZShkYXRlX3RvKX1gIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25QYXlyb2xsUGVyaW9kUHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblBheXJvbGxQZXJpb2ROZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwicHJpbnRQYXlyb2xsU3VtbWFyeVJlcG9ydFwiPlxuICAgICAgICAgICAgICAgIFBSSU5UXG4gICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG1iLTNcIj5cbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtci1zbS0yXCIgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCI+XG4gICAgICAgICAgICAgICAgU2hvd1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNob3dFbnRyaWVzT3B0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9iLWZvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8Yi1vdmVybGF5IDpzaG93PVwiaXNPdmVybGF5XCIgcm91bmRlZD1cInNtXCI+XG4gICAgICAgICAgICAgIDxiLXRhYmxlXG4gICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICBzdHJpcGVkXG4gICAgICAgICAgICAgICAgc2hvdy1lbXB0eVxuICAgICAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zLmRhdGFcIlxuICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgIDpwZXItcGFnZT1cIjBcIlxuICAgICAgICAgICAgICAgIDpidXN5PVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICA6Y3VycmVudC1wYWdlPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdGFibGUtYnVzeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBjbGFzcz1cImFsaWduLW1pZGRsZVwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZW1wdHk+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTUgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aT57eyBcIk5vIGRhdGEgZm91bmQhXCIgfX08L2k+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoZW1wbG95ZWVfbm8pPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRhdGEuaXRlbS5lbXBsb3llZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZW1wbG95ZWUuZW1wbG95ZWVfaWQgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGVtcGxveWVlX25hbWUpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImRhdGEuaXRlbS5lbXBsb3llZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZW1wbG95ZWUuZnVsbF9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChncm9zc19zYWxhcnkpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGEuaXRlbS5ncm9zc19zYWxhcnkudG9GaXhlZCgyKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwodG90YWxfZGVkdWN0aW9ucyk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLnRvdGFsX2RlZHVjdGlvbnMudG9GaXhlZCgyKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwobmV0X3NhbGFyeSk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLm5ldF9zYWxhcnkudG9GaXhlZCgyKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoYWN0aW9ucyk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8Yi1kcm9wZG93biByaWdodCBuby1jYXJldD5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNidXR0b24tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICBNb3JlIEFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxiLWRyb3Bkb3duLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhY3Rpb24sIGluZGV4KSBpbiBhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkFjdGlvbihkYXRhLml0ZW0sIGFjdGlvbi52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGItaWNvbiA6dmFyaWFudD1cImFjdGlvbi52YXJpYW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1wcmltYXJ5JzogYWN0aW9uLnZhcmlhbnQgPT09ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cImFjdGlvbi50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgICAgPC9iLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgPCEtLSA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdFBheXJvbGwoZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRURJVFxuICAgICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBAY2xpY2s9XCJkZWxldGVQYXlyb2xsKGRhdGEuaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERFTEVURVxuICAgICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICA8L2Itcm93PiAtLT5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8dGVtcGxhdGUgdi1zbG90OnRhYmxlLWJ1c3k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IC0tPlxuICAgICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8L2Itb3ZlcmxheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgYFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxQYXlyb2xsTW9kYWxcbiAgICAgIDpwYXlyb2xsRm9ybT1cInBheXJvbGxGb3JtXCJcbiAgICAgIEBsb2FkUGF5cm9sbHM9XCJsb2FkUGF5cm9sbHMoKVwiXG4gICAgPjwvUGF5cm9sbE1vZGFsPlxuICAgIDxQYXlyb2xsRGVsZXRlTW9kYWxcbiAgICAgIDpwYXlyb2xsRm9ybT1cInBheXJvbGxGb3JtXCJcbiAgICAgIEBsb2FkUGF5cm9sbHM9XCJsb2FkUGF5cm9sbHMoKVwiXG4gICAgPjwvUGF5cm9sbERlbGV0ZU1vZGFsPlxuICAgIDxQYXlyb2xsUGVyaW9kc01vZGFsXG4gICAgICA6cGF5cm9sbFBlcmlvZEZvcm09XCJwYXlyb2xsUGVyaW9kRm9ybVwiXG4gICAgICBAbG9hZFBheXJvbGxQZXJpb2RzPVwibG9hZFBheXJvbGxQZXJpb2RzKClcIlxuICAgICAgOmlzU2VsZj1cImZhbHNlXCJcbiAgICA+PC9QYXlyb2xsUGVyaW9kc01vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHNob3dFbnRyaWVzT3B0IH0gZnJvbSBcIkBqcy9kYXRhXCI7XG5pbXBvcnQgUGF5cm9sbE1vZGFsIGZyb20gXCIuLi9tb2RhbHMvcGF5cm9sbE1vZGFsLnZ1ZVwiO1xuaW1wb3J0IFBheXJvbGxEZWxldGVNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL3BheXJvbGxEZWxldGVNb2RhbC52dWVcIjtcbmltcG9ydCBQYXlyb2xsUGVyaW9kc01vZGFsIGZyb20gXCIuLi8uLi9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuaW1wb3J0IHRvYXN0IGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgUGF5cm9sbE1vZGFsLFxuICAgIFBheXJvbGxEZWxldGVNb2RhbCxcbiAgICBQYXlyb2xsUGVyaW9kc01vZGFsLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwZXJfcGFnZTogMTAsXG4gICAgICBjdXJyZW50X3BhZ2U6IDEsXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICBzZWFyY2hlZDogXCJcIixcbiAgICAgIHNob3dFbnRyaWVzT3B0LFxuICAgICAgaXNPdmVybGF5OiBmYWxzZSxcbiAgICAgIHRvdGFsUm93OiAwLFxuICAgICAgc2hvd2luZzoge1xuICAgICAgICB0bzogMCxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAgcGVyaW9kOiBcIlwiLFxuICAgICAgdGFibGVUb3RhbFJvd3M6IFwiXCIsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJlbXBsb3llZV9ub1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIE5vLlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImVtcGxveWVlX25hbWVcIixcbiAgICAgICAgICBsYWJlbDogXCJFbXBsb3llZSBOYW1lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZ3Jvc3Nfc2FsYXJ5XCIsXG4gICAgICAgICAgbGFiZWw6IFwiR3Jvc3MgU2FsYXJ5XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwidG90YWxfZGVkdWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIlRvdGFsIERlZHVjdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJuZXRfc2FsYXJ5XCIsXG4gICAgICAgICAgbGFiZWw6IFwiTmV0IFBheVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICBsYWJlbDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgdGhDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRkQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICB0aFN0eWxlOiB7IHdpZHRoOiBcIjEwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgICBpc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXG4gICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgcGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZTogMSxcbiAgICAgIHBheXJvbGxQZXJpb2RzUGVyUGFnZTogMTAsXG4gICAgICBwYXlyb2xsUGVyaW9kc0xhc3RQYWdlOiAwLFxuICAgICAgcGF5cm9sbFBlcmlvZHNTZWFyY2hlZDogXCJcIixcbiAgICAgIHBheXJvbGxQZXJpb2RzOiBbXSxcblxuICAgICAgcGF5cm9sbFBlcmlvZEZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgIGRhdGVfZnJvbTogXCJcIixcbiAgICAgICAgZGF0ZV90bzogXCJcIixcbiAgICAgIH0pLFxuXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHsgdmFsdWU6IFwiZWRpdFwiLCB0aXRsZTogXCJFZGl0XCIsIHZhcmlhbnQ6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwicHJpbnRfcGF5c2xpcFwiLCB0aXRsZTogXCJQcmludCBQYXlzbGlwXCIsIHZhcmlhbnQ6IFwiaW5mb1wiIH0sXG4gICAgICAgIHsgdmFsdWU6IFwiZGVsZXRlXCIsIHRpdGxlOiBcIkRlbGV0ZVwiLCB2YXJpYW50OiBcImRhbmdlclwiIH0sXG4gICAgICBdLFxuXG4gICAgICBwYXlyb2xsRm9ybTogbmV3IEZvcm0oe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgZW1wOiBcIlwiLFxuICAgICAgICBwZXJpb2Q6IFwiXCIsXG4gICAgICAgIGJhc2ljX3NhbGFyeTogXCJcIixcbiAgICAgICAgdG90YWxfb3ZlcnRpbWU6IFwiXCIsXG4gICAgICAgIHRvdGFsX2RlZHVjdGlvbnM6IFwiXCIsXG4gICAgICAgIG90aGVyX3BheTogXCJcIixcbiAgICAgICAgZ3Jvc3Nfc2FsYXJ5OiBcIlwiLFxuICAgICAgICBuZXRfc2FsYXJ5OiBcIlwiLFxuICAgICAgfSksXG5cbiAgICAgIG1vZGFsSWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInBheXJvbGxcIiwgW1wibG9hZEl0ZW1zXCJdKSxcblxuICAgIHByaW50UGF5cm9sbFN1bW1hcnlSZXBvcnQoKSB7XG4gICAgICBpZiAodGhpcy5wZXJpb2QpIHtcbiAgICAgICAgbGV0IGxpbmsgPSBcIi9hZG1pbi9wYXlyb2xscy9wYXlyb2xsLXN1bW1hcnktcmVwb3J0L1wiICsgdGhpcy5wZXJpb2Q7XG5cbiAgICAgICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgXCJkYW5nZXJcIixcbiAgICAgICAgXCJFUlJPUlwiLFxuICAgICAgICBgUGxlYXNlIHNlbGVjdCBhIHBheXJvbGwgcGVyaW9kIGJlZm9yZSBwcmludGluZ2BcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVBheXJvbGwoKSB7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLmVtcCA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLnBlcmlvZCA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLmJhc2ljX3NhbGFyeSA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLnRvdGFsX292ZXJ0aW1lID0gXCJcIjtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0udG90YWxfZGVkdWN0aW9ucyA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLm90aGVyX3BheSA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLmdyb3NzX3NhbGFyeSA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLm5ldF9zYWxhcnkgPSBcIlwiO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcInBheXJvbGwtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBlZGl0UGF5cm9sbChkYXRhKSB7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLmlkID0gZGF0YS5pZDtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0uZW1wID0gZGF0YS5lbXBsb3llZTtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0ucGVyaW9kID0gZGF0YS5wYXlyb2xsX3BlcmlvZC5pZDtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0uYmFzaWNfc2FsYXJ5ID1cbiAgICAgICAgcGFyc2VGbG9hdChkYXRhLmJhc2ljX3NhbGFyeSkudG9GaXhlZCgyKSB8fCAwO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS50b3RhbF9vdmVydGltZSA9XG4gICAgICAgIHBhcnNlRmxvYXQoZGF0YS50b3RhbF9vdmVydGltZSkudG9GaXhlZCgyKSB8fCAwO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS50b3RhbF9kZWR1Y3Rpb25zID1cbiAgICAgICAgcGFyc2VGbG9hdChkYXRhLnRvdGFsX2RlZHVjdGlvbnMpLnRvRml4ZWQoMikgfHwgMDtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0ub3RoZXJfcGF5ID0gcGFyc2VGbG9hdChkYXRhLm90aGVyX3BheSkudG9GaXhlZCgyKSB8fCAwO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcInBheXJvbGwtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBkZWxldGVQYXlyb2xsKGRhdGEpIHtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS5lbXAgPSBkYXRhLmVtcGxveWVlO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS5wZXJpb2QgPSBkYXRhLnBheXJvbGxfcGVyaW9kLmlkO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS5iYXNpY19zYWxhcnkgPSBkYXRhLmJhc2ljX3NhbGFyeTtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0udG90YWxfb3ZlcnRpbWUgPSBkYXRhLnRvdGFsX292ZXJ0aW1lO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS50b3RhbF9kZWR1Y3Rpb25zID0gZGF0YS50b3RhbF9kZWR1Y3Rpb25zO1xuICAgICAgdGhpcy5wYXlyb2xsRm9ybS5vdGhlcl9wYXkgPSBkYXRhLm90aGVyX3BheTtcbiAgICAgIHRoaXMucGF5cm9sbEZvcm0uZ3Jvc3Nfc2FsYXJ5ID0gZGF0YS5ncm9zc19zYWxhcnk7XG4gICAgICB0aGlzLnBheXJvbGxGb3JtLm5ldF9zYWxhcnkgPSBkYXRhLm5ldF9zYWxhcnk7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwicGF5cm9sbC1kZWxldGUtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBwcmludFBheXNsaXAoaXRlbSkge1xuICAgICAgbGV0IGxpbmsgPSBcIi9hZG1pbi9wYXlyb2xscy9wYXlzbGlwL1wiICsgaXRlbS5pZDtcblxuICAgICAgd2luZG93Lm9wZW4obGluaywgXCJfYmxhbmtcIik7XG4gICAgfSxcblxuICAgIG9uQWN0aW9uKGl0ZW0sIHRpdGxlKSB7XG4gICAgICBzd2l0Y2ggKHRpdGxlKSB7XG4gICAgICAgIGNhc2UgXCJlZGl0XCI6XG4gICAgICAgICAgdGhpcy5lZGl0UGF5cm9sbChpdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInByaW50X3BheXNsaXBcIjpcbiAgICAgICAgICB0aGlzLnByaW50UGF5c2xpcChpdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImRlbGV0ZVwiOlxuICAgICAgICAgIHRoaXMuZGVsZXRlUGF5cm9sbChpdGVtKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZFBheXJvbGxzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkSXRlbXMocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMudGFibGVUb3RhbFJvd3MgPSB0aGlzLml0ZW1zLnRvdGFsO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy50byA9IHRoaXMuaXRlbXMudG87XG4gICAgICAgICAgdGhpcy5zaG93aW5nLmZyb20gPSB0aGlzLml0ZW1zLmZyb207XG4gICAgICAgICAgdGhpcy5zaG93aW5nLnRvdGFsID0gdGhpcy5pdGVtcy50b3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHF1ZXJ5O1xuICAgIH0sIDEwMDApLFxuXG4gICAgbG9hZFBheXJvbGxQZXJpb2RzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICBwYWdlOiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5wYXlyb2xsUGVyaW9kc1NlYXJjaGVkLFxuICAgICAgfTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL3BheXJvbGwtcGVyaW9kc1wiLCB7IHBhcmFtcyB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzID0gZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNMYXN0UGFnZSA9IGRhdGEubGFzdF9wYWdlO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25QYXlyb2xsUGVyaW9kTmV4dFBhZ2UoKSB7XG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgKz0gMTtcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gICAgfSxcblxuICAgIG9uUGF5cm9sbFBlcmlvZFByZXZQYWdlKCkge1xuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlIC09IDE7XG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xuICAgIH0sXG5cbiAgICBvblNlYXJjaFBheXJvbGxQZXJpb2Qoc2VhcmNoLCBsb2FkaW5nKSB7XG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZDogXy5kZWJvdW5jZShmdW5jdGlvbiAoc2VhcmNoKSB7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzU2VhcmNoZWQgPSBzZWFyY2g7XG5cbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gICAgfSwgMTAwMCksXG5cbiAgICBjcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5pZCA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfZnJvbSA9IFwiXCI7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSBcIlwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcIik7XG4gICAgfSxcblxuICAgIGZvcm1hdFRpbWUoZW1wbG95ZWVUaW1lKSB7XG4gICAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZW1wbG95ZWVUaW1lLnNwbGl0KFwiOlwiKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGltZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICB0aW1lLnNldE1pbnV0ZXMobWludXRlcyk7XG4gICAgICBjb25zdCBhbXBtID0gdGltZS5nZXRIb3VycygpID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgbGV0IGhvdXJzMTIgPSB0aW1lLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGhvdXJzMTIgPSBob3VyczEyID8gaG91cnMxMiA6IDEyOyAvLyBjb252ZXJ0IDAgdG8gMTJcbiAgICAgIHJldHVybiBgJHtob3VyczEyfToke21pbnV0ZXN9ICR7YW1wbX1gO1xuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoXCJERCBNTU1NIFlZWVlcIik7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRQYXlyb2xscygpO1xuICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFwicGF5cm9sbFwiLCB7XG4gICAgICBpdGVtczogXCJnZXRQYXlyb2xsc1wiLFxuICAgIH0pLFxuXG4gICAgaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgIT09IHRoaXMucGF5cm9sbFBlcmlvZHNMYXN0UGFnZTtcbiAgICB9LFxuXG4gICAgaGFzUGF5cm9sbFBlcmlvZHNQcmV2UGFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgPiAxO1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjdXJyZW50X3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRQYXlyb2xscygpO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcGVyX3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRQYXlyb2xscygpO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpO1xuICAgIH0sXG5cbiAgICBzZWFyY2hlZDoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9hZFBheXJvbGxzKCk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJwYXlyb2xsLWRlbGV0ZS1tb2RhbFwiXG4gICAgaGlkZS1oZWFkZXJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY2VudGVyZWRcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1yb3c+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg0PkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEPC9oND5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3sgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtmb3JtLmVtcC5mdWxsX25hbWV9IGZyb20gUGF5cm9sbCByZWNvcmRzP2AgfX1cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIE5PXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICBZRVNcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wicGF5cm9sbEZvcm1cIl0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLnBheXJvbGxGb3JtXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInBheXJvbGxcIiwgW1wiZGVsZXRlUGF5cm9sbFwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcInBheXJvbGwtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZVBheXJvbGwocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJkYW5nZXJcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIERFTEVURURcIixcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybS5lbXAuZnVsbF9uYW1lfSBoYXMgYmVlbiByZW1vdmVkIGZyb20gUGF5cm9sbCByZWNvcmRzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbHNcIik7XG4gICAgICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicGF5cm9sbC1kZWxldGUtbW9kYWxcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJwYXlyb2xsLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCcgOiAnQWRkIFBheXJvbGwnfX08L2g1PlxuICAgICAgPGItYnV0dG9uXG4gICAgICAgIHBpbGxcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcbiAgICAgICAgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCJcbiAgICAgICAgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XG4gICAgICA8L2ItYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1mb3JtPlxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiZW1wbG95ZWUtbmFtZVwiIGxhYmVsPVwiRW1wbG95ZWUgTmFtZVwiIGxhYmVsLWZvcj1cImVtcGxveWVlLW5hbWVcIj5cbiAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJlbXBsb3llZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJmdWxsX25hbWVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1wXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZ1wiXG4gICAgICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hFbXBsb3llZVwiXG4gICAgICAgICAgICBAb3B0aW9uOnNlbGVjdGVkPVwib25DaGFuZ2VTZWxlY3RlZEVtcGxveWVlXCJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNFbXBsb3llZXNQcmV2UGFnZSB8fCBpc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlByZXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzRW1wbG95ZWVzTmV4dFBhZ2UgfHwgaXNOZXh0QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uTmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZW1wX2lkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5lbXBfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImlucHV0LWdyb3VwLTRcIiBsYWJlbD1cIlBlcmlvZFwiIGxhYmVsLWZvcj1cImlucHV0LTRcIj5cbiAgICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJwZXJpb2RcIlxuICAgICAgICAgICAgbGFiZWw9XCJkYXRlX3RvXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBlcmlvZFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cInBheXJvbGxQZXJpb2RzXCJcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJpc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nXCJcbiAgICAgICAgICAgIDpyZWR1Y2U9XCIocCkgPT4gcC5pZFwiXG4gICAgICAgICAgICBAc2VhcmNoPVwib25TZWFyY2hQYXlyb2xsUGVyaW9kXCJcbiAgICAgICAgICAgIGlkPVwicGVyaW9kXCJcbiAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgICA8Yi1saW5rIGhyZWY9XCIjXCIgQGNsaWNrPVwiY3JlYXRlUGF5cm9sbFBlcmlvZFwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgTmV3IFBheXJvbGwgUGVyaW9kXG4gICAgICAgICAgICAgICAgPC9iLWxpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNzZWxlY3RlZC1vcHRpb249XCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt7IGAke2Zvcm1hdERhdGUoZGF0ZV9mcm9tKX0gLSAke2Zvcm1hdERhdGUoZGF0ZV90byl9YCB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgI29wdGlvbj1cInsgZGF0ZV90bywgZGF0ZV9mcm9tIH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3sgYCR7Zm9ybWF0RGF0ZShkYXRlX2Zyb20pfSAtICR7Zm9ybWF0RGF0ZShkYXRlX3RvKX1gIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10LTIgbWItMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UgfHwgaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblBheXJvbGxQZXJpb2RQcmV2UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlByZXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSB8fCBpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblBheXJvbGxQZXJpb2ROZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC92LXNlbGVjdD5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMgJiYgZXJyb3JzLnBlcmlvZFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMucGVyaW9kWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJiYXNpYy1zYWxhcnlcIiBsYWJlbD1cIkJhc2ljIFNhbGFyeVwiIGxhYmVsLWZvcj1cImJhc2ljLXNhbGFyeVwiPlxuICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVwiN1wiPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJiYXNpYy1zYWxhcnlcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmJhc2ljX3NhbGFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIiBcbiAgICAgICAgICAgICAgICBtaW49XCIwLjAwXCJcbiAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgPGItY29sIGNvbHM9XCI1XCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRCYXNpY1NhbGFyeSgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEdldCBCYXNpYyBTYWxhcnlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVwiMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5iYXNpY19zYWxhcnlcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmJhc2ljX3NhbGFyeVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICA8L2Itcm93PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwidG90YWwtb3ZlcnRpbWVcIiBsYWJlbD1cIlRvdGFsIE92ZXJ0aW1lXCIgbGFiZWwtZm9yPVwidG90YWwtb3ZlcnRpbWVcIj5cbiAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cIjdcIj5cbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwidG90YWwtb3ZlcnRpbWVcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRvdGFsX292ZXJ0aW1lXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjAuMDBcIlxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cIjVcIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFRvdGFsT3ZlcnRpbWUoKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBHZXQgVG90YWwgT3ZlcnRpbWVcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVwiMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy50b3RhbF9vdmVydGltZVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMudG90YWxfb3ZlcnRpbWVbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJvdGhlci1wYXlcIiBsYWJlbD1cIk90aGVyIFBheVwiIGxhYmVsLWZvcj1cIm90aGVyLXBheVwiPlxuICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgIDxiLWNvbD5cbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtM1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ub3RoZXJfcGF5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjAuMDBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJncm9zcy1zYWxhcnlcIiBsYWJlbD1cIkdyb3NzIFNhbGFyeVwiIGxhYmVsLWZvcj1cImdyb3NzLXNhbGFyeVwiPlxuICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgIDxiLWNvbD5cbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtM1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZ3Jvc3Nfc2FsYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiIFxuICAgICAgICAgICAgICAgIG1pbj1cIjAuMDBcIlxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5ncm9zc19zYWxhcnlcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmdyb3NzX3NhbGFyeVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICA8L2Itcm93PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cInRvdGFsLWRlZHVjdGlvbnNcIiBsYWJlbD1cIlRvdGFsIERlZHVjdGlvbnNcIiBsYWJlbC1mb3I9XCJ0b3RhbC1kZWR1Y3Rpb25zXCI+XG4gICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sIGNvbHM9XCI3XCI+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LTNcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRvdGFsX2RlZHVjdGlvbnNcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCIgXG4gICAgICAgICAgICAgICAgbWluPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVwiNVwiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0VG90YWxEZWR1Y3Rpb25zKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgR2V0IFRvdGFsIERlZHVjdGlvbnNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVwiMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy50b3RhbF9kZWR1Y3Rpb25zXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy50b3RhbF9kZWR1Y3Rpb25zWzBdIH19PC9kaXY+XG4gICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwibmV0LXBheVwiIGxhYmVsPVwiTmV0IFBheVwiIGxhYmVsLWZvcj1cIm5ldC1wYXlcIj5cbiAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICA8Yi1jb2w+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LTNcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5ldF9zYWxhcnlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCIgXG4gICAgICAgICAgICAgICAgbWluPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMgJiYgZXJyb3JzLm5ldF9zYWxhcnlcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLm5ldF9zYWxhcnlbMF0gfX08L2Rpdj5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIFxuICAgICAgPC9iLWZvcm0+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICAgIDxQYXlyb2xsUGVyaW9kc01vZGFsIDpwYXlyb2xsUGVyaW9kRm9ybT1cInBheXJvbGxQZXJpb2RGb3JtXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cImxvYWRQYXlyb2xsUGVyaW9kcygpXCIgOmlzU2VsZj1cImZhbHNlXCI+PC9QYXlyb2xsUGVyaW9kc01vZGFsPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuaW1wb3J0IFBheXJvbGxQZXJpb2RzTW9kYWwgZnJvbSBcIi4uLy4uL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy9mb3JtLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbdG9hc3RdLFxuXG4gIHByb3BzOiBbXCJwYXlyb2xsRm9ybVwiXSxcblxuICBjb21wb25lbnRzOiB7XG4gICAgUGF5cm9sbFBlcmlvZHNNb2RhbFxuICB9LFxuXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy5wYXlyb2xsRm9ybSxcbiAgICAgIHNlYXJjaGVkOiBcIlwiLFxuICAgICAgZGF0ZTogXCJcIixcbiAgICAgIGVycm9yczoge30sXG4gICAgICBpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXG4gICAgICBpc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgZW1wbG95ZWVzQ3VycmVudFBhZ2U6IDEsXG4gICAgICBlbXBsb3llZXNQZXJQYWdlOiAxMCxcbiAgICAgIGVtcGxveWVlc0xhc3RQYWdlOiAwLFxuICAgICAgZW1wbG95ZWVzOiBbXSxcblxuICAgICAgaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXG4gICAgICBpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2U6IDEsXG4gICAgICBwYXlyb2xsUGVyaW9kc1BlclBhZ2U6IDEwLFxuICAgICAgcGF5cm9sbFBlcmlvZHNMYXN0UGFnZTogMCxcbiAgICAgIHBheXJvbGxQZXJpb2RzU2VhcmNoZWQ6IFwiXCIsXG4gICAgICBwYXlyb2xsUGVyaW9kczogW10sXG5cbiAgICAgIHBheXJvbGxQZXJpb2RGb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBkYXRlX2Zyb206IFwiXCIsXG4gICAgICAgIGRhdGVfdG86IFwiXCIsXG4gICAgICB9KSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XG4gICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInBheXJvbGxcIiwgW1wiY3JlYXRlUGF5cm9sbFwiLCBcInVwZGF0ZVBheXJvbGxcIl0pLFxuICAgIC4uLm1hcEFjdGlvbnMoXCJlbXBsb3llZVwiLCBbXCJvblNob3dcIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoKSB7XG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJwYXlyb2xsLW1vZGFsXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZVNlbGVjdGVkRW1wbG95ZWUoZSkge1xuICAgICAgdGhpcy5mb3JtLnBlcmlvZCA9IFwiXCI7XG4gICAgICB0aGlzLmZvcm0uYmFzaWNfc2FsYXJ5ID0gXCJcIjtcbiAgICAgIHRoaXMuZm9ybS50b3RhbF9vdmVydGltZSA9IFwiXCI7XG4gICAgICB0aGlzLmZvcm0udG90YWxfZGVkdWN0aW9ucyA9IFwiXCI7XG4gICAgICB0aGlzLmZvcm0ub3RoZXJfcGF5ID0gXCJcIjtcbiAgICAgIHRoaXMuZm9ybS5ncm9zc19zYWxhcnkgPSBcIlwiO1xuICAgICAgdGhpcy5mb3JtLm5ldF9zYWxhcnkgPSBcIlwiO1xuICAgIH0sICBcblxuICAgIGxvYWRFbXBsb3llZXMoKSB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgIHBhZ2U6IHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL2VtcGxveWVlc1wiLCB7IHBhcmFtcyB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLmVtcGxveWVlcyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLmVtcGxveWVlc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc05leHRCdXR0b25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1ByZXZCdXR0b25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVDcmVhdGVQYXlyb2xsKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXG4gICAgICAgIHBlcmlvZDogdGhpcy5mb3JtLnBlcmlvZCxcbiAgICAgICAgYmFzaWNfc2FsYXJ5OiB0aGlzLmZvcm0uYmFzaWNfc2FsYXJ5LFxuICAgICAgICB0b3RhbF9vdmVydGltZTogdGhpcy5mb3JtLnRvdGFsX292ZXJ0aW1lLFxuICAgICAgICB0b3RhbF9kZWR1Y3Rpb25zOiB0aGlzLmZvcm0udG90YWxfZGVkdWN0aW9ucyxcbiAgICAgICAgb3RoZXJfcGF5OiB0aGlzLmZvcm0ub3RoZXJfcGF5LFxuICAgICAgICBncm9zc19zYWxhcnk6IHRoaXMuZm9ybS5ncm9zc19zYWxhcnksXG4gICAgICAgIG5ldF9zYWxhcnk6IHRoaXMuZm9ybS5uZXRfc2FsYXJ5XG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBQYXlyb2xsYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQYXlyb2xsc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZVBheXJvbGwoKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBcblx0XHRcdGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGlkOiB0aGlzLmZvcm0uaWQsXG5cdFx0XHRcdGVtcF9pZDogdGhpcy5mb3JtLmVtcC5pZCxcbiAgICAgICAgcGVyaW9kOiB0aGlzLmZvcm0ucGVyaW9kLFxuICAgICAgICBiYXNpY19zYWxhcnk6IHRoaXMuZm9ybS5iYXNpY19zYWxhcnksXG4gICAgICAgIHRvdGFsX292ZXJ0aW1lOiB0aGlzLmZvcm0udG90YWxfb3ZlcnRpbWUsXG4gICAgICAgIHRvdGFsX2RlZHVjdGlvbnM6IHRoaXMuZm9ybS50b3RhbF9kZWR1Y3Rpb25zLFxuICAgICAgICBvdGhlcl9wYXk6IHRoaXMuZm9ybS5vdGhlcl9wYXksXG4gICAgICAgIGdyb3NzX3NhbGFyeTogdGhpcy5mb3JtLmdyb3NzX3NhbGFyeSxcbiAgICAgICAgbmV0X3NhbGFyeTogdGhpcy5mb3JtLm5ldF9zYWxhcnlcblx0XHRcdH1cblxuICAgICAgdGhpcy51cGRhdGVQYXlyb2xsKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwid2FybmluZ1wiLFxuICAgICAgICAgICAgXCJSRUNPUkQgVVBEQVRFRFwiLFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIFBheXJvbGwgSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbHNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbk5leHRQYWdlKCkge1xuICAgICAgdGhpcy5pc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgKz0gMTtcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xuICAgIH0sXG5cbiAgICBvblByZXZQYWdlKCkge1xuICAgICAgdGhpcy5pc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgLT0gMTtcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xuICAgIH0sXG5cbiAgICBvblNlYXJjaEVtcGxveWVlKHNlYXJjaCwgbG9hZGluZykge1xuICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2hFbXBsb3llZShzZWFyY2gpO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoRW1wbG95ZWU6IF8uZGVib3VuY2UoZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHNlYXJjaDtcblxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XG4gICAgfSwgMTAwMCksXG5cbiAgICBsb2FkUGF5cm9sbFBlcmlvZHMoKSB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgIHBhZ2U6IHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSxcbiAgICAgICAgc2VhcmNoOiB0aGlzLnBheXJvbGxQZXJpb2RzU2VhcmNoZWQsXG4gICAgICB9XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9wYXlyb2xsLXBlcmlvZHNcIiwgeyBwYXJhbXMgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kcyA9IGRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uUGF5cm9sbFBlcmlvZE5leHRQYWdlKCkge1xuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICs9IDE7XG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xuICAgIH0sXG5cbiAgICBvblBheXJvbGxQZXJpb2RQcmV2UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSAtPSAxO1xuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgICB9LFxuXG4gICAgb25TZWFyY2hQYXlyb2xsUGVyaW9kKHNlYXJjaCwgbG9hZGluZykge1xuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Qoc2VhcmNoKTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Q6IF8uZGVib3VuY2UoZnVuY3Rpb24gKHNlYXJjaCkge1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc1NlYXJjaGVkID0gc2VhcmNoO1xuXG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xuICAgIH0sIDEwMDApLFxuXG4gICAgY3JlYXRlUGF5cm9sbFBlcmlvZCgpIHtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uaWQgPSAnJztcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uZGF0ZV9mcm9tID0gJyc7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfdG8gPSAnJztcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdygncGF5cm9sbC1wZXJpb2QtbW9kYWwnKTtcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlTmV0UGF5QW5kR3Jvc3NTYWxhcnkoKSB7XG4gICAgICBsZXQgYmFzaWNTYWxhcnkgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS5iYXNpY19zYWxhcnkpIHx8IDA7XG4gICAgICBsZXQgdG90YWxPdmVydGltZSA9IHBhcnNlRmxvYXQodGhpcy5mb3JtLnRvdGFsX292ZXJ0aW1lKSB8fCAwO1xuICAgICAgbGV0IG90aGVyUGF5ID0gcGFyc2VGbG9hdCh0aGlzLmZvcm0ub3RoZXJfcGF5KSB8fCAwO1xuICAgICAgbGV0IHRvdGFsRGVkdWN0aW9ucyA9IHBhcnNlRmxvYXQodGhpcy5mb3JtLnRvdGFsX2RlZHVjdGlvbnMpIHx8IDA7IFxuXG4gICAgICBsZXQgZ3Jvc3NTYWxhcnkgPSBwYXJzZUZsb2F0KGJhc2ljU2FsYXJ5ICsgdG90YWxPdmVydGltZSArIG90aGVyUGF5KSB8fCAwXG4gICAgICBcbiAgICAgIHRoaXMuZm9ybS5ncm9zc19zYWxhcnkgPSBncm9zc1NhbGFyeS50b0ZpeGVkKDIpO1xuXG4gICAgICB0aGlzLmZvcm0ubmV0X3NhbGFyeSA9IChncm9zc1NhbGFyeSAtIHRvdGFsRGVkdWN0aW9ucykudG9GaXhlZCgyKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZ2V0RW1wbG95ZWUoaWQpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLm9uU2hvdyhwYXJhbXMpLnRoZW4oKHIpID0+IHIpO1xuICAgIH0sXG5cblxuICAgIGFzeW5jIGdldEJhc2ljU2FsYXJ5KCkge1xuICAgICAgbGV0IHZtID0gdGhpcztcbiAgICAgIGlmICh2bS5mb3JtLmVtcCAmJiB2bS5mb3JtLnBlcmlvZCkge1xuICAgICAgICBsZXQgZW1wbG95ZWUgPSBhd2FpdCB0aGlzLmdldEVtcGxveWVlKHZtLmZvcm0uZW1wLmlkKTtcbiAgICAgICAgbGV0IHBheXJvbGxQZXJpb2RzID0gXy5jbG9uZURlZXAodm0ucGF5cm9sbFBlcmlvZHMpO1xuICAgICAgICBsZXQgcGF5cm9sbFBlcmlvZCA9IHBheXJvbGxQZXJpb2RzLmZpbmQoeCA9PiB4LmlkID09PSB2bS5mb3JtLnBlcmlvZCk7XG4gICAgICAgIGxldCBkYWlseVRpbWVSZWNvcmRzID0gXy5jbG9uZURlZXAoZW1wbG95ZWUuZGF0YS5kYWlseV90aW1lX3JlY29yZHMpO1xuICAgICAgICBsZXQgaG91cmx5UmF0ZSA9IHBhcnNlRmxvYXQoZW1wbG95ZWUuZGF0YS5ob3VybHlfcmF0ZSkgfHwgMDtcbiAgICAgICAgbGV0IHBlcmlvZERhdGVGcm9tID0gbmV3IERhdGUocGF5cm9sbFBlcmlvZC5kYXRlX2Zyb20pO1xuICAgICAgICBsZXQgcGVyaW9kRGF0ZVRvID0gbmV3IERhdGUocGF5cm9sbFBlcmlvZC5kYXRlX3RvKTtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBlbXBsb3llZS5kYXRhLnNjaGVkdWxlO1xuXG4gICAgICAgIGRhaWx5VGltZVJlY29yZHMgPSBkYWlseVRpbWVSZWNvcmRzLmZpbHRlcigoZHRyKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGR0ci5kdHJfZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPj0gcGVyaW9kRGF0ZUZyb20uZ2V0VGltZSgpICYmXG4gICAgICAgICAgICAgICAgICBkYXRlLmdldFRpbWUoKSA8PSBwZXJpb2REYXRlVG8uZ2V0VGltZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgbnVtYmVyT2ZIb3VycyA9IDA7XG5cbiAgICAgICAgaWYgKHNjaGVkdWxlKSB7XG4gICAgICAgICAgbGV0IG5vT2ZIcnNCcmsgPSBwYXJzZUZsb2F0KHNjaGVkdWxlLm5vX29mX2hyc19icmspIHx8IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgZGFpbHlUaW1lUmVjb3Jkcy5mb3JFYWNoKGR0ciA9PiB7XG4gICAgICAgICAgICBudW1iZXJPZkhvdXJzKz12bS5jYWxjdWxhdGVOdW1iZXJPZkhvdXJzQnlTY2hlZHVsZShzY2hlZHVsZS5yZXF1aXJlZF90aW1lX2luLCBzY2hlZHVsZS5yZXF1aXJlZF90aW1lX291dCwgbm9PZkhyc0JyaywgZHRyLnRpbWVfaW4sIGR0ci50aW1lX291dClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmZvcm0uYmFzaWNfc2FsYXJ5ID0gKGhvdXJseVJhdGUgKiBudW1iZXJPZkhvdXJzKS50b0ZpeGVkKDIpO1xuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdm0uZm9ybS5iYXNpY19zYWxhcnkgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjYWxjdWxhdGVOdW1iZXJPZkhvdXJzQnlTY2hlZHVsZShzY2hlZHVsZVN0YXJ0LCBzY2hlZHVsZUVuZCwgc2NoZWR1bGVOb09mSHJzQnJrLCB0aW1lSW4sIHRpbWVPdXQpIHtcbiAgICAgIGlmICh0aW1lT3V0ID09IG51bGwpIHJldHVybiAwO1xuXG4gICAgICBsZXQgdGltZUluRGF0ZSA9IG5ldyBEYXRlKGAxOTcwLTAxLTAxVCR7dGltZUlufWApO1xuICAgICAgbGV0IHRpbWVPdXREYXRlID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHt0aW1lT3V0fWApO1xuXG4gICAgICBsZXQgc2NoZWR1bGVTdGFydERhdGUgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke3NjaGVkdWxlU3RhcnR9YCk7XG4gICAgICBsZXQgc2NoZWR1bGVFbmREYXRlID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtzY2hlZHVsZUVuZH1gKTtcblxuICAgICAgbGV0IHZhbGlkVGltZUluID0gdGltZUluRGF0ZSA+PSBzY2hlZHVsZVN0YXJ0RGF0ZSAmJiB0aW1lSW5EYXRlIDwgc2NoZWR1bGVFbmREYXRlO1xuXG4gICAgICBpZiAoIXZhbGlkVGltZUluKSB7XG4gICAgICAgIHRpbWVJbkRhdGUgPSBzY2hlZHVsZVN0YXJ0RGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEodGltZU91dERhdGUgPCBzY2hlZHVsZUVuZERhdGUpKSB7XG4gICAgICAgIHRpbWVPdXREYXRlID0gc2NoZWR1bGVFbmREYXRlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdGltZURpZmZNaWxsaXMgPSB0aW1lT3V0RGF0ZSAtIHRpbWVJbkRhdGU7XG5cbiAgICAgIGxldCBob3VycyA9ICh0aW1lRGlmZk1pbGxpcyAvICgxMDAwICogNjAgKiA2MCkpIC0gc2NoZWR1bGVOb09mSHJzQnJrO1xuXG4gICAgICByZXR1cm4gIWlzTmFOKGhvdXJzKSAmJiBOdW1iZXIoaG91cnMpID4gMCA/IGhvdXJzIDogMDtcbiAgICB9LFxuXG4gICAgY2FsY3VsYXRlTnVtYmVyT2ZIb3Vycyhob3Vyc0Zyb20sIGhvdXJzVG8pIHtcbiAgICAgIGxldCBob3Vyc0Zyb21EYXRlID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtob3Vyc0Zyb219YCk7XG4gICAgICBsZXQgaG91cnNUb0RhdGUgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke2hvdXJzVG99YCk7XG5cbiAgICAgIGxldCB0aW1lRGlmZk1pbGxpcyA9IGhvdXJzVG9EYXRlIC0gaG91cnNGcm9tRGF0ZTtcblxuICAgICAgbGV0IGhvdXJzID0gdGltZURpZmZNaWxsaXMgLyAoMTAwMCAqIDYwICogNjApO1xuXG4gICAgICByZXR1cm4gIWlzTmFOKGhvdXJzKSAmJiBOdW1iZXIoaG91cnMpID4gMCA/IGhvdXJzIDogMDtcbiAgICB9LFxuXG4gICAgYXN5bmMgZ2V0VG90YWxPdmVydGltZSgpIHtcbiAgICAgIGxldCB2bSA9IHRoaXM7XG4gICAgICBpZiAodm0uZm9ybS5lbXApIHtcbiAgICAgICAgbGV0IGVtcGxveWVlID0gYXdhaXQgdGhpcy5nZXRFbXBsb3llZSh2bS5mb3JtLmVtcC5pZCk7XG4gICAgICAgIGxldCBvdmVydGltZXMgPSBfLmNsb25lRGVlcChlbXBsb3llZS5kYXRhLm92ZXJ0aW1lcyk7XG4gICAgICAgIGxldCBmaWx0ZXJlZE92ZXJ0aW1lcyA9IG92ZXJ0aW1lcy5maWx0ZXIoeCA9PiB4LnBlcmlvZCA9PT0gdm0uZm9ybS5wZXJpb2QpO1xuICAgICAgICBsZXQgaG91cmx5UmF0ZSA9IHBhcnNlRmxvYXQoZW1wbG95ZWUuZGF0YS5ob3VybHlfcmF0ZSkgfHwgMDtcblxuICAgICAgICBsZXQgbnVtYmVyT2ZIb3VycyA9IDA7XG5cbiAgICAgICAgZmlsdGVyZWRPdmVydGltZXMuZm9yRWFjaChvdCA9PiB7XG4gICAgICAgICAgbnVtYmVyT2ZIb3Vycys9dm0uY2FsY3VsYXRlTnVtYmVyT2ZIb3VycyhvdC5ob3Vyc19mcm9tLCBvdC5ob3Vyc190byk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZtLmZvcm0udG90YWxfb3ZlcnRpbWUgPSAoaG91cmx5UmF0ZSAqIG51bWJlck9mSG91cnMpLnRvRml4ZWQoMik7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLmZvcm0udG90YWxfb3ZlcnRpbWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBnZXRUb3RhbERlZHVjdGlvbnMoKSB7XG4gICAgICBsZXQgdm0gPSB0aGlzO1xuICAgICAgaWYgKHZtLmZvcm0uZW1wKSB7XG4gICAgICAgIGxldCBlbXBsb3llZSA9IGF3YWl0IHZtLmdldEVtcGxveWVlKHZtLmZvcm0uZW1wLmlkKTtcblxuICAgICAgICBsZXQgdG90YWxEZWR1Y3Rpb25zID0gMDtcblxuICAgICAgICBpZiAoZW1wbG95ZWUuZGF0YS5kZWR1Y3Rpb25zKSB7XG4gICAgICAgICAgbGV0IGRlZHVjdGlvbnMgPSBfLmNsb25lRGVlcChlbXBsb3llZS5kYXRhLmRlZHVjdGlvbnMpO1xuICAgICAgICAgIGRlZHVjdGlvbnMgPSBkZWR1Y3Rpb25zLmZpbHRlcigoZGVkdWN0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGVkdWN0aW9uLnBlcmlvZCA9PT0gdm0uZm9ybS5wZXJpb2Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZGVkdWN0aW9ucy5mb3JFYWNoKGRlZHVjdGlvbiA9PiB7XG4gICAgICAgICAgICB0b3RhbERlZHVjdGlvbnMrPWRlZHVjdGlvbi5hbW91bnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5mb3JtLnRvdGFsX2RlZHVjdGlvbnMgPSB0b3RhbERlZHVjdGlvbnMudG9GaXhlZCgyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLmZvcm0udG90YWxfZGVkdWN0aW9ucyA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlUGF5cm9sbCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICAnZm9ybS5iYXNpY19zYWxhcnknOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpe1xuICAgICAgdGhpcy5jYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSgpO1xuICAgIH0sXG4gICAgJ2Zvcm0udG90YWxfb3ZlcnRpbWUnOiBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCl7XG4gICAgICB0aGlzLmNhbGN1bGF0ZU5ldFBheUFuZEdyb3NzU2FsYXJ5KCk7XG4gICAgfSxcbiAgICAnZm9ybS5vdGhlcl9wYXknOiBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCl7XG4gICAgICB0aGlzLmNhbGN1bGF0ZU5ldFBheUFuZEdyb3NzU2FsYXJ5KCk7XG4gICAgfSxcbiAgICAnZm9ybS50b3RhbF9kZWR1Y3Rpb25zJzogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpe1xuICAgICAgdGhpcy5jYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSgpO1xuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNFbXBsb3llZXNOZXh0UGFnZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgIT09IHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2VcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGhhc0VtcGxveWVlc1ByZXZQYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgPiAxO1xuICAgIH0sXG5cbiAgICBoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICE9PSB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2VcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlID4gMTtcbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInBheXJvbGwtcGVyaW9kLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCBQZXJpb2QnIDogJ0FkZCBQYXlyb2xsIFBlcmlvZCd9fTwvaDU+XG4gICAgICA8Yi1idXR0b25cbiAgICAgICAgcGlsbFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJtb2RhbENsb3NlKClcIlxuICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgIDwvYi1idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLWZvcm0+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJpbnB1dC1ncm91cC0xXCIgbGFiZWw9XCJEYXRlIEZyb21cIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGF0ZS1mcm9tXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVGcm9tXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGRhdGUgc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kYXRlX2Zyb21cIlxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRhdGUtZnJvbVwiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlRnJvbVwiXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5kYXRlX2Zyb21cIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmRhdGVfZnJvbVswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtMlwiIGxhYmVsPVwiRGF0ZSBUb1wiIGxhYmVsLWZvcj1cImlucHV0LTJcIj5cbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlLXRvXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVUb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJObyBkYXRlIHNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcbiAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cImVuLVVTXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZGF0ZS10b1wiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlVG9cIlxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZGF0ZV90b1wiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZGF0ZV90b1swXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgPC9iLWZvcm0+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdi1pZj1cIiFpc1NlbGZcIlxuICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IHtcbiAgICBwYXlyb2xsUGVyaW9kRm9ybTogT2JqZWN0LFxuICAgIGlzU2VsZjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbFBlcmlvZEZvcm0sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgZGF0ZUZyb206IFwiXCIsXG4gICAgICBkYXRlVG86IFwiXCJcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwicGF5cm9sbFBlcmlvZFwiLCBbXCJjcmVhdGVQYXlyb2xsUGVyaW9kXCIsIFwidXBkYXRlUGF5cm9sbFBlcmlvZFwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcInBheXJvbGwtcGVyaW9kLW1vZGFsXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcblxuICAgIH0sXG5cbiAgICBoYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfZnJvbSl9IC0gJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfdG8pfSBoYXMgYmVlbiBjcmVhdGVkIGFzIG5ldyBQYXlyb2xsIHBlcmlvZGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbFBlcmlvZHNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIFVQREFURURcIixcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBQYXlyb2xsIFBlcmlvZCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQYXlyb2xsUGVyaW9kc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG5cbiAgICBvbkNvbnRleHREYXRlRnJvbShjdHgpIHtcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVGcm9tID0gXCJcIjtcbiAgICB9LFxuXG4gICAgb25Db250ZXh0RGF0ZVRvKGN0eCkge1xuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xuICAgICAgICB0aGlzLmRhdGVUbyA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVUbyA9IFwiXCI7XG4gICAgfVxuICBcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYnRuLWNlLXN1Ym1pdCB7XG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5idG4tY2UtY2FuY2VsIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWNlLXRpdGxlIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJQYXlyb2xsXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVBheXJvbGwgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IHdpZHRoOiBcIjI1MHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IHBheXJvbGwgcGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnBheXJvbGxQZXJpb2RzLFxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IF92bS5pc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogKHApID0+IHAuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoUGF5cm9sbFBlcmlvZCB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibGlzdC1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVBheXJvbGxQZXJpb2QgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBOZXcgUGF5cm9sbCBQZXJpb2RcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJzZWxlY3RlZC1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoeyBkYXRlX3RvLCBkYXRlX2Zyb20gfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke192bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtfdm0uZm9ybWF0RGF0ZShkYXRlX3RvKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgZGF0ZV90bywgZGF0ZV9mcm9tIH0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfdm0uZm9ybWF0RGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAtICR7X3ZtLmZvcm1hdERhdGUoZGF0ZV90byl9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwibGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLm9uUGF5cm9sbFBlcmlvZFByZXZQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21hbGw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5vblBheXJvbGxQZXJpb2ROZXh0UGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcmlvZCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBlcmlvZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJpb2RcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucHJpbnRQYXlyb2xsU3VtbWFyeVJlcG9ydCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBQUklOVFxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2hvd0VudHJpZXNPcHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVyX3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2hvdzogX3ZtLmlzT3ZlcmxheSwgcm91bmRlZDogXCJzbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGFibGUtYnVzeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhcIk5vIGRhdGEgZm91bmQhXCIpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoZW1wbG95ZWVfbm8pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0uZW1wbG95ZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZGF0YS5pdGVtLmVtcGxveWVlLmVtcGxveWVlX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChlbXBsb3llZV9uYW1lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLmVtcGxveWVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5lbXBsb3llZS5mdWxsX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGdyb3NzX3NhbGFyeSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0uZ3Jvc3Nfc2FsYXJ5LnRvRml4ZWQoMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbCh0b3RhbF9kZWR1Y3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0udG90YWxfZGVkdWN0aW9ucy50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChuZXRfc2FsYXJ5KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5uZXRfc2FsYXJ5LnRvRml4ZWQoMikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1kcm9wZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcmlnaHQ6IFwiXCIsIFwibm8tY2FyZXRcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYnV0dG9uLWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBNb3JlIEFjdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGluazogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBhY3Rpb24udmFyaWFudCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtcHJpbWFyeVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnZhcmlhbnQgPT09IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKGFjdGlvbi50aXRsZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBgU2hvd2luZyAke192bS5zaG93aW5nLmZyb219IHRvICR7X3ZtLnNob3dpbmcudG99IG9mICR7X3ZtLnNob3dpbmcudG90YWx9IGVudHJpZXNgXG4gICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbC1yb3dzXCI6IF92bS50YWJsZVRvdGFsUm93cyxcbiAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlBheXJvbGxNb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHBheXJvbGxGb3JtOiBfdm0ucGF5cm9sbEZvcm0gfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBsb2FkUGF5cm9sbHM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBheXJvbGxzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJQYXlyb2xsRGVsZXRlTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyBwYXlyb2xsRm9ybTogX3ZtLnBheXJvbGxGb3JtIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbG9hZFBheXJvbGxzOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRQYXlyb2xscygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUGF5cm9sbFBlcmlvZHNNb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHBheXJvbGxQZXJpb2RGb3JtOiBfdm0ucGF5cm9sbFBlcmlvZEZvcm0sIGlzU2VsZjogZmFsc2UgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBsb2FkUGF5cm9sbFBlcmlvZHM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBheXJvbGxQZXJpb2RzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwicGF5cm9sbC1kZWxldGUtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1oZWFkZXJcIjogXCJcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIGNlbnRlcmVkOiBcIlwiLFxuICAgICAgXCJjb250ZW50LWNsYXNzXCI6IFwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiLFxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRFwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtfdm0uZm9ybS5lbXAuZnVsbF9uYW1lfSBmcm9tIFBheXJvbGwgcmVjb3Jkcz9gXG4gICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTk9cXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgWUVTXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInBheXJvbGwtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJFZGl0IFBheXJvbGxcIiA6IFwiQWRkIFBheXJvbGxcIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWItdG9vbHRpcC5ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgaG92ZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVtcGxveWVlLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbXBsb3llZSBOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJlbXBsb3llZS1uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbXBsb3llZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImZ1bGxfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmVtcGxveWVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBfdm0ub25TZWFyY2hFbXBsb3llZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uOnNlbGVjdGVkXCI6IF92bS5vbkNoYW5nZVNlbGVjdGVkRW1wbG95ZWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc0VtcGxveWVlc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUHJldkJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblByZXZQYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNFbXBsb3llZXNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc05leHRCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25OZXh0UGFnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTmV4dEJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1wXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5lbXBfaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbXBfaWRbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC1ncm91cC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC00XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwZXJpb2RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImRhdGVfdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYXlyb2xsUGVyaW9kcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IChwKSA9PiBwLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBzZWFyY2g6IF92bS5vblNlYXJjaFBheXJvbGxQZXJpb2QgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMiB2LXNlbGVjdC1vcHRpb24tcGFkZGluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlUGF5cm9sbFBlcmlvZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIE5ldyBQYXlyb2xsIFBlcmlvZFxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0ZWQtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoeyBkYXRlX3RvLCBkYXRlX2Zyb20gfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7X3ZtLmZvcm1hdERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtfdm0uZm9ybWF0RGF0ZShkYXRlX3RvKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7IGRhdGVfdG8sIGRhdGVfZnJvbSB9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfdm0uZm9ybWF0RGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLSAke192bS5mb3JtYXREYXRlKGRhdGVfdG8pfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBfdm0ub25QYXlyb2xsUGVyaW9kUHJldlBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGVyaW9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGVyaW9kXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5wZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5wZXJpb2RbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJiYXNpYy1zYWxhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCYXNpYyBTYWxhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImJhc2ljLXNhbGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgY29sczogXCI3XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYmFzaWMtc2FsYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4wMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMC4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYmFzaWNfc2FsYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImJhc2ljX3NhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5iYXNpY19zYWxhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0QmFzaWNTYWxhcnkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIEdldCBCYXNpYyBTYWxhcnlcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmJhc2ljX3NhbGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmJhc2ljX3NhbGFyeVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG90YWwtb3ZlcnRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBPdmVydGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwidG90YWwtb3ZlcnRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiN1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRvdGFsLW92ZXJ0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4wMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMC4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udG90YWxfb3ZlcnRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidG90YWxfb3ZlcnRpbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udG90YWxfb3ZlcnRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzOiBcIjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0VG90YWxPdmVydGltZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgR2V0IFRvdGFsIE92ZXJ0aW1lXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy50b3RhbF9vdmVydGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnRvdGFsX292ZXJ0aW1lWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJvdGhlci1wYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJPdGhlciBQYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcIm90aGVyLXBheVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiMC4wMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IFwiMC4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ub3RoZXJfcGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm90aGVyX3BheVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5vdGhlcl9wYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZ3Jvc3Mtc2FsYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR3Jvc3MgU2FsYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJncm9zcy1zYWxhcnlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjAuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmdyb3NzX3NhbGFyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJncm9zc19zYWxhcnlcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZ3Jvc3Nfc2FsYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmdyb3NzX3NhbGFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5ncm9zc19zYWxhcnlbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidG90YWwtZGVkdWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRvdGFsIERlZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcInRvdGFsLWRlZHVjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiN1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogXCIwLjAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogXCIwLjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50b3RhbF9kZWR1Y3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInRvdGFsX2RlZHVjdGlvbnNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udG90YWxfZGVkdWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbHM6IFwiNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRUb3RhbERlZHVjdGlvbnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIEdldCBUb3RhbCBEZWR1Y3Rpb25zXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBjb2xzOiBcIjEyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy50b3RhbF9kZWR1Y3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMudG90YWxfZGVkdWN0aW9uc1swXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmV0LXBheVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5ldCBQYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcIm5ldC1wYXlcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiBcIjAuMDFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiBcIjAuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5ldF9zYWxhcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmV0X3NhbGFyeVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uZXRfc2FsYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLm5ldF9zYWxhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMubmV0X3NhbGFyeVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIlBheXJvbGxQZXJpb2RzTW9kYWxcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHBheXJvbGxQZXJpb2RGb3JtOiBfdm0ucGF5cm9sbFBlcmlvZEZvcm0sXG4gICAgICAgICAgICAgICAgaXNTZWxmOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBsb2FkUGF5cm9sbFBlcmlvZHM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBheXJvbGxQZXJpb2RzKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInBheXJvbGwtcGVyaW9kLW1vZGFsXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1vZGFsLWhlYWRlclwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmlkID8gXCJFZGl0IFBheXJvbGwgUGVyaW9kXCIgOiBcIkFkZCBQYXlyb2xsIFBlcmlvZFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LWItdG9vbHRpcC5ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgaG92ZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIiB9KV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0LWdyb3VwLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRlIEZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImlucHV0LTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlLWZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJObyBkYXRlIHNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlRnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVGcm9tID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVGcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwLWFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1vbmx5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiZGF0ZS1mcm9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY29udGV4dDogX3ZtLm9uQ29udGV4dERhdGVGcm9tIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGF0ZV9mcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRhdGVfZnJvbVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kYXRlX2Zyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5kYXRlX2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5kYXRlX2Zyb21bMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC1ncm91cC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBUb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwiaW5wdXQtMlwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRhdGUtdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJObyBkYXRlIHNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlVG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlVG8gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZVRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwLWFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1vbmx5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiZGF0ZS10b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbnRleHQ6IF92bS5vbkNvbnRleHREYXRlVG8gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kYXRlX3RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRhdGVfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGF0ZV90b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmRhdGVfdG9cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5kYXRlX3RvWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgIV92bS5pc1NlbGZcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsb2F0LWxlZnQgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtdC0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2FkbWluL3BheXJvbGwtcGVyaW9kc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBNQU5BR0UgUEFZUk9MTCBQRVJJT0RcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlNBVkUgQ0hBTkdFU1wiIDogXCJTQVZFXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgIF0pLFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImNvbnN0IHNob3dFbnRyaWVzT3B0ID0gW1xuICAgIHsgdmFsdWU6IDEwLCB0ZXh0OiBcIjEwXCIgfSxcbiAgICB7IHZhbHVlOiAzMCwgdGV4dDogXCIzMFwiIH0sXG4gICAgeyB2YWx1ZTogNTAsIHRleHQ6IFwiNTBcIiB9LFxuICAgIHsgdmFsdWU6IDEwMCwgdGV4dDogXCIxMDBcIiB9LFxuXVxuXG5cbmV4cG9ydCB7XG4gICAgc2hvd0VudHJpZXNPcHQsXG59IiwiY2xhc3MgRXJyb3JzIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBFcnJvcnMgaW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBlcnJvcnMgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgaGFzKGZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgd2UgaGF2ZSBhbnkgZXJyb3JzLlxuICAgKi9cbiAgYW55KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgYSBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqL1xuICBnZXQoZmllbGQpIHtcbiAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmQgdGhlIG5ldyBlcnJvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICovXG4gIHJlY29yZChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gZmllbGRcbiAgICovXG4gIGNsZWFyKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBlcnJvcnMuXG4gICAqL1xuICBsaXN0KCkge1xuICAgIGxldCBpdGVtcyA9IFtdXG4gICAgbGV0IGVycm9yQXJyYXkgPSBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKSA/PyBbXVxuICAgIGVycm9yQXJyYXkuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBpdGVtcy5wdXNoKGVycm9yWzBdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcbiIsImltcG9ydCBFcnJvcnMgZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5cbmNsYXNzIEZvcm0ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuXG4gICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBhbGwgcmVsZXZhbnQgZGF0YSBmb3IgdGhlIGZvcm0uXG4gICAqL1xuICBkYXRhKCkge1xuICAgIGxldCBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBcIlwiO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBvc3QodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicG9zdFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQVVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHB1dCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwdXRcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBhdGNoKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBhdGNoXCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcImRlbGV0ZVwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgLy8gdGVtcG9yYXJ5XG4gICAgLy8gdGhpcy5yZXNldCgpO1xuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycyk7XG4gIH1cblxuXG4gIGlzRGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSgpKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZCkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpc0RlZmF1bHREYXRhRW1wdHkoKSB7XG4gICAgbGV0IGtleSA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwgJiYgdmFsICE9PSAnQWRkJykge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBzdHJpbmdMb3dlckNhc2Uoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgIH0sXG5cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyLCBsb3dlciA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKGxvd2VyID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIpLnJlcGxhY2UoLyg/Ol58XFxzfFtcIicoW3tdKStcXFMvZywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSk7XG4gICAgfSxcblxuICAgIGZvcm1hdEFtb3VudChhbW91bnQpIHtcbiAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIGFtb3VudC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgZW1wdHlTdHJpbmcoY2hhcmFjID0gJy0nLCBsZW5ndGggPSA0KSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHN0ciArPSBjaGFyYWNcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcblxuICAgIGluQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgdmFyIGxlbmd0aCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIHdob2xlTnVtYmVyRm9ybWF0KGFtb3VudCwgZGVjaW1hUGxhY2UpIHtcbiAgICAgIHZhciBhbW91bnROb3cgPSAwXG4gICAgICBpZiAoKGFtb3VudCAtIE1hdGguZmxvb3IoYW1vdW50KSkgIT09IDApIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgaWYgKGFtb3VudE5vdyA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBhbW91bnQucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbW91bnROb3cudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbW91bnROb3cgPSBNYXRoLnJvdW5kKGFtb3VudCwgZGVjaW1hUGxhY2UpO1xuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21tYV9jb25jYXQoa2V5ID0gJ25hbWUnLCBpdGVtcykge1xuICAgICAgbGV0IHNldCA9ICcnO1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgaXRlbXMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBzZXQgKz0gZWxlW2tleV07XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LFxuXG4gICAgc2hvd2luZ19sYWJlbChmcm9tLCB0bywgdG90YWwpIHtcbiAgICAgIGxldCBmID0gdGhpcy50b19zdHJvbmcoZnJvbSlcbiAgICAgIGxldCB0ID0gdGhpcy50b19zdHJvbmcodG8pXG4gICAgICBsZXQgdG90ID0gdGhpcy50b19zdHJvbmcodG90YWwpXG4gICAgICByZXR1cm4gYFNob3dpbmcgJHtmfSB0byAke3R9IG9mICR7dG90fSByZXN1bHRzYDtcbiAgICB9LFxuXG4gICAgdG9fc3Ryb25nKHN0cikge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7c3RyfTwvc3Ryb25nPmA7XG4gICAgfVxuICB9LFxufTtcblxuIiwiaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbdGV4dF0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtYWtlVG9hc3QodmFyaWFudCA9IG51bGwsIHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLiRidlRvYXN0LnRvYXN0KG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgICAgICAgICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgJC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgQ29uZmlybSEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIGRhdGE/JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVBbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2xhc3M6ICdidG4tcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnY2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlQ29uZmlybSh0aXRsZSA9ICdDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRCcsIG1vZHVsZU5hbWUgPSBcIlwiKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm94VHdvID0gJydcbiAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgZXZlcnl0aGluZy4nLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgQ29uZmlybScsXG4gICAgICAgICAgICAgICAgYnV0dG9uU2l6ZTogJ3NtJyxcbiAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdZRVMnLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxuICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcbiAgICAgICAgICAgICAgICBoaWRlSGVhZGVyQ2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hUd28gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBTd2FsXG4gICAgICAgICAgICAvLyAgICAgICAgIC5maXJlKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGRhdGEgZm9ybSAke21vZHVsZU5hbWV9IHJlY29yZHM/YCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzb2x2ZShyZXN1bHQpKVxuICAgICAgICAgICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgfSxcblxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL21vZGFscy9wYXlyb2xsTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtdEJBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwicGF5cm9sbC1tb2RhbFxcXCJcXG4gICAgaGlkZS1mb290ZXJcXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcXG4gICAgY29udGVudC1jbGFzcz1cXFwiYm9yZGVyLXRvcCBiZy1jcmVhbVxcXCJcXG4gID5cXG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XFxuICAgICAgXFxuICAgICAgPGg1IGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXFxcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCcgOiAnQWRkIFBheXJvbGwnfX08L2g1PlxcbiAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgcGlsbFxcbiAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxcbiAgICAgICAgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L2k+XFxuICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxcbiAgICAgIDxiLWZvcm0+XFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJlbXBsb3llZS1uYW1lXFxcIiBsYWJlbD1cXFwiRW1wbG95ZWUgTmFtZVxcXCIgbGFiZWwtZm9yPVxcXCJlbXBsb3llZS1uYW1lXFxcIj5cXG4gICAgICAgICAgPHYtc2VsZWN0XFxuICAgICAgICAgICAgbmFtZT1cXFwiZW1wbG95ZWVzXFxcIlxcbiAgICAgICAgICAgIGxhYmVsPVxcXCJmdWxsX25hbWVcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5lbXBcXFwiXFxuICAgICAgICAgICAgOm9wdGlvbnM9XFxcImVtcGxveWVlc1xcXCJcXG4gICAgICAgICAgICA6ZmlsdGVyYWJsZT1cXFwiZmFsc2VcXFwiXFxuICAgICAgICAgICAgOmxvYWRpbmc9XFxcImlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgIEBzZWFyY2g9XFxcIm9uU2VhcmNoRW1wbG95ZWVcXFwiXFxuICAgICAgICAgICAgQG9wdGlvbjpzZWxlY3RlZD1cXFwib25DaGFuZ2VTZWxlY3RlZEVtcGxveWVlXFxcIlxcbiAgICAgICAgICAgIGlkPVxcXCJlbXBsb3llZXNcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJtdC0yIG1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwibGlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhaGFzRW1wbG95ZWVzUHJldlBhZ2UgfHwgaXNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblByZXZQYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc0VtcGxveWVlc05leHRQYWdlIHx8IGlzTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcImxpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uTmV4dFBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIlNtYWxsIFNwaW5uZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5OZXh0PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5lbXBfaWRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmVtcF9pZFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC00XFxcIiBsYWJlbD1cXFwiUGVyaW9kXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTRcXFwiPlxcbiAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICBuYW1lPVxcXCJwZXJpb2RcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcImRhdGVfdG9cXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5wZXJpb2RcXFwiXFxuICAgICAgICAgICAgOm9wdGlvbnM9XFxcInBheXJvbGxQZXJpb2RzXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICA6cmVkdWNlPVxcXCIocCkgPT4gcC5pZFxcXCJcXG4gICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaFBheXJvbGxQZXJpb2RcXFwiXFxuICAgICAgICAgICAgaWQ9XFxcInBlcmlvZFxcXCJcXG4gICAgICAgICAgPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1oZWFkZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8Yi1saW5rIGhyZWY9XFxcIiNcXFwiIEBjbGljaz1cXFwiY3JlYXRlUGF5cm9sbFBlcmlvZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgTmV3IFBheXJvbGwgUGVyaW9kXFxuICAgICAgICAgICAgICAgIDwvYi1saW5rPlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjc2VsZWN0ZWQtb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm10LTIgbWItMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiFoYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlIHx8IGlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2RQcmV2UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc1BheXJvbGxQZXJpb2RzTmV4dFBhZ2UgfHwgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2ROZXh0UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMucGVyaW9kXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5wZXJpb2RbMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiYmFzaWMtc2FsYXJ5XFxcIiBsYWJlbD1cXFwiQmFzaWMgU2FsYXJ5XFxcIiBsYWJlbC1mb3I9XFxcImJhc2ljLXNhbGFyeVxcXCI+XFxuICAgICAgICAgIDxiLXJvdz5cXG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiN1xcXCI+XFxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICAgIGlkPVxcXCJiYXNpYy1zYWxhcnlcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uYmFzaWNfc2FsYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIHN0ZXA9XFxcIjAuMDFcXFwiIFxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjAuMDBcXFwiXFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiNVxcXCIgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRCYXNpY1NhbGFyeSgpXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICBHZXQgQmFzaWMgU2FsYXJ5XFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiMTJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmJhc2ljX3NhbGFyeVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuYmFzaWNfc2FsYXJ5WzBdIH19PC9kaXY+XFxuICAgICAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgICAgPC9iLXJvdz5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwidG90YWwtb3ZlcnRpbWVcXFwiIGxhYmVsPVxcXCJUb3RhbCBPdmVydGltZVxcXCIgbGFiZWwtZm9yPVxcXCJ0b3RhbC1vdmVydGltZVxcXCI+XFxuICAgICAgICAgIDxiLXJvdz5cXG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiN1xcXCI+XFxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICAgIGlkPVxcXCJ0b3RhbC1vdmVydGltZVxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS50b3RhbF9vdmVydGltZVxcXCJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICBzdGVwPVxcXCIwLjAxXFxcIiBcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwLjAwXFxcIlxcbiAgICAgICAgICAgICAgICByZWFkb25seVxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgICAgPGItY29sIGNvbHM9XFxcIjVcXFwiIGNsYXNzPVxcXCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICAgIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0VG90YWxPdmVydGltZSgpXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICBHZXQgVG90YWwgT3ZlcnRpbWVcXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVxcXCIxMlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMudG90YWxfb3ZlcnRpbWVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLnRvdGFsX292ZXJ0aW1lWzBdIH19PC9kaXY+XFxuICAgICAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgICAgPC9iLXJvdz5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwib3RoZXItcGF5XFxcIiBsYWJlbD1cXFwiT3RoZXIgUGF5XFxcIiBsYWJlbC1mb3I9XFxcIm90aGVyLXBheVxcXCI+XFxuICAgICAgICAgIDxiLXJvdz5cXG4gICAgICAgICAgICA8Yi1jb2w+XFxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICAgIGlkPVxcXCJpbnB1dC0zXFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLm90aGVyX3BheVxcXCJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICBzdGVwPVxcXCIwLjAxXFxcIiBcXG4gICAgICAgICAgICAgICAgbWluPVxcXCIwLjAwXFxcIlxcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgIDwvYi1yb3c+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImdyb3NzLXNhbGFyeVxcXCIgbGFiZWw9XFxcIkdyb3NzIFNhbGFyeVxcXCIgbGFiZWwtZm9yPVxcXCJncm9zcy1zYWxhcnlcXFwiPlxcbiAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgPGItY29sPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgICBpZD1cXFwiaW5wdXQtM1xcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5ncm9zc19zYWxhcnlcXFwiXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgc3RlcD1cXFwiMC4wMVxcXCIgXFxuICAgICAgICAgICAgICAgIG1pbj1cXFwiMC4wMFxcXCJcXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5ncm9zc19zYWxhcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmdyb3NzX3NhbGFyeVswXSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgIDwvYi1yb3c+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcInRvdGFsLWRlZHVjdGlvbnNcXFwiIGxhYmVsPVxcXCJUb3RhbCBEZWR1Y3Rpb25zXFxcIiBsYWJlbC1mb3I9XFxcInRvdGFsLWRlZHVjdGlvbnNcXFwiPlxcbiAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgPGItY29sIGNvbHM9XFxcIjdcXFwiPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgICBpZD1cXFwiaW5wdXQtM1xcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS50b3RhbF9kZWR1Y3Rpb25zXFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIHN0ZXA9XFxcIjAuMDFcXFwiIFxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjAuMDBcXFwiXFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgICAgICA8Yi1jb2wgY29scz1cXFwiNVxcXCIgY2xhc3M9XFxcImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgICAgaHJlZj1cXFwiamF2YXNjcmlwdDo7XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZFxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRUb3RhbERlZHVjdGlvbnMoKVxcXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgR2V0IFRvdGFsIERlZHVjdGlvbnNcXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgICAgIDxiLWNvbCBjb2xzPVxcXCIxMlxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMudG90YWxfZGVkdWN0aW9uc1xcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMudG90YWxfZGVkdWN0aW9uc1swXSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgIDwvYi1yb3c+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcIm5ldC1wYXlcXFwiIGxhYmVsPVxcXCJOZXQgUGF5XFxcIiBsYWJlbC1mb3I9XFxcIm5ldC1wYXlcXFwiPlxcbiAgICAgICAgICA8Yi1yb3c+XFxuICAgICAgICAgICAgPGItY29sPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgICBpZD1cXFwiaW5wdXQtM1xcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5uZXRfc2FsYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgIHN0ZXA9XFxcIjAuMDFcXFwiIFxcbiAgICAgICAgICAgICAgICBtaW49XFxcIjAuMDBcXFwiXFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMubmV0X3NhbGFyeVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMubmV0X3NhbGFyeVswXSB9fTwvZGl2PlxcbiAgICAgICAgICAgIDwvYi1jb2w+XFxuICAgICAgICAgIDwvYi1yb3c+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICAgIFxcbiAgICAgIDwvYi1mb3JtPlxcbiAgICAgIDxiLXJvdyBjbGFzcz1cXFwibXQtM1xcXCI+XFxuICAgICAgICA8Yi1jb2wgY2xhc3M9XFxcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXFxcIj5cXG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCI+XFxuICAgICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiIDpzdHlsZT1cXFwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cXFwiIEBjbGljaz1cXFwib25TdWJtaXQoKVxcXCI+XFxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgIDwvYi1jb2w+XFxuICAgICAgPC9iLXJvdz5cXG4gICAgICA8UGF5cm9sbFBlcmlvZHNNb2RhbCA6cGF5cm9sbFBlcmlvZEZvcm09XFxcInBheXJvbGxQZXJpb2RGb3JtXFxcIiBAbG9hZFBheXJvbGxQZXJpb2RzPVxcXCJsb2FkUGF5cm9sbFBlcmlvZHMoKVxcXCIgOmlzU2VsZj1cXFwiZmFsc2VcXFwiPjwvUGF5cm9sbFBlcmlvZHNNb2RhbD5cXG4gICAgPC90ZW1wbGF0ZT5cXG4gIDwvYi1tb2RhbD5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXFxcInZ1ZXhcXFwiO1xcbmltcG9ydCBheGlvcyBmcm9tIFxcXCJheGlvc1xcXCI7XFxuaW1wb3J0IHRvYXN0IGZyb20gXFxcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcXFwiO1xcbmltcG9ydCBQYXlyb2xsUGVyaW9kc01vZGFsIGZyb20gXFxcIi4uLy4uL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlXFxcIjtcXG5pbXBvcnQgRm9ybSBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm0uanNcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1peGluczogW3RvYXN0XSxcXG5cXG4gIHByb3BzOiBbXFxcInBheXJvbGxGb3JtXFxcIl0sXFxuXFxuICBjb21wb25lbnRzOiB7XFxuICAgIFBheXJvbGxQZXJpb2RzTW9kYWxcXG4gIH0sXFxuXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbEZvcm0sXFxuICAgICAgc2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGRhdGU6IFxcXCJcXFwiLFxcbiAgICAgIGVycm9yczoge30sXFxuICAgICAgaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGlzTmV4dEJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGlzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGVtcGxveWVlc0N1cnJlbnRQYWdlOiAxLFxcbiAgICAgIGVtcGxveWVlc1BlclBhZ2U6IDEwLFxcbiAgICAgIGVtcGxveWVlc0xhc3RQYWdlOiAwLFxcbiAgICAgIGVtcGxveWVlczogW10sXFxuXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcXG4gICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2U6IDEsXFxuICAgICAgcGF5cm9sbFBlcmlvZHNQZXJQYWdlOiAxMCxcXG4gICAgICBwYXlyb2xsUGVyaW9kc0xhc3RQYWdlOiAwLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzU2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzOiBbXSxcXG5cXG4gICAgICBwYXlyb2xsUGVyaW9kRm9ybTogbmV3IEZvcm0oe1xcbiAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgZGF0ZV9mcm9tOiBcXFwiXFxcIixcXG4gICAgICAgIGRhdGVfdG86IFxcXCJcXFwiLFxcbiAgICAgIH0pLFxcbiAgICB9O1xcbiAgfSxcXG5cXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwicGF5cm9sbFxcXCIsIFtcXFwiY3JlYXRlUGF5cm9sbFxcXCIsIFxcXCJ1cGRhdGVQYXlyb2xsXFxcIl0pLFxcbiAgICAuLi5tYXBBY3Rpb25zKFxcXCJlbXBsb3llZVxcXCIsIFtcXFwib25TaG93XFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZSgpIHtcXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXFxcInBheXJvbGwtbW9kYWxcXFwiKTtcXG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xcbiAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xcbiAgICB9LFxcblxcbiAgICBvbkNoYW5nZVNlbGVjdGVkRW1wbG95ZWUoZSkge1xcbiAgICAgIHRoaXMuZm9ybS5wZXJpb2QgPSBcXFwiXFxcIjtcXG4gICAgICB0aGlzLmZvcm0uYmFzaWNfc2FsYXJ5ID0gXFxcIlxcXCI7XFxuICAgICAgdGhpcy5mb3JtLnRvdGFsX292ZXJ0aW1lID0gXFxcIlxcXCI7XFxuICAgICAgdGhpcy5mb3JtLnRvdGFsX2RlZHVjdGlvbnMgPSBcXFwiXFxcIjtcXG4gICAgICB0aGlzLmZvcm0ub3RoZXJfcGF5ID0gXFxcIlxcXCI7XFxuICAgICAgdGhpcy5mb3JtLmdyb3NzX3NhbGFyeSA9IFxcXCJcXFwiO1xcbiAgICAgIHRoaXMuZm9ybS5uZXRfc2FsYXJ5ID0gXFxcIlxcXCI7XFxuICAgIH0sICBcXG5cXG4gICAgbG9hZEVtcGxveWVlcygpIHtcXG4gICAgICBsZXQgcGFyYW1zID0ge1xcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxcbiAgICAgICAgcGFnZTogdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSxcXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hlZCxcXG4gICAgICB9XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoXFxcIi9hcGkvZW1wbG95ZWVzXFxcIiwgeyBwYXJhbXMgfSlcXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5lbXBsb3llZXMgPSBkYXRhLmRhdGE7XFxuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc05leHRCdXR0b25Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgIHRoaXMuaXNQcmV2QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZUNyZWF0ZVBheXJvbGwoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0ZW1wX2lkOiB0aGlzLmZvcm0uZW1wLmlkLFxcbiAgICAgICAgcGVyaW9kOiB0aGlzLmZvcm0ucGVyaW9kLFxcbiAgICAgICAgYmFzaWNfc2FsYXJ5OiB0aGlzLmZvcm0uYmFzaWNfc2FsYXJ5LFxcbiAgICAgICAgdG90YWxfb3ZlcnRpbWU6IHRoaXMuZm9ybS50b3RhbF9vdmVydGltZSxcXG4gICAgICAgIHRvdGFsX2RlZHVjdGlvbnM6IHRoaXMuZm9ybS50b3RhbF9kZWR1Y3Rpb25zLFxcbiAgICAgICAgb3RoZXJfcGF5OiB0aGlzLmZvcm0ub3RoZXJfcGF5LFxcbiAgICAgICAgZ3Jvc3Nfc2FsYXJ5OiB0aGlzLmZvcm0uZ3Jvc3Nfc2FsYXJ5LFxcbiAgICAgICAgbmV0X3NhbGFyeTogdGhpcy5mb3JtLm5ldF9zYWxhcnlcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy5jcmVhdGVQYXlyb2xsKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICBcXFwiTkVXIFJFQ09SRCBDUkVBVEVEXFxcIixcXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBQYXlyb2xsYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkUGF5cm9sbHNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZVVwZGF0ZVBheXJvbGwoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdGVtcF9pZDogdGhpcy5mb3JtLmVtcC5pZCxcXG4gICAgICAgIHBlcmlvZDogdGhpcy5mb3JtLnBlcmlvZCxcXG4gICAgICAgIGJhc2ljX3NhbGFyeTogdGhpcy5mb3JtLmJhc2ljX3NhbGFyeSxcXG4gICAgICAgIHRvdGFsX292ZXJ0aW1lOiB0aGlzLmZvcm0udG90YWxfb3ZlcnRpbWUsXFxuICAgICAgICB0b3RhbF9kZWR1Y3Rpb25zOiB0aGlzLmZvcm0udG90YWxfZGVkdWN0aW9ucyxcXG4gICAgICAgIG90aGVyX3BheTogdGhpcy5mb3JtLm90aGVyX3BheSxcXG4gICAgICAgIGdyb3NzX3NhbGFyeTogdGhpcy5mb3JtLmdyb3NzX3NhbGFyeSxcXG4gICAgICAgIG5ldF9zYWxhcnk6IHRoaXMuZm9ybS5uZXRfc2FsYXJ5XFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgXFxcIlJFQ09SRCBVUERBVEVEXFxcIixcXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgUGF5cm9sbCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkUGF5cm9sbHNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uTmV4dFBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICs9IDE7XFxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uUHJldlBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlIC09IDE7XFxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uU2VhcmNoRW1wbG95ZWUoc2VhcmNoLCBsb2FkaW5nKSB7XFxuICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoRW1wbG95ZWUoc2VhcmNoKTtcXG4gICAgfSxcXG5cXG4gICAgcGVyZm9ybVNlYXJjaEVtcGxveWVlOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcXG4gICAgICB0aGlzLnNlYXJjaGVkID0gc2VhcmNoO1xcblxcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LCAxMDAwKSxcXG5cXG4gICAgbG9hZFBheXJvbGxQZXJpb2RzKCkge1xcbiAgICAgIGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBwZXJfcGFnZTogMTAsXFxuICAgICAgICBwYWdlOiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UsXFxuICAgICAgICBzZWFyY2g6IHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCxcXG4gICAgICB9XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoXFxcIi9hcGkvcGF5cm9sbC1wZXJpb2RzXFxcIiwgeyBwYXJhbXMgfSlcXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kcyA9IGRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBvblBheXJvbGxQZXJpb2ROZXh0UGFnZSgpIHtcXG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICs9IDE7XFxuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcXG4gICAgfSxcXG5cXG4gICAgb25QYXlyb2xsUGVyaW9kUHJldlBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSAtPSAxO1xcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gsIGxvYWRpbmcpIHtcXG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Qoc2VhcmNoKTtcXG4gICAgfSxcXG5cXG4gICAgcGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Q6IF8uZGVib3VuY2UoZnVuY3Rpb24gKHNlYXJjaCkge1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCA9IHNlYXJjaDtcXG5cXG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgICB9LCAxMDAwKSxcXG5cXG4gICAgY3JlYXRlUGF5cm9sbFBlcmlvZCgpIHtcXG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLnJlc2V0KCk7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5pZCA9ICcnO1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uZGF0ZV9mcm9tID0gJyc7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5kYXRlX3RvID0gJyc7XFxuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KCdwYXlyb2xsLXBlcmlvZC1tb2RhbCcpO1xcbiAgICB9LFxcblxcbiAgICBjYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSgpIHtcXG4gICAgICBsZXQgYmFzaWNTYWxhcnkgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS5iYXNpY19zYWxhcnkpIHx8IDA7XFxuICAgICAgbGV0IHRvdGFsT3ZlcnRpbWUgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS50b3RhbF9vdmVydGltZSkgfHwgMDtcXG4gICAgICBsZXQgb3RoZXJQYXkgPSBwYXJzZUZsb2F0KHRoaXMuZm9ybS5vdGhlcl9wYXkpIHx8IDA7XFxuICAgICAgbGV0IHRvdGFsRGVkdWN0aW9ucyA9IHBhcnNlRmxvYXQodGhpcy5mb3JtLnRvdGFsX2RlZHVjdGlvbnMpIHx8IDA7IFxcblxcbiAgICAgIGxldCBncm9zc1NhbGFyeSA9IHBhcnNlRmxvYXQoYmFzaWNTYWxhcnkgKyB0b3RhbE92ZXJ0aW1lICsgb3RoZXJQYXkpIHx8IDBcXG4gICAgICBcXG4gICAgICB0aGlzLmZvcm0uZ3Jvc3Nfc2FsYXJ5ID0gZ3Jvc3NTYWxhcnkudG9GaXhlZCgyKTtcXG5cXG4gICAgICB0aGlzLmZvcm0ubmV0X3NhbGFyeSA9IChncm9zc1NhbGFyeSAtIHRvdGFsRGVkdWN0aW9ucykudG9GaXhlZCgyKTtcXG4gICAgfSxcXG5cXG4gICAgYXN5bmMgZ2V0RW1wbG95ZWUoaWQpIHtcXG4gICAgICBsZXQgcGFyYW1zID0ge1xcbiAgICAgICAgaWQ6IGlkLFxcbiAgICAgIH07XFxuXFxuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMub25TaG93KHBhcmFtcykudGhlbigocikgPT4gcik7XFxuICAgIH0sXFxuXFxuXFxuICAgIGFzeW5jIGdldEJhc2ljU2FsYXJ5KCkge1xcbiAgICAgIGxldCB2bSA9IHRoaXM7XFxuICAgICAgaWYgKHZtLmZvcm0uZW1wICYmIHZtLmZvcm0ucGVyaW9kKSB7XFxuICAgICAgICBsZXQgZW1wbG95ZWUgPSBhd2FpdCB0aGlzLmdldEVtcGxveWVlKHZtLmZvcm0uZW1wLmlkKTtcXG4gICAgICAgIGxldCBwYXlyb2xsUGVyaW9kcyA9IF8uY2xvbmVEZWVwKHZtLnBheXJvbGxQZXJpb2RzKTtcXG4gICAgICAgIGxldCBwYXlyb2xsUGVyaW9kID0gcGF5cm9sbFBlcmlvZHMuZmluZCh4ID0+IHguaWQgPT09IHZtLmZvcm0ucGVyaW9kKTtcXG4gICAgICAgIGxldCBkYWlseVRpbWVSZWNvcmRzID0gXy5jbG9uZURlZXAoZW1wbG95ZWUuZGF0YS5kYWlseV90aW1lX3JlY29yZHMpO1xcbiAgICAgICAgbGV0IGhvdXJseVJhdGUgPSBwYXJzZUZsb2F0KGVtcGxveWVlLmRhdGEuaG91cmx5X3JhdGUpIHx8IDA7XFxuICAgICAgICBsZXQgcGVyaW9kRGF0ZUZyb20gPSBuZXcgRGF0ZShwYXlyb2xsUGVyaW9kLmRhdGVfZnJvbSk7XFxuICAgICAgICBsZXQgcGVyaW9kRGF0ZVRvID0gbmV3IERhdGUocGF5cm9sbFBlcmlvZC5kYXRlX3RvKTtcXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlID0gZW1wbG95ZWUuZGF0YS5zY2hlZHVsZTtcXG5cXG4gICAgICAgIGRhaWx5VGltZVJlY29yZHMgPSBkYWlseVRpbWVSZWNvcmRzLmZpbHRlcigoZHRyKSA9PiB7XFxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkdHIuZHRyX2RhdGUpO1xcbiAgICAgICAgICAgIHJldHVybiBkYXRlLmdldFRpbWUoKSA+PSBwZXJpb2REYXRlRnJvbS5nZXRUaW1lKCkgJiZcXG4gICAgICAgICAgICAgICAgICBkYXRlLmdldFRpbWUoKSA8PSBwZXJpb2REYXRlVG8uZ2V0VGltZSgpO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICBsZXQgbnVtYmVyT2ZIb3VycyA9IDA7XFxuXFxuICAgICAgICBpZiAoc2NoZWR1bGUpIHtcXG4gICAgICAgICAgbGV0IG5vT2ZIcnNCcmsgPSBwYXJzZUZsb2F0KHNjaGVkdWxlLm5vX29mX2hyc19icmspIHx8IDA7XFxuICAgICAgICAgIFxcbiAgICAgICAgICBkYWlseVRpbWVSZWNvcmRzLmZvckVhY2goZHRyID0+IHtcXG4gICAgICAgICAgICBudW1iZXJPZkhvdXJzKz12bS5jYWxjdWxhdGVOdW1iZXJPZkhvdXJzQnlTY2hlZHVsZShzY2hlZHVsZS5yZXF1aXJlZF90aW1lX2luLCBzY2hlZHVsZS5yZXF1aXJlZF90aW1lX291dCwgbm9PZkhyc0JyaywgZHRyLnRpbWVfaW4sIGR0ci50aW1lX291dClcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB2bS5mb3JtLmJhc2ljX3NhbGFyeSA9IChob3VybHlSYXRlICogbnVtYmVyT2ZIb3VycykudG9GaXhlZCgyKTtcXG4gICAgICAgIFxcbiAgICAgIH0gZWxzZSB7XFxuXFxuICAgICAgICB2bS5mb3JtLmJhc2ljX3NhbGFyeSA9IFxcXCJcXFwiO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgY2FsY3VsYXRlTnVtYmVyT2ZIb3Vyc0J5U2NoZWR1bGUoc2NoZWR1bGVTdGFydCwgc2NoZWR1bGVFbmQsIHNjaGVkdWxlTm9PZkhyc0JyaywgdGltZUluLCB0aW1lT3V0KSB7XFxuICAgICAgaWYgKHRpbWVPdXQgPT0gbnVsbCkgcmV0dXJuIDA7XFxuXFxuICAgICAgbGV0IHRpbWVJbkRhdGUgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke3RpbWVJbn1gKTtcXG4gICAgICBsZXQgdGltZU91dERhdGUgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke3RpbWVPdXR9YCk7XFxuXFxuICAgICAgbGV0IHNjaGVkdWxlU3RhcnREYXRlID0gbmV3IERhdGUoYDE5NzAtMDEtMDFUJHtzY2hlZHVsZVN0YXJ0fWApO1xcbiAgICAgIGxldCBzY2hlZHVsZUVuZERhdGUgPSBuZXcgRGF0ZShgMTk3MC0wMS0wMVQke3NjaGVkdWxlRW5kfWApO1xcblxcbiAgICAgIGxldCB2YWxpZFRpbWVJbiA9IHRpbWVJbkRhdGUgPj0gc2NoZWR1bGVTdGFydERhdGUgJiYgdGltZUluRGF0ZSA8IHNjaGVkdWxlRW5kRGF0ZTtcXG5cXG4gICAgICBpZiAoIXZhbGlkVGltZUluKSB7XFxuICAgICAgICB0aW1lSW5EYXRlID0gc2NoZWR1bGVTdGFydERhdGU7XFxuICAgICAgfVxcblxcbiAgICAgIGlmICghKHRpbWVPdXREYXRlIDwgc2NoZWR1bGVFbmREYXRlKSkge1xcbiAgICAgICAgdGltZU91dERhdGUgPSBzY2hlZHVsZUVuZERhdGU7XFxuICAgICAgfVxcblxcbiAgICAgIGxldCB0aW1lRGlmZk1pbGxpcyA9IHRpbWVPdXREYXRlIC0gdGltZUluRGF0ZTtcXG5cXG4gICAgICBsZXQgaG91cnMgPSAodGltZURpZmZNaWxsaXMgLyAoMTAwMCAqIDYwICogNjApKSAtIHNjaGVkdWxlTm9PZkhyc0JyaztcXG5cXG4gICAgICByZXR1cm4gIWlzTmFOKGhvdXJzKSAmJiBOdW1iZXIoaG91cnMpID4gMCA/IGhvdXJzIDogMDtcXG4gICAgfSxcXG5cXG4gICAgY2FsY3VsYXRlTnVtYmVyT2ZIb3Vycyhob3Vyc0Zyb20sIGhvdXJzVG8pIHtcXG4gICAgICBsZXQgaG91cnNGcm9tRGF0ZSA9IG5ldyBEYXRlKGAxOTcwLTAxLTAxVCR7aG91cnNGcm9tfWApO1xcbiAgICAgIGxldCBob3Vyc1RvRGF0ZSA9IG5ldyBEYXRlKGAxOTcwLTAxLTAxVCR7aG91cnNUb31gKTtcXG5cXG4gICAgICBsZXQgdGltZURpZmZNaWxsaXMgPSBob3Vyc1RvRGF0ZSAtIGhvdXJzRnJvbURhdGU7XFxuXFxuICAgICAgbGV0IGhvdXJzID0gdGltZURpZmZNaWxsaXMgLyAoMTAwMCAqIDYwICogNjApO1xcblxcbiAgICAgIHJldHVybiAhaXNOYU4oaG91cnMpICYmIE51bWJlcihob3VycykgPiAwID8gaG91cnMgOiAwO1xcbiAgICB9LFxcblxcbiAgICBhc3luYyBnZXRUb3RhbE92ZXJ0aW1lKCkge1xcbiAgICAgIGxldCB2bSA9IHRoaXM7XFxuICAgICAgaWYgKHZtLmZvcm0uZW1wKSB7XFxuICAgICAgICBsZXQgZW1wbG95ZWUgPSBhd2FpdCB0aGlzLmdldEVtcGxveWVlKHZtLmZvcm0uZW1wLmlkKTtcXG4gICAgICAgIGxldCBvdmVydGltZXMgPSBfLmNsb25lRGVlcChlbXBsb3llZS5kYXRhLm92ZXJ0aW1lcyk7XFxuICAgICAgICBsZXQgZmlsdGVyZWRPdmVydGltZXMgPSBvdmVydGltZXMuZmlsdGVyKHggPT4geC5wZXJpb2QgPT09IHZtLmZvcm0ucGVyaW9kKTtcXG4gICAgICAgIGxldCBob3VybHlSYXRlID0gcGFyc2VGbG9hdChlbXBsb3llZS5kYXRhLmhvdXJseV9yYXRlKSB8fCAwO1xcblxcbiAgICAgICAgbGV0IG51bWJlck9mSG91cnMgPSAwO1xcblxcbiAgICAgICAgZmlsdGVyZWRPdmVydGltZXMuZm9yRWFjaChvdCA9PiB7XFxuICAgICAgICAgIG51bWJlck9mSG91cnMrPXZtLmNhbGN1bGF0ZU51bWJlck9mSG91cnMob3QuaG91cnNfZnJvbSwgb3QuaG91cnNfdG8pO1xcbiAgICAgICAgfSk7XFxuXFxuICAgICAgICB2bS5mb3JtLnRvdGFsX292ZXJ0aW1lID0gKGhvdXJseVJhdGUgKiBudW1iZXJPZkhvdXJzKS50b0ZpeGVkKDIpO1xcblxcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB2bS5mb3JtLnRvdGFsX292ZXJ0aW1lID0gXFxcIlxcXCI7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBhc3luYyBnZXRUb3RhbERlZHVjdGlvbnMoKSB7XFxuICAgICAgbGV0IHZtID0gdGhpcztcXG4gICAgICBpZiAodm0uZm9ybS5lbXApIHtcXG4gICAgICAgIGxldCBlbXBsb3llZSA9IGF3YWl0IHZtLmdldEVtcGxveWVlKHZtLmZvcm0uZW1wLmlkKTtcXG5cXG4gICAgICAgIGxldCB0b3RhbERlZHVjdGlvbnMgPSAwO1xcblxcbiAgICAgICAgaWYgKGVtcGxveWVlLmRhdGEuZGVkdWN0aW9ucykge1xcbiAgICAgICAgICBsZXQgZGVkdWN0aW9ucyA9IF8uY2xvbmVEZWVwKGVtcGxveWVlLmRhdGEuZGVkdWN0aW9ucyk7XFxuICAgICAgICAgIGRlZHVjdGlvbnMgPSBkZWR1Y3Rpb25zLmZpbHRlcigoZGVkdWN0aW9uKSA9PiB7XFxuICAgICAgICAgICAgcmV0dXJuIGRlZHVjdGlvbi5wZXJpb2QgPT09IHZtLmZvcm0ucGVyaW9kO1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgXFxuICAgICAgICAgIGRlZHVjdGlvbnMuZm9yRWFjaChkZWR1Y3Rpb24gPT4ge1xcbiAgICAgICAgICAgIHRvdGFsRGVkdWN0aW9ucys9ZGVkdWN0aW9uLmFtb3VudDtcXG4gICAgICAgICAgfSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB2bS5mb3JtLnRvdGFsX2RlZHVjdGlvbnMgPSB0b3RhbERlZHVjdGlvbnMudG9GaXhlZCgyKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdm0uZm9ybS50b3RhbF9kZWR1Y3Rpb25zID0gXFxcIlxcXCI7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBvblN1Ym1pdCgpIHtcXG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGwoKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVQYXlyb2xsKCk7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcXG4gICAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgfSxcXG4gIH0sXFxuXFxuICB3YXRjaDoge1xcbiAgICAnZm9ybS5iYXNpY19zYWxhcnknOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpe1xcbiAgICAgIHRoaXMuY2FsY3VsYXRlTmV0UGF5QW5kR3Jvc3NTYWxhcnkoKTtcXG4gICAgfSxcXG4gICAgJ2Zvcm0udG90YWxfb3ZlcnRpbWUnOiBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCl7XFxuICAgICAgdGhpcy5jYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSgpO1xcbiAgICB9LFxcbiAgICAnZm9ybS5vdGhlcl9wYXknOiBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCl7XFxuICAgICAgdGhpcy5jYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSgpO1xcbiAgICB9LFxcbiAgICAnZm9ybS50b3RhbF9kZWR1Y3Rpb25zJzogZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpe1xcbiAgICAgIHRoaXMuY2FsY3VsYXRlTmV0UGF5QW5kR3Jvc3NTYWxhcnkoKTtcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBjb21wdXRlZDoge1xcbiAgICBoYXNFbXBsb3llZXNOZXh0UGFnZSgpIHtcXG4gICAgICByZXR1cm4gKFxcbiAgICAgICAgdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSAhPT0gdGhpcy5lbXBsb3llZXNMYXN0UGFnZVxcbiAgICAgICk7XFxuICAgIH0sXFxuXFxuICAgIGhhc0VtcGxveWVlc1ByZXZQYWdlKCkge1xcbiAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlID4gMTtcXG4gICAgfSxcXG5cXG4gICAgaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSgpIHtcXG4gICAgICByZXR1cm4gKFxcbiAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICE9PSB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2VcXG4gICAgICApO1xcbiAgICB9LFxcblxcbiAgICBoYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlKCkge1xcbiAgICAgIHJldHVybiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgPiAxO1xcbiAgICB9LFxcbiAgfVxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2TkE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDQTtBQUNBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUFDQTtBQUNBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxiLW1vZGFsXFxuICAgIGlkPVxcXCJwYXlyb2xsLXBlcmlvZC1tb2RhbFxcXCJcXG4gICAgaGlkZS1mb290ZXJcXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcXG4gICAgY29udGVudC1jbGFzcz1cXFwiYm9yZGVyLXRvcCBiZy1jcmVhbVxcXCJcXG4gID5cXG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XFxuICAgICAgPCEtLSBFbXVsYXRlIGJ1aWx0IGluIG1vZGFsIGhlYWRlciBjbG9zZSBidXR0b24gYWN0aW9uIC0tPlxcbiAgICAgIFxcbiAgICAgIDxoNSBjbGFzcz1cXFwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVxcXCI+e3sgZm9ybS5pZCA/ICdFZGl0IFBheXJvbGwgUGVyaW9kJyA6ICdBZGQgUGF5cm9sbCBQZXJpb2QnfX08L2g1PlxcbiAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgcGlsbFxcbiAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxcbiAgICAgICAgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiXFxuICAgICAgICBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXRpbWVzXFxcIj48L2k+XFxuICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgPC90ZW1wbGF0ZT5cXG5cXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxcbiAgICAgIDxiLWZvcm0+XFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC0xXFxcIiBsYWJlbD1cXFwiRGF0ZSBGcm9tXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTFcXFwiPlxcbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICBpZD1cXFwiZGF0ZS1mcm9tXFxcIlxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZGF0ZUZyb21cXFwiXFxuICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIk5vIGRhdGUgc2VsZWN0ZWRcXFwiXFxuICAgICAgICAgICAgICByZWFkb25seVxcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cXG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC1hcHBlbmQ+XFxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5kYXRlX2Zyb21cXFwiXFxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XFxuICAgICAgICAgICAgICAgIHJpZ2h0XFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRhdGUtZnJvbVxcXCJcXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XFxcIm9uQ29udGV4dERhdGVGcm9tXFxcIlxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWRhdGVwaWNrZXI+XFxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMuZGF0ZV9mcm9tXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5kYXRlX2Zyb21bMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiaW5wdXQtZ3JvdXAtMlxcXCIgbGFiZWw9XFxcIkRhdGUgVG9cXFwiIGxhYmVsLWZvcj1cXFwiaW5wdXQtMlxcXCI+XFxuICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcXG4gICAgICAgICAgICAgIGlkPVxcXCJkYXRlLXRvXFxcIlxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZGF0ZVRvXFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJObyBkYXRlIHNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZGF0ZV90b1xcXCJcXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcXG4gICAgICAgICAgICAgICAgcmlnaHRcXG4gICAgICAgICAgICAgICAgbG9jYWxlPVxcXCJlbi1VU1xcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGF0ZS10b1xcXCJcXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XFxcIm9uQ29udGV4dERhdGVUb1xcXCJcXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxcbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XFxuICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmRhdGVfdG9cXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmRhdGVfdG9bMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgIDwvYi1mb3JtPlxcbiAgICAgIDxiLXJvdyBjbGFzcz1cXFwibXQtM1xcXCI+XFxuICAgICAgICA8Yi1jb2w+XFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgdi1pZj1cXFwiIWlzU2VsZlxcXCJcXG4gICAgICAgICAgICBocmVmPVxcXCIvYWRtaW4vcGF5cm9sbC1wZXJpb2RzXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIE1BTkFHRSBQQVlST0xMIFBFUklPRFxcbiAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5cXG5pbXBvcnQgdG9hc3QgZnJvbSBcXFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1xcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbWl4aW5zOiBbdG9hc3RdLFxcblxcbiAgcHJvcHM6IHtcXG4gICAgcGF5cm9sbFBlcmlvZEZvcm06IE9iamVjdCxcXG4gICAgaXNTZWxmOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiB0cnVlLFxcbiAgICB9LFxcbiAgfSxcXG5cXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXFxuICAgICAgZm9ybTogdGhpcy5wYXlyb2xsUGVyaW9kRm9ybSxcXG4gICAgICBlcnJvcnM6IHt9LFxcbiAgICAgIGRhdGVGcm9tOiBcXFwiXFxcIixcXG4gICAgICBkYXRlVG86IFxcXCJcXFwiXFxuICAgIH07XFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKFxcXCJwYXlyb2xsUGVyaW9kXFxcIiwgW1xcXCJjcmVhdGVQYXlyb2xsUGVyaW9kXFxcIiwgXFxcInVwZGF0ZVBheXJvbGxQZXJpb2RcXFwiXSksXFxuICAgIFxcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcXG5cXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXFxcInBheXJvbGwtcGVyaW9kLW1vZGFsXFxcIik7XFxuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcXG5cXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCgpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG5cXHRcXHRcXHRcXHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXFxuXFx0XFx0XFx0XFx0ZGF0ZV90bzogdGhpcy5mb3JtLmRhdGVfdG9cXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy5jcmVhdGVQYXlyb2xsUGVyaW9kKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICBcXFwiTkVXIFJFQ09SRCBDUkVBVEVEXFxcIixcXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfZnJvbSl9IC0gJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfdG8pfSBoYXMgYmVlbiBjcmVhdGVkIGFzIG5ldyBQYXlyb2xsIHBlcmlvZGBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFBheXJvbGxQZXJpb2RzXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBoYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kKCkge1xcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcXG4gICAgICBcXG5cXHRcXHRcXHRsZXQgcGFyYW1zID0ge1xcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcXG5cXHRcXHRcXHRcXHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXFxuXFx0XFx0XFx0XFx0ZGF0ZV90bzogdGhpcy5mb3JtLmRhdGVfdG9cXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy51cGRhdGVQYXlyb2xsUGVyaW9kKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJ3YXJuaW5nXFxcIixcXG4gICAgICAgICAgICBcXFwiUkVDT1JEIFVQREFURURcXFwiLFxcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBQYXlyb2xsIFBlcmlvZCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkUGF5cm9sbFBlcmlvZHNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uU3VibWl0KCkge1xcbiAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlUGF5cm9sbFBlcmlvZCgpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZVBheXJvbGxQZXJpb2QoKTtcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xcbiAgICB9LFxcblxcbiAgICBvbkNvbnRleHREYXRlRnJvbShjdHgpIHtcXG4gICAgICBpZiAoY3R4LnNlbGVjdGVkWU1EKSB7XFxuICAgICAgICB0aGlzLmRhdGVGcm9tID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmRhdGVGcm9tID0gXFxcIlxcXCI7XFxuICAgIH0sXFxuXFxuICAgIG9uQ29udGV4dERhdGVUbyhjdHgpIHtcXG4gICAgICBpZiAoY3R4LnNlbGVjdGVkWU1EKSB7XFxuICAgICAgICB0aGlzLmRhdGVUbyA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5kYXRlVG8gPSBcXFwiXFxcIjtcXG4gICAgfVxcbiAgXFxuICB9LFxcblxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbE1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUyMzI3NDg2Jmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kODNmZWI0YyZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjZDEyNDFkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNjZDEyNDFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNjZDEyNDFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNjZDEyNDFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NkMTI0MWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczY2QxMjQxZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbC9jb21wb25lbnRzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5cm9sbERlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMjYxMTM1Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXJvbGxEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGF5cm9sbERlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2YyNjExMzVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2YyNjExMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2YyNjExMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYXlyb2xsRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYyNjExMzVjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjI2MTEzNWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGwvbW9kYWxzL3BheXJvbGxEZWxldGVNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BheXJvbGxNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTIzMjc0ODZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXlyb2xsTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BheXJvbGxNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wYXlyb2xsTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTIzMjc0ODYmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMjMyNzQ4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMjMyNzQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMjMyNzQ4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGF5cm9sbE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMjMyNzQ4NlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UyMzI3NDg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsL21vZGFscy9wYXlyb2xsTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODNmZWI0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kODNmZWI0YyZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q4M2ZlYjRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q4M2ZlYjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q4M2ZlYjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODNmZWI0Y1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q4M2ZlYjRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zY2QxMjQxZFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYyNjExMzVjXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BheXJvbGxNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTIzMjc0ODZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbE1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUyMzI3NDg2Jmxhbmc9Y3NzXCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwibmFtZXMiOlsibWFwQWN0aW9ucyIsIm1hcEdldHRlcnMiLCJzaG93RW50cmllc09wdCIsIlBheXJvbGxNb2RhbCIsIlBheXJvbGxEZWxldGVNb2RhbCIsIlBheXJvbGxQZXJpb2RzTW9kYWwiLCJGb3JtIiwidG9hc3QiLCJtaXhpbnMiLCJjb21wb25lbnRzIiwiZGF0YSIsInBlcl9wYWdlIiwiY3VycmVudF9wYWdlIiwiaXNMb2FkaW5nIiwiZmlsdGVyIiwic2VhcmNoZWQiLCJpc092ZXJsYXkiLCJ0b3RhbFJvdyIsInNob3dpbmciLCJ0byIsImZyb20iLCJ0b3RhbCIsInBlcmlvZCIsInRhYmxlVG90YWxSb3dzIiwiZmllbGRzIiwia2V5IiwibGFiZWwiLCJ0aENsYXNzIiwidGRDbGFzcyIsInRoU3R5bGUiLCJ3aWR0aCIsImlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmciLCJpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmciLCJpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmciLCJwYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlIiwicGF5cm9sbFBlcmlvZHNQZXJQYWdlIiwicGF5cm9sbFBlcmlvZHNMYXN0UGFnZSIsInBheXJvbGxQZXJpb2RzU2VhcmNoZWQiLCJwYXlyb2xsUGVyaW9kcyIsInBheXJvbGxQZXJpb2RGb3JtIiwiaWQiLCJkYXRlX2Zyb20iLCJkYXRlX3RvIiwiYWN0aW9ucyIsInZhbHVlIiwidGl0bGUiLCJ2YXJpYW50IiwicGF5cm9sbEZvcm0iLCJlbXAiLCJiYXNpY19zYWxhcnkiLCJ0b3RhbF9vdmVydGltZSIsInRvdGFsX2RlZHVjdGlvbnMiLCJvdGhlcl9wYXkiLCJncm9zc19zYWxhcnkiLCJuZXRfc2FsYXJ5IiwibW9kYWxJZCIsIm1ldGhvZHMiLCJfb2JqZWN0U3ByZWFkIiwicHJpbnRQYXlyb2xsU3VtbWFyeVJlcG9ydCIsImxpbmsiLCJ3aW5kb3ciLCJvcGVuIiwibWFrZVRvYXN0IiwiY3JlYXRlUGF5cm9sbCIsInJlc2V0IiwiJGJ2TW9kYWwiLCJzaG93IiwiZWRpdFBheXJvbGwiLCJlbXBsb3llZSIsInBheXJvbGxfcGVyaW9kIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJkZWxldGVQYXlyb2xsIiwicHJpbnRQYXlzbGlwIiwiaXRlbSIsIm9uQWN0aW9uIiwibG9hZFBheXJvbGxzIiwiX3RoaXMiLCJwYXJhbXMiLCJwYWdlIiwic2VhcmNoIiwibG9hZEl0ZW1zIiwidGhlbiIsIl8iLCJpdGVtcyIsInBlcmZvcm1TZWFyY2giLCJkZWJvdW5jZSIsInF1ZXJ5IiwibG9hZFBheXJvbGxQZXJpb2RzIiwiX3RoaXMyIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImxhc3RfcGFnZSIsIm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlIiwib25QYXlyb2xsUGVyaW9kUHJldlBhZ2UiLCJvblNlYXJjaFBheXJvbGxQZXJpb2QiLCJsb2FkaW5nIiwicGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2QiLCJjcmVhdGVQYXlyb2xsUGVyaW9kIiwiZm9ybWF0VGltZSIsImVtcGxveWVlVGltZSIsIl9lbXBsb3llZVRpbWUkc3BsaXQiLCJzcGxpdCIsIl9lbXBsb3llZVRpbWUkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJob3VycyIsIm1pbnV0ZXMiLCJ0aW1lIiwiRGF0ZSIsInNldEhvdXJzIiwic2V0TWludXRlcyIsImFtcG0iLCJnZXRIb3VycyIsImhvdXJzMTIiLCJjb25jYXQiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm1vbWVudCIsImZvcm1hdCIsIm1vdW50ZWQiLCJjb21wdXRlZCIsImhhc1BheXJvbGxQZXJpb2RzTmV4dFBhZ2UiLCJoYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlIiwid2F0Y2giLCJoYW5kbGVyIiwicHJvcHMiLCJmb3JtIiwibW9kYWxDbG9zZSIsImRvbmUiLCJoaWRlIiwib25TdWJtaXQiLCJmdWxsX25hbWUiLCIkZW1pdCIsImVycm9yIiwiZXJyb3JzIiwiaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmciLCJpc05leHRCdXR0b25Mb2FkaW5nIiwiaXNQcmV2QnV0dG9uTG9hZGluZyIsImVtcGxveWVlc0N1cnJlbnRQYWdlIiwiZW1wbG95ZWVzUGVyUGFnZSIsImVtcGxveWVlc0xhc3RQYWdlIiwiZW1wbG95ZWVzIiwibG9hZEVtcGxveWVlcyIsIm9uQ2hhbmdlU2VsZWN0ZWRFbXBsb3llZSIsImUiLCJoYW5kbGVDcmVhdGVQYXlyb2xsIiwiZW1wX2lkIiwiaGFuZGxlVXBkYXRlUGF5cm9sbCIsIl90aGlzMyIsInVwZGF0ZVBheXJvbGwiLCJvbk5leHRQYWdlIiwib25QcmV2UGFnZSIsIm9uU2VhcmNoRW1wbG95ZWUiLCJwZXJmb3JtU2VhcmNoRW1wbG95ZWUiLCJfdGhpczQiLCJjYWxjdWxhdGVOZXRQYXlBbmRHcm9zc1NhbGFyeSIsImJhc2ljU2FsYXJ5IiwidG90YWxPdmVydGltZSIsIm90aGVyUGF5IiwidG90YWxEZWR1Y3Rpb25zIiwiZ3Jvc3NTYWxhcnkiLCJnZXRFbXBsb3llZSIsIl90aGlzNSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIm9uU2hvdyIsInIiLCJhYnJ1cHQiLCJzZW50Iiwic3RvcCIsImdldEJhc2ljU2FsYXJ5IiwiX3RoaXM2IiwiX2NhbGxlZTIiLCJ2bSIsInBheXJvbGxQZXJpb2QiLCJkYWlseVRpbWVSZWNvcmRzIiwiaG91cmx5UmF0ZSIsInBlcmlvZERhdGVGcm9tIiwicGVyaW9kRGF0ZVRvIiwic2NoZWR1bGUiLCJudW1iZXJPZkhvdXJzIiwibm9PZkhyc0JyayIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsb25lRGVlcCIsImZpbmQiLCJ4IiwiZGFpbHlfdGltZV9yZWNvcmRzIiwiaG91cmx5X3JhdGUiLCJkdHIiLCJkdHJfZGF0ZSIsImdldFRpbWUiLCJub19vZl9ocnNfYnJrIiwiZm9yRWFjaCIsImNhbGN1bGF0ZU51bWJlck9mSG91cnNCeVNjaGVkdWxlIiwicmVxdWlyZWRfdGltZV9pbiIsInJlcXVpcmVkX3RpbWVfb3V0IiwidGltZV9pbiIsInRpbWVfb3V0Iiwic2NoZWR1bGVTdGFydCIsInNjaGVkdWxlRW5kIiwic2NoZWR1bGVOb09mSHJzQnJrIiwidGltZUluIiwidGltZU91dCIsInRpbWVJbkRhdGUiLCJ0aW1lT3V0RGF0ZSIsInNjaGVkdWxlU3RhcnREYXRlIiwic2NoZWR1bGVFbmREYXRlIiwidmFsaWRUaW1lSW4iLCJ0aW1lRGlmZk1pbGxpcyIsImlzTmFOIiwiTnVtYmVyIiwiY2FsY3VsYXRlTnVtYmVyT2ZIb3VycyIsImhvdXJzRnJvbSIsImhvdXJzVG8iLCJob3Vyc0Zyb21EYXRlIiwiaG91cnNUb0RhdGUiLCJnZXRUb3RhbE92ZXJ0aW1lIiwiX3RoaXM3IiwiX2NhbGxlZTMiLCJvdmVydGltZXMiLCJmaWx0ZXJlZE92ZXJ0aW1lcyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIm90IiwiaG91cnNfZnJvbSIsImhvdXJzX3RvIiwiZ2V0VG90YWxEZWR1Y3Rpb25zIiwiX3RoaXM4IiwiX2NhbGxlZTQiLCJkZWR1Y3Rpb25zIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZGVkdWN0aW9uIiwiYW1vdW50IiwiZm9ybUJhc2ljX3NhbGFyeSIsIm5ld1ZhbCIsIm9sZFZhbCIsImZvcm1Ub3RhbF9vdmVydGltZSIsImZvcm1PdGhlcl9wYXkiLCJmb3JtVG90YWxfZGVkdWN0aW9ucyIsImhhc0VtcGxveWVlc05leHRQYWdlIiwiaGFzRW1wbG95ZWVzUHJldlBhZ2UiLCJPYmplY3QiLCJpc1NlbGYiLCJ0eXBlIiwiQm9vbGVhbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCIsImhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QiLCJ1cGRhdGVQYXlyb2xsUGVyaW9kIiwib25Db250ZXh0RGF0ZUZyb20iLCJjdHgiLCJzZWxlY3RlZFlNRCIsIm9uQ29udGV4dERhdGVUbyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiYXR0cnMiLCJvbiIsImNsaWNrIiwiaWNvbiIsInN0eWxlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib3B0aW9ucyIsImZpbHRlcmFibGUiLCJyZWR1Y2UiLCJwIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwiaHJlZiIsInByb3h5IiwiX3JlZiIsIl9zIiwiX3JlZjIiLCJzaXplIiwiYmxvY2siLCJzcXVhcmVkIiwiZGlzYWJsZWQiLCJzbWFsbCIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiaW5saW5lIiwicm91bmRlZCIsImhvdmVyIiwic3RyaXBlZCIsImJ1c3kiLCJlbXBsb3llZV9pZCIsIl9lIiwicmlnaHQiLCJfbCIsImFjdGlvbiIsImluZGV4IiwiJGV2ZW50IiwiZG9tUHJvcHMiLCJpbm5lckhUTUwiLCJhbGlnbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJjZW50ZXJlZCIsInBpbGwiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsIm1vZGlmaWVycyIsIiRzZXQiLCJjb2xzIiwic3RlcCIsIm1pbiIsInJlYWRvbmx5IiwicmVxdWlyZWQiLCJsb2NhbGUiLCJjb250ZXh0IiwidGV4dCIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJrZXlzIiwibGVuZ3RoIiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwicHVzaCIsIm9yaWdpbmFsRGF0YSIsInByb3BlcnR5IiwicG9zdCIsInVybCIsInN1Ym1pdCIsInB1dCIsInBhdGNoIiwiX2RlbGV0ZSIsInJlcXVlc3RUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJpc0RhdGFFbXB0eSIsInZhbCIsImluZCIsImlzRGVmYXVsdERhdGFFbXB0eSIsInN0cmluZ0xvd2VyQ2FzZSIsInN0ciIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJsb3dlciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0QW1vdW50IiwiZW1wdHlTdHJpbmciLCJjaGFyYWMiLCJpIiwibCIsImluQXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsIndob2xlTnVtYmVyRm9ybWF0IiwiZGVjaW1hUGxhY2UiLCJhbW91bnROb3ciLCJNYXRoIiwiZmxvb3IiLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwiY29tbWFfY29uY2F0Iiwic2V0IiwiZWxlIiwic2hvd2luZ19sYWJlbCIsImYiLCJ0b19zdHJvbmciLCJ0IiwidG90IiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==