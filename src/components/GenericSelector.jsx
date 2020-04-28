import React from 'react';
import { getOptions } from '../helpers/UI.js';
import './GenericSelector.css';


class GenericSelector extends React.Component
{

    render()
    {
        const options = getOptions(this.props.data, 'name');

        return (
            <select className="selector generic-selector"
                value={this.props.value}
                onChange={(ev) => { this.props.onChange(ev.target.value) }}>

                {options}
            </select>
        );
    }
}

// React usa el atributo "value" en la etiqueta <select> en lugar del atributo
// "selected" en un <option>

export default GenericSelector;
