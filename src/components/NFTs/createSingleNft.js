import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Moralis } from "moralis";
import { useFormik, validateYupSchema } from "formik";
import * as yup from "yup";

import Select from "@mui/material/Select";
import BarWave from "react-cssfx-loading/lib/Hypnosis";
import DialogContent from "@material-ui/core/DialogContent";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Collected from "../../Assets/collected.png";
import InputBase from "@material-ui/core/InputBase";
import Input from "@material-ui/core/Input";
import Created from "../../Assets/created.png";
import Favorited from "../../Assets/favorited.png";
import Myprofile from "../../Assets/myprofile.png";
import addd from "../../Assets/add.png";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@mui/material/Menu";

import uploadimg from "../../Assets/uploadimg.svg";
import avatar from "../../Assets/avatar.svg";
import pika from "../../Assets/pika.svg";
import pikalogo from "../../Assets/pikalogo.svg";
import bit from "../../Assets/bit.svg";
import bitt from "../../Assets/bitt.svg";
import eth from "../../Assets/eth.svg";
import ethlogo from "../../Assets/ethloog.svg";
import link from "../../Assets/link.svg";
import twiter from "../../Assets/twiter.svg";
import insta from "../../Assets/insta.svg";
import discord from "../../Assets/discord.svg";
import add from "../../Assets/add.svg";
import del from "../../Assets/delete.svg";
import addtext from "../../Assets/addtext.svg";

import imgblank from "../../Assets/imgblank.svg";
import { Button, Image } from "react-bootstrap";
import { ethers } from "ethers";

import TextField from "@material-ui/core/TextField";
import Heading1 from "../../reusableComponents/Headings/Heading1";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Home_Slider from "../Home_Slider/Home_Slider";
import "../../reusableStyles/SearchBox.css";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Modal } from "react-bootstrap";

import Reference from "yup/lib/Reference";
//   ["uint256", "uint256", "uint256", "uint256", "address"],
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
var count = 1;

