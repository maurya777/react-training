# Immutable Data

## Shallow vs Deep equality

If you want to know if two variable are holding the same object(data) in JavaScript, you will have to traverse every property in both variables and see if they have the same values for those properties. This is called shallow equality check. When you have properties which themselves contain other objects, then you have to do this exercise recursively. It might not seem a big deal, but for large objects with multiple levels of nesting, it is slow, even for JavaScript. We have to dig deeper, in the storage and fetching algorithms of JavaScript, to understand why.

## What if we don't change the data?

What if you and your teammates pledge that you will never change an object, once it is defined. Then, you don't have to compare each property and the nested objects. You can simply apply the Identity/Strict equality(===) operator and see if two variables are pointing to the same object itself.

## The programmer inside you might scream "What The *?"

If you have never heard of this, you might decide, that you want to leave your team! Don't worry, you don't have to, you can simply create a new Object every time you wanted to change an Object.

## Will it not hurt the performance even more?

Facebook by any standard is dealing more than average JavaScript data on its applications. There are many popular libraries using Immutable.js, Immer or other libraries that can guarantee you never change an object and always return a new one. 

There are features in vanilla JS, and with new features in ES6 like rest, spread and destructuring, it is even more pleasing to have immutability in our code.

## A little glimpse

```js
// Object update with mutation
const foo = { firstName: 'John', secondName: 'Doe' };
const bar = foo;
bar.firstName = 'Jane';
console.log(foo); // foo is changed too
// Without mutation
const bar = Object.assign({}, foo, { firstName: 'Jane' });
console.log(foo); // foo is unchanged
// or
const bar = {...foo, firstName: 'Jane' };
console.log(foo); // foo is unchanged

// Array update with mutation
const names = ['Alpha', 'Charlie'];
const soldiers = names;
soldiers.push('Bravo');
console.log(names); // names is changed too
// without mutation
const soldiers = names.concat('Bravo');
console.log(names); // names is unchanged
// or
const soldiers = [...names, 'Bravo'];
console.log(names); // names is unchanged
```

[Watch a youtube presentation](https://www.youtube.com/watch?v=I7IdS-PbEgI&feature=youtu.be)  
[Immutable Data using ES6 and Beyond](http://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/)  
[Immutable Data from Scratch](https://ryanfunduk.com/articles/immutable-data-from-scratch/)  
[Immutable.js](https://facebook.github.io/immutable-js/)  
[Immutable update patterns](https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns)  