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