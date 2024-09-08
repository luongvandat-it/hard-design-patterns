class RoundRobin {
    constructor() {
        if (RoundRobin.instance) {
            return RoundRobin.instance
        }
        RoundRobin.instance = this
        this.servers = []
        this.index = 0
    }

    addServer(server) {
        this.servers.push(server)
    }

    getNextServer() {
        const server = this.servers[this.index]
        this.index = (this.index + 1) % this.servers.length // modulus
        return server
    }
}

const roundRobin = new RoundRobin()
const roundRobin2 = new RoundRobin()

if (roundRobin === roundRobin2) {
    console.log('Same instance')
}

roundRobin.addServer('server1')
roundRobin.addServer('server2')
roundRobin.addServer('server3')

console.log(roundRobin.getNextServer())
console.log(roundRobin.getNextServer())
console.log(roundRobin.getNextServer())
console.log(roundRobin.getNextServer())
console.log(roundRobin.getNextServer())
