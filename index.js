// problem-1
/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else. */

const rahim = 85;
const tom = 66;
const jane = 95;
const peter = 56;
const john = 40;

if (john >= 80) {
  console.log("you getting a grade");
} else if (john >= 60) {
  console.log("you getting b grade");
} else if (john >= 50) {
  console.log("you getting c grade");
} else if (john >= 40) {
  console.log("you getting d grade");
} else {
  console.log("you getting f grade");
}

// problem-2

/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else. */

const a = 13;
const b = 79;
const c = 45;

if (a > b && a > c) {
  console.log("a is largest number");
} else if (b > a && b > c) {
  console.log("b is largest number");
} else {
  console.log("c is largest number");
}

// problem-3

/* You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.

Isosceles => two sides are equal */
const num1 = 8;
const num2 = 8;
const num3 = 7;

if (num1 === num2 || num1 === num3 || num2 === num3) {
  console.log("triangle are isosceles");
} else {
  console.log("triangle are not isosceles");
}

// problem-4

/* write a function called make_avg which will take an array og integers and the size of that array and return the average of those values */

function make_avg(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum = sum + inputArray[i];
  }
  const avg = sum / inputArray.length;

  return avg;
}
const average = make_avg([12, 14, 15, 16, 17]);
// console.log(average);

const oddElementSum = (inputArray) => {
  const oddArray = [];
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (element % 2 === 0) {
      oddArray.push(element);
    }
  }
  for (let j = 0; j < oddArray.length; j++) {
    sum = sum + oddArray[j];
  }
  return sum
};
const total = oddElementSum([10, 12, 13, 14, 15, 17, 18, 19, 20]);

// problem-5
/* find out the reverse string value */

function reverseString(input){
  
  const stringValue = input.split(" ");
  let newString = [];
  
  for( let i = stringValue.length -1 ; i >= 0 ; i--){
    newString.push(stringValue[i])
  }
  const finalValue = newString.join(' ')
  return finalValue;

}
const inputString = "Hasib is a good boy"
const stringValue = reverseString(inputString)
// console.log(stringValue)