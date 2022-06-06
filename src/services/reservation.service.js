

import { httpService } from './http.service.js'



export const reservationService = {
    save,
    query

}


async function save(newReservation) {
    // newReservation.buyerId = userService.getLoggedinUser()
    return  httpService.post('reservation', newReservation)

}

async function query(filterBy){
    console.log('SENDING QUERY',filterBy);
    return httpService.get('reservation', filterBy)
}


