var _excluded = ["isOpen", "onClose", "showOverlay", "children", "initialFocus"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
export var Dialog = _ref => {
  var {
    isOpen,
    onClose,
    showOverlay,
    children,
    initialFocus
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Transition, {
    appear: true,
    show: isOpen,
    as: Fragment
  }, /*#__PURE__*/React.createElement(HeadlessDialog, _extends({
    onClose: onClose
  }, props, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    initialFocus: initialFocus
  }), /*#__PURE__*/React.createElement(Transition.Child, {
    as: "div",
    enter: "ease-out duration-100",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, showOverlay && /*#__PURE__*/React.createElement(HeadlessDialog.Overlay, {
    className: "fixed inset-0 bg-black opacity-30"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center min-h-screen"
  }, children))));
};
//# sourceMappingURL=Dialog.js.map