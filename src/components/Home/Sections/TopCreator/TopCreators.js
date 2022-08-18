import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading1 from "../../../../reusableComponents/Headings/Heading1";
import { Dropdown, Image } from "react-bootstrap";
import Ellipse from "../../../../Assets/Ellipse.png";
import "./TopCreators.css";
import TopCreator from "./TopCreator";
import TopCreatorCardList from "./TopCreatorCardList";
import { Moralis } from "moralis";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function TopCreators() {
  const [topCreators, settopCreators] = useState(["sdf", "sodf"]);
  const [Coins, setCoins] = useState(["0"]);
  useEffect(() => {
    Data444();
  }, []);

  async function Data444() {
    const query = new Moralis.Query("TopSellers");
    query.descending("coins");
    query.limit(4);
    var queryResults = await query.find();
    var re = [];
    var re1 = [];
    for (var i = 0; i < queryResults.length; i++) {
      const query1 = new Moralis.Query("Profile");
      query1.equalTo("address", queryResults[i].attributes.address);
      var aaaa = await query1.find();
      if (aaaa.length != 0) {
        re.push(aaaa[0].attributes);
        re1.push(queryResults[i].attributes.coins);
      }
    }
    settopCreators(re);
    setCoins(re1);
  }

  return (
    <>
      <div className="w-100 px-0 py-3 py-md-4">
        <div className="py-2 py-lg-3 w-100">
          <div className="row w-100 mx-auto">
            <div className="d-flex flex-column flex-md-row justify-content-between w-100">
              <div className="d-flex Heading_Dropdown">
                <Heading1
                  size="24px"
                  weight="700"
                  SMsize="16px"
                  className="me-2 my-auto"
                  color="#5D34FF"
                >
                  Top Sellers
                </Heading1>
                {/* <div>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <Heading1
                        size="24px"
                        weight="700"
                        SMsize="16px"
                        className="me-2 my-auto"
                        color="#5D34FF"
                      >
                        Select Days
                      </Heading1>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>1 day</Dropdown.Item>
                      <Dropdown.Item>2 days</Dropdown.Item>
                      <Dropdown.Item>3 days</Dropdown.Item>
                      <Dropdown.Item>5 days</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row w-100 mt-2 mt-md-4">
            <div className="d-flex creator_list flex-wrap w-100 ">
              {topCreators.map((data, index) => {
                return (
                  <TopCreator
                    index={index + 1}
                    coins={Coins[index]}
                    carddescription={data}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <TopCreatorCardList />
    </>
  );
}

export default TopCreators;
