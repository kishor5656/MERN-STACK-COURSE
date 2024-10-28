// Problem 1: Convert 2D Array to a Key-Value Map 
function convert2DArrayToMap(data) {
    const resultMap = new Map();
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const key = row[0];
      const values = row.slice(1); // Remove first element (key)
      resultMap.set(key, values);
    }
    return resultMap;
  }
  
  // Example usage:
  let data = [
    ['John', 85, 90],
    ['Alice', 78, 88],
    ['Bob', 92, 81]
  ];
  const result = convert2DArrayToMap(data);
  console.log(result); // Output: Map { 'John' => [85, 90], 'Alice' => [78, 88], 'Bob' => [92, 81] }
  
  // Problem 2: Find Sum of Each Row in a 2D Array and Store in Map
  function rowSumToMap(matrix) {
    const sumMap = new Map();
    for (let i = 0; i < matrix.length; i++) {
      let rowSum = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        rowSum += matrix[i][j];
      }
      sumMap.set(i, rowSum);
    }
    return sumMap;
  }
  

  let matrix = [
    [5, 10, 15],
    [3, 6, 9],
    [2, 4, 6, 8]
  ];
  const rowSums = rowSumToMap(matrix);
  console.log(rowSums); 