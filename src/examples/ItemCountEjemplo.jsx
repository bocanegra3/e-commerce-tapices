import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock}) => {
const[count, setCount]= useState(1);
const [compra, setCompra]= useState(false);

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
//ejemplos use State

//se ejecuta siempre
/* useEffect(()=>{
    console.log('me ejecutosiempre')
}) */
//se ejecuta una unica vez
useEffect(()=>{
    console.log('me ejecutosiempre')
},[])
//a la escucha de un cambio
useEffect(()=>{
    console.log('me solo cuando precionan compra', compra)
},[compra])

  return (
    <div>
 <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar} disabled={count === 33 }>+</button>
        <button className='btn btn-primary' onClick={ejecutarCompra}>Comprar</button>
    </div>
  )
}

export default ItemCountEjemplo
