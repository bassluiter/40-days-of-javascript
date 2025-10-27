
// ## 1. Odd or Even?
//     - [ ] Take a number and find if the number is an odd or even number.
// - [ ] Print the number and result in the console.

console.log("--opdracht 1--");
const number = 10;

console.log(`is ${number} a even number? = ${(number % 2 === 0)}`);
console.log(`is ${number} a odd number? = ${(number % 3 === 0)}`);



// ## 2. Do you have a Driving License?
//     Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
//
//     - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.

console.log("--opdracht 2--");
let age = 17;

console.log(`old enough to drive = ${age >= 18}`);

// ## 3. Calculate CTC with a Bonus
// Let's calculate how much you earn from your office.

// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?
console.log("--opdracht 3--");
const salary = 12300;
const yearlySalary = salary * 12;
const yearlyBonus = (yearlySalary / 100) * 20;
const totalYearIncome = yearlySalary + yearlyBonus;


console.log(`My montly salary is ${salary} rupees`);
console.log(`my year salary without bonus is ${yearlySalary} rupees`);
console.log(`my yearly bonus is ${yearlyBonus} rupees`);
console.log(`total year income is ${totalYearIncome} rupees`);

// ## 4. Write a program for the Traffic Light Simulation.
//     Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
console.log("--opdracht 4--");
const color = "red";
const green = "GO";
const red = "STOP";

console.log(color === "green" ? green : red);

// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay for electricity bills per month and annually.
//
// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
//     - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
console.log("--opdracht 5--");
let unitsPerDay = 2;
const costPerUnit = 150;
const daysInMonth = 30;
const unitCostPerMonth = (unitsPerDay * costPerUnit) * daysInMonth;
const costPerYear  = (unitCostPerMonth * 12) * 0.8;

console.log(`Electricity bill per month is ${unitCostPerMonth} rupees.`);
console.log(`Electricity bill per year is ${costPerYear}.rupees`);

// ## 6. Leap Year Checker
// Is 2025 a Leap Year?

//     - [ ] Take `year` as input.
// - [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
console.log("--opdracht 6--");
const currentYear = 2025;
const dividedByFour = (currentYear % 4 === 0);
const dividedByHundred = (currentYear % 100 !== 0);
const dividedByFourHundred = (currentYear % 400 === 0);
const leapYears = dividedByFour && dividedByHundred || dividedByFourHundred;

console.log(leapYears ? "leap year" : "Not a leap year")

// ## 7. Max of Three Numbers
// Find the max number from the lot.
//
// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.
console.log("--opdracht 7--");

const p = 1;
const q = 5;
const r = 4;
let heighestNumber = p;
q > heighestNumber ? heighestNumber = q : heighestNumber;
r > heighestNumber ? heighestNumber = r : heighestNumber;

console.log(heighestNumber);

// ## 8. Bitwise Doubling
// A tricky one for you
//
//                  - [ ] Create a variable `count` and assign  a value, say, 5.
// - [ ] Now use the Bitwise shift operator to make the number double.
// - [ ] Print it on the console.
console.log("--opdracht 8--");
let count = 5;
// 5 = 101
// 10 = 1010

console.log(count << 1)