# Promise

## Callback

A callback is a function, provided as argument, by the calling code, which will be executed, by the called function, at right time.

```js
// A bare minimum ajax function
// which will accept a callback
function ajax(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () =>
    xhr.status === 200 && callback(xhr.responseText)
  xhr.send();
}

// process of passing a callback
ajax('https://jsonplaceholder.typicode.com/todos/1', (response) => {
  // this will be executed by ajax function
  // when the response is received
  console.log(response)
})
```

## Callback hell

It was common for developers to write code like this:

```js
ajax(url_to_get_user, function(user){
  ajax(url_to_get_users_posts, function(posts){
    ajax(url_to_get_users_post_one, function(post){
      ajax(url_to_get_users_post_one_comments, function(comments){
        //....and on and on
      }
    }
  }
})
```

Above example might not look too bad, but assume there was lot more accompanying code in every callback.

## Working with Promises

With ES6, we got Promise. A way to flatten these callbacks. It is somewhat easier on the eyes.

```js
function ajaxWithPromise(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

ajaxWithPromise(url_to_get_user)
  .then(function(user){
    return ajaxWithPromise(url_to_get_users_posts)
  })
  .then(function(posts){
    return ajaxWithPromise(url_to_get_users_post_one)
  })
  .then(function(post){
    return ajaxWithPromise(url_to_get_users_post_one_comments)
  })
  /// and on and on

```

[Promise basics](https://javascript.info/promise-basics)  
[Promises at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
[Promises in depth](http://exploringjs.com/es6/ch_promises.html)  