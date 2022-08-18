import { React, useEffect, useState } from "react";
import Heading from "../../../../reusableComponents/Carousel/Sections/component/Header/Heading";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import "../Card/Card.css";
import MusicThemeCards from "./MusicThemeCards";
import Skull from "../../../../Assets/fav_3.png";
import NftCard from "../NFTs/NftCard";
import { Moralis } from "moralis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function Cards(props) {
  const [owners, setowners] = useState([]);
  const [artists, setartists] = useState([]);
  useEffect(() => {
    if (props.filteredImaged.length !== 0) {
      data666();
    }
  }, [props.filteredImaged]);

  async function data666() {
    const owners1 = await Moralis.Cloud.run("getOwners");
    const artists1 = await Moralis.Cloud.run("getArtists");
    setowners(owners1);
    setartists(artists1);
  }
  const renderItems = props.filteredImaged.map((carddescription, index) => (
    <NftCard
      carddescription={carddescription}
      owners={owners[index]}
      artists={artists[index]}
    />

    // const renderItems = props.filteredImaged.map((carddescription) => (
    //   <MusicThemeCards carddescription={carddescription} />
  ));
  return (
    <div className="musiccol">
      <div className="loadingmain ">
        <div class="spinner-box">
          <div class="circle-border">
            <div class="circle-core"></div>
          </div>
        </div>
      </div>
      {props.largeimageToggle && (
        <div class="bigbox">
          <div
            className="Large_img_Music"
            style={{
              backgroundImage: `url(${Skull})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" d-flex justify-content-center align-items-end img_gradiant">
              <div
                style={{
                  maxWidth: "495px",
                  maxHeight: "106pxx",
                  alignSelf: "flex-end",
                  margin: "20px",
                }}
              >
                <Heading1
                  size="32px"
                  weigh="700"
                  display="block"
                  SMsize="30px"
                  SMmarginBottom="8px"
                >
                  Skull Project X
                </Heading1>
                <Heading1
                  size="20px"
                  weigh="500"
                  display="block"
                  SMsize="16px"
                  SMmarginBottom="8px"
                >
                  From the depths of despair comes the Skull project, a
                  collection of artwork sure to shiver your spine
                </Heading1>
              </div>
            </div>
          </div>
        </div>
      )}

      {renderItems}

      {/* -------------- */}
    </div>
  );
}

export default Cards;
