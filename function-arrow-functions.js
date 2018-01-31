function f() {
    console.log(`f(): ${this.name}`);
    return function() {
        return this.name;
    };
}
function g() {
    console.log(`g(): ${this.name}`);
    return (() => this.name);
}
let obj = {
    name: "obj"
};
console.log(`f()(): ${f()()}`);
console.log(`g()(): ${g()()}`);
console.log(`f()(): ${f.apply(obj)()}`);
console.log(`g()(): ${g.apply(obj)()} <= arrow function can read outer this`);

function f2() {
    return (function() {
        return this.name;
    })();
}

function g2() {
    return (() => this.name)();
}

console.log(`f2(): ${f2()}`);
console.log(`g2(): ${g2()}`);
console.log(`f2(): ${f2.apply(obj)}`);
console.log(`g2(): ${g2.apply(obj)} <= arrow function can read outer this`);

function g3() {
    return (() => {
        let mine = this.name + "_mine";
        this.name = mine; // side-effect
        return mine;
    })();
}
console.log(`obj.name: ${obj.name}`);
console.log(`g3(): ${g3.apply(obj)} <= arrow function can read outer this`);
console.log(`obj.name: ${obj.name} <= arrow function can write outer this`);


/*[ 1, 2, 3 ].map(x => { x * x })}`);
console.log(`(3): ${[ 1, 2, 3 ].map(x => { return x * x })}`);

function Obj(x) {
    this.name = x;
    this.yell = function() {
        console.log(this.name.toUpperCase());
    }
    this.yellMore = () => {
        return () => {
            console.log(this.name.toUpperCase() + "!!!");
        }
    };
}


function f() {
    (function() {
        this.name = "inner f()";
        console.log(this.name);
    })();
}

function f2() {
    (() => {
        this.name = "inner f2()";
        console.log(this.name);
    })();
}

let obj1 = {
    name: "obj1"
};
f.apply(obj1);
console.log(obj1);
f2.apply(obj1);
console.log(obj1);

/*


let o1 = new Obj("xyz");
o1.yell();
o1.yellMore()();

let f = function() {
    let that = this;
    return function() {
        console.log(`x=${this.x}, y=${that.y}`);
    };
};
let obj = {
    x: "x1",
    y: "y"
};
obj.f = {
        x: "x2",
        f: f()
    };
obj.f.f();

let g = function(y) {
    this.y = y;
    return () => console.log(`x=${this.x}, y=${this.y}`);
};
let obj2 = {
    x: "x1",
    g: {
        x: "x2",
        g: g("y")
    }
};
obj2.g.g();*/
