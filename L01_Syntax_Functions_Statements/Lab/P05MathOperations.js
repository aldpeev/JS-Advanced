function solve(num1, num2, operand) {
  let result;

  switch (operand) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      result = 0;
      break;
  }

  console.log(result);
}

solve(5, 6, '+');
