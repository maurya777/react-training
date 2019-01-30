# Actions

Actions are like events in any event system. They contain data, aka **Payload** along with a required property called "type".

```js
{
  type: 'ADD_TODO', // must have property
  text: 'Meet dave'
}
```

* They must be plain JS objects
* It should have "type" property
* The "type" property could be anything, but keeping it a String will make it serializable
* Other than "type", nothings else is mandatory.

A good standard that we can follow is [here](https://github.com/redux-utilities/flux-standard-action), aka Flux Standard Actions(FSA). Which look like this:

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'
  }
}
```

## Actions Creators

The primary clients of the Actions, are event handlers. Multiple event handlers might want to trigger the same action with different payloads.

Repeating the same Object creation code, around the application will soon make it un-maintainable.

A good practice to keep it manageable, is to centralize the creation logic in small functions, and keep them in a common place, from where they can be exposed to event handlers.

```js
function addTodo(todoText) {
  return {
    type: 'ADD_TODO',
    payload: {
      text: todoText
    }
  };
}

```

[Official Docs](https://redux.js.org/basics/actions)  