import React, { useState, useEffect } from "react";
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
import FavCard from "./ReusableCard/FavCard";
import { useHistory } from "react-router";
import { Moralis } from "moralis";
import NftCard from "../Home/Sections/NFTs/NftCard";
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

function Favorite() {
  var ownedItems;
  const [CardData, setCardData] = useState([]);
  const loadUserItems = async () => {
    console.log("load items started");
    ownedItems = await Moralis.Cloud.run("getFavorites");
    var items = [];

    ownedItems.forEach((item) => {
      items.push(item);
    });
    setCardData(items);
    setfilteredImaged(items);
  };
  useEffect(() => {
    loadUserItems();
  }, []);

  const [headervalue, setHeadervalue] = useState("This Week");
  const Catagoryoptions = ["This week", "Last Month", "All the time"];
  const [searchVal, setSearchVal] = useState("");
  const [filteredImaged, setfilteredImaged] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [emptyText, setemptyText] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

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
  const history = useHistory();

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
                    Favorites
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
                            console.log(filtered);
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
            {filteredImaged.map((data) => {
              return (
                <div className="mx-2 my-2">
                  {" "}
                  <NftCard carddescription={data} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Favorite;
