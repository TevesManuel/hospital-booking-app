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
    return (
        <div className="patientHomeMainContainer">
            <Background />
            <ControlCard label="Book" svgIcon={<EventIcon />}/>
            <ControlCard label="View bookings" svgIcon={<EventNoteIcon />}/>
            <ControlCard label="Medical records" svgIcon={<MedicalInformationIcon />}/>
        </div>
    );
};

export default PatientHome;