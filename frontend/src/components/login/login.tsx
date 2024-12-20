import React from "react";
import "./login.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";
import useField from "../../hooks/useField/useField";
import TInput from "../basics/TInput/TInput";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { useUserDispatch } from "../../context/user";

const Login : React.FC = () => {
    const email = useField();
    const password = useField();

    const navigate = useNavigate();

    const userDispatch = useUserDispatch();

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const toastId = toast.loading("Please wait...")

        fetch("api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            })
        })
        .then(response => {
            if(response.ok)
            {
                response.json().then(data => {
                    const base64Url = data.token.split('.')[1];
                    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    const jsonPayload = decodeURIComponent(escape(atob(base64)));
                    let parsedData = JSON.parse(jsonPayload);
                    if(parsedData.type === 'patient')
                    {
                        toast.update(toastId, { render: `Hi ${parsedData.names.split(" ")[0]}`, type: "success", isLoading: false, autoClose: 3000  });
                        userDispatch(
                            {
                                type: 'LOGIN',
                                payload: {
                                    ...parsedData,
                                    token: data.token
                                }            
                            }
                        )
                    }
                    else if(parsedData.type === 'patient')
                    {

                    }
                    else if(parsedData.type === 'manager')
                    {
                        toast.update(toastId, { render: 'Hi manager', type: "success", isLoading: false, autoClose: 3000  });
                        userDispatch(
                            {
                                type: 'LOGIN',
                                payload: {
                                    ...parsedData,
                                    token: data.token
                                }            
                            }
                        )
                    }
                    navigate("/home");
                })
            }
            else
            {
                response.json().then(data => {
                    if (data)
                    {
                        toast.update(toastId, { render:`Error: ${data.message}`, type:"error", isLoading: false, autoClose: 3000 });
                    }
                    else
                    {
                        toast.update(toastId, { render:"Error 000", type:"error", isLoading: false, autoClose: 3000 });                        
                    }
                })
            }
        })
    };

    return (
        <div className="loginMainContainer">
            <Background />
            <div className="loginContainer">
                <div className="loginSection">
                    <img src={userIcon} alt="user icon"/>
                </div>
                <div className="loginSection">
                    <div className="w-100 m-4">
                        <div className="centerText">
                            <h3 className="mfont">
                                Login
                            </h3>
                        </div>
                        <form className="loginForm" onSubmit={login}>
                            <div className="input-group mb-3 loginFormInput">
                            <TInput inputValues={email} placeholder="user@email.com" label="Email" type="email"/>
                            </div>

                            <div className="input-group mb-3 loginFormInput">
                                <TInput inputValues={password} placeholder="" label="Password" type="password"/>
                            </div>
                            <Button type="submit" variant="contained" className="m-2 w-50">Login</Button>
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