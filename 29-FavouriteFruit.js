/* 

    Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

const favourite_fruits = ['Apples', "Guava", "Peach"];

if(favourite_fruits.includes('Water melon')) {
    console.log("I really like water melon");
};

if(favourite_fruits.includes('Apples')) {
    console.log("I really like Apples");
};

if(favourite_fruits.includes('Strawberry')) {
    console.log("I really like Strawberry");
};

if(favourite_fruits.includes('Guava')) {
    console.log("I really like Guava");
};

if(favourite_fruits.includes('Peach')) {
    console.log("I really like Peach");
};
