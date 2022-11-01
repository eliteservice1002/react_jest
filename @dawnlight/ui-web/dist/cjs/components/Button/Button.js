"use strict";

exports.__esModule = true;
exports.Button = void 0;

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["variant", "width", "color", "className", "children", "disabled", "as"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'bare' : _ref$variant,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'shrink' : _ref$width,
      color = _ref.color,
      className = _ref.className,
      children = _ref.children,
      disabled = _ref.disabled,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'button' : _ref$as,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0, _react.createElement)(as, _extends({
    ref: ref
  }, as === 'button' && {
    type: 'button'
  }, {
    className: (0, _classnames["default"])('focus:outline-none focus:ring', {
      'opacity-50 cursor-default': disabled,
      'rounded-sm p-3': variant !== 'bare',
      'bg-accent': variant === 'filled' && color === 'accent',
      'bg-accentLight': variant === 'filled' && color === 'accentLight',
      'border-accent': variant === 'outlined' && color === 'accent',
      'border-subtle': variant === 'outlined' && color === 'subtle',
      'text-link': variant !== 'bare' && color !== 'inverseSubtle' && color !== 'accentLight',
      'text-accent': variant !== 'filled' && color === 'accent',
      'text-inverseBody1': color === 'inverseSubtle' || color === 'accentLight',
      border: variant === 'outlined',
      'w-full': width === 'expand',
      'w-44': width === 'fixed'
    }, className),
    disabled: disabled
  }, props), children);
});

exports.Button = Button;
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map