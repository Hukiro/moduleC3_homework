function ElectronicDevice(name, power) {
    this.name = name
    this.power = power
    this.isWork = false
}

ElectronicDevice.prototype.turnOn = function () {
    console.log(this.name + ' is turned on')
    this.isWork = true
}

ElectronicDevice.prototype.turnOff = function () {
    console.log(this.name + ' is turned off')
    this.isWork = false
}

function Lamp(name, power, color, type) {
    this.name = name
    this.power = power
    this.isWork = false
    this.color = color
    this.type = type
}

Lamp.prototype = new ElectronicDevice()

function Computer(name, power, GPU, CPU) {
    this.name = name
    this.power = power
    this.isWork = true
    this.GPU = GPU
    this.CPU = CPU
}

Computer.prototype = new ElectronicDevice()

const myLamp = new Lamp('ordinary lamp', '15W', 'black', 'table type')
myLamp.turnOn()
const myPC = new Computer('main PC', '750W', 'NVidea', 'Intel')
myPC.turnOff()

console.log(myLamp)
console.log(myPC)
