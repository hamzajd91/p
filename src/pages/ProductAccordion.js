import { React, useState, useEffect } from "react";
import Heading1 from "../reusableComponents/Headings/Heading1";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import close from "../Assets/cancel.png";
import Fade from "react-reveal/Fade";
import Table from "@material-ui/core/Table";
import { Image, Modal } from "react-bootstrap";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";

import BarWave from "react-cssfx-loading/lib/Hypnosis";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import { Moralis } from "moralis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
const NFT_Details = [];

var Properties = [];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles({
  table: {
    minWidth: 150,
  },

  elevation1: {
    boxShadow: "0 0 15pt 0.5pt #D3D3D3",
    borderRadius: "20px",
  },
});
function ProductAccordion({ carddescription }) {
  const [isloggingin, setisloggingin] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [row12, setrow12] = useState([]);
  const handleShow = () => setShow(true);
  const [address100, setaddress100] = useState("");
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

  const [bidItems, setbidItems] = useState([]);
  useEffect(() => {
    biddingFunction();
  }, []);
  async function biddingFunction() {
    var res = Moralis.User.current().attributes.ethAddress;
    setaddress100(res.toLowerCase());
    if (res && res.toLowerCase() === carddescription.address) {
      const query2 = new Moralis.Query("BiddingNFT");
      query2.equalTo("owner", carddescription.address);
      query2.equalTo("tokenid", carddescription.tokenid);
      var biddingItems = await query2.find();
      if (biddingItems.length !== 0) {
        setbidItems(biddingItems[0].attributes.bid);
      }
    }
  }
  const classes = useStyles();

  function createData(Price, Expiration, From) {
    return { Price, Expiration, From };
  }

  const rows = [
    bidItems.map((Offer) => {
      createData(Offer.amount, "23.10.2022", Offer.buyer);
    }),
  ];
  Properties = carddescription.properties;
  var timestamp = parseInt(carddescription.deadline) * 1000;
  var date = new Date(timestamp);
  console.log(Properties);
  NFT_Details[0] = {
    id: 1,
    title: "Token ID",
    value: carddescription.tokenid,
  };
  NFT_Details[1] = {
    id: 2,
    title: "Date Posted",
    value: date.toLocaleDateString(),
  };
  NFT_Details[2] = {
    id: 3,
    title: "Token Standard",
    value: "ERC1155",
  };
  NFT_Details[3] = {
    id: 4,
    title: "Blockchain",
    value: "ETH",
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Save = async (row) => {
    const web3 = await Moralis.Web3.enableWeb3();
    const marketplaceContract = new web3.eth.Contract(
      Kraft_MarketPlace,
      MARKETPLACE_CONTRACT_ADDRESS
    );
    // var testing = await marketplaceContract.methods
    //   .allowedTokens("0x2A335a50Be85975FAAfAdb62D0384878b72C1F65")
    //   .call({});

    marketplaceContract.methods
      .redeemOffer(row.hash, carddescription.amount, row.signature)
      .send({ from: carddescription.address })
      .then((res1) => {
        const query1 = new Moralis.Query("LazyMintNFT");
        query1.equalTo("tokenid", carddescription.tokenid);
        query1.find().then((queryResults1) => {
          queryResults1[0].attributes.addresses.push(carddescription.address);
          queryResults1[0].set("address", row.buyer);
          if (queryResults1[0].attributes.sellable !== undefined) {
            queryResults1[0].set("sellable", false);
          }
          queryResults1[0].save();

          const query2 = new Moralis.Query("TopSellers");
          query2.equalTo("address", carddescription.address);
          query2.find().then((queryResults1) => {
            console.log(queryResults1);
            if (queryResults1.length == 0) {
              const favorites = Moralis.Object.extend("TopSellers");
              const gameScore = new favorites();
              gameScore.set("address", carddescription.address);
              gameScore.set("coins", web3.utils.fromWei(carddescription.price));
              gameScore.save();
            } else {
              var c = queryResults1[0].attributes.coins;
              console.log(c);
              c =
                parseFloat(c) +
                parseFloat(web3.utils.fromWei(carddescription.price));
              console.log(c);
              queryResults1[0].set("address", carddescription.address);
              queryResults1[0].set("coins", c.toString());

              queryResults1[0].save();
            }
          });
        });
        const query2 = new Moralis.Query("BiddingNFT");
        query2.equalTo("owner", carddescription.address);
        query2.equalTo("tokenid", carddescription.tokenid);
        query2.first({ useMasterKey: true }).then((queryResults2) => {
          if (queryResults2 !== undefined) {
            queryResults2.destroy(null, { useMasterKey: true }).then(() => {
              console.log("object destroyed");
            });
          }
        });
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Properties" {...a11yProps(1)} />
          <Tab label="Details" {...a11yProps(2)} />
          {address100 === carddescription.address ? (
            <Tab label="Offers" {...a11yProps(3)} />
          ) : (
            console.log("")
          )}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <Fade bottom>
            <Heading1
              size="18px"
              SMsize="18px"
              weight="500"
              marginBottom="0px"
              SMmarginBottom="0px"
              color=" #999999"
              JFcontent="left"
              className=""
              style={{ lineHeight: "1.3" }}
            >
              {carddescription.description}
            </Heading1>
          </Fade>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="PropertiesDiv">
          {Properties.map((data) => {
            return (
              <div className="d-flex flex-wrap m-1" style={{ float: "left" }}>
                <div
                  className="shape-outer"
                  style={{
                    width: "170px",
                    height: "90px",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    className="d-flex shape-inner"
                    style={{
                      width: "165px",
                      height: "85px",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      className="d-flex flex-column justify-content-between"
                      style={{ width: "70%", paddingInline: "5px" }}
                    >
                      <div>
                        {" "}
                        <Heading1
                          size="16px"
                          SMsize="18"
                          weight="600"
                          marginBottom="10px"
                          SMmarginBottom="10px"
                          color=" #999999"
                          JFcontent="left"
                          className=""
                          style={{}}
                        >
                          {data.propertyname}
                        </Heading1>
                      </div>
                      <hr className="m-0" />
                      <div>
                        <Heading1
                          size="16px"
                          SMsize="18"
                          weight="500"
                          marginBottom="10px"
                          SMmarginBottom="10px"
                          color=" #999999"
                          JFcontent="left"
                          className=""
                          style={{}}
                        >
                          {data.property}
                        </Heading1>
                      </div>
                    </div>

                    <div
                      className="d-flex justify-content-center align-items-center "
                      style={{ width: "30%" }}
                    >
                      <Heading1
                        size="16px"
                        SMsize="18"
                        weight="600"
                        marginBottom="10px"
                        SMmarginBottom="10px"
                        color=" #999999"
                        JFcontent="center"
                        className=""
                        style={{}}
                      ></Heading1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="d-flex flex-column">
          {NFT_Details.map((data) => {
            return (
              <div className="detailsRow">
                <div style={{ minWidth: "150px" }}>
                  <Heading1
                    size="16px"
                    SMsize="18"
                    weight="600"
                    marginBottom="10px"
                    SMmarginBottom="10px"
                    color=" #999999"
                    JFcontent="left"
                    className=""
                    style={{}}
                  >
                    {data.title}
                  </Heading1>
                </div>
                <div style={{ overflow: "hidden" }}>
                  <Heading1
                    size="16px"
                    SMsize="18"
                    weight="500"
                    marginBottom="10px"
                    SMmarginBottom="10px"
                    color=" #999999"
                    JFcontent="left"
                    className=""
                    style={{}}
                  >
                    {data.value}
                  </Heading1>
                </div>
              </div>
            );
          })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="d-flex flex-column">
          {bidItems.length !== 0 && (
            <TableContainer className={classes.elevation1} component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bidItems.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.amount / 1000000000000000000}
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {row.buyer}
                      </TableCell>
                      <TableCell align="right">
                        {
                          <div
                            className="d-flex"
                            style={{ flexDirection: "column" }}
                          >
                            {/* <ButtonStyled
                            className="mb-2"
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
                              paddingInline: "10px",
                            }}
                          >
                            Counter
                          </ButtonStyled> */}
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
                              onClick={() => {
                                setrow12(row);
                                console.log(row);
                                handleShow();
                              }}
                              style={{
                                borderRadius: "5px",
                                paddingInline: "10px",
                              }}
                            >
                              Accept
                            </ButtonStyled>
                          </div>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {bidItems.length === 0 && (
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "0 0 15pt 0.5pt #D3D3D3",
                borderRadius: "20px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              "No Offers Yet!"
            </div>
          )}
        </div>
      </TabPanel>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="scale-in-center"
      >
        <Modal.Header>
          <div className="modal_heading">Offer Confirmation Modal</div>

          <Image src={close} width="30px" onClick={() => handleClose()} />
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
                  Price :{" "}
                  {row12.length !== 0 &&
                    row12.hash.startPrice / 1000000000000000000}
                </div>
              </div>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 my-auto px-4 py-3 d-flex">
                  Royality : {row12.length !== 0 && row12.hash.royalty}
                </div>
              </div>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 my-auto px-4 py-3 d-flex">
                  Royality Reciever :{" "}
                  {row12.length !== 0 && row12.hash.royaltyReceiver}
                </div>
              </div>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 my-auto px-4 py-3 d-flex">
                  Owner : {row12.length !== 0 && row12.hash.seller}
                </div>
              </div>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 my-auto px-4 py-3 d-flex">
                  Buyer : {row12.length !== 0 && row12.hash.buyer}
                </div>
              </div>
              <div className="w-100 d-flex flex-column">
                <div className="w-100 my-auto px-4 py-3 d-flex">
                  By Accepting this I confirm the following transaction
                  <ButtonStyled
                    color="white"
                    border="2px solid #5D34FF"
                    onClick={() => {
                      Save(row12);
                    }}
                    size="18px !important"
                    weight="700"
                    backgroundColor="#5D34FF"
                    style={{
                      borderRadius: "5px",
                      paddingInline: "10px",
                    }}
                  >
                    {" "}
                    Accept
                  </ButtonStyled>
                </div>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </Box>
  );
}

export default ProductAccordion;
