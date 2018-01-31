// in non-strict mode this is bound to the global object
function foo() {
    return this;
}
console.log(`(1): ${foo() === global}`);

'use strict';
// a function can be applied to an object's context
// either by defining a function as a property or by binding it using apply
// as a default this is bound to the global object
global.a = "A";
let obj = {
    a: "a"
};
let obj2 = {
    a: "a2",
    foo: foo
};
console.log(`(2): ${foo().a}`);
console.log(`(2): ${foo.apply(obj).a}`);
console.log(`(2): ${obj2.foo().a}`)

// old-style object-orientation
function person() {
    let obj = {};
    obj.hi = function() {
        return `hi, i am ${this.name}`;
    };
    return obj;
}
let p1 = person();
p1.name = "p1";
console.log(`(3): ${p1.hi()}`);

// constructor-style object-orientation is equivalent
// it creates a new object under the hood and binds this to it
function person2() {
    this.hi = function() {
        return `hi, i am ${this.name}`;
    }
}
let p2 = new person2();
p2.name = "p2";
console.log(`(3): ${p2.hi()}`);