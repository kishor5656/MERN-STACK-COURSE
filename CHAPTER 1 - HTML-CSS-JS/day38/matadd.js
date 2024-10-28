function matrixAddition(A, B) {
  let rows = A.length;
  let cols = A[0].length;
  let c = [];
  for (let i = 0; i < rows; i++) {
    c[i] = [];
    for (let j = 0; j < cols; j++) {
      c[i][j] = A[i][j] + B[i][j];
    }
  }
  return c;
}
let A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let B = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
console.log(matrixAddition(A, B));
