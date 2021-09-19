function buy(fruit, grams, pricePerKg) {
    let kg = grams / 1000;
    let neededMoney = kg * pricePerKg;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

buy('orange', 2500, 1.80);
buy('apple', 1563, 2.35);