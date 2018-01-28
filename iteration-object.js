let obj = {
    a: "A",
    b: "B"
};
let obj2 = Object.create(obj);
obj2.c = "C";

// for..in iterates over full prototype chain's properties
for (let i in obj) {
    console.log(`(1): ${i}`);
}

for (let i in obj2) {
    console.log(`(2): ${i}`);
}

// ... use hasOwnProperty() to filter
for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(`(3): ${i}`);
    }
}