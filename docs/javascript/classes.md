# Classes

## Classes in JavaScript are just syntactic sugar, at core they are prototypes and constructor as before

Compiling the following class hierarchy in Babel REPL with ES2015 loose mode:

```js
class Person {
  getName() {
    return "my name";
  }
}

class Friend extends Person {
  getConnectionLevel() {
    return 1;
  }
}
```

gives us the following:

```js
"use strict";

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = (function() {
  function Person() {
    _classCallCheck(this, Person);
  }

  Person.prototype.getName = function getName() {
    return "my name";
  };

  return Person;
})();

var Friend = (function(_Person) {
  _inherits(Friend, _Person);

  function Friend() {
    _classCallCheck(this, Friend);

    return _possibleConstructorReturn(this, _Person.apply(this, arguments));
  }

  Friend.prototype.getConnectionLevel = function getConnectionLevel() {
    return 1;
  };

  return Friend;
})(Person);
```

[The prototype chain](http://exploringjs.com/impatient-js/ch_proto-chains-classes.html#classes)  
[ES6 Classes in vanilla JS](https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a)
