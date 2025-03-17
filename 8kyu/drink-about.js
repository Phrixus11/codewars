// ❓Description:

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// ✅Solution:


//version 1
function peopleWithAgeDrink(old) {
    let result
    switch (true) {
        case old < 14:
            result = "drink toddy"
            break;
        case old < 18:
            result = "drink coke"
            break;
        case old < 21:
            result = "drink beer"
            break;
        case old >= 21:
            result = "drink whisky"
            break;
    }
    return result;
};

console.log(peopleWithAgeDrink(22));
console.log(peopleWithAgeDrink(22));
