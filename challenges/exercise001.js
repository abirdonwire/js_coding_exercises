function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1) + "." + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (100 + vatRate)) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice - originalPrice * (reduction / 100);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.length % 2 === 0
    ? str[str.length / 2 - 1] + str[str.length / 2]
    : str[Math.floor(str.length / 2)];
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => word.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let result = users.filter(function (user) {
    return user.type == "Linux";
  });
  return result.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return parseFloat(
    (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
  );
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  } else if (n % 3 == 0) {
    return "fizz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
