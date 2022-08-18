
import { width } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import tutorial1 from "../../Assets/tutorial1.jpeg";
import tutorial2 from "../../Assets/tutorial2.jpeg";
import tutorial3 from "../../Assets/tutorial3.jpeg";
import tutorial4 from "../../Assets/tutorial4.jpeg";
import { Fade } from "@mui/material";
function Item(props) {
  return (
    <Paper style={{ backgroundColor: "transparent", height: "499px" }}>
      <div className=" " style={{ height: "499px" }}>
        <div style={{ height: "499px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
         }}>
          <img
            src={props.item.img_source}
            style={{
              objectFit: "cover",
              width: "490px",
              height: "499px",
              borderRadius: "10px 10px 0px 0px",
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          />
        </div>
      </div>
    </Paper>
  );
}

function Home_Slider(props) {
  var items = [
    {
      img_source: tutorial1,
    },
    {
      img_source: tutorial2,
    },
    {
      img_source: tutorial3,
    },
    {
      img_source: tutorial4,
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      stopAutoPlayOnHover={true}
      swipe={true}
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

}

export default Home_Slider;
