"use strict";

exports.__esModule = true;
exports.SvgIcon = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["className", "children", "width", "height"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SvgIcon = function SvgIcon(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 24 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 24 : _ref$height,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    className: (0, _classnames["default"])('fill-current w-1em h-1em inline-block text-2xl transition-all flex-shrink-0 select-none', className),
    focusable: "false",
    viewBox: "0 0 " + width + " " + height,
    "aria-hidden": "true"
  }, props), children);
};

exports.SvgIcon = SvgIcon;
//# sourceMappingURL=SvgIcon.js.map