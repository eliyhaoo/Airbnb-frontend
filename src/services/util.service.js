export const utilService = {
    makeId,
    getRandomIntInclusive,
    checkForPlurals,
    getPriceWithCommas,
    getStaysMinPrice,
    getStaysMaxPrice,
    getMonthName,
    getDateToDisplay
}

function getPriceWithCommas(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getStaysMinPrice(stays) {
    return Math.min(...stays.map(stay => stay.price))
}

function getStaysMaxPrice(stays) {
    return Math.max(...stays.map(stay => stay.price))
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function checkForPlurals(word, length) {
    if (length === 1) return length + ' ' + word
    else if (length > 1) return length + ' ' + word + 's'
}

function getMonthName(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    return monthNames[date.getMonth()]
}

function getDateToDisplay (date ,showYear= true) {
    if(showYear) return  new Date(date).toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric" })
    return new Date(date).toLocaleDateString('en-us', { day: "numeric", month: "short"})
    
    
}