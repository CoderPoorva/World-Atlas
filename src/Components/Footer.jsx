import React from 'react'
import footerContact from './API/Footer.json'
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Container, CopyRightArea, FooterContact, FooterSection, FooterText } from './Styles/FooterStyle';

const Footer = () => {

  const footerIcon = {
    MdPlace: <OtherHousesIcon />,
    IoCallSharp: <CallIcon />,
    TbMailPlus: <AlternateEmailIcon />,
  };

  return (
    <FooterSection className="footer-section">
      <Container className="container">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <FooterContact className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <FooterText className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </FooterText>
            </FooterContact>
          );
        })}
      </Container>

      <CopyRightArea className="copyright-area">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
              </p>
            </div>
      </CopyRightArea>
    </FooterSection>
  )
}

export default Footer