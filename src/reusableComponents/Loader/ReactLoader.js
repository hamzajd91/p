import React, { Component } from 'react'
import Loader from "react-loader-spinner";

export default class ReactLoader extends Component {
    render() {
        return (
            <div className="vh-100 w-100 d-flex justify-content-center align-content-center align-items-center">
                <Loader
                className="w-100 d-flex justify-content-center"
                    type="ThreeDots"
                    color="#95399E"
                    height={85}
                    width={85}
                    secondaryColor="#7240B1"   
                />

            </div>

        )
    }
}
