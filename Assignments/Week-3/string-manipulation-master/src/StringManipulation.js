//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
};
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let vowelArray = str.match(/[aeiouAEIOU]+/gm);
  let totalVowel = 0;
  if (vowelArray == null) return totalVowel;
  for (let i of vowelArray) {
    totalVowel += i.length;
  }
  return totalVowel;
};

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if (str.match(checkStr) == null) return false;
  return true;
};

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
};

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  str = str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      str =
        str.slice(0, i + 1) +
        str.slice(i + 1, i + 2).toUpperCase() +
        str.slice(i + 2, str.length);
    }
  }
  return str;
};

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  let strArr = str.split(" ");
  let highestLen = 0;
  let highestLenWord = "";
  for (let i of strArr) {
    if (i.length > highestLen) {
      highestLen = i.length;
      highestLenWord = i;
    }
  }
  return highestLenWord;
};

module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord,
};
