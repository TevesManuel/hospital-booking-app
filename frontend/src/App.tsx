import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import ErrorPage from './components/errorPage/errorPage';
import Login from './components/login/login';
import Register from './components/register/register';

import {
    Routes, Route,
    useMatch
} from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
