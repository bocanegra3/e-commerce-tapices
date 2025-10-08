
//Declarar el componente como una funcion.
//NOMBRE: Siempre empiza con Mayúscula ( asi React sabe que es un componente)
const BotonMultiuso = (props) => {
    const {children,style, apagado}=props//se añade el props que deseemos y luego solo se coloca el codigo.
    console.log(props)
    //se le pasa props dentro del parametro del componente.y se imprime en el console.log
    //toda la logica va a ir entre la declaracion del componente y el return
    const handleClick = () => {
        alert('Holis!')
    }
    //siempre retornan algo, (JSX: lo que se ve en pantalla)
    return(
        <button className={style} onClick={handleClick} disabled={apagado}>
           {props.label}
           {children}
        </button>
    )
}
//para exportar un componente:
//exportamos por default todo lo que esta en el archivo ( 1 componente por archivo)
export default BotonMultiuso