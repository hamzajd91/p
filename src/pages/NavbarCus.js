import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Modal, Image } from "react-bootstrap";
import logo from "../Assets/logo.svg";
import logo2 from "../Assets/kraft.png";
import lock from "../Assets/lock.svg";
import secu from "../Assets/secu.svg";
import metamask from "../Assets/metamask.png";
import walletconnect from "../Assets/walletconnect.svg";
import "../components/Navbar/Navbar.css";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading1 from "../reusableComponents/Headings/Heading1";
import EllipseGray from "../Assets/EllipseGray.png";
import { useHistory } from "react-router";
// import { useMoralis } from "react-moralis";
import { Moralis } from "moralis";
import Buttonmui from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function NavbarCus(props) {
  useEffect(() => {
    const query = new Moralis.Query("AddingAddresses");
    query.find().then((res) => {
      setaddresses1(res);
    });
  }, []);

  // Modaal connect wallet
  const [addresses1, setaddresses1] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [walletadressModal, setwalletadressModal] = useState(false);
  const closewalletadressModal = () => setwalletadressModal(false);
  const showwalletadressModal = () => setwalletadressModal(true);

  const history = useHistory();
  Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
  Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

  const onLoginM = async () => {
    const user = await Moralis.authenticate();

    props.setUser(user);
    handleClose();
  };
  // window.ethereum.on('accountsChanged', function (accounts) {
  //   alert(1)
  //   // Time to reload your interface with accounts[0]!
  // })
  const onLoginW = async () => {
    //Change made here

    const user = await Moralis.Web3.authenticate({
      provider: "walletconnect",
    });
    props.setUser(user);

    handleClose();
  };

  const onLogout = async () => {
    Moralis.User.logOut();
    props.setUser(null);
    closewalletadressModal();
    // history.push("./Create");
  };

  var aa;
  var aa1;
  if (props.user) {
    aa = props.user.attributes.accounts;
    aa1 = aa;
    aa = aa[0]
      .substr(0, 6)
      .concat(" . . . ")
      .concat(aa[0].substr(aa[0].length - 4, aa[0].length - 1));
  }

  // ==================meterial ui dropdown==================

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose_mui = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose_mui1 = () => {
    setAnchorEl1(null);
  };

  //==========================================================
  return (
    <>
      <div className="container w-100 text-center nav_area ">
        <Navbar collapseOnSelect expand="lg" variant="white">
          <div className="container-fluid">
            <Navbar.Brand href="/home">
              <Image className="logochange" src={logo} fluid />
              <Image className="logochange2" src={logo2} fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav " />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/MusicTheme">MarketPlace</Nav.Link>

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
             */}
              </Nav>
              <Nav className="nav_cus_right ">
                {props.user ? (
                  <div className="my-auto">
                    <Button
                      className=""
                      style={{
                        backgroundColor: "transparent",
                        background: "transparent",
                        border: "2px solid",
                        borderColor: "gray",
                        borderRadius: "15px",
                        textDecorationColor: "black",
                      }}
                      onClick={showwalletadressModal}
                    >
                      <div style={{ color: "black", fontSize: "1rem" }}>
                        {aa}
                      </div>
                    </Button>
                  </div>
                ) : (
                  <div className="my-auto">
                    <Button
                      className=""
                      style={{
                        backgroundColor: "transparent",
                        background: "transparent",
                        border: "none",
                      }}
                      onClick={handleShow}
                    >
                      Connect to a wallet
                    </Button>
                  </div>
                )}

                <div
                  className="my-auto text18"
                  style={{ color: "#5d34ff", fontWeight: "700" }}
                >
                  <div>
                    {props.user ? (
                      <Button style={{ border: "none" }} onClick={handleClick}>
                        <Heading1
                          size="20px"
                          SMsize="20"
                          weight="600"
                          marginBottom="0px"
                          SMmarginBottom="0px"
                          color="#2A1971"
                          JFcontent="left"
                          className=""
                          style={{ alignItems: "center", cursor: "pointer" }}
                        >
                          Create
                        </Heading1>
                      </Button>
                    ) : null}

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose_mui}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleClose_mui}>
                        <Nav.Link
                          href="./createSingleNft"
                          className="nav_droptext"
                        >
                          Create NFT
                        </Nav.Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose_mui}>
                        <Nav.Link
                          href="./createproject"
                          className="nav_droptext"
                        >
                          Create Collection
                        </Nav.Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                <div>
                  {props.user ? (
                    <Button style={{ border: "none" }} onClick={handleClick1}>
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        className="navbar_profile"
                      />
                    </Button>
                  ) : null}

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose_mui1}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose_mui}>
                      <Nav.Link href="./create" className="nav_droptext">
                        Created NFT
                      </Nav.Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose_mui}>
                      <Nav.Link href="./profile" className="nav_droptext">
                        Account
                      </Nav.Link>
                    </MenuItem>
                  </Menu>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>

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
      <Modal show={walletadressModal} onHide={closewalletadressModal}>
        <Modal.Header closeButton>
          <div className="modal_heading">Wallet Address</div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex flex-column">
            <div className="w-100 my-auto px-3 py-4 d-flex">
              <Heading1
                size="20px"
                SMsize="20"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="black"
                JFcontent="left"
                className=""
                style={{ alignItems: "center" }}
              >
                {aa1}
              </Heading1>
            </div>
          </div>
          <div className="w-100 d-flex flex-column">
            <div className="w-100 my-auto px-4 py-3 d-flex">
              <Button
                style={{
                  border: "2px solid",
                  borderRadius: "15px",
                }}
                onClick={onLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarCus;
