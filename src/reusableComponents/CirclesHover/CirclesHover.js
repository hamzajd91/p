import React from "react";
import Heading1 from "../Headings/Heading1";

function CirclesHover({ artist, owner }) {
  console.log("Artist ", artist, owner);
  return (
    <div>
      <div className="d-flex justify-content-end w-100 ">
        <div className="cardCircle slide-top" style={{ marginRight: "00px" }}>
          {artist ? (
            <img
              className="cardCircleImg"
              src={artist.profile}
              style={{ width: "30px", height: "30px", borderRadius: "100%" }}
            />
          ) : (
            <img
              className="cardCircleImg"
              src="https://sustainabletravel.org/wp-content/uploads/Sustainability-Assessment-Icon.png"
              style={{ width: "30px", height: "30px", borderRadius: "100%" }}
            />
          )}
        </div>

        <div className="namehover">
          <Heading1
            color="inherit"
            size="16px"
            weight="700"
            SMsize="15px"
            JFcontent="flex-end"
            className="w-auto "
            style={{ textAlign: "right" }}
          >
            Owner
          </Heading1>
        </div>

        <div className="cardCircle slide-top" style={{ marginRight: "20px" }}>
          <img
            className="cardCircleImg"
            src="https://sustainabletravel.org/wp-content/uploads/Sustainability-Assessment-Icon.png"
            style={{ width: "30px", height: "30px", borderRadius: "100%" }}
          />
        </div>

        <div className="namehover">
          <Heading1
            color="inherit"
            size="16px"
            weight="700"
            SMsize="15px"
            JFcontent="flex-end"
            className="w-auto "
            style={{ textAlign: "right" }}
          >
            Collection
          </Heading1>
        </div>

        <div className="cardCircle slide-top" style={{ marginRight: "40px" }}>
          {owner ? (
            <img
              className="cardCircleImg"
              src={owner.profile}
              style={{ width: "30px", height: "30px", borderRadius: "100%" }}
            />
          ) : (
            <img
              className="cardCircleImg"
              src="https://sustainabletravel.org/wp-content/uploads/Sustainability-Assessment-Icon.png"
              style={{ width: "30px", height: "30px", borderRadius: "100%" }}
            />
          )}
        </div>

        <div className="namehover">
          <Heading1
            color="inherit"
            size="16px"
            weight="700"
            SMsize="15px"
            JFcontent="flex-end"
            className="w-auto "
            style={{ textAlign: "right", paddingRight: "36px" }}
          >
            Artist
          </Heading1>
        </div>
      </div>
    </div>
  );
}

export default CirclesHover;
