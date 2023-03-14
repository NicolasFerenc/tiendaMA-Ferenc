import React from 'react'
import "./NavBarComponent.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            <h1>Tienda Mis Autopartes</h1>
        </div>
        <div>
            <ul className="lista">
                <li><a href="#">Motor</a></li>
                <li><a href="#">Suspension</a></li>
                <li><a href="#">Mantenimiento</a></li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBarComponent