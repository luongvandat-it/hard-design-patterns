class Observer {
    constructor(name) {
        this.name = name;
    }

    receive(message) {
        console.log(`${this.name} received: ${message}`);
    }
}

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    emitMessage(message) {
        this.observers.forEach(observer => observer.receive(message));
    }
}

const team = new Subject();

const krixi = new Observer('Krixi');
const zephys = new Observer('Zephys');
const yorn = new Observer('Yorn');

team.addObserver(krixi);
team.addObserver(zephys);
team.addObserver(yorn);

team.emitMessage('Hello, team!');