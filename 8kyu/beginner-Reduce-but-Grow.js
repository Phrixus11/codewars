// ❓Description:

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// ✅Solution:


//version 1

let array = [1, 2, 3, 4];

function grow(x) {
    return x.reduce((acc, curr) => {
        return acc * curr
    })
}

console.log(grow(array));

