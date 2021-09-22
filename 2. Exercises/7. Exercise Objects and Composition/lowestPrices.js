function checkPrices(input) {
    let obj = {};
    const res = [];
    for (const element of input) {
        let [town, product, currentPrice] = element.split(' | ');
        currentPrice = Number(currentPrice);
        let currentObj = {
            product: {
                name: product,
                price: currentPrice,
                town: town
            }
        }
        res.push(currentObj);
    }
    console.log(res)
}

checkPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);