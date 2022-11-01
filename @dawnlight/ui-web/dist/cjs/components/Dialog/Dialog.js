"use strict";

exports.__esModule = true;
exports.Dialog = void 0;

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _excluded = ["isOpen", "onClose", "showOverlay", "children", "initialFocus"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dialog = function Dialog(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      showOverlay = _ref.showOverlay,
      children = _ref.children,
      initialFocus = _ref.initialFocus,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    appear: true,
    show: isOpen,
    as: _react.Fragment
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog, _extends({
    onClose: onClose
  }, props, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    initialFocus: initialFocus
  }), /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, {
    as: "div",
    enter: "ease-out duration-100",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, showOverlay && /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Overlay, {
    className: "fixed inset-0 bg-black opacity-30"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen"
  }, children))));
};

exports.Dialog = Dialog;
//# sourceMappingURL=Dialog.js.map