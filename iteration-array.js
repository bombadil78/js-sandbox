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
console.log(sum);

// functional (bad, not pure)
let sum2 = 0;
arr
    .filter(x => x <= 3)
    .forEach(x => sum2 += x);
console.log(sum2);

// functional
const sum3 = arr.filter(x => x <= 3).reduce((acc, val) => acc + val, 0);
console.log(sum3);
