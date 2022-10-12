/*

    Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

var current_users = ['Ali','Ayesha','Hina','Asad','Maha'];
var lowerCurrent_Users = current_users.map(element => element.toLowerCase());
console.log(lowerCurrent_Users);

var new_users = ['ASAD', 'Hasan', 'Maha','Ayesha','Sadia'];
var lowerNew_Users = new_users.map(element => element.toLowerCase());
console.log(lowerNew_Users);

for(var i = 0; i < lowerNew_Users.length; i++){
        if(lowerCurrent_Users.includes(lowerNew_Users[i])){
            console.log(new_users[i],"please enter a new username");
        }else {
            console.log(new_users[i], "username is available");
        };
    }
