import { Button } from "react-bootstrap";
import React from "react";
import { Image } from "react-bootstrap";
import "./FavCard.css";
import createImg from "../../../Assets/create_png.png";
import Heading1 from "../../../reusableComponents/Headings/Heading1";

import img1 from "../../../Assets/fav_1.png";
import img2 from "../../../Assets/fav_2.png";
import img3 from "../../../Assets/fav_3.png";
import img4 from "../../../Assets/fav_4.png";
import img5 from "../../../Assets/img_5.png";
import { styled } from "@material-ui/styles";

function FavCard(props) {
  const { data } = props;
  const Img_fav = styled(Image)`
    width: 10px;
  `;
  console.log(data);
  return (
    <div className="p-0 Collection_outer mb-3">
      <div
        className="d-flex flex-column justify-content-end"
        style={{
          width: "321px",
          height: "320px",
          position: "absolute",
          backgroundImage: `url(${img5})`,
          zIndex: "5",
        }}
      >
        <div>
          <Heading1
            size="18px"
            SMsize="18"
            weight="700"
            marginBottom="0px"
            SMmarginBottom="0px"
            color="White"
            JFcontent="left"
            className=""
            style={{ marginTop: "0px", marginLeft: "10px" }}
          >
            {data.name}
          </Heading1>
        </div>
        <div>
          <Heading1
            size="15px"
            SMsize="15"
            weight="500"
            marginBottom="0px"
            SMmarginBottom="0px"
            color="White"
            JFcontent="left"
            className=""
            style={{
              marginTop: "0px",
              paddingInline: "10px",
              marginBottom: "10px",
            }}
          >
            {data.description}
          </Heading1>
        </div>
      </div>

      <div style={{ height: "100%", width: "320px", zIndex: "-1" }}>
        <div
          className="d-flex flex-column flex-fill w-100"
          style={{ height: "50%" }}
        >
          <div className="d-flex w-100" style={{ height: "100%" }}>
            <div className="smallSquare">
              <img src={data.LogoImage} style={{ width: "inherit" }} />
            </div>
            <div className="smallSquare">
              <img src={data.LogoImage} style={{ width: "inherit" }} />
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-fill w-100"
          style={{ height: "50%" }}
        >
          <div className="d-flex w-100" style={{ height: "100%" }}>
            <div className="smallSquare">
              <img src={data.LogoImage} style={{ width: "inherit" }} />
            </div>
            <div className="smallSquare">
              <img src={data.LogoImage} style={{ width: "inherit" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavCard;
