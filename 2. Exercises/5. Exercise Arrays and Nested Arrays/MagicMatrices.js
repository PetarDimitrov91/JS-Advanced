function chekMatrix(matrix) {

    let condition = function () {
        let sum1 = matrix[0].reduce((acc, i) => acc + i);
        let sum2 = 0;

        for (let i = 1; i < matrix.length; i++) {
            sum2 = matrix[i].reduce((acc, i) => acc + i);
            if (sum2 !== sum1) {
                return false;
            }
        }

        for (let col = 0; col < matrix[0].length; col++) {
            let sum = 0;
            for (let row = 0; row < matrix.length; row++) {
                sum += matrix[row][col];
            }
            if (sum !== sum1) {
                return false;
            }
        }
        return true;
    }
    console.log(condition());
}

chekMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);
chekMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);
chekMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);

chekMatrix([
    [1, 0, 0],
    [0, 1, 0]]
);