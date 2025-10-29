## 1. What will be the output of the following code and why?
```js

let user = "Alice";

function outer() {
function inner() {
console.log(user);
}
let user = "Bob";
inner();
}

outer();
```

de output must be "Bob";
cause if you follow the execution context.

The output must be “Bob”,
because if you follow the execution context:

When the outer function gets called,
in the Function Execution Context FEC Creation Phase CP  the inner function goes into memory.
After that, user will be stored in memory.
Then in the Execution Phase EP, user will be assigned the value “Bob”.
After that, the inner function is executed.
In the FEC and EP of the inner function,
it logs user and finds no user variable inside its own scope.
It then goes to the scope of the outer function and finds user with the value “Bob” there.

## 2. What is the mistake in the code below?
```js
let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);
```
total will be in the global scope.
So every time the function is called, the total will be increased.
The outcome will now be 15.
Everywhere else in the code, the total variable can be reassigned or accessed.
You have to be really careful with it in the rest of the code.


## 3. Create a function with a nested function and log a variable from the parent function.
```js
function loggingIn() {
    const loginMessage = "You are now logged in";
    function logMessage() {
        console.log(loginMessage);
    }
    logMessage();
}
loggingIn();
```

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

```js
function highestGrade(array) {
    let highestGrades = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestGrades) {
            highestGrades = array[i];
        }
    }
    return highestGrades;
}
console.log(highestGrade([6, 4, 5]));
console.log(highestGrades);
```
highestGrades log will result in a reference error; only available in the function. 

## 5. Write a function that tries to access a variable declared inside another function.

function outerFunction() {
const message = "Some random message";
innerFunction();
}

function innerFunction() {
console.log(message); 
}
outerFunction();



## 6. What will be the output and why?
```js
console.log(a);
let a = 10;
```
refference error, cause a is not initialized yet, when it tries to execute the console.log it cant find it yet.


## 7. Where is the `age` variable accessible?
```js
function showAge() {
    let age = 25;
    console.log(age);
}

console.log(age);
```

Options:
- A: In Global
- B: Only inside showAge
- C: It will cause an error
- D: None of the above

only inside showAge but thats not called yet so it will trow a error ( C );

## 8. What will be the output and explain the output?
```js
let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```
output will be "Hi" cause it will find no variable in inner scope.
then it will go outside en in de outer func it is declared.

## 9. What will be the output and why?
```js
let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();
```
ouput will be "Inner";

cause the x value is declared above it so it will not look in de outer & global scope



## 10. What will be the output and why?
```js
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
```
-1 
-2

so first time you run it will be -1
second time you run will be -2
it will close the count variable.
so counter() itself only runs once but the function inside does run.
so it does execute de count -- en logs the variable 2 times.