import React from 'react';
import logo from './logo.svg';
import LangSelector from './components/LangSelector.jsx';
import GenericSelector from './components/GenericSelector.jsx';
import RadioGroup from './components/RadioGroup.jsx';
import { langCodes, people } from './data/options.js';
import './App.css';

function Trans(props)
{
    const { ...other } = props;

    return <span {...other} />
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            person: this.getDefaultValue(people, 'name'),
            lang: 'EN'
        };
    }

    render()
    {
        console.log('render()', 'LANG: '
            + this.state.lang, 'Person: '
            + this.state.person); // HACK:

        const selectedPersonKey = this.state.person.toLowerCase();

        const langSelector = (
            <LangSelector value={this.state.lang}
                data={langCodes}
                onChange={(lang) => { this.onChangeSelectedLang(lang) }}>
            </LangSelector>
        );

        const peopleSelector = (
            <GenericSelector value={selectedPersonKey}
                data={people}
                label="name"
                onChange={(lang) => { this.onChangeSelectedData(lang) }}>
            </GenericSelector>
        );

        const radioGroup = (
            <RadioGroup value={selectedPersonKey} // TODO: revisar entrega
                className="option-group form-group form-radio"
                data={people}
                groupName="people"
                labelPosition="end" // end | start
                propertyName="name"
                onChange={(radioId) => { this.onSelectedRadio(radioId) }}>
            </RadioGroup>
        );

        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    <Trans>Hello World</Trans>
                </h1>
                <h2>
                    <Trans>
                        This is a <a href="https://lingui.js.org/"
                        rel="noopener noreferrer"
                        target="_blank">
                        @Lingui</a> translation
                    </Trans>
                </h2>

                <hr className="w-100" />

                <h3 className="xxx">
                    <Trans>Tests selects</Trans>
                </h3>

                {langSelector}
                {peopleSelector}
                <hr className="w-100" />

                <h3 className="xxx">
                    <Trans>Tests radios</Trans>
                </h3>
                {radioGroup}
            </header>
        );
    }


    getDefaultValue(arrObjects, propertyName)
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

    onSelectedRadio = (radioId) =>
    {
        console.log('onSelectedRadio() -> ' + radioId);

        if (this.state && radioId !== this.state.person) {
            this.setState({
                person: radioId
            });
        }
    }

    onChangeSelectedData = (value) =>
    {
        console.log('onChangeSelectedData() -> ' + value);

        if (this.state && value !== this.state.person) {
            this.setState({
                person: value
            });
        }
    }

    onChangeSelectedLang = (value) =>
    {
        console.log('onChangeSelectedLang() -> ' + value);

        if (this.state && value !== this.state.lang) {
            this.setState({
                lang: value
            });
        }
    }
}

export default App;
