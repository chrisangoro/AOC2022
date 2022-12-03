var fs = require("fs");
input = fs.readFileSync("./input.txt", "utf8").toString();
elves = input.split("\n\n");

totalCaloriesPerElf = elves.map(function (elf) {
  return elf
    .split("\n")
    .reduce(
      (accumulator, currentValue) =>
        parseInt(accumulator) + parseInt(currentValue)
    );
});

console.log("part 1:", Math.max(...totalCaloriesPerElf));

totalCaloriesPerElf.sort((a, b) => b - a);

console.log(
  "part 2:",
  parseInt(totalCaloriesPerElf[0]) +
    parseInt(totalCaloriesPerElf[1]) +
    parseInt(totalCaloriesPerElf[2])
);
