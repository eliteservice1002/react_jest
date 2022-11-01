"use strict";

exports.__esModule = true;
exports.SelectOption = void 0;

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _icons = /*#__PURE__*/require("../../icons");

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SelectOption = function SelectOption(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Option, _extends({}, props, {
    as: _react.Fragment
  }), function (_ref2) {
    var active = _ref2.active,
        selected = _ref2.selected;
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: (0, _classnames["default"])('p-3', {
        'bg-accent text-body1': active === true,
        'bg-inverseBackground text-inverseBody1': active === false
      }, className)
    }, selected && /*#__PURE__*/_react["default"].createElement(_icons.CheckIcon, null), children);
  });
};

exports.SelectOption = SelectOption;
//# sourceMappingURL=SelectOption.js.map