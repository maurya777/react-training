# Async Actions with Redux Thunk

Redux Thunk (redux-thunk) is one of the middlewares that let us perform async operations(ajax, timeout etc.).

Instead of writing the plain action creators, which return just an object, we want to return function. The returned function should be able to call the dispatch() multiple times depending on the usage.

```js
// Our action creator
const fetchPosts = () => {
  return dispatch => {
    dispatch({
      type: REQUEST_POSTS
    })

    return fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => dispatch({
        type: RECEIVE_POSTS,
        response: json
      }))
  }
}

// Somewhere in the code
dispatch(fetchPosts());
```

If the action is a function the middleware should execute it, instead of dispatching it as an object. It should also pass the dispatcher function as an argument to the function.

Writing one on our own is also not so difficult, if we did it will be something like this:

```js
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)
```

There is no rocket science here, but industry has been working on asyc operations with Redux and has learned a few good practices.

There are basically three stages of an async operation, namely beginning, success and error. We can update our state on all three stages so that our UI can show the same.

Let us write an async action to fetch posts from an API:

```js
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// Action creators
const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST
});

const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts
});

const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
const fetchPostsFailure = message => ({
  type: FETCH_POSTS_FAILURE,
  message
});

// Async action creator
const fetchPosts = () => dispatch => {
  dispatch(fetchPostsRequest());
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => dispatch(fetchPostsSuccess(json)))
    .catch(error => dispatch(fetchPostsFailure(error.message)));
};

// Reducer
function posts(
  state = {
    isFetching: false,
    error: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: false
      };
    case FETCH_POSTS_SUCCESS:
      return {
        isFetching: false,
        error: false,
        items: action.posts
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message
      };
    default:
      return state;
  }
}

const loggerMiddleware = createLogger();
const store = createStore(
  posts,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // will help us to see the flow
  )
);

// store.subscribe(() => {
//   const state = store.getState();
//   document.getElementById("root").innerHTML =
//     state.error ||
//     (state.isFetching
//       ? "Fetching..."
//       : `
//     <ul>
//       ${state.items
//         .map(
//           item => `
//         <li>${item.title}</li>
//       `
//         )
//         .join("")}
//     </ul>
//   `);
// });
global.fetchPosts = fetchPosts;
global.store = store;
//store.dispatch(fetchPosts());

```

In the end, there are multiple other options too for async actions in Redux, but more or less they are the same. If you understand one, you understand others too.

[Official Docs](https://redux.js.org/advanced/async-actions)  
[Redux-thunk](https://github.com/reduxjs/redux-thunk)  
[Thunks basics](https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60)