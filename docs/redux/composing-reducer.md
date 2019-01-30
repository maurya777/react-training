# Composing Reducers

Our applications grow, so does the state, and so does the reducer. It is a good practice to split up your reducer function in multiple smaller reducers so that they are easier to read and maintain.

You might be wondering how? because we can pass only and only one function as reducer.

Let us take an example, let us say that instead of just handling todos, our application now also has a calender feature, which support booking a meeting.

```js
// Our state is no more an array it is an Object like this
const initialState = {
  todos: [],
  meetings: []
}

// And our old todo reducer is renamed to todos
// and the default state is assigned to blank array
function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [ ...state, action.todo ];
    case "DELETE_TODO":
      return state.filter(todo => todo !== action.todo);
    default
      return state;
  }
}

// We create another reducer for meetings
function meetings(state = [], action) {
  switch (action.type) {
    case "ADD_MEETING":
      return [ ...state, action.meeting ];
    case "DELETE_MEETING":
      return state.filter(meeting => meeting !== action.meeting);
    default
      return state;
  }
}

// Now let's combine both of them
function reducer(state=initialState, action) {
  // We return the new state as a new Object
  // where todos is calculated by todos reducer
  // and meetings is calculated by meetings reducer
  return {
    todos: todos(state.todos, action), // receives only todos
    meetings: meetings(state.meetings, action) // receives only meetings
  }
}
```

NOTE: Note that each of these reducers is managing its own part of the global state. The state parameter is different for every reducer, and corresponds to the part of the state it manages.

## combineReducers()

The pattern we just saw is common enough that Redux has a helper function called combineReducers(), which can be called with an Object, where its keys are the name of state property that it manages, and value is the corresponding reducer.

```js
// Thanks to ES6 object literal shorthand, we don't repeat the key and value, if they are same.
combineReducers({
  todos,
  meetings
});
```

NOTE: Again there is no magic here. All combineReducers() does is generate a function that calls your reducers with the slices of state selected according to their keys, and combines their results into a single object again. Like our earlier example, it returns a new object. A bare minimum implementation could be:

```js
function combineReducers(reducers) {
  return function (state, action) {
    return Object.keys(reducers).reduce(
      (prev, next) => ({
        ...prev,
        [next]: reducers[next](state[next], action)
      }),
      {}
    );
  }
}
```

## We can split at any level

For simplicity this technique is demonstrated here on root level reducers only, feel free to apply this at any level in your state and reducers.

## Initializing state

As we have seen above every reducer must do its best to provide a default state, no matter it is on root level or deeper. While there are ways we can pass the initial state, the reducer function must not assume it will receive it. The best way to take care of this is to always have default value assigned to the state argument. In JavaScript, if the argument is undefined, the default values is used instead.

[Official Docs](https://redux.js.org/basics/reducers#splitting-reducers)  
[combineReducers() API](https://redux.js.org/api/combinereducers)  