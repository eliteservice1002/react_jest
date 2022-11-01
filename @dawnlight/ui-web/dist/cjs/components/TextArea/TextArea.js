"use strict";

exports.__esModule = true;
exports.TextArea = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _commonStyles = /*#__PURE__*/require("../../styles/common-styles");

var _excluded = ["className", "textareaClassName", "bottomText", "color", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextArea = function TextArea(_ref) {
  var className = _ref.className,
      textareaClassName = _ref.textareaClassName,
      _ref$bottomText = _ref.bottomText,
      bottomText = _ref$bottomText === void 0 ? '' : _ref$bottomText,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      isFocused = _useState[0],
      setIsFocused = _useState[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('w-full flex-1 flex flex-col', {
      ring: isFocused
    }, color === 'dark' ? _commonStyles.formInputStylesDark : _commonStyles.formInputStylesLight, className)
  }, /*#__PURE__*/_react["default"].createElement("textarea", _extends({
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    onBlur: function onBlur() {
      return setIsFocused(false);
    },
    className: (0, _classnames["default"])('flex-1 w-full bg-transparent focus:outline-none', textareaClassName)
  }, props), children), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-dimmed2"
  }, bottomText));
};

exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map