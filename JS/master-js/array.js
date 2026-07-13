const array1 = [
  "Mercedes-Benz",
  "GLE 63 S AMG",
  "280 km/h",
  {
    cylinders: 8,
    engine: "4.0L Twin-Turbo V8",
  },
  {
    name: "Mercedes-Benz Group AG",
    country: "Germany",
    2024: "Year Manufactured",
  },
  function () {
    alert(`
Car: ${array1[0]}
Model: ${array1[1]}
Top Speed: ${array1[2]}
Engine: ${array1[3].engine}
Cylinders: ${array1[3].cylinders}
Manufacturer: ${array1[4].name}
Country: ${array1[4].country}
    `);
  },
  "The Mercedes-Benz GLE 63 S AMG can accelerate from 0 to 100 km/h in about 3.8 seconds and produces over 600 horsepower.",
  false,
  [603, 850, 2020], // Horsepower, Torque (Nm), Year
];

console.log(typeof array1);
console.log(array1.length);
console.log(array1[0]); // Make
console.log(array1[1]); // Model
console.log(array1[2]); // Top Speed
console.log(array1[3]); // Engine Information
console.log(array1[4]); // Manufacturer
console.log(array1[5]); // Function
console.log(array1[6]); // Fun Fact
console.log(array1[7]); // Electric?
console.log(array1[8][0]); // Horsepower

// To display the alert
array1[5]();

// console.table(array1);

/**
 * Array methods - built-in functions
 */