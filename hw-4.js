// Задание 1
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задание 2
let a = 0;

while (a < 5) {
    a++;
    console.log(a);
}

// Задание 3
let b = 7;

while (b <= 25) {
    console.log(b);
    b++;
}

// Задание 4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let element in obj) {
    console.log(`${element} - зарплата ${obj[element]} долларов`);
}

// Задание 5
let num = 0;

for (let i = 1000; i >= 50; i /= 2) {
    num++;
    console.log('Получилось число: ' + i + '.');
}

console.log('Всего итераций: ' + num);

// Задание 6
for (let dayNumber = 5; dayNumber <= 31; dayNumber += 7) {
    console.log(`Сегодня пятница ${dayNumber}-е число. Необходимо подготовить отчет.`);
}