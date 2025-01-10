// ❓Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


// ✅Solution:

let array = ['5', '0', 9, 3, 2, 1, '9', 6, 7]

//version 1
// function sumMix(x) {
//     let sum = 0;
//     let toNumber;
//     for (let i = 0; i < x.length; i++) {
//         toNumber = +x[i]
//         sum += toNumber
//     }
//     return sum
// }

console.log(sumMix(array));

//version 2
function sumMix(x) {
    return x.reduce((acc, cur) => acc + Number(cur), 0)
}