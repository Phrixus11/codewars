// ❓Description:

// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

//test

// var albert = new Warrior("Albert")
// var boris  = new Warrior("Boris")

// Test.assertEquals(albert.toString(),"Hi! my name's Albert");
// Test.assertEquals(albert.name(),"Albert");
// Test.assertEquals(boris.name(),"Boris");

// boris.name("Bobo")
// Test.assertEquals(boris.name(),"Bobo");

// ✅Solution:

function Warrior(n) {
    let name = n;
    this.name = function (n) {
        if (n) name = n;
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}


let albert = new Warrior("Albert")
let boris = new Warrior("Boris")
console.log(albert.toString());

console.log(albert.name());
console.log(boris.name());
console.log(boris);
