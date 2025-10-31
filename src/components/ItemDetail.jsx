import React from 'react'
import ItemCount from './ItemCount'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TbBackground } from 'react-icons/tb';

const IntemDetail = ({detalle}) => {
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
        <ItemCount  stock={detalle.stock}/>
      </Card.ImgOverlay>
      
    </Card>

  )
}

export default IntemDetail