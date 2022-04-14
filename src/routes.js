import Home from "./components/Home";
import {ADMIN_ROUTE, HOME_ROUTE, PRODUCT_ROUTE} from "./utils/consts";

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     // component: Admin
    // }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component:Home
    },
    // {
    //     path: PRODUCT_ROUTE + '/:id',
    //     // component:Home
    // }

]