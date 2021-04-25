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

booker();

// More Closer Examples
console.log('-----------More Closer Examples--------');
// These examples are going to demonstrate that we dont need to return a function from 
// another function in order to create a closure

console.log('----------Example 1----------');
let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a *2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b *2);
    };
}

g();
f();
console.dir(f);


// Reassigning f function
h();
f();
console.dir(f);

// Example 2
console.log('----------Example 2----------');
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

// closures has priority overscope chain
// if perGroup wasnt defined above then below value would be used
const perGroup = 1000;
boardPassengers(180, 3);

