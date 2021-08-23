let age = 6; // Infers it is a number type, that can change because its declared as 'let'
const firstName = "Mohaimen"; // Infers it is a constant, so "Mohaimen" is the literal type
const add = (a, b) => {
    // format: name = (param: type) : returnType {}
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
