
function buttonClickEvent() {
    let hasBeenClicked = 0;
    document.getElementById("button").addEventListener("click", () => {
        hasBeenClicked++;
        console.log(`Checkout button has been clicked ${hasBeenClicked} times.`);
    });
}

buttonClickEvent();


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
