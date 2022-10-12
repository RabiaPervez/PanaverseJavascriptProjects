/* 
    Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
*/
var Places = ["Canada", "Australia", "Japan", "Maldives"];

//Print your array in its original order.
console.log(Places);

//Print your array in alphabetical order without modifying the actual list.
var PlacesClone = Places.slice(); 
console.log(PlacesClone.sort());

//Show that your array is still in its original order by printing it.
console.log(Places);

//Print your array in reverse alphabetical order without changing the order of the original list.
PlacesClone.reverse();
console.log(PlacesClone);

//Show that your array is still in its original order by printing it again.
console.log(Places);

//Reverse the order of your list. Print the array to show that its order has changed.
PlacesClone.reverse();
console.log(PlacesClone);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
Places.reverse();
console.log(Places);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
Places.sort();
console.log(Places);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
Places.reverse();
console.log(Places);
