// ❓Description:

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

//Tests:

// assert.strictEqual(persistence(39),3);
// assert.strictEqual(persistence(4),0);
// assert.strictEqual(persistence(25),2);
// assert.strictEqual(persistence(999),4);

// ✅Solution:

//v1
function persistence(num) {
    let result = 0
    let arr = []
    while (num.toString().length > 1) {
        result ++
        arr = num.toString().split('').map(e => Number(e))
        num = arr.reduce((acc,cur) => acc*cur)
    }
    return result
}

//v2
function persistence(num, result=0) {
    let arr = num.toString().split('').map(e => Number(e))
    return arr.length===1 ? result : persistence(arr.reduce((acc,cur) => acc*cur), ++result)
}

//v3
function persistence(num, result=0) {
    let arr = num.toString().split('').map(e => Number(e))
    if (arr.length===1) return result
    else return persistence(arr.reduce((acc,cur) => acc*cur), ++result)
}

//v4 
function persistence(num) {
    let arr = num.toString().split('').map(e => Number(e))
    if (arr.length===1) return 0
    else return 1 + persistence(arr.reduce((acc,cur) => acc*cur))
}


console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
