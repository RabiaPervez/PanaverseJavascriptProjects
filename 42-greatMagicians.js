/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

var magicians = ['Adam', 'Marshal', 'Maven', 'Campbell'];

function showNames(magician){
    return console.log(magician);
}
function show_magicians(greatMag){
    var newMagicians = greatMag.map(element => 'the Great ' + element);
    return console.log(newMagicians);
}

showNames(magicians);
show_magicians(magicians);