import React from "react";
import { useHistory } from "react-router";
import Skull from "../../../../Assets/fav_4.png";
import img5 from "../../../../Assets/img_5.png";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import Fade from "react-reveal/Fade";

function MusicThemeCards({ carddescription }) {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push({
          pathname: "./Product_details",
          state: { carddescription: carddescription },
        });
      }}
    >
      <div class="Music_box" style={{ cursor: "pointer" }}>
        <div className="">
          <img
            src={carddescription.LogoImage}
            className="shadowdiv"
            style={{
              width: "330px",
              height: "330px",
              position: "absolute",
              // backgroundImage: `url(${img5})`,

              borderRadius: "8px",
            }}
          />

          <div
            className="img_gradiant d-flex flex-column justify-content-end align-items-center"
            style={{
              width: "330px",
              height: "330px",
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
    </div>
  );
}

export default MusicThemeCards;
