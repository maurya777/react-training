# Babel

## ECMAScript

Syntax of ECMAScript is evolving very quickly, and the browsers, although in comparison to their history are quick now a days in accommodating these updates, are still lagging behind. Any new language feature cannot be robust unless used by community and tested by millions. Obviously we cannot use it, unless it is available in the browser. 

## Polyfills

Pollyfills are code snippets that enable a feature not available natively in target environment. Frustrated with the slow catching up of the browsers, community started developing Pollyfills to enable future features now. Over the time there were just too many of them and it started becoming a problem.

## Transpilation

While Compilation is a process of taking source code in a Higher level language and converting that to a lower level language, Transpilation  converts from one High level language to another which has same level of abstraction.

## 6to5

It was specially at the time of release of ES2015 AKA ES6, that there was this large gap between the two versions of ECMAScript. A new project was born which can turn the whole code base or ES6 to ES5. After ES6, it was supposed to die, but TC39 committee kept releasing new ECMAScript version, and the 6to5 project lived happily every after as Babel!

```bash
# initialize an npm package in your root directory
> npm init
# Install globally available babel command
> npm i --save-dev @babel/core @babel/cli
> npx babel --help
```

In previous example with webpack, if we wanted to convert the add.js to a class with class-properties like this, webpack won't be able to bundle it. Because class properties is not currently available in node(v10.11.0).

```js
// add.js
export default class {
  add = (a, b) => {
    return a + b;
  }
}

```

Babel can help us by converting this code to a compatible syntax. But to do that we need to tell Babel that we want the class property feature, which is still experimental.

```bash
# install @babel/core and @babel/plugin-proposal-class-properties
> npm i --save-dev @babel/plugin-proposal-class-properties
# transpile with babel plugin
> npx babel --plugins @babel/plugin-proposal-class-properties add.js -o add.babel.js
# let's see the output
> cat add.babel.js
# now webpack can understand the syntax of add.babel.js
# but let's change our main.js file to import it as a class.
```

```js
import Cls from './add.babel';
const obj = new Cls;
console.log('the sum of 3 and 4 is', obj.add(3, 4));
```

```bash
# bundle it
> webpack main.js --mode=development
> node ./dist/main.js
```

Babel too allows the command options to be provided from configuration file. By default .babelrc file found at the current directory is automatically picked up. Where we can write the configuration in JSON format.