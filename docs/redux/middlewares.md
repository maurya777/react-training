# Middlewares

Think about man-in-the-middle attack(MITM).

<figure>
  <img src="./man-in-the-middle-mitm.jpg" />
  <figcaption>Photo Credit: incapsula.com</figcaption>
</figure>

Middleware is a similar concept in functional programming but for good. Oftentimes it is also called "Piping", as in Linux commands.

### Example:

Let's say we have a vastly used logger function in our application.
It has been there since inception of our application.

```js
function logger(log) {
  console.log(log);
}
```

This function has been only logging on console, which stays on customer's site only. We now want to push these logs to our server so that we can proactively analyze them and improve our product.

One way to do that, is to just re-implement the logger function

```js
function logger(log) {
  // add this new line
  sendToServer(log);
  console.log(log);
}
```

But doing that would break the rule of "Open/Closed Principal" of SOLID design principals. Which states that "Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.”

The general idea of this principle, is to write your code, so that you will be able to add new functionality without changing the existing code.

Think of this logger function as if it was not your function, but coming from a third party library. You won't be able to re-write it.

So how do we extend the function?

```js
// We store the reference of existing function
const loggerFunc = logger;
// And assign a new function to logger variable
logger = function (log) {
  sendToServer(log);
  loggerFunc(log);
}
```

The calling code will always think that it is calling the original function, the original function will think that it is being called normally. And our function will become the "Man in The Middle".

## Middlewares in Redux

The Store.dispatch(), we saw in Store's chapter, by default only supports plain objects as argument. With which we can achieve only synchronous data flow. i.e.

* You call store.dispatch(action).
* The Redux store calls the reducer function you gave it.
* The Redux store saves the complete state tree returned by the reducer.

In this whole process you can't do anything else e.g. API calls. Redux Middleware are extensions to store.dispatch(), so that we can even pass functions, or in fact, Promises to the dispatch function.

As per official docs, a Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

For me, a Middleware allows side effects in Redux.

[Official docs](https://redux.js.org/advanced/middleware)