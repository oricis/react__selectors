

export const getDefaultValue = (arrObjects, propertyName) =>
{
    let result = '';
    for (const index in arrObjects) {
        const object = arrObjects[index]

        if (object.default) {
            result = object[propertyName];
        }
    }

    return result;
}

export const getValueFor = (arrObjects, propertyName, keyValue) =>
{
    let result = '';
    for (const index in arrObjects) {
        const object = arrObjects[index]

        if (object.key) {
            result = (object.key === keyValue)
                ? object[propertyName]
                : result;
        }
    }

    return result;
}
