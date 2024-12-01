import React from 'react'
import footerContact from './API/Footer.json'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { NavLink } from 'react-router-dom';
import './Styles/Footer.css';

const Footer = () => {

  const footerIcon = {
    MdPlace: <OtherHousesIcon />,
    IoCallSharp: <CallIcon />,
    TbMailPlus: <AlternateEmailIcon />,
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
              </p>
            </div>
      </div>
    </footer>
  )
}

export default Footer