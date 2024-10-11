import React from "react";
import './home.css';
import { useUserValue } from "../../context/user";
import PatientHome from "./patientHome/patientHome";
import DefaultHome from "./defaultHome/defaultHome";
import MedicHome from "./medicHome/medicHome";
import ManagerHome from "./managerHome/managerHome";

const Home : React.FC = () => {

    const userValue = useUserValue();

    const renderContent = () => {
        if(userValue !== null)
        {
            if(userValue.type === 'patient')
                return <PatientHome />
            else if(userValue.type === 'medic')
                return <MedicHome />
            else if(userValue.type === 'manager')
                return <ManagerHome />
        }
        return <DefaultHome />;
    };

    return(
        <div className="homeMainDiv">
            {renderContent()}
        </div>
    );
}

export default Home;