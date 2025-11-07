import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center'}}>
        <spinner animation='grow' variant='dark' />
        <span>{texto}</span>
    </div>
  )
}

export default LoaderComponent