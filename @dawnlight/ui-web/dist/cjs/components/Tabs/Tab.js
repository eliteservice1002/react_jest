"use strict";

exports.__esModule = true;
exports.Tab = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _excluded = ["selectedIndex", "index", "isFocused", "tabsHaveNativeFocus", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tab = function Tab(_ref) {
  var _ref$selectedIndex = _ref.selectedIndex,
      selectedIndex = _ref$selectedIndex === void 0 ? 0 : _ref$selectedIndex,
      index = _ref.index,
      isFocused = _ref.isFocused,
      tabsHaveNativeFocus = _ref.tabsHaveNativeFocus,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": selectedIndex === index,
    tabIndex: selectedIndex === index ? 0 : -1,
    className: (0, _classnames["default"])('focus:outline-none px-6', {
      'text-link': selectedIndex === index,
      'text-body2': selectedIndex !== index,
      'focus:bg-lighter': isFocused && selectedIndex === index,
      'bg-lighter': tabsHaveNativeFocus && isFocused
    })
  }, props), children);
};

exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map