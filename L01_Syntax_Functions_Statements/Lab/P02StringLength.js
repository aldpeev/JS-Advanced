function solve(...args){
    let result = 0;

    for (const arg of args) {
        result += String(arg).length;
    }

    let avg = Math.floor(result / args.length); 

    console.log(result);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');