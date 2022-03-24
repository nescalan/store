import React from "react";
import "./Menu.scss";
import cart from "../../assets/cart.svg";

const Menu = () => {
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
              <a href="http://">Home</a>
            </li>
            <li>
              <a className="dropdown-arrow" href="#">
                Products
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
                  <a href="http://"> Sub Menu 1</a>
                </li>
                <li>
                  <a href="http://"> Sub Menu 2</a>
                </li>
                <li>
                  <a href="http://"> Sub Menu 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="http://">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <img src="" alt="" className="menu-cart" />
        </div>
      </nav>
    </>
  );
};

export default Menu;
