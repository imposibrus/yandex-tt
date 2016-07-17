/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Rating = __webpack_require__(1);
	
	var _Rating2 = _interopRequireDefault(_Rating);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var clipPathRatings = document.querySelectorAll('.rating');
	
	for (var i = 0; i < clipPathRatings.length; i++) {
	  var ratingNode = clipPathRatings[i];
	  new _Rating2.default(ratingNode);
	}
	
	var SVGRatings = document.querySelectorAll('.rating-svg');
	
	for (var _i = 0; _i < SVGRatings.length; _i++) {
	  var _ratingNode = SVGRatings[_i];
	  new _Rating2.default(_ratingNode, { childSelector: '.svg-star' });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rating = function Rating(element) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? { childSelector: 'span' } : arguments[1];
	
	  _classCallCheck(this, Rating);
	
	  this.ratingStars = [];
	
	  if (element instanceof HTMLElement !== true) {
	    throw new Error('`element` should be `HTMLElement`');
	  }
	
	  this.ratingStars = element.querySelectorAll(options.childSelector);
	
	  var that = this;
	
	  for (var i = 0; i < this.ratingStars.length; i++) {
	    var star = this.ratingStars[i];
	
	    star.addEventListener('click', function () {
	      for (var _i = 0; _i < that.ratingStars.length; _i++) {
	        var _star = that.ratingStars[_i];
	        this !== _star && _star.classList.remove('active');
	      }
	
	      if (!this.classList.toggle('active')) {
	        element.classList.add('removed');
	      }
	    }, false);
	  }
	
	  element.addEventListener('mouseout', function () {
	    this.classList.remove('removed');
	  }, false);
	};
	
	exports.default = Rating;

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map