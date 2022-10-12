/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

*/

const MyGuests = ["Sir Zia", "Sir Hisham Sarwar", "Mr. Elon Musk"];
for (i = 0; i < MyGuests.length; i++){
    console.log("I am greatly inspired by your work and guidance. I would love to invite you for a dinner as a token of respect to my mentor,", MyGuests[i]);
}

var GuestNotPresent = MyGuests[2];
console.log(GuestNotPresent, "won't be able to attend the dinner");

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
MyGuests.splice(2, 1, 'Mr. Bill Gates');

// Print a second set of invitation messages, one for each person who is still in your list.
for (i = 0; i < MyGuests.length; i++){
    console.log("I am greatly inspired by your work and guidance. I would love to invite you for a dinner as a token of respect to my mentor,", MyGuests[i]);
}
