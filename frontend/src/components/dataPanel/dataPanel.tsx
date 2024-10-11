import React from "react";
import { useUserValue } from "../../context/user";
import ErrorPage from "../errorPage/errorPage";
import { useLocation } from "react-router-dom";
import ComingSoonPage from "../comingSoonPage/comingSoonPage";

const DataPanel : React.FC = () => {
    const userValue = useUserValue();
    const location  = useLocation();
    console.log();

    if(userValue != null)
    {
        if(location.pathname.split("/")[2] == 'patients')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
        if(location.pathname.split("/")[2] == 'medics')
        {
            if(userValue.type == 'manager')
            {
                return ( <ComingSoonPage /> );
            }
        }
        if(location.pathname.split("/")[2] == 'admins')
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