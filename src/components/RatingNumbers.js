import React from "react";
function RatingNumbers ({handleClickNumber , rating}) {
    return(
    <div className="rating-numbers">
        {[...Array(5)].map((number, index) => {
            index += 1;
            return(
                <button
                    type="button"
                    key={index}
                    className={index === rating ? "number-on" : "number"}
                    onClick={handleClickNumber(index)}
                >
                    {index}
                </button>
            )
        })}
    </div>
    );
}
export default RatingNumbers;