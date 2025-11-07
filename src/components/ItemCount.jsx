import React from 'react'
import {useState , useEffect} from 'react'

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
    }    
  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar} style={{padding:'0.5rem 0.6rem'}} disabled={count === 0}>-</button>
        <span className='btn' style={{color:'#ffffff', padding:'1.8rem'}}>{count}</span>
        <button className='btn btn-success' onClick={sumar} style={{padding:'0.5em'}}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra} style={{padding:'0.5rem 2rem 0.5rem 2rem'}}disabled={count === 0 || stock === 0}>Comprar</button>
    </>
  )
}

export default ItemCount
{/* refce */}