function evenPos(strings) {
    let res = '';
    for (let i = 0; i < strings.length; i++) {
        if (i % 2 == 0) {
            res += strings[i];
            res += ' '
        }
    }
    console.log(res);
}

evenPos(['20', '30', '40', '50', '60']);