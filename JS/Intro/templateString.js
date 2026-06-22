let fistName = "Samuel";
let secondName = "Jane";
let age = 20;
let address = "Juja County";

// String concatenation
let userDetails =
  fistName +
  " " +
  secondName +
  " is " +
  age +
  " years old" +
  " he stays at " +
  address;

console.log(userDetails);

console.log("User details is", typeof userDetails);

// Template string uses backticks
let userDetails2 = `${fistName} ${secondName} is ${age} years old and he stays at ${address}`;

console.log(userDetails2);

console.log(
  `${fistName} ${secondName} is ${age} years old and he stays at ${address}`
);