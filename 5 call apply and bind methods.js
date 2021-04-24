"use strict";
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    //  using enhanced object literal to write function
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
    }
};

lufthansa.book(239, "Nelson Uprety");
lufthansa.book(635, "John Smith");

const eurowings = {
    // These property names they all need to have the exact same format as the original object on the top(lufthansa) because 'this' method is trying to read just these properties
    airline: "Eurowings",
    iataCode: "EW",
    bookings: []
};

// How do we tell JavaScript explicitly or manually what this 'this' keyword should look like?
// --There are three function methods to do that and they are called call, apply and bind.

// This is possible because JS has first class functions
const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah williams");

// Call method
// In a call method the first argument is exactly what we want the 'this' keyword to point to
// This time we didnt called the book function ourselves Instead, we called the call method and this then call method which will call the book function with the this keyword set to eurowings

// eurowings is a this keyword and rest other is list of arguments
book.call(eurowings, 23, "Sarah williams");
console.log(eurowings);

book.call(lufthansa, 239, "Eminem");
console.log(lufthansa);

const swiss = {
    // These property names they all need to have the exact same format as the original object on the top(lufthansa) because 'this' method is trying to read just these properties
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: []
};

book.call(swiss, 583, "Nelson Eminem");

// Apply method
// The apply method and call method is basically the same but the big difference is that the apply method does not receive list of arguments after the this keyword, instead it's gonna take array of the arguments
// And so it will then take the elements from that array and pass it into the function
const flightData = [583, 'Uprety Nelson'];
book.apply(swiss, flightData);
console.log(swiss);

// This apply method is not that used anymore in modern JS because now we have a better way of doing the exact same thing

book.call(swiss, ...flightData);


// Bind method
// Just like the call method bind also allows us to manually set 
// the 'this' keyword for any function call. The difference is that bind does not immediately
// call the function instead it returns a new function where the 'this' keyword is bound.
// So it's set to whatever value we pass into bind.

// book.call(eurowings, 23, "Sarah williams");
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

// What we did here so, basically specifying parts of the argument beforehand, is actually a common pattern
// called Partial Application. So, a partial application means that a part of the arguments of the original function are already applied,
// so which means, already set. And thats exactly is bookEW23 function is.
// Its essentially the book function but with 23 predefined
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Cooper');

// With event listeners 
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

// In an event handler function, the 'this' keyword always points to the element on which that handler is attached to.
// lufthansa.buyPlane is the handler function attached to document.querySelector('.buy') element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// In this case we dont care about the this keyword. Its not even here in the function and so we say null. It can be 
// any other value nothing will happen with it but it's kind of a standard to use null
// Using bind actually it really gives us a new function. addVAT is a returned new specific function
const addVAT = addTax.bind(null, 0.23);
// this is how our addVAT function looks like
// addVAT = value => value + value * 0.23;
console.log(addVAT(100));


// functions returning functions
const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(33));