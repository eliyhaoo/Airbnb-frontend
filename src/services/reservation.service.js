import { httpService } from './http.service.js'

export const reservationService = {
    save,
    query
}

async function query(filterBy) {
    return httpService.get('reservation', filterBy)
}

async function save(reservation) {
    var savedReservation
    if (reservation._id) {
        savedReservation = await httpService.put(`reservation/${reservation._id}`, reservation)
    } else {
        savedReservation = await httpService.post('reservation', reservation)
    }
    return savedReservation
}


