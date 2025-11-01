# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```
I think it will be "Not provided".
Cause if the left operand of ?? is null or undefined it will output the right side and that is "Not provided". 
If its not null or undefined it will stay as it was.
That's what the nullish operator works ( ?? ); 


## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```
nothing obj will remain a:1;
Object.freeze() will freeze the object so it cant be changed.

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
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
```
Answer:
```js
const {name} = person;
const {company} = person;
const {company: {location : {city}}} = person;
```

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

Answer:
```js
const student = {
name: "Mark",
age: 25,
grades: [8, 6.5, 4, 7, 6],
calcGradeAverage(grades) {
let gradesAdded = 0
for (let grade of grades) {
gradesAdded += grade;
}
return gradesAdded / grades.length;
}
}

studentGradeAverage =  student.calcGradeAverage(student.grades);
console.log(studentGradeAverage);
```

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

```js
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
            return `The book ${booksObj[key].title} is available`;
        }
    }
    if (!bookFound) {
        return `The book ${title} is not available! we need to restock the book`;
    }
}

checkIfBookAvailable = isBookAvailable("Maybe in another life", books);
console.log(checkIfBookAvailable);
```
## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
Both will return to arrays but,
Object.keys() will give all keys as an array
```js
 ["name", "age", "birthPlace"];
````
Object.entries() will give both key and value as an array inside an array
```js
[["name", "Piet"], ["age", 50], ["birthPlace" , "Rotterdam"]]
```
## 7. How do you check if an object has a certain property?
```js
const user = {name: "piet"};
Object.hasOwn(object, key);
Object.hasOwn(user, "name"); // True
```
in the example above, Object.hasOwn() checks if the object has property called name in it.
it will return true or false.
```js
user.hasOwnProperty("name"); // true
```
.hasOwnProperty() also work only if the object name and the property/argument name is thesame it returns a false.
so Object.hasOwn is safer to use

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```
"Doe"
but person.name will also be "Doe"

because newPerson is a different variable but reference to thesame object now.
so both will be result in "Doe".



## 9. What’s the best way to deeply copy a nested object? Expalin with examples
The best way is with structuredClone()
structuredClone(object) will clone the whole object;
Object.assign() will clone only the first layer, all nested non primitives values wil have share the same reference as the original.
so its only good idea if u not have nested non primitives.


## 10. Loop and print values using Object destructuiring

```js
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
```

```js
for (let {name, address, age} of users) {
console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);

//    Name: Alex, Address: 15th Park Avenue, Age: 43
//    Name: Bob, Address: Canada, Age: 53
//    Name: Carl, Address: Bangalore, Age: 26

}
```
