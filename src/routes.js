import { HomePage } from "./pages/home-page"
import { Explore } from "./pages/explore"
import { StayDetails } from "./pages/stay-details"

const routes = [
    {
        path: '/stay/:stayId',
        component: StayDetails,
        label: 'StayDetails',
    },
    {
        path: '/',
        component: HomePage,
        label: 'Home 🏠',
    },
    {
        path: '/explore',
        component: Explore,
        label: 'Explore',
    }

]

export default routes