import React from "react";
function RatingComponent(props) {
    return(
        <div className="main-component">
            <div className="start-logo"></div>
            <p className="question">How did we do?</p>
            <p className="description">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className="rating-numbers">
                <div className="numer">1</div>
                <div className="numer">2</div>
                <div className="numer">3</div>
                <div className="numer">4</div>
                <div className="numer">5</div>
            </div>
            <button className="btn-submit">Submit</button>
        </div>
    )
}
export default RatingComponent;