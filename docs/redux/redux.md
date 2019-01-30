# Redux

As per official website:
>Redux is a predictable state container for JavaScript apps.
>
> It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

It's either un-comprehensible, or probably too dense.

## What is it then?

As our Single Page Applications grow, the data, which is also called **State**, gets pretty mixed up with the View libraries like React. The logic to update the State also gets tightly coupled with logic to update the Views(components).

The idea of Redux, is to separate the data from view. It is not a new thing, we have been there done that, but on server side, this a client side.

It is not an exact implementation of Flux, but very much like it. 

It is inspired by Elm, a functional programming language of its own which in turn is inspired by Haskell.

If we were to draw a diagram, it will look like this:
<figure>
<img src="https://camo.githubusercontent.com/9de527b9432cc9244dc600875b46b43311918b59/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343739302f415243482d5265647578322d657874656e6465642d7265616c2d6465636c657261746976652e676966" />
  <figcaption>Photo: Danny Huang - kuanhsuh.github.io</figcaption>
</figure>

You have a *Single* *Immutable* **Store** for the whole application  
-> which contains a *Serializable* **State**, which is *Observed* by views,  
-> who may create new **Actions** and **Dispatch** them,  
-> to every **Reducer** (a *Pure functions*) to compute a new state

## There are three principals in Redux

### 1. Single source of truth

_The **state** of your whole application is stored in an object tree within a single **store**._

It becomes easier to inspect and debug. Being a plain object, it can be serialized and stored and de-serialized(hydrated) for resuming from wherever you left off in the application.

### 2. State is read-only(Immutable)

_The only way to change the state is to **dispatch** an **action**, an object describing what happened._

The state becomes _predictable_, as running the same sequence of actions will always generate the same output. You may log, store and serialize the actions for debugging.

### 3. Changes are made with pure functions

_To specify how the state tree is transformed by actions, you write pure **reducers**._

Reducers being pure functions, can be split, composed, re-ordered and reused.

## It's the practices, not the framework

In the end Redux is not a library or framework, it is a set of best practices, with about five helper functions, which might help you follow these best practices. So if you could take home even only these practices, the job is done!



[Dan Abramov: Youtube.com: Introducing Redux](https://www.youtube.com/watch?v=xsSnOQynTHs)  
[Dan Abramov: Egghead.io: Getting Started](https://egghead.io/courses/getting-started-with-redux)  
[Dan Abramov: Egghead.io: Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)  
[Same tutorial above in a website: learnreduxwithdanabramov.com](https://learnreduxwithdanabramov.com/)  
[Official Docs](https://redux.js.org/introduction/getting-started)  
[Official Docs](https://redux.js.org/introduction/getting-started)  
[A cartoon intro](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)  