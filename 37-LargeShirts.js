/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size = 'L', message = 'I love Javascript'){
   console.log('The size of your shirt is', size, 'and the message', message, 'will be printed on it');
}
make_shirt(size, message);
make_shirt('M',message);
make_shirt('S','hello');
