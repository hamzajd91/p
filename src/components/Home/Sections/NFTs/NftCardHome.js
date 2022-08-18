import { React, useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import ETH from "../../../../Assets/ETH.png";
import Heart from "../../../../reusableComponents/Heart/Heart";
import CirclesHover from "../../../../reusableComponents/CirclesHover/CirclesHover";
import pika from "../../../../Assets/pika.png";

function NftCardHome(props) {
  const [favCount, setfavCount] = useState();
  const { data, data1, data2 } = props;
  const { ifImageDetailPage } = props;
  const history = useHistory();
  return (
    <div style={{ width: "265px" }}>
      <div className="mx-1 Card_parent">
        <div className="d-flex flex-column">
          <div className="position-relative">
            <div className="position-absolute card_heart">
              <Heart setfavCount={setfavCount} carddescription={data} />
            </div>
            <div
              className="image_area_2"
              onClick={() => {
                history.push({
                  pathname: "./Product_details",
                  state: { carddescription: data },
                });
              }}
            >
              {/* <Image
                className="image_style"
                src={data.nft}
                style={{ objectFit: "cover", width: "100%" }}
              /> */}

              <Image
                className="image_style"
                src={data.nft}
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
                  backgroundImage: `url(${data.nft})`,
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
              {/* {` ${data.name} `} */}
              {data.name.length > 21 ? (
                <>{data.name.slice(0, 21) + "..."} </>
              ) : (
                <>{data.name} </>
              )}
            </Heading1>

            <div className="w-100 d-flex justify-content-between  pb-3 ">
              <div
                className="d-flex align-items-center "
                style={{ marginBottom: "-10px", paddingTop: "4px" }}
              >
                {data.currency == "Pika" ? (
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
                  {/* {` ${data.views} `}  */}{" "}
                  {data.price / 1000000000000000000}
                </Heading1>
              </div>

              <CirclesHover artist={data1} owner={data2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftCardHome;
