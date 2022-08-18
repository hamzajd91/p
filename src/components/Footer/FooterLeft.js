import React from "react";
import logo from "../../Assets/logo.svg";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function FooterLeft() {
  return (
    <div className="col-12 col-md-8">
      <div className="d-flex flex-column flex-md-row">
        <div className="d-flex justify-content-between justify-content-md-start flex-column footer_right_top sm_width_set">
          <div className="mx-auto mb-lg-4 mb-3 mb-md-0">
            <Image src={logo} className="me-0 mx-auto" />{" "}
          </div>
          <div className="my-auto Social_icons text-muted">
            <div>
              <FontAwesomeIcon
                icon={faDiscord}
                onClick={() => {
                  window.location.href = "https://discord.gg/pika";
                }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                onClick={() => {
                  window.location.href = "https://twitter.com/PikaCrypto_";
                }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faYoutube}
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/channel/UC5_aQ7aqdwRAWCKnD0gWzuw";
                }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mt-4 mt-md-0 ms-0 ms-md-5">
          <div className="d-flex flex-wrap Footer_links mt-2 mt-md-4 ms-0 ms-md-5">
            <div>
              <Link to="/MusicTheme">MarketPlace</Link>
            </div>

            <div>
              <Link to="/profile">Account</Link>
            </div>
            <div>
              <Link to="/create">Create</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLeft;
