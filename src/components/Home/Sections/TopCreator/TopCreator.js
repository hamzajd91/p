import React from "react";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import { Dropdown, Image } from "react-bootstrap";
import Ellipse from "../../../../Assets/Ellipse.png";
import { useHistory } from "react-router-dom";
function TopCreator({ index, coins, carddescription }) {
  const history = useHistory();
  return (
    <div
      className=" d-flex creator flex-row justify-content-start"
      onClick={() => {
        history.push({
          pathname: "/ArtistProfilePage",
          state: { Address: carddescription.address },
        });
      }}
    >
      <div className=" my-auto me-4 ms-2">
        <Heading1
          size="28px"
          SMsize="24px"
          color="#999999 "
          // style={{ textShadow: "1px 1px 1px #2928285e" }}
        >
          {index}
        </Heading1>
      </div>
      <div className="me-3 ">
        <Image
          className='topcreateimage'
          style={{ width: "60px", height: "60px", borderRadius: "50px" }}
          src={carddescription.profile}
        />
      </div>
      <div className="d-flex flex-column my-auto " style={{width:"100px"}}>
        <Heading1
          color="inherit"
          size="18px"
          weight="500"
          SMsize="16px"
          JFcontent="flex-start"
          className="w-auto mb-0"
          style={{
            textShadow: "1px 2px 2px #2928285e",
            textTransform: "uppercase",
          }}
        >
          {carddescription.fullName}
        </Heading1>
        <Heading1
          color="inherit"
          size="16px"
          weight="500"
          SMsize="16px"
          JFcontent="flex-start"
          className="w-auto text-muted mb-0"
        >
          {parseFloat(coins).toFixed(2)}
        </Heading1>
      </div>
    </div>
  );
}

export default TopCreator;
