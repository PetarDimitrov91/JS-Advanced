function argumentInfo() {
    let map = new Map();


    for (let arg of arguments) {
        let type = typeof(arg);
        if (!map.has(type)) {
            map.set(type, 0);
        }
        map.set(type, map.get(type)+1);
        console.log(`${type}: ${arg}`)
    }

    // console.log([...map.entries()]);

    [...map.entries()].sort((a,b) => b[1] - a[1])
        .forEach((elem) => console.log(`${elem[0]} = ${elem[1]}`))
}


// Testing
argumentInfo('cat', 42,function () { console.log('Hello world!')}, 45);
console.log(`-`.repeat(40));
argumentInfo( { name: 'bob'}, { name: 'pesho'}, 3.333, 9.999, 'dog');