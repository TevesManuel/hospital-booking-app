import React from "react";
import './header.css';

import { useNavigate } from 'react-router-dom';

const Header : React.FC = () => {
    const navigate = useNavigate();

    const redirectToLoginPage = () => {
      navigate('/login');
    };

    return (
        <header>
          <div className="subHeaderDiv" ></div>
          <div className="subHeaderDiv" >
              <h1 className="headerTitleText">TEVES BOOKING</h1>
          </div>
          <div className="subHeaderDiv" >
              <button id="loginButtonHeader" className="btn btn-primary" onClick={redirectToLoginPage} >
                  Login
              </button>
          </div>
        </header>
    );
};

export default Header;