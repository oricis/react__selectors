import React from 'react';


function Radio(props)
{
    return <input type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.selected}
        onChange={props.onChange()} />;
}

export default Radio;
