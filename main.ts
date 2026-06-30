input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        number_1 += 1
        basic.showNumber(number_1)
    }
    if (_switch == 1) {
        number_2 += 1
        basic.showNumber(number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    number_2 += 1
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    number_2 += 1
    basic.showNumber(number_1 + number_2)
})
let number_2 = 0
let _switch = 0
let number_1 = 0
number_1 = 0
_switch = 0
number_2 = 0
let op = 0
