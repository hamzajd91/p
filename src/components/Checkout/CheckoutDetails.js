import { React, useEffect, useState } from "react";
import "./Checkout.css";
import { Moralis } from "moralis";
import image1 from "./assets/checkoutimg.png";
import Heading1 from "../../reusableComponents/Headings/Heading1";
import { CssTextField } from "../NFTs/createSingleNft";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



Moralis.initialize("y3QbvGnSgB5rdM1CjzQxQ8Kp0NHcymlW2OoyxPgc");
Moralis.serverURL = "https://zlb9dsuvmip0.usemoralis.com:2053/server";
function CheckoutDetails({ carddescription }) {
  const [price, setprice] = useState()
  useEffect(() => {
    data()

  }, [])
  async function data() {
    const web3 = await Moralis.Web3.enableWeb3();
    setprice(web3.utils.fromWei(carddescription.price))

  }
  return (
    <div class="d-flex w-100 row  mx-auto CD-main ">
      <div className='d-flex w-100 p-0' style={{paddingInline:"2px !important"}}>
        <div className="CD-image-div col-md-3  ">
          <img
            className="CD-checkoutimg"
            src={carddescription.nft}
            style={{ height: "80px" }}
          />
        </div>
        <div className="CD-details-div col-md-9  ">
          <div className="d-flex flex-column w-100 ">
            <div className="d-flex row justify-content-start">
              <div className="CD-details-div ">
                
              </div>
              <div>
                {/* <Heading1
                size="15px"
                SMsize="15px"
                weight="500"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#6f6f6f"
                JFcontent="start"
                className="w-auto"
                style={{ marginTop: "10px" }}
              >
                {carddescription.description}
              </Heading1> */}

                {/* <Heading1
                                size="15px"
                                SMsize="15"
                                weight="500"
                                marginBottom="0px"
                                SMmarginBottom="0px"
                                color="black"
                                JFcontent="start"


                                className='w-auto'

                                style={{ marginTop: '5px' }}

                            >
                                AAnlog and digital mixed media
                            </Heading1> */}
              </div>
            </div>

            <div className="CD-details-div2">
              <div className="d-flex row w-100">
                <div className="P-detailslower-div p-0">
                  <div className="P-detailslower-left" style={{ marginLeft: "-0.6rem", justifyContent:"flex-start", marginTop:"-1.4rem" }}>
                    <Heading1
                      size="18px"
                      SMsize="15"
                      weight="350"
                      marginBottom="0px"
                      SMmarginBottom="0px"
                      color="#6f6f6f"
                      JFcontent="start"
                      className="w-auto"
                      style={{ marginTop: "20px" }}
                    >
                      @{carddescription.name}
                    </Heading1>

                    <Heading1
                      size="10px"
                      SMsize="10"
                      weight="500"
                      marginBottom="0px"
                      SMmarginBottom="0px"
                      color="#6f6f6f"
                      JFcontent="start"
                      className="w-auto"
                      style={{ marginTop: "0px" }}
                    >
                                          {carddescription.description}

                    </Heading1>
                  </div>

                  <div className="P-detailslower-right" style={{justifyContent:"flex-start"}}>
                    <div className="d2">
                      <Heading1
                        size="18px"
                        SMsize="15"
                        weight="700"
                        marginBottom="0px"
                        SMmarginBottom="0px"
                        color="black"
                        JFcontent="start"
                        className="w-auto"
                        style={{}}
                      ></Heading1>
                    </div>
                    <div className="d2 d-flex flex-column">
                      <Heading1
                        size="15px"
                        SMsize="15"
                        weight="500"
                        marginBottom="0px"
                        SMmarginBottom="0px"
                        color="black"
                        JFcontent="end"
                        className="w-auto"
                        style={{ marginRight: "10px" }}
                      >
                        {price} ETH
                      </Heading1>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="checkout-line" style={{ marginTop: "20px" }} />
      <div className="d-flex flex-column  w-100 p-0">

        <div className="P-detailslower-div flex-row p-0">
          <div className="P-detailslower-left justify-content-start">
            <Heading1
              size="18px"
              SMsize="15"
              weight="450"
              marginBottom="-2rem"
              SMmarginBottom="-2rem"
              color="#6f6f6f"
              JFcontent="start"
              className="w-auto"
              style={{ marginTop: "0px", paddingLeft: "27px" }}
            >
              Quantity

              <Heading1
                size="15px"
                SMsize="13"
                weight="450"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="#6f6f6f"
                JFcontent="center"
                className="w-auto"
                style={{ marginTop: "4px", paddingLeft: "2px" }}
              >
                (10)
              </Heading1>
            </Heading1>

          </div>

          <div className="P-detailslower-right">

            <div className="d2 quantity_split" >

              <CssTextField
                id="outlined-size-number"
                rowsMax="4"
                variant="outlined"
                type='Number'

                style={{ margin: "0px", marginBottom: "0px" }}

              />

            </div>
          </div>
        </div>

        <div className="P-detailslower-div p-0" style={{ marginBlock:"13px"}}>
          <div className="P-detailslower-left justify-content-start" >
            <Heading1
              size="18px"
              SMsize="15"
              weight="700"
              marginBottom="0px"
              SMmarginBottom="0px"
              color="black"
              JFcontent="start"
              className="w-auto"
              style={{ marginTop: "0px", paddingLeft: "27px"}}
            >
              Total
            </Heading1>
          </div>

          <div className="P-detailslower-right">
            <div className="d2">
              <Heading1
                size="18px"
                SMsize="15"
                weight="700"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="black"
                JFcontent="start"
                className="w-auto"
                style={{ marginBottom: "0px" }}
              ></Heading1>
            </div>
            <div className="d2">
              <Heading1
                size="15px"
                SMsize="15"
                weight="500"
                marginBottom="0px"
                SMmarginBottom="0px"
                color="black"
                JFcontent="start"
                className="w-auto"
                style={{ marginTop: "0px" }}
              >
                {price} ETH
              </Heading1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
