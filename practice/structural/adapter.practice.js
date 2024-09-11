/*
    1. Easy Level
    Problem:
    You have a OldMediaPlayer class that plays songs in MP3 format. 
    However, a new NewMediaPlayer class can play both MP3 and MP4 files. 
    You need to write an adapter that makes the OldMediaPlayer compatible with MP4 files without modifying it.
*/

// Old Media Player Class (only plays MP3)
class OldMediaPlayer {
    playMp3(filename) {
        console.log(`Playing MP3 file: ${filename}`);
    }
}

// New Media Player Class (plays both MP3 and MP4)
class NewMediaPlayer {
    playMp3(filename) {
        console.log(`Playing MP3 file: ${filename}`);
    }

    playMp4(filename) {
        console.log(`Playing MP4 file: ${filename}`);
    }
}

class NewMediaToOldMediaAdapter {
    constructor(oldMediaPlayer) {
        this.oldMediaPlayer = oldMediaPlayer
    }

    playMp3(filename) {
        this.oldMediaPlayer.playMp3(filename)
    }

    playMp4(filename) {
        console.log(`Playing MP4 file: ${filename}`);
    }
}

const oldMediaPlayer = new OldMediaPlayer()
const newMediaToOldMediaAdapter = new NewMediaToOldMediaAdapter(oldMediaPlayer)
// newMediaToOldMediaAdapter.playMp3('filemp3')
// newMediaToOldMediaAdapter.playMp4('filemp4')

/*
    2. Medium Level
    Problem:
    You are developing a payment system that works with multiple payment gateways. 
    The OldPaymentGateway accepts payment using a method payViaCard() which takes a card number and amount. 
    However, a new payment gateway NewPaymentGateway accepts payments using processPayment() 
    which takes a payment object with card details and amount. 
    Write an adapter to make OldPaymentGateway compatible with the new interface.
*/

// Old Payment Gateway (Legacy System)
class OldPaymentGateway {
    payViaCard(cardNumber, amount) {
        console.log(`Processing payment of $${amount} using VISA card ${cardNumber}`);
    }
}

// New Payment Gateway (Modern System)
class NewPaymentGateway {
    processPayment(paymentDetails) {
        console.log(`Processing payment of $${paymentDetails.amount} using ANY card ${paymentDetails.cardNumber}`);
    }
}

// Task: Write an adapter for OldPaymentGateway to be compatible with NewPaymentGateway
class PaymentAdapter {
    constructor(oldPayment) {
        this.oldPayment = oldPayment
    }

    processPayment(paymentDetails) {
        return this.oldPayment.payViaCard(paymentDetails.cardNumber, paymentDetails.amount)
    }
}

const oldGateway = new OldPaymentGateway();
const paymentAdapter = new PaymentAdapter(oldGateway);

// paymentAdapter.processPayment({ cardNumber: '1234-5678', amount: 100 });

/*
    3. Hard Level
    Problem:
    You have two different systems that store users: OldUserSystem stores user data as simple strings 
    (e.g., name:age), while NewUserSystem stores user data as objects (e.g., {name: 'John', age: 30}). 
    Your task is to write an adapter that allows the new system to work with the old system's format.
*/

// Old User System (String Format)
class OldUserSystem {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    getUser(index) {
        return this.users[index];
    }
}

// New User System (Object Format)
class NewUserSystem {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    getUser(index) {
        return this.users[index];
    }
}

class UserSystemAdapter {
    constructor(oldSystem) {
        this.oldSystem = oldSystem
    }

    addUser(user) {
        const { name, age } = user
        this.oldSystem.addUser(`name: ${name}, age: ${age}`)
    }

    getUser(index) {
        return this.oldSystem.getUser(index)
    }
}

const oldSystem = new OldUserSystem();
const adapter = new UserSystemAdapter(oldSystem);

adapter.addUser({ name: 'John', age: 30 });
console.log(adapter.getUser(0));  // { name: 'John', age: 30 }
