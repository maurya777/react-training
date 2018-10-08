# Template strings

## String interpolation has been missing from JavaScript so far, while other languages had it from start

* JavaScript support both single quotes and double quotes for it's string literal.
* We used concatenation for injecting dynamic values inside strings.
* Templates strings made it easier and again concise.
* Backticks are used for templates.
* Interpolations is done by using ${ANY_VALID_JS_EXPRESSION}.

```js
// Traditional way of using dynamic values inside strings
const greeting = 'Hello';
console.log(greeting + ' world');

// With templates
console.log(`${greeting} world`);
```