import React from "react";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

function adminNav() {
  if (AuthService.loggedIn()) {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/order/history">
            Order History
          </Link>
          <Link to="/add/product">
            Add Product
          </Link>
          <Link to ='/delete/product'>
            Delete Product
          </Link>
        </li>
        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => AuthService.logout()}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>What would you like to do today?</h1>
      
    <nav>
      {adminNav()}
    </nav>
    </header>
  );
}

export default adminNav;
// comment
