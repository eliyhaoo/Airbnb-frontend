
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'stay'
// const stayChannel = new BroadcastChannel('stayChannel')
// const listeners = []

export const stayService = {
    query,
    getById,
    save,
    remove,
    getCategories: getCategories,
    filterByCategory: _filterByCategory
    // getEmptyStay,
    // subscribe,
    // unsubscribe

}

// async function query(filterBy) {
//     const { category, searchBy, properties } = filterBy
//     let stays = await storageService.query(STORAGE_KEY)
//     stays = _filterBySearch(stays, searchBy)
//     stays = _filterByProperties(stays, properties)
//     if (category !== 'All Homes') stays = _filterByCategory(stays, category)

//     return stays
// }

async function query(filterBy) {
    const { category, searchBy, properties } = filterBy
    return httpService.get('stay')
}

// function getById(stayId) {
//     return storageService.get(STORAGE_KEY, stayId)
// }

async function getById(stayId) {
    console.log('stayId', stayId)
    return httpService.get(`stay/${stayId}`)
}

// async function remove(stayId) {
//     // return new Promise((resolve, reject) => {
//     //     setTimeout(reject, 2000)
//     // })
//     // return Promise.reject('Not now!');
//     await storageService.remove(STORAGE_KEY, stayId)
//     // stayChannel.postMessage(getActionRemoveStay(stayId))
// }

async function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}

// async function save(stay) {
//     var savedStay
//     if (stay._id) {
//         savedStay = await storageService.put(STORAGE_KEY, stay)
//         // stayChannel.postMessage(getActionUpdateStay(savedStay))

//     } else {
//         // Later, owner is set by the backend
//         // stay.owner = userService.getLoggedinUser()
//         savedStay = await storageService.post(STORAGE_KEY, stay)
//         // stayChannel.postMessage(getActionAddStay(savedStay))
//     }
//     return savedStay
// }

async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = httpService.put('stay', stay)
    } else {
        // Later, owner is set by the backend
        // stay.owner = userService.getLoggedinUser()
        savedStay = httpService.post('stay', stay)
        // stayChannel.postMessage(getActionAddStay(savedStay))
    }
    return savedStay
}

function getCategories() {
    const categories = gCategories
    return categories
}

function _filterByCategory(stays, category) {
    return stays.filter(stay => stay.category === category)
}

function _filterByAmenities(stays, amenities) {
    let amenitiesKeys = Object.keys(amenities)

    let filterdAmenities = []
    amenitiesKeys.forEach(amenitie => {
        if (amenities[amenitie]) {
            filterdAmenities.push(amenitie)
        }
    })

    if (filterdAmenities.length) {
        stays = stays.filter(stay => filterdAmenities.every(amenitie => stay.amenities.includes(amenitie)))
    }
    return stays
}

function _filterByRoomType(stays, roomTypes) {
    let roomTypesKeys = Object.keys(roomTypes)

    let filterdRoomTypes = []
    roomTypesKeys.forEach(type => {
        if (roomTypes[type]) {
            filterdRoomTypes.push(type)
        }
    })

    if (filterdRoomTypes.length) {
        stays = stays.filter(stay => filterdRoomTypes.some(roomType => roomType === stay.roomType))
    }
    return stays
}

function _filterByBeds(stays, beds) {
    if (beds === 8) {
        stays = stays.filter(stay => stay.beds >= 8)
    } else {
        stays = stays.filter(stay => stay.beds === beds)
    }
    return stays
}

function _filterByProperties(stays, properties) {
    const { price, beds, roomType, amenities } = properties
    stays = _filterByRoomType(stays, roomType)
    stays = _filterByAmenities(stays, amenities)
    if (beds) stays = _filterByBeds(stays, beds)

    return stays
}

function _filterBySearch(stays, searchBy) {
    if (searchBy.country) {
        const regex = new RegExp(searchBy.country, 'i')
        stays = stays.filter(stay => regex.test(stay.address.country))
    }
    return stays
}

const gCategories = [{ title: 'All Homes', img: 'allhomes' },
{ title: 'Design', img: 'design' },
{ title: 'Desert', img: 'desert' },
{ title: 'Vineyards', img: 'vineyards' },
{ title: 'National Parks', img: 'nationalparks' },
{ title: 'Islands', img: 'islands' },
{ title: 'Artric', img: 'artric' },
{ title: 'Tiny Homes', img: 'tinyhomes' },
{ title: 'Camping', img: 'camping' },
{ title: 'Beachfront', img: 'beachfront' },
{ title: 'Iconic Cities', img: 'iconiccities' },
{ title: 'Amazing Pools', img: 'amazingpools' },
{ title: 'Boats', img: 'boats' },
{ title: 'Luxe', img: 'luxe' }
]


// function getEmptyStay() {





//     return {
//         vendor: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//     }
// }

// function subscribe(listener) {
//     stayChannel.addEventListener('message', listener)
// }
// function unsubscribe(listener) {
//     stayChannel.removeEventListener('message', listener)
// }









// import { alignProperty } from '@mui/material/styles/cssUtils'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
// import { getActionRemoveStay, getActionAddStay, getActionUpdateStay } from '../store/stay.actions.js'







