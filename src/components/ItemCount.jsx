import React from 'react'
import {useState , useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2'

import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const[count, setCount]= useState(1)
   
    const sumar = ()=>{
        if(count < stock){
        setCount(count + 1)
    }
    }
    const restar = () => {
        if(count > 0){
        setCount(count - 1)
    }
    }
    const ejecutarCompra = ()=>{
      onAdd(count)
    Swal.fire({
   position: "top-end",
    icon: "success",
    title: "Se agrego el producto al carrito",
    showConfirmButton: false,
    timer: 800
  });
    }    
  return (
    <>
    {
      stock > 0 ?
      <>
    <div className='stockDisponible'>
        <button className='btn btn-danger' onClick={restar} style={{padding:'0.5rem 0.6rem'}} disabled={count === 0}>-</button>
        <span className='btn' style={{color:'#ffffff', padding:'1.8rem'}}>{count}</span>
        <button className='btn btn-success' onClick={sumar} style={{padding:'0.5em'}}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra} style={{padding:'0.5rem 2rem 0.5rem 2rem'}}disabled={count === 0 || stock === 0}>Comprar</button>
    </>
    :
    
      <Card border="danger" bg="dark" text="light" style={{}}>
        <Card.Header>Sin Stock</Card.Header>
        <Card.Body>
          <Card.Title>Lo sentimos</Card.Title>
          <Card.Text>
           En este momento no hay stock, pero estamos trabajando para que este disponible pronto
          </Card.Text>
          <Link className='btn btn-danger' variant="primary" to='/' style={{margin:'1rem'}}>Volver al Home</Link>
          <Link className='btn btn-success' variant="primary" to='/cart'>Ir al carrito!</Link>
        </Card.Body>
      </Card>
     

    }
    </>
    
  )
}

export default ItemCount
{/* refce */}