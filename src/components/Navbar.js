import React from 'react';
import './Navbar.css';
import logo from '../Image/icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul class="navbar-nav me-auto">
            <a class="nav-link" href="#"><img src={logo}/></a>
            <Link className="nav-link" to='/'><h2>澎湖廟宇</h2></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
            </button>
          </ul>
        </div>
        {/* <div class="mx-auto order-0">
          <a class="navbar-brand mx-auto" href="#">Navbar 2</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div> */}
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link className="nav-link" to='./map'>廟宇地圖</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">探索廟宇</a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/table">廟宇資料表</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	)

}

export default Navbar;