/* 
    More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
//Tests for equality and inequality with strings

let a = "white";
let b = "black";

console.log(a == b); //false
console.log(a != b); //true

// Tests using the lower case function
console.log(a.toLowerCase() == 'white'); //true
console.log(a.toLowerCase() == 'White'); //false

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let c = 2;
let d = 5;
console.log(c == d); //false
console.log(c != d);//true
console.log(c > d); //false
console.log(c < d); //true
console.log(c >= d); //false
console.log(c <= d); //true

// Tests using "and" and "or" operators

console.log(c < d && c != d); //true
console.log(c < d || c == d); //true

// Test whether an item is in a array
let Arr = ['Pakistan', 'India', 'Srilanka', 'USA'];
console.log("Is Pakistan in Array of countries?", Arr.includes('Pakistan')); //true

//Test whether an item is not in a array
console.log("Is Australia not in the Array of countries?", Arr.indexOf('Australia') === -1); //true


