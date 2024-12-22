// ❓Description:

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// ✅Solution:


//version 1
function numberToString(num) {
    return String(num)
}

//version 2
function numberToString(num) {
    return num.toString()
}

console.log(numberToString(999));
console.log(numberToString(-100));
