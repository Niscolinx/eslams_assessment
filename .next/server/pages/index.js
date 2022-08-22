"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Index = ()=>{\n    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    // const [neuToUse, setNeuToUse] = useState<{}>()\n    //const [stepsNeu, setStepsNeu] = useState<{}>()\n    // useEffect(() => {\n    //     if (theme === 'dark') {\n    //         setNeuToUse({\n    //             background: `linear-gradient(145deg, #1c1c30, #171729)`,\n    //             boxShadow: `7px 7px 14px #161625,\n    //              -7px -7px 14px #1e1e35`,\n    //             borderRadius: '50px',\n    //         })\n    //         setStepsNeu({})\n    //     } else {\n    //         setNeuToUse({\n    //             background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,\n    //             boxShadow: `7px 7px 14px #a5a5a8,\n    //          -7px -7px 14px #f3f3f8`,\n    //             borderRadius: '50px',\n    //             color: '#1a1a2d',\n    //         })\n    //         setStepsNeu({\n    //             background: `linear-gradient(145deg, #dadadf, #b8b8bb)`,\n    //             boxShadow: `7px 7px 14px #a5a5a8,\n    //          -7px -7px 14px #f3f3f8`,\n    //             borderRadius: '50px',\n    //             color: '#1a1a2d',\n    //         })\n    //     }\n    // }, [theme])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \"Hello world\"\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/auth/login\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            session\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNaO0FBRXdCO0FBRTlELE1BQU1HLEtBQUssR0FBRyxJQUFNO0lBQ2hCLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdILHFEQUFRLEVBQUU7SUFDN0IsaURBQWlEO0lBQ2hELGdEQUFnRDtJQUtoRCxvQkFBb0I7SUFDcEIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qix1RUFBdUU7SUFDdkUsZ0RBQWdEO0lBQ2hELHdDQUF3QztJQUN4QyxvQ0FBb0M7SUFDcEMsYUFBYTtJQUViLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHVFQUF1RTtJQUN2RSxnREFBZ0Q7SUFDaEQsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUViLHdCQUF3QjtJQUN4Qix1RUFBdUU7SUFDdkUsZ0RBQWdEO0lBQ2hELG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixRQUFRO0lBQ1IsY0FBYztJQU1kLHFCQUNJO2tCQUFFLGFBRUY7cUJBQUcsQ0FDTjtDQUNKO0FBRUQsaUVBQWVFLEtBQUs7QUFFYixlQUFlRSxrQkFBa0IsQ0FDcENDLE9BQXFDLEVBQ3ZDO0lBQ0UsTUFBTUMsT0FBTyxHQUFHLE1BQU1MLDJEQUFVLENBQUNJLE9BQU8sQ0FBQztJQUV6QyxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNWLE9BQU87WUFDSEMsUUFBUSxFQUFFO2dCQUNOQyxXQUFXLEVBQUUsYUFBYTtnQkFDMUJDLFNBQVMsRUFBRSxLQUFLO2FBQ25CO1NBQ0o7S0FDSjtJQUVELE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQUVKLE9BQU87U0FBRTtLQUNyQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXNsYW1zX2Fzc2Vzc21lbnQvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbmltcG9ydCB7IEdldFNlc3Npb25QYXJhbXMsIGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKClcbiAgIC8vIGNvbnN0IFtuZXVUb1VzZSwgc2V0TmV1VG9Vc2VdID0gdXNlU3RhdGU8e30+KClcbiAgICAvL2NvbnN0IFtzdGVwc05ldSwgc2V0U3RlcHNOZXVdID0gdXNlU3RhdGU8e30+KClcbiAgXG5cbiAgICBcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGlmICh0aGVtZSA9PT0gJ2RhcmsnKSB7XG4gICAgLy8gICAgICAgICBzZXROZXVUb1VzZSh7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxYzFjMzAsICMxNzE3MjkpYCxcbiAgICAvLyAgICAgICAgICAgICBib3hTaGFkb3c6IGA3cHggN3B4IDE0cHggIzE2MTYyNSxcbiAgICAvLyAgICAgICAgICAgICAgLTdweCAtN3B4IDE0cHggIzFlMWUzNWAsXG4gICAgLy8gICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTBweCcsXG4gICAgLy8gICAgICAgICB9KVxuXG4gICAgLy8gICAgICAgICBzZXRTdGVwc05ldSh7fSlcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHNldE5ldVRvVXNlKHtcbiAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2RhZGFkZiwgI2I4YjhiYilgLFxuICAgIC8vICAgICAgICAgICAgIGJveFNoYWRvdzogYDdweCA3cHggMTRweCAjYTVhNWE4LFxuICAgIC8vICAgICAgICAgIC03cHggLTdweCAxNHB4ICNmM2YzZjhgLFxuICAgIC8vICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwcHgnLFxuICAgIC8vICAgICAgICAgICAgIGNvbG9yOiAnIzFhMWEyZCcsXG4gICAgLy8gICAgICAgICB9KVxuXG4gICAgLy8gICAgICAgICBzZXRTdGVwc05ldSh7XG4gICAgLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNkYWRhZGYsICNiOGI4YmIpYCxcbiAgICAvLyAgICAgICAgICAgICBib3hTaGFkb3c6IGA3cHggN3B4IDE0cHggI2E1YTVhOCxcbiAgICAvLyAgICAgICAgICAtN3B4IC03cHggMTRweCAjZjNmM2Y4YCxcbiAgICAvLyAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MHB4JyxcbiAgICAvLyAgICAgICAgICAgICBjb2xvcjogJyMxYTFhMmQnLFxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFt0aGVtZV0pXG5cbiAgICBcblxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgSGVsbG8gd29ybGRcbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKFxuICAgIGNvbnRleHQ6IEdldFNlc3Npb25QYXJhbXMgfCB1bmRlZmluZWRcbikge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpXG5cbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvYXV0aC9sb2dpbicsXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBzZXNzaW9uIH0sXG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUaGVtZSIsImdldFNlc3Npb24iLCJJbmRleCIsInRoZW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();