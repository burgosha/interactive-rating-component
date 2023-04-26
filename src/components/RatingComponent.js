import React from "react";
import { useState } from "react";
import IconStar from "../images/icon-star.svg";
import ThankYou from "../images/illustration-thank-you.svg";
import "../stylesheets/RatingComponent.css";
import "animate.css";

function RatingComponent(props) {
    const [state, setState] = useState(0);

    const [rating, setRating] = useState(0);

    const handleClick = submit => {
        setState(rating);
    }
    
    if(state === 0) {
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
                <button className="btn-submit" onClick={handleClick}>Submit</button>
            </div>
        )
    } else {
        return(
            <div className="main-component results">
                <div><img className="results-image animate__animated animate__bounceInRight animate__faster" src={ThankYou} alt="Thank You"/></div>
                <div className="results-info animate__animated animate__bounceInRight animate__fast">You selected {state} out of 5</div>
                <p className="thank-you animate__animated animate__bounceInRight">Thank you!</p>
                <p className="thank-you-appreciation animate__animated animate__bounceInRight">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        )
    }
}
export default RatingComponent;