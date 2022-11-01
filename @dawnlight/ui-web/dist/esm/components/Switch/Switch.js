var _excluded = ["label", "onChange", "checked", "disabled"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
export var Switch = _ref => {
  var {
    label,
    onChange,
    checked,
    disabled
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: "relative",
    "aria-label": label
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "sr-only"
  }, props)), /*#__PURE__*/React.createElement("button", _extends({
    onClick: onChange,
    tabIndex: 0,
    className: "block " + (!disabled && checked ? 'bg-accent' : 'bg-form') + " w-14 h-6 rounded-lg focus:outline-none",
    disabled: disabled
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: "dot absolute inset-y-0.5 " + (!disabled && checked ? 'left-3 translate-x-full' : 'left-1') + "   bg-body1 w-5 h-5 rounded-full transition transform pointer-events-none"
  }));
};
//# sourceMappingURL=Switch.js.map