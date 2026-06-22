/*
Assignment =
Addition + -> use to add two or more numbers
Multiplication * -> use to multiply 2 or more numbers
Division /
--> powers
*/

let numb1 = 23; // Declared and assigned the variable
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`);

numb1 = 40; // Assignment only
console.log(`numb1 is ${numb1} its type is ${typeof numb1}`);

let numb2 = 60;
console.log(`numb2 is ${numb2} its type is ${typeof numb2}`);

let numb3 = numb1 + numb2 + 10; // 40 + 60 + 10 => 110
console.log(`numb3 is ${numb3} its type is ${typeof numb3}`);

let numb4 = numb1 * numb2;
console.log(`numb4 is ${numb4} its type is ${typeof numb4}`);

let numb5 = numb1 ** 3; // 40 * 40 * 40
console.log(`numb5 is ${numb5} its type is ${typeof numb5}`);

let numb6 = Math.pow(10, 3);
console.log(`numb6 is ${numb6} its type is ${typeof numb6}`);

// Division
let numb7 = 30;
let numb8 = 10;

let divNumb = numb7 / numb8;
console.log(`divNumb is ${divNumb} its type is ${typeof divNumb}`);

// Modulus is somehow special
// divide 2 numbers -> remainder
let numb9 = 23;
let numb10 = 12;

let modNu = numb9 % numb10;
console.log(`modNu is ${modNu} its type is ${typeof modNu}`);

// Calculation ->
// is a number x a multiple of 11

// -> shorts from Facebook server -> 1 b short videos
// -> 20 -> 15 -> 20
// -> react native -> mobile -> java
// -> game -> gpu -> java