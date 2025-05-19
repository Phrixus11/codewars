// ❓Description:

// Sentence Calculator
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

// Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
// Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
// Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
// Other characters: 0 value
// Note: input will always be a string

//Tests:

// tester("I Love You", 170);
// tester("ILoveYou", 170);
// tester("ARE YOU HUNGRY?", 356);
// tester("oops, i did it again!", 152);
// tester("Give me 5!", 73);
// tester("Give me five!", 110);

// ✅Solution:

function lettersToNumbers(s) {
    let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
    let alphabetUpperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('')
    let alphabetDigits = "0123456789".split('')
    let result = 0
    for (let i = 0; i < s.length; i++) {
        if (alphabetLowerCase.indexOf(s[i]) >= 0) result += alphabetLowerCase.indexOf(s[i]) + 1
        if (alphabetUpperCase.indexOf(s[i]) >= 0) result += (alphabetUpperCase.indexOf(s[i]) + 1) * 2
        if (alphabetDigits.indexOf(s[i]) >= 0) result += alphabetDigits.indexOf(s[i])
    }
    return result
}



console.log(lettersToNumbers("I Love You"));