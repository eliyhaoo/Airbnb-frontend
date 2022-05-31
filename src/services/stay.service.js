
import { alignProperty } from '@mui/material/styles/cssUtils'
import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
// import { getActionRemoveStay, getActionAddStay, getActionUpdateStay } from '../store/stay.actions.js'

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



async function query(filterBy) {
    const { category, searchBy, properties } = filterBy
    let stays = await storageService.query(STORAGE_KEY)
    if (searchBy.country) {
        const regex = new RegExp(searchBy.country, 'i')
        stays = stays.filter(stay => regex.test(stay.address.country))
    }
    if (category !== 'All Homes') stays = _filterByCategory(stays, category)
    if (properties) {
        stays = _filterByRoomType(stays, properties)
    }
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
    // return axios.get(`/api/stay/${stayId}`)
}
async function remove(stayId) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(reject, 2000)
    // })
    // return Promise.reject('Not now!');
    await storageService.remove(STORAGE_KEY, stayId)
    // stayChannel.postMessage(getActionRemoveStay(stayId))
}
async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await storageService.put(STORAGE_KEY, stay)
        // stayChannel.postMessage(getActionUpdateStay(savedStay))

    } else {
        // Later, owner is set by the backend
        // stay.owner = userService.getLoggedinUser()
        savedStay = await storageService.post(STORAGE_KEY, stay)
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

function _filterByRoomType(stays, properties) {
    let roomTypes = Object.keys(properties.roomType)
    const isNotRoomeType = roomTypes.every(type => properties.roomType[type].isChecked === false)
    if (isNotRoomeType) return stays
    // let sdtays = stays.filter(stay => {
    //     properties.

    //     stay.roomTypeproperties[stay.roomType].isChecked === true 
    //     console.log(properties[stay.roomType])


    // })
    return stays
}

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


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))




