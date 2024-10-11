import React from "react";
import "./managerHome.css"
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Background from "../../background/background";
import ControlCard from "../../basics/controlCard/controlCard";
import { useNavigate } from "react-router-dom";

const ManagerHome : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="adminHomeMainContainer">
            <Background />
            <ControlCard onClick={(e)=>{navigate("/dataPanel/patients")}} label="Patients" svgIcon={<EventIcon />}/>
            <ControlCard onClick={(e)=>{navigate("/dataPanel/medics")}} label="Medics" svgIcon={<EventNoteIcon />}/>
            <ControlCard onClick={(e)=>{navigate("/dataPanel/admins")}} label="Administrators" svgIcon={<MedicalInformationIcon />}/>
            <ControlCard onClick={(e)=>{navigate("/dataPanel/budget")}} label="Budget" svgIcon={<MedicalInformationIcon />}/>
        </div>
    );
};

export default ManagerHome;