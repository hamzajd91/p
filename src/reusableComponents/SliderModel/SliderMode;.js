import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";
import Home_Slider from "../../components/Home_Slider/Home_Slider";


function SliderMode() {
    const [homeslider, sethomeslider] = useState(true);


    return (
        <div className='w-100'>
            {homeslider && (
                <div className='sliderDiv'>
                    <div className="homeslider" style={{}}>
                        <Home_Slider />

                        <FontAwesomeIcon icon={faTimes} className="slider_close"
                            onClick={(e) => {
                                sethomeslider(false);
                            }}
                        />

                    </div>
                </div>
            )}
        </div>
    )
}

export default SliderMode;
