import {MobileMenu} from './mobile-menu'
import { useSelector } from "react-redux"
import { ReservationComponent } from "./reservationComponent"

export const MobileFooter = () => {

    const {visitedPage} = useSelector(storeState => storeState.systemModule)
    return <div className="mobile-footer">
        <MobileMenu/>
        HELLO FROM MOBILE FOOTER

       { visitedPage === 'details-page' && <ReservationComponent/>}

    </div>
}