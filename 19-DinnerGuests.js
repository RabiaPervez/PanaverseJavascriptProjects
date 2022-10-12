// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const MyGuests = ["Sir Zia", "Sir Hisham Sarwar", "Mr. Elon Musk"];
console.log(MyGuests.length + " persons will be invited to the dinner");
var GuestNotPresent = MyGuests[2];
console.log(GuestNotPresent, "won't be able to attend the dinner");
MyGuests.pop();
console.log("Now, only " + MyGuests.length + " persons will be invited to the dinner");