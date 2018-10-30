# Controlled Components and Refs

Form elements like Input, Textarea and Select are not as Atomic in HTML as you might have thought, don't believe me, allow shadow dom in devtools and see yourself.

There are two ways of dealing with form elements in React.

## Controlled

We keep watching for any change on element and update our state eventually element gets re-rendered with new value in state. 

* State is up to date at any given time, we can do live updates.
* Programmer has more control over the values being input hence stricter validation.
* It needs many rendering round trips hence it is heavy.

```js
class NameForm extends React.Component {
  state = { value: "" };

  handleChange = event => {
    console.log("Name changed to: " + this.state.value);
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<NameForm />, document.getElementById("root"));
```

## Uncontrolled

We save a reference to the rendered DOM element. We let the element handle the changes in value and on submit we collect the value from DOM element reference.

* Delayed updates.
* Validation only on submit.
* Light weight.
* Need to maintain a reference for all the form elements.

```js
class NameForm extends React.Component {
  input = null

  handleSubmit = (event) => {
    console.log('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={el => this.input = el} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<NameForm />, document.getElementById("root"));

```

[Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)  
[Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)  
[Refs](https://reactjs.org/docs/refs-and-the-dom.html)  