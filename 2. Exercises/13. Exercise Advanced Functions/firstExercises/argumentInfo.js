function arg(...args) {

    const order = {};


    args.forEach(e => {
        if(order[typeof e] === undefined){
        order[typeof e] = 0;
        }
        order[typeof e]++;
        console.log(typeof e + ': ' + e)
       // order[typeof e]++;
    });

    Object.entries(order)
        // .filter((a) => a[1] > 0)
        .sort((a, b) => b[1] - a[1])
        .forEach((k) => console.log(`${k[0]} = ${k[1]}`));
}

arg('cat', 42, function () {
    console.log('Hello world!');
})

console.log('--------------------------------------')

arg('cat', 42, function () {
    console.log('Hello world!')
}, 45);

console.log('--------------------------------------')

arg({name: 'bob'}, {name: 'pesho'}, 3.333, 9.999, 'dog');

