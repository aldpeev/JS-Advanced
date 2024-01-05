function solve(arr){
    if(Array.isArray(arr)){
        console.log(arr.reduce((cur,next)=> cur + next));
        console.log(arr.reduce((accumulator, currentValue) => accumulator + 1 / currentValue, 0));
        console.log(arr.map(String).join(''));
    }
}

solve([1,2,3]);