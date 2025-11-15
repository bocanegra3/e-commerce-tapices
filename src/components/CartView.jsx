import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, clear, total}= useContext(CartContext)
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
        <span>Total a pagar: ${total()}, 00</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView