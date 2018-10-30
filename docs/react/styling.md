# Styling

* className - The recommended way, and "className" because "class" is a reserved word.
* style - Just like the style attribute in DOM, but using JS syntax.

```js
// className attribute
// where is .hello-world is a css class
<div className="hello-world">Hello world!</div>

// Style attribute
const divStyle = {
  color: 'blue',
  backgroundColor: 'red',
  fontSize: 10 // 'px' is the default unit
};

<div style={divStyle}>Hello World!</div>;
```

[Style in DOM Elements](https://reactjs.org/docs/dom-elements.html#style)  