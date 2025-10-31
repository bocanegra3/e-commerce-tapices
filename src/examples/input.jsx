import React, {useState} from 'react'

const input = () => {
const [name, setName] = useState('')
const inputHandler = (e) => {
    setName(e.target.value)
}
    return (
    <div>
        <h1>Input comun</h1>
        <input type="text" name='nombre' placeholder='Ingrese su nombre' onChange={inputHandler} />
        <p>{name}</p>
    </div>
  )
}

export default input