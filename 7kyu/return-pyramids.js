// ❓Description:

// The task is very simple.

// You must to return pyramids. Given a number n you print a pyramid with n floors

// For example , given a n=4 you must to print this pyramid:

//    /\
//   /  \
//  /    \
// /______\ 

// Other example, given a n=6 you must to print this pyramid:

//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// /__________\
// Another example, given a n=10, you must to print this pyramid:

//          /\
//         /  \
//        /    \
//       /      \
//      /        \
//     /          \
//    /            \
//   /              \
//  /                \
// /__________________\
// Note: a line feed character is needed at the end of the string. Case n=0 should so return "\n".

//Tests:


// ✅Solution:

function pyramid(n) {
    if(n === 1) return '/\\\n'
    let result = ''
    let space = ' '
    let underline = '_'
    let countSpace = n
    for (let i = 1; i <= n * 2; i += 2) {
        countSpace--
        if (i === 1) result += `${space.repeat(n - 1)}/\\\n`
        if (i < n * 2 - 1 && i > 1) result += `${space.repeat(countSpace)}/${space.repeat(i - 1)}\\\n`
        if (i === n * 2 - 1) result += `/${underline.repeat(i - 1)}\\\n`
    }
    return result
}



console.log(pyramid(1));



