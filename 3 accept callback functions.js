'use strict';
// First-class Functions v.s. Higher-Order Functions
// Higher order function. A function that accepts other functions as an input

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// creating a higher order function
const transformer = function(str, fn){
    console.log(`Original string:${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    // functions can have properties and name is the property
    console.log(`Transformed by: ${fn.name}`)
}
// upperFirstWord and oneWord are callback functions. Because we do not call them ourselves, But instead we call
// JS to basically tell them later.
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
// Why are callback functions so much used in JavaScript and why are they so helpful?
// --- The first big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts.
// --Call back functions allows us to create abstraction and what that means is that we can hide the,
// detail of some code implementation because we dont really care about all that detail.

const high5 = function(){
    console.log('😎');
}

// addEventListener is a higher order function
document.body.addEventListener('click', high5);
['Jonas','Martha','Adam'].forEach(high5);