function printEveryN(arr, n) {
    const newArr = [];
    for (let i = 0; i < arr.length; i += n) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(printEveryN(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));