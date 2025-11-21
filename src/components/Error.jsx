import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'space-between', alignItems:'center', width:'99%', padding:'2rem',gap:'2rem'}}>
        <h1>Error: no se encuentra la ruta</h1>
        <Link className='btn btn-dark' to='/'>Volver a la home</Link>
    </div>
  )
}
export default Error