import React from 'react';
import Label from './simple-components/Label.jsx';
import Radio from './simple-components/Radio.jsx';


function RadioBox(props)
{
    if (!props.value) {
        return '';
    }

    const labelElement = (
        <Label
            relatedElementId={props.radioId}
            text={props.label}>
        </Label>
    );
    const radioElement = (
        <Radio
            id={props.radioId}
            name={props.groupName}
            value={props.value}
            checked={props.checked}
            onChange={props.onChange}>
        </Radio>);

    return (props.labelPosition === 'start')

        ? <div className="radio" key={props.value}>
            {labelElement}
            {radioElement}
        </div>

        : <div className="radio" key={props.value}>
            {radioElement}
            {labelElement}
        </div>
}

export default RadioBox;
