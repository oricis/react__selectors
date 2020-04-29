import React from 'react';


export const getOptions = (data, labelName) =>
{
    const label = (labelName) ? labelName : 'label'

    return (data)
        ? data.map((optionObject, index) => {
            const disable = (optionObject.disable) ? true : false;
            const optionLabel = optionObject[label];
            const optionValue = optionObject.key;

            // eslint-disable-next-line react/react-in-jsx-scope
            return <option
                key={index}
                value={optionValue}
                disabled={disable}>
                {optionLabel}
            </option>
        })
        : '';
}
