// ## 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

/* TDZ name start */
console.log(`hello ${name} thanks for the course`); /* reference error */
const name = "Tapas"; /* TDZ name end */

function greet(name){ /* TDZ lastName start */
    return `hello ${name} ${lastName}`;  /* reference error */
    const lastName = "Adhikary";  /* TDZ lastName end */
}

console.log(greet(name));

if (name === "Tapas") { /* TDZ variable_2 start */
    //
    //
    var variable = "var should not be used"; /* IDK if var has a TDZ? (maybe in a function) but else the tdz will start on top of the page and ends here */
    let variable_2 = "let and const u should use"; /* TDZ variable_2 end */
}


// ## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// first log will half work cause of the greeting wil be created to memory in de CP.
// and var is function scope so it does not trow a reference error
console.log(greeting + " You");
var greeting = "hey";
console.log(greeting + " You");

// CP
//     greeting :undefined
// EP
//     log: undefined You
//     greeting: "hey"
//     log: "hey You"

// in function hoisting the function already gets put inside of the memory in the creation phase
// therefor if it wil execute the function it already knows were to find it, in the execution phase

sayHelloWorld();

function sayHelloWorld() {
    console.log("Hello World");
}

// CP
//     sayHello in memory
// EP
//     sayHelloWorld() invoked
//     log: Hello world