function solve(year, month, day){
    let date = new Date(year,month, day);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

}

solve(2016, 9, 30);
solve(2015, 5, 10);