console.log(`(1): 1/0 = ${1/0}`);
console.log(`(1): -1/0 = ${-1/0}`);
console.log(`(1): parseInt("x") = ${parseInt("z")}`);

// binary, octal, decimal or hexadecimal representation of a number
// - 0b: binary
// - 0<only below 8>: octal
// - decimal
// - 0x: hexadecimal

// Number object offers constants ...
console.log(`(2): Number.MIN_VALUE: ${Number.MIN_VALUE}`);
console.log(`(2): Number.MAX_VALUE: ${Number.MAX_VALUE}`);
console.log(`(2): Number.NaN: ${Number.NaN}`);

// ... and static methods
// - parseInt() => like global parseInt()
// - parseFloat() => like global parseFloat()
// - isNaN() => more robust than global isNaN()

// ... and prototype methods
console.log(`(3): ${(1000).toExponential()}`);

// Math object; only static methods, no prototype methods
console.log(`(4): ${Math.floor(3.333)}`);
console.log(`(4): ${Math.ceil(3.333)}`);
console.log(`(4): ${Math.round(3.333)}`);
console.log(`(4): ${Math.round(3.5)}`);

// Date object => +- 100'000'000 days from Unix TS 0
console.log(`(5): Current date => new Date() => ${new Date()}`);
console.log(`(5): Given date => constructed given year, month, day, ... as integer or string => ${new Date(1978, 8, 13, 20, 15, 30)}`);

// string to date
// omit if possible, use unix ts
console.log(`(6): ${formatDate(new Date(0))}`);

// date to string (attention: months start with 0)
function formatDate(d) {
    const year = (d.getUTCFullYear().toString()).padStart(4, "0");
    const month = ((d.getUTCMonth() + 1).toString()).padStart(2, "0");
    const day = (d.getUTCDate().toString()).padStart(2, "0");
    return `${day}.${month}.${year}`;
}
console.log(`(6): ${formatDate(new Date())}`);

