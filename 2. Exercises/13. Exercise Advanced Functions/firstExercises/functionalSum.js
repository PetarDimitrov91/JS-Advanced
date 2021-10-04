//function add(n) {
//    let sum = n;
//
//    function calc(n2) {
//        sum += n2;
//        return calc;
//    }
//
//    calc.toString = function () {
//        return sum
//    };
//    return calc;
//}
let f = (function () {
    let total = 0;
    return function sum(a) {
        total += a;
        sum.toString = () => total;
        return sum;
    }
})();

console.log(f(4)(3).toString());