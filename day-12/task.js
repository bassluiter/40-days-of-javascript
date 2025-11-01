const person = {
    name: "Tapas",
    company: {
        name: "tapaScript",
        location: {
            city: "Bangalore",
            zip: "94107"
        }
    }
};

console.log("------------------------ task 2 --");
// console.log(person.name);
// console.log(person.company);
// console.log(person.company.location.city);

// console.log(person["name"]);
// console.log(person["company"]);
// console.log(person["company"]["location"]["city"]);

const {name} = person;
console.log(name);
const {company} = person;
console.log(company);
const {company: {location : {city}}} = person;
console.log(city);

/* static Methods

object.keys
object.create
object.assign   copys all propporties from second argument to the first Object.assign({}, lastName) will be new variable;
but if it has a nested non primitive type value. it will only copy a the reference.
 */
const firstName1 = {firstName: "Bas", age:{age: 34}}
const firstName2 = { firstName: "Kirsten"};

const firstName = Object.assign(firstName1, firstName2);
console.log(firstName); // { firstName: "Kirsten"}
console.log(firstName2 === firstName) // false

firstName.age = {age: 25};
console.log(firstName1);


// structuredClone(object) will clone like Object.assign() but nested non primitives will not have same reference;

// from a object to an array.  Object.entries()

const thisObject = {age: 31, isFat: true, weight: 100}
const objectToArray = Object.entries(thisObject);
console.log(objectToArray);


const entries = new Map([
    ["age" , 12],
    ["isFat", false]
]);
Object.fromEntries(entries);
console.log(entries);

// freeze method
// immutable so you cant change value's;
// Object.freeze();

// Object.isFrozen() returns true or false so is the object frozen or not.

// Object.seal() de object cant be reassigned ande deleted or add new key value pair except a value can be redeclared.

// Object.hasOwn(objectName, key) returns true or false depending if it has the key in the object


// optional chaining operator ?.
// const name =  employee.department?.name  it will return undefined if department is not in the object instead of an error
// it is usefull if u not sure it will retrieve the data from the api/backend and you dont want a error

// ## 4. Build a Student Management System
//
// - Store student details in an object (name, age, grades).
// - Implement a method to calculate the average grade.

const student = {
    name: "Mark",
    age: 25,
    grades: [8, 6.5, 4, 7, 6],
    calcGradeAverage() {
        let gradesAdded = 0
        for (let grade of this.grades) {
            gradesAdded += grade;
        }
        return gradesAdded / this.grades.length;
    }
}
studentGradeAverage =  student.calcGradeAverage();
console.log(studentGradeAverage);


// ## 5. Book Store Inventory System
//
// - Store books in an object.
// - Add functionality to check availability and restock books.

const books = {
   1: {title: "It all comes back to you", author: "Melissa Wiesner" },
   2: {title: "All the way to the river", author: "Elizabeth Gilbert" },
   3: {title: "When no one is watching", author: "Alyssa Cole" },
   4: {title: "Maybe in another life", author: "Taylor Jenkins Reid" }
}

function isBookAvailable(title, booksObj) {
    let bookFound = false;
    title = title.trim();

    for (let key in booksObj) {
        if (booksObj[key].title === title) {
            bookFound = true
            return `The book:"${booksObj[key].title}" is still available`;
        }
    }
    if (!bookFound) {
        return `The book ${title} is not available! we need to restock the book`;
    }
}

checkIfBookAvailable = isBookAvailable("Maybe in another life", books);
console.log(checkIfBookAvailable);

const user = {name: "Piet"};
// Object.hasOwn(object, key);
console.log(Object.hasOwn(user, "name"));

// object.hasOwnProperty();
const user2 = {name: "Klaas"};
console.log(user2.hasOwnProperty("name"));
console.log(user.hasOwnProperty("name"));


const person2 = { name: "John" };
const newPerson = person2;
newPerson.name = "Doe";
console.log(person2.name);
console.log(newPerson.name);
person2.name = "Bas";
console.log(newPerson.name);

// ## 10. Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];


for (let {name, address, age} of users) {
    console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}