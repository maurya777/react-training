# Arrow functions

Also known as Fat arrow functions are different from the traditional functions in two ways:

## 1. They are concise

### Specifying parameters:

* () => { ... } // no parameter
* x => { ... } // one parameter, an identifier
* (x, y) => { ... } // several parameters

### Specifying a body:

* x => { return x * x }  // block
* x => x * x  // expression, equivalent to previous line
* x => ({}) // Wrap objects with brackets

## 2. They bind to the surrounding context

```js
function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        return this.prefix + x;
    });
};
const gentlemenFactory = new Prefixer('Mr. ');
const people = ['you', 'me', 'zumi'];
const gentlemen = gentlemenFactory.prefixArray(people);
console.log(gentlemen);
```

[ES6:Arrow Functions](http://exploringjs.com/es6/ch_arrow-functions.html)