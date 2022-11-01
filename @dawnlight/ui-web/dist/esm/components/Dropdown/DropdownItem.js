import React from 'react';
import { Menu } from '@headlessui/react';
import { isFunction } from '../../utils';
export var DropdownItem = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  var {
    as = React.Fragment,
    disabled,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Menu.Item, {
    ref: ref,
    as: as,
    disabled: disabled
  }, isFunction(children) ? _ref2 => {
    var {
      active,
      disabled
    } = _ref2;
    return children({
      active,
      disabled
    });
  } : children);
});
DropdownItem.displayName = 'DropdownItem';
//# sourceMappingURL=DropdownItem.js.map