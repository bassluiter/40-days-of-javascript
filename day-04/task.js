console.log("-- opdracht 1 --");
console.log("the outcome of the code = 'It's a normal day.'")


// # 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
console.log("-- opdracht 2 --");
withdrawalAmount = 400;

// if (withdrawalAmount % 100 === 0) {
//     console.log("withdrawal successful");
// } else {
//     console.log("Invalid amount");
// }

(withdrawalAmount % 100 === 0) ? console.log("withdrawal successful") :  console.log("Invalid amount");

// ## 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

console.log("-- opdracht 3 --");
let operator = "*";
let operand_1 = 2;
let operand_2 = 3;

switch(operator) {
    case "+":
        console.log(operand_1 + operand_2);
        break;
    case "-":
        console.log(operand_1 - operand_2);
        break;
    case "*":
        console.log(operand_1 * operand_2);
        break;
    case "/":
        console.log(operand_1 / operand_2);
        break;
    case "%":
        console.log(operand_1 % operand_2);
        break;
    default:
        console.log("operator does not match!");
        break;
}

// ## 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
//     - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8
// Write a program that prints the ticket price based on the person’s age.
console.log("-- opdracht 4 --");
let age = 60;
let ticketPrice;

switch(true) {
    case age < 18 && age >= 0:
        ticketPrice = 3;
        console.log(`$${ticketPrice}`);
        break;
    case age >= 18 && age < 60:
        ticketPrice = 10;
        console.log(`$${ticketPrice}`);
        break;
    case age >= 60:
        ticketPrice = 8;
        console.log(`$${ticketPrice}`);
        break;
    default:
        console.log("wrong age variable");
}

if (age < 18 && age >= 0) {
    ticketPrice = 3;
    console.log(`$${ticketPrice}`);
} else if (age >= 18 && age < 60) {
    ticketPrice = 10;
    console.log(`$${ticketPrice}`);
}else if (age >= 60) {
    ticketPrice = 8;
    console.log(`$${ticketPrice}`);
} else {
    console.log("wrong age variable");
}


// ## 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
console.log("-- opdracht 5 --");
let month = "January"
let zodiacSign;

switch (month) {
    case "January":
        zodiacSign = "Capricorn";
        break;
    case "February":
        zodiacSign = "Aquarius";
        break;
    case "March":
        zodiacSign = "Pisces";
        break;
    case "April":
        zodiacSign = "Aries";
        break;
    case "May":
        zodiacSign = "Taurus";
        break;
    case "June":
        zodiacSign = "Gemini";
        break;
    case "July":
        zodiacSign = "Cancer";
        break;
    case "August":
        zodiacSign = "Leo";
        break;
    case "September":
        zodiacSign = "Virgo ";
        break;
    case "October":
        zodiacSign = "Libra ";
        break;
    case "November":
        zodiacSign = "Scorpio ";
        break;
    case "December":
        zodiacSign = "Sagittarius";
        break;

    default:
        console.log("wrong month variable");
        break;
}
console.log(`you are born in ${month} and your zodiac sign is '${zodiacSign}'`);


// ## 6. Which Triangle?
//     A triangle has 3 sides. A Triangle type is determined by its sides:
//     - All sides equal is called, `Equilateral Triangle`.
// - Two sides equal is called, `Isosceles Triangle`.
// - All sides different is called, `Scalene Triangle`.
//
//     Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
console.log("-- opdracht 6 --");

const sideA = 15;
const sideB = 14;
const sideC = 13;

if (sideA === sideB && sideA === sideC) {
    console.log("Equilateral Triangle");
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log("Isosceles Triangle");
} else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    console.log("Scalene Triangle");
}