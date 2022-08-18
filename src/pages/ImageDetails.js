import React, { useState } from "react";
import "./LearnKraft.css";
import Heading1 from "../reusableComponents/Headings/Heading1";
import NftCards from "../components/Home/Sections/NFTs/NftCards";
import send from "../Assets/send.svg";
import ImageDetailsBanner from "../Assets/ImageDetailBanner.svg";
import heart from "../Assets/heart.svg";
import plus from "../Assets/plus.svg";
import view from "../Assets/view.svg";
import { Image } from "react-bootstrap";
import ButtonStyled from "../reusableComponents/Buttons/ButtonStyled";
import Footer from "./Footer";
import kraft from "../Assets/kraft.png";
import flame from "../Assets/flame.png";
import NFTsRow from "../components/Home/ReusableComponents/NFTsRow";
function ImageDetails() {
  const [searchVal, setSearchVal] = useState("");
  const fixdata = {
    heading: "Learn your",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    buttonText: "Ver tudo",
    Img: kraft,
  };
  const fixdata2 = {
    heading: "The hotest krafters",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
    buttonText: "Ver tudo",
    Img: flame,
  };
  const cardData = [
    {
      id: "0",
      heading: "Lorem Ipsom 1",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      views: "12",
      Image: "",
      islike: true,
    },
    {
      id: "1",
      heading: "Lorem Ipsom 2 ",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      views: "12",
      Image: "",
      islike: false,
    },
  ];
  return (
    <div className="ImageDetails_area w-100 mx-3">
      <div
        className="d-flex flex-wrap justify-content-evenly"
        style={{ height: "fit-content" }}
      >
        <div className="ImageDetails_outer_container  col-lg-9 ">
          <div style={{ objectFit: "contain" }} className="">
            <Image style={{ maxWidth: "100%" }} src={ImageDetailsBanner} />
          </div>
          <div className="d-flex-col justify-content-between">
            {" "}
            <div className="d-flex justify-content-between my-3 pe-3">
              <Heading1
                size="24px"
                SMsize="24px"
                color="#000000"
                weight="700"
                JFcontent="flex-start"
                SMJFcontent="flex-start"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </Heading1>
              <div className="d-flex">
                <div
                  className="me-2"
                  style={{
                    border: "1px solid #DDDDDD",
                    borderRadius: "50px",
                    width: "64px",
                    height: "64px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={send} width="23px" />
                </div>
                <div
                  style={{
                    border: "1px solid #DDDDDD",
                    borderRadius: "50px",
                    width: "64px",
                    height: "64px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image src={heart} width="23px" />
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <Image src={heart} className="me-2" />

              <div className="d-flex-col">
                <Heading1
                  color="black"
                  weight="700"
                  SMsize="20px"
                  size="16px"
                  style={{ padding: "none" }}
                >
                  285
                </Heading1>
                <Heading1
                  SMsize="16px"
                  size="16px"
                  color="#999999"
                  weight="700"
                >
                  Favorites
                </Heading1>
              </div>
              <Image src={view} width="26px" className="ms-4 me-2" />

              <div className="d-flex-col">
                <Heading1
                  color="black"
                  weight="700"
                  SMsize="20px"
                  size="16px"
                  style={{ padding: "none" }}
                >
                  285
                </Heading1>
                <Heading1
                  SMsize="16px"
                  size="16px"
                  color="#999999"
                  weight="700"
                >
                  Views
                </Heading1>
              </div>
            </div>
            <Heading1
              size="16px"
              SMsize="20px"
              weight="500"
              color="#000000"
              className="px-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit ut aliquam, purus sit amet
              luctus venenatis. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </Heading1>
            {/* <NFTsRow
              cardData={cardData}
              fixdata={fixdata}
              ifImageDetailPage={true}
            />
            <NFTsRow
              cardData={cardData}
              fixdata={fixdata2}
              ifImageDetailPage={true}
            /> */}
          </div>
        </div>
        <div
          className="col-lg-3  col-md-12 col-sm-12  px-3 Comments"
          style={{ background: "#FFFFFF" }}
        >
          <div className="d-flex align-items-center mx-3">
            <div
              style={{
                width: "46px",
                height: "46px",
                backgroundColor: "#C4C4C4",
                borderRadius: "50px",
              }}
            ></div>
            <div className="d-flex-col  ms-3 ">
              {" "}
              <Heading1
                size="16px"
                SMsize="20px"
                color="#2A1971"
                weight="700 "
                JFcontent="flex-start"
                SMFcontent="flex-start"
              >
                @loremipsum
              </Heading1>
              <Heading1
                size="12px"
                color="#999999"
                SMsize="16px"
                weight="700"
                JFcontent="flex-start"
                SMJFcontent="flex-start"
              >
                Artist
              </Heading1>
            </div>
          </div>

          <ButtonStyled
            className="my-2"
            backgroundColor="#5D34FF"
            border="none"
            height="48px"
            borderRadius="4px"
            color="#FFFFFF"
            size="18px"
            weight="700"
            style={{
              maxWidth: "484px",
              width: "100%",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // alignSelf: "center",
            }}
          >
            <div className="d-flex  justify-content-center">
              Follow Artist <Image src={plus} className="ms-2" />
            </div>
          </ButtonStyled>

          <div className="my-2 mb-4" style={{ width: "228px" }}>
            <Heading1
              style={{ display: "inline" }}
              size="12px"
              SMsize="18px"
              weight="500"
              color="#2A1971"
            >
              <Heading1
                size="12px"
                SMsize="18px"
                weight="700"
                color="#2A1971"
                style={{ display: "inline" }}
              >
                @loremipsum:
              </Heading1>{" "}
              nicolas está namorando com lucas pontes nicolas está namorando com
              lucas pontes
            </Heading1>
          </div>
          <div className="my-2 mb-4" style={{ width: "228px" }}>
            <Heading1
              style={{ display: "inline" }}
              SMsize="18px"
              size="12px"
              weight="500"
              color="#2A1971"
            >
              <Heading1
                size="12px"
                weight="700"
                SMsize="18px"
                color="#2A1971"
                style={{ display: "inline" }}
              >
                @loremipsum:
              </Heading1>{" "}
              nicolas está namorando com lucas pontes nicolas está namorando com
              lucas pontes
            </Heading1>
          </div>
          <div className="my-2 mb-4" style={{ width: "228px" }}>
            <Heading1
              style={{ display: "inline" }}
              SMsize="18px"
              size="12px"
              weight="500"
              color="#2A1971"
            >
              <Heading1
                size="12px"
                SMsize="18px"
                weight="700"
                color="#2A1971"
                style={{ display: "inline" }}
              >
                @loremipsum:
              </Heading1>{" "}
              nicolas está namorando com lucas pontes nicolas está namorando com
              lucas pontes
            </Heading1>
          </div>
          <div className="my-2 mb-4" style={{ width: "228px" }}>
            <Heading1
              style={{ display: "inline" }}
              size="12px"
              weight="500"
              SMsize="18px"
              color="#2A1971"
            >
              <Heading1
                size="12px"
                weight="700"
                SMsize="18px"
                color="#2A1971"
                style={{ display: "inline" }}
              >
                @loremipsum:
              </Heading1>{" "}
              nicolas está namorando com lucas pontes nicolas está namorando com
              lucas pontes
            </Heading1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ImageDetails;
