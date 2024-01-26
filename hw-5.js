// Задание 1
let numberOne = 6;
let numberTwo = 16;

function returnLowerNumber() {
    if (numberOne <= numberTwo) {
        console.log(numberOne);
    } else {
        console.log(numberTwo);
    }
}

returnLowerNumber();

// Задание 2
function evenNumber() {
    if (numberOne % 2 === 0) {
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);
    }
}

evenNumber();

// Задание 3.1
function findingNumberSquare(myNumber = 4) {
    console.log(myNumber ** 2);
}

findingNumberSquare(100);

// Задание 3.2
function findingNumberSquare2(myNumber = 4) {
    return myNumber ** 2;
}

console.log(findingNumberSquare2(12));

// Задание 4
let howManyYears = prompt('Сколько тебе лет?');

function sayHello() {
    if (howManyYears < 0 || isNaN(howManyYears)) {
        alert(`Вы ввели неправильное значение`);
    } else if (howManyYears >= 0 && howManyYears <= 12) {
        alert(`Привет, друг!`);
    } else {
        alert(`Добро пожаловать!`);
    }
}

sayHello();

// Задание 5
function multiplyingNumbers() {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return `Произведение 2-х чисел равно: ` + numberOne * numberTwo;
    }
}

console.log(multiplyingNumbers());

// Задание 6
let numberThree = prompt(`Введите число`);

function raisingNumber() {
    if (isNaN(numberThree)) {
        return `Переданный параметр не является числом`;
    } else {
        return numberThree + ` в кубе равняется ` + numberThree ** 3;
    }
}

console.log(raisingNumber());

// Задание 7
function getCircleArea() {
    return `Площадь круга составляет ` + Math.round(Math.PI * this.radius ** 2) + ` кв. мм`;
}

function getCirclePerimeter() {
    return `Периметр круга составляет ` + Math.round(2 * Math.PI * this.radius) + ` мм`;
}

const circle1 = {
    radius: 10,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

const circle2 = {
    radius: 22,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
