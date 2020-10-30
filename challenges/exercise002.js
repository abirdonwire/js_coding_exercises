function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const seatsOnBus = 40;
  let result = Math.ceil(people / seatsOnBus);
  return result;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  return arr.filter((x) => x === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  let pCode = person.address.postCode;
  return pCode.charAt(0) == "M" && Number.isInteger(parseInt(pCode.charAt(1)));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
