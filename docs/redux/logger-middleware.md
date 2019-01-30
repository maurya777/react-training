# Logger Middleware

Every data update in Redux happens because of an Action, and these actions happen synchronously(read one by one). If we could log these actions, it will be like a story.

Let us write a middleware to achieve this.

```js
// Save the original
const next = store.dispatch;
store.dispatch = function(action) {
  console.log('dispatching', action);
  // Run the original
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}
```

What if we want to push these action logs on server, so that we can learn about user's behavior, and proactively predict actions for them. But we also don't want to do this in our existing middleware.

Let us write another middleware.

```js
// Save the original
const next = store.dispatch;
store.dispatch = function(action) {
  // Run the original
  const result = next(action);
  sendToServer(action, store.getState());
  return result;
}
function sendToServer() {
  // to be filled
}
```

What if we wanted to make these middlewares re-usable?

We can obviously make them functions:

```js
function addLogging(store) {
  const next = store.dispatch;
  return function(action) {
    console.log('dispatching', action);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
  }
}

function addServerLogging(store) {
  const next = store.dispatch;
  return function(action) {
    const result = next(action);
    sendToServer(action, store.getState());
    return result;
  }
}

// store creation
store.dispatch = addLogging(store);
store.dispatch = addServerLogging(store);
```

Seems better, but still the repetition of calling middleware function can be improved. How about creating a Utility function which can take an array of Middlewares and run them for us.

```js
function applyMiddleware(store, middlewares) {
  // Transform dispatch function with each middleware.
  middlewares.forEach(middleware => (store.dispatch = middleware(store)))
}

// Now we can do this
applyMiddleware(store, [addLogging, addServerLogging]);
```

This use case of overriding the dispatch function for generating side effects, is so common that Redux allows us to extend the store. Along with createStore() call, we can provide a function, called Enhancer, as last parameter. When the store object is constructed, it is passed to the Enhancer function to extend it as it pleases.

If we want to make our code compatible with createStore(), We have to change our applyMiddleware utility to return a curried function, which will take the createStore in argument and create the store later. And because applyMiddleware doesn't need store anymore, we can pass middlerwares as individual arguments, instead of creating an array.

In our middlewares, we can remove the calculation of next() function, by making them return another curried function, which will receive the next() function from applyMiddleware() utility.

```js
function addLogging(store) {
  return function(next) {
    return function(action) {
      console.log('dispatching', action);
      const result = next(action);
      console.log('next state', store.getState());
      return result;
    }
  }
}

function addServerLogging(store) {
  return function(next) {
    return function(action) {
      const result = next(action);
      sendToServer(action, store.getState());
      return result;
    }
  }
}

function applyMiddlewares(...middlewares) {
  return function(createStore) {
    return function(reducer, preloadedState) {
      const store = createStore(reducer, preloadedState);
      let dispatch = store.dispatch;
      middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
      return Object.assign({}, store, { dispatch })
    }
  }
}

// Now we can do this
const store = createStore(reducer, applyMiddlewares(addLogging, addServerLogging));
```

The applyMiddleware utility is again so common that, it has been included in the Redux package. Other than few minor changes, it is almost the same.

The redux logger is also very useful middleware and hence is available and used widely as "redux-logger".

Finally how about writing above code with arrow functions:

```js
const addLogging = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
}

const addServerLogging = store => next => action => {
  const result = next(action);
  sendToServer(action, store.getState());
  return result;
}

const applyMiddlewares = (...middlewares) => createStore => (reducer, preloadedState) => {
  const store = createStore(reducer, preloadedState);
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => (dispatch = middleware(store)(dispatch)))
  return Object.assign({}, store, { dispatch })
}

// Now we can do this
const store = createStore(reducer, applyMiddleware(addLogging, addServerLogging));
```

[Official Docs](https://redux.js.org/advanced/middleware#understanding-middleware)  
[Apply middleware](https://redux.js.org/api/applymiddleware)  
[Redux logger](https://www.npmjs.com/package/redux-logger)  
[createStore()](https://redux.js.org/api/createstore)