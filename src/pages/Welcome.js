import { React, useState } from "react";
import { Image, Modal } from "react-bootstrap";
import "../components/Welcome/Welcome.css";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading1 from "../reusableComponents/Headings/Heading1";
import Heading2 from "../reusableComponents/Headings/Heading2";
import { Moralis } from "moralis";

import metamask from "../Assets/metamask.png";
import walletconnect from "../Assets/walletconnect.svg";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function Welcome(props) {
  const initialUser = Moralis.User.current();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onLoginM = async () => {
    const user = await Moralis.authenticate();
    props.setUser(user);
    handleClose();
  };
  const onLoginW = async () => {
    //Change made here
    try {
      const user = await Moralis.Web3.authenticate({
        provider: "walletconnect",
      });
      props.setUser(user);
      handleClose();
    } catch (error) {
      console.log("authentication failed", error);
    }
  };
  return (
    <div className="landing-back landing-div">
      <div className="landing-inner-div">
        <Heading1
          size="48px"
          weight="700"
          marginBottom="13px"
          SMmarginBottom="0px"
          SMsize="40px"
          color="#2A1971"
          SMsize="28px"
          className="w-auto"
        >
          Welcome!
        </Heading1>

        <Heading1
          size="48px"
          weight="700"
          marginBottom="20px"
          SMmarginBottom="10px"
          color="#2A1971"
          SMsize="28px"
          className="w-auto welcome-text-flex"
        >
          Let’s begin with
          <Heading1
            size="48px"
            weight="700"
            marginBottom="20px"
            SMmarginBottom="0px"
            color="#5D34FF"
            SMsize="28px"
            className="w-auto"
            style={{ paddingLeft: "10px" }}
          >
            your wallet.
          </Heading1>
        </Heading1>
      </div>

      <ButtonStyled
        className=""
        background-color="#5D34FF"
        paddingInline="90px"
        paddingBlock="20px"
        color="white"
        borderRadius="8px"
        backgroundColor="#5D34FF "
        SMpaddingInline="50px"
        SMpaddingBlock="10px"
        border="none"
        className="mb-2 mb-md-4"
        onClick={() => {
          handleShow();
        }}
      >
        <h5 className="button-text"> Select a Wallet</h5>
      </ButtonStyled>

      <Heading2 size="24px" weight="700" color="#2A1971" marginBottom="20px">
        First time setting up a wallet?
      </Heading2>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="scale-in-center"
      >
        <Modal.Header closeButton>
          <div className="modal_heading">
            Pick a wallet to connect to TheKraft
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex flex-column">
            <div className="w-100 my-auto px-4 py-3 d-flex">
              <div>
                <Image width="40px" src={walletconnect} className="me-3" />
              </div>

              <Heading1
                size="30px"
                SMsize="20"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ alignItems: "center", cursor: "pointer" }}
                onClick={onLoginW}
              >
                WalletConnect
              </Heading1>
            </div>
          </div>
          <div className="w-100 d-flex flex-column">
            <div className="w-100 my-auto px-4 py-3 d-flex">
              <div>
                <Image width="40px" src={metamask} className="me-3" />
              </div>
              <Heading1
                size="30px"
                SMsize="20"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ alignItems: "center", cursor: "pointer" }}
                onClick={onLoginM}
              >
                MetaMask
              </Heading1>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Welcome;
