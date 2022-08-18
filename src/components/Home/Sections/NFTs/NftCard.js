import { React, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import ETH from "../../../../Assets/ETH.png";
import pika from "../../../../Assets/pika.png";
import Heart from "../../../../reusableComponents/Heart/Heart";
import CirclesHover from "../../../../reusableComponents/CirclesHover/CirclesHover";

function NftCard({ carddescription, owners, artists }) {
  console.log("NFT Card", artists, owners);
  const history = useHistory();

  const [favCount, setfavCount] = useState();
  return (
    <div style={{}} className="mainCard" style={{ width: "277px" }}>
      <div className="mx-2 Card_parent">
        <div className="d-flex flex-column cardboxshadow">
          <div className="position-relative">
            <div className="position-absolute card_heart">
              <Heart
                setfavCount={setfavCount}
                carddescription={carddescription}
              />
            </div>
            <div
              onClick={() => {
                history.push({
                  pathname: "./Product_details",
                  state: { carddescription: carddescription },
                });
              }}
              className="image_area_2"
            >
              <Image
                className="image_style"
                src={carddescription.nft}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  position: "absolute",
                  zIndex: "2",
                  backdropFilter: "blur(5px) brightness(0.8)",
                }}
              />

              <div
                className="image_style"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  position: "relative",
                  backgroundImage: `url(${carddescription.nft})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
          <div
            className="card_data p-2 pb-1 bg-white"
            style={{ border: "1px solid #DDDDDD" }}
          >
            <Heading1
              color="inherit"
              size="16px"
              weight="700"
              SMsize="18px"
              JFcontent="flex-start"
              className=" me-3 text-overflow"
              style={{ height: "10px" }}
            >
              {carddescription.name.length > 21 ? (
                <>{carddescription.name.slice(0, 21) + "..."} </>
              ) : (
                <>{carddescription.name} </>
              )}
            </Heading1>

            <Heading1
              color="inherit"
              size="16px"
              weight="300"
              SMsize="14px"
              JFcontent="flex-start"
              className="w-auto me-3 pe-3 mb-4 mb-lg-5 text-muted"
            >
              {/* {` ${data.text} `} */}
            </Heading1>
            <div className="w-100 d-flex justify-content-between  pb-3 ">
              <div
                className="d-flex align-items-center "
                style={{ marginBottom: "-10px", paddingTop: "4px" }}
              >
                {carddescription.currency == "Pika" ? (
                  <Image
                    src={pika}
                    className="me-1 mb-2"
                    style={{ width: "18px", height: "18px" }}
                  />
                ) : (
                  <Image
                    src={ETH}
                    className="me-1 mb-2"
                    style={{ width: "10px", height: "18px" }}
                  />
                )}

                <Heading1
                  color="inherit"
                  size="16px"
                  weight="700"
                  SMsize="15px"
                  JFcontent="flex-start"
                  className="w-auto me-3 pe-3 "
                >
                  {/* {` ${data.views} `}  */}
                  <span style={{ marginLeft: "4px" }}>
                    {carddescription.price / 1000000000000000000}
                  </span>
                </Heading1>
              </div>

              {artists && owners && (
                <CirclesHover artist={artists} owner={owners} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
