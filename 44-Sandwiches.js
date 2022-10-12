/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

function sandwich(...fooditems){
    return ("you will be presented a sandwich with your favourite " + fooditems);
}

console.log(sandwich('tomato','ketchup','onions'));
console.log(sandwich('ketchup','onions'));
console.log(sandwich('ketchup','onions','mayo','cheese'));

