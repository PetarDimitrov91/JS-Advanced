(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        return this.slice(n, this.length);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, current) => acc + current, 0);
    };

    Array.prototype.average =function (){
      return this.reduce(function (sum,value) {
          return sum + value;
      },0) / this.length;
    };
})();

let arr = [1, 2, 3, 4, 5];

console.log(arr.skip(2));
console.log(arr.take(3));
console.log(arr.sum());
console.log(arr.average());