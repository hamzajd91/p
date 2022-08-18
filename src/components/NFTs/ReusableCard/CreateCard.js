import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router";
import createImg from "../../../Assets/create_png.png";
import { borderRadius } from "@mui/system";
function CreateCard(props) {
  const { data } = props;
  const history = useHistory();
  const [cardheight, setcardheight] = useState();

  return (
    <>
      {props.createtoggle == 1 ? (
        <>
          {" "}
          <div className="p-0 py-1  FlexableCard_outer ">
            <div
              className=" mx-1 mt-2"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                verticalAlign: "middle",
                alignItems: "center",
                minHeight: "330px",
                width: "273px",
                border: " 1px dashed #999999",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image
                className="Createicon_hover"
                src={createImg}
                style={{ width: "76px", height: "76px",cursor:"pointer" }}
                onClick={() => {
                  history.push({
                    pathname: "./createSingleNft",
                  });
                }}
              />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "50px",
                }}
              >
                Create your very own NFT and ADD cool properties to it.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="p-0 py-1  FlexableCard_outer ">
            <div
              className=" mx-1 "
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                verticalAlign: "middle",
                alignItems: "center",
                minHeight: "272px",
                width: "273px",
                border: " 1px dashed #999999",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <Image
                className="Createicon_hover"
                src={createImg}
                style={{ width: "76px", height: "76px",cursor:"pointer" }}
                onClick={() => {
                  history.push({
                    pathname: "./createproject",
                  });
                }}
              />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  marginTop: "50px",
                }}
              >
                Create your very own collection and add your own NFTs in it
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CreateCard;
