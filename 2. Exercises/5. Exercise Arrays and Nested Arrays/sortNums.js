function sortNumbers(arr) {
    arr.map(Number);
    arr.sort((a, b) => a - b);
    let arrSorted = [];


    while (arr.length > 0) {
        arrSorted.push(arr.shift());
        if (arr.length > 0) {
            arrSorted.push(arr.pop());
        }
    }
    return arrSorted;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 12]));