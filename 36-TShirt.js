/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/
function make_shirt(){
    var size = prompt('mention size of your shirt (S/M/L)');
    var message = prompt('mention the text you want to be printed on your shirt');
    console.log('The size of your shirt is', size, 'and the message', message, 'will be printed on it');
}
make_shirt();