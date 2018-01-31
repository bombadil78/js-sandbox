function sayHello() {
    return `hi, my name is ${this.name}`;
}

function saySomething(x) {
    return `hi, i am ${this.name} and i say ${x}`;
}

let obj = {
    name: "foo"
};

// apply applies a function after binding its argument to this
let hi = sayHello.apply(obj);
console.log(`(1): ${hi}`);

// apply also can take arguments
let msg = saySomething.apply(obj, [ 'hello' ]);
console.log(`(2): ${msg}`);

// ... attention: this is dynamically evaluated
console.log(`(3): ${sayHello()}`);

// bind binds its argument to this and returns the bound function
let sayHelloBoundToObj = sayHello.bind(obj);
console.log(`(4): ${sayHelloBoundToObj()}`);

// other built-ins
console.log(`(5): ${eval("console.log('hi');")}`);
console.log(`(5): ${parseInt("100", 10)}`);
