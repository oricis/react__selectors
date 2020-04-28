import React from 'react';


function Label(props)
{
    return (
        <label htmlFor={props.relatedElementId}>
            {props.text}
        </label>
    );
}

export default Label;
