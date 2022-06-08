console.log("====BMI====");

const calcBMI = (name, gender, height, weight) => {
  const bmi = Math.trunc(weight / (height * height));
  let string = "";
  // bmi < 18.5
  //   ? (string += "underweight")
  //   : bmi >= 18.5 && bmi < 25
  //   ? (string += "normal")
  //   : bmi >= 25.0 && bmi < 30
  //   ? (string += "overweight")
  //   : (string += "obese");

  if (bmi < 18.5) {
    string += "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    string += "normal";
  } else if (bmi >= 25.0 && bmi < 30) {
    string += "overweight";
  } else if (bmi >= 30) {
    string += "obese";
  }

  displayBMI(name, gender, bmi, string);
};

const displayBMI = (name, gender, bmi, string) => {
  console.log(`${name} | ${gender} | BMI: ${bmi} | ${string}`);
};

calcBMI("John Doe", "M", 1.9, 64);
console.log("");
console.log("====JAVASCRIPT CONTROL STRUCTURE===");

// display in the console the numbers from 1 to 20
console.log("");
console.log("====display in the console the numbers from 1 to 20====");

const display1To20 = () => {
  let string = "";
  for (let i = 1; i <= 20; i++) {
    string += i + " ";
  }
  console.log(string);
};
display1To20();
console.log("");

// display in the console the odd numbers from 1 to 20
console.log("==== display in the console the odd numbers from 1 to 20====");

const displayOdd1To20 = () => {
  let string = "";
  for (let i = 1; i <= 20; i += 2) {
    string += i + " ";
  }
  console.log(string);
};
displayOdd1To20();
console.log("");

// compute the sum of the elements of an array and display it in the console

console.log(
  "==== compute the sum of the elements of an array and display it in the console===="
);
let testArr = [2, 4, 66, 55, 89, 202, 403, 55, 34, 11, 2];
// using reduce metod
let sum = testArr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const displaySumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};
displaySumArr(testArr);
console.log("");

// compute the maximum of the elements of an array and display it in the console
console.log(
  "==== compute the maximum of the elements of an array and display it in the console===="
);

const displayMaxArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
};
displayMaxArr(testArr);
console.log("");

// compute how many times a certain element appears in an array
console.log(
  "====compute how many times a certain element appears in an array===="
);

const displayOccurance = (arr, elem) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      count++;
    }
  }
  console.log(count);
};

displayOccurance(testArr, 55);
console.log("");

console.log("Challenge");

const challenge = () => {
  let rows = 4;
  let string = "";
  let number;
  // outer loop for keeping track of rows
  for (let i = 0; i < rows; i++) {
    // starting with 0
    if (i % 2 === 0) {
      number = 0;
      for (let j = 0; j < rows; j++) {
        string += number + " ";
        number = number === 0 ? 1 : 0;
      }
    } else if (i % 2 !== 0) {
      number = 1;
      for (let j = 0; j < rows; j++) {
        string += number + " ";
        number = number === 1 ? 0 : 1;
      }
    }
    string += "\n";
  }
  console.log(string);
};

challenge();

console.log(x);
var x = 2;
