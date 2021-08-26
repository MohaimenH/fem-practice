let age = 6; // Infers it is a number type, that can change because its declared as 'let'
const firstName = "Mohaimen"; // Infers it is a constant, so "Mohaimen" is the literal type
const add = (a, b) => {
    // format: name = (param: type) : returnType {}
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
const names = {
    first: "Mohaimen",
    last: "Hassan",
};
// let civic: { make: string; model: string; year: number };
let civic = {
    make: "Honda Civic",
    model: "Touring",
    year: 2019,
};
let ferrari = {
    make: "Ferarri F12",
    model: "GT",
};
const printCar = (car) => {
    if (car.chargeVoltage) {
        console.log(car.make, car.model, car.year, car.chargeVoltage);
    }
    else {
        console.log(car.make, car.model, car.year);
    }
};
printCar(civic);
