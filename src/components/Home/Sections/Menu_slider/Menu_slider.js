import React from 'react'
import './Menu_slider.css'
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from "react-router";
import Carousel from 'react-multi-carousel';
import Heading1 from '../../../../reusableComponents/Headings/Heading1'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
const menu_cards = [
  {
    id: 1,
    image: img1,
    title: 'Music'
  },
  {
    id: 2,
    image: img2,
    title: 'Art'
  },
  {
    id: 3,
    image: img3,
    title: 'Sport'
  },
  {
    id: 4,
    image: img4,
    title: 'Games'
  },

  {
    id: 5,
    image: img5,
    title: 'Card'
  },

  {
    id: 6,
    image: img3,
    title: 'NFTs'
  },

  {
    id: 7,
    image: img4,
    title: 'NFTs'
  },

  {
    id: 8,
    image: img2,
    title: 'NFTs'
  },
];

function Menu_slider(props) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };
  const history = useHistory();
  return (

    <div class='container-fluid '>
      <div class="card_main_container m-0">
        <div class='row color'>
          <Carousel responsive={responsive}
            infinite={true}
            removeArrowOnDeviceType={["mobile"]}
          >
            {
              menu_cards.map((data) => {
                return (
                  <div className=' mx-2 slider_div slide-fwd'
                    onClick={() => {
                      if (data.title == "Music") {
                        props.setCategory("getItemsMusic")
                        props.setLargeimageToggle(false)
                      }
                      else if (data.title == "Art") {
                        props.setCategory("getItemsArt")
                        props.setLargeimageToggle(false)
                      }
                      else if (data.title == "Sport") {
                        props.setCategory("getItemsSport")
                        props.setLargeimageToggle(false)

                      }
                      else if (data.title == "Games") {
                        props.setCategory("getItemsGames")
                        props.setLargeimageToggle(false)

                      }
                      else if (data.title == "Card") {
                        props.setCategory("getItemsCard")
                        props.setLargeimageToggle(false)

                      }
                      else {
                        props.setCategory("getItemsAll")
                        props.setLargeimageToggle(false)

                      }

                    }} >
                    <Heading1
                      size="22px"
                      SMsize="18px"
                      weight="700"
                      marginBottom="0px"
                      SMmarginBottom="0px"
                      color="white"

                      JFcontent='left'
                      className=''

                      style={{ position: "absolute", marginLeft: "20px", marginTop: "10px" }}
                    >
                      {data.title}
                    </Heading1> <img className='slider_img' src={data.image} /></div>
                );
              })
            }



          </Carousel>
        </div>

      </div>
    </div>
  );
}



export default Menu_slider
