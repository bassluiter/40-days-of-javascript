# Tasks
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?
```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
```
1,
2

so first time you run it will be 1
second time you run will be 2
it will close the count variable.
so counter() itself only runs once but the function inside does run.
so it does execute de count -- en logs the variable 2 times.


## 2. What will be the output and why?
```js
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());
```
100

i think cause this time the x value never got changed elsewere.
and testclosure is not stored and called in a value.
the double () will run it once just like 1 time on the example above.

the first testclosure() will result in the function.
en than second time it wil run  10 * 10 and return 100.

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

```js
function buttonClickEvent() {
let hasBeenClicked = 0;
document.getElementById("button").addEventListener("click", () => {
hasBeenClicked++;
console.log(`Checkout button has been clicked ${hasBeenClicked} times.`);
});
}

buttonClickEvent();
```

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

```js
function createMultiplier() {
let a = 44
let b = 1
let c = 0
return () => {
c = a + b;
b += 5;
return c;
}
}

const multiply = createMultiplier();
console.log(multiply());
console.log(multiply());
console.log(multiply());
console.log(multiply());
```

## 5. What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists
- 3) The object is automatically cloned
- 4) None of the Above.

2 The object remains in memory as long as the closure exists

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

```js
function doCount() {
let count = 0;
const h1 = document.getElementById("h1");
const inc = document.getElementById("increment");
const dec = document.getElementById("decrement");
const res = document.getElementById("reset");
h1.textContent = count;

    return {
        increment:  () => {
            inc.addEventListener("click", () => {
                count++
            console.log(`count = ${count}`)
                h1.textContent = count
            })
        },
        decrement:  () => {
            dec.addEventListener("click", () => {
                count--
                console.log(`count = ${count}`)
                h1.textContent = count
            })
        },
        reset: () => {
            res.addEventListener("click", () => {
                count = 0;
                console.log(`count = ${count}`)
                h1.textContent = count
            })
        }
    }
}

const counter = doCount();
counter.increment();
counter.decrement();
counter.reset();
```