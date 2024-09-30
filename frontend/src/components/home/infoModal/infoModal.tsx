import React from "react"
import './infoModal.css';

interface infoModalProps {
    children: React.ReactNode;
    isRightAlign?: boolean;
}
  
const InfoModal : React.FC<infoModalProps> = (props) => {
    return (
        <div className="hospitalHomeInfoContainer"> 
            <div style={{ display: 'flex', justifyContent: props.isRightAlign ? 'right' : 'left' }}>
                <div className="homeInfoContainer">
                    {props.children}
                </div>    
            </div>
        </div>
    );
};

export default InfoModal;