# JSX

## JSX is syntactic sugar built on top of React.createElement()

* It could be expanded to *JavaScript in XML* or *JavaScript Syntax eXtension* or whatever.
* It has familiar syntax of HTML i.e. attributes, events and nested elements etc.
* It needs to be transpiled with e.g. Babel.

```js

// It removes all the boilerplate.
// const element = React.createElement('h1', null, 'Hello!');
const element = <hi>Hello!</hi>;
console.log(element);
/*
{"type":"h1","key":null,"ref":null,"props":{"children":"Hello!"},"_owner":null,"_store":{}}
*/

// It supports JS expressions in curly braces {}.
const user = "Satish";
const elementWithExpression = <h1>Hello! {user}</h1>
console.log(elementWithExpression);
ReactDOM.render(elementWithExpression, document.getElementById("root"));

// It also prevents injection attacks by escaping values.
const potentiallyBadUser = "<script>console.log(document.cookie)</script>";
const infectedElement = <h1>Hello! {potentiallyBadUser}</h1>
console.log(infectedElement);
ReactDOM.render(infectedElement, document.getElementById("root"));

```

[Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)  
[JSX in depth](https://reactjs.org/docs/jsx-in-depth.html)  
[React without JSX](https://reactjs.org/docs/react-without-jsx.html)  