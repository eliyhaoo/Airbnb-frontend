

import { httpService } from './http.service.js'



export const reservationService = {
    save

}


async function save(newReservation) {

    // newReservation.buyerId = userService.getLoggedinUser()

    return await httpService.post('reservation', newReservation)



}




