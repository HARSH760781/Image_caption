import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const header = ({ isLoggedIn }) => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            <p>Caption</p>
          </Link>
        </div>
        <div className="menu">
          <div className="menu-left">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/service">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="menu-right">
            <nav>
              <ul>
                <li>
                  {isLoggedIn ? (
                    <Link to="/comments">Comments</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
                <li>
                  <Link to="/download">App</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
