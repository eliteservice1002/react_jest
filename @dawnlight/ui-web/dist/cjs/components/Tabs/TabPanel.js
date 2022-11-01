"use strict";

exports.__esModule = true;
exports.TabPanel = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _excluded = ["selectedIndex", "index", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabPanel = function TabPanel(_ref) {
  var selectedIndex = _ref.selectedIndex,
      index = _ref.index,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return selectedIndex === index && /*#__PURE__*/_react["default"].createElement("div", _extends({
    role: "tabpanel",
    hidden: selectedIndex !== index
  }, props), children);
};

exports.TabPanel = TabPanel;
//# sourceMappingURL=TabPanel.js.map