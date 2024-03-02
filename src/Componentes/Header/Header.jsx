import React from "react";
import { useEffect, useState } from "react";
import "./Header.css";

function Header(){
    return (
        <header className="container">
          <div>
            <h2>CC</h2>
          </div>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      );
}

export default Header;