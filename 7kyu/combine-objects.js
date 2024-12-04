// ❓Description:

// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

// The combine function should be a good citizen, so should not mutate the input objects.

// ✅Solution:

//Tests:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// describe('Combine two objects', () => {
//   testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
//   testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// })

// describe('Combine three objects', () => {
//   testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
//   testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
// })

// describe('Handle empty objects', () => {
//   testDeepEqual(combine({}, {}, {}), {})
//   testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })
// })


const objA = { a: 10, b: 20, c: 30, f: 5, d: 7 }
const objB = { a: 3, c: 6, d: 3 }
console.log(combine(objA, objB));  // Returns { a: 13, b: 20, c: 36, d: 3 }

//version 1
function combine(...rest) {
    resultObj = {isEmpty: 0}
    let isIssue = false;
    for (const el of rest) { 
        for (const key1 in el) {
            isIssue = false
            for (const key2 in resultObj) { 
                if (key1 !== key2) {
                    isIssue = true
                } else {
                    resultObj[key2] += el[key1]
                    isIssue = false
                    break
                }
            }
            if (isIssue) {
                resultObj[key1] = el[key1]
            }
        }
    }
    delete resultObj.isEmpty
    return resultObj
}

//version 2
function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
}

