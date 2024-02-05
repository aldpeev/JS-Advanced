function solve(speed, area) {
  let areaObj = {
    residential: 20,
    city: 50,
    interstate: 90,
    motorway: 130,
  };

  let speeding = speed - areaObj[area];
  let zone = areaObj[area];

  if (speed <= areaObj[area]) {
    console.log(`Driving ${speed} km/h in a ${zone} zone`);
  } else if (speeding <= 20) {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${zone} - speeding`
    );
  } else if (speeding <= 40) {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${zone} - excessive speeding`
    );
  } else {
    console.log(
      `The speed is ${speeding} km/h faster than the allowed speed of ${zone} - reckless driving`
    );
  }
}

solve(200, "motorway");
