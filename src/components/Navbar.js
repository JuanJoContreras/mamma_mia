import "../assets/css/navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light d-flex">
            <div>
                <NavLink to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/1212/1212781.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    🍕 Pizzeria Mamma Mia!
                </NavLink>
            </div>
            <div>
                <NavLink to="/carrito">
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    🛒  Carrito
                </NavLink>
            </div>
        </nav>
  );
}

