"use strict";

exports.__esModule = true;
exports.Dropdown = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _Card = /*#__PURE__*/require("../Card");

var _utils = /*#__PURE__*/require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Dropdown = function Dropdown(_ref) {
  var button = _ref.button,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react2.Menu, {
    as: "div",
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Menu.Button, {
    as: _react["default"].Fragment
  }, function (_ref2) {
    var open = _ref2.open;
    return /*#__PURE__*/_react["default"].cloneElement(button, {
      open: open
    });
  }), /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    as: _react["default"].Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Menu.Items, {
    as: _react["default"].Fragment
  }, function (_ref3) {
    var open = _ref3.open;
    return /*#__PURE__*/_react["default"].createElement(_Card.Card, {
      rounded: "sm",
      padding: "none",
      className: "flex flex-col absolute right-0 z-10"
    }, (0, _utils.isFunction)(children) ? children({
      open: open
    }) : children);
  })));
};

exports.Dropdown = Dropdown;
//# sourceMappingURL=Dropdown.js.map