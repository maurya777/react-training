# Why React and not other libraries

## Functional Paradigm - fn(data)=>UI

UI is a function of data, you change the data, the UI changes. UI can only trigger events(aka dispatching actions in flux architecture). Which can decide what and how to change the data.

## No template library

JSX? No. It's there just for developer's convenience, the actual code is pure JavaScript. Which runs very fast as compared to string based templates, which are frequently compiled to DOM when the data binding changes.

## Reusable and Composable

It is based on Atomic architecture, where you break the components upto the atomic level and compose them to form molecules and organisms.

## Minimal DOM updates

It's diffing algorithm also known as the reconciliation, minimizes the number of DOM updates for browser. Which is a big concern for Single Page Apps, where screens repaint and reflow frequently.

## Un-Opinionated

It describes itself as a library for building UI. And that is it. You can use whatever library you want for data stores, animations, API fetching, Routing, Theming, Forms etc. You can easily integrate third party libraries using lifecycle methods. It doesn't dictate how you provide you dependencies. You can write plain JavaScript and it will still work, without any transpilation.

[Official Doc](https://reactjs.org/docs/getting-started.html)
[Why React](https://reactjs.org/blog/2013/06/05/why-react.html)
[Why](https://bit.ly/2uKvoGC)