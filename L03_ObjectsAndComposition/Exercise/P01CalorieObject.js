function solve(data) {
  let calorieObj = {};

  for (let i = 1; i < data.length; i+= 2) {
    calorieObj[data[i - 1]] = Number(data[i]);
  }

  console.log(calorieObj);
}

console.log(solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
