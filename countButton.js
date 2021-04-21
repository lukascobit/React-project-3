import React, {useState, useEffect} from 'react';
import './countButton.css'

const CountButton = (props) =>{

    let [counter, setCounter ] = useState(0)

    const handleClick = () =>{
        setCounter(counter+ props.addNum)
    }

    useEffect(()=>{
        if(counter === 11){
          setCounter(0)
        }
    },[counter])

    return (
        <div>
            <button onClick={handleClick}>+{props.addNum}</button>
            <div>{counter}</div>
        </div>
    )
}

export default CountButton