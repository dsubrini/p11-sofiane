import React from 'react';
import { NavLink } from "react-router-dom";
import ImgArgentBank from '../assets/argentBankLogo.webp'
import '../Header/header.css'


const header = () => {
    return (
        <section className="main-nav">
        <NavLink to="/"class="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ImgArgentBank}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink> 
        <div className="main-nav-item">
          <NavLink to="/signin" >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </section>
    );
};

export default header;