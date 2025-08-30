import { App } from "./App";
import { Cart } from "./cart/Cart"
import { Shop } from "./shop/Shop";
import { ItemPage } from './itemPage/ItemPage'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Shop /> },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'items/:itemId',
                element: <ItemPage />
            }
        ]
    },

]

export default routes;