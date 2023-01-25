
import { httpService } from './http.service.js'

export const stayService = {
    query,
    getById,
    save,
    remove,
    getCategories,
}

async function query(filterBy) {
    return httpService.get('stay', filterBy)
}

async function getById(stayId) {
    return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
    return httpService.delete(`stay/${stayId}`)
}

async function save(stay) {
    var savedStay
    if (stay._id) {
        savedStay = await httpService.put(`stay/${stay._id}`, stay)
    } else {
        savedStay = await httpService.post('stay', stay)
    }
    return savedStay
}

function getCategories() {
    const categories = gCategories
    return categories
}

const gCategories = [{ title: '', img: 'allhomes' },
{ title: 'Design', img: 'design' },
{ title: 'Amazing Pools', img: 'amazingpools' },
{ title: 'Vineyards', img: 'vineyards' },
{ title: 'Islands', img: 'islands' },
{ title: 'Boats', img: 'boats' },
{ title: 'Desert', img: 'desert' },
{ title: 'National Parks', img: 'nationalparks' },
{ title: 'Artric', img: 'artric' },
{ title: 'Tiny Homes', img: 'tinyhomes' },
{ title: 'Camping', img: 'camping' },
{ title: 'Beachfront', img: 'beachfront' },
{ title: 'Iconic Cities', img: 'iconiccities' },
{ title: 'Luxe', img: 'luxe' },
{ title: 'Cabins', img: 'cabins' },
{ title: 'Tropical', img: 'tropical' },
{ title: 'Golfing', img: 'golfing' },
{ title: 'Countryside', img: 'countryside' }
]









