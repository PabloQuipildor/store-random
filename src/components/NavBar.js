import React from "react"
import "./navBar.css";
const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active"> BIOGRAFIA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">QUIENES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active">CONTACTOS</a>
        </li>
      </ul>
  </nav>
    )
}

export default NavBar