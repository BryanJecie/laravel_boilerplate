"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_shitfSchedule_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_shiftScheduleModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/shiftScheduleModal.vue */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue");
/* harmony import */ var _modals_shiftScheduleDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/shiftScheduleDeleteModal.vue */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue");
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
    ShiftScheduleModal: _modals_shiftScheduleModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ShiftScheduleDeleteModal: _modals_shiftScheduleDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        key: "required_time_in",
        label: "Required Time In"
        // thStyle: { width: "15%" },
      }, {
        key: "required_time_out",
        label: "Required Time Out"
        // thStyle: { width: "15%" },
      }, {
        key: "no_of_hrs_brk",
        label: "Number of hours break"
        // thStyle: { width: "15%" },
      }, {
        key: "actions",
        label: "Actions",
        thClass: "text-center",
        tdClass: "text-center",
        thStyle: {
          width: "10%"
        }
      }],
      schedShiftForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        required_time_in: "",
        required_time_out: "",
        no_of_hrs_brk: 0
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("shiftSchedule", ["loadItems"])), {}, {
    createShiftSchedule: function createShiftSchedule() {
      this.schedShiftForm.reset();
      this.schedShiftForm.required_time_in = "";
      this.schedShiftForm.required_time_out = "";
      this.schedShiftForm.no_of_hrs_brk = 0;
      this.modalId = "shift-schedule-modal";
      this.$bvModal.show(this.modalId);
    },
    editShiftSchedule: function editShiftSchedule(data) {
      this.schedShiftForm.reset();
      this.schedShiftForm.id = data.id;
      this.schedShiftForm.required_time_in = data.required_time_in;
      this.schedShiftForm.required_time_out = data.required_time_out;
      this.schedShiftForm.no_of_hrs_brk = parseFloat(data.no_of_hrs_brk);
      this.modalId = "shift-schedule-modal";
      this.$bvModal.show(this.modalId);
    },
    deleteShiftSchedule: function deleteShiftSchedule(data) {
      this.schedShiftForm.reset();
      this.schedShiftForm.id = data.id;
      this.schedShiftForm.required_time_in = data.required_time_in;
      this.schedShiftForm.required_time_out = data.required_time_out;
      this.modalId = "shift-schedule-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadShiftSchedules: function loadShiftSchedules() {
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
    }
  }),
  mounted: function mounted() {
    this.loadShiftSchedules();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("shiftSchedule", {
    items: "getShiftSchedules"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadShiftSchedules();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadShiftSchedules();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadShiftSchedules();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../helpers/toast.js */ "./resources/js/helpers/toast.js");
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
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["schedShiftForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.schedShiftForm
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("shiftSchedule", ["deleteShiftSchedule"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("shift-schedule-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deleteShiftSchedule(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.formatTime(_this.form.required_time_in), " - ").concat(_this.formatTime(_this.form.required_time_out), " has been removed from Shift Schedule records."));
        _this.$emit("loadShiftSchedules");
        _this.$bvModal.hide("shift-schedule-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    formatTime: function formatTime(schedShiftTime) {
      var _schedShiftTime$split = schedShiftTime.split(":"),
        _schedShiftTime$split2 = _slicedToArray(_schedShiftTime$split, 2),
        hours = _schedShiftTime$split2[0],
        minutes = _schedShiftTime$split2[1];
      var time = new Date();
      time.setHours(hours);
      time.setMinutes(minutes);
      var ampm = time.getHours() >= 12 ? "PM" : "AM";
      var hours12 = time.getHours() % 12;
      hours12 = hours12 ? hours12 : 12; // convert 0 to 12
      return "".concat(hours12, ":").concat(minutes, " ").concat(ampm);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  mixins: [_helpers_toast_js__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ["schedShiftForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.schedShiftForm,
      searched: "",
      errors: {},
      numberOfHoursBreak: [0, 0.5, 1, 1.5, 2, 2.5, 3]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)("shiftSchedule", ["createShiftSchedule", "updateShiftSchedule"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("shift-schedule-modal");
      this.errors = {};
    },
    handleCreateShiftSchedule: function handleCreateShiftSchedule() {
      var _this = this;
      this.isLoading = true;
      var params = {
        required_time_in: this.form.required_time_in,
        required_time_out: this.form.required_time_out,
        no_of_hrs_brk: this.form.no_of_hrs_brk
      };
      this.createShiftSchedule(params).then(function (_) {
        _this.makeToast("success", "NEW RECORD CREATED", "".concat(_this.formatTime(_this.form.required_time_in), " - ").concat(_this.formatTime(_this.form.required_time_out), " has been created as a new Shift Schedule"));
        _this.$emit("loadShiftSchedules");
        _this.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.errors = errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    handleUpdateShiftSchedule: function handleUpdateShiftSchedule() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        required_time_in: this.form.required_time_in,
        required_time_out: this.form.required_time_out,
        no_of_hrs_brk: this.form.no_of_hrs_brk
      };
      this.updateShiftSchedule(params).then(function (_) {
        _this2.makeToast("warning", "RECORD UPDATED", "This information for Shift Schedule ID: ".concat(_this2.form.id, " has been updated."));
        _this2.$emit("loadShiftSchedules");
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
        this.handleUpdateShiftSchedule();
      } else {
        this.handleCreateShiftSchedule();
      }
    },
    formatTime: function formatTime(schedShiftTime) {
      var _schedShiftTime$split = schedShiftTime.split(":"),
        _schedShiftTime$split2 = _slicedToArray(_schedShiftTime$split, 2),
        hours = _schedShiftTime$split2[0],
        minutes = _schedShiftTime$split2[1];
      var time = new Date();
      time.setHours(hours);
      time.setMinutes(minutes);
      var ampm = time.getHours() >= 12 ? "PM" : "AM";
      var hours12 = time.getHours() % 12;
      hours12 = hours12 ? hours12 : 12; // convert 0 to 12
      return "".concat(hours12, ":").concat(minutes, " ").concat(ampm);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836 ***!
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
  }, [_vm._v("Shift Schedule")]), _vm._v(" "), _c("div", {
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
      click: _vm.createShiftSchedule
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
      key: "cell(required_time_in)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatTime(data.item.required_time_in)) + "\n                ")])];
      }
    }, {
      key: "cell(required_time_out)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(_vm.formatTime(data.item.required_time_out)) + "\n                ")])];
      }
    }, {
      key: "cell(no_of_hrs_brk)",
      fn: function fn(data) {
        return [_c("span", [_vm._v("\n                  " + _vm._s(data.item.no_of_hrs_brk) + "\n                ")])];
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
              return _vm.editShiftSchedule(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteShiftSchedule(data.item);
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
  })], 1)])])]), _vm._v(" "), _c("ShiftScheduleModal", {
    attrs: {
      schedShiftForm: _vm.schedShiftForm
    },
    on: {
      loadShiftSchedules: function loadShiftSchedules($event) {
        return _vm.loadShiftSchedules();
      }
    }
  }), _vm._v(" "), _c("ShiftScheduleDeleteModal", {
    attrs: {
      schedShiftForm: _vm.schedShiftForm
    },
    on: {
      loadShiftSchedules: function loadShiftSchedules($event) {
        return _vm.loadShiftSchedules();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "shift-schedule-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.formatTime(_vm.form.required_time_in), " - ").concat(_vm.formatTime(_vm.form.required_time_out), " from Shift Schedules records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1 ***!
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
      id: "shift-schedule-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Shift Schedule" : "Add Shift Schedule"))]), _vm._v(" "), _c("b-button", {
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
            id: "required-time-in",
            label: "Required Time In",
            "label-for": "required-time-in"
          }
        }, [_c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.required_time_in,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "required_time_in", $$v);
            },
            expression: "form.required_time_in"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.required_time_in ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.required_time_in[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "required-time-out",
            label: "Required Time Out",
            "label-for": "required-time-out"
          }
        }, [_c("b-form-timepicker", {
          attrs: {
            locale: "en"
          },
          model: {
            value: _vm.form.required_time_out,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "required_time_out", $$v);
            },
            expression: "form.required_time_out"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.required_time_out ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.required_time_out[0]))]) : _vm._e()], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            id: "no-of-hrs-brk",
            label: "Number of hours break",
            "label-for": "no-of-hrs-brk"
          }
        }, [_c("b-form-select", {
          attrs: {
            id: "no-of-hrs-brk",
            options: _vm.numberOfHoursBreak,
            required: ""
          },
          model: {
            value: _vm.form.no_of_hrs_brk,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "no_of_hrs_brk", $$v);
            },
            expression: "form.no_of_hrs_brk"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.no_of_hrs_brk ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.no_of_hrs_brk[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue"],"names":[],"mappings":";AA+KA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"shift-schedule-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Shift Schedule' : 'Add Shift Schedule'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"required-time-in\" label=\"Required Time In\" label-for=\"required-time-in\">\n          <b-form-timepicker v-model=\"form.required_time_in\" locale=\"en\"></b-form-timepicker>\n          <div v-if=\"errors && errors.required_time_in\" class=\"text-danger\">{{ errors.required_time_in[0] }}</div>\n        </b-form-group>\n\n        <b-form-group id=\"required-time-out\" label=\"Required Time Out\" label-for=\"required-time-out\">\n          <b-form-timepicker v-model=\"form.required_time_out\" locale=\"en\"></b-form-timepicker>\n          <div v-if=\"errors && errors.required_time_out\" class=\"text-danger\">{{ errors.required_time_out[0] }}</div>\n        </b-form-group>\n        <b-form-group id=\"no-of-hrs-brk\" label=\"Number of hours break\" label-for=\"no-of-hrs-brk\">\n          <b-form-select\n            id=\"no-of-hrs-brk\"\n            v-model=\"form.no_of_hrs_brk\"\n            :options=\"numberOfHoursBreak\"\n            required\n          ></b-form-select>\n          <div v-if=\"errors && errors.no_of_hrs_brk\" class=\"text-danger\">{{ errors.no_of_hrs_brk[0] }}</div>\n        </b-form-group>\n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\nimport axios from \"axios\";\nimport toast from \"../../../../helpers/toast.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: [\"schedShiftForm\"],\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.schedShiftForm,\n      searched: \"\",\n      errors: {},\n      numberOfHoursBreak: [\n        0, \n        0.5,\n        1,\n        1.5,\n        2,\n        2.5,\n        3\n      ]\n    };\n  },\n\n  methods: {\n    ...mapActions(\"shiftSchedule\", [\"createShiftSchedule\", \"updateShiftSchedule\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"shift-schedule-modal\");\n      this.errors = {};\n\n    },\n\n    handleCreateShiftSchedule() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        required_time_in: this.form.required_time_in,\n        required_time_out: this.form.required_time_out,\n        no_of_hrs_brk: this.form.no_of_hrs_brk\n\t\t\t}\n\n      this.createShiftSchedule(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.formatTime(this.form.required_time_in)} - ${this.formatTime(this.form.required_time_out)} has been created as a new Shift Schedule`\n          );\n          this.$emit(\"loadShiftSchedules\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdateShiftSchedule() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n        required_time_in: this.form.required_time_in,\n        required_time_out: this.form.required_time_out,\n        no_of_hrs_brk: this.form.no_of_hrs_brk\n\t\t\t}\n\n      this.updateShiftSchedule(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Shift Schedule ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadShiftSchedules\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdateShiftSchedule();\n      } else {\n        this.handleCreateShiftSchedule();\n      }\n    },\n\n    formatTime(schedShiftTime) {\n      const [hours, minutes] = schedShiftTime.split(\":\");\n      const time = new Date();\n      time.setHours(hours);\n      time.setMinutes(minutes);\n      const ampm = time.getHours() >= 12 ? \"PM\" : \"AM\";\n      let hours12 = time.getHours() % 12;\n      hours12 = hours12 ? hours12 : 12; // convert 0 to 12\n      return `${hours12}:${minutes} ${ampm}`;\n    }\n  }\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_style_index_0_id_5f6e27a1_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_style_index_0_id_5f6e27a1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_style_index_0_id_5f6e27a1_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/components/index.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/components/index.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ecb3e836 */ "./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/shitfSchedule/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594 */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594");
/* harmony import */ var _shiftScheduleDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiftScheduleDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shiftScheduleDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__.render,
  _shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shiftScheduleModal.vue?vue&type=template&id=5f6e27a1 */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1");
/* harmony import */ var _shiftScheduleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shiftScheduleModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js");
/* harmony import */ var _shiftScheduleModal_vue_vue_type_style_index_0_id_5f6e27a1_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css */ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shiftScheduleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__.render,
  _shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836 ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecb3e836__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=ecb3e836 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/components/index.vue?vue&type=template&id=ecb3e836");


/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594 ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleDeleteModal_vue_vue_type_template_id_20d24594__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleDeleteModal.vue?vue&type=template&id=20d24594");


/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_template_id_5f6e27a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleModal.vue?vue&type=template&id=5f6e27a1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=template&id=5f6e27a1");


/***/ }),

/***/ "./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_shiftScheduleModal_vue_vue_type_style_index_0_id_5f6e27a1_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/shitfSchedule/modals/shiftScheduleModal.vue?vue&type=style&index=0&id=5f6e27a1&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX3NoaXRmU2NoZWR1bGVfY29tcG9uZW50c19pbmRleF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtFQUNmTSxVQUFBO0lBQ0FILGtCQUFBLEVBQUFBLHNFQUFBO0lBQ0FDLHdCQUFBLEVBQUFBLDRFQUFBQTtFQUNBO0VBQ0FHLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FDLFFBQUE7TUFDQUMsWUFBQTtNQUNBQyxTQUFBO01BQ0FDLE1BQUE7TUFDQUMsUUFBQTtNQUNBVixjQUFBLEVBQUFBLG9EQUFBO01BQ0FXLFNBQUE7TUFDQUMsUUFBQTtNQUNBQyxPQUFBO1FBQ0FDLEVBQUE7UUFDQUMsSUFBQTtRQUNBQyxLQUFBO01BQ0E7TUFDQUMsY0FBQTtNQUNBQyxNQUFBLEdBQ0E7UUFDQUMsR0FBQTtRQUNBQyxLQUFBO1FBQ0E7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtRQUNBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO1FBQ0FDLE9BQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1VBQUFDLEtBQUE7UUFBQTtNQUNBLEVBQ0E7TUFFQUMsY0FBQSxNQUFBdEIsd0RBQUE7UUFDQXVCLEVBQUE7UUFDQUMsZ0JBQUE7UUFDQUMsaUJBQUE7UUFDQUMsYUFBQTtNQUNBO01BRUFDLE9BQUE7SUFDQTtFQUNBO0VBRUFDLE9BQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0FsQyxnREFBQTtJQUNBbUMsbUJBQUEsV0FBQUEsb0JBQUE7TUFDQSxLQUFBUixjQUFBLENBQUFTLEtBQUE7TUFDQSxLQUFBVCxjQUFBLENBQUFFLGdCQUFBO01BQ0EsS0FBQUYsY0FBQSxDQUFBRyxpQkFBQTtNQUNBLEtBQUFILGNB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S0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLCtMQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FELENBQUMsaUVBQWUsa05BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCLENBQUMsaUVBQWUsNE1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUtBclA7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvbW9kYWxzL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy90ZXh0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RvYXN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvbW9kYWxzL3NoaWZ0U2NoZWR1bGVNb2RhbC52dWU/MmY2ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL21vZGFscy9zaGlmdFNjaGVkdWxlTW9kYWwudnVlPzdlY2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9jb21wb25lbnRzL2luZGV4LnZ1ZT81YjdiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvbW9kYWxzL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/Yzc4MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL21vZGFscy9zaGlmdFNjaGVkdWxlTW9kYWwudnVlPzMzM2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9jb21wb25lbnRzL2luZGV4LnZ1ZT80OTJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvbW9kYWxzL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/ODI1YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL21vZGFscy9zaGlmdFNjaGVkdWxlTW9kYWwudnVlPzFkYzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9jb21wb25lbnRzL2luZGV4LnZ1ZT81MzQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvbW9kYWxzL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/MTljYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL21vZGFscy9zaGlmdFNjaGVkdWxlTW9kYWwudnVlPzYyZmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZT85MTgxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgPGgxIGNsYXNzPVwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIj5TaGlmdCBTY2hlZHVsZTwvaDE+XG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBweS0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGItYnV0dG9uIFxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cImNyZWF0ZVNoaWZ0U2NoZWR1bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWItM1wiPlxuICAgICAgICAgICAgPGItZm9ybSBpbmxpbmU+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLXNtLTJcIiBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIj5cbiAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2hvd0VudHJpZXNPcHRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxiLW92ZXJsYXkgOnNob3c9XCJpc092ZXJsYXlcIiByb3VuZGVkPVwic21cIj5cbiAgICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgICBob3ZlclxuICAgICAgICAgICAgICAgIHN0cmlwZWRcbiAgICAgICAgICAgICAgICBzaG93LWVtcHR5XG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXMuZGF0YVwiXG4gICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMFwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChyZXF1aXJlZF90aW1lX2luKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXRUaW1lKGRhdGEuaXRlbS5yZXF1aXJlZF90aW1lX2luKSB9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKHJlcXVpcmVkX3RpbWVfb3V0KT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBmb3JtYXRUaW1lKGRhdGEuaXRlbS5yZXF1aXJlZF90aW1lX291dCkgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKG5vX29mX2hyc19icmspPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGEuaXRlbS5ub19vZl9ocnNfYnJrIH19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChhY3Rpb25zKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0U2hpZnRTY2hlZHVsZShkYXRhLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFRElUXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIEBjbGljaz1cImRlbGV0ZVNoaWZ0U2NoZWR1bGUoZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgREVMRVRFXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDp0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGItc3Bpbm5lciBsYWJlbD1cIlNtYWxsIExvYWRpbmcuLi5cIj48L2Itc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgICAgICAgICAgPC9iLXRhYmxlPlxuICAgICAgICAgICAgPC9iLW92ZXJsYXk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgIDxwPnt7YFNob3dpbmcgJHtzaG93aW5nLmZyb219IHRvICR7c2hvd2luZy50b30gb2YgJHtzaG93aW5nLnRvdGFsfSBlbnRyaWVzYH19PC9wPlxuICAgICAgICAgICAgPCEtLSA8cCBjbGFzcz1cIm10LTEgbWItMFwiIHYtaHRtbD1cInNob3dpbmdUaXRsZVwiIC8+IC0tPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPGItcGFnaW5hdGlvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTBcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudF9wYWdlXCJcbiAgICAgICAgICAgICAgOnRvdGFsLXJvd3M9XCJ0YWJsZVRvdGFsUm93c1wiXG4gICAgICAgICAgICAgIDpwZXItcGFnZT1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxTaGlmdFNjaGVkdWxlTW9kYWwgOnNjaGVkU2hpZnRGb3JtPVwic2NoZWRTaGlmdEZvcm1cIiBAbG9hZFNoaWZ0U2NoZWR1bGVzPVwibG9hZFNoaWZ0U2NoZWR1bGVzKClcIj48L1NoaWZ0U2NoZWR1bGVNb2RhbD5cbiAgICA8U2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsIDpzY2hlZFNoaWZ0Rm9ybT1cInNjaGVkU2hpZnRGb3JtXCIgQGxvYWRTaGlmdFNjaGVkdWxlcz1cImxvYWRTaGlmdFNjaGVkdWxlcygpXCI+PC9TaGlmdFNjaGVkdWxlRGVsZXRlTW9kYWw+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuaW1wb3J0IHsgc2hvd0VudHJpZXNPcHQgfSBmcm9tIFwiQGpzL2RhdGFcIjtcbmltcG9ydCBTaGlmdFNjaGVkdWxlTW9kYWwgZnJvbSBcIi4uL21vZGFscy9zaGlmdFNjaGVkdWxlTW9kYWwudnVlXCI7XG5pbXBvcnQgU2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsIGZyb20gXCIuLi9tb2RhbHMvc2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgU2hpZnRTY2hlZHVsZU1vZGFsLFxuICAgIFNoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwZXJfcGFnZTogMTAsXG4gICAgICBjdXJyZW50X3BhZ2U6IDEsXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICBmaWx0ZXI6IFwiXCIsXG4gICAgICBzZWFyY2hlZDogXCJcIixcbiAgICAgIHNob3dFbnRyaWVzT3B0LFxuICAgICAgaXNPdmVybGF5OiBmYWxzZSxcbiAgICAgIHRvdGFsUm93OiAwLFxuICAgICAgc2hvd2luZzoge1xuICAgICAgICB0bzogMCxcbiAgICAgICAgZnJvbTogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAgdGFibGVUb3RhbFJvd3M6IFwiXCIsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJyZXF1aXJlZF90aW1lX2luXCIsXG4gICAgICAgICAgbGFiZWw6IFwiUmVxdWlyZWQgVGltZSBJblwiLFxuICAgICAgICAgIC8vIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTUlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJyZXF1aXJlZF90aW1lX291dFwiLFxuICAgICAgICAgIGxhYmVsOiBcIlJlcXVpcmVkIFRpbWUgT3V0XCIsXG4gICAgICAgICAgLy8gdGhTdHlsZTogeyB3aWR0aDogXCIxNSVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIm5vX29mX2hyc19icmtcIixcbiAgICAgICAgICBsYWJlbDogXCJOdW1iZXIgb2YgaG91cnMgYnJlYWtcIixcbiAgICAgICAgICAvLyB0aFN0eWxlOiB7IHdpZHRoOiBcIjE1JVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICB0aENsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgdGRDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTAlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG5cbiAgICAgIHNjaGVkU2hpZnRGb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICByZXF1aXJlZF90aW1lX2luOiBcIlwiLFxuICAgICAgICByZXF1aXJlZF90aW1lX291dDogXCJcIixcbiAgICAgICAgbm9fb2ZfaHJzX2JyazogMFxuICAgICAgfSksXG5cbiAgICAgIG1vZGFsSWQ6IFwiXCIsXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInNoaWZ0U2NoZWR1bGVcIiwgW1wibG9hZEl0ZW1zXCJdKSxcbiAgICBjcmVhdGVTaGlmdFNjaGVkdWxlKCkge1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXF1aXJlZF90aW1lX2luID0gXCJcIjtcbiAgICAgIHRoaXMuc2NoZWRTaGlmdEZvcm0ucmVxdWlyZWRfdGltZV9vdXQgPSBcIlwiO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5ub19vZl9ocnNfYnJrID0gMDtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJzaGlmdC1zY2hlZHVsZS1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGVkaXRTaGlmdFNjaGVkdWxlKGRhdGEpIHtcbiAgICAgIHRoaXMuc2NoZWRTaGlmdEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuc2NoZWRTaGlmdEZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXF1aXJlZF90aW1lX2luID0gZGF0YS5yZXF1aXJlZF90aW1lX2luO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXF1aXJlZF90aW1lX291dCA9IGRhdGEucmVxdWlyZWRfdGltZV9vdXQ7XG4gICAgICB0aGlzLnNjaGVkU2hpZnRGb3JtLm5vX29mX2hyc19icmsgPSBwYXJzZUZsb2F0KGRhdGEubm9fb2ZfaHJzX2Jyayk7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwic2hpZnQtc2NoZWR1bGUtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBkZWxldGVTaGlmdFNjaGVkdWxlKGRhdGEpIHtcbiAgICAgIHRoaXMuc2NoZWRTaGlmdEZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMuc2NoZWRTaGlmdEZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXF1aXJlZF90aW1lX2luID0gZGF0YS5yZXF1aXJlZF90aW1lX2luO1xuICAgICAgdGhpcy5zY2hlZFNoaWZ0Rm9ybS5yZXF1aXJlZF90aW1lX291dCA9IGRhdGEucmVxdWlyZWRfdGltZV9vdXQ7XG5cbiAgICAgIHRoaXMubW9kYWxJZCA9IFwic2hpZnQtc2NoZWR1bGUtZGVsZXRlLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgbG9hZFNoaWZ0U2NoZWR1bGVzKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRJdGVtcyhwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy50YWJsZVRvdGFsUm93cyA9IHRoaXMuaXRlbXMudG90YWxcbiAgICAgICAgICB0aGlzLnNob3dpbmcudG8gPSB0aGlzLml0ZW1zLnRvO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy5mcm9tID0gdGhpcy5pdGVtcy5mcm9tO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy50b3RhbCA9IHRoaXMuaXRlbXMudG90YWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaDogXy5kZWJvdW5jZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHF1ZXJ5XG4gICAgfSwgMTAwMCksXG5cbiAgICBmb3JtYXRUaW1lKGVtcGxveWVlVGltZSkge1xuICAgICAgY29uc3QgW2hvdXJzLCBtaW51dGVzXSA9IGVtcGxveWVlVGltZS5zcGxpdChcIjpcIik7XG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgIHRpbWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgdGltZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgY29uc3QgYW1wbSA9IHRpbWUuZ2V0SG91cnMoKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgIGxldCBob3VyczEyID0gdGltZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBob3VyczEyID0gaG91cnMxMiA/IGhvdXJzMTIgOiAxMjsgLy8gY29udmVydCAwIHRvIDEyXG4gICAgICByZXR1cm4gYCR7aG91cnMxMn06JHttaW51dGVzfSAke2FtcG19YDtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5sb2FkU2hpZnRTY2hlZHVsZXMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJzaGlmdFNjaGVkdWxlXCIsIHtcbiAgICAgIGl0ZW1zOiBcImdldFNoaWZ0U2NoZWR1bGVzXCIsXG4gICAgfSksXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBjdXJyZW50X3BhZ2U6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9hZFNoaWZ0U2NoZWR1bGVzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBlcl9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRTaGlmdFNjaGVkdWxlcygpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbHRlcihxdWVyeSkge1xuICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKHF1ZXJ5KVxuICAgIH0sXG5cbiAgICBzZWFyY2hlZDoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkU2hpZnRTY2hlZHVsZXMoKVxuICAgICAgfVxuICAgIH0sXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInNoaWZ0LXNjaGVkdWxlLWRlbGV0ZS1tb2RhbFwiXG4gICAgaGlkZS1oZWFkZXJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY2VudGVyZWRcbiAgICBjb250ZW50LWNsYXNzPVwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiXG4gID5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1yb3c+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg0PkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEPC9oND5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAge3sgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtmb3JtYXRUaW1lKGZvcm0ucmVxdWlyZWRfdGltZV9pbil9IC0gJHtmb3JtYXRUaW1lKGZvcm0ucmVxdWlyZWRfdGltZV9vdXQpfSBmcm9tIFNoaWZ0IFNjaGVkdWxlcyByZWNvcmRzP2AgfX1cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC00XCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIE5PXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICBZRVNcbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wic2NoZWRTaGlmdEZvcm1cIl0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLnNjaGVkU2hpZnRGb3JtXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInNoaWZ0U2NoZWR1bGVcIiwgW1wiZGVsZXRlU2hpZnRTY2hlZHVsZVwiXSksXG4gICAgXG4gICAgbW9kYWxDbG9zZShkb25lKSB7XG5cbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcInNoaWZ0LXNjaGVkdWxlLWRlbGV0ZS1tb2RhbFwiKTtcbiAgICAgIFxuICAgIH0sXG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcblx0XHRcdH1cblxuICAgICAgdGhpcy5kZWxldGVTaGlmdFNjaGVkdWxlKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBERUxFVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdFRpbWUodGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfaW4pfSAtICR7dGhpcy5mb3JtYXRUaW1lKHRoaXMuZm9ybS5yZXF1aXJlZF90aW1lX291dCl9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBTaGlmdCBTY2hlZHVsZSByZWNvcmRzLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuJGVtaXQoXCJsb2FkU2hpZnRTY2hlZHVsZXNcIik7XG4gICAgICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwic2hpZnQtc2NoZWR1bGUtZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGZvcm1hdFRpbWUoc2NoZWRTaGlmdFRpbWUpIHtcbiAgICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBzY2hlZFNoaWZ0VGltZS5zcGxpdChcIjpcIik7XG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcbiAgICAgIHRpbWUuc2V0SG91cnMoaG91cnMpO1xuICAgICAgdGltZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgICAgY29uc3QgYW1wbSA9IHRpbWUuZ2V0SG91cnMoKSA+PSAxMiA/IFwiUE1cIiA6IFwiQU1cIjtcbiAgICAgIGxldCBob3VyczEyID0gdGltZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBob3VyczEyID0gaG91cnMxMiA/IGhvdXJzMTIgOiAxMjsgLy8gY29udmVydCAwIHRvIDEyXG4gICAgICByZXR1cm4gYCR7aG91cnMxMn06JHttaW51dGVzfSAke2FtcG19YDtcbiAgICB9XG4gIH0sXG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGItbW9kYWxcbiAgICBpZD1cInNoaWZ0LXNjaGVkdWxlLW1vZGFsXCJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNtb2RhbC1oZWFkZXI+XG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XG4gICAgICBcbiAgICAgIDxoNSBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcIj57eyBmb3JtLmlkID8gJ0VkaXQgU2hpZnQgU2NoZWR1bGUnIDogJ0FkZCBTaGlmdCBTY2hlZHVsZSd9fTwvaDU+XG4gICAgICA8Yi1idXR0b25cbiAgICAgICAgcGlsbFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJtb2RhbENsb3NlKClcIlxuICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgIDwvYi1idXR0b24+XG4gICAgPC90ZW1wbGF0ZT5cblxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgIDxiLWZvcm0+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJyZXF1aXJlZC10aW1lLWluXCIgbGFiZWw9XCJSZXF1aXJlZCBUaW1lIEluXCIgbGFiZWwtZm9yPVwicmVxdWlyZWQtdGltZS1pblwiPlxuICAgICAgICAgIDxiLWZvcm0tdGltZXBpY2tlciB2LW1vZGVsPVwiZm9ybS5yZXF1aXJlZF90aW1lX2luXCIgbG9jYWxlPVwiZW5cIj48L2ItZm9ybS10aW1lcGlja2VyPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMucmVxdWlyZWRfdGltZV9pblwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMucmVxdWlyZWRfdGltZV9pblswXSB9fTwvZGl2PlxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cblxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwicmVxdWlyZWQtdGltZS1vdXRcIiBsYWJlbD1cIlJlcXVpcmVkIFRpbWUgT3V0XCIgbGFiZWwtZm9yPVwicmVxdWlyZWQtdGltZS1vdXRcIj5cbiAgICAgICAgICA8Yi1mb3JtLXRpbWVwaWNrZXIgdi1tb2RlbD1cImZvcm0ucmVxdWlyZWRfdGltZV9vdXRcIiBsb2NhbGU9XCJlblwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzICYmIGVycm9ycy5yZXF1aXJlZF90aW1lX291dFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj57eyBlcnJvcnMucmVxdWlyZWRfdGltZV9vdXRbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XCJuby1vZi1ocnMtYnJrXCIgbGFiZWw9XCJOdW1iZXIgb2YgaG91cnMgYnJlYWtcIiBsYWJlbC1mb3I9XCJuby1vZi1ocnMtYnJrXCI+XG4gICAgICAgICAgPGItZm9ybS1zZWxlY3RcbiAgICAgICAgICAgIGlkPVwibm8tb2YtaHJzLWJya1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5ub19vZl9ocnNfYnJrXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwibnVtYmVyT2ZIb3Vyc0JyZWFrXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPjwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMgJiYgZXJyb3JzLm5vX29mX2hyc19icmtcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLm5vX29mX2hyc19icmtbMF0gfX08L2Rpdj5cbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XG4gICAgICA8L2ItZm9ybT5cbiAgICAgIDxiLXJvdyBjbGFzcz1cIm10LTNcIj5cbiAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIiA6c3R5bGU9XCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVwiIEBjbGljaz1cIm1vZGFsQ2xvc2UoKVwiPlxuICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVwic21cIiBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICB7eyBmb3JtLmlkID8gJ1NBVkUgQ0hBTkdFUycgOiAnU0FWRSd9fVxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wic2NoZWRTaGlmdEZvcm1cIl0sXG5cbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICBmb3JtOiB0aGlzLnNjaGVkU2hpZnRGb3JtLFxuICAgICAgc2VhcmNoZWQ6IFwiXCIsXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgbnVtYmVyT2ZIb3Vyc0JyZWFrOiBbXG4gICAgICAgIDAsIFxuICAgICAgICAwLjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEuNSxcbiAgICAgICAgMixcbiAgICAgICAgMi41LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInNoaWZ0U2NoZWR1bGVcIiwgW1wiY3JlYXRlU2hpZnRTY2hlZHVsZVwiLCBcInVwZGF0ZVNoaWZ0U2NoZWR1bGVcIl0pLFxuICAgIFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xuXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJzaGlmdC1zY2hlZHVsZS1tb2RhbFwiKTtcbiAgICAgIHRoaXMuZXJyb3JzID0ge307XG5cbiAgICB9LFxuXG4gICAgaGFuZGxlQ3JlYXRlU2hpZnRTY2hlZHVsZSgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcmVxdWlyZWRfdGltZV9pbjogdGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfaW4sXG4gICAgICAgIHJlcXVpcmVkX3RpbWVfb3V0OiB0aGlzLmZvcm0ucmVxdWlyZWRfdGltZV9vdXQsXG4gICAgICAgIG5vX29mX2hyc19icms6IHRoaXMuZm9ybS5ub19vZl9ocnNfYnJrXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlU2hpZnRTY2hlZHVsZShwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIFwiTkVXIFJFQ09SRCBDUkVBVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm1hdFRpbWUodGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfaW4pfSAtICR7dGhpcy5mb3JtYXRUaW1lKHRoaXMuZm9ybS5yZXF1aXJlZF90aW1lX291dCl9IGhhcyBiZWVuIGNyZWF0ZWQgYXMgYSBuZXcgU2hpZnQgU2NoZWR1bGVgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZFNoaWZ0U2NoZWR1bGVzXCIpO1xuICAgICAgICAgIHRoaXMubW9kYWxDbG9zZSgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgaGFuZGxlVXBkYXRlU2hpZnRTY2hlZHVsZSgpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcbiAgICAgICAgcmVxdWlyZWRfdGltZV9pbjogdGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfaW4sXG4gICAgICAgIHJlcXVpcmVkX3RpbWVfb3V0OiB0aGlzLmZvcm0ucmVxdWlyZWRfdGltZV9vdXQsXG4gICAgICAgIG5vX29mX2hyc19icms6IHRoaXMuZm9ybS5ub19vZl9ocnNfYnJrXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMudXBkYXRlU2hpZnRTY2hlZHVsZShwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIFwiUkVDT1JEIFVQREFURURcIixcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBTaGlmdCBTY2hlZHVsZSBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRTaGlmdFNjaGVkdWxlc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVNoaWZ0U2NoZWR1bGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ3JlYXRlU2hpZnRTY2hlZHVsZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmb3JtYXRUaW1lKHNjaGVkU2hpZnRUaW1lKSB7XG4gICAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gc2NoZWRTaGlmdFRpbWUuc3BsaXQoXCI6XCIpO1xuICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICB0aW1lLnNldEhvdXJzKGhvdXJzKTtcbiAgICAgIHRpbWUuc2V0TWludXRlcyhtaW51dGVzKTtcbiAgICAgIGNvbnN0IGFtcG0gPSB0aW1lLmdldEhvdXJzKCkgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG4gICAgICBsZXQgaG91cnMxMiA9IHRpbWUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIGNvbnZlcnQgMCB0byAxMlxuICAgICAgcmV0dXJuIGAke2hvdXJzMTJ9OiR7bWludXRlc30gJHthbXBtfWA7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5idG4tY2Utc3VibWl0IHtcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmJ0bi1jZS1jYW5jZWwge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItY2UtdGl0bGUge1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlNoaWZ0IFNjaGVkdWxlXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVNoaWZ0U2NoZWR1bGUgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2hvd0VudHJpZXNPcHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVyX3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2hvdzogX3ZtLmlzT3ZlcmxheSwgcm91bmRlZDogXCJzbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGFibGUtYnVzeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhcIk5vIGRhdGEgZm91bmQhXCIpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwocmVxdWlyZWRfdGltZV9pbilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoZGF0YS5pdGVtLnJlcXVpcmVkX3RpbWVfaW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChyZXF1aXJlZF90aW1lX291dClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm1hdFRpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLnJlcXVpcmVkX3RpbWVfb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKG5vX29mX2hyc19icmspXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoZGF0YS5pdGVtLm5vX29mX2hyc19icmspICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChhY3Rpb25zKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJzbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50OiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdFNoaWZ0U2NoZWR1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBFRElUXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVNoaWZ0U2NoZWR1bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgIGBTaG93aW5nICR7X3ZtLnNob3dpbmcuZnJvbX0gdG8gJHtfdm0uc2hvd2luZy50b30gb2YgJHtfdm0uc2hvd2luZy50b3RhbH0gZW50cmllc2BcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1wYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidG90YWwtcm93c1wiOiBfdm0udGFibGVUb3RhbFJvd3MsXG4gICAgICAgICAgICAgICAgICAgIFwicGVyLXBhZ2VcIjogX3ZtLnBlcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudF9wYWdlLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXJyZW50X3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50X3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJTaGlmdFNjaGVkdWxlTW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyBzY2hlZFNoaWZ0Rm9ybTogX3ZtLnNjaGVkU2hpZnRGb3JtIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbG9hZFNoaWZ0U2NoZWR1bGVzOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLmxvYWRTaGlmdFNjaGVkdWxlcygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiU2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc2NoZWRTaGlmdEZvcm06IF92bS5zY2hlZFNoaWZ0Rm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRTaGlmdFNjaGVkdWxlczogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5sb2FkU2hpZnRTY2hlZHVsZXMoKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImItbW9kYWxcIiwge1xuICAgIGF0dHJzOiB7XG4gICAgICBpZDogXCJzaGlmdC1zY2hlZHVsZS1kZWxldGUtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1oZWFkZXJcIjogXCJcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIGNlbnRlcmVkOiBcIlwiLFxuICAgICAgXCJjb250ZW50LWNsYXNzXCI6IFwiYm9yZGVyLXRvcCBiZy1jcmVhbVwiLFxuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRFwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtfdm0uZm9ybWF0VGltZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5yZXF1aXJlZF90aW1lX2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9IC0gJHtfdm0uZm9ybWF0VGltZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5yZXF1aXJlZF90aW1lX291dFxuICAgICAgICAgICAgICAgICAgICAgICAgICApfSBmcm9tIFNoaWZ0IFNjaGVkdWxlcyByZWNvcmRzP2BcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBOT1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBZRVNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwic2hpZnQtc2NoZWR1bGUtbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uaWQgPyBcIkVkaXQgU2hpZnQgU2NoZWR1bGVcIiA6IFwiQWRkIFNoaWZ0IFNjaGVkdWxlXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVxdWlyZWQtdGltZS1pblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlcXVpcmVkIFRpbWUgSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsLWZvclwiOiBcInJlcXVpcmVkLXRpbWUtaW5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXRpbWVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvY2FsZTogXCJlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZXF1aXJlZF90aW1lX2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicmVxdWlyZWRfdGltZV9pblwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJlcXVpcmVkX3RpbWVfaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLnJlcXVpcmVkX3RpbWVfaW5cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5yZXF1aXJlZF90aW1lX2luWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicmVxdWlyZWQtdGltZS1vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZXF1aXJlZCBUaW1lIE91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWwtZm9yXCI6IFwicmVxdWlyZWQtdGltZS1vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXRpbWVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvY2FsZTogXCJlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yZXF1aXJlZF90aW1lX291dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInJlcXVpcmVkX3RpbWVfb3V0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ucmVxdWlyZWRfdGltZV9vdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycyAmJiBfdm0uZXJyb3JzLnJlcXVpcmVkX3RpbWVfb3V0XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lcnJvcnMucmVxdWlyZWRfdGltZV9vdXRbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJuby1vZi1ocnMtYnJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTnVtYmVyIG9mIGhvdXJzIGJyZWFrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJuby1vZi1ocnMtYnJrXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJuby1vZi1ocnMtYnJrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0ubnVtYmVyT2ZIb3Vyc0JyZWFrLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5vX29mX2hyc19icmssXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJub19vZl9ocnNfYnJrXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubm9fb2ZfaHJzX2Jya1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzICYmIF92bS5lcnJvcnMubm9fb2ZfaHJzX2Jya1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLm5vX29mX2hyc19icmtbMF0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuLW91dGxpbmUtYnJvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbENsb3NlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJjb25zdCBzaG93RW50cmllc09wdCA9IFtcbiAgICB7IHZhbHVlOiAxMCwgdGV4dDogXCIxMFwiIH0sXG4gICAgeyB2YWx1ZTogMzAsIHRleHQ6IFwiMzBcIiB9LFxuICAgIHsgdmFsdWU6IDUwLCB0ZXh0OiBcIjUwXCIgfSxcbiAgICB7IHZhbHVlOiAxMDAsIHRleHQ6IFwiMTAwXCIgfSxcbl1cblxuXG5leHBvcnQge1xuICAgIHNob3dFbnRyaWVzT3B0LFxufSIsImNsYXNzIEVycm9ycyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRXJyb3JzIGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYW4gZXJyb3JzIGV4aXN0cyBmb3IgdGhlIGdpdmVuIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGhhcyhmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHdlIGhhdmUgYW55IGVycm9ycy5cbiAgICovXG4gIGFueSgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmUgdGhlIGVycm9yIG1lc3NhZ2UgZm9yIGEgZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgZ2V0KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVjb3JkIHRoZSBuZXcgZXJyb3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICByZWNvcmQoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgb25lIG9yIGFsbCBlcnJvciBmaWVsZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGZpZWxkXG4gICAqL1xuICBjbGVhcihmaWVsZCkge1xuICAgIGlmIChmaWVsZCkge1xuICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBvZiBhbGwgZXJyb3JzLlxuICAgKi9cbiAgbGlzdCgpIHtcbiAgICBsZXQgaXRlbXMgPSBbXVxuICAgIGxldCBlcnJvckFycmF5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmVycm9ycykgPz8gW11cbiAgICBlcnJvckFycmF5LmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgaXRlbXMucHVzaChlcnJvclswXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG4iLCJpbXBvcnQgRXJyb3JzIGZyb20gXCIuL2Vycm9ycy5qc1wiO1xuXG5jbGFzcyBGb3JtIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YTtcblxuICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF07XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2ggYWxsIHJlbGV2YW50IGRhdGEgZm9yIHRoZSBmb3JtLlxuICAgKi9cbiAgZGF0YSgpIHtcbiAgICBsZXQgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgIHRoaXNbZmllbGRdID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwb3N0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBvc3RcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUFVUIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwdXQodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicHV0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBBVENIIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBwYXRjaCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwYXRjaFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGRlbGV0ZSh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJkZWxldGVcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJtaXQgdGhlIGZvcm0uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkZhaWwoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgc3VjY2Vzc2Z1bCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgIC8vIHRlbXBvcmFyeVxuICAgIC8vIHRoaXMucmVzZXQoKTtcblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgZmFpbGVkIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgb25GYWlsKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpO1xuICB9XG5cblxuICBpc0RhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgaXNEZWZhdWx0RGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcblxuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsICYmIHZhbCAhPT0gJ0FkZCcpIHtcbiAgICAgICAga2V5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBtZXRob2RzOiB7XG4gICAgc3RyaW5nTG93ZXJDYXNlKHN0cikge1xuICAgICAgcmV0dXJuIHN0ci50b1N0cmluZygpLnRvTG93ZXJDYXNlKClcbiAgICB9LFxuXG4gICAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0ciwgbG93ZXIgPSBmYWxzZSkge1xuICAgICAgcmV0dXJuIChsb3dlciA/IHN0ci50b0xvd2VyQ2FzZSgpIDogc3RyKS5yZXBsYWNlKC8oPzpefFxcc3xbXCInKFt7XSkrXFxTL2csIG1hdGNoID0+IG1hdGNoLnRvVXBwZXJDYXNlKCkpO1xuICAgIH0sXG5cbiAgICBmb3JtYXRBbW91bnQoYW1vdW50KSB7XG4gICAgICBpZiAoYW1vdW50KSB7XG4gICAgICAgIHJldHVybiBhbW91bnQudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcblxuICAgIGVtcHR5U3RyaW5nKGNoYXJhYyA9ICctJywgbGVuZ3RoID0gNCkge1xuICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICBzdHIgKz0gY2hhcmFjXG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH0sXG5cbiAgICBpbkFycmF5KG5lZWRsZSwgaGF5c3RhY2spIHtcbiAgICAgIHZhciBsZW5ndGggPSBoYXlzdGFjay5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChoYXlzdGFja1tpXSA9PSBuZWVkbGUpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB3aG9sZU51bWJlckZvcm1hdChhbW91bnQsIGRlY2ltYVBsYWNlKSB7XG4gICAgICB2YXIgYW1vdW50Tm93ID0gMFxuICAgICAgaWYgKChhbW91bnQgLSBNYXRoLmZsb29yKGFtb3VudCkpICE9PSAwKSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIGlmIChhbW91bnROb3cgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYW1vdW50LnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tbWFfY29uY2F0KGtleSA9ICduYW1lJywgaXRlbXMpIHtcbiAgICAgIGxldCBzZXQgPSAnJztcbiAgICAgIGxldCBpID0gMTtcbiAgICAgIGl0ZW1zLmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgc2V0ICs9IGVsZVtrZXldO1xuICAgICAgICBpZiAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHNldCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzZXQ7XG4gICAgfSxcblxuICAgIHNob3dpbmdfbGFiZWwoZnJvbSwgdG8sIHRvdGFsKSB7XG4gICAgICBsZXQgZiA9IHRoaXMudG9fc3Ryb25nKGZyb20pXG4gICAgICBsZXQgdCA9IHRoaXMudG9fc3Ryb25nKHRvKVxuICAgICAgbGV0IHRvdCA9IHRoaXMudG9fc3Ryb25nKHRvdGFsKVxuICAgICAgcmV0dXJuIGBTaG93aW5nICR7Zn0gdG8gJHt0fSBvZiAke3RvdH0gcmVzdWx0c2A7XG4gICAgfSxcblxuICAgIHRvX3N0cm9uZyhzdHIpIHtcbiAgICAgIHJldHVybiBgPHN0cm9uZz4ke3N0cn08L3N0cm9uZz5gO1xuICAgIH1cbiAgfSxcbn07XG5cbiIsImltcG9ydCB0ZXh0IGZyb20gXCIuL3RleHQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW3RleHRdLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbWFrZVRvYXN0KHZhcmlhbnQgPSBudWxsLCB0aXRsZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy4kYnZUb2FzdC50b2FzdChtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgc29saWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b0NvbmZpcm0oKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICQuY29uZmlybSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIENvbmZpcm0hJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FyZSB5b3Ugc3VyZSB0byBkZWxldGUgdGhpcyBkYXRhPycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyZWQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlQW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNsYXNzOiAnYnRuLXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICd5ZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ2NhbmNlbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlbGV0ZUNvbmZpcm0odGl0bGUgPSAnQ09ORklSTUFUSU9OIEJFRk9SRSBERUxFVElORyBSRUNPUkQnLCBtb2R1bGVOYW1lID0gXCJcIikge1xuXG4gICAgICAgICAgICB0aGlzLmJveFR3byA9ICcnXG4gICAgICAgICAgICB0aGlzLiRidk1vZGFsLm1zZ0JveENvbmZpcm0oJ1BsZWFzZSBjb25maXJtIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIGV2ZXJ5dGhpbmcuJywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxlYXNlIENvbmZpcm0nLFxuICAgICAgICAgICAgICAgIGJ1dHRvblNpemU6ICdzbScsXG4gICAgICAgICAgICAgICAgb2tWYXJpYW50OiAnZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICBva1RpdGxlOiAnWUVTJyxcbiAgICAgICAgICAgICAgICBjYW5jZWxUaXRsZTogJ05PJyxcbiAgICAgICAgICAgICAgICBmb290ZXJDbGFzczogJ3AtMicsXG4gICAgICAgICAgICAgICAgaGlkZUhlYWRlckNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm94VHdvID0gdmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBbiBlcnJvciBvY2N1cnJlZFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgU3dhbFxuICAgICAgICAgICAgLy8gICAgICAgICAuZmlyZSh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0ZXh0OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBkYXRhIGZvcm0gJHttb2R1bGVOYW1lfSByZWNvcmRzP2AsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUgaXQhXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idG4tY2Utc3VibWl0IHtcXG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNlLWNhbmNlbCB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLmhlYWRlci1jZS10aXRsZSB7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0tBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwic2hpZnQtc2NoZWR1bGUtbW9kYWxcXFwiXFxuICAgIGhpZGUtZm9vdGVyXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIGNvbnRlbnQtY2xhc3M9XFxcImJvcmRlci10b3AgYmctY3JlYW1cXFwiXFxuICA+XFxuICAgIDx0ZW1wbGF0ZSAjbW9kYWwtaGVhZGVyPlxcbiAgICAgIDwhLS0gRW11bGF0ZSBidWlsdCBpbiBtb2RhbCBoZWFkZXIgY2xvc2UgYnV0dG9uIGFjdGlvbiAtLT5cXG4gICAgICBcXG4gICAgICA8aDUgY2xhc3M9XFxcImZvbnQtd2VpZ2h0LWJvbGRlciBoZWFkZXItY2UtdGl0bGVcXFwiPnt7IGZvcm0uaWQgPyAnRWRpdCBTaGlmdCBTY2hlZHVsZScgOiAnQWRkIFNoaWZ0IFNjaGVkdWxlJ319PC9oNT5cXG4gICAgICA8Yi1idXR0b25cXG4gICAgICAgIHBpbGxcXG4gICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcXG4gICAgICAgIEBjbGljaz1cXFwibW9kYWxDbG9zZSgpXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgIDwvYi1idXR0b24+XFxuICAgIDwvdGVtcGxhdGU+XFxuXFxuICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cXG4gICAgICA8Yi1mb3JtPlxcbiAgICAgICAgPGItZm9ybS1ncm91cCBpZD1cXFwicmVxdWlyZWQtdGltZS1pblxcXCIgbGFiZWw9XFxcIlJlcXVpcmVkIFRpbWUgSW5cXFwiIGxhYmVsLWZvcj1cXFwicmVxdWlyZWQtdGltZS1pblxcXCI+XFxuICAgICAgICAgIDxiLWZvcm0tdGltZXBpY2tlciB2LW1vZGVsPVxcXCJmb3JtLnJlcXVpcmVkX3RpbWVfaW5cXFwiIGxvY2FsZT1cXFwiZW5cXFwiPjwvYi1mb3JtLXRpbWVwaWNrZXI+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5yZXF1aXJlZF90aW1lX2luXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5yZXF1aXJlZF90aW1lX2luWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcInJlcXVpcmVkLXRpbWUtb3V0XFxcIiBsYWJlbD1cXFwiUmVxdWlyZWQgVGltZSBPdXRcXFwiIGxhYmVsLWZvcj1cXFwicmVxdWlyZWQtdGltZS1vdXRcXFwiPlxcbiAgICAgICAgICA8Yi1mb3JtLXRpbWVwaWNrZXIgdi1tb2RlbD1cXFwiZm9ybS5yZXF1aXJlZF90aW1lX291dFxcXCIgbG9jYWxlPVxcXCJlblxcXCI+PC9iLWZvcm0tdGltZXBpY2tlcj5cXG4gICAgICAgICAgPGRpdiB2LWlmPVxcXCJlcnJvcnMgJiYgZXJyb3JzLnJlcXVpcmVkX3RpbWVfb3V0XFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5yZXF1aXJlZF90aW1lX291dFswXSB9fTwvZGl2PlxcbiAgICAgICAgPC9iLWZvcm0tZ3JvdXA+XFxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVxcXCJuby1vZi1ocnMtYnJrXFxcIiBsYWJlbD1cXFwiTnVtYmVyIG9mIGhvdXJzIGJyZWFrXFxcIiBsYWJlbC1mb3I9XFxcIm5vLW9mLWhycy1icmtcXFwiPlxcbiAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxcbiAgICAgICAgICAgIGlkPVxcXCJuby1vZi1ocnMtYnJrXFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0ubm9fb2ZfaHJzX2Jya1xcXCJcXG4gICAgICAgICAgICA6b3B0aW9ucz1cXFwibnVtYmVyT2ZIb3Vyc0JyZWFrXFxcIlxcbiAgICAgICAgICAgIHJlcXVpcmVkXFxuICAgICAgICAgID48L2ItZm9ybS1zZWxlY3Q+XFxuICAgICAgICAgIDxkaXYgdi1pZj1cXFwiZXJyb3JzICYmIGVycm9ycy5ub19vZl9ocnNfYnJrXFxcIiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPnt7IGVycm9ycy5ub19vZl9ocnNfYnJrWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5pbXBvcnQgYXhpb3MgZnJvbSBcXFwiYXhpb3NcXFwiO1xcbmltcG9ydCB0b2FzdCBmcm9tIFxcXCIuLi8uLi8uLi8uLi9oZWxwZXJzL3RvYXN0LmpzXFxcIjtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBtaXhpbnM6IFt0b2FzdF0sXFxuXFxuICBwcm9wczogW1xcXCJzY2hlZFNoaWZ0Rm9ybVxcXCJdLFxcblxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcXG4gICAgICBmb3JtOiB0aGlzLnNjaGVkU2hpZnRGb3JtLFxcbiAgICAgIHNlYXJjaGVkOiBcXFwiXFxcIixcXG4gICAgICBlcnJvcnM6IHt9LFxcbiAgICAgIG51bWJlck9mSG91cnNCcmVhazogW1xcbiAgICAgICAgMCwgXFxuICAgICAgICAwLjUsXFxuICAgICAgICAxLFxcbiAgICAgICAgMS41LFxcbiAgICAgICAgMixcXG4gICAgICAgIDIuNSxcXG4gICAgICAgIDNcXG4gICAgICBdXFxuICAgIH07XFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICAuLi5tYXBBY3Rpb25zKFxcXCJzaGlmdFNjaGVkdWxlXFxcIiwgW1xcXCJjcmVhdGVTaGlmdFNjaGVkdWxlXFxcIiwgXFxcInVwZGF0ZVNoaWZ0U2NoZWR1bGVcXFwiXSksXFxuICAgIFxcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcXG5cXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXFxcInNoaWZ0LXNjaGVkdWxlLW1vZGFsXFxcIik7XFxuICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcXG5cXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlQ3JlYXRlU2hpZnRTY2hlZHVsZSgpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG4gICAgICAgIHJlcXVpcmVkX3RpbWVfaW46IHRoaXMuZm9ybS5yZXF1aXJlZF90aW1lX2luLFxcbiAgICAgICAgcmVxdWlyZWRfdGltZV9vdXQ6IHRoaXMuZm9ybS5yZXF1aXJlZF90aW1lX291dCxcXG4gICAgICAgIG5vX29mX2hyc19icms6IHRoaXMuZm9ybS5ub19vZl9ocnNfYnJrXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMuY3JlYXRlU2hpZnRTY2hlZHVsZShwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwic3VjY2Vzc1xcXCIsXFxuICAgICAgICAgICAgXFxcIk5FVyBSRUNPUkQgQ1JFQVRFRFxcXCIsXFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtYXRUaW1lKHRoaXMuZm9ybS5yZXF1aXJlZF90aW1lX2luKX0gLSAke3RoaXMuZm9ybWF0VGltZSh0aGlzLmZvcm0ucmVxdWlyZWRfdGltZV9vdXQpfSBoYXMgYmVlbiBjcmVhdGVkIGFzIGEgbmV3IFNoaWZ0IFNjaGVkdWxlYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkU2hpZnRTY2hlZHVsZXNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIGhhbmRsZVVwZGF0ZVNoaWZ0U2NoZWR1bGUoKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcbiAgICAgICAgcmVxdWlyZWRfdGltZV9pbjogdGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfaW4sXFxuICAgICAgICByZXF1aXJlZF90aW1lX291dDogdGhpcy5mb3JtLnJlcXVpcmVkX3RpbWVfb3V0LFxcbiAgICAgICAgbm9fb2ZfaHJzX2JyazogdGhpcy5mb3JtLm5vX29mX2hyc19icmtcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy51cGRhdGVTaGlmdFNjaGVkdWxlKHBhcmFtcylcXG4gICAgICAgIC50aGVuKChfKSA9PiB7XFxuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxcbiAgICAgICAgICAgIFxcXCJ3YXJuaW5nXFxcIixcXG4gICAgICAgICAgICBcXFwiUkVDT1JEIFVQREFURURcXFwiLFxcbiAgICAgICAgICAgIGBUaGlzIGluZm9ybWF0aW9uIGZvciBTaGlmdCBTY2hlZHVsZSBJRDogJHt0aGlzLmZvcm0uaWR9IGhhcyBiZWVuIHVwZGF0ZWQuYFxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJsb2FkU2hpZnRTY2hlZHVsZXNcXFwiKTtcXG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcXG4gICAgICAgIH0pXFxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcXG4gICAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuXFxuICAgIG9uU3VibWl0KCkge1xcbiAgICAgIGlmICh0aGlzLmZvcm0uaWQpIHtcXG4gICAgICAgIHRoaXMuaGFuZGxlVXBkYXRlU2hpZnRTY2hlZHVsZSgpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZVNoaWZ0U2NoZWR1bGUoKTtcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIGZvcm1hdFRpbWUoc2NoZWRTaGlmdFRpbWUpIHtcXG4gICAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gc2NoZWRTaGlmdFRpbWUuc3BsaXQoXFxcIjpcXFwiKTtcXG4gICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKTtcXG4gICAgICB0aW1lLnNldEhvdXJzKGhvdXJzKTtcXG4gICAgICB0aW1lLnNldE1pbnV0ZXMobWludXRlcyk7XFxuICAgICAgY29uc3QgYW1wbSA9IHRpbWUuZ2V0SG91cnMoKSA+PSAxMiA/IFxcXCJQTVxcXCIgOiBcXFwiQU1cXFwiO1xcbiAgICAgIGxldCBob3VyczEyID0gdGltZS5nZXRIb3VycygpICUgMTI7XFxuICAgICAgaG91cnMxMiA9IGhvdXJzMTIgPyBob3VyczEyIDogMTI7IC8vIGNvbnZlcnQgMCB0byAxMlxcbiAgICAgIHJldHVybiBgJHtob3VyczEyfToke21pbnV0ZXN9ICR7YW1wbX1gO1xcbiAgICB9XFxuICB9XFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGlmdFNjaGVkdWxlTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWY2ZTI3YTEmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lY2IzZTgzNlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlY2IzZTgzNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlY2IzZTgzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlY2IzZTgzNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVjYjNlODM2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWNiM2U4MzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3NoaXRmU2NoZWR1bGUvY29tcG9uZW50cy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBkMjQ1OTRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaGlmdFNjaGVkdWxlRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMGQyNDU5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMGQyNDU5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMGQyNDU5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hpZnRTY2hlZHVsZURlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGQyNDU5NFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwZDI0NTk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9zaGl0ZlNjaGVkdWxlL21vZGFscy9zaGlmdFNjaGVkdWxlRGVsZXRlTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaGlmdFNjaGVkdWxlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmNmUyN2ExXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zaGlmdFNjaGVkdWxlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmNmUyN2ExJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWY2ZTI3YTEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWY2ZTI3YTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWY2ZTI3YTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NoaWZ0U2NoZWR1bGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWY2ZTI3YTFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjZlMjdhMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3Mvc2hpdGZTY2hlZHVsZS9tb2RhbHMvc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGlmdFNjaGVkdWxlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGlmdFNjaGVkdWxlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lY2IzZTgzNlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaGlmdFNjaGVkdWxlRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZDI0NTk0XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NoaWZ0U2NoZWR1bGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWY2ZTI3YTFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hpZnRTY2hlZHVsZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmNmUyN2ExJmxhbmc9Y3NzXCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwibmFtZXMiOlsibWFwQWN0aW9ucyIsIm1hcEdldHRlcnMiLCJzaG93RW50cmllc09wdCIsIlNoaWZ0U2NoZWR1bGVNb2RhbCIsIlNoaWZ0U2NoZWR1bGVEZWxldGVNb2RhbCIsIkZvcm0iLCJjb21wb25lbnRzIiwiZGF0YSIsInBlcl9wYWdlIiwiY3VycmVudF9wYWdlIiwiaXNMb2FkaW5nIiwiZmlsdGVyIiwic2VhcmNoZWQiLCJpc092ZXJsYXkiLCJ0b3RhbFJvdyIsInNob3dpbmciLCJ0byIsImZyb20iLCJ0b3RhbCIsInRhYmxlVG90YWxSb3dzIiwiZmllbGRzIiwia2V5IiwibGFiZWwiLCJ0aENsYXNzIiwidGRDbGFzcyIsInRoU3R5bGUiLCJ3aWR0aCIsInNjaGVkU2hpZnRGb3JtIiwiaWQiLCJyZXF1aXJlZF90aW1lX2luIiwicmVxdWlyZWRfdGltZV9vdXQiLCJub19vZl9ocnNfYnJrIiwibW9kYWxJZCIsIm1ldGhvZHMiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlU2hpZnRTY2hlZHVsZSIsInJlc2V0IiwiJGJ2TW9kYWwiLCJzaG93IiwiZWRpdFNoaWZ0U2NoZWR1bGUiLCJwYXJzZUZsb2F0IiwiZGVsZXRlU2hpZnRTY2hlZHVsZSIsImxvYWRTaGlmdFNjaGVkdWxlcyIsIl90aGlzIiwicGFyYW1zIiwicGFnZSIsInNlYXJjaCIsImxvYWRJdGVtcyIsInRoZW4iLCJfIiwiaXRlbXMiLCJwZXJmb3JtU2VhcmNoIiwiZGVib3VuY2UiLCJxdWVyeSIsImZvcm1hdFRpbWUiLCJlbXBsb3llZVRpbWUiLCJfZW1wbG95ZWVUaW1lJHNwbGl0Iiwic3BsaXQiLCJfZW1wbG95ZWVUaW1lJHNwbGl0MiIsIl9zbGljZWRUb0FycmF5IiwiaG91cnMiLCJtaW51dGVzIiwidGltZSIsIkRhdGUiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJhbXBtIiwiZ2V0SG91cnMiLCJob3VyczEyIiwiY29uY2F0IiwibW91bnRlZCIsImNvbXB1dGVkIiwid2F0Y2giLCJoYW5kbGVyIiwidmFsdWUiLCJ0b2FzdCIsIm1peGlucyIsInByb3BzIiwiZm9ybSIsIm1vZGFsQ2xvc2UiLCJkb25lIiwiaGlkZSIsIm9uU3VibWl0IiwibWFrZVRvYXN0IiwiJGVtaXQiLCJlcnJvciIsImVycm9ycyIsInJlc3BvbnNlIiwic2NoZWRTaGlmdFRpbWUiLCJfc2NoZWRTaGlmdFRpbWUkc3BsaXQiLCJfc2NoZWRTaGlmdFRpbWUkc3BsaXQyIiwiYXhpb3MiLCJudW1iZXJPZkhvdXJzQnJlYWsiLCJoYW5kbGVDcmVhdGVTaGlmdFNjaGVkdWxlIiwiaGFuZGxlVXBkYXRlU2hpZnRTY2hlZHVsZSIsIl90aGlzMiIsInVwZGF0ZVNoaWZ0U2NoZWR1bGUiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsImF0dHJzIiwidmFyaWFudCIsIm9uIiwiY2xpY2siLCJpY29uIiwiaW5saW5lIiwib3B0aW9ucyIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwicHJveHkiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyb3VuZGVkIiwiaG92ZXIiLCJzdHJpcGVkIiwiYnVzeSIsIl9zIiwiaXRlbSIsInNpemUiLCIkZXZlbnQiLCJhbGlnbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJjZW50ZXJlZCIsInN0eWxlIiwicGlsbCIsImRpcmVjdGl2ZXMiLCJuYW1lIiwicmF3TmFtZSIsIm1vZGlmaWVycyIsImxvY2FsZSIsIiRzZXQiLCJfZSIsInJlcXVpcmVkIiwidGV4dCIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZ2V0IiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwiZm9yRWFjaCIsInB1c2giLCJvcmlnaW5hbERhdGEiLCJwcm9wZXJ0eSIsInBvc3QiLCJ1cmwiLCJzdWJtaXQiLCJwdXQiLCJwYXRjaCIsIl9kZWxldGUiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25TdWNjZXNzIiwib25GYWlsIiwiaXNEYXRhRW1wdHkiLCJ2YWwiLCJpbmQiLCJpc0RlZmF1bHREYXRhRW1wdHkiLCJzdHJpbmdMb3dlckNhc2UiLCJzdHIiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwibG93ZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdEFtb3VudCIsImFtb3VudCIsImVtcHR5U3RyaW5nIiwiY2hhcmFjIiwiaSIsImwiLCJpbkFycmF5IiwibmVlZGxlIiwiaGF5c3RhY2siLCJ3aG9sZU51bWJlckZvcm1hdCIsImRlY2ltYVBsYWNlIiwiYW1vdW50Tm93IiwiTWF0aCIsImZsb29yIiwicm91bmQiLCJ0b0xvY2FsZVN0cmluZyIsImNvbW1hX2NvbmNhdCIsInNldCIsImVsZSIsInNob3dpbmdfbGFiZWwiLCJmIiwidG9fc3Ryb25nIiwidCIsInRvdCIsInRpdGxlIiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJhY3Rpb24iLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==