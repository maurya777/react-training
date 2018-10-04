```JavaScript 
// `
// Variable at global scope
var globalNum = 10;

// Variable at function scope
function func() {
  var numInsideFunction = 15;
  
  // Nested function
  function inner() {
    // Can acces parent function's scope
    console.log(numInsideFunction);
  }
  inner();
  
  // Global variables are accessible inside function
  console.log(globalNum);
}

// Can't access numInsideFunction here;
console.log(numInsideFunction); // undefined

// vars can be re-defined
var globalNum = 10;

{
  // let's and const's are block scoped
  let blockNum = 12;
  const blockConst = 3;

  // must be initialized
  const anotherConst; // Exception

  // it can be updated
  blockNum = 13;
  // but can't be re-defined;
  let blockNum = 14; // Exception!

  // const's can neither be updated
  blockConst = 5; // Exception!
  // nor be re-defined;
  const blockConst = 6; // Exception!
}

// Const's are just constant references
const anotherConst = {
  someProp: 35
};

// though the referenced object's can be updated.
anotherConst.someProp = 40;

````