# Using with React

You might have seen so far that it is not necessary to use React with Redux and the other way around. Redux can be used with any UI framework or library. But it is specially useful when your UI renders as a function of state.

All you have to do to use Redux, is to subscribe to the store, render the UI and dispatch actions.

We can subscribe to store changes in componentDidMount() and unsubscribing in componentWillUnmount() and dispatch actions using action creators in your event handlers to change the store. Your components might look like this:

```js
class PostsList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(this.changeHandler);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  changeHandler = () => {
    this.setState({
      posts: store.getState()
    });
  };

  addPost = post => {
    store.dispatch(addPost(post));
  };
}
```

Two immediate issues with this code are:

- It is expecting store object to be global.
- We have the boilerplate code for subscribing and unsubscribing.

## Solution

One way to solve the global store problem is to pass it through props. But then we have to start passing it from top level component, down to wherever we need it.

Other way around is to use [Context API](https://reactjs.org/docs/context.html). It provides us a way to share a value among any child component at any level.

```js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const { Provider, Consumer } = React.createContext();

class Container extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillunmount() {
    this.unsubscribe();
  }
  render() {
    const { children, store } = this.props;
    return <Provider value={{ store }}>{children}</Provider>;
  }
}

const Button = () => (
  <Consumer>{context => <button>{context.store.getState()}</button>}</Consumer>
);

const HelloWorld = ({ store }) => (
  <Container store={store}>
    <Button />
  </Container>
);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
  return state;
};

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware // will help us to see the flow
  )
);
// global.store = store;
ReactDOM.render(<HelloWorld store={store} />, document.getElementById("root"));
```

Another plus point is that the Button component gets re-rendered every time the context changes. Hence it also solves the problem of subscribing, unsubscribing and setting the state just to trigger a re-render.

We can go a step further and write a utility function which will receives a component, and wrap the context around it.

It will be even better to be able to tell this function about the parts of state and actions that we want to dispatch with a component, so that it can provide them as props to the component, and component doesn't have to know if it is using a Redux store.

Here is a simplest implementation of such function:

```js
const connect = (mapStateToProps, mapDispatchToProps) => Component => props => (
  <Consumer>
    {context => {
      const { store } = context;
      const stateProps = mapStateToProps(store.getState(), props);
      const dispatchProps = mapDispatchToProps(store.dispatch, props);
      const { children, ...otherProps } = props;
      return (
        <Component {...stateProps} {...dispatchProps} {...otherProps}>
          {children}
        </Component>
      );
    }}
  </Consumer>
);
```

We have defined a function called connect(), which will take two callback functions, and return a new function which will take a Component and connect it to the desired State and Dispatcher. The two callback functions will be:

### mapStateToProps(state, ownProps)

This function has to tell us that given the whole Redux state and current props, what will be the new set of props that the component should receive.

### mapDispatchToProps(dispatch, ownProps)

This function has to return an object with keys as prop names and values as functions which can call the dispatch function with appropriate actions.

A sample usage of connect() function:

```js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const { Provider, Consumer } = React.createContext();

class Container extends React.Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillunmount() {
    this.unsubscribe();
  }
  render() {
    const { children, store } = this.props;
    return <Provider value={{ store }}>{children}</Provider>;
  }
}

const HelloWorld = ({ store }) => (
  <Container store={store}>
    <ConnectedCounter />
  </Container>
);

const Counter = ({ value, onIncrement }) => (
  <button onClick={onIncrement}>{value}</button>
);

const ConnectedCounter = connect(
  // Given Redux state, return props
  state => ({
    value: state
  }),
  // Given Redux dispatch, return callback props
  dispatch => ({
    onIncrement: () => dispatch({ type: "INCREMENT" })
  })
)(Counter);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
  return state;
};

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware // will help us to see the flow
  )
);
// global.store = store;
ReactDOM.render(<HelloWorld store={store} />, document.getElementById("root"));
```

Luckily you don't have to do this in your projects. There is an NPM package called "react-redux" from Redux group itself, which provides with both the Provider component and the connect() function. Which are almost same as what we have just defined, but just few more optimizations:

- If you skip the ownProps in mapStateToProps(), it might reduce the renders()
- If you don't specify the second argument to connect(), your component will receive dispatch as a prop
- If all of your dispatchers are action creators, it allows us to provide the second argument, i.e. mapDispatchToProps as an object, where keys will become prop name and the value which is an action creator, will be transformed to a function which when executed will dispatch the given action creator.

```js
// example of mapDispatchToProps as an object
connect(dummyMapStateToPropFunction, {
  onIncrement: incrementCounter
})(component)
// or if you want to have the same name as the action creator
connect(dummyMapStateToPropFunction, {
  incrementCounter
})(component)
// or if you don't have the action creator, create inline
connect(dummyMapStateToPropFunction, {
  incrementCounter: () => ({type: "INCREMENT"})
})(component)

```

Let us re-write our example with react-redux help.

```js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { Provider, connect } from "react-redux";

const HelloWorld = ({ store }) => (
  <Provider store={store}>
    <ConnectedCounter />
  </Provider>
);

const Counter = ({ value, onIncrement }) => (
  <button onClick={onIncrement}>{value}</button>
);

const ConnectedCounter = connect(
  // Given Redux state, return props
  state => ({
    value: state
  }),
  // object style mapDispatchToProp
  {
    onIncrement: () => ({ type: "INCREMENT" })
  }
)(Counter);

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
  return state;
};

const loggerMiddleware = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(
    loggerMiddleware // will help us to see the flow
  )
);
// global.store = store;
ReactDOM.render(<HelloWorld store={store} />, document.getElementById("root"));
```

[Official doc](https://react-redux.js.org/)  
[Context API](https://reactjs.org/docs/context.html)  
[Connect explained](https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e)  