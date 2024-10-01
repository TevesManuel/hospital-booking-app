import React from "react";
import './footer.css';
import phoneIcon from './assets/phone-icon.png';
import emailIcon from './assets/email-icon.svg';

const Footer : React.FC = () => {
    return (
        <footer>
            <div className="subFooterDiv">
                <div>
                    <h4>Manuel Teves</h4>
                    <h5 >La Plata, Buenos Aires, Argentina</h5>    
                </div>
            </div>
            <div className="subFooterDiv">
                <div>
                    <div>
                        <img src={phoneIcon} id="phoneImgFooter" alt="phone icon"></img>
                        <h5 className="footerImgText">(+54)2213058662</h5>
                    </div>
                    <div>
                        <img src={emailIcon} id="emailIconFooter" alt="email icon"></img>
                        <h5 className="footerImgText">manuel.tomas.teves@gmail.com</h5>
                    </div>
                </div>
            </div>
            <div className="subFooterDiv">
                <a href="email:manuel.tomas.teves@gmail.com">
                    <button className="btn btn-secondary">Contact & service</button>
                </a>
            </div>
        </footer>
    );
};

export default Footer;