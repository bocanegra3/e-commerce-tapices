import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';   

const CartView = () => {
    const {cart, removeItem, clear, total}= useContext(CartContext)
  return (
    <div >
        <h1 style={{textAlign:'center', padding:'1rem'}}>Tu Carrito 🛒</h1>
        <div>
            {
                cart.map((compra)=>(
        <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'0.3rem',background:'grey'}} >
        <Card style={{display:'flex', flexDirection: 'row',width:'100%',padding:'0.5rem', background:'#232527ff'}}>
        <Card.Img variant="top" src={compra.imgDetail} alt={compra.name}  style={{width:'9rem'}}/>
        <Card.Body>
          <Card.Text style={{color:'white'}}>
           <span>Producto: {compra.name}</span> <hr /> <span>Precio individual: ${compra.price},00</span> 
          </Card.Text >
          <div style={{display: 'flex', justifyContent: 'flex-end', gap:'1rem', alignItems:'center',marginLeft:'60%'}}>
            <Badge bg="primary" pill  >
            Cantidad total : {compra.quantity} -
	        Precio final: ${compra.quantity * compra.price},00
            <button className='btn btn-danger' style={{margin:'0.5rem'}} onClick={()=> removeItem(compra.id)}>X</button>
            </Badge>
            </div>
        </Card.Body>
        </Card>
        </div>
                ))
            }
        </div>
        <div style={{background:'black', color:'white'}}>
        <span style={{display:'flex', flexDirection:'row-reverse', padding:'1rem'}}>Total a pagar: ${total()}, 00</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'99%', padding:'2rem'}}>
            <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
        </div>
        </div>
    </div>
  )
}

export default CartView