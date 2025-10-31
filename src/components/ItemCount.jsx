import React from 'react'
import {useState, useEffect} from 'react'

const ItemCount = ({stock}) => {
    const[count, setCount]= useState(1);
    const[compra,setCompra]= useState(false)
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
      setCompra(!compra)
    }
    useEffect(()=>{
    console.log('me ejecuto siempre')
    },[])
   //a la escucha de un cambio
    useEffect(()=>{
    console.log('solo cuando precionan comprar', compra)
    },[compra])
  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar} style={{padding:'0.5rem 0.6rem'}}>-</button>
        <span className='btn' style={{color:'#ffffff', padding:'1.8rem'}}>{count}</span>
        <button className='btn btn-success' onClick={sumar} disabled={count === 33 } style={{padding:'0.5em'}}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra} style={{padding:'0.5rem 2rem 0.5rem 2rem'}}>Comprar</button>
    </>
  )
}

export default ItemCount
{/* refce */}