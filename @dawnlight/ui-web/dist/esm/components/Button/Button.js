var _excluded = ["variant", "width", "color", "className", "children", "disabled", "as"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { createElement } from 'react';
import classNames from 'classnames';
export var Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    variant = 'bare',
    width = 'shrink',
    color,
    className,
    children,
    disabled,
    as = 'button'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/createElement(as, _extends({
    ref: ref
  }, as === 'button' && {
    type: 'button'
  }, {
    className: classNames('focus:outline-none focus:ring', {
      'opacity-50 cursor-default': disabled,
      'rounded-sm p-3': variant !== 'bare',
      'bg-accent': variant === 'filled' && color === 'accent',
      'bg-accentLight': variant === 'filled' && color === 'accentLight',
      'border-accent': variant === 'outlined' && color === 'accent',
      'border-subtle': variant === 'outlined' && color === 'subtle',
      'text-link': variant !== 'bare' && color !== 'inverseSubtle' && color !== 'accentLight',
      'text-accent': variant !== 'filled' && color === 'accent',
      'text-inverseBody1': color === 'inverseSubtle' || color === 'accentLight',
      border: variant === 'outlined',
      'w-full': width === 'expand',
      'w-44': width === 'fixed'
    }, className),
    disabled: disabled
  }, props), children);
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map