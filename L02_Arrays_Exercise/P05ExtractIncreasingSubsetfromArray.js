function solve(arr) {
  return arr.reduce(function (acc, c, i) {
    if (i === 0) {
      return [c];
    } else if (c >= acc[acc.length - 1]) {
      acc.push(c);
      return acc;
    } else {
      return acc;
    }
  }, []);
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
