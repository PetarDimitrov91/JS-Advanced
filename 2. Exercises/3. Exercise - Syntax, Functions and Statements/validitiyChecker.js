function calculate(x1, y1, x2, y2) {
    //1.-> compression between x1,y1 and 0,0;
    let res1 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
    console.log(`${'{' + x1 + ', ' + y1 + '}'} to {0, 0} is ${(Number.isInteger(res1)) ? 'valid' : 'invalid'}`);

    let res2 = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    console.log(`${'{' + x2 + ', ' + y2 + '}'} to {0, 0} is ${(Number.isInteger(res2)) ? 'valid' : 'invalid'}`);

    let res3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    console.log(`${'{' + x1 + ', ' + y1 + '}'} to {${x2 + ', ' + y2}} is ${(Number.isInteger(res3)) ? 'valid' : 'invalid'}`);

}

calculate(3, 0, 0, 4);
calculate(2, 1, 1, 1);