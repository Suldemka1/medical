"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 7232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6882);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Counter = ({
  end,
  decimals
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_countup__WEBPACK_IMPORTED_MODULE_0___default()), {
    end: end ? end : 100,
    duration: 1,
    decimals: decimals ? decimals : 0,
    children: ({
      countUpRef,
      start
    }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_visibility_sensor__WEBPACK_IMPORTED_MODULE_1___default()), {
      onChange: start,
      delayedCall: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: "counter",
        "data-from": "0",
        "data-to": end,
        ref: countUpRef,
        children: "count"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

};
;