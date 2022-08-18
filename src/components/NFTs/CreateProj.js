import React, { useState } from "react";
import clsx from "clsx";

import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputLabel from "@material-ui/core/InputLabel";

import BarWave from "react-cssfx-loading/lib/Hypnosis";
import { Moralis } from "moralis";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
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
import MailIcon from "@material-ui/icons/Mail";
import Collected from "../../Assets/collected.png";
import Collectedjpg from "../../Assets/collected.jpg";
import InputBase from "@material-ui/core/InputBase";
import Input from "@material-ui/core/Input";
import Created from "../../Assets/created.png";
import Favorited from "../../Assets/favorited.png";
import Myprofile from "../../Assets/myprofile.png";
import addd from "../../Assets/add.png";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
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
import { Button, Container, Image, Modal } from "react-bootstrap";
import { ethers } from "ethers";

import TextField from "@material-ui/core/TextField";
import Heading1 from "../../reusableComponents/Headings/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../reusableStyles/SearchBox.css";
import { Dropdown } from "react-bootstrap";
import Dropdown_CUS from "../../reusableComponents/DropdownSimple/Dropdown/Sections/Dropdown_CUS";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CssTextField } from "./createSingleNft";
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
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "absolute",
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

function CreateProj() {
  const [inputList, setInputList] = useState([
    { propertyname: "", property: "" },
  ]);

  const [Namee, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [isCreatingCollection, setisCreatingCollection] = useState(false);
  const [Website, setWebsite] = useState("");
  const [Discord, setDiscord] = useState("");
  const [Twiter, setTwiter] = useState("");
  const [Instagram, setInstagram] = useState("");

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
  console.log(inputList);
  const handleDrawerClose = () => {
    setOpen(false);
  };
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

  function uploadImageHandler(event) {
    setEndHook("flex-end");
    setIsDisplayNone("none");
    if (event.target.files.length !== 0) {
      setUploadImage(URL.createObjectURL(event.target.files[0]));
      setUploadImage1(event.target.files[0]);

    }
  }

  //flex-end hook
  const [endHook, setEndHook] = useState("center");
  //Display none hook
  const [isDisplayNone, setIsDisplayNone] = useState("");
  //coverImage hook
  const [uploadImage, setUploadImage] = useState("");
  const [uploadImage1, setUploadImage1] = useState("");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();


  const Save = async () => {
    var profile;
    today = yyyy + "-" + mm + "-" + dd;
    var res = Moralis.User.current().attributes.ethAddress
    if (res) {
      const query2 = new Moralis.Query("Profile");
      query2.equalTo("address", res.toLowerCase());
      profile = await query2.find();
      console.log(profile);
    }
    setisCreatingCollection(true);
    var propertyinputcheck = inputList;
    propertyinputcheck.map((property, index) => {
      if (property.propertyname === "" && property.propertyname === "") {
        setInputList(inputList.splice(index, 1));
      }
    });
    if (profile.length == 0) {
      console.log("no profile");
      handleShow();
      setisCreatingCollection(false);
      return;
    }
    console.log("saving");
    console.log(uploadImage1)
    var file = document.getElementById("image");
    debugger
    var categories = [];
    for (const input of personName) {
      categories.push(input);
    }
    //alert("properties" + values)
    const nftFile = new Moralis.File("nftFile.jpg", uploadImage1);

    nftFile.saveIPFS().then((res0) => {
      const nftFilePath = nftFile.ipfs();
      debugger
      var res = Moralis.User.current().attributes.ethAddress
      if (res) {
        const Collections = Moralis.Object.extend("Collections");
        // Create a new instance of that class.
        const gameScore = new Collections();
        gameScore.set("name", Namee);
        gameScore.set("address", res.toLowerCase());
        gameScore.set("description", Description);
        gameScore.set("category", categories);
        gameScore.set("properties", inputList);
        gameScore.set("LogoImage", nftFilePath);
        gameScore.set("website", Website);
        gameScore.set("discord", Discord);
        gameScore.set("twitter", Twiter);
        gameScore.set("insta", Instagram);
        gameScore.set("NFTs", []);
        gameScore.save();
        setisCreatingCollection(false);
        history.push("/create");
      }
    });

    // const accounts = await ethers.getSigners();
    // const deployer = accounts[0];
    // const contract = await TheKraft__factory.connect(process.env.DEV_CONTRACT as string, deployer);

    //const signature = await deployer.signMessage(ethers.utils.arrayify(hash));
    // const tx = await contract.connect(accounts[1]).lazyMint(id, minPrice, amount, maxSupply, deadline, signature, [], {
    //   value: ethers.utils.parseEther('0.02'),
    // });
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
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  return (
    <div className="container ">
      <div
        style={{ width: "100%", position: "relative", backgroundColor: "red" }}
      >
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
                    Create Collections
                  </Heading1>
                </div>
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
            {isCreatingCollection ? (
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
                  <div className="mb-2">Creating Collection . . .</div>
                  <BarWave />
                </div>
              </>
            ) : (
              <>
                <Heading3 className="mb-3">Upload File</Heading3>
                <Heading4 className="mb-3">
                  File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV,
                  OGG, GLB, GLTF. Max size: 40 MB
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
                    id="Outlined-multiline-flexible"
                    multiline
                    value={Namee}
                    fullWidth
                    rowsMax="4"
                    margin="normal"
                    variant="outlined"
                    // value={x.propertyname}
                    onChange={(e) => {
                      // copying the old datas array
                      setName(e.target.value); // replace e.target.value with whatever you want to change it to
                    }}
                  />
                </div>
                <Heading3 className="mb-1">Description</Heading3>{" "}
                <div className="mb-1" style={{ maxWidth: "701px" }}>
                  {" "}
                  <CssTextField
                    id="filled-multiline-flexible"
                    fullWidth
                    value={Description}
                    multiline
                    rowsMax="4"
                    margin="normal"
                    variant="outlined"
                    // value={x.propertyname}
                    onChange={(e) => {
                      // copying the old datas array
                      setDescription(e.target.value); // replace e.target.value with whatever you want to change it to
                    }}
                  />
                </div>
                <Heading3 className="mb-3">Category</Heading3>
                <Heading4 className="mb-3">
                  Select the blockchain where you’d like new items from this
                  collection to be added by default.
                </Heading4>
                <FormControl className="mb-3">
                  <Select
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
                <Heading3 className="mb-3">Properties</Heading3>{" "}
                <DialogContent id="trade">
                  {inputList.map((x, i) => {
                    return (
                      <div className="d-flex " style={{ float: "left" }}>
                        <div className="d-flex-col pe-5">
                          <CssTextField
                            id="filled-multiline-flexible"
                            label="Property Name"
                            multiline
                            rowsMax="4"
                            margin="normal"
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
                    className="svg-icon menu-icon d-flex addicon"
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
                <Heading3 className="mb-3">Links</Heading3>
                <div className="d-flex my-4 mb-3">
                  <Image src={link} />{" "}
                  <div className="ms-3" style={{ width: "650px" }}>
                    {" "}
                    <CssTextField
                      id="filled-multiline-flexible"
                      fullWidth
                      multiline
                      value={Website}
                      rowsMax="4"
                      margin="normal"
                      variant="outlined"
                      // value={x.propertyname}
                      onChange={(e) => {
                        // copying the old datas array
                        setWebsite(e.target.value); // replace e.target.value with whatever you want to change it to
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <Image src={discord} />{" "}
                  <div className="ms-3" style={{ width: "650px" }}>
                    {" "}
                    <CssTextField
                      id="filled-multiline-flexible"
                      fullWidth
                      value={Discord}
                      multiline
                      rowsMax="4"
                      margin="normal"
                      variant="outlined"
                      // value={x.propertyname}
                      onChange={(e) => {
                        // copying the old datas array
                        setDiscord(e.target.value); // replace e.target.value with whatever you want to change it to
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex my-4 mb-3">
                  <Image src={twiter} />{" "}
                  <div className="ms-3" style={{ width: "650px" }}>
                    {" "}
                    <CssTextField
                      id="filled-multiline-flexible"
                      fullWidth
                      multiline
                      value={Twiter}
                      rowsMax="4"
                      margin="normal"
                      variant="outlined"
                      // value={x.propertyname}
                      onChange={(e) => {
                        // copying the old datas array
                        setTwiter(e.target.value); // replace e.target.value with whatever you want to change it to
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <Image src={insta} />{" "}
                  <div className="ms-3" style={{ width: "650px" }}>
                    {" "}
                    <CssTextField
                      id="filled-multiline-flexible"
                      fullWidth
                      value={Instagram}
                      multiline
                      rowsMax="4"
                      margin="normal"
                      variant="outlined"
                      // value={x.propertyname}
                      onChange={(e) => {
                        // copying the old datas array
                        setInstagram(e.target.value); // replace e.target.value with whatever you want to change it to
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
          <p align="right">
            <Button
              className="mb-3"
              onClick={Save}
              style={{
                // position: "absolute",
                // right: "20vw",
                marginTop: "30px",
                marginRight: "360px",
                backgroundColor: " #5D34FF",
                border: "none",
              }}
            >
              Create
            </Button>
          </p>
        </main>
      </div>
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

export default CreateProj;
