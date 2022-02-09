import React from "react";

import star from "../assets/image/big-star.svg";

const BackgroundImg =  ({rightOleft}) =>{
        return (
          <div className={`${rightOleft ? "imgContainer" : "imgContainer2"} x`}>
            <img src={star} alt="img" />
          </div>
        );
}


export default BackgroundImg;
