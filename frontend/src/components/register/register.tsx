import React from "react";
import "./register.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";
import useField from "../../hooks/useField/useField";

const Register : React.FC = () => {

    const email     = useField();
    const password  = useField();
    const dni       = useField();
    const telephone = useField();
    const address   = useField();
    const dateBirth = useField();

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                dni: dni.value,
                telephone: telephone.value,
                address: address.value,
                dateBirth: dateBirth.value,
            })
        })
        .then(response => response.ok ? response.json().then(data => console.log(data)) : alert("Error on upload your data to the server."))
    };

    return (
        <div className="loginMainContainer">
            <Background />
            <div className="loginContainer">
                <div className="loginSection">
                    <img src={userIcon} alt="user icon" />
                </div>
                <div className="loginSection">
                    <div>
                        <div className="centerText">
                            <h3 className="mfont">
                                Register
                            </h3>
                        </div>
                        <form className="loginForm" onSubmit={register}>
                            
                            <div className="w-100">
                                <label className="w-100">Email address</label>
                                <div className="form-group registerFormInput">
                                    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" {...email} required={true} />
                                </div>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <label className="w-100">Password</label>
                            <div className="form-group registerFormInput">
                                <input type="password" className="form-control" placeholder="Password" {...password} required={true}  />
                            </div>
                            
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 5}}>
                                    <label className="w-100">D.N.I</label>
                                    <div className="form-group registerFormInput">
                                        <input type="text" className="form-control" placeholder="Your D.N.I" {...dni} required={true}  />
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <label className="w-100">Telephone</label>
                                    <div className="form-group registerFormInput">
                                        <input type="text" className="form-control" placeholder="Telephone" {...telephone} required={true} />
                                    </div>
                                </div>
                            </div>

                            <div style={{display: 'flex', width: '100%'}}>
                                <div style={{flex: 5}}>
                                    <label className="w-100">Address</label>
                                    <div className="form-group registerFormInput">
                                        <input type="text" className="form-control" placeholder="Telephone" {...address} required={true} />
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <label className="w-100">Date of Birth</label>
                                    <div className="form-group" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55%'}}>
                                        <input type="date" id="fecha" name="fecha" {...dateBirth} required={true} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary m-3" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;