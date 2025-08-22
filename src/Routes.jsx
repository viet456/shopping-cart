import { App } from "./App";
import { Cart } from "./cart/Cart"
import { StoreItem } from "./storeItem/StoreItem";
import { Shop } from "./shop/Shop";
import { Layout } from "./Layout";

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Shop /> },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/:itemId',
                element: <StoreItem />
            },
        ]
    },

]

export default routes;