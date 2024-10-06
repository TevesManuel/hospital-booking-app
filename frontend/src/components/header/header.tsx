import React, { useEffect } from "react";
import './header.css';
import MutablePart from "./mutablePart/mutablePart";
import { useUserDispatch } from "../../context/user";

const Header : React.FC = () => {

    const userDispatch = useUserDispatch();

    useEffect(() => {
        const savedUser = window.localStorage.getItem('user');
        if (savedUser) {
            userDispatch({ type: 'SET', payload: JSON.parse(savedUser) });
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header>
          <div className="subHeaderDiv" ></div>
          <div className="subHeaderDiv" >
                <a href="/" style={{textDecoration: 0}}>
                    <h1 className="headerTitleText">TEVES BOOKING</h1>
                </a>
          </div>
          <div className="subHeaderDiv" >
                <div id="loginButtonHeader">
                    <MutablePart/>
                </div>
          </div>
        </header>
    );
};

export default Header;