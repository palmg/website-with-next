"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function get() {
    return _application.default;
  }
});
Object.defineProperty(exports, "Document", {
  enumerable: true,
  get: function get() {
    return _document.default;
  }
});
Object.defineProperty(exports, "serverPreload", {
  enumerable: true,
  get: function get() {
    return _serverPreload.default;
  }
});
Object.defineProperty(exports, "router", {
  enumerable: true,
  get: function get() {
    return _router.default;
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _link.default;
  }
});
Object.defineProperty(exports, "Anchor", {
  enumerable: true,
  get: function get() {
    return _anchor.default;
  }
});
exports.default = void 0;

var _application = _interopRequireDefault(require("./lib/application"));

var _document = _interopRequireDefault(require("./lib/document"));

var _serverPreload = _interopRequireDefault(require("./lib/serverPreload"));

var _router = _interopRequireDefault(require("./lib/router"));

var _link = _interopRequireDefault(require("./lib/route/link"));

var _anchor = _interopRequireDefault(require("./lib/route/anchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = {};
Index.App = _application.default;
Index.Document = _document.default;
Index.serverPreload = _serverPreload.default;
Index.router = _router.default;
Index.Link = _link.default;
Index.Anchor = _anchor.default;
var _default = Index;
exports.default = _default;