function factorial(num) {
    return num == 1 ? 1 : num * factorial(num - 1)
}
alert(factorial(5))