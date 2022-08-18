import React, { useState } from "react";
import "../components/BidModal/BidModal.css";
import pika from "../Assets/pika.png";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading1 from "../reusableComponents/Headings/Heading1";
import Styled_text from "../reusableComponents/styled_text/Styled_text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { ethers } from "ethers";
import { Moralis } from "moralis";

import BarWave from "react-cssfx-loading/lib/Hypnosis";
import Dynamic_background_div from "../reusableComponents/Dynamic_background_div/Dynamic_background_div";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function BidModal({ showBid, setshowBid, carddescription }) {
  const PIKA_CONTRACT_ADDRESS = "0x2A335a50Be85975FAAfAdb62D0384878b72C1F65";
  const [isBiding, setisBiding] = useState();
  var kraft_Pika = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

  const [amount, setamount] = useState();
  const handleAmountChange = (e) => setamount(e.target.value);

  const handleClose = () => setshowBid(false);
  let sampleimage = "https://giffiles.alphacoders.com/398/3987.gif";
  const Save = async () => {
    const web3 = await Moralis.Web3.enableWeb3();

    const pikaContract = new web3.eth.Contract(
      kraft_Pika,
      PIKA_CONTRACT_ADDRESS
    );
    setisBiding(true);

    var add = "0x4C8251A83faf0723BB455FE086cA7fB615D072e3";

    var res = Moralis.User.current().attributes.ethAddress;

    var datecurrent = new Date().getTime() / 1000;
    var hash = {
      offerId: carddescription.hash.offerId,
      assetId: carddescription.hash.assetId,
      tokenId: carddescription.tokenid,
      nftContract: "0x1736F0251f4c4F36354BA791265cA50204FF2b9f",
      buyer: res.toLowerCase(),
      seller: carddescription.address,
      beneficiary: carddescription.address,
      maxAmount: 1,
      startPrice: web3.utils.toWei(amount),
      endPrice: web3.utils.toWei(amount),
      startTimestamp: parseInt(datecurrent).toString(),
      endTimestamp: carddescription.deadline,
      receivingToken: "0x2A335a50Be85975FAAfAdb62D0384878b72C1F65",
      royalty: carddescription.hash.royalty,
      royaltyReceiver: carddescription.address,
      totalSupply: 1,
    };
    var offerType = [
      "tuple(uint256 offerId, uint256 assetId, uint256 tokenId, address nftContract, address buyer, address seller, address beneficiary, uint256 maxAmount, uint256 startPrice, uint256 endPrice, uint256 startTimestamp, uint256 endTimestamp, address receivingToken, uint16 royalty, address royaltyReceiver, uint256 totalSupply)",
      "address",
      "uint256",
    ];

    var encodedData = ethers.utils.defaultAbiCoder.encode(offerType, [
      hash,
      add.toLowerCase(),
      4,
    ]);
    const token23 = ethers.utils.keccak256(encodedData);
    const dd = res.toLowerCase();

    pikaContract.methods
      .approve(add, web3.utils.toWei(amount))
      .send({ from: res.toLowerCase() })
      .once("transactionHash", function (hash) {})
      .once("receipt", function (receipt) {})
      .on("confirmation", function (confNumber, receipt) {})
      .on("error", function (error) {
        setisBiding(false);
        handleClose();
      })
      .then((res2) => {
        web3.eth.personal
          .sign(token23, dd)
          .then(async (res1) => {
            var data = {
              buyer: res.toLowerCase(),
              amount: web3.utils.toWei(amount),
              signature: res1,
              hash: hash,
            };
            const query = new Moralis.Query("BiddingNFT");
            query.equalTo("owner", carddescription.address);
            query.equalTo("tokenid", carddescription.tokenid);
            var queryResults = await query.find();
            if (queryResults.length !== 0) {
              queryResults[0].attributes.bid.push(data);
              queryResults[0].save();
            } else {
              const lazyMintNFT = Moralis.Object.extend("BiddingNFT");
              const gameScore = new lazyMintNFT();
              gameScore.set("tokenid", carddescription.tokenid);
              gameScore.set("owner", carddescription.address);
              gameScore.set("bid", [data]);
              await gameScore.save();
            }
            setisBiding(false);
            handleClose();
          })
          .catch((err) => {
            setisBiding(false);
            handleClose();
          });
      });
  };
  return (
    <div className="d-flex flex-column w-100 ">
      <Modal
        show={showBid}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="scale-in-center"
        style={{ borderRadius: "8px" }}
      >
        <Modal.Header className="bidrow" closeButton>
          <Modal.Title className="">Place a Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isBiding ? (
            <>
              {" "}
              <div
                className="d-flex  my-4"
                width="100%"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  height: "300px",
                  justifyContent: "center",
                }}
              >
                <div className="mb-2">Placing your Bid . . .</div>
                <BarWave />
              </div>
            </>
          ) : (
            <>
              {" "}
              {/* <div className="d-flex align-items-center">
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
                    {carddescription.owner}
                  </Heading1>
                </div>
              </div> */}
              <div className=" mx-3 my-3">
                <Dynamic_background_div
                  width="100%"
                  height="200px"
                  backgroundColor="transparent"
                  backgroundRepeat="no-repeat"
                  backgroundSize="contain"
                  position="relative"
                  backgroundPosition="center"
                  setimage={carddescription.nft}
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
                  {carddescription.name}
                </Heading1>
              </div>
              <div className="d-flex">
                <input
                  id="amount1"
                  type={Number}
                  onChange={handleAmountChange}
                  placeholder="Enter your bid"
                  className="mx-3 bid_input"
                />
                <div className="mx-3 my-2">PIKA</div>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!isBiding && (
            <>
              <Button variant="primary" onClick={Save}>
                Place BID
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>

      {/* <<<<<<<<<<<<<< */}
    </div>
  );
}

export default BidModal;
