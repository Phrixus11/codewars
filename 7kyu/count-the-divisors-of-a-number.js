// ❓Description:

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000, but fixed tests go higher.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


// assert.strictEqual(getDivisorsCnt(1),  1);
// assert.strictEqual(getDivisorsCnt(10), 4);
// assert.strictEqual(getDivisorsCnt(11), 2);
// assert.strictEqual(getDivisorsCnt(54), 8);

// ✅Solution:

// version 1

function getDivisorsCnt(n) {
    let count=0
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) count +=2
        if ((i===(n/i))) count--
    }
    return n===1? 1 : count
}

