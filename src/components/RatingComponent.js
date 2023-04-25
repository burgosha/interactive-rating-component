import React from "react";
import { useState } from "react";
import IconStar from "../images/icon-star.svg"
import "../stylesheets/RatingComponent.css";

function RatingComponent(props) {
    const [rating, setRating] = useState(0);

    return(
        <div className="main-component">
            <div className="start-logo"><img src={IconStar} alt="Star Icon"/></div>
            <p className="question">How did we do?</p>
            <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating-numbers">
                {[...Array(5)].map((number, index) => {
                    index += 1;
                    return(
                        <button
                            type="button"
                            key={index}
                            className={index === rating ? "number-on" : "number"}
                            onClick={() => setRating(index)}
                        >
                            {index}
                        </button>
                    )
                })}
            </div>
            <button className="btn-submit">Submit</button>
        </div>
    )
}
export default RatingComponent;