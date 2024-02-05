function solve(num, ...operations) {
  let number = Number(num);

  let cookingNumbers = {
    chop: (el) => el / 2,
    dice: (el) => Math.sqrt(el),
    spice: (el) => el + 1,
    bake: (el) => el * 3,
    fillet: (el) => el * 0.8,
  };

  for (let i = 0; i < operations.length; i++) {
    let operationToApply = cookingNumbers[operations[i]];
    let tempResult = operationToApply(number);
    console.log(tempResult);
    number = tempResult;
  }
}

solve("32", "chop", "chop", "chop", "chop", "chop");
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
