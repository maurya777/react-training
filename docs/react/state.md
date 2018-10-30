# State

- To get this functionality, Component should be defined as an extension of React.Component class.
- A component can maintain it's temporary state/data.
- A component is re-rendered whenever it changes state.
- Components can access it using "this.state".
- The default state can be defined in constructor, but not after.
- We use setState() function to update the component state.
- Modifying the state directly doesn't re-render the component.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <button onClick={this.incrementCount}>Clicks: {this.state.count}</button>;
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
```

[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)  
[setState()](https://reactjs.org/docs/react-component.html#setstate)  
[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)  
