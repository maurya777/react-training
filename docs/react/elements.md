# VirtualDOM & Elements

## Recap: The createElement() function we created in lib.js

```js
// Board.js
Board.prototype.renderCell = function(rowIndex, colIndex) {
  const value = this.props.board[rowIndex][colIndex];
  const onclick = this.clickHandler.bind(this, rowIndex, colIndex);
  return createElement("td", { onclick }, value);
};

// lib.js
function createElement(tag, attributes, children) {
  const isDomElement = typeof tag === "string";
  const element = isDomElement
    ? document.createElement(tag)
    : new tag(attributes).createInstance();
  if (attributes && isDomElement) {
    Object.keys(attributes).forEach(function(attr) {
      const attribute = attributes[attr];
      const isEvent = typeof attribute === "function";
      if (isEvent) {
        element[attr] = attribute;
      } else {
        element.setAttribute(attr, attributes[attr]);
      }
    });
  }
  if (children) {
    children = Array.isArray(children) ? children : [children];
    children.forEach(function(child) {
      child =
        typeof child === "string" ? document.createTextNode(child) : child;
      element.appendChild(child);
    });
  }
  return element;
}
```

Our createElement() is very basic implementation of React.createElement().

Theoretically speaking, we can replace all the calls to createElement() with React.createElement() in our Board.js and it will work just fine.

But wait React is not just that! Have you heard that it is fast very fast?

### React.createElement()

```js
const element = React.createElement('h1', null, 'Hello!');
console.log(element);
/**
 * There is a tree of objects also called *elements*, apparently the virtualDOM.
 * They are just POJOs, with a small footprint.
 * It's very fast to compare them with references.
 * {"type":"h1","key":null,"ref":null,"props":{"children":"Hello!"},"_owner":null,"_store":{}}
 */
```

[React Elements](https://reactjs.org/docs/rendering-elements.html)  