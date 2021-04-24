'use strict';
// Super important topic
// How passing arguments works
// Value V.S. Reference

const flight = 'LH234';
const nelson = {
    name: 'Nelson Uprety',
    passport: 5322352
}

const checkIn = function(flightNum, passenger) {
    // Not a good practice to do so you should not change parameters of a function
    flightNum = 'LH999';
    // this here is same as manipulating the nelson object because it both points to same object in memory
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 5322352) {
        alert('Check In')
    } else {
        alert('Wrong Passport');
    }
}

// whats happening in the result of the following console.log?
// so flight here is a primitive type (just a string). And as we passed that value into 
// the function down here , then the flightNum here is basically a copy of that original value.
// So flight number contains a copy and not simply the original value of the flight variable.
// So this would be exactly same as writing (const flightNum = flight;).
// SO flightNum = 'LH999'; here is a completely different variable and as we changed it here,
// it did not get reflected in the outside flight variable and so it's still LH234.
checkIn(flight, nelson);
console.log(flight);
// about the nelson object that we passed
// So when we pass a reference type to a function, what is copied is really just a reference
// to the object in memory heap. But they both point to same object in memory
// So that would be doing just like this passenger = nelson 
console.log(nelson);

//  above code is the same as doing
// const flightNum = flight;
// const passenger = nelson;

// In summary passing a primitive type to a function is really just the same,
// as creating a copy like this in the above example(const flightNum = flight;), 
// outside of the function. So the value is simply copied

// On the other hand when we pass an object to a function, it is really just like copying
// an object like this (const passenger = nelson;). So whatever we change in a copy will also
// happen in the original.
// We need to be careful with this behavior 

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(nelson);
checkIn(flight, nelson);

// In programming there are two terms used all the time when dealing with functions,
// which is passing by value and passing by reference.
// There is some confusion between these terms and how it works in Javascript
//So, JavaScript does not have passing by Reference, only passing by Value even though,
// it looks like it's passing by reference

// Because we just learned, for Objecs, we do in fact pass in a reference. So the memory address of the object.
// However that reference itself is still a value. It's simply a value that contains a memory address.
// So basically we pass a referece to the function, but we donot pass by reference and this
// is an important distinction