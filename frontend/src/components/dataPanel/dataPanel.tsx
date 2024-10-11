import React from "react";
import { useUserValue } from "../../context/user";
import ErrorPage from "../errorPage/errorPage";
import { useLocation } from "react-router-dom";
import ComingSoonPage from "../comingSoonPage/comingSoonPage";

const DataPanel : React.FC = () => {
    const userValue = useUserValue();
    const location  = useLocation();
    console.log("asd");
    console.log(location.pathname.split("/")[-1])

    if(userValue != null)
    {
        console.log(location.pathname.split("/")[-1])
        if(location.pathname.split("/")[-1] == 'patients')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
        if(location.pathname.split("/")[-1] == 'medics')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
        if(location.pathname.split("/")[-1] == 'administrators')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
    }

    return (
        <ErrorPage />
    );
};

export default DataPanel;