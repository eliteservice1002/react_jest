var _excluded = ["color", "padding", "rounded", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
export var Card = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    color = 'light',
    padding = 'md',
    rounded = 'md',
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    className: classNames('', {
      'bg-inverseBg text-inverseBody1 shadow-lg': color === 'light',
      'bg-primary text-body1': color === 'dark',
      'rounded-sm': rounded === 'sm',
      rounded: rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'p-3': padding === 'sm',
      'p-6': padding === 'md'
    }, className)
  }, props), children);
});
Card.displayName = 'Card';
//# sourceMappingURL=Card.js.map