const getMondayPrice = (price) => {
    return price * 0.5;
}

const getTuesdayPrice = (price) => {
    return price * 0.6;
}

const getWednesdayPrice = (price) => {
    return price * 0.7;
}

const ways = {
    Monday: getMondayPrice,
    Tuesday: getTuesdayPrice,
    Wednesday: getWednesdayPrice
}

const getPrice = (price, context) => {
    return ways[context](price);
}

console.log(getPrice(100, 'Monday'));