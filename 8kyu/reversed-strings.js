// ❓Description:

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// ✅Solution:

//version 1
let phrase = 'hello'

console.log(solution(phrase));

function solution(str) {
    let word = ""
    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i];       
    }
    return word
}

//version 2

function solution(str) {
    return str.split('').reverse().join('')
}