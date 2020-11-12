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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Search = /*#__PURE__*/function () {\n  // 1. Describe\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.openBtn = document.querySelector('.search-trigger');\n    this.closeBtn = document.querySelector('.search-overlay__close');\n    this.searchOverlay = document.querySelector('.search-overlay');\n    this.events();\n    this.overlayIsVisible = false;\n  } // 2. Events\n\n\n  _createClass(Search, [{\n    key: \"events\",\n    value: function events() {\n      this.openBtn.addEventListener('click', this.openOverlay.bind(this));\n      this.closeBtn.addEventListener('click', this.closeOverlay.bind(this));\n      document.addEventListener('keydown', this.keyPressDispatcher.bind(this));\n    }\n  }, {\n    key: \"keyPressDispatcher\",\n    value: function keyPressDispatcher(event) {\n      if (event.key === 'Enter' && !this.overlayIsVisible) {\n        this.openOverlay();\n      } else if (event.key === 'Escape' && this.overlayIsVisible) {\n        this.closeOverlay();\n      }\n    } // 3.Methods\n\n  }, {\n    key: \"openOverlay\",\n    value: function openOverlay() {\n      document.body.classList.add('body-no-scroll');\n      this.searchOverlay.classList.add('search-overlay--active');\n      this.overlayIsVisible = true;\n    }\n  }, {\n    key: \"closeOverlay\",\n    value: function closeOverlay() {\n      document.body.classList.remove('body-no-scroll');\n      this.searchOverlay.classList.remove('search-overlay--active');\n      this.overlayIsVisible = false;\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvc2VhcmNoLmpzP2NmNTciXSwibmFtZXMiOlsiU2VhcmNoIiwib3BlbkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnRuIiwic2VhcmNoT3ZlcmxheSIsImV2ZW50cyIsIm92ZXJsYXlJc1Zpc2libGUiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk92ZXJsYXkiLCJiaW5kIiwiY2xvc2VPdmVybGF5Iiwia2V5UHJlc3NEaXNwYXRjaGVyIiwiZXZlbnQiLCJrZXkiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BLE07QUFDTDtBQUNBLG9CQUFjO0FBQUE7O0FBQ2IsU0FBS0MsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWhCO0FBQ0EsU0FBS0UsYUFBTCxHQUFxQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjtBQUNBLFNBQUtHLE1BQUw7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixLQUF4QjtBQUNBLEcsQ0FFRDs7Ozs7NkJBQ1M7QUFDUixXQUFLTixPQUFMLENBQWFPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQXZDO0FBQ0EsV0FBS04sUUFBTCxDQUFjSSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxLQUFLRyxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUF4QztBQUNBUixjQUFRLENBQUNNLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUtJLGtCQUFMLENBQXdCRixJQUF4QixDQUE2QixJQUE3QixDQUFyQztBQUNBOzs7dUNBRWtCRyxLLEVBQU87QUFDekIsVUFBSUEsS0FBSyxDQUFDQyxHQUFOLEtBQWMsT0FBZCxJQUF5QixDQUFDLEtBQUtQLGdCQUFuQyxFQUFxRDtBQUNwRCxhQUFLRSxXQUFMO0FBQ0EsT0FGRCxNQUVPLElBQUlJLEtBQUssQ0FBQ0MsR0FBTixLQUFjLFFBQWQsSUFBMEIsS0FBS1AsZ0JBQW5DLEVBQXFEO0FBQzNELGFBQUtJLFlBQUw7QUFDQTtBQUNELEssQ0FFRDs7OztrQ0FDYztBQUNiVCxjQUFRLENBQUNhLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsZ0JBQTVCO0FBQ0EsV0FBS1osYUFBTCxDQUFtQlcsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLHdCQUFqQztBQUNBLFdBQUtWLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0E7OzttQ0FFYztBQUNkTCxjQUFRLENBQUNhLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkUsTUFBeEIsQ0FBK0IsZ0JBQS9CO0FBQ0EsV0FBS2IsYUFBTCxDQUFtQlcsU0FBbkIsQ0FBNkJFLE1BQTdCLENBQW9DLHdCQUFwQztBQUNBLFdBQUtYLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0E7Ozs7OztBQUVhUCxxRUFBZiIsImZpbGUiOiIuL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9zZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2gge1xuXHQvLyAxLiBEZXNjcmliZVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9wZW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRyaWdnZXInKTtcblx0XHR0aGlzLmNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1vdmVybGF5X19jbG9zZScpO1xuXHRcdHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtb3ZlcmxheScpO1xuXHRcdHRoaXMuZXZlbnRzKCk7XG5cdFx0dGhpcy5vdmVybGF5SXNWaXNpYmxlID0gZmFsc2U7XG5cdH1cblxuXHQvLyAyLiBFdmVudHNcblx0ZXZlbnRzKCkge1xuXHRcdHRoaXMub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbk92ZXJsYXkuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VPdmVybGF5LmJpbmQodGhpcykpO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleVByZXNzRGlzcGF0Y2hlci5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGtleVByZXNzRGlzcGF0Y2hlcihldmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgIXRoaXMub3ZlcmxheUlzVmlzaWJsZSkge1xuXHRcdFx0dGhpcy5vcGVuT3ZlcmxheSgpO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiB0aGlzLm92ZXJsYXlJc1Zpc2libGUpIHtcblx0XHRcdHRoaXMuY2xvc2VPdmVybGF5KCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gMy5NZXRob2RzXG5cdG9wZW5PdmVybGF5KCkge1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1uby1zY3JvbGwnKTtcblx0XHR0aGlzLnNlYXJjaE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnc2VhcmNoLW92ZXJsYXktLWFjdGl2ZScpO1xuXHRcdHRoaXMub3ZlcmxheUlzVmlzaWJsZSA9IHRydWU7XG5cdH1cblxuXHRjbG9zZU92ZXJsYXkoKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5LW5vLXNjcm9sbCcpO1xuXHRcdHRoaXMuc2VhcmNoT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtb3ZlcmxheS0tYWN0aXZlJyk7XG5cdFx0dGhpcy5vdmVybGF5SXNWaXNpYmxlID0gZmFsc2U7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/src/modules/search.js\n");

/***/ })

/******/ });