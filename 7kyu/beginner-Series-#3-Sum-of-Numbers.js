// ❓Description:

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. [Учитывая два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее.] If the two numbers are equal return a or b. [Если два числа равны, верните a или b.]

// Note: a and b are not ordered! [a и b не заказаны!]

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// ✅Solution:

function getSum(a, b) {
    let sum = 0;
    if (a < b) {
        while (a <= b) {
            sum += a;
            a++
        }
    } else {
        while (b <= a) {
            sum += b;
            b++
        }
    }
    return sum
}

