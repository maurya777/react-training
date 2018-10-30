# Children

## JSX supports children just like HTML

- The children can be a single or multiple elements
- It can be any valid JS expression, like another function

```js
// Simple example with array of child elements
function CardWithTitle({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

ReactDOM.render(
  <CardWithTitle title="Weather today">
    <div>Temperature is 39 Degrees</div>
    <div>Wind speed is 12 KMPH</div>
  </CardWithTitle>,
  document.getElementById("root")
);

// A function as child
function CardWithTitle({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children(39, 12)}
    </div>
  );
}

ReactDOM.render(
  <CardWithTitle title="Weather today">
    {function renderWhether(temperature, windSpeed) {
      let fahrenheit = (temperature * 9) / 5 + 32;
      let miles = windSpeed / 1.6;
      return (
        <div>
          <div>Temperature is {fahrenheit} Degrees</div>
          <div>Wind speed is {miles} KMPH</div>
        </div>
      );
    }}
  </CardWithTitle>,
  document.getElementById("root")
);
```

[Children in JSX](https://reactjs.org/docs/jsx-in-depth.html#jsx-children)  
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)  