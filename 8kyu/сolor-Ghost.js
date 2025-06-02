// ❓Description:

// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// ✅Solution:



class Ghost {
    constructor() {
        switch (Math.floor(Math.random() * 4) + 1) {
            case 1:
                this.color = 'white'
                break;
            case 2:
                this.color = 'purple'
                break;
            case 3:
                this.color = 'red'
                break;
            case 4:
                this.color = 'yellow'
                break;
        }
    }
}

let obj = new Ghost('asd')
console.log(obj);


// var Ghost = function() {
//     this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
//   };