
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
    // getEmptyStay,
    // subscribe,
    // unsubscribe
    
}


function query() {
    return storageService.query(STORAGE_KEY)
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




