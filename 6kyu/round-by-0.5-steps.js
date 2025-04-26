// ❓Description:

// Round any given number to the closest 0.5 step

// I.E.

// solution(4.2) = 4
// solution(4.3) = 4.5
// solution(4.6) = 4.5
// solution(4.8) = 5
// Round up if number is as close to previous and next 0.5 steps.

// solution(4.75) == 5

//Tests:

// ✅Solution:

function solution(n) {
    let temp = Number(n - Math.floor(n)).toFixed(2)
    console.log(temp);
    if (temp <= 0.74 && temp >= 0.25) {
        return Math.floor(n) + 0.5
    } else if (temp <= 0.24) {
        return Math.floor(n)
    } else {
        return Math.floor(n) + 1
    }
}

// console.log(solution(4.4));
console.log(solution(152.74));
