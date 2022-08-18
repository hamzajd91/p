import React, { useEffect, useState } from "react";
import MusicThemeCards from "../components/Home/Sections/Card/MusicThemeCards";
import Heading1 from "../reusableComponents/Headings/Heading1";
import { Moralis } from "moralis";

import Card from "../components/Home/Sections/Card/Card";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function HomeCollection() {
  useEffect(() => {
    getData();
  }, []);
  const [filteredImaged, setfilteredImaged] = useState([]);
  const getData = async () => {
    const query = new Moralis.Query("Collections");
    query.limit(8);
    var queryResults = await query.find();
    setfilteredImaged(queryResults);
  };

  const renderItems = filteredImaged.map((carddescription) => (
    <Card carddescription={carddescription.attributes} type="collections" />
  ));

  return (
    <div className="" style={{ marginBottom: "9rem" }}>
      <Heading1
        size="24px"
        weight="700"
        SMsize="20px"
        className=""
        color="#5D34FF"
        JFcontent="left"
        paddingInline="18px"
        paddingBlock="18px"
      >
        Top Collections
      </Heading1>

      <div className="d-flex w-100 justify-content-center align-items-center flex-wrap">
        {renderItems}
      </div>
    </div>
  );
}

export default HomeCollection;
