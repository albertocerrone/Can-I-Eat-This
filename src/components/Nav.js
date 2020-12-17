import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar is-danger">
      <div className="container">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">
            <span role="img" aria-label="logo" className="title">
            🍪   
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
