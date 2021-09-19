function rotateArr(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

rotateArr(['1',
        '2',
        '3',
        '4'],
    2
);
rotateArr(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
);
