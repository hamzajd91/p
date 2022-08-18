import { React, useEffect, useState } from "react";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import CompleteCheckout from "./pages/CompleteCheckout";
import Product_details from "./pages/Product_details";
import Nfts from "./pages/Nfts";
import Create from "./pages/create";
import Fav from "./pages/Fav";
import CreateProject from "./pages/CreateProject";
import CreateNFT from "./pages/createSingle";
import ProfilePage from "./pages/ProfilePage";
import ArtistProfilePage from "./pages/ArtistProfilePage";
import ImageDetails from "./pages/ImageDetails";
import LearnKraft from "./pages/LearnKraft";
import Authenticate from "./pages/Authenticate";
import Card from "./components/Home/Sections/Card/Cards";
import MusicTheme from "./pages/MusicTheme";
import Cards_home from "./components/Home/Sections/Card/Cards_home";
import Collection from "./pages/Collection";
import BidModal from "./pages/BidModal";
import NftCardHome from "./components/Home/Sections/NFTs/NftCardHome";
import { Redirect, Route, Switch, useHistory } from "react-router";
import Admin from "./pages/Admin";
import { Moralis } from "moralis";
import CreateSingleNFT_New from "./components/NFTs/CreateSingleNFT_New";
import CreateCollection_New from "./components/NFTs/CreateCollection_New";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function BasePage() {
  const [admin1, setadmin1] = useState(false);


  // Modaal connect wallet
  const [addresses1, setaddresses1] = useState([]);

  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Redirect exact from="/Welcome" to="/home" />
      <Route exact path="/home">
        <Home />
      </Route>

      {/* <Route exact path="/Checkout">
        <Checkout />
      </Route> */}
      {admin1 ? (
        <Route exact path="/admin">
          <Admin />
        </Route>
      ) : null}
      {/* <Route exact path="/CompleteCheckout">
        <CompleteCheckout />
      </Route> */}
      <Route exact path="/Product_details">
        <Product_details />
      </Route>

      <Route exact path="/nfts">
        <Nfts />
      </Route>
      {/* <Route exact path="/authenticate">
        <Authenticate />
      </Route> */}

      <Route exact path="/create">
        <Create />
      </Route>

      <Route exact path="/fav">
        <Fav />
      </Route>

      <Route exact path="/createProject">
        <CreateProject />
      </Route>

      <Route exact path="/createSingleNft">
        <CreateNFT />
      </Route>

      <Route exact path="/profile">
        <ProfilePage />
      </Route>

      <Route exact path="/banner">
        <Card />
      </Route>

      <Route exact path="/MusicTheme">
        <MusicTheme />
      </Route>

      <Route exact path="/cardhome">
        <Cards_home />
      </Route>

      <Route exact path="/ArtistProfilePage">
        <ArtistProfilePage />
      </Route>
      {/* 
      <Route exact path="/imageDetails">
        <ImageDetails />
      </Route> */}

      {/* <Route exact path="/smallcard">
        <Card />
      </Route> */}

      <Route exact path="/LearnKraft">
        <LearnKraft />
      </Route>

      <Route exact path="/collection">
        <Collection />
      </Route>

      <Route exact path="/bidmodal">
        <BidModal />
      </Route>

      <Route exact path="/homenft">
        <NftCardHome />
      </Route>

      <Route exact path="/create_nft_new">
        <CreateSingleNFT_New/>
      </Route>

      <Route exact path="/create_collection_new">
        <CreateCollection_New/>
      </Route>
    </Switch>
  );
}

export default BasePage;
