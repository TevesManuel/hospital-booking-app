import React from "react";
import "./controlCard.css"

interface ControlCardProps{
    svgIcon: React.ReactElement,
    label: string,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const ControlCard : React.FC<ControlCardProps> = ({svgIcon, label, onClick}) => {
    return (
        <div className="controlCard" onClick={onClick}>
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