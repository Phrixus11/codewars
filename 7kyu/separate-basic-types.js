// ❓Description:

// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// ✅Solution:

//version 1
function separateTypes(input) {
    const result = {}
    let number = []
    let string = []
    let boolean = []
    for (const el of input) {
        let type = typeof (el)
        switch (type) {
            case "string":
                string.push(el)
                result.string = string
                break;
            case "number":
                number.push(el)
                result.number = number
                break;
            case "boolean":
                boolean.push(el)
                result.boolean = boolean
                break;
        }
    }
    return result
}



//version 2


console.log(separateTypes(['a', 1, 2, false, 'b']));

// console.log(typeof ('a'));
// console.log(typeof (1));
// console.log(typeof (false));
