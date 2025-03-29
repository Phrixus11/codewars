// ❓Description:

// Write a function x(n) that takes in a number n and returns an nxn array with an X in the middle. The X will be represented by 1's and the rest will be 0's.
// E.g.

// x(5) === [[1, 0, 0, 0, 1],
//           [0, 1, 0, 1, 0],
//           [0, 0, 1, 0, 0],
//           [0, 1, 0, 1, 0],
//           [1, 0, 0, 0, 1]];

// x(6) === [[1, 0, 0, 0, 0, 1],
//           [0, 1, 0, 0, 1, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 0, 1, 1, 0, 0],
//           [0, 1, 0, 0, 1, 0],
//           [1, 0, 0, 0, 0, 1]];

//Tests:


// ✅Solution:

function x(n) {
    let acc=0
    let result = []
    for (let i = 0; i < n; i++) {
        result[i] = []
    }
    while (acc<n) {
        for (let i = 0; i < n; i++) {
            if (i===acc) {
                result[i].push(1)
            } else  result[i].push(0)
        }
        acc++
    }
    acc=0
    while (acc<n) {
        for (let i = n-1; i >= 0; i--) {
                result[acc++][i] = 1
        }
    }
    return result
}

console.log(x(5));
console.log(x(6));
