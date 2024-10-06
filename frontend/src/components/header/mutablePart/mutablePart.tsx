import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserValue, useUserDispatch } from "../../../context/user";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

const MutablePart : React.FC = () => {
    const navigate                      = useNavigate();
    const location                      = useLocation();
    const userValue                     = useUserValue();
    const userDispatch                  = useUserDispatch();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    if(userValue !== null) {
        return (
            <div>
                <IconButton
                    onClick={(e) => setAnchorElNav(e.currentTarget)}
                    color="inherit"
                    className="accountIcon"
                    style={{ fontSize: '40px', width: '50px', height: '50px' }} 
                >
                <AccountCircle style={{ fontSize: 'inherit' }}/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={(e) => setAnchorElNav(null)}
                >
                    <MenuItem onClick={() => {
                        setAnchorElNav(null);
                        navigate('/myAccount');
                    }}>My account</MenuItem>
                    <MenuItem onClick={() => {
                        setAnchorElNav(null);
                        userDispatch({type: 'LOGOUT'});
                    }}>Logout</MenuItem>
                </Menu>
          </div>
        );
    }
    
    return (
        <>
            <Button variant="outlined" onClick={() => { navigate('/register'); } } disabled={location.pathname === '/register'}>
            Register
            </Button>
            <Button variant="contained" onClick={() => { navigate('/login'); } } disabled={location.pathname === '/login'}>
                Login
            </Button>
        </>
    );
}

export default MutablePart;
