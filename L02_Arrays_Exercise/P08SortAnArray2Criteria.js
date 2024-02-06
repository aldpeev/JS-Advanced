function solve(arr) {
  console.log(
    arr
      .sort((a, b) => a.localeCompare(b))
      .sort((a,b) => a.length - b.length)
      .join("\n")
  );
}

solve(["alpha", "beta", "gamma"]);
