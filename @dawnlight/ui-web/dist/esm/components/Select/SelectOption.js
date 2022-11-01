var _excluded = ["className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '../../icons';
import classNames from 'classnames';
export var SelectOption = _ref => {
  var {
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Listbox.Option, _extends({}, props, {
    as: Fragment
  }), _ref2 => {
    var {
      active,
      selected
    } = _ref2;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('p-3', {
        'bg-accent text-body1': active === true,
        'bg-inverseBackground text-inverseBody1': active === false
      }, className)
    }, selected && /*#__PURE__*/React.createElement(CheckIcon, null), children);
  });
};
//# sourceMappingURL=SelectOption.js.map