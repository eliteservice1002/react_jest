var _excluded = ["children", "id", "label", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import classNames from 'classnames';
import { SearchIcon } from '../../icons';
export var SearchField = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    children,
    id,
    label,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: "visually-hidden"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: id,
    type: "text",
    className: classNames('rounded-full py-3 px-6 outline-0 bg-form text-body1 pr-12 focus:outline-none focus:ring', className)
  }, props), children), /*#__PURE__*/React.createElement(SearchIcon, {
    className: "absolute right-3 h-full text-body2"
  }));
});
SearchField.displayName = 'SearchField';
//# sourceMappingURL=SearchField.js.map