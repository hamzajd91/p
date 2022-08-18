import { React, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import Cards from "../components/Home/Sections/Card/Cards";
import Cards_home from "../components/Home/Sections/Card/Cards_home";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu_slider from "../components/Home/Sections/Menu_slider/Menu_slider";
import Heading1 from "../reusableComponents/Headings/Heading1";
import "./MusicTheme.css";
import { Moralis } from "moralis";
import { useLocation } from "react-router";
import search from "../Assets/search.svg";
Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";

function MusicTheme() {
  const [SeacrhInput, setSeacrhInput] = useState("");
  const location = useLocation();

  const [largeimageToggle, setLargeimageToggle] = useState(false);
  const [emptyText, setemptyText] = useState(false);

  const [cardData, setcardData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [filteredImaged, setfilteredImaged] = useState([]);
  const [Category, setCategory] = useState();

  const loadUserItems = async () => {
    console.log("load items started");
    console.log(Category);
    if (Category == undefined) {
      const ownedItems = await Moralis.Cloud.run("getItemsAll");

      setcardData(ownedItems);
      setfilteredImaged(ownedItems);
    } else {
      const ownedItems = await Moralis.Cloud.run(Category);

      setcardData(ownedItems);
      setfilteredImaged(ownedItems);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (Category == undefined) {
        const ownedItems = await Moralis.Cloud.run("getItemsAll");

        setcardData(ownedItems);
        setfilteredImaged(ownedItems);
      } else {
        const ownedItems = await Moralis.Cloud.run(Category);

        setcardData(ownedItems);
      }
      console.log("filtering", cardData);
      setSeacrhInput(location.state.searchVal);
      setLargeimageToggle(false);

      let filtered = cardData.filter((carddescription) => {
        return carddescription.name
          .toLowerCase()
          .includes(SeacrhInput.toLowerCase());
      });
      setfilteredImaged(filtered);
      console.log("Passed Param", filtered);
      if (filtered.length === 0) {
        setemptyText(true);
      } else {
        setemptyText(false);
      }
    }

    if (location.state) {
      fetchData();
    } else {
      loadUserItems();
    }

    setLoading(false);
  }, [Category]);

  console.log(filteredImaged);
  const onChange = (event) => {
    setSeacrhInput(event.target.value);
  };
  return (
    <>
      {!Loading ? (
        <>
          <div className="d-flex flex-column align-itmes-center justify-content-center">
            <div style={{ paddingTop: "50px" }}>
              <Menu_slider
                Category={Category}
                setCategory={setCategory}
                largeimageToggle={largeimageToggle}
                setLargeimageToggle={setLargeimageToggle}
              />
              <Heading1
                size="56px"
                SMsize="50px"
                weight="900"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="black"
                JFcontent="center"
                className=""
                style={{ marginTop: "30px", textAlign: "center" }}
              >
                Discover your NFT's <br />
              </Heading1>

              <Heading1
                size="24px"
                SMsize="22px"
                weight="500"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="black"
                JFcontent="center"
                className=""
                style={{ marginTop: "15px", textAlign: "center" }}
              >
                Welcome to The KRAFT, where you can discover, buy, sell, <br />
                and KRAFT your own NFTs
              </Heading1>
              <div className=" d-flex justify-content-center ">
                <div
                  className="banner_Input lh-1 d-flex"
                  style={{
                    width: "100%",
                    maxWidth: "808px",
                    height: "61px",
                    borderRadius: "800px",
                    display: "flex",
                    marginTop: "30px",
                    marginBottom: "35px",
                    marginInline: "5px",
                    paddingLeft: "10px",

                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
                  }}
                >
                  <div className="w-100 input_div">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input_value"
                      id="searchinput"
                      value={SeacrhInput}
                      onChange={onChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          console.log(cardData, "before filter");
                          setLargeimageToggle(false);

                          let filtered = cardData.filter((carddescription) => {
                            return carddescription.name
                              .toLowerCase()
                              .includes(SeacrhInput.toLowerCase());
                          });
                          setfilteredImaged(filtered);
                          console.log(filtered, "after filter");

                          if (filtered.length === 0) {
                            setemptyText(true);
                          } else {
                            setemptyText(false);
                          }
                        }
                      }}
                    />
                  </div>

                  <div
                    className="search_div"
                    onClick={() => {
                      console.log(cardData, "before filter");
                      setLargeimageToggle(false);

                      let filtered = cardData.filter((carddescription) => {
                        return carddescription.name
                          .toLowerCase()
                          .includes(SeacrhInput.toLowerCase());
                      });
                      setfilteredImaged(filtered);
                      console.log(filtered, "after filter");

                      if (filtered.length === 0) {
                        setemptyText(true);
                      } else {
                        setemptyText(false);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faSearch} className="search_icon" />
                  </div>
                </div>
              </div>
              {emptyText && (
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Heading1
                    size="56px"
                    SMsize="50px"
                    weight="700"
                    marginBottom="0px"
                    SMmarginBottom="0px"
                    color="rgb(176 176 176);"
                    JFcontent="center"
                    className=""
                    style={{ marginTop: "30px", textAlign: "center" }}
                  >
                    No NFTs found <br />
                  </Heading1>
                </div>
              )}
              <Cards
                filteredImaged={filteredImaged}
                largeimageToggle={largeimageToggle}
                setLargeimageToggle={setLargeimageToggle}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default MusicTheme;
