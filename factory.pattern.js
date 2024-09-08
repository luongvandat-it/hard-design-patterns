class Car {
    constructor(name = 'Car', doors = 4, price = 20000, cusInfo = {}) {
        this.name = name
        this.doors = doors
        this.price = price
        this.cusInfo = cusInfo
    }
}

class ServiceLogistic {
    // transportClass = Car
    constructor() {
        this.transportClass = Car
    }

    getTransport = (cusInfo) => {
        return new this.transportClass(cusInfo)
    }
}

const carService = new ServiceLogistic()
const car = carService.getTransport({name: 'Car', doors: 4, price: 20000})
console.log(JSON.stringify(car))

class Truck {
    constructor(name = 'Truck', doors = 6, price = 10000, cusInfo = {}) {
        this.name = name
        this.doors = doors
        this.price = price
        this.cusInfo = cusInfo
    }
}

class TruckService extends ServiceLogistic {
    transportClass = Car

    // constructor() {
        // super()
        // this.transportClass = Truck
    // }
}

const truckService = new TruckService()
const truck = truckService.getTransport({name: 'Truck', doors: 6, price: 10000})
console.log(JSON.stringify(truck))