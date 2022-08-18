import React, { useEffect, useState } from "react";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import "./bannerCards.css";
import Flag from "./assets/Flag.png";
import Flame from "./assets/flame1.png";
import Flame2 from "./assets/flame2.png";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Headimg1 from "../../../../reusableComponents/Headings/Heading1";
import { Moralis } from "moralis";
import { useHistory } from "react-router-dom";

function BannerCards() {
  const history = useHistory();
  const [GamefiOrignals, setGamefiOrignals] = useState();
  async function GetBAnnerData() {
    const query = new Moralis.Query("Collections");
    query.equalTo("address", "0xAa9dFc8e2938B029CD76b54522F87b3312B03457");
    query.equalTo("name", "GameFi Originals");
    const GamefiOrignalss = await query.find();
    if (GamefiOrignalss.length != 0) {
      setGamefiOrignals(GamefiOrignalss[0].attributes.NFTs);
      var GameFi = [];
      GamefiOrignalss[0].attributes.NFTs.forEach(async (TokenID) => {
        const query2 = new Moralis.Query("LazyMintNFT");
        query2.equalTo("tokenid", TokenID);
        const IPFS = await query2.find();
        GameFi.push(IPFS[0].attributes);
      });
      setGamefiOrignals(GameFi);
    }

  }
  useEffect(() => {
    GetBAnnerData();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  console.log(GamefiOrignals);

  return (
    <div className="bannerCards_area w-100 d-flex align-items-center">
      <div className="bannerCards row m-0  w-100 d-flex flex-row">
        <div className="col-12 col-md-3 px-2 py-1  col_div_bannerCards">
          <div className=" w-100  d-flex flex-column align-items-center">
            <img className="flag_image" src={Flag} />

            <div className="flame_div d-flex align-items-center justify-content-center">
              <img className="flame-icon1" src={Flame} />
              <img className="flame-icon2" src={Flame2} />
            </div>

            <div className=" flag_font">
              <Heading1
                size="17px"
                SMsize="12px"
                weight="500"
                marginBottom="10px"
                SMmarginBottom="10px"
                color="white"
                JFcontent="left"
                style={{ lineHeight: "1.4" }}
              >
                Check out our GameFi original artist NFTs to start building your
                collection!
              </Heading1>
            </div>
          </div>
        </div>

        {GamefiOrignals && (
          <div className="sliderWidth">
            <Carousel
              responsive={responsive}
              infinite={true}
              removeArrowOnDeviceType={["mobile"]}
            >
              {GamefiOrignals.map((data) => {
                return (
                  <div
                    className=" px-2 py-2 col_div_bannerCards"
                    onClick={() => {
                      history.push({
                        pathname: "./Product_details",
                        state: { carddescription: data },
                      });
                    }}
                  >
                    <div className=" w-100  d-flex justify-conteslkdjalsdjalknt-center">
                      <img className="banner_image" src={data.nft} />
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}

        {/* <div className="col-12 col-md-3 px-2 py-2 col_div_bannerCards">
          <div className=' w-100  d-flex justify-content-center'>
            <img className='banner_image' src='https://i1.wp.com/www.scdsoctagon.com/wp-content/uploads/2021/04/IMG_9648.jpeg?fit=768%2C924&ssl=1' />
          </div>
        </div>
        <div className="col-12 col-md-3 px-2 py-2 col_div_bannerCards">
          <div className=' w-100 d-flex justify-content-center'>
            <img className='banner_image' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2848d7e-4610-4cde-92d7-2fa349912410/deqkrcq-e5bbcb30-a1b4-4105-a8b7-61dc1d9d50ca.jpg/v1/fill/w_1095,h_730,q_70,strp/battlefield_2042_drone_unit_by_arctic__revolution_deqkrcq-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvZjI4NDhkN2UtNDYxMC00Y2RlLTkyZDctMmZhMzQ5OTEyNDEwXC9kZXFrcmNxLWU1YmJjYjMwLWExYjQtNDEwNS1hOGI3LTYxZGMxZDlkNTBjYS5qcGciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tGETN7A0HUQbXHEe-X4cDDsaocwPXi_mJFjwDE_PR18' />

          </div>
        </div>
        <div className="col-12 col-md-3 px-2 py-2 col_div_bannerCards">
          <div className=' w-100 d-flex justify-content-center'>
            <img className='banner_image' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7a2c5c1-006c-4ca1-8b77-638f51c489fa/der4002-23c50d7c-e346-4ebe-8d23-2db291e3b39e.jpg/v1/fill/w_1095,h_730,q_70,strp/how_to_train_your_dragon____by_hon_anim_der4002-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3YTJjNWMxLTAwNmMtNGNhMS04Yjc3LTYzOGY1MWM0ODlmYVwvZGVyNDAwMi0yM2M1MGQ3Yy1lMzQ2LTRlYmUtOGQyMy0yZGIyOTFlM2IzOWUuanBnIiwiaGVpZ2h0IjoiPD04NTQiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC9hN2EyYzVjMS0wMDZjLTRjYTEtOGI3Ny02MzhmNTFjNDg5ZmFcL2hvbi1hbmltLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Is2yW59lQvNb6PSuwawE4Trb6BZtpt0xgTTJEUKwAQ8' />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default BannerCards;
