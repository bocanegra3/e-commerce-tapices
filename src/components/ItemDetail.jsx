import React, { useState } from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TbBackground } from 'react-icons/tb';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const IntemDetail = ({detalle}) => {
  const {cart, addItem} = useContext(CartContext)
  const [purchase, setPurchase]=useState(false)
  const onAdd = (cantidad)=>{
    console.log(`Agregaste ${cantidad} al carrito`)
    setPurchase(true)
    addItem(detalle,cantidad)
  }
  return (
    
      <Card className="bg-dark text-white " style={{ width: '60%', margin: '1rem 20% 0px' }}>
      <Card.Img src={detalle.imgDetail} alt={detalle.name} style={{ paddingLeft: '40%'}} />
      <Card.ImgOverlay style={{width: '40%'}}>
        <Card.Title>{detalle.name}</Card.Title>
        <Card.Text>
         {detalle.description}
        </Card.Text>
        <Card.Text>$ {detalle.price},00</Card.Text>
        <Card.Text>Stock disponible: {detalle.stock}</Card.Text>
        {purchase ? <Link  className='btn btn-dark' to='/cart'>Terminar compra</Link> : <ItemCount  stock={detalle.stock} onAdd={onAdd}/>}
      </Card.ImgOverlay>
      
    </Card>

  )
}

export default IntemDetail