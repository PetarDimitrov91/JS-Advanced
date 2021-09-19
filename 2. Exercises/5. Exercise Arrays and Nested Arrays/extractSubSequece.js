/**
 *
 * @param{array} arr
 */
function extract(arr) {
    const myArr = [];
    let biggest = 0;
    arr.map((Number));
    for (const element of arr) {
        if (element >= biggest) {
            myArr.push(element);
            biggest = element;
        }
    }
    myArr.sort((a, b) => a - b);
    return myArr;
}

extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

extract([1,
    2,
    3,
    4]
);

extract([20,
    3,
    2,
    15,
    6,
    1]
);