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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 603);
/******/ })
/************************************************************************/
/******/ ({

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function hexToRgba(hex, opacity){
  var opacity = opacity || 100;
  var hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ', ' + g + ' ,' + b + ', ' + opacity / 100 + ')';
};


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(513);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var open_media_uploader_image = function open_media_uploader_image() {
  var media_uploader = wp.media({
    frame: "post",
    state: "insert",
    multiple: false
  });

  var promise = new _promise2.default(function (resolve, reject) {
    media_uploader.on("insert", function () {
      var json = media_uploader.state().get("selection").first().toJSON();
      return resolve(json);
    });
  });

  media_uploader.open();

  return promise;
};

var section = function section() {

  $('.uploader').on('click', function (e) {

    open_media_uploader_image().then(function (res) {
      $(e.currentTarget).val(res.url);
    });
  });
};

exports.default = section;

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var state = {
  awaiting: 0,
  resolved: 1,
  rejected: 2
};

var Promise = function () {
  function Promise(cb) {
    _classCallCheck(this, Promise);

    this.callbacks = [];
    this.state = state.awaiting;
    this.resolvedTo = null;
    this.rejectedTo = null;
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this._next = this._next.bind(this);
    this.then = this.then.bind(this);
    cb(this.resolve, this.reject);
  }

  _createClass(Promise, [{
    key: "resolve",
    value: function resolve(result) {
      this.state = state.resolved;
      this.resolvedTo = result;
      this._next(result);
    }
  }, {
    key: "reject",
    value: function reject(err) {
      this.state = state.rejected;
      this.rejectedTo = err;
      this._next(null, err);
    }
  }, {
    key: "_unwrap",
    value: function _unwrap(promise, resolve) {
      var _this = this;

      if (promise instanceof Promise) {
        promise.then(function (result) {
          _this._unwrap(result, resolve);
        });
        return;
      }
      resolve(promise);
    }
    //open up all callbacks that were waiting on this given promise. (.thened on it)

  }, {
    key: "_next",
    value: function _next() {
      var resolution = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
      var rejection = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      //return a new promise...
      while (this.callbacks.length > 0) {
        var deferred = this.callbacks.shift();
        if (deferred) {
          var didResolve = deferred.didResolve;
          var didReject = deferred.didReject;
          var reject = deferred.reject;
          var resolve = deferred.resolve;

          switch (this.state) {
            case state.resolved:
              var promise = didResolve(resolution); //TODO: unwrap potential promise promise being returned from cb.
              this._unwrap(promise, resolve);
              break;
            case state.rejected:
              reject(didReject(rejection));
              break;
          }
        }
      }
    }
  }, {
    key: "then",
    value: function then(didResolve, didReject) {
      var _this2 = this;

      //only go forward with .then once we've finished up with the previous promise.
      //the callback inside of .thens can also be async.
      //if the returned callback has a promise.. we continue down the chain. and provide it as the resolution or rejection to the next then statement.
      // console.log('about to handle ', didResolve, this.state, this.resolvedTo)
      return new Promise(function (resolve, reject) {
        if (_this2.state == state.resolved) {
          var promise = didResolve(_this2.resolvedTo);
          _this2._unwrap(promise, resolve);
        } else if (_this2.state == state.rejected) {
          // console.log('rejecting')
          reject(didReject(_this2.rejectedTo)); //TODO: need?
        } else {
          //defer this wrapped promise.
          // console.log('deferring ', didResolve)
          var defer = {
            didResolve: didResolve,
            didReject: didReject,
            resolve: resolve,
            reject: reject
          };
          _this2.callbacks = [].concat(_toConsumableArray(_this2.callbacks), [defer]);
        }
      });
    }
  }]);

  return Promise;
}();

exports.default = Promise;

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _uploader = __webpack_require__(227);

var _uploader2 = _interopRequireDefault(_uploader);

var _religions_chart = __webpack_require__(76);

var _religions_chart2 = _interopRequireDefault(_religions_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(function () {
  (0, _uploader2.default)();
  (0, _religions_chart2.default)();

  new Vue({
    el: '#metaboxes-report'
  });
});

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = religionChart;

var _hexRgba = __webpack_require__(133);

var _hexRgba2 = _interopRequireDefault(_hexRgba);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function religionChart() {

    Vue.component('religions-chart', {
        template: '<div id="religions-chart" style="width: 100%; height: 400px; margin: 0 auto"></div>',
        props: ['religions', 'colors'],

        ready: function ready() {
            var religions = this.religions;
            var colors = this.colors;
            var seriesData = [];
            var subSeriesData = [];

            function createData(color, name, y, brighten) {
                var newOb = {};
                var nColor = brighten ? Highcharts.Color(color).brighten(0.2).get() : Highcharts.Color(color).get();

                newOb['color'] = nColor;
                newOb['name'] = name;
                newOb['y'] = parseFloat(y);
                return newOb;
            }

            function getData(obj, key) {
                var religion = obj[key];
                var color = religion.color;
                var newOb = createData(religion.color, religion.name, religion.percent);

                if (religion.sub && Object.keys(religion.sub).length > 0) {
                    subSeriesData = subSeriesData.concat(Object.keys(religion.sub).map(function (key) {
                        return createData(color, religion.sub[key].name, religion.sub[key].percent, true);
                    }));
                } else {
                    var newSubOb = createData(color, religion.name, religion.percent, true);
                    subSeriesData = subSeriesData.concat([newSubOb]);
                }

                return newOb;
            }

            seriesData = Object.keys(religions).map(function (key) {
                return getData(religions, key);
            });

            $('#religions-chart').highcharts({
                chart: {
                    type: 'pie',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    style: {
                        fontFamily: 'Roboto Condensed'
                    }
                },
                title: {
                    text: ''
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                plotOptions: {
                    pie: {
                        shadow: false,
                        center: ['50%', '50%']
                    }
                },
                tooltip: {
                    valueSuffix: '%'
                },
                series: [{
                    name: ':',
                    data: seriesData,
                    size: '60%',
                    dataLabels: {
                        formatter: function formatter() {
                            return this.y > 5 ? this.point.name : null;
                        },
                        color: '#ffffff',
                        distance: -30
                    }
                }, {
                    name: ':',
                    data: subSeriesData,
                    size: '80%',
                    innerSize: '60%',
                    dataLabels: {
                        formatter: function formatter() {
                            // display only if larger than 1
                            return '<b>' + this.point.name + ':</b> ' + this.y + '%';
                        }
                    }
                }]
            });
        }
    });
}

/***/ })

/******/ });