// x is a higher-order function that does not return a closure
function x() {
    return function() {
        return 10;
    }
}
console.log(`(1): ${x()()}`);

// startAt is a higher-order function that returns a closure
// a free variable is one that is defined outside of a nested function
function startAt(x) {
    let func = function(increment) {
        return x + increment;
    };
    return func;
}

// once the free variables are bound, function expression turns into a closure
// both fromOne and fromTen are closures with a different context
let fromOne = startAt(1);
let fromTen = startAt(10);

// closures can be passed around, but the context the closure was created remains
console.log(`(2): ${fromOne(1)}`);
console.log(`(2): ${fromOne(100)}`);
console.log(`(2): ${fromTen(1)}`);

function startAtImpure(x) {
    return function(increment) {
        return zero++ + x + increment;
    };
}

let zero = 0;
let fromOneImpure = startAtImpure(1);
console.log(`(3): ${fromOneImpure(1)}`);
console.log(`(3): ${fromOneImpure(1)}`);

