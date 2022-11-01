var _excluded = ["className", "textareaClassName", "bottomText", "color", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React, { useState } from 'react';
import { formInputStylesDark, formInputStylesLight } from '../../styles/common-styles';
export var TextArea = _ref => {
  var {
    className,
    textareaClassName,
    bottomText = '',
    color = 'dark',
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var [isFocused, setIsFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('w-full flex-1 flex flex-col', {
      ring: isFocused
    }, color === 'dark' ? formInputStylesDark : formInputStylesLight, className)
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: classNames('flex-1 w-full bg-transparent focus:outline-none', textareaClassName)
  }, props), children), /*#__PURE__*/React.createElement("span", {
    className: "text-dimmed2"
  }, bottomText));
};
//# sourceMappingURL=TextArea.js.map