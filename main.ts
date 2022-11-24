input.onButtonPressed(Button.AB, function () {
    Length = 0
    steps = 0
    OLED.clear()
})
let Length = 0
let steps = 0
OLED.init(128, 64)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
steps = 0
Length = 0
OLED.writeNumNewLine(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        OLED.clear()
        steps += 1
        OLED.writeNumNewLine(steps)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        OLED.clear()
        Length = steps * 0.8
        OLED.writeNumNewLine(Length)
    }
})
