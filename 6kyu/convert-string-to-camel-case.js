// ❓Description:

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

//Tests:

// assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
// assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

// ✅Solution:
//v1
function toCamelCase(str) {
    result = str.split(/[_-]/)
    for (let i = 1; i < result.length; i++) {
        result[i] = result[i].split('')
        temp = result[i][0].toUpperCase()
        result[i][0] = temp
    }
    result = result.flat()
    result = result.join('')
    return str.length ? result : ''
}

toCamelCase("the-stealth-warrior")
toCamelCase("the_stealth_warrior")
toCamelCase("A-B-C")
toCamelCase("")