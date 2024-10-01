import React from "react";
import "./login.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";
import useField from "../../hooks/useField/useField";

const Login : React.FC = () => {

    const email = useField();
    const password = useField();

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch("api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
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
                        <form className="loginForm" onSubmit={login}>
                            <div className="input-group mb-3 loginFormInput">
                                <span className="input-group-text" id="basic-addon1">email</span>
                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" {...email} />
                            </div>

                            <div className="input-group mb-3 loginFormInput">
                                <span className="input-group-text" id="basic-addon1">password</span>
                                <input type="password" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" {...password} />
                            </div>
                            <button type="submit" className="btn btn-primary" >Submit</button>
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