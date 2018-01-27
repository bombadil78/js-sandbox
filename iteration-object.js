let obj = {
    a: "x",
    b: "y",
    c: "z"
};

let arr = [ 99, 98, 97 ];

// traditional
// for..in iterates over keys
for (let key in obj) {
    console.log(obj[key]);
}

// for..of iterates over values for
for (let val of arr) {
    console.log(val);
}

// ... whereas for..in iterates over keys
for (let arrKey in arr) {
    console.log(arrKey);
}

// todo: prototype & hasOwnProperty()