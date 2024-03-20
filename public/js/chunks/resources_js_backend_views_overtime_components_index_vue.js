"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_overtime_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_overtimeModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/overtimeModal.vue */ "./resources/js/backend/views/overtime/modals/overtimeModal.vue");
/* harmony import */ var _modals_overtimeDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/overtimeDeleteModal.vue */ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
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
  components: {
    OvertimeModal: _modals_overtimeModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    OvertimeDeleteModal: _modals_overtimeDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        label: "Employee Name"
      }, {
        key: "period",
        label: "Period"
      }, {
        key: "ot_date",
        label: "OT Date"
      }, {
        key: "hours",
        label: "Hours"
      }, {
        key: "actions",
        label: "Actions",
        thClass: "text-center",
        tdClass: "text-center",
        thStyle: {
          width: "10%"
        }
      }],
      overtimeForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        emp: "",
        period: "",
        ot_date: "",
        hours_from: "",
        hours_to: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("overtime", ["loadItems"])), {}, {
    createOvertime: function createOvertime() {
      this.overtimeForm.reset();
      this.overtimeForm.emp = "";
      this.overtimeForm.period = "";
      this.overtimeForm.ot_date = "";
      this.overtimeForm.hours_from = "";
      this.overtimeForm.hours_to = "";
      this.modalId = "overtime-modal";
      this.$bvModal.show(this.modalId);
    },
    editOvertime: function editOvertime(data) {
      this.overtimeForm.reset();
      this.overtimeForm.id = data.id;
      this.overtimeForm.emp = data.employee;
      this.overtimeForm.period = data.payroll_period.id;
      this.overtimeForm.ot_date = data.ot_date;
      this.overtimeForm.hours_from = data.hours_from;
      this.overtimeForm.hours_to = data.hours_to;
      this.modalId = "overtime-modal";
      this.$bvModal.show(this.modalId);
    },
    deleteOvertime: function deleteOvertime(data) {
      this.overtimeForm.reset();
      this.overtimeForm.id = data.id;
      this.overtimeForm.emp = data.employee;
      this.overtimeForm.period = data.payroll_period.id;
      this.overtimeForm.ot_date = data.ot_date;
      this.overtimeForm.hours_from = data.hours_from;
      this.overtimeForm.hours_to = data.hours_to;
      this.modalId = "overtime-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadOvertimes: function loadOvertimes() {
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
      return this.moment(date).format('DD MMMM YYYY');
    }
  }),
  mounted: function mounted() {
    this.loadOvertimes();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("overtime", {
    items: "getOvertimes"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadOvertimes();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadOvertimes();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadOvertimes();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  props: ["overtimeForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.overtimeForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("overtime", ["deleteOvertime"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("overtime-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deleteOvertime(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.emp.full_name, " has been removed from Overtime records."));
        _this.$emit("loadOvertimes");
        _this.$bvModal.hide("overtime-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
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
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ["overtimeForm"],
  components: {
    PayrollPeriodsModal: _payrollPeriod_modals_payrollPeriodsModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      form: this.overtimeForm,
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
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("overtime", ["createOvertime", "updateOvertime"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("overtime-modal");
      this.errors = {};
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
    handleCreateOvertime: function handleCreateOvertime() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        emp_id: this.form.emp.id,
        period: this.form.period,
        ot_date: this.form.ot_date,
        hours_from: this.form.hours_from,
        hours_to: this.form.hours_to
      };
      this.createOvertime(params).then(function (_) {
        _this2.makeToast("success", "NEW RECORD CREATED", "".concat(_this2.form.emp.full_name, " has been created as a new Overtime"));
        _this2.$emit("loadOvertimes");
        _this2.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this2.errors = errors;
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    handleUpdateOvertime: function handleUpdateOvertime() {
      var _this3 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        emp_id: this.form.emp.id,
        period: this.form.period,
        ot_date: this.form.ot_date,
        hours_from: this.form.hours_from,
        hours_to: this.form.hours_to
      };
      this.updateOvertime(params).then(function (_) {
        _this3.makeToast("warning", "RECORD UPDATED", "This information for Overtime ID: ".concat(_this3.form.id, " has been updated."));
        _this3.$emit("loadOvertimes");
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
    onContextDate: function onContextDate(ctx) {
      if (ctx.selectedYMD) {
        this.date = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');
        return;
      }
      this.date = "";
    },
    onSubmit: function onSubmit() {
      if (this.form.id) {
        this.handleUpdateOvertime();
      } else {
        this.handleCreateOvertime();
      }
    },
    formatDate: function formatDate(date) {
      return this.moment(date).format('DD MMMM YYYY');
    }
  }),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846 ***!
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
  }, [_c("h1", {
    staticClass: "m-0 mb-2 font-weight-bold text-info"
  }, [_vm._v("Overtime")]), _vm._v(" "), _c("div", {
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
      click: _vm.createOvertime
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
      key: "cell(period)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.payroll_period.date_from)) + " - " + _vm._s(_vm.formatDate(data.item.payroll_period.date_to)) + "\n                ")])];
      }
    }, {
      key: "cell(ot_date)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.ot_date)) + "\n                ")])];
      }
    }, {
      key: "cell(hours)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatTime(data.item.hours_from)) + " - " + _vm._s(_vm.formatTime(data.item.hours_to)) + "\n                ")])];
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
              return _vm.editOvertime(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteOvertime(data.item);
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
  })], 1)])])]), _vm._v(" "), _c("OvertimeModal", {
    attrs: {
      overtimeForm: _vm.overtimeForm
    },
    on: {
      loadOvertimes: function loadOvertimes($event) {
        return _vm.loadOvertimes();
      }
    }
  }), _vm._v(" "), _c("OvertimeDeleteModal", {
    attrs: {
      overtimeForm: _vm.overtimeForm
    },
    on: {
      loadOvertimes: function loadOvertimes($event) {
        return _vm.loadOvertimes();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "overtime-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.emp.full_name, " from Overtime records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7 ***!
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
  return _c("b-modal", {
    attrs: {
      id: "overtime-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Overtime" : "Add Overtime"))]), _vm._v(" "), _c("b-button", {
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
            id: "date",
            label: "Overtime Date",
            "label-for": "date"
          }
        }, [_c("b-input-group", [_c("b-form-input", {
          attrs: {
            id: "date",
            type: "text",
            placeholder: "No date selected",
            readonly: ""
          },
          model: {
            value: _vm.date,
            callback: function callback($$v) {
              _vm.date = $$v;
            },
            expression: "date"
          }
        }), _vm._v(" "), _c("b-input-group-append", [_c("b-form-datepicker", {
          attrs: {
            "button-only": "",
            right: "",
            locale: "en-US",
            "aria-controls": "date"
          },
          on: {
            context: _vm.onContextDate
          },
          model: {
            value: _vm.form.ot_date,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "ot_date", $$v);
            },
            expression: "form.ot_date"
          }
        })], 1)], 1), _vm._v(" "), _vm.errors && _vm.errors.ot_date ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.ot_date[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "hours",
            label: "Hours:",
            "label-for": "hours"
          }
        }, [_c("b-row", [_c("b-col", [_c("div", {
          staticClass: "d-flex flex-row align-items-center"
        }, [_c("label", {
          staticClass: "mr-2"
        }, [_vm._v("from")]), _vm._v(" "), _c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.hours_from,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "hours_from", $$v);
            },
            expression: "form.hours_from"
          }
        })], 1), _vm._v(" "), _vm.errors && _vm.errors.hours_from ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.hours_from[0]))]) : _vm._e()]), _vm._v(" "), _c("b-col", [_c("div", {
          staticClass: "d-flex flex-row align-items-center"
        }, [_c("label", {
          staticClass: "mr-2"
        }, [_vm._v("to")]), _vm._v(" "), _c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.hours_to,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "hours_to", $$v);
            },
            expression: "form.hours_to"
          }
        })], 1), _vm._v(" "), _vm.errors && _vm.errors.hours_to ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.hours_to[0]))]) : _vm._e()])], 1)], 1)], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/overtime/modals/overtimeModal.vue"],"names":[],"mappings":";AA+dA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"overtime-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Overtime' : 'Add Overtime'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"employee-name\" label=\"Employee Name\" label-for=\"employee-name\">\n          <v-select\n            name=\"employees\"\n            label=\"full_name\"\n            v-model=\"form.emp\"\n            :options=\"employees\"\n            :filterable=\"false\"\n            :loading=\"isEmployeesDropdownLoading\"\n            @search=\"onSearchEmployee\"\n            id=\"employees\"\n          >\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasEmployeesPrevPage || isPrevButtonLoading\"\n                      @click=\"onPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasEmployeesNextPage || isNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.emp_id\" class=\"text-danger\">{{ errors.emp_id[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"input-group-4\" label=\"Period\" label-for=\"input-4\">\n          <v-select\n            name=\"period\"\n            label=\"date_to\"\n            v-model=\"form.period\"\n            :options=\"payrollPeriods\"\n            :filterable=\"false\"\n            :loading=\"isPayrollPeriodsDropdownLoading\"\n            :reduce=\"(p) => p.id\"\n            @search=\"onSearchPayrollPeriod\"\n            id=\"period\"\n          >\n\n            <template #list-header>\n              <li class=\"mb-2 v-select-option-padding\">\n                <b-link href=\"#\" @click=\"createPayrollPeriod\">\n                  <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                  New Payroll Period\n                </b-link>\n              </li>\n            </template>\n            <template #selected-option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #option=\"{ date_to, date_from }\">\n              <span>\n                {{ `${formatDate(date_from)} - ${formatDate(date_to)}` }}\n              </span>\n            </template>\n\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasPayrollPeriodsPrevPage || isPayrollPeriodsPrevButtonLoading\"\n                      @click=\"onPayrollPeriodPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPayrollPeriodsPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasPayrollPeriodsNextPage || isPayrollPeriodsNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onPayrollPeriodNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isPayrollPeriodsNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.period\" class=\"text-danger\">{{ errors.period[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"date\" label=\"Overtime Date\" label-for=\"date\">\n          <b-input-group>\n            <b-form-input\n              id=\"date\"\n              v-model=\"date\"\n              type=\"text\"\n              placeholder=\"No date selected\"\n              readonly\n            ></b-form-input>\n            <b-input-group-append>\n              <b-form-datepicker\n                v-model=\"form.ot_date\"\n                button-only\n                right\n                locale=\"en-US\"\n                aria-controls=\"date\"\n                @context=\"onContextDate\"\n              ></b-form-datepicker>\n            </b-input-group-append>\n          </b-input-group>\n          <div v-if=\"errors && errors.ot_date\" class=\"text-danger\">{{ errors.ot_date[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"hours\" label=\"Hours:\" label-for=\"hours\">\n          <b-row>\n            <b-col>\n              <div class=\"d-flex flex-row align-items-center\">\n                <label class=\"mr-2\">from</label>\n                <b-form-timepicker v-model=\"form.hours_from\" locale=\"en\"></b-form-timepicker>\n              </div>\n              <div v-if=\"errors && errors.hours_from\" class=\"text-danger\">{{ errors.hours_from[0] }}</div>\n            </b-col>\n            <b-col>\n              <div class=\"d-flex flex-row align-items-center\">\n                <label class=\"mr-2\">to</label>\n                <b-form-timepicker v-model=\"form.hours_to\" locale=\"en\"></b-form-timepicker>\n              </div>\n              <div v-if=\"errors && errors.hours_to\" class=\"text-danger\">{{ errors.hours_to[0] }}</div>\n            </b-col>\n          </b-row>\n        </b-form-group>\n        \n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n      <PayrollPeriodsModal :payrollPeriodForm=\"payrollPeriodForm\" @loadPayrollPeriods=\"loadPayrollPeriods()\" :isSelf=\"false\"></PayrollPeriodsModal>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\nimport axios from \"axios\";\nimport toast from \"../../../../helpers/toast.js\";\nimport PayrollPeriodsModal from \"../../payrollPeriod/modals/payrollPeriodsModal.vue\";\nimport Form from \"../../../../helpers/form.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: [\"overtimeForm\"],\n\n  components: {\n    PayrollPeriodsModal\n  },\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.overtimeForm,\n      searched: \"\",\n      date: \"\",\n      errors: {},\n      isEmployeesDropdownLoading: false,\n      isNextButtonLoading: false,\n      isPrevButtonLoading: false,\n      employeesCurrentPage: 1,\n      employeesPerPage: 10,\n      employeesLastPage: 0,\n      employees: [],\n\n      isPayrollPeriodsDropdownLoading: false,\n      isPayrollPeriodsNextButtonLoading: false,\n      isPayrollPeriodsPrevButtonLoading: false,\n      payrollPeriodsCurrentPage: 1,\n      payrollPeriodsPerPage: 10,\n      payrollPeriodsLastPage: 0,\n      payrollPeriodsSearched: \"\",\n      payrollPeriods: [],\n\n      payrollPeriodForm: new Form({\n        id: \"\",\n        date_from: \"\",\n        date_to: \"\",\n      }),\n    };\n  },\n\n  mounted() {\n    this.loadEmployees();\n    this.loadPayrollPeriods();\n  },\n\n  methods: {\n    ...mapActions(\"overtime\", [\"createOvertime\", \"updateOvertime\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"overtime-modal\");\n      this.errors = {};\n\n    },\n\n    loadEmployees() {\n      let params = {\n        per_page: 10,\n        page: this.employeesCurrentPage,\n        search: this.searched,\n      }\n      axios\n        .get(\"/api/employees\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.employees = data.data;\n          this.employeesLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isEmployeesDropdownLoading = false;\n          this.isNextButtonLoading = false;\n          this.isPrevButtonLoading = false;\n        });\n    },\n\n    handleCreateOvertime() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\temp_id: this.form.emp.id,\n        period: this.form.period,\n        ot_date: this.form.ot_date,\n        hours_from: this.form.hours_from,\n        hours_to: this.form.hours_to\n\t\t\t}\n\n      this.createOvertime(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.emp.full_name} has been created as a new Overtime`\n          );\n          this.$emit(\"loadOvertimes\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdateOvertime() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\temp_id: this.form.emp.id,\n        period: this.form.period,\n        ot_date: this.form.ot_date,\n        hours_from: this.form.hours_from,\n        hours_to: this.form.hours_to\n\t\t\t}\n\n      this.updateOvertime(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Overtime ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadOvertimes\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onNextPage() {\n      this.isNextButtonLoading = true;\n      this.employeesCurrentPage += 1;\n      this.loadEmployees();\n    },\n\n    onPrevPage() {\n      this.isPrevButtonLoading = true;\n      this.employeesCurrentPage -= 1;\n      this.loadEmployees();\n    },\n\n    onSearchEmployee(search, loading) {\n      this.isEmployeesDropdownLoading = true;\n      this.performSearchEmployee(search);\n    },\n\n    performSearchEmployee: _.debounce(function (search) {\n      this.searched = search;\n\n      this.loadEmployees();\n    }, 1000),\n\n    loadPayrollPeriods() {\n      let params = {\n        per_page: 10,\n        page: this.payrollPeriodsCurrentPage,\n        search: this.payrollPeriodsSearched,\n      }\n      axios\n        .get(\"/api/payroll-periods\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.payrollPeriods = data.data;\n          this.payrollPeriodsLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isPayrollPeriodsDropdownLoading = false;\n          this.isPayrollPeriodsNextButtonLoading = false;\n          this.isPayrollPeriodsPrevButtonLoading = false;\n        });\n    },\n\n    onPayrollPeriodNextPage() {\n      this.isPayrollPeriodsNextButtonLoading = true;\n      this.payrollPeriodsCurrentPage += 1;\n      this.loadPayrollPeriods();\n    },\n\n    onPayrollPeriodPrevPage() {\n      this.isPayrollPeriodsPrevButtonLoading = true;\n      this.payrollPeriodsCurrentPage -= 1;\n      this.loadPayrollPeriods();\n    },\n\n    onSearchPayrollPeriod(search, loading) {\n      this.isPayrollPeriodsDropdownLoading = true;\n      this.performSearchPayrollPeriod(search);\n    },\n\n    performSearchPayrollPeriod: _.debounce(function (search) {\n      this.payrollPeriodsSearched = search;\n\n      this.loadPayrollPeriods();\n    }, 1000),\n\n    createPayrollPeriod() {\n      this.payrollPeriodForm.reset();\n      this.payrollPeriodForm.id = '';\n      this.payrollPeriodForm.date_from = '';\n      this.payrollPeriodForm.date_to = '';\n      this.$bvModal.show('payroll-period-modal');\n    },\n\n    onContextDate(ctx) {\n      if (ctx.selectedYMD) {\n        this.date = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');\n        return;\n      }\n\n      this.date = \"\";\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdateOvertime();\n      } else {\n        this.handleCreateOvertime();\n      }\n    },\n\n    formatDate(date) {\n      return this.moment(date).format('DD MMMM YYYY');\n    },\n  },\n\n  computed: {\n    hasEmployeesNextPage() {\n      return (\n        this.employeesCurrentPage !== this.employeesLastPage\n      );\n    },\n\n    hasEmployeesPrevPage() {\n      return this.employeesCurrentPage > 1;\n    },\n\n    hasPayrollPeriodsNextPage() {\n      return (\n        this.payrollPeriodsCurrentPage !== this.payrollPeriodsLastPage\n      );\n    },\n\n    hasPayrollPeriodsPrevPage() {\n      return this.payrollPeriodsCurrentPage > 1;\n    },\n  }\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_style_index_0_id_09cbdee7_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_style_index_0_id_09cbdee7_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_style_index_0_id_09cbdee7_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/backend/views/overtime/components/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/backend/views/overtime/components/index.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dfd44846 */ "./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/overtime/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overtimeDeleteModal.vue?vue&type=template&id=a8f8f008 */ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008");
