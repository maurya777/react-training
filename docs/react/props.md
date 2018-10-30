# Props

- Props are like attributes in HTML, but you can pass non-string values too!
- Props are read only.
- You may have default values for props.
- You may define types for props. In development mode react will generate warnings if prop types do no match.

```js
// Props in function component
const Greeting = (props) => <h1>Hello! {props.name}</h1>;
let component = <Greeting name="Satish" />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// Props in class component
class Salutation extends React.Component {
  render() {
    const name = this.props.name;
    return <h1>Hello! {name}</h1>;
  }
}
component = <Salutation name="Satish" />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// Objects in props
const Greeting = (props) => <h1>Hello! {props.name.firstName} {props.name.lastName}</h1>;
const name = {firstName: 'Satish', lastName: 'Maurya'};
let component = <Greeting name={name} />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// Boolean in props, if present, it is true
const Greeting = (props) => props.show ? <h1>Hello!</h1> : null;
let component = <Greeting show />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// False boolean, default values, prop types
const Greeting = (props) => props.show ? <h1>Hello!</h1> : null;
Greeting.defaultProps = {
  show: true
}
Greeting.propTypes = {
  show: PropTypes.bool
}

let component = <Greeting />;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

let component = <Greeting show={false}/>;
console.log(component);
ReactDOM.render(component, document.getElementById("root"));

// Default props and prop types in Class components
class Greeting extends React.Component {
  static defaultProps = {
    show: true
  }
  static propTypes = {
    show: PropTypes.bool.isRequired // PropTypes can provide sophisticated type checking
  }

}


```

[Props in JSX](https://reactjs.org/docs/jsx-in-depth.html#props-in-jsx)  
[Component and Props](https://reactjs.org/docs/components-and-props.html)  
[Dom Elements](https://reactjs.org/docs/dom-elements.html)  
[Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)