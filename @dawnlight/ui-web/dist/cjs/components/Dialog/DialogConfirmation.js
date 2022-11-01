"use strict";

exports.__esModule = true;
exports.DialogConfirmation = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _Dialog = /*#__PURE__*/require("./Dialog");

var _Card = /*#__PURE__*/require("../Card");

var _Button = /*#__PURE__*/require("../Button");

var _commonStyles = /*#__PURE__*/require("../../styles/common-styles");

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DialogConfirmation = function DialogConfirmation(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onConfirm = _ref.onConfirm,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Dialog.Dialog, {
    isOpen: isOpen,
    onClose: onClose,
    showOverlay: true
  }, /*#__PURE__*/_react["default"].createElement(_Card.Card, {
    className: "w-80 text-center z-10"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: _commonStyles.typographyStyles.modalH1
  }, children.titleText), /*#__PURE__*/_react["default"].createElement("p", {
    className: (0, _classnames["default"])(_commonStyles.typographyStyles.modalBody1, 'my-6')
  }, children.subtitleText), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-x-6"
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "outlined",
    color: "inverseSubtle",
    className: "flex-1",
    onClick: function onClick() {
      return onClose(false);
    }
  }, children.cancelText), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    variant: "filled",
    color: "accent",
    className: "flex-1",
    onClick: function onClick() {
      return onConfirm();
    }
  }, children.confirmationText))));
};

exports.DialogConfirmation = DialogConfirmation;
//# sourceMappingURL=DialogConfirmation.js.map