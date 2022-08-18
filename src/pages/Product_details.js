import { React, useState, useEffect } from "react";

import "../components/Product_details/Product_details.css";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Heading2 from "../reusableComponents/Headings/Heading2";
import Heading1 from "../reusableComponents/Headings/Heading1";
import Styled_text from "../reusableComponents/styled_text/Styled_text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pika from "../Assets/pika.png";
import Eth from "../Assets/ETH.png";
import {
  faArrowLeft,
  faExpandAlt,
  faEye,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import Footer from "./Footer";
import Comments from "../components/Product_details/Comments";
import Dynamic_background_div from "../reusableComponents/Dynamic_background_div/Dynamic_background_div";
import { useHistory } from "react-router";
import Checkout from "./Checkout";
import CompleteCheckout from "./CompleteCheckout";
import BidModal from "./BidModal";
import SaleModal from "./SaleModal";
import { Moralis } from "moralis";
import Heart from "../reusableComponents/Heart/Heart";
import ProductAccordion from "./ProductAccordion";

import { Image } from "react-bootstrap";

Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function Product_details() {
  const [bidItems, setbidItems] = useState([]);
  const [price100, setprice100] = useState();
  const [HighestBid, setHighestBid] = useState("0");
  async function biddingFunction() {
    const web3 = await Moralis.Web3.enableWeb3();
    var res = Moralis.User.current().attributes.ethAddress;
    if (res) {
      const query2 = new Moralis.Query("BiddingNFT");
      query2.equalTo("tokenid", carddescription.tokenid);
      var biddingItems = await query2.find();
      if (biddingItems.length !== 0) {
        setbidItems(biddingItems[0].attributes.bid);
        var highest = 0;
        biddingItems[0].attributes.bid.forEach((bid) => {
          var a = parseFloat(web3.utils.fromWei(bid.amount.toString()));
          var b = parseFloat(web3.utils.fromWei(highest.toString()));

          if (a > b) {
            console.log("1111", bid.amount, HighestBid);
            highest = bid.amount;
          }
        });

        setHighestBid(web3.utils.fromWei(highest.toString()));
      }
    }
  }
  const [address11, setAddress11] = useState();

  async function views11() {
    const web3 = await Moralis.Web3.enableWeb3();
    setprice100(web3.utils.fromWei(carddescription.price));
    var address22 = Moralis.User.current().attributes.ethAddress;

    const query1 = new Moralis.Query("Views");
    query1.equalTo("tokenid", carddescription.tokenid);
    var resultOfViews;
    if (address22) {
      query1.containedIn("addresses", [address22.toLowerCase()]);
      resultOfViews = await query1.find();
    } else {
      resultOfViews = await query1.find();
    }

    if (resultOfViews.length == 0) {
      const query2 = new Moralis.Query("Views");
      query2.equalTo("tokenid", carddescription.tokenid);
      var resultOfViews2 = await query2.find();
      if (resultOfViews2.length == 0) {
        const favorites = Moralis.Object.extend("Views");
        // Create a new instance of that class.
        const gameScore = new favorites();
        gameScore.set("tokenid", carddescription.tokenid);
        gameScore.set("addresses", [address22.toLowerCase()]);
        gameScore.set("count", 1);
        gameScore.save();
        setviewCount(1);
      } else {
        resultOfViews2[0].attributes.addresses.push(address22.toLowerCase());
        var c = resultOfViews2[0].attributes.count;
        c = c + 1;
        resultOfViews2[0].set("count", c);
        resultOfViews2[0].save();
        setviewCount(c);
      }
    } else {
      setviewCount(resultOfViews[0].attributes.count);
    }
  }

  const [favCount, setfavCount] = useState();
  const [viewCount, setviewCount] = useState();
  const [profilepic, setprofilepic] = useState();
  const [ownerName, setownerName] = useState();
  useEffect(() => {
    var res = Moralis.User.current().attributes.ethAddress;
    if (res) {
      setAddress11(res.toLowerCase());
    } else {
      setAddress11(carddescription.address);
    }
    const query = new Moralis.Query("Favorites");
    query.equalTo("tokenid", carddescription.tokenid);
    query.find().then((queryResults) => {
      if (queryResults.length != 0) {
        console.log("888888888");
        setfavCount(queryResults[0].attributes.count);
      } else {
        setfavCount(0);
      }
    });
    const query1 = new Moralis.Query("Profile");

    query1.equalTo("address", carddescription.address);
    query1.find().then((queryResults) => {
      if (queryResults.length != 0) {
        console.log("888888888");
        setprofilepic(queryResults[0].attributes.profile);
        setownerName(queryResults[0].attributes.fullName);
      }
    });

    views11();
    biddingFunction();
  }, []);
  const location = useLocation();
  const [carddescription, setcarddescription] = useState(
    location.state.carddescription
  );
  // const carddescription = location.state.carddescription;

  console.log(carddescription);
  console.log(carddescription.sellable);
  const [Show, setShow] = useState(false);
  const [showBid, setshowBid] = useState(false);
  const [showSale, setshowSale] = useState(false);
  const [Favorites1, setFavorites1] = useState();

  const history = useHistory();
  const handleShowCompleteCheckOut = () => setShowCompleteCheckOut(true);
  const [ShowCompleteCheckOut, setShowCompleteCheckOut] = useState(false);
  const handleShow = () => setShow(true);
  const handleShowbid = () => setshowBid(true);
  const handleShowSale = () => setshowSale(true);
  const PD_title = carddescription.name;
  const PD_bg_image =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a837a0e-fe1c-4e50-92e2-c8b7c6bd1c1c/dc98zlm-56394b76-f36b-4f1e-962b-1ea44d9a591c.jpg/v1/fill/w_824,h_969,q_70,strp/rachael__patreon_reward__by_arven92_dc98zlm-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA1OCIsInBhdGgiOiJcL2ZcLzVhODM3YTBlLWZlMWMtNGU1MC05MmUyLWM4YjdjNmJkMWMxY1wvZGM5OHpsbS01NjM5NGI3Ni1mMzZiLTRmMWUtOTYyYi0xZWE0NGQ5YTU5MWMuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2i-VEPrSIEYufYmw3WMJYSokrSHrII9f2CQXNbYJ9BU";

  async function handleCancelSale() {
    const web3 = await Moralis.Web3.enableWeb3();

    const MARKETPLACE_CONTRACT_ADDRESS =
      "0xE4290eB4769954F0420B3F6294d75fa80c0E9a1d";
    var Kraft_MarketPlace = [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "allowed",
            type: "bool",
          },
        ],
        name: "AllowedTokenSet",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "beneficiary",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "platformFee",
            type: "uint256",
          },
        ],
        name: "FeeUpdated",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "feeless",
            type: "bool",
          },
        ],
        name: "FeelessTokenSet",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "OfferCanceled",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "buyer",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "OfferRedeemed",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "OfferSoldOut",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "bytes32",
            name: "previousAdminRole",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "bytes32",
            name: "newAdminRole",
            type: "bytes32",
          },
        ],
        name: "RoleAdminChanged",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        name: "RoleGranted",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            indexed: true,
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "sender",
            type: "address",
          },
        ],
        name: "RoleRevoked",
        type: "event",
      },
      {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "allowedTokens",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "beneficiary",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_id",
            type: "uint256",
          },
        ],
        name: "cancelOffer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "feelessTokens",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
        ],
        name: "getRoleAdmin",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "getRoleMember",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
        ],
        name: "getRoleMemberCount",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "hasRole",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_nftContract",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "_allowedTokens",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "_feelessTokens",
            type: "address[]",
          },
          {
            internalType: "address",
            name: "_beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_fee",
            type: "uint256",
          },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        name: "maxOfferAmounts",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "platformFee",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: "uint256",
                name: "offerId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "assetId",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "nftContract",
                type: "address",
              },
              {
                internalType: "address",
                name: "buyer",
                type: "address",
              },
              {
                internalType: "address",
                name: "seller",
                type: "address",
              },
              {
                internalType: "address",
                name: "beneficiary",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "maxAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endPrice",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startTimestamp",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endTimestamp",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "receivingToken",
                type: "address",
              },
              {
                internalType: "uint16",
                name: "royalty",
                type: "uint16",
              },
              {
                internalType: "address",
                name: "royaltyReceiver",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "totalSupply",
                type: "uint256",
              },
            ],
            internalType: "struct Offer",
            name: "_offer",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_signature",
            type: "bytes",
          },
        ],
        name: "redeemOffer",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "renounceRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes32",
            name: "role",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowed",
            type: "bool",
          },
        ],
        name: "setAllowedToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "bool",
            name: "feeless",
            type: "bool",
          },
        ],
        name: "setFeelessToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "theKraftNFT",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_beneficiary",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_platformFee",
            type: "uint256",
          },
        ],
        name: "updateFee",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const marketplaceContract = new web3.eth.Contract(
      Kraft_MarketPlace,
      MARKETPLACE_CONTRACT_ADDRESS
    );
    var res = Moralis.User.current().attributes.ethAddress;
    if (res) {
      marketplaceContract.methods
        .cancelOffer(carddescription.hash.offerId)
        .send({ from: res.toLowerCase() })
        .then((res1) => {
          const query1 = new Moralis.Query("LazyMintNFT");
          query1.equalTo("tokenid", carddescription.tokenid);
          query1.find().then((queryResults1) => {
            queryResults1[0].set("sellable", false);
            queryResults1[0].save();
          });
        });
    }
  }

  return (
    <div className=" PD-Body">
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className=""
          style={{ color: "blue" }}
        />
        <div></div>
        <Heading1
          size="15px"
          SMsize="20"
          weight="700"
          marginBottom="10px"
          SMmarginBottom="10px"
          color="blue"
          JFcontent="left"
          className=""
          style={{ marginTop: "10px", paddingLeft: "10px", cursor: "pointer" }}
          onClick={() => {
            history.goBack();
          }}
        >
          Back to gallery
        </Heading1>
      </div>

      <div class="d-flex w-100 row  mx-auto mt-4 box ">
        <div className="col-lg-3 col-md-12 col-s-12  mx-auto mb-4 not_box">
          <div className="d-flex w-100 flex-column">
            <Heading1
              size="30px"
              SMsize="30"
              weight="700"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="black"
              JFcontent="left"
              className=""
              style={{ marginTop: "60px" }}
              onClick={() => {
                history.push("./ImageDetails");
              }}
              onClick={() => {
                history.push("./ImageDetails");
              }}
            >
              {PD_title}
            </Heading1>
            <Heading1
              size="18px"
              SMsize="20"
              weight="700"
              marginBottom="10px"
              SMmarginBottom="10px"
              color="Black"
              JFcontent="left"
              className=""
              style={{ marginTop: "0px" }}
            ></Heading1>
          </div>

          <div className="d-flex flex-column w-100">
            <Heading1
              size="16px"
              SMsize="18"
              weight="700"
              marginBottom="0px"
              SMmarginBottom="0px"
              color=" #999999;
"
              JFcontent="left"
              className=""
              style={{ marginTop: "30px", flexDirection: "column" }}
            >
              {/* <Heading1
                size="16px"
                SMsize="18"onClick={Save()}
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color=" #999999;
    "
                JFcontent="left"
                className=""
                style={{}}
              >
                Analog and digital mixed media
              </Heading1> */}
            </Heading1>
            <Heading1
              size="18px"
              SMsize="20"
              weight="700"
              marginBottom="20px"
              SMmarginBottom="20px"
              color="black"
              JFcontent="left"
              className=""
              style={{ marginTop: "30px", marginRight: "3px" }}
            ></Heading1>
          </div>

          <div className=" d-flex flex-wrap  align-items-center ">
            <div className="d-flex align-items-center  ">
              <Heart
                setfavCount={setfavCount}
                favCount={favCount}
                carddescription={carddescription}
              />

              <Heading1
                size="20px"
                SMsize="20"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ marginTop: "0px", marginLeft: "10px" }}
              >
                {favCount}
                <Heading1
                  size="15px"
                  SMsize="15"
                  weight="700"
                  marginBottom="0px"
                  SMmarginBottom="0px"
                  color="#999999;

