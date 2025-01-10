// ❓Description:

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// ✅Solution:

let phrase = "The greatest victory is that which requires no battle"

//version 1
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(reverseWords(phrase));
console.log(reverseWords("hello world!"));


//version 2
function reverseWords(str) {
    return str.split(' ').reverse().join(' ')
}