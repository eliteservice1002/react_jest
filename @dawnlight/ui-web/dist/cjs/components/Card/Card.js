"use strict";

exports.__esModule = true;
exports.Card = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _excluded = ["color", "padding", "rounded", "className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'light' : _ref$color,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'md' : _ref$padding,
      _ref$rounded = _ref.rounded,
      rounded = _ref$rounded === void 0 ? 'md' : _ref$rounded,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: ref,
    className: (0, _classnames["default"])('', {
      'bg-inverseBg text-inverseBody1 shadow-lg': color === 'light',
      'bg-primary text-body1': color === 'dark',
      'rounded-sm': rounded === 'sm',
      rounded: rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'p-3': padding === 'sm',
      'p-6': padding === 'md'
    }, className)
  }, props), children);
});

exports.Card = Card;
Card.displayName = 'Card';
//# sourceMappingURL=Card.js.map