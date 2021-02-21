input.onButtonPressed(Button.A, function () {
    images.createImage(`
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
basic.showString("...")
bluetooth.setTransmitPower(9)
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startTemperatureService()
bluetooth.startLEDService()
bluetooth.startMagnetometerService()
images.createImage(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `).showImage(0)
basic.forever(function () {
	
})
