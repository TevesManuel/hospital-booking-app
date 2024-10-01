import React from "react";
import "./login.css";
import Background from "../background/background";

const Login : React.FC = () => {
    return (
        <div className="loginMainContainer">
            <Background />
            <div className="loginContainer">
                <div className="centerText">
                    <h3 className="mfont">
                        Login
                    </h3>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">email</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
            </div>
        </div>
    );
};

export default Login;