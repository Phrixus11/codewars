// ❓Description:

// Design a data structure that supports the following two operations:

// addWord / add_word which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter. Return true if the search term fully matches any word previously added; otherwise, return false.
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true
// Note: the data structure will be initialized multiple times during the tests!

//Tests:

// describe('Initial tests', () => {
//     var wd = new WordDictionary();
//     wd.addWord('a');
//     wd.addWord('at');
//     wd.addWord('ate');
//     wd.addWord('ear');
//     Test.assertEquals(wd.search('a'), true);
//     Test.assertEquals(wd.search('a.'), true);
//     Test.assertEquals(wd.search('a.e'), true);
//     Test.assertEquals(wd.search('b'), false);
//     Test.assertEquals(wd.search('e.'), false);
//     Test.assertEquals(wd.search('ea.'), true);
//     Test.assertEquals(wd.search('ea..'), false);
//     wd.addWord('co');
//     wd.addWord('cod');
//     wd.addWord('code');
//     wd.addWord('codewars');
//     Test.assertEquals(wd.search('........'), true);
//     Test.assertEquals(wd.search('c.o'), false);
//     Test.assertEquals(wd.search('cod.'), true);
//     Test.assertEquals(wd.search('c.o'), false);
//     Test.assertEquals(wd.search('co..w..s'), true);
//     Test.assertEquals(wd.search('co..w..'), false);
//   });


// ✅Solution:

class WordDictionary {
    constructor() {
        this.wd = []
    }
    addWord(word) {
        this.wd.push(word)
    }
    search(word) {
        let result
        outer: for (const el of this.wd) {
            if (word.length === el.length) {
                for (let i = 0; i < el.length; i++) {
                    if (word[i] === '.' || el[i] === word[i] ) {
                        result = true
                    } else {
                        result = false
                        continue outer
                    }
                }
            } else result = false
            if (result) return true
        }
        return result
    }
}




let wd = new WordDictionary()

// wd.addWord('codewars')
// wd.addWord('co')
// console.log(wd);
// console.log(wd.search('co'));


wd.addWord('a');
wd.addWord('at');
wd.addWord('ate');
wd.addWord('ear');



console.log(wd.search('a'), true);
console.log(wd.search('a.'), true);
console.log(wd.search('a.e'), true);
console.log(wd.search('b'), false);
console.log(wd.search('e.'), false);
console.log(wd.search('ea.'), true);
console.log(wd.search('ea..'), false);

