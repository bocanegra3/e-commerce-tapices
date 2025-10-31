import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <h1>Error: no se encuentra la ruta</h1>
        <Link className='btn btn-dark' to='/'>Volver a la home</Link>
    </div>
  )
}
export default Error