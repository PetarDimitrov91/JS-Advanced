function printSqr(a = 5) {
    for (let i = 0; i < a; i++) {
        printRow(a);
    }

    function printRow(a) {
        let str = '';
        for (let i = 0; i < a; i++) {
            str += '* ';
        }
        console.log(str);
    }
}

printSqr(10);