import React, { useState, Component, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Collected from "../../Assets/collected.png";
import Collectedjpg from "../../Assets/collected.jpg";
import Created from "../../Assets/created.png";
import Favorited from "../../Assets/favorited.png";
import Myprofile from "../../Assets/myprofile.png";
import uploadimg from "../../Assets/uploadimg.svg";
import avatar from "../../Assets/avatar.svg";
import add from "../../Assets/add.svg";
import del from "../../Assets/delete.svg";
import addtext from "../../Assets/addtext.svg";
import { Alert, Image } from "react-bootstrap";
import Web3 from "web3";
import Select, { components } from "react-select";

import Heading1 from "../../reusableComponents/Headings/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHdd,
  faMars,
  faPen,
  faPenFancy,
  faSave,
  faSearch,
  faTransgenderAlt,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import "../../reusableStyles/SearchBox.css";
import { Dropdown } from "react-bootstrap";
import Dropdown_CUS from "../../reusableComponents/DropdownSimple/Dropdown/Sections/Dropdown_CUS";
import Sidebar from "../Sidebar/Sidebar";
import { useHistory } from "react-router";
import { Input } from "@material-ui/core";
import { Moralis } from "moralis";
import web3 from "../../Moralis/MoralisConfig";
import BarWave from "react-cssfx-loading/lib/Hypnosis";
const drawerWidth = 216;

function clickHandlers(e) {
  // document.getElementById(e).disabled = false;
  // document.getElementById(e).style.border = "2px solid #5d34ff";
}

const options = [
  { value: "Male", text: "Male", icon: <FontAwesomeIcon icon={faMars} /> },
  { value: "Female", text: "Female", icon: <FontAwesomeIcon icon={faVenus} /> },
  {
    value: "Others",
    text: "Others",
    icon: <FontAwesomeIcon icon={faTransgenderAlt} />,
  },
];

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
    paddingTop: theme.spacing(8),
    backgroundColor: "#f9f9f9",
    paddingLeft: theme.spacing(23),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(5),
    },
  },
}));

