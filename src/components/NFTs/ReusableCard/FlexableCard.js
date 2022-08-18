import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import Heading1 from "../../../reusableComponents/Headings/Heading1";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import dot from "./../../../Assets/dot.svg";
import ETH from "./../../../Assets/ETH.png";
import Heart from "../../../reusableComponents/Heart/Heart";

import CirclesHover from "../../../reusableComponents/CirclesHover/CirclesHover";
import { Moralis } from "moralis";
async function FlexableCard(props) {
  const { data } = props;

  var queryCollection = new Moralis.Query("Collections");
  queryCollection.containedIn("NFTs", data.NFTs);
  const [favCount, setfavCount] = useState();
  const history = useHistory();
  return (
    <div className=" mainCard ">
      <div className="mx-2 Card_parent">
        <div className="d-flex flex-column">
          <div className="position-relative">
            <div className="position-absolute card_heart">
              <Heart setfavCount={setfavCount} carddescription={data} />
            </div>
            <div onClick={() => {}} className="image_area_2">
              <Image
                className="image_style"
                src=""
                style={{ objectFit: "cover", width: "100%" }}
              />
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
              className="w-auto me-3 "
              style={{ height: "10px" }}
            >
              {` ${data.name} `}
            </Heading1>

            <Heading1
              color="inherit"
              size="16px"
              weight="300"
              SMsize="14px"
              JFcontent="flex-start"
              className="w-auto me-3 pe-3 mb-4 mb-lg-5 text-muted"
            >
              {` ${data.description} `}
            </Heading1>
            <div className="w-100 d-flex justify-content-between  pb-3 ">
              <div
                className="d-flex align-items-center "
                style={{ marginBottom: "-10px", paddingTop: "4px" }}
              >
                <Image
                  src={ETH}
                  className="me-1 mb-2"
                  style={{ width: "10px", height: "18px" }}
                />
                <Heading1
                  color="inherit"
                  size="16px"
                  weight="700"
                  SMsize="15px"
                  JFcontent="flex-start"
                  className="w-auto me-3 pe-3 "
                >
                  {data.price / 1000000000000000000}

                  <span style={{ marginLeft: "4px" }}>ETH</span>
                </Heading1>
              </div>
              <div>
                <CirclesHover />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexableCard;
