import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { formInputStylesDark, formInputStylesLight } from '../../styles/common-styles';
import { ArrowDownIcon } from '../../icons';
import classNames from 'classnames';
export var Select = _ref => {
  var {
    id,
    onChange,
    value,
    displayText,
    disabled,
    color = 'dark',
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Listbox, {
    value: value,
    onChange: onChange,
    disabled: disabled
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Listbox.Button, {
    id: id,
    className: classNames({
      [formInputStylesDark]: color === 'dark',
      [formInputStylesLight]: color === 'light'
    }, 'w-full flex justify-between focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-default truncate')
  }, displayText, /*#__PURE__*/React.createElement(ArrowDownIcon, null)), /*#__PURE__*/React.createElement(Transition, {
    as: Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement(Listbox.Options, {
    className: "absolute z-10 w-full overflow-auto max-h-60 border border-darker bg-inverseBg shadow-lg rounded text-inverseBody1 focus:outline-none focus:ring"
  }, active => React.Children.map(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        active
      });
    }

    return child;
  })))));
};
//# sourceMappingURL=Select.js.map