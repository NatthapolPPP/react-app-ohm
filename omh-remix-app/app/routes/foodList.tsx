import { useState } from "react";
import { foodsList } from "./data";

export default function favorite() {
    const [index,setIndex] = useState(0);

    function handleClick() {
        if(index == 5 )
            setIndex(0)

        else setIndex(index + 1 );
    }
    function handleClickB() {
        if(index == 0 )
            setIndex(5)
        else setIndex(index - 1 );
    }

    let foods = foodsList[index];
    return(
     <>
     <button onClick={handleClick}>
        Next
    </button>
    <button onClick={handleClickB}>
        Back
    </button>
    <h2>
        <i>{foods.food}</i>by{foods.name}
    </h2>
    <h3>
        ({index + 1} of {foods.food})
    </h3>
    <img 
        src={foods.url}
        alt={foods.alt}
    />
    <p>
        {foods.description}
    </p>
     </>   
    );
}