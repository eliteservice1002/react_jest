import React from 'react';
import { Dialog } from './Dialog';
import { Card } from '../Card';
import { Button } from '../Button';
import { typographyStyles } from '../../styles/common-styles';
import classNames from 'classnames';
export var DialogConfirmation = _ref => {
  var {
    isOpen,
    onClose,
    onConfirm,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: onClose,
    showOverlay: true
  }, /*#__PURE__*/React.createElement(Card, {
    className: "w-80 text-center z-10"
  }, /*#__PURE__*/React.createElement("h1", {
    className: typographyStyles.modalH1
  }, children.titleText), /*#__PURE__*/React.createElement("p", {
    className: classNames(typographyStyles.modalBody1, 'my-6')
  }, children.subtitleText), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-x-6"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "inverseSubtle",
    className: "flex-1",
    onClick: () => onClose(false)
  }, children.cancelText), /*#__PURE__*/React.createElement(Button, {
    variant: "filled",
    color: "accent",
    className: "flex-1",
    onClick: () => onConfirm()
  }, children.confirmationText))));
};
//# sourceMappingURL=DialogConfirmation.js.map