const Heading3 = styled.h3`
  font-size: 18px;
  font-weight: bolder;
`;
const Heading4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #aaaaaa;
`;
const change = () => {
  const para = document.createElement("input");
  para.style.borderTop = "0";
  para.style.borderLeft = "0";
  para.style.borderRight = "0";
  para.style.marginTop = "5px";
  para.style.marginBottom = "5px";
  para.style.marginLeft = "46px";
  para.style.marginRight = "116px";
  para.style.padding = "5px 5px";
  para.style.borderBottom = "1px solid #010101";
  para.placeholder = "e.g. Size";
  const para1 = document.createElement("input");
  para1.style.borderTop = "0";
  para1.style.borderLeft = "0";
  para1.style.borderRight = "0";
  para1.style.marginTop = "5px";
  para1.style.marginBottom = "5px";
  para1.style.marginLeft = "50px";
  para1.style.marginRight = "116px";
  para1.style.padding = "5px 5px";
  para1.style.borderBottom = "1px solid #010101";
  para1.placeholder = "e.g. M";
  var element = document.getElementById("div1");
  element.appendChild(para);
  element.appendChild(para1);
};

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: "0 0 0 0.07rem grey",
    width: "30vw",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);
const drawerWidth = 216;

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "5D34FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "5D34FF",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "D3D3D3",
      },
      "&:hover fieldset": {
        borderColor: "5D34FF",
        boxShadow: "0 0 10pt 0.5pt #D3D3D3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "5D34FF",
      },
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "absolute",
  },
  root1: {
    display: "flex",
    flexWrap: "wrap",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  margin: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    position: "absolute",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(15),
    backgroundColor: "#f9f9f9",

    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));
function Favorite() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [isMinting, setisMinting] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [inputList, setInputList] = useState([
    { propertyname: "", property: "" },
  ]);

  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  const [address121, setaddress121] = useState([]);
  const [checkVisibility, setcheckVisibility] = useState("none");
  useEffect(() => {
    data111();
  }, []);

  async function data111() {
    var res = await Moralis.User.current().attributes.ethAddress;
    const query = new Moralis.Query("Collections");

    if (res) {
      query.equalTo("address", res.toLowerCase());
      var queryResults = await query.find();
      if (queryResults != 0) {
        var result = [];
        for (var i = 0; i < queryResults.length; i++) {
          result.push(queryResults[i]);
        }
      }
      setaddress121(result);
    }
    var profile;
    var res = await Moralis.User.current().attributes.ethAddress;
    console.log(res);
    if (res) {
      const query2 = new Moralis.Query("Profile");
      query2.equalTo("address", res.toLowerCase());
      profile = await query2.find();
      setIsProfile(profile);
      console.log(profile);
    }
  }

  const [headervalue, setHeadervalue] = useState("This Week");
  const Catagoryoptions = ["This week", "Last Month", "All the time"];
  const [searchVal, setSearchVal] = useState("");
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [currencyToggle, setcurrencyToggle] = useState(true);
  const [currencyMultiplier, setcurrencyMultiplier] = useState(1);
  const [isCollected, setIsCollected] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const handleSidenav = (text) => {
    switch (text) {
      case "Collected":
        history.push("./nfts");
        break;
      case "Created":
        history.push("./create");
        break;
      case "Favorited":
        history.push("./fav");
        break;
      case "My Profile":
        history.push("./profile");
        break;
      default:
        break;
    }
  };
  const FetchImage = (text) => {
    switch (text) {
      case "Collected":
        return <Image src={Collected} />;
        break;
      case "Created":
        return <Image src={Created} />;
        break;
      case "Favorited":
        return <Image src={Favorited} />;
        break;
      case "My Profile":
        return <Image src={Myprofile} />;
        break;
      default:
        break;
    }
    return <InboxIcon />;
  };

  function selectType() {
    var a = document.getElementById("collection").value;
    setcheckVisibility(a);
    if (a === "none") {
      setInputList([{ propertyname: "", property: "" }]);
    } else {
      for (var i = 0; i < address121.length; i++) {
        if (address121[i].id === a) {
          let newArr = [];
          address121[i].attributes.properties.map((prroperty) => {
            let propertyname = prroperty.propertyname; // replace e.target.value with whatever you want to change it to
            let property = prroperty.property;
            newArr.push({ propertyname, property });
          });

          // // copying the old datas array

          setInputList(newArr);
          // setproperties1(address121[i].attributes.properties);
        }
      }
    }
  }

  function uploadImageHandler(event) {
    setEndHook("flex-end");
    setIsDisplayNone("none");
    if (event.target.files.length !== 0) {
      setUploadImage(URL.createObjectURL(event.target.files[0]));
      setfiletype(event.target.files[0].type);
    }
  }

  //flex-end hook
  const [endHook, setEndHook] = useState("center");
  //Display none hook
  const [isDisplayNone, setIsDisplayNone] = useState("");
  //coverImage hook
  const [uploadImage, setUploadImage] = useState("");
  const [filetype, setfiletype] = useState("");
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  const [mint, setmint] = useState("Lazy");
  const Save = async (
    values,

    collection,
    blockchain,
    file,
    deadline
  ) => {
    var web3 = await Moralis.Web3.enableWeb3();

    setisMinting(true);
    var propertyinputcheck = inputList;
    propertyinputcheck.map((property, index) => {
      if (property.propertyname === "" && property.propertyname === "") {
        setInputList(inputList.splice(index, 1));
      }
    });

    if (isProfile.length == 0) {
      setisMinting(false);
      handleShow();
      return;
    }

    //alert("pro1" + pro1 + "pro2" + pro2)
    //alert("old deadline" + deadline)

    var newdate = new Date(deadline).getTime() / 1000;
    //alert("newdeadline" + newdate)
    //alert("maxSupply" + maxSupply)
    // var values = [];
    // alert(checkVisibility);
    // if (checkVisibility === "none") {
    //   var properties = document
    //     .getElementById("div1")
    //     .getElementsByTagName("input");
    //   console.log(properties);
    //   alert("sd");
    //   alert(pro1);
    //   alert(pro2);
    //   alert(properties);

    //   var ele = { [pro1]: pro2 };
    //   values.push(ele);
    //   for (var i = 0; i < properties.length; i++) {
    //     if (i % 2 == 1) {
    //       ele = { [properties[i - 1].value]: properties[i].value };
    //       values.push(ele);
    //     }
    //   }
    // } else {
    //   for (var i = 0; i < properties1.length; i++) {
    //     if (i % 2 == 1) {
    //       ele = { [properties1[i - 1]]: properties1[i] };
    //       values.push(ele);
    //     }
    //   }
    // }
    //alert("category" + personName)
    var categories = [];
    for (const input of personName) {
      categories.push(input);
      //alert(input)
    }
    //alert("properties" + values)

    if (mint === "Mint") {
      //----------------------------------minting-------------
      const nftFile = new Moralis.File("nftFile.jpg", file);
      nftFile.saveIPFS().then((res0) => {
        //alert(res0)
        const nftFilePath = nftFile.ipfs();
        //alert(nftFilePath)
        var res = Moralis.User.current().attributes.ethAddress;
        if (res) {
          var count;
          count = Math.floor(Math.random() * 1000000000000000000 + 1);
          //alert(count)

          const dd = res.toLowerCase();
          var count1 = Math.floor(Math.random() * 1000000000000000000 + 1);
          const token1 = ethers.BigNumber.from(
            ethers.utils.solidityKeccak256(
              ["address", "uint256", "uint256"],
              [res.toLowerCase(), count1.toString(), "4"]
            )
          );

          const metadata = {
            tokenid: token1._hex,
            name: values.Name,
            url: values.URLL,
            description: values.Description,
            price: web3.utils.toWei(values.Price),
            collection: collection,
            category: categories,
            blockchain: blockchain,
            maxSupply: values.MaximumSupply.toString(),
            properties: inputList,
            amount: values.Amount.toString(),
            nft: nftFilePath,
            filetype: filetype,
            address: res.toLowerCase(),
          };

          const nftFileMetadataFile = new Moralis.File("metadata.json", {
            base64: btoa(JSON.stringify(metadata)),
          });
          nftFileMetadataFile.saveIPFS().then((res4) => {
            const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();

            var datecurrent = new Date().getTime() / 1000;

            var add = "0xE4290eB4769954F0420B3F6294d75fa80c0E9a1d";

            var hash = {};
            //--------------------------------------------------------ETH mint------------------------------------------
            if (currency === "ETH") {
              hash = {
                offerId: count.toString(),
                assetId: count1.toString(),
                tokenId: token1._hex,
                nftContract: "0x1736F0251f4c4F36354BA791265cA50204FF2b9f",
                buyer: "0x0000000000000000000000000000000000000000",
                seller: res.toLowerCase(),
                beneficiary: res.toLowerCase(),
                maxAmount: values.Amount.toString(),
                startPrice: web3.utils.toWei(values.Price),
                endPrice: web3.utils.toWei(values.Price),
                startTimestamp: parseInt(datecurrent).toString(),
                endTimestamp: parseInt(newdate).toString(),
                receivingToken: "0x0000000000000000000000000000000000000000",
                royalty: values.Royality * 100,
                royaltyReceiver: res.toLowerCase(),
                totalSupply: values.MaximumSupply.toString(),
              };
            }
            //--------------------------------PIKA MINT-------------------------------
            else {
              hash = {
                offerId: count.toString(),
                assetId: count1.toString(),
                tokenId: token1._hex,
                nftContract: "0x1736F0251f4c4F36354BA791265cA50204FF2b9f",
                buyer: "0x0000000000000000000000000000000000000000",
                seller: res.toLowerCase(),
                beneficiary: res.toLowerCase(),
                maxAmount: values.Amount.toString(),
                startPrice: web3.utils.toWei(values.Price),
                endPrice: web3.utils.toWei(values.Price),
                startTimestamp: parseInt(datecurrent).toString(),
                endTimestamp: parseInt(newdate).toString(),
                receivingToken: "0x2A335a50Be85975FAAfAdb62D0384878b72C1F65",
                royalty: values.Royality * 100,
                royaltyReceiver: res.toLowerCase(),
                totalSupply: values.MaximumSupply.toString(),
              };
            }
            var kraft = [
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "address",
                    name: "account",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  {
                    indexed: false,
                    internalType: "bool",
                    name: "approved",
                    type: "bool",
                  },
                ],
                name: "ApprovalForAll",
                type: "event",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "address",
                    name: "creator",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "uint256",
                    name: "assetId",
                    type: "uint256",
                  },
                  {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                  },
                  {
                    indexed: false,
                    internalType: "uint256",
                    name: "totalSupply",
                    type: "uint256",
                  },
                ],
                name: "Created",
                type: "event",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: false,
                    internalType: "address",
                    name: "marketplace",
                    type: "address",
                  },
                ],
                name: "MarketplaceSet",
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
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    indexed: false,
                    internalType: "uint256[]",
                    name: "ids",
                    type: "uint256[]",
                  },
                  {
                    indexed: false,
                    internalType: "uint256[]",
                    name: "values",
                    type: "uint256[]",
                  },
                ],
                name: "TransferBatch",
                type: "event",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: true,
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                  },
                  {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    indexed: false,
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                  },
                ],
                name: "TransferSingle",
                type: "event",
              },
              {
                anonymous: false,
                inputs: [
                  {
                    indexed: false,
                    internalType: "string",
                    name: "value",
                    type: "string",
                  },
                  {
                    indexed: true,
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                ],
                name: "URI",
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
                    name: "account",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                ],
                name: "balanceOf",
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
                    internalType: "address[]",
                    name: "accounts",
                    type: "address[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "ids",
                    type: "uint256[]",
                  },
                ],
                name: "balanceOfBatch",
                outputs: [
                  {
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "_assetId",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "_totalSupply",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "_beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "uint16",
                    name: "_royalty",
                    type: "uint16",
                  },
                  {
                    internalType: "bytes",
                    name: "_data",
                    type: "bytes",
                  },
                ],
                name: "create",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                ],
                name: "exists",
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
                    internalType: "string",
                    name: "_uri",
                    type: "string",
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
                    name: "account",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                ],
                name: "isApprovedForAll",
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
                name: "marketplace",
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
                    name: "",
                    type: "uint256",
                  },
                ],
                name: "nftData",
                outputs: [
                  {
                    internalType: "uint256",
                    name: "assetId",
                    type: "uint256",
                  },
                  {
                    internalType: "address",
                    name: "creator",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "beneficiary",
                    type: "address",
                  },
                  {
                    internalType: "uint16",
                    name: "royalty",
                    type: "uint16",
                  },
                  {
                    internalType: "string",
                    name: "uri",
                    type: "string",
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
                    internalType: "uint256",
                    name: "_tokenId",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "_salePrice",
                    type: "uint256",
                  },
                ],
                name: "royaltyInfo",
                outputs: [
                  {
                    internalType: "address",
                    name: "receiver",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "royaltyAmount",
                    type: "uint256",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "from",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    internalType: "uint256[]",
                    name: "ids",
                    type: "uint256[]",
                  },
                  {
                    internalType: "uint256[]",
                    name: "amounts",
                    type: "uint256[]",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                name: "safeBatchTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "from",
                    type: "address",
                  },
                  {
                    internalType: "address",
                    name: "to",
                    type: "address",
                  },
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                  },
                  {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes",
                  },
                ],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "operator",
                    type: "address",
                  },
                  {
                    internalType: "bool",
                    name: "approved",
                    type: "bool",
                  },
                ],
                name: "setApprovalForAll",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "string",
                    name: "_uri",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "_id",
                    type: "uint256",
                  },
                ],
                name: "setCustomUri",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function",
              },
              {
                inputs: [
                  {
                    internalType: "address",
                    name: "_marketplace",
                    type: "address",
                  },
                ],
                name: "setMarketplace",
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
                inputs: [
                  {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                  },
                ],
                name: "totalSupply",
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
                    internalType: "string",
                    name: "_newUri",
                    type: "string",
                  },
                ],
                name: "updateBaseURI",
                outputs: [],
                stateMutability: "nonpayable",
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
                name: "uri",
                outputs: [
                  {
                    internalType: "string",
                    name: "",
                    type: "string",
                  },
                ],
                stateMutability: "view",
                type: "function",
              },
            ];
            const TOKEN_CONTRACT_ADDRESS =
              "0x1736F0251f4c4F36354BA791265cA50204FF2b9f";
            const tokenContract = new web3.eth.Contract(
              kraft,
              TOKEN_CONTRACT_ADDRESS
            );
            const receipt = tokenContract.methods
              .create(count1.toString(), 1, res.toLowerCase(), 0, [])
              .send({
                from: res.toLowerCase(),
              })
              .once("transactionHash", function (hash) {})
              .once("receipt", function (receipt) {})
              .on("confirmation", function (confNumber, receipt) {})
              .on("error", function (error) {
                setisMinting(false);
              })
              .then((res11) => {
                const lazyMintNFT = Moralis.Object.extend("LazyMintNFT");
                // Create a new instance of that class.
                const gameScore = new lazyMintNFT();
                gameScore.set("tokenid", token1._hex);
                gameScore.set("hash", hash);
                gameScore.set("currency", currency);
                gameScore.set("address", res.toLowerCase());
                gameScore.set("MetaData", nftFileMetadataFilePath);
                gameScore.set("nft", nftFilePath);
                gameScore.set("filetype", filetype);
                gameScore.set("name", values.Name);
                gameScore.set("description", values.Description);
                gameScore.set("price", web3.utils.toWei(values.Price));
                gameScore.set("url", values.URLL);
                gameScore.set("maxSupply", values.MaximumSupply.toString());
                gameScore.set("sellable", false);
                gameScore.set("collection", collection);
                gameScore.set("category", categories);
                gameScore.set("blockchain", blockchain);
                gameScore.set("properties", inputList);
                gameScore.set("amount", values.Amount.toString());
                gameScore.set("addresses", []);
                gameScore.set("mint", mint);
                gameScore.set("deadline", newdate.toString());
                gameScore.save();
                if (checkVisibility !== "none") {
                  const queryCollection = new Moralis.Query("Collections");
                  queryCollection.equalTo("objectId", collection);
                  queryCollection.find().then((queryResults1) => {
                    queryResults1[0].attributes.NFTs.push(token1._hex);
                    queryResults1[0].save();
                    setisMinting(false);
                    history.push("/create");
                  });
                }
                setisMinting(false);
                history.push("/create");
              });
          });
        }
      });

      //----------------------------------end-minting--------------
    } else {
      //-----------------------lazy minting-------------------------

      const nftFile = new Moralis.File("nftFile.jpg", file);
      nftFile.saveIPFS().then(async (res0) => {
        //alert(res0)
        const nftFilePath = nftFile.ipfs();
        //alert(nftFilePath)
        var res = Moralis.User.current().attributes.ethAddress;
        if (res) {
          var count;
          var count1;
          count = Math.floor(Math.random() * 1000000000000000000 + 1);
          count1 = Math.floor(Math.random() * 1000000000000000000 + 1);
          var datecurrent = new Date().getTime() / 1000;
          //alert(count)

          const token1 = ethers.BigNumber.from(
            ethers.utils.solidityKeccak256(
              ["address", "uint256", "uint256"],
              [res.toLowerCase(), count1.toString(), "4"]
            )
          );
          var hash = {};
          if (currency === "ETH") {
            hash = {
              offerId: count.toString(),
              assetId: count1.toString(),
              tokenId: token1._hex,
              nftContract: "0x1736F0251f4c4F36354BA791265cA50204FF2b9f",
              buyer: "0x0000000000000000000000000000000000000000",
              seller: res.toLowerCase(),
              beneficiary: res.toLowerCase(),
              maxAmount: values.Amount.toString(),
              startPrice: web3.utils.toWei(values.Price),
              endPrice: web3.utils.toWei(values.Price),
              startTimestamp: parseInt(datecurrent).toString(),
              endTimestamp: parseInt(newdate).toString(),
              receivingToken: "0x0000000000000000000000000000000000000000",
              royalty: values.Royality * 100,
              royaltyReceiver: res.toLowerCase(),
              totalSupply: values.MaximumSupply.toString(),
            };
          }
          //--------------------------------PIKA MINT-------------------------------
          else {
            hash = {
              offerId: count.toString(),
              assetId: count1.toString(),
              tokenId: token1._hex,
              nftContract: "0x1736F0251f4c4F36354BA791265cA50204FF2b9f",
              buyer: "0x0000000000000000000000000000000000000000",
              seller: res.toLowerCase(),
              beneficiary: res.toLowerCase(),
              maxAmount: values.Amount.toString(),
              startPrice: web3.utils.toWei(values.Price),
              endPrice: web3.utils.toWei(values.Price),
              startTimestamp: parseInt(datecurrent).toString(),
              endTimestamp: parseInt(newdate).toString(),
              receivingToken: "0x2A335a50Be85975FAAfAdb62D0384878b72C1F65",
              royalty: values.Royality * 100,
              royaltyReceiver: res.toLowerCase(),
              totalSupply: values.MaximumSupply.toString(),
            };
          }

          var add = "0xE4290eB4769954F0420B3F6294d75fa80c0E9a1d";

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
          web3.eth.personal.sign(token23, dd).then(async (res1) => {
            const signingAddress = await web3.eth.personal.ecRecover(
              token23,
              res1
            );

            // console.log(signingAddress);
            const metadata = {
              tokenid: token1._hex,
              name: values.Name,
              url: values.URLL,
              description: values.Description,
              price: web3.utils.toWei(values.Price),

              collection: collection,
              category: categories,
              blockchain: blockchain,
              maxSupply: values.MaximumSupply.toString(),
              properties: inputList,
              amount: values.Amount.toString(),
              nft: nftFilePath,
              filetype: filetype,
              address: res.toLowerCase(),
            };

            const nftFileMetadataFile = new Moralis.File("metadata.json", {
              base64: btoa(JSON.stringify(metadata)),
            });
            nftFileMetadataFile.saveIPFS().then(async (res4) => {
              const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();

              const lazyMintNFT = Moralis.Object.extend("LazyMintNFT");
              const gameScore = new lazyMintNFT();
              gameScore.set("tokenid", token1._hex);
              gameScore.set("address", res.toLowerCase());
              gameScore.set("MetaData", nftFileMetadataFilePath);
              gameScore.set("Signature", res1);
              gameScore.set("currency", currency);
              gameScore.set("nft", nftFilePath);
              gameScore.set("filetype", filetype);
              gameScore.set("name", values.Name);
              gameScore.set("sellable", false);
              gameScore.set("description", values.Description);
              gameScore.set("price", web3.utils.toWei(values.Price));
              gameScore.set("url", values.URLL);
              gameScore.set("maxSupply", values.MaximumSupply.toString());
              gameScore.set("collection", collection);
              gameScore.set("category", categories);
              gameScore.set("blockchain", blockchain);

              gameScore.set("hash", hash);
              gameScore.set("properties", inputList);
              gameScore.set("amount", values.Amount.toString());

              gameScore.set("addresses", []);
              gameScore.set("mint", mint);
              gameScore.set("deadline", newdate.toString());

              await gameScore.save();
              if (checkVisibility !== "none") {
                const queryCollection = new Moralis.Query("Collections");
                queryCollection.equalTo("objectId", collection);
                queryCollection.find().then((queryResults1) => {
                  queryResults1[0].attributes.NFTs.push(token1._hex);
                  queryResults1[0].save();
                  setisMinting(false);
                  history.push("/create");
                });
              }
              setisMinting(false);
              history.push("/create");
            });
          });
        }
      });

      //-------------------------------lazyminting------------------------------
    }
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const [personName, setPersonName] = React.useState([]);
  const names = ["Music", "Art", "Sport", "Games", "Card"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const [currency, setcurrency] = useState("ETH");
  const [CurrencyConvert, setCurrencyConvert] = useState("0");
  function selectChange(value) {
    var result = value.value;
  }

  //  ===========dropdown menu =================

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [MenuHead, setMenuHead] = useState("ETH");
  const openmenu = Boolean(anchorEl);
  const handleClickmenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

  const handleClosemenu2 = (e) => {
    setcurrency("ETH");
    setMenuHead("ETH");
    setcurrencyToggle(false);
    setcurrencyMultiplier(4108.09);
    setAnchorEl(null);
  };

  const handleClosemenu3 = (e) => {
    setcurrency("Pika");
    setMenuHead("Pika");
    setcurrencyMultiplier(0.0000018);
    setcurrencyToggle(false);
    setAnchorEl(null);
  };

  const validationSchema = yup.object({
    Name: yup.string("Enter your Name").required("Name is required"),
    URLL: yup
      .string("Enter your URL for the NFT")

      .matches(
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
        "Enter a valid URL"
      )
      .required("URL is required"),
    Description: yup
      .string("Enter your Description for the NFT")

      .required("Description is required"),
    Price: yup
      .string()
      .matches(/^(0|[1-9]\d*)(\.\d+)?$/, "Price must be a Postive Number")

      .required("Price is required"),
    MaximumSupply: yup
      .number()
      .integer("Enter Maximum Supply for your NFT")
      .positive("Please enter a Positive Supply for your NFT")
      .required("Maxminum Supply is required"),
    Amount: yup
      .number()
      .integer("Enter Amount for your NFT")
      .positive("Please enter a Positive Amount for your NFT")
      .max(
        yup.ref("MaximumSupply"),
        "Amount must be less than or equal to Maximum Supply"
      )
      .required("Amount is required"),
    Royality: yup
      .string()
      .matches(
        /^(?:10(?:\.0)?|[1-9](?:\.[0-9])?|0?\.[1-9])$/,
        "Royality must be a Postive Number between 0-10"
      )
      .required("Royality is required"),
  });
  const formik = useFormik({
    initialValues: {
      Name: "",
      URLL: "",
      Description: "",
      Price: null,
      MaximumSupply: 1,
      Amount: 1,
      Royality: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      var collection = document.getElementById("collection").value;
      var blockchain = document.getElementById("blockchain").value;
      var imgselector = document.getElementById("image");
      var file = imgselector.files[0];
      var deadline = document.getElementById("deadline").value;
      Save(values, collection, blockchain, file, deadline);
    },
  });

  const [homeslider, sethomeslider] = useState(true);

  return (
    <div
      className={classes.root}
      style={{ width: "100%", position: "relative" }}
    >
      {/* ==================== popup in ================================== */}

      {/* {homeslider && (
                <div className='sliderDiv'>
                    <div className="homeslider" style={{}}>
                        <Home_Slider/>

                        <FontAwesomeIcon icon={faTimes} className="slider_close"
                            onClick={(e) => {
                                sethomeslider(false);
                            }}
                        />

                    </div>
                </div>
            )} */}

      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-100">
            <div className="mt-3 mt-md-4 mt-lg-5 d-flex flex-column flex-md-row justify-content-between align-content-center align-items-center ">
              <div className="d-flex flex-column flex-sm-row  justify-content-center"></div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Collected", "Created", "Favorited", "My Profile"].map(
            (text, index) => (
              <ListItem key={text} button onClick={() => handleSidenav(text)}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* <Image src={text} /> */}
                  {/* {index === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {FetchImage(text)}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  className={`${index}===1? mb-5:mb-auto`}
                />
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <div clsx="container">
          <div className=" w-100 d-flex flex-row flex-wrap justify-content-center">
            <div className="w-100">
              <div className="mt-3 mt-md-4 mt-lg-5 d-flex flex-column flex-md-row justify-content-between align-content-center align-items-center ">
                <div className="d-flex flex-column flex-sm-row  justify-content-space">
                  <div
                    className="d-flex"
                    style={{ justifyContent: "space-between" }}
                  >
                    <Heading1
                      color="blue"
                      size="22px"
                      weight="bold"
                      color="#000000"
                      SMsize="16.5px"
                    >
                      Create NFT
                    </Heading1>
                  </div>
                </div>
              </div>
              <div
                style={{
                  maxWidth: "814px",
                  boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.15)",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  padding: "35px",
                }}
              >
                {isMinting ? (
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
                      <div className="mb-2">Minting NFT . . .</div>
                      <BarWave />
                    </div>
                  </>
                ) : (
                  <form onSubmit={formik.handleSubmit}>
                    <Heading3 className="mb-3">Upload File</Heading3>
                    <Heading4 className="mb-3">
                      File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                      WAV, OGG, GLB, GLTF. Max size: 40 MB
                    </Heading4>
                    <div
                      className="mb-3"
                      style={{
                        backgroundImage: "url(" + uploadImage + ")",
                        backgroundSize: "100% 100%",
                        width: "287px",
                        height: "187px",
                        border: "1px dashed #999999",
                        borderRadius: "4px",
                        display: "flex",
                        justifyContent: endHook,
                        alignItems: endHook,
                        position: "relative",
                      }}
                    >
                      <label for="image">
                        <Input
                          onChange={uploadImageHandler}
                          type="file"
                          name="image"
                          id="image"
                          style={{ display: "none" }}
                        />
                        <img
                          className="my-2 plusSign"
                          width="32px"
                          src={imgblank}
                        />
                      </label>
                      <h5
                        style={{
                          display: isDisplayNone,
                          fontfamily: "Raleway",
                          fontSize: "16px",
                          color: "black",
                          marginLeft: "5px",
                        }}
                        className="my-2"
                      >
                        {" "}
                        Upload Image
                      </h5>
                    </div>
                    <Heading3 className="mb-1">Name</Heading3>
                    <div className="mb-1" style={{ maxWidth: "701px" }}>
                      <CssTextField
                        id="Name"
                        multiline
                        value={formik.values.Name}
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        // value={x.propertyname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Name && Boolean(formik.errors.Name)
                        }
                      />
                      {formik.errors.Name ? (
                        <div style={{ color: "red" }}>{formik.errors.Name}</div>
                      ) : null}
                    </div>
                    <Heading3 className="mb-1">URL</Heading3>{" "}
                    <div className="mb-1" style={{ maxWidth: "701px" }}>
                      {" "}
                      <CssTextField
                        id="URLL"
                        multiline
                        value={formik.values.URLL}
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        // value={x.propertyname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.URLL && Boolean(formik.errors.URLL)
                        }
                      />
                      {formik.errors.URLL ? (
                        <div style={{ color: "red" }}>{formik.errors.URLL}</div>
                      ) : null}
                    </div>
                    <Heading3 className="mb-1">Description</Heading3>{" "}
                    <div className="mb-1" style={{ maxWidth: "701px" }}>
                      {" "}
                      <CssTextField
                        id="Description"
                        multiline
                        fullWidth
                        rowsMax="4"
                        value={formik.values.Description}
                        margin="normal"
                        variant="outlined"
                        // value={x.propertyname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Description &&
                          Boolean(formik.errors.Description)
                        }
                      />
                      {formik.errors.Description ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.Description}
                        </div>
                      ) : null}
                    </div>
                    <Heading3 className="mb-1">Price</Heading3>{" "}
                    <div className="d-flex mb-1" style={{ maxWidth: "701px" }}>
                      {" "}
                      <CssTextField
                        id="Price"
                        multiline
                        fullWidth
                        value={formik.values.Price}
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        // value={x.propertyname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Price && Boolean(formik.errors.Price)
                        }
                      />
                      <div className="mt-2" style={{ marginLeft: "10px" }}>
                        <Button
                          id="basic-button"
                          variant="text"
                          aria-controls="basic-menu"
                          aria-haspopup="true"
                          aria-expanded={openmenu ? "true" : undefined}
                          onClick={handleClickmenu}
                          style={{
                            border: " 2px solid blue",
                            marginBottom: "10px",
                            height: "60px",
                          }}
                        >
                          {MenuHead}
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openmenu}
                          onClose={handleClosemenu}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClosemenu2}>
                            Ethereum
                          </MenuItem>
                          <MenuItem onClick={handleClosemenu3}>Pika</MenuItem>
                        </Menu>
                      </div>
                    </div>
                    {currencyMultiplier !== 1 &&
                      "$ : " + formik.values.Price * currencyMultiplier}
                    {formik.errors.Price ? (
                      <div style={{ color: "red" }}>{formik.errors.Price}</div>
                    ) : null}
                    <Heading3 className="mb-3">End Offer Date</Heading3>
                    <div className="pb-3">
                      <TextField
                        id="deadline"
                        type="date"
                        defaultValue={today}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <Heading3 className="mb-3">Maximum Supply</Heading3>
                    <Heading4 className="mb-3">
                      Select the Maximum supply where you’d like new items from
                      this collection to be added by deafault.
                    </Heading4>
                    <div className="mb-1" style={{ maxWidth: "701px" }}>
                      {" "}
                      <CssTextField
                        id="MaximumSupply"
                        multiline
                        value={formik.values.MaximumSupply}
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.MaximumSupply &&
                          Boolean(formik.errors.MaximumSupply)
                        }
                      />
                      {formik.errors.MaximumSupply ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.MaximumSupply}
                        </div>
                      ) : null}
                    </div>
                    <Heading3 className="mb-1">Total Amount</Heading3>
                    <Heading4 className="mb-1">
                      Select the Amount of NFT's.
                    </Heading4>
                    <div className="mb-1" style={{ maxWidth: "701px" }}>
                      {" "}
                      <CssTextField
                        id="Amount"
                        multiline
                        value={formik.values.Amount}
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Amount && Boolean(formik.errors.Amount)
                        }
                      />
                      {formik.errors.Amount ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.Amount}
                        </div>
                      ) : null}
                    </div>
                    <Heading3 className="mb-3">Collection</Heading3>
                    <Heading4 className="mb-3">
                      Select the blockchain where you’d like new items from this
                      collection to be added by deafault.
                    </Heading4>
                    <FormControl className="mb-3">
                      <NativeSelect
                        onChange={selectType}
                        id="collection"
                        input={<BootstrapInput />}
                      >
                        <option value="none">none</option>

                        {address121 !== undefined ? (
                          address121.map((value) => (
                            <option value={value.id}>
                              {value.attributes.name}
                            </option>
                          ))
                        ) : (
                          <></>
                        )}
                      </NativeSelect>
                    </FormControl>
                    <Heading3 className="mb-3">Category</Heading3>
                    <Heading4 className="mb-3">
                      Select the blockchain where you’d like new items from this
                      collection to be added by deafault.
                    </Heading4>
                    <FormControl className="mb-3">
                      <Select
                        sx={{ minWidth: 620 }}
                        labelId="category"
                        id="category"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                              />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Heading3 className="mb-3">BlockChain</Heading3>
                    <Heading4 className="mb-3">
                      Select the blockchain where you’d like new items from this
                      collection to be added by deafault.
                    </Heading4>
                    <FormControl className="mb-3">
                      <Select
                        sx={{ minWidth: 620 }}
                        fullWidth
                        id="blockchain"
                        defaultValue={1}
                        // input={<BootstrapInput />}
                      >
                        <MenuItem value={1}>Ethereum</MenuItem>
                      </Select>
                    </FormControl>
                    <Heading3 className="mb-3">Properties</Heading3>{" "}
                    <DialogContent id="trade">
                      {inputList.map((x, i) => {
                        return (
                          <div className="d-flex " style={{ float: "left" }}>
                            <div className="d-flex-col pe-5">
                              <CssTextField
                                id="custom-css-outlined-input"
                                label="Property Name"
                                className={classes.margin}
                                multiline
                                variant="outlined"
                                value={x.propertyname}
                                onChange={(e) => {
                                  let newArr = [...inputList]; // copying the old datas array
                                  newArr[i].propertyname = e.target.value; // replace e.target.value with whatever you want to change it to

                                  setInputList(newArr);
                                }}
                              />
                            </div>
                            <div className="d-flex-col">
                              <CssTextField
                                id="filled-multiline-flexible"
                                label="Property"
                                multiline
                                rowsMax="4"
                                margin="normal"
                                variant="outlined"
                                value={x.property}
                                onChange={(e) => {
                                  let newArr = [...inputList]; // copying the old datas array
                                  newArr[i].property = e.target.value; // replace e.target.value with whatever you want to change it to

                                  setInputList(newArr);
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}

                      <span
                        className="svg-icon menu-icon d-flex"
                        style={{
                          float: "left",
                          marginTop: "30px",
                          marginLeft: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={addd}
                          onClick={() => {
                            setInputList([
                              ...inputList,
                              { property: "", propertyname: "" },
                            ]);
                          }}
                          style={{ width: "25px" }}
                        />
                      </span>
                    </DialogContent>
                    <div>
                      <Heading3 className="mb-3">Royalty</Heading3>{" "}
                      <CssTextField
                        id="Royality"
                        multiline
                        value={formik.values.Royality}
                        fullWidth
                        rowsMax="4"
                        margin="normal"
                        variant="outlined"
                        // value={x.propertyname}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.Royality &&
                          Boolean(formik.errors.Royality)
                        }
                      />
                      {formik.errors.Royality ? (
                        <div style={{ color: "red" }}>
                          {formik.errors.Royality}
                        </div>
                      ) : null}
                    </div>
                    <div className="">
                      <Heading3 className="mb-3">Mint</Heading3>{" "}
                      <FormControl
                        component="fieldset"
                        className={classes.formControl}
                      >
                        <RadioGroup
                          aria-label="Mint"
                          name="mint"
                          id="mint"
                          value={mint}
                          onChange={(event) => {
                            setmint(event.target.value);
                          }}
                        >
                          <FormControlLabel
                            style={{ marginRight: "40px" }}
                            value="Lazy"
                            control={<Radio />}
                            label="Feeless Minting"
                          />
                          <FormControlLabel
                            value="Mint"
                            control={<Radio />}
                            label="Pay for Minting"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div className="">
                      <Button
                        style={{
                          // position: "absolute",
                          // right: "20vw",
                          marginTop: "30px",
                          marginRight: "360px",
                          backgroundColor: " #5D34FF",
                          color: "white",
                          border: "none",
                        }}
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="scale-in-center"
      >
        <Modal.Header closeButton>
          <div className="modal_heading">Update Info</div>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex flex-column ">
            <div className="w-100 my-auto px-4 py-3 d-flex">
              <Heading1
                size="20px"
                SMsize="20"
                weight="200"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#2A1971"
                JFcontent="left"
                className=""
                style={{ alignItems: "center", cursor: "pointer" }}
              >
                Please Update your Account Info to create Collections.
              </Heading1>
            </div>
          </div>
          <div className="w-100 d-flex flex-column">
            <div className="w-100 my-auto px-4 py-3 d-flex justify-content-center">
              <Button
                onClick={() => {
                  history.push("/profile");
                }}
                style={{
                  border: "2px solid",
                  borderRadius: "15px",
                }}
              >
                Update
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Favorite;
