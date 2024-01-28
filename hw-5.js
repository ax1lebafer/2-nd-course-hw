// Задание 1
function returnLowerNumber(numberOne, numberTwo) {
    if (numberOne <= numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

console.log(returnLowerNumber());

// Задание 2
function evenNumber(numberOne) {
    if (numberOne % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(evenNumber(234));

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
function sayHello() {
    let howManyYears = prompt('Сколько тебе лет?');

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
function multiplyingNumbers(numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return numberOne * numberTwo;
    }
}

console.log(multiplyingNumbers(6, 4));

// Задание 6
function raisingNumber() {
    let numberThree = prompt(`Введите число`);

    if (isNaN(numberThree)) {
        return `Переданный параметр не является числом`;
    } else {
        return numberThree + ' в кубе равняется ' + numberThree ** 3;
    }
}

console.log(raisingNumber());

// Задание 7
function getCircleArea() {
    return Math.round(Math.PI * this.radius ** 2);
}

function getCirclePerimeter() {
    return Math.round(2 * Math.PI * this.radius);
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

console.log('Площадь первого круга составляет ' + circle1.getArea() + ' кв. мм');
console.log('Периметр первого круга составляет ' + circle1.getArea() + ' мм');
console.log('Площадь второго круга составляет ' + circle2.getArea() + ' кв. мм');
console.log('Периметр второго круга составляет ' + circle2.getArea() + ' мм');
