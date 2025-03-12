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
import PolicyWarranty from "../pages/policy/warranty"; // Import đúng
import PolicyReturn from "../pages/policy/return"; // Import đúng
import PolicyShipping from "../pages/policy/shipping"; // Import đúng

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
                path: '/collection/:category_slug',
                element: <Category />
            },
            {
                path: '/product/:product_slug',
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
                path: '/order/success/:order_id',
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
            { path: '/policy/warranty', element: <PolicyWarranty /> }, // Chính sách bảo hành
            { path: '/policy/return', element: <PolicyReturn /> }, // Chính sách đổi trả
            { path: '/policy/shipping', element: <PolicyShipping /> }, // Chính sách giao hàng
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