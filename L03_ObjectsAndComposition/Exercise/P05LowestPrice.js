function lowestPrice(citiesAndPrices) {
  let products = {};

  for (let city of citiesAndPrices) {
    let [town, product, price] = city.split(" | ");
    price = Number(price);

    if (!products.hasOwnProperty(product)) {
      addToObj(products, product, price, town);
    } else if (products[product].price > price) {
      addToObj(products, product, price, town);
    }
  }

  function addToObj(products, product, price, town) {
    products[product] = { price, town };
  }

  for (let key in products) {
    console.log(`${key} -> ${products[key].price} (${products[key].town})`);
  }
}

lowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
