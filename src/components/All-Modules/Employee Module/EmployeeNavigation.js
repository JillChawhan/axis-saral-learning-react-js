import React from 'react'
import './EmployeeNavigation.css'
import { useNavigate } from 'react-router-dom'
import SlideBar from '../../HomeNavigation/SlideBar';

function Home() {

   const navigate = useNavigate();

  return (
    <>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid"  id="navid">
      <a className="navbar-brand">Axis SARAL Learning</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navb-center" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" aria-current="page">PROJECT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">MANAGER</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">MY PROFILE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => {
              navigate("/")
            }}>LOGOUT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <footer className='copyrightfooter'> 
  <p> Copyright &#169; By Axis Batch 9 </p>
  </footer>
    </>
  )
}

export default Home
