"use strict";

exports.__esModule = true;
exports.DetailNavLink = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _excluded = ["selected", "disabled", "className", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DetailNavLink = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var selected = _ref.selected,
      disabled = _ref.disabled,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    ref: ref,
    className: (0, _classnames["default"])('flex flex-col gap-y-3 items-center justify-center h-40 focus:outline-none focus:ring', {
      'bg-accent': selected === true,
      'text-dimmed2': disabled === true,
      'text-link': disabled === false
    }, className)
  }, props), children);
});

exports.DetailNavLink = DetailNavLink;
DetailNavLink.displayName = 'DetailNavLink';
//# sourceMappingURL=DetailNavLink.js.map