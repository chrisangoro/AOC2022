var fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").toString();
const rucksacks = input.split("\n");

const splitRucksacks = rucksacks.map(function (rucksack) {
  return [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2, rucksack.length),
  ];
});

const repeatedLetters = splitRucksacks.map(function (rucksack) {
  let repeatedLetter = "";
  for (let i in rucksack[0]) {
    if (rucksack[1].includes(rucksack[0][i])) {
      repeatedLetter = rucksack[0][i];
      break;
    }
  }
  return repeatedLetter;
});

let letterValue = repeatedLetters.map(function (letter) {
  if (letter === letter.toUpperCase()) {
    return letter.charCodeAt(0) - 38;
  } else {
    return letter.charCodeAt(0) - 96;
  }
});

let partOne = letterValue.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("part 1: ", partOne);

const partTwoRepeatedLetters = [];
for (let i = 0; i < rucksacks.length; i += 3) {
  let firstRepeatedLetters = [];
  for (let j in rucksacks[i]) {
    if (rucksacks[i + 1].includes(rucksacks[i][j])) {
      firstRepeatedLetters.push(rucksacks[i][j]);
    }
  }

  let repeatedInAll = "";
  for (let k in firstRepeatedLetters) {
    if (rucksacks[i + 2].includes(firstRepeatedLetters[k])) {
      repeatedInAll = firstRepeatedLetters[k];
    }
  }

  partTwoRepeatedLetters.push(repeatedInAll);
}

let partTwoLetterValue = partTwoRepeatedLetters.map(function (letter) {
  if (letter === letter.toUpperCase()) {
    return letter.charCodeAt(0) - 38;
  } else {
    return letter.charCodeAt(0) - 96;
  }
});

let partTwo = partTwoLetterValue.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("part 2: ", partTwo);
