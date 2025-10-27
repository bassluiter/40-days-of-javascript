

// if (true) {
//     var variable = "This variable = readable outside of the block scope";
// }
// console.log(variable);

// const age = 30 + 1;
// let isStudend = true;
// let favoriteProgramingLanguage = "JavaScript";

// let name = "Sluiter";

// console.log(name);
// console.log(age);
// console.log(isStudend);
// console.log(favoriteProgramingLanguage);


const person = {
    name: "bas",
    age: 31,
    natonality: "Dutch",
    hair_color: "blond",
    eye_color: "blue",
    is_cool: true,
}

console.log(person.name);

let samePerson = ["bas", 31, "Dutch", "blond", "blue"];
const name = samePerson[0];
const age = samePerson[1];
const natonality = samePerson[2];
const hair_color = samePerson[3];
const is_cool = samePerson[4];

console.log(name);
console.log(age);
console.log(natonality);
console.log(hair_color);
console.log(is_cool);

samePerson = ["Kirsten", 31, "Dutch", "blond", "green"];


console.log(name);
console.log(age);
console.log(natonality);
console.log(hair_color);
console.log(is_cool);