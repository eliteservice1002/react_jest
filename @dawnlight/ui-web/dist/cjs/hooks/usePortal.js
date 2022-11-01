"use strict";

exports.__esModule = true;
exports.usePortal = void 0;

var _react = /*#__PURE__*/require("react");

var createRootElement = function createRootElement(id) {
  var rootEl = document.createElement('div');
  rootEl.setAttribute('id', id);
  document.body.appendChild(rootEl);
  return rootEl;
};

var usePortal = function usePortal(id) {
  var rootRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var existingEl = document.querySelector("#" + id);
    var parentElem = existingEl || createRootElement(id);
    parentElem.appendChild(rootRef.current);
    return function () {
      return rootRef.current.remove();
    };
  }, [id]); // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

  var getRootElem = function getRootElem() {
    if (!rootRef.current) {
      rootRef.current = document.createElement('div');
    }

    return rootRef.current;
  };

  return getRootElem();
};

exports.usePortal = usePortal;
//# sourceMappingURL=usePortal.js.map