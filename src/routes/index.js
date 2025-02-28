import About from "../pages/about";
import Address from "../pages/account/address";
import Password from "../pages/account/changePassword";
import Account from "../pages/account/index";
import AccountOrder from "../pages/account/order";
import Cart from "../pages/cart";
import Category from "../pages/category";
import Contact from "../pages/contact";
import Home from "../pages/home/index";
import LayoutDefault from "../components/layout";
import OrderSuccess from "../pages/order";
import NotFound from "../pages/page404";
import Policy from "../pages/policy";
import Product from "../pages/product";
import Sitemap from "../pages/sitemap";
import Login from "../pages/user/login";
import Signup from "../pages/user/signup";


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
            },
            {
                path: '/account/detail',
                element: <Account />
            },
            {
                path: '/account/password',
                element: <Password />
            },
            {
                path: '/account/address',
                element: <Address />
            },
            {
                path: '/account/order',
                element: <AccountOrder />
            },
            {
                path: '/order/success',
                element: <OrderSuccess />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/policy',
                element: <Policy />
            },
            {
                path: '/sitemap',
                element: <Sitemap />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
    {
        path: '/user/login',
        element: <Login />
    },
    {
        path: '/user/signup',
        element: <Signup />
    }
]