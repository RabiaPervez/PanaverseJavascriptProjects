/*
  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
*/

var MyGuests = ["Sir Zia", "Sir Hisham Sarwar", "Mr. Elon Musk"];
console.log("I just found a bigger table");

// Add one new guest to the beginning of your array.
MyGuests.unshift("Fatima");
console.log(MyGuests); 

// Add one new guest to the middle of your array. 
var midOfArray = (MyGuests.length) / 2;
MyGuests.splice(midOfArray, 0, "Ayesha");
console.log(MyGuests);

//Add one new guest to the end of your list.
MyGuests.push('Hina');

//Print a new set of invitation messages, one for each person in your list.
for (i = 0; i < MyGuests.length; i++){
  console.log("I am greatly inspired by your work and guidance. I would love to invite you for a dinner as a token of respect to my mentor,", MyGuests[i]);
}
