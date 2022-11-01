import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Card } from '../Card';
import { isFunction } from '../../utils';
export var Dropdown = _ref => {
  var {
    button,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Menu, {
    as: "div",
    className: "relative"
  }, /*#__PURE__*/React.createElement(Menu.Button, {
    as: React.Fragment
  }, _ref2 => {
    var {
      open
    } = _ref2;
    return /*#__PURE__*/React.cloneElement(button, {
      open
    });
  }), /*#__PURE__*/React.createElement(Transition, {
    as: React.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /*#__PURE__*/React.createElement(Menu.Items, {
    as: React.Fragment
  }, _ref3 => {
    var {
      open
    } = _ref3;
    return /*#__PURE__*/React.createElement(Card, {
      rounded: "sm",
      padding: "none",
      className: "flex flex-col absolute right-0 z-10"
    }, isFunction(children) ? children({
      open
    }) : children);
  })));
};
//# sourceMappingURL=Dropdown.js.map