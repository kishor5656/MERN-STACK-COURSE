function rotateMatrix(matrix) {
    let transpose = [];
    for (let i = 0; i < matrix.length; i++) {
        transpose[i] = [];
        for (let j = 0; j < matrix[0].length; j++) {
            transpose[i][j] = matrix[j][i];
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        transpose[i].reverse();
        
    }
    return transpose;
}

let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(rotateMatrix(m));    
