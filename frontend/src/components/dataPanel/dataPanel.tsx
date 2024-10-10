import React from "react";
import { useUserValue } from "../../context/user";
import ErrorPage from "../errorPage/errorPage";
import { useLocation } from "react-router-dom";

const DataPanel : React.FC = () => {
    const userValue = useUserValue();
    const location  = useLocation();

    if(userValue != null)
    {
        console.log(location.pathname.split("/")[-1])
        if(location.pathname.split("/")[-1] == 'patients')
        if(userValue.type == 'admin')
        {
            return (
                <>
                    
                </>
            );
        }
    }

    return (
        <ErrorPage />
    );
};

export default DataPanel;