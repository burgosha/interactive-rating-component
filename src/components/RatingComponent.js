import React from "react";
import IconStar from "../images/icon-star.svg"
import "../stylesheets/RatingComponent.css";
function RatingComponent(props) {
    return(
        <div className="main-component">
            <div className="start-logo"><img src={IconStar} alt="Star Icon"/></div>
            <p className="question">How did we do?</p>
            <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating-numbers">
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="number">3</div>
                <div className="number">4</div>
                <div className="number">5</div>
            </div>
            <button className="btn-submit">Submit</button>
        </div>
    )
}
export default RatingComponent;