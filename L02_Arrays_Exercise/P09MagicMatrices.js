function solve(matrix) {
  let sumFirstMatrix = matrix[0].reduce((acc, c) => acc + c, 0);
  let isEqual = true;
  for (let arr of matrix) {
    if (arr.reduce((acc, c) => acc + c, 0) !== sumFirstMatrix) {
      isEqual = false;
      break;
    }
  }

  console.log(isEqual);
}

solve([
  [
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ],
]);
