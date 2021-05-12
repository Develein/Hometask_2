// Task 1

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log("Task 1")

var n = 1, divider
while (n++ < 100) {
    divider = 1;

    while (divider++ <= Math.floor(n / 2)) {
        if (n % divider == 0 && n != 2) {
            break;
        }
        else if (divider >= Math.floor(n / 2)) {
            console.log(n);
            break;
        }
    }
}

// Task 2-3 (насколько понял, задание объединено. Надо написать массив объектов и сделать функцию countBasketPrice)

console.log("")
console.log("Task 2-3")

var goods = [
    { name: "Планшет", amount: 5, price: 50000 },
    { name: "Компьютер", amount: 3, price: 100000 },
    { name: "Компьютерная мышь", amount: 15, price: 2500 },
    { name: "Наушники", amount: 10, price: 1300 }
]

function countBasketPrice(goodsArray) {
    var total = 0
    for (var item of goodsArray) {
        total += item.amount * item.price
    }
    return total
}

console.log("Общая стоимость корзины составляет: " + countBasketPrice(goods) + " руб.")

// Task 4

// *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

console.log("")
console.log("Task 4")
for (var k = 0; k <= 9; console.log(k++)) { }



// Task 5
// *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов.

console.log("")
console.log("Task 5\nЦиклом while")

var i = 0, str = ""
while (i++ < 20) console.log(i + ".  " + (str += "x")) //Проверяем, i < 20? После этого сразу увеличиваем i на 1 и выводим нашу строку, один раз увеличенную на x. 

console.log("")
console.log("Task 5\nЦиклом for")

for (var str = ""; str.length < 20; console.log(str += "x")); //Считаем по длине строки. Строка увеличивается, её длина тоже.
console.log(str.length + " - если лень считать :)")