function solve(arr) {
  let startingNumber = 1;
  let resultArr = [];

  for (let command of arr) {
    if (command === "add") {
      resultArr.push(startingNumber);
    } else {
      resultArr.pop();
    }
    startingNumber++;
  }

  if (resultArr.length === 0) {
    console.log("Empty");
  } else {
    console.log(resultArr.join("\n"));
  }
}

solve(["add", "add", "add", "add"]);
console.log("---------------");
solve(["add", "add", "remove", "add", "add"]);
