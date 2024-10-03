import React from "react";
import "./register.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";
import useField from "../../hooks/useField/useField";
import { toast } from 'react-toastify';
import TInput from "../basics/TInput/TInput";

const Register : React.FC = () => {

    const email     = useField();
    const password  = useField();
    const dni       = useField();
    const telephone = useField();
    const address   = useField();
    const dateBirth = useField();

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const id = toast.loading("Please wait...")

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
        .then(response => {
            if(response.ok)
            {
                response.json().then(data => {
                    console.log(data);
                    toast.update(id, { render: `Hi ${data.name}`, type: "success", isLoading: false, autoClose: 3000  });
                })
            }
            else
            {
                toast.update(id, { render:"Error", type:"error", isLoading: false, autoClose: 3000 });
            }
        })
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
                                <div className="form-group registerFormInput">
                                    <TInput inputValues={email} placeholder="user@email.com" label="Email" type="email"/>
                                </div>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group registerFormInput">
                                <TInput inputValues={password} placeholder="" label="Password" type="password"/>
                            </div>
                            
                            <div style={{display: 'flex'}}>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={dni} placeholder="xx.xxx.xxx" label="D.N.I" type="dni"/>
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={telephone} placeholder="(xxx) xxx xxxx" label="Telephone" type="telephone"/>
                                    </div>
                                </div>
                            </div>

                            <div style={{display: 'flex', width: '100%'}}>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={address} placeholder="Cx e/x y x" label="Adress" type="normal"/>
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