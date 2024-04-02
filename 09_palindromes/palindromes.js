const { convertToCelsius } = require("../07_tempConversion/tempConversion");

function isAlpha(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

const palindromes = function (word) {
    const filteredWord = [...word.toLowerCase()].filter((char) => isAlpha(char));
    console.log(filteredWord);
    for (let i = 0; i < filteredWord.length; i++){
        const start = filteredWord[i];
        const end = filteredWord[filteredWord.length - 1 - i];
        if (start !== end) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
