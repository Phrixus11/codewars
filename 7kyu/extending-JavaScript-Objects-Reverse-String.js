// ❓Description:

// Unfortunately, there's no a .reverse() method for the JavaScript String object.

// Your task is to extend JavaScript String object, so you can reverse strings just like this:

// 'Hello, World!'.reverse();
// The method should return:

// '!dlroW ,olleH'

// ✅Solution:



String.prototype.reverse = function () {
    return [...this.valueOf()].reverse().join('')
}

let str = new String('123')

console.log(str.reverse());
