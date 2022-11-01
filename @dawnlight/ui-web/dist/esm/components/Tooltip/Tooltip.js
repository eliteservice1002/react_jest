function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';
export var Tooltip = _ref => {
  var {
    title,
    children
  } = _ref;
  var [anchorEl, setAnchorEl] = useState(null);
  var [popperEl, setPopperEl] = useState(null);
  var [arrowEl, setArrowEl] = useState(null);
  var [isVisible, setIsVisible] = useState(false);
  var {
    styles,
    attributes
  } = usePopper(anchorEl, popperEl, {
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowEl
      }
    }]
  });
  var leaveTimer = useRef(null);

  var handleMouseOver = () => {
    clearTimeout(leaveTimer.current);
    setIsVisible(true);
  };

  var handleMouseLeave = () => {
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, 800);
  };

  var handleFocus = () => {
    clearTimeout(leaveTimer.current);
    setIsVisible(true);
  };

  var handleBlur = () => {
    clearTimeout(leaveTimer.current);
    setIsVisible(false);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        ref: setAnchorEl,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur
      });
    }

    return child;
  }), isVisible && /*#__PURE__*/React.createElement("div", _extends({
    className: "bg-overlay text-body1 text-xs rounded p-2",
    ref: setPopperEl,
    style: styles.popper
  }, attributes.popper, {
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), title, /*#__PURE__*/React.createElement("div", {
    className: "bg-overlay",
    ref: setArrowEl,
    style: styles.arrow
  })));
};
//# sourceMappingURL=Tooltip.js.map