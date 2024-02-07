function solve(data) {
  let resultArrOfHeros = [];

  for (let hero of data) {
    let [name, level, items] = hero.split(" / ");
    let heroObj = {};

    heroObj.name = name;
    heroObj.level = Number(level);
    heroObj.items = items ? items.split(", ") : [];

    resultArrOfHeros.push(heroObj);
  }

  return JSON.stringify(resultArrOfHeros);
}

console.log(solve(["Isacc / 25 /"]));
