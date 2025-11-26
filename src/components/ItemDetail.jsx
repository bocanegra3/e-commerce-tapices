import React, { useState } from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TbBackground } from 'react-icons/tb';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/ItemDetail.css';


const IntemDetail = ({detalle}) => {
  const {cart, addItem, itemQuantity} = useContext(CartContext)
  const [purchase, setPurchase]=useState(false)
  const onAdd = (cantidad)=>{
    console.log(`Agregaste ${cantidad} al carrito`)
    setPurchase(true)
    addItem(detalle,cantidad)
  }
  const stockActualizado = detalle.stock - itemQuantity(detalle.id)

  return (
    
      <Card className="bg-dark text-white Cartdetail" >
      <Card.Img src={detalle.imgDetail} alt={detalle.name} />
      <Card.ImgOverlay >
        <Card.Title>{detalle.name}</Card.Title>
        <Card.Text>
         {detalle.description}
        </Card.Text>
        <Card.Text>$ {detalle.price},00</Card.Text>
        <Card.Text>Stock disponible: {stockActualizado}</Card.Text>
        {purchase ? <Link  className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount  stock={stockActualizado} onAdd={onAdd}/>}
      </Card.ImgOverlay>
      
    </Card>

  )
}

export default IntemDetail