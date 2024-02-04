// Задание 1
const arrNumber = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumber.length; i++) {
  console.log(arrNumber[i]);
  if (arrNumber[i] === 10) break;
}

// Задание 2
const arrNumberTwo = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrNumber.length; i++) {

  if (arrNumberTwo[i] === 4) {
    console.log(i);
  }
}

let result = arrNumberTwo.indexOf(4);
console.log(result);

// Задание 3
const arrNumberThree = [1, 3, 5, 10, 20];

let joinOne = arrNumberThree.join(' ');

console.log(joinOne);

// Задание 4
const arrNumberFour = [];

for (let i = 0; i < 3; i++) {
  arrNumberFour[i] = [];
  for (let j = 0; j < 3; j++) {
    arrNumberFour[i][j] = 1;
  }
}

console.log(arrNumberFour);

// Задание 5
const arrNumberFive = [1, 1, 1];

for (let i = 0; i < 3; i++) {
  arrNumberFive.push(2);
}

console.log(arrNumberFive);

// Задание 6
const arrOne = [9, 8, 7, 'a', 6, 5];

arrOne.sort();
arrOne.pop();
arrOne.reverse();

console.log(arrOne);

// Задание 7
const arrNumberSix = [9, 8, 7, 6, 5];

let puzzle = Number(prompt('Угадай число'));

if (arrNumberSix.includes(puzzle)) {
  console.log('Угадал');
} else {
  console.log('Не угадал');
}

// Задание 8
let wordOne = 'abcdef';

let arrString = wordOne.split('');

arrString.reverse();
wordOne = arrString.join('');

console.log(wordOne);

// Задание 9
const arrNumberSeven = [
  [1, 2, 3, ],
  [4, 5, 6]
];

let arr = [].concat(arrNumberSeven[0], arrNumberSeven[1]);

console.log(arr);

// Задание 10
const arrNumberEight = [8, 5, 3, 4, 3, 7, 9, 2, 0, 1];

for (let i = 1; i < arrNumberEight.length; i++) {
  let sum = arrNumberEight[i - 1] + arrNumberEight[i];
  console.log(sum);
}

// Задание 11
const arrNumberNine = [4, 7, 2, 6, 9, 3];

function getSquarNumbers(array) {
  const arrNumberNineNew = array.map((number) => number * number);
  return arrNumberNineNew;
}

console.log(getSquarNumbers(arrNumberNine));

// Задание 12
const arrWord = ['слово', '', 'слог', 'длинное предложение', 'буква'];

let getLengthWords = function(array) {
    const arrWordLength = array.map((word) => word.length);
    return arrWordLength;
}

console.log(getLengthWords(arrWord));

// Задание 13
const arrNumberTen = [3, 5, -5, 2, -3, -9, 2, -1];

let filterPositive = function(array) {
	const positiveNumber = array.filter((x) => x < 0);
    return positiveNumber;
}

console.log(filterPositive(arrNumberTen));

// Задание 14
const generatedArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

console.log(generatedArray);

const evenArray = generatedArray.filter(x => x % 2 === 0);

console.log(evenArray);

// Задание 15
const generatedArrayTwo = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

console.log(generatedArrayTwo);

let totalSum = generatedArrayTwo.reduce((a, b) => a + b);

console.log(totalSum);

let average = totalSum / generatedArrayTwo.length;

console.log(average);