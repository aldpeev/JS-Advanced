function carFactory(carDescription) {
  let finishedOrder = {
    model: carDescription.model,
  };

  const engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    big: { power: 200, volume: 3500 },
  };

  const carriage = {
    hatchback: { type: "hatchback", color: carDescription.color },
    coupe: { type: "coupe", color: carDescription.color },
  };

  if (carDescription.power <= 90) {
    finishedOrder.engine = engines.small;
  } else if (carDescription.power <= 120) {
    finishedOrder.engine = engines.normal;
  } else {
    finishedOrder.engine = engines.big;
  }

  if (carDescription.carriage === "coupe") {
    finishedOrder.carriage = carriage.coupe;
  } else {
    finishedOrder.carriage = carriage.hatchback;
  }

  finishedOrder.wheels = Array(4).fill(carDescription.wheelsize);

  if (carDescription.wheelsize % 2 === 0) {
    finishedOrder.wheels = Array(4).fill(carDescription.wheelsize - 1);
  }

  return finishedOrder;
}

console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
