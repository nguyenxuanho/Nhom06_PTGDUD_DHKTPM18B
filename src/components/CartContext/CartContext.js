import { createContext, useContext, useEffect, useState } from "react"

import {toast} from "react-toastify"

const CartProvider = createContext();

export const CartContext = ({children}) => {
    const [carts, setCarts] = useState([]);


    useEffect(() => {
        const cartJson = localStorage.getItem("cart");
        if(!cartJson){
            localStorage.setItem("cart", JSON.stringify([]))
        } else {
            setCarts(JSON.parse(cartJson))
        }
    }, []);


    const addToCart = (product) => {
        let itemCart = carts.filter(cart => cart._id === product._id)[0]
        if(itemCart){
            carts.forEach(cart => {
                if(cart._id === product._id)
                    cart.quanlity += 1;
            })
        } else {
            carts.push({
                _id: product._id,
                title: product.title,
                unitPrice: (1 - product.discount) * product.price,
                price: product.price,
                quanlity: 1,
                slug: product.slug
            })
        }
        
        toast.success("Đã thêm sản phẩm vào giỏ hàng !!")

        setCarts([...carts]);
        localStorage.setItem("cart", JSON.stringify(carts));
    }

    const removeCart = (id) => {
        let cartsClone = carts;
        cartsClone = cartsClone.filter(cart => cart._id !== id);
        setCarts([...cartsClone]);
        localStorage.setItem("cart", JSON.stringify(cartsClone));
    }

    const increase = (id) => {
        carts.forEach(cart => {
            if(cart._id === id)
                cart.quanlity += 1;
        })

        setCarts([...carts]);
        localStorage.setItem("cart", JSON.stringify(carts));
    }

    const decrease = (id) => {

        carts.forEach(cart => {
            if(cart.quanlity > 0 && cart._id === id)
                cart.quanlity -= 1
        })

        let cartItem = carts.filter(item => item._id === id)[0]
        if(cartItem.quanlity === 0)
            removeCart(id)
        else{
            setCarts([...carts]);
            localStorage.setItem("cart", JSON.stringify(carts));
        }
    }

    const getTotalUnitPrice = () => {
        let total = 0;
        carts.forEach(cart => total += cart.unitPrice * cart.quanlity)
        return total;
    }

    const quanlityOfCarts = carts.length;


    return(
        <>
            <CartProvider.Provider value={{addToCart, removeCart, increase, decrease, getTotalUnitPrice, quanlityOfCarts, carts, setCarts}}>
                {children}
            </CartProvider.Provider>
        </>
    )
}

export const useCart = () => useContext(CartProvider);

