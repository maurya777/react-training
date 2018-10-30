# Events

- Events are again, same as they are DOM, with some changes.
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function reference as the event handler, rather than a string.

```js
// DOM
<button onclick="console.log(event)">Click Me</button>

// JSX
<button onClick={(e)=>console.log(e)}>Click Me</button>

// OR
function clickHandler(e) {
  console.log(e)
}
<button onClick={clickHandler}>Click Me</button>
```

- Returning false from event handler doesn't stop propagation.

```js
// Stopping events in DOM
<a href="#" onclick="console.log(event); return false">
  Click Me
</a>;

// Stopping events in React
function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}
<a href="#" onClick={handleClick}>
  Click me
</a>;
```

- React wraps the DOM events in it's own synthetic event, to make them cross browser compliant.

```js
function handleClick(e) {
  console.log(e.nativeEvent);
}
<button onClick={handleClick}>Click me</button>;
```

- Always bind your event handlers, because they get detached at the time of execution.

```js
class Greeting extends React.Component {

  greeted = false

  constructor(props) {
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Or binding through arrow functions
  // handleClick = () => {
  handleClick() {
    console.log('Hi);
    this.greeted = true;
  }

  render() {
    return (
      // Or bind here
      // <button onClick={this.handleClick.bind(this)}>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
```

[React Events](https://reactjs.org/docs/handling-events.html)  
[Synthetic Event](https://reactjs.org/docs/events.html)  