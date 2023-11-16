import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="reservation">Reservation</Link>
          </li>

          <li>
            <Link to="payments">Payment</Link>
          </li>

          {/* <li className="Log">
            <Link to="login">Login</Link>
          </li>

          <li className="Log">
            <Link to="register">Register</Link>
          </li> */}
          
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
