import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    
  return (
    <div className='body-navbar'>
        
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link to='/'>
                    <img src="./job-logo.jpg" width='100' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'><h1 className='id-nav'>HOME</h1></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Create_hv'><h1 className='id-nav'>CREATE HV</h1></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Login'><h1 className='id-nav'>LOGIN</h1></Link>
                        </li>
                    </ul>
                    <form className="search" >
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>
  );
};

export default Navbar;