

// ## 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
//     Formula: (Celsius * 9/5) + 32 = Fahrenheit

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * (9/5)) + 32;
}
const fahrenheit = convertCelsiusToFahrenheit(15);
console.log(fahrenheit);

// ## 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {
    if (num1 > num2 || num1 === num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else  {
        return "not a number";
    }
}
console.log(findMax(-300 , -400));

// ## 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {

    for (let i = 0 , j = str.length - 1; i < j; i++, j--) {
        if (str[i] === str[j]) {
            console.log(`index ${i} '${str[i]}' is equal to index ${j} '${str[j]}'`);
        } else {
            console.log(`index ${i} '${str[i]}' is not equal to index ${j} '${str[j]}'`);
            console.log(`${str} is not a palindrome`);
            return false;
        }
    }
    console.log(`${str} is a palindrome`);
    return true;
}
console.log(isPalindrome("leper"));
console.log(isPalindrome("rotor"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("meetsysteem"));


// ## 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n.
//     Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
    let num = n;
    for (let i = n -1; i > 0; i --) {
        console.log(`${num} * ${i} = ${num * i}`);
        num = num * i;
    }
    return num;
}
console.log(factorial(10));

// ## 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  const  vowels = ["a", "e", "i", "o", "u"];
    str = str.toLowerCase();
    let count = 0;
    for (let i =0; i < str.length; i++) {

        for (let j = 0; j < vowels.length; j++) {
            if (vowels[j] === str[i]) {
                count++;
            }
        }
    }
    return count;
}
console.log(countVowels("How many vowels there are in this sentence?"));


// ## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
function capitalizeWords(sentence) {
    sentence = sentence.toLowerCase();
    sentence = sentence.split(" ");

    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    sentence = sentence.join(" ");
    return sentence;
}
console.log(capitalizeWords("are all the word begin with a capital letter?"));

// ## 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function(secondWord) {
    console.log(`Hello, ${secondWord}!`);
}("JavaScript"));

// ## 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback) {
    callback(name);
}

function sayHello(person) {
    console.log("Hello " + person);
}

greet("Bas", sayHello);
// ## 9. Create Call Stack Execution Diagram for this flow
//
//     ```js
// function f1() {}
// function f2() {
//     f1();
// }
// f2();
// ```

/* first f2 will go in to the call stack.
   because there is a function inside f1 wil go in the call stack on top of f2
    when f1 is finished it will go out of the stack and after that f2 will go out of the call stack*/
        // f1
        // f2

// ## 10. Create Call Stack Execution Diagram for this flow
//
//     ```js
// function f1() {}
// function f2() {}
// function f3() {
//     f1();
// }
// f2();
// f3();
// f1();
// ```

/* f2 will go in the stack got executed and go out of the stack
   f3 will go inside of the stack and there is a function f1 that will also called and go on top of f3 in the stack.
   f1 wil run and complete and go out of the stack after that f3 will be complete and go out of the stack*/

//     f1
// f2  f3 f3 --