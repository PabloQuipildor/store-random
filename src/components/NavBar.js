import React from "react"
import CartWidget from "./CartWidget";
import "./navBar.css";

const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link "> BIOGRAFIA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">QUIENES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">CONTACTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <CartWidget/>
          </a>
        </li>
      </ul>
  </nav>
    )
}

export default NavBar