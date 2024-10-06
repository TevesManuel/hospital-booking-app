import React from "react";
import ErrorPage from "../errorPage/errorPage";
import { useUserValue } from "../../context/user";

const MyAccount : React.FC = () => {
    const userValue = useUserValue();
    
    if(userValue !== null)
    {
        return (
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                <h1>Its comming...</h1>
            </div>
        );
    }

    return (
        <ErrorPage />
    );
};

export default MyAccount;