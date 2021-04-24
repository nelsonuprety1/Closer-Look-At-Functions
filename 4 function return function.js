'use strict';

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

// same thing as  above but using arrow functions
// one arrow function returning another arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);


const greeterHey = greet('Hey');
greeterHey('Nelson');
greeterHey('Steven');

// this worked because greeterHey is  function(name){
    //     console.log(`${greeting} ${name}`);
    // }

greet('Hello')('Nelson');
greetArr('Hi')('Eminelson');
