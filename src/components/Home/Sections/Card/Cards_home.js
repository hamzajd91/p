import { React, useState, useEffect } from "react";
import "../Card/Cards_home.css";
import Card from "./Card";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import exclusive from "./assets/exclusive.png";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import { Moralis } from "moralis";
import { useHistory } from "react-router-dom";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function Cards_home() {
  const [GamefiOrignals, setGamefiOrignals] = useState();
  const GetBAnnerData = async () => {
    const query = new Moralis.Query("Collections");
    query.equalTo("address", "0x73e58a6E63B2E3C719B51294aE9E93b3F24b977f");
    query.equalTo("name", "Pika Mascots");
    const GamefiOrignalss = await query.find();
    if (GamefiOrignalss.length !== 0) {
      setGamefiOrignals(GamefiOrignalss[0].attributes.NFTs);
      var GameFi = [];
      GamefiOrignalss[0].attributes.NFTs.forEach(async (TokenID) => {
        const query2 = new Moralis.Query("LazyMintNFT");
        query2.equalTo("tokenid", TokenID);
        query2.limit(5);
        const IPFS = await query2.find();
        GameFi.push(IPFS[0].attributes);
      });
      setGamefiOrignals(GameFi);
    }

  };
  useEffect(() => {
    GetBAnnerData();
  }, []);
  const history = useHistory();
  return (
    <div className="w-100 px-4 py-3 py-md-4 mb-3 card_main_container">
      <img
        className="kraftimg"
        style={{ width: "fit-content", marginLeft: "38px" }}
        src={exclusive}
      />
      <div className="main_row  ">
        {GamefiOrignals && (
          <>
            {GamefiOrignals.slice(0, 1).map((data) => {
              return (
                <div
                  className="col-12 col-lg-5 px-0 ps-lg-0  "
                  onClick={() => {
                    history.push({
                      pathname: "./Product_details",
                      state: { carddescription: data },
                    });
                  }}
                >
                  <div className="py-1">
                    <div
                      className="Large_img shadowdiv"
                      style={{
                        backgroundImage: `url(${data.nft})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className=" d-flex justify-content-center align-items-end img_gradiant"
                        style={{ borderRadius: "8px" }}
                      >
                        <div
                          style={{
                            maxWidth: "495px",
                            maxHeight: "106pxx",
                            alignSelf: "flex-end",
                            margin: "20px",
                          }}
                        >
                          <Heading1 size="30px" weight="600" display="block">
                            {data.name}
                          </Heading1>
                          <Heading1
                            size="20px"
                            weigh="500"
                            display="block"
                            SMsize="16px"
                            SMmarginBottom="8px"
                          >
                            {data.description}
                          </Heading1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-6 col-lg-5 col-md-6  px-3 px-lg-2 ">
              <div
                className="img_div_flex gx-5 py-0 small_div small_img_cont "
                style={{ display: "flex", flexDirection: "row" }}
              >
                {GamefiOrignals.slice(1).map((data) => {
                  return <Card carddescription={data} type="noroute" />;
                })}
              </div>
            </div>
          </>
        )}

        {/* <div
          className="d-flex flex-column justify-content-"
          style={{ maxWidth: "400px" }}
        >
          <Heading1
            size="50px"
            SMsize="45px"
            weight="bolder"
            marginBottom="10px"
            SMmarginBottom="10px"
            color="black"
            JFcontent="left"
            display="inline"
            style={{
              marginTop: "100px",
              paddingLeft: "10px",
              lineHeight: "1.1",
            }}
          >
            Buy, Create and Sell{" "}
            <Heading1
              display="inline"
              size="50px"
              SMsize="45px"
              weight="800"
              marginBottom="10px"
              SMmarginBottom="10px"
              color="#5D34FF"
              JFcontent="left"
            >
              NFTs
            </Heading1>
          </Heading1>

          <div className="d-flex justify-content-start pt-2">
            <div className="D1 d-flex flex-column set_wallet_div ">
              <img style={{ width: "fit-content" }} src={icon1} />

              <div>
                <Heading1
                  size="30px"
                  SMsize="25px"
                  weight="700"
                  marginBottom="0px"
                  SMmarginBottom="0px"
                  color="#5D34FF"
                  JFcontent="left"
                  className=""
                  style={{
                    marginTop: "30px",
                    paddingLeft: "10px",
                    lineHeight: "1.1",
                  }}
                >
                  Setup Your Wallet
                </Heading1>
              </div>
              <div>
                <Heading1
                  size="16px"
                  SMsize="16px"
                  weight="600"
                  marginBottom="10px"
                  SMmarginBottom="10px"
                  color="black"
                  JFcontent="left"
                  className=""
                  style={{
                    marginTop: "10px",
                    paddingLeft: "10px",
                    lineHeight: "28px",
                  }}
                >
                  On the KRAFT, you can buy your NFTs with PIKA or ETH to begin,
                  with more tokens coming soon. Simply connect your wallet,
                  place your bids or purchase items easily through our fluid
                  interface.
                </Heading1>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Cards_home;
