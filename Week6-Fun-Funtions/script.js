"use strict";

(function question6() {
  const sumOfNums = (numbers) => {
    if (numbers.length === 0) return 0;
    else {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
  };
  const arr = sumOfNums([100, 101, 102]);
  console.log(`sumOfNums: ${arr}`);
})();

(function question7() {
  const numsGreaterThanTen = (numbers) => {
    const newArray = [];
    if (numbers.length === 0) return 0;
    else {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) newArray.push(numbers[i]);
      }
      return newArray;
    }
  };
  const arr = numsGreaterThanTen([1, 2, 3, 4, 10, 20, 99]);
  console.log(`numsGreaterThanTen: ${arr}`);
})();

(function question8() {
  const allStartingWithA = (stringArr) => {
    if (stringArr.length === 0) return true;
    else {
      for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i][0] !== "A" && stringArr[i][0] !== "a") return false;
      }
      return true;
    }
  };
  const arr = allStartingWithA(["A", "aa", "a", "Abcaa", "Acca"]);
  console.log(`allStartingWithA: ${arr}`);
})();

(function question9() {
  const hasAtLeastNVowels = (word, n) => {
    if (n < 0) return null;
    else {
      const vowels = ["a", "e", "i", "o", "u"];
      let countVowel = 0;

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < vowels.length; j++)
          if (word[i] === vowels[j]) countVowel++;
      }
      if (countVowel >= n) return true;
      else return false;
    }
  };
  const hasVowels = hasAtLeastNVowels("cccbabv", 1);
  console.log(`hasAtLeastNVowels: ${hasVowels}`);
})();

(function question10() {
  const buildObjectFromWords = (words) => {
    const obj = {};

    for (let i = 0; i < words.length; i++) {
      obj[words[i]] = words[i].length;
    }

    return obj;
  };
  const buildObj = buildObjectFromWords(["cat", "horse", "elephant"]);
  console.log("buildObjectFromWords:", buildObj);
})();
