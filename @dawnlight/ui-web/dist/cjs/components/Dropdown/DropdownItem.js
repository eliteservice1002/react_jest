"use strict";

exports.__esModule = true;
exports.DropdownItem = void 0;

var _react = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _utils = /*#__PURE__*/require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? _react["default"].Fragment : _ref$as,
      disabled = _ref.disabled,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react2.Menu.Item, {
    ref: ref,
    as: as,
    disabled: disabled
  }, (0, _utils.isFunction)(children) ? function (_ref2) {
    var active = _ref2.active,
        disabled = _ref2.disabled;
    return children({
      active: active,
      disabled: disabled
    });
  } : children);
});

exports.DropdownItem = DropdownItem;
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map