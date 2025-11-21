import { createContext, useEffect, useState } from "react";
import { PiOrangeDuotone } from "react-icons/pi";
import Swal from "sweetalert2";

export const CartContext = createContext()

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []
export const CartProvider = ({children})=>{
    const [cart, setCart]=useState(carritoLS)


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])
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
        const removeList = () => {	
        setCart([])
    }

    const removeItem = (id) => {
        Swal.fire({
  title: "¿Seguro deseas quitar este producto?",  
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Si, Deseo quitarlo!"
}).then((result) => {
  if (result.isConfirmed) {
  setCart(cart.filter((prod)=> prod.id !== id))
    Swal.fire({      
      title: "Eliminado!",
      text: "Quitaste el producto del carrito.",
      icon: "success"
    });
  }
});
       

    }

    const clear = () => {
        swalWithBootstrapButtons.fire({
  title: "Es una buena idea?",
  text: "Estas a punto de vaciar el carrito!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "si, Quitar todo!",
  cancelButtonText: "No, cancelar!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    setCart([])
    swalWithBootstrapButtons.fire({
      title: "Eliminado!",
      text: "Tu carrito esta vacio, podes ir a ver nuestros productos.",
      icon: "success"
    });
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelado",
      text: "Excelente decisión :)",
      icon: "error"
    });
  }
});

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
        const itemInCart = cart.find((prod)=> prod.id === id)

       if(itemInCart){
        return itemInCart.quantity
    }else{
        
        return 0
    }
    }


    return(
      <CartContext.Provider value ={{cart, addItem, removeItem,removeList, clear, total, cartQuantity, itemQuantity, itemQuantity}}>
        {children}
      </CartContext.Provider>  
    )

}