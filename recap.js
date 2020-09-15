// Part - 2



// const name = 'Ariful';

// name = 'Wasim';

// console.log(name);


// const number = [10, 20];
// number[1] = 50;
// number.push(30);

// console.log(number);


// let patientName = 'Ariful';
// patientName = 'Wasim';

// console.log(patientName);



// Part - 3


// function add(num1, num2 = 0) {
//     if (num2 == undefined) {
//         num2 = 0;
//     }
//     num2 = num2 || 0;
//     return num1 + num2;
// }

// const result = add(5);
// console.log(result);



// Part-4 


// const firstName = 'Ariful';
// const lastName = 'Islam';
// const fullName = firstName + ' ' + lastName + ' is a good boy';

// const fullName1 = ` ${firstName} ${lastName} is a good boy`;

// // console.log(fullName);
// console.log(fullName1);


// const multiLine = `I love you
// I need you
// I muss you`;

// console.log(multiLine);


// Part - 5



// function add(num) {
//     return num * 2;
// }

// const result = add(5);
// console.log(result);


// const add = function (num) {
//     return num * 2;
// }

// const result = add(7);
// console.log(result);


// const add = num => num * 2;

// const result = add(9);
// console.log(result);


// const add = (x, y) => x + y;

// const result = add(5, 7);
// console.log(result);

const addAll = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = addAll(9, 7);
console.log(result);