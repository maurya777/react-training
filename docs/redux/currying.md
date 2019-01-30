# Currying

Concept of Currying is named after mathematician Haskell Brooks Curry(yes the Haskell programming language, plus the other two are also named after him!).

Currying is a way to partially apply a function. Wait what?

Let's try again. Currying is the process of taking a function that takes one or more arguments and turning that into a series of functions that take one(or more) argument each, and each return a function.

It is easier with an example, but without Mathematics:

```js

// Let's say we want to make a function to cook Biryani
const biryaniMaker = function(rice, turmeric, anythingElse) {
  return rice + turmeric + anythingElse;
}

// And we love Biryani so much that we do this
const vegBiryani      = biryaniMaker(rice, tumeric, cheese)
const eggBiryani      = biryaniMaker(rice, tumeric, egg)
const chickenBiryani  = biryaniMaker(rice, tumeric, chicken)
const muttonBiryani   = biryaniMaker(rice, tumeric, mutton)

// But we are programmers
// And we hate repeating
// Specially the rice and turmeric
// It is slow and boring
// What if,
// we can make partial Biryani
// with just Rice and Turmeric
// customize it later
// With currying!
const incrementalBiryaniMaker = function(rice) {
  return function(turmeric) {
    return function(anythingElse) {
      return rice + turmeric + anythingElse;
    }
  }
}
const partiallyCookedBiryani = incrementalBiryaniMaker(rice)(turmeric);
// Let's make the variations now, fast and easy!
const vegBiryani   = partiallyCookedBiryani(cheese);
const eggBiryani = partiallyCookedBiryani(egg);
const chickenBiryani = partiallyCookedBiryani(chicken);
const muttonBiryani = partiallyCookedBiryani(mutton);
```

Currying can be utilized for:

* Memoizing an expensive operation
* Partially calculate a function util final parameters arrive
* Dependency abstraction
* Closures(alternative to Binding) in closure based languages like JavaScript
