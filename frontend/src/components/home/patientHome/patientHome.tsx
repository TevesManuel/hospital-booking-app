import React from "react";
import "./patientHome.css"
import EventIcon from '@mui/icons-material/Event';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';
// import ApartmentIcon from '@mui/icons-material/Apartment';
// import FolderIcon from '@mui/icons-material/Folder';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Background from "../../background/background";
import ControlCard from "../../basics/controlCard/controlCard";

const PatientHome : React.FC = () => {
    const styleForSvg = {'fontSize': '8vw'};

    return (
        <div className="patientHomeMainContainer">
            <Background />
            <ControlCard onClick={(e)=>{}} label="Book" svgIcon={<EventIcon style={styleForSvg} />}/>
            <ControlCard onClick={(e)=>{}} label="View bookings" svgIcon={<EventNoteIcon style={styleForSvg} />}/>
            <ControlCard onClick={(e)=>{}} label="Medical records" svgIcon={<MedicalInformationIcon style={styleForSvg} />}/>
        </div>
    );
};

export default PatientHome;