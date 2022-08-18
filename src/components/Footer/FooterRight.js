import { faEnvelope, faSms } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FooterRight() {
  return (
    <div className="col-12 col-md-4">
      <div className="d-flex flex-column">
        <div className="my-auto footer_heading  Link_heading mb-4">
          Newsletter
        </div>
        <div>
          <div className="input_footer_div d-flex">
            <div className="my-auto" style={{ color: "#aaaaaa" }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input type="text" className="input_footer" />
            <div style={{ minWidth: "100px" }} className="input_right_text">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterRight;
