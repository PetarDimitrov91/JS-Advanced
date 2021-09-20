let matrix = [
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]];

let rotatedMatrix = matrix[0].map((x, i) => matrix.map(x => x[i]));
matrix.forEach( arr => console.log(arr));