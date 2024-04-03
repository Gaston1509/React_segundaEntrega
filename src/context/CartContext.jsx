import React, { useState } from "react";
import { createContext } from "react";
import { getProducts } from "../data/asyncMock";
import Item from "../components/item/Item";

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState ([])

    const addItem = (productToAdd, quantity) => {
        
        const newProduct ={
            ...productToAdd,
            quantity,
        }
        if(isInCart(newProduct.id )){
            const actualizarCantidad = cart.map((producto) => {
                if(producto.id === newProduct.id ){
                    return{...producto, quantity: producto.quantity + newProduct.quantity}
                }
                return producto
            })
            setCart(actualizarCantidad)
        }else{
        setCart([...cart, newProduct])
             }
    }
    const isInCart = (id) => {
        return cart.some((producto) => producto.id === id)
    }

    // suma de los totales de los valores de los productos, inicia en 0

    const getTotal = () => {

        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0 )
    }

    // suma la cantidad de productos, inicia en 0
    const getQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    // vaciar carrito
    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const carritoActualizado = cart.filter((el) => el.id !== id)
        setCart ([...carritoActualizado])

    }

    // console.log(getTotal());
    // console.log(getQuantity());
    // console.log(cart);
    return(
        <Context.Provider
            value={{
                cart,
                setCart,
                addItem,
                getTotal,
                getQuantity,
                clearCart,
                removeItem,
            }}
        >           
            {children}
        </Context.Provider>
    )
}

export default Context