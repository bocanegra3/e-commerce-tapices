import '../css/Navbar.css';
const CartWidget = () => {
    return(
        <div>
            <span><a className="nav-a" href=""> Ver carrito </a>🛒 </span>
            <span style={{background:'green',padding:'3px', borderRadius:'5rem',color:'white'}}>5</span>
        </div>
    )
}

export default CartWidget