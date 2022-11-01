var _excluded = ["children", "id", "mask", "color", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import InputMask from 'react-input-mask';
import { formInputStylesDark, formInputStylesLight } from '../../styles/common-styles';
export var TextField = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    children,
    id,
    mask,
    color = 'dark',
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var classes = classNames('focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-default', color === 'dark' ? formInputStylesDark : formInputStylesLight, className);
  return mask != null ? /*#__PURE__*/React.createElement(InputMask, _extends({
    ref: ref,
    id: id,
    mask: mask,
    className: classes
  }, props)) : /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: id,
    type: "text",
    className: classes
  }, props), children);
});
TextField.displayName = 'TextField';
//# sourceMappingURL=TextField.js.map