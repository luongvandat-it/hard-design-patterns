const getPrice = (price, context) => {
    if (context === 'Monday')
        return price * 0.5;

    if (context === 'Tuesday')
        return price * 0.6;

    if (context === 'Wednesday')
        return price * 0.7;

    return price;
}

console.log(getPrice(100, 'Monday'));