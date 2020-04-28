import React from 'react';


function Radio(props)
{
    return <input type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange} />;
}

export default Radio;
