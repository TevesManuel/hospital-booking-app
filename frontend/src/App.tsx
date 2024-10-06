import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import ErrorPage from './components/errorPage/errorPage';
import Login from './components/login/login';
import Register from './components/register/register';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from 'react-toastify';
import {
    Routes, Route,
} from 'react-router-dom';
import MyAccount from './components/myAccount/myAccount';


function App() {
    return (
        <div className="App">
            <Header />
            <div className='AppViewPort'>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/myAccount' element={<MyAccount />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
            </div>
            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
        </div>
    );
}

export default App;