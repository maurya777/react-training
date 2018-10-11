# Array methods

* Imperative(conventional) vs Declarative(functional) approach.
  * Imperative methods tell how to do.
    * for, while etc.
  * Declarative methods tell what to do.
    * forEach((value, index) => {})
    * map((value, index) => {})
    * filter((value, index) => {})
    * find((value, index) => {})
    * some((value, index) => {})
    * every((value, index) => {})
    * reduce((accumulator, next, index) => {}, initialValue)

```js
// forEach()
const arr1 = [1,2,3,4,5];
arr1.forEach(i => console.log(i)); // Doesn't return anything

// map()
const arr2 = [1,2,3,4,5];
const newArray2 = arr2.map(i => i*10);
console.log(newArray2);

// reduce()
const arr3 = [1,2,3,4,5];
const total3 = arr3.reduce((acc, item) => acc + item, 0);
console.log(total3);

// filter()
const arr4 = [1,2,3,4,5];
const newArray4 = arr4.filter(i => i%2 === 0);
console.log(newArray4);

// find()
const arr5 = [
  {key:'key1', value:'value1'},
  {key:'key2', value:'value2'},
  {key:'key3', value:'value3'},
];
const value5 = arr5.find(i => i.value === 'value2');
console.log(value5);

// some()
const arr6 = [1,2,8,4,5];
const value6 = arr6.some(i => i%4 === 0);
console.log(value6);

// every()
const arr7 = [8,4,12,16];
const value7 = arr7.every(i => i%4 === 0);
console.log(value7);

```

NOTES:

* They cannot break out of execution;
* They don't even iterate for undefined values;

[Array API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)