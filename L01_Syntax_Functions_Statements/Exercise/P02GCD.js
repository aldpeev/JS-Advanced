function solve(num1, num2) {
    let gcd;

    for (let i = 1; i < Math.max(num1, num2); i++) {
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }     
    }

    console.log(gcd);
}

solve(15, 5);
