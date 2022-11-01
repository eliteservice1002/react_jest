"use strict";

exports.__esModule = true;
exports.IconButton = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _commonStyles = /*#__PURE__*/require("../../styles/common-styles");

var _excluded = ["label", "variant", "className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'bare' : _ref$variant,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var visuallyHidden = /*#__PURE__*/_react["default"].createElement("span", {
    className: "visually-hidden"
  }, label);

  return variant === 'filled' ? /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: (0, _classnames["default"])(_commonStyles.iconButtonStyles, className),
    ref: ref
  }, props), children, visuallyHidden) : /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: className,
    ref: ref
  }, props), children, visuallyHidden);
});

exports.IconButton = IconButton;
IconButton.displayName = 'IconButton';
//# sourceMappingURL=IconButton.js.map