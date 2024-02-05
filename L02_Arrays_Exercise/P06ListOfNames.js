function printNames(arr) {
  console.log(arr.sort((a, b) => a.localeCompare(b)).map((el,i) => `${i + 1}.${el}`).join('\n'));
}

printNames(["John", "Bob", "Christina", "Ema"]);
