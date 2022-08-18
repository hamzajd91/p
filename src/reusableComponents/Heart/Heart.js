import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Moralis } from "moralis";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Heart.css";
import web3 from "../../Moralis/MoralisConfig";

Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function Heart({ setfavCount, carddescription }) {

  const Save = () => {
    // Create a new instance of that class.
    const query = new Moralis.Query("Favorites");
    var res = Moralis.User.current().attributes.ethAddress
    if (res) {
      query.equalTo("tokenid", carddescription.tokenid);
      query.containedIn("address1", [res.toLowerCase()]);
      query.find().then((queryResults) => {
        if (queryResults.length == 0) {
          const query1 = new Moralis.Query("Favorites");
          query1.equalTo("tokenid", carddescription.tokenid);
          query1.find().then((queryResults1) => {
            if (queryResults1.length == 0) {
              const favorites = Moralis.Object.extend("Favorites");
              // Create a new instance of that class.
              const gameScore = new favorites();
              gameScore.set("tokenid", carddescription.tokenid);
              gameScore.set("address1", [res.toLowerCase()]);
              gameScore.set("count", 1);
              gameScore.save();
              setfavCount(1);
            } else {
              console.log(queryResults1[0].attributes);
              queryResults1[0].attributes.address1.push(res.toLowerCase());
              var c = queryResults1[0].attributes.count;
              c = c + 1;
              queryResults1[0].set("count", c);
              queryResults1[0].save();
              setfavCount(c);
            }
          });
        } else {
        }
      });

    }
  };
  const [heartToggle, setHeartToggle] = useState(false);

  return (
    <div>
      <FontAwesomeIcon
        icon={faHeart}
        onClick={(e) => {
          Save();
          setHeartToggle(!heartToggle);
        }}
        className={`${heartToggle ? "heart-fill" : "heart-stroke"}`}
      />
    </div>
  );
}

export default Heart;
