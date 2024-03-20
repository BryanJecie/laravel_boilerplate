"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_employees_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _js_helpers_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/helpers/toast */ "./resources/js/helpers/toast.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_components_modal_confirm_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/components/modal-confirm-delete */ "./resources/js/components/modal-confirm-delete.vue");
/* harmony import */ var _modals_create_employee_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modals/create-employee.vue */ "./resources/js/backend/views/employees/modals/create-employee.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    CreateEmployeeModal: _modals_create_employee_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalConfirmDelete: _js_components_modal_confirm_delete__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_js_helpers_toast__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      per_page: 10,
      current_page: 1,
      isLoading: true,
      filter: "",
      showEntriesOpt: _js_data__WEBPACK_IMPORTED_MODULE_0__.showEntriesOpt,
      isOverlay: false,
      isCreate: false,
      totalRow: 0,
      employee_selected: {},
      action: "",
      isDelete: false,
      fields: [{
        key: "employee_id",
        label: "Employee number"
        //   thStyle: { width: "20%" },
      }, {
        key: "full_name",
        label: "Employee Name"
      }, {
        key: "position",
        label: "Postion"
      }, {
        key: "schedule",
        label: "Schedule"
      }, {
        key: "actions",
        label: "Actions"
      }]
    };
  },
  watch: {
    current_page: function current_page(val) {
      this.isOverlay = true;
      this.onLoad();
    },
    per_page: function per_page(val) {
      this.isOverlay = true;
      this.onLoad();
    },
    filter: function filter() {
      this.onLoad();
    }
  },
  mounted: function mounted() {
    // this.$bvModal.show("modal-confirm-delete");
    this.onLoad();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    items: "employee/getItems"
  })),
  methods: {
    onLoad: function onLoad() {
      var _this = this;
      this.$store.dispatch("employee/loadEmployees", {
        per_page: this.per_page,
        page: this.current_page,
        filter: this.filter
      }).then(function () {})["finally"](function () {
        _this.isLoading = false;
        _this.isOverlay = false;
      });
    },
    onCreate: function onCreate() {
      var _this2 = this;
      this.isCreate = true;
      this.isOverlay = true;
      this.action = "add";
      setTimeout(function () {
        _this2.isOverlay = false;
        _this2.$bvModal.show("create-employee");
      }, 1000);
    },
    onDeleteClose: function onDeleteClose() {
      var _this3 = this;
      this.$bvModal.show("modal-confirm-delete");
      this.employee_selected = {};
      setTimeout(function () {
        _this3.isDelete = false;
      }, 100);
    },
    onDelete: function onDelete(item) {
      var _this4 = this;
      this.employee_selected = item;
      this.isDelete = true;
      this.$nextTick();
      setTimeout(function () {
        _this4.$bvModal.show("modal-confirm-delete");
      }, 500);
    },
    toDelete: function toDelete() {
      var _this5 = this;
      this.employee_selected.loading = true;
      this.$bvModal.hide("modal-confirm-delete");
      this.$store.dispatch("employee/onDelete", {
        id: this.employee_selected.id
      }).then(function (resp) {
        _this5.isOverlay = true;
        _this5.makeToast("danger", "Delete", "".concat(_this5.employee_selected.full_name, " has been deleted."));
        _this5.onLoad();
      })["finally"](function () {
        _this5.isDelete = false;
      });
    },
    onEdit: function onEdit(item) {
      var _this6 = this;
      this.action = "edit";
      this.employee_selected = item;
      this.isCreate = true;
      this.isOverlay = true;
      setTimeout(function () {
        _this6.isOverlay = false;
        _this6.$bvModal.show("create-employee");
      }, 1000);
    },
    onClose: function onClose() {
      var _this7 = this;
      this.$bvModal.hide("create-employee");
      setTimeout(function () {
        _this7.isCreate = false;
        _this7.action = "";
        _this7.employee_selected = {};
      }, 200);
    },
    onSuccess: function onSuccess(employee, action) {
      this.isOverlay = true;
      var variant = "success";
      var title = "Save";
      var message = "New Employee Succesfully Save.";
      if (action === "edit") {
        title = "Update";
        variant = "warning";
        message = "".concat(employee.full_name, " is successfully updated.");
      }
      this.makeToast(variant, title, message);
      this.onClose();
      this.onLoad();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_helpers_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/helpers/form */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    employee_selected: {
      type: Object
    },
    action: {
      type: String
    }
  },
  data: function data() {
    return {
      isShow: false,
      positions: [],
      schedules: [],
      btnLoading: false,
      isEdit: false,
      form: new _js_helpers_form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        id: "",
        firstname: "",
        middlename: "",
        lastname: "",
        birthdate: "",
        contact_info: "",
        gender: "Male",
        address: "",
        schedule: "",
        position_id: "",
        biometric_id: "",
        password: "",
        hourly_rate: ""
      }),
      isDTRpassword: true
    };
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;
      if (this.action === "edit" && Object.values(this.employee_selected).length > 0) {
        this.isEdit = true;
        this.setItem();
      }
      this.$store.dispatch("employee/loadItems", {}).then(function (resp) {
        var data = resp.data;
        _this.positions = data.positions;
        _this.schedules = data.schedules;
      })["finally"](function () {
        _this.isShow = true;
      });
    },
    setItem: function setItem() {
      this.form.id = this.employee_selected.id;
      this.form.firstname = this.employee_selected.firstname;
      this.form.middlename = this.employee_selected.middlename;
      this.form.lastname = this.employee_selected.lastname;
      this.form.birthdate = this.employee_selected.birthdate;
      this.form.contact_info = this.employee_selected.contact_info;
      this.form.gender = this.employee_selected.gender;
      this.form.address = this.employee_selected.address;
      this.form.hourly_rate = this.employee_selected.hourly_rate;
      this.form.biometric_id = this.employee_selected.biometric_id;
      this.form.position_id = this.employee_selected.position_id;
      if (this.employee_selected.password) {
        this.isDTRpassword = false;
        this.form.password = this.employee_selected.password;
      }
      if (this.employee_selected.schedule) {
        this.form.schedule = this.employee_selected.schedule.id;
      }
    },
    onSubmit: function onSubmit() {
      this.btnLoading = true;
      if (this.action === "add") {
        this.toStore();
      }
      if (this.action === "edit") {
        this.toUpdate();
      }
    },
    toStore: function toStore() {
      var _this2 = this;
      this.$store.dispatch("employee/onStore", _objectSpread({}, this.form.data())).then(function (data) {
        _this2.$emit("on-success");
      })["catch"](function (error) {
        _this2.form.errors.record(error.response.data.errors);
      })["finally"](function () {
        _this2.btnLoading = false;
      });
    },
    toUpdate: function toUpdate() {
      var _this3 = this;
      this.$store.dispatch("employee/onUpdate", _objectSpread({}, this.form.data())).then(function (rest) {
        var employee = rest.data;
        _this3.$emit("on-success", employee, "edit");
      })["catch"](function (error) {
        _this3.form.errors.record(error.response.data.errors);
      })["finally"](function () {
        _this3.btnLoading = false;
      });
    },
    onClose: function onClose() {
      this.$emit("on-close");
    },
    onSetDtrPassword: function onSetDtrPassword() {
      this.isDTRpassword = false;
      this.generatePassword();
    },
    generatePassword: function generatePassword() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 8;
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      this.form.password = password;
    },
    onCancelDTRPassword: function onCancelDTRPassword() {
      this.isDTRpassword = true;
      this.form.password = "";
    },
    onChangePosition: function onChangePosition() {
      if (this.form.errors.has("position_id")) {
        this.form.errors.clear("position_id");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    selected_item: {
      type: Object
    },
    moduleName: {
      type: String
    }
  },
  data: function data() {
    return {
      name: ""
    };
  },
  methods: {
    onShow: function onShow() {
      if (Object.values(this.selected_item).length > 0) {
        this.name = this.selected_item.full_name;
      }
    },
    toNo: function toNo() {
      this.$bvModal.hide("modal-confirm-delete");
      this.$emit("modal-no");
    },
    toYes: function toYes() {
      //   this.$bvModal.hide("modal-confirm-delete");
      this.$emit("modal-yes");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Employees")]), _vm._v(" "), _c("div", {
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
      click: _vm.onCreate
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
    }, {
      key: "cell(employee_id)",
      fn: function fn(data) {
        return [_c("strong", [_vm._v("\n                  " + _vm._s(data.item.employee_id) + "\n                ")])];
      }
    }, {
      key: "cell(full_name)",
      fn: function fn(data) {
        return [_c("p", {
          staticClass: "mb-0"
        }, [_vm._v("\n                  " + _vm._s(data.item.full_name) + "\n                ")])];
      }
    }, {
      key: "cell(position)",
      fn: function fn(data) {
        return [data.item.position ? _c("strong", [_vm._v("\n                  " + _vm._s(data.item.position.title) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(schedule)",
      fn: function fn(data) {
        return [data.item.schedule ? _c("span", [_vm._v("\n                  " + _vm._s(_vm._f("timeFormat12")(data.item.schedule.required_time_in)) + " -\n                  " + _vm._s(_vm._f("timeFormat12")(data.item.schedule.required_time_out)) + "\n                ")]) : _vm._e()];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(data) {
        return [_c("b-button", {
          staticClass: "mr-2",
          attrs: {
            size: "sm",
            variant: "info"
          },
          on: {
            click: function click($event) {
              return _vm.onEdit(data.item);
            }
          }
        }, [_vm._v("\n                  Edit\n                ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger",
            disabled: data.item.loading
          },
          on: {
            click: function click($event) {
              return _vm.onDelete(data.item);
            }
          }
        }, [data.item.loading ? _c("b-spinner", {
          attrs: {
            small: "",
            label: "Small Spinner",
            type: "grow"
          }
        }) : _vm._e(), _vm._v("\n\n                  Delete\n                ")], 1)];
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("p", [_vm._v("\n            Showing " + _vm._s(_vm.items.from) + " to " + _vm._s(_vm.items.to) + " of\n            " + _vm._s(_vm.items.total) + " entries\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("b-pagination", {
    staticClass: "mb-0",
    attrs: {
      "total-rows": _vm.items.total,
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
  })], 1)])])]), _vm._v(" "), _vm.isCreate ? _c("CreateEmployeeModal", {
    attrs: {
      employee_selected: _vm.employee_selected,
      action: _vm.action
    },
    on: {
      "on-close": _vm.onClose,
      "on-success": _vm.onSuccess
    }
  }) : _vm._e(), _vm._v(" "), _vm.isDelete ? _c("ModalConfirmDelete", {
    attrs: {
      selected_item: _vm.employee_selected,
      moduleName: "Employees"
    },
    on: {
      "modal-no": _vm.onDeleteClose,
      "modal-yes": _vm.toDelete
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c ***!
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
  return _c("b-modal", {
    attrs: {
      id: "create-employee",
      size: "lg",
      "no-close-on-backdrop": "",
      "header-class": "bg-cream ",
      "body-class": "bg-cream",
      "hide-footer": ""
    },
    on: {
      show: _vm.onLoad,
      close: _vm.onClose
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "mb-0 header-ce-title"
        }, [_vm._v("\n      " + _vm._s(_vm.isEdit ? "Edit" : "Add") + " Employee\n    ")]), _vm._v(" "), _c("b-button", {
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
              return _vm.onClose();
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-times"
        })])];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm.isShow ? _c("div", {
    staticClass: "row d-flex justify-content-center mt-2"
  }, [_c("div", {
    staticClass: "col-md-11"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.onSubmit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "firstname"
    }
  }, [_vm._v("\n            First name\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.firstname,
      expression: "form.firstname"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("firstname")
    },
    attrs: {
      type: "text",
      id: "firstname"
    },
    domProps: {
      value: _vm.form.firstname
    },
    on: {
      keydown: function keydown($event) {
        return _vm.form.errors.clear("firstname");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "firstname", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("firstname") ? _c("small", {
    staticClass: "form-text text-danger",
    attrs: {
      id: "helpId"
    },
    domProps: {
      textContent: _vm._s(_vm.form.errors.get("firstname"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "middlename"
    }
  }, [_vm._v("\n            Middle name\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.middlename,
      expression: "form.middlename"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "middlename"
    },
    domProps: {
      value: _vm.form.middlename
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "middlename", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "lastname"
    }
  }, [_vm._v("\n            Last name\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.lastname,
      expression: "form.lastname"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "lastname"
    },
    domProps: {
      value: _vm.form.lastname
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "lastname", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "birthdate"
    }
  }, [_vm._v("\n            Birthdate\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.birthdate,
      expression: "form.birthdate"
    }],
    staticClass: "form-control",
    "class": {
      "is-invalid": _vm.form.errors.has("birthdate")
    },
    attrs: {
      type: "date",
      id: "birthdate"
    },
    domProps: {
      value: _vm.form.birthdate
    },
    on: {
      change: function change($event) {
        return _vm.form.errors.clear("birthdate");
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "birthdate", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("birthdate") ? _c("small", {
    staticClass: "form-text text-danger",
    attrs: {
      id: "helpId"
    },
    domProps: {
      textContent: _vm._s(_vm.form.errors.get("birthdate"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "contact"
    }
  }, [_vm._v("\n            Contact Info\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.contact_info,
      expression: "form.contact_info"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "contact"
    },
    domProps: {
      value: _vm.form.contact_info
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "contact_info", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "gender"
    }
  }, [_vm._v("Gender")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("b-form-select", {
    attrs: {
      options: ["Male", "Female"]
    },
    model: {
      value: _vm.form.gender,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "gender", $$v);
      },
      expression: "form.gender"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("b-form-textarea", {
    attrs: {
      id: "textarea",
      placeholder: "Text here...",
      rows: "3",
      "max-rows": "6"
    },
    model: {
      value: _vm.form.address,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "address", $$v);
      },
      expression: "form.address"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "gender"
    }
  }, [_vm._v("Schedule")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("b-form-select", {
    "class": {
      "is-invalid": _vm.form.errors.has("position_id")
    },
    on: {
      change: function change($event) {
        return _vm.form.errors.clear("schedule");
      }
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function fn() {
        return [_c("b-form-select-option", {
          attrs: {
            value: "",
            disabled: ""
          }
        }, [_vm._v("\n                  -- Please select a schedule --\n                ")])];
      },
      proxy: true
    }], null, false, 3368675873),
    model: {
      value: _vm.form.schedule,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "schedule", $$v);
      },
      expression: "form.schedule"
    }
  }, [_vm._v(" "), _vm._l(_vm.schedules, function (sched) {
    return _c("b-form-select-option", {
      key: sched.id,
      attrs: {
        value: sched.id
      }
    }, [_vm._v("\n                " + _vm._s(_vm._f("timeFormat12")(sched.required_time_in)) + " -\n                " + _vm._s(_vm._f("timeFormat12")(sched.required_time_out)) + "\n              ")]);
  })], 2), _vm._v(" "), _vm.form.errors.has("schedule") ? _c("small", {
    staticClass: "form-text text-danger",
    attrs: {
      id: "helpId"
    },
    domProps: {
      textContent: _vm._s(_vm.form.errors.get("schedule"))
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "position_id"
    }
  }, [_vm._v("\n            Position\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("b-form-select", {
    "class": {
      "is-invalid": _vm.form.errors.has("position_id")
    },
    attrs: {
      id: "position_id",
      name: "position_id"
    },
    on: {
      change: function change($event) {
        return _vm.form.errors.clear("position_id");
      }
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function fn() {
        return [_c("b-form-select-option", {
          attrs: {
            value: "",
            disabled: ""
          }
        }, [_vm._v("\n                  -- Please select a position --\n                ")])];
      },
      proxy: true
    }], null, false, 3777476765),
    model: {
      value: _vm.form.position_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "position_id", $$v);
      },
      expression: "form.position_id"
    }
  }, [_vm._v(" "), _vm._l(_vm.positions, function (pos) {
    return _c("b-form-select-option", {
      key: pos.id,
      attrs: {
        value: pos.id
      }
    }, [_vm._v("\n                " + _vm._s(pos.title) + "\n              ")]);
  })], 2), _vm._v(" "), _vm.form.errors.has("position_id") ? _c("small", {
    staticClass: "form-text text-danger",
    attrs: {
      id: "helpId"
    },
    domProps: {
      textContent: _vm._s("The Position field is required")
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "hourly_rate"
    }
  }, [_vm._v("\n            Hourly Rate\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.hourly_rate,
      expression: "form.hourly_rate"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: ".001",
      id: "hourly_rate"
    },
    domProps: {
      value: _vm.form.hourly_rate
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "hourly_rate", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group row"
  }, [_c("label", {
    staticClass: "col-sm-3 col-form-label",
    attrs: {
      "for": "biometric_id"
    }
  }, [_vm._v("\n            Biometric Id\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.biometric_id,
      expression: "form.biometric_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "biometric_id"
    },
    domProps: {
      value: _vm.form.biometric_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "biometric_id", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "float-right mb-2"
  }, [_c("b-button", {
    staticClass: "btn-ce-cancel shadow bg-cream mr-2",
    staticStyle: {
      width: "120px"
    },
    attrs: {
      type: "reset"
    },
    on: {
      click: _vm.onClose
    }
  }, [_vm._v("\n            CANCEL\n          ")]), _vm._v(" "), _c("b-button", {
    staticClass: "bg-brown shadow btn-ce-submit",
    "class": {
      "btn-ce-submit-w200": _vm.isEdit,
      "btn-ce-submit-w120": !_vm.isEdit
    },
    attrs: {
      type: "submit",
      disabled: _vm.btnLoading
    }
  }, [_vm.btnLoading ? _c("b-spinner", {
    attrs: {
      small: "",
      label: "Small Spinner",
      type: "grow"
    }
  }) : _vm._e(), _vm._v("\n            " + _vm._s(_vm.isEdit ? "SAVE CHANGES" : "SAVE") + "\n          ")], 1)], 1)])])]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "modal-confirm-delete",
      "hide-header": "",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "no-close-on-esc": "",
      "header-class": "bg-cream",
      "body-class": "bg-cream pl-5 pr-5 mcd-box-shadow",
      centered: "",
      "content-class": "border-top background-cream text-color-brown"
    },
    on: {
      show: _vm.onShow
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn() {
        return [_c("div", {
          staticClass: "row d-flex justify-content-center mt-3"
        }, [_c("div", {
          staticClass: "col-sm-12"
        }, [_c("h3", {
          staticClass: "card-title text-center text-danger"
        }, [_vm._v("\n          CONFIRMATION BEFORE DELETING RECORD\n        ")]), _vm._v(" "), _c("p", {
          staticClass: "card-text text-center mt-2 mb-2"
        }, [_vm._v("\n          Are you sure you want to delete\n          "), _c("strong", [_vm._v(" " + _vm._s(_vm.name) + " ")]), _vm._v(" from\n          "), _c("strong", [_vm._v(" " + _vm._s(_vm.moduleName) + " ")]), _vm._v(" records?\n        ")])])]), _vm._v(" "), _c("div", {
          staticClass: "row d-flex justify-content-center mt-3 mb-3"
        }, [_c("div", {
          staticClass: "col-sm-12 text-center"
        }, [_c("b-button", {
          staticClass: "btn-ce-cancel shadow bg-cream mr-2",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "reset"
          },
          on: {
            click: _vm.toNo
          }
        }, [_vm._v("\n          NO\n        ")]), _vm._v(" "), _c("b-button", {
          staticClass: "bg-brown shadow btn-ce-submit",
          staticStyle: {
            width: "100px"
          },
          attrs: {
            type: "submit"
          },
          on: {
            click: _vm.toYes
          }
        }, [_vm._v("\n          YES\n        ")])], 1)])];
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-submit-w120 {\n  width: 120px !important;\n}\n.btn-ce-submit-w200 {\n  width: 200px !important;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n.btn-create-employee {\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/employees/modals/create-employee.vue"],"names":[],"mappings":";AA2cA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,uBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA;AACA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"create-employee\"\n    size=\"lg\"\n    no-close-on-backdrop\n    @show=\"onLoad\"\n    @close=\"onClose\"\n    header-class=\"bg-cream \"\n    body-class=\"bg-cream\"\n    hide-footer\n  >\n    <template #modal-header>\n      <h5 class=\"mb-0 header-ce-title\">\n        {{ isEdit ? \"Edit\" : \"Add\" }} Employee\n      </h5>\n      <b-button\n        pill\n        size=\"sm\"\n        class=\"bg-brown shadow btn-ce-submit\"\n        v-b-tooltip.hover\n        @click=\"onClose()\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <div class=\"row d-flex justify-content-center mt-2\" v-if=\"isShow\">\n      <div class=\"col-md-11\">\n        <form @submit.prevent=\"onSubmit\">\n          <div class=\"form-group row\">\n            <label for=\"firstname\" class=\"col-sm-3 col-form-label\">\n              First name\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"text\"\n                v-model=\"form.firstname\"\n                class=\"form-control\"\n                id=\"firstname\"\n                @keydown=\"form.errors.clear('firstname')\"\n                :class=\"{ 'is-invalid': form.errors.has('firstname') }\"\n              />\n              <small\n                id=\"helpId\"\n                v-if=\"form.errors.has('firstname')\"\n                v-text=\"form.errors.get('firstname')\"\n                class=\"form-text text-danger\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"middlename\" class=\"col-sm-3 col-form-label\">\n              Middle name\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"text\"\n                v-model=\"form.middlename\"\n                class=\"form-control\"\n                id=\"middlename\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"lastname\" class=\"col-sm-3 col-form-label\">\n              Last name\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"text\"\n                v-model=\"form.lastname\"\n                class=\"form-control\"\n                id=\"lastname\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"birthdate\" class=\"col-sm-3 col-form-label\">\n              Birthdate\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"date\"\n                class=\"form-control\"\n                :class=\"{ 'is-invalid': form.errors.has('birthdate') }\"\n                @change=\"form.errors.clear('birthdate')\"\n                v-model=\"form.birthdate\"\n                id=\"birthdate\"\n              />\n              <small\n                id=\"helpId\"\n                v-if=\"form.errors.has('birthdate')\"\n                v-text=\"form.errors.get('birthdate')\"\n                class=\"form-text text-danger\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"contact\" class=\"col-sm-3 col-form-label\">\n              Contact Info\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"text\"\n                v-model=\"form.contact_info\"\n                class=\"form-control\"\n                id=\"contact\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"gender\" class=\"col-sm-3 col-form-label\">Gender</label>\n            <div class=\"col-sm-9\">\n              <b-form-select\n                v-model=\"form.gender\"\n                :options=\"['Male', 'Female']\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"address\" class=\"col-sm-3 col-form-label\">Address</label>\n            <div class=\"col-sm-9\">\n              <b-form-textarea\n                id=\"textarea\"\n                v-model=\"form.address\"\n                placeholder=\"Text here...\"\n                rows=\"3\"\n                max-rows=\"6\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"gender\" class=\"col-sm-3 col-form-label\">Schedule</label>\n            <div class=\"col-sm-9\">\n              <b-form-select\n                v-model=\"form.schedule\"\n                :class=\"{ 'is-invalid': form.errors.has('position_id') }\"\n                @change=\"form.errors.clear('schedule')\"\n              >\n                <template #first>\n                  <b-form-select-option :value=\"''\" disabled>\n                    -- Please select a schedule --\n                  </b-form-select-option>\n                </template>\n                <b-form-select-option\n                  v-for=\"sched in schedules\"\n                  :key=\"sched.id\"\n                  :value=\"sched.id\"\n                >\n                  {{ sched.required_time_in | timeFormat12 }} -\n                  {{ sched.required_time_out | timeFormat12 }}\n                </b-form-select-option>\n              </b-form-select>\n\n              <small\n                id=\"helpId\"\n                v-if=\"form.errors.has('schedule')\"\n                v-text=\"form.errors.get('schedule')\"\n                class=\"form-text text-danger\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"position_id\" class=\"col-sm-3 col-form-label\">\n              Position\n            </label>\n            <div class=\"col-sm-9\">\n              <b-form-select\n                v-model=\"form.position_id\"\n                id=\"position_id\"\n                name=\"position_id\"\n                :class=\"{ 'is-invalid': form.errors.has('position_id') }\"\n                @change=\"form.errors.clear('position_id')\"\n              >\n                <template #first>\n                  <b-form-select-option :value=\"''\" disabled>\n                    -- Please select a position --\n                  </b-form-select-option>\n                </template>\n                <b-form-select-option\n                  v-for=\"pos in positions\"\n                  :key=\"pos.id\"\n                  :value=\"pos.id\"\n                >\n                  {{ pos.title }}\n                </b-form-select-option>\n              </b-form-select>\n              <small\n                id=\"helpId\"\n                v-if=\"form.errors.has('position_id')\"\n                v-text=\"`The Position field is required`\"\n                class=\"form-text text-danger\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"hourly_rate\" class=\"col-sm-3 col-form-label\">\n              Hourly Rate\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"number\"\n                step=\".001\"\n                v-model=\"form.hourly_rate\"\n                class=\"form-control\"\n                id=\"hourly_rate\"\n              />\n            </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label for=\"biometric_id\" class=\"col-sm-3 col-form-label\">\n              Biometric Id\n            </label>\n            <div class=\"col-sm-9\">\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                v-model=\"form.biometric_id\"\n                id=\"biometric_id\"\n              />\n            </div>\n          </div>\n          <!-- <div class=\"form-group row\">\n            <label for=\"dtr_password\" class=\"col-sm-3 col-form-label\">\n              DTR Password\n            </label>\n            <div class=\"col-sm-9\">\n              <b-input-group>\n                <b-form-input\n                  :disabled=\"isDTRpassword\"\n                  v-model=\"form.password\"\n                  readonly\n                />\n                <b-input-group-append v-if=\"!isDTRpassword\">\n                  <b-button @click=\"generatePassword\">\n                    <b-icon icon=\"arrow-repeat\"></b-icon>\n                  </b-button>\n                  <b-button @click=\"onCancelDTRPassword\">\n                    <b-icon icon=\"x-circle\" variant=\"danger\"></b-icon>\n                  </b-button>\n                </b-input-group-append>\n              </b-input-group>\n\n              <p class=\"float-right mt-2\">\n                <a\n                  href=\"#\"\n                  v-if=\"isDTRpassword\"\n                  @click=\"onSetDtrPassword\"\n                  class=\"font-sm\"\n                >\n                  Set DTR Password\n                </a>\n              </p>\n            </div>\n          </div> -->\n\n          <div class=\"float-right mb-2\">\n            <b-button\n              type=\"reset\"\n              class=\"btn-ce-cancel shadow bg-cream mr-2\"\n              style=\"width: 120px\"\n              @click=\"onClose\"\n            >\n              CANCEL\n            </b-button>\n            <b-button\n              type=\"submit\"\n              class=\"bg-brown shadow btn-ce-submit\"\n              style=\"\"\n              :disabled=\"btnLoading\"\n              :class=\"{\n                'btn-ce-submit-w200': isEdit,\n                'btn-ce-submit-w120': !isEdit,\n              }\"\n            >\n              <b-spinner\n                small\n                v-if=\"btnLoading\"\n                label=\"Small Spinner\"\n                type=\"grow\"\n              />\n              {{ isEdit ? \"SAVE CHANGES\" : \"SAVE\" }}\n            </b-button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </b-modal>\n</template>\n\n<script>\nimport Form from \"@js/helpers/form\";\nexport default {\n  props: {\n    employee_selected: {\n      type: Object,\n    },\n    action: {\n      type: String,\n    },\n  },\n  data() {\n    return {\n      isShow: false,\n      positions: [],\n      schedules: [],\n      btnLoading: false,\n      isEdit: false,\n      form: new Form({\n        id: \"\",\n        firstname: \"\",\n        middlename: \"\",\n        lastname: \"\",\n        birthdate: \"\",\n        contact_info: \"\",\n        gender: \"Male\",\n        address: \"\",\n        schedule: \"\",\n        position_id: \"\",\n        biometric_id: \"\",\n        password: \"\",\n        hourly_rate: \"\",\n      }),\n      isDTRpassword: true,\n    };\n  },\n\n  methods: {\n    onLoad() {\n      if (\n        this.action === \"edit\" &&\n        Object.values(this.employee_selected).length > 0\n      ) {\n        this.isEdit = true;\n        this.setItem();\n      }\n\n      this.$store\n        .dispatch(\"employee/loadItems\", {})\n        .then((resp) => {\n          const data = resp.data;\n          this.positions = data.positions;\n          this.schedules = data.schedules;\n        })\n        .finally(() => {\n          this.isShow = true;\n        });\n    },\n    setItem() {\n      this.form.id = this.employee_selected.id;\n      this.form.firstname = this.employee_selected.firstname;\n      this.form.middlename = this.employee_selected.middlename;\n      this.form.lastname = this.employee_selected.lastname;\n      this.form.birthdate = this.employee_selected.birthdate;\n      this.form.contact_info = this.employee_selected.contact_info;\n      this.form.gender = this.employee_selected.gender;\n      this.form.address = this.employee_selected.address;\n      this.form.hourly_rate = this.employee_selected.hourly_rate;\n      this.form.biometric_id = this.employee_selected.biometric_id;\n      this.form.position_id = this.employee_selected.position_id;\n\n      if (this.employee_selected.password) {\n        this.isDTRpassword = false;\n        this.form.password = this.employee_selected.password;\n      }\n\n      if (this.employee_selected.schedule) {\n        this.form.schedule = this.employee_selected.schedule.id;\n      }\n    },\n\n    onSubmit() {\n      this.btnLoading = true;\n\n      if (this.action === \"add\") {\n        this.toStore();\n      }\n\n      if (this.action === \"edit\") {\n        this.toUpdate();\n      }\n    },\n\n    toStore() {\n      this.$store\n        .dispatch(\"employee/onStore\", {\n          ...this.form.data(),\n        })\n        .then((data) => {\n          this.$emit(\"on-success\");\n        })\n        .catch((error) => {\n          this.form.errors.record(error.response.data.errors);\n        })\n        .finally(() => {\n          this.btnLoading = false;\n        });\n    },\n\n    toUpdate() {\n      this.$store\n        .dispatch(\"employee/onUpdate\", {\n          ...this.form.data(),\n        })\n        .then((rest) => {\n          const employee = rest.data;\n          this.$emit(\"on-success\", employee, \"edit\");\n        })\n        .catch((error) => {\n          this.form.errors.record(error.response.data.errors);\n        })\n        .finally(() => {\n          this.btnLoading = false;\n        });\n    },\n\n    onClose() {\n      this.$emit(\"on-close\");\n    },\n\n    onSetDtrPassword() {\n      this.isDTRpassword = false;\n      this.generatePassword();\n    },\n\n    generatePassword() {\n      var chars =\n        \"0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n      var passwordLength = 8;\n      var password = \"\";\n\n      for (var i = 0; i <= passwordLength; i++) {\n        var randomNumber = Math.floor(Math.random() * chars.length);\n        password += chars.substring(randomNumber, randomNumber + 1);\n      }\n\n      this.form.password = password;\n    },\n\n    onCancelDTRPassword() {\n      this.isDTRpassword = true;\n      this.form.password = \"\";\n    },\n\n    onChangePosition() {\n      if (this.form.errors.has(\"position_id\")) {\n        this.form.errors.clear(\"position_id\");\n      }\n    },\n  },\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-submit-w120 {\n  width: 120px !important;\n}\n.btn-ce-submit-w200 {\n  width: 200px !important;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n.btn-create-employee {\n}\n</style>\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-title {\n  font-weight: bolder;\n  color: #785b4c !important;\n}\n.card-text {\n  color: #785b4c !important;\n}\n.mcd-box-shadow {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/modal-confirm-delete.vue"],"names":[],"mappings":";AAqFA;EACA,mBAAA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,4CAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"modal-confirm-delete\"\n    hide-header\n    hide-footer\n    no-close-on-backdrop\n    no-close-on-esc\n    header-class=\"bg-cream\"\n    body-class=\"bg-cream pl-5 pr-5 mcd-box-shadow\"\n    centered\n    content-class=\"border-top background-cream text-color-brown\"\n    @show=\"onShow\"\n  >\n    <template #default>\n      <div class=\"row d-flex justify-content-center mt-3\">\n        <div class=\"col-sm-12\">\n          <h3 class=\"card-title text-center text-danger\">\n            CONFIRMATION BEFORE DELETING RECORD\n          </h3>\n          <p class=\"card-text text-center mt-2 mb-2\">\n            Are you sure you want to delete\n            <strong> {{ name }} </strong> from\n            <strong> {{ moduleName }} </strong> records?\n          </p>\n        </div>\n      </div>\n\n      <div class=\"row d-flex justify-content-center mt-3 mb-3\">\n        <div class=\"col-sm-12 text-center\">\n          <b-button\n            type=\"reset\"\n            class=\"btn-ce-cancel shadow bg-cream mr-2\"\n            style=\"width: 100px\"\n            @click=\"toNo\"\n          >\n            NO\n          </b-button>\n          <b-button\n            type=\"submit\"\n            class=\"bg-brown shadow btn-ce-submit\"\n            style=\"width: 100px\"\n            @click=\"toYes\"\n          >\n            YES\n          </b-button>\n        </div>\n      </div>\n    </template>\n  </b-modal>\n</template>\n\n<script>\nexport default {\n  props: {\n    selected_item: {\n      type: Object,\n    },\n    moduleName: {\n      type: String,\n    },\n  },\n  data() {\n    return {\n      name: \"\",\n    };\n  },\n  methods: {\n    onShow() {\n      if (Object.values(this.selected_item).length > 0) {\n        this.name = this.selected_item.full_name;\n      }\n    },\n    toNo() {\n      this.$bvModal.hide(\"modal-confirm-delete\");\n      this.$emit(\"modal-no\");\n    },\n    toYes() {\n      //   this.$bvModal.hide(\"modal-confirm-delete\");\n      this.$emit(\"modal-yes\");\n    },\n  },\n};\n</script>\n\n<style>\n.card-title {\n  font-weight: bolder;\n  color: #785b4c !important;\n}\n\n.card-text {\n  color: #785b4c !important;\n}\n\n.mcd-box-shadow {\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_style_index_0_id_277a464c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_style_index_0_id_277a464c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_style_index_0_id_277a464c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_style_index_0_id_10f3a543_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_style_index_0_id_10f3a543_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_style_index_0_id_10f3a543_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/employees/components/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/index.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4f4b3586 */ "./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/employees/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/employees/modals/create-employee.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/views/employees/modals/create-employee.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-employee.vue?vue&type=template&id=277a464c */ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c");
/* harmony import */ var _create_employee_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-employee.vue?vue&type=script&lang=js */ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js");
/* harmony import */ var _create_employee_vue_vue_type_style_index_0_id_277a464c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css */ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_employee_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__.render,
  _create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/employees/modals/create-employee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/modal-confirm-delete.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/modal-confirm-delete.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-confirm-delete.vue?vue&type=template&id=10f3a543 */ "./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543");
/* harmony import */ var _modal_confirm_delete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-confirm-delete.vue?vue&type=script&lang=js */ "./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js");
/* harmony import */ var _modal_confirm_delete_vue_vue_type_style_index_0_id_10f3a543_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css */ "./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _modal_confirm_delete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__.render,
  _modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/modal-confirm-delete.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create-employee.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal-confirm-delete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4f4b3586__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4f4b3586 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/components/index.vue?vue&type=template&id=4f4b3586");


/***/ }),

/***/ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_template_id_277a464c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create-employee.vue?vue&type=template&id=277a464c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=template&id=277a464c");


/***/ }),

/***/ "./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_template_id_10f3a543__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal-confirm-delete.vue?vue&type=template&id=10f3a543 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=template&id=10f3a543");


/***/ }),

/***/ "./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_employee_vue_vue_type_style_index_0_id_277a464c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/employees/modals/create-employee.vue?vue&type=style&index=0&id=277a464c&lang=css");


/***/ }),

/***/ "./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_modal_confirm_delete_vue_vue_type_style_index_0_id_10f3a543_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/modal-confirm-delete.vue?vue&type=style&index=0&id=10f3a543&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX2VtcGxveWVlc19jb21wb25lbnRzX2luZGV4X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ2ZLLFVBQUE7SUFDQUQsbUJBQUEsRUFBQUEsbUVBQUE7SUFDQUQsa0JBQUEsRUFBQUEsMkVBQUFBO0VBQ0E7RUFDQUcsTUFBQSxHQUFBTCx5REFBQTtFQUNBTSxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBQyxRQUFBO01BQ0FDLFlBQUE7TUFDQUMsU0FBQTtNQUNBQyxNQUFBO01BQ0FYLGNBQUEsRUFBQUEsb0RBQUE7TUFDQVksU0FBQTtNQUNBQyxRQUFBO01BQ0FDLFFBQUE7TUFDQUMsaUJBQUE7TUFDQUMsTUFBQTtNQUNBQyxRQUFBO01BQ0FDLE1BQUEsR0FDQTtRQUNBQyxHQUFBO1FBQ0FDLEtBQUE7UUFDQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7TUFDQSxHQUNBO1FBQ0FELEdBQUE7UUFDQUMsS0FBQTtNQUNBLEdBQ0E7UUFDQUQsR0FBQTtRQUNBQyxLQUFBO01BQ0E7SUFFQTtFQUNBO0VBRUFDLEtBQUE7SUFDQVosWUFBQSxXQUFBQSxhQUFBYSxHQUFBO01BQ0EsS0FBQVYsU0FBQTtNQUNBLEtBQUFXLE1BQUE7SUFDQTtJQUNBZixRQUFBLFdBQUFBLFNBQUFjLEdBQUE7TUFDQSxLQUFBVixTQUFBO01BQ0EsS0FBQVcsTUFBQTtJQUNBO0lBRUFaLE1BQUEsV0FBQUEsT0FBQTtNQUNBLEtBQUFZLE1BQUE7SUFDQTtFQUNBO0VBQ0FDLE9BQUEsV0FBQUEsUUFBQTtJQUNBO0lBQ0EsS0FBQUQsTUFBQTtFQUNBO0VBRUFFLFFBQUEsRUFBQUMsYUFBQSxLQUNBeEIsZ0RBQUE7SUFDQXlCLEtBQUE7RUFDQSxHQUNBO0VBQ0FD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZW1wbG95ZWVzL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9lbXBsb3llZXMvbW9kYWxzL2NyZWF0ZS1lbXBsb3llZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9lbXBsb3llZXMvY29tcG9uZW50cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvZW1wbG95ZWVzL21vZGFscy9jcmVhdGUtZW1wbG95ZWUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy90ZXh0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL3RvYXN0LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT82YzAzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT83NmY1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT80OTgxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT8zOTc5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL2luZGV4LnZ1ZT8xN2YzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT83NDk4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT9iZDQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL2luZGV4LnZ1ZT9jNDY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT85NjE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT9iMTI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL2luZGV4LnZ1ZT9iMTYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT9jMTkzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT9hNDk3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZT9mYmVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT9kNmQ0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCI+XG4gICAgPGgxIGNsYXNzPVwibS0wIG1iLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWluZm9cIj5FbXBsb3llZXM8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXIgcHktM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIEBjbGljaz1cIm9uQ3JlYXRlXCI+XG4gICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cInBsdXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2ItaWNvbj5OZXdcbiAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBtYi0zXCI+XG4gICAgICAgICAgICA8Yi1mb3JtIGlubGluZT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibXItc20tMlwiIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiPlxuICAgICAgICAgICAgICAgIFNob3dcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcbiAgICAgICAgICAgICAgICBpZD1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIG1yLXNtLTIgbWItc20tMFwiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJzaG93RW50cmllc09wdFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInBlcl9wYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIG1yLXNtLTIgbWItc20tMFwiXG4gICAgICAgICAgICAgICAgZm9yPVwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEVudHJpZXNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvYi1mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlICNhcHBlbmQ+XG4gICAgICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtdGV4dD5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmUuLi5cIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGItb3ZlcmxheSA6c2hvdz1cImlzT3ZlcmxheVwiIHJvdW5kZWQ9XCJzbVwiPlxuICAgICAgICAgICAgICA8Yi10YWJsZVxuICAgICAgICAgICAgICAgIGhvdmVyXG4gICAgICAgICAgICAgICAgc3RyaXBlZFxuICAgICAgICAgICAgICAgIHNob3ctZW1wdHlcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtcy5kYXRhXCJcbiAgICAgICAgICAgICAgICA6ZmllbGRzPVwiZmllbGRzXCJcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChlbXBsb3llZV9pZCk9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZW1wbG95ZWVfaWQgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmNlbGwoZnVsbF9uYW1lKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uZnVsbF9uYW1lIH19XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChwb3NpdGlvbik9XCJkYXRhXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIHYtaWY9XCJkYXRhLml0ZW0ucG9zaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLnBvc2l0aW9uLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKHNjaGVkdWxlKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJkYXRhLml0ZW0uc2NoZWR1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5pdGVtLnNjaGVkdWxlLnJlcXVpcmVkX3RpbWVfaW4gfCB0aW1lRm9ybWF0MTIgfX0gLVxuICAgICAgICAgICAgICAgICAgICB7eyBkYXRhLml0ZW0uc2NoZWR1bGUucmVxdWlyZWRfdGltZV9vdXQgfCB0aW1lRm9ybWF0MTIgfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpjZWxsKGFjdGlvbnMpPVwiZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25FZGl0KGRhdGEuaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkRlbGV0ZShkYXRhLml0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5pdGVtLmxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5pdGVtLmxvYWRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hbGwgU3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8L2Itb3ZlcmxheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNob3dpbmcge3sgaXRlbXMuZnJvbSB9fSB0byB7eyBpdGVtcy50byB9fSBvZlxuICAgICAgICAgICAgICB7eyBpdGVtcy50b3RhbCB9fSBlbnRyaWVzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8Yi1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItMFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA6dG90YWwtcm93cz1cIml0ZW1zLnRvdGFsXCJcbiAgICAgICAgICAgICAgOnBlci1wYWdlPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8Q3JlYXRlRW1wbG95ZWVNb2RhbFxuICAgICAgdi1pZj1cImlzQ3JlYXRlXCJcbiAgICAgIDplbXBsb3llZV9zZWxlY3RlZD1cImVtcGxveWVlX3NlbGVjdGVkXCJcbiAgICAgIDphY3Rpb249XCJhY3Rpb25cIlxuICAgICAgQG9uLWNsb3NlPVwib25DbG9zZVwiXG4gICAgICBAb24tc3VjY2Vzcz1cIm9uU3VjY2Vzc1wiXG4gICAgLz5cblxuICAgIDxNb2RhbENvbmZpcm1EZWxldGVcbiAgICAgIHYtaWY9XCJpc0RlbGV0ZVwiXG4gICAgICA6c2VsZWN0ZWRfaXRlbT1cImVtcGxveWVlX3NlbGVjdGVkXCJcbiAgICAgIDptb2R1bGVOYW1lPVwiJ0VtcGxveWVlcydcIlxuICAgICAgQG1vZGFsLW5vPVwib25EZWxldGVDbG9zZVwiXG4gICAgICBAbW9kYWwteWVzPVwidG9EZWxldGVcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHNob3dFbnRyaWVzT3B0IH0gZnJvbSBcIkBqcy9kYXRhXCI7XG5pbXBvcnQgdG9hc3QgZnJvbSBcIkBqcy9oZWxwZXJzL3RvYXN0XCI7XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBNb2RhbENvbmZpcm1EZWxldGUgZnJvbSBcIkBqcy9jb21wb25lbnRzL21vZGFsLWNvbmZpcm0tZGVsZXRlXCI7XG5pbXBvcnQgQ3JlYXRlRW1wbG95ZWVNb2RhbCBmcm9tIFwiLi8uLi9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQ3JlYXRlRW1wbG95ZWVNb2RhbCxcbiAgICBNb2RhbENvbmZpcm1EZWxldGUsXG4gIH0sXG4gIG1peGluczogW3RvYXN0XSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgY3VycmVudF9wYWdlOiAxLFxuICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgZmlsdGVyOiBcIlwiLFxuICAgICAgc2hvd0VudHJpZXNPcHQsXG4gICAgICBpc092ZXJsYXk6IGZhbHNlLFxuICAgICAgaXNDcmVhdGU6IGZhbHNlLFxuICAgICAgdG90YWxSb3c6IDAsXG4gICAgICBlbXBsb3llZV9zZWxlY3RlZDoge30sXG4gICAgICBhY3Rpb246IFwiXCIsXG4gICAgICBpc0RlbGV0ZTogZmFsc2UsXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJlbXBsb3llZV9pZFwiLFxuICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIG51bWJlclwiLFxuICAgICAgICAgIC8vICAgdGhTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcImZ1bGxfbmFtZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIkVtcGxveWVlIE5hbWVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJwb3NpdGlvblwiLFxuICAgICAgICAgIGxhYmVsOiBcIlBvc3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzY2hlZHVsZVwiLFxuICAgICAgICAgIGxhYmVsOiBcIlNjaGVkdWxlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFjdGlvbnNcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGN1cnJlbnRfcGFnZSh2YWwpIHtcbiAgICAgIHRoaXMuaXNPdmVybGF5ID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfSxcbiAgICBwZXJfcGFnZSh2YWwpIHtcbiAgICAgIHRoaXMuaXNPdmVybGF5ID0gdHJ1ZTtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfSxcblxuICAgIGZpbHRlcigpIHtcbiAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvLyB0aGlzLiRidk1vZGFsLnNob3coXCJtb2RhbC1jb25maXJtLWRlbGV0ZVwiKTtcbiAgICB0aGlzLm9uTG9hZCgpO1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICBpdGVtczogXCJlbXBsb3llZS9nZXRJdGVtc1wiLFxuICAgIH0pLFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy4kc3RvcmVcbiAgICAgICAgLmRpc3BhdGNoKFwiZW1wbG95ZWUvbG9hZEVtcGxveWVlc1wiLCB7XG4gICAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge30pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNPdmVybGF5ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNyZWF0ZSgpIHtcbiAgICAgIHRoaXMuaXNDcmVhdGUgPSB0cnVlO1xuICAgICAgdGhpcy5pc092ZXJsYXkgPSB0cnVlO1xuICAgICAgdGhpcy5hY3Rpb24gPSBcImFkZFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNPdmVybGF5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyhcImNyZWF0ZS1lbXBsb3llZVwiKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0sXG5cbiAgICBvbkRlbGV0ZUNsb3NlKCkge1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KFwibW9kYWwtY29uZmlybS1kZWxldGVcIik7XG4gICAgICB0aGlzLmVtcGxveWVlX3NlbGVjdGVkID0ge307XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0RlbGV0ZSA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LFxuXG4gICAgb25EZWxldGUoaXRlbSkge1xuICAgICAgdGhpcy5lbXBsb3llZV9zZWxlY3RlZCA9IGl0ZW07XG4gICAgICB0aGlzLmlzRGVsZXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KFwibW9kYWwtY29uZmlybS1kZWxldGVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH0sXG5cbiAgICB0b0RlbGV0ZSgpIHtcbiAgICAgIHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJtb2RhbC1jb25maXJtLWRlbGV0ZVwiKTtcbiAgICAgIHRoaXMuJHN0b3JlXG4gICAgICAgIC5kaXNwYXRjaChcImVtcGxveWVlL29uRGVsZXRlXCIsIHtcbiAgICAgICAgICBpZDogdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5pZCxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgICB0aGlzLmlzT3ZlcmxheSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXG4gICAgICAgICAgICBcImRhbmdlclwiLFxuICAgICAgICAgICAgXCJEZWxldGVcIixcbiAgICAgICAgICAgIGAke3RoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuZnVsbF9uYW1lfSBoYXMgYmVlbiBkZWxldGVkLmBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMub25Mb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRGVsZXRlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkVkaXQoaXRlbSkge1xuICAgICAgdGhpcy5hY3Rpb24gPSBcImVkaXRcIjtcbiAgICAgIHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQgPSBpdGVtO1xuICAgICAgdGhpcy5pc0NyZWF0ZSA9IHRydWU7XG4gICAgICB0aGlzLmlzT3ZlcmxheSA9IHRydWU7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3ZlcmxheSA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRidk1vZGFsLnNob3coXCJjcmVhdGUtZW1wbG95ZWVcIik7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9LFxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcImNyZWF0ZS1lbXBsb3llZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzQ3JlYXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gXCJcIjtcbiAgICAgICAgdGhpcy5lbXBsb3llZV9zZWxlY3RlZCA9IHt9O1xuICAgICAgfSwgMjAwKTtcbiAgICB9LFxuXG4gICAgb25TdWNjZXNzKGVtcGxveWVlLCBhY3Rpb24pIHtcbiAgICAgIHRoaXMuaXNPdmVybGF5ID0gdHJ1ZTtcbiAgICAgIGxldCB2YXJpYW50ID0gXCJzdWNjZXNzXCI7XG4gICAgICBsZXQgdGl0bGUgPSBcIlNhdmVcIjtcbiAgICAgIGxldCBtZXNzYWdlID0gXCJOZXcgRW1wbG95ZWUgU3VjY2VzZnVsbHkgU2F2ZS5cIjtcbiAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIHRpdGxlID0gXCJVcGRhdGVcIjtcbiAgICAgICAgdmFyaWFudCA9IFwid2FybmluZ1wiO1xuICAgICAgICBtZXNzYWdlID0gYCR7ZW1wbG95ZWUuZnVsbF9uYW1lfSBpcyBzdWNjZXNzZnVsbHkgdXBkYXRlZC5gO1xuICAgICAgfVxuICAgICAgdGhpcy5tYWtlVG9hc3QodmFyaWFudCwgdGl0bGUsIG1lc3NhZ2UpO1xuICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICB0aGlzLm9uTG9hZCgpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJjcmVhdGUtZW1wbG95ZWVcIlxuICAgIHNpemU9XCJsZ1wiXG4gICAgbm8tY2xvc2Utb24tYmFja2Ryb3BcbiAgICBAc2hvdz1cIm9uTG9hZFwiXG4gICAgQGNsb3NlPVwib25DbG9zZVwiXG4gICAgaGVhZGVyLWNsYXNzPVwiYmctY3JlYW0gXCJcbiAgICBib2R5LWNsYXNzPVwiYmctY3JlYW1cIlxuICAgIGhpZGUtZm9vdGVyXG4gID5cbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cbiAgICAgIDxoNSBjbGFzcz1cIm1iLTAgaGVhZGVyLWNlLXRpdGxlXCI+XG4gICAgICAgIHt7IGlzRWRpdCA/IFwiRWRpdFwiIDogXCJBZGRcIiB9fSBFbXBsb3llZVxuICAgICAgPC9oNT5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICBwaWxsXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIGNsYXNzPVwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIlxuICAgICAgICB2LWItdG9vbHRpcC5ob3ZlclxuICAgICAgICBAY2xpY2s9XCJvbkNsb3NlKClcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgPC9iLWJ1dHRvbj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0yXCIgdi1pZj1cImlzU2hvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMVwiPlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0bmFtZVwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgRmlyc3QgbmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiZm9ybS5lcnJvcnMuY2xlYXIoJ2ZpcnN0bmFtZScpXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdmaXJzdG5hbWUnKSB9XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgaWQ9XCJoZWxwSWRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ2ZpcnN0bmFtZScpXCJcbiAgICAgICAgICAgICAgICB2LXRleHQ9XCJmb3JtLmVycm9ycy5nZXQoJ2ZpcnN0bmFtZScpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaWRkbGVuYW1lXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBNaWRkbGUgbmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubWlkZGxlbmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIGlkPVwibWlkZGxlbmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0bmFtZVwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgTGFzdCBuYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5sYXN0bmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJiaXJ0aGRhdGVcIiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIEJpcnRoZGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF0ZScpIH1cIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJmb3JtLmVycm9ycy5jbGVhcignYmlydGhkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmJpcnRoZGF0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJiaXJ0aGRhdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgICBpZD1cImhlbHBJZFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtdGV4dD1cImZvcm0uZXJyb3JzLmdldCgnYmlydGhkYXRlJylcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3RcIiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+XG4gICAgICAgICAgICAgIENvbnRhY3QgSW5mb1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uY29udGFjdF9pbmZvXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlclwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5HZW5kZXI8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZ2VuZGVyXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIlsnTWFsZScsICdGZW1hbGUnXVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICAgIDxiLWZvcm0tdGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRleHQgaGVyZS4uLlwiXG4gICAgICAgICAgICAgICAgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgIG1heC1yb3dzPVwiNlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdlbmRlclwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj5TY2hlZHVsZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zY2hlZHVsZVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtaW52YWxpZCc6IGZvcm0uZXJyb3JzLmhhcygncG9zaXRpb25faWQnKSB9XCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiZm9ybS5lcnJvcnMuY2xlYXIoJ3NjaGVkdWxlJylcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNmaXJzdD5cbiAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0LW9wdGlvbiA6dmFsdWU9XCInJ1wiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAtLSBQbGVhc2Ugc2VsZWN0IGEgc2NoZWR1bGUgLS1cbiAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdC1vcHRpb25cbiAgICAgICAgICAgICAgICAgIHYtZm9yPVwic2NoZWQgaW4gc2NoZWR1bGVzXCJcbiAgICAgICAgICAgICAgICAgIDprZXk9XCJzY2hlZC5pZFwiXG4gICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzY2hlZC5pZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgc2NoZWQucmVxdWlyZWRfdGltZV9pbiB8IHRpbWVGb3JtYXQxMiB9fSAtXG4gICAgICAgICAgICAgICAgICB7eyBzY2hlZC5yZXF1aXJlZF90aW1lX291dCB8IHRpbWVGb3JtYXQxMiB9fVxuICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cblxuICAgICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgICBpZD1cImhlbHBJZFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImZvcm0uZXJyb3JzLmhhcygnc2NoZWR1bGUnKVwiXG4gICAgICAgICAgICAgICAgdi10ZXh0PVwiZm9ybS5lcnJvcnMuZ2V0KCdzY2hlZHVsZScpXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBvc2l0aW9uX2lkXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBQb3NpdGlvblxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBvc2l0aW9uX2lkXCJcbiAgICAgICAgICAgICAgICBpZD1cInBvc2l0aW9uX2lkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicG9zaXRpb25faWRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ3Bvc2l0aW9uX2lkJykgfVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cImZvcm0uZXJyb3JzLmNsZWFyKCdwb3NpdGlvbl9pZCcpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjZmlyc3Q+XG4gICAgICAgICAgICAgICAgICA8Yi1mb3JtLXNlbGVjdC1vcHRpb24gOnZhbHVlPVwiJydcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgLS0gUGxlYXNlIHNlbGVjdCBhIHBvc2l0aW9uIC0tXG4gICAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3Qtb3B0aW9uXG4gICAgICAgICAgICAgICAgICB2LWZvcj1cInBvcyBpbiBwb3NpdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgOmtleT1cInBvcy5pZFwiXG4gICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwb3MuaWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IHBvcy50aXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdD5cbiAgICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgaWQ9XCJoZWxwSWRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJmb3JtLmVycm9ycy5oYXMoJ3Bvc2l0aW9uX2lkJylcIlxuICAgICAgICAgICAgICAgIHYtdGV4dD1cImBUaGUgUG9zaXRpb24gZmllbGQgaXMgcmVxdWlyZWRgXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhvdXJseV9yYXRlXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBIb3VybHkgUmF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiLjAwMVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaG91cmx5X3JhdGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBpZD1cImhvdXJseV9yYXRlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiYmlvbWV0cmljX2lkXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBCaW9tZXRyaWMgSWRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5iaW9tZXRyaWNfaWRcIlxuICAgICAgICAgICAgICAgIGlkPVwiYmlvbWV0cmljX2lkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHRyX3Bhc3N3b3JkXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPlxuICAgICAgICAgICAgICBEVFIgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTlcIj5cbiAgICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXA+XG4gICAgICAgICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiaXNEVFJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kIHYtaWY9XCIhaXNEVFJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIEBjbGljaz1cImdlbmVyYXRlUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItaWNvbiBpY29uPVwiYXJyb3ctcmVwZWF0XCI+PC9iLWljb24+XG4gICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIEBjbGljaz1cIm9uQ2FuY2VsRFRSUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGItaWNvbiBpY29uPVwieC1jaXJjbGVcIiB2YXJpYW50PVwiZGFuZ2VyXCI+PC9iLWljb24+XG4gICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cC1hcHBlbmQ+XG4gICAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cblxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImZsb2F0LXJpZ2h0IG10LTJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgdi1pZj1cImlzRFRScGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25TZXREdHJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtc21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNldCBEVFIgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodCBtYi0yXCI+XG4gICAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4tY2UtY2FuY2VsIHNoYWRvdyBiZy1jcmVhbSBtci0yXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTIwcHhcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNsb3NlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ0FOQ0VMXG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJcIlxuICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJidG5Mb2FkaW5nXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAgICdidG4tY2Utc3VibWl0LXcyMDAnOiBpc0VkaXQsXG4gICAgICAgICAgICAgICAgJ2J0bi1jZS1zdWJtaXQtdzEyMCc6ICFpc0VkaXQsXG4gICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1zcGlubmVyXG4gICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICB2LWlmPVwiYnRuTG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFsbCBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZ3Jvd1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt7IGlzRWRpdCA/IFwiU0FWRSBDSEFOR0VTXCIgOiBcIlNBVkVcIiB9fVxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYi1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRm9ybSBmcm9tIFwiQGpzL2hlbHBlcnMvZm9ybVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGVtcGxveWVlX3NlbGVjdGVkOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1Nob3c6IGZhbHNlLFxuICAgICAgcG9zaXRpb25zOiBbXSxcbiAgICAgIHNjaGVkdWxlczogW10sXG4gICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIGlzRWRpdDogZmFsc2UsXG4gICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICAgIG1pZGRsZW5hbWU6IFwiXCIsXG4gICAgICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgICAgICBiaXJ0aGRhdGU6IFwiXCIsXG4gICAgICAgIGNvbnRhY3RfaW5mbzogXCJcIixcbiAgICAgICAgZ2VuZGVyOiBcIk1hbGVcIixcbiAgICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgICAgc2NoZWR1bGU6IFwiXCIsXG4gICAgICAgIHBvc2l0aW9uX2lkOiBcIlwiLFxuICAgICAgICBiaW9tZXRyaWNfaWQ6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICAgICBob3VybHlfcmF0ZTogXCJcIixcbiAgICAgIH0pLFxuICAgICAgaXNEVFJwYXNzd29yZDogdHJ1ZSxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYWN0aW9uID09PSBcImVkaXRcIiAmJlxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQpLmxlbmd0aCA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0SXRlbSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRzdG9yZVxuICAgICAgICAuZGlzcGF0Y2goXCJlbXBsb3llZS9sb2FkSXRlbXNcIiwge30pXG4gICAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3AuZGF0YTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IGRhdGEucG9zaXRpb25zO1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVzID0gZGF0YS5zY2hlZHVsZXM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzU2hvdyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0SXRlbSgpIHtcbiAgICAgIHRoaXMuZm9ybS5pZCA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuaWQ7XG4gICAgICB0aGlzLmZvcm0uZmlyc3RuYW1lID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5maXJzdG5hbWU7XG4gICAgICB0aGlzLmZvcm0ubWlkZGxlbmFtZSA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQubWlkZGxlbmFtZTtcbiAgICAgIHRoaXMuZm9ybS5sYXN0bmFtZSA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQubGFzdG5hbWU7XG4gICAgICB0aGlzLmZvcm0uYmlydGhkYXRlID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5iaXJ0aGRhdGU7XG4gICAgICB0aGlzLmZvcm0uY29udGFjdF9pbmZvID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5jb250YWN0X2luZm87XG4gICAgICB0aGlzLmZvcm0uZ2VuZGVyID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5nZW5kZXI7XG4gICAgICB0aGlzLmZvcm0uYWRkcmVzcyA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuYWRkcmVzcztcbiAgICAgIHRoaXMuZm9ybS5ob3VybHlfcmF0ZSA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuaG91cmx5X3JhdGU7XG4gICAgICB0aGlzLmZvcm0uYmlvbWV0cmljX2lkID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5iaW9tZXRyaWNfaWQ7XG4gICAgICB0aGlzLmZvcm0ucG9zaXRpb25faWQgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLnBvc2l0aW9uX2lkO1xuXG4gICAgICBpZiAodGhpcy5lbXBsb3llZV9zZWxlY3RlZC5wYXNzd29yZCkge1xuICAgICAgICB0aGlzLmlzRFRScGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb3JtLnBhc3N3b3JkID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5wYXNzd29yZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuc2NoZWR1bGUpIHtcbiAgICAgICAgdGhpcy5mb3JtLnNjaGVkdWxlID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5zY2hlZHVsZS5pZDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICB0aGlzLmJ0bkxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5hY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICAgICAgdGhpcy50b1N0b3JlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gXCJlZGl0XCIpIHtcbiAgICAgICAgdGhpcy50b1VwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB0b1N0b3JlKCkge1xuICAgICAgdGhpcy4kc3RvcmVcbiAgICAgICAgLmRpc3BhdGNoKFwiZW1wbG95ZWUvb25TdG9yZVwiLCB7XG4gICAgICAgICAgLi4udGhpcy5mb3JtLmRhdGEoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwib24tc3VjY2Vzc1wiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuZm9ybS5lcnJvcnMucmVjb3JkKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYnRuTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9VcGRhdGUoKSB7XG4gICAgICB0aGlzLiRzdG9yZVxuICAgICAgICAuZGlzcGF0Y2goXCJlbXBsb3llZS9vblVwZGF0ZVwiLCB7XG4gICAgICAgICAgLi4udGhpcy5mb3JtLmRhdGEoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3QpID0+IHtcbiAgICAgICAgICBjb25zdCBlbXBsb3llZSA9IHJlc3QuZGF0YTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwib24tc3VjY2Vzc1wiLCBlbXBsb3llZSwgXCJlZGl0XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgdGhpcy5mb3JtLmVycm9ycy5yZWNvcmQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5idG5Mb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy4kZW1pdChcIm9uLWNsb3NlXCIpO1xuICAgIH0sXG5cbiAgICBvblNldER0clBhc3N3b3JkKCkge1xuICAgICAgdGhpcy5pc0RUUnBhc3N3b3JkID0gZmFsc2U7XG4gICAgICB0aGlzLmdlbmVyYXRlUGFzc3dvcmQoKTtcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGVQYXNzd29yZCgpIHtcbiAgICAgIHZhciBjaGFycyA9XG4gICAgICAgIFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6IUAjJCVeJiooKUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXCI7XG4gICAgICB2YXIgcGFzc3dvcmRMZW5ndGggPSA4O1xuICAgICAgdmFyIHBhc3N3b3JkID0gXCJcIjtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gcGFzc3dvcmRMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKTtcbiAgICAgICAgcGFzc3dvcmQgKz0gY2hhcnMuc3Vic3RyaW5nKHJhbmRvbU51bWJlciwgcmFuZG9tTnVtYmVyICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9ybS5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgIH0sXG5cbiAgICBvbkNhbmNlbERUUlBhc3N3b3JkKCkge1xuICAgICAgdGhpcy5pc0RUUnBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZm9ybS5wYXNzd29yZCA9IFwiXCI7XG4gICAgfSxcblxuICAgIG9uQ2hhbmdlUG9zaXRpb24oKSB7XG4gICAgICBpZiAodGhpcy5mb3JtLmVycm9ycy5oYXMoXCJwb3NpdGlvbl9pZFwiKSkge1xuICAgICAgICB0aGlzLmZvcm0uZXJyb3JzLmNsZWFyKFwicG9zaXRpb25faWRcIik7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmJ0bi1jZS1zdWJtaXQge1xuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYnRuLWNlLXN1Ym1pdC13MTIwIHtcbiAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNlLXN1Ym1pdC13MjAwIHtcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuLWNlLWNhbmNlbCB7XG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xufVxuLmhlYWRlci1jZS10aXRsZSB7XG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4uYnRuLWNyZWF0ZS1lbXBsb3llZSB7XG59XG48L3N0eWxlPlxuXG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJtb2RhbC1jb25maXJtLWRlbGV0ZVwiXG4gICAgaGlkZS1oZWFkZXJcbiAgICBoaWRlLWZvb3RlclxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXG4gICAgbm8tY2xvc2Utb24tZXNjXG4gICAgaGVhZGVyLWNsYXNzPVwiYmctY3JlYW1cIlxuICAgIGJvZHktY2xhc3M9XCJiZy1jcmVhbSBwbC01IHByLTUgbWNkLWJveC1zaGFkb3dcIlxuICAgIGNlbnRlcmVkXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmFja2dyb3VuZC1jcmVhbSB0ZXh0LWNvbG9yLWJyb3duXCJcbiAgICBAc2hvdz1cIm9uU2hvd1wiXG4gID5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgdGV4dC1jZW50ZXIgdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgIENPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCB0ZXh0LWNlbnRlciBtdC0yIG1iLTJcIj5cbiAgICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGVcbiAgICAgICAgICAgIDxzdHJvbmc+IHt7IG5hbWUgfX0gPC9zdHJvbmc+IGZyb21cbiAgICAgICAgICAgIDxzdHJvbmc+IHt7IG1vZHVsZU5hbWUgfX0gPC9zdHJvbmc+IHJlY29yZHM/XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJidG4tY2UtY2FuY2VsIHNoYWRvdyBiZy1jcmVhbSBtci0yXCJcbiAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMHB4XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRvTm9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIE5PXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgICA8Yi1idXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiXG4gICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDBweFwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0b1llc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgWUVTXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNlbGVjdGVkX2l0ZW06IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICB9LFxuICAgIG1vZHVsZU5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNob3coKSB7XG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyh0aGlzLnNlbGVjdGVkX2l0ZW0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5zZWxlY3RlZF9pdGVtLmZ1bGxfbmFtZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRvTm8oKSB7XG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJtb2RhbC1jb25maXJtLWRlbGV0ZVwiKTtcbiAgICAgIHRoaXMuJGVtaXQoXCJtb2RhbC1ub1wiKTtcbiAgICB9LFxuICAgIHRvWWVzKCkge1xuICAgICAgLy8gICB0aGlzLiRidk1vZGFsLmhpZGUoXCJtb2RhbC1jb25maXJtLWRlbGV0ZVwiKTtcbiAgICAgIHRoaXMuJGVtaXQoXCJtb2RhbC15ZXNcIik7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbn1cblxuLm1jZC1ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XG59XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhbmltYXRlZCBmYWRlSW5cIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJtLTAgbWItMiBmb250LXdlaWdodC1ib2xkIHRleHQtaW5mb1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiRW1wbG95ZWVzXCIpLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyIHB5LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ3JlYXRlIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJwbHVzXCIsIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5ld1xcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC04IG1iLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBpbmxpbmU6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItc20tMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBTaG93XFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnNob3dFbnRyaWVzT3B0LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGVyX3BhZ2UgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBlcl9wYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIG1yLXNtLTIgbWItc20tMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBFbnRyaWVzXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWlucHV0LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhcHBlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWlucHV0LWdyb3VwLXRleHRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNlYXJjaFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzZWFyY2hcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoIGhlcmUuLi5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1vdmVybGF5XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNob3c6IF92bS5pc092ZXJsYXksIHJvdW5kZWQ6IFwic21cIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi10YWJsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXBlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pdGVtcy5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uZmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ0YWJsZS1idXN5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTQgbWItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhbGlnbi1taWRkbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImVtcHR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgcC01IHRleHQtbXV0ZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIFtfdm0uX3YoX3ZtLl9zKFwiTm8gZGF0YSBmb3VuZCFcIikpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiY2VsbChlbXBsb3llZV9pZClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGEuaXRlbS5lbXBsb3llZV9pZCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGZ1bGxfbmFtZSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0uZnVsbF9uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwocG9zaXRpb24pXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0ucG9zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInN0cm9uZ1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhkYXRhLml0ZW0ucG9zaXRpb24udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKHNjaGVkdWxlKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtLnNjaGVkdWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidGltZUZvcm1hdDEyXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0uc2NoZWR1bGUucmVxdWlyZWRfdGltZV9pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC1cXG4gICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidGltZUZvcm1hdDEyXCIpKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0uc2NoZWR1bGUucmVxdWlyZWRfdGltZV9vdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJjZWxsKGFjdGlvbnMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21cIiwgdmFyaWFudDogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkVkaXQoZGF0YS5pdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBFZGl0XFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZGF0YS5pdGVtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRlbGV0ZShkYXRhLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLml0ZW0ubG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImItc3Bpbm5lclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU21hbGwgU3Bpbm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJncm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgICBEZWxldGVcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgU2hvd2luZyBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbXMuZnJvbSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiB0byBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbXMudG8pICtcbiAgICAgICAgICAgICAgICAgICAgXCIgb2ZcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXRlbXMudG90YWwpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgZW50cmllc1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLXBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3RhbC1yb3dzXCI6IF92bS5pdGVtcy50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiBfdm0ucGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50X3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnRfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnRfcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNDcmVhdGVcbiAgICAgICAgPyBfYyhcIkNyZWF0ZUVtcGxveWVlTW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZW1wbG95ZWVfc2VsZWN0ZWQ6IF92bS5lbXBsb3llZV9zZWxlY3RlZCxcbiAgICAgICAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IFwib24tY2xvc2VcIjogX3ZtLm9uQ2xvc2UsIFwib24tc3VjY2Vzc1wiOiBfdm0ub25TdWNjZXNzIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaXNEZWxldGVcbiAgICAgICAgPyBfYyhcIk1vZGFsQ29uZmlybURlbGV0ZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzZWxlY3RlZF9pdGVtOiBfdm0uZW1wbG95ZWVfc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwiRW1wbG95ZWVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgXCJtb2RhbC1ub1wiOiBfdm0ub25EZWxldGVDbG9zZSwgXCJtb2RhbC15ZXNcIjogX3ZtLnRvRGVsZXRlIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImItbW9kYWxcIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogXCJjcmVhdGUtZW1wbG95ZWVcIixcbiAgICAgICAgc2l6ZTogXCJsZ1wiLFxuICAgICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICAgIFwiaGVhZGVyLWNsYXNzXCI6IFwiYmctY3JlYW0gXCIsXG4gICAgICAgIFwiYm9keS1jbGFzc1wiOiBcImJnLWNyZWFtXCIsXG4gICAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIH0sXG4gICAgICBvbjogeyBzaG93OiBfdm0ub25Mb2FkLCBjbG9zZTogX3ZtLm9uQ2xvc2UgfSxcbiAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcIm1vZGFsLWhlYWRlclwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMCBoZWFkZXItY2UtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXNFZGl0ID8gXCJFZGl0XCIgOiBcIkFkZFwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIEVtcGxveWVlXFxuICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1iLXRvb2x0aXAuaG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgaG92ZXI6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXRpbWVzXCIgfSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5pc1Nob3dcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZmlyc3RuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBGaXJzdCBuYW1lXFxuICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maXJzdG5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZmlyc3RuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJmaXJzdG5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmZpcnN0bmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5lcnJvcnMuY2xlYXIoXCJmaXJzdG5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImZpcnN0bmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmVycm9ycy5oYXMoXCJmaXJzdG5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaGVscElkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uZXJyb3JzLmdldChcImZpcnN0bmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJtaWRkbGVuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBNaWRkbGUgbmFtZVxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm1pZGRsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm1pZGRsZW5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBpZDogXCJtaWRkbGVuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5taWRkbGVuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWlkZGxlbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibGFzdG5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIExhc3QgbmFtZVxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmxhc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5sYXN0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcImxhc3RuYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5sYXN0bmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImxhc3RuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImJpcnRoZGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgQmlydGhkYXRlXFxuICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uYmlydGhkYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5iaXJ0aGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiYmlydGhkYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZGF0ZVwiLCBpZDogXCJiaXJ0aGRhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5mb3JtLmJpcnRoZGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3JtLmVycm9ycy5jbGVhcihcImJpcnRoZGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiYmlydGhkYXRlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImJpcnRoZGF0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNtYWxsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJoZWxwSWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiYmlydGhkYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImNvbnRhY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIENvbnRhY3QgSW5mb1xcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmNvbnRhY3RfaW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uY29udGFjdF9pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwiY29udGFjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZvcm0uY29udGFjdF9pbmZvIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGFjdF9pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJnZW5kZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdlbmRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS05XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBbXCJNYWxlXCIsIFwiRmVtYWxlXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZ2VuZGVyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5nZW5kZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkcmVzc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS05XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS10ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUZXh0IGhlcmUuLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1yb3dzXCI6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJhZGRyZXNzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5hZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImdlbmRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2NoZWR1bGVcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicG9zaXRpb25faWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5lcnJvcnMuY2xlYXIoXCJzY2hlZHVsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZmlyc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tc2VsZWN0LW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIsIGRpc2FibGVkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgLS0gUGxlYXNlIHNlbGVjdCBhIHNjaGVkdWxlIC0tXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMzNjg2NzU4NzNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2NoZWR1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzY2hlZHVsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNjaGVkdWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zY2hlZHVsZXMsIGZ1bmN0aW9uIChzY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItZm9ybS1zZWxlY3Qtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBzY2hlZC5pZCwgYXR0cnM6IHsgdmFsdWU6IHNjaGVkLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRpbWVGb3JtYXQxMlwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkLnJlcXVpcmVkX3RpbWVfaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZihcInRpbWVGb3JtYXQxMlwiKShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkLnJlcXVpcmVkX3RpbWVfb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLmVycm9ycy5oYXMoXCJzY2hlZHVsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic21hbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJoZWxwSWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic2NoZWR1bGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInBvc2l0aW9uX2lkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBQb3NpdGlvblxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicG9zaXRpb25faWRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwb3NpdGlvbl9pZFwiLCBuYW1lOiBcInBvc2l0aW9uX2lkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5lcnJvcnMuY2xlYXIoXCJwb3NpdGlvbl9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZmlyc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tc2VsZWN0LW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwiXCIsIGRpc2FibGVkOiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgLS0gUGxlYXNlIHNlbGVjdCBhIHBvc2l0aW9uIC0tXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM3Nzc0NzY3NjVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucG9zaXRpb25faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwb3NpdGlvbl9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBvc2l0aW9uX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wb3NpdGlvbnMsIGZ1bmN0aW9uIChwb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tc2VsZWN0LW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogcG9zLmlkLCBhdHRyczogeyB2YWx1ZTogcG9zLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHBvcy50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBvc2l0aW9uX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzbWFsbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImhlbHBJZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBUaGUgUG9zaXRpb24gZmllbGQgaXMgcmVxdWlyZWRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJob3VybHlfcmF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgSG91cmx5IFJhdGVcXG4gICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS05XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5ob3VybHlfcmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaG91cmx5X3JhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IFwiLjAwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJob3VybHlfcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5ob3VybHlfcmF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZvcm0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhvdXJseV9yYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJiaW9tZXRyaWNfaWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIEJpb21ldHJpYyBJZFxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmJpb21ldHJpY19pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uYmlvbWV0cmljX2lkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgaWQ6IFwiYmlvbWV0cmljX2lkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZm9ybS5iaW9tZXRyaWNfaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiaW9tZXRyaWNfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0IG1iLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1jZS1jYW5jZWwgc2hhZG93IGJnLWNyZWFtIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTIwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJlc2V0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLWNlLXN1Ym1pdC13MjAwXCI6IF92bS5pc0VkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tY2Utc3VibWl0LXcxMjBcIjogIV92bS5pc0VkaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBfdm0uYnRuTG9hZGluZyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ0bkxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYi1zcGlubmVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbWFsbCBTcGlubmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJncm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaXNFZGl0ID8gXCJTQVZFIENIQU5HRVNcIiA6IFwiU0FWRVwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcIm1vZGFsLWNvbmZpcm0tZGVsZXRlXCIsXG4gICAgICBcImhpZGUtaGVhZGVyXCI6IFwiXCIsXG4gICAgICBcImhpZGUtZm9vdGVyXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWJhY2tkcm9wXCI6IFwiXCIsXG4gICAgICBcIm5vLWNsb3NlLW9uLWVzY1wiOiBcIlwiLFxuICAgICAgXCJoZWFkZXItY2xhc3NcIjogXCJiZy1jcmVhbVwiLFxuICAgICAgXCJib2R5LWNsYXNzXCI6IFwiYmctY3JlYW0gcGwtNSBwci01IG1jZC1ib3gtc2hhZG93XCIsXG4gICAgICBjZW50ZXJlZDogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmFja2dyb3VuZC1jcmVhbSB0ZXh0LWNvbG9yLWJyb3duXCIsXG4gICAgfSxcbiAgICBvbjogeyBzaG93OiBfdm0ub25TaG93IH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIENPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10ZXh0IHRleHQtY2VudGVyIG10LTIgbWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGVcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubmFtZSkgKyBcIiBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIGZyb21cXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5tb2R1bGVOYW1lKSArIFwiIFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgcmVjb3Jkcz9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zIG1iLTNcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLWNlLWNhbmNlbCBzaGFkb3cgYmctY3JlYW0gbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyZXNldFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvTm8gfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgTk9cXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvWWVzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFlFU1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICB9LFxuICAgIF0pLFxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImNvbnN0IHNob3dFbnRyaWVzT3B0ID0gW1xuICAgIHsgdmFsdWU6IDEwLCB0ZXh0OiBcIjEwXCIgfSxcbiAgICB7IHZhbHVlOiAzMCwgdGV4dDogXCIzMFwiIH0sXG4gICAgeyB2YWx1ZTogNTAsIHRleHQ6IFwiNTBcIiB9LFxuICAgIHsgdmFsdWU6IDEwMCwgdGV4dDogXCIxMDBcIiB9LFxuXVxuXG5cbmV4cG9ydCB7XG4gICAgc2hvd0VudHJpZXNPcHQsXG59IiwiY2xhc3MgRXJyb3JzIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBFcnJvcnMgaW5zdGFuY2UuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhbiBlcnJvcnMgZXhpc3RzIGZvciB0aGUgZ2l2ZW4gZmllbGQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZFxuICAgKi9cbiAgaGFzKGZpZWxkKSB7XG4gICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgd2UgaGF2ZSBhbnkgZXJyb3JzLlxuICAgKi9cbiAgYW55KCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSB0aGUgZXJyb3IgbWVzc2FnZSBmb3IgYSBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqL1xuICBnZXQoZmllbGQpIHtcbiAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmQgdGhlIG5ldyBlcnJvcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICovXG4gIHJlY29yZChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBvbmUgb3IgYWxsIGVycm9yIGZpZWxkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVsbH0gZmllbGRcbiAgICovXG4gIGNsZWFyKGZpZWxkKSB7XG4gICAgaWYgKGZpZWxkKSB7XG4gICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IG9mIGFsbCBlcnJvcnMuXG4gICAqL1xuICBsaXN0KCkge1xuICAgIGxldCBpdGVtcyA9IFtdXG4gICAgbGV0IGVycm9yQXJyYXkgPSBPYmplY3QudmFsdWVzKHRoaXMuZXJyb3JzKSA/PyBbXVxuICAgIGVycm9yQXJyYXkuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICBpdGVtcy5wdXNoKGVycm9yWzBdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcbiIsImltcG9ydCBFcnJvcnMgZnJvbSBcIi4vZXJyb3JzLmpzXCI7XG5cbmNsYXNzIEZvcm0ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAqL1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhO1xuXG4gICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXTtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBhbGwgcmVsZXZhbnQgZGF0YSBmb3IgdGhlIGZvcm0uXG4gICAqL1xuICBkYXRhKCkge1xuICAgIGxldCBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAqL1xuICByZXNldCgpIHtcbiAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgdGhpc1tmaWVsZF0gPSBcIlwiO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBPU1QgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBvc3QodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicG9zdFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQVVQgcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHB1dCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwdXRcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUEFUQ0ggcmVxdWVzdCB0byB0aGUgZ2l2ZW4gVVJMLlxuICAgKiAuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHBhdGNoKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInBhdGNoXCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgZGVsZXRlKHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcImRlbGV0ZVwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1Ym1pdCB0aGUgZm9ybS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLm9uRmFpbChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG5cbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvbi5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgLy8gdGVtcG9yYXJ5XG4gICAgLy8gdGhpcy5yZXNldCgpO1xuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBmYWlsZWQgZm9ybSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAqL1xuICBvbkZhaWwoZXJyb3JzKSB7XG4gICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycyk7XG4gIH1cblxuXG4gIGlzRGF0YUVtcHR5KCkge1xuICAgIGxldCBrZXkgPSBmYWxzZTtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSgpKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZCkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuICBpc0RlZmF1bHREYXRhRW1wdHkoKSB7XG4gICAgbGV0IGtleSA9IGZhbHNlO1xuXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmRhdGEoKSkuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmQpIHtcbiAgICAgIGlmICh2YWwgJiYgdmFsICE9PSAnQWRkJykge1xuICAgICAgICBrZXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICBzdHJpbmdMb3dlckNhc2Uoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgIH0sXG5cbiAgICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyLCBsb3dlciA9IGZhbHNlKSB7XG4gICAgICByZXR1cm4gKGxvd2VyID8gc3RyLnRvTG93ZXJDYXNlKCkgOiBzdHIpLnJlcGxhY2UoLyg/Ol58XFxzfFtcIicoW3tdKStcXFMvZywgbWF0Y2ggPT4gbWF0Y2gudG9VcHBlckNhc2UoKSk7XG4gICAgfSxcblxuICAgIGZvcm1hdEFtb3VudChhbW91bnQpIHtcbiAgICAgIGlmIChhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIGFtb3VudC50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuXG4gICAgZW1wdHlTdHJpbmcoY2hhcmFjID0gJy0nLCBsZW5ndGggPSA0KSB7XG4gICAgICB2YXIgc3RyID0gXCJcIjtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIHN0ciArPSBjaGFyYWNcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfSxcblxuICAgIGluQXJyYXkobmVlZGxlLCBoYXlzdGFjaykge1xuICAgICAgdmFyIGxlbmd0aCA9IGhheXN0YWNrLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhheXN0YWNrW2ldID09IG5lZWRsZSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIHdob2xlTnVtYmVyRm9ybWF0KGFtb3VudCwgZGVjaW1hUGxhY2UpIHtcbiAgICAgIHZhciBhbW91bnROb3cgPSAwXG4gICAgICBpZiAoKGFtb3VudCAtIE1hdGguZmxvb3IoYW1vdW50KSkgIT09IDApIHtcbiAgICAgICAgYW1vdW50Tm93ID0gTWF0aC5yb3VuZChhbW91bnQsIGRlY2ltYVBsYWNlKTtcbiAgICAgICAgaWYgKGFtb3VudE5vdyA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBhbW91bnQucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbW91bnROb3cudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbW91bnROb3cgPSBNYXRoLnJvdW5kKGFtb3VudCwgZGVjaW1hUGxhY2UpO1xuICAgICAgICByZXR1cm4gYW1vdW50Tm93LnRvTG9jYWxlU3RyaW5nKCkucmVwbGFjZSgvXFwuMDAkLywgJycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21tYV9jb25jYXQoa2V5ID0gJ25hbWUnLCBpdGVtcykge1xuICAgICAgbGV0IHNldCA9ICcnO1xuICAgICAgbGV0IGkgPSAxO1xuICAgICAgaXRlbXMuZm9yRWFjaChlbGUgPT4ge1xuICAgICAgICBzZXQgKz0gZWxlW2tleV07XG4gICAgICAgIGlmIChpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0ICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHNldDtcbiAgICB9LFxuXG4gICAgc2hvd2luZ19sYWJlbChmcm9tLCB0bywgdG90YWwpIHtcbiAgICAgIGxldCBmID0gdGhpcy50b19zdHJvbmcoZnJvbSlcbiAgICAgIGxldCB0ID0gdGhpcy50b19zdHJvbmcodG8pXG4gICAgICBsZXQgdG90ID0gdGhpcy50b19zdHJvbmcodG90YWwpXG4gICAgICByZXR1cm4gYFNob3dpbmcgJHtmfSB0byAke3R9IG9mICR7dG90fSByZXN1bHRzYDtcbiAgICB9LFxuXG4gICAgdG9fc3Ryb25nKHN0cikge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7c3RyfTwvc3Ryb25nPmA7XG4gICAgfVxuICB9LFxufTtcblxuIiwiaW1wb3J0IHRleHQgZnJvbSBcIi4vdGV4dC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWl4aW5zOiBbdGV4dF0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBtYWtlVG9hc3QodmFyaWFudCA9IG51bGwsIHRpdGxlLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLiRidlRvYXN0LnRvYXN0KG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgICAgICAgICAgICBzb2xpZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvQ29uZmlybSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgJC5jb25maXJtKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgQ29uZmlybSEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIGRhdGE/JyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGVBbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ2xhc3M6ICdidG4tcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ3llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnY2FuY2VsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVsZXRlQ29uZmlybSh0aXRsZSA9ICdDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRCcsIG1vZHVsZU5hbWUgPSBcIlwiKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYm94VHdvID0gJydcbiAgICAgICAgICAgIHRoaXMuJGJ2TW9kYWwubXNnQm94Q29uZmlybSgnUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgZXZlcnl0aGluZy4nLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgQ29uZmlybScsXG4gICAgICAgICAgICAgICAgYnV0dG9uU2l6ZTogJ3NtJyxcbiAgICAgICAgICAgICAgICBva1ZhcmlhbnQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgIG9rVGl0bGU6ICdZRVMnLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRpdGxlOiAnTk8nLFxuICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzOiAncC0yJyxcbiAgICAgICAgICAgICAgICBoaWRlSGVhZGVyQ2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlcmVkOiB0cnVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3hUd28gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFuIGVycm9yIG9jY3VycmVkXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBTd2FsXG4gICAgICAgICAgICAvLyAgICAgICAgIC5maXJlKHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRleHQ6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGRhdGEgZm9ybSAke21vZHVsZU5hbWV9IHJlY29yZHM/YCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjogXCIjMzA4NWQ2XCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjogXCIjZDMzXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSBpdCFcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzb2x2ZShyZXN1bHQpKVxuICAgICAgICAgICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9XG4gICAgfSxcblxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2Utc3VibWl0LXcxMjAge1xcbiAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tY2Utc3VibWl0LXcyMDAge1xcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNyZWF0ZS1lbXBsb3llZSB7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMmNBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0E7QUFDQTtFQUNBLHVCQUFBO0FBQ0E7QUFDQTtFQUNBLHVCQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBQ0E7QUFDQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDQTtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcImNyZWF0ZS1lbXBsb3llZVxcXCJcXG4gICAgc2l6ZT1cXFwibGdcXFwiXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIEBzaG93PVxcXCJvbkxvYWRcXFwiXFxuICAgIEBjbG9zZT1cXFwib25DbG9zZVxcXCJcXG4gICAgaGVhZGVyLWNsYXNzPVxcXCJiZy1jcmVhbSBcXFwiXFxuICAgIGJvZHktY2xhc3M9XFxcImJnLWNyZWFtXFxcIlxcbiAgICBoaWRlLWZvb3RlclxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cXG4gICAgICA8aDUgY2xhc3M9XFxcIm1iLTAgaGVhZGVyLWNlLXRpdGxlXFxcIj5cXG4gICAgICAgIHt7IGlzRWRpdCA/IFxcXCJFZGl0XFxcIiA6IFxcXCJBZGRcXFwiIH19IEVtcGxveWVlXFxuICAgICAgPC9oNT5cXG4gICAgICA8Yi1idXR0b25cXG4gICAgICAgIHBpbGxcXG4gICAgICAgIHNpemU9XFxcInNtXFxcIlxcbiAgICAgICAgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIlxcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcXG4gICAgICAgIEBjbGljaz1cXFwib25DbG9zZSgpXFxcIlxcbiAgICAgID5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgIDwvYi1idXR0b24+XFxuICAgIDwvdGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0yXFxcIiB2LWlmPVxcXCJpc1Nob3dcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMVxcXCI+XFxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XFxcIm9uU3VibWl0XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImZpcnN0bmFtZVxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgIEZpcnN0IG5hbWVcXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmZpcnN0bmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImZpcnN0bmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgQGtleWRvd249XFxcImZvcm0uZXJyb3JzLmNsZWFyKCdmaXJzdG5hbWUnKVxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdmaXJzdG5hbWUnKSB9XFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIDxzbWFsbFxcbiAgICAgICAgICAgICAgICBpZD1cXFwiaGVscElkXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJmb3JtLmVycm9ycy5oYXMoJ2ZpcnN0bmFtZScpXFxcIlxcbiAgICAgICAgICAgICAgICB2LXRleHQ9XFxcImZvcm0uZXJyb3JzLmdldCgnZmlyc3RuYW1lJylcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcIm1pZGRsZW5hbWVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBNaWRkbGUgbmFtZVxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0ubWlkZGxlbmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcIm1pZGRsZW5hbWVcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImxhc3RuYW1lXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgTGFzdCBuYW1lXFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc20tOVxcXCI+XFxuICAgICAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5sYXN0bmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImxhc3RuYW1lXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaXJ0aGRhdGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBCaXJ0aGRhdGVcXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWludmFsaWQnOiBmb3JtLmVycm9ycy5oYXMoJ2JpcnRoZGF0ZScpIH1cXFwiXFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcImZvcm0uZXJyb3JzLmNsZWFyKCdiaXJ0aGRhdGUnKVxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5iaXJ0aGRhdGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJiaXJ0aGRhdGVcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPHNtYWxsXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJoZWxwSWRcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImZvcm0uZXJyb3JzLmhhcygnYmlydGhkYXRlJylcXFwiXFxuICAgICAgICAgICAgICAgIHYtdGV4dD1cXFwiZm9ybS5lcnJvcnMuZ2V0KCdiaXJ0aGRhdGUnKVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiY29udGFjdFxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgIENvbnRhY3QgSW5mb1xcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uY29udGFjdF9pbmZvXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICBpZD1cXFwiY29udGFjdFxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiZ2VuZGVyXFxcIiBjbGFzcz1cXFwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcXFwiPkdlbmRlcjwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5nZW5kZXJcXFwiXFxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJbJ01hbGUnLCAnRmVtYWxlJ11cXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImFkZHJlc3NcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+QWRkcmVzczwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGItZm9ybS10ZXh0YXJlYVxcbiAgICAgICAgICAgICAgICBpZD1cXFwidGV4dGFyZWFcXFwiXFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0uYWRkcmVzc1xcXCJcXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlRleHQgaGVyZS4uLlxcXCJcXG4gICAgICAgICAgICAgICAgcm93cz1cXFwiM1xcXCJcXG4gICAgICAgICAgICAgICAgbWF4LXJvd3M9XFxcIjZcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCByb3dcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcImdlbmRlclxcXCIgY2xhc3M9XFxcImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXFxcIj5TY2hlZHVsZTwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5zY2hlZHVsZVxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdwb3NpdGlvbl9pZCcpIH1cXFwiXFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcImZvcm0uZXJyb3JzLmNsZWFyKCdzY2hlZHVsZScpXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ZpcnN0PlxcbiAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0LW9wdGlvbiA6dmFsdWU9XFxcIicnXFxcIiBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgICAgICAgIC0tIFBsZWFzZSBzZWxlY3QgYSBzY2hlZHVsZSAtLVxcbiAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0LW9wdGlvblxcbiAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCJzY2hlZCBpbiBzY2hlZHVsZXNcXFwiXFxuICAgICAgICAgICAgICAgICAgOmtleT1cXFwic2NoZWQuaWRcXFwiXFxuICAgICAgICAgICAgICAgICAgOnZhbHVlPVxcXCJzY2hlZC5pZFxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIHt7IHNjaGVkLnJlcXVpcmVkX3RpbWVfaW4gfCB0aW1lRm9ybWF0MTIgfX0gLVxcbiAgICAgICAgICAgICAgICAgIHt7IHNjaGVkLnJlcXVpcmVkX3RpbWVfb3V0IHwgdGltZUZvcm1hdDEyIH19XFxuICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XFxuICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Q+XFxuXFxuICAgICAgICAgICAgICA8c21hbGxcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImhlbHBJZFxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZm9ybS5lcnJvcnMuaGFzKCdzY2hlZHVsZScpXFxcIlxcbiAgICAgICAgICAgICAgICB2LXRleHQ9XFxcImZvcm0uZXJyb3JzLmdldCgnc2NoZWR1bGUnKVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicG9zaXRpb25faWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBQb3NpdGlvblxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGItZm9ybS1zZWxlY3RcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5wb3NpdGlvbl9pZFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcInBvc2l0aW9uX2lkXFxcIlxcbiAgICAgICAgICAgICAgICBuYW1lPVxcXCJwb3NpdGlvbl9pZFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1pbnZhbGlkJzogZm9ybS5lcnJvcnMuaGFzKCdwb3NpdGlvbl9pZCcpIH1cXFwiXFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcImZvcm0uZXJyb3JzLmNsZWFyKCdwb3NpdGlvbl9pZCcpXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ZpcnN0PlxcbiAgICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0LW9wdGlvbiA6dmFsdWU9XFxcIicnXFxcIiBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgICAgICAgIC0tIFBsZWFzZSBzZWxlY3QgYSBwb3NpdGlvbiAtLVxcbiAgICAgICAgICAgICAgICAgIDwvYi1mb3JtLXNlbGVjdC1vcHRpb24+XFxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0LW9wdGlvblxcbiAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCJwb3MgaW4gcG9zaXRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgIDprZXk9XFxcInBvcy5pZFxcXCJcXG4gICAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInBvcy5pZFxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIHt7IHBvcy50aXRsZSB9fVxcbiAgICAgICAgICAgICAgICA8L2ItZm9ybS1zZWxlY3Qtb3B0aW9uPlxcbiAgICAgICAgICAgICAgPC9iLWZvcm0tc2VsZWN0PlxcbiAgICAgICAgICAgICAgPHNtYWxsXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJoZWxwSWRcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImZvcm0uZXJyb3JzLmhhcygncG9zaXRpb25faWQnKVxcXCJcXG4gICAgICAgICAgICAgICAgdi10ZXh0PVxcXCJgVGhlIFBvc2l0aW9uIGZpZWxkIGlzIHJlcXVpcmVkYFxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHJvd1xcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwiaG91cmx5X3JhdGVcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBIb3VybHkgUmF0ZVxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTlcXFwiPlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgc3RlcD1cXFwiLjAwMVxcXCJcXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZm9ybS5ob3VybHlfcmF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImhvdXJseV9yYXRlXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJiaW9tZXRyaWNfaWRcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBCaW9tZXRyaWMgSWRcXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIlxcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmb3JtLmJpb21ldHJpY19pZFxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImJpb21ldHJpY19pZFxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgcm93XFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJkdHJfcGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICBEVFIgUGFzc3dvcmRcXG4gICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS05XFxcIj5cXG4gICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwPlxcbiAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0XFxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJpc0RUUnBhc3N3b3JkXFxcIlxcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0ucGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPGItaW5wdXQtZ3JvdXAtYXBwZW5kIHYtaWY9XFxcIiFpc0RUUnBhc3N3b3JkXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8Yi1idXR0b24gQGNsaWNrPVxcXCJnZW5lcmF0ZVBhc3N3b3JkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWljb24gaWNvbj1cXFwiYXJyb3ctcmVwZWF0XFxcIj48L2ItaWNvbj5cXG4gICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgIDxiLWJ1dHRvbiBAY2xpY2s9XFxcIm9uQ2FuY2VsRFRSUGFzc3dvcmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItaWNvbiBpY29uPVxcXCJ4LWNpcmNsZVxcXCIgdmFyaWFudD1cXFwiZGFuZ2VyXFxcIj48L2ItaWNvbj5cXG4gICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2ItaW5wdXQtZ3JvdXAtYXBwZW5kPlxcbiAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwPlxcblxcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImZsb2F0LXJpZ2h0IG10LTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YVxcbiAgICAgICAgICAgICAgICAgIGhyZWY9XFxcIiNcXFwiXFxuICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNEVFJwYXNzd29yZFxcXCJcXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIm9uU2V0RHRyUGFzc3dvcmRcXFwiXFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZvbnQtc21cXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICBTZXQgRFRSIFBhc3N3b3JkXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbG9hdC1yaWdodCBtYi0yXFxcIj5cXG4gICAgICAgICAgICA8Yi1idXR0b25cXG4gICAgICAgICAgICAgIHR5cGU9XFxcInJlc2V0XFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcImJ0bi1jZS1jYW5jZWwgc2hhZG93IGJnLWNyZWFtIG1yLTJcXFwiXFxuICAgICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6IDEyMHB4XFxcIlxcbiAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvbkNsb3NlXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgICB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcXFwiXFxuICAgICAgICAgICAgICBzdHlsZT1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJidG5Mb2FkaW5nXFxcIlxcbiAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7XFxuICAgICAgICAgICAgICAgICdidG4tY2Utc3VibWl0LXcyMDAnOiBpc0VkaXQsXFxuICAgICAgICAgICAgICAgICdidG4tY2Utc3VibWl0LXcxMjAnOiAhaXNFZGl0LFxcbiAgICAgICAgICAgICAgfVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8Yi1zcGlubmVyXFxuICAgICAgICAgICAgICAgIHNtYWxsXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImJ0bkxvYWRpbmdcXFwiXFxuICAgICAgICAgICAgICAgIGxhYmVsPVxcXCJTbWFsbCBTcGlubmVyXFxcIlxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJncm93XFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIHt7IGlzRWRpdCA/IFxcXCJTQVZFIENIQU5HRVNcXFwiIDogXFxcIlNBVkVcXFwiIH19XFxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9iLW1vZGFsPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgRm9ybSBmcm9tIFxcXCJAanMvaGVscGVycy9mb3JtXFxcIjtcXG5leHBvcnQgZGVmYXVsdCB7XFxuICBwcm9wczoge1xcbiAgICBlbXBsb3llZV9zZWxlY3RlZDoge1xcbiAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgfSxcXG4gICAgYWN0aW9uOiB7XFxuICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICB9LFxcbiAgfSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgaXNTaG93OiBmYWxzZSxcXG4gICAgICBwb3NpdGlvbnM6IFtdLFxcbiAgICAgIHNjaGVkdWxlczogW10sXFxuICAgICAgYnRuTG9hZGluZzogZmFsc2UsXFxuICAgICAgaXNFZGl0OiBmYWxzZSxcXG4gICAgICBmb3JtOiBuZXcgRm9ybSh7XFxuICAgICAgICBpZDogXFxcIlxcXCIsXFxuICAgICAgICBmaXJzdG5hbWU6IFxcXCJcXFwiLFxcbiAgICAgICAgbWlkZGxlbmFtZTogXFxcIlxcXCIsXFxuICAgICAgICBsYXN0bmFtZTogXFxcIlxcXCIsXFxuICAgICAgICBiaXJ0aGRhdGU6IFxcXCJcXFwiLFxcbiAgICAgICAgY29udGFjdF9pbmZvOiBcXFwiXFxcIixcXG4gICAgICAgIGdlbmRlcjogXFxcIk1hbGVcXFwiLFxcbiAgICAgICAgYWRkcmVzczogXFxcIlxcXCIsXFxuICAgICAgICBzY2hlZHVsZTogXFxcIlxcXCIsXFxuICAgICAgICBwb3NpdGlvbl9pZDogXFxcIlxcXCIsXFxuICAgICAgICBiaW9tZXRyaWNfaWQ6IFxcXCJcXFwiLFxcbiAgICAgICAgcGFzc3dvcmQ6IFxcXCJcXFwiLFxcbiAgICAgICAgaG91cmx5X3JhdGU6IFxcXCJcXFwiLFxcbiAgICAgIH0pLFxcbiAgICAgIGlzRFRScGFzc3dvcmQ6IHRydWUsXFxuICAgIH07XFxuICB9LFxcblxcbiAgbWV0aG9kczoge1xcbiAgICBvbkxvYWQoKSB7XFxuICAgICAgaWYgKFxcbiAgICAgICAgdGhpcy5hY3Rpb24gPT09IFxcXCJlZGl0XFxcIiAmJlxcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmVtcGxveWVlX3NlbGVjdGVkKS5sZW5ndGggPiAwXFxuICAgICAgKSB7XFxuICAgICAgICB0aGlzLmlzRWRpdCA9IHRydWU7XFxuICAgICAgICB0aGlzLnNldEl0ZW0oKTtcXG4gICAgICB9XFxuXFxuICAgICAgdGhpcy4kc3RvcmVcXG4gICAgICAgIC5kaXNwYXRjaChcXFwiZW1wbG95ZWUvbG9hZEl0ZW1zXFxcIiwge30pXFxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xcbiAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcC5kYXRhO1xcbiAgICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IGRhdGEucG9zaXRpb25zO1xcbiAgICAgICAgICB0aGlzLnNjaGVkdWxlcyA9IGRhdGEuc2NoZWR1bGVzO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5pc1Nob3cgPSB0cnVlO1xcbiAgICAgICAgfSk7XFxuICAgIH0sXFxuICAgIHNldEl0ZW0oKSB7XFxuICAgICAgdGhpcy5mb3JtLmlkID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5pZDtcXG4gICAgICB0aGlzLmZvcm0uZmlyc3RuYW1lID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5maXJzdG5hbWU7XFxuICAgICAgdGhpcy5mb3JtLm1pZGRsZW5hbWUgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLm1pZGRsZW5hbWU7XFxuICAgICAgdGhpcy5mb3JtLmxhc3RuYW1lID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5sYXN0bmFtZTtcXG4gICAgICB0aGlzLmZvcm0uYmlydGhkYXRlID0gdGhpcy5lbXBsb3llZV9zZWxlY3RlZC5iaXJ0aGRhdGU7XFxuICAgICAgdGhpcy5mb3JtLmNvbnRhY3RfaW5mbyA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuY29udGFjdF9pbmZvO1xcbiAgICAgIHRoaXMuZm9ybS5nZW5kZXIgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLmdlbmRlcjtcXG4gICAgICB0aGlzLmZvcm0uYWRkcmVzcyA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQuYWRkcmVzcztcXG4gICAgICB0aGlzLmZvcm0uaG91cmx5X3JhdGUgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLmhvdXJseV9yYXRlO1xcbiAgICAgIHRoaXMuZm9ybS5iaW9tZXRyaWNfaWQgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLmJpb21ldHJpY19pZDtcXG4gICAgICB0aGlzLmZvcm0ucG9zaXRpb25faWQgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLnBvc2l0aW9uX2lkO1xcblxcbiAgICAgIGlmICh0aGlzLmVtcGxveWVlX3NlbGVjdGVkLnBhc3N3b3JkKSB7XFxuICAgICAgICB0aGlzLmlzRFRScGFzc3dvcmQgPSBmYWxzZTtcXG4gICAgICAgIHRoaXMuZm9ybS5wYXNzd29yZCA9IHRoaXMuZW1wbG95ZWVfc2VsZWN0ZWQucGFzc3dvcmQ7XFxuICAgICAgfVxcblxcbiAgICAgIGlmICh0aGlzLmVtcGxveWVlX3NlbGVjdGVkLnNjaGVkdWxlKSB7XFxuICAgICAgICB0aGlzLmZvcm0uc2NoZWR1bGUgPSB0aGlzLmVtcGxveWVlX3NlbGVjdGVkLnNjaGVkdWxlLmlkO1xcbiAgICAgIH1cXG4gICAgfSxcXG5cXG4gICAgb25TdWJtaXQoKSB7XFxuICAgICAgdGhpcy5idG5Mb2FkaW5nID0gdHJ1ZTtcXG5cXG4gICAgICBpZiAodGhpcy5hY3Rpb24gPT09IFxcXCJhZGRcXFwiKSB7XFxuICAgICAgICB0aGlzLnRvU3RvcmUoKTtcXG4gICAgICB9XFxuXFxuICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSBcXFwiZWRpdFxcXCIpIHtcXG4gICAgICAgIHRoaXMudG9VcGRhdGUoKTtcXG4gICAgICB9XFxuICAgIH0sXFxuXFxuICAgIHRvU3RvcmUoKSB7XFxuICAgICAgdGhpcy4kc3RvcmVcXG4gICAgICAgIC5kaXNwYXRjaChcXFwiZW1wbG95ZWUvb25TdG9yZVxcXCIsIHtcXG4gICAgICAgICAgLi4udGhpcy5mb3JtLmRhdGEoKSxcXG4gICAgICAgIH0pXFxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xcbiAgICAgICAgICB0aGlzLiRlbWl0KFxcXCJvbi1zdWNjZXNzXFxcIik7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICB0aGlzLmZvcm0uZXJyb3JzLnJlY29yZChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XFxuICAgICAgICB9KVxcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xcbiAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgIH0pO1xcbiAgICB9LFxcblxcbiAgICB0b1VwZGF0ZSgpIHtcXG4gICAgICB0aGlzLiRzdG9yZVxcbiAgICAgICAgLmRpc3BhdGNoKFxcXCJlbXBsb3llZS9vblVwZGF0ZVxcXCIsIHtcXG4gICAgICAgICAgLi4udGhpcy5mb3JtLmRhdGEoKSxcXG4gICAgICAgIH0pXFxuICAgICAgICAudGhlbigocmVzdCkgPT4ge1xcbiAgICAgICAgICBjb25zdCBlbXBsb3llZSA9IHJlc3QuZGF0YTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwib24tc3VjY2Vzc1xcXCIsIGVtcGxveWVlLCBcXFwiZWRpdFxcXCIpO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgdGhpcy5mb3JtLmVycm9ycy5yZWNvcmQoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xcbiAgICAgICAgfSlcXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcXG4gICAgICAgICAgdGhpcy5idG5Mb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25DbG9zZSgpIHtcXG4gICAgICB0aGlzLiRlbWl0KFxcXCJvbi1jbG9zZVxcXCIpO1xcbiAgICB9LFxcblxcbiAgICBvblNldER0clBhc3N3b3JkKCkge1xcbiAgICAgIHRoaXMuaXNEVFJwYXNzd29yZCA9IGZhbHNlO1xcbiAgICAgIHRoaXMuZ2VuZXJhdGVQYXNzd29yZCgpO1xcbiAgICB9LFxcblxcbiAgICBnZW5lcmF0ZVBhc3N3b3JkKCkge1xcbiAgICAgIHZhciBjaGFycyA9XFxuICAgICAgICBcXFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6IUAjJCVeJiooKUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaXFxcIjtcXG4gICAgICB2YXIgcGFzc3dvcmRMZW5ndGggPSA4O1xcbiAgICAgIHZhciBwYXNzd29yZCA9IFxcXCJcXFwiO1xcblxcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHBhc3N3b3JkTGVuZ3RoOyBpKyspIHtcXG4gICAgICAgIHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpO1xcbiAgICAgICAgcGFzc3dvcmQgKz0gY2hhcnMuc3Vic3RyaW5nKHJhbmRvbU51bWJlciwgcmFuZG9tTnVtYmVyICsgMSk7XFxuICAgICAgfVxcblxcbiAgICAgIHRoaXMuZm9ybS5wYXNzd29yZCA9IHBhc3N3b3JkO1xcbiAgICB9LFxcblxcbiAgICBvbkNhbmNlbERUUlBhc3N3b3JkKCkge1xcbiAgICAgIHRoaXMuaXNEVFJwYXNzd29yZCA9IHRydWU7XFxuICAgICAgdGhpcy5mb3JtLnBhc3N3b3JkID0gXFxcIlxcXCI7XFxuICAgIH0sXFxuXFxuICAgIG9uQ2hhbmdlUG9zaXRpb24oKSB7XFxuICAgICAgaWYgKHRoaXMuZm9ybS5lcnJvcnMuaGFzKFxcXCJwb3NpdGlvbl9pZFxcXCIpKSB7XFxuICAgICAgICB0aGlzLmZvcm0uZXJyb3JzLmNsZWFyKFxcXCJwb3NpdGlvbl9pZFxcXCIpO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gIH0sXFxufTtcXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmJ0bi1jZS1zdWJtaXQge1xcbiAgY29sb3I6ICNmZmZkZGQgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5idG4tY2Utc3VibWl0LXcxMjAge1xcbiAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tY2Utc3VibWl0LXcyMDAge1xcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tY2UtY2FuY2VsIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG4uaGVhZGVyLWNlLXRpdGxlIHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uYnRuLWNyZWF0ZS1lbXBsb3llZSB7XFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5jYXJkLXRleHQge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG59XFxuLm1jZC1ib3gtc2hhZG93IHtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2RhbC1jb25maXJtLWRlbGV0ZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFGQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EseUJBQUE7QUFDQTtBQUVBO0VBQ0EsNENBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8Yi1tb2RhbFxcbiAgICBpZD1cXFwibW9kYWwtY29uZmlybS1kZWxldGVcXFwiXFxuICAgIGhpZGUtaGVhZGVyXFxuICAgIGhpZGUtZm9vdGVyXFxuICAgIG5vLWNsb3NlLW9uLWJhY2tkcm9wXFxuICAgIG5vLWNsb3NlLW9uLWVzY1xcbiAgICBoZWFkZXItY2xhc3M9XFxcImJnLWNyZWFtXFxcIlxcbiAgICBib2R5LWNsYXNzPVxcXCJiZy1jcmVhbSBwbC01IHByLTUgbWNkLWJveC1zaGFkb3dcXFwiXFxuICAgIGNlbnRlcmVkXFxuICAgIGNvbnRlbnQtY2xhc3M9XFxcImJvcmRlci10b3AgYmFja2dyb3VuZC1jcmVhbSB0ZXh0LWNvbG9yLWJyb3duXFxcIlxcbiAgICBAc2hvdz1cXFwib25TaG93XFxcIlxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTNcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTEyXFxcIj5cXG4gICAgICAgICAgPGgzIGNsYXNzPVxcXCJjYXJkLXRpdGxlIHRleHQtY2VudGVyIHRleHQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICBDT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRFxcbiAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC10ZXh0IHRleHQtY2VudGVyIG10LTIgbWItMlxcXCI+XFxuICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZVxcbiAgICAgICAgICAgIDxzdHJvbmc+IHt7IG5hbWUgfX0gPC9zdHJvbmc+IGZyb21cXG4gICAgICAgICAgICA8c3Ryb25nPiB7eyBtb2R1bGVOYW1lIH19IDwvc3Ryb25nPiByZWNvcmRzP1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMyBtYi0zXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS0xMiB0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvblxcbiAgICAgICAgICAgIHR5cGU9XFxcInJlc2V0XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJidG4tY2UtY2FuY2VsIHNoYWRvdyBiZy1jcmVhbSBtci0yXFxcIlxcbiAgICAgICAgICAgIHN0eWxlPVxcXCJ3aWR0aDogMTAwcHhcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b05vXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgTk9cXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgPGItYnV0dG9uXFxuICAgICAgICAgICAgdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6IDEwMHB4XFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwidG9ZZXNcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICBZRVNcXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3RlbXBsYXRlPlxcbiAgPC9iLW1vZGFsPlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBwcm9wczoge1xcbiAgICBzZWxlY3RlZF9pdGVtOiB7XFxuICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICB9LFxcbiAgICBtb2R1bGVOYW1lOiB7XFxuICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICB9LFxcbiAgfSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgbmFtZTogXFxcIlxcXCIsXFxuICAgIH07XFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICBvblNob3coKSB7XFxuICAgICAgaWYgKE9iamVjdC52YWx1ZXModGhpcy5zZWxlY3RlZF9pdGVtKS5sZW5ndGggPiAwKSB7XFxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlbGVjdGVkX2l0ZW0uZnVsbF9uYW1lO1xcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgdG9ObygpIHtcXG4gICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXFxcIm1vZGFsLWNvbmZpcm0tZGVsZXRlXFxcIik7XFxuICAgICAgdGhpcy4kZW1pdChcXFwibW9kYWwtbm9cXFwiKTtcXG4gICAgfSxcXG4gICAgdG9ZZXMoKSB7XFxuICAgICAgLy8gICB0aGlzLiRidk1vZGFsLmhpZGUoXFxcIm1vZGFsLWNvbmZpcm0tZGVsZXRlXFxcIik7XFxuICAgICAgdGhpcy4kZW1pdChcXFwibW9kYWwteWVzXFxcIik7XFxuICAgIH0sXFxuICB9LFxcbn07XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5jYXJkLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBjb2xvcjogIzc4NWI0YyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2FyZC10ZXh0IHtcXG4gIGNvbG9yOiAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcblxcbi5tY2QtYm94LXNoYWRvdyB7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlLWVtcGxveWVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3N2E0NjRjJmxhbmc9Y3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTAudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kYWwtY29uZmlybS1kZWxldGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTBmM2E1NDMmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZjRiMzU4NlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZjRiMzU4NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZjRiMzU4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZjRiMzU4NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNGIzNTg2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGY0YjM1ODYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9jb21wb25lbnRzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY3JlYXRlLWVtcGxveWVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzdhNDY0Y1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NyZWF0ZS1lbXBsb3llZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY3JlYXRlLWVtcGxveWVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NyZWF0ZS1lbXBsb3llZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNzdhNDY0YyZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI3N2E0NjRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI3N2E0NjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI3N2E0NjRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jcmVhdGUtZW1wbG95ZWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3N2E0NjRjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc3YTQ2NGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL2VtcGxveWVlcy9tb2RhbHMvY3JlYXRlLWVtcGxveWVlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbW9kYWwtY29uZmlybS1kZWxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwZjNhNTQzXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kYWwtY29uZmlybS1kZWxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEwZjNhNTQzJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9icnlhbmplY2llYmFoYWxhL3dvcmtzcGFjZXMvbWVudG9yc3BpcmUvc3ViYXlidXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTBmM2E1NDMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTBmM2E1NDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTBmM2E1NDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vZGFsLWNvbmZpcm0tZGVsZXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMGYzYTU0M1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEwZjNhNTQzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9tb2RhbC1jb25maXJtLWRlbGV0ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGUtZW1wbG95ZWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGUtZW1wbG95ZWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kYWwtY29uZmlybS1kZWxldGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2RhbC1jb25maXJtLWRlbGV0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRmNGIzNTg2XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NyZWF0ZS1lbXBsb3llZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc3YTQ2NGNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9kYWwtY29uZmlybS1kZWxldGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwZjNhNTQzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NyZWF0ZS1lbXBsb3llZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNzdhNDY0YyZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb2RhbC1jb25maXJtLWRlbGV0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMGYzYTU0MyZsYW5nPWNzc1wiIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sIm5hbWVzIjpbInNob3dFbnRyaWVzT3B0IiwidG9hc3QiLCJtYXBHZXR0ZXJzIiwiTW9kYWxDb25maXJtRGVsZXRlIiwiQ3JlYXRlRW1wbG95ZWVNb2RhbCIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwicGVyX3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJpc0xvYWRpbmciLCJmaWx0ZXIiLCJpc092ZXJsYXkiLCJpc0NyZWF0ZSIsInRvdGFsUm93IiwiZW1wbG95ZWVfc2VsZWN0ZWQiLCJhY3Rpb24iLCJpc0RlbGV0ZSIsImZpZWxkcyIsImtleSIsImxhYmVsIiwid2F0Y2giLCJ2YWwiLCJvbkxvYWQiLCJtb3VudGVkIiwiY29tcHV0ZWQiLCJfb2JqZWN0U3ByZWFkIiwiaXRlbXMiLCJtZXRob2RzIiwiX3RoaXMiLCIkc3RvcmUiLCJkaXNwYXRjaCIsInBhZ2UiLCJ0aGVuIiwib25DcmVhdGUiLCJfdGhpczIiLCJzZXRUaW1lb3V0IiwiJGJ2TW9kYWwiLCJzaG93Iiwib25EZWxldGVDbG9zZSIsIl90aGlzMyIsIm9uRGVsZXRlIiwiaXRlbSIsIl90aGlzNCIsIiRuZXh0VGljayIsInRvRGVsZXRlIiwiX3RoaXM1IiwibG9hZGluZyIsImhpZGUiLCJpZCIsInJlc3AiLCJtYWtlVG9hc3QiLCJjb25jYXQiLCJmdWxsX25hbWUiLCJvbkVkaXQiLCJfdGhpczYiLCJvbkNsb3NlIiwiX3RoaXM3Iiwib25TdWNjZXNzIiwiZW1wbG95ZWUiLCJ2YXJpYW50IiwidGl0bGUiLCJtZXNzYWdlIiwiRm9ybSIsInByb3BzIiwidHlwZSIsIk9iamVjdCIsIlN0cmluZyIsImlzU2hvdyIsInBvc2l0aW9ucyIsInNjaGVkdWxlcyIsImJ0bkxvYWRpbmciLCJpc0VkaXQiLCJmb3JtIiwiZmlyc3RuYW1lIiwibWlkZGxlbmFtZSIsImxhc3RuYW1lIiwiYmlydGhkYXRlIiwiY29udGFjdF9pbmZvIiwiZ2VuZGVyIiwiYWRkcmVzcyIsInNjaGVkdWxlIiwicG9zaXRpb25faWQiLCJiaW9tZXRyaWNfaWQiLCJwYXNzd29yZCIsImhvdXJseV9yYXRlIiwiaXNEVFJwYXNzd29yZCIsInZhbHVlcyIsImxlbmd0aCIsInNldEl0ZW0iLCJvblN1Ym1pdCIsInRvU3RvcmUiLCJ0b1VwZGF0ZSIsIiRlbWl0IiwiZXJyb3IiLCJlcnJvcnMiLCJyZWNvcmQiLCJyZXNwb25zZSIsInJlc3QiLCJvblNldER0clBhc3N3b3JkIiwiZ2VuZXJhdGVQYXNzd29yZCIsImNoYXJzIiwicGFzc3dvcmRMZW5ndGgiLCJpIiwicmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3Vic3RyaW5nIiwib25DYW5jZWxEVFJQYXNzd29yZCIsIm9uQ2hhbmdlUG9zaXRpb24iLCJoYXMiLCJjbGVhciIsInNlbGVjdGVkX2l0ZW0iLCJtb2R1bGVOYW1lIiwibmFtZSIsIm9uU2hvdyIsInRvTm8iLCJ0b1llcyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92IiwiYXR0cnMiLCJvbiIsImNsaWNrIiwiaWNvbiIsImlubGluZSIsIm9wdGlvbnMiLCJtb2RlbCIsInZhbHVlIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwicHJveHkiLCJwbGFjZWhvbGRlciIsInJvdW5kZWQiLCJob3ZlciIsInN0cmlwZWQiLCJidXN5IiwiX3MiLCJlbXBsb3llZV9pZCIsInBvc2l0aW9uIiwiX2UiLCJfZiIsInJlcXVpcmVkX3RpbWVfaW4iLCJyZXF1aXJlZF90aW1lX291dCIsInNpemUiLCIkZXZlbnQiLCJkaXNhYmxlZCIsInNtYWxsIiwiZnJvbSIsInRvIiwidG90YWwiLCJhbGlnbiIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJjbG9zZSIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwibW9kaWZpZXJzIiwicGlsbCIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJkb21Qcm9wcyIsImtleWRvd24iLCJpbnB1dCIsInRhcmdldCIsImNvbXBvc2luZyIsIiRzZXQiLCJ0ZXh0Q29udGVudCIsImdldCIsImNoYW5nZSIsInJvd3MiLCJfbCIsInNjaGVkIiwicG9zIiwic3RlcCIsInN0YXRpY1N0eWxlIiwid2lkdGgiLCJjZW50ZXJlZCIsInRleHQiLCJFcnJvcnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiYW55Iiwia2V5cyIsImxpc3QiLCJfT2JqZWN0JHZhbHVlcyIsImVycm9yQXJyYXkiLCJmb3JFYWNoIiwicHVzaCIsIm9yaWdpbmFsRGF0YSIsInByb3BlcnR5IiwicmVzZXQiLCJwb3N0IiwidXJsIiwicHV0IiwicGF0Y2giLCJfZGVsZXRlIiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwib25GYWlsIiwiaXNEYXRhRW1wdHkiLCJpbmQiLCJpc0RlZmF1bHREYXRhRW1wdHkiLCJzdHJpbmdMb3dlckNhc2UiLCJzdHIiLCJ0b1N0cmluZyIsInRvTG93ZXJDYXNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwibG93ZXIiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwibWF0Y2giLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdEFtb3VudCIsImFtb3VudCIsImVtcHR5U3RyaW5nIiwiY2hhcmFjIiwibCIsImluQXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsIndob2xlTnVtYmVyRm9ybWF0IiwiZGVjaW1hUGxhY2UiLCJhbW91bnROb3ciLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwiY29tbWFfY29uY2F0Iiwic2V0IiwiZWxlIiwic2hvd2luZ19sYWJlbCIsImYiLCJ0b19zdHJvbmciLCJ0IiwidG90IiwiJGJ2VG9hc3QiLCJzb2xpZCIsInRvQ29uZmlybSIsIiQiLCJjb25maXJtIiwiY29udGVudCIsInR5cGVBbmltYXRlZCIsImJ1dHRvbnMiLCJ5ZXMiLCJidG5DbGFzcyIsImNhbmNlbCIsImRlbGV0ZUNvbmZpcm0iLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==