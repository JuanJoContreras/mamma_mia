import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
            <div>
                <NavLink to="/">                  
                    🍕 Pizzeria Mamma Mia!
                </NavLink>
            </div>
            <div>
                <NavLink to="/carrito">                   
                🛒 Carrito
                </NavLink>
            </div>
        </nav>
  );
}

