# Store

Unlike Flux, where you can have multiple stores, in Redux you can have only one Store. This store is responsible for:

* Holds application state privately
* Allows access to state via getState()
* Allows state to be updated via dispatch(action)
* Registers listeners via subscribe(listener)
* Handles unregistering of listeners via the function returned by subscribe(listener).

To create a store all you have to do is use the createStore() function available from Redux package and pass your root Reducer function to it. You can optionally pass the initialState as the second argument. There is also an optional third parameter, called Enhancer, which should be a function again, as the name suggests, it can extend the store functionality. We will talk about it in detail later.

Store is not an instance of any class, it is a plain object with some function properties.

There is a tiny set of functions available on the created store, let us see with an example.

```js
import { createStore } from 'redux';

function reducer(state, action) {
  console.log('Reducer called', state, action);
  return action.type === 'DO_SOMETHING' ? 'done' : state;
}

const store = createStore(reducer); // state is initialized with undefined

console.log('State', store.getState()); // undefined

// You may update the UI here
const unsubscribe = store.subscribe(data => console.log('Subscriber notified'));

// Subscriber should be notified.
store.dispatch({
  type: 'DO_SOMETHING'  
});

console.log('State', store.getState()); // done

// Subscriber unsubscribed.
unsubscribe();

// Subscribe should not be notified anymore.
store.dispatch({
  type: 'DO_SOMETHING'  
});


```

State is not exposed on the Store object, so it cannot be read/changed directly. Only way for us to get the state is through getState(), and to change the state is through dispatch().

There can be only one store, so use reducer composition to create a single state out of many states.

Reducers should never mutate the state directly. Store state is **NOT** expected to be immutable, many libraries in Redux ecosystem depend on this fact.

When a store is created, Redux dispatches a dummy action to your reducer to populate the store with the initial state. You are not meant to handle the dummy action directly. Just return the default state.

[Official Docs](https://redux.js.org/basics/store)  
[API Docs](https://redux.js.org/api/store)  
[createStore()](https://redux.js.org/api/createstore)  