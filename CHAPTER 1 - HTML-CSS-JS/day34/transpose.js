function transposeMatrix(matrix){
    let transpose = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transpose[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transpose[i][j] = matrix[j][i];
        }
        
    }
    return transpose;
}

let m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

console.log(transposeMatrix(m));    
