import { createContext, useState } from "react";
import { PiOrangeDuotone } from "react-icons/pi";

//creamos el contexto y lo exportamos para su uso
export const CartContext = createContext()
//creamos a el proovedor

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addItem =(item, qty)=>{
        if(isInCart(item.id)){
           setCart(
            cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity: prod.quantity + qty}
                } else{
                    return prod 
                }
            })
           )
        }else{
            setCart([...cart, {...item,quantity:qty}])
        }
        
    }
        const removeList = () => {	//implementa la funcionalidad para dejar el carrito vacío
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const clear = () => {
        setCart([])
    }
    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }

    const total = ()=>{
        return cart.reduce((acc, prod)=>acc += (prod.quantity * prod.price),0)
    }

    const cartQuantity = ()=> {
        return cart.reduce ((acc, prod)=>acc += prod.quantity, 0)
    }

     const itemQuantity = (id)=>{
        const itemCart = cart.find((prod)=> prod.id === id)

       if(itemCart){
        return itemCart.quantity
    }else{
        //no existe
        return 0
    }
    }
    //en el provedor vamos a tener todas las funcionalidades que modifiquen el carrito
    return(
      <CartContext.Provider value ={{cart, addItem, removeItem,removeList, clear, total, cartQuantity, itemQuantity}}>
        {children}
      </CartContext.Provider>  
    )

}