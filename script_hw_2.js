// hometask 2

// 1 task

// 1. Дан код. Почему дает именно такие результаты?

// var a = 1, b = 1, c, d;

// c = ++a; alert(c);           // 2
// Префиксная форма. Сперва увеличиваем на 1, потом присваиваем

// d = b++; alert(d);           // 1
// Постфиксная форма. Сперва присваиваем, потом уже увеличиваем. Поэтому выводится значение b до увеличения

// c = (2+ ++a); alert(c);      // 5
// Ранее мы увеличили "а" на 1. Заходим сюда, прибавляем к 2 "а", увеличенное ещё на один (префиксная форма). Получается 2 + 3 = 5.
// Запомнили, что а теперь равно 3

// d = (2+ b++); alert(d);      // 4
// Аналогично. Ранее увеличили "b" на 1. Однако, так как постфиксная форма, то мы сперва прибавляем "b" к двум, и только потом его увеличиваем. 2 + 2 = 4. 
// Запомнили, что b теперь равно 3 

// alert(a);                    // 3
// alert(b);                    // 3
// Объяснил выше

// 2 task

// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// х будет равен 1 + 4 = 5, т.к. мы сперва увеличили а в 2 раза, затем прибавили 1.

// 3 task

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
console.log("Третье задание")
var a, b
a = Math.floor(Math.random() * 21) - 10 // Зададим число от -10 до 10
b = Math.floor(Math.random() * 21) - 10
console.log("a = " + a + "; b = " + b)
if (a >= 0) (b >= 0) ? console.log(a - b) : console.log(a + b)
else (b >= 0) ? console.log(a + b) : console.log(a * b)

// 4 task

// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
// Можно сделать второй способ решения, используя рекурсию

// Если честно, лень делать switch, т.к. придется писать 15 кейсов. 
// Тут суть в том, что не нужно использовать break. Тогда, когда дойдём до нужного а, выведем его и все следующие числа.

// Вот с помощью рекурсии:
var a = Math.floor(Math.random() * 16)
function printNum(num) {
    console.log(num)
    if (num < 15) printNum(num + 1)
}
console.log("Четвертое задание\nПолучили а = " + a + "\nВыводим:")
printNum(a)

// 5 task

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function sum(x1, x2) {
    return x1 + x2
}
function dif(x1, x2) {
    return x1 - x2
}
function mul(x1, x2) {
    return x1 * x2
}
function div(x1, x2) {
    return x1 / x2
}

// 6 task

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+": return sum(arg1, arg2)
        case "-": return dif(arg1, arg2)
        case "*": return mul(arg1, arg2)
        case "/": return div(arg1, arg2)
        default: return "Знак не распознан"
    }
}

a = +prompt("Введи а")
b = +prompt("Введи b")
var sign = prompt("a = " + a + "; b = " + b + "\nКакую операцию хотите выполнить? (+, -, *, /)")
console.log("6 задание\n" + a + " " + sign + " " + b + " = " + mathOperation(a, b, sign))

// 7 task

// Сравнить null и 0. Попробуйте объяснить результат.

console.log("7 задание\nnull == 0 - " + (null == 0) + "\nnull > 0  - " + (null > 0) + "\nnull < 0 - " + (null < 0) + "\nnull >= 0 - " + (null >= 0) + "\nnull <= 0 - " + (null <= 0))
console.log("Дело в том, как JS осуществляет сравнение. \nДля операций >/< используется приведение (toNumber) \n0 остается нулем, а null преобразуется к +0. \nПолучается, 0 == 0, соответственно, данное строгое неравенство неверно.")
console.log("Number(null) - " + Number(null))
console.log("Что касается операции == \nЕсть определнный алгоритм, по которому идёт сравнение. \nСогласно этому алгоритму, т.к. не один из вариантов сравнения не подошёл, возвращается false")
console.log("typeof(0) - " + typeof (0))
console.log("typeof(null) - " + typeof (null))
console.log("Что касается операции >=/<= \nТак как строгое сравнение возвращает false, получается, сравнение, отличное от него, должно вернуть true.\nТо есть, т.к. 0 < null - false, математически, 0 >= null должно вернуть true, и наоборот.")

// 8 task

// С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function numToPow(num, pow) {
    return pow <= 1 ? num : num * numToPow(num, pow - 1)
}

a = +prompt("Какое число будем возводить в степень?")
b = +prompt("В какую степень возведем число " + a + "?")
console.log(a + " в степени " + b + " = " + numToPow(a, b))