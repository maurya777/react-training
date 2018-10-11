# Objects

## Everything is Object and Object is everything

JavaScript is not Object oriented, it is Object based.

var n = 10;

here n is an object initialized to the value 10.

You do not have Classes, you have Constructors(factories) and Prototypes.  
You do not extend, you compose(mixins).

```js
// constructors
function Car () {}
Car.prototype.topSpeed = 150;
Car.prototype.accelerate = function () {
  console.log('Duuuur!', this.topSpeed);
};

let car = new Car();
car.accelerate();

// composition
const F1Traits = {
  accelerate: function () {
    console.log('Vrooom!', this.topSpeed);
  }
}
const FerrariTraits = {
  topSpeed: 300
}
car = Object.assign(car, F1Traits, FerrariTraits);
car.accelerate();
```

[Course](https://egghead.io/courses/understanding-javascript-s-prototypal-inheritance)  
[Detailed Theory](http://dmitrysoshnikov.com/ecmascript/chapter-7-1-oop-general-theory/)  
[OOJS](https://javascript.info/object-oriented-programming)  