// Задание 1
let password = 'Пароль';
let enterPassword = prompt('Введите пароль');

if (enterPassword === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}

// Задание 2
let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3
let d = 300;
let e = 45;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 7;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Такого месяца не существует!');
        break;
}

// Задание 7
let anyNumber = prompt('Пожалуйста, введите любое число');

if (isNaN(anyNumber)) {
    console.log('Это не число');
} else {
    if (anyNumber % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

// Задание 8
let clientOS = 0;
let message;

message = (clientOS === 0) ? 'Установите версию приложения для iOS по ссылке' : 'Установите версию приложения для Android по ссылке';

console.log(message);

// Задание 9
let clientDeviceYear = 2016;

if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDeviceYear > 2015) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}