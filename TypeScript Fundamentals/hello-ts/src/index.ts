let age = 6; // Infers it is a number type, that can change because its declared as 'let'
const firstName = "Mohaimen"; // Infers it is a constant, so "Mohaimen" is the literal type

const add = (a: number, b: number): number => {
    // format: name = (param: type) : returnType {}
    return a + b;
};

function subtract(a: number, b: number): number {
    return a - b;
}

const names = {
    first: "Mohaimen",
    last: "Hassan",
};

// let civic: { make: string; model: string; year: number };
let civic = { make: "Honda Civic", model: "Touring", year: 2019 };

const printCar = (car: {
    make: string;
    model: string;
    year: number;
    chargeVoltage?: number;
}) => {
    console.log(car.make, car.model, car.year, car.chargeVoltage);
};

printCar(civic);
