function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums !== undefined) {
    return nums.map((x) => Math.pow(x, 2));
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let result = "";

  for (let i = 0, length = words.length; i < length; i++) {
    let currentStr = words[i];
    let tempStr = currentStr.toLowerCase();

    if (i != 0) {
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    }
    result += tempStr;
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let result = people
    .map(function (person) {
      return person.subjects;
    })
    .filter((subject) => subject.length !== 0)
    .flat().length;

  return result;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu
    .map((dish) => dish.ingredients)
    .flat()
    .includes(ingredient);
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArr = arr1.concat(arr2);
  return newArr
    .filter((item, index) => newArr.indexOf(item) != index)
    .sort()
    .filter((item, index) => newArr.indexOf(item) === index);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
