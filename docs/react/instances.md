# Instances

Elements are not ready to be used by Browsers. To use them on browsers we need a rendering engine. React is kept generic so that it is not just for browsers, it can also be used on server side as well as in Native applications.

ReactDOM is the recommended rendering engine for Browsers.

## ReactDOM.render()

```js
// Instances are the DOM objects(the language that browsers understand)
// They are not created until rendered
const element = React.createElement('h1', null, 'Hello!');
const instance = ReactDOM.render(element, document.getElementById("root"));
console.log(instance.toString());
/*
[object HTMLHeadingElement]
*/
```

[React Components, Elements, Instances and Reconciliation](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)  
[Reconciliation](https://reactjs.org/docs/reconciliation.html)  