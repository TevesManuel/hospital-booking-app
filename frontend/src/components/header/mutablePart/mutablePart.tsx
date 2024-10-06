import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserValue } from "../../../context/user";
import Button from '@mui/material/Button';

const MutablePart : React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userValue = useUserValue();
    if(userValue !== null)
    {
        return (
            <Button>{userValue.names}</Button>
        )
    }
    return (
        <>
            <Button variant="outlined" onClick={() => { navigate('/register'); } } disabled={location.pathname === '/register' ? true : false}>
            Register
            </Button><Button variant="contained" onClick={() => { navigate('/login'); } } disabled={location.pathname === '/login' ? true : false}>
                Login
            </Button>
        </>
    );
}

export default MutablePart;