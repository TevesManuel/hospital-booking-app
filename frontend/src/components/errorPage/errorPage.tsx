import React from "react";
import "./errorPage.css";

const ErrorPage : React.FC = () => {
    return (
        <div className="errorPageMainContainer">
            <div className="errorPageTextContainer">
                <h1>Oops!</h1>
                <h3>You probably shouldn't be here.</h3>    
            </div>
        </div>
    );
};

export default ErrorPage;