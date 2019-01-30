# Reducers

## Reducers in functional programming

When we use Array::reduce() function, we pass a function as an argument, which has the following signature:

```js
function(accumulator, next) {
  return newValue
}
```

Let's see an example:

```js
const initialCost = 0;
const costs = [29.76, 41.85, 46.5];
const add = function(prevCost, nextCost) {
  return prevCost + nextCost;
};
const total = costs.reduce(add, initialCost);
```

The first argument we pass to reduce(), is called Reducer function.

- For the first call, initial value becomes the first argument and first element becomes the second argument.
- The return value is fed back to next call as accumulator and the next element of array becomes the second argument.
- This process repeats for every element.
- The returned value from the last call is final output.

Apparently it has reduced multiple values to one value, hence Reducer.

## Reducers in Redux

Redux also requires us to define a function with the following signature:

```js
function(previousState, action) {
 return newState
}
```

Every time an Action is dispatched, this reducer function is called with existing state and the new action. It is the job of this function to compute and return the next state.

## It must be a pure function

> Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

If we repeat the same arguments, we should get the same output.

NOTE: These rules have to be followed as a practice, redux doesn't enforce them.

## Things you should **NEVER** do inside a reducer

- Mutate its arguments
- Perform side effects like API calls and routing transitions
- Call non-pure functions, e.g. Date.now() or Math.random()

Let's see an example of Redux reducer

```js
const todos = [];

// Assuming action = { type="ADD_TODO", todo: "my new todo" }
function reducer(state = todos, action) {
  /// There can be many action types, we are only interested in "ADD_TODO"
  if (action.type === "ADD_TODO") {
    // We are handling only one action for now
    // We don't mutate the state, we are constructing a new state.
    return [
      ...state, // Thanks to ES6 spread operator
      action.todo
    ];
  }
  // If we have no interest in this action, we leave the state as it is.
  return state;
}
```

NOTE: Please note how we are returning the state as it is, if the action is unknown. It is necessary, as returning nothing will mean that we want to set the state to undefined. Again there is no enforcement.

## Handling multiple actions

It is easier, if we convert the _if_ statement above, into a _switch_ statement, so that every action type can have its own maching _case_ clause. Let's convert the above reducer to handle another action.

```js
const todos = [];

function reducer(state = todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [ ...state, action.todo ];
    case "DELETE_TODO":
      return state.filter(todo => todo !== action.todo);
    default
      return state;
  }
}
```

NOTE: Please note that we are repeating the Action type string in Action creators as well as in Reducers. It is a good practice to define these strings as Constants and use the constant instead in Action creators and Reducers.

[Official Docs](https://redux.js.org/basics/reducers)  
[Array::reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)