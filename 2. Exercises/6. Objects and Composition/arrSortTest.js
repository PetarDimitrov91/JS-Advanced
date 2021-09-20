const arr = [10, 5, 2, 4, 76, 4, 3, 87, 3, 236, 43, 232, 5, 3];

const comparator = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
}

arr.sort(comparator.descending);

console.log(arr);