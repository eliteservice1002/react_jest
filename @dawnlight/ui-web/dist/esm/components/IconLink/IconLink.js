var _excluded = ["label", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
import { iconButtonStyles } from '../../styles/common-styles';
export var IconLink = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    label,
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("a", _extends({
    className: classNames(iconButtonStyles, className),
    ref: ref
  }, props), children, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, label));
});
IconLink.displayName = 'IconLink';
//# sourceMappingURL=IconLink.js.map