"use strict";

exports.__esModule = true;
exports.DetailNavList = exports.detailNavListStyles = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _excluded = ["className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var detailNavListStyles = 'flex flex-col m-0 p-0';
exports.detailNavListStyles = detailNavListStyles;

var DetailNavList = function DetailNavList(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _classnames["default"])(detailNavListStyles, className)
  }, props), children);
};

exports.DetailNavList = DetailNavList;
//# sourceMappingURL=DetailNavList.js.map