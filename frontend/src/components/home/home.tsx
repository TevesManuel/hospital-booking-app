import React from "react";
import './home.css';
import calendarImage from './assets/calendar.svg';
import moneyImage from './assets/money.svg';
import InfoModal from './infoModal/infoModal';
import Background from "../background/background";

const Home : React.FC = () => {
    return(
        <div className="homeMainDiv">
            <Background />
            <div className="hospitalHomeInfoMainContainer">
                <InfoModal>
                    <div className="textContainerInfoContainer">
                        <h1>
                            Why choose Teves Booking?
                        </h1>
                        <div className="answerTextInfoContainer">
                            <h4>
                                At Teves Hospital, we care about providing you with an efficient and hassle-free medical experience. Our key benefits include:
                            </h4>
                            <ul>
                                <li>
                                    Easy appointment management: With our intuitive platform, you can request appointments in just a few steps, choosing the time that best suits your schedule, without long waits or complications.
                                </li>
                                <li>
                                    Fast access to results: Get your medical results quickly and safely. You will no longer have to worry about wasting time on unnecessary waits; you will receive notifications and be able to check your analyses online from the comfort of your home.
                                </li>
                            </ul>
                        </div>        
                    </div>
                    <div className="imageTextInfoContainer">
                        <img src={calendarImage} className="homeInfoImage" alt="calendar ilustration"/>
                    </div>
                </InfoModal>

                <InfoModal isRightAlign={true}>
                    <div className="imageTextInfoContainer">
                        <img src={moneyImage} className="homeInfoImage" alt="money ilustration"/>
                    </div>
                    <div className="textContainerInfoContainer">
                        <h1>
                            Can your institution afford teves booking?
                        </h1>
                        <div className="answerTextInfoContainer">
                            <h4>
                                Our hospital reservation system is designed to be accessible to medical institutions of all types, regardless of their geographic location or size. We understand that each country and each institution has different economic realities, so we offer a flexible financing model tailored to the needs of each client.
                                <br></br>
                                The model is adjusted based on the country and the income of each institution, thus ensuring that all clinics, hospitals and medical centers can access our technology without compromising their budget. We work closely with each institution to design a financing plan that reflects their economic capacity, ensuring that the service is sustainable and accessible in the long term.
                            </h4>
                        </div>        
                    </div>
                </InfoModal>

            </div>
        </div>
    );
}

export default Home;