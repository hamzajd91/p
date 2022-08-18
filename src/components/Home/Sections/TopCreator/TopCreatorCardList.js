import { React, useState, useEffect } from "react";
import NFTsRow from "../../ReusableComponents/NFTsRow";
import Kraftimg from "../../../../Assets/kraft.png";
import { Moralis } from "moralis";

Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function TopCreatorCardList() {
  const [loading, setloading] = useState(true);

  const [result, setresult] = useState([]);
  const [result2, setresult2] = useState([]);
  const [owners, setowners] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const query = new Moralis.Query("Favorites");
    query.descending("count");
    query.limit(3);
    var queryResults = await query.find();

    var re = [];
    var re2 = [];
    var owner = [];
    for (var i = 0; i < queryResults.length; i++) {
      const query1 = new Moralis.Query("LazyMintNFT");

      query1.equalTo("tokenid", queryResults[i].attributes.tokenid);
      var aaaa = await query1.find();
      re.push(aaaa[0].attributes);
      setresult([...re]);
      const query2 = new Moralis.Query("Profile");
      query2.equalTo("address", aaaa[0].attributes.address);
      var bbbb = await query2.find();
      if (bbbb.length === 0) {
        re2.push(["none"]);
      } else {
        re2.push(bbbb[0].attributes);
      }
      const query3 = new Moralis.Query("Profile");
      if (aaaa[0].attributes.addresses.length === 0) {
        query3.equalTo("address", aaaa[0].attributes.address);
      } else {
        query3.equalTo("address", aaaa[0].attributes.addresses[0]);
      }
      var cccc = await query3.find();
      owner.push(cccc[0].attributes);
    }

    console.log(re2);
    setresult2([...re2]);
    setowners([...owner]);
  };

  const fixdata = {
    heading: "Top Favorites",
    text: "Here are the top three most liked NFTs",
    buttonText: "Learn to Kraft",
    Img: Kraftimg,
  };

  return (
    <NFTsRow
      cardData={result}
      cardData1={result2}
      cardData2={owners}
      fixdata={fixdata}
    />
  );
}

export default TopCreatorCardList;
