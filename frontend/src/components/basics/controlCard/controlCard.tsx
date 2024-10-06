import React from "react";
import "./controlCard.css"

interface ControlCardProps{
    svgIcon: React.ReactElement,
    label: string,
}

const ControlCard : React.FC<ControlCardProps> = ({svgIcon, label}) => {
    return (
        <div className="controlCard">
            <div className="divisionControlCard">
                <div className="imgControlCard">
                    {svgIcon}
                </div>
                <div className="infoDivControlCard">
                    <h1>
                        {label}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ControlCard;