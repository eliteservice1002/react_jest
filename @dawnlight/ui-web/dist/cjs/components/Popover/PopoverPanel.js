"use strict";

exports.__esModule = true;
exports.PopoverPanel = exports.popoverPanelStyles = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var popoverPanelStyles = 'absolute z-10 right-0';
exports.popoverPanelStyles = popoverPanelStyles;

var PopoverPanel = function PopoverPanel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-out",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Popover.Panel, _extends({
    className: (0, _classnames["default"])(popoverPanelStyles, className)
  }, props), children));
};

exports.PopoverPanel = PopoverPanel;
//# sourceMappingURL=PopoverPanel.js.map