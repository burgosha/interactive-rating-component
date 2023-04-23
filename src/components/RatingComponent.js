import React from "react";
import { useState } from "react";
import IconStar from "../images/icon-star.svg"
import "../stylesheets/RatingComponent.css";
import RatingNumbers from "./RatingNumbers";
function RatingComponent(props) {
    const [rating, setRating] = useState(0);
    
    return(
        <div className="main-component">
            <div className="start-logo"><img src={IconStar} alt="Star Icon"/></div>
            <p className="question">How did we do?</p>
            <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <RatingNumbers />
            <button className="btn-submit">Submit</button>
        </div>
    )
}
export default RatingComponent;