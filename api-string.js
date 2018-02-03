// string literal vs string object
let x = '1 + 1';
let y = new String('1 + 1');
console.log(`(1): ${x}`);
console.log(`(1): ${y}`);
console.log(`(1): ${eval(x)}`);
console.log(`(1): ${eval(y)}`);

// split
console.log(`(2): "a;b".split(";") ${"a;b".split(";")}`);

// slice(fromInclusive, toExclusive)
console.log(`(2): ${"abcdef".slice(0, 3)}`);
// toExclusive is optional; default is length + 1 ...
console.log(`(2): ${"abcdef".slice(3)}`);
// ... if < 0 then from end
console.log(`(2): ${"abcdef".slice(0, -3)}`);

// regex stuff
// search returns index found
console.log(`(3): ${"ananas".search(/a/)}`);
// match
console.log(`(3): ${"ananas".match(/a/)}`);
// replace ...

// trimming, padding and repeating
console.log(`(4): ${("   xxxABCDEFGyyy     ".trim()).padStart(30, "-").concat("-".repeat(10))}`);