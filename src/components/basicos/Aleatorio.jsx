import React from "react"

export default (props) => {
    const max = props.max;
    const min = props.min;
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    
    const rndInt = randomIntFromInterval(min, max);

    return(
        <h1>
            {rndInt}
        </h1>
    )

}