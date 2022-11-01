"use strict";

exports.__esModule = true;
exports.RadioChecked = void 0;

var _SvgIcon = /*#__PURE__*/require("../components/SvgIcon/SvgIcon");

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioChecked = function RadioChecked(props) {
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon.SvgIcon, props, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "10"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.8047 14.1953L17 8L17.9428 8.94281L10.8047 16.0809L7 12.2761L7.94281 11.3333L10.8047 14.1953Z",
    fill: "white"
  }));
};

exports.RadioChecked = RadioChecked;
//# sourceMappingURL=RadioChecked.js.map