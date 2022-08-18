import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "../components/Home/Home.css";
import Cards from "../components/Home/Sections/Card/Cards";
import Heading1 from "../reusableComponents/Headings/Heading1";
import NftCards from "../components/Home/Sections/NFTs/NftCards";
import TopCreators from "../components/Home/Sections/TopCreator/TopCreators";
import BannerCards from "../components/Home/Sections/bannerCards/bannerCards";
import Footer from "../pages/Footer";
import Cards_home from "../components/Home/Sections/Card/Cards_home";
import { useHistory } from "react-router-dom";
import Menu_slider from "../components/Home/Sections/Menu_slider/Menu_slider";
import HomeCollection from "./HomeCollection";
import Card from "../components/Home/Sections/Card/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Moralis } from "moralis";

import Home_Slider from "../components/Home_Slider/Home_Slider";
import SetpriceModel from "../pages/SetpriceModel";

import SliderMode from "../reusableComponents/SliderModel/SliderMode;";

Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";


function Home() {

  const [homeslider, sethomeslider] = useState(true);
  // const GetUser = async () => {
  //   const UserAddress = Moralis.User.current().attributes.ethAddress;
  //   const UserProfile = new Moralis.Query("Profile");
  //   UserProfile.equalTo("address", UserAddress);
  //   const Profile = await UserProfile.find();
  //   if (Profile[0]) {
  //     sethomeslider(Profile[0].attributes.turtorials);
  //   }
  // // };
  // useEffect(() => {
  //   // GetUser();
  //   // web3.eth.getAccounts().then((res) => {
  //   //   if (res[0] === undefined) {
  //   //     Moralis.User.logOut();
  //   //   }
  //   // });
  // }, []);

  const history = useHistory();


  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="home_area w-100">

      {homeslider && (
        <div className='sliderDiv' onClick={(e) => {
          sethomeslider(false);
        }}>
          <div className="homeslider" onClick={(e) => {
            e.stopPropagation();
          }}>
            <Home_Slider />

            <FontAwesomeIcon icon={faTimes} className="slider_close"
              onClick={(e) => {
                sethomeslider(false);
              }}
            />

          </div>
        </div>
      )}

      <div className="home_outer_container text-white container-fluid">
        <div className="home_inner_container w-100">
          <div className="d-flex justify-content-center align-content-center align-items-center w-100 banner_content">
            <div className="d-flex flex-column align-items-center w-100">
              <Heading1
                size="56px"
                weight="900"
                SMsize="22px"
                marginBottom="40px"
                SMmarginBottom="10px"
                className="text-focus-in  textwidth"
                style={{ textAlign: "center" }}
              >
                Discover, Buy, Sell, and Kraft your own NFTs
              </Heading1>
              <Heading1
                size="24px"
                weight="700"
                marginBottom="35px"
                SMmarginBottom="25px"
                SMsize="10px"
                className="fade-in-bottom "
                style={{ textAlign: "center", width: "49% " }}
              >
                Welcome to The KRAFT, where you can discover, buy, sell, and
                KRAFT your own NFTs
              </Heading1>

              <div className="banner_Input lh-1 d-flex fade-in-bottom2">
                <div className="w-100 input_div ">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input_value"
                    value={searchVal}
                    onChange={(event) => setSearchVal(event.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log("Enter Pressed");
                        history.push({
                          pathname: "/MusicTheme",
                          state: { searchVal: searchVal },
                        });
                      }
                    }}
                  />
                </div>
                <div
                  className="search_div_home"
                  onClick={() => {
                    history.push({
                      pathname: "/MusicTheme",
                      state: { searchVal: searchVal },
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} className="search_icon" />
                </div>

              </div>

              <div>-----------------------------------------------</div>
              <div className=" d-flex justify-content-center fade-in-bottom2">
                <div
                  className="banner_Input lh-1 d-flex"
                  style={{
                    width: "100%",
                    maxWidth: "808px",
                    height: "61px",
                    borderRadius: "800px",
                    display: "flex",
                    marginTop: "30px",
                    marginBottom: "35px",
                    marginInline: "5px",
                    paddingLeft: "10px",

                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
                  }}
                >
                  <div className="w-100 input_div">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input_value"
                      id="searchinput"
                      value={searchVal}
                    onChange={(event) => setSearchVal(event.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log("Enter Pressed");
                        history.push({
                          pathname: "/MusicTheme",
                          state: { searchVal: searchVal },
                        });
                      }
                    }}
                    />
                  </div>

                  <div
                    className="search_div"
                    onClick={() => {
                    history.push({
                      pathname: "/MusicTheme",
                      state: { searchVal: searchVal },
                    });
                  }}
                  >
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                  </div>
                </div>
              </div>

              <div>-----------------------------------------------</div>


            </div>
          </div>
        </div>
      </div>
      <Cards_home />
      <NftCards />
      <TopCreators />
      <HomeCollection />
      <BannerCards />
      <br />
      <br />
      <Footer />


    </div>
  );
}

export default Home;
