# Modules

Historically we manipulated functions to make our code modular. Thanks to community developed module systems like AMD and CommonJS that we have almost(yeah almost) standardized the way we do modules in JavaScript. For now you will see these two ways of importing modules in JavaScript world.

## Original Node.js standard borrowed from CommonJS

```js
// Default export syntax
// Export in module.js
module.exports = class Module {
  // Class definition
}
// Import in another file
const Module = require('./module');
const obj = new Module();


// OR

// Multiple export syntax
// Export in module.js
exports.myFunctionA = function () {
  // function definition
}

exports.myFunctionB = function () {
  // function definition
}

// Import in another file
const Module = require('./module');
Module.myFunctionA();

```

## New ECMAScript standard, still sinking in to Node.js

```js
// Export in module.js
// Default export syntax
export default class Module {
  //class code
}

// Import in another file
import Module from './module';
const obj = new Module();

// OR

// Multiple export syntax
// Export in module.js
function myFunctionA() {
  // function definition
}

function myFunctionB() {
  // function definition
}
export myFunctionA;
export myFunctionB;

// Import in another file
import { myFunctionA } from './module';
myFunctionA();
```

## Local vs Other/Global modules

```js
// Local
import Module from './module';
import Module from '../parallel_folder/module';
import Module from './child_folder/module';
// Other/Global
import Module from 'module';
```

## Node tries to resolve the global module in various folders, run the following in command line to understand

```js
>node
module.paths
```

There were just too many ways of creating modules, and ECMAScript committee wanted a create a syntax which is easy to migrate to from all of them, and does not break the existing systems.

Node.js, at it's inception had to choose a Module system and there was no standard at that time. They opted for CommonJS. You will see the require() function in most Node.js libraries, which are meant to run on server and command line.

Now that ECMAScript has defined a standard, everybody is moving on to the new standard.

[Historical Module Systems](https://addyosmani.com/writing-modular-js/)  
[ES Module System](http://exploringjs.com/es6/ch_modules.html)  
[CommonJS](https://requirejs.org/docs/commonjs.html)  
[AMD](https://requirejs.org/docs/whyamd.html)  
