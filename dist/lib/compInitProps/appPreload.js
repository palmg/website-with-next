"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.executeAppPreload = void 0;

var _react = _interopRequireDefault(require("react"));

var _initProps = _interopRequireDefault(require("../util/initProps"));

var _applicationContext = _interopRequireDefault(require("../applicationContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appInitProps = new _initProps.default();
var executeAppPreload = appInitProps.executeFoo;
exports.executeAppPreload = executeAppPreload;

var appPreload = function appPreload(foo) {
  return function (OriginComp) {
    appInitProps.registerFoo(foo);
    return function (props) {
      return _react.default.createElement(_applicationContext.default.Consumer, null, function (value) {
        var params = Object.assign({}, props, value.appProps);
        return _react.default.createElement(OriginComp, params);
      });
    };
  };
};

var _default = appPreload;
exports.default = _default;