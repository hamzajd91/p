import React, { useState } from "react";
import "./LearnKraft.css";
import Heading1 from "../reusableComponents/Headings/Heading1";
import NftCards from "../components/Home/Sections/NFTs/NftCards";
import Carousel_Cus from "../reusableComponents/Carousel/Sections/App";
function LearnKraft() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="home_area w-100">
      <div
        className="LearnKraft_outer_container  "
        style={{ position: "relative", marginBottom: "200px" }}
      >
        <div>
          <Heading1 size="56px" weight="900" SMsize="22px" className="pt-5">
            Learn your Kraft
          </Heading1>
        </div>
        <div
          style={{
            position: "relative",
            top: "100px",
          }}
        >
          <Carousel_Cus />
        </div>{" "}
      </div>

      <NftCards />
      <NftCards />
    </div>
  );
}

export default LearnKraft;
