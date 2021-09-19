function aggregate(str) {
    let sum = getSum(str);
    let inverseSum = (getInverseSum(str));
    let joined = str.join("");
    console.log(sum);
    console.log(inverseSum);
    console.log(joined);

    function getSum(_str) {
        let sum = 0;
        for (let i = 0; i < _str.length; i++) {
            sum += _str[i];
        }
        return sum;
    }

    function getInverseSum(_str) {
        let inverseSum = 0;
        for (let i = 0; i < _str.length; i++) {
            inverseSum += 1 / _str[i];
        }
        return inverseSum;
    }
}


aggregate([1, 2, 3]);
aggregate([2, 4, 8, 16]);