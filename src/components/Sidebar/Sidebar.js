import React, { useState } from "react";
import clsx from "clsx";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Collected from "../../Assets/collected.png";
import Collectedjpg from "../../Assets/collected.jpg";
import Created from "../../Assets/created.png";
import Favorited from "../../Assets/favorited.png";
import Myprofile from "../../Assets/myprofile.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "../../reusableStyles/SearchBox.css";
import { useHistory } from "react-router";
import { Image } from "react-bootstrap";

import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
function Sidebar({ props }) {
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const { open, setOpen } = props;

  //   const [open, setOpen] = useState(false);
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

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
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
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default Sidebar;
