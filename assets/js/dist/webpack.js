/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/main.js":
/*!*******************************!*\
  !*** ./assets/js/src/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ \"./assets/js/src/modules/search.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var search = new _modules_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21haW4uanM/ODQ3NCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2giLCJTZWFyY2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3pELE1BQU1DLE1BQU0sR0FBRyxJQUFJQyx1REFBSixFQUFmO0FBQ0EsQ0FGRCIsImZpbGUiOiIuL2Fzc2V0cy9qcy9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/main.js\n");

/***/ }),

/***/ "./assets/js/src/modules/search.js":
/*!*****************************************!*\
  !*** ./assets/js/src/modules/search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Search = /*#__PURE__*/function () {\n  // 1. Describe\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.openBtn = document.querySelector('.search-trigger');\n    this.closeBtn = document.querySelector('.search-overlay__close');\n    this.searchOverlay = document.querySelector('.search-overlay');\n    this.events();\n  } // 2. Events\n\n\n  _createClass(Search, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.openBtn.addEventListener('click', function () {\n        _this.searchOverlay.classList.add('search-overlay--active');\n      });\n      this.closeBtn.addEventListener('click', function () {\n        _this.searchOverlay.classList.remove('search-overlay--active');\n      });\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvc2VhcmNoLmpzP2NmNTciXSwibmFtZXMiOlsiU2VhcmNoIiwib3BlbkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnRuIiwic2VhcmNoT3ZlcmxheSIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUEsTTtBQUNMO0FBQ0Esb0JBQWM7QUFBQTs7QUFDYixTQUFLQyxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBaEI7QUFDQSxTQUFLRSxhQUFMLEdBQXFCSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsU0FBS0csTUFBTDtBQUNBLEcsQ0FHRDs7Ozs7NkJBQ1M7QUFBQTs7QUFDUixXQUFLTCxPQUFMLENBQWFNLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDNUMsYUFBSSxDQUFDRixhQUFMLENBQW1CRyxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsd0JBQWpDO0FBQ0EsT0FGRDtBQUdBLFdBQUtMLFFBQUwsQ0FBY0csZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUM3QyxhQUFJLENBQUNGLGFBQUwsQ0FBbUJHLFNBQW5CLENBQTZCRSxNQUE3QixDQUFvQyx3QkFBcEM7QUFDQSxPQUZEO0FBR0E7Ozs7OztBQUVhVixxRUFBZiIsImZpbGUiOiIuL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2gge1xuXHQvLyAxLiBEZXNjcmliZVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRyaWdnZXInKTtcblx0XHR0aGlzLmNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1vdmVybGF5X19jbG9zZScpO1xuXHRcdHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtb3ZlcmxheScpO1xuXHRcdHRoaXMuZXZlbnRzKCk7XG5cdH1cblxuXG5cdC8vIDIuIEV2ZW50c1xuXHRldmVudHMoKSB7XG5cdFx0dGhpcy5vcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZWFyY2hPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1vdmVybGF5LS1hY3RpdmUnKTtcblx0XHR9KTtcblx0XHR0aGlzLmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zZWFyY2hPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3NlYXJjaC1vdmVybGF5LS1hY3RpdmUnKTtcblx0XHR9KTtcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/src/modules/search.js\n");

/***/ })

/******/ });