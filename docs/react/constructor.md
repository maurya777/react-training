# Constructor

* It is called before the component is mounted.
* You don't necessarily need a constructor if you don't initialize state or bind methods.
* If you define it, you must call super(props), or you won't get this.props.
* Assign this.state directly with an object, it is the only place you can do it, everywhere else you have to call ths.setState().

```js
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: "hello"
    }
  }
}

class Greeting extends React.Component {
  // New ES6 syntax for instance props
  state = {
    greet: "hello"
  }
}


```

[Constructor](https://reactjs.org/docs/react-component.html#constructor)