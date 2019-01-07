# Webpack

While the Module systems gained traction and it became easier to understand, test and refactor the code, it also started becoming complex to deliver them to browsers and then be sure that they arrived at desired sequence and did not slow down the browsers(a dependency hell).

JavaScript code couldn't be compiled like C++, but we could minify and join them together in desired sequence, so we can deliver them in a single file and not worry about the dependency failures.

Like all the other tools in open source community, Webpack is not the only bundler. There were/are others like Grunt, Gulp and Parcel but Webpack, so far, rules the industry.

Webpack started with JavaScript, but now we can bundle other formats like images and css too.

Oh, and it is the best thing to have if you are using ES6 modules in your code, as, neither node, nor browsers(most of them) have support for it so far.

```bash
# to install webpack as a globally available command line tool
> npm i -g webpack webpack-cli
> webpack --help
```

```js
// let's create two modules

// add.js
export default function (a,b) {
  return a + b;
}

// main.js
import add from './add'
console.log('Sum of 3 and 4 is', add(3, 4));

```

```bash
# now we can compile our like like this
> webpack main.js

# we can run the code as
> node ./dist/main.js

# and see the code
> cat ./dist/main.js

# the above code is not very readable, as by default webpack bundles the code in production mode, we can change that
> webpack main.js --mode=development

# now the cade is almost readable!
> cat ./dist/main.js

```

This is the essence of webpack, bundling!

But, while doing that, it exposes it's API so that developer's can customize it anyway they want. And the result is that there is a lot of fancy stuff happening around Webpack. Like CSS and image loaders, ES6 and TypeScript loaders, code splitting, tree shaking and a whole development server which has in memory bundling system and Hot module replacement.

Over the time the command with it's arguments becomes too huge, hence there is a support for configuration files. You might get overwhelmed when you see the webpack configurations of projects these days, but remember, that at the core webpack deals only with Modules. It always starts with one or more Entry point(s) and bundles them into one or more Output files. To do that it reads the input using Loaders, provides them to Plugins for transformations, and writes the result to Output.


[Webpack Documentation](https://webpack.js.org/concepts/)  
[Full course with Sean Larkin](https://frontendmasters.com/courses/webpack-fundamentals/)  
