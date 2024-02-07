function factoryFnTown(name, population, treasury) {
  return {
    name,
    population,
    treasury,
  };
}

let obj1 = factoryFnTown("Tortuga", 7000, 15000);
let obj2 = factoryFnTown("Santo Domingo", 12000, 23500);


console.log(obj1);
console.log(obj2);