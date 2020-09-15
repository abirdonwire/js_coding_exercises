function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let capWord = word;
  if (capWord[0] === capWord[0].toUpperCase()) {
    return capWord;
  } else {
    let result = capWord.charAt(0).toUpperCase() + capWord.slice(1);
    return result;
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  let firstInitial = firstName.split("").shift();
  let lastInitial = lastName.split("").shift();
  let initials = `${firstInitial}.${lastInitial}`;
  return initials;
} // Still failing but generates string "F.B", tried a different approach but still failing

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let result = parseFloat(((originalPrice / 100) * (vatRate + 100)).toFixed(2));
  return result;
} // Returns a number, not a string. Still fails.

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let result = originalPrice - originalPrice * (reduction / 100);
  return result;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  return words.map((word) => word.split("").reverse().join(""));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let result = users.filter(function (user) {
    return user.type == "Linux";
  });
  return result.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let result = parseFloat(
    (scores.reduce((a, b) => a + b) / scores.length).toFixed(2)
  );
  return result;
  // Still failing tests, I just don't understand why. I debugged using typeof and it's returning a number not a string.
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
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
