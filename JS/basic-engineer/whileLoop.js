function getNumbers() {

    let number1 = Number(prompt("Enter the first number"));

    while (number1 <= 1 || isNaN(number1)) {
        number1 = Number(prompt("Invalid! Enter a number greater than 1"));
    }

    let number2 = Number(prompt("Enter the second number"));

    while (number2 <= 1 || isNaN(number2)) {
        number2 = Number(prompt("Invalid! Enter a number greater than 1"));
    }

    createTable(number1, number2);
}

function createTable(number1, number2) {

    if (number1 <= 1 || isNaN(number1)) {
        return;
    }

    if (number2 <= 1 || isNaN(number2)) {
        return;
    }

    let i = number1;

    while (i >= 1) {

        console.log("------");

        let j = number2;

        while (j >= 1) {

            console.log(i + "*" + j + "=" + (i * j));

            j = j - 1;
        }

        i = i - 1;
    }

}

getNumbers();