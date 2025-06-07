// ❓Description:

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//Tests:

// ✅Solution:

function findUniq(arr) {
    let set = new Set(arr)
    let filteredArray = [...set]
    console.log(filteredArray);
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0]
    if (filteredArray[0] === arr[0]) return filteredArray[1] 
    return filteredArray[0] 
}



console.log();

console.log(findUniq([ 1, 0, 0 ]))//, 1);
console.log(findUniq([ 0, 1, 0 ]))//, 1);
console.log(findUniq([ 0, 0, 1 ]))//, 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))//, 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]))//, 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]))//, 10);