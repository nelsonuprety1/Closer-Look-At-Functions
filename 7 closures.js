'use strict';
// Closures
// Closure is not a feature that we explicitly use. So we dont create closures manually like we create a new
// array or a new function, so closure simply happen automatically in certain situations, we just need to recognize
// those situtations
// We will do that here in this example. So we will create one of those situtations so that we can then take a look at a closure
const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

// Closure makes a function remember all the variables that existed at the functions birthplace essentially
// So secureBooking is a birthplace of return function(){ this function
// Secret of closure:
// --Any function always has access to the variable environment of the execution context in which the function was created
const booker = secureBooking();

booker();
booker();
booker();