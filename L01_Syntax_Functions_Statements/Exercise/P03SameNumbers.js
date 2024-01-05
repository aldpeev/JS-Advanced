function solve(num){
    let numAsString = String(num);
    let numArr = [];
    let isSame = true;

    for (let i = numAsString.length - 1; i > 0; i--) {
        if(numAsString.charAt(i) != numAsString.charAt(i - 1)){
            isSame = false;
        }
        numArr.push(Number(numAsString.charAt(i)));
    }
    numArr.push(Number(numAsString.charAt(0)));

    console.log(isSame);
    console.log(numArr.reduce((a,b)=> a + b));
}

solve(2222222);
solve(1234);

