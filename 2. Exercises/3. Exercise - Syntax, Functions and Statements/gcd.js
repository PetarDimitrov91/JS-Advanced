function gcd(a, b) {
    let temp;
    let smallest = returnSmallest(a, b);

    for (let i = 1; i <= smallest; i++) {
        if (a % i === 0 && b % i === 0) {
            temp = i;
        }
    }

    function returnSmallest(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
    console.log(temp);
}

gcd(15, 5);
gcd(2154, 458);