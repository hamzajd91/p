import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

import { Modal, Image } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import lock from "../Assets/lock.svg";
import secu from "../Assets/secu.svg";
import "../components/Navbar/Navbar.css";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading1 from "../reusableComponents/Headings/Heading1";
function Authenticate() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "relative",

            top: "43px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              borderRadius: "75px",
              backgroundColor: "white",
              width: "134px",
              height: "134px",
            }}
          >
            <Image src={logo} />
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div style={{ paddingLeft: "35px", paddingRight: "35px" }}>
          <div
            style={{
              textAlign: "center",
              alignSelf: "center",
              paddingTop: "80px",
            }}
            className="d-flex-col"
          >
            <Heading1 color="#5D34FF" size="24px" weight="700" className="mb-4">
              {" "}
              TheKraft enables authentication using Lorem Ipsm
            </Heading1>
            <div className="d-flex justify-content-between">
              <Image src={lock} />

              <div style={{ maxWidth: "350px", height: "44px" }}>
                <Heading1 color="#000000" size="18px" weight="500">
                  Your phone or email will be used to sign-up and login.
                </Heading1>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Image src={secu} />
              <div style={{ maxWidth: "350px", height: "44px" }}>
                <Heading1 color="#000000" size="18px" weight="500">
                  Your funds will be safeguarded by security compilant services.
                </Heading1>
              </div>
            </div>
            <ButtonStyled
              width="100%"
              backgroundColor="#5D34FF"
              borderRadius="8px"
              height="106px"
              color="#FFFFFF"
              size="24px"
              weight="500"
              border="none"
              className="my-4"
            >
              Continue
            </ButtonStyled>
            <Heading1
              size="24px"
              weight="500"
              color="#5D34FF"
              className="d-inline"
            >
              By continuing, you agree to our
              Terms of Service, Privacy Policy, and Cookie Policy
             
            </Heading1>

            <div className="d-flex justify-content-center align-items-center">
              <Checkbox color="#5D34FF" />
              <Heading1 className="d-inline" color="#000000">
                Don't show this screen again
              </Heading1>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Authenticate;
