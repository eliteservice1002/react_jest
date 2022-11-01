var _excluded = ["selectedIndex", "index", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
export var TabPanel = _ref => {
  var {
    selectedIndex,
    index,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return selectedIndex === index && /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    hidden: selectedIndex !== index
  }, props), children);
};
//# sourceMappingURL=TabPanel.js.map