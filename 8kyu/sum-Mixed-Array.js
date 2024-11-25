// ❓Description:

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


// ✅Solution:

let array = [9, 3, '7', '3']

// option 1
function sumMix(x) {
    let sum = 0;
    let toNumber;
    for (let i = 0; i < x.length; i++) {
        toNumber = +x[i]
        sum += toNumber
    }
    return sum
}

console.log(sumMix(array));
