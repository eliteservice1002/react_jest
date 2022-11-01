"use strict";

exports.__esModule = true;
exports.Chip = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["variant", "rounded", "color", "className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'relaxed' : _ref$variant,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? 'm' : _ref$rounded,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])({
      'inline-block': true,
      rounded: rounded,
      'bg-primary': color === 'primary',
      'bg-primaryLighter': color === 'lighter',
      'bg-darker': color === 'darker',
      'bg-warning': color === 'warning',
      'bg-critical': color === 'critical',
      'py-3 px-6': variant === 'relaxed',
      'p-1': variant === 'compact'
    }, className)
  }, props), children);
};

exports.Chip = Chip;
//# sourceMappingURL=Chip.js.map