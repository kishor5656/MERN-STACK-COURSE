function findMax(matrix) {
    let max = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    return max;
}
let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(findMax(m));
