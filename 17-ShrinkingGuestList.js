/* 
    Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
*/
var MyGuests = ["Sir Zia", "Sir Hisham Sarwar", "Mr. Elon Musk", "Allena"];
console.log("Due to unavailability of new dinner table, only place for two people is available");

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (MyGuests.length > 2){
    var removedGuest = MyGuests.pop();
    console.log(removedGuest + ", I am so sorry that I can not invite you to dinner");
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.

for (var i =0; i < MyGuests.length; i++){
    console.log(MyGuests[i] + ", you are still invited to the dinner.");
}

//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (MyGuests.length > 0){
    MyGuests.pop();
};
console.log(MyGuests);
