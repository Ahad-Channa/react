import React ,{ useState } from "react";



function Count(){
    const [count, setCount] = useState(0)

    function dec(){
        if(count >= 1)
        setCount(count - 1 );
    }

    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={() => setCount(count + 1)}> Count up, {count}</button>
        <button onClick={dec} > Count Down</button>
        </>
    );
}

export default Count;