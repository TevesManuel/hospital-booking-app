import React from "react";
import { useState } from "react";
import "./register.css";
import Background from "../background/background";
import userIcon from "./assets/user.svg";
import useField from "../../hooks/useField/useField";
import { toast } from 'react-toastify';
import TInput from "../basics/TInput/TInput";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Button from '@mui/material/Button';
import { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";

const Register : React.FC = () => {

    const email     = useField();
    const password  = useField();
    const names     = useField();
    const lastNames = useField();
    const dni       = useField();
    const phoneNumber = useField();
    const locality  = useField();
    const zipCode   = useField();
    const address   = useField();
    const [dateBirth, setDateBirth] = useState("");

    const navigate = useNavigate();

    const register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const toastId = toast.loading("Please wait...")

        fetch("api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                names: names.value,
                lastNames: lastNames.value,
                dni: dni.value,
                phoneNumber: phoneNumber.value,
                locality: locality.value,
                zipCode: zipCode.value,
                address: address.value,
                dateBirth: dateBirth,
            })
        })
        .then(response => {
            if(response.ok)
            {
                response.json().then(data => {
                    navigate("/login");
                    toast.update(toastId, { render: `You're already registered.Try logging in now`, type: "success", isLoading: false, autoClose: 3000  });
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
                        toast.update(toastId, { render:"Error", type:"error", isLoading: false, autoClose: 3000 });                        
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
                    <img src={userIcon} alt="user icon" />
                </div>
                <div className="loginSection">
                    <div>
                        <div className="centerText">
                            <h3 className="mfont">
                                Register
                            </h3>
                        </div>
                        <form className="registerForm" onSubmit={register}>
                            
                            <div className="w-100" style={{marginBottom: '10px'}}>
                                <div className="form-group registerFormInput">
                                    <TInput inputValues={email} placeholder="user@email.com" label="Email" type="email"/>
                                </div>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group registerFormInput w-100">
                                <TInput inputValues={password} placeholder="" label="Password" type="registerPassword"/>
                            </div>

                            <div className="registerRowInput">
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={names} placeholder="" label="Names" type="normal"/>
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={lastNames} placeholder="" label="Last names" type="normal"/>
                                    </div>
                                </div>
                            </div>

                            <div className="registerRowInput">
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={dni} placeholder="xx.xxx.xxx" label="D.N.I" type="dni"/>
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={phoneNumber} placeholder="(xxx) xxx xxxx" label="Telephone" type="telephone"/>
                                    </div>
                                </div>
                            </div>

                            <div className="registerRowInput">
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={locality} placeholder="" label="Locality" type="normal"/>
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={zipCode} placeholder="xxxx" label="Zip code" type="normal"/>
                                    </div>
                                </div>
                            </div>

                            <div className="registerRowInput">
                                <div style={{flex: 5}}>
                                    <div className="form-group registerFormInput">
                                        <TInput inputValues={address} placeholder="Cx e/x y x nro xxxx" label="Adress" type="normal"/>
                                    </div>
                                </div>
                                <div style={{flex: 5}}>
                                    <div className="form-group" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55%'}}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date of birth"
                                        onChange={(value: Dayjs | null, context: any) => {
                                            if (value) {
                                                setDateBirth(value.format('MM-DD-YYYY'))
                                            }
                                        }}
                                    />
                                    </LocalizationProvider>
                                    </div>
                                </div>
                            </div>

                            <Button type="submit" variant="outlined" className="m-2 w-50">Register</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;