import Cart from "../components/cart";
import Category from "../components/category";
import Home from "../components/home";
import LayoutDefault from "../components/layout";
import Product from "../components/product";

export const routes = [
    {
        path: `/`,
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/collection/:id_category',
                element: <Category />
            },
            {
                path: '/product/:id_product',
                element: <Product />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]
    }
]