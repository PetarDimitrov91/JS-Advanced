/**
 *
 * @param {array} arr
 */

function solve(arr) {
    let data = new Map();
    let bottles = new Map();

    arr.forEach(e => {
        let [fruit, quantity] = e.split(' => ');
        if (!data.has(fruit)) {
            data.set(fruit, 0);
        }
        data.set(fruit, data.get(fruit) + Number(quantity));

         if(data.get(fruit) >= 1000){
             bottles.set(fruit,data.get(fruit) / 1000);
         }
    });

    for (const [k, v] of bottles.entries()) {
        console.log(k + ' => ' + Math.floor(v));
    }
}

//solve(['Orange => 2000',
//    'Peach => 1432',
//    'Banana => 450',
//    'Peach => 600',
//    'Strawberry => 549']
//);

console.log('-------------');

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);