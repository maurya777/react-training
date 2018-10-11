# Object literal new features

* Key-val shortcuts
* Dynamic keys
* Methods

```js
// variable name becomes the key and it's value become the value
const name='John';
const props = {
  name
}
console.log(props['name']);

// When we don't know the name of the key in advance
var key = 'name'
const dynamicKey = {
  [key]: 'John'
}
console.log(dynamicKey[key]);

// Object literal can have the same syntax as the Class
const objectWithMethod = {
  getName() {
    return 'John';
  }
}
console.log(objectWithMethod.getName());
```

[MDN Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)