import { HomePage } from "./pages/home-page"
import { ExplorePage } from "./pages/explore-page"
import { StayDetails } from "./pages/stay-details"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { DashboardPage } from "./pages/dashboard-page"
import { BecomeHostPage } from "./pages/become-host-page"

const routes = [
    {
        path: '/becomehost',
        component: BecomeHostPage
    },
    {
        path: '/dashboard',
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
    },

    {
        path: '/explore',
        component: ExplorePage,
    },

    {
        path: '/',
        component: HomePage,
    },

]

export default routes