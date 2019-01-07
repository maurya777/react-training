function renderDOM(root, Component, props = {}) {
  root.innerHTML = '';
  root.appendChild(createElement(Component, props));
}

function createElement(tag, attributes, children) {
  const isDomElement = typeof tag === 'string';
  const element = isDomElement ?
    document.createElement(tag) :
    new tag(attributes).createInstance();
  if (attributes && isDomElement) {
    Object.keys(attributes).forEach(function (attr) {
      const attribute = attributes[attr];
      const isEvent = typeof attribute === 'function';
      if(isEvent) {
        element[attr] = attribute;
      } else {
        element.setAttribute(attr, attributes[attr]);
      }
    });
  }
  if (children) {
    children = Array.isArray(children) ? children : [children];
    children.forEach(function (child) {
      child = typeof child === 'string' ? document.createTextNode(child) : child;
      element.appendChild(child);
    });
  }
  return element;
}