var _excluded = ["selectedIndex", "index", "isFocused", "tabsHaveNativeFocus", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React from 'react';
export var Tab = _ref => {
  var {
    selectedIndex = 0,
    index,
    isFocused,
    tabsHaveNativeFocus,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": selectedIndex === index,
    tabIndex: selectedIndex === index ? 0 : -1,
    className: classNames('focus:outline-none px-6', {
      'text-link': selectedIndex === index,
      'text-body2': selectedIndex !== index,
      'focus:bg-lighter': isFocused && selectedIndex === index,
      'bg-lighter': tabsHaveNativeFocus && isFocused
    })
  }, props), children);
};
//# sourceMappingURL=Tab.js.map