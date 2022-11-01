"use strict";

exports.__esModule = true;
exports.LinearProgress = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinearProgress = function LinearProgress(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'light' : _ref$color;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('w-80 h-2 relative overflow-hidden', {
      'bg-dimmed2': color === 'light',
      'bg-inverseDimmed2': color === 'dark'
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute w-auto left-0 top-0 bottom-0 bg-accent animate-linearIndeterminate1"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute w-auto left-0 top-0 bottom-0 bg-accent animate-linearIndeterminate2"
  }));
};

exports.LinearProgress = LinearProgress;
//# sourceMappingURL=LinearProgress.js.map