/* harmony import */ var _overtimeDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overtimeDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _overtimeDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__.render,
  _overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeModal.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeModal.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overtimeModal.vue?vue&type=template&id=09cbdee7 */ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7");
/* harmony import */ var _overtimeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overtimeModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js");
/* harmony import */ var _overtimeModal_vue_vue_type_style_index_0_id_09cbdee7_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css */ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _overtimeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__.render,
  _overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/overtime/modals/overtimeModal.vue"
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

/***/ "./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd44846__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=dfd44846 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/components/index.vue?vue&type=template&id=dfd44846");


/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008 ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeDeleteModal_vue_vue_type_template_id_a8f8f008__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeDeleteModal.vue?vue&type=template&id=a8f8f008 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeDeleteModal.vue?vue&type=template&id=a8f8f008");


/***/ }),

/***/ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7 ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_template_id_09cbdee7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeModal.vue?vue&type=template&id=09cbdee7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=template&id=09cbdee7");


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

/***/ "./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_overtimeModal_vue_vue_type_style_index_0_id_09cbdee7_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/overtime/modals/overtimeModal.vue?vue&type=style&index=0&id=09cbdee7&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX292ZXJ0aW1lX2NvbXBvbmVudHNfaW5kZXhfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7RUFDZk0sVUFBQTtJQUNBSCxhQUFBLEVBQUFBLGlFQUFBO0lBQ0FDLG1CQUFBLEVBQUFBLHVFQUFBQTtFQUNBO0VBQ0FHLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFFBQUE7TUFDQUMsWUFBQTtNQUNBQyxTQUFBO01BQ0FDLE1BQUE7TUFDQUMsUUFBQTtNQUNBVixjQUFBLEVBQUFBLG9EQUFBO01BQ0FXLFNBQUE7TUFDQUMsUUFBQTtNQUNBQyxPQUFBO1FBQ0FDLEVBQUE7UUFDQUMsSUFBQTtRQUNBQyxLQUFBO01BQ0E7TUFDQUMsY0FBQTtNQUNBQyxNQUFBLEdBQ0E7UUFDQUMsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7VUFBQUMsS0FBQTtRQUFBO01BQ0EsRUFDQTtNQUVBQyxZQUFBLE1BQUF0Qix3REFBQTtRQUNBdUIsRUFBQTtRQUNBQyxHQUFBO1FBQ0FDLE1BQUE7UUFDQUMsT0FBQTtRQUNBQyxVQUFBO1FBQ0FDLFFBQUE7TUFDQTtNQUVBQyxPQUFBO0lBQ0E7RUFDQTtFQUVBQyxPQUFBLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNBcEMsZ0RBQUE7SUFDQXFDLGNBQUEsV0FBQUEsZUFBQTtNQUNBLEtBQUFWLFlBQUEsQ0FBQVcsS0FBQTtNQUNBLEtBQUFYLFlBQUEsQ0FBQUUsR0FBQTtNQUNBLEtBQUFGLFlB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9tb2RhbHMvb3ZlcnRpbWVEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvbW9kYWxzL292ZXJ0aW1lRGVsZXRlTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy90ZXh0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RvYXN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZT81MDFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2UzN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvbW9kYWxzL292ZXJ0aW1lTW9kYWwudnVlPzBlODUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/Y2QzZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9jb21wb25lbnRzL2luZGV4LnZ1ZT8zOTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZURlbGV0ZU1vZGFsLnZ1ZT9mYmZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZT83YzgwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3BheXJvbGxQZXJpb2QvbW9kYWxzL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP2I0NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvY29tcG9uZW50cy9pbmRleC52dWU/NTgxOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9tb2RhbHMvb3ZlcnRpbWVEZWxldGVNb2RhbC52dWU/YjVmMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9tb2RhbHMvb3ZlcnRpbWVNb2RhbC52dWU/NGJlZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT8yMTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL2NvbXBvbmVudHMvaW5kZXgudnVlP2E1OWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvbW9kYWxzL292ZXJ0aW1lRGVsZXRlTW9kYWwudnVlPzAyOWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvbW9kYWxzL292ZXJ0aW1lTW9kYWwudnVlP2RjOGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvb3ZlcnRpbWUvbW9kYWxzL292ZXJ0aW1lTW9kYWwudnVlPzU0ZmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8aDEgY2xhc3M9XCJtLTAgbWItMiBmb250LXdlaWdodC1ib2xkIHRleHQtaW5mb1wiPk92ZXJ0aW1lPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8Yi1idXR0b24gXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlT3ZlcnRpbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWItM1wiPlxuICAgICAgICAgICAgPGItZm9ybSBpbmxpbmU+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLXNtLTJcIiBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIj5cbiAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2hvd0VudHJpZXNPcHRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxiLW92ZXJsYXkgOnNob3c9XCJpc092ZXJsYXlcIiByb3VuZGVkPVwic21cIj5cbiAgICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgICBob3ZlclxuICAgICAgICAgICAgICAgIHN0cmlwZWRcbiAgICAgICAgICAgICAgICBzaG93LWVtcHR5XG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXMuZGF0YVwiXG4gICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMFwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChlbXBsb3llZV9uYW1lKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZW1wbG95ZWUuZnVsbF9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChwZXJpb2QpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm1hdERhdGUoZGF0YS5pdGVtLnBheXJvbGxfcGVyaW9kLmRhdGVfZnJvbSkgfX0gLSB7eyBmb3JtYXREYXRlKGRhdGEuaXRlbS5wYXlyb2xsX3BlcmlvZC5kYXRlX3RvKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwob3RfZGF0ZSk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybWF0RGF0ZShkYXRhLml0ZW0ub3RfZGF0ZSkgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGhvdXJzKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXRUaW1lKGRhdGEuaXRlbS5ob3Vyc19mcm9tKSB9fSAtIHt7IGZvcm1hdFRpbWUoZGF0YS5pdGVtLmhvdXJzX3RvKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoYWN0aW9ucyk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdE92ZXJ0aW1lKGRhdGEuaXRlbSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVESVRcbiAgICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiBzaXplPVwic21cIiB2YXJpYW50PVwiZGFuZ2VyXCIgQGNsaWNrPVwiZGVsZXRlT3ZlcnRpbWUoZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgREVMRVRFXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBsYWJlbD1cIlNtYWxsIExvYWRpbmcuLi5cIj48L2Itc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgICAgICAgICAgPC9iLXRhYmxlPlxuICAgICAgICAgICAgPC9iLW92ZXJsYXk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxwPnt7YFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYH19PC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxPdmVydGltZU1vZGFsIDpvdmVydGltZUZvcm09XCJvdmVydGltZUZvcm1cIiBAbG9hZE92ZXJ0aW1lcz1cImxvYWRPdmVydGltZXMoKVwiPjwvT3ZlcnRpbWVNb2RhbD5cbiAgICA8T3ZlcnRpbWVEZWxldGVNb2RhbCA6b3ZlcnRpbWVGb3JtPVwib3ZlcnRpbWVGb3JtXCIgQGxvYWRPdmVydGltZXM9XCJsb2FkT3ZlcnRpbWVzKClcIj48L092ZXJ0aW1lRGVsZXRlTW9kYWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgc2hvd0VudHJpZXNPcHQgfSBmcm9tIFwiQGpzL2RhdGFcIjtcbmltcG9ydCBPdmVydGltZU1vZGFsIGZyb20gXCIuLi9tb2RhbHMvb3ZlcnRpbWVNb2RhbC52dWVcIjtcbmltcG9ydCBPdmVydGltZURlbGV0ZU1vZGFsIGZyb20gXCIuLi9tb2RhbHMvb3ZlcnRpbWVEZWxldGVNb2RhbC52dWVcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9oZWxwZXJzL2Zvcm0uanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIE92ZXJ0aW1lTW9kYWwsXG4gICAgT3ZlcnRpbWVEZWxldGVNb2RhbFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwZXJfcGFnZTogMTAsXG4gICAgICBjdXJyZW50X3BhZ2U6IDEsXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICBzZWFyY2hlZDogXCJcIixcbiAgICAgIHNob3dFbnRyaWVzT3B0LFxuICAgICAgaXNPdmVybGF5OiBmYWxzZSxcbiAgICAgIHRvdGFsUm93OiAwLFxuICAgICAgc2hvd2luZzoge1xuICAgICAgICB0bzogMCxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAgdGFibGVUb3RhbFJvd3M6IFwiXCIsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJlbXBsb3llZV9uYW1lXCIsXG4gICAgICAgICAgbGFiZWw6IFwiRW1wbG95ZWUgTmFtZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInBlcmlvZFwiLFxuICAgICAgICAgIGxhYmVsOiBcIlBlcmlvZFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIm90X2RhdGVcIixcbiAgICAgICAgICBsYWJlbDogXCJPVCBEYXRlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiaG91cnNcIixcbiAgICAgICAgICBsYWJlbDogXCJIb3Vyc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImFjdGlvbnNcIixcbiAgICAgICAgICBsYWJlbDogXCJBY3Rpb25zXCIsXG4gICAgICAgICAgdGhDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRkQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICB0aFN0eWxlOiB7IHdpZHRoOiBcIjEwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgICBvdmVydGltZUZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgIGVtcDogXCJcIixcbiAgICAgICAgcGVyaW9kOiBcIlwiLFxuICAgICAgICBvdF9kYXRlOiBcIlwiLFxuICAgICAgICBob3Vyc19mcm9tOiBcIlwiLFxuICAgICAgICBob3Vyc190bzogXCJcIixcbiAgICAgIH0pLFxuXG4gICAgICBtb2RhbElkOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJvdmVydGltZVwiLCBbXCJsb2FkSXRlbXNcIl0pLFxuICAgIGNyZWF0ZU92ZXJ0aW1lKCkge1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLmVtcCA9IFwiXCI7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5wZXJpb2QgPSBcIlwiO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0ub3RfZGF0ZSA9IFwiXCI7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5ob3Vyc19mcm9tID0gXCJcIjtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLmhvdXJzX3RvID0gXCJcIjtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJvdmVydGltZS1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGVkaXRPdmVydGltZShkYXRhKSB7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0uZW1wID0gZGF0YS5lbXBsb3llZTtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLnBlcmlvZCA9IGRhdGEucGF5cm9sbF9wZXJpb2QuaWQ7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5vdF9kYXRlID0gZGF0YS5vdF9kYXRlO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0uaG91cnNfZnJvbSA9IGRhdGEuaG91cnNfZnJvbTtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLmhvdXJzX3RvID0gZGF0YS5ob3Vyc190bztcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJvdmVydGltZS1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGRlbGV0ZU92ZXJ0aW1lKGRhdGEpIHtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5pZCA9IGRhdGEuaWQ7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5lbXAgPSBkYXRhLmVtcGxveWVlO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0ucGVyaW9kID0gZGF0YS5wYXlyb2xsX3BlcmlvZC5pZDtcbiAgICAgIHRoaXMub3ZlcnRpbWVGb3JtLm90X2RhdGUgPSBkYXRhLm90X2RhdGU7XG4gICAgICB0aGlzLm92ZXJ0aW1lRm9ybS5ob3Vyc19mcm9tID0gZGF0YS5ob3Vyc19mcm9tO1xuICAgICAgdGhpcy5vdmVydGltZUZvcm0uaG91cnNfdG8gPSBkYXRhLmhvdXJzX3RvO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcIm92ZXJ0aW1lLWRlbGV0ZS1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGxvYWRPdmVydGltZXMoKSB7XG4gICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICBwZXJfcGFnZTogdGhpcy5wZXJfcGFnZSxcbiAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50X3BhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2hlZCxcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZEl0ZW1zKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxlVG90YWxSb3dzID0gdGhpcy5pdGVtcy50b3RhbFxuICAgICAgICAgIHRoaXMuc2hvd2luZy50byA9IHRoaXMuaXRlbXMudG87XG4gICAgICAgICAgdGhpcy5zaG93aW5nLmZyb20gPSB0aGlzLml0ZW1zLmZyb207XG4gICAgICAgICAgdGhpcy5zaG93aW5nLnRvdGFsID0gdGhpcy5pdGVtcy50b3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBfLmRlYm91bmNlKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnNlYXJjaGVkID0gcXVlcnlcbiAgICB9LCAxMDAwKSxcblxuICAgIGZvcm1hdFRpbWUoZW1wbG95ZWVUaW1lKSB7XG4gICAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gZW1wbG95ZWVUaW1lLnNwbGl0KFwiOlwiKTtcbiAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdGltZS5zZXRIb3Vycyhob3Vycyk7XG4gICAgICB0aW1lLnNldE1pbnV0ZXMobWludXRlcyk7XG4gICAgICBjb25zdCBhbXBtID0gdGltZS5nZXRIb3VycygpID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xuICAgICAgbGV0IGhvdXJzMTIgPSB0aW1lLmdldEhvdXJzKCkgJSAxMjtcbiAgICAgIGhvdXJzMTIgPSBob3VyczEyID8gaG91cnMxMiA6IDEyOyAvLyBjb252ZXJ0IDAgdG8gMTJcbiAgICAgIHJldHVybiBgJHtob3VyczEyfToke21pbnV0ZXN9ICR7YW1wbX1gO1xuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkT3ZlcnRpbWVzKCk7XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFwib3ZlcnRpbWVcIiwge1xuICAgICAgaXRlbXM6IFwiZ2V0T3ZlcnRpbWVzXCIsXG4gICAgfSksXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjdXJyZW50X3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9hZE92ZXJ0aW1lcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwZXJfcGFnZToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkT3ZlcnRpbWVzKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmlsdGVyKHF1ZXJ5KSB7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2gocXVlcnkpXG4gICAgfSxcblxuICAgIHNlYXJjaGVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRPdmVydGltZXMoKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cIm92ZXJ0aW1lLWRlbGV0ZS1tb2RhbFwiXG4gICAgaGlkZS1oZWFkZXJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY2VudGVyZWRcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1yb3c+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg0PkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEPC9oND5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3sgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtmb3JtLmVtcC5mdWxsX25hbWV9IGZyb20gT3ZlcnRpbWUgcmVjb3Jkcz9gIH19XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtNFwiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBOT1xuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgWUVTXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IFtcIm92ZXJ0aW1lRm9ybVwiXSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMub3ZlcnRpbWVGb3JtXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcIm92ZXJ0aW1lXCIsIFtcImRlbGV0ZU92ZXJ0aW1lXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwib3ZlcnRpbWUtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZU92ZXJ0aW1lKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBERUxFVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIE92ZXJ0aW1lIHJlY29yZHMuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRPdmVydGltZXNcIik7XG4gICAgICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwib3ZlcnRpbWUtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwib3ZlcnRpbWUtbW9kYWxcIlxuICAgIGhpZGUtZm9vdGVyXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cbiAgICAgIFxuICAgICAgPGg1IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZGVyIGhlYWRlci1jZS10aXRsZVwiPnt7IGZvcm0uaWQgPyAnRWRpdCBPdmVydGltZScgOiAnQWRkIE92ZXJ0aW1lJ319PC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXG4gICAgICAgIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItZm9ybT5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImVtcGxveWVlLW5hbWVcIiBsYWJlbD1cIkVtcGxveWVlIE5hbWVcIiBsYWJlbC1mb3I9XCJlbXBsb3llZS1uYW1lXCI+XG4gICAgICAgICAgPHYtc2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiZnVsbF9uYW1lXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmVtcFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cImVtcGxveWVlc1wiXG4gICAgICAgICAgICA6ZmlsdGVyYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwiaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmdcIlxuICAgICAgICAgICAgQHNlYXJjaD1cIm9uU2VhcmNoRW1wbG95ZWVcIlxuICAgICAgICAgICAgaWQ9XCJlbXBsb3llZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10LTIgbWItMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWhhc0VtcGxveWVlc1ByZXZQYWdlIHx8IGlzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUHJldlBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNFbXBsb3llZXNOZXh0UGFnZSB8fCBpc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25OZXh0UGFnZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzTmV4dEJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbCBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5OZXh0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5lbXBfaWRcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmVtcF9pZFswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtNFwiIGxhYmVsPVwiUGVyaW9kXCIgbGFiZWwtZm9yPVwiaW5wdXQtNFwiPlxuICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInBlcmlvZFwiXG4gICAgICAgICAgICBsYWJlbD1cImRhdGVfdG9cIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGVyaW9kXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwicGF5cm9sbFBlcmlvZHNcIlxuICAgICAgICAgICAgOmZpbHRlcmFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmdcIlxuICAgICAgICAgICAgOnJlZHVjZT1cIihwKSA9PiBwLmlkXCJcbiAgICAgICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFBheXJvbGxQZXJpb2RcIlxuICAgICAgICAgICAgaWQ9XCJwZXJpb2RcIlxuICAgICAgICAgID5cblxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWhlYWRlcj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibWItMiB2LXNlbGVjdC1vcHRpb24tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxiLWxpbmsgaHJlZj1cIiNcIiBAY2xpY2s9XCJjcmVhdGVQYXlyb2xsUGVyaW9kXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICBOZXcgUGF5cm9sbCBQZXJpb2RcbiAgICAgICAgICAgICAgICA8L2ItbGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGVkLW9wdGlvbj1cInsgZGF0ZV90bywgZGF0ZV9mcm9tIH1cIj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3sgYCR7Zm9ybWF0RGF0ZShkYXRlX2Zyb20pfSAtICR7Zm9ybWF0RGF0ZShkYXRlX3RvKX1gIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPVwieyBkYXRlX3RvLCBkYXRlX2Zyb20gfVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWZvb3Rlcj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXQtMiBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzUGF5cm9sbFBlcmlvZHNQcmV2UGFnZSB8fCBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGF5cm9sbFBlcmlvZFByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlIHx8IGlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMucGVyaW9kXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5wZXJpb2RbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cImRhdGVcIiBsYWJlbD1cIk92ZXJ0aW1lIERhdGVcIiBsYWJlbC1mb3I9XCJkYXRlXCI+XG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGRhdGUgc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5vdF9kYXRlXCJcbiAgICAgICAgICAgICAgICBidXR0b24tb25seVxuICAgICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAgICAgbG9jYWxlPVwiZW4tVVNcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkYXRlXCJcbiAgICAgICAgICAgICAgICBAY29udGV4dD1cIm9uQ29udGV4dERhdGVcIlxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMub3RfZGF0ZVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMub3RfZGF0ZVswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaG91cnNcIiBsYWJlbD1cIkhvdXJzOlwiIGxhYmVsLWZvcj1cImhvdXJzXCI+XG4gICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgPGItY29sPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLTJcIj5mcm9tPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8Yi1mb3JtLXRpbWVwaWNrZXIgdi1tb2RlbD1cImZvcm0uaG91cnNfZnJvbVwiIGxvY2FsZT1cImVuXCI+PC9iLWZvcm0tdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuaG91cnNfZnJvbVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuaG91cnNfZnJvbVswXSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgIDxiLWNvbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtci0yXCI+dG88L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxiLWZvcm0tdGltZXBpY2tlciB2LW1vZGVsPVwiZm9ybS5ob3Vyc190b1wiIGxvY2FsZT1cImVuXCI+PC9iLWZvcm0tdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuaG91cnNfdG9cIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmhvdXJzX3RvWzBdIH19PC9kaXY+XG4gICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICBcbiAgICAgIDwvYi1mb3JtPlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8UGF5cm9sbFBlcmlvZHNNb2RhbCA6cGF5cm9sbFBlcmlvZEZvcm09XCJwYXlyb2xsUGVyaW9kRm9ybVwiIEBsb2FkUGF5cm9sbFBlcmlvZHM9XCJsb2FkUGF5cm9sbFBlcmlvZHMoKVwiIDppc1NlbGY9XCJmYWxzZVwiPjwvUGF5cm9sbFBlcmlvZHNNb2RhbD5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcbmltcG9ydCBQYXlyb2xsUGVyaW9kc01vZGFsIGZyb20gXCIuLi8uLi9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wib3ZlcnRpbWVGb3JtXCJdLFxuXG4gIGNvbXBvbmVudHM6IHtcbiAgICBQYXlyb2xsUGVyaW9kc01vZGFsXG4gIH0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLm92ZXJ0aW1lRm9ybSxcbiAgICAgIHNlYXJjaGVkOiBcIlwiLFxuICAgICAgZGF0ZTogXCJcIixcbiAgICAgIGVycm9yczoge30sXG4gICAgICBpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXG4gICAgICBpc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgZW1wbG95ZWVzQ3VycmVudFBhZ2U6IDEsXG4gICAgICBlbXBsb3llZXNQZXJQYWdlOiAxMCxcbiAgICAgIGVtcGxveWVlc0xhc3RQYWdlOiAwLFxuICAgICAgZW1wbG95ZWVzOiBbXSxcblxuICAgICAgaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXG4gICAgICBpc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIHBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2U6IDEsXG4gICAgICBwYXlyb2xsUGVyaW9kc1BlclBhZ2U6IDEwLFxuICAgICAgcGF5cm9sbFBlcmlvZHNMYXN0UGFnZTogMCxcbiAgICAgIHBheXJvbGxQZXJpb2RzU2VhcmNoZWQ6IFwiXCIsXG4gICAgICBwYXlyb2xsUGVyaW9kczogW10sXG5cbiAgICAgIHBheXJvbGxQZXJpb2RGb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBkYXRlX2Zyb206IFwiXCIsXG4gICAgICAgIGRhdGVfdG86IFwiXCIsXG4gICAgICB9KSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XG4gICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcIm92ZXJ0aW1lXCIsIFtcImNyZWF0ZU92ZXJ0aW1lXCIsIFwidXBkYXRlT3ZlcnRpbWVcIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xuXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJvdmVydGltZS1tb2RhbFwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XG5cbiAgICB9LFxuXG4gICAgbG9hZEVtcGxveWVlcygpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgcGFnZTogdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSxcbiAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaGVkLFxuICAgICAgfVxuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvZW1wbG95ZWVzXCIsIHsgcGFyYW1zIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUNyZWF0ZU92ZXJ0aW1lKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXG4gICAgICAgIHBlcmlvZDogdGhpcy5mb3JtLnBlcmlvZCxcbiAgICAgICAgb3RfZGF0ZTogdGhpcy5mb3JtLm90X2RhdGUsXG4gICAgICAgIGhvdXJzX2Zyb206IHRoaXMuZm9ybS5ob3Vyc19mcm9tLFxuICAgICAgICBob3Vyc190bzogdGhpcy5mb3JtLmhvdXJzX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlT3ZlcnRpbWUocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBcIk5FVyBSRUNPUkQgQ1JFQVRFRFwiLFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLmVtcC5mdWxsX25hbWV9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSBuZXcgT3ZlcnRpbWVgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZE92ZXJ0aW1lc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZU92ZXJ0aW1lKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0XHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXG4gICAgICAgIHBlcmlvZDogdGhpcy5mb3JtLnBlcmlvZCxcbiAgICAgICAgb3RfZGF0ZTogdGhpcy5mb3JtLm90X2RhdGUsXG4gICAgICAgIGhvdXJzX2Zyb206IHRoaXMuZm9ybS5ob3Vyc19mcm9tLFxuICAgICAgICBob3Vyc190bzogdGhpcy5mb3JtLmhvdXJzX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMudXBkYXRlT3ZlcnRpbWUocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBVUERBVEVEXCIsXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgT3ZlcnRpbWUgSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkT3ZlcnRpbWVzXCIpO1xuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25OZXh0UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICs9IDE7XG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcbiAgICB9LFxuXG4gICAgb25QcmV2UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNQcmV2QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlIC09IDE7XG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcbiAgICB9LFxuXG4gICAgb25TZWFyY2hFbXBsb3llZShzZWFyY2gsIGxvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoRW1wbG95ZWUoc2VhcmNoKTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaEVtcGxveWVlOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBzZWFyY2g7XG5cbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xuICAgIH0sIDEwMDApLFxuXG4gICAgbG9hZFBheXJvbGxQZXJpb2RzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICBwYWdlOiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UsXG4gICAgICAgIHNlYXJjaDogdGhpcy5wYXlyb2xsUGVyaW9kc1NlYXJjaGVkLFxuICAgICAgfVxuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvcGF5cm9sbC1wZXJpb2RzXCIsIHsgcGFyYW1zIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHMgPSBkYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvblBheXJvbGxQZXJpb2ROZXh0UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSArPSAxO1xuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgICB9LFxuXG4gICAgb25QYXlyb2xsUGVyaW9kUHJldlBhZ2UoKSB7XG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UgLT0gMTtcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XG4gICAgfSxcblxuICAgIG9uU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gsIGxvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2hQYXlyb2xsUGVyaW9kKHNlYXJjaCk7XG4gICAgfSxcblxuICAgIHBlcmZvcm1TZWFyY2hQYXlyb2xsUGVyaW9kOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCA9IHNlYXJjaDtcblxuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcbiAgICB9LCAxMDAwKSxcblxuICAgIGNyZWF0ZVBheXJvbGxQZXJpb2QoKSB7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmlkID0gJyc7XG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLmRhdGVfZnJvbSA9ICcnO1xuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5kYXRlX3RvID0gJyc7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3coJ3BheXJvbGwtcGVyaW9kLW1vZGFsJyk7XG4gICAgfSxcblxuICAgIG9uQ29udGV4dERhdGUoY3R4KSB7XG4gICAgICBpZiAoY3R4LnNlbGVjdGVkWU1EKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGUgPSBcIlwiO1xuICAgIH0sXG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVPdmVydGltZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVPdmVydGltZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBoYXNFbXBsb3llZXNOZXh0UGFnZSgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgIT09IHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2VcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGhhc0VtcGxveWVlc1ByZXZQYWdlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgPiAxO1xuICAgIH0sXG5cbiAgICBoYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICE9PSB0aGlzLnBheXJvbGxQZXJpb2RzTGFzdFBhZ2VcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlID4gMTtcbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInBheXJvbGwtcGVyaW9kLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgUGF5cm9sbCBQZXJpb2QnIDogJ0FkZCBQYXlyb2xsIFBlcmlvZCd9fTwvaDU+XG4gICAgICA8Yi1idXR0b25cbiAgICAgICAgcGlsbFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJtb2RhbENsb3NlKClcIlxuICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgIDwvYi1idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLWZvcm0+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJpbnB1dC1ncm91cC0xXCIgbGFiZWw9XCJEYXRlIEZyb21cIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGF0ZS1mcm9tXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVGcm9tXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIGRhdGUgc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kYXRlX2Zyb21cIlxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRhdGUtZnJvbVwiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlRnJvbVwiXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5kYXRlX2Zyb21cIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLmRhdGVfZnJvbVswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtMlwiIGxhYmVsPVwiRGF0ZSBUb1wiIGxhYmVsLWZvcj1cImlucHV0LTJcIj5cbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlLXRvXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRhdGVUb1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJObyBkYXRlIHNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGF0ZV90b1wiXG4gICAgICAgICAgICAgICAgYnV0dG9uLW9ubHlcbiAgICAgICAgICAgICAgICByaWdodFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cImVuLVVTXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZGF0ZS10b1wiXG4gICAgICAgICAgICAgICAgQGNvbnRleHQ9XCJvbkNvbnRleHREYXRlVG9cIlxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZGF0ZV90b1wiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZGF0ZV90b1swXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgPC9iLWZvcm0+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbD5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdi1pZj1cIiFpc1NlbGZcIlxuICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9wYXlyb2xsLXBlcmlvZHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1sZWZ0IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbXQtMlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTUFOQUdFIFBBWVJPTEwgUEVSSU9EXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBDQU5DRUxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IHtcbiAgICBwYXlyb2xsUGVyaW9kRm9ybTogT2JqZWN0LFxuICAgIGlzU2VsZjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbFBlcmlvZEZvcm0sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgZGF0ZUZyb206IFwiXCIsXG4gICAgICBkYXRlVG86IFwiXCJcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwicGF5cm9sbFBlcmlvZFwiLCBbXCJjcmVhdGVQYXlyb2xsUGVyaW9kXCIsIFwidXBkYXRlUGF5cm9sbFBlcmlvZFwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcInBheXJvbGwtcGVyaW9kLW1vZGFsXCIpO1xuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcblxuICAgIH0sXG5cbiAgICBoYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfZnJvbSl9IC0gJHt0aGlzLmZvcm1hdERhdGUodGhpcy5mb3JtLmRhdGVfdG8pfSBoYXMgYmVlbiBjcmVhdGVkIGFzIG5ldyBQYXlyb2xsIHBlcmlvZGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkUGF5cm9sbFBlcmlvZHNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVVcGRhdGVQYXlyb2xsUGVyaW9kKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0XHRkYXRlX2Zyb206IHRoaXMuZm9ybS5kYXRlX2Zyb20sXG5cdFx0XHRcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIFVQREFURURcIixcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBQYXlyb2xsIFBlcmlvZCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQYXlyb2xsUGVyaW9kc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgIH0sXG5cbiAgICBvbkNvbnRleHREYXRlRnJvbShjdHgpIHtcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVGcm9tID0gXCJcIjtcbiAgICB9LFxuXG4gICAgb25Db250ZXh0RGF0ZVRvKGN0eCkge1xuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xuICAgICAgICB0aGlzLmRhdGVUbyA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGVUbyA9IFwiXCI7XG4gICAgfVxuICBcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYnRuLWNlLXN1Ym1pdCB7XG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5idG4tY2UtY2FuY2VsIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWNlLXRpdGxlIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJPdmVydGltZVwiKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlciBweS0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGVPdmVydGltZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwicGx1c1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXdcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaW5saW5lOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgU2hvd1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIG1yLXNtLTIgbWItc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zaG93RW50cmllc09wdCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBlcl9wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgRW50cmllc1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbnB1dC1ncm91cC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zZWFyY2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBoZXJlLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItb3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzaG93OiBfdm0uaXNPdmVybGF5LCByb3VuZGVkOiBcInNtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctZW1wdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3k6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnQtcGFnZVwiOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTQgbWItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcC01IHRleHQtbXV0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChlbXBsb3llZV9uYW1lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5lbXBsb3llZS5mdWxsX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChwZXJpb2QpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtYXREYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbS5wYXlyb2xsX3BlcmlvZC5kYXRlX2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLnBheXJvbGxfcGVyaW9kLmRhdGVfdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwob3RfZGF0ZSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybWF0RGF0ZShkYXRhLml0ZW0ub3RfZGF0ZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChob3VycylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoZGF0YS5pdGVtLmhvdXJzX2Zyb20pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXRUaW1lKGRhdGEuaXRlbS5ob3Vyc190bykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdE92ZXJ0aW1lKGRhdGEuaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEVESVRcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlT3ZlcnRpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIGBTaG93aW5nICR7X3ZtLnNob3dpbmcuZnJvbX0gdG8gJHtfdm0uc2hvd2luZy50b30gb2YgJHtfdm0uc2hvd2luZy50b3RhbH0gZW50cmllc2BcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidG90YWwtcm93c1wiOiBfdm0udGFibGVUb3RhbFJvd3MsXG4gICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50X3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJPdmVydGltZU1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgb3ZlcnRpbWVGb3JtOiBfdm0ub3ZlcnRpbWVGb3JtIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbG9hZE92ZXJ0aW1lczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkT3ZlcnRpbWVzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJPdmVydGltZURlbGV0ZU1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgb3ZlcnRpbWVGb3JtOiBfdm0ub3ZlcnRpbWVGb3JtIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbG9hZE92ZXJ0aW1lczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkT3ZlcnRpbWVzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwib3ZlcnRpbWUtZGVsZXRlLW1vZGFsXCIsXG4gICAgICBcImhpZGUtaGVhZGVyXCI6IFwiXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBjZW50ZXJlZDogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkRcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7X3ZtLmZvcm0uZW1wLmZ1bGxfbmFtZX0gZnJvbSBPdmVydGltZSByZWNvcmRzP2BcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBOT1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBZRVNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwib3ZlcnRpbWUtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJFZGl0IE92ZXJ0aW1lXCIgOiBcIkFkZCBPdmVydGltZVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWUtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImVtcGxveWVlLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiZnVsbF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoRW1wbG95ZWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc0VtcGxveWVlc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUHJldkJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblByZXZQYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNFbXBsb3llZXNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc05leHRCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25OZXh0UGFnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTmV4dEJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1wXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5lbXBfaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbXBfaWRbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbnB1dC1ncm91cC00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC00XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwZXJpb2RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcImRhdGVfdG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5wYXlyb2xsUGVyaW9kcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzogX3ZtLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWR1Y2U6IChwKSA9PiBwLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBzZWFyY2g6IF92bS5vblNlYXJjaFBheXJvbGxQZXJpb2QgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWItMiB2LXNlbGVjdC1vcHRpb24tcGFkZGluZ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlUGF5cm9sbFBlcmlvZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIE5ldyBQYXlyb2xsIFBlcmlvZFxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwic2VsZWN0ZWQtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoeyBkYXRlX3RvLCBkYXRlX2Zyb20gfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7X3ZtLmZvcm1hdERhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZV9mcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtfdm0uZm9ybWF0RGF0ZShkYXRlX3RvKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7IGRhdGVfdG8sIGRhdGVfZnJvbSB9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtfdm0uZm9ybWF0RGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlX2Zyb21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0gLSAke192bS5mb3JtYXREYXRlKGRhdGVfdG8pfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBfdm0ub25QYXlyb2xsUGVyaW9kUHJldlBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNQYXlyb2xsUGVyaW9kc05leHRQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJsaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9jazogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucGVyaW9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGVyaW9kXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucGVyaW9kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5wZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5wZXJpb2RbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3ZlcnRpbWUgRGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJObyBkYXRlIHNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwLWFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbi1vbmx5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IFwiZW4tVVNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNvbnRleHQ6IF92bS5vbkNvbnRleHREYXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ub3RfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJvdF9kYXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm90X2RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5vdF9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMub3RfZGF0ZVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSG91cnM6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJmcm9tXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tdGltZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvY2FsZTogXCJlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhvdXJzX2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhvdXJzX2Zyb21cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhvdXJzX2Zyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuaG91cnNfZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmhvdXJzX2Zyb21bMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJ0b1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXRpbWVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2NhbGU6IFwiZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5ob3Vyc190byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiaG91cnNfdG9cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhvdXJzX3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmhvdXJzX3RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuaG91cnNfdG9bMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4tb3V0bGluZS1icm93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm1vZGFsQ2xvc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgQ0FOQ0VMXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgXCJtaW4td2lkdGhcIjogXCI4MHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBpbGw6IFwiXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU3VibWl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm0uaWQgPyBcIlNBVkUgQ0hBTkdFU1wiIDogXCJTQVZFXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiUGF5cm9sbFBlcmlvZHNNb2RhbFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcGF5cm9sbFBlcmlvZEZvcm06IF92bS5wYXlyb2xsUGVyaW9kRm9ybSxcbiAgICAgICAgICAgICAgICBpc1NlbGY6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGxvYWRQYXlyb2xsUGVyaW9kczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkUGF5cm9sbFBlcmlvZHMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uaWQgPyBcIkVkaXQgUGF5cm9sbCBQZXJpb2RcIiA6IFwiQWRkIFBheXJvbGwgUGVyaW9kXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgRnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwiaW5wdXQtMVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRhdGUtZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vIGRhdGUgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVGcm9tLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZUZyb20gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZUZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXAtYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1kYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkYXRlLWZyb21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjb250ZXh0OiBfdm0ub25Db250ZXh0RGF0ZUZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kYXRlX2Zyb20sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGF0ZV9mcm9tXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRhdGVfZnJvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmRhdGVfZnJvbVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmRhdGVfZnJvbVswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlucHV0LWdyb3VwLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRlIFRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0yXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS10b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vIGRhdGUgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVUbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVUbyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlVG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXAtYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1kYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkYXRlLXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY29udGV4dDogX3ZtLm9uQ29udGV4dERhdGVUbyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRhdGVfdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZGF0ZV90b1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kYXRlX3RvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMuZGF0ZV90b1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmRhdGVfdG9bMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAhX3ZtLmlzU2VsZlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXQtbGVmdCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG10LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcGF5cm9sbC1wZXJpb2RzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIE1BTkFHRSBQQVlST0xMIFBFUklPRFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBDQU5DRUxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiU0FWRSBDSEFOR0VTXCIgOiBcIlNBVkVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3Qgc2hvd0VudHJpZXNPcHQgPSBbXG4gICAgeyB2YWx1ZTogMTAsIHRleHQ6IFwiMTBcIiB9LFxuICAgIHsgdmFsdWU6IDMwLCB0ZXh0OiBcIjMwXCIgfSxcbiAgICB7IHZhbHVlOiA1MCwgdGV4dDogXCI1MFwiIH0sXG4gICAgeyB2YWx1ZTogMTAwLCB0ZXh0OiBcIjEwMFwiIH0sXG5dXG5cblxuZXhwb3J0IHtcbiAgICBzaG93RW50cmllc09wdCxcbn0iLCJjbGFzcyBFcnJvcnMge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEVycm9ycyBpbnN0YW5jZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGVycm9ycyBleGlzdHMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqL1xuICBoYXMoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB3ZSBoYXZlIGFueSBlcnJvcnMuXG4gICAqL1xuICBhbnkoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSBlcnJvciBtZXNzYWdlIGZvciBhIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGdldChmaWVsZCkge1xuICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZCB0aGUgbmV3IGVycm9ycy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgcmVjb3JkKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG9uZSBvciBhbGwgZXJyb3IgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBmaWVsZFxuICAgKi9cbiAgY2xlYXIoZmllbGQpIHtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGVycm9ycy5cbiAgICovXG4gIGxpc3QoKSB7XG4gICAgbGV0IGl0ZW1zID0gW11cbiAgICBsZXQgZXJyb3JBcnJheSA9IE9iamVjdC52YWx1ZXModGhpcy5lcnJvcnMpID8/IFtdXG4gICAgZXJyb3JBcnJheS5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgIGl0ZW1zLnB1c2goZXJyb3JbMF0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuIiwiaW1wb3J0IEVycm9ycyBmcm9tIFwiLi9lcnJvcnMuanNcIjtcblxuY2xhc3MgRm9ybSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGE7XG5cbiAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9ycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGFsbCByZWxldmFudCBkYXRhIGZvciB0aGUgZm9ybS5cbiAgICovXG4gIGRhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcblxuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IFwiXCI7XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcG9zdCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwb3N0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBVVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcHV0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInB1dFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQQVRDSCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcGF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicGF0Y2hcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBkZWxldGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwiZGVsZXRlXCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IHRoZSBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcblxuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAvLyB0ZW1wb3JhcnlcbiAgICAvLyB0aGlzLnJlc2V0KCk7XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIGZhaWxlZCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICovXG4gIG9uRmFpbChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKTtcbiAgfVxuXG5cbiAgaXNEYXRhRW1wdHkoKSB7XG4gICAgbGV0IGtleSA9IGZhbHNlO1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGtleSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGlzRGVmYXVsdERhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG5cbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSgpKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZCkge1xuICAgICAgaWYgKHZhbCAmJiB2YWwgIT09ICdBZGQnKSB7XG4gICAgICAgIGtleSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIHN0cmluZ0xvd2VyQ2FzZShzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgfSxcblxuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIsIGxvd2VyID0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAobG93ZXIgPyBzdHIudG9Mb3dlckNhc2UoKSA6IHN0cikucmVwbGFjZSgvKD86XnxcXHN8W1wiJyhbe10pK1xcUy9nLCBtYXRjaCA9PiBtYXRjaC50b1VwcGVyQ2FzZSgpKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0QW1vdW50KGFtb3VudCkge1xuICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICByZXR1cm4gYW1vdW50LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG5cbiAgICBlbXB0eVN0cmluZyhjaGFyYWMgPSAnLScsIGxlbmd0aCA9IDQpIHtcbiAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgc3RyICs9IGNoYXJhY1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9LFxuXG4gICAgaW5BcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gaGF5c3RhY2subGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgd2hvbGVOdW1iZXJGb3JtYXQoYW1vdW50LCBkZWNpbWFQbGFjZSkge1xuICAgICAgdmFyIGFtb3VudE5vdyA9IDBcbiAgICAgIGlmICgoYW1vdW50IC0gTWF0aC5mbG9vcihhbW91bnQpKSAhPT0gMCkge1xuICAgICAgICBhbW91bnROb3cgPSBNYXRoLnJvdW5kKGFtb3VudCwgZGVjaW1hUGxhY2UpO1xuICAgICAgICBpZiAoYW1vdW50Tm93ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGFtb3VudC5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIHJldHVybiBhbW91bnROb3cudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1hX2NvbmNhdChrZXkgPSAnbmFtZScsIGl0ZW1zKSB7XG4gICAgICBsZXQgc2V0ID0gJyc7XG4gICAgICBsZXQgaSA9IDE7XG4gICAgICBpdGVtcy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgIHNldCArPSBlbGVba2V5XTtcbiAgICAgICAgaWYgKGkgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sXG5cbiAgICBzaG93aW5nX2xhYmVsKGZyb20sIHRvLCB0b3RhbCkge1xuICAgICAgbGV0IGYgPSB0aGlzLnRvX3N0cm9uZyhmcm9tKVxuICAgICAgbGV0IHQgPSB0aGlzLnRvX3N0cm9uZyh0bylcbiAgICAgIGxldCB0b3QgPSB0aGlzLnRvX3N0cm9uZyh0b3RhbClcbiAgICAgIHJldHVybiBgU2hvd2luZyAke2Z9IHRvICR7dH0gb2YgJHt0b3R9IHJlc3VsdHNgO1xuICAgIH0sXG5cbiAgICB0b19zdHJvbmcoc3RyKSB7XG4gICAgICByZXR1cm4gYDxzdHJvbmc+JHtzdHJ9PC9zdHJvbmc+YDtcbiAgICB9XG4gIH0sXG59O1xuXG4iLCJpbXBvcnQgdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFt0ZXh0XSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1ha2VUb2FzdCh2YXJpYW50ID0gbnVsbCwgdGl0bGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ2VG9hc3QudG9hc3QobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9Db25maXJtKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAkLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBDb25maXJtIScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgZGF0YT8nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DbGFzczogJ2J0bi1yZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAneWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdjYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVDb25maXJtKHRpdGxlID0gJ0NPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEJywgbW9kdWxlTmFtZSA9IFwiXCIpIHtcblxuICAgICAgICAgICAgdGhpcy5ib3hUd28gPSAnJ1xuICAgICAgICAgICAgdGhpcy4kYnZNb2RhbC5tc2dCb3hDb25maXJtKCdQbGVhc2UgY29uZmlybSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSBldmVyeXRoaW5nLicsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBDb25maXJtJyxcbiAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxuICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgb2tUaXRsZTogJ1lFUycsXG4gICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxuICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveFR3byA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIFN3YWxcbiAgICAgICAgICAgIC8vICAgICAgICAgLmZpcmUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgZGF0YSBmb3JtICR7bW9kdWxlTmFtZX0gcmVjb3Jkcz9gLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdCkpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICB9LFxuXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK2RBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwib3ZlcnRpbWUtbW9kYWxcXFwiXFxuICAgIGhpZGUtZm9vdGVyXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIGNvbnRlbnQtY2xhc3M9XFxcImJvcmRlci10b3AgYmctY3JlYW1cXFwiXFxuICA+XFxuICAgIDx0ZW1wbGF0ZSAjbW9kYWwtaGVhZGVyPlxcbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cXG4gICAgICBcXG4gICAgICA8aDUgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcXFwiPnt7IGZvcm0uaWQgPyAnRWRpdCBPdmVydGltZScgOiAnQWRkIE92ZXJ0aW1lJ319PC9oNT5cXG4gICAgICA8Yi1idXR0b25cXG4gICAgICAgIHBpbGxcXG4gICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcXG4gICAgICAgIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgIDwvYi1idXR0b24+XFxuICAgIDwvdGVtcGxhdGU+XFxuXFxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cXG4gICAgICA8Yi1mb3JtPlxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiZW1wbG95ZWUtbmFtZVxcXCIgbGFiZWw9XFxcIkVtcGxveWVlIE5hbWVcXFwiIGxhYmVsLWZvcj1cXFwiZW1wbG95ZWUtbmFtZVxcXCI+XFxuICAgICAgICAgIDx2LXNlbGVjdFxcbiAgICAgICAgICAgIG5hbWU9XFxcImVtcGxveWVlc1xcXCJcXG4gICAgICAgICAgICBsYWJlbD1cXFwiZnVsbF9uYW1lXFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZW1wXFxcIlxcbiAgICAgICAgICAgIDpvcHRpb25zPVxcXCJlbXBsb3llZXNcXFwiXFxuICAgICAgICAgICAgOmZpbHRlcmFibGU9XFxcImZhbHNlXFxcIlxcbiAgICAgICAgICAgIDpsb2FkaW5nPVxcXCJpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaEVtcGxveWVlXFxcIlxcbiAgICAgICAgICAgIGlkPVxcXCJlbXBsb3llZXNcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxcbiAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJtdC0yIG1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cXFwibGlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCIhaGFzRW1wbG95ZWVzUHJldlBhZ2UgfHwgaXNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblByZXZQYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc0VtcGxveWVlc05leHRQYWdlIHx8IGlzTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcImxpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uTmV4dFBhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzTmV4dEJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XFxcIlNtYWxsIFNwaW5uZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5OZXh0PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgIDwvdi1zZWxlY3Q+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5lbXBfaWRcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmVtcF9pZFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJpbnB1dC1ncm91cC00XFxcIiBsYWJlbD1cXFwiUGVyaW9kXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTRcXFwiPlxcbiAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICBuYW1lPVxcXCJwZXJpb2RcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcImRhdGVfdG9cXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5wZXJpb2RcXFwiXFxuICAgICAgICAgICAgOm9wdGlvbnM9XFxcInBheXJvbGxQZXJpb2RzXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICA6cmVkdWNlPVxcXCIocCkgPT4gcC5pZFxcXCJcXG4gICAgICAgICAgICBAc2VhcmNoPVxcXCJvblNlYXJjaFBheXJvbGxQZXJpb2RcXFwiXFxuICAgICAgICAgICAgaWQ9XFxcInBlcmlvZFxcXCJcXG4gICAgICAgICAgPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1oZWFkZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm1iLTIgdi1zZWxlY3Qtb3B0aW9uLXBhZGRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICA8Yi1saW5rIGhyZWY9XFxcIiNcXFwiIEBjbGljaz1cXFwiY3JlYXRlUGF5cm9sbFBlcmlvZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXBsdXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgTmV3IFBheXJvbGwgUGVyaW9kXFxuICAgICAgICAgICAgICAgIDwvYi1saW5rPlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjc2VsZWN0ZWQtb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjb3B0aW9uPVxcXCJ7IGRhdGVfdG8sIGRhdGVfZnJvbSB9XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICB7eyBgJHtmb3JtYXREYXRlKGRhdGVfZnJvbSl9IC0gJHtmb3JtYXREYXRlKGRhdGVfdG8pfWAgfX1cXG4gICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcblxcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjbGlzdC1mb290ZXI+XFxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcIm10LTIgbWItMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiFoYXNQYXlyb2xsUGVyaW9kc1ByZXZQYWdlIHx8IGlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2RQcmV2UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzUGF5cm9sbFBlcmlvZHNQcmV2QnV0dG9uTG9hZGluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzbWFsbFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+UHJldjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWRcXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc1BheXJvbGxQZXJpb2RzTmV4dFBhZ2UgfHwgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvblBheXJvbGxQZXJpb2ROZXh0UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMucGVyaW9kXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5wZXJpb2RbMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiZGF0ZVxcXCIgbGFiZWw9XFxcIk92ZXJ0aW1lIERhdGVcXFwiIGxhYmVsLWZvcj1cXFwiZGF0ZVxcXCI+XFxuICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcXG4gICAgICAgICAgICAgIGlkPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZGF0ZVxcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTm8gZGF0ZSBzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgICAgIDxiLWZvcm0tZGF0ZXBpY2tlclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLm90X2RhdGVcXFwiXFxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XFxuICAgICAgICAgICAgICAgIHJpZ2h0XFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlXFxcIlxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWRhdGVwaWNrZXI+XFxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMub3RfZGF0ZVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMub3RfZGF0ZVswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuXFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJob3Vyc1xcXCIgbGFiZWw9XFxcIkhvdXJzOlxcXCIgbGFiZWwtZm9yPVxcXCJob3Vyc1xcXCI+XFxuICAgICAgICAgIDxiLXJvdz5cXG4gICAgICAgICAgICA8Yi1jb2w+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkLWZsZXggZmxleC1yb3cgYWxpZ24taXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJtci0yXFxcIj5mcm9tPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGItZm9ybS10aW1lcGlja2VyIHYtbW9kZWw9XFxcImZvcm0uaG91cnNfZnJvbVxcXCIgbG9jYWxlPVxcXCJlblxcXCI+PC9iLWZvcm0tdGltZXBpY2tlcj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmhvdXJzX2Zyb21cXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmhvdXJzX2Zyb21bMF0gfX08L2Rpdj5cXG4gICAgICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgICAgIDxiLWNvbD5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcIm1yLTJcXFwiPnRvPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGItZm9ybS10aW1lcGlja2VyIHYtbW9kZWw9XFxcImZvcm0uaG91cnNfdG9cXFwiIGxvY2FsZT1cXFwiZW5cXFwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5ob3Vyc190b1xcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuaG91cnNfdG9bMF0gfX08L2Rpdj5cXG4gICAgICAgICAgICA8L2ItY29sPlxcbiAgICAgICAgICA8L2Itcm93PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuICAgICAgICBcXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgICAgPFBheXJvbGxQZXJpb2RzTW9kYWwgOnBheXJvbGxQZXJpb2RGb3JtPVxcXCJwYXlyb2xsUGVyaW9kRm9ybVxcXCIgQGxvYWRQYXlyb2xsUGVyaW9kcz1cXFwibG9hZFBheXJvbGxQZXJpb2RzKClcXFwiIDppc1NlbGY9XFxcImZhbHNlXFxcIj48L1BheXJvbGxQZXJpb2RzTW9kYWw+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgYXhpb3MgZnJvbSBcXFwiYXhpb3NcXFwiO1xcbmltcG9ydCB0b2FzdCBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXFxcIjtcXG5pbXBvcnQgUGF5cm9sbFBlcmlvZHNNb2RhbCBmcm9tIFxcXCIuLi8uLi9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVxcXCI7XFxuaW1wb3J0IEZvcm0gZnJvbSBcXFwiLi4vLi4vLi4vLi4vaGVscGVycy9mb3JtLmpzXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaXhpbnM6IFt0b2FzdF0sXFxuXFxuICBwcm9wczogW1xcXCJvdmVydGltZUZvcm1cXFwiXSxcXG5cXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgUGF5cm9sbFBlcmlvZHNNb2RhbFxcbiAgfSxcXG5cXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXFxuICAgICAgZm9ybTogdGhpcy5vdmVydGltZUZvcm0sXFxuICAgICAgc2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIGRhdGU6IFxcXCJcXFwiLFxcbiAgICAgIGVycm9yczoge30sXFxuICAgICAgaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGlzTmV4dEJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGlzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGVtcGxveWVlc0N1cnJlbnRQYWdlOiAxLFxcbiAgICAgIGVtcGxveWVlc1BlclBhZ2U6IDEwLFxcbiAgICAgIGVtcGxveWVlc0xhc3RQYWdlOiAwLFxcbiAgICAgIGVtcGxveWVlczogW10sXFxuXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcXG4gICAgICBpc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2U6IDEsXFxuICAgICAgcGF5cm9sbFBlcmlvZHNQZXJQYWdlOiAxMCxcXG4gICAgICBwYXlyb2xsUGVyaW9kc0xhc3RQYWdlOiAwLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzU2VhcmNoZWQ6IFxcXCJcXFwiLFxcbiAgICAgIHBheXJvbGxQZXJpb2RzOiBbXSxcXG5cXG4gICAgICBwYXlyb2xsUGVyaW9kRm9ybTogbmV3IEZvcm0oe1xcbiAgICAgICAgaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgZGF0ZV9mcm9tOiBcXFwiXFxcIixcXG4gICAgICAgIGRhdGVfdG86IFxcXCJcXFwiLFxcbiAgICAgIH0pLFxcbiAgICB9O1xcbiAgfSxcXG5cXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwib3ZlcnRpbWVcXFwiLCBbXFxcImNyZWF0ZU92ZXJ0aW1lXFxcIiwgXFxcInVwZGF0ZU92ZXJ0aW1lXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJvdmVydGltZS1tb2RhbFxcXCIpO1xcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XFxuXFxuICAgIH0sXFxuXFxuICAgIGxvYWRFbXBsb3llZXMoKSB7XFxuICAgICAgbGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIHBlcl9wYWdlOiAxMCxcXG4gICAgICAgIHBhZ2U6IHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UsXFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXFxuICAgICAgfVxcbiAgICAgIGF4aW9zXFxuICAgICAgICAuZ2V0KFxcXCIvYXBpL2VtcGxveWVlc1xcXCIsIHsgcGFyYW1zIH0pXFxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLmVtcGxveWVlc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgIHRoaXMuaXNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBoYW5kbGVDcmVhdGVPdmVydGltZSgpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG5cXHRcXHRcXHRcXHRlbXBfaWQ6IHRoaXMuZm9ybS5lbXAuaWQsXFxuICAgICAgICBwZXJpb2Q6IHRoaXMuZm9ybS5wZXJpb2QsXFxuICAgICAgICBvdF9kYXRlOiB0aGlzLmZvcm0ub3RfZGF0ZSxcXG4gICAgICAgIGhvdXJzX2Zyb206IHRoaXMuZm9ybS5ob3Vyc19mcm9tLFxcbiAgICAgICAgaG91cnNfdG86IHRoaXMuZm9ybS5ob3Vyc190b1xcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLmNyZWF0ZU92ZXJ0aW1lKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJzdWNjZXNzXFxcIixcXG4gICAgICAgICAgICBcXFwiTkVXIFJFQ09SRCBDUkVBVEVEXFxcIixcXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBPdmVydGltZWBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZE92ZXJ0aW1lc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlT3ZlcnRpbWUoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdGVtcF9pZDogdGhpcy5mb3JtLmVtcC5pZCxcXG4gICAgICAgIHBlcmlvZDogdGhpcy5mb3JtLnBlcmlvZCxcXG4gICAgICAgIG90X2RhdGU6IHRoaXMuZm9ybS5vdF9kYXRlLFxcbiAgICAgICAgaG91cnNfZnJvbTogdGhpcy5mb3JtLmhvdXJzX2Zyb20sXFxuICAgICAgICBob3Vyc190bzogdGhpcy5mb3JtLmhvdXJzX3RvXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMudXBkYXRlT3ZlcnRpbWUocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcIndhcm5pbmdcXFwiLFxcbiAgICAgICAgICAgIFxcXCJSRUNPUkQgVVBEQVRFRFxcXCIsXFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIE92ZXJ0aW1lIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWRPdmVydGltZXNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uTmV4dFBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc05leHRCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICs9IDE7XFxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uUHJldlBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc1ByZXZCdXR0b25Mb2FkaW5nID0gdHJ1ZTtcXG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlIC09IDE7XFxuICAgICAgdGhpcy5sb2FkRW1wbG95ZWVzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uU2VhcmNoRW1wbG95ZWUoc2VhcmNoLCBsb2FkaW5nKSB7XFxuICAgICAgdGhpcy5pc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoRW1wbG95ZWUoc2VhcmNoKTtcXG4gICAgfSxcXG5cXG4gICAgcGVyZm9ybVNlYXJjaEVtcGxveWVlOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcXG4gICAgICB0aGlzLnNlYXJjaGVkID0gc2VhcmNoO1xcblxcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LCAxMDAwKSxcXG5cXG4gICAgbG9hZFBheXJvbGxQZXJpb2RzKCkge1xcbiAgICAgIGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBwZXJfcGFnZTogMTAsXFxuICAgICAgICBwYWdlOiB0aGlzLnBheXJvbGxQZXJpb2RzQ3VycmVudFBhZ2UsXFxuICAgICAgICBzZWFyY2g6IHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCxcXG4gICAgICB9XFxuICAgICAgYXhpb3NcXG4gICAgICAgIC5nZXQoXFxcIi9hcGkvcGF5cm9sbC1wZXJpb2RzXFxcIiwgeyBwYXJhbXMgfSlcXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kcyA9IGRhdGEuZGF0YTtcXG4gICAgICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBvblBheXJvbGxQZXJpb2ROZXh0UGFnZSgpIHtcXG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlICs9IDE7XFxuICAgICAgdGhpcy5sb2FkUGF5cm9sbFBlcmlvZHMoKTtcXG4gICAgfSxcXG5cXG4gICAgb25QYXlyb2xsUGVyaW9kUHJldlBhZ2UoKSB7XFxuICAgICAgdGhpcy5pc1BheXJvbGxQZXJpb2RzUHJldkJ1dHRvbkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSAtPSAxO1xcbiAgICAgIHRoaXMubG9hZFBheXJvbGxQZXJpb2RzKCk7XFxuICAgIH0sXFxuXFxuICAgIG9uU2VhcmNoUGF5cm9sbFBlcmlvZChzZWFyY2gsIGxvYWRpbmcpIHtcXG4gICAgICB0aGlzLmlzUGF5cm9sbFBlcmlvZHNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Qoc2VhcmNoKTtcXG4gICAgfSxcXG5cXG4gICAgcGVyZm9ybVNlYXJjaFBheXJvbGxQZXJpb2Q6IF8uZGVib3VuY2UoZnVuY3Rpb24gKHNlYXJjaCkge1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNTZWFyY2hlZCA9IHNlYXJjaDtcXG5cXG4gICAgICB0aGlzLmxvYWRQYXlyb2xsUGVyaW9kcygpO1xcbiAgICB9LCAxMDAwKSxcXG5cXG4gICAgY3JlYXRlUGF5cm9sbFBlcmlvZCgpIHtcXG4gICAgICB0aGlzLnBheXJvbGxQZXJpb2RGb3JtLnJlc2V0KCk7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5pZCA9ICcnO1xcbiAgICAgIHRoaXMucGF5cm9sbFBlcmlvZEZvcm0uZGF0ZV9mcm9tID0gJyc7XFxuICAgICAgdGhpcy5wYXlyb2xsUGVyaW9kRm9ybS5kYXRlX3RvID0gJyc7XFxuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KCdwYXlyb2xsLXBlcmlvZC1tb2RhbCcpO1xcbiAgICB9LFxcblxcbiAgICBvbkNvbnRleHREYXRlKGN0eCkge1xcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcXG4gICAgICAgIHRoaXMuZGF0ZSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5kYXRlID0gXFxcIlxcXCI7XFxuICAgIH0sXFxuXFxuICAgIG9uU3VibWl0KCkge1xcbiAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlT3ZlcnRpbWUoKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVPdmVydGltZSgpO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XFxuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XFxuICAgIH0sXFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgaGFzRW1wbG95ZWVzTmV4dFBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIChcXG4gICAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgIT09IHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2VcXG4gICAgICApO1xcbiAgICB9LFxcblxcbiAgICBoYXNFbXBsb3llZXNQcmV2UGFnZSgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSA+IDE7XFxuICAgIH0sXFxuXFxuICAgIGhhc1BheXJvbGxQZXJpb2RzTmV4dFBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIChcXG4gICAgICAgIHRoaXMucGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSAhPT0gdGhpcy5wYXlyb2xsUGVyaW9kc0xhc3RQYWdlXFxuICAgICAgKTtcXG4gICAgfSxcXG5cXG4gICAgaGFzUGF5cm9sbFBlcmlvZHNQcmV2UGFnZSgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5wYXlyb2xsUGVyaW9kc0N1cnJlbnRQYWdlID4gMTtcXG4gICAgfSxcXG4gIH1cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wYXlyb2xsUGVyaW9kL21vZGFscy9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNk5BO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwicGF5cm9sbC1wZXJpb2QtbW9kYWxcXFwiXFxuICAgIGhpZGUtZm9vdGVyXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIGNvbnRlbnQtY2xhc3M9XFxcImJvcmRlci10b3AgYmctY3JlYW1cXFwiXFxuICA+XFxuICAgIDx0ZW1wbGF0ZSAjbW9kYWwtaGVhZGVyPlxcbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cXG4gICAgICBcXG4gICAgICA8aDUgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcXFwiPnt7IGZvcm0uaWQgPyAnRWRpdCBQYXlyb2xsIFBlcmlvZCcgOiAnQWRkIFBheXJvbGwgUGVyaW9kJ319PC9oNT5cXG4gICAgICA8Yi1idXR0b25cXG4gICAgICAgIHBpbGxcXG4gICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcXG4gICAgICAgIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgIDwvYi1idXR0b24+XFxuICAgIDwvdGVtcGxhdGU+XFxuXFxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cXG4gICAgICA8Yi1mb3JtPlxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwiaW5wdXQtZ3JvdXAtMVxcXCIgbGFiZWw9XFxcIkRhdGUgRnJvbVxcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0xXFxcIj5cXG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgaWQ9XFxcImRhdGUtZnJvbVxcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGVGcm9tXFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJObyBkYXRlIHNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZGF0ZV9mcm9tXFxcIlxcbiAgICAgICAgICAgICAgICBidXR0b24tb25seVxcbiAgICAgICAgICAgICAgICByaWdodFxcbiAgICAgICAgICAgICAgICBsb2NhbGU9XFxcImVuLVVTXFxcIlxcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkYXRlLWZyb21cXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlRnJvbVxcXCJcXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxcbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XFxuICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLmRhdGVfZnJvbVxcXCIgY2xhc3M9XFxcInRleHQtZGFuZ2VyXFxcIj57eyBlcnJvcnMuZGF0ZV9mcm9tWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTJcXFwiIGxhYmVsPVxcXCJEYXRlIFRvXFxcIiBsYWJlbC1mb3I9XFxcImlucHV0LTJcXFwiPlxcbiAgICAgICAgICA8Yi1pbnB1dC1ncm91cD5cXG4gICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICBpZD1cXFwiZGF0ZS10b1xcXCJcXG4gICAgICAgICAgICAgIHYtbW9kZWw9XFxcImRhdGVUb1xcXCJcXG4gICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiTm8gZGF0ZSBzZWxlY3RlZFxcXCJcXG4gICAgICAgICAgICAgIHJlYWRvbmx5XFxuICAgICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgICAgIDxiLWZvcm0tZGF0ZXBpY2tlclxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmRhdGVfdG9cXFwiXFxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XFxuICAgICAgICAgICAgICAgIHJpZ2h0XFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRhdGUtdG9cXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlVG9cXFwiXFxuICAgICAgICAgICAgICA+PC9iLWZvcm0tZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5kYXRlX3RvXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5kYXRlX3RvWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sPlxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIHYtaWY9XFxcIiFpc1NlbGZcXFwiXFxuICAgICAgICAgICAgaHJlZj1cXFwiL2FkbWluL3BheXJvbGwtcGVyaW9kc1xcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZmxvYXQtbGVmdCBmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG10LTJcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICBNQU5BR0UgUEFZUk9MTCBQRVJJT0RcXG4gICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICAgIDxiLWNvbCBjbGFzcz1cXFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcXFwiPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cXFwiIDpzdHlsZT1cXFwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cXFwiIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIj5cXG4gICAgICAgICAgICBDQU5DRUxcXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cXFwic21cXFwiIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJvblN1Ym1pdCgpXFxcIj5cXG4gICAgICAgICAgICB7eyBmb3JtLmlkID8gJ1NBVkUgQ0hBTkdFUycgOiAnU0FWRSd9fVxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9iLWNvbD5cXG4gICAgICA8L2Itcm93PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9iLW1vZGFsPlxcbjwvdGVtcGxhdGU+XFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcXFwidnVleFxcXCI7XFxuXFxuaW1wb3J0IHRvYXN0IGZyb20gXFxcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcXFwiO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIG1peGluczogW3RvYXN0XSxcXG5cXG4gIHByb3BzOiB7XFxuICAgIHBheXJvbGxQZXJpb2RGb3JtOiBPYmplY3QsXFxuICAgIGlzU2VsZjoge1xcbiAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgfSxcXG4gIH0sXFxuXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGZvcm06IHRoaXMucGF5cm9sbFBlcmlvZEZvcm0sXFxuICAgICAgZXJyb3JzOiB7fSxcXG4gICAgICBkYXRlRnJvbTogXFxcIlxcXCIsXFxuICAgICAgZGF0ZVRvOiBcXFwiXFxcIlxcbiAgICB9O1xcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwicGF5cm9sbFBlcmlvZFxcXCIsIFtcXFwiY3JlYXRlUGF5cm9sbFBlcmlvZFxcXCIsIFxcXCJ1cGRhdGVQYXlyb2xsUGVyaW9kXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJwYXlyb2xsLXBlcmlvZC1tb2RhbFxcXCIpO1xcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XFxuXFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZUNyZWF0ZVBheXJvbGxQZXJpb2QoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0ZGF0ZV9mcm9tOiB0aGlzLmZvcm0uZGF0ZV9mcm9tLFxcblxcdFxcdFxcdFxcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMuY3JlYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgXFxcIk5FVyBSRUNPUkQgQ1JFQVRFRFxcXCIsXFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXREYXRlKHRoaXMuZm9ybS5kYXRlX2Zyb20pfSAtICR7dGhpcy5mb3JtYXREYXRlKHRoaXMuZm9ybS5kYXRlX3RvKX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBuZXcgUGF5cm9sbCBwZXJpb2RgXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWRQYXlyb2xsUGVyaW9kc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlUGF5cm9sbFBlcmlvZCgpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIGlkOiB0aGlzLmZvcm0uaWQsXFxuXFx0XFx0XFx0XFx0ZGF0ZV9mcm9tOiB0aGlzLmZvcm0uZGF0ZV9mcm9tLFxcblxcdFxcdFxcdFxcdGRhdGVfdG86IHRoaXMuZm9ybS5kYXRlX3RvXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMudXBkYXRlUGF5cm9sbFBlcmlvZChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgXFxcIlJFQ09SRCBVUERBVEVEXFxcIixcXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgUGF5cm9sbCBQZXJpb2QgSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFBheXJvbGxQZXJpb2RzXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBvblN1Ym1pdCgpIHtcXG4gICAgICBpZiAodGhpcy5mb3JtLmlkKSB7XFxuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QoKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVQYXlyb2xsUGVyaW9kKCk7XFxuICAgICAgfVxcbiAgICB9LFxcblxcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcXG4gICAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgfSxcXG5cXG4gICAgb25Db250ZXh0RGF0ZUZyb20oY3R4KSB7XFxuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xcbiAgICAgICAgdGhpcy5kYXRlRnJvbSA9IHRoaXMubW9tZW50KGN0eC5zZWxlY3RlZFlNRCkuZm9ybWF0KCdERCBNTU1NIFlZWVknKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy5kYXRlRnJvbSA9IFxcXCJcXFwiO1xcbiAgICB9LFxcblxcbiAgICBvbkNvbnRleHREYXRlVG8oY3R4KSB7XFxuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xcbiAgICAgICAgdGhpcy5kYXRlVG8gPSB0aGlzLm1vbWVudChjdHguc2VsZWN0ZWRZTUQpLmZvcm1hdCgnREQgTU1NTSBZWVlZJyk7XFxuICAgICAgICByZXR1cm47XFxuICAgICAgfVxcblxcbiAgICAgIHRoaXMuZGF0ZVRvID0gXFxcIlxcXCI7XFxuICAgIH1cXG4gIFxcbiAgfSxcXG5cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL292ZXJ0aW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDljYmRlZTcmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ4M2ZlYjRjJmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGZkNDQ4NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGZkNDQ4NDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGZkNDQ4NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGZkNDQ4NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZmQ0NDg0NlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2RmZDQ0ODQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9jb21wb25lbnRzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vb3ZlcnRpbWVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YThmOGYwMDhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9vdmVydGltZURlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9vdmVydGltZURlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E4ZjhmMDA4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E4ZjhmMDA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E4ZjhmMDA4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9vdmVydGltZURlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOGY4ZjAwOFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E4ZjhmMDA4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9vdmVydGltZS9tb2RhbHMvb3ZlcnRpbWVEZWxldGVNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL292ZXJ0aW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5Y2JkZWU3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb3ZlcnRpbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vb3ZlcnRpbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9vdmVydGltZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5Y2JkZWU3Jmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDljYmRlZTcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDljYmRlZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDljYmRlZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL292ZXJ0aW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5Y2JkZWU3XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDljYmRlZTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL292ZXJ0aW1lL21vZGFscy9vdmVydGltZU1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDgzZmViNGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BheXJvbGxQZXJpb2RzTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDgzZmViNGMmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkODNmZWI0YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkODNmZWI0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkODNmZWI0YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDgzZmViNGNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkODNmZWI0YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcGF5cm9sbFBlcmlvZC9tb2RhbHMvcGF5cm9sbFBlcmlvZHNNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vdmVydGltZURlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3ZlcnRpbWVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vdmVydGltZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3ZlcnRpbWVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wYXlyb2xsUGVyaW9kc01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGF5cm9sbFBlcmlvZHNNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmZDQ0ODQ2XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL292ZXJ0aW1lRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4ZjhmMDA4XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL292ZXJ0aW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5Y2JkZWU3XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL292ZXJ0aW1lTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDljYmRlZTcmbGFuZz1jc3NcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXBBY3Rpb25zIiwibWFwR2V0dGVycyIsInNob3dFbnRyaWVzT3B0IiwiT3ZlcnRpbWVNb2RhbCIsIk92ZXJ0aW1lRGVsZXRlTW9kYWwiLCJGb3JtIiwiY29tcG9uZW50cyIsImRhdGEiLCJwZXJfcGFnZSIsImN1cnJlbnRfcGFnZSIsImlzTG9hZGluZyIsImZpbHRlciIsInNlYXJjaGVkIiwiaXNPdmVybGF5IiwidG90YWxSb3ciLCJzaG93aW5nIiwidG8iLCJmcm9tIiwidG90YWwiLCJ0YWJsZVRvdGFsUm93cyIsImZpZWxkcyIsImtleSIsImxhYmVsIiwidGhDbGFzcyIsInRkQ2xhc3MiLCJ0aFN0eWxlIiwid2lkdGgiLCJvdmVydGltZUZvcm0iLCJpZCIsImVtcCIsInBlcmlvZCIsIm90X2RhdGUiLCJob3Vyc19mcm9tIiwiaG91cnNfdG8iLCJtb2RhbElkIiwibWV0aG9kcyIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVPdmVydGltZSIsInJlc2V0IiwiJGJ2TW9kYWwiLCJzaG93IiwiZWRpdE92ZXJ0aW1lIiwiZW1wbG95ZWUiLCJwYXlyb2xsX3BlcmlvZCIsImRlbGV0ZU92ZXJ0aW1lIiwibG9hZE92ZXJ0aW1lcyIsIl90aGlzIiwicGFyYW1zIiwicGFnZSIsInNlYXJjaCIsImxvYWRJdGVtcyIsInRoZW4iLCJfIiwiaXRlbXMiLCJwZXJmb3JtU2VhcmNoIiwiZGVib3VuY2UiLCJxdWVyeSIsImZvcm1hdFRpbWUiLCJlbXBsb3llZVRpbWUiLCJfZW1wbG95ZWVUaW1lJHNwbGl0Iiwic3BsaXQiLCJfZW1wbG95ZWVUaW1lJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwiaG91cnMiLCJtaW51dGVzIiwidGltZSIsIkRhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJhbXBtIiwiZ2V0SG91cnMiLCJob3VyczEyIiwiY29uY2F0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJtb3VudGVkIiwiY29tcHV0ZWQiLCJ3YXRjaCIsImhhbmRsZXIiLCJ2YWx1ZSIsInRvYXN0IiwibWl4aW5zIiwicHJvcHMiLCJmb3JtIiwibW9kYWxDbG9zZSIsImRvbmUiLCJoaWRlIiwib25TdWJtaXQiLCJtYWtlVG9hc3QiLCJmdWxsX25hbWUiLCIkZW1pdCIsImVycm9yIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJheGlvcyIsIlBheXJvbGxQZXJpb2RzTW9kYWwiLCJpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZyIsImlzTmV4dEJ1dHRvbkxvYWRpbmciLCJpc1ByZXZCdXR0b25Mb2FkaW5nIiwiZW1wbG95ZWVzQ3VycmVudFBhZ2UiLCJlbXBsb3llZXNQZXJQYWdlIiwiZW1wbG95ZWVzTGFzdFBhZ2UiLCJlbXBsb3llZXMiLCJpc1BheXJvbGxQZXJpb2RzRHJvcGRvd25Mb2FkaW5nIiwiaXNQYXlyb2xsUGVyaW9kc05leHRCdXR0b25Mb2FkaW5nIiwiaXNQYXlyb2xsUGVyaW9kc1ByZXZCdXR0b25Mb2FkaW5nIiwicGF5cm9sbFBlcmlvZHNDdXJyZW50UGFnZSIsInBheXJvbGxQZXJpb2RzUGVyUGFnZSIsInBheXJvbGxQZXJpb2RzTGFzdFBhZ2UiLCJwYXlyb2xsUGVyaW9kc1NlYXJjaGVkIiwicGF5cm9sbFBlcmlvZHMiLCJwYXlyb2xsUGVyaW9kRm9ybSIsImRhdGVfZnJvbSIsImRhdGVfdG8iLCJsb2FkRW1wbG95ZWVzIiwibG9hZFBheXJvbGxQZXJpb2RzIiwiZ2V0IiwibGFzdF9wYWdlIiwiaGFuZGxlQ3JlYXRlT3ZlcnRpbWUiLCJfdGhpczIiLCJlbXBfaWQiLCJoYW5kbGVVcGRhdGVPdmVydGltZSIsIl90aGlzMyIsInVwZGF0ZU92ZXJ0aW1lIiwib25OZXh0UGFnZSIsIm9uUHJldlBhZ2UiLCJvblNlYXJjaEVtcGxveWVlIiwibG9hZGluZyIsInBlcmZvcm1TZWFyY2hFbXBsb3llZSIsIl90aGlzNCIsIm9uUGF5cm9sbFBlcmlvZE5leHRQYWdlIiwib25QYXlyb2xsUGVyaW9kUHJldlBhZ2UiLCJvblNlYXJjaFBheXJvbGxQZXJpb2QiLCJwZXJmb3JtU2VhcmNoUGF5cm9sbFBlcmlvZCIsImNyZWF0ZVBheXJvbGxQZXJpb2QiLCJvbkNvbnRleHREYXRlIiwiY3R4Iiwic2VsZWN0ZWRZTUQiLCJoYXNFbXBsb3llZXNOZXh0UGFnZSIsImhhc0VtcGxveWVlc1ByZXZQYWdlIiwiaGFzUGF5cm9sbFBlcmlvZHNOZXh0UGFnZSIsImhhc1BheXJvbGxQZXJpb2RzUHJldlBhZ2UiLCJPYmplY3QiLCJpc1NlbGYiLCJ0eXBlIiwiQm9vbGVhbiIsImRhdGVGcm9tIiwiZGF0ZVRvIiwiaGFuZGxlQ3JlYXRlUGF5cm9sbFBlcmlvZCIsImhhbmRsZVVwZGF0ZVBheXJvbGxQZXJpb2QiLCJ1cGRhdGVQYXlyb2xsUGVyaW9kIiwib25Db250ZXh0RGF0ZUZyb20iLCJvbkNvbnRleHREYXRlVG8iLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsImF0dHJzIiwidmFyaWFudCIsIm9uIiwiY2xpY2siLCJpY29uIiwiaW5saW5lIiwib3B0aW9ucyIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwicHJveHkiLCJwbGFjZWhvbGRlciIsInJvdW5kZWQiLCJob3ZlciIsInN0cmlwZWQiLCJidXN5IiwiX3MiLCJpdGVtIiwic2l6ZSIsIiRldmVudCIsImFsaWduIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsImNlbnRlcmVkIiwic3R5bGUiLCJwaWxsIiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwibW9kaWZpZXJzIiwiZmlsdGVyYWJsZSIsImJsb2NrIiwic3F1YXJlZCIsImRpc2FibGVkIiwic21hbGwiLCIkc2V0IiwiX2UiLCJyZWR1Y2UiLCJwIiwiaHJlZiIsIl9yZWYiLCJfcmVmMiIsInJlYWRvbmx5IiwicmlnaHQiLCJsb2NhbGUiLCJjb250ZXh0IiwidGV4dCIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJrZXlzIiwibGVuZ3RoIiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwiZm9yRWFjaCIsInB1c2giLCJvcmlnaW5hbERhdGEiLCJwcm9wZXJ0eSIsInBvc3QiLCJ1cmwiLCJzdWJtaXQiLCJwdXQiLCJwYXRjaCIsIl9kZWxldGUiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25TdWNjZXNzIiwib25GYWlsIiwiaXNEYXRhRW1wdHkiLCJ2YWwiLCJpbmQiLCJpc0RlZmF1bHREYXRhRW1wdHkiLCJzdHJpbmdMb3dlckNhc2UiLCJzdHIiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwibG93ZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdEFtb3VudCIsImFtb3VudCIsImVtcHR5U3RyaW5nIiwiY2hhcmFjIiwiaSIsImwiLCJpbkFycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJ3aG9sZU51bWJlckZvcm1hdCIsImRlY2ltYVBsYWNlIiwiYW1vdW50Tm93IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbW1hX2NvbmNhdCIsInNldCIsImVsZSIsInNob3dpbmdfbGFiZWwiLCJmIiwidG9fc3Ryb25nIiwidCIsInRvdCIsInRpdGxlIiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJhY3Rpb24iLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==