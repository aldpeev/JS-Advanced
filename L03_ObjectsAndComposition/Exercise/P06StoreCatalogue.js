function sorterCatalogue(data) {
  let catalogue = {};

  for (let products of data) {
    let [prodcut, price] = products.split(" : ");
    price = Number(price);

    let firstChar = prodcut.split("")[0];

    if (!catalogue.hasOwnProperty(firstChar)) {
      catalogue[firstChar] = [{ prodcut, price }];
    } else {
      catalogue[firstChar].push({ prodcut, price });
    }
  }

  let keys = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

  for (let key of keys) {
    console.log(`${key}`);
    for (let products of catalogue[key]) {
      console.log(`  ${products.prodcut}: ${products.price}`);
    }
  }
}

sorterCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
