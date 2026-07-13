const car = {
    make: "Mercedes-Benz",
    model: "GLE 63S AMG",
    year: 2020,
    color: "Black",
    "top speed": 280,

    engineInformation: {
        engineType: "V8",
        horsepower: 603,
        torque: 627,
        transmission: "9-speed automatic",
    },

    manufacture: {
        country: "Germany",
        city: "Stuttgart",
        factory: "Mercedes-Benz Factory Sindelfingen",
    },

    "fun fact":
        "It can accelerate from 0 to 60 mph in just 3.7 seconds, making it one of the fastest SUVs in its class.",

    is_it_electric: false,

    alert_info: function () {
        alert(
            `The ${this.make} ${this.model} is a ${this.year} model with a top speed of ${this["top speed"]} km/h. It has a ${this.engineInformation.engineType} engine producing ${this.engineInformation.horsepower} horsepower and ${this.engineInformation.torque} Nm of torque. It is manufactured in ${this.manufacture.city}, ${this.manufacture.country}. Fun fact: ${this["fun fact"]}`
        );
    },
};

car.alert_info();
/*
console.log(`car datatype ${typeof car}`);
console.log(car);
console.table(car);
*/
//access individual parts of your object
// 1 dot notation-does not work for everthing-cant access numbers,strings with spaces,starting with number or special symboles *can only access properties follow variable naming rules
//2 bracket notation-work for everything(access properties using variables)

console.log(`Name is ${car.name} its type is ${typeof car.name}`);
console.log(`name is ${car["name"]} its type is ${typeof car["name"]}`);

console.log(`Name is ${car.model} its type is ${typeof car.model}`);
console.log(`name is ${car["model"]} its type is ${typeof car["model"]}`);

console.log(`Name is ${car.topSpeed} its type is ${typeof car.topSpeed}`);
console.log(`name is ${car["topSpeed"]} its type is ${typeof car["topSpeed"]}`);

console.log(
  `Name is ${car.engineInformation.cylinder} its type is ${typeof car.engineInformation.cylinder}`,
);
console.log(
  `name is ${car["engineInformation"]["cylinder"]} its type is ${typeof car["engineInformation"]["cylinder"]}`,
);

console.log(
  `Name is ${car.engineInformation.number} its type is ${typeof car.engineInformation.number}`,
);
console.log(
  `name is ${car["engineInformation"]["number"]} its type is ${typeof car["engineInformation"]["number"]}`,
);

console.log(
  `Name is ${car.manufacture.name} its type is ${typeof car.manufacture.name}`,
);
console.log(
  `name is ${car["manufacture"]["name"]} its type is ${typeof car["manufacture"]["name"]}`,
);

console.log(
  `Name is ${car.manufacture.country} its type is ${typeof car.manufacture.country}`,
);
console.log(
  `name is ${car["manufacture"]["country"]} its type is ${typeof car["manufacture"]["country"]}`,
);

console.log(
  `Name is ${car.carInformation} its type is ${typeof car.carInformation}`,
);
console.log(
  `name is ${car["carInformation"]} its type is ${typeof car["carInformation"]}`,
);

// dot notation does not work if key is no.
console.log(
  `name is ${car["manufacture"]["2024"]} its type is ${typeof car["manufacture"]["2024"]}`,
);

// dot notation does not work with spaces
let funFact = "fun fact";
console.log(`name is ${car.funFact} its type is ${car.funFact}`);
console.log(`name is ${car["fun fact"]} its type is ${typeof car["fun fact"]}`);

console.log(`Name is ${car.isItClassic} its type is ${typeof car.isItClassic}`);
console.log(
  `name is ${car["isItClassic"]} its type is ${typeof car["isItClassic"]}`,
);