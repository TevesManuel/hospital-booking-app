import React from "react";
import './header.css';

import { useNavigate, useLocation } from 'react-router-dom';

import { useUserValue } from "../../context/user";


const Header : React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const userValue = useUserValue();

    console.log("Header", userValue);

    console.log(location.pathname);

    const redirectToLoginPage = () => {
      navigate('/login');
    };

    return (
        <header>
          <div className="subHeaderDiv" ></div>
          <div className="subHeaderDiv" >
                <a href="/" style={{textDecoration: 0}}>
                    <h1 className="headerTitleText">TEVES BOOKING</h1>
                </a>
          </div>
          <div className="subHeaderDiv" >
              <button id="loginButtonHeader" className="btn btn-primary" onClick={redirectToLoginPage} disabled={location.pathname === '/login' ? true : false} >
                  Login
              </button>
          </div>
        </header>
    );
};

export default Header;