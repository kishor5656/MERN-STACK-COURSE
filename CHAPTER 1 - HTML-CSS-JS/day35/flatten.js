let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
flattenedArray = [];
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            flattenedArray.push(matrix[i][j]);
        }
    }
    return flattenedArray
}

console.log(printMatrix(m));

