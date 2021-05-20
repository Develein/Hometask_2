var num = {
    units: 0,
    tens: 0,
    hundreds: 0,
    selfInit: function (number) {
        var i = 1, current, strNumber
        if (isNaN(number)) {
            return console.log("Вы ввели не число!")
        } else if (Math.abs(number) >= 1000) {
            return number > 0 ? console.log("Вы ввели число больше 999") : console.log("Вы ввели число меньше -999")
        } else {
            strNumber = Math.abs(Math.floor(number)).toString()
            while (1 <= strNumber.length) {
                current = strNumber[strNumber.length - 1]
                switch (i) {
                    case 1:
                        this.units = current
                        break;
                    case 2:
                        this.tens = current
                        break;
                    case 3:
                        this.hundreds = current
                        break;
                    default:
                        console.log("Почему-то вышли за пределы трех")
                        break;
                }
                strNumber = strNumber.substring(0, strNumber.length - 1)
                i++
            }
        }
        this.show()
    },
    show: function () {
        console.log("В нашем объекте: \nСотен - " + this.hundreds + "\nДесятков - " + this.tens + "\nЕдиниц - " + this.units)
    }
}

var number = +prompt("Введите число от 0 до 999", 0)
console.log("Указанное число: " + number)
num.selfInit(number)