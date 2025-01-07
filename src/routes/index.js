import About from "../components/about";
import Address from "../components/account/address";
import Password from "../components/account/changePassword";
import Account from "../components/account/index";
import AccountOrder from "../components/account/order";
import Cart from "../components/cart";
import Category from "../components/category";
import Contact from "../components/contact";
import Home from "../components/home";
import LayoutDefault from "../components/layout";
import OrderSuccess from "../components/order";
import NotFound from "../components/page404";
import Policy from "../components/policy";
import Product from "../components/product";
import Sitemap from "../components/sitemap";
import Login from "../components/user/login";
import Signup from "../components/user/signup";

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