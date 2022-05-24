import { HomePage } from "./pages/home-page"
import { Explore } from "./pages/explore"

const routes = [
    {
        path: '/',
        component: HomePage ,
        label: 'Home 🏠',
    },
    {
        path: '/explore',
        component: Explore ,
        label: 'Explore',
    }

]

export default routes