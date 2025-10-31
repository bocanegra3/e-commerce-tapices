import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({prod}) => {
  return (

    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{width:"15rem"}} src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Text>
         $ {prod.price},00
        </Card.Text>
        <Link className='btn btn-dark' to={`/item/${prod.id}`} >Ver Mas</Link>
      </Card.Body>
    </Card>
  )
}

export default Item