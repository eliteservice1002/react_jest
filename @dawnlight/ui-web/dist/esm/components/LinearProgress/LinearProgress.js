import classNames from 'classnames';
import React from 'react';
export var LinearProgress = _ref => {
  var {
    color = 'light'
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('w-80 h-2 relative overflow-hidden', {
      'bg-dimmed2': color === 'light',
      'bg-inverseDimmed2': color === 'dark'
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-auto left-0 top-0 bottom-0 bg-accent animate-linearIndeterminate1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute w-auto left-0 top-0 bottom-0 bg-accent animate-linearIndeterminate2"
  }));
};
//# sourceMappingURL=LinearProgress.js.map