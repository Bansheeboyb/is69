const isNumber = require("is-number");
const isOdd = require("is-odd");
const isEven = require("is-even");
const isString = require("is-string");
const is9 = require("is-eq-nine");
const is6 = require("is-eq-six");

module.exports = async (value) => {

  //return nice if nice is passed since nice === 69
  if(isString(value) && value.toLowerCase() === "nice"){
    return "Nice";
  }

  //parse value to number in case a string is passed
  let number = +value;

  //check and make sure we have a number
  if (!isNumber(number)) {
    return "Not Nice";
  }

  //conver the number to a string
  number = number.toString();
  const charCount = number.length;
  const charArray = number.split('').map((char) => +char);

  //69 only has two digits
  if (charCount !== 2) {
    return "Not Nice";
  }

  //check characters at each position
  const check9 = (val) => is9(val);
  const check6 = (val) => is6(val)
  const validCharacterIndex = [check6, check9];
  for (let i = 0; i < charCount; i++) {
    if (!validCharacterIndex[i](charArray[i])) {
      return "Not Nice";
    }
  }

  //convert back to a number
  number = +number;

  //69 is not even
  if (isEven(number)) {
    return "Not Nice";
  }

  //69 is odd
  if (!isOdd(number)) {
    return "Not Nice";
  }

  if (number === 69) {
    return "Nice";
  }

  return "Not Nice";

}
