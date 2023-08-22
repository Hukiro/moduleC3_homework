class ElectronicDevice {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.isWork = false
    }
    turnOn(){
        console.log(this.name + ' is turned on')
        this.isWork = true
    }

    turnOff() {
        console.log(this.name + ' is turned off')
        this.isWork = false
    }
}

class Lamp extends ElectronicDevice {
    constructor (name, power, color, type) {
        super(name, power)
        this.isWork = false
        this.color = color
        this.type = type
    }
}

class Computer extends  ElectronicDevice {
    constructor(name, power, GPU, CPU) {
        super(name, power)
        this.isWork = true
        this.GPU = GPU
        this.CPU = CPU
    }
}

const myLamp = new Lamp('ordinary lamp', '15W', 'black', 'table type')
myLamp.turnOn()
const myPC = new Computer('main PC', '750W', 'NVidea', 'Intel')
myPC.turnOff()

console.log(myLamp)
console.log(myPC)