import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Menu } from "../index";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handdleToggle = () => {
    setToggle(!toggle);
  };

  const updatemenu = () => {};
  return (
    <>
      <nav id="menu">
        <div>
          <input
            type="checkbox"
            id="responsive-menu"
            onClick={() => updatemenu()}
          />
          <label></label>
          <ul>
            <li>
              <NavLink to="/clothes">Clothes</NavLink>
            </li>
            <li>
              <a href="http://">Electronics</a>
            </li>
            <li>
              <a href="http://">Furniture</a>
            </li>
            <li>
              <a href="http://">Toys</a>
            </li>
            <li>
              <a href="http://">Others</a>
            </li>
            {/* <li>
              <a className="dropdown-arrow" href="#">
                Cloths
              </a>
              <ul className="sub-menus">
                <li>
                  <a href="http://">Clothes</a>
                </li>
                <li>
                  <a href="http://">Electronics</a>
                </li>
                <li>
                  <a href="http://">Furniture</a>
                </li>
                <li>
                  <a href="http://">Toys</a>
                </li>
                <li>
                  <a href="http://">Others</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://">About</a>
            </li>
            <li>
              <a className="dropdown-arrow" href="#">
                Services
              </a>
              <ul className="sub-menus">
                <li>
                  <a href="http://"> Sub Header 1</a>
                </li>
                <li>
                  <a href="http://"> Sub Header 2</a>
                </li>
                <li>
                  <a href="http://"> Sub Header 3</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="http://">Contact Us</a>
            </li>
          </ul>
        </div>
        <figure className="navbar-right">
          <span className="navbar-right-email" onClick={() => handdleToggle()}>
            nescalan@gmail.com
          </span>
          <img className="menu-cart" />
        </figure>
        {toggle && <Menu />}
      </nav>
    </>
  );
};

export default Header;
