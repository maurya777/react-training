# Components

* It's not a new concept, browsers had it, but they were not happy sharing it!
* Components are reusable units of code
* They are composed, out of HTML tags plus other React components.
* The whole application is nothing but just a big tree constructed with instances of these components

```js
// Simplest, Functional, Pure, Stateless, Dumb
const Greeting = () => <h1>Hello!</h1>;
let component = <Greeting />;
// Greeting remains a black box for VirtualDOM until rendered
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// Sophisticated, Classical, Stateful, Controller, Intelligent
class Salutation extends React.Component {
  render() {
    return <h1>Hello!</h1>
  }
}
component = <Salutation />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));
```

[Components and Props](https://reactjs.org/docs/components-and-props.html)  
[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)  
[Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)  