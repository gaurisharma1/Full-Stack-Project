import { useContext } from "react"
import "./navbar.css"
import { AuthContext } from "../../context/AuthContext"
import {Link} from "react-router-dom"
const Navbar = () => {
    // const {user} = useContext(AuthContext);
    return(
        <div className="Navbar">

        <div className="navContainer"> 
        
        <Link to="/" style = {{color:"inherit", textDecoration:"none"}}>
            <span className="logo">GauriBooking </span>
        </Link>
        
        {/* <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            
        </div> */}

        </div>

        </div>
        )
    }
    
    export default Navbar