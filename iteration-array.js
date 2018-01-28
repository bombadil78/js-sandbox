let arr = [ 6, 5, 4, 3, 2, 1 ];

// traditional
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value > 3) {
        continue;
    } else {
        sum += value;
    }
}
console.log(`(1): ${sum}`);

// functional (not pure)
let sum2 = 0;
arr
    .filter(x => x <= 3)
    .forEach(x => sum2 += x);
console.log(`(2): ${sum2}`);

// functional (pure)
const sum3 = arr.filter(x => x <= 3).reduce((acc, val) => acc + val, 0);
console.log(`(3): ${sum3}`);

// for..of iterates over values on iterables only
for (let i of arr) {
    console.log(`(4): ${i}`);
}

// ... whereas for..in iterates over keys on any object
for (let i in arr) {
    console.log(`(5): ${i}`);
}