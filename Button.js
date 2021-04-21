import React, { Children } from 'react';

const Button = (props) =>{

    return(
        <div style={{color:"blue"}}>
            {props.children}
        </div>
    )
}

export default Button