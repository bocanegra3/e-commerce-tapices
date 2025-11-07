import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartView = () => {
    const {cart, removeItem, clear}= useContext(CartContext)
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
        <div>
            {
                cart.map((compra)=>(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}} >
                        <img src={compra.img} alt={compra.name} style={{width:'9rem'}}/>
                        <span>{compra.name}</span>
                         <span>${compra.price},00</span>
                          <span>cantidad: {compra.quantity}</span>
                           <span>precio final: ${compra.quantity * compra.price},00</span>
                           <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        {/* crear una funcion que devuelva el total a pagar */}
        <span>Total a pagar: $</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
            <button className='btn btn-success'>Terminar compra</button>
        </div>
    </div>
  )
}

export default CartView