declare let age: number;
declare const firstName = "Mohaimen";
declare const add: (a: number, b: number) => number;
declare function subtract(a: number, b: number): number;
declare const names: {
    first: string;
    last: string;
};
declare let civic: {
    make: string;
    model: string;
    year: number;
};
declare const printCar: (car: {
    make: string;
    model: string;
    year: number;
    chargeVoltage?: number;
}) => void;
