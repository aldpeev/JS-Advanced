function cityTaxes(name, population, treasury) {
  function collectTaxes() {
    this.treasury += this.population * this.taxRate;
  }

  function applyGrowth(percentage) {
    this.population = this.population + this.population * (percentage / 100);
  }

  function applyRecession(percentage) {
    this.treasury = this.treasury - this.treasury * (percentage / 100);
  }

  let obj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes,
    applyGrowth,
    applyRecession,
  };

  return obj;
}

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
