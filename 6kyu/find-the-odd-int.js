// ❓Description:

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//Tests:

// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// doTest([10], 10);
// doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
// doTest([5,4,3,2,1,5,4,3,2,10,10], 1);

// ✅Solution:
//v1
function findOdd(arr) {
    let result 
    arr.forEach(element => {
        arr.filter(el=> el===element).length % 2 === 1 ? result = element: ''
    });
    return result;
}
//v2
const findOdd = (arr) => {
    for (const element of arr) {
        if(arr.filter(el=> el===element).length % 2 === 1) return element 
    }
}

console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
