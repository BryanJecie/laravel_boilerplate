"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_dailyTimeRecord_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_dailyTimeRecordModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/dailyTimeRecordModal.vue */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue");
/* harmony import */ var _modals_dailyTimeRecordDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/dailyTimeRecordDeleteModal.vue */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue");
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
    DailyTimeRecordModal: _modals_dailyTimeRecordModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DailyTimeRecordDeleteModal: _modals_dailyTimeRecordDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        key: "time_in",
        label: "Time In"
      }, {
        key: "time_out",
        label: "Time Out"
      }, {
        key: "date",
        label: "Date"
      }, {
        key: "actions",
        label: "Actions",
        thClass: "text-center",
        tdClass: "text-center",
        thStyle: {
          width: "10%"
        }
      }],
      dailyTimeRecordForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        emp: "",
        time_in: "",
        time_out: "",
        dtr_date: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("dailyTimeRecord", ["loadItems"])), {}, {
    createDailyTimeRecord: function createDailyTimeRecord() {
      this.dailyTimeRecordForm.reset();
      this.dailyTimeRecordForm.emp = "";
      this.dailyTimeRecordForm.time_in = "";
      this.dailyTimeRecordForm.time_out = "";
      this.dailyTimeRecordForm.dtr_date = "";
      this.modalId = "daily-time-record-modal";
      this.$bvModal.show(this.modalId);
    },
    editDailyTimeRecord: function editDailyTimeRecord(data) {
      this.dailyTimeRecordForm.reset();
      this.dailyTimeRecordForm.id = data.id;
      this.dailyTimeRecordForm.emp = data.employee;
      this.dailyTimeRecordForm.time_in = data.time_in;
      this.dailyTimeRecordForm.time_out = data.time_out;
      this.dailyTimeRecordForm.dtr_date = data.dtr_date;
      this.modalId = "daily-time-record-modal";
      this.$bvModal.show(this.modalId);
    },
    deleteDailyTimeRecord: function deleteDailyTimeRecord(data) {
      this.dailyTimeRecordForm.reset();
      this.dailyTimeRecordForm.id = data.id;
      this.dailyTimeRecordForm.emp = data.employee;
      this.dailyTimeRecordForm.time_in = data.time_in;
      this.dailyTimeRecordForm.time_out = data.time_out;
      this.dailyTimeRecordForm.dtr_date = data.dtr_date;
      this.modalId = "daily-time-record-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadDailyTimeRecords: function loadDailyTimeRecords() {
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
      return this.moment(date).format("DD MMMM YYYY");
    }
  }),
  mounted: function mounted() {
    this.loadDailyTimeRecords();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("dailyTimeRecord", {
    items: "getDailyTimeRecords"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadDailyTimeRecords();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadDailyTimeRecords();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadDailyTimeRecords();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  props: ["dailyTimeRecordForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.dailyTimeRecordForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("dailyTimeRecord", ["deleteDailyTimeRecord"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("daily-time-record-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deleteDailyTimeRecord(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.emp.full_name, " has been removed from Daily Time records."));
        _this.$emit("loadDailyTimeRecords");
        _this.$bvModal.hide("daily-time-record-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ["dailyTimeRecordForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.dailyTimeRecordForm,
      searched: "",
      date: "",
      errors: {},
      isEmployeesDropdownLoading: false,
      isNextButtonLoading: false,
      isPrevButtonLoading: false,
      employeesCurrentPage: 1,
      employeesPerPage: 10,
      employeesLastPage: 0,
      employees: []
    };
  },
  mounted: function mounted() {
    this.loadEmployees();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("dailyTimeRecord", ["createDailyTimeRecord", "updateDailyTimeRecord"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("daily-time-record-modal");
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
    handleCreateDailyTimeRecord: function handleCreateDailyTimeRecord() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        emp_id: this.form.emp.id,
        time_in: this.form.time_in,
        time_out: this.form.time_out,
        dtr_date: this.form.dtr_date
      };
      this.createDailyTimeRecord(params).then(function (_) {
        _this2.makeToast("success", "NEW RECORD CREATED", "".concat(_this2.form.emp.full_name, " has been created as a new Daily Time Record"));
        _this2.$emit("loadDailyTimeRecords");
        _this2.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this2.errors = errors;
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    handleUpdateDailyTimeRecord: function handleUpdateDailyTimeRecord() {
      var _this3 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        emp_id: this.form.emp.id,
        time_in: this.form.time_in,
        time_out: this.form.time_out,
        dtr_date: this.form.dtr_date
      };
      this.updateDailyTimeRecord(params).then(function (_) {
        _this3.makeToast("success", "RECORD UPDATED", "This information for Daily Time Record ID: ".concat(_this3.form.id, " has been updated."));
        _this3.$emit("loadDailyTimeRecords");
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
    onContextDate: function onContextDate(ctx) {
      if (ctx.selectedYMD) {
        this.date = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');
        return;
      }
      this.date = "";
    },
    onSubmit: function onSubmit() {
      if (this.form.id) {
        this.handleUpdateDailyTimeRecord();
      } else {
        this.handleCreateDailyTimeRecord();
      }
    }
  }),
  computed: {
    hasEmployeesNextPage: function hasEmployeesNextPage() {
      return this.employeesCurrentPage !== this.employeesLastPage;
    },
    hasEmployeesPrevPage: function hasEmployeesPrevPage() {
      return this.employeesCurrentPage > 1;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea ***!
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
  }, [_vm._v("Daily Time Record")]), _vm._v(" "), _c("div", {
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
      click: _vm.createDailyTimeRecord
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
        return [data.item.employee ? _c("span", [_vm._v("\n                  " + _vm._s(data.item.employee.full_name) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(time_in)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatTime(data.item.time_in)) + "\n                ")])];
      }
    }, {
      key: "cell(time_out)",
      fn: function fn(data) {
        return [data.item.time_out ? _c("span", [_vm._v("\n                  " + _vm._s(_vm.formatTime(data.item.time_out)) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(date)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatDate(data.item.dtr_date)) + "\n                ")])];
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
              return _vm.editDailyTimeRecord(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteDailyTimeRecord(data.item);
            }
          }
        }, [_vm._v("\n                      DELETE\n                    ")])], 1)], 1)];
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
  })], 1)])])]), _vm._v(" "), _c("DailyTimeRecordModal", {
    attrs: {
      dailyTimeRecordForm: _vm.dailyTimeRecordForm
    },
    on: {
      loadDailyTimeRecords: function loadDailyTimeRecords($event) {
        return _vm.loadDailyTimeRecords();
      }
    }
  }), _vm._v(" "), _c("DailyTimeRecordDeleteModal", {
    attrs: {
      dailyTimeRecordForm: _vm.dailyTimeRecordForm
    },
    on: {
      loadDailyTimeRecords: function loadDailyTimeRecords($event) {
        return _vm.loadDailyTimeRecords();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "daily-time-record-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.emp.full_name, " from Daily Times records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "daily-time-record-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Daily Time Record" : "Add Daily Time Record"))]), _vm._v(" "), _c("b-button", {
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
            id: "time-in",
            label: "Time In",
            "label-for": "time-in"
          }
        }, [_c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.time_in,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "time_in", $$v);
            },
            expression: "form.time_in"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.time_in ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.time_in[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "time-out",
            label: "Time Out",
            "label-for": "time-out"
          }
        }, [_c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.time_out,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "time_out", $$v);
            },
            expression: "form.time_out"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.time_out ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.time_out[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "date",
            label: "Date",
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
            value: _vm.form.dtr_date,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "dtr_date", $$v);
            },
            expression: "form.dtr_date"
          }
        })], 1)], 1), _vm._v(" "), _vm.errors && _vm.errors.dtr_date ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.dtr_date[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue"],"names":[],"mappings":";AA4SA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"daily-time-record-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Daily Time Record' : 'Add Daily Time Record'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"employee-name\" label=\"Employee Name\" label-for=\"employee-name\">\n          <v-select\n            name=\"employees\"\n            label=\"full_name\"\n            v-model=\"form.emp\"\n            :options=\"employees\"\n            :filterable=\"false\"\n            :loading=\"isEmployeesDropdownLoading\"\n            @search=\"onSearchEmployee\"\n            id=\"employees\"\n          >\n            <template #list-footer>\n              <li class=\"mt-2 mb-1\">\n                <div class=\"d-flex\">\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      size=\"sm\"\n                      variant=\"light\"\n                      block\n                      squared\n                      :disabled=\"!hasEmployeesPrevPage || isPrevButtonLoading\"\n                      @click=\"onPrevPage\"\n                    >\n                      <b-spinner\n                        v-if=\"isPrevButtonLoading\"\n                        small\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Prev</span>\n                    </b-button>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <b-button\n                      squared\n                      size=\"sm\"\n                      :disabled=\"!hasEmployeesNextPage || isNextButtonLoading\"\n                      variant=\"light\"\n                      block\n                      @click=\"onNextPage\"\n                    >\n                      <b-spinner\n                        small\n                        v-if=\"isNextButtonLoading\"\n                        label=\"Small Spinner\"\n                      />\n                      <span v-else>Next</span>\n                    </b-button>\n                  </div>\n                </div>\n              </li>\n            </template>\n          </v-select>\n          <div v-if=\"errors && errors.emp_id\" class=\"text-danger\">{{ errors.emp_id[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"time-in\" label=\"Time In\" label-for=\"time-in\">\n          <b-form-timepicker v-model=\"form.time_in\" locale=\"en\"></b-form-timepicker>\n          <div v-if=\"errors && errors.time_in\" class=\"text-danger\">{{ errors.time_in[0] }}</div>\n        </b-form-group>\n        <b-form-group id=\"time-out\" label=\"Time Out\" label-for=\"time-out\">\n          <b-form-timepicker v-model=\"form.time_out\" locale=\"en\"></b-form-timepicker>\n          <div v-if=\"errors && errors.time_out\" class=\"text-danger\">{{ errors.time_out[0] }}</div>\n        </b-form-group>\n        <b-form-group id=\"date\" label=\"Date\" label-for=\"date\">\n          <b-input-group>\n            <b-form-input\n              id=\"date\"\n              v-model=\"date\"\n              type=\"text\"\n              placeholder=\"No date selected\"\n              readonly\n            ></b-form-input>\n            <b-input-group-append>\n              <b-form-datepicker\n                v-model=\"form.dtr_date\"\n                button-only\n                right\n                locale=\"en-US\"\n                aria-controls=\"date\"\n                @context=\"onContextDate\"\n              ></b-form-datepicker>\n            </b-input-group-append>\n          </b-input-group>\n          <div v-if=\"errors && errors.dtr_date\" class=\"text-danger\">{{ errors.dtr_date[0] }}</div>\n        </b-form-group>\n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\nimport axios from \"axios\";\nimport toast from \"../../../../helpers/toast.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: [\"dailyTimeRecordForm\"],\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.dailyTimeRecordForm,\n      searched: \"\",\n      date: \"\",\n      errors: {},\n      isEmployeesDropdownLoading: false,\n      isNextButtonLoading: false,\n      isPrevButtonLoading: false,\n      employeesCurrentPage: 1,\n      employeesPerPage: 10,\n      employeesLastPage: 0,\n      employees: [],\n    };\n  },\n\n  mounted() {\n    this.loadEmployees()\n  },\n\n  methods: {\n    ...mapActions(\"dailyTimeRecord\", [\"createDailyTimeRecord\", \"updateDailyTimeRecord\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"daily-time-record-modal\");\n      this.errors = {};\n\n    },\n\n    loadEmployees() {\n      let params = {\n        per_page: 10,\n        page: this.employeesCurrentPage,\n        search: this.searched,\n      }\n      axios\n        .get(\"/api/employees\", { params })\n        .then((response) => {\n          let data = response.data.data;\n          this.employees = data.data;\n          this.employeesLastPage = data.last_page;\n        })\n        .finally(() => {\n          this.isEmployeesDropdownLoading = false;\n          this.isNextButtonLoading = false;\n          this.isPrevButtonLoading = false;\n        });\n    },\n\n    handleCreateDailyTimeRecord() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\temp_id: this.form.emp.id,\n        time_in: this.form.time_in,\n        time_out: this.form.time_out,\n        dtr_date: this.form.dtr_date\n\t\t\t}\n\n      this.createDailyTimeRecord(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.emp.full_name} has been created as a new Daily Time Record`\n          );\n          this.$emit(\"loadDailyTimeRecords\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdateDailyTimeRecord() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\temp_id: this.form.emp.id,\n        time_in: this.form.time_in,\n        time_out: this.form.time_out,\n        dtr_date: this.form.dtr_date\n\t\t\t}\n\n      this.updateDailyTimeRecord(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"RECORD UPDATED\",\n            `This information for Daily Time Record ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadDailyTimeRecords\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onNextPage() {\n      this.isNextButtonLoading = true;\n      this.employeesCurrentPage += 1;\n      this.loadEmployees();\n    },\n\n    onPrevPage() {\n      this.isPrevButtonLoading = true;\n      this.employeesCurrentPage -= 1;\n      this.loadEmployees();\n    },\n\n    onSearchEmployee(search, loading) {\n      this.isEmployeesDropdownLoading = true;\n      this.performSearchEmployee(search);\n    },\n\n    performSearchEmployee: _.debounce(function (search) {\n      this.searched = search;\n\n      this.loadEmployees();\n    }, 1000),\n\n    onContextDate(ctx) {\n      if (ctx.selectedYMD) {\n        this.date = this.moment(ctx.selectedYMD).format('DD MMMM YYYY');\n        return;\n      }\n\n      this.date = \"\";\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdateDailyTimeRecord();\n      } else {\n        this.handleCreateDailyTimeRecord();\n      }\n    },\n  },\n\n  computed: {\n    hasEmployeesNextPage() {\n      return (\n        this.employeesCurrentPage !== this.employeesLastPage\n      );\n    },\n\n    hasEmployeesPrevPage() {\n      return this.employeesCurrentPage > 1;\n    },\n  }\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_style_index_0_id_0add6206_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_style_index_0_id_0add6206_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_style_index_0_id_0add6206_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/components/index.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/components/index.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=86d68bea */ "./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/dailyTimeRecord/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92 */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92");
/* harmony import */ var _dailyTimeRecordDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dailyTimeRecordDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__.render,
  _dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue":
/*!************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyTimeRecordModal.vue?vue&type=template&id=0add6206 */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206");
/* harmony import */ var _dailyTimeRecordModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyTimeRecordModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js");
/* harmony import */ var _dailyTimeRecordModal_vue_vue_type_style_index_0_id_0add6206_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css */ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dailyTimeRecordModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__.render,
  _dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_86d68bea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=86d68bea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/components/index.vue?vue&type=template&id=86d68bea");


/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92 ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordDeleteModal_vue_vue_type_template_id_7a3e0f92__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordDeleteModal.vue?vue&type=template&id=7a3e0f92");


/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_template_id_0add6206__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordModal.vue?vue&type=template&id=0add6206 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=template&id=0add6206");


/***/ }),

