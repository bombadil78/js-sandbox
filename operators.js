function forever() {
    while (true) {

    }
}

// short-circuit evaluation fails fast
console.log(`(1): ${(true || forever())}`);
console.log(`(1): ${(false && forever())}`);

// short-circuit returns successfully casted original value
console.log(`(2): "" == false => ${false == ""}`);
console.log(`(2): 0 == false => ${false == 0}`);
console.log(`(2): undefined == false => ${false == undefined}`);
console.log(`(2): null == false => ${false == null}`);
console.log(`(2): NaN == false => ${false == NaN}`);
console.log(`(2): "" && false => ${"" && false}`);
console.log(`(2): 0 && false => ${0 && false}`);
console.log(`(2): undefined && false => ${undefined && false}`);
console.log(`(2): null && false => ${null && false}`);
console.log(`(2): NaN && false => ${NaN && false}`);

// use in to check if object property exists
const arr = [ 1, 2, 3 ];
console.log(`(3): 0 in arr: ${0 in arr}`);
console.log(`(3): 99 in arr: ${99 in arr}`);
const obj = { a: "a" };
console.log(`(3): 'a' in a: ${'a' in obj}`);
console.log(`(3): 'b' in a: ${'b' in obj}`);

// in is used to check existence of a key in an object (also array)
const arr1 = [ 1, 2, 3 ];
console.log(`(4): 0 in arr1: ${0 in arr1}`);
console.log(`(4): "length" in arr1: ${"length" in arr1}`);
console.log(`(4): 99 in arr1: ${99 in arr1}`);

// delete deletes an object key => reverses obj.someProp assignment
const obj1 = { a: "a" };
console.log(`(5): "a" in obj1: ${"a" in obj1}`);
console.log(`(5): keys=${Object.keys(obj1)}`);
delete(obj1.a);
console.log(`(5): "a" in obj1: ${"a" in obj1}`);
console.log(`(5): keys=${Object.keys(obj1)}`);

// default for the value in an object with a non-existing key is undefined
console.log(`(6): obj["a"]: ${obj1["a"]}`);
console.log(`(6): obj[99]: ${obj1[99]}`);

// someExpression typeof someTypeAsString
//
// typeof returns string, number, function, object, boolean or undefined
console.log(`(7): typeof []: ${typeof []}`);
console.log(`(7): typeof (() => {}): ${typeof (() => {})}`);
console.log(`(7): typeof null: ${typeof null}`);
console.log(`(7): typeof undefined: ${typeof undefined}`);

// some object instanceof some constructor function
//
// instanceof checks whether a constructor function ("class") is in the prototype chain
// of an object
console.log(`(8): ${new Date() instanceof Date}`);
console.log(`(8): ${(() => {}) instanceof Object}`);
console.log(`(8): ${(() => {}) instanceof Function}`);
console.log(`(8): ${({}) instanceof Object}`);
console.log(`(8): ${({}) instanceof Function}`);

function getPrototypeChain(obj) {
    let c = [];
    while (true) {
        let p = Object.getPrototypeOf(obj);
        c.push({
            obj: obj,
            proto: p
        });
        obj = p;
        if (!obj) break;
    }

    return c
        .map(el => `${el.obj.constructor.name} => ${el.proto ? el.proto.constructor.name : "null"}`)
        .reduce((prev, el) => prev + "\n" + el, "");
}

console.log(getPrototypeChain({}));
console.log(getPrototypeChain(new Date()));
console.log(getPrototypeChain((() => {})));
console.log(getPrototypeChain(""));
console.log(getPrototypeChain(1234));
console.log(getPrototypeChain(false));