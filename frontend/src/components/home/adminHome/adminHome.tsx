import React from "react";
import "./adminHome.css"
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Background from "../../background/background";
import ControlCard from "../../basics/controlCard/controlCard";

const PatientHome : React.FC = () => {
    return (
        <div className="adminHomeMainContainer">
            <Background />
            <ControlCard label="Patients" svgIcon={<EventIcon />}/>
            <ControlCard label="Medics" svgIcon={<EventNoteIcon />}/>
            <ControlCard label="Administrators" svgIcon={<MedicalInformationIcon />}/>
            <ControlCard label="Budget" svgIcon={<MedicalInformationIcon />}/>
        </div>
    );
};

export default PatientHome;