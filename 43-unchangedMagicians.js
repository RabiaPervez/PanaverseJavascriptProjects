/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

var magicians = ['Adam', 'Marshal', 'Maven', 'Campbell'];

function make_great(magician){
    var makeGreat = magician.slice();
    return makeGreat;
}

function show_magicians(greatMag){
    var newMagicians = greatMag.map(element => 'the Great ' + element);
    return console.log(newMagicians);
}

console.log(make_great(magicians));
console.log(show_magicians(magicians));
