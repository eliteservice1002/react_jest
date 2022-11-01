"use strict";

exports.__esModule = true;
exports.Tooltip = void 0;

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _reactPopper = /*#__PURE__*/require("react-popper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tooltip = function Tooltip(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _useState = (0, _react.useState)(null),
      anchorEl = _useState[0],
      setAnchorEl = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      popperEl = _useState2[0],
      setPopperEl = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      arrowEl = _useState3[0],
      setArrowEl = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var _usePopper = (0, _reactPopper.usePopper)(anchorEl, popperEl, {
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowEl
      }
    }]
  }),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  var leaveTimer = (0, _react.useRef)(null);

  var handleMouseOver = function handleMouseOver() {
    clearTimeout(leaveTimer.current);
    setIsVisible(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(function () {
      setIsVisible(false);
    }, 800);
  };

  var handleFocus = function handleFocus() {
    clearTimeout(leaveTimer.current);
    setIsVisible(true);
  };

  var handleBlur = function handleBlur() {
    clearTimeout(leaveTimer.current);
    setIsVisible(false);
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        ref: setAnchorEl,
        onMouseOver: handleMouseOver,
        onMouseLeave: handleMouseLeave,
        onFocus: handleFocus,
        onBlur: handleBlur
      });
    }

    return child;
  }), isVisible && /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "bg-overlay text-body1 text-xs rounded p-2",
    ref: setPopperEl,
    style: styles.popper
  }, attributes.popper, {
    onMouseOver: handleMouseOver,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur
  }), title, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-overlay",
    ref: setArrowEl,
    style: styles.arrow
  })));
};

exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map