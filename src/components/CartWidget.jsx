import '../css/Navbar.css';
import { IoIosCart } from "react-icons/io";
const CartWidget = () => {
    return(
        <div>
            <span><a className="nav-a" href="">Ver <IoIosCart style={{fontSize:"2rem", color:"white"}}/> </a>     </span>
            <span style={{background:'green',padding:'4.5px', borderRadius:'0.3rem',color:'white'}}>5</span>
        </div>
    )
}

export default CartWidget