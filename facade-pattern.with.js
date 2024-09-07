class Discount {
    calculate(price) {
        return price * 0.9
    }
}

class Tax {
    calculate(price) {
        return price * 1.1
    }
}

class Fees {
    calculate(price) {
        return price * 1.2
    }
}

class CalculatePrice {
    constructor() {
        this.discount = new Discount();
        this.tax = new Tax();
        this.fees = new Fees();
    }

    calculate(price) {
        price = this.discount.calculate(price);
        price = this.tax.calculate(price);
        price += this.fees.calculate(price);

        return price;
    }
}

console.log(new CalculatePrice().calculate(100));