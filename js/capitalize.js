const capitalize = ([first,...rest]) => first.toUpperCase() + rest.join('').toLowerCase();

let string = "capitalizeMe";

console.log(string);                // capitalizeMe
console.log(capitalize(string));    // Capitalizeme
