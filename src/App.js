import React from 'react';
import logo from './logo.svg';
import { Trans } from '@lingui/macro';
import LangSelector from './components/LangSelector.jsx';
import GenericSelector from './components/GenericSelector.jsx';
import RadioGroup from './components/RadioGroup.jsx';
import { langCodes, people } from './data/options.js';
import { getDefaultValue, getValueFor } from './helpers/Data.js';
import './App.css';

/*function Trans(props)
{
    const { ...other } = props;

    return <span {...other} />
}*/

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            person: getDefaultValue(people, 'name'),
            lang: 'EN'
        };
    }

    render()
    {
        // HACK:
        console.log(
            'render()', 'LANG: ' + this.state.lang,
            'Person: ' + this.state.person);

        const activeLang = getValueFor(langCodes, 'label', this.state.lang);
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
            <RadioGroup value={selectedPersonKey}
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
                <p className="info">
                    <Trans>
                        The loading language is <strong>{activeLang}</strong>.
                    </Trans>
                </p>

                {peopleSelector}
                <hr className="w-100" />

                <h3 className="xxx">
                    <Trans>Tests radios</Trans>
                </h3>
                {radioGroup}
            </header>
        );
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
