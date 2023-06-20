import React from 'react'
import {
    Link, useNavigate
  } from "react-router-dom";


function Navbar(props) {
  let navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate("/Login")
    
  }

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:'sticky'}}>
  <Link className="navbar-brand" to="/">iNotebook</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link Home" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/User">User</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li>
      </li>
    </ul>
    {!localStorage.getItem('token')?<form className="d-flex log-sign-btn"> 
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
      </form>: <form className="d-flex log-sign-btn"><button onClick={handleLogout} className='d-flex btn btn-primary'>Logout</button></form>}
  </div>
</nav>
    </div>
  )
}

export default Navbar
