class PaymentProcess {
    pay(amount) {
        console.log(amount)
    }
}

class VisaPaymentProcess extends PaymentProcess {
    constructor(cardNumber, expireDate, cvv) {
        super()
        this.cardNumber = cardNumber,
        this.expireDate = expireDate,
        this.cvv = cvv
    }

    pay(amount) {
        console.log('Paying with visa', amount)
    }
}

class MomoPaymentProcess extends PaymentProcess {
    constructor(cardNumber, expireDate, cvv) {
        super()
        this.cardNumber = cardNumber,
        this.expireDate = expireDate,
        this.cvv = cvv
    }

    pay(amount) {
        console.log('Paying with momo', amount)
    }
}

class MemberRegistration {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    register(amount) {
        this.paymentProcessor.pay(amount)
    }
}

const momoPayment = new MomoPaymentProcess('0001','20240908', 123)
const visaPayment = new VisaPaymentProcess('0002','20240909', 456)

const memberRegistration = new MemberRegistration(momoPayment)
const memberRegistration2 = new MemberRegistration(visaPayment)
memberRegistration.register(999)
memberRegistration2.register(888)