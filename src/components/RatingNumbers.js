import React from "react";
import { useState } from "react";
function RatingNumbers (props) {
    const [rating, setRating] = useState(0);
    return(
    <div className="rating-numbers">
        {[...Array(5)].map((number, index) => {
            index += 1;
            return(
                <button
                    type="button"
                    key={index}
                    className={index == rating ? "number-on" : "number"}
                    onClick={()=>setRating(index)}
                >
                    {index}
                </button>
            )
        })}
    </div>
    );
}
export default RatingNumbers;