"
                  JFcontent="left"
                  className="d-flex align-items-center"
                  style={{ marginLeft: "5px" }}
                >
                  Favorites
                </Heading1>
              </Heading1>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faEye}
                className=""
                style={{
                  color: "#2A1971",
                  height: "18px",
                  width: "18px",
                  marginLeft: "15px",
                }}
              />
              <Heading1
                size="20px"
                SMsize="20"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ marginTop: "0px", marginLeft: "10px" }}
              >
                {viewCount}
                <Heading1
                  size="15px"
                  SMsize="15"
                  weight="700"
                  marginBottom="0px"
                  SMmarginBottom="0px"
                  color="#999999;

"
                  JFcontent="left"
                  className="d-flex align-items-center"
                  style={{ marginTop: "6px", marginLeft: "6px" }}
                >
                  Views
                </Heading1>
              </Heading1>
            </div>
          </div>
          <div className="d-flex  w-100 align-items-center mt-4">
            <FontAwesomeIcon
              icon={faTags}
              className=""
              style={{ color: "#2A1971" }}
            />
            <Heading1
              size="18px"
              SMsize="20"
              weight="700"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="Black"
              JFcontent="left"
              className=""
              style={{ marginTop: "0px", marginLeft: "5px" }}
            >
              Price : {price100}
            </Heading1>
          </div>

          <div className="d-flex  w-100 align-items-center mt-3">
            <FontAwesomeIcon
              icon={faGavel}
              className=""
              style={{ color: "#2A1971" }}
            />
            <Heading1
              size="18px"
              SMsize="20"
              weight="700"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="Black"
              JFcontent="left"
              className=""
              style={{ marginTop: "0px", marginLeft: "5px" }}
            >
              Highest Bid :
              <span className=" mx-1">
                {HighestBid === "0" ? (
                  "No Bids"
                ) : (
                  <>
                    {" "}
                    {HighestBid} {"\u00A0"}{" "}
                    {carddescription.currency == "Pika" ? (
                      <Image src={pika} width="20px" />
                    ) : (
                      <Image src={Eth} width="15px" />
                    )}
                  </>
                )}
              </span>
            </Heading1>
          </div>
          {/* {web3.eth.getAccounts().then(res => {
             if (carddescription.address === res[0].toLowerCase()) {
            }
            else {
            }
          })} */}

          {carddescription.address === address11
            ? [
                carddescription.sellable === false ? (
                  <div className="mt-3">
                    <ButtonStyled
                      color="white"
                      border="2px solid #5D34FF"
                      size="18px !important"
                      weight="700"
                      backgroundColor="#5D34FF"
                      width=""
                      SMsize=""
                      SMpaddingInline=""
                      SMpaddingBlock=""
                      style={{
                        borderRadius: "5px",
                        paddingInline: "41px",
                        paddingBlock: "8px",
                        marginTop: "020px",
                      }}
                      className=""
                      onClick={() => {
                        handleShowSale();
                      }}
                    >
                      Sell
                    </ButtonStyled>
                  </div>
                ) : (
                  <div className="mt-3">
                    <ButtonStyled
                      color="white"
                      border="2px solid #5D34FF"
                      size="18px !important"
                      weight="700"
                      backgroundColor="#5D34FF"
                      width=""
                      SMsize=""
                      SMpaddingInline=""
                      SMpaddingBlock=""
                      style={{
                        borderRadius: "5px",
                        paddingInline: "41px",
                        paddingBlock: "8px",
                        marginTop: "020px",
                      }}
                      className=""
                      onClick={() => {
                        handleCancelSale();
                      }}
                    >
                      cancel Listing
                    </ButtonStyled>
                  </div>
                ),
              ]
            : [
                carddescription.sellable === true ? (
                  <div className="mt-3">
                    <ButtonStyled
                      color="white"
                      border="2px solid #5D34FF"
                      size="18px !important"
                      weight="700"
                      backgroundColor="#5D34FF"
                      width=""
                      SMsize=""
                      SMpaddingInline=""
                      SMpaddingBlock=""
                      style={{
                        borderRadius: "5px",
                        paddingInline: "41px",
                        paddingBlock: "8px",
                        marginTop: "020px",
                      }}
                      className=""
                      onClick={() => {
                        handleShow();
                      }}
                    >
                      Buy Now
                    </ButtonStyled>

                    <ButtonStyled
                      color="#5D34FF"
                      border="2px solid #5D34FF"
                      size="18px !important"
                      weight="700"
                      backgroundColor="transparent"
                      width=""
                      SMsize=""
                      SMpaddingInline=""
                      SMpaddingBlock=""
                      style={{
                        borderRadius: "5px",
                        paddingInline: "41px",
                        paddingBlock: "8px",
                        marginTop: "020px",
                        marginInline: "10px",
                      }}
                      className=""
                      onClick={() => {
                        handleShowbid();
                      }}
                    >
                      Bid
                    </ButtonStyled>
                  </div>
                ) : (
                  <div className="mt-3">
                    <ButtonStyled
                      color="#5D34FF"
                      border="2px solid #5D34FF"
                      size="18px !important"
                      weight="700"
                      backgroundColor="transparent"
                      width=""
                      SMsize=""
                      SMpaddingInline=""
                      SMpaddingBlock=""
                      style={{
                        borderRadius: "5px",
                        paddingInline: "41px",
                        paddingBlock: "8px",
                        marginTop: "020px",
                        marginInline: "10px",
                      }}
                      className=""
                      onClick={() => {
                        handleShowbid();
                      }}
                    >
                      Bid
                    </ButtonStyled>
                  </div>
                ),
              ]}
        </div>

        <div className=" col-lg-5 col-md-12 col-s-12  mx-auto ">
          <Dynamic_background_div
            width="100%"
            height="460px"
            backgroundColor="transparent"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            position="relative"
            backgroundPosition="center"
            setimage={carddescription.nft}
            className="PD-image d-flex flex-row w-100 justify-content-end "
          >
            <FontAwesomeIcon
              icon={faExpandAlt}
              className="grow iconcolor"
              style={{ margin: "10px", width: "20px", height: "20px" }}
            />
          </Dynamic_background_div>
        </div>

        <div className=" col-lg-4 col-md-12 col-s-12  mx-auto not_box">
          <Heading1
            size="18px"
            SMsize="20"
            weight="700"
            marginBottom="5px"
            SMmarginBottom="5px"
            color="Black"
            JFcontent="left"
            className=""
            style={{ marginTop: "20px", marginLeft: "5px" }}
          >
            Details
          </Heading1>

          <div>
            <div className="CC-Row1 ">
              <div className="w-100">
                <div className="d-flex align-items-center">
                  <img
                    className="Profile-circle me-2"
                    src={profilepic}
                    style={{ width: "30px" }}
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
                      style={{ marginLeft: "5px", marginBlock: "22px" }}
                    >
                      {ownerName != undefined && ownerName}
                    </Heading1>
                  </div>
                </div>
              </div>
              {/* 
              <div className="w-100">
                <div className="d-flex ">
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
                      style={{ marginLeft: "10px", marginBlock: "22px" }}
                    >
                      Collection
                    </Heading1>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <ProductAccordion carddescription={carddescription} />
        </div>
      </div>
      <Checkout
        Show={Show}
        carddescription={carddescription}
        setShow={setShow}
        handleShowCompleteCheckOut={handleShowCompleteCheckOut}
      />

      {/* <CompleteCheckout
        carddescription={carddescription}
        ShowCompleteCheckOut={ShowCompleteCheckOut}
        setShowCompleteCheckOut={setShowCompleteCheckOut}
      /> */}

      <BidModal
        showBid={showBid}
        setshowBid={setshowBid}
        carddescription={carddescription}
      />
      <SaleModal
        showBid={showSale}
        setshowBid={setshowSale}
        carddescription={carddescription}
      />
    </div>
  );
}

export default Product_details;
