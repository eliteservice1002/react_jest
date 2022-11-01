"use strict";

exports.__esModule = true;
exports.SearchField = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _icons = /*#__PURE__*/require("../../icons");

var _excluded = ["children", "id", "label", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SearchField = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      id = _ref.id,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id,
    className: "visually-hidden"
  }, label), /*#__PURE__*/_react["default"].createElement("input", _extends({
    ref: ref,
    id: id,
    type: "text",
    className: (0, _classnames["default"])('rounded-full py-3 px-6 outline-0 bg-form text-body1 pr-12 focus:outline-none focus:ring', className)
  }, props), children), /*#__PURE__*/_react["default"].createElement(_icons.SearchIcon, {
    className: "absolute right-3 h-full text-body2"
  }));
});

exports.SearchField = SearchField;
SearchField.displayName = 'SearchField';
//# sourceMappingURL=SearchField.js.map