function cook(num, o1, o2, o3, o4, o5) {
    const operations = [o1, o2, o3, o4, o5];
    let number = Number(num);
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "chop":
                number = number / 2;
                log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                log(number);
                break;
            case "spice":
                number = number + 1;
                log(number);
                break;
            case "bake":
                number = number * 3;
                log(number);
                break;
            case "fillet":
                number = number * 0.8;
                log(number);
                break;
        }
    }
    function log(num){
        console.log(num);
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
