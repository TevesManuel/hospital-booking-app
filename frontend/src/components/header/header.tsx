import React from "react";
import './header.css';

const Header : React.FC = () => {
    return (
        <header>
          <div className="subHeaderDiv" ></div>
          <div className="subHeaderDiv" >
            <h1 className="headerTitleText">TEVES BOOKING</h1>
          </div>
          <div className="subHeaderDiv" >
            <button id="loginButtonHeader" className="btn btn-primary" >
              Login
            </button>
          </div>
        </header>
    );
};

export default Header;