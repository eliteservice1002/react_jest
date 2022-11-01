var _excluded = ["label", "variant", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import { iconButtonStyles } from '../../styles/common-styles';
export var IconButton = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    label,
    variant = 'bare',
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var visuallyHidden = /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, label);
  return variant === 'filled' ? /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: classNames(iconButtonStyles, className),
    ref: ref
  }, props), children, visuallyHidden) : /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: className,
    ref: ref
  }, props), children, visuallyHidden);
});
IconButton.displayName = 'IconButton';
//# sourceMappingURL=IconButton.js.map