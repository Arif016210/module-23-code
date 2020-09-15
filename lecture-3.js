function add(num1, num2) {
    // if (num2 === undefined) {
    //     num2 = 0;
    // }

    num2 = num2 || 0;
    return num1 + num2;
}
const result = add(15);
console.log('Total = ', result)