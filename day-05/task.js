
// ## 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
//
//     ```bash
// *
// * *
// * * *
// * * * *
// * * * * *
// ```

console.log("--- task 1 ---");
let astrix = "*";

for (let i = 0; i < 5; i ++){
    console.log(astrix);
    for (let count = 0; count< 1; count ++){
        astrix += "*";
    }
}

// ## 2. Craete Multiplication Table (Using for loop)
//     Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:
//
//     ```bash
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30
// ```
console.log("--- task 2 ---");
let N = 8;

console.log(`The Table of ${N}`)
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N} = ${N * i}`);
}

// ## 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
console.log("--- task 3 ---");
let sum = 0;
for (let i = 1; i <= 500; i++) {
    if (i % 2 !== 0) {
        sum = sum + i;
    console.log(`at odd nr ${i} the addition = ${sum}`)
    }
}

// ## 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.
console.log("--- task 4 ---");

for (let i = 1; i <= 20; i ++){
    if (i % 3 !== 0) {
        console.log(i);
    }
}

// ## 5. Reverse Digits of a Number (Using while loop)
//     Write a program to reverse the digits of a given number using a while loop.
//
//     Example:
//
// ```bash
// Input: 6789
// Output: 9876
// ```
console.log("--- task 5 ---");

let number = 6789;
let numberToString = number.toString();
let index = numberToString.length - 1;
let reversed = "";

while (index >= 0) {
    reversed += numberToString;
    index--;
}

console.log(`Original: ${number}`);
console.log(`Reversed: ${reversed}`);

// ## 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
console.log("--- task 6 ---");

/* for loop
   checks if condition = true
   if true execute the code.
   increment or decrement to the update
   goes back and check the condition again
   if condition = false exit the loop

   while loop
   checks if the condition is true
   if true execute the code.
   if condition = false exit the loop

   do while loop
   execute the code.
   checks if the condition is true
   if true execute the code block
   if condition = false exit the loop
 */