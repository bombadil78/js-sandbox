function foo(z) {
    var x = 100;
    let y = 200;
    console.log(`x=${x} and y=${y} and z=${z}`);
}

var x = 1;
let y = 2;

if (true) {
    var x = 10;
    let y = 20;
}

// let variables have block scope, var variable have not
console.log(`x=${x} and y=${y}`);

// both var variables and let variables have function scope
foo(300);