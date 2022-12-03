var fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").toString();
const matches = input.split("\n");
const partOneGuide = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};
let partOnePoints = 0;
matches.map(function (match) {
  return (partOnePoints += partOneGuide[match]);
});
console.log("part 1: ", partOnePoints);

const partTwoGuide = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
};
let partTwoPoints = 0;
matches.map(function (match) {
  return (partTwoPoints += partTwoGuide[match]);
});
console.log("part 2: ", partTwoPoints);
