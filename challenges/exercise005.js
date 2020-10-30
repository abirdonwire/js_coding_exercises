const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = nums.indexOf(n);
  if (index >= 0 && index < nums.length - 1) {
    let nextItem = nums[index + 1];
    return nextItem;
  } else {
    return null;
  }
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const numberObj = {
    1: 0,
    0: 0,
  };

  let arr = str.split("");
  let zeros = arr.filter((x) => x === "0").length;
  let ones = arr.filter((x) => x === "1").length;

  numberObj["1"] = ones;
  numberObj["0"] = zeros;

  return numberObj;
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return Number(Array.from(n.toString()).reverse().join(""));
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length >= 2) {
    let firstVal = arr.shift();
    let lastVal = arr.pop();
    arr.unshift(lastVal);
    arr.push(firstVal);
    return arr;
  } else {
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (let key in haystack) {
    const values = `${haystack[key]}`;
    const lowerCaseValues = values.toLowerCase();
    if (lowerCaseValues.includes(searchTerm.toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const frequency = {};
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    const newWord = word.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g, '');
    if (frequency[newWord] === undefined) {
      frequency[newWord] = 1;
    } else {
      frequency[newWord] += 1;
    }
  }
  return frequency;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
