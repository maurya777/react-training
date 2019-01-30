# Pure functions

## Pure = Not mixed

A function is pure, if it only operates on the arguments provided, and the only way for it to communicate with outside world is through the return value.

*-Wikipedia*

> In computer programming, a pure function is a function that has the following properties: Its return value is the same for the same arguments. Its evaluation has no side effects. Thus a pure function is a computational analogue of a mathematical function.

Or as [Eric Elliot says](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)  
> A pure function is a function which:
> * Given the same input, will always return the same output.(idempotent)
> * Produces no side effects.
>
> A dead giveaway that a function is impure is if it makes sense to call it without using its return value. For pure functions, that’s a noop.

## Side Effects

Any interaction with anything outside the function is a Side Effect. It could either be a victim, or cause of it. Some examples are:

* Making an HTTP request
* Mutating data
* Printing to a screen or console
* DOM Query/Manipulation
* Math.random()
* Getting the current time

[Video: Learning Functional Programming](https://www.youtube.com/watch?v=e-5obm1G_FY&feature=youtu.be)  
[Introduction to pure functional programming](https://www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/)  
[Functional Programming Principles](https://medium.freecodecamp.org/functional-programming-principles-in-javascript-1b8fc6c3563f)