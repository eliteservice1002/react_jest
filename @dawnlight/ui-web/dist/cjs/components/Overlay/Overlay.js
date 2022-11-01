"use strict";

exports.__esModule = true;
exports.Overlay = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _reactDom = /*#__PURE__*/require("react-dom");

var _usePortal = /*#__PURE__*/require("../../hooks/usePortal");

var _LinearProgress = /*#__PURE__*/require("../LinearProgress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Overlay = function Overlay(_ref) {
  var isOpen = _ref.isOpen;
  var target = (0, _usePortal.usePortal)('global-overlay');
  return isOpen ? /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-overlay z-50 fixed inset-0 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_LinearProgress.LinearProgress, null)), target) : null;
};

exports.Overlay = Overlay;
//# sourceMappingURL=Overlay.js.map