function solve(num) {
  let arr = [];

  for (let k = 0; k < num; k++) {
    arr.push("*");
  }
  
  for (let i = 0; i < num; i++) {
    console.log(...arr);
  }
}

solve(5);
