var _excluded = ["selectedIndex", "onChange", "className", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { Tab } from './Tab';
export var Tabs = _ref => {
  var {
    selectedIndex,
    onChange,
    className,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var [hasNativeFocus, setHasNativeFocus] = useState(false);
  var [focusedIndex, setFocusedIndex] = useState(selectedIndex);
  var tabsRef = useRef(null);
  var selectedLineElement = useRef(null);
  var [indicatorStyles, setIndicatorStyles] = useState({
    left: '0',
    width: '0',
    bottom: '-2px'
  });
  var childrenCount = React.Children.count(children);
  useEffect(() => {
    var tabsNode = tabsRef.current;
    var selectedTabNode = tabsNode.children[selectedIndex];
    setIndicatorStyles({
      left: selectedTabNode.offsetLeft + 'px',
      width: selectedTabNode.offsetWidth + 'px',
      bottom: '-2px'
    });
  }, [selectedIndex]);

  var handleKeyDown = e => {
    if (e.key === 'ArrowLeft') {
      var desiredIndex = focusedIndex - 1;
      setFocusedIndex(desiredIndex >= 0 ? desiredIndex : childrenCount - 1);
    } else if (e.key === 'ArrowRight') {
      var _desiredIndex = focusedIndex + 1;

      setFocusedIndex(_desiredIndex < childrenCount ? _desiredIndex : 0);
    } else if (e.key === 'Home') {
      setFocusedIndex(0);
    } else if (e.key === 'End') {
      setFocusedIndex(childrenCount - 1);
    }
  };

  var handleKeyUp = e => {
    if (e.key === 'Enter' || e.key === 'Space') {
      onChange(focusedIndex);
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends({
    ref: tabsRef,
    className: classNames('relative flex flex-1 border-b border-subtle', className),
    role: "tablist"
  }, props), React.Children.map(children, (child, childIndex) => {
    if ( /*#__PURE__*/React.isValidElement(child) && child.type === Tab) {
      var elementChild = child;
      return /*#__PURE__*/React.cloneElement(elementChild, {
        selectedIndex: selectedIndex,
        index: childIndex,
        isFocused: focusedIndex === childIndex,
        tabsHaveNativeFocus: hasNativeFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseUp: () => {
          setFocusedIndex(childIndex);
          onChange(childIndex);
        },
        onFocus: () => setHasNativeFocus(true),
        onBlur: () => setHasNativeFocus(false)
      });
    }

    return child;
  }), /*#__PURE__*/React.createElement("div", {
    ref: selectedLineElement,
    className: "absolute h-1 bg-accent transition-all",
    style: indicatorStyles
  }));
};
//# sourceMappingURL=Tabs.js.map