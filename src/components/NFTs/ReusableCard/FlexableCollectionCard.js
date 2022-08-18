import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Heading1 from "../../../reusableComponents/Headings/Heading1";
import { Image } from "react-bootstrap";
import dot from "./../../../Assets/dot.svg";
import Heart from "../../../reusableComponents/Heart/Heart";
import { useHistory } from "react-router";
function FlexableCollectionCard(props) {

  const history = useHistory();

  const { data } = props;
  return (
    <div className=" p-0 py-2 mx-1 FlexableCard_outer " style={{ maxHeight: "1200px" }} >
      <div className="mx-1 bg-danger">
        <div className="d-flex flex-column">
          <div className="position-relative">
            <div className="position-absolute card_heart">
              <Heart />
            </div>
            <div className="card_image_area ">
              <img
                src={data.nft}
                className=""
                style={{
                  width: "-webkit-fill-available",
                  width: "298px",
                  height: "217px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div
            className="card_data p-4 pb-1 bg-white " onClick={() => { history.push({ pathname: "./collection", state: { collectionDetails: data } }); }}
            style={{ border: "1px solid #DDDDDD" }}
          >
            <Heading1
              color="inherit"
              size="24px"
              weight="700"
              SMsize="18px"
              JFcontent="flex-start"
              className="w-auto me-3"
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
            <div className="d-flex justify-content-between">

              <div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexableCollectionCard;
