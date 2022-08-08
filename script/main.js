"use strict"

// Task 1 
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// // fibonacci.forEach(index => console.log(array));

// fibonacci.forEach(function(numFibonacci) {
// console.log(numFibonacci);
// })


// Task 3

// const numbers = [7, -4, 32, -90, 54, 32, -21];
// // const result = numbers.filter(num => num > 0 );
// // console.log(result);

// function numFilter (num) {
//     if (num > 0) {
//     return true;
//     }
// }
// console.log(numbers.filter(numFilter));

// Task 4
// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
// const newfibonacci = fibonacci.reduce((acc, currentValue) => acc + currentValue);
// console.log(newfibonacci);

// const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987].reduce(function(acc, currentValue){
//     return acc + currentValue;
// });
// console.log(fibonacci);

// Task 5
const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const findNumbers = numbers.find(item => item % 2 === 0 );
console.log(findNumbers);