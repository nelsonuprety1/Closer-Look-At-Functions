'use strict';
// Sometimes its useful to have functions where some parameters are set by default so that we then do
// not have to pass them in manually if we dont want to change the default

// default values can contain any expression for eg below in price we can do price = 199 *2
// or we can do price = 199 * numPassengers. But numPassengers = 1 * price wont work because of the order (price comes after numpassenger)
const bookings = [];
const createBooking = function(flightNum,
    // es6 way of doing
     numPassengers = 1, 
     price = 199 * numPassengers){

        // ES5 way of doing
        // numPassengers = numPassengers || 1;
        // price = price || 199;
        const booking = {
            // using enhancedobject literal
            flightNum,
            numPassengers,
            price
        }
        console.log(booking);
        bookings.push(booking);
    };

    createBooking('LH123');
    createBooking('LH124', 2);

    // to skip arguments use undefined
    // this works because setting the parameter to undefined is the same thing as not even setting it
    createBooking('LH124', undefined , 100); 