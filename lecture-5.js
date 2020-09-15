// function doubleIt(num) {
//     return num * 2;
// }


// const doubleIt = function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = num => num * 2;
// const add = (num1, num2) => num1 + num2;

// const give = () => 5;

// const result1 = give();
// console.log(result1);

// const result = add(50, 70);

// const result = doubleIt(50);
// console.log('Result = ' + result)


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result2 = doMath(100, 75);
console.log(result2);