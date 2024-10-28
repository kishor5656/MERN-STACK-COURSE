let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function isSaddle(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowMin = Math.min(...matrix[i]);
        let colIndex = matrix[i].indexOf(rowMin);
        let saddlePoint = true;

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][colIndex] > rowMin) {
                saddlePoint = false;
                break;
            }

        }
        if (saddlePoint) {
            return { row: i, col: colIndex, value: rowMin };
        } 
        

    }return null;
}


console.log(isSaddle(m));

