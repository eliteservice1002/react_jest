"use strict";

exports.__esModule = true;
exports.TextField = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _reactInputMask = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react-input-mask"));

var _commonStyles = /*#__PURE__*/require("../../styles/common-styles");

var _excluded = ["children", "id", "mask", "color", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextField = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      mask = _ref.mask,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var classes = (0, _classnames["default"])('focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-default', color === 'dark' ? _commonStyles.formInputStylesDark : _commonStyles.formInputStylesLight, className);
  return mask != null ? /*#__PURE__*/_react["default"].createElement(_reactInputMask["default"], _extends({
    ref: ref,
    id: id,
    mask: mask,
    className: classes
  }, props)) : /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: ref,
    id: id,
    type: "text",
    className: classes
  }, props), children);
});

exports.TextField = TextField;
TextField.displayName = 'TextField';
//# sourceMappingURL=TextField.js.map