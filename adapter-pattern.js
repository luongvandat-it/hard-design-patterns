class MomoToVisaAdapter {
    constructor(momo) {
        this.momo = momo;
    }

    convertToVisa(momo) {
        const convertRatio = 23000;
        const visaMoney = momo.money / convertRatio;
        const visaPayment = {
            cardNumber: momo.cardNumber,
            pin: momo.pin,
            money: visaMoney
        };

        return visaPayment;
    }

    payWithVisa() {
        const visaPayment = this.convertToVisa(this.momo);
        console.log('Paying with Visa: ' + JSON.stringify(visaPayment));
    }
}

class Momo {
    constructor(cardNumber, pin, money) {
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.money = money;
    }

    payWithMomo() {
        console.log('Paying with Momo: ' + JSON.stringify(this));
    }
}

class Visa {
    constructor(cardNumber, pin, money) {
        this.cardNumber = cardNumber;
        this.pin = pin;
        this.money = money;
    }

    payWithVisa() {
        console.log('Paying with Visa: ' + JSON.stringify(this));
    }
}

const momo = new Momo('123456789', '123456', 30000);
const momoToVisaAdapter = new MomoToVisaAdapter(momo);
momoToVisaAdapter.payWithVisa();