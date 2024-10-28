function diagonalSum(matrix) {
    let sum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        sum += matrix[i][i];
        sum += matrix[i][n - i - 1];
    }
    if (n % 2 === 1) {
        let middle = Math.floor(n/2);
        sum -= matrix[middle][middle];
    }
    return sum;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalSum(matrix));