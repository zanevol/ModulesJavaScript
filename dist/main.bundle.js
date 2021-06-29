/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderMessage)\n/* harmony export */ });\n\r\nconst message = document.querySelector('.message');\r\n\r\nfunction renderMessage(text) {\r\n\tmessage.style.color = 'tomato';\r\n\tmessage.textContent = text;\r\n}\n\n//# sourceURL=webpack://timer/./src/common.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diffDates\": () => (/* binding */ diffDates)\n/* harmony export */ });\n\r\nfunction diffDates(date1, date2) {\r\n\r\n\tlet calcDate;\r\n\r\n\tif (date1 > date2) {\r\n\t\treturn calcDate = new Date((date1 - date2));\r\n\t}\r\n\telse if (date1 < date2) {\r\n\t\treturn calcDate = new Date((date2 - date1));\r\n\t}\r\n\telse {\r\n\t\treturn calcDate = 'Что-то пошло не так!';\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack://timer/./src/date.js?");

/***/ }),

/***/ "./src/dateTime.js":
/*!*************************!*\
  !*** ./src/dateTime.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeekDay\": () => (/* binding */ getWeekDay)\n/* harmony export */ });\nfunction getWeekDay(today) {\r\n\tlet days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];\r\n\treturn days[today.getDay()];\r\n};\n\n//# sourceURL=webpack://timer/./src/dateTime.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/common.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ \"./src/date.js\");\n\r\n\r\nconst form = document.getElementById('form-date');\r\n\r\n\r\nform.addEventListener('submit', event => {\r\n\tevent.preventDefault();\r\n\tconst date1 = Date.parse(new Date(event.target.elements.date1.value)),\r\n\t\tdate2 = Date.parse(new Date(event.target.elements.date2.value));\r\n\r\n\tif (!date1 || !date2) {\r\n\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.default)('Введите оба значения');\r\n\t\treturn;\r\n\t}\r\n\telse if (date1 === date2) {\r\n\t\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.default)('Оба значения равны!');\r\n\t\treturn;\r\n\t}\r\n\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.default)('');\r\n\tconst result = (0,_date_js__WEBPACK_IMPORTED_MODULE_1__.diffDates)(date1, date2);\r\n\t(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.default)(`Разница ${result.getDate() - 1} дней, ${result.getMonth()} месяцев , ${result.getFullYear() - 1970} лет`);\r\n});\n\n//# sourceURL=webpack://timer/./src/form.js?");

/***/ }),

/***/ "./src/getTime.js":
/*!************************!*\
  !*** ./src/getTime.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTime\": () => (/* binding */ getTime)\n/* harmony export */ });\nfunction getTime(today) {\r\n\tlet timeToday = today.toLocaleTimeString('ru-RU');\r\n\treturn timeToday;\r\n};\n\n//# sourceURL=webpack://timer/./src/getTime.js?");

/***/ }),

/***/ "./src/getTimeDay.js":
/*!***************************!*\
  !*** ./src/getTimeDay.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeOfDay\": () => (/* binding */ timeOfDay)\n/* harmony export */ });\nfunction timeOfDay(today) {\r\n\r\n\tlet timeDay = today.toLocaleTimeString('ru-RU');\r\n\tlet res = '';\r\n\r\n\tif (timeDay >= '05:00:00' && timeDay < '11:59:59') {\r\n\t\tres = 'Доброе утро!';\r\n\t}\r\n\telse if (timeDay >= '12:00:00' && timeDay <= '17:59:59') {\r\n\t\tres = 'Добрый день!';\r\n\t}\r\n\telse if (timeDay >= '18:00:00' && timeDay <= '23:59:59') {\r\n\t\tres = 'Добрый вечер!';\r\n\t}\r\n\telse if (timeDay >= '00:00:00' && timeDay <= '04:59:59') {\r\n\t\tres = 'Доброй ночи!';\r\n\t}\r\n\treturn res;\r\n};\n\n//# sourceURL=webpack://timer/./src/getTimeDay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n\r\n\n\n//# sourceURL=webpack://timer/./src/index.js?");

/***/ }),

/***/ "./src/renderDate.js":
/*!***************************!*\
  !*** ./src/renderDate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderDate\": () => (/* binding */ renderDate)\n/* harmony export */ });\n/* harmony import */ var _getTimeDay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTimeDay.js */ \"./src/getTimeDay.js\");\n/* harmony import */ var _dateTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dateTime.js */ \"./src/dateTime.js\");\n/* harmony import */ var _getTime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTime.js */ \"./src/getTime.js\");\n\r\n\r\n\r\n\r\nfunction renderDate(today) {\r\n\tconst out = document.querySelector('.out');\r\n\tout.innerHTML = `${(0,_getTimeDay_js__WEBPACK_IMPORTED_MODULE_0__.timeOfDay)(today)}<br>\r\n\t\t\t\t\t\t\t\t\tСегодня: ${(0,_dateTime_js__WEBPACK_IMPORTED_MODULE_1__.getWeekDay)(today)}<br>\r\n\t\t\t\t\t\t\t\t\tТекущее время: ${(0,_getTime_js__WEBPACK_IMPORTED_MODULE_2__.getTime)(today)}`;\r\n}\n\n//# sourceURL=webpack://timer/./src/renderDate.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dateTime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateTime.js */ \"./src/dateTime.js\");\n/* harmony import */ var _getTime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getTime.js */ \"./src/getTime.js\");\n/* harmony import */ var _getTimeDay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTimeDay.js */ \"./src/getTimeDay.js\");\n/* harmony import */ var _renderDate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderDate.js */ \"./src/renderDate.js\");\n\r\n\r\n\r\n\r\n\r\nconst changeWindow = document.querySelector('.change-window'),\r\n\tform = document.getElementById('form-date'),\r\n\tout = document.querySelector('.out'),\r\n\ttitle = document.querySelector('h1'),\r\n\tmessage = document.querySelector('.message');\r\n\r\nchangeWindow.addEventListener('click', () => {\r\n\tif (changeWindow.textContent === 'Таймер') {\r\n\t\ttitle.style.display = 'none';\r\n\t\tform.style.display = 'none';\r\n\t\tmessage.style.display = 'none';\r\n\t\tout.style.display = 'block';\r\n\t\tchangeWindow.textContent = 'Калькулятор';\r\n\t}\r\n\r\n\telse if (changeWindow.textContent === 'Калькулятор') {\r\n\t\ttitle.style.display = 'block';\r\n\t\tform.style.display = 'block';\r\n\t\tmessage.style.display = 'block';\r\n\t\tout.style.display = 'none';\r\n\t\tchangeWindow.textContent = 'Таймер';\r\n\t}\r\n});\r\n\r\nfunction dateTime() {\r\n\tlet today = new Date();\r\n\t(0,_dateTime_js__WEBPACK_IMPORTED_MODULE_0__.getWeekDay)(today);\r\n\t(0,_getTimeDay_js__WEBPACK_IMPORTED_MODULE_2__.timeOfDay)(today);\r\n\t(0,_getTime_js__WEBPACK_IMPORTED_MODULE_1__.getTime)(today);\r\n\t(0,_renderDate_js__WEBPACK_IMPORTED_MODULE_3__.renderDate)(today);\r\n}\r\ndateTime();\r\nsetInterval(dateTime, 1000);\r\n\n\n//# sourceURL=webpack://timer/./src/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;