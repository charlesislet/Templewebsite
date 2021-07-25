import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">澎湖廟宇</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="navbar-nav navbar-right">
        <a className="nav-link " aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
      </div>
  </div>
</nav>

	)

}

export default Navbar;