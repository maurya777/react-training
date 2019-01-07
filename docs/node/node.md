# Node.js

ECMAScript is just a language specification, which has multiple implementations. The most popular one is JavaScript. In general JavaScript word is used for all the different JavaScript engines available:

* V8 - Google Chrome, Chromium, Node.js
* Gecko, Quantum, SpiderMonkey - Mozilla FireFox, Thunderbird.
* Chakra - IE

Historically JavaScript was prominent only in browsers, but not anymore. Just like everything else, Browsers evolved and found that JavaScript is just another module for them like User Interface, Network and Rendering. Now these engines can work outside of the Browsers. It first started with V8

Now a days Node.js is most popular implementation of JavaScript outside the Browsers, which is using V8 inside. There are others too but not popular

There are many ways of installing Node.js, for beginners the best way is to install using the installers available on Node.js website

```bash
# Once you have the node.js installed you should be able to run the following command to check the version
node -v
v10.11.0

# You can execute any JavaScript file using the following command
node test.js
# test.js
# console.log("hello node");
hello node
```

In addition to support for core JavaScript API, Node.js API has built support for common operations for File, Network, OS etc. just like other programming languages

[Node official site](https://nodejs.org/en/)  
[Node API](https://nodejs.org/api/)  