function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((value) => value < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name.charAt(0) === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter((word) => word.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((value) => Number.isInteger(value));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map((user) => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((value) => parseFloat(Math.sqrt(value).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const matchingSentences = sentences.filter(function (item) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      return item;
    }
  });
  return matchingSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function (triangleItem) {
    return triangleItem.reduce(function (a, b) {
      return a > b ? a : b;
    });
  });
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
