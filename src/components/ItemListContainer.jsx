import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = (props)=>{
    const[data, setData]=useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()

    useEffect(()=>{
        setLoader(true)
        //conectarnos con nuestra coleccion
        const productCollection = type 
        ? query(collection(db, "productos"), where ("category","==", type))
         : collection(db, "productos")
        //pedir los documentos
        getDocs(productCollection)
        .then((res)=>{
            //limpiar y obtener datos
            const list = res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoader(false))
    },[type])
/*     useEffect(()=>{
        setLoader(true)
        getProductos()
        .then((res)=>{
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[type]) */

    console.log(data, 'estado')
    return(
            <>
        {
            loader 
            ? <LoaderComponent/>
            : <div>
            {/* <Input/> */}
        <h1 style = {{textAlign:'center', background:'black', color: 'white', padding: '1rem'}} >{props.saludo}{type && <span>{type}</span>}</h1>
        <ItemList data={data} /> 
        </div>
          }
        </>
    )
}


export default ItemListContainer