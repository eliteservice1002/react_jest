"use strict";

exports.__esModule = true;
exports.Select = void 0;

var _react = /*#__PURE__*/_interopRequireWildcard( /*#__PURE__*/require("react"));

var _react2 = /*#__PURE__*/require("@headlessui/react");

var _commonStyles = /*#__PURE__*/require("../../styles/common-styles");

var _icons = /*#__PURE__*/require("../../icons");

var _classnames = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Select = function Select(_ref) {
  var _classNames;

  var id = _ref.id,
      onChange = _ref.onChange,
      value = _ref.value,
      displayText = _ref.displayText,
      disabled = _ref.disabled,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark' : _ref$color,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react2.Listbox, {
    value: value,
    onChange: onChange,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Button, {
    id: id,
    className: (0, _classnames["default"])((_classNames = {}, _classNames[_commonStyles.formInputStylesDark] = color === 'dark', _classNames[_commonStyles.formInputStylesLight] = color === 'light', _classNames), 'w-full flex justify-between focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-default truncate')
  }, displayText, /*#__PURE__*/_react["default"].createElement(_icons.ArrowDownIcon, null)), /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    as: _react.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Listbox.Options, {
    className: "absolute z-10 w-full overflow-auto max-h-60 border border-darker bg-inverseBg shadow-lg rounded text-inverseBody1 focus:outline-none focus:ring"
  }, function (active) {
    return _react["default"].Children.map(children, function (child) {
      if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
        return /*#__PURE__*/_react["default"].cloneElement(child, {
          active: active
        });
      }

      return child;
    });
  }))));
};

exports.Select = Select;
//# sourceMappingURL=Select.js.map