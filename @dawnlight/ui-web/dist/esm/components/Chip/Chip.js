var _excluded = ["variant", "rounded", "color", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
export var Chip = _ref => {
  var {
    variant = 'relaxed',
    rounded = 'm',
    color = 'primary',
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames({
      'inline-block': true,
      rounded: rounded,
      'bg-primary': color === 'primary',
      'bg-primaryLighter': color === 'lighter',
      'bg-darker': color === 'darker',
      'bg-warning': color === 'warning',
      'bg-critical': color === 'critical',
      'py-3 px-6': variant === 'relaxed',
      'p-1': variant === 'compact'
    }, className)
  }, props), children);
};
//# sourceMappingURL=Chip.js.map