'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Inject = require('./Inject');

var _Inject2 = _interopRequireDefault(_Inject);

var _load = require('./load');

var load = _interopRequireWildcard(_load);

var _compileProvider = require('./compileProvider');

var _compileProvider2 = _interopRequireDefault(_compileProvider);

exports.Inject = _Inject2['default'];
exports.load = load;
exports.compileProvider = _compileProvider2['default'];