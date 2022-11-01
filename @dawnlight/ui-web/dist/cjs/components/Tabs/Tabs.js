"use strict";

exports.__esModule = true;
exports.Tabs = void 0;

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _Tab = /*#__PURE__*/require("./Tab");

var _excluded = ["selectedIndex", "onChange", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tabs = function Tabs(_ref) {
  var selectedIndex = _ref.selectedIndex,
      onChange = _ref.onChange,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      hasNativeFocus = _useState[0],
      setHasNativeFocus = _useState[1];

  var _useState2 = (0, _react.useState)(selectedIndex),
      focusedIndex = _useState2[0],
      setFocusedIndex = _useState2[1];

  var tabsRef = (0, _react.useRef)(null);
  var selectedLineElement = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)({
    left: '0',
    width: '0',
    bottom: '-2px'
  }),
      indicatorStyles = _useState3[0],
      setIndicatorStyles = _useState3[1];

  var childrenCount = _react["default"].Children.count(children);

  (0, _react.useEffect)(function () {
    var tabsNode = tabsRef.current;
    var selectedTabNode = tabsNode.children[selectedIndex];
    setIndicatorStyles({
      left: selectedTabNode.offsetLeft + 'px',
      width: selectedTabNode.offsetWidth + 'px',
      bottom: '-2px'
    });
  }, [selectedIndex]);

  var handleKeyDown = function handleKeyDown(e) {
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

  var handleKeyUp = function handleKeyUp(e) {
    if (e.key === 'Enter' || e.key === 'Space') {
      onChange(focusedIndex);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    ref: tabsRef,
    className: (0, _classnames["default"])('relative flex flex-1 border-b border-subtle', className),
    role: "tablist"
  }, props), _react["default"].Children.map(children, function (child, childIndex) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child) && child.type === _Tab.Tab) {
      var elementChild = child;
      return /*#__PURE__*/_react["default"].cloneElement(elementChild, {
        selectedIndex: selectedIndex,
        index: childIndex,
        isFocused: focusedIndex === childIndex,
        tabsHaveNativeFocus: hasNativeFocus,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp,
        onMouseUp: function onMouseUp() {
          setFocusedIndex(childIndex);
          onChange(childIndex);
        },
        onFocus: function onFocus() {
          return setHasNativeFocus(true);
        },
        onBlur: function onBlur() {
          return setHasNativeFocus(false);
        }
      });
    }

    return child;
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: selectedLineElement,
    className: "absolute h-1 bg-accent transition-all",
    style: indicatorStyles
  }));
};

exports.Tabs = Tabs;
//# sourceMappingURL=Tabs.js.map