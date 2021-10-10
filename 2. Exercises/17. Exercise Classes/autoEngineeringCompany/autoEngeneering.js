/**
 *
 * @param {Array} arr
 */
function solve(arr) {

    let carData = new Map()
    arr.forEach(e => {
        const [brand, model, quantity] = e.split(' | ');
        if (!carData.has(brand)) {
            carData.set(brand, new Map());
        }
        if (!carData.get(brand).has(model)) {
            carData.get(brand).set(model, 0);
        }
        carData.get(brand).set(model, carData.get(brand).get(model) + Number(quantity));
    });

    for (const [brand, brandEntries] of carData.entries()) {
        console.log(brand);
        for (const [model, quantity] of brandEntries.entries()) {
            console.log('###' + model + ' -> ' + quantity);
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);