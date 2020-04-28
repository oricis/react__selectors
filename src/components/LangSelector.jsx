import React from 'react';
import { getOptions } from '../helpers/UI.js';
import './LangSelector.css';


function LangSelector(props)
{
    const options = getOptions(props.data);

    return (
        <select className="selector"
            value={props.value}
            onChange={(ev) => { props.onChange(ev.target.value)}}>

            {options}
        </select>
    );
}

// React usa el atributo "value" en la etiqueta <select> en lugar del atributo
// "selected" en un <option>

export default LangSelector;
