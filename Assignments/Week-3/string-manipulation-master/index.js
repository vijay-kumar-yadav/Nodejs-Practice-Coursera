const StringManipulation = require("./src/StringManipulation");

console.log(
  StringManipulation.countCharacters("Hi, welcome to learning programming")
);
console.log(StringManipulation.countVowels("Programming"));
console.log(
  StringManipulation.checkExistenceOfStr(
    "Hi, welcome to learning programming",
    "welcome"
  )
);
console.log(
  StringManipulation.replaceWord(
    "Hi, welcome to learning programming",
    "programming",
    "platform"
  )
);
console.log(
  StringManipulation.titleCaseConversion("Hi, welcome to learning programming")
);
console.log(
  StringManipulation.findLongestWord("Hi, welcome to learning programming")
);
