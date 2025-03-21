import React ,{ useState } from "react";


function Color(props){

    const [color, setColor] = useState( props.color||'red')

    return (
        <>
         <h1 style={{color:color}}>Color is {color}</h1>
         <button onClick={() => setColor("blue")}>make it blur </button>
        </>
    );

}

export default Color;
