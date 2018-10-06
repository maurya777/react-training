# String interpolation has been missing from JavaScript so far, while other languages had it from start

* JavaScript support both single quotes and double quotes for it's string literal.
* We used concatination for injecting dynamic values inside strings.
* Templates strings made it easier and again consice.
* Backticks are used for templates.
* Interpolations is done by using ${ANY_VALID_JS_EXPRESSION}.

```js
// Traditional way of using dynamic values inside strings
const greeting = 'Hello';
console.log(greeting + ' world');

// With tempates
console.log(`${greeting} world`);