function Profile() {
  useEffect(() => {


    if (editButton === false) {
      var res = Moralis.User.current().attributes.ethAddress
      if (res) {
        const query = new Moralis.Query("Profile");
        query.equalTo("address", res.toLowerCase());
        query.find().then((queryResults) => {
          if (queryResults.length != 0) {
            console.log(queryResults[0].attributes);
            setfullName12(queryResults[0].attributes.fullName);
            setnickName12(queryResults[0].attributes.nickName);
            setphone12(queryResults[0].attributes.phone);
            setemail12(queryResults[0].attributes.email);
            setgender12(queryResults[0].attributes.gender);
            if (imageChange === false) {
              setProfileImage(queryResults[0].attributes.profile);
              setCoverImage(queryResults[0].attributes.cover);
            }
            if (queryResults[0].attributes.cover !== null) {
              setCoverColor("black");
              setEndHook("flex-end");
              setIsDisplayNone("none");
            }
          }
        });
        setwalletaddress(res.toLowerCase());

      }
    }

  }, [])
  const [coverImage, setCoverImage] = useState("");
  const [profileImage, setProfileImage] = useState(avatar);
  const [walletaddress, setwalletaddress] = useState();
  const [fullName12, setfullName12] = useState();
  const [nickName12, setnickName12] = useState();
  const [phone12, setphone12] = useState();
  const [email12, setemail12] = useState();
  const [gender12, setgender12] = useState("Select");
  const [profile12, setprofile12] = useState();
  const [cover12, setcover12] = useState();
  const [editButton, setEditButton] = useState(false);
  const [imageChange, setImageChange] = useState(false);
  const [isSaving, setisSaving] = useState(false);


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

  function selectChange(value) {
    var result = value.value;
    console.log(result);
    setGender(result);
    return setgender12(result);
  }

  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [cellNo, setCellNo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [nickNameErr, setNickNameErr] = useState({});
  const [cellNoErr, setCellNoErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [genderErr, setGenderErr] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const isValid = formValidation();
    if (isValid) {
      //Send Data to The API (code here)
      await saveInfo();
    }
  };

  //Validation Code here
  const formValidation = () => {
    var nameFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var cellFormat = /[^\d+.-]/g;
    var emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var num = 0;
    const nameErr = {};
    const nickNameErr = {};
    const cellNoErr = {};
    const emailErr = {};
    const genderErr = {};
    let isValid = true;

    if (fullName12.trim().length === 0) {
      nameErr.nameFull = "*Please enter your Full Name";
      isValid = false;
    } else {
      if (fullName12.trim().length < 5) {
        nameErr.nameShort = "*Name is too short";
        isValid = false;
      }
    }
    if (nameFormat.test(fullName12)) {
      nameErr.nameSpecial = "*Special Characters are not allowed";
      isValid = false;
    }
    if (nickName12.trim().length === 0) {
      nickNameErr.nickNull = "*Please enter your Nick name";
      isValid = false;
    }
    if (phone12.trim().length === 0) {
      cellNoErr.cellFull = "*Please enter your Cell no";
      isValid = false;
    }
    if (cellFormat.test(phone12)) {
      cellNoErr.cellSpecial = "*Please enter a valid Cell no";
      isValid = false;
    }
    if (!emailFormat.test(email12)) {
      emailErr.emailSpecial = "*Please enter a valid Email";
      isValid = false;
    }
    if (gender12 === "") {
      genderErr.genderNull = "*Please select a Gender";
      isValid = false;
    }

    setNameErr(nameErr);
    setNickNameErr(nickNameErr);
    setCellNoErr(cellNoErr);
    setEmailErr(emailErr);
    setGenderErr(genderErr);
    return isValid;
  };

  //Profile hook

  //coverColor
  const [coverColor, setCoverColor] = useState("#4B4B4B");
  //coverImage hook

  //flex-end hook
  const [endHook, setEndHook] = useState("center");
  //Display none hook
  const [isDisplayNone, setIsDisplayNone] = useState("");
  //selected options
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isCollected, setIsCollected] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  //select hook
  const [SelectYoggle, setSelectYoggle] = useState(true);
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

  function profileImageHandler(event) {
    setImageChange(true);
    if (event.target.files.length !== 0) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function coverImageHandler(event) {
    setImageChange(true);

    if (event.target.files.length !== 0) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
    console.log(event.target.files[0]);
  }

  function edit() {
    document.getElementById("fullname").disabled = false;
    document.getElementById("fullname").style.border = "1px solid #af9cff";
    document.getElementById("nick").disabled = false;
    document.getElementById("nick").style.border = "1px solid #af9cff";
    document.getElementById("contact").disabled = false;
    document.getElementById("contact").style.border = "1px solid #af9cff";
    document.getElementById("email").disabled = false;
    document.getElementById("email").style.border = "1px solid #af9cff";
    // document.getElementById("address").disabled = false;
    // document.getElementById("address").style.border = "2px solid #af9cff";
    document.getElementById("gender").isDisabled = false;
    document.getElementById("gender").style.border = "1px solid #af9cff";
    document.getElementById("gender").style.borderRadius = "6px";

    setEditButton(true);
    setSelectYoggle(false);
  }

  async function saveInfo() {
    setisSaving(true);
    var name = document.getElementById("fullname").value;
    var nickName = document.getElementById("nick").value;
    var cellNo = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var cover = document.getElementById("image");
    var coveripfs;
    var profileipfs;
    if (cover.files[0] !== undefined) {
      const coverFile = new Moralis.File("cover.jpg", cover.files[0]);
      var a = await coverFile.saveIPFS();
      coveripfs = coverFile.ipfs();
    }
    var profilepic = document.getElementById("images");
    if (profilepic.files[0] !== undefined) {
      const profileFile = new Moralis.File("profile.jpg", profilepic.files[0]);
      a = await profileFile.saveIPFS();
      profileipfs = profileFile.ipfs();
    }
    var res = Moralis.User.current().attributes.ethAddress
    if (res) {
      const query = new Moralis.Query("Profile");
      query.equalTo("address", res.toLowerCase());
      query.find().then((queryResults) => {
        if (queryResults.length == 0) {
          const lazyMintNFT = Moralis.Object.extend("Profile");
          // Create a new instance of that class.
          const gameScore = new lazyMintNFT();
          gameScore.set("address", res.toLowerCase());
          gameScore.set("fullName", name);
          gameScore.set("nickName", nickName);
          gameScore.set("phone", cellNo);
          gameScore.set("email", email);
          gameScore.set("gender", gender12);
          gameScore.set("profile", profileipfs);
          gameScore.set("cover", coveripfs);
          gameScore.save();
          setisSaving(false);
        } else {
          queryResults[0].set("email", email);
          queryResults[0].set("nickName", nickName);
          queryResults[0].set("phone", cellNo);
          queryResults[0].set("fullName", name);
          queryResults[0].set("gender", gender12);
          queryResults[0].set("profile", profileipfs);
          queryResults[0].set("cover", coveripfs);
          queryResults[0].save();
          setisSaving(false);
        }
      });
    }

    console.log(name, nickName, cellNo, email, gender);
  }

  return (
    <div className="container" style={{ width: "100%", position: "relative" }}>
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
          <div
            style={{
              height: "222px",
              display: "flex",
              flexDirection: "column",
              backgroundColor: coverColor,
              backgroundImage: "url(" + coverImage + ")",
              backgroundSize: "cover",
              justifyContent: endHook,
              alignItems: endHook,
              position: "relative",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <label for="image">
              <input
                onChange={coverImageHandler}
                type="file"
                name="image"
                id="image"
                style={{ display: "none" }}
              />
              <img className="my-2 plusSign" width="40px" src={uploadimg} />
            </label>

            <h5
              style={{
                display: isDisplayNone,
                fontfamily: "Raleway",
                fontSize: "16px",
                color: "#FFFFFF",
              }}
              className="my-2"
            >
              Add Cover
            </h5>
            <h5
              style={{
                display: isDisplayNone,
                fontfamily: "Raleway",
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              Dimention 3200x410px
            </h5>
            <Image
              className="my-2 "
              width="180px"
              src={profileImage}
              style={{
                position: "absolute",
                borderRadius: "50%",
                left: "50px",
                top: "80px",
                width: "180px",
                height: "180px",
                objectFit: "cover",
                stroke: "none",
                boxShadow: "rgba(0, 0, 0, 0.35) 3px 2px 10px"

              }}
            />

            <label for="images">
              <input
                onChange={profileImageHandler}
                accept="image/*"
                type="file"
                name="images"
                id="images"
                style={{ display: "none" }}
              />
              <img
                className="my-2 plusSign"
                width="40px"
                src={add}
                style={{ position: "absolute", left: "180px", top: "200px" }}
              />{" "}
            </label>
          </div>{" "}
          <div className="mt-3 mt-md-4 w-100 mt-lg-5 d-flex flex-column flex-md-row justify-content-between align-content-center align-items-center ">
            <div className="d-flex w-100">
              <div
                className="d-flex  my-5"
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Heading1
                  color="blue"
                  size="22px"
                  weight="bold"
                  color="#000000"
                  SMsize="16.5px"
                  className="my-auto me-1 me-md-3 me-3 me-lg-4"
                  JFcontent="flex-start"
                >
                  My Profile
                </Heading1>

                <div
                  className="d-flex align-items-center justify-content-end "
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                    color: "#5D34FF",
                    width: "14pc",
                  }}
                >
                  <p JFcontent="flex-end">
                    <button
                      style={{
                        backgroundColor: "#f9f9f9",
                        height: "40px",
                        width: "80px",
                        border: "2px solid #5d34ff",
                        borderRadius: "8px",
                        color: "#5d34ff",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                        fontSize: "16px",
                        marginLeft: "850px",
                      }}
                      type=""
                      value=""
                      onClick={edit}
                    >
                      <FontAwesomeIcon icon={faPen} /> Edit
                    </button>{" "}
                  </p>
                  {/* <Image className="me-2" src={del} width="14px" alt="Asd" />
                    Delete account */}
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div
              style={{
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
                borderRadius: "8px",
                padding: "25px",
                backgroundColor: "#ffffff",
              }}
            >
              {isSaving ? (
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
                    <div className="mb-2">Saving . . .</div>
                    <BarWave />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                        height: "fit-content",
                      }}
                    >
                      Full Name
                    </h5>{" "}
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setfullName12(e.target.value);
                      }}
                      disabled
                      id="fullname"
                      value={fullName12}
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        marginRight: "390px",
                        color: "grey",
                        height: "38px",
                        width: "500px",
                      }}
                    ></input>{" "}
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("fullname")}  /> */}
                  </div>{" "}
                  {Object.keys(nameErr).map((key) => {
                    return (
                      <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{
                          marginTop: "10px",
                          marginRight: "200px",
                          color: "red",
                        }}
                      >
                        {nameErr[key]}
                      </div>
                    );
                  })}
                  <Divider />
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                      }}
                    >
                      Nick Name
                    </h5>{" "}
                    <input
                      type="text"
                      value={nickName12}
                      onChange={(e) => {
                        setnickName12(e.target.value);
                      }}
                      disabled
                      id="nick"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        color: "grey",
                        height: "38px",
                        marginRight: "390px",
                        width: "500px",
                      }}
                    ></input>{" "}
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("nick")}  /> */}
                  </div>{" "}
                  {Object.keys(nickNameErr).map((key) => {
                    return (
                      <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{
                          marginTop: "10px",
                          marginRight: "200px",
                          color: "red",
                        }}
                      >
                        {nickNameErr[key]}
                      </div>
                    );
                  })}
                  <Divider />
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                      }}
                    >
                      Cellphone
                    </h5>{" "}
                    <input
                      type="text"
                      value={phone12}
                      onChange={(e) => {
                        setphone12(e.target.value);
                      }}
                      disabled
                      id="contact"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        color: "grey",
                        height: "38px",
                        marginRight: "390px",
                        width: "500px",
                      }}
                    ></input>{" "}
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("contact")}  /> */}
                  </div>{" "}
                  {Object.keys(cellNoErr).map((key) => {
                    return (
                      <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{
                          marginTop: "10px",
                          marginRight: "200px",
                          color: "red",
                        }}
                      >
                        {cellNoErr[key]}
                      </div>
                    );
                  })}
                  <Divider />
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                      }}
                    >
                      E-mail
                    </h5>{" "}
                    <input
                      value={email12}
                      onChange={(e) => {
                        setemail12(e.target.value);
                      }}
                      type="email"
                      disabled
                      id="email"
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        color: "grey",
                        height: "38px",
                        marginRight: "390px",
                        width: "500px",
                      }}
                    ></input>{" "}
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("email")}  /> */}
                  </div>{" "}
                  {Object.keys(emailErr).map((key) => {
                    return (
                      <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{
                          marginTop: "10px",
                          marginRight: "200px",
                          color: "red",
                        }}
                      >
                        {emailErr[key]}
                      </div>
                    );
                  })}
                  <Divider />
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                      }}
                    >
                      Wallet Address{" "}
                    </h5>
                    { }
                    <input
                      disabled
                      id="address"
                      value={walletaddress}
                      style={{
                        border: "none",
                        borderRadius: "5px",
                        color: "grey",
                        height: "38px",
                        marginRight: "390px",
                        width: "500px",
                      }}
                    ></input>{" "}
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("address")}  /> */}
                  </div>{" "}
                  <Divider />
                  <div
                    className="d-flex flex-wrap justify-content-between m-0 mt-3"
                    style={{ alignItems: "center" }}
                  >
                    <h5
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        minWidth: "100px",
                        color: "black",
                      }}
                    >
                      Gender
                    </h5>{" "}
                    <div
                      style={{
                        minWidth: "130 !important",
                        marginRight: "760px",
                      }}
                    >
                      <Select
                        onChange={selectChange}
                        isDisabled={SelectYoggle}
                        components={{ IndicatorSeparator: () => null }}
                        isSearchable={false}
                        id="gender"
                        placeholder={gender12}
                        options={options}
                        getOptionLabel={(e) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "#5d34ff",
                              boxShadow: "none",
                            }}
                          >
                            {e.icon}
                            <span
                              style={{
                                marginLeft: "10px",
                                fontSize: "18px",
                                color: "black",
                              }}
                            >
                              {e.text}
                            </span>
                          </div>
                        )}
                      />
                    </div>
                    {/* <Image   className="my-2 me-5 editImg" width="17px" src={addtext} onClick={() => clickHandlers("gender")}  /> */}
                  </div>{" "}
                  {Object.keys(genderErr).map((key) => {
                    return (
                      <div
                        className="d-flex flex-wrap justify-content-center"
                        style={{
                          marginTop: "10px",
                          marginLeft: "30px",
                          marginRight: "600px",
                          color: "red",
                        }}
                      >
                        {genderErr[key]}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            <p align="right">
              <button
                style={{
                  backgroundColor: "#5d34ff",
                  height: "40px",
                  width: "80px",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  marginTop: "40px",
                  // margin: "40px",
                  marginLeft: "60px",
                }}
                type="submit"
                value=""
              >
                {" "}
                <FontAwesomeIcon icon={faHdd} /> Save
              </button>{" "}
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;
