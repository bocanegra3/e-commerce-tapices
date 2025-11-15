import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'


const ItemDetailContainer = () => {
    const [detalle, setDetalle]= useState({})
    const [cargando, setCargando]= useState(false)
     const [invalid, setInvalid]= useState(null)

    const {id}=useParams()

    useEffect(()=>{
      setCargando(true)
      const docRef = doc(db, "productos", id)

      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})
        } else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))
    },[id])

     if(invalid){
    return <div>
      <h1> El producto no existe! 😱</h1>
      <Link className='btn btn-dark' to='/'>Volver a home</Link>
    </div>
    }
/*     useEffect(()=>{
       setCargando(true)

        getOneProduct(id)
        .then ((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id]) */
  return (
   <>
    {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
 
   </>
  )
}

export default ItemDetailContainer