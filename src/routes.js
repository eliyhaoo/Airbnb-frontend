import { HomePage } from "./pages/home-page"
import { ExplorePage } from "./pages/explore-page"
import { StayDetails } from "./pages/stay-details"

const routes = [
    {
        path: '/stay/:stayId?',
        component: StayDetails,
        label: 'StayDetails',
    },
    {
        path: '/explore',
        component: ExplorePage,
        label: 'ExplorePage',
    },
    {
        path: '/',
        component: HomePage,
        label: 'Home 🏠',
    },

]

export default routes