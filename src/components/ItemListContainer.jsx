import { useEffect, useState } from "react"
import { getProductos, productos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = (props)=>{
    const[data, setData]=useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()

    useEffect(()=>{
        setLoader(true)
        
        const productCollection = type 
        ? query(collection(db, "productos"), where ("category","==", type))
         : collection(db, "productos")
       
        getDocs(productCollection)
        .then((res)=>{
        
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