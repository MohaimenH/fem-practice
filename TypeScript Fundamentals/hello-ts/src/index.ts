let age = 6; // Infers it is a number type, that can change because its declared as 'let'
const firstName = "Mohaimen"; // Infers it is a constant, so "Mohaimen" is the literal type

const add = (a: number, b: number): number => {
    // format: name = (param: type) : returnType {}
    return a + b;
};

function subtract(a: number, b: number): number {
    return a - b;
}
