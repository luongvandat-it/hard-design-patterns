class ServiceLogistics {
    constructor(name = 'Truck', doors = 6, price = 10000) {
        this.name = name
        this.doors = doors
        this.price = price
    }

    static getTransport = (type) => {
        switch (type) {
            case 'Truck':
                return new ServiceLogistics()
            case 'Ship':
                return new ServiceLogistics('Ship', 10, 20000)
            case 'Plane':
                return new ServiceLogistics('Plane', 4, 30000)
            default:
                return new ServiceLogistics('Truck', 6, 10000)
        }
    }
}

const truck = ServiceLogistics.getTransport('Truck')
console.log(JSON.stringify(truck))