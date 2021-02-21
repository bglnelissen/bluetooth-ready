basic.showString("...")
bluetooth.setTransmitPower(9)
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startTemperatureService()
bluetooth.startLEDService()
bluetooth.startMagnetometerService()
basic.showString("+")
basic.forever(function () {
	
})
