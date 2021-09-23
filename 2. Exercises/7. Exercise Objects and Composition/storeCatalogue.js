function sort(input) {
    const catalogue = {};
    input.sort((a, b) => a.localeCompare(b));
    for (const element of input) {
        let [product,price] = element.split(' : ');
        let letter = product.charAt(0);
        price = Number(price);
        if(!catalogue.hasOwnProperty(letter)) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    }
    //const output = Object.entries(catalogue);
   // for (const outputElement of output) {
    //    console.log(outputElement[0]);
    //    for (const entry of Object.entries(outputElement[1])) {
    //        console.log(entry[0] + ': ' + entry[1]);
    //    }
    //}

    Object.entries(catalogue).forEach((e) => {
        console.log(e[0]);
        Object.entries(e[1]).forEach((e) => {
            console.log(e[0] + " " + e[1]);
        })
    })
}

sort(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);