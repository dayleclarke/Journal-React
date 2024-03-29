import React from "react"
import { Link } from "react-router-dom"
// Copied and pasted from Bootstrap. Each nav item has been wrapped in a link. 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Journal
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Select Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entry/0">
                Show Entry 0
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
