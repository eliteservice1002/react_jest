import React from 'react';
import { createPortal } from 'react-dom';
import { usePortal } from '../../hooks/usePortal';
import { LinearProgress } from '../LinearProgress';
export var Overlay = _ref => {
  var {
    isOpen
  } = _ref;
  var target = usePortal('global-overlay');
  return isOpen ? /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement("div", {
    className: "bg-overlay z-50 fixed inset-0 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement(LinearProgress, null)), target) : null;
};
//# sourceMappingURL=Overlay.js.map