/***/ "./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dailyTimeRecordModal_vue_vue_type_style_index_0_id_0add6206_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/dailyTimeRecord/modals/dailyTimeRecordModal.vue?vue&type=style&index=0&id=0add6206&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2RhaWx5VGltZVJlY29yZF9jb21wb25lbnRzX2luZGV4X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ2ZNLFVBQUE7SUFDQUgsb0JBQUEsRUFBQUEsd0VBQUE7SUFDQUMsMEJBQUEsRUFBQUEsOEVBQUFBO0VBQ0E7RUFDQUcsSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQUMsUUFBQTtNQUNBQyxZQUFBO01BQ0FDLFNBQUE7TUFDQUMsTUFBQTtNQUNBQyxRQUFBO01BQ0FWLGNBQUEsRUFBQUEsb0RBQUE7TUFDQVcsU0FBQTtNQUNBQyxRQUFBO01BQ0FDLE9BQUE7UUFDQUMsRUFBQTtRQUNBQyxJQUFBO1FBQ0FDLEtBQUE7TUFDQTtNQUNBQyxjQUFBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtVQUFBQyxLQUFBO1FBQUE7TUFDQSxFQUNBO01BRUFDLG1CQUFBLE1BQUF0Qix3REFBQTtRQUNBdUIsRUFBQTtRQUNBQyxHQUFBO1FBQ0FDLE9BQUE7UUFDQUMsUUFBQTtRQUNBQyxRQUFBO01BQ0E7TUFFQUMsT0FBQTtJQUNBO0VBQ0E7RUFFQUMsT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQW5DLGdEQUFBO0lBQ0FvQyxxQkFBQSxXQUFBQSxzQkFBQTtNQUNBLEtBQUFULG1CQUFBLENBQUFVLEtBQUE7TUFDQSxLQUFBVixtQkFBQSxDQUFBRSxHQUFBO01BQ0EsS0FBQUYsbUJBQUEsQ0FBQUcsT0FBQTtNQUNBLEtBQUFILG1CQUFBLENBQUFJLFFBQUE7TUFDQSxLQUFBSixtQkFBQSxDQUFBSyxRQUFBO01BRUEsS0FBQUMsT0FBQTtNQUNBLEtBQUFLLFFBQUEsQ0FBQUMsSUFBQSxNQUFBTixPQUFBO0lBQ0E7SUFFQU8sbUJBQUEsV0FBQUEsb0JBQUFqQyxJQUFBO01BQ0EsS0FBQW9CLG1CQUFBLENBQUFVLEtBQUE7TUFDQSxLQUFBVixtQkFBQSxDQUFBQyxFQUFBLEdBQUFyQixJQUFBLENBQUFxQixFQUFBO01BQ0EsS0FBQUQsbUJBQUEsQ0FBQUUsR0FBQSxHQUFBdEIsSUFBQSxDQUFBa0MsUUFBQTtNQUNBLEtBQUFkLG1CQUFBLENBQUFHLE9BQUEsR0FBQXZCLElBQUEsQ0FBQXVCLE9BQUE7TUFDQSxLQUFBSCxtQkFBQSxDQUFBSSxRQUFBLEdBQUF4QixJQUFBLENBQUF3QixRQUFBO01BQ0EsS0FBQUosbUJBQUEsQ0FBQUssUUFBQSxHQUFBekIsSUFBQSxDQUFBeUIsUUFBQTtNQUVBLEtBQUFDLE9BQUE7TUFDQSxLQUFBSyxRQUFBLENBQUFDLElBQUEsTUFBQU4sT0FBQTtJQUNBO0lBRUFTLHFCQUFBLFdBQUFBLHNCQUFBbkMsSUFBQTtNQUNBLEtBQUFvQixtQkFBQSxDQUFBVSxLQUFBO01BQ0EsS0FBQVYsbUJBQUEsQ0FBQUMsRUFBQSxHQUFBckIsSUFBQSxDQUFBcUIsRUFBQTtNQUNBLEtBQUFELG1CQUFBLENBQUFFLEdBQUEsR0FBQXRCLElBQUEsQ0FBQWtDLFFBQUE7TUFDQSxLQUFBZCxtQkFBQSxDQUFBRyxPQUFBLEdBQUF2QixJQUFBLENBQUF1QixPQUFBO01BQ0EsS0FBQUgsbUJBQUEsQ0FBQUksUUFBQSxHQUFBeEIsSUFBQSxDQUFBd0IsUUFBQTtNQUNBLEtBQUFKLG1CQUFBLENBQUFLLFFBQUEsR0FBQXpCLElBQUEsQ0FBQXlCLFFBQUE7TUFFQSxLQUFBQyxPQUFBO01BQ0EsS0FBQUssUUFBQSxDQUFBQyxJQUFBLE1BQUFOLE9BQUE7SUFDQTtJQUVBVSxvQkFBQSxXQUFBQSxxQkFBQTtNQUFBLElBQUFDLEtBQUE7TUFDQSxJQUFBQyxNQUFBO1FBQ0FyQyxRQUFBLE9BQUFBLFFBQUE7UUFDQXNDLElBQUEsT0FBQXJDLFlBQUE7UUFDQXNDLE1BQUEsT0FBQW5DO01BQ0E7TUFDQSxLQUFBb0MsU0FBQSxDQUFBSCxNQUFBLEVBQ0FJLElBQUEsV0FBQUMsQ0FBQTtRQUNBTixLQUFBLENBQUF6QixjQUFBLEdBQUF5QixLQUFBLENBQUFPLEtBQUEsQ0FBQWpDLEtBQUE7UUFDQTBCLEtBQUEsQ0FBQTdCLE9BQUEsQ0FBQUMsRUFBQSxHQUFBNEIsS0FBQSxDQUFBTyxLQUFBLENBQUFuQyxFQUFBO1FBQ0E0QixLQUFBLENBQUE3QixPQUFBLENBQUFFLElBQUEsR0FBQTJCLEtBQUEsQ0FBQU8sS0FBQSxDQUFBbEMsSUFBQTtRQUNBMkIsS0FBQSxDQUFBN0IsT0FBQSxDQUFBRyxLQUFBLEdBQUEwQixLQUFBLENBQUFPLEtBQUEsQ0FBQWpDLEtBQUE7TUFDQSxhQUNBO1FBQ0EwQixLQUFBLENBQUFsQyxTQUFBO01BQ0E7SUFDQTtJQUVBMEMsYUFBQSxFQUFBRixDQUFBLENBQUFHLFFBQUEsV0FBQUMsS0FBQTtNQUNBLEtBQUExQyxRQUFBLEdBQUEwQyxLQUFBO0lBQ0E7SUFFQUMsVUFBQSxXQUFBQSxXQUFBQyxZQUFBO01BQ0EsSUFBQUMsbUJBQUEsR0FBQUQsWUFBQSxDQUFBRSxLQUFBO1FBQUFDLG9CQUFBLEdBQUFDLGNBQUEsQ0FBQUgsbUJBQUE7UUFBQUksS0FBQSxHQUFBRixvQkFBQTtRQUFBRyxPQUFBLEdBQUFILG9CQUFBO01BQ0EsSUFBQUksSUFBQSxPQUFBQyxJQUFBO01BQ0FELElBQUEsQ0FBQUUsUUFBQSxDQUFBSixLQUFBO01BQ0FFLElBQUEsQ0FBQUcsVUFBQSxDQUFBSixPQUFBO01BQ0EsSUFBQUssSUFBQSxHQUFBSixJQUFBLENBQUFLLFFBQUE7TUFDQSxJQUFBQyxPQUFBLEdBQUFOLElBQUEsQ0FBQUssUUFBQTtNQUNBQyxPQUFBLEdBQUFBLE9BQUEsR0FBQUEsT0FBQTtNQUNBLFVBQUFDLE1BQUEsQ0FBQUQsT0FBQSxPQUFBQyxNQUFBLENBQUFSLE9BQUEsT0FBQVEsTUFBQSxDQUFBSCxJQUFBO0lBQ0E7SUFFQUksVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BQ0EsWUFBQUMsTUFBQSxDQUFBRCxJQUFBLEVBQUFFLE1BQUE7SUFDQTtFQUFBLEVBQ0E7RUFDQUMsT0FBQSxXQUFBQSxRQUFBO0lBQ0EsS0FBQWhDLG9CQUFBO0VBQ0E7RUFFQWlDLFFBQUEsRUFBQXpDLGFBQUEsS0FDQWxDLGdEQUFBO0lBQ0FrRCxLQUFBO0VBQ0EsR0FDQTtFQUVBMEIsS0FBQTtJQUNBcEUsWUFBQTtNQUNBcUUsT0FBQSxXQUFBQSxRQUFBQyxLQUFBO1FBQ0EsS0FBQXBDLG9CQUFBO01BQ0E7SUFDQTtJQUVBbkMsUUFBQTtNQUNBc0UsT0FBQSxXQUFBQSxRQUFBQyxLQUFBO1FBQ0EsS0FBQXBDLG9CQUFBO01BQ0E7SUFDQTtJQUVBaEMsTUFBQSxXQUFBQSxPQUFBMkMsS0FBQTtNQUNBLEtBQUFGLGFBQUEsQ0FBQUUsS0FBQTtJQUNBO0lBRUExQyxRQUFBO01BQ0FrRSxPQUFBLFdBQUFBLFFBQUFDLEtBQUE7UUFDQSxLQUFBcEMsb0JBQUE7TUFDQTtJQUNBO0VBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1NEO0FBRUE7QUFFQSxpRUFBZTtFQUNmc0MsTUFBQSxHQUFBRCx5REFBQTtFQUVBRSxLQUFBO0VBRUEzRSxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBRyxTQUFBO01BQ0F5RSxJQUFBLE9BQUF4RDtJQUNBO0VBQ0E7RUFFQU8sT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQW5DLGdEQUFBO0lBRUFvRixVQUFBLFdBQUFBLFdBQUFDLElBQUE7TUFFQSxLQUFBL0MsUUFBQSxDQUFBZ0QsSUFBQTtJQUVBO0lBRUFDLFFBQUEsV0FBQUEsU0FBQTtNQUFBLElBQUEzQyxLQUFBO01BQ0EsS0FBQWxDLFNBQUE7TUFFQSxJQUFBbUMsTUFBQTtRQUNBakIsRUFBQSxPQUFBdUQsSUFBQSxDQUFBdkQ7TUFDQTtNQUVBLEtBQUFjLHFCQUFBLENBQUFHLE1BQUEsRUFDQUksSUFBQSxXQUFBQyxDQUFBO1FBQ0FOLEtBQUEsQ0FBQTRDLFNBQUEsQ0FDQSxVQUNBLHFCQUFBbEIsTUFBQSxDQUNBMUIsS0FBQSxDQUFBdUMsSUFBQSxDQUFBdEQsR0FBQSxDQUFBNEQsU0FBQSwrQ0FDQTtRQUNBN0MsS0FBQSxDQUFBOEMsS0FBQTtRQUNBOUMsS0FBQSxDQUFBTixRQUFBLENBQUFnRCxJQUFBO01BQ0EsV0FDQSxXQUFBSyxLQUFBO1FBQ0EsSUFBQUMsTUFBQSxHQUFBRCxLQUFBLENBQUFFLFFBQUEsQ0FBQXRGLElBQUEsQ0FBQXFGLE1BQUE7TUFDQSxhQUNBO1FBQ0FoRCxLQUFBLENBQUFsQyxTQUFBO01BQ0E7SUFDQTtFQUFBO0FBR0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdUNEO0FBQ0E7QUFDQTtBQUVBLGlFQUFlO0VBQ2Z1RSxNQUFBLEdBQUFELHlEQUFBO0VBRUFFLEtBQUE7RUFFQTNFLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FHLFNBQUE7TUFDQXlFLElBQUEsT0FBQXhELG1CQUFBO01BQ0FmLFFBQUE7TUFDQTRELElBQUE7TUFDQW9CLE1BQUE7TUFDQUcsMEJBQUE7TUFDQUMsbUJBQUE7TUFDQUMsbUJBQUE7TUFDQUMsb0JBQUE7TUFDQUMsZ0JBQUE7TUFDQUMsaUJBQUE7TUFDQUMsU0FBQTtJQUNBO0VBQ0E7RUFFQTFCLE9BQUEsV0FBQUEsUUFBQTtJQUNBLEtBQUEyQixhQUFBO0VBQ0E7RUFFQXBFLE9BQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0FuQyxnREFBQTtJQUVBb0YsVUFBQSxXQUFBQSxXQUFBQyxJQUFBO01BRUEsS0FBQS9DLFFBQUEsQ0FBQWdELElBQUE7TUFDQSxLQUFBTSxNQUFBO0lBRUE7SUFFQVUsYUFBQSxXQUFBQSxjQUFBO01BQUEsSUFBQTFELEtBQUE7TUFDQSxJQUFBQyxNQUFBO1FBQ0FyQyxRQUFBO1FBQ0FzQyxJQUFBLE9BQUFvRCxvQkFBQTtRQUNBbkQsTUFBQSxPQUFBbkM7TUFDQTtNQUNBa0YsZ0RBQ0E7UUFBQWpELE1BQUEsRUFBQUE7TUFBQSxHQUNBSSxJQUFBLFdBQUE0QyxRQUFBO1FBQ0EsSUFBQXRGLElBQUEsR0FBQXNGLFFBQUEsQ0FBQXRGLElBQUEsQ0FBQUEsSUFBQTtRQUNBcUMsS0FBQSxDQUFBeUQsU0FBQSxHQUFBOUYsSUFBQSxDQUFBQSxJQUFBO1FBQ0FxQyxLQUFBLENBQUF3RCxpQkFBQSxHQUFBN0YsSUFBQSxDQUFBaUcsU0FBQTtNQUNBLGFBQ0E7UUFDQTVELEtBQUEsQ0FBQW1ELDBCQUFBO1FBQ0FuRCxLQUFBLENBQUFvRCxtQkFBQTtRQUNBcEQsS0FBQSxDQUFBcUQsbUJBQUE7TUFDQTtJQUNBO0lBRUFRLDJCQUFBLFdBQUFBLDRCQUFBO01BQUEsSUFBQUMsTUFBQTtNQUNBLEtBQUFoRyxTQUFBO01BRUEsSUFBQW1DLE1BQUE7UUFDQThELE1BQUEsT0FBQXhCLElBQUEsQ0FBQXRELEdBQUEsQ0FBQUQsRUFBQTtRQUNBRSxPQUFBLE9BQUFxRCxJQUFBLENBQUFyRCxPQUFBO1FBQ0FDLFFBQUEsT0FBQW9ELElBQUEsQ0FBQXBELFFBQUE7UUFDQUMsUUFBQSxPQUFBbUQsSUFBQSxDQUFBbkQ7TUFDQTtNQUVBLEtBQUFJLHFCQUFBLENBQUFTLE1BQUEsRUFDQUksSUFBQSxXQUFBQyxDQUFBO1FBQ0F3RCxNQUFBLENBQUFsQixTQUFBLENBQ0EsV0FDQSx5QkFBQWxCLE1BQUEsQ0FDQW9DLE1BQUEsQ0FBQXZCLElBQUEsQ0FBQXRELEdBQUEsQ0FBQTRELFNBQUEsaURBQ0E7UUFDQWlCLE1BQUEsQ0FBQWhCLEtBQUE7UUFDQWdCLE1BQUEsQ0FBQXRCLFVBQUE7TUFDQSxXQUNBLFdBQUFPLEtBQUE7UUFDQSxJQUFBQyxNQUFBLEdBQUFELEtBQUEsQ0FBQUUsUUFBQSxDQUFBdEYsSUFBQSxDQUFBcUYsTUFBQTtRQUNBYyxNQUFBLENBQUFkLE1BQUEsR0FBQUEsTUFBQTtNQUNBLGFBQ0E7UUFDQWMsTUFBQSxDQUFBaEcsU0FBQTtNQUNBO0lBQ0E7SUFFQWtHLDJCQUFBLFdBQUFBLDRCQUFBO01BQUEsSUFBQUMsTUFBQTtNQUNBLEtBQUFuRyxTQUFBO01BRUEsSUFBQW1DLE1BQUE7UUFDQWpCLEVBQUEsT0FBQXVELElBQUEsQ0FBQXZELEVBQUE7UUFDQStFLE1BQUEsT0FBQXhCLElBQUEsQ0FBQXRELEdBQUEsQ0FBQUQsRUFBQTtRQUNBRSxPQUFBLE9BQUFxRCxJQUFBLENBQUFyRCxPQUFBO1FBQ0FDLFFBQUEsT0FBQW9ELElBQUEsQ0FBQXBELFFBQUE7UUFDQUMsUUFBQSxPQUFBbUQsSUFBQSxDQUFBbkQ7TUFDQTtNQUVBLEtBQUE4RSxxQkFBQSxDQUFBakUsTUFBQSxFQUNBSSxJQUFBLFdBQUFDLENBQUE7UUFDQTJELE1BQUEsQ0FBQXJCLFNBQUEsQ0FDQSxXQUNBLGdFQUFBbEIsTUFBQSxDQUNBdUMsTUFBQSxDQUFBMUIsSUFBQSxDQUFBdkQsRUFBQSx1QkFDQTtRQUNBaUYsTUFBQSxDQUFBbkIsS0FBQTtRQUNBbUIsTUFBQSxDQUFBekIsVUFBQTtNQUNBLFdBQ0EsV0FBQU8sS0FBQTtRQUNBLElBQUFDLE1BQUEsR0FBQUQsS0FBQSxDQUFBRSxRQUFBLENBQUF0RixJQUFBLENBQUFxRixNQUFBO1FBQ0FpQixNQUFBLENBQUFqQixNQUFBLEdBQUFBLE1BQUE7TUFDQSxhQUNBO1FBQ0FpQixNQUFBLENBQUFuRyxTQUFBO01BQ0E7SUFDQTtJQUVBcUcsVUFBQSxXQUFBQSxXQUFBO01BQ0EsS0FBQWYsbUJBQUE7TUFDQSxLQUFBRSxvQkFBQTtNQUNBLEtBQUFJLGFBQUE7SUFDQTtJQUVBVSxVQUFBLFdBQUFBLFdBQUE7TUFDQSxLQUFBZixtQkFBQTtNQUNBLEtBQUFDLG9CQUFBO01BQ0EsS0FBQUksYUFBQTtJQUNBO0lBRUFXLGdCQUFBLFdBQUFBLGlCQUFBbEUsTUFBQSxFQUFBbUUsT0FBQTtNQUNBLEtBQUFuQiwwQkFBQTtNQUNBLEtBQUFvQixxQkFBQSxDQUFBcEUsTUFBQTtJQUNBO0lBRUFvRSxxQkFBQSxFQUFBakUsQ0FBQSxDQUFBRyxRQUFBLFdBQUFOLE1BQUE7TUFDQSxLQUFBbkMsUUFBQSxHQUFBbUMsTUFBQTtNQUVBLEtBQUF1RCxhQUFBO0lBQ0E7SUFFQWMsYUFBQSxXQUFBQSxjQUFBQyxHQUFBO01BQ0EsSUFBQUEsR0FBQSxDQUFBQyxXQUFBO1FBQ0EsS0FBQTlDLElBQUEsUUFBQUMsTUFBQSxDQUFBNEMsR0FBQSxDQUFBQyxXQUFBLEVBQUE1QyxNQUFBO1FBQ0E7TUFDQTtNQUVBLEtBQUFGLElBQUE7SUFDQTtJQUVBZSxRQUFBLFdBQUFBLFNBQUE7TUFDQSxTQUFBSixJQUFBLENBQUF2RCxFQUFBO1FBQ0EsS0FBQWdGLDJCQUFBO01BQ0E7UUFDQSxLQUFBSCwyQkFBQTtNQUNBO0lBQ0E7RUFBQSxFQUNBO0VBRUE3QixRQUFBO0lBQ0EyQyxvQkFBQSxXQUFBQSxxQkFBQTtNQUNBLE9BQ0EsS0FBQXJCLG9CQUFBLFVBQUFFLGlCQUFBO0lBRUE7SUFFQW9CLG9CQUFBLFdBQUFBLHFCQUFBO01BQ0EsWUFBQXRCLG9CQUFBO0lBQ0E7RUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hTRCxJQUFJdUIsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBSTtJQUNaQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRCxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FDUCxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQWtCLENBQUMsRUFDbEMsQ0FDRUYsRUFBRSxDQUFDLElBQUksRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBc0MsQ0FBQyxFQUFFLENBQy9ESCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUM1QixDQUFDLEVBQ0ZKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFPLENBQUMsRUFBRSxDQUNqQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBbUIsQ0FBQyxFQUFFLENBQzdDRixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUF5QixDQUFDLEVBQUUsQ0FDbkRGLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUUsV0FBVyxFQUFFO0VBQU0sQ0FBQyxFQUN0QixDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO0lBQ0VJLEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUU7SUFBVSxDQUFDO0lBQzdCQyxFQUFFLEVBQUU7TUFBRUMsS0FBSyxFQUFFUixHQUFHLENBQUN0RjtJQUFzQjtFQUN6QyxDQUFDLEVBQ0QsQ0FDRXVGLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDWEksS0FBSyxFQUFFO01BQUVJLElBQUksRUFBRSxNQUFNO01BQUUsYUFBYSxFQUFFO0lBQU87RUFDL0MsQ0FBQyxDQUFDLEVBQ0ZULEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQzFCLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixDQUFDLENBQ0gsQ0FBQyxFQUNGSixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBWSxDQUFDLEVBQUUsQ0FDdENGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUUsV0FBVyxFQUFFO0VBQU0sQ0FBQyxFQUFFLENBQ2hDRixFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFnQixDQUFDLEVBQ2hDLENBQ0VGLEVBQUUsQ0FDQSxRQUFRLEVBQ1I7SUFBRUksS0FBSyxFQUFFO01BQUVLLE1BQU0sRUFBRTtJQUFHO0VBQUUsQ0FBQyxFQUN6QixDQUNFVCxFQUFFLENBQ0EsT0FBTyxFQUNQO0lBQ0VFLFdBQVcsRUFBRSxTQUFTO0lBQ3RCRSxLQUFLLEVBQUU7TUFBRSxPQUFLO0lBQWlDO0VBQ2pELENBQUMsRUFDRCxDQUFDTCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUMvQyxDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsZUFBZSxFQUFFO0lBQ2xCRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DRSxLQUFLLEVBQUU7TUFDTG5HLEVBQUUsRUFBRSxnQ0FBZ0M7TUFDcEN5RyxPQUFPLEVBQUVYLEdBQUcsQ0FBQ3hIO0lBQ2YsQ0FBQztJQUNEb0ksS0FBSyxFQUFFO01BQ0x2RCxLQUFLLEVBQUUyQyxHQUFHLENBQUNsSCxRQUFRO01BQ25CK0gsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtRQUN2QmQsR0FBRyxDQUFDbEgsUUFBUSxHQUFHZ0ksR0FBRztNQUNwQixDQUFDO01BQ0RDLFVBQVUsRUFBRTtJQUNkO0VBQ0YsQ0FBQyxDQUFDLEVBQ0ZmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsT0FBTyxFQUNQO0lBQ0VFLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkNFLEtBQUssRUFBRTtNQUFFLE9BQUs7SUFBaUM7RUFDakQsQ0FBQyxFQUNELENBQUNMLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLHVDQUF1QyxDQUFDLENBQ2xELENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUNBLGVBQWUsRUFDZjtJQUNFZSxXQUFXLEVBQUVoQixHQUFHLENBQUNpQixFQUFFLENBQUMsQ0FDbEI7TUFDRXRILEdBQUcsRUFBRSxRQUFRO01BQ2J1SCxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQ3ZCQSxFQUFFLENBQUMsR0FBRyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFnQixDQUFDLENBQUMsQ0FDMUMsQ0FBQyxDQUNIO01BQ0gsQ0FBQztNQUNEZ0IsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxFQUNELENBQ0VuQixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLGNBQWMsRUFBRTtJQUNqQkksS0FBSyxFQUFFO01BQUVlLElBQUksRUFBRSxRQUFRO01BQUVDLFdBQVcsRUFBRTtJQUFpQixDQUFDO0lBQ3hEVCxLQUFLLEVBQUU7TUFDTHZELEtBQUssRUFBRTJDLEdBQUcsQ0FBQy9HLE1BQU07TUFDakI0SCxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO1FBQ3ZCZCxHQUFHLENBQUMvRyxNQUFNLEdBQUc2SCxHQUFHO01BQ2xCLENBQUM7TUFDREMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVFLFdBQVcsRUFBRTtFQUFZLENBQUMsRUFDNUIsQ0FDRUYsRUFBRSxDQUNBLFdBQVcsRUFDWDtJQUFFSSxLQUFLLEVBQUU7TUFBRXhGLElBQUksRUFBRW1GLEdBQUcsQ0FBQzdHLFNBQVM7TUFBRW1JLE9BQU8sRUFBRTtJQUFLO0VBQUUsQ0FBQyxFQUNqRCxDQUNFckIsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNaSSxLQUFLLEVBQUU7TUFDTGtCLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxFQUFFO01BQ1gsWUFBWSxFQUFFLEVBQUU7TUFDaEIvRixLQUFLLEVBQUV1RSxHQUFHLENBQUN2RSxLQUFLLENBQUM1QyxJQUFJO01BQ3JCYSxNQUFNLEVBQUVzRyxHQUFHLENBQUN0RyxNQUFNO01BQ2xCLFVBQVUsRUFBRSxDQUFDO01BQ2IrSCxJQUFJLEVBQUV6QixHQUFHLENBQUNoSCxTQUFTO01BQ25CLGNBQWMsRUFBRWdILEdBQUcsQ0FBQ2pIO0lBQ3RCLENBQUM7SUFDRGlJLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFdEgsR0FBRyxFQUFFLFlBQVk7TUFDakJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLEtBQUssRUFDTDtVQUFFRSxXQUFXLEVBQUU7UUFBd0IsQ0FBQyxFQUN4QyxDQUNFRixFQUFFLENBQUMsV0FBVyxFQUFFO1VBQ2RFLFdBQVcsRUFBRTtRQUNmLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0Y7TUFDSCxDQUFDO01BQ0RnQixLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXhILEdBQUcsRUFBRSxPQUFPO01BQ1p1SCxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUNBLElBQUksRUFDSjtVQUFFRSxXQUFXLEVBQUU7UUFBNkIsQ0FBQyxFQUM3QyxDQUFDRixFQUFFLENBQUMsR0FBRyxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDSixHQUFHLENBQUMwQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDOUMsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNEUCxLQUFLLEVBQUU7SUFDVCxDQUFDLEVBQ0Q7TUFDRXhILEdBQUcsRUFBRSxxQkFBcUI7TUFDMUJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBVXJJLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xBLElBQUksQ0FBQzhJLElBQUksQ0FBQzVHLFFBQVEsR0FDZGtGLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0JBQXNCLEdBQ3BCSixHQUFHLENBQUMwQixFQUFFLENBQUM3SSxJQUFJLENBQUM4SSxJQUFJLENBQUM1RyxRQUFRLENBQUNnRCxTQUFTLENBQUMsR0FDcEMsb0JBQ0osQ0FBQyxDQUNGLENBQUMsR0FDRmlDLEdBQUcsQ0FBQzRCLEVBQUUsQ0FBQyxDQUFDLENBQ2I7TUFDSDtJQUNGLENBQUMsRUFDRDtNQUNFakksR0FBRyxFQUFFLGVBQWU7TUFDcEJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBVXJJLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xvSCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQ1RELEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLHNCQUFzQixHQUNwQkosR0FBRyxDQUFDMEIsRUFBRSxDQUFDMUIsR0FBRyxDQUFDbkUsVUFBVSxDQUFDaEQsSUFBSSxDQUFDOEksSUFBSSxDQUFDdkgsT0FBTyxDQUFDLENBQUMsR0FDekMsb0JBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSDtNQUNIO0lBQ0YsQ0FBQyxFQUNEO01BQ0VULEdBQUcsRUFBRSxnQkFBZ0I7TUFDckJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBVXJJLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xBLElBQUksQ0FBQzhJLElBQUksQ0FBQ3RILFFBQVEsR0FDZDRGLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0JBQXNCLEdBQ3BCSixHQUFHLENBQUMwQixFQUFFLENBQ0oxQixHQUFHLENBQUNuRSxVQUFVLENBQUNoRCxJQUFJLENBQUM4SSxJQUFJLENBQUN0SCxRQUFRLENBQ25DLENBQUMsR0FDRCxvQkFDSixDQUFDLENBQ0YsQ0FBQyxHQUNGMkYsR0FBRyxDQUFDNEIsRUFBRSxDQUFDLENBQUMsQ0FDYjtNQUNIO0lBQ0YsQ0FBQyxFQUNEO01BQ0VqSSxHQUFHLEVBQUUsWUFBWTtNQUNqQnVILEVBQUUsRUFBRSxTQUFBQSxHQUFVckksSUFBSSxFQUFFO1FBQ2xCLE9BQU8sQ0FDTG9ILEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FDVEQsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0JBQXNCLEdBQ3BCSixHQUFHLENBQUMwQixFQUFFLENBQUMxQixHQUFHLENBQUNuRCxVQUFVLENBQUNoRSxJQUFJLENBQUM4SSxJQUFJLENBQUNySCxRQUFRLENBQUMsQ0FBQyxHQUMxQyxvQkFDSixDQUFDLENBQ0YsQ0FBQyxDQUNIO01BQ0g7SUFDRixDQUFDLEVBQ0Q7TUFDRVgsR0FBRyxFQUFFLGVBQWU7TUFDcEJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBVXJJLElBQUksRUFBRTtRQUNsQixPQUFPLENBQ0xvSCxFQUFFLENBQ0EsT0FBTyxFQUNQLENBQ0VBLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFDRUUsV0FBVyxFQUNUO1FBQ0osQ0FBQyxFQUNELENBQ0VGLEVBQUUsQ0FDQSxVQUFVLEVBQ1Y7VUFDRUUsV0FBVyxFQUFFLE1BQU07VUFDbkJFLEtBQUssRUFBRTtZQUNMd0IsSUFBSSxFQUFFLElBQUk7WUFDVnZCLE9BQU8sRUFBRTtVQUNYLENBQUM7VUFDREMsRUFBRSxFQUFFO1lBQ0ZDLEtBQUssRUFBRSxTQUFBQSxNQUFVc0IsTUFBTSxFQUFFO2NBQ3ZCLE9BQU85QixHQUFHLENBQUNsRixtQkFBbUIsQ0FDNUJqQyxJQUFJLENBQUM4SSxJQUNQLENBQUM7WUFDSDtVQUNGO1FBQ0YsQ0FBQyxFQUNELENBQ0UzQixHQUFHLENBQUNJLEVBQUUsQ0FDSixvREFDRixDQUFDLENBRUwsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFSSxLQUFLLEVBQUU7WUFDTHdCLElBQUksRUFBRSxJQUFJO1lBQ1Z2QixPQUFPLEVBQUU7VUFDWCxDQUFDO1VBQ0RDLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXNCLE1BQU0sRUFBRTtjQUN2QixPQUFPOUIsR0FBRyxDQUFDaEYscUJBQXFCLENBQzlCbkMsSUFBSSxDQUFDOEksSUFDUCxDQUFDO1lBQ0g7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUNFM0IsR0FBRyxDQUFDSSxFQUFFLENBQ0osc0RBQ0YsQ0FBQyxDQUVMLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0Y7TUFDSDtJQUNGLENBQUMsQ0FDRjtFQUNILENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixDQUFDLEVBQ0ZKLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVFLFdBQVcsRUFBRTtFQUFNLENBQUMsRUFBRSxDQUNoQ0YsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQUUsQ0FDckNGLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FDTkQsR0FBRyxDQUFDSSxFQUFFLENBQ0osZ0JBQWdCLEdBQ2RKLEdBQUcsQ0FBQzBCLEVBQUUsWUFBQTlFLE1BQUEsQ0FDT29ELEdBQUcsQ0FBQzNHLE9BQU8sQ0FBQ0UsSUFBSSxVQUFBcUQsTUFBQSxDQUFPb0QsR0FBRyxDQUFDM0csT0FBTyxDQUFDQyxFQUFFLFVBQUFzRCxNQUFBLENBQU9vRCxHQUFHLENBQUMzRyxPQUFPLENBQUNHLEtBQUssYUFDMUUsQ0FBQyxHQUNELGNBQ0osQ0FBQyxDQUNGLENBQUMsQ0FDSCxDQUFDLEVBQ0Z3RyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFRSxXQUFXLEVBQUU7RUFBVyxDQUFDLEVBQzNCLENBQ0VGLEVBQUUsQ0FBQyxjQUFjLEVBQUU7SUFDakJFLFdBQVcsRUFBRSxNQUFNO0lBQ25CRSxLQUFLLEVBQUU7TUFDTCxZQUFZLEVBQUVMLEdBQUcsQ0FBQ3ZHLGNBQWM7TUFDaEMsVUFBVSxFQUFFdUcsR0FBRyxDQUFDbEgsUUFBUTtNQUN4QmlKLEtBQUssRUFBRTtJQUNULENBQUM7SUFDRG5CLEtBQUssRUFBRTtNQUNMdkQsS0FBSyxFQUFFMkMsR0FBRyxDQUFDakgsWUFBWTtNQUN2QjhILFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7UUFDdkJkLEdBQUcsQ0FBQ2pILFlBQVksR0FBRytILEdBQUc7TUFDeEIsQ0FBQztNQUNEQyxVQUFVLEVBQUU7SUFDZDtFQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsQ0FDSCxDQUFDLEVBQ0ZmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQUMsc0JBQXNCLEVBQUU7SUFDekJJLEtBQUssRUFBRTtNQUFFcEcsbUJBQW1CLEVBQUUrRixHQUFHLENBQUMvRjtJQUFvQixDQUFDO0lBQ3ZEc0csRUFBRSxFQUFFO01BQ0Z0RixvQkFBb0IsRUFBRSxTQUFBQSxxQkFBVTZHLE1BQU0sRUFBRTtRQUN0QyxPQUFPOUIsR0FBRyxDQUFDL0Usb0JBQW9CLENBQUMsQ0FBQztNQUNuQztJQUNGO0VBQ0YsQ0FBQyxDQUFDLEVBQ0YrRSxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUFDLDRCQUE0QixFQUFFO0lBQy9CSSxLQUFLLEVBQUU7TUFBRXBHLG1CQUFtQixFQUFFK0YsR0FBRyxDQUFDL0Y7SUFBb0IsQ0FBQztJQUN2RHNHLEVBQUUsRUFBRTtNQUNGdEYsb0JBQW9CLEVBQUUsU0FBQUEscUJBQVU2RyxNQUFNLEVBQUU7UUFDdEMsT0FBTzlCLEdBQUcsQ0FBQy9FLG9CQUFvQixDQUFDLENBQUM7TUFDbkM7SUFDRjtFQUNGLENBQUMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDO0FBQ0gsQ0FBQztBQUNELElBQUkrRyxlQUFlLEdBQUcsRUFBRTtBQUN4QmpDLE1BQU0sQ0FBQ2tDLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDMVgzQixJQUFJbEMsTUFBTSxHQUFHLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUM3QixJQUFJQyxHQUFHLEdBQUcsSUFBSTtJQUNaQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDRCxFQUFFO0VBQ25CLE9BQU9BLEVBQUUsQ0FBQyxTQUFTLEVBQUU7SUFDbkJJLEtBQUssRUFBRTtNQUNMbkcsRUFBRSxFQUFFLGdDQUFnQztNQUNwQyxhQUFhLEVBQUUsRUFBRTtNQUNqQixhQUFhLEVBQUUsRUFBRTtNQUNqQixzQkFBc0IsRUFBRSxFQUFFO01BQzFCZ0ksUUFBUSxFQUFFLEVBQUU7TUFDWixlQUFlLEVBQUU7SUFDbkIsQ0FBQztJQUNEbEIsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO01BQ0V0SCxHQUFHLEVBQUUsU0FBUztNQUNkdUgsRUFBRSxFQUFFLFNBQUFBLEdBQUEsRUFBWTtRQUNkLE9BQU8sQ0FDTGpCLEVBQUUsQ0FDQSxPQUFPLEVBQ1AsQ0FDRUEsRUFBRSxDQUFDLE9BQU8sRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBZ0MsQ0FBQyxFQUFFLENBQzVERixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUNELEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLHFDQUFxQyxDQUFDLENBQUMsQ0FBQyxDQUMxRCxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQU8sQ0FBQyxFQUN2QixDQUNFRixFQUFFLENBQ0EsT0FBTyxFQUNQO1VBQUVFLFdBQVcsRUFBRTtRQUE0QyxDQUFDLEVBQzVELENBQ0VILEdBQUcsQ0FBQ0ksRUFBRSxDQUNKLFlBQVksR0FDVkosR0FBRyxDQUFDMEIsRUFBRSxvQ0FBQTlFLE1BQUEsQ0FDK0JvRCxHQUFHLENBQUN2QyxJQUFJLENBQUN0RCxHQUFHLENBQUM0RCxTQUFTLCtCQUMzRCxDQUFDLEdBQ0QsVUFDSixDQUFDLENBRUwsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0RpQyxHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBTyxDQUFDLEVBQ3ZCLENBQ0VGLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQWdDLENBQUMsRUFDaEQsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsd0JBQXdCO1VBQ3JDZ0MsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjlCLEtBQUssRUFBRTtZQUFFK0IsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnRCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXNCLE1BQU0sRUFBRTtjQUN2QixPQUFPOUIsR0FBRyxDQUFDdEMsVUFBVSxDQUFDLENBQUM7WUFDekI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDc0MsR0FBRyxDQUFDSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsQ0FDckMsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsK0JBQStCO1VBQzVDZ0MsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjlCLEtBQUssRUFBRTtZQUFFK0IsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnRCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXNCLE1BQU0sRUFBRTtjQUN2QixPQUFPOUIsR0FBRyxDQUFDbkMsUUFBUSxDQUFDLENBQUM7WUFDdkI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDbUMsR0FBRyxDQUFDSSxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FDdEMsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGUsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUlhLGVBQWUsR0FBRyxFQUFFO0FBQ3hCakMsTUFBTSxDQUFDa0MsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRzNCLElBQUlsQyxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNuQkksS0FBSyxFQUFFO01BQ0xuRyxFQUFFLEVBQUUseUJBQXlCO01BQzdCLGFBQWEsRUFBRSxFQUFFO01BQ2pCLHNCQUFzQixFQUFFLEVBQUU7TUFDMUIsZUFBZSxFQUFFO0lBQ25CLENBQUM7SUFDRDhHLFdBQVcsRUFBRWhCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQyxDQUNsQjtNQUNFdEgsR0FBRyxFQUFFLGNBQWM7TUFDbkJ1SCxFQUFFLEVBQUUsU0FBQUEsR0FBQSxFQUFZO1FBQ2QsT0FBTyxDQUNMakIsRUFBRSxDQUFDLElBQUksRUFBRTtVQUFFRSxXQUFXLEVBQUU7UUFBcUMsQ0FBQyxFQUFFLENBQzlESCxHQUFHLENBQUNJLEVBQUUsQ0FDSkosR0FBRyxDQUFDMEIsRUFBRSxDQUNKMUIsR0FBRyxDQUFDdkMsSUFBSSxDQUFDdkQsRUFBRSxHQUNQLHdCQUF3QixHQUN4Qix1QkFDTixDQUNGLENBQUMsQ0FDRixDQUFDLEVBQ0Y4RixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFb0MsVUFBVSxFQUFFLENBQ1Y7WUFDRUMsSUFBSSxFQUFFLFdBQVc7WUFDakJDLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUJDLFNBQVMsRUFBRTtjQUFFakIsS0FBSyxFQUFFO1lBQUs7VUFDM0IsQ0FBQyxDQUNGO1VBQ0RwQixXQUFXLEVBQUUsK0JBQStCO1VBQzVDRSxLQUFLLEVBQUU7WUFBRStCLElBQUksRUFBRSxFQUFFO1lBQUVQLElBQUksRUFBRTtVQUFLLENBQUM7VUFDL0J0QixFQUFFLEVBQUU7WUFDRkMsS0FBSyxFQUFFLFNBQUFBLE1BQVVzQixNQUFNLEVBQUU7Y0FDdkIsT0FBTzlCLEdBQUcsQ0FBQ3RDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pCO1VBQ0Y7UUFDRixDQUFDLEVBQ0QsQ0FBQ3VDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxDQUFDLENBQzFDLENBQUMsQ0FDRjtNQUNILENBQUM7TUFDRGdCLEtBQUssRUFBRTtJQUNULENBQUMsRUFDRDtNQUNFeEgsR0FBRyxFQUFFLFNBQVM7TUFDZHVILEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7UUFDZCxPQUFPLENBQ0xqQixFQUFFLENBQ0EsUUFBUSxFQUNSLENBQ0VBLEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0xuRyxFQUFFLEVBQUUsZUFBZTtZQUNuQk4sS0FBSyxFQUFFLGVBQWU7WUFDdEIsV0FBVyxFQUFFO1VBQ2Y7UUFDRixDQUFDLEVBQ0QsQ0FDRXFHLEVBQUUsQ0FBQyxVQUFVLEVBQUU7VUFDYkksS0FBSyxFQUFFO1lBQ0xpQyxJQUFJLEVBQUUsV0FBVztZQUNqQjFJLEtBQUssRUFBRSxXQUFXO1lBQ2xCK0csT0FBTyxFQUFFWCxHQUFHLENBQUNyQixTQUFTO1lBQ3RCOEQsVUFBVSxFQUFFLEtBQUs7WUFDakJqRCxPQUFPLEVBQUVRLEdBQUcsQ0FBQzNCLDBCQUEwQjtZQUN2Q25FLEVBQUUsRUFBRTtVQUNOLENBQUM7VUFDRHFHLEVBQUUsRUFBRTtZQUFFbEYsTUFBTSxFQUFFMkUsR0FBRyxDQUFDVDtVQUFpQixDQUFDO1VBQ3BDeUIsV0FBVyxFQUFFaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDLENBQ2xCO1lBQ0V0SCxHQUFHLEVBQUUsYUFBYTtZQUNsQnVILEVBQUUsRUFBRSxTQUFBQSxHQUFBLEVBQVk7Y0FDZCxPQUFPLENBQ0xqQixFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUFFRSxXQUFXLEVBQUU7Y0FBWSxDQUFDLEVBQUUsQ0FDckNGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7Z0JBQUVFLFdBQVcsRUFBRTtjQUFTLENBQUMsRUFBRSxDQUNuQ0YsRUFBRSxDQUNBLEtBQUssRUFDTDtnQkFBRUUsV0FBVyxFQUFFO2NBQVcsQ0FBQyxFQUMzQixDQUNFRixFQUFFLENBQ0EsVUFBVSxFQUNWO2dCQUNFSSxLQUFLLEVBQUU7a0JBQ0x3QixJQUFJLEVBQUUsSUFBSTtrQkFDVnZCLE9BQU8sRUFBRSxPQUFPO2tCQUNoQm9DLEtBQUssRUFBRSxFQUFFO2tCQUNUQyxPQUFPLEVBQUUsRUFBRTtrQkFDWEMsUUFBUSxFQUNOLENBQUM1QyxHQUFHLENBQUNGLG9CQUFvQixJQUN6QkUsR0FBRyxDQUFDekI7Z0JBQ1IsQ0FBQztnQkFDRGdDLEVBQUUsRUFBRTtrQkFBRUMsS0FBSyxFQUFFUixHQUFHLENBQUNWO2dCQUFXO2NBQzlCLENBQUMsRUFDRCxDQUNFVSxHQUFHLENBQUN6QixtQkFBbUIsR0FDbkIwQixFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUNkSSxLQUFLLEVBQUU7a0JBQ0x3QyxLQUFLLEVBQUUsRUFBRTtrQkFDVGpKLEtBQUssRUFBRTtnQkFDVDtjQUNGLENBQUMsQ0FBQyxHQUNGcUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDRCxHQUFHLENBQUNJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ2pDLEVBQ0QsQ0FDRixDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsRUFDREosR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxLQUFLLEVBQ0w7Z0JBQUVFLFdBQVcsRUFBRTtjQUFXLENBQUMsRUFDM0IsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtnQkFDRUksS0FBSyxFQUFFO2tCQUNMc0MsT0FBTyxFQUFFLEVBQUU7a0JBQ1hkLElBQUksRUFBRSxJQUFJO2tCQUNWZSxRQUFRLEVBQ04sQ0FBQzVDLEdBQUcsQ0FBQ0gsb0JBQW9CLElBQ3pCRyxHQUFHLENBQUMxQixtQkFBbUI7a0JBQ3pCZ0MsT0FBTyxFQUFFLE9BQU87a0JBQ2hCb0MsS0FBSyxFQUFFO2dCQUNULENBQUM7Z0JBQ0RuQyxFQUFFLEVBQUU7a0JBQUVDLEtBQUssRUFBRVIsR0FBRyxDQUFDWDtnQkFBVztjQUM5QixDQUFDLEVBQ0QsQ0FDRVcsR0FBRyxDQUFDMUIsbUJBQW1CLEdBQ25CMkIsRUFBRSxDQUFDLFdBQVcsRUFBRTtnQkFDZEksS0FBSyxFQUFFO2tCQUNMd0MsS0FBSyxFQUFFLEVBQUU7a0JBQ1RqSixLQUFLLEVBQUU7Z0JBQ1Q7Y0FDRixDQUFDLENBQUMsR0FDRnFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQ0QsR0FBRyxDQUFDSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUNqQyxFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLENBQ0YsQ0FBQyxDQUNILENBQUMsQ0FDSDtZQUNILENBQUM7WUFDRGUsS0FBSyxFQUFFO1VBQ1QsQ0FBQyxDQUNGLENBQUM7VUFDRlAsS0FBSyxFQUFFO1lBQ0x2RCxLQUFLLEVBQUUyQyxHQUFHLENBQUN2QyxJQUFJLENBQUN0RCxHQUFHO1lBQ25CMEcsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2QmQsR0FBRyxDQUFDOEMsSUFBSSxDQUFDOUMsR0FBRyxDQUFDdkMsSUFBSSxFQUFFLEtBQUssRUFBRXFELEdBQUcsQ0FBQztZQUNoQyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSixHQUFHLENBQUM5QixNQUFNLElBQUk4QixHQUFHLENBQUM5QixNQUFNLENBQUNlLE1BQU0sR0FDM0JnQixFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQzBCLEVBQUUsQ0FBQzFCLEdBQUcsQ0FBQzlCLE1BQU0sQ0FBQ2UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDckMsQ0FBQyxHQUNGZSxHQUFHLENBQUM0QixFQUFFLENBQUMsQ0FBQyxDQUNiLEVBQ0QsQ0FDRixDQUFDLEVBQ0Q1QixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLGNBQWMsRUFDZDtVQUNFSSxLQUFLLEVBQUU7WUFDTG5HLEVBQUUsRUFBRSxTQUFTO1lBQ2JOLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFdBQVcsRUFBRTtVQUNmO1FBQ0YsQ0FBQyxFQUNELENBQ0VxRyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7VUFDdEJJLEtBQUssRUFBRTtZQUFFMEMsTUFBTSxFQUFFO1VBQUssQ0FBQztVQUN2Qm5DLEtBQUssRUFBRTtZQUNMdkQsS0FBSyxFQUFFMkMsR0FBRyxDQUFDdkMsSUFBSSxDQUFDckQsT0FBTztZQUN2QnlHLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxHQUFHLEVBQUU7Y0FDdkJkLEdBQUcsQ0FBQzhDLElBQUksQ0FBQzlDLEdBQUcsQ0FBQ3ZDLElBQUksRUFBRSxTQUFTLEVBQUVxRCxHQUFHLENBQUM7WUFDcEMsQ0FBQztZQUNEQyxVQUFVLEVBQUU7VUFDZDtRQUNGLENBQUMsQ0FBQyxFQUNGZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDOUIsTUFBTSxJQUFJOEIsR0FBRyxDQUFDOUIsTUFBTSxDQUFDOUQsT0FBTyxHQUM1QjZGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxFQUFFLENBQ3hDSCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDMEIsRUFBRSxDQUFDMUIsR0FBRyxDQUFDOUIsTUFBTSxDQUFDOUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdEMsQ0FBQyxHQUNGNEYsR0FBRyxDQUFDNEIsRUFBRSxDQUFDLENBQUMsQ0FDYixFQUNELENBQ0YsQ0FBQyxFQUNENUIsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hILEVBQUUsQ0FDQSxjQUFjLEVBQ2Q7VUFDRUksS0FBSyxFQUFFO1lBQ0xuRyxFQUFFLEVBQUUsVUFBVTtZQUNkTixLQUFLLEVBQUUsVUFBVTtZQUNqQixXQUFXLEVBQUU7VUFDZjtRQUNGLENBQUMsRUFDRCxDQUNFcUcsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1VBQ3RCSSxLQUFLLEVBQUU7WUFBRTBDLE1BQU0sRUFBRTtVQUFLLENBQUM7VUFDdkJuQyxLQUFLLEVBQUU7WUFDTHZELEtBQUssRUFBRTJDLEdBQUcsQ0FBQ3ZDLElBQUksQ0FBQ3BELFFBQVE7WUFDeEJ3RyxRQUFRLEVBQUUsU0FBQUEsU0FBVUMsR0FBRyxFQUFFO2NBQ3ZCZCxHQUFHLENBQUM4QyxJQUFJLENBQUM5QyxHQUFHLENBQUN2QyxJQUFJLEVBQUUsVUFBVSxFQUFFcUQsR0FBRyxDQUFDO1lBQ3JDLENBQUM7WUFDREMsVUFBVSxFQUFFO1VBQ2Q7UUFDRixDQUFDLENBQUMsRUFDRmYsR0FBRyxDQUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hKLEdBQUcsQ0FBQzlCLE1BQU0sSUFBSThCLEdBQUcsQ0FBQzlCLE1BQU0sQ0FBQzdELFFBQVEsR0FDN0I0RixFQUFFLENBQUMsS0FBSyxFQUFFO1VBQUVFLFdBQVcsRUFBRTtRQUFjLENBQUMsRUFBRSxDQUN4Q0gsR0FBRyxDQUFDSSxFQUFFLENBQUNKLEdBQUcsQ0FBQzBCLEVBQUUsQ0FBQzFCLEdBQUcsQ0FBQzlCLE1BQU0sQ0FBQzdELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3ZDLENBQUMsR0FDRjJGLEdBQUcsQ0FBQzRCLEVBQUUsQ0FBQyxDQUFDLENBQ2IsRUFDRCxDQUNGLENBQUMsRUFDRDVCLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0EsY0FBYyxFQUNkO1VBQUVJLEtBQUssRUFBRTtZQUFFbkcsRUFBRSxFQUFFLE1BQU07WUFBRU4sS0FBSyxFQUFFLE1BQU07WUFBRSxXQUFXLEVBQUU7VUFBTztRQUFFLENBQUMsRUFDN0QsQ0FDRXFHLEVBQUUsQ0FDQSxlQUFlLEVBQ2YsQ0FDRUEsRUFBRSxDQUFDLGNBQWMsRUFBRTtVQUNqQkksS0FBSyxFQUFFO1lBQ0xuRyxFQUFFLEVBQUUsTUFBTTtZQUNWa0gsSUFBSSxFQUFFLE1BQU07WUFDWkMsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQjJCLFFBQVEsRUFBRTtVQUNaLENBQUM7VUFDRHBDLEtBQUssRUFBRTtZQUNMdkQsS0FBSyxFQUFFMkMsR0FBRyxDQUFDbEQsSUFBSTtZQUNmK0QsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2QmQsR0FBRyxDQUFDbEQsSUFBSSxHQUFHZ0UsR0FBRztZQUNoQixDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLEVBQ0ZmLEdBQUcsQ0FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYSCxFQUFFLENBQ0Esc0JBQXNCLEVBQ3RCLENBQ0VBLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtVQUN0QkksS0FBSyxFQUFFO1lBQ0wsYUFBYSxFQUFFLEVBQUU7WUFDakI0QyxLQUFLLEVBQUUsRUFBRTtZQUNURixNQUFNLEVBQUUsT0FBTztZQUNmLGVBQWUsRUFBRTtVQUNuQixDQUFDO1VBQ0R4QyxFQUFFLEVBQUU7WUFBRTJDLE9BQU8sRUFBRWxELEdBQUcsQ0FBQ047VUFBYyxDQUFDO1VBQ2xDa0IsS0FBSyxFQUFFO1lBQ0x2RCxLQUFLLEVBQUUyQyxHQUFHLENBQUN2QyxJQUFJLENBQUNuRCxRQUFRO1lBQ3hCdUcsUUFBUSxFQUFFLFNBQUFBLFNBQVVDLEdBQUcsRUFBRTtjQUN2QmQsR0FBRyxDQUFDOEMsSUFBSSxDQUFDOUMsR0FBRyxDQUFDdkMsSUFBSSxFQUFFLFVBQVUsRUFBRXFELEdBQUcsQ0FBQztZQUNyQyxDQUFDO1lBQ0RDLFVBQVUsRUFBRTtVQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxFQUNEZixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEosR0FBRyxDQUFDOUIsTUFBTSxJQUFJOEIsR0FBRyxDQUFDOUIsTUFBTSxDQUFDNUQsUUFBUSxHQUM3QjJGLEVBQUUsQ0FBQyxLQUFLLEVBQUU7VUFBRUUsV0FBVyxFQUFFO1FBQWMsQ0FBQyxFQUFFLENBQ3hDSCxHQUFHLENBQUNJLEVBQUUsQ0FBQ0osR0FBRyxDQUFDMEIsRUFBRSxDQUFDMUIsR0FBRyxDQUFDOUIsTUFBTSxDQUFDNUQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDdkMsQ0FBQyxHQUNGMEYsR0FBRyxDQUFDNEIsRUFBRSxDQUFDLENBQUMsQ0FDYixFQUNELENBQ0YsQ0FBQyxDQUNGLEVBQ0QsQ0FDRixDQUFDLEVBQ0Q1QixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLE9BQU8sRUFDUDtVQUFFRSxXQUFXLEVBQUU7UUFBTyxDQUFDLEVBQ3ZCLENBQ0VGLEVBQUUsQ0FDQSxPQUFPLEVBQ1A7VUFBRUUsV0FBVyxFQUFFO1FBQTZCLENBQUMsRUFDN0MsQ0FDRUYsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsd0JBQXdCO1VBQ3JDZ0MsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjlCLEtBQUssRUFBRTtZQUFFK0IsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnRCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXNCLE1BQU0sRUFBRTtjQUN2QixPQUFPOUIsR0FBRyxDQUFDdEMsVUFBVSxDQUFDLENBQUM7WUFDekI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUFDc0MsR0FBRyxDQUFDSSxFQUFFLENBQUMsOEJBQThCLENBQUMsQ0FDekMsQ0FBQyxFQUNESixHQUFHLENBQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWEgsRUFBRSxDQUNBLFVBQVUsRUFDVjtVQUNFRSxXQUFXLEVBQUUsK0JBQStCO1VBQzVDZ0MsS0FBSyxFQUFFO1lBQUUsV0FBVyxFQUFFO1VBQU8sQ0FBQztVQUM5QjlCLEtBQUssRUFBRTtZQUFFK0IsSUFBSSxFQUFFLEVBQUU7WUFBRVAsSUFBSSxFQUFFO1VBQUssQ0FBQztVQUMvQnRCLEVBQUUsRUFBRTtZQUNGQyxLQUFLLEVBQUUsU0FBQUEsTUFBVXNCLE1BQU0sRUFBRTtjQUN2QixPQUFPOUIsR0FBRyxDQUFDbkMsUUFBUSxDQUFDLENBQUM7WUFDdkI7VUFDRjtRQUNGLENBQUMsRUFDRCxDQUNFbUMsR0FBRyxDQUFDSSxFQUFFLENBQ0osY0FBYyxHQUNaSixHQUFHLENBQUMwQixFQUFFLENBQUMxQixHQUFHLENBQUN2QyxJQUFJLENBQUN2RCxFQUFFLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQyxHQUM3QyxZQUNKLENBQUMsQ0FFTCxDQUFDLENBQ0YsRUFDRCxDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQyxDQUNGO01BQ0gsQ0FBQztNQUNEaUgsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0VBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUNELElBQUlhLGVBQWUsR0FBRyxFQUFFO0FBQ3hCakMsTUFBTSxDQUFDa0MsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2pXM0IsSUFBTXpKLGNBQWMsR0FBRyxDQUNuQjtFQUFFNkUsS0FBSyxFQUFFLEVBQUU7RUFBRThGLElBQUksRUFBRTtBQUFLLENBQUMsRUFDekI7RUFBRTlGLEtBQUssRUFBRSxFQUFFO0VBQUU4RixJQUFJLEVBQUU7QUFBSyxDQUFDLEVBQ3pCO0VBQUU5RixLQUFLLEVBQUUsRUFBRTtFQUFFOEYsSUFBSSxFQUFFO0FBQUssQ0FBQyxFQUN6QjtFQUFFOUYsS0FBSyxFQUFFLEdBQUc7RUFBRThGLElBQUksRUFBRTtBQUFNLENBQUMsQ0FDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0xLQyxNQUFNO0VBQ1Y7QUFDRjtBQUNBO0VBQ0UsU0FBQUEsT0FBQSxFQUFjO0lBQUFDLGVBQUEsT0FBQUQsTUFBQTtJQUNaLElBQUksQ0FBQ2xGLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDbEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFb0YsWUFBQSxDQUFBRixNQUFBO0lBQUF6SixHQUFBO0lBQUEwRCxLQUFBLEVBS0EsU0FBQWtHLElBQUlDLEtBQUssRUFBRTtNQUNULE9BQU8sSUFBSSxDQUFDdEYsTUFBTSxDQUFDdUYsY0FBYyxDQUFDRCxLQUFLLENBQUM7SUFDMUM7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQTdKLEdBQUE7SUFBQTBELEtBQUEsRUFHQSxTQUFBcUcsSUFBQSxFQUFNO01BQ0osT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDMUYsTUFBTSxDQUFDLENBQUMyRixNQUFNLEdBQUcsQ0FBQztJQUM1Qzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWxLLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBd0IsSUFBSTJFLEtBQUssRUFBRTtNQUNULElBQUksSUFBSSxDQUFDdEYsTUFBTSxDQUFDc0YsS0FBSyxDQUFDLEVBQUU7UUFDdEIsT0FBTyxJQUFJLENBQUN0RixNQUFNLENBQUNzRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUI7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTdKLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBeUcsT0FBTzVGLE1BQU0sRUFBRTtNQUNiLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3RCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBdkUsR0FBQTtJQUFBMEQsS0FBQSxFQUtBLFNBQUEwRyxNQUFNUCxLQUFLLEVBQUU7TUFDWCxJQUFJQSxLQUFLLEVBQUU7UUFDVCxPQUFPLElBQUksQ0FBQ3RGLE1BQU0sQ0FBQ3NGLEtBQUssQ0FBQztRQUV6QjtNQUNGO01BRUEsSUFBSSxDQUFDdEYsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsQjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBdkUsR0FBQTtJQUFBMEQsS0FBQSxFQUdBLFNBQUEyRyxLQUFBLEVBQU87TUFBQSxJQUFBQyxjQUFBO01BQ0wsSUFBSXhJLEtBQUssR0FBRyxFQUFFO01BQ2QsSUFBSXlJLFVBQVUsSUFBQUQsY0FBQSxHQUFHTixNQUFNLENBQUNRLE1BQU0sQ0FBQyxJQUFJLENBQUNqRyxNQUFNLENBQUMsY0FBQStGLGNBQUEsY0FBQUEsY0FBQSxHQUFJLEVBQUU7TUFDakRDLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLFVBQUFuRyxLQUFLLEVBQUk7UUFDMUJ4QyxLQUFLLENBQUM0SSxJQUFJLENBQUNwRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdEIsQ0FBQyxDQUFDO01BRUYsT0FBT3hDLEtBQUs7SUFDZDtFQUFDO0VBQUEsT0FBQTJILE1BQUE7QUFBQTtBQUdILGlFQUFlQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RVk7QUFBQSxJQUUzQnpLLElBQUk7RUFDUjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsU0FBQUEsS0FBWUUsSUFBSSxFQUFFO0lBQUF3SyxlQUFBLE9BQUExSyxJQUFBO0lBQ2hCLElBQUksQ0FBQzJMLFlBQVksR0FBR3pMLElBQUk7SUFFeEIsS0FBSyxJQUFJMkssS0FBSyxJQUFJM0ssSUFBSSxFQUFFO01BQ3RCLElBQUksQ0FBQzJLLEtBQUssQ0FBQyxHQUFHM0ssSUFBSSxDQUFDMkssS0FBSyxDQUFDO0lBQzNCO0lBRUEsSUFBSSxDQUFDdEYsTUFBTSxHQUFHLElBQUlrRixrREFBTSxDQUFDLENBQUM7RUFDNUI7O0VBRUE7QUFDRjtBQUNBO0VBRkVFLFlBQUEsQ0FBQTNLLElBQUE7SUFBQWdCLEdBQUE7SUFBQTBELEtBQUEsRUFHQSxTQUFBeEUsS0FBQSxFQUFPO01BQ0wsSUFBSUEsSUFBSSxHQUFHLENBQUMsQ0FBQztNQUViLEtBQUssSUFBSTBMLFFBQVEsSUFBSSxJQUFJLENBQUNELFlBQVksRUFBRTtRQUN0Q3pMLElBQUksQ0FBQzBMLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQ0EsUUFBUSxDQUFDO01BQ2pDO01BRUEsT0FBTzFMLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBYyxHQUFBO0lBQUEwRCxLQUFBLEVBR0EsU0FBQTFDLE1BQUEsRUFBUTtNQUNOLEtBQUssSUFBSTZJLEtBQUssSUFBSSxJQUFJLENBQUNjLFlBQVksRUFBRTtRQUNuQyxJQUFJLENBQUNkLEtBQUssQ0FBQyxHQUFHLEVBQUU7TUFDbEI7TUFFQSxJQUFJLENBQUN0RixNQUFNLENBQUM2RixLQUFLLENBQUMsQ0FBQztJQUNyQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXBLLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBbUgsS0FBS0MsR0FBRyxFQUFFO01BQ1IsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxNQUFNLEVBQUVELEdBQUcsQ0FBQztJQUNqQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTlLLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBc0gsSUFBSUYsR0FBRyxFQUFFO01BQ1AsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxLQUFLLEVBQUVELEdBQUcsQ0FBQztJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTlLLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBdUgsTUFBTUgsR0FBRyxFQUFFO01BQ1QsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUVELEdBQUcsQ0FBQztJQUNsQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQTlLLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBd0gsUUFBT0osR0FBRyxFQUFFO01BQ1YsT0FBTyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUVELEdBQUcsQ0FBQztJQUNuQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBOUssR0FBQTtJQUFBMEQsS0FBQSxFQU1BLFNBQUFxSCxPQUFPSSxXQUFXLEVBQUVMLEdBQUcsRUFBRTtNQUFBLElBQUF2SixLQUFBO01BQ3ZCLE9BQU8sSUFBSTZKLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztRQUN0QzdHLEtBQUssQ0FBQzBHLFdBQVcsQ0FBQyxDQUFDTCxHQUFHLEVBQUV2SixLQUFJLENBQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ2pDMEMsSUFBSSxDQUFDLFVBQUM0QyxRQUFRLEVBQUs7VUFDbEJqRCxLQUFJLENBQUNnSyxTQUFTLENBQUMvRyxRQUFRLENBQUN0RixJQUFJLENBQUM7VUFFN0JtTSxPQUFPLENBQUM3RyxRQUFRLENBQUN0RixJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDb0YsS0FBSyxFQUFLO1VBQ2hCL0MsS0FBSSxDQUFDaUssTUFBTSxDQUFDbEgsS0FBSyxDQUFDRSxRQUFRLENBQUN0RixJQUFJLENBQUNxRixNQUFNLENBQUM7VUFFdkMrRyxNQUFNLENBQUNoSCxLQUFLLENBQUNFLFFBQVEsQ0FBQ3RGLElBQUksQ0FBQ3FGLE1BQU0sQ0FBQztRQUNwQyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDSjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXZFLEdBQUE7SUFBQTBELEtBQUEsRUFLQSxTQUFBNkgsVUFBVXJNLElBQUksRUFBRTtNQUNkO01BQ0E7O01BRUEsSUFBSSxDQUFDcUYsTUFBTSxDQUFDNkYsS0FBSyxDQUFDLENBQUM7SUFDckI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFO0lBQUFwSyxHQUFBO0lBQUEwRCxLQUFBLEVBS0EsU0FBQThILE9BQU9qSCxNQUFNLEVBQUU7TUFDYixJQUFJLENBQUNBLE1BQU0sQ0FBQzRGLE1BQU0sQ0FBQzVGLE1BQU0sQ0FBQztJQUM1QjtFQUFDO0lBQUF2RSxHQUFBO0lBQUEwRCxLQUFBLEVBR0QsU0FBQStILFlBQUEsRUFBYztNQUNaLElBQUl6TCxHQUFHLEdBQUcsS0FBSztNQUNmZ0ssTUFBTSxDQUFDUSxNQUFNLENBQUMsSUFBSSxDQUFDdEwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdUwsT0FBTyxDQUFDLFVBQVVpQixHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUNyRCxJQUFJRCxHQUFHLEVBQUU7VUFDUDFMLEdBQUcsR0FBRyxJQUFJO1FBQ1o7TUFDRixDQUFDLENBQUM7TUFDRixPQUFPQSxHQUFHO0lBQ1o7RUFBQztJQUFBQSxHQUFBO0lBQUEwRCxLQUFBLEVBRUQsU0FBQWtJLG1CQUFBLEVBQXFCO01BQ25CLElBQUk1TCxHQUFHLEdBQUcsS0FBSztNQUVmZ0ssTUFBTSxDQUFDUSxNQUFNLENBQUMsSUFBSSxDQUFDdEwsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdUwsT0FBTyxDQUFDLFVBQVVpQixHQUFHLEVBQUVDLEdBQUcsRUFBRTtRQUNyRCxJQUFJRCxHQUFHLElBQUlBLEdBQUcsS0FBSyxLQUFLLEVBQUU7VUFDeEIxTCxHQUFHLEdBQUcsSUFBSTtRQUNaO01BQ0YsQ0FBQyxDQUFDO01BQ0YsT0FBT0EsR0FBRztJQUNaO0VBQUM7RUFBQSxPQUFBaEIsSUFBQTtBQUFBO0FBS0gsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDbEpuQixpRUFBZTtFQUNiNkIsT0FBTyxFQUFFO0lBQ1BnTCxlQUFlLFdBQUFBLGdCQUFDQyxHQUFHLEVBQUU7TUFDbkIsT0FBT0EsR0FBRyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRURDLHFCQUFxQixXQUFBQSxzQkFBQ0gsR0FBRyxFQUFpQjtNQUFBLElBQWZJLEtBQUssR0FBQUMsU0FBQSxDQUFBakMsTUFBQSxRQUFBaUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxLQUFLO01BQ3RDLE9BQU8sQ0FBQ0QsS0FBSyxHQUFHSixHQUFHLENBQUNFLFdBQVcsQ0FBQyxDQUFDLEdBQUdGLEdBQUcsRUFBRU8sT0FBTyxDQUFDLHNCQUFzQixFQUFFLFVBQUFDLEtBQUs7UUFBQSxPQUFJQSxLQUFLLENBQUNDLFdBQVcsQ0FBQyxDQUFDO01BQUEsRUFBQztJQUN4RyxDQUFDO0lBRURDLFlBQVksV0FBQUEsYUFBQ0MsTUFBTSxFQUFFO01BQ25CLElBQUlBLE1BQU0sRUFBRTtRQUNWLE9BQU9BLE1BQU0sQ0FBQ1YsUUFBUSxDQUFDLENBQUMsQ0FBQ00sT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQztNQUNoRTtNQUNBLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFFREssV0FBVyxXQUFBQSxZQUFBLEVBQTJCO01BQUEsSUFBMUJDLE1BQU0sR0FBQVIsU0FBQSxDQUFBakMsTUFBQSxRQUFBaUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxHQUFHO01BQUEsSUFBRWpDLE1BQU0sR0FBQWlDLFNBQUEsQ0FBQWpDLE1BQUEsUUFBQWlDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQztNQUNsQyxJQUFJTCxHQUFHLEdBQUcsRUFBRTtNQUNaLEtBQUssSUFBSWMsQ0FBQyxHQUFHLENBQUMsRUFBRUMsQ0FBQyxHQUFHM0MsTUFBTSxFQUFFMEMsQ0FBQyxHQUFHQyxDQUFDLEVBQUUsRUFBRUQsQ0FBQyxFQUFFO1FBQ3RDZCxHQUFHLElBQUlhLE1BQU07TUFDZjtNQUNBLE9BQU9iLEdBQUc7SUFDWixDQUFDO0lBRURnQixPQUFPLFdBQUFBLFFBQUNDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO01BQ3hCLElBQUk5QyxNQUFNLEdBQUc4QyxRQUFRLENBQUM5QyxNQUFNO01BQzVCLEtBQUssSUFBSTBDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzFDLE1BQU0sRUFBRTBDLENBQUMsRUFBRSxFQUFFO1FBQy9CLElBQUlJLFFBQVEsQ0FBQ0osQ0FBQyxDQUFDLElBQUlHLE1BQU0sRUFBRSxPQUFPLElBQUk7TUFDeEM7TUFDQSxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBRURFLGlCQUFpQixXQUFBQSxrQkFBQ1IsTUFBTSxFQUFFUyxXQUFXLEVBQUU7TUFDckMsSUFBSUMsU0FBUyxHQUFHLENBQUM7TUFDakIsSUFBS1YsTUFBTSxHQUFHVyxJQUFJLENBQUNDLEtBQUssQ0FBQ1osTUFBTSxDQUFDLEtBQU0sQ0FBQyxFQUFFO1FBQ3ZDVSxTQUFTLEdBQUdDLElBQUksQ0FBQ0UsS0FBSyxDQUFDYixNQUFNLEVBQUVTLFdBQVcsQ0FBQztRQUMzQyxJQUFJQyxTQUFTLEtBQUssQ0FBQyxFQUFFO1VBQ25CLE9BQU9WLE1BQU0sQ0FBQ0osT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7UUFDcEM7UUFDQSxPQUFPYyxTQUFTLENBQUNJLGNBQWMsQ0FBQyxDQUFDLENBQUNsQixPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztNQUN4RCxDQUFDLE1BQU07UUFDTGMsU0FBUyxHQUFHQyxJQUFJLENBQUNFLEtBQUssQ0FBQ2IsTUFBTSxFQUFFUyxXQUFXLENBQUM7UUFDM0MsT0FBT0MsU0FBUyxDQUFDSSxjQUFjLENBQUMsQ0FBQyxDQUFDbEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7TUFDeEQ7SUFDRixDQUFDO0lBRURtQixZQUFZLFdBQUFBLGFBQUEsRUFBc0I7TUFBQSxJQUFyQnhOLEdBQUcsR0FBQW1NLFNBQUEsQ0FBQWpDLE1BQUEsUUFBQWlDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsTUFBTTtNQUFBLElBQUVySyxLQUFLLEdBQUFxSyxTQUFBLENBQUFqQyxNQUFBLE9BQUFpQyxTQUFBLE1BQUFDLFNBQUE7TUFDOUIsSUFBSXFCLEdBQUcsR0FBRyxFQUFFO01BQ1osSUFBSWIsQ0FBQyxHQUFHLENBQUM7TUFDVDlLLEtBQUssQ0FBQzJJLE9BQU8sQ0FBQyxVQUFBaUQsR0FBRyxFQUFJO1FBQ25CRCxHQUFHLElBQUlDLEdBQUcsQ0FBQzFOLEdBQUcsQ0FBQztRQUNmLElBQUk0TSxDQUFDLEdBQUc5SyxLQUFLLENBQUNvSSxNQUFNLEVBQUU7VUFDcEJ1RCxHQUFHLElBQUksSUFBSTtRQUNiO1FBQ0FiLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQztNQUVGLE9BQU9hLEdBQUc7SUFDWixDQUFDO0lBRURFLGFBQWEsV0FBQUEsY0FBQy9OLElBQUksRUFBRUQsRUFBRSxFQUFFRSxLQUFLLEVBQUU7TUFDN0IsSUFBSStOLENBQUMsR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQ2pPLElBQUksQ0FBQztNQUM1QixJQUFJa08sQ0FBQyxHQUFHLElBQUksQ0FBQ0QsU0FBUyxDQUFDbE8sRUFBRSxDQUFDO01BQzFCLElBQUlvTyxHQUFHLEdBQUcsSUFBSSxDQUFDRixTQUFTLENBQUNoTyxLQUFLLENBQUM7TUFDL0Isa0JBQUFvRCxNQUFBLENBQWtCMkssQ0FBQyxVQUFBM0ssTUFBQSxDQUFPNkssQ0FBQyxVQUFBN0ssTUFBQSxDQUFPOEssR0FBRztJQUN2QyxDQUFDO0lBRURGLFNBQVMsV0FBQUEsVUFBQy9CLEdBQUcsRUFBRTtNQUNiLGtCQUFBN0ksTUFBQSxDQUFrQjZJLEdBQUc7SUFDdkI7RUFDRjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEI7QUFFN0IsaUVBQWU7RUFDWGxJLE1BQU0sRUFBRSxDQUFDNEYsZ0RBQUksQ0FBQztFQUNkM0ksT0FBTyxFQUFFO0lBQ0xzRCxTQUFTLFdBQUFBLFVBQUEsRUFBaUM7TUFBQSxJQUFoQ3dDLE9BQU8sR0FBQXdGLFNBQUEsQ0FBQWpDLE1BQUEsUUFBQWlDLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsSUFBSTtNQUFBLElBQUU2QixLQUFLLEdBQUE3QixTQUFBLENBQUFqQyxNQUFBLE9BQUFpQyxTQUFBLE1BQUFDLFNBQUE7TUFBQSxJQUFFNkIsT0FBTyxHQUFBOUIsU0FBQSxDQUFBakMsTUFBQSxPQUFBaUMsU0FBQSxNQUFBQyxTQUFBO01BQ3BDLElBQUksQ0FBQzhCLFFBQVEsQ0FBQ3ZLLEtBQUssQ0FBQ3NLLE9BQU8sRUFBRTtRQUN6QkQsS0FBSyxFQUFFQSxLQUFLO1FBQ1pySCxPQUFPLEVBQUVBLE9BQU87UUFDaEJ3SCxLQUFLLEVBQUU7TUFDWCxDQUFDLENBQUM7SUFDTixDQUFDO0lBRURDLFNBQVMsV0FBQUEsVUFBQSxFQUFHO01BQ1IsT0FBTyxJQUFJaEQsT0FBTyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1FBQ3BDK0MsQ0FBQyxDQUFDQyxPQUFPLENBQUM7VUFDTk4sS0FBSyxFQUFFLGlCQUFpQjtVQUN4Qk8sT0FBTyxFQUFFLG1DQUFtQztVQUM1QzlHLElBQUksRUFBRSxLQUFLO1VBQ1grRyxZQUFZLEVBQUUsSUFBSTtVQUNsQkMsT0FBTyxFQUFFO1lBQ0xDLEdBQUcsRUFBRTtjQUNEbEYsSUFBSSxFQUFFLEtBQUs7Y0FDWG1GLFFBQVEsRUFBRSxTQUFTO2NBQ25CQyxNQUFNLEVBQUUsU0FBQUEsT0FBVUMsSUFBSSxFQUFFO2dCQUNwQnhELE9BQU8sQ0FBQztrQkFDSnJMLEdBQUcsRUFBRSxJQUFJO2tCQUNUd0osSUFBSSxFQUFFO2dCQUNWLENBQUMsQ0FBQztjQUNOO1lBQ0osQ0FBQztZQUNEc0YsTUFBTSxFQUFFLFNBQUFBLE9BQVV4SyxLQUFLLEVBQUU7Y0FDckJnSCxNQUFNLENBQUM7Z0JBQ0h0TCxHQUFHLEVBQUUsS0FBSztnQkFDVndKLElBQUksRUFBRTtjQUNWLENBQUMsQ0FBQztZQUNOO1VBQ0o7UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDO0lBRUR1RixhQUFhLFdBQUFBLGNBQUEsRUFBaUU7TUFBQSxJQUFBeE4sS0FBQTtNQUFBLElBQWhFeU0sS0FBSyxHQUFBN0IsU0FBQSxDQUFBakMsTUFBQSxRQUFBaUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxxQ0FBcUM7TUFBQSxJQUFFNkMsVUFBVSxHQUFBN0MsU0FBQSxDQUFBakMsTUFBQSxRQUFBaUMsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxFQUFFO01BRXhFLElBQUksQ0FBQzhDLE1BQU0sR0FBRyxFQUFFO01BQ2hCLElBQUksQ0FBQ2hPLFFBQVEsQ0FBQ2lPLGFBQWEsQ0FBQyxvREFBb0QsRUFBRTtRQUM5RWxCLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJtQixVQUFVLEVBQUUsSUFBSTtRQUNoQkMsU0FBUyxFQUFFLFFBQVE7UUFDbkJDLE9BQU8sRUFBRSxLQUFLO1FBQ2RDLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxXQUFXLEVBQUUsS0FBSztRQUNsQkMsZUFBZSxFQUFFLEtBQUs7UUFDdEJqSCxRQUFRLEVBQUU7TUFDZCxDQUFDLENBQUMsQ0FDRzNHLElBQUksQ0FBQyxVQUFBOEIsS0FBSyxFQUFJO1FBQ1huQyxLQUFJLENBQUMwTixNQUFNLEdBQUd2TCxLQUFLO01BQ3ZCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQStMLEdBQUcsRUFBSTtRQUNWO01BQUEsQ0FDSCxDQUFDOztNQUVOO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDSjtFQUNKO0FBRUosQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VEO0FBQ3FJO0FBQzdCO0FBQ3hHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsOEJBQThCLG1DQUFtQyx3QkFBd0IsR0FBRyxrQkFBa0IsOEJBQThCLHdCQUF3QixtQ0FBbUMseUNBQXlDLEdBQUcsb0JBQW9CLDhCQUE4Qix3QkFBd0IsR0FBRyxTQUFTLHlJQUF5SSxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsa1ZBQWtWLDhEQUE4RCx3eEVBQXd4RSxtQkFBbUIsc1JBQXNSLG9CQUFvQix5UkFBeVIscUJBQXFCLHV5QkFBdXlCLHFCQUFxQix1TkFBdU4scUJBQXFCLGdLQUFnSyxxQkFBcUIsMENBQTBDLG1DQUFtQyw0SEFBNEgseUJBQXlCLGNBQWMsOEJBQThCLHFEQUFxRCxvQkFBb0IsbUZBQW1GLGNBQWMsNEhBQTRILHlPQUF5TyxLQUFLLGtCQUFrQiwrQkFBK0IsaUJBQWlCLCtIQUErSCwwREFBMEQseUJBQXlCLFNBQVMsMEJBQTBCLHNCQUFzQiwwR0FBMEcsa0RBQWtELFFBQVEsZ0NBQWdDLDBDQUEwQyx1Q0FBdUMsb0RBQW9ELFdBQVcsMkJBQTJCLG9EQUFvRCw2Q0FBNkMsNkNBQTZDLFdBQVcsRUFBRSxPQUFPLHdDQUF3Qyw4QkFBOEIsOEJBQThCLDhKQUE4SixvRUFBb0UsMkdBQTJHLHlCQUF5QiwwREFBMEQsaURBQWlELHdDQUF3Qyw4QkFBOEIsb0RBQW9ELGlDQUFpQyxXQUFXLDJCQUEyQixtQ0FBbUMsV0FBVyxFQUFFLE9BQU8sd0NBQXdDLDhCQUE4Qiw4QkFBOEIseUxBQXlMLG9FQUFvRSxrSkFBa0osY0FBYyxnQ0FBZ0MsaURBQWlELHdDQUF3Qyw4QkFBOEIsb0RBQW9ELGlDQUFpQyxXQUFXLDJCQUEyQixtQ0FBbUMsV0FBVyxFQUFFLE9BQU8sdUJBQXVCLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLE9BQU8sdUJBQXVCLHdDQUF3Qyx1Q0FBdUMsNkJBQTZCLE9BQU8sNENBQTRDLCtDQUErQywyQ0FBMkMsT0FBTyw4REFBOEQsK0JBQStCLCtCQUErQixPQUFPLG9DQUFvQyw4QkFBOEIsMEVBQTBFLGlCQUFpQixTQUFTLDJCQUEyQixPQUFPLHFCQUFxQiwyQkFBMkIsNkNBQTZDLFVBQVUsTUFBTSw2Q0FBNkMsU0FBUyxPQUFPLE1BQU0sa0JBQWtCLDhCQUE4Qix3RkFBd0YsT0FBTyxpQ0FBaUMsNkNBQTZDLE9BQU8sTUFBTSxJQUFJLHdDQUF3Qyw4QkFBOEIsbUNBQW1DLHdCQUF3QixHQUFHLGtCQUFrQiw4QkFBOEIsd0JBQXdCLG1DQUFtQyx5Q0FBeUMsR0FBRyxvQkFBb0IsOEJBQThCLHdCQUF3QixHQUFHLCtCQUErQjtBQUNuNFQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGlFO0FBQ3hHLFlBQWlhOztBQUVqYTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxzVkFBTzs7OztBQUl4QixpRUFBZSxzVkFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pnRDtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDQSxDQUFzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3lGO0FBQzNCO0FBQ0w7OztBQUd4RTtBQUNBLENBQXNHO0FBQ3RHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLCtGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q21GO0FBQzNCO0FBQ0w7QUFDbEUsQ0FBMkY7OztBQUczRjtBQUNzRztBQUN0RyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSx5RkFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLCtMQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FDLENBQUMsaUVBQWUsb05BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCLENBQUMsaUVBQWUsOE1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUtBdlA7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL21vZGFscy9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9tb2RhbHMvZGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9tb2RhbHMvZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9mb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL21vZGFscy9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWU/ZTcwZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZT84MDg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9jb21wb25lbnRzL2luZGV4LnZ1ZT85MzZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9tb2RhbHMvZGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWwudnVlPzIyMTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL21vZGFscy9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWU/ODRhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvY29tcG9uZW50cy9pbmRleC52dWU/ZDI0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZT80ZTRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9tb2RhbHMvZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP2VhZTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL2NvbXBvbmVudHMvaW5kZXgudnVlP2E3NzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL21vZGFscy9kYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbC52dWU/MzgyYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZT83Yzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2RhaWx5VGltZVJlY29yZC9tb2RhbHMvZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP2JhMTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIj5cbiAgICA8aDEgY2xhc3M9XCJtLTAgbWItMiBmb250LXdlaWdodC1ib2xkIHRleHQtaW5mb1wiPkRhaWx5IFRpbWUgUmVjb3JkPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBAY2xpY2s9XCJjcmVhdGVEYWlseVRpbWVSZWNvcmRcIj5cbiAgICAgICAgICAgICAgPGItaWNvbiBpY29uPVwicGx1c1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvYi1pY29uPk5ld1xuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IG1iLTNcIj5cbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtci1zbS0yXCIgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCI+XG4gICAgICAgICAgICAgICAgU2hvd1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxuICAgICAgICAgICAgICAgIGlkPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cInNob3dFbnRyaWVzT3B0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgbXItc20tMiBtYi1zbS0wXCJcbiAgICAgICAgICAgICAgICBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW50cmllc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9iLWZvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICA8Yi1pbnB1dC1ncm91cCBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FwcGVuZD5cbiAgICAgICAgICAgICAgICA8Yi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpbHRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8Yi1vdmVybGF5IDpzaG93PVwiaXNPdmVybGF5XCIgcm91bmRlZD1cInNtXCI+XG4gICAgICAgICAgICAgIDxiLXRhYmxlXG4gICAgICAgICAgICAgICAgaG92ZXJcbiAgICAgICAgICAgICAgICBzdHJpcGVkXG4gICAgICAgICAgICAgICAgc2hvdy1lbXB0eVxuICAgICAgICAgICAgICAgIDppdGVtcz1cIml0ZW1zLmRhdGFcIlxuICAgICAgICAgICAgICAgIDpmaWVsZHM9XCJmaWVsZHNcIlxuICAgICAgICAgICAgICAgIDpwZXItcGFnZT1cIjBcIlxuICAgICAgICAgICAgICAgIDpidXN5PVwiaXNMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICA6Y3VycmVudC1wYWdlPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjdGFibGUtYnVzeT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBjbGFzcz1cImFsaWduLW1pZGRsZVwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZW1wdHk+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTUgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aT57eyBcIk5vIGRhdGEgZm91bmQhXCIgfX08L2k+XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoZW1wbG95ZWVfbmFtZSk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZGF0YS5pdGVtLmVtcGxveWVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGEuaXRlbS5lbXBsb3llZS5mdWxsX25hbWUgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKHRpbWVfaW4pPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm1hdFRpbWUoZGF0YS5pdGVtLnRpbWVfaW4pIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbCh0aW1lX291dCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZGF0YS5pdGVtLnRpbWVfb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZvcm1hdFRpbWUoZGF0YS5pdGVtLnRpbWVfb3V0KSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoZGF0ZSk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgZm9ybWF0RGF0ZShkYXRhLml0ZW0uZHRyX2RhdGUpIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChhY3Rpb25zKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZWRpdERhaWx5VGltZVJlY29yZChkYXRhLml0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFRElUXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZURhaWx5VGltZVJlY29yZChkYXRhLml0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcbiAgICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8dGVtcGxhdGUgdi1zbG90OnRhYmxlLWJ1c3k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IC0tPlxuICAgICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8L2Itb3ZlcmxheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgYFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxEYWlseVRpbWVSZWNvcmRNb2RhbFxuICAgICAgOmRhaWx5VGltZVJlY29yZEZvcm09XCJkYWlseVRpbWVSZWNvcmRGb3JtXCJcbiAgICAgIEBsb2FkRGFpbHlUaW1lUmVjb3Jkcz1cImxvYWREYWlseVRpbWVSZWNvcmRzKClcIlxuICAgID48L0RhaWx5VGltZVJlY29yZE1vZGFsPlxuICAgIDxEYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbFxuICAgICAgOmRhaWx5VGltZVJlY29yZEZvcm09XCJkYWlseVRpbWVSZWNvcmRGb3JtXCJcbiAgICAgIEBsb2FkRGFpbHlUaW1lUmVjb3Jkcz1cImxvYWREYWlseVRpbWVSZWNvcmRzKClcIlxuICAgID48L0RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCB7IHNob3dFbnRyaWVzT3B0IH0gZnJvbSBcIkBqcy9kYXRhXCI7XG5pbXBvcnQgRGFpbHlUaW1lUmVjb3JkTW9kYWwgZnJvbSBcIi4uL21vZGFscy9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWVcIjtcbmltcG9ydCBEYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbCBmcm9tIFwiLi4vbW9kYWxzL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgRGFpbHlUaW1lUmVjb3JkTW9kYWwsXG4gICAgRGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWwsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgIGN1cnJlbnRfcGFnZTogMSxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgIHNlYXJjaGVkOiBcIlwiLFxuICAgICAgc2hvd0VudHJpZXNPcHQsXG4gICAgICBpc092ZXJsYXk6IGZhbHNlLFxuICAgICAgdG90YWxSb3c6IDAsXG4gICAgICBzaG93aW5nOiB7XG4gICAgICAgIHRvOiAwLFxuICAgICAgICBmcm9tOiAwLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB0YWJsZVRvdGFsUm93czogXCJcIixcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImVtcGxveWVlX25hbWVcIixcbiAgICAgICAgICBsYWJlbDogXCJFbXBsb3llZSBOYW1lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwidGltZV9pblwiLFxuICAgICAgICAgIGxhYmVsOiBcIlRpbWUgSW5cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJ0aW1lX291dFwiLFxuICAgICAgICAgIGxhYmVsOiBcIlRpbWUgT3V0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiZGF0ZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIkRhdGVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgbGFiZWw6IFwiQWN0aW9uc1wiLFxuICAgICAgICAgIHRoQ2xhc3M6IFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICB0ZENsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgdGhTdHlsZTogeyB3aWR0aDogXCIxMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgXSxcblxuICAgICAgZGFpbHlUaW1lUmVjb3JkRm9ybTogbmV3IEZvcm0oe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgZW1wOiBcIlwiLFxuICAgICAgICB0aW1lX2luOiBcIlwiLFxuICAgICAgICB0aW1lX291dDogXCJcIixcbiAgICAgICAgZHRyX2RhdGU6IFwiXCIsXG4gICAgICB9KSxcblxuICAgICAgbW9kYWxJZDogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAuLi5tYXBBY3Rpb25zKFwiZGFpbHlUaW1lUmVjb3JkXCIsIFtcImxvYWRJdGVtc1wiXSksXG4gICAgY3JlYXRlRGFpbHlUaW1lUmVjb3JkKCkge1xuICAgICAgdGhpcy5kYWlseVRpbWVSZWNvcmRGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0uZW1wID0gXCJcIjtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS50aW1lX2luID0gXCJcIjtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS50aW1lX291dCA9IFwiXCI7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0uZHRyX2RhdGUgPSBcIlwiO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcImRhaWx5LXRpbWUtcmVjb3JkLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgZWRpdERhaWx5VGltZVJlY29yZChkYXRhKSB7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS5pZCA9IGRhdGEuaWQ7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0uZW1wID0gZGF0YS5lbXBsb3llZTtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS50aW1lX2luID0gZGF0YS50aW1lX2luO1xuICAgICAgdGhpcy5kYWlseVRpbWVSZWNvcmRGb3JtLnRpbWVfb3V0ID0gZGF0YS50aW1lX291dDtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS5kdHJfZGF0ZSA9IGRhdGEuZHRyX2RhdGU7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwiZGFpbHktdGltZS1yZWNvcmQtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBkZWxldGVEYWlseVRpbWVSZWNvcmQoZGF0YSkge1xuICAgICAgdGhpcy5kYWlseVRpbWVSZWNvcmRGb3JtLnJlc2V0KCk7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5kYWlseVRpbWVSZWNvcmRGb3JtLmVtcCA9IGRhdGEuZW1wbG95ZWU7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0udGltZV9pbiA9IGRhdGEudGltZV9pbjtcbiAgICAgIHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybS50aW1lX291dCA9IGRhdGEudGltZV9vdXQ7XG4gICAgICB0aGlzLmRhaWx5VGltZVJlY29yZEZvcm0uZHRyX2RhdGUgPSBkYXRhLmR0cl9kYXRlO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcImRhaWx5LXRpbWUtcmVjb3JkLWRlbGV0ZS1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGxvYWREYWlseVRpbWVSZWNvcmRzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXG4gICAgICB9O1xuICAgICAgdGhpcy5sb2FkSXRlbXMocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMudGFibGVUb3RhbFJvd3MgPSB0aGlzLml0ZW1zLnRvdGFsO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy50byA9IHRoaXMuaXRlbXMudG87XG4gICAgICAgICAgdGhpcy5zaG93aW5nLmZyb20gPSB0aGlzLml0ZW1zLmZyb207XG4gICAgICAgICAgdGhpcy5zaG93aW5nLnRvdGFsID0gdGhpcy5pdGVtcy50b3RhbDtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwZXJmb3JtU2VhcmNoOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHF1ZXJ5O1xuICAgIH0sIDEwMDApLFxuXG4gICAgZm9ybWF0VGltZShlbXBsb3llZVRpbWUpIHtcbiAgICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBlbXBsb3llZVRpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aW1lLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgIHRpbWUuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgIGNvbnN0IGFtcG0gPSB0aW1lLmdldEhvdXJzKCkgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICBsZXQgaG91cnMxMiA9IHRpbWUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIGNvbnZlcnQgMCB0byAxMlxuICAgICAgcmV0dXJuIGAke2hvdXJzMTJ9OiR7bWludXRlc30gJHthbXBtfWA7XG4gICAgfSxcblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpLmZvcm1hdChcIkREIE1NTU0gWVlZWVwiKTtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZERhaWx5VGltZVJlY29yZHMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJkYWlseVRpbWVSZWNvcmRcIiwge1xuICAgICAgaXRlbXM6IFwiZ2V0RGFpbHlUaW1lUmVjb3Jkc1wiLFxuICAgIH0pLFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgY3VycmVudF9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkRGFpbHlUaW1lUmVjb3JkcygpO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcGVyX3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWREYWlseVRpbWVSZWNvcmRzKCk7XG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXIocXVlcnkpIHtcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaChxdWVyeSk7XG4gICAgfSxcblxuICAgIHNlYXJjaGVkOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkRGFpbHlUaW1lUmVjb3JkcygpO1xuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8Yi1tb2RhbFxuICAgIGlkPVwiZGFpbHktdGltZS1yZWNvcmQtZGVsZXRlLW1vZGFsXCJcbiAgICBoaWRlLWhlYWRlclxuICAgIGhpZGUtZm9vdGVyXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBjZW50ZXJlZFxuICAgIGNvbnRlbnQtY2xhc3M9XCJib3JkZXItdG9wIGJnLWNyZWFtXCJcbiAgPlxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLXJvdz5cbiAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDQ+Q09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkQ8L2g0PlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7eyBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke2Zvcm0uZW1wLmZ1bGxfbmFtZX0gZnJvbSBEYWlseSBUaW1lcyByZWNvcmRzP2AgfX1cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIE5PXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICBZRVNcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wiZGFpbHlUaW1lUmVjb3JkRm9ybVwiXSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJkYWlseVRpbWVSZWNvcmRcIiwgW1wiZGVsZXRlRGFpbHlUaW1lUmVjb3JkXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwiZGFpbHktdGltZS1yZWNvcmQtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZURhaWx5VGltZVJlY29yZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcImRhbmdlclwiLFxuICAgICAgICAgICAgXCJSRUNPUkQgREVMRVRFRFwiLFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLmVtcC5mdWxsX25hbWV9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBEYWlseSBUaW1lIHJlY29yZHMuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWREYWlseVRpbWVSZWNvcmRzXCIpO1xuICAgICAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcImRhaWx5LXRpbWUtcmVjb3JkLWRlbGV0ZS1tb2RhbFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cImRhaWx5LXRpbWUtcmVjb3JkLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgRGFpbHkgVGltZSBSZWNvcmQnIDogJ0FkZCBEYWlseSBUaW1lIFJlY29yZCd9fTwvaDU+XG4gICAgICA8Yi1idXR0b25cbiAgICAgICAgcGlsbFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJtb2RhbENsb3NlKClcIlxuICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgIDwvYi1idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLWZvcm0+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJlbXBsb3llZS1uYW1lXCIgbGFiZWw9XCJFbXBsb3llZSBOYW1lXCIgbGFiZWwtZm9yPVwiZW1wbG95ZWUtbmFtZVwiPlxuICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cImVtcGxveWVlc1wiXG4gICAgICAgICAgICBsYWJlbD1cImZ1bGxfbmFtZVwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5lbXBcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJlbXBsb3llZXNcIlxuICAgICAgICAgICAgOmZpbHRlcmFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICA6bG9hZGluZz1cImlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nXCJcbiAgICAgICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaEVtcGxveWVlXCJcbiAgICAgICAgICAgIGlkPVwiZW1wbG95ZWVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2xpc3QtZm9vdGVyPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdC0yIG1iLTFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgc3F1YXJlZFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFoYXNFbXBsb3llZXNQcmV2UGFnZSB8fCBpc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvblByZXZQYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxiLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1ByZXZCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYWxsIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlByZXY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhaGFzRW1wbG95ZWVzTmV4dFBhZ2UgfHwgaXNOZXh0QnV0dG9uTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uTmV4dFBhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc05leHRCdXR0b25Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMuZW1wX2lkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy5lbXBfaWRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cInRpbWUtaW5cIiBsYWJlbD1cIlRpbWUgSW5cIiBsYWJlbC1mb3I9XCJ0aW1lLWluXCI+XG4gICAgICAgICAgPGItZm9ybS10aW1lcGlja2VyIHYtbW9kZWw9XCJmb3JtLnRpbWVfaW5cIiBsb2NhbGU9XCJlblwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy50aW1lX2luXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPnt7IGVycm9ycy50aW1lX2luWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwidGltZS1vdXRcIiBsYWJlbD1cIlRpbWUgT3V0XCIgbGFiZWwtZm9yPVwidGltZS1vdXRcIj5cbiAgICAgICAgICA8Yi1mb3JtLXRpbWVwaWNrZXIgdi1tb2RlbD1cImZvcm0udGltZV9vdXRcIiBsb2NhbGU9XCJlblwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy50aW1lX291dFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMudGltZV9vdXRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJkYXRlXCIgbGFiZWw9XCJEYXRlXCIgbGFiZWwtZm9yPVwiZGF0ZVwiPlxuICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICBpZD1cImRhdGVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJObyBkYXRlIHNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgID48L2ItZm9ybS1pbnB1dD5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZHRyX2RhdGVcIlxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XG4gICAgICAgICAgICAgICAgcmlnaHRcbiAgICAgICAgICAgICAgICBsb2NhbGU9XCJlbi1VU1wiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRhdGVcIlxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVwib25Db250ZXh0RGF0ZVwiXG4gICAgICAgICAgICAgID48L2ItZm9ybS1kYXRlcGlja2VyPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5kdHJfZGF0ZVwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMuZHRyX2RhdGVbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICA8L2ItZm9ybT5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiPlxuICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICB7eyBmb3JtLmlkID8gJ1NBVkUgQ0hBTkdFUycgOiAnU0FWRSd9fVxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wiZGFpbHlUaW1lUmVjb3JkRm9ybVwiXSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybSxcbiAgICAgIHNlYXJjaGVkOiBcIlwiLFxuICAgICAgZGF0ZTogXCJcIixcbiAgICAgIGVycm9yczoge30sXG4gICAgICBpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXG4gICAgICBpc05leHRCdXR0b25Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzUHJldkJ1dHRvbkxvYWRpbmc6IGZhbHNlLFxuICAgICAgZW1wbG95ZWVzQ3VycmVudFBhZ2U6IDEsXG4gICAgICBlbXBsb3llZXNQZXJQYWdlOiAxMCxcbiAgICAgIGVtcGxveWVlc0xhc3RQYWdlOiAwLFxuICAgICAgZW1wbG95ZWVzOiBbXSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkRW1wbG95ZWVzKClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcImRhaWx5VGltZVJlY29yZFwiLCBbXCJjcmVhdGVEYWlseVRpbWVSZWNvcmRcIiwgXCJ1cGRhdGVEYWlseVRpbWVSZWNvcmRcIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xuXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJkYWlseS10aW1lLXJlY29yZC1tb2RhbFwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XG5cbiAgICB9LFxuXG4gICAgbG9hZEVtcGxveWVlcygpIHtcbiAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgcGFnZTogdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSxcbiAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaGVkLFxuICAgICAgfVxuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChcIi9hcGkvZW1wbG95ZWVzXCIsIHsgcGFyYW1zIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZGF0YS5kYXRhO1xuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2UgPSBkYXRhLmxhc3RfcGFnZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzTmV4dEJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmlzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZUNyZWF0ZURhaWx5VGltZVJlY29yZCgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcblx0XHRcdFx0ZW1wX2lkOiB0aGlzLmZvcm0uZW1wLmlkLFxuICAgICAgICB0aW1lX2luOiB0aGlzLmZvcm0udGltZV9pbixcbiAgICAgICAgdGltZV9vdXQ6IHRoaXMuZm9ybS50aW1lX291dCxcbiAgICAgICAgZHRyX2RhdGU6IHRoaXMuZm9ybS5kdHJfZGF0ZVxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmNyZWF0ZURhaWx5VGltZVJlY29yZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0uZW1wLmZ1bGxfbmFtZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBEYWlseSBUaW1lIFJlY29yZGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkRGFpbHlUaW1lUmVjb3Jkc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGhhbmRsZVVwZGF0ZURhaWx5VGltZVJlY29yZCgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcblx0XHRcdFx0ZW1wX2lkOiB0aGlzLmZvcm0uZW1wLmlkLFxuICAgICAgICB0aW1lX2luOiB0aGlzLmZvcm0udGltZV9pbixcbiAgICAgICAgdGltZV9vdXQ6IHRoaXMuZm9ybS50aW1lX291dCxcbiAgICAgICAgZHRyX2RhdGU6IHRoaXMuZm9ybS5kdHJfZGF0ZVxuXHRcdFx0fVxuXG4gICAgICB0aGlzLnVwZGF0ZURhaWx5VGltZVJlY29yZChwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIFVQREFURURcIixcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBEYWlseSBUaW1lIFJlY29yZCBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWREYWlseVRpbWVSZWNvcmRzXCIpO1xuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25OZXh0UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICs9IDE7XG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcbiAgICB9LFxuXG4gICAgb25QcmV2UGFnZSgpIHtcbiAgICAgIHRoaXMuaXNQcmV2QnV0dG9uTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlIC09IDE7XG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcbiAgICB9LFxuXG4gICAgb25TZWFyY2hFbXBsb3llZShzZWFyY2gsIGxvYWRpbmcpIHtcbiAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoRW1wbG95ZWUoc2VhcmNoKTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaEVtcGxveWVlOiBfLmRlYm91bmNlKGZ1bmN0aW9uIChzZWFyY2gpIHtcbiAgICAgIHRoaXMuc2VhcmNoZWQgPSBzZWFyY2g7XG5cbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xuICAgIH0sIDEwMDApLFxuXG4gICAgb25Db250ZXh0RGF0ZShjdHgpIHtcbiAgICAgIGlmIChjdHguc2VsZWN0ZWRZTUQpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0ZSA9IFwiXCI7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZURhaWx5VGltZVJlY29yZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVEYWlseVRpbWVSZWNvcmQoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgaGFzRW1wbG95ZWVzTmV4dFBhZ2UoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlICE9PSB0aGlzLmVtcGxveWVlc0xhc3RQYWdlXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBoYXNFbXBsb3llZXNQcmV2UGFnZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtcGxveWVlc0N1cnJlbnRQYWdlID4gMTtcbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkRhaWx5IFRpbWUgUmVjb3JkXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZURhaWx5VGltZVJlY29yZCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwicGx1c1wiLCBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJOZXdcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOCBtYi0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaW5saW5lOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLXNtLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgU2hvd1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIG1yLXNtLTIgbWItc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zaG93RW50cmllc09wdCxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBlcl9wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwZXJfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgRW50cmllc1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1pbnB1dC1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pbnB1dC1ncm91cC10ZXh0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zZWFyY2hcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBoZXJlLi4uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItb3ZlcmxheVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzaG93OiBfdm0uaXNPdmVybGF5LCByb3VuZGVkOiBcInNtXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItdGFibGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctZW1wdHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uaXRlbXMuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3k6IF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnQtcGFnZVwiOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTQgbWItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcC01IHRleHQtbXV0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChlbXBsb3llZV9uYW1lKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLmVtcGxveWVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5lbXBsb3llZS5mdWxsX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKHRpbWVfaW4pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoZGF0YS5pdGVtLnRpbWVfaW4pKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwodGltZV9vdXQpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0udGltZV9vdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybWF0VGltZShkYXRhLml0ZW0udGltZV9vdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChkYXRlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtYXREYXRlKGRhdGEuaXRlbS5kdHJfZGF0ZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdERhaWx5VGltZVJlY29yZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEVESVRcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJkYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlRGFpbHlUaW1lUmVjb3JkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgREVMRVRFXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBgU2hvd2luZyAke192bS5zaG93aW5nLmZyb219IHRvICR7X3ZtLnNob3dpbmcudG99IG9mICR7X3ZtLnNob3dpbmcudG90YWx9IGVudHJpZXNgXG4gICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbC1yb3dzXCI6IF92bS50YWJsZVRvdGFsUm93cyxcbiAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIkRhaWx5VGltZVJlY29yZE1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZGFpbHlUaW1lUmVjb3JkRm9ybTogX3ZtLmRhaWx5VGltZVJlY29yZEZvcm0gfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBsb2FkRGFpbHlUaW1lUmVjb3JkczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkRGFpbHlUaW1lUmVjb3JkcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyBkYWlseVRpbWVSZWNvcmRGb3JtOiBfdm0uZGFpbHlUaW1lUmVjb3JkRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWREYWlseVRpbWVSZWNvcmRzOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWREYWlseVRpbWVSZWNvcmRzKClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwiZGFpbHktdGltZS1yZWNvcmQtZGVsZXRlLW1vZGFsXCIsXG4gICAgICBcImhpZGUtaGVhZGVyXCI6IFwiXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBjZW50ZXJlZDogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkRcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7X3ZtLmZvcm0uZW1wLmZ1bGxfbmFtZX0gZnJvbSBEYWlseSBUaW1lcyByZWNvcmRzP2BcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBOT1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBZRVNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwiZGFpbHktdGltZS1yZWNvcmQtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uaWRcbiAgICAgICAgICAgICAgICAgICAgPyBcIkVkaXQgRGFpbHkgVGltZSBSZWNvcmRcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiQWRkIERhaWx5IFRpbWUgUmVjb3JkXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZW1wbG95ZWUtbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIE5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcImVtcGxveWVlLW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtcGxveWVlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiZnVsbF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZW1wbG95ZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJlbXBsb3llZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoRW1wbG95ZWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImxpc3QtZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0yIG1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmhhc0VtcGxveWVlc1ByZXZQYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzUHJldkJ1dHRvbkxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblByZXZQYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNQcmV2QnV0dG9uTG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQcmV2XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5oYXNFbXBsb3llZXNOZXh0UGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc05leHRCdXR0b25Mb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcImxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25OZXh0UGFnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzTmV4dEJ1dHRvbkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiTmV4dFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1wXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy5lbXBfaWRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbXBfaWRbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0aW1lLWluXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGltZSBJblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwidGltZS1pblwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tdGltZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9jYWxlOiBcImVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRpbWVfaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aW1lX2luXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udGltZV9pblwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMudGltZV9pblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnRpbWVfaW5bMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0aW1lLW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRpbWUgT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJ0aW1lLW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tdGltZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9jYWxlOiBcImVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRpbWVfb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGltZV9vdXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50aW1lX291dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMudGltZV9vdXRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy50aW1lX291dFswXSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybS1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBpZDogXCJkYXRlXCIsIGxhYmVsOiBcIkRhdGVcIiwgXCJsYWJlbC1mb3JcIjogXCJkYXRlXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vIGRhdGUgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXAtYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1kYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uLW9ubHlcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogXCJlbi1VU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY29udGV4dDogX3ZtLm9uQ29udGV4dERhdGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kdHJfZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJkdHJfZGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kdHJfZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLmR0cl9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMuZHRyX2RhdGVbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBzaG93RW50cmllc09wdCA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogXCIxMFwiIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6IFwiMzBcIiB9LFxuICAgIHsgdmFsdWU6IDUwLCB0ZXh0OiBcIjUwXCIgfSxcbiAgICB7IHZhbHVlOiAxMDAsIHRleHQ6IFwiMTAwXCIgfSxcbl1cblxuXG5leHBvcnQge1xuICAgIHNob3dFbnRyaWVzT3B0LFxufSIsImNsYXNzIEVycm9ycyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRXJyb3JzIGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYW4gZXJyb3JzIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGhhcyhmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHdlIGhhdmUgYW55IGVycm9ycy5cbiAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgZ2V0KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkIHRoZSBuZXcgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICByZWNvcmQoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGZpZWxkXG4gICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZXJyb3JzLlxuICAgKi9cbiAgbGlzdCgpIHtcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGxldCBlcnJvckFycmF5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykgPz8gW11cbiAgICBlcnJvckFycmF5LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgaXRlbXMucHVzaChlcnJvclswXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG4iLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG5jbGFzcyBGb3JtIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcblxuICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgKi9cbiAgZGF0YSgpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwb3N0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwdXQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIC8vIHRlbXBvcmFyeVxuICAgIC8vIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgZmFpbGVkIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgb25GYWlsKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xuICB9XG5cblxuICBpc0RhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaXNEZWZhdWx0RGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsICYmIHZhbCAhPT0gJ0FkZCcpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgc3RyaW5nTG93ZXJDYXNlKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0ciwgbG93ZXIgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChsb3dlciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyKS5yZXBsYWNlKC8oPzpefFxcc3xbXCInKFt7XSkrXFxTL2csIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRBbW91bnQoYW1vdW50KSB7XG4gICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBhbW91bnQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIGVtcHR5U3RyaW5nKGNoYXJhYyA9ICctJywgbGVuZ3RoID0gNCkge1xuICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBzdHIgKz0gY2hhcmFjXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBpbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICAgIHZhciBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB3aG9sZU51bWJlckZvcm1hdChhbW91bnQsIGRlY2ltYVBsYWNlKSB7XG4gICAgICB2YXIgYW1vdW50Tm93ID0gMFxuICAgICAgaWYgKChhbW91bnQgLSBNYXRoLmZsb29yKGFtb3VudCkpICE9PSAwKSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIGlmIChhbW91bnROb3cgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYW1vdW50LnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWFfY29uY2F0KGtleSA9ICduYW1lJywgaXRlbXMpIHtcbiAgICAgIGxldCBzZXQgPSAnJztcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIGl0ZW1zLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgc2V0ICs9IGVsZVtrZXldO1xuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSxcblxuICAgIHNob3dpbmdfbGFiZWwoZnJvbSwgdG8sIHRvdGFsKSB7XG4gICAgICBsZXQgZiA9IHRoaXMudG9fc3Ryb25nKGZyb20pXG4gICAgICBsZXQgdCA9IHRoaXMudG9fc3Ryb25nKHRvKVxuICAgICAgbGV0IHRvdCA9IHRoaXMudG9fc3Ryb25nKHRvdGFsKVxuICAgICAgcmV0dXJuIGBTaG93aW5nICR7Zn0gdG8gJHt0fSBvZiAke3RvdH0gcmVzdWx0c2A7XG4gICAgfSxcblxuICAgIHRvX3N0cm9uZyhzdHIpIHtcbiAgICAgIHJldHVybiBgPHN0cm9uZz4ke3N0cn08L3N0cm9uZz5gO1xuICAgIH1cbiAgfSxcbn07XG5cbiIsImltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW3RleHRdLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRvYXN0KHZhcmlhbnQgPSBudWxsLCB0aXRsZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy4kYnZUb2FzdC50b2FzdChtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0NvbmZpcm0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICQuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIENvbmZpcm0hJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBkYXRhPycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNsYXNzOiAnYnRuLXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUNvbmZpcm0odGl0bGUgPSAnQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkQnLCBtb2R1bGVOYW1lID0gXCJcIikge1xuXG4gICAgICAgICAgICB0aGlzLmJveFR3byA9ICcnXG4gICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIGV2ZXJ5dGhpbmcuJywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIENvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBva1RpdGxlOiAnWUVTJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcbiAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHdvID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgU3dhbFxuICAgICAgICAgICAgLy8gICAgICAgICAuZmlyZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBkYXRhIGZvcm0gJHttb2R1bGVOYW1lfSByZWNvcmRzP2AsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL21vZGFscy9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTRTQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcImRhaWx5LXRpbWUtcmVjb3JkLW1vZGFsXFxcIlxcbiAgICBoaWRlLWZvb3RlclxcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxcbiAgICBjb250ZW50LWNsYXNzPVxcXCJib3JkZXItdG9wIGJnLWNyZWFtXFxcIlxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cXG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XFxuICAgICAgXFxuICAgICAgPGg1IGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXFxcIj57eyBmb3JtLmlkID8gJ0VkaXQgRGFpbHkgVGltZSBSZWNvcmQnIDogJ0FkZCBEYWlseSBUaW1lIFJlY29yZCd9fTwvaDU+XFxuICAgICAgPGItYnV0dG9uXFxuICAgICAgICBwaWxsXFxuICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXFxuICAgICAgICBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICA8L2ItYnV0dG9uPlxcbiAgICA8L3RlbXBsYXRlPlxcblxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGItZm9ybT5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImVtcGxveWVlLW5hbWVcXFwiIGxhYmVsPVxcXCJFbXBsb3llZSBOYW1lXFxcIiBsYWJlbC1mb3I9XFxcImVtcGxveWVlLW5hbWVcXFwiPlxcbiAgICAgICAgICA8di1zZWxlY3RcXG4gICAgICAgICAgICBuYW1lPVxcXCJlbXBsb3llZXNcXFwiXFxuICAgICAgICAgICAgbGFiZWw9XFxcImZ1bGxfbmFtZVxcXCJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmVtcFxcXCJcXG4gICAgICAgICAgICA6b3B0aW9ucz1cXFwiZW1wbG95ZWVzXFxcIlxcbiAgICAgICAgICAgIDpmaWx0ZXJhYmxlPVxcXCJmYWxzZVxcXCJcXG4gICAgICAgICAgICA6bG9hZGluZz1cXFwiaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgQHNlYXJjaD1cXFwib25TZWFyY2hFbXBsb3llZVxcXCJcXG4gICAgICAgICAgICBpZD1cXFwiZW1wbG95ZWVzXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPHRlbXBsYXRlICNsaXN0LWZvb3Rlcj5cXG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwibXQtMiBtYi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZC1mbGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b25cXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cXFwic21cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XFxcImxpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBibG9ja1xcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXFxuICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiIWhhc0VtcGxveWVlc1ByZXZQYWdlIHx8IGlzUHJldkJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib25QcmV2UGFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzUHJldkJ1dHRvbkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cXFwiU21hbGwgU3Bpbm5lclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlByZXY8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVkXFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcIiFoYXNFbXBsb3llZXNOZXh0UGFnZSB8fCBpc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVxcXCJsaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgYmxvY2tcXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbk5leHRQYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc21hbGxcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpc05leHRCdXR0b25Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+TmV4dDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICA8L3Ytc2VsZWN0PlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMuZW1wX2lkXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5lbXBfaWRbMF0gfX08L2Rpdj5cXG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxcblxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwidGltZS1pblxcXCIgbGFiZWw9XFxcIlRpbWUgSW5cXFwiIGxhYmVsLWZvcj1cXFwidGltZS1pblxcXCI+XFxuICAgICAgICAgIDxiLWZvcm0tdGltZXBpY2tlciB2LW1vZGVsPVxcXCJmb3JtLnRpbWVfaW5cXFwiIGxvY2FsZT1cXFwiZW5cXFwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy50aW1lX2luXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy50aW1lX2luWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcInRpbWUtb3V0XFxcIiBsYWJlbD1cXFwiVGltZSBPdXRcXFwiIGxhYmVsLWZvcj1cXFwidGltZS1vdXRcXFwiPlxcbiAgICAgICAgICA8Yi1mb3JtLXRpbWVwaWNrZXIgdi1tb2RlbD1cXFwiZm9ybS50aW1lX291dFxcXCIgbG9jYWxlPVxcXCJlblxcXCI+PC9iLWZvcm0tdGltZXBpY2tlcj5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLnRpbWVfb3V0XFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy50aW1lX291dFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJkYXRlXFxcIiBsYWJlbD1cXFwiRGF0ZVxcXCIgbGFiZWwtZm9yPVxcXCJkYXRlXFxcIj5cXG4gICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XFxuICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgICAgaWQ9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJObyBkYXRlIHNlbGVjdGVkXFxcIlxcbiAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICA+PC9iLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1kYXRlcGlja2VyXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uZHRyX2RhdGVcXFwiXFxuICAgICAgICAgICAgICAgIGJ1dHRvbi1vbmx5XFxuICAgICAgICAgICAgICAgIHJpZ2h0XFxuICAgICAgICAgICAgICAgIGxvY2FsZT1cXFwiZW4tVVNcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRhdGVcXFwiXFxuICAgICAgICAgICAgICAgIEBjb250ZXh0PVxcXCJvbkNvbnRleHREYXRlXFxcIlxcbiAgICAgICAgICAgICAgPjwvYi1mb3JtLWRhdGVwaWNrZXI+XFxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLWFwcGVuZD5cXG4gICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMuZHRyX2RhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLmR0cl9kYXRlWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgYXhpb3MgZnJvbSBcXFwiYXhpb3NcXFwiO1xcbmltcG9ydCB0b2FzdCBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaXhpbnM6IFt0b2FzdF0sXFxuXFxuICBwcm9wczogW1xcXCJkYWlseVRpbWVSZWNvcmRGb3JtXFxcIl0sXFxuXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGZvcm06IHRoaXMuZGFpbHlUaW1lUmVjb3JkRm9ybSxcXG4gICAgICBzZWFyY2hlZDogXFxcIlxcXCIsXFxuICAgICAgZGF0ZTogXFxcIlxcXCIsXFxuICAgICAgZXJyb3JzOiB7fSxcXG4gICAgICBpc0VtcGxveWVlc0Ryb3Bkb3duTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNOZXh0QnV0dG9uTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNQcmV2QnV0dG9uTG9hZGluZzogZmFsc2UsXFxuICAgICAgZW1wbG95ZWVzQ3VycmVudFBhZ2U6IDEsXFxuICAgICAgZW1wbG95ZWVzUGVyUGFnZTogMTAsXFxuICAgICAgZW1wbG95ZWVzTGFzdFBhZ2U6IDAsXFxuICAgICAgZW1wbG95ZWVzOiBbXSxcXG4gICAgfTtcXG4gIH0sXFxuXFxuICBtb3VudGVkKCkge1xcbiAgICB0aGlzLmxvYWRFbXBsb3llZXMoKVxcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgLi4ubWFwQWN0aW9ucyhcXFwiZGFpbHlUaW1lUmVjb3JkXFxcIiwgW1xcXCJjcmVhdGVEYWlseVRpbWVSZWNvcmRcXFwiLCBcXFwidXBkYXRlRGFpbHlUaW1lUmVjb3JkXFxcIl0pLFxcbiAgICBcXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XFxuXFxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFxcXCJkYWlseS10aW1lLXJlY29yZC1tb2RhbFxcXCIpO1xcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XFxuXFxuICAgIH0sXFxuXFxuICAgIGxvYWRFbXBsb3llZXMoKSB7XFxuICAgICAgbGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIHBlcl9wYWdlOiAxMCxcXG4gICAgICAgIHBhZ2U6IHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UsXFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXFxuICAgICAgfVxcbiAgICAgIGF4aW9zXFxuICAgICAgICAuZ2V0KFxcXCIvYXBpL2VtcGxveWVlc1xcXCIsIHsgcGFyYW1zIH0pXFxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGE7XFxuICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0gZGF0YS5kYXRhO1xcbiAgICAgICAgICB0aGlzLmVtcGxveWVlc0xhc3RQYWdlID0gZGF0YS5sYXN0X3BhZ2U7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgIHRoaXMuaXNOZXh0QnV0dG9uTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICB0aGlzLmlzUHJldkJ1dHRvbkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBoYW5kbGVDcmVhdGVEYWlseVRpbWVSZWNvcmQoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuXFx0XFx0XFx0XFx0ZW1wX2lkOiB0aGlzLmZvcm0uZW1wLmlkLFxcbiAgICAgICAgdGltZV9pbjogdGhpcy5mb3JtLnRpbWVfaW4sXFxuICAgICAgICB0aW1lX291dDogdGhpcy5mb3JtLnRpbWVfb3V0LFxcbiAgICAgICAgZHRyX2RhdGU6IHRoaXMuZm9ybS5kdHJfZGF0ZVxcblxcdFxcdFxcdH1cXG5cXG4gICAgICB0aGlzLmNyZWF0ZURhaWx5VGltZVJlY29yZChwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgXFxcIk5FVyBSRUNPUkQgQ1JFQVRFRFxcXCIsXFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLmVtcC5mdWxsX25hbWV9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSBuZXcgRGFpbHkgVGltZSBSZWNvcmRgXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWREYWlseVRpbWVSZWNvcmRzXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBoYW5kbGVVcGRhdGVEYWlseVRpbWVSZWNvcmQoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdGVtcF9pZDogdGhpcy5mb3JtLmVtcC5pZCxcXG4gICAgICAgIHRpbWVfaW46IHRoaXMuZm9ybS50aW1lX2luLFxcbiAgICAgICAgdGltZV9vdXQ6IHRoaXMuZm9ybS50aW1lX291dCxcXG4gICAgICAgIGR0cl9kYXRlOiB0aGlzLmZvcm0uZHRyX2RhdGVcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy51cGRhdGVEYWlseVRpbWVSZWNvcmQocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIFxcXCJSRUNPUkQgVVBEQVRFRFxcXCIsXFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIERhaWx5IFRpbWUgUmVjb3JkIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXFxuICAgICAgICAgICk7XFxuICAgICAgICAgIHRoaXMuJGVtaXQoXFxcImxvYWREYWlseVRpbWVSZWNvcmRzXFxcIik7XFxuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XFxuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICBvbk5leHRQYWdlKCkge1xcbiAgICAgIHRoaXMuaXNOZXh0QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSArPSAxO1xcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LFxcblxcbiAgICBvblByZXZQYWdlKCkge1xcbiAgICAgIHRoaXMuaXNQcmV2QnV0dG9uTG9hZGluZyA9IHRydWU7XFxuICAgICAgdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSAtPSAxO1xcbiAgICAgIHRoaXMubG9hZEVtcGxveWVlcygpO1xcbiAgICB9LFxcblxcbiAgICBvblNlYXJjaEVtcGxveWVlKHNlYXJjaCwgbG9hZGluZykge1xcbiAgICAgIHRoaXMuaXNFbXBsb3llZXNEcm9wZG93bkxvYWRpbmcgPSB0cnVlO1xcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaEVtcGxveWVlKHNlYXJjaCk7XFxuICAgIH0sXFxuXFxuICAgIHBlcmZvcm1TZWFyY2hFbXBsb3llZTogXy5kZWJvdW5jZShmdW5jdGlvbiAoc2VhcmNoKSB7XFxuICAgICAgdGhpcy5zZWFyY2hlZCA9IHNlYXJjaDtcXG5cXG4gICAgICB0aGlzLmxvYWRFbXBsb3llZXMoKTtcXG4gICAgfSwgMTAwMCksXFxuXFxuICAgIG9uQ29udGV4dERhdGUoY3R4KSB7XFxuICAgICAgaWYgKGN0eC5zZWxlY3RlZFlNRCkge1xcbiAgICAgICAgdGhpcy5kYXRlID0gdGhpcy5tb21lbnQoY3R4LnNlbGVjdGVkWU1EKS5mb3JtYXQoJ0REIE1NTU0gWVlZWScpO1xcbiAgICAgICAgcmV0dXJuO1xcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLmRhdGUgPSBcXFwiXFxcIjtcXG4gICAgfSxcXG5cXG4gICAgb25TdWJtaXQoKSB7XFxuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xcbiAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVEYWlseVRpbWVSZWNvcmQoKTtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdGhpcy5oYW5kbGVDcmVhdGVEYWlseVRpbWVSZWNvcmQoKTtcXG4gICAgICB9XFxuICAgIH0sXFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgaGFzRW1wbG95ZWVzTmV4dFBhZ2UoKSB7XFxuICAgICAgcmV0dXJuIChcXG4gICAgICAgIHRoaXMuZW1wbG95ZWVzQ3VycmVudFBhZ2UgIT09IHRoaXMuZW1wbG95ZWVzTGFzdFBhZ2VcXG4gICAgICApO1xcbiAgICB9LFxcblxcbiAgICBoYXNFbXBsb3llZXNQcmV2UGFnZSgpIHtcXG4gICAgICByZXR1cm4gdGhpcy5lbXBsb3llZXNDdXJyZW50UGFnZSA+IDE7XFxuICAgIH0sXFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYWRkNjIwNiZsYW5nPWNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2ZDY4YmVhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg2ZDY4YmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg2ZDY4YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg2ZDY4YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODZkNjhiZWFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NmQ2OGJlYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZGFpbHlUaW1lUmVjb3JkL2NvbXBvbmVudHMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2EzZTBmOTJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2EzZTBmOTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2EzZTBmOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2EzZTBmOTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTNlMGY5MlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdhM2UwZjkyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhZGQ2MjA2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBhZGQ2MjA2Jmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGFkZDYyMDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGFkZDYyMDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGFkZDYyMDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYWRkNjIwNlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBhZGQ2MjA2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9kYWlseVRpbWVSZWNvcmQvbW9kYWxzL2RhaWx5VGltZVJlY29yZE1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHlUaW1lUmVjb3JkRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2ZDY4YmVhXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhaWx5VGltZVJlY29yZERlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTNlMGY5MlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseVRpbWVSZWNvcmRNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGFkZDYyMDZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHlUaW1lUmVjb3JkTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGFkZDYyMDYmbGFuZz1jc3NcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50KFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi8sXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9XG4gICAgdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbicgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnMgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbihoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKSA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXBBY3Rpb25zIiwibWFwR2V0dGVycyIsInNob3dFbnRyaWVzT3B0IiwiRGFpbHlUaW1lUmVjb3JkTW9kYWwiLCJEYWlseVRpbWVSZWNvcmREZWxldGVNb2RhbCIsIkZvcm0iLCJjb21wb25lbnRzIiwiZGF0YSIsInBlcl9wYWdlIiwiY3VycmVudF9wYWdlIiwiaXNMb2FkaW5nIiwiZmlsdGVyIiwic2VhcmNoZWQiLCJpc092ZXJsYXkiLCJ0b3RhbFJvdyIsInNob3dpbmciLCJ0byIsImZyb20iLCJ0b3RhbCIsInRhYmxlVG90YWxSb3dzIiwiZmllbGRzIiwia2V5IiwibGFiZWwiLCJ0aENsYXNzIiwidGRDbGFzcyIsInRoU3R5bGUiLCJ3aWR0aCIsImRhaWx5VGltZVJlY29yZEZvcm0iLCJpZCIsImVtcCIsInRpbWVfaW4iLCJ0aW1lX291dCIsImR0cl9kYXRlIiwibW9kYWxJZCIsIm1ldGhvZHMiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRGFpbHlUaW1lUmVjb3JkIiwicmVzZXQiLCIkYnZNb2RhbCIsInNob3ciLCJlZGl0RGFpbHlUaW1lUmVjb3JkIiwiZW1wbG95ZWUiLCJkZWxldGVEYWlseVRpbWVSZWNvcmQiLCJsb2FkRGFpbHlUaW1lUmVjb3JkcyIsIl90aGlzIiwicGFyYW1zIiwicGFnZSIsInNlYXJjaCIsImxvYWRJdGVtcyIsInRoZW4iLCJfIiwiaXRlbXMiLCJwZXJmb3JtU2VhcmNoIiwiZGVib3VuY2UiLCJxdWVyeSIsImZvcm1hdFRpbWUiLCJlbXBsb3llZVRpbWUiLCJfZW1wbG95ZWVUaW1lJHNwbGl0Iiwic3BsaXQiLCJfZW1wbG95ZWVUaW1lJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwiaG91cnMiLCJtaW51dGVzIiwidGltZSIsIkRhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJhbXBtIiwiZ2V0SG91cnMiLCJob3VyczEyIiwiY29uY2F0IiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJtb21lbnQiLCJmb3JtYXQiLCJtb3VudGVkIiwiY29tcHV0ZWQiLCJ3YXRjaCIsImhhbmRsZXIiLCJ2YWx1ZSIsInRvYXN0IiwibWl4aW5zIiwicHJvcHMiLCJmb3JtIiwibW9kYWxDbG9zZSIsImRvbmUiLCJoaWRlIiwib25TdWJtaXQiLCJtYWtlVG9hc3QiLCJmdWxsX25hbWUiLCIkZW1pdCIsImVycm9yIiwiZXJyb3JzIiwicmVzcG9uc2UiLCJheGlvcyIsImlzRW1wbG95ZWVzRHJvcGRvd25Mb2FkaW5nIiwiaXNOZXh0QnV0dG9uTG9hZGluZyIsImlzUHJldkJ1dHRvbkxvYWRpbmciLCJlbXBsb3llZXNDdXJyZW50UGFnZSIsImVtcGxveWVlc1BlclBhZ2UiLCJlbXBsb3llZXNMYXN0UGFnZSIsImVtcGxveWVlcyIsImxvYWRFbXBsb3llZXMiLCJnZXQiLCJsYXN0X3BhZ2UiLCJoYW5kbGVDcmVhdGVEYWlseVRpbWVSZWNvcmQiLCJfdGhpczIiLCJlbXBfaWQiLCJoYW5kbGVVcGRhdGVEYWlseVRpbWVSZWNvcmQiLCJfdGhpczMiLCJ1cGRhdGVEYWlseVRpbWVSZWNvcmQiLCJvbk5leHRQYWdlIiwib25QcmV2UGFnZSIsIm9uU2VhcmNoRW1wbG95ZWUiLCJsb2FkaW5nIiwicGVyZm9ybVNlYXJjaEVtcGxveWVlIiwib25Db250ZXh0RGF0ZSIsImN0eCIsInNlbGVjdGVkWU1EIiwiaGFzRW1wbG95ZWVzTmV4dFBhZ2UiLCJoYXNFbXBsb3llZXNQcmV2UGFnZSIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiYXR0cnMiLCJ2YXJpYW50Iiwib24iLCJjbGljayIsImljb24iLCJpbmxpbmUiLCJvcHRpb25zIiwibW9kZWwiLCJjYWxsYmFjayIsIiQkdiIsImV4cHJlc3Npb24iLCJzY29wZWRTbG90cyIsIl91IiwiZm4iLCJwcm94eSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJvdW5kZWQiLCJob3ZlciIsInN0cmlwZWQiLCJidXN5IiwiX3MiLCJpdGVtIiwiX2UiLCJzaXplIiwiJGV2ZW50IiwiYWxpZ24iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiY2VudGVyZWQiLCJzdHlsZSIsInBpbGwiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJtb2RpZmllcnMiLCJmaWx0ZXJhYmxlIiwiYmxvY2siLCJzcXVhcmVkIiwiZGlzYWJsZWQiLCJzbWFsbCIsIiRzZXQiLCJsb2NhbGUiLCJyZWFkb25seSIsInJpZ2h0IiwiY29udGV4dCIsInRleHQiLCJFcnJvcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJoYXMiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiYW55IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlY29yZCIsImNsZWFyIiwibGlzdCIsIl9PYmplY3QkdmFsdWVzIiwiZXJyb3JBcnJheSIsInZhbHVlcyIsImZvckVhY2giLCJwdXNoIiwib3JpZ2luYWxEYXRhIiwicHJvcGVydHkiLCJwb3N0IiwidXJsIiwic3VibWl0IiwicHV0IiwicGF0Y2giLCJfZGVsZXRlIiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uU3VjY2VzcyIsIm9uRmFpbCIsImlzRGF0YUVtcHR5IiwidmFsIiwiaW5kIiwiaXNEZWZhdWx0RGF0YUVtcHR5Iiwic3RyaW5nTG93ZXJDYXNlIiwic3RyIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImxvd2VyIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwicmVwbGFjZSIsIm1hdGNoIiwidG9VcHBlckNhc2UiLCJmb3JtYXRBbW91bnQiLCJhbW91bnQiLCJlbXB0eVN0cmluZyIsImNoYXJhYyIsImkiLCJsIiwiaW5BcnJheSIsIm5lZWRsZSIsImhheXN0YWNrIiwid2hvbGVOdW1iZXJGb3JtYXQiLCJkZWNpbWFQbGFjZSIsImFtb3VudE5vdyIsIk1hdGgiLCJmbG9vciIsInJvdW5kIiwidG9Mb2NhbGVTdHJpbmciLCJjb21tYV9jb25jYXQiLCJzZXQiLCJlbGUiLCJzaG93aW5nX2xhYmVsIiwiZiIsInRvX3N0cm9uZyIsInQiLCJ0b3QiLCJ0aXRsZSIsIm1lc3NhZ2UiLCIkYnZUb2FzdCIsInNvbGlkIiwidG9Db25maXJtIiwiJCIsImNvbmZpcm0iLCJjb250ZW50IiwidHlwZUFuaW1hdGVkIiwiYnV0dG9ucyIsInllcyIsImJ0bkNsYXNzIiwiYWN0aW9uIiwicmVzcCIsImNhbmNlbCIsImRlbGV0ZUNvbmZpcm0iLCJtb2R1bGVOYW1lIiwiYm94VHdvIiwibXNnQm94Q29uZmlybSIsImJ1dHRvblNpemUiLCJva1ZhcmlhbnQiLCJva1RpdGxlIiwiY2FuY2VsVGl0bGUiLCJmb290ZXJDbGFzcyIsImhpZGVIZWFkZXJDbG9zZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=