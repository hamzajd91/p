import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./selectdropdwon.css";
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
import { Image } from "react-bootstrap";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import CollectedCards from "./CollectedCards";
import "./ExploreNfts.css";
import Heading1 from "../../reusableComponents/Headings/Heading1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../reusableStyles/SearchBox.css";
import { Dropdown } from "react-bootstrap";
import Dropdown_CUS from "../../reusableComponents/DropdownSimple/Dropdown/Sections/Dropdown_CUS";
import CreateCard from "./ReusableCard/CreateCard";
import CollectedCardsWithCreate from "./CollectedWithCreate";
import { useHistory } from "react-router";
import { Moralis } from "moralis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
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
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function ExploreNfts() {
  const [emptyText, setemptyText] = useState(false);

  const [createtoggle, setcreatetoggle] = useState();

  const [owners, setowners] = useState([]);
  const [artists, setartists] = useState([]);

  const [filteredImaged, setfilteredImaged] = useState([]);
  async function loadUserItems(a) {
    //console.log("load items started")

    Moralis.Cloud.run("getUserItems").then(async (res) => {
      var items = [];

      res.forEach((item) => {
        item.type = a;
        items.push(item);
      });

      setCardData(items);
      setfilteredImaged(items);

      var bbbb = [];
      var artist = [];
      var owner = [];

      for (var i = 0; i < res.length; i++) {
        const query2 = new Moralis.Query("Profile");
        query2.equalTo("address", res[i].address);
        var bbbb = await query2.find();
        if (bbbb.length === 0) {
          artist.push(["none"]);
        } else {
          artist.push(bbbb[0].attributes);
        }
        const query3 = new Moralis.Query("Profile");
        if (res[i].addresses.length === 0) {
          query3.equalTo("address", res[i].address);
        } else {
          query3.equalTo("address", res[i].addresses[0]);
        }
        var cccc = await query3.find();
        owner.push(cccc[0].attributes);
      }
      setowners(owner);
      setartists(artist);
      console.log("Create NFT  artist", artist);
      console.log(" Create NFT owners", owner);
    });
  }

  function selectType() {
    try {
      var a = document.getElementById("selectType").value;

      setcreatetoggle(a);
    } catch (ex) {}

    if (a === "1") {
      loadUserItems("single");
    } else {
      loadCollections("collections");
    }
  }

  async function loadCollections(a) {
    //console.log("load items started")
    const ownedItems = await Moralis.Cloud.run("getMyCollections");
    var items = [];

    ownedItems.forEach((item) => {
      item.type = a;
      items.push(item);
    });
    setCardData(items);
    setfilteredImaged(items);
  }

  const [CardData, setCardData] = useState([]);
  useEffect(() => {
    var a = document.getElementById("selectType").value;
    if (a === "1") {
      loadUserItems("single");
    } else {
      loadCollections("collections");
    }
  }, []);

  const [headervalue, setHeadervalue] = useState("This Week");
  const Catagoryoptions = [" week", "Last Month", "All the time"];
  const [searchVal, setSearchVal] = useState("");

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const history = useHistory();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isCollected, setIsCollected] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isProfile, setIsProfile] = useState(false);

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
  };
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
  return (
    <div
      className={classes.root}
      style={{ width: "100%", position: "relative" }}
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
          <div className="w-100">
            <div className="mt-3 mt-md-4 mt-lg-5 d-flex flex-column flex-md-row justify-content-between align-content-center align-items-center ">
              <div className="d-flex flex-column flex-sm-row  justify-content-center">
                <div className="d-flex">
                  <Heading1
                    color="blue"
                    size="22px"
                    weight="bold"
                    color="#000000"
                    SMsize="16.5px"
                    className="my-auto me-1 me-md-3 me-3 me-lg-4"
                  >
                    Created
                  </Heading1>
                </div>
                <div className="">
                  <div className="banner_Input2 lh-1 d-flex my-auto mx-auto">
                    <div className="search_div2">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="search_icon2"
                      />
                    </div>
                    <div className="w-100 input_div">
                      <input
                        type="text"
                        placeholder="Search owners, artists, etc"
                        className="input_value2"
                        value={searchVal}
                        onChange={(event) => setSearchVal(event.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            let filtered = CardData.filter(
                              (carddescription) => {
                                return carddescription.name
                                  .toLowerCase()
                                  .includes(searchVal.toLowerCase());
                              }
                            );
                            setfilteredImaged(filtered);

                            if (filtered.length === 0) {
                              setemptyText(true);
                            } else {
                              setemptyText(false);
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center me-5">
                <div className="d-flex">
                  <Heading1
                    color="blue"
                    size="23px"
                    weight="bold"
                    color="#000000"
                    SMsize="16px"
                    className="my-auto"
                  >
                    Type
                  </Heading1>
                </div>
                <div className="select">
                  <select id="selectType" onChange={selectType}>
                    <option value="1">Single</option>
                    <option selected="selected" value="2">
                      Collections
                    </option>
                  </select>
                </div>
              </div>
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

        <div className="w-100 row">
          <CollectedCardsWithCreate
            cardData={filteredImaged}
            owners={owners}
            artists={artists}
            createtoggle={createtoggle}
          />
        </div>
      </main>
    </div>
  );
}

export default ExploreNfts;
