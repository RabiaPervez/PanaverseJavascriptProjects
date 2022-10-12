/* 

    Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
 Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
// ------------------------------------------------------------------------------------------

// 5 tests with True as output

//test 1
let bagColor = 'white';
console.log("Is the color of bag white? I predict true");
console.log(bagColor == 'white'); //true

//test2
console.log("Is the value of b greater than or equal to a?");
console.log(b > a); //true

//test3
let a = 2;
let b = 3;
console.log("Is the value of b not equal to a?");
console.log(b != a); //true

//test4
console.log("Is the value AND type of b not equal to a?");
console.log(b !== a); //true

//test5
console.log("Is the value of b greater than a?");
console.log(b > a); //true


// 5 tests with False as output

//test 6
console.log("Is the value of b less than a?");
console.log(b < a); //false

//test 7
console.log("Is the color of bag mentioned in HEX? I predict true");
console.log(bagColor === '#FFFFFF'); //false

//test 8
console.log("Is the value of b less than or equal to a?");
console.log(b < a); //false

//test 9
console.log("Is the value of b less than a AND color of bag is white?");
console.log(b < a && bagColor == 'white'); //false

//test 10
console.log("Is the value of b less than a OR color of bag is blue?");
console.log(b < a || bagColor == 'blue'); //false








