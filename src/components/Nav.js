import React from 'react';
import './Navbar.css';
import './Carousel.css';
import logo from '../Image/icon.png'
import { Link } from 'react-router-dom';

const Nav = () => {
	return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src={logo}/></a>
        <Link className="nav-link" to='/'><h2>澎湖廟宇</h2></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse order-3" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to='./map'>廟宇地圖</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to='./temples'>探索廟宇</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="./table">廟宇資料表</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	)

}

export default Nav;