// Задание 1
// let a = 20;

// alert(a);

// Задание 2
let releaseDatePhone = 2007;

alert(releaseDatePhone);

// Задание 3
let creatorNameJS = 'Брендан Эйх';

alert(creatorNameJS);

// Задание 4
let firstNumber = 10
twoNumber = 2;

alert(firstNumber + twoNumber);
alert(firstNumber - twoNumber);
alert(firstNumber * twoNumber);
alert(firstNumber / twoNumber);

// Задание 5
let result = twoNumber ** 5;

alert(result);

// Задание 6
let a = 9
b = 2;

alert(a % b);

// Задание 7
let num = 1;

num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;

alert(num);

// Задание 8
let age = Number(prompt('Сколько Вам лет?'));

alert(age);

// Задание 9.0
let user = {
    name: 'Рауль',
    age: 23,
    isAdmin: true
}

console.log(user.age);

// Задание 9.1
user.cityOfResidence = 'Саратов';

// Задание 9.2
user.age = 26;
console.log(user.age);

// Задание 9.3
delete user['cityOfResidence'];

// Задание 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');

alert(user[info]);

// Задание 10
let yourName = prompt('Введите Ваше имя');

alert(`Привет, ${yourName}`);