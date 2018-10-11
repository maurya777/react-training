# Context

* "this" keyword behaves a little differently inside functions in JavaScript as compared to other languages.
* It is determined by how the function is called.
* Global context.

```javascript
// The global object:
console.log(this === window); // true

// A function's default context is the Global object.
function globalFunction() {
  return this;
}
console.log(globalFunction() === window); // true

// For a method(function property) the context is the owner object.
var test = {
  prop: 42,
  method: function () {
    return this.prop;
  },
};
console.log(test.method()); // Expect 42

prop = 55;
var detachedFunc = test.method;
console.log(detachedFunc()); // Expect 55

// Rule of thumb is, whatever is preceding the function call with a dot separator is usually the context.
var test2 = {
  prop: 66,
};
test2.attachedMethod = detachedFunc;
console.log(test2.attachedMethod()); // Expect 66

// Switching context with call
console.log(test.method.call(test2)); // Expect 66

// Switching context with apply
console.log(test.method.apply(test2)); // Expect 66

// Switching context with bind
// Reference of the same function but bound to a different context
var boundFunction = test.method.bind(test2);
console.log(boundFunction()); // Expect 66

// Difference between call, apply and bind
console.log(Math.max(1, 2, 3));
console.log(Math.max.call(null, 1, 2, 3));
var numbers = [1,2,3,4,5,6,7,8,9];
console.log(Math.max.apply(null, numbers));
var maxButNotLessThanNine = Math.max.bind(null, 9);
console.log(maxButNotLessThanNine(1,2,3));
console.log(maxButNotLessThanNine(1,2,3, 12));
```

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[this in detail](http://dmitrysoshnikov.com/ecmascript/chapter-3-this/)