// ❓Description:

// Write a function that given an array of numbers >= 0, will arrange them such that they form the biggest number.

// For example:

// [1, 2, 3] --> "321" (3-2-1)
// [3, 30, 34, 5, 9] --> "9534330" (9-5-34-3-30)
// The results will be large so make sure to return a string.

// Test.assertEquals(biggest([1,2,3]),'321');
// Test.assertEquals(biggest([121,12]),'12121');
// Test.assertEquals(biggest([3, 30, 34, 5, 9]),'9534330');

// ✅Solution:


const biggest = (nums) => {
    return nums.filter(num => num !== 0).length > 0 ? 
    nums.sort((a, b) => Number(String(b) + String(a)) - (Number(String(a) + String(b)))).join('') : '0'
}

console.log(biggest([3, 30, 34, 5, 9]));
console.log(biggest([121, 12]));
console.log(biggest([1, 2, 3]));
console.log(biggest([2,3,0,0]));
