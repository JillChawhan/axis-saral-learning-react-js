import React from 'react'
import './Navigation.css'
import { useNavigate } from 'react-router-dom'

function Navigation() {

   const navigate = useNavigate();

  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid"  id="navid">
      <a className="navbar-brand" href="#">Axis SARAL Learning</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
    </>
  )
}

export default Navigation;
