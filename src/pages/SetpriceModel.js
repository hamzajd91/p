import React, { useState } from "react";
import Heading1 from "../reusableComponents/Headings/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import Dynamic_background_div from "../reusableComponents/Dynamic_background_div/Dynamic_background_div";



function SetpriceModel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Set Price</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="d-flex align-items-center">
                        <img
                            className="Profile-circle"
                            src={
                                "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                            }
                        />
                        <div className="">
                            <Heading1
                                size="20px"
                                SMsize="15"
                                weight="700"
                                marginBottom="10px"
                                SMmarginBottom="10px"
                                color="#2A1971"
                                JFcontent="left"
                                className=""
                                style={{ marginLeft: "5px", marginBlock: "12px" }}
                            >
                                Owner
                            </Heading1>
                        </div>
                    </div>

                    <div className=" mx-3">
                        <Dynamic_background_div
                            width="100%"
                            height="200px"
                            backgroundColor="transparent"
                            backgroundRepeat="no-repeat"
                            backgroundSize="contain"
                            position="relative"
                            backgroundPosition="center"
                            setimage='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                            className=""
                        ></Dynamic_background_div>
                    </div>

                    <div className=" mx-3">
                        <Heading1
                            size="20px"
                            SMsize="15"
                            weight="600"
                            marginBottom="10px"
                            SMmarginBottom="10px"
                            color="#2A1971"
                            JFcontent="left"
                            className=""
                            style={{ marginBlock: "10px" }}
                        >
                            NFT Name
                        </Heading1>
                    </div>

                    <div>
                        <input
                            id="amount1"
                            type="number"
                            placeholder="Set price"
                            className="mx-3 bid_input"
                        />
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default SetpriceModel
