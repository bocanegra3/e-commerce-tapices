import { createContext, useState } from "react";

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

    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    const clear = () => {
        setCart([])
    }
    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }

    //en el provedor vamos a tener todas las funcionalidades que modifiquen el carrito
    return(
      <CartContext.Provider value ={{cart, addItem, removeItem, clear}}>
        {children}
      </CartContext.Provider>  
    )

}