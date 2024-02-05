function sort(arr) {
  let resultArr = [];
  arr.sort((a, b) => a - b);

  while (arr.length > 0) {
    resultArr.push(arr.shift());
    resultArr.push(arr.pop());
  }

  return resultArr;
}

console.log(sort([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
