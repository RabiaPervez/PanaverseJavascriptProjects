//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var decision = "y"; 
var FavArray = [];
while(decision === "y"){
var item = prompt("Type one of your favourite languages");
FavArray.push(item);
var decision = prompt("Do you want to continue adding your favourite languages. Type y for yes and n for no");

}
console.log(FavArray);
