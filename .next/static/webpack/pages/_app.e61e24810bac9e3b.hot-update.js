"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/components/nav.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Context */ \"./src/components/Context.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Layout = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), addMargin = ref1[0], setAddMargin = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), addPadding = ref2[0], setAddPadding = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden\"), visibility = ref3[0], setVisibility = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hideFooter = ref4[0], setHideFooter = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isVerified = ref5[0], setIsVerified = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        router.asPath === \"/\" ? setVisibility(\"flex\") : setVisibility(\"hidden\");\n        if (router.asPath.includes(\"login\")) {\n            setHideFooter(true);\n        } else {\n            setHideFooter(false);\n        }\n    }, [\n        router\n    ]);\n    var navContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function() {\n        return {\n            isVerified: isVerified,\n            setIsVerified: setIsVerified\n        };\n    }, [\n        isVerified,\n        setIsVerified\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: visibility,\n                children: \"= \"\n            }, void 0, false, {\n                fileName: \"/Users/Niscolinx/projects/learning/interviews/eslams_assessment/src/components/Layout.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-[#1a1a2d] text-[#ccccd0] mx-auto relative light:bg-[#E8E7E7] light:text-[#1a1a2d]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Context__WEBPACK_IMPORTED_MODULE_5__.NavContext.Provider, {\n                    value: navContext,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            session: session\n                        }, void 0, false, {\n                            fileName: \"/Users/Niscolinx/projects/learning/interviews/eslams_assessment/src/components/Layout.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/Niscolinx/projects/learning/interviews/eslams_assessment/src/components/Layout.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Niscolinx/projects/learning/interviews/eslams_assessment/src/components/Layout.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/Niscolinx/projects/learning/interviews/eslams_assessment/src/components/Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"jw3nFu9CT9XH7z70e8khSpkJ7sc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUEyRDtBQUVwQztBQUNxQjtBQUNMO0FBQ0Q7QUFFdEMsSUFBTVEsTUFBTSxHQUFpQixnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUNwQyxJQUEwQkosR0FBWSxHQUFaQSwyREFBVSxFQUFFLEVBQTlCSyxPQUFhLEdBQUtMLEdBQVksQ0FBOUJLLElBQUk7SUFDWixJQUFNRSxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBa0NKLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNXLFNBQVMsR0FBa0JYLElBQVksR0FBOUIsRUFBRVksWUFBWSxHQUFJWixJQUFZLEdBQWhCO0lBQzlCLElBQW9DQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQXpDYSxVQUFVLEdBQW1CYixJQUFZLEdBQS9CLEVBQUVjLGFBQWEsR0FBSWQsSUFBWSxHQUFoQjtJQUNoQyxJQUFvQ0EsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUMsUUFBUSxDQUFDLEVBQS9DZSxVQUFVLEdBQW1CZixJQUFrQixHQUFyQyxFQUFFZ0IsYUFBYSxHQUFJaEIsSUFBa0IsR0FBdEI7SUFDaEMsSUFBb0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNpQixVQUFVLEdBQW1CakIsSUFBZSxHQUFsQyxFQUFFa0IsYUFBYSxHQUFJbEIsSUFBZSxHQUFuQjtJQUNoQyxJQUFvQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUE1Q21CLFVBQVUsR0FBbUJuQixJQUFlLEdBQWxDLEVBQUVvQixhQUFhLEdBQUlwQixJQUFlLEdBQW5CO0lBRWhDRCxnREFBUyxDQUFDLFdBQU07UUFDWlcsTUFBTSxDQUFDVyxNQUFNLEtBQUssR0FBRyxHQUFHTCxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUdBLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFJdkUsSUFBSU4sTUFBTSxDQUFDVyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQ0osYUFBYSxDQUFDLElBQUksQ0FBQztTQUN0QixNQUFNO1lBQ0hBLGFBQWEsQ0FBQyxLQUFLLENBQUM7U0FDdkI7S0FDSixFQUFFO1FBQUNSLE1BQU07S0FBQyxDQUFDO0lBS1osSUFBTWEsVUFBVSxHQUFHdEIsOENBQU8sQ0FBQyxXQUFNO1FBQzdCLE9BQU87WUFDSGtCLFVBQVUsRUFBVkEsVUFBVTtZQUNWQyxhQUFhLEVBQWJBLGFBQWE7U0FDaEI7S0FDSixFQUFFO1FBQUNELFVBQVU7UUFBRUMsYUFBYTtLQUFDLENBQUM7SUFFL0IscUJBQ0k7OzBCQUNJLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLFVBQVU7MEJBQUUsSUFBRTs7Ozs7cUJBQU07MEJBQ3BDLDhEQUFDUyxLQUFHO2dCQUNBQyxTQUFTLEVBQUcsdUZBQXFGOzBCQUVqRyw0RUFBQ3BCLHlEQUFtQjtvQkFBQ3NCLEtBQUssRUFBRUosVUFBVTs7c0NBQ2xDLDhEQUFDckIsNENBQUc7NEJBQUNPLE9BQU8sRUFBRUEsT0FBTzs7Ozs7aUNBQUk7c0NBRXpCLDhEQUFDbUIsTUFBSTtzQ0FBRXJCLFFBQVE7Ozs7O2lDQUFROzs7Ozs7eUJBRUw7Ozs7O3FCQUNwQjs7b0JBQ1AsQ0FDTjtDQUNKO0dBOUNLRCxNQUFNOztRQUNrQkgsdURBQVU7UUFDckJDLGtEQUFTOzs7QUFGdEJFLEtBQUFBLE1BQU07QUFnRFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LnRzeD9kZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJ1xuaW1wb3J0IE5hdiBmcm9tICcuL25hdidcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IE5hdkNvbnRleHQgfSBmcm9tICcuL0NvbnRleHQnXG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbYWRkTWFyZ2luLCBzZXRBZGRNYXJnaW5dID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2FkZFBhZGRpbmcsIHNldEFkZFBhZGRpbmddID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW3Zpc2liaWxpdHksIHNldFZpc2liaWxpdHldID0gdXNlU3RhdGUoJ2hpZGRlbicpXG4gICAgY29uc3QgW2hpZGVGb290ZXIsIHNldEhpZGVGb290ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzVmVyaWZpZWQsIHNldElzVmVyaWZpZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByb3V0ZXIuYXNQYXRoID09PSAnLycgPyBzZXRWaXNpYmlsaXR5KCdmbGV4JykgOiBzZXRWaXNpYmlsaXR5KCdoaWRkZW4nKVxuXG4gICAgICBcblxuICAgICAgICBpZiAocm91dGVyLmFzUGF0aC5pbmNsdWRlcygnbG9naW4nKSkge1xuICAgICAgICAgICAgc2V0SGlkZUZvb3Rlcih0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SGlkZUZvb3RlcihmYWxzZSlcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXJdKVxuXG4gICAgXG4gICAgXG5cbiAgICBjb25zdCBuYXZDb250ZXh0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1ZlcmlmaWVkLFxuICAgICAgICAgICAgc2V0SXNWZXJpZmllZCxcbiAgICAgICAgfVxuICAgIH0sIFtpc1ZlcmlmaWVkLCBzZXRJc1ZlcmlmaWVkXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dmlzaWJpbGl0eX0+PSA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgYmctWyMxYTFhMmRdIHRleHQtWyNjY2NjZDBdIG14LWF1dG8gcmVsYXRpdmUgbGlnaHQ6YmctWyNFOEU3RTddIGxpZ2h0OnRleHQtWyMxYTFhMmRdYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TmF2Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmF2Q29udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYgc2Vzc2lvbj17c2Vzc2lvbn0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgICAgICAgICAgICAgICB7LyogPEZvb3RlciBoaWRlRm9vdGVyPXtoaWRlRm9vdGVyfSAvPiAqL31cbiAgICAgICAgICAgICAgICA8L05hdkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIk5hdiIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJOYXZDb250ZXh0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsImFkZE1hcmdpbiIsInNldEFkZE1hcmdpbiIsImFkZFBhZGRpbmciLCJzZXRBZGRQYWRkaW5nIiwidmlzaWJpbGl0eSIsInNldFZpc2liaWxpdHkiLCJoaWRlRm9vdGVyIiwic2V0SGlkZUZvb3RlciIsImlzVmVyaWZpZWQiLCJzZXRJc1ZlcmlmaWVkIiwiYXNQYXRoIiwiaW5jbHVkZXMiLCJuYXZDb250ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout.tsx\n"));

/***/ })

});