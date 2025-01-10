// ❓Description:

// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

//Tests:

// assert.strictEqual(reverseVowels("Hello!"), "Holle!");
// assert.strictEqual(reverseVowels("Tomatoes"), "Temotaos");
// assert.strictEqual(reverseVowels("Reverse Vowels In A String"), "RivArsI Vewols en e Streng");

// ✅Solution:

// version 1
function reverseVowels(str) {
    let vowel_list = 'aeiouAEIOU'
    let newArrOfIndex = []
    let newArrOfString = str.split('')
    str.split('').forEach((el, ind) => {
        if (vowel_list.indexOf(el) != -1) {
            newArrOfIndex.push(ind)
        }
    });
    newArrOfIndex.forEach((el, i) => {
        newArrOfString[el] = str[newArrOfIndex[newArrOfIndex.length - i - 1]]
    })
    return newArrOfString.join('')
}

reverseVowels('Tomatoes')