"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_backend_views_positions_components_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/data */ "./resources/js/data/index.js");
/* harmony import */ var _modals_positionModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/positionModal.vue */ "./resources/js/backend/views/positions/modals/positionModal.vue");
/* harmony import */ var _modals_positionDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/positionDeleteModal.vue */ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue");
/* harmony import */ var _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../helpers/form.js */ "./resources/js/helpers/form.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PositionModal: _modals_positionModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PositionDeleteModal: _modals_positionDeleteModal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
        key: "title",
        label: "Title"
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
      positionForm: new _helpers_form_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        id: "",
        title: ""
      }),
      modalId: ""
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)("position", ["loadItems"])), {}, {
    createPosition: function createPosition() {
      this.positionForm.reset();
      this.positionForm.id = "";
      this.positionForm.title = "";
      this.modalId = "position-modal";
      this.$bvModal.show(this.modalId);
    },
    editPosition: function editPosition(data) {
      this.positionForm.reset();
      this.positionForm.id = data.id;
      this.positionForm.title = data.title;
      this.modalId = "position-modal";
      this.$bvModal.show(this.modalId);
    },
    deletePosition: function deletePosition(data) {
      this.positionForm.reset();
      this.positionForm.id = data.id;
      this.positionForm.title = data.title;
      this.modalId = "position-delete-modal";
      this.$bvModal.show(this.modalId);
    },
    loadPositions: function loadPositions() {
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
    }, 1000)
  }),
  mounted: function mounted() {
    this.loadPositions();
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)("position", {
    items: "getPositions"
  })),
  watch: {
    current_page: {
      handler: function handler(value) {
        this.loadPositions();
      }
    },
    per_page: {
      handler: function handler(value) {
        this.loadPositions();
      }
    },
    filter: function filter(query) {
      this.performSearch(query);
    },
    searched: {
      handler: function handler(value) {
        this.loadPositions();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  props: ["positionForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.positionForm,
      wageTypes: [{
        text: 'Hourly',
        value: 'hourly'
      }, {
        text: 'Daily',
        value: 'daily'
      }, {
        text: 'Monthly',
        value: 'monthly'
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("position", ["deletePosition"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("position-delete-modal");
    },
    onSubmit: function onSubmit() {
      var _this = this;
      this.isLoading = true;
      var params = {
        id: this.form.id
      };
      this.deletePosition(params).then(function (_) {
        _this.makeToast("danger", "RECORD DELETED", "".concat(_this.form.title, " has been removed from Positions records."));
        _this.$emit("loadPositions");
        _this.$bvModal.hide("position-delete-modal");
      })["catch"](function (error) {
        var errors = error.response.data.errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  props: ["positionForm"],
  data: function data() {
    return {
      isLoading: false,
      form: this.positionForm,
      errors: {},
      wageTypes: [{
        text: 'Hourly',
        value: 'hourly'
      }, {
        text: 'Daily',
        value: 'daily'
      }, {
        text: 'Monthly',
        value: 'monthly'
      }]
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)("position", ["createPosition", "updatePosition"])), {}, {
    modalClose: function modalClose(done) {
      this.$bvModal.hide("position-modal");
      this.errors = {};
    },
    handleCreatePosition: function handleCreatePosition() {
      var _this = this;
      this.isLoading = true;
      var params = {
        title: this.form.title
      };
      this.createPosition(params).then(function (_) {
        _this.makeToast("success", "NEW RECORD CREATED", "".concat(_this.form.title, " has been created as a new Position"));
        _this.$emit("loadPositions");
        _this.modalClose();
      })["catch"](function (error) {
        var errors = error.response.data.errors;
        _this.errors = errors;
      })["finally"](function () {
        _this.isLoading = false;
      });
    },
    handleUpdatePosition: function handleUpdatePosition() {
      var _this2 = this;
      this.isLoading = true;
      var params = {
        id: this.form.id,
        title: this.form.title
      };
      this.updatePosition(params).then(function (_) {
        _this2.makeToast("warning", "RECORD UPDATED", "This information for Position ID: ".concat(_this2.form.id, " has been updated."));
        _this2.$emit("loadPositions");
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
        this.handleUpdatePosition();
      } else {
        this.handleCreatePosition();
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10 ***!
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
  }, [_vm._v("Positions")]), _vm._v(" "), _c("div", {
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
      click: _vm.createPosition
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
              return _vm.editPosition(data.item);
            }
          }
        }, [_vm._v("\n                      EDIT\n                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deletePosition(data.item);
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
  })], 1)])])]), _vm._v(" "), _c("PositionModal", {
    attrs: {
      positionForm: _vm.positionForm
    },
    on: {
      loadPositions: function loadPositions($event) {
        return _vm.loadPositions();
      }
    }
  }), _vm._v(" "), _c("PositionDeleteModal", {
    attrs: {
      positionForm: _vm.positionForm
    },
    on: {
      loadPositions: function loadPositions($event) {
        return _vm.loadPositions();
      }
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "position-delete-modal",
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
        }, [_vm._v("\n        " + _vm._s("Are you sure you want to delete ".concat(_vm.form.title, " from Positions records?")) + "\n      ")])], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c ***!
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
  return _c("b-modal", {
    attrs: {
      id: "position-modal",
      "hide-footer": "",
      "no-close-on-backdrop": "",
      "content-class": "border-top bg-cream"
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn() {
        return [_c("h5", {
          staticClass: "font-weight-bolder header-ce-title"
        }, [_vm._v(_vm._s(_vm.form.id ? "Edit Position" : "New Position"))]), _vm._v(" "), _c("b-button", {
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
            label: "Title",
            "label-for": "input-1"
          }
        }, [_c("b-form-input", {
          attrs: {
            id: "input-1",
            required: ""
          },
          model: {
            value: _vm.form.title,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "title", $$v);
            },
            expression: "form.title"
          }
        }), _vm._v(" "), _vm.errors && _vm.errors.title ? _c("div", {
          staticClass: "text-danger"
        }, [_vm._v(_vm._s(_vm.errors.title[0]))]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-row", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/backend/views/positions/modals/positionModal.vue"],"names":[],"mappings":";AAkJA;EACA,yBAAA;EACA,8BAAA;EACA,mBAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;EACA,8BAAA;EACA,oCAAA;AACA;AACA;EACA,yBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <b-modal\n    id=\"position-modal\"\n    hide-footer\n    no-close-on-backdrop\n    content-class=\"border-top bg-cream\"\n  >\n    <template #modal-header>\n      <!-- Emulate built in modal header close button action -->\n      \n      <h5 class=\"font-weight-bolder header-ce-title\">{{ form.id ? 'Edit Position' : 'New Position'}}</h5>\n      <b-button\n        pill\n        size=\"sm\"\n        v-b-tooltip.hover\n        @click=\"modalClose()\"\n        class=\"bg-brown shadow btn-ce-submit\"\n      >\n        <i class=\"fa fa-times\"></i>\n      </b-button>\n    </template>\n\n    <template #default>\n      <b-form>\n        <b-form-group id=\"input-group-1\" label=\"Title\" label-for=\"input-1\">\n          <b-form-input\n            id=\"input-1\"\n            v-model=\"form.title\"\n            required\n          ></b-form-input>\n          <div v-if=\"errors && errors.title\" class=\"text-danger\">{{ errors.title[0] }}</div>\n        </b-form-group>\n      </b-form>\n      <b-row class=\"mt-3\">\n        <b-col class=\"d-flex justify-content-end\">\n          <b-button pill size=\"sm\" class=\"mr-2 btn-outline-brown\" :style=\"{ 'min-width': '80px' }\" @click=\"modalClose()\">\n            CANCEL\n          </b-button>\n          <b-button pill size=\"sm\" class=\"bg-brown shadow btn-ce-submit\" :style=\"{ 'min-width': '80px' }\" @click=\"onSubmit()\">\n            {{ form.id ? 'SAVE CHANGES' : 'SAVE'}}\n          </b-button>\n        </b-col>\n      </b-row>\n    </template>\n  </b-modal>\n</template>\n<script>\n\nimport { mapActions, mapGetters } from \"vuex\";\n\nimport toast from \"../../../../helpers/toast.js\";\n\nexport default {\n  mixins: [toast],\n\n  props: [\"positionForm\"],\n\n  data: function() {\n    return {\n      isLoading: false,\n      form: this.positionForm,\n      errors: {},\n      wageTypes: [\n        { text: 'Hourly', value: 'hourly' },\n        { text: 'Daily', value: 'daily' },\n        { text: 'Monthly', value: 'monthly' },\n      ],\n    };\n  },\n\n  methods: {\n    ...mapActions(\"position\", [\"createPosition\", \"updatePosition\"]),\n    \n    modalClose(done) {\n\n      this.$bvModal.hide(\"position-modal\");\n      this.errors = {};\n\n    },\n\n    handleCreatePosition() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n\t\t\t\ttitle: this.form.title\n\t\t\t}\n\n      this.createPosition(params)\n        .then((_) => {\n          this.makeToast(\n            \"success\",\n            \"NEW RECORD CREATED\",\n            `${this.form.title} has been created as a new Position`\n          );\n          this.$emit(\"loadPositions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    handleUpdatePosition() {\n      this.isLoading = true;\n      \n\t\t\tlet params = {\n        id: this.form.id,\n\t\t\t\ttitle: this.form.title\n\t\t\t}\n\n      this.updatePosition(params)\n        .then((_) => {\n          this.makeToast(\n            \"warning\",\n            \"RECORD UPDATED\",\n            `This information for Position ID: ${this.form.id} has been updated.`\n          );\n          this.$emit(\"loadPositions\");\n          this.modalClose()\n        })\n        .catch((error) => {\n          let errors = error.response.data.errors;\n          this.errors = errors;\n        })\n        .finally(() => {\n          this.isLoading = false;\n        });\n    },\n\n    onSubmit() {\n      if (this.form.id) {\n        this.handleUpdatePosition();\n      } else {\n        this.handleCreatePosition();\n      }\n    },\n  },\n\n};\n</script>\n\n<style>\n.btn-ce-submit {\n  color: #fffddd !important;\n  border-radius: 20px !important;\n  font-weight: bolder;\n}\n.btn-ce-cancel {\n  color: #785b4c !important;\n  font-weight: bolder;\n  border-radius: 20px !important;\n  border: 1px solid #785b4c !important;\n}\n.header-ce-title {\n  color: #785b4c !important;\n  font-weight: bolder;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_style_index_0_id_6118470c_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_style_index_0_id_6118470c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_style_index_0_id_6118470c_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/backend/views/positions/components/index.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/backend/views/positions/components/index.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=da258d10 */ "./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/positions/components/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionDeleteModal.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionDeleteModal.vue?vue&type=template&id=40adcb4f */ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f");
/* harmony import */ var _positionDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positionDeleteModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _positionDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__.render,
  _positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/positions/modals/positionDeleteModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionModal.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionModal.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionModal.vue?vue&type=template&id=6118470c */ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c");
/* harmony import */ var _positionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positionModal.vue?vue&type=script&lang=js */ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js");
/* harmony import */ var _positionModal_vue_vue_type_style_index_0_id_6118470c_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css */ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _positionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__.render,
  _positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/views/positions/modals/positionModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_positionDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionDeleteModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_positionDeleteModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10":
/*!*************************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10 ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_da258d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=da258d10 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/components/index.vue?vue&type=template&id=da258d10");


/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionDeleteModal_vue_vue_type_template_id_40adcb4f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionDeleteModal.vue?vue&type=template&id=40adcb4f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionDeleteModal.vue?vue&type=template&id=40adcb4f");


/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_template_id_6118470c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionModal.vue?vue&type=template&id=6118470c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=template&id=6118470c");


/***/ }),

/***/ "./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_positionModal_vue_vue_type_style_index_0_id_6118470c_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/backend/views/positions/modals/positionModal.vue?vue&type=style&index=0&id=6118470c&lang=css");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvY2h1bmtzL3Jlc291cmNlc19qc19iYWNrZW5kX3ZpZXdzX3Bvc2l0aW9uc19jb21wb25lbnRzX2luZGV4X3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0VBQ2ZNLFVBQUE7SUFDQUgsYUFBQSxFQUFBQSxpRUFBQTtJQUNBQyxtQkFBQSxFQUFBQSx1RUFBQUE7RUFDQTtFQUNBRyxJQUFBLFdBQUFBLEtBQUE7SUFDQTtNQUNBQyxRQUFBO01BQ0FDLFlBQUE7TUFDQUMsU0FBQTtNQUNBQyxNQUFBO01BQ0FDLFFBQUE7TUFDQVYsY0FBQSxFQUFBQSxvREFBQTtNQUNBVyxTQUFBO01BQ0FDLFFBQUE7TUFDQUMsT0FBQTtRQUNBQyxFQUFBO1FBQ0FDLElBQUE7UUFDQUMsS0FBQTtNQUNBO01BQ0FDLGNBQUE7TUFDQUMsTUFBQSxHQUNBO1FBQ0FDLEdBQUE7UUFDQUMsS0FBQTtRQUNBO01BQ0EsR0FDQTtRQUNBRCxHQUFBO1FBQ0FDLEtBQUE7UUFDQUMsT0FBQTtRQUNBQyxPQUFBO1FBQ0FDLE9BQUE7VUFBQUMsS0FBQTtRQUFBO01BQ0EsRUFDQTtNQUVBQyxZQUFBLE1BQUF0Qix3REFBQTtRQUNBdUIsRUFBQTtRQUNBQyxLQUFBO01BQ0E7TUFFQUMsT0FBQTtJQUNBO0VBQ0E7RUFFQUMsT0FBQSxFQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDQWhDLGdEQUFBO0lBQ0FpQyxjQUFBLFdBQUFBLGVBQUE7TUFDQSxLQUFBTixZQUFBLENBQUFPLEtBQUE7TUFDQSxLQUFBUCxZQUFBLENBQUFDLEVBQUE7TUFDQSxLQUFBRCxZQUFBLENBQUFFLEtBQUE7TUFFQSxLQUFBQyxPQUFBO01BQ0EsS0FBQUssUUFBQSxDQUFBQyxJQUFBLE1BQUFOLE9BQUE7SUFDQTtJQUVBTyxZQUFBLFdBQUFBLGFBQUE5QixJQUFBO01BQ0EsS0FBQW9CLFlBQUEsQ0FBQU8sS0FBQTtNQUNBLEtBQUFQ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Ozs7Ozs7Ozs7O0FDdkNxTSxDQUFDLGlFQUFlLCtMQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FOLENBQUMsaUVBQWUsNk1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDQTFCLENBQUMsaUVBQWUsdU1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUtBaFA7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcG9zaXRpb25zL2NvbXBvbmVudHMvaW5kZXgudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uRGVsZXRlTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9jb21wb25lbnRzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uRGVsZXRlTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9tb2RhbHMvcG9zaXRpb25Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvZXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9oZWxwZXJzL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2hlbHBlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvaGVscGVycy90b2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uTW9kYWwudnVlP2E0NDEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcG9zaXRpb25zL21vZGFscy9wb3NpdGlvbk1vZGFsLnZ1ZT8yYmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9jb21wb25lbnRzL2luZGV4LnZ1ZT82N2ExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9tb2RhbHMvcG9zaXRpb25EZWxldGVNb2RhbC52dWU/NDQ5YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uTW9kYWwudnVlPzgzMjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcG9zaXRpb25zL2NvbXBvbmVudHMvaW5kZXgudnVlPzE1MGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcG9zaXRpb25zL21vZGFscy9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZT8xYmE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9tb2RhbHMvcG9zaXRpb25Nb2RhbC52dWU/OGNjOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvY29tcG9uZW50cy9pbmRleC52dWU/YTNmYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uRGVsZXRlTW9kYWwudnVlPzY3MzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvdmlld3MvcG9zaXRpb25zL21vZGFscy9wb3NpdGlvbk1vZGFsLnZ1ZT82NmEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9tb2RhbHMvcG9zaXRpb25Nb2RhbC52dWU/M2UzYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiPlxuICAgIDxoMSBjbGFzcz1cIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCI+UG9zaXRpb25zPC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIHB5LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICA8Yi1idXR0b24gXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiY3JlYXRlUG9zaXRpb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yi1pY29uIGljb249XCJwbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9iLWljb24+TmV3XG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggbWItM1wiPlxuICAgICAgICAgICAgPGItZm9ybSBpbmxpbmU+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1yLXNtLTJcIiBmb3I9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIj5cbiAgICAgICAgICAgICAgICBTaG93XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxiLWZvcm0tc2VsZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJpbmxpbmUtZm9ybS1jdXN0b20tc2VsZWN0LXByZWZcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwic2hvd0VudHJpZXNPcHRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwZXJfcGFnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBtci1zbS0yIG1iLXNtLTBcIlxuICAgICAgICAgICAgICAgIGZvcj1cImlubGluZS1mb3JtLWN1c3RvbS1zZWxlY3QtcHJlZlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFbnRyaWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ItZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPlxuICAgICAgICAgICAgICAgIDxiLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxiLWZvcm0taW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBoZXJlLi4uXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYi1pbnB1dC1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxiLW92ZXJsYXkgOnNob3c9XCJpc092ZXJsYXlcIiByb3VuZGVkPVwic21cIj5cbiAgICAgICAgICAgICAgPGItdGFibGVcbiAgICAgICAgICAgICAgICBob3ZlclxuICAgICAgICAgICAgICAgIHN0cmlwZWRcbiAgICAgICAgICAgICAgICBzaG93LWVtcHR5XG4gICAgICAgICAgICAgICAgOml0ZW1zPVwiaXRlbXMuZGF0YVwiXG4gICAgICAgICAgICAgICAgOmZpZWxkcz1cImZpZWxkc1wiXG4gICAgICAgICAgICAgICAgOnBlci1wYWdlPVwiMFwiXG4gICAgICAgICAgICAgICAgOmJ1c3k9XCJpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50LXBhZ2U9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICN0YWJsZS1idXN5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGNsYXNzPVwiYWxpZ24tbWlkZGxlXCI+PC9iLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNlbXB0eT5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpPnt7IFwiTm8gZGF0YSBmb3VuZCFcIiB9fTwvaT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Y2VsbChhY3Rpb25zKT1cImRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxiLXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGItY29sIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1idXR0b24gc2l6ZT1cInNtXCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0UG9zaXRpb24oZGF0YS5pdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRURJVFxuICAgICAgICAgICAgICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBAY2xpY2s9XCJkZWxldGVQb3NpdGlvbihkYXRhLml0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBERUxFVEVcbiAgICAgICAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8dGVtcGxhdGUgdi1zbG90OnRhYmxlLWJ1c3k+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yi1zcGlubmVyIGxhYmVsPVwiU21hbGwgTG9hZGluZy4uLlwiPjwvYi1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+IC0tPlxuICAgICAgICAgICAgICA8L2ItdGFibGU+XG4gICAgICAgICAgICA8L2Itb3ZlcmxheT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgPHA+e3tgU2hvd2luZyAke3Nob3dpbmcuZnJvbX0gdG8gJHtzaG93aW5nLnRvfSBvZiAke3Nob3dpbmcudG90YWx9IGVudHJpZXNgfX08L3A+XG4gICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwibXQtMSBtYi0wXCIgdi1odG1sPVwic2hvd2luZ1RpdGxlXCIgLz4gLS0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICA8Yi1wYWdpbmF0aW9uXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItMFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJjdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICA6dG90YWwtcm93cz1cInRhYmxlVG90YWxSb3dzXCJcbiAgICAgICAgICAgICAgOnBlci1wYWdlPVwicGVyX3BhZ2VcIlxuICAgICAgICAgICAgICBhbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPFBvc2l0aW9uTW9kYWwgOnBvc2l0aW9uRm9ybT1cInBvc2l0aW9uRm9ybVwiIEBsb2FkUG9zaXRpb25zPVwibG9hZFBvc2l0aW9ucygpXCI+PC9Qb3NpdGlvbk1vZGFsPlxuICAgIDxQb3NpdGlvbkRlbGV0ZU1vZGFsIDpwb3NpdGlvbkZvcm09XCJwb3NpdGlvbkZvcm1cIiBAbG9hZFBvc2l0aW9ucz1cImxvYWRQb3NpdGlvbnMoKVwiPjwvUG9zaXRpb25EZWxldGVNb2RhbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5pbXBvcnQgeyBzaG93RW50cmllc09wdCB9IGZyb20gXCJAanMvZGF0YVwiO1xuaW1wb3J0IFBvc2l0aW9uTW9kYWwgZnJvbSBcIi4uL21vZGFscy9wb3NpdGlvbk1vZGFsLnZ1ZVwiO1xuaW1wb3J0IFBvc2l0aW9uRGVsZXRlTW9kYWwgZnJvbSBcIi4uL21vZGFscy9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZVwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvZm9ybS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgUG9zaXRpb25Nb2RhbCxcbiAgICBQb3NpdGlvbkRlbGV0ZU1vZGFsXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgIGN1cnJlbnRfcGFnZTogMSxcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIGZpbHRlcjogXCJcIixcbiAgICAgIHNlYXJjaGVkOiBcIlwiLFxuICAgICAgc2hvd0VudHJpZXNPcHQsXG4gICAgICBpc092ZXJsYXk6IGZhbHNlLFxuICAgICAgdG90YWxSb3c6IDAsXG4gICAgICBzaG93aW5nOiB7XG4gICAgICAgIHRvOiAwLFxuICAgICAgICBmcm9tOiAwLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB0YWJsZVRvdGFsUm93czogXCJcIixcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAga2V5OiBcInRpdGxlXCIsXG4gICAgICAgICAgbGFiZWw6IFwiVGl0bGVcIixcbiAgICAgICAgICAvLyB0aFN0eWxlOiB7IHdpZHRoOiBcIjIwJVwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgIGxhYmVsOiBcIkFjdGlvbnNcIixcbiAgICAgICAgICB0aENsYXNzOiBcInRleHQtY2VudGVyXCIsXG4gICAgICAgICAgdGRDbGFzczogXCJ0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgIHRoU3R5bGU6IHsgd2lkdGg6IFwiMTAlXCIgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG5cbiAgICAgIHBvc2l0aW9uRm9ybTogbmV3IEZvcm0oe1xuICAgICAgICBpZDogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiXCJcbiAgICAgIH0pLFxuXG4gICAgICBtb2RhbElkOiBcIlwiLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJwb3NpdGlvblwiLCBbXCJsb2FkSXRlbXNcIl0pLFxuICAgIGNyZWF0ZVBvc2l0aW9uKCkge1xuICAgICAgdGhpcy5wb3NpdGlvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMucG9zaXRpb25Gb3JtLmlkID0gXCJcIjtcbiAgICAgIHRoaXMucG9zaXRpb25Gb3JtLnRpdGxlID0gXCJcIjtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJwb3NpdGlvbi1tb2RhbFwiO1xuICAgICAgdGhpcy4kYnZNb2RhbC5zaG93KHRoaXMubW9kYWxJZCk7XG4gICAgfSxcblxuICAgIGVkaXRQb3NpdGlvbihkYXRhKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uRm9ybS5yZXNldCgpO1xuICAgICAgdGhpcy5wb3NpdGlvbkZvcm0uaWQgPSBkYXRhLmlkO1xuICAgICAgdGhpcy5wb3NpdGlvbkZvcm0udGl0bGUgPSBkYXRhLnRpdGxlO1xuXG4gICAgICB0aGlzLm1vZGFsSWQgPSBcInBvc2l0aW9uLW1vZGFsXCI7XG4gICAgICB0aGlzLiRidk1vZGFsLnNob3codGhpcy5tb2RhbElkKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlUG9zaXRpb24oZGF0YSkge1xuICAgICAgdGhpcy5wb3NpdGlvbkZvcm0ucmVzZXQoKTtcbiAgICAgIHRoaXMucG9zaXRpb25Gb3JtLmlkID0gZGF0YS5pZDtcbiAgICAgIHRoaXMucG9zaXRpb25Gb3JtLnRpdGxlID0gZGF0YS50aXRsZTtcblxuICAgICAgdGhpcy5tb2RhbElkID0gXCJwb3NpdGlvbi1kZWxldGUtbW9kYWxcIjtcbiAgICAgIHRoaXMuJGJ2TW9kYWwuc2hvdyh0aGlzLm1vZGFsSWQpO1xuICAgIH0sXG5cbiAgICBsb2FkUG9zaXRpb25zKCkge1xuICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgcGVyX3BhZ2U6IHRoaXMucGVyX3BhZ2UsXG4gICAgICAgIHBhZ2U6IHRoaXMuY3VycmVudF9wYWdlLFxuICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoZWQsXG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRJdGVtcyhwYXJhbXMpXG4gICAgICAgIC50aGVuKChfKSA9PiB7XG4gICAgICAgICAgdGhpcy50YWJsZVRvdGFsUm93cyA9IHRoaXMuaXRlbXMudG90YWxcbiAgICAgICAgICB0aGlzLnNob3dpbmcudG8gPSB0aGlzLml0ZW1zLnRvO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy5mcm9tID0gdGhpcy5pdGVtcy5mcm9tO1xuICAgICAgICAgIHRoaXMuc2hvd2luZy50b3RhbCA9IHRoaXMuaXRlbXMudG90YWw7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGVyZm9ybVNlYXJjaDogXy5kZWJvdW5jZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgdGhpcy5zZWFyY2hlZCA9IHF1ZXJ5XG4gICAgfSwgMTAwMClcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRQb3NpdGlvbnMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoXCJwb3NpdGlvblwiLCB7XG4gICAgICBpdGVtczogXCJnZXRQb3NpdGlvbnNcIixcbiAgICB9KSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGN1cnJlbnRfcGFnZToge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgdGhpcy5sb2FkUG9zaXRpb25zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHBlcl9wYWdlOiB7XG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB0aGlzLmxvYWRQb3NpdGlvbnMoKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaWx0ZXIocXVlcnkpIHtcbiAgICAgIHRoaXMucGVyZm9ybVNlYXJjaChxdWVyeSlcbiAgICB9LFxuXG4gICAgc2VhcmNoZWQ6IHtcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubG9hZFBvc2l0aW9ucygpXG4gICAgICB9XG4gICAgfSxcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG4gIDxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJwb3NpdGlvbi1kZWxldGUtbW9kYWxcIlxuICAgIGhpZGUtaGVhZGVyXG4gICAgaGlkZS1mb290ZXJcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxuICAgIGNlbnRlcmVkXG4gICAgY29udGVudC1jbGFzcz1cImJvcmRlci10b3AgYmctY3JlYW1cIlxuICA+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgPGItcm93PlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoND5DT05GSVJNQVRJT04gQkVGT1JFIERFTEVUSU5HIFJFQ09SRDwvaDQ+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtM1wiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIHt7IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICR7Zm9ybS50aXRsZX0gZnJvbSBQb3NpdGlvbnMgcmVjb3Jkcz9gIH19XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgICAgPGItcm93IGNsYXNzPVwibXQtNFwiPlxuICAgICAgICA8Yi1jb2wgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XCJzbVwiIGNsYXNzPVwibXItMiBidG4tb3V0bGluZS1icm93blwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCI+XG4gICAgICAgICAgICBOT1xuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgWUVTXG4gICAgICAgICAgPC9iLWJ1dHRvbj5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1yb3c+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9iLW1vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFwidnVleFwiO1xuXG5pbXBvcnQgdG9hc3QgZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBlcnMvdG9hc3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFt0b2FzdF0sXG5cbiAgcHJvcHM6IFtcInBvc2l0aW9uRm9ybVwiXSxcblxuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgIGZvcm06IHRoaXMucG9zaXRpb25Gb3JtLFxuXG4gICAgICB3YWdlVHlwZXM6IFtcbiAgICAgICAgeyB0ZXh0OiAnSG91cmx5JywgdmFsdWU6ICdob3VybHknIH0sXG4gICAgICAgIHsgdGV4dDogJ0RhaWx5JywgdmFsdWU6ICdkYWlseScgfSxcbiAgICAgICAgeyB0ZXh0OiAnTW9udGhseScsIHZhbHVlOiAnbW9udGhseScgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhcInBvc2l0aW9uXCIsIFtcImRlbGV0ZVBvc2l0aW9uXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicG9zaXRpb24tZGVsZXRlLW1vZGFsXCIpO1xuICAgICAgXG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxuXHRcdFx0fVxuXG4gICAgICB0aGlzLmRlbGV0ZVBvc2l0aW9uKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBcIlJFQ09SRCBERUxFVEVEXCIsXG4gICAgICAgICAgICBgJHt0aGlzLmZvcm0udGl0bGV9IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBQb3NpdGlvbnMgcmVjb3Jkcy5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZFBvc2l0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLiRidk1vZGFsLmhpZGUoXCJwb3NpdGlvbi1kZWxldGUtbW9kYWxcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBsZXQgZXJyb3JzID0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxiLW1vZGFsXG4gICAgaWQ9XCJwb3NpdGlvbi1tb2RhbFwiXG4gICAgaGlkZS1mb290ZXJcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxuICAgIGNvbnRlbnQtY2xhc3M9XCJib3JkZXItdG9wIGJnLWNyZWFtXCJcbiAgPlxuICAgIDx0ZW1wbGF0ZSAjbW9kYWwtaGVhZGVyPlxuICAgICAgPCEtLSBFbXVsYXRlIGJ1aWx0IGluIG1vZGFsIGhlYWRlciBjbG9zZSBidXR0b24gYWN0aW9uIC0tPlxuICAgICAgXG4gICAgICA8aDUgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCI+e3sgZm9ybS5pZCA/ICdFZGl0IFBvc2l0aW9uJyA6ICdOZXcgUG9zaXRpb24nfX08L2g1PlxuICAgICAgPGItYnV0dG9uXG4gICAgICAgIHBpbGxcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgdi1iLXRvb2x0aXAuaG92ZXJcbiAgICAgICAgQGNsaWNrPVwibW9kYWxDbG9zZSgpXCJcbiAgICAgICAgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+XG4gICAgICA8L2ItYnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICA8Yi1mb3JtPlxuICAgICAgICA8Yi1mb3JtLWdyb3VwIGlkPVwiaW5wdXQtZ3JvdXAtMVwiIGxhYmVsPVwiVGl0bGVcIiBsYWJlbC1mb3I9XCJpbnB1dC0xXCI+XG4gICAgICAgICAgPGItZm9ybS1pbnB1dFxuICAgICAgICAgICAgaWQ9XCJpbnB1dC0xXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRpdGxlXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxuICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycyAmJiBlcnJvcnMudGl0bGVcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+e3sgZXJyb3JzLnRpdGxlWzBdIH19PC9kaXY+XG4gICAgICAgIDwvYi1mb3JtLWdyb3VwPlxuICAgICAgPC9iLWZvcm0+XG4gICAgICA8Yi1yb3cgY2xhc3M9XCJtdC0zXCI+XG4gICAgICAgIDxiLWNvbCBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIgOnN0eWxlPVwieyAnbWluLXdpZHRoJzogJzgwcHgnIH1cIiBAY2xpY2s9XCJtb2RhbENsb3NlKClcIj5cbiAgICAgICAgICAgIENBTkNFTFxuICAgICAgICAgIDwvYi1idXR0b24+XG4gICAgICAgICAgPGItYnV0dG9uIHBpbGwgc2l6ZT1cInNtXCIgY2xhc3M9XCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFwiIDpzdHlsZT1cInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XCIgQGNsaWNrPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAge3sgZm9ybS5pZCA/ICdTQVZFIENIQU5HRVMnIDogJ1NBVkUnfX1cbiAgICAgICAgICA8L2ItYnV0dG9uPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2ItbW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gXCJ2dWV4XCI7XG5cbmltcG9ydCB0b2FzdCBmcm9tIFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW3RvYXN0XSxcblxuICBwcm9wczogW1wicG9zaXRpb25Gb3JtXCJdLFxuXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgZm9ybTogdGhpcy5wb3NpdGlvbkZvcm0sXG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgd2FnZVR5cGVzOiBbXG4gICAgICAgIHsgdGV4dDogJ0hvdXJseScsIHZhbHVlOiAnaG91cmx5JyB9LFxuICAgICAgICB7IHRleHQ6ICdEYWlseScsIHZhbHVlOiAnZGFpbHknIH0sXG4gICAgICAgIHsgdGV4dDogJ01vbnRobHknLCB2YWx1ZTogJ21vbnRobHknIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoXCJwb3NpdGlvblwiLCBbXCJjcmVhdGVQb3NpdGlvblwiLCBcInVwZGF0ZVBvc2l0aW9uXCJdKSxcbiAgICBcbiAgICBtb2RhbENsb3NlKGRvbmUpIHtcblxuICAgICAgdGhpcy4kYnZNb2RhbC5oaWRlKFwicG9zaXRpb24tbW9kYWxcIik7XG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xuXG4gICAgfSxcblxuICAgIGhhbmRsZUNyZWF0ZVBvc2l0aW9uKCkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgXG5cdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHR0aXRsZTogdGhpcy5mb3JtLnRpdGxlXG5cdFx0XHR9XG5cbiAgICAgIHRoaXMuY3JlYXRlUG9zaXRpb24ocGFyYW1zKVxuICAgICAgICAudGhlbigoXykgPT4ge1xuICAgICAgICAgIHRoaXMubWFrZVRvYXN0KFxuICAgICAgICAgICAgXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICBcIk5FVyBSRUNPUkQgQ1JFQVRFRFwiLFxuICAgICAgICAgICAgYCR7dGhpcy5mb3JtLnRpdGxlfSBoYXMgYmVlbiBjcmVhdGVkIGFzIGEgbmV3IFBvc2l0aW9uYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy4kZW1pdChcImxvYWRQb3NpdGlvbnNcIik7XG4gICAgICAgICAgdGhpcy5tb2RhbENsb3NlKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGxldCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycztcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBoYW5kbGVVcGRhdGVQb3NpdGlvbigpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuXHRcdFx0bGV0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuZm9ybS5pZCxcblx0XHRcdFx0dGl0bGU6IHRoaXMuZm9ybS50aXRsZVxuXHRcdFx0fVxuXG4gICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHBhcmFtcylcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcbiAgICAgICAgICAgIFwid2FybmluZ1wiLFxuICAgICAgICAgICAgXCJSRUNPUkQgVVBEQVRFRFwiLFxuICAgICAgICAgICAgYFRoaXMgaW5mb3JtYXRpb24gZm9yIFBvc2l0aW9uIElEOiAke3RoaXMuZm9ybS5pZH0gaGFzIGJlZW4gdXBkYXRlZC5gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLiRlbWl0KFwibG9hZFBvc2l0aW9uc1wiKTtcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xuICAgICAgICB0aGlzLmhhbmRsZVVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYnRuLWNlLXN1Ym1pdCB7XG4gIGNvbG9yOiAjZmZmZGRkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5idG4tY2UtY2FuY2VsIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWNlLXRpdGxlIHtcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMCBtYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1pbmZvXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJQb3NpdGlvbnNcIiksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgcHktM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhcmlhbnQ6IFwicHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlUG9zaXRpb24gfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInBsdXNcIiwgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmV3XFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTggbWItM1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGlubGluZTogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci1zbS0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFNob3dcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBtci1zbS0yIG1iLXNtLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc2hvd0VudHJpZXNPcHQsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wZXJfcGFnZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGVyX3BhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lLWZvcm0tY3VzdG9tLXNlbGVjdC1wcmVmXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIEVudHJpZXNcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImItaW5wdXQtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFwcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItaW5wdXQtZ3JvdXAtdGV4dFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2ggaGVyZS4uLlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbHRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW92ZXJsYXlcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2hvdzogX3ZtLmlzT3ZlcmxheSwgcm91bmRlZDogXCJzbVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpcGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaG93LWVtcHR5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLml0ZW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXN5OiBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50LXBhZ2VcIjogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidGFibGUtYnVzeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC00IG1iLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLXNwaW5uZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWxpZ24tbWlkZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJlbXB0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHAtNSB0ZXh0LW11dGVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCBbX3ZtLl92KF92bS5fcyhcIk5vIGRhdGEgZm91bmQhXCIpKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImNlbGwoYWN0aW9ucylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwic21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudDogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXRQb3NpdGlvbihkYXRhLml0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBFRElUXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVBvc2l0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgREVMRVRFXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBgU2hvd2luZyAke192bS5zaG93aW5nLmZyb219IHRvICR7X3ZtLnNob3dpbmcudG99IG9mICR7X3ZtLnNob3dpbmcudG90YWx9IGVudHJpZXNgXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImItcGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0wXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcInRvdGFsLXJvd3NcIjogX3ZtLnRhYmxlVG90YWxSb3dzLFxuICAgICAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IF92bS5wZXJfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudF9wYWdlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudF9wYWdlXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUG9zaXRpb25Nb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uRm9ybTogX3ZtLnBvc2l0aW9uRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRQb3NpdGlvbnM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBvc2l0aW9ucygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUG9zaXRpb25EZWxldGVNb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uRm9ybTogX3ZtLnBvc2l0aW9uRm9ybSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGxvYWRQb3NpdGlvbnM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0ubG9hZFBvc2l0aW9ucygpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFwiYi1tb2RhbFwiLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIGlkOiBcInBvc2l0aW9uLWRlbGV0ZS1tb2RhbFwiLFxuICAgICAgXCJoaWRlLWhlYWRlclwiOiBcIlwiLFxuICAgICAgXCJoaWRlLWZvb3RlclwiOiBcIlwiLFxuICAgICAgXCJuby1jbG9zZS1vbi1iYWNrZHJvcFwiOiBcIlwiLFxuICAgICAgY2VudGVyZWQ6IFwiXCIsXG4gICAgICBcImNvbnRlbnQtY2xhc3NcIjogXCJib3JkZXItdG9wIGJnLWNyZWFtXCIsXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEXCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke192bS5mb3JtLnRpdGxlfSBmcm9tIFBvc2l0aW9ucyByZWNvcmRzP2BcbiAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBOT1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctYnJvd24gc2hhZG93IGJ0bi1jZS1zdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiODBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwaWxsOiBcIlwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBZRVNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICBdKSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXCJiLW1vZGFsXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgaWQ6IFwicG9zaXRpb24tbW9kYWxcIixcbiAgICAgIFwiaGlkZS1mb290ZXJcIjogXCJcIixcbiAgICAgIFwibm8tY2xvc2Utb24tYmFja2Ryb3BcIjogXCJcIixcbiAgICAgIFwiY29udGVudC1jbGFzc1wiOiBcImJvcmRlci10b3AgYmctY3JlYW1cIixcbiAgICB9LFxuICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAge1xuICAgICAgICBrZXk6IFwibW9kYWwtaGVhZGVyXCIsXG4gICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5mb3JtLmlkID8gXCJFZGl0IFBvc2l0aW9uXCIgOiBcIk5ldyBQb3NpdGlvblwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImItdG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtYi10b29sdGlwLmhvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBob3ZlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1mb3JtLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiaW5wdXQtZ3JvdXAtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1mb3JcIjogXCJpbnB1dC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImItZm9ybS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiaW5wdXQtMVwiLCByZXF1aXJlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0aXRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMgJiYgX3ZtLmVycm9ycy50aXRsZVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnRpdGxlWzBdKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0bi1vdXRsaW5lLWJyb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWxDbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBDQU5DRUxcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjgwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGlsbDogXCJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25TdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZm9ybS5pZCA/IFwiU0FWRSBDSEFOR0VTXCIgOiBcIlNBVkVcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSksXG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiY29uc3Qgc2hvd0VudHJpZXNPcHQgPSBbXG4gICAgeyB2YWx1ZTogMTAsIHRleHQ6IFwiMTBcIiB9LFxuICAgIHsgdmFsdWU6IDMwLCB0ZXh0OiBcIjMwXCIgfSxcbiAgICB7IHZhbHVlOiA1MCwgdGV4dDogXCI1MFwiIH0sXG4gICAgeyB2YWx1ZTogMTAwLCB0ZXh0OiBcIjEwMFwiIH0sXG5dXG5cblxuZXhwb3J0IHtcbiAgICBzaG93RW50cmllc09wdCxcbn0iLCJjbGFzcyBFcnJvcnMge1xuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IEVycm9ycyBpbnN0YW5jZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXJyb3JzID0ge307XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGVycm9ycyBleGlzdHMgZm9yIHRoZSBnaXZlbiBmaWVsZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkXG4gICAqL1xuICBoYXMoZmllbGQpIHtcbiAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB3ZSBoYXZlIGFueSBlcnJvcnMuXG4gICAqL1xuICBhbnkoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlIHRoZSBlcnJvciBtZXNzYWdlIGZvciBhIGZpZWxkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmllbGRcbiAgICovXG4gIGdldChmaWVsZCkge1xuICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlY29yZCB0aGUgbmV3IGVycm9ycy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgKi9cbiAgcmVjb3JkKGVycm9ycykge1xuICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIG9uZSBvciBhbGwgZXJyb3IgZmllbGRzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBmaWVsZFxuICAgKi9cbiAgY2xlYXIoZmllbGQpIHtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9ycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYWxsIGVycm9ycy5cbiAgICovXG4gIGxpc3QoKSB7XG4gICAgbGV0IGl0ZW1zID0gW11cbiAgICBsZXQgZXJyb3JBcnJheSA9IE9iamVjdC52YWx1ZXModGhpcy5lcnJvcnMpID8/IFtdXG4gICAgZXJyb3JBcnJheS5mb3JFYWNoKGVycm9yID0+IHtcbiAgICAgIGl0ZW1zLnB1c2goZXJyb3JbMF0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuIiwiaW1wb3J0IEVycm9ycyBmcm9tIFwiLi9lcnJvcnMuanNcIjtcblxuY2xhc3MgRm9ybSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGE7XG5cbiAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9ycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIGFsbCByZWxldmFudCBkYXRhIGZvciB0aGUgZm9ybS5cbiAgICovXG4gIGRhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcblxuICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICovXG4gIHJlc2V0KCkge1xuICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICB0aGlzW2ZpZWxkXSA9IFwiXCI7XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvcnMuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcG9zdCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXQoXCJwb3N0XCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBhIFBVVCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcHV0KHVybCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdChcInB1dFwiLCB1cmwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBQQVRDSCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBVUkwuXG4gICAqIC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgcGF0Y2godXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwicGF0Y2hcIiwgdXJsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIGdpdmVuIFVSTC5cbiAgICogLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICBkZWxldGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VibWl0KFwiZGVsZXRlXCIsIHVybCk7XG4gIH1cblxuICAvKipcbiAgICogU3VibWl0IHRoZSBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMub25GYWlsKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcblxuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIHN1Y2Nlc3NmdWwgZm9ybSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgKi9cbiAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAvLyB0ZW1wb3JhcnlcbiAgICAvLyB0aGlzLnJlc2V0KCk7XG5cbiAgICB0aGlzLmVycm9ycy5jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhIGZhaWxlZCBmb3JtIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICovXG4gIG9uRmFpbChlcnJvcnMpIHtcbiAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKTtcbiAgfVxuXG5cbiAgaXNEYXRhRW1wdHkoKSB7XG4gICAgbGV0IGtleSA9IGZhbHNlO1xuICAgIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKCkpLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kKSB7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGtleSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGlzRGVmYXVsdERhdGFFbXB0eSgpIHtcbiAgICBsZXQga2V5ID0gZmFsc2U7XG5cbiAgICBPYmplY3QudmFsdWVzKHRoaXMuZGF0YSgpKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZCkge1xuICAgICAgaWYgKHZhbCAmJiB2YWwgIT09ICdBZGQnKSB7XG4gICAgICAgIGtleSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIHN0cmluZ0xvd2VyQ2FzZShzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgfSxcblxuICAgIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIsIGxvd2VyID0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAobG93ZXIgPyBzdHIudG9Mb3dlckNhc2UoKSA6IHN0cikucmVwbGFjZSgvKD86XnxcXHN8W1wiJyhbe10pK1xcUy9nLCBtYXRjaCA9PiBtYXRjaC50b1VwcGVyQ2FzZSgpKTtcbiAgICB9LFxuXG4gICAgZm9ybWF0QW1vdW50KGFtb3VudCkge1xuICAgICAgaWYgKGFtb3VudCkge1xuICAgICAgICByZXR1cm4gYW1vdW50LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG5cbiAgICBlbXB0eVN0cmluZyhjaGFyYWMgPSAnLScsIGxlbmd0aCA9IDQpIHtcbiAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgc3RyICs9IGNoYXJhY1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9LFxuXG4gICAgaW5BcnJheShuZWVkbGUsIGhheXN0YWNrKSB7XG4gICAgICB2YXIgbGVuZ3RoID0gaGF5c3RhY2subGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT0gbmVlZGxlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgd2hvbGVOdW1iZXJGb3JtYXQoYW1vdW50LCBkZWNpbWFQbGFjZSkge1xuICAgICAgdmFyIGFtb3VudE5vdyA9IDBcbiAgICAgIGlmICgoYW1vdW50IC0gTWF0aC5mbG9vcihhbW91bnQpKSAhPT0gMCkge1xuICAgICAgICBhbW91bnROb3cgPSBNYXRoLnJvdW5kKGFtb3VudCwgZGVjaW1hUGxhY2UpO1xuICAgICAgICBpZiAoYW1vdW50Tm93ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGFtb3VudC5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFtb3VudE5vdy50b0xvY2FsZVN0cmluZygpLnJlcGxhY2UoL1xcLjAwJC8sICcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtb3VudE5vdyA9IE1hdGgucm91bmQoYW1vdW50LCBkZWNpbWFQbGFjZSk7XG4gICAgICAgIHJldHVybiBhbW91bnROb3cudG9Mb2NhbGVTdHJpbmcoKS5yZXBsYWNlKC9cXC4wMCQvLCAnJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbW1hX2NvbmNhdChrZXkgPSAnbmFtZScsIGl0ZW1zKSB7XG4gICAgICBsZXQgc2V0ID0gJyc7XG4gICAgICBsZXQgaSA9IDE7XG4gICAgICBpdGVtcy5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgIHNldCArPSBlbGVba2V5XTtcbiAgICAgICAgaWYgKGkgPCBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICBzZXQgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBpKytcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2V0O1xuICAgIH0sXG5cbiAgICBzaG93aW5nX2xhYmVsKGZyb20sIHRvLCB0b3RhbCkge1xuICAgICAgbGV0IGYgPSB0aGlzLnRvX3N0cm9uZyhmcm9tKVxuICAgICAgbGV0IHQgPSB0aGlzLnRvX3N0cm9uZyh0bylcbiAgICAgIGxldCB0b3QgPSB0aGlzLnRvX3N0cm9uZyh0b3RhbClcbiAgICAgIHJldHVybiBgU2hvd2luZyAke2Z9IHRvICR7dH0gb2YgJHt0b3R9IHJlc3VsdHNgO1xuICAgIH0sXG5cbiAgICB0b19zdHJvbmcoc3RyKSB7XG4gICAgICByZXR1cm4gYDxzdHJvbmc+JHtzdHJ9PC9zdHJvbmc+YDtcbiAgICB9XG4gIH0sXG59O1xuXG4iLCJpbXBvcnQgdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFt0ZXh0XSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG1ha2VUb2FzdCh2YXJpYW50ID0gbnVsbCwgdGl0bGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ2VG9hc3QudG9hc3QobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgIHNvbGlkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9Db25maXJtKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAkLmNvbmZpcm0oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBDb25maXJtIScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgZGF0YT8nLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZUFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DbGFzczogJ2J0bi1yZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAneWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdjYW5jZWwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGVDb25maXJtKHRpdGxlID0gJ0NPTkZJUk1BVElPTiBCRUZPUkUgREVMRVRJTkcgUkVDT1JEJywgbW9kdWxlTmFtZSA9IFwiXCIpIHtcblxuICAgICAgICAgICAgdGhpcy5ib3hUd28gPSAnJ1xuICAgICAgICAgICAgdGhpcy4kYnZNb2RhbC5tc2dCb3hDb25maXJtKCdQbGVhc2UgY29uZmlybSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSBldmVyeXRoaW5nLicsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBDb25maXJtJyxcbiAgICAgICAgICAgICAgICBidXR0b25TaXplOiAnc20nLFxuICAgICAgICAgICAgICAgIG9rVmFyaWFudDogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgb2tUaXRsZTogJ1lFUycsXG4gICAgICAgICAgICAgICAgY2FuY2VsVGl0bGU6ICdOTycsXG4gICAgICAgICAgICAgICAgZm9vdGVyQ2xhc3M6ICdwLTInLFxuICAgICAgICAgICAgICAgIGhpZGVIZWFkZXJDbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyZWQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJveFR3byA9IHZhbHVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIFN3YWxcbiAgICAgICAgICAgIC8vICAgICAgICAgLmZpcmUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgZGF0YSBmb3JtICR7bW9kdWxlTmFtZX0gcmVjb3Jkcz9gLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiMzMDg1ZDZcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiBcIiNkMzNcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxuICAgICAgICAgICAgLy8gICAgICAgICB9KVxuICAgICAgICAgICAgLy8gICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdCkpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH1cbiAgICB9LFxuXG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9tb2RhbHMvcG9zaXRpb25Nb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWtKQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQUNBO0FBQ0E7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGItbW9kYWxcXG4gICAgaWQ9XFxcInBvc2l0aW9uLW1vZGFsXFxcIlxcbiAgICBoaWRlLWZvb3RlclxcbiAgICBuby1jbG9zZS1vbi1iYWNrZHJvcFxcbiAgICBjb250ZW50LWNsYXNzPVxcXCJib3JkZXItdG9wIGJnLWNyZWFtXFxcIlxcbiAgPlxcbiAgICA8dGVtcGxhdGUgI21vZGFsLWhlYWRlcj5cXG4gICAgICA8IS0tIEVtdWxhdGUgYnVpbHQgaW4gbW9kYWwgaGVhZGVyIGNsb3NlIGJ1dHRvbiBhY3Rpb24gLS0+XFxuICAgICAgXFxuICAgICAgPGg1IGNsYXNzPVxcXCJmb250LXdlaWdodC1ib2xkZXIgaGVhZGVyLWNlLXRpdGxlXFxcIj57eyBmb3JtLmlkID8gJ0VkaXQgUG9zaXRpb24nIDogJ05ldyBQb3NpdGlvbid9fTwvaDU+XFxuICAgICAgPGItYnV0dG9uXFxuICAgICAgICBwaWxsXFxuICAgICAgICBzaXplPVxcXCJzbVxcXCJcXG4gICAgICAgIHYtYi10b29sdGlwLmhvdmVyXFxuICAgICAgICBAY2xpY2s9XFxcIm1vZGFsQ2xvc2UoKVxcXCJcXG4gICAgICAgIGNsYXNzPVxcXCJiZy1icm93biBzaGFkb3cgYnRuLWNlLXN1Ym1pdFxcXCJcXG4gICAgICA+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICA8L2ItYnV0dG9uPlxcbiAgICA8L3RlbXBsYXRlPlxcblxcbiAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XFxuICAgICAgPGItZm9ybT5cXG4gICAgICAgIDxiLWZvcm0tZ3JvdXAgaWQ9XFxcImlucHV0LWdyb3VwLTFcXFwiIGxhYmVsPVxcXCJUaXRsZVxcXCIgbGFiZWwtZm9yPVxcXCJpbnB1dC0xXFxcIj5cXG4gICAgICAgICAgPGItZm9ybS1pbnB1dFxcbiAgICAgICAgICAgIGlkPVxcXCJpbnB1dC0xXFxcIlxcbiAgICAgICAgICAgIHYtbW9kZWw9XFxcImZvcm0udGl0bGVcXFwiXFxuICAgICAgICAgICAgcmVxdWlyZWRcXG4gICAgICAgICAgPjwvYi1mb3JtLWlucHV0PlxcbiAgICAgICAgICA8ZGl2IHYtaWY9XFxcImVycm9ycyAmJiBlcnJvcnMudGl0bGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWRhbmdlclxcXCI+e3sgZXJyb3JzLnRpdGxlWzBdIH19PC9kaXY+XFxuICAgICAgICA8L2ItZm9ybS1ncm91cD5cXG4gICAgICA8L2ItZm9ybT5cXG4gICAgICA8Yi1yb3cgY2xhc3M9XFxcIm10LTNcXFwiPlxcbiAgICAgICAgPGItY29sIGNsYXNzPVxcXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFxcXCI+XFxuICAgICAgICAgIDxiLWJ1dHRvbiBwaWxsIHNpemU9XFxcInNtXFxcIiBjbGFzcz1cXFwibXItMiBidG4tb3V0bGluZS1icm93blxcXCIgOnN0eWxlPVxcXCJ7ICdtaW4td2lkdGgnOiAnODBweCcgfVxcXCIgQGNsaWNrPVxcXCJtb2RhbENsb3NlKClcXFwiPlxcbiAgICAgICAgICAgIENBTkNFTFxcbiAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICA8Yi1idXR0b24gcGlsbCBzaXplPVxcXCJzbVxcXCIgY2xhc3M9XFxcImJnLWJyb3duIHNoYWRvdyBidG4tY2Utc3VibWl0XFxcIiA6c3R5bGU9XFxcInsgJ21pbi13aWR0aCc6ICc4MHB4JyB9XFxcIiBAY2xpY2s9XFxcIm9uU3VibWl0KClcXFwiPlxcbiAgICAgICAgICAgIHt7IGZvcm0uaWQgPyAnU0FWRSBDSEFOR0VTJyA6ICdTQVZFJ319XFxuICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ItY29sPlxcbiAgICAgIDwvYi1yb3c+XFxuICAgIDwvdGVtcGxhdGU+XFxuICA8L2ItbW9kYWw+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tIFxcXCJ2dWV4XFxcIjtcXG5cXG5pbXBvcnQgdG9hc3QgZnJvbSBcXFwiLi4vLi4vLi4vLi4vaGVscGVycy90b2FzdC5qc1xcXCI7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgbWl4aW5zOiBbdG9hc3RdLFxcblxcbiAgcHJvcHM6IFtcXFwicG9zaXRpb25Gb3JtXFxcIl0sXFxuXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxcbiAgICAgIGZvcm06IHRoaXMucG9zaXRpb25Gb3JtLFxcbiAgICAgIGVycm9yczoge30sXFxuICAgICAgd2FnZVR5cGVzOiBbXFxuICAgICAgICB7IHRleHQ6ICdIb3VybHknLCB2YWx1ZTogJ2hvdXJseScgfSxcXG4gICAgICAgIHsgdGV4dDogJ0RhaWx5JywgdmFsdWU6ICdkYWlseScgfSxcXG4gICAgICAgIHsgdGV4dDogJ01vbnRobHknLCB2YWx1ZTogJ21vbnRobHknIH0sXFxuICAgICAgXSxcXG4gICAgfTtcXG4gIH0sXFxuXFxuICBtZXRob2RzOiB7XFxuICAgIC4uLm1hcEFjdGlvbnMoXFxcInBvc2l0aW9uXFxcIiwgW1xcXCJjcmVhdGVQb3NpdGlvblxcXCIsIFxcXCJ1cGRhdGVQb3NpdGlvblxcXCJdKSxcXG4gICAgXFxuICAgIG1vZGFsQ2xvc2UoZG9uZSkge1xcblxcbiAgICAgIHRoaXMuJGJ2TW9kYWwuaGlkZShcXFwicG9zaXRpb24tbW9kYWxcXFwiKTtcXG4gICAgICB0aGlzLmVycm9ycyA9IHt9O1xcblxcbiAgICB9LFxcblxcbiAgICBoYW5kbGVDcmVhdGVQb3NpdGlvbigpIHtcXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XFxuICAgICAgXFxuXFx0XFx0XFx0bGV0IHBhcmFtcyA9IHtcXG5cXHRcXHRcXHRcXHR0aXRsZTogdGhpcy5mb3JtLnRpdGxlXFxuXFx0XFx0XFx0fVxcblxcbiAgICAgIHRoaXMuY3JlYXRlUG9zaXRpb24ocGFyYW1zKVxcbiAgICAgICAgLnRoZW4oKF8pID0+IHtcXG4gICAgICAgICAgdGhpcy5tYWtlVG9hc3QoXFxuICAgICAgICAgICAgXFxcInN1Y2Nlc3NcXFwiLFxcbiAgICAgICAgICAgIFxcXCJORVcgUkVDT1JEIENSRUFURURcXFwiLFxcbiAgICAgICAgICAgIGAke3RoaXMuZm9ybS50aXRsZX0gaGFzIGJlZW4gY3JlYXRlZCBhcyBhIG5ldyBQb3NpdGlvbmBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFBvc2l0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgaGFuZGxlVXBkYXRlUG9zaXRpb24oKSB7XFxuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xcbiAgICAgIFxcblxcdFxcdFxcdGxldCBwYXJhbXMgPSB7XFxuICAgICAgICBpZDogdGhpcy5mb3JtLmlkLFxcblxcdFxcdFxcdFxcdHRpdGxlOiB0aGlzLmZvcm0udGl0bGVcXG5cXHRcXHRcXHR9XFxuXFxuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihwYXJhbXMpXFxuICAgICAgICAudGhlbigoXykgPT4ge1xcbiAgICAgICAgICB0aGlzLm1ha2VUb2FzdChcXG4gICAgICAgICAgICBcXFwid2FybmluZ1xcXCIsXFxuICAgICAgICAgICAgXFxcIlJFQ09SRCBVUERBVEVEXFxcIixcXG4gICAgICAgICAgICBgVGhpcyBpbmZvcm1hdGlvbiBmb3IgUG9zaXRpb24gSUQ6ICR7dGhpcy5mb3JtLmlkfSBoYXMgYmVlbiB1cGRhdGVkLmBcXG4gICAgICAgICAgKTtcXG4gICAgICAgICAgdGhpcy4kZW1pdChcXFwibG9hZFBvc2l0aW9uc1xcXCIpO1xcbiAgICAgICAgICB0aGlzLm1vZGFsQ2xvc2UoKVxcbiAgICAgICAgfSlcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgbGV0IGVycm9ycyA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xcbiAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcXG4gICAgICAgIH0pXFxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XFxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICB9KTtcXG4gICAgfSxcXG5cXG4gICAgb25TdWJtaXQoKSB7XFxuICAgICAgaWYgKHRoaXMuZm9ybS5pZCkge1xcbiAgICAgICAgdGhpcy5oYW5kbGVVcGRhdGVQb3NpdGlvbigpO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICB0aGlzLmhhbmRsZUNyZWF0ZVBvc2l0aW9uKCk7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG5cXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4uYnRuLWNlLXN1Ym1pdCB7XFxuICBjb2xvcjogI2ZmZmRkZCAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmJ0bi1jZS1jYW5jZWwge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg1YjRjICFpbXBvcnRhbnQ7XFxufVxcbi5oZWFkZXItY2UtdGl0bGUge1xcbiAgY29sb3I6ICM3ODViNGMgIWltcG9ydGFudDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEwLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bvc2l0aW9uTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjExODQ3MGMmbGFuZz1jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYTI1OGQxMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2JyeWFuamVjaWViYWhhbGEvd29ya3NwYWNlcy9tZW50b3JzcGlyZS9zdWJheWJ1cy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkYTI1OGQxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkYTI1OGQxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkYTI1OGQxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRhMjU4ZDEwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGEyNThkMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL3ZpZXdzL3Bvc2l0aW9ucy9jb21wb25lbnRzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcG9zaXRpb25EZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBhZGNiNGZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQwYWRjYjRmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQwYWRjYjRmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQwYWRjYjRmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGFkY2I0ZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQwYWRjYjRmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uRGVsZXRlTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wb3NpdGlvbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTE4NDcwY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Bvc2l0aW9uTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Bvc2l0aW9uTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcG9zaXRpb25Nb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MTE4NDcwYyZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvYnJ5YW5qZWNpZWJhaGFsYS93b3Jrc3BhY2VzL21lbnRvcnNwaXJlL3N1YmF5YnVzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYxMTg0NzBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYxMTg0NzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYxMTg0NzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb3NpdGlvbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTE4NDcwY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYxMTg0NzBjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC92aWV3cy9wb3NpdGlvbnMvbW9kYWxzL3Bvc2l0aW9uTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9zaXRpb25EZWxldGVNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bvc2l0aW9uRGVsZXRlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9zaXRpb25Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Bvc2l0aW9uTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYTI1OGQxMFwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3NpdGlvbkRlbGV0ZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGFkY2I0ZlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3NpdGlvbk1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTE4NDcwY1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMV0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMC51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3NpdGlvbk1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYxMTg0NzBjJmxhbmc9Y3NzXCIiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyIC8qIHNlcnZlciBvbmx5ICovLFxuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPVxuICAgIHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7XG4gICAgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24oaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaykgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwibmFtZXMiOlsibWFwQWN0aW9ucyIsIm1hcEdldHRlcnMiLCJzaG93RW50cmllc09wdCIsIlBvc2l0aW9uTW9kYWwiLCJQb3NpdGlvbkRlbGV0ZU1vZGFsIiwiRm9ybSIsImNvbXBvbmVudHMiLCJkYXRhIiwicGVyX3BhZ2UiLCJjdXJyZW50X3BhZ2UiLCJpc0xvYWRpbmciLCJmaWx0ZXIiLCJzZWFyY2hlZCIsImlzT3ZlcmxheSIsInRvdGFsUm93Iiwic2hvd2luZyIsInRvIiwiZnJvbSIsInRvdGFsIiwidGFibGVUb3RhbFJvd3MiLCJmaWVsZHMiLCJrZXkiLCJsYWJlbCIsInRoQ2xhc3MiLCJ0ZENsYXNzIiwidGhTdHlsZSIsIndpZHRoIiwicG9zaXRpb25Gb3JtIiwiaWQiLCJ0aXRsZSIsIm1vZGFsSWQiLCJtZXRob2RzIiwiX29iamVjdFNwcmVhZCIsImNyZWF0ZVBvc2l0aW9uIiwicmVzZXQiLCIkYnZNb2RhbCIsInNob3ciLCJlZGl0UG9zaXRpb24iLCJkZWxldGVQb3NpdGlvbiIsImxvYWRQb3NpdGlvbnMiLCJfdGhpcyIsInBhcmFtcyIsInBhZ2UiLCJzZWFyY2giLCJsb2FkSXRlbXMiLCJ0aGVuIiwiXyIsIml0ZW1zIiwicGVyZm9ybVNlYXJjaCIsImRlYm91bmNlIiwicXVlcnkiLCJtb3VudGVkIiwiY29tcHV0ZWQiLCJ3YXRjaCIsImhhbmRsZXIiLCJ2YWx1ZSIsInRvYXN0IiwibWl4aW5zIiwicHJvcHMiLCJmb3JtIiwid2FnZVR5cGVzIiwidGV4dCIsIm1vZGFsQ2xvc2UiLCJkb25lIiwiaGlkZSIsIm9uU3VibWl0IiwibWFrZVRvYXN0IiwiY29uY2F0IiwiJGVtaXQiLCJlcnJvciIsImVycm9ycyIsInJlc3BvbnNlIiwiaGFuZGxlQ3JlYXRlUG9zaXRpb24iLCJoYW5kbGVVcGRhdGVQb3NpdGlvbiIsIl90aGlzMiIsInVwZGF0ZVBvc2l0aW9uIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJhdHRycyIsInZhcmlhbnQiLCJvbiIsImNsaWNrIiwiaWNvbiIsImlubGluZSIsIm9wdGlvbnMiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsInNjb3BlZFNsb3RzIiwiX3UiLCJmbiIsInByb3h5IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicm91bmRlZCIsImhvdmVyIiwic3RyaXBlZCIsImJ1c3kiLCJfcyIsInNpemUiLCIkZXZlbnQiLCJpdGVtIiwiYWxpZ24iLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiY2VudGVyZWQiLCJzdHlsZSIsInBpbGwiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJtb2RpZmllcnMiLCJyZXF1aXJlZCIsIiRzZXQiLCJfZSIsIkVycm9ycyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImhhcyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJhbnkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiZ2V0IiwicmVjb3JkIiwiY2xlYXIiLCJsaXN0IiwiX09iamVjdCR2YWx1ZXMiLCJlcnJvckFycmF5IiwidmFsdWVzIiwiZm9yRWFjaCIsInB1c2giLCJvcmlnaW5hbERhdGEiLCJwcm9wZXJ0eSIsInBvc3QiLCJ1cmwiLCJzdWJtaXQiLCJwdXQiLCJwYXRjaCIsIl9kZWxldGUiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJpc0RhdGFFbXB0eSIsInZhbCIsImluZCIsImlzRGVmYXVsdERhdGFFbXB0eSIsInN0cmluZ0xvd2VyQ2FzZSIsInN0ciIsInRvU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJsb3dlciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInJlcGxhY2UiLCJtYXRjaCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0QW1vdW50IiwiYW1vdW50IiwiZW1wdHlTdHJpbmciLCJjaGFyYWMiLCJpIiwibCIsImluQXJyYXkiLCJuZWVkbGUiLCJoYXlzdGFjayIsIndob2xlTnVtYmVyRm9ybWF0IiwiZGVjaW1hUGxhY2UiLCJhbW91bnROb3ciLCJNYXRoIiwiZmxvb3IiLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwiY29tbWFfY29uY2F0Iiwic2V0IiwiZWxlIiwic2hvd2luZ19sYWJlbCIsImYiLCJ0b19zdHJvbmciLCJ0IiwidG90IiwibWVzc2FnZSIsIiRidlRvYXN0Iiwic29saWQiLCJ0b0NvbmZpcm0iLCIkIiwiY29uZmlybSIsImNvbnRlbnQiLCJ0eXBlQW5pbWF0ZWQiLCJidXR0b25zIiwieWVzIiwiYnRuQ2xhc3MiLCJhY3Rpb24iLCJyZXNwIiwiY2FuY2VsIiwiZGVsZXRlQ29uZmlybSIsIm1vZHVsZU5hbWUiLCJib3hUd28iLCJtc2dCb3hDb25maXJtIiwiYnV0dG9uU2l6ZSIsIm9rVmFyaWFudCIsIm9rVGl0bGUiLCJjYW5jZWxUaXRsZSIsImZvb3RlckNsYXNzIiwiaGlkZUhlYWRlckNsb3NlIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==