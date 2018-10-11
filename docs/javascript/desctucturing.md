# Destructuring, rest and spread

- Destructuring allows you to pick selected data
- Rest allows you to store any number of properties in a single variable
- Spread is the reverse of the Rest
- It works with both Object and Arrays with little difference in syntax
- It works with var, let and const as well as with the function parameters

```js
// Destructuring with variable declaration
const data = {
  name: "John",
  state: "California",
  phone: "234420222"
};
const languages = ["c++", "Python", "JavaScript"];

// Destructuring an object
const { name, phone } = data;
console.log(name, phone);

// Destructuring an array
const [firstLanguage] = languages;
console.log(firstLanguage);

// Destructuring function params
function printDetails({ name, phone, state }) {
  console.log(name, phone, state);
}
printDetails(data); // Notice that data is a single argument here

// An example of rest
const { state, ...otherProps } = data;
console.log(otherProps);

// An example of spread
const dataClone = { ...data };
console.log(dataClone);

// Switching two variables
let a = 1,
  b = 3;
[b, a] = [a, b];
console.log(a, b);

// spread instead of function.call(context, arg1, arg2, arg3)
function printLanguages(lang1, lang2, lang3) {
  console.log(lang1, lang2, lang3);
}
printLanguages(...languages);

// rest for unknown number of arguments
function printData({ name, ...otherDetails }) {
  // This pattern of passing arguments is getting quit popular
  console.log(name, ...otherDetails);
}
printData(data); // again data is a single argument here
```

[ES6 destructuring](http://exploringjs.com/es6/ch_destructuring.html)  
[ES6 spread](http://exploringjs.com/es6/ch_parameter-handling.html#sec_spread-operator)