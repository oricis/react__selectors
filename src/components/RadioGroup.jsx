import React from 'react';
import RadioBox from '../components/RadioBox.jsx';
import './RadioGroup.css';

function RadioGroup(props)
{
    const selectedRadioId = props.value;

    const radioBoxes = (props.data)
        ? props.data.map((optionObject, index) => {

            const label = optionObject[props.propertyName];
            const value = optionObject.key;
            const radioId = (optionObject.id) ? optionObject.id : value;
            const checked = (selectedRadioId === radioId)

            return (
                <RadioBox
                    key={index}
                    label={label}
                    groupName={props.groupName}
                    radioId={radioId}
                    value={value}
                    checked={checked}
                    labelPosition={props.labelPosition}
                    onChange={() => { props.onChange(radioId) }}>
                </RadioBox>
            );
        })
        : '';

    return (
        <div className={props.className} role="group">
            {radioBoxes}
        </div>
    );
}

export default RadioGroup;
