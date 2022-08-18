import "../components/Collection/Collection.css";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useLocation } from "react-router";
import Collected from "../Assets/collected.png";
import Created from "../Assets/created.png";
import Favorited from "../Assets/favorited.png";
import Myprofile from "../Assets/myprofile.png";
import avatar from "../Assets/avatar.svg";
import insta from "../Assets/insta.svg";
import gender from "../Assets/gender.svg";
import mail from "../Assets/mail.svg";
import plus from "../Assets/plus.svg";

import { Image } from "react-bootstrap";
import { Moralis } from "moralis";
import Heading1 from "../reusableComponents/Headings/Heading1";
import "../reusableStyles/SearchBox.css";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import ReactPaginate from "react-paginate";
import NFTsRow from "../components/Home/ReusableComponents/NFTsRow";
import ExploreNfts from "../components/NFTs/ExploreNfts";
import CollectedCards from "../components/NFTs/CollectedCards";
import NftCard from "../components/Home/Sections/NFTs/NftCard";

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
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      marginLeft: theme.spacing(5),
    },
  },
}));

function Collection(props) {
  const [nftsCollection, setnftscollections] = useState([]);
  const [emptyText, setemptyText] = useState(false);

  const [filteredImaged, setfilteredImaged] = useState([]);
  const location = useLocation();
  const carddescription = location.state.carddescription;

  // const [collectedCards, setCollectedCards] = useState(cardData);
  // const [pageNumber, setPageNumber] = useState(0);
  // const userPerPage = 8;
  // const pageVisited = pageNumber * userPerPage;
  // const PageCountNu = Math.ceil(collectedCards.length / userPerPage);

  // const changePage = ({ selected }) => {
  //     setPageNumber(selected);
  // };

  const history = useHistory();
  const [headervalue, setHeadervalue] = useState("This Week");
  const Catagoryoptions = ["This week", "Last Month", "All the time"];
  const [searchVal, setSearchVal] = useState("");

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isCollected, setIsCollected] = useState(true);
  const [isCreated, setIsCreated] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isArtistProfile, setIsArtistProfile] = useState(false);

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
      case "MyArtistProfile":
        return <Image src={Myprofile} />;
        break;
      default:
        break;
    }
    return <InboxIcon />;
  };
  const getData = async () => {
    if (carddescription) {
      var queryCollection = new Moralis.Query("LazyMintNFT");
      queryCollection.containedIn("tokenid", carddescription.NFTs);
      var data = await queryCollection.find();
      console.log(data);
      setnftscollections(data);
      setfilteredImaged(data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(carddescription);
  return (
    <div
      className={classes.root}
      style={{ width: "100%", position: "relative" }}
    >
      <CssBaseline />

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
              backgroundColor: "#4B4B4B",
              justifyContent: "end",
              alignItems: "center",
              position: "relative",
            }}
          >
            {" "}
            <div
              className="d-flex-col w-100 "
              style={{ paddingLeft: "250px", alignItems: "center" }}
            >
              <Heading1
                size="32px"
                SMsize="32px"
                weight="700"
                JFcontent="start"
                SMJFcontent="start"
                className="mb-3"
              >
                {carddescription.name}
              </Heading1>
              <div className="d-flex  justify-content-between">
                <div className="d-flex-col d-md-flex ">
                  <div>
                    <Image className="my-2 mx-2" width="16px" src={insta} />

                    <Heading1
                      JFcontent="start"
                      display="inline"
                      className="me-4"
                      SMsize="18px"
                      size="18px"
                    >
                      {carddescription.twitter}
                    </Heading1>
                  </div>

                  <div className="ms-4">
                    <Image className="my-2 mx-2" width="16px" src={mail} />

                    <Heading1
                      SMsize="18px"
                      size="18px"
                      JFcontent="start"
                      display="inline"
                    >
                      {carddescription.website}
                    </Heading1>
                  </div>
                </div>

              </div>
            </div>
            <Image
              className="my-2"
              width="180px"
              src={carddescription.LogoImage}
              style={{
                position: "absolute",
                left: "50px",
                top: "80px",
                borderRadius: "100px",
                width: "180px",
                height: "180px",
                boxShadow: "rgba(0, 0, 0, 0.35) 3px 2px 10px"
              }}
            />
          </div>{" "}
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
                              let filtered = nftsCollection.filter(
                                (carddescription) => {
                                  return carddescription.attributes.name
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
          <div className="d-flex flex-wrap justify-content-evenly mt-5">
            {filteredImaged.map((cardItem) => (
              <NftCard carddescription={cardItem.attributes} />
            ))}
            {/* 

                        {
                            <ReactPaginate
                                previousLabel={"<<"}
                                nextLabel={">>"}
                                pageCount={PageCountNu}
                                onPageChange={changePage}
                                containerClassName={"paginationArea"}
                                previousLinkClassName={"previousBtn"}
                                nextLinkClassName={"nextBtn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        } */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Collection;
