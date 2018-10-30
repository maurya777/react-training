# Subscription and Cleanup

Event subscription and Interval setup has caused more memory leaks in DOM than anything else, so it is important to clean them as soon as possible. We do it in React using lifecycle methods componentDidMount() and componentWillUnmount().

```js
class App extends React.Component {
  state = {
    showClock: false
  };

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleClock}>Toggle Clock</button>
        {this.state.showClock && <Clock />}
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    console.log("tick triggered");
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

[componentDidMount](https://reactjs.org/docs/react-component.html#componentdidmount)  
[componentWillUnmount](https://reactjs.org/docs/react-component.html#componentwillunmount)