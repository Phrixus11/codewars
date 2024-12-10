// ❓Description:

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//Tests:

// it("Sample Tests", function() {
//     doTest("test", "es");
//     doTest("testing", "t");
//     doTest("middle", "dd");
//     doTest("A", "A");
// });


// ✅Solution:

// version 1
function getMiddle(s) {
    if (s.length % 2) {
        return s[s.length/2-0.5]
    }
    return s[s.length/2-1] + s[s.length/2];
}


// version 2
function getMiddle(s) {
return s.length % 2 ? s[s.length/2-0.5] : s[s.length/2-1] + s[s.length/2];
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
