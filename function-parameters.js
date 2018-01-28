function foo() {
    let args = [];
    for (let a in arguments) {
        args.push(a);
    }
    return args;
}

function printArgs(name, arg, index) {
    console.log(`(${name}): arg at index=${index} is ${arg}`)
}

// access inside the function to the arguments is given with arguments
foo(1).forEach((arg, index) => printArgs(1, arg, index));
foo(1, 2).forEach((arg, index) => printArgs(2, arg, index));

function bar(x, y, ...rest) {
    rest.forEach(x => console.log(`(3): ${x}`))
}
bar(0, 1, 2, 3, 4);