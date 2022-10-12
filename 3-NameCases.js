/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

var Person = "Hina Khan";
//lower case
console.log(Person.toLowerCase());

//upper case
console.log(Person.toUpperCase());

//title case
const title = Person.split(' ').map(name => name[0].toUpperCase() + name.substring(1).toLowerCase()).join(' ');
console.log(title);