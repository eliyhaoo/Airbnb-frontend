import { HomePage } from "./pages/home-page"
import { ExplorePage } from "./pages/explore-page"
import { StayDetails } from "./pages/stay-details"
import { Login } from "./cmps/login"
import { Signup } from "./cmps/signup"
import { DashboardPage } from "./pages/dashboard-page"

const routes = [
    {
        path: '/dashboard/:userId',
        component: DashboardPage
    },
    {
        path: '/signup',
        component: Signup
    },

    {
        path: '/login',
        component: Login
    },

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