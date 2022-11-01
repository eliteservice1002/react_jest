import { useEffect, useRef } from 'react';

var createRootElement = id => {
  var rootEl = document.createElement('div');
  rootEl.setAttribute('id', id);
  document.body.appendChild(rootEl);
  return rootEl;
};

export var usePortal = id => {
  var rootRef = useRef(null);
  useEffect(() => {
    var existingEl = document.querySelector("#" + id);
    var parentElem = existingEl || createRootElement(id);
    parentElem.appendChild(rootRef.current);
    return () => rootRef.current.remove();
  }, [id]); // https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

  var getRootElem = () => {
    if (!rootRef.current) {
      rootRef.current = document.createElement('div');
    }

    return rootRef.current;
  };

  return getRootElem();
};
//# sourceMappingURL=usePortal.js.map