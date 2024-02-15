import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div className="footer-container">
        <h2>Bize Ulaşın</h2>
      <div className="footer">
          <a href="https://wa.me/905356433720">
            <WhatsAppIcon />
          </a>
          
          <a href="tel:+905356433720">
            <PhoneIcon />
          </a>
         
        <a href="mailto: emre.ozturk37@hotmail.com">
          <MailIcon />
        </a>
        <a href="https://www.instagram.com/starkmimarlik/">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
