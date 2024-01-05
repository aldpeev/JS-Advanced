function solve(fruit, grams, price){
    console.log(`I need $${(Number(grams) * Number(price) / 1000).toFixed(2)} to buy ${Number(grams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80);