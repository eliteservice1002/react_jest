var _excluded = ["selected", "disabled", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
export var DetailNavLink = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    selected,
    disabled,
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("a", _extends({
    ref: ref,
    className: classNames('flex flex-col gap-y-3 items-center justify-center h-40 focus:outline-none focus:ring', {
      'bg-accent': selected === true,
      'text-dimmed2': disabled === true,
      'text-link': disabled === false
    }, className)
  }, props), children);
});
DetailNavLink.displayName = 'DetailNavLink';
//# sourceMappingURL=DetailNavLink.js.map