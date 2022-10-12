/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

*/

function cars(manu, mode, ...args){
    var car = {
        manufacturer: manu,
        model: mode}

    if(arguments[2]){
        car.color = arguments[2];
        }
    if(arguments[3]){
        car.year = arguments[3];
        }
    return car;
}

console.table(cars('honda','civic','white'));
console.table(cars('honda','civic','black','2020'));
console.table(cars('honda','civic'));


