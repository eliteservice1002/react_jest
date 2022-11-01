var _excluded = ["name", "value", "checked", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React, { useState } from 'react';
import { RadioChecked, RadioUnchecked } from '../../icons';
export var RadioButton = _ref => {
  var {
    name,
    value,
    checked,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var [isFocused, setIsFocused] = useState(false);

  var handleFocus = e => {
    if (e.type === 'focus') {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, checked ? /*#__PURE__*/React.createElement(RadioChecked, {
    className: classNames('text-accent rounded-full', {
      ring: isFocused
    })
  }) : /*#__PURE__*/React.createElement(RadioUnchecked, {
    className: classNames('text-body2 rounded-full', {
      ring: isFocused
    })
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    className: classNames('opacity-0 absolute top-0 left-0', className),
    onFocus: handleFocus,
    onBlur: handleFocus
  }, props)));
};
//# sourceMappingURL=RadioButton.js.map