let matrix = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

result = [];

let left = 0
let top = 0;
let right = matrix[0].length - 1;
let bottom = matrix.length - 1;

while (left <= right && top <= bottom) {
    for (i = left; i <= right; i++) {
        result.push(matrix[top][i]);
    }
    top++

    for (i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
    }
    right--;

    for (i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
    }
    bottom--;


    result.push(matrix[top][right]);


}
console.log(result);
