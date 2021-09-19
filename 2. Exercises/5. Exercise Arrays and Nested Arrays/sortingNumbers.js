function sortNumbers(arr) {
    arr.map(Number);
    arr.sort((a, b) => a - b);
    let arrFirstHalf = arr.slice(0, arr.length / 2);
    let arrSecondHalf = arr.slice(arr.length / 2, arr.length);

    let arrSorted = [];


    for (let i = 0; i < arr.length / 2; i++) {
        arrSorted.push(arrFirstHalf.shift());
        arrSorted.push(arrSecondHalf.pop());
    }
    return arrSorted;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 12]));