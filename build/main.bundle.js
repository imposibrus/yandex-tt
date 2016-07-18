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
	
	var clipPathRatings = document.querySelectorAll('.rating');
	
	for (var i = 0; i < clipPathRatings.length; i++) {
	  var ratingNode = clipPathRatings[i];
	  new _Rating.Rating(ratingNode);
	}
	
	new _Rating.RatingSVG(document.querySelector('.rating-svg'), { childSelector: '.svg-star' });
	new _Rating.RatingSVG(document.querySelector('.rating-svg.blue'), { childSelector: '.svg-star', activeBgGradient: '#starBlueGradient' });

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Rating = exports.Rating = function Rating(element) {
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
	
	var RatingSVG = exports.RatingSVG = function () {
	  function RatingSVG(element) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _classCallCheck(this, RatingSVG);
	
	    this.ratingStars = [];
	    this.options = {};
	
	    if (element instanceof HTMLElement !== true) {
	      throw new Error('`element` should be `HTMLElement`');
	    }
	
	    var defaultOptions = {
	      childSelector: 'span',
	      defaultBgGradient: '#starGrayGradient',
	      activeBgGradient: '#starYellowGradient'
	    };
	
	    this.options = Object.assign({}, defaultOptions, options);
	
	    this.ratingStars = [].slice.call(element.querySelectorAll(this.options.childSelector));
	
	    var that = this,
	        active = this.ratingStars.filter(function (e) {
	      return e.classList.contains('active');
	    });
	
	    for (var i = 0; i < this.ratingStars.length; i++) {
	      var star = this.ratingStars[i];
	
	      star.setAttribute('fill', 'url(' + this.options.defaultBgGradient + ')');
	
	      star.addEventListener('click', function () {
	        for (var _i2 = 0; _i2 < that.ratingStars.length; _i2++) {
	          var _star2 = that.ratingStars[_i2];
	          this !== _star2 && _star2.classList.remove('active');
	        }
	
	        if (this.classList.contains('active')) {
	          this.classList.remove('active');
	          that.setAllDefault();
	          return;
	        }
	
	        this.classList.add('active');
	
	        this.setAttribute('fill', 'url(' + that.options.activeBgGradient + ')');
	
	        var prev = this,
	            next = this;
	        while ((prev = prev.previousSibling).nodeType === 1) {
	          prev.setAttribute('fill', 'url(' + that.options.activeBgGradient + ')');
	        }
	        while ((next = next.nextSibling).nodeType === 1) {
	          next.setAttribute('fill', 'url(' + that.options.defaultBgGradient + ')');
	        }
	      }, false);
	
	      star.addEventListener('mouseover', function () {
	        this.setAttribute('fill', 'url(' + that.options.activeBgGradient + ')');
	        var prev = this;
	        while ((prev = prev.previousSibling).nodeType === 1) {
	          prev.setAttribute('fill', 'url(' + that.options.activeBgGradient + ')');
	        }
	      }, false);
	
	      star.addEventListener('mouseout', function () {
	        var active = that.ratingStars.filter(function (e) {
	          return e.classList.contains('active');
	        });
	
	        if (active.length) {
	          if (active[0] !== this) {
	            this.setAttribute('fill', 'url(' + that.options.defaultBgGradient + ')');
	          }
	
	          var prev = active[0];
	          while ((prev = prev.previousSibling).nodeType === 1) {
	            prev.setAttribute('fill', 'url(' + that.options.activeBgGradient + ')');
	          }
	
	          var next = active[0];
	          while ((next = next.nextSibling).nodeType === 1) {
	            next.setAttribute('fill', 'url(' + that.options.defaultBgGradient + ')');
	          }
	        } else {
	          that.setAllDefault();
	        }
	      }, false);
	    }
	
	    if (active.length) {
	      var prev = active[0];
	      active[0].setAttribute('fill', 'url(' + this.options.activeBgGradient + ')');
	      while (prev = prev.previousSibling) {
	        if (prev.nodeType !== 1) {
	          continue;
	        }
	        prev.setAttribute('fill', 'url(' + this.options.activeBgGradient + ')');
	      }
	    }
	
	    element.addEventListener('mouseout', function () {
	      this.classList.remove('removed');
	    }, false);
	  }
	
	  _createClass(RatingSVG, [{
	    key: 'setAllDefault',
	    value: function setAllDefault() {
	      for (var i = 0; i < this.ratingStars.length; i++) {
	        var star = this.ratingStars[i];
	        star.setAttribute('fill', 'url(' + this.options.defaultBgGradient + ')');
	      }
	    }
	  }]);

	  return RatingSVG;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map