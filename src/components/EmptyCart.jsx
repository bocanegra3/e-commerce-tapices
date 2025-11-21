import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center', padding:'3rem', gap:'3rem'}}>
        <h1>Tu carrito esta vacio! 😱</h1>
        <h3 style={{textDecoration:'underline'}}> Te invitamos a ver nuestras ofertas</h3>
        <Link className='btn btn-dark' to='/category/En Oferta'>Ir a ofertas</Link>
    </div>
  )
}

export default EmptyCart