import React from "react";
import "./login.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";

const Login : React.FC = () => {

    const login = () => {
        fetch("api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": "Manuel Teves",
                "Edad": "18",
            })
        }).then(data => {
            console.log(data);
        });
    };

    return (
        <div className="loginMainContainer">
            <Background />
            <div className="loginContainer">
                <div className="loginSection">
                    <img src={userIcon} />
                </div>
                <div className="loginSection">
                    <div>
                        <div className="centerText">
                            <h3 className="mfont">
                                Login
                            </h3>
                        </div>
                        <form className="loginForm">
                            <div className="input-group mb-3 loginFormInput">
                                <span className="input-group-text" id="basic-addon1">email</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group mb-3 loginFormInput">
                                <span className="input-group-text" id="basic-addon1">password</span>
                                <input type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={login}>Submit</button>
                            <div className="anotherLoginOptions">
                                <a href="/forgot-your-password">Forgot your password?</a>
                                <a href="/register">Register</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;