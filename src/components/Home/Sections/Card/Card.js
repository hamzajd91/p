import React from "react";

import { useHistory } from "react-router";

import Skull from "../../../../Assets/fav_4.png";
import img5 from "../../../../Assets/img_5.png";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";

function Card({ carddescription, type }) {
  const history = useHistory();
  console.log("aaa " + carddescription);
  return (
    <div
      className=" px-1 py-1  small_div small_img_cont "
      style={{ width: "280px", float: "left" }}
      onClick={() => {
        if (type != "noroute") {
          history.push({
            pathname: "./collection",
            state: { carddescription: carddescription },
          });
        } else {
          history.push({
            pathname: "./Product_details",
            state: { carddescription: carddescription },
          });
        }
      }}
    >
      <div className="">
        <img
          src={
            type === "collections"
              ? carddescription.LogoImage
              : carddescription.nft
          }
          className="shadowdiv"
          style={{
            width: "271px",
            height: "271px",
            position: "absolute",
            backgroundImage: `url(${img5})`,
            zIndex: "0",
            borderRadius: "8px",
          }}
        />

        <div
          className="img_gradiant d-flex flex-column justify-content-end align-items-center"
          style={{
            width: "271px",
            height: "271px",
            position: "absolute",
            zIndex: "2",
            paddingInline: "25px",
            paddingBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <Heading1 size="30px" weight="600" display="block">
            {carddescription.name}
          </Heading1>
        </div>
      </div>
    </div>
  );
}

export default Card;
