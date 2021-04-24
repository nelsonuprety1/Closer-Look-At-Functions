"use strict";
// Immediately Invoked Function Expression
const runOnce = function () {
    console.log("This will never run again");
};
runOnce();

// We want to actually execute a function immediately and not even having to save it somewhere
// This is how we do that
// We can trick Javascript into thinking that this is just an expression. And we do that by simply wrapping all into parantheses
(function () {
    console.log("This will never run again");
    // immediately calling the function by using ()
})();
// So this pattern 👆👆 is called the Immediately Invoked Function Expression

// IIFE for arrow functions
(() => console.log("This is for arrow function"))();

// Its important to hide variables. And for that scopes are a good tool for doing this. And this is also the reason why The Immediately Invoked Function Expressions were invented.
// So this is not a function of javascript but it's more of a pattern, that some developers came up with
// let and const create their own scopes. SO in modern Javascript Immediately Invoked Function Expressions are not that used anymore.Because if all we want is to create a new scope for data privacy all we need to do, is just create a block like this
{
    const isPrivate = 23;
}
console.log(isPrivate);
// There is no need of creating a  function to create a new scope. Unless of course we want to use var for our variables. But we probably shouldnt use var. 
// But if the goal is to execute a function just once, then the IIFE is still way to go. Even now with modern javascript