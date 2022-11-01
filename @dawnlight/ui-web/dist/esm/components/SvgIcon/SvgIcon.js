var _excluded = ["className", "children", "width", "height"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
export var SvgIcon = _ref => {
  var {
    className,
    children,
    width = 24,
    height = 24
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    className: classNames('fill-current w-1em h-1em inline-block text-2xl transition-all flex-shrink-0 select-none', className),
    focusable: "false",
    viewBox: "0 0 " + width + " " + height,
    "aria-hidden": "true"
  }, props), children);
};
//# sourceMappingURL=SvgIcon.js.map