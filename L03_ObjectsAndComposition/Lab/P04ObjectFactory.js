function factory(library, orders) {
  let resultArrObj = [];

  for (let i = 0; i < orders.length; i++) {
    let currentObj = orders[i].template;
    for (let part of orders[i].parts) {
      currentObj[part] = library[part];
    }
    resultArrObj.push(currentObj);
  }

  return resultArrObj;
}

const library = {
  get1: function () {
    return 1;
  },
  get3: function () {
    return 3;
  },
};

const orders = [
  {
    template: {},
    parts: ["get1"],
  },
  {
    template: {},
    parts: ["get1", "get3"],
  },
];

const products = factory(library, orders);
console.log(products);

