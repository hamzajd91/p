import { React, useState, useEffect } from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import BasePage from "./BasePage";
import NavbarCus from "./pages/NavbarCus";
import Welcome from "./pages/Welcome";
import { Image, Modal } from "react-bootstrap";
import "./components/Welcome/Welcome.css";
import ButtonStyled from "./reusableComponents/Buttons/ButtonStyled";
import Heading1 from "./reusableComponents/Headings/Heading1";
import Heading2 from "./reusableComponents/Headings/Heading2";
import { Moralis } from "moralis";
import close from "./Assets/cancel.png";

import metamask from "./Assets/metamask.png";

import BarWave from "react-cssfx-loading/lib/Hypnosis";
import walletconnect from "./Assets/walletconnect.svg";
import web3 from "./Moralis/MoralisConfig";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function Routes() {
  const initialUser = Moralis.User.current();
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    const query1 = new Moralis.Query("AddingAddresses");
    query1.find().then((res) => {
      setaddresses1(res);
    });
  }, [user]);
  // Modaal connect wallet
  const [isloggingin, setisloggingin] = useState(false);
  const [addresses1, setaddresses1] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modaal connect wallet
  const onLoginM = async () => {
    setisloggingin(true);
    try {
      const user = await Moralis.authenticate();
      console.log(user);
      web3 = await Moralis.enableWeb3();
      var a = 0;
      for (var i = 0; i < addresses1.length; i++) {
        if (
          user.attributes.ethAddress.toLowerCase() ===
          addresses1[i].attributes.address.toLowerCase()
        ) {
          setUser(user);
          handleClose();
          a = 1;
        }
      }

      if (a == 0) {
        alert("Your not White Listed");

        Moralis.User.logOut();

        handleClose();
      }
      setisloggingin(false);
    } catch (e) {
      setisloggingin(false);
    }
  };
  const onLoginW = async () => {
    setisloggingin(true);
    try {
      const user = await Moralis.Web3.authenticate({
        provider: "walletconnect",
      });

      web3 = await Moralis.enableWeb3({ provider: "walletconnect" });

      var a = 0;
      for (var i = 0; i < addresses1.length; i++) {
        if (
          user.attributes.ethAddress.toLowerCase() ===
          addresses1[i].attributes.address.toLowerCase()
        ) {
          setUser(user);
          handleClose();
          a = 1;
        }
      }

      if (a == 0) {
        Moralis.User.logOut();

        alert("Your not White Listed");

        handleClose();
      }
      setisloggingin(false);
    } catch (e) {
      setisloggingin(false);
    }
  };

  return (
    <>
      <Switch>
        {user ? (
          /*Render auth page when user at `/auth` and not authorized.*/
          <>
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "yellow" }}
            >
              This is the BETA Version. We will keep on improving!{" "}
            </div>
            <NavbarCus user={user} setUser={setUser} />
            <BasePage />
          </>
        ) : (
          /*Otherwise redirect to root page (`/`)*/
          <>
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "yellow" }}
            >
              This is the BETA Version. We will keep on improving!{" "}
            </div>
            <Redirect to="/Welcome" />
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

              <Heading2
                size="24px"
                weight="700"
                color="#2A1971"
                marginBottom="20px"
              >
                First time setting up a wallet?
              </Heading2>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="scale-in-center"
              >
                <Modal.Header>
                  <div className="modal_heading">
                    Pick a wallet to connect to TheKraft
                  </div>

                  <Image
                    src={close}
                    width="30px"
                    onClick={() => handleClose()}
                  />
                </Modal.Header>
                <Modal.Body>
                  {isloggingin ? (
                    <div
                      className="d-flex  my-4"
                      width="100%"
                      style={{ flexDirection: "column", alignItems: "center" }}
                    >
                      <div className="mb-2">Authenticating...</div>
                      <BarWave />
                    </div>
                  ) : (
                    <>
                      {" "}
                      <div className="w-100 d-flex flex-column">
                        <div className="w-100 my-auto px-4 py-3 d-flex">
                          <div>
                            <Image
                              width="40px"
                              src={walletconnect}
                              className="me-3"
                            />
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
                            <Image
                              width="40px"
                              src={metamask}
                              className="me-3"
                            />
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
                    </>
                  )}
                </Modal.Body>
              </Modal>
            </div>
          </>
        )}
      </Switch>
    </>
  );
}

export default Routes;
