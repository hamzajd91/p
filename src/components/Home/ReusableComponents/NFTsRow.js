import React, { useState } from "react";
import { faFire, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading1 from "../../../reusableComponents/Headings/Heading1";
import NftCardHome from "../Sections/NFTs/NftCardHome";
import { useHistory } from "react-router";
import NftCard from "../Sections/NFTs/NftCard";
function NFTsRow(props) {
  const history = useHistory();
  const { cardData, cardData1, cardData2, fixdata } = props;

  const renderItem = cardData.map((card, index) => (
    <NftCard
      carddescription={card}
      owners={cardData1[index]}
      artists={cardData2[index]}
      ifImageDetailPage={props.ifImageDetailPage}
    />
  ));
  return (
    <div className="w-100 px-4 py-3 py-md-4">
      <div className="py-2 py-lg-3">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-0">
            <div className="mx-1">
              <div className="d-flex px-1 justify-content-start flex-column  mb-2 mb-md-3 mb-lg-4 pt-2">
                <div className="d-flex align-items-baseline mb-1">
                  <Heading1
                    color="inherit"
                    size="25px"
                    weight="bolder"
                    SMsize="18px"
                    JFcontent="flex-start"
                    className="w-auto me-3 mb-3"
                  >
                    {` ${fixdata.heading} `}
                  </Heading1>

                  <img src={` ${fixdata.Img} `} />
                </div>
                <Heading1
                  color="inherit"
                  size="16px"
                  weight="600"
                  SMsize="14px"
                  JFcontent="flex-start"
                  lineHeight="24px"
                  className="w-auto me-3 pe-3 mb-4 mb-lg-5"
                >
                  {` ${fixdata.text} `}
                </Heading1>
                <div
                  className="Nft_Starter_button d-flex justify-content-center py-1 py-lg-2  text_alteration"
                  onClick={() => {
                    history.push({
                      pathname: "./MusicTheme",
                    });
                  }}
                >
                  <div className="buttoon me-2">
                    {" "}
                    {` ${fixdata.buttonText} `}
                  </div>
                  <FontAwesomeIcon
                    icon={faForward}
                    className="float-end align-self-center d-flex"
                  />
                </div>
              </div>
            </div>
          </div>
          {renderItem}
        </div>
      </div>
    </div>
  );
}

export default NFTsRow;
