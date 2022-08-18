import React from "react";
import "../components/Footer/Footer.css";
import logo from "../Assets/logo.svg";
import FooterBottom from "../components/Footer/FooterBottom";
import FooterLeft from "../components/Footer/FooterLeft";
import FooterRight from "../components/Footer/FooterRight";
function Footer() {
  return (
    <div className="py-2 px-2 px-md-0">
      <div className="d-flex flex-column">
        <div className="row w-100 m-0 mb-3 mb-md-5">
          <FooterLeft />
          <FooterRight />
        </div>
      </div>
    </div>
  );
}

export default Footer;
