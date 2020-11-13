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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Search = /*#__PURE__*/function () {\n  // 1. Describe\n  function Search() {\n    _classCallCheck(this, Search);\n\n    this.openBtn = document.querySelector('.search-trigger');\n    this.closeBtn = document.querySelector('.search-overlay__close');\n    this.searchOverlay = document.querySelector('.search-overlay');\n    this.searchField = document.querySelector('#search-term');\n    this.resaultsDiv = document.querySelector('#search-overlay__results');\n    this.events();\n    this.overlayIsVisible = false;\n    this.typingTimer = null;\n    this.isSpinnerVisible = false;\n    this.previeousValue = null;\n  } // 2. Events\n\n\n  _createClass(Search, [{\n    key: \"events\",\n    value: function events() {\n      this.openBtn.addEventListener('click', this.openOverlay.bind(this));\n      this.closeBtn.addEventListener('click', this.closeOverlay.bind(this));\n      document.addEventListener('keydown', this.keyPressDispatcher.bind(this));\n      this.searchField.addEventListener('keyup', this.typingLogic.bind(this));\n    }\n  }, {\n    key: \"typingLogic\",\n    value: function typingLogic() {\n      if (this.searchField.value !== this.previeousValue) {\n        clearTimeout(this.typingTimer);\n\n        if (this.searchField.value) {\n          if (!this.isSpinnerVisible) {\n            this.resaultsDiv.innerHTML = '<div class=\"spinner-loader\"></div>';\n            this.isSpinnerVisible = true;\n          }\n\n          this.typingTimer = setTimeout(this.getResults.bind(this), 2000);\n        } else {\n          this.resaultsDiv.innerHTML = '';\n        }\n      }\n\n      this.previeousValue = this.searchField.value;\n    }\n  }, {\n    key: \"getResults\",\n    value: function getResults() {\n      this.resaultsDiv.innerHTML = 'Results here';\n      this.isSpinnerVisible = false;\n    }\n  }, {\n    key: \"keyPressDispatcher\",\n    value: function keyPressDispatcher(event) {\n      if (event.key === 'Enter' && !this.overlayIsVisible) {\n        this.openOverlay();\n      } else if (event.key === 'Escape' && this.overlayIsVisible) {\n        this.closeOverlay();\n      }\n    } // 3.Methods\n\n  }, {\n    key: \"openOverlay\",\n    value: function openOverlay() {\n      document.body.classList.add('body-no-scroll');\n      this.searchOverlay.classList.add('search-overlay--active');\n      this.overlayIsVisible = true;\n    }\n  }, {\n    key: \"closeOverlay\",\n    value: function closeOverlay() {\n      document.body.classList.remove('body-no-scroll');\n      this.searchOverlay.classList.remove('search-overlay--active');\n      this.overlayIsVisible = false;\n    }\n  }]);\n\n  return Search;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21vZHVsZXMvc2VhcmNoLmpzP2NmNTciXSwibmFtZXMiOlsiU2VhcmNoIiwib3BlbkJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlQnRuIiwic2VhcmNoT3ZlcmxheSIsInNlYXJjaEZpZWxkIiwicmVzYXVsdHNEaXYiLCJldmVudHMiLCJvdmVybGF5SXNWaXNpYmxlIiwidHlwaW5nVGltZXIiLCJpc1NwaW5uZXJWaXNpYmxlIiwicHJldmllb3VzVmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk92ZXJsYXkiLCJiaW5kIiwiY2xvc2VPdmVybGF5Iiwia2V5UHJlc3NEaXNwYXRjaGVyIiwidHlwaW5nTG9naWMiLCJ2YWx1ZSIsImNsZWFyVGltZW91dCIsImlubmVySFRNTCIsInNldFRpbWVvdXQiLCJnZXRSZXN1bHRzIiwiZXZlbnQiLCJrZXkiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQU1BLE07QUFDTDtBQUNBLG9CQUFjO0FBQUE7O0FBQ2IsU0FBS0MsT0FBTCxHQUFlQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWhCO0FBQ0EsU0FBS0UsYUFBTCxHQUFxQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjtBQUNBLFNBQUtHLFdBQUwsR0FBbUJKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLFNBQUtJLFdBQUwsR0FBbUJMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBbkI7QUFDQSxTQUFLSyxNQUFMO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCO0FBQ0EsRyxDQUVEOzs7Ozs2QkFDUztBQUNSLFdBQUtYLE9BQUwsQ0FBYVksZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkM7QUFDQSxXQUFLWCxRQUFMLENBQWNTLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtHLFlBQUwsQ0FBa0JELElBQWxCLENBQXVCLElBQXZCLENBQXhDO0FBQ0FiLGNBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUMsS0FBS0ksa0JBQUwsQ0FBd0JGLElBQXhCLENBQTZCLElBQTdCLENBQXJDO0FBQ0EsV0FBS1QsV0FBTCxDQUFpQk8sZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLEtBQUtLLFdBQUwsQ0FBaUJILElBQWpCLENBQXNCLElBQXRCLENBQTNDO0FBQ0E7OztrQ0FFYTtBQUNiLFVBQUksS0FBS1QsV0FBTCxDQUFpQmEsS0FBakIsS0FBMkIsS0FBS1AsY0FBcEMsRUFBb0Q7QUFDbkRRLG9CQUFZLENBQUMsS0FBS1YsV0FBTixDQUFaOztBQUNBLFlBQUksS0FBS0osV0FBTCxDQUFpQmEsS0FBckIsRUFBNEI7QUFDM0IsY0FBSSxDQUFDLEtBQUtSLGdCQUFWLEVBQTRCO0FBQzNCLGlCQUFLSixXQUFMLENBQWlCYyxTQUFqQixHQUE2QixvQ0FBN0I7QUFDQSxpQkFBS1YsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDQTs7QUFDRCxlQUFLRCxXQUFMLEdBQW1CWSxVQUFVLENBQUMsS0FBS0MsVUFBTCxDQUFnQlIsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBRCxFQUE2QixJQUE3QixDQUE3QjtBQUNBLFNBTkQsTUFNTztBQUNOLGVBQUtSLFdBQUwsQ0FBaUJjLFNBQWpCLEdBQTZCLEVBQTdCO0FBQ0E7QUFDRDs7QUFDRCxXQUFLVCxjQUFMLEdBQXNCLEtBQUtOLFdBQUwsQ0FBaUJhLEtBQXZDO0FBQ0E7OztpQ0FFWTtBQUNaLFdBQUtaLFdBQUwsQ0FBaUJjLFNBQWpCLEdBQTZCLGNBQTdCO0FBQ0EsV0FBS1YsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQTs7O3VDQUVrQmEsSyxFQUFPO0FBQ3pCLFVBQUlBLEtBQUssQ0FBQ0MsR0FBTixLQUFjLE9BQWQsSUFBeUIsQ0FBQyxLQUFLaEIsZ0JBQW5DLEVBQXFEO0FBQ3BELGFBQUtLLFdBQUw7QUFDQSxPQUZELE1BRU8sSUFBSVUsS0FBSyxDQUFDQyxHQUFOLEtBQWMsUUFBZCxJQUEwQixLQUFLaEIsZ0JBQW5DLEVBQXFEO0FBQzNELGFBQUtPLFlBQUw7QUFDQTtBQUNELEssQ0FFRDs7OztrQ0FDYztBQUNiZCxjQUFRLENBQUN3QixJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLGdCQUE1QjtBQUNBLFdBQUt2QixhQUFMLENBQW1Cc0IsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLHdCQUFqQztBQUNBLFdBQUtuQixnQkFBTCxHQUF3QixJQUF4QjtBQUNBOzs7bUNBRWM7QUFDZFAsY0FBUSxDQUFDd0IsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxNQUF4QixDQUErQixnQkFBL0I7QUFDQSxXQUFLeEIsYUFBTCxDQUFtQnNCLFNBQW5CLENBQTZCRSxNQUE3QixDQUFvQyx3QkFBcEM7QUFDQSxXQUFLcEIsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQTs7Ozs7O0FBRWFULHFFQUFmIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3NyYy9tb2R1bGVzL3NlYXJjaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCB7XG5cdC8vIDEuIERlc2NyaWJlXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMub3BlbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdHJpZ2dlcicpO1xuXHRcdHRoaXMuY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLW92ZXJsYXlfX2Nsb3NlJyk7XG5cdFx0dGhpcy5zZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1vdmVybGF5Jyk7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdGVybScpO1xuXHRcdHRoaXMucmVzYXVsdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLW92ZXJsYXlfX3Jlc3VsdHMnKTtcblx0XHR0aGlzLmV2ZW50cygpO1xuXHRcdHRoaXMub3ZlcmxheUlzVmlzaWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMudHlwaW5nVGltZXIgPSBudWxsO1xuXHRcdHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMucHJldmllb3VzVmFsdWUgPSBudWxsO1xuXHR9XG5cblx0Ly8gMi4gRXZlbnRzXG5cdGV2ZW50cygpIHtcblx0XHR0aGlzLm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW5PdmVybGF5LmJpbmQodGhpcykpO1xuXHRcdHRoaXMuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlT3ZlcmxheS5iaW5kKHRoaXMpKTtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlQcmVzc0Rpc3BhdGNoZXIuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMudHlwaW5nTG9naWMuYmluZCh0aGlzKSk7XG5cdH1cblxuXHR0eXBpbmdMb2dpYygpIHtcblx0XHRpZiAodGhpcy5zZWFyY2hGaWVsZC52YWx1ZSAhPT0gdGhpcy5wcmV2aWVvdXNWYWx1ZSkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudHlwaW5nVGltZXIpO1xuXHRcdFx0aWYgKHRoaXMuc2VhcmNoRmllbGQudmFsdWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmlzU3Bpbm5lclZpc2libGUpIHtcblx0XHRcdFx0XHR0aGlzLnJlc2F1bHRzRGl2LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwic3Bpbm5lci1sb2FkZXJcIj48L2Rpdj4nO1xuXHRcdFx0XHRcdHRoaXMuaXNTcGlubmVyVmlzaWJsZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy50eXBpbmdUaW1lciA9IHNldFRpbWVvdXQodGhpcy5nZXRSZXN1bHRzLmJpbmQodGhpcyksIDIwMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5yZXNhdWx0c0Rpdi5pbm5lckhUTUwgPSAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5wcmV2aWVvdXNWYWx1ZSA9IHRoaXMuc2VhcmNoRmllbGQudmFsdWU7XG5cdH1cblxuXHRnZXRSZXN1bHRzKCkge1xuXHRcdHRoaXMucmVzYXVsdHNEaXYuaW5uZXJIVE1MID0gJ1Jlc3VsdHMgaGVyZSc7XG5cdFx0dGhpcy5pc1NwaW5uZXJWaXNpYmxlID0gZmFsc2U7XG5cdH1cblxuXHRrZXlQcmVzc0Rpc3BhdGNoZXIoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmICF0aGlzLm92ZXJsYXlJc1Zpc2libGUpIHtcblx0XHRcdHRoaXMub3Blbk92ZXJsYXkoKTtcblx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5vdmVybGF5SXNWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmNsb3NlT3ZlcmxheSgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIDMuTWV0aG9kc1xuXHRvcGVuT3ZlcmxheSgpIHtcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktbm8tc2Nyb2xsJyk7XG5cdFx0dGhpcy5zZWFyY2hPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1vdmVybGF5LS1hY3RpdmUnKTtcblx0XHR0aGlzLm92ZXJsYXlJc1Zpc2libGUgPSB0cnVlO1xuXHR9XG5cblx0Y2xvc2VPdmVybGF5KCkge1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYm9keS1uby1zY3JvbGwnKTtcblx0XHR0aGlzLnNlYXJjaE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLW92ZXJsYXktLWFjdGl2ZScpO1xuXHRcdHRoaXMub3ZlcmxheUlzVmlzaWJsZSA9IGZhbHNlO1xuXHR9XG59XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/src/modules/search.js\n");

/***/ })

/******/ });