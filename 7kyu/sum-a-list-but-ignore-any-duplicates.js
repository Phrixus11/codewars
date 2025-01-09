// ❓Description:

// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.



//Tests:

// [[1, 1, 2, 3], 5],
// [[], 0],
// [[1, 1, 2, 2, 3], 3],
// [[5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1], 21],
// [[0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0], 31],
// [[0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2], 15],
// [[7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5], 25],
// [[7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5], 27],

// ✅Solution:


//version 1
function sumNoDuplicates(numList) {
    numList.push(0)
    return numList.filter((el, i, arr) => {
        for (let index = 0; index < arr.length; index++) {
            if (i === index) {
                continue
            } else if (arr[index] === el){
                return false
            }
        }
        return true
    }).reduce((acc, cur) => acc + cur)
}




console.log(sumNoDuplicates([1, 1, 2, 2, 3]));


